import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { CardBook } from "./components/Card";
import { Header } from "./Header";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { mockup } from "./mockup";

export const App = () => {
  return (
    <AppWrap>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", mb: "38px" }}
      >
        <Typography variant="h5" sx={{ marginRight: "auto" }}>
          All books
        </Typography>
        <span
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <FilterAltIcon />
          <Typography variant="h6" sx={{}}>
            Filter
          </Typography>
        </span>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3BC267", marginLeft: "32px" }}
        >
          add book
        </Button>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {mockup.map((card) => {
          const { img, title, subtitle, author, rating } = card;
          return (
            <Card
              sx={{
                maxWidth: "370px",
                background: "rgba(12, 28, 44, 0.6)",
                backdropFilter: "blur(24px)",
                color: "white",
              }}
            >
              <CardMedia component="img" height="320" image={img} alt="image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2">{subtitle}</Typography>
                <Typography variant="body1" sx={{ mt: "18px" }}>
                  {author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
      <Bg />
    </AppWrap>
  );
};

const AppWrap = styled.div`
  min-height: 100vh;
`;

const Bg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  background: url("./bg.png") center/cover no-repeat;
`;
