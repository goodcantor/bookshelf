import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "20px",
  width: 400,
  bgcolor: "background.paper",
  color: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#3BC267", marginLeft: "32px" }}
        onClick={handleOpen}
      >
        add book
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ bgcolor: "rgba(12, 28, 44, 0.1)", backdropFilter: "blur(8px)" }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            align="center"
            sx={{ mb: "30px" }}
          >
            Add book
          </Typography>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "20px",
            }}
          >
            <TextField fullWidth label="Book title" id="fullWidth" />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "20px",
            }}
          >
            <TextField fullWidth label="Description" id="fullWidth" />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "20px",
            }}
          >
            <TextField fullWidth label="Author" id="fullWidth" />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "20px",
            }}
          >
            <TextField fullWidth label="Published" id="fullWidth" />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "20px",
            }}
          >
            <TextField fullWidth label="Image link" id="fullWidth" />
          </Box>
          <Button variant="contained" fullWidth>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
