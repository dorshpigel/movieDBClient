import { useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  Navbar,
  FlexboxGrid,
  Nav
} from "rsuite";
import movieService from "./services/movie.service";
import favoriteService from "./services/favorite.service";
import CardHolder from "./components/CardHolder/CardHolder";
import FilterOptions from "./components/FilterOptions/FilterOptions";
import MovieModal from "./components/MovieModal/MovieModal";
import { SpecificMovie } from "./components/MovieModal/Movie.interface";
import './App.css';

const App = () => {
  const [type, setType] = useState("popular");
  const [open, setOpen] = useState(false);
  const [specificMovie, setSpecificMovie] = useState({});
  const [openModalId, setOpenModalId] = useState("");


  const clearFavs = () => {
     favoriteService.clearFavorites();
     setType("popular");
  }

  useEffect(() => {
    if(openModalId !== "") {
    const fetchMovieData = async () => {
      try {
        const movie: SpecificMovie = await movieService.getSpecificMovie(
          openModalId
        );
        setSpecificMovie({});
        setSpecificMovie(movie);
        setOpen(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieData();
  }
  }, [openModalId]);

  return (
    <div className="main-conatiner">
      <Container className="rsuite-custom-container">
      <MovieModal setOpen={setOpen} open={open} movie={specificMovie} type={type} />
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>
             <strong>MovieStream</strong> 
            </Navbar.Brand>
            <Nav>
              <Nav.Item accessKey="clear"><strong onClick={clearFavs}>Clear Favorites</strong></Nav.Item>
            </Nav>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={15}>
              <FilterOptions type={type} setType={setType} />
            </FlexboxGrid.Item>
            <CardHolder setOpenModalId={setOpenModalId} type={type} />
          </FlexboxGrid>
        </Content>
        <Footer style={{justifySelf:"center"}}></Footer>
      </Container>
    </div>
  );
};

export default App;
