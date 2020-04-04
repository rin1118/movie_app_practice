import React from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";
import axios from "axios";

const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = await axios.get(url);
    console.log(movies);

    const {
      data: {
        data: { movies: video }
      }
    } = movies;

    this.setState({ movies: video, isLoading: false });

    console.log(video);
  };

  //처음 render시 실행
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "로딩중"
          : movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  genres={movie.genres}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

// const foodIlike = [
//   {
//     name: "kimchi",
//     description: "김츼"
//   },
//   {
//     name: "doritos",
//     description: "도리도리"
//   }
// ];

// foodIlike.PropTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// };

// function Potato({ name }) {
//   return <h4>맛있는 {name} 감자튀김!</h4>;
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>멍하다</h1>
//       <Movie />
//       {foodIlike.map(current => {
//         return <Potato name={current.name}></Potato>;
//       })}
//     </div>
//   );
// }

export default App;
