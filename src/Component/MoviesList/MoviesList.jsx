import { useLocation} from 'react-router-dom';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import s from '../../pages/HomePage/HomePage.module.css'
import defaultImage from "../../images/defaultImg.jpg";


const MoviesList = ({movie_list, titleHeader }) => {
    const location = useLocation();

    return (
        <>
            {movie_list && (
                <>
                    <h2 className={s.TitleHeader}>{titleHeader}</h2>
                    {movie_list.length > 0 ? (
                        <ul className={s.MovieGallery}>
                            {movie_list.map(({ id, title, backdrop_path }) => (
                                <li className={s.MovieGalleryItem} key={id}>
                                    <Link to={{
                                        pathname: `/movies/${id}`,
                                        state: {
                                            from: { location, label: 'Go Back' }
                                        }
                                    }}>
                    
                                        <img
                                            src={
                                                backdrop_path
                                                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                                                    : defaultImage
                                            }
                                            alt={title}
                                            className={s.MovieGalleryItemImage}
                                        />
                                        <h3 className={s.TitleFilm}>
                                            {title ? title : "The Best Movie"}
                                        </h3>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h2 className={`${s.TitleHeader} ${s.NotFound}`}>Not Found!</h2>
                    )}
                </>
            )}
        </>
    );

};

MoviesList.propTypes = {
  movie_list: PropTypes.array,
  titleHeader: PropTypes.string,
};

export default MoviesList;