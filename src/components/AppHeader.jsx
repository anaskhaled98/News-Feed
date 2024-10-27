import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, Select } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.action,
  backgroundColor: theme.palette.common.white,
  "&:before": {
    borderColor: theme.palette.action,
  },
  "&:after": {
    borderColor: theme.palette.action,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.action,
  },
  margin: theme.spacing(2),
  width: 200,
  height: 40,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export default function Header({ onSearchChange, category, onCategoryChange }) {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          marginBlock: "10px",
        }}
      >
        <Toolbar
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "15px",
            }}
          >
            <a href="/">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 22.152 1.40577 25.9756 3.76732 29.021L7.73554 14.0299C9.38672 7.52344 13.6758 4.15725 20.5616 4.15725H22.936C27.7785 4.15725 31.335 8.70307 30.1698 13.4033C29.9609 14.2463 29.5702 15.0334 29.0253 15.7097L27.0045 18.2174C26.486 18.8609 26.2968 19.7092 26.493 20.5121L27.109 23.0338C27.4278 24.339 27.3695 25.708 26.941 26.9814C25.4832 31.3132 21.4227 34.231 16.8521 34.231H10.2086C12.5662 35.3648 15.2089 36 18 36Z"
                  fill="#141624"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.7 21.7592H14.1932C13.0747 21.7592 12.0968 22.5135 11.8129 23.5953L10.4373 28.8354H15.871C17.8811 28.8354 19.6384 27.4799 20.1487 25.5357L20.2666 25.0865C20.7082 23.4043 19.4392 21.7592 17.7 21.7592ZM16.6646 23.3514H14.759C14.1206 23.3514 13.5623 23.7814 13.3993 24.3988L12.6486 27.2432H15.6532C16.7647 27.2432 17.7364 26.4977 18.0186 25.4284L18.0838 25.1814C18.328 24.2562 17.6263 23.3514 16.6646 23.3514Z"
                  fill="#141624"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9971 11.7427C15.2811 10.6609 16.2589 9.90663 17.3774 9.90663H20.8843C22.6235 9.90663 23.8925 11.5517 23.4509 13.2339L23.333 13.6831C22.8227 15.6273 21.0654 16.9828 19.0553 16.9828H13.6216L14.9971 11.7427ZM16.5836 12.5462C16.7465 11.9289 17.3049 11.4988 17.9433 11.4988H19.8489C20.8106 11.4988 21.5123 12.4036 21.2681 13.3288L21.2029 13.5758C20.9207 14.6451 19.949 15.3907 18.8375 15.3907H15.8329L16.5836 12.5462Z"
                  fill="#141624"
                />
              </svg>
            </a>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "black",
                fontWeight: 700,
              }}
            >
              Buzz News
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <StyledSelect value={category} onChange={onCategoryChange}>
              <StyledMenuItem value="general">General</StyledMenuItem>
              <StyledMenuItem value="business">Business</StyledMenuItem>
              <StyledMenuItem value="entertainment">
                Entertainment
              </StyledMenuItem>
              <StyledMenuItem value="health">Health</StyledMenuItem>
              <StyledMenuItem value="science">Science</StyledMenuItem>
              <StyledMenuItem value="sports">Sports</StyledMenuItem>
              <StyledMenuItem value="technology">Technology</StyledMenuItem>
            </StyledSelect>
            <Search
              sx={{
                width: "50%",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black", zIndex: 1 }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  color: "black",
                  backgroundColor: "#F4F4F5",
                  borderRadius: "5%",
                }}
                onChange={handleInputChange}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
