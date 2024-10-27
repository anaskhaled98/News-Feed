import Button from "@mui/material/Button";

const pageButton = ({ variant = "contained", onClick, children, disabled }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{
        padding: "12px 20px",
        border: "1px solid #696a75",
        color: "#696a75",
        borderRadius: "6px",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        boxShadow: "0 6px 16px #00000029",
        transition: "all .3s",
        backgroundColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "none",
        },
        fontFamily: "Roboto",
      }}
    >
      {children}
    </Button>
  );
};

export default pageButton;
