import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function PlayButton({ sx, ...others }: any) {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      color="inherit"
      startIcon={
        <PlayArrowIcon
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
        px: { xs: 1, sm: 2 },
        py: { xs: 0.5, sm: 1 },
        fontSize: { xs: 16, sm: 20, md: 24 },
        lineHeight: 1.5,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        bgcolor: "#ffffff",
        textTransform: "capitalize",
        ...sx,
      }}
      onClick={() => navigate(`/${MAIN_PATH.watch}/${others.data}`)}
    >
      Play
    </Button>
  );
}
