import { Box, CardActionArea, Skeleton } from "@mui/material";
import { StyledCard } from "./StyledCard";

function LoadingArticles() {
  return (
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
          <Skeleton
            animation="wave"
            variant="rounded"
            width="100%"
            height={200}
          />
          <Skeleton
            animation="wave"
            variant="text"
            width="20%"
            sx={{
              fontSize: "1rem",
            }}
          />
          <Box>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{
                fontSize: "2rem",
              }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width="70%"
              sx={{
                fontSize: "2rem",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-10px",
          }}
        >
          <Skeleton
            animation="wave"
            variant="text"
            width="35%"
            sx={{
              fontSize: "1rem",
            }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            width="20%"
            sx={{
              fontSize: "1rem",
            }}
          />
        </Box>
      </StyledCard>
    </CardActionArea>
  );
}
export default LoadingArticles;
