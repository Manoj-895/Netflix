import Button, { ButtonProps } from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function MoreInfoButton({ sx, ...others }: ButtonProps) {
  return (
    <Button
      variant="contained"
      startIcon={
        <InfoOutlinedIcon
          sx={{
            fontSize: {
              xs: "16px !important",
              sm: "20px !important",
              md: "24px !important",
            },
          }}
        />
      }
      {...others}
      sx={{
        ...sx,
        px: { xs: 1, sm: 2 },
        py: { xs: 0.5, sm: 1 },
        fontSize: { xs: 16, sm: 20, md: 24 },
        lineHeight: 1.5,
        fontWeight: "bold",
        textTransform: "capitalize",
        bgcolor: "#6d6d6eb3",
        whiteSpace: "nowrap",
        "&:hover": { bgcolor: "#6d6d6e66" },
      }}
    >
      More Info
    </Button>
  );
}
