import { Container, Typography } from "@mui/material";
import Header from "./components/AppHeader";
import NewsFeed from "./components/NewsFeed";
import PageButton from "./components/PageButton";
import { styled } from "@mui/material/styles";
import { useFetchArticles } from "./useFetchArticles";

const Footer = styled("div")(() => ({
  marginBlock: "27px",
  display: "flex",
  justifyContent: "space-between",
}));

function App() {
  const {
    articles,
    handleSearchChange,
    handleCategoryChange,
    FetchAndUpdateArticles,
    loading,
    category,
    error,
    pageNumber,
    PAGE_SIZE,
  } = useFetchArticles();

  const handleOnNextClick = () => {
    pageNumber.current += 1;
    FetchAndUpdateArticles();
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleOnPreviousClick = () => {
    pageNumber.current -= 1;
    FetchAndUpdateArticles();
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      {error.length === 0 ? (
        <NewsFeed
          articles={articles}
          loading={loading}
          category={category}
          PAGE_SIZE={PAGE_SIZE}
        />
      ) : (
        <Typography color="error" fontSize={25} align="center">
          {error}
        </Typography>
      )}
      <Footer>
        <PageButton
          variant="outlined"
          disabled={loading || pageNumber.current === 1}
          onClick={handleOnPreviousClick}
        >
          Previous
        </PageButton>
        <PageButton
          variant="outlined"
          disabled={loading || articles.length < PAGE_SIZE}
          onClick={handleOnNextClick}
        >
          Next
        </PageButton>
      </Footer>
    </Container>
  );
}

export default App;
