import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  makeStyles,
  Rating,
} from "@mui/material";
import { Header } from "./Header";
import { mockup } from "./mockup";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PersonIcon from "@mui/icons-material/Person";
import { PopupFilter } from "./components/Popup";
import { ModalButton } from "./components/Modal";

export const App = () => {
  const [books, setBooks] = React.useState([
    {
      title:
        "EFFECTIVE TYPESCRIPT: 62 SPECIFIC WAYS TO IMPROVE YOUR TYPESCRIPT",
      subtitle:
        "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is f headaches for which JavaScript is f headaches for which JavaScript is f",
      author: "Apeka Dan",
      img: "https://images-na.ssl-images-amazon.com/images/I/51FOcrxnzbL._SX379_BO1,204,203,200_.jpg",
      rating: 4,
    },
    {
      img: "https://eloquentjavascript.net/img/cover.jpg",
      title:
        "EFFECTIVE TYPESCRIPT: 62 SPECIFIC WAYS TO IMPROVE YOUR TYPESCRIPT",
      subtitle:
        "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is f...",
      author: "Apeka Dan",
      rating: 4,
    },
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--0TzY1R9i--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4ovaa9po3t4ii8c4qlqr.png",
      title:
        "EFFECTIVE TYPESCRIPT: 62 SPECIFIC WAYS TO IMPROVE YOUR TYPESCRIPT",
      subtitle:
        "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is f...",
      author: "Apeka Dan",
      rating: 4,
    },
  ]);

  const handleSubmit = (book) => {
    // @ts-ignore
    setBooks([...books, book]);
  };

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
          <PopupFilter />
        </span>
        <ModalButton handleSubmit={handleSubmit} />
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {books.map((card, index) => {
            const { img, title, subtitle, author, rating } = card;
            return (
              <Grid item key={index}>
                <Card
                  sx={{
                    maxWidth: "360px",
                    background: "rgba(12, 28, 44, 0.6)",
                    backdropFilter: "blur(24px)",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="320"
                    image={img}
                    alt="image"
                  />
                  <CardContent>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <WrapAuthor>
                      <PersonIcon />
                      <Author>{author}</Author>
                      <RatingWhite
                        name="simple-controlled"
                        value={rating}
                        size="medium"
                        // onChange={(event, newValue) => {
                        //   setValue(newValue);
                        // }}
                      />
                    </WrapAuthor>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            );
          })}
        </Grid>
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

const Title = styled.h4`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-block-start: 0.6em;
  margin-block-end: 0.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Subtitle = styled.h5`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-block-start: 0.33em;
  margin-block-end: 0.33em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  margin-bottom: 20px;
`;

const WrapAuthor = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
`;

const Author = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  margin-right: auto;
`;

// @ts-ignore
const RatingWhite = styled(Rating)`
  margin-right: 2px;
  & > label > span {
    color: white;
  }
`;
