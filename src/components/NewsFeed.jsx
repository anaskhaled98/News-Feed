import Grid from "@mui/material/Grid2";
import NewsArticle from "./NewsArticle";
import { Box, Typography } from "@mui/material";
import LoadingArticles from "./LoadingArticles";

function NewsFeed(props) {
  const { articles, loading, PAGE_SIZE, category } = props;

  if (!loading && !articles?.length) {
    return (
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        No articles found.
      </Typography>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={"20px"}>
        {loading &&
          [...Array(PAGE_SIZE)].map((_, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={1 + index}>
              <LoadingArticles key={index} />
            </Grid>
          ))}
        {!loading &&
          articles.map((article) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={JSON.stringify(article)}>
              <NewsArticle {...article} category={category}></NewsArticle>{" "}
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default NewsFeed;
