import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovieDetail(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>It's Loading...</h1>
      ) : (
        <div>
          <Navigation />
          <MovieDetail
            title={movieDetail.data.movie.title}
            description={movieDetail.data.movie.description_full}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
