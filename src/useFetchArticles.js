import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

const PAGE_SIZE = 6;

export function useFetchArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("general");
  const pageNumber = useRef(1);
  const queryValue = useRef("");

  async function loadData(currentCatgeory) {
    // const response = await fetch(
    //   `https://newsapi.org/v2/top-headlines?category=${currentCatgeory}&country=us&page=${
    //     pageNumber.current
    //   }&q=${queryValue.current}&pageSize=${PAGE_SIZE}&apiKey=${
    //     import.meta.env.VITE_NEWS_API_KEY
    //   }`
    // );

    const response = await fetch("/articles.json");
    const data = await response.json();

    if (data.status === "error") {
      throw new Error("An error has occurred.");
    }

    let articles = data.articles.filter(
      (article) => article.page === pageNumber.current
    );

    return articles;
  }

  const FetchAndUpdateArticles = (currentCategory) => {
    setLoading(true);
    setError("");
    loadData(currentCategory ?? category)
      .then((data) => {
        setArticles(data);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);

        setError(errorMessage.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const debounceLoadedData = debounce(() => {
    FetchAndUpdateArticles();
  }, 500);

  useEffect(() => {
    FetchAndUpdateArticles();
  }, []);

  const handleSearchChange = (newQuery) => {
    pageNumber.current = 1;
    queryValue.current = newQuery;
    debounceLoadedData();
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    pageNumber.current = 1;
    FetchAndUpdateArticles(event.target.value);
  };

  return {
    articles,
    handleSearchChange,
    handleCategoryChange,
    FetchAndUpdateArticles,
    loading,
    error,
    category,
    pageNumber,
    PAGE_SIZE,
  };
}
