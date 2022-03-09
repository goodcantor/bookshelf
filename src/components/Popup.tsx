import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export const PopupFilter = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="text"
        sx={{ color: "white" }}
        onClick={handleClick}
      >
        <FilterAltIcon />
        <Typography variant="subtitle1" sx={{}}>
          Filter
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            p: 2,
            cursor: "pointer",
            ":hover": { background: "rgba(12, 28, 44, 0.2);" },
          }}
        >
          Sort newest to oldest
        </Typography>
        <Typography
          sx={{
            p: 2,
            cursor: "pointer",
            ":hover": { background: "rgba(12, 28, 44, 0.2);" },
          }}
        >
          Sort oldest to newest
        </Typography>
        <Typography
          sx={{
            p: 2,
            cursor: "pointer",
            ":hover": { background: "rgba(12, 28, 44, 0.2);" },
          }}
        >
          From A to Z
        </Typography>
        <Typography
          sx={{
            p: 2,
            cursor: "pointer",
            ":hover": { background: "rgba(12, 28, 44, 0.2);" },
          }}
        >
          From Z to A
        </Typography>
        <Typography
          sx={{
            p: 2,
            cursor: "pointer",
            ":hover": { background: "rgba(12, 28, 44, 0.2);" },
          }}
        >
          Rating
        </Typography>
      </Popover>
    </div>
  );
};
