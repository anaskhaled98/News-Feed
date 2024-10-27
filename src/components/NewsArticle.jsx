import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledCard } from "./StyledCard";
import { styled } from "@mui/material";

function NewsArticle(props) {
  const {
    title,
    urlToImage: image,
    author,
    publishedAt,
    category,
    url,
  } = props;

  const Link = styled("a")(() => ({
    textDecoration: "none",
    color: "black",
  }));

  return (
    <Link target="_blank" href={url}>
      <CardActionArea
        sx={{
          borderRadius: 3,
        }}
      >
        <StyledCard
          sx={{
            borderRadius: 3,
            margin: 0,
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              {image && (
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt="Sample article"
                />
              )}
            </Box>
            <Typography
              variant="body2"
              fontSize={14}
              sx={{
                color: "#4b6bfb",
                backgroundColor: "#4b6bfb0d",
                alignSelf: "flex-start",
                fontWeight: 500,
                padding: "5px 2.5px",
                borderRadius: "25%",
              }}
            >
              {category}
            </Typography>
            <CardContent
              sx={{
                padding: 0,
                "&:last-child": {
                  padding: 0,
                },
              }}
            >
              <Typography gutterBottom variant="h6" component="div" margin={0}>
                {title}
              </Typography>
            </CardContent>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-10px",
            }}
          >
            <Typography variant="body2" fontSize={14} color="textSecondary">
              {author}
            </Typography>
            <Typography variant="body2" fontSize={14} color="textSecondary">
              {new Date(publishedAt).toLocaleDateString()}
            </Typography>
          </Box>
        </StyledCard>
      </CardActionArea>
    </Link>
  );
}

export default NewsArticle;
