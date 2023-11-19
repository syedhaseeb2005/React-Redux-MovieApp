import React, { useEffect } from "react";
import './MovieDetails.scss'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieorShowDetails, getAllMovieorShowDetails, removeSelectedMovieorShow } from "../../features/Movies/MovieSlice";
import { faCalendar, faFilm, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = () =>{
    const selectedmovieorshow = useSelector(getAllMovieorShowDetails)
    // console.log(data);
    const {imdbID} = useParams();
    console.log(imdbID);
    const dispatch  = useDispatch()
    useEffect(()=>{
        dispatch(fetchAsyncMovieorShowDetails(imdbID))
        return ()=>{
            dispatch(removeSelectedMovieorShow())
        }
    },[dispatch , imdbID])
    return(
        <>
            <div className="movie-section">
                <div className="section-left">
                    <div className="movie-title">{selectedmovieorshow.Title}</div>
                    <div className="movie-rating">
                        <span>
                            IMDB Rating <FontAwesomeIcon className="faStaricon"  icon={faStar}/>: {selectedmovieorshow.imdbRating}
                        </span>
                        <span>
                            IMDB Votes <FontAwesomeIcon className="faThumbsUpicon" icon={faThumbsUp}/>: {selectedmovieorshow.imdbVotes}
                        </span>
                        <span>
                            Runtime <FontAwesomeIcon className="faFilmicon" icon={faFilm}/>: {selectedmovieorshow.Runtime}
                        </span>
                        <span>
                            Year <FontAwesomeIcon className="faCalendaricon" icon={faCalendar}/>: {selectedmovieorshow.Year}
                        </span>
                    </div>
                    <div className="movie-plot">
                        {selectedmovieorshow.Plot}
                    </div>
                    <div className="movie-Info">
                        <div>
                            <span>Director:</span>
                            <span>{selectedmovieorshow.Director}</span>
                        </div>
                        <div>
                            <span>Stars:</span>
                            <span>{selectedmovieorshow.Actors}</span>
                        </div>
                        <div>
                            <span>Generes:</span>
                            <span>{selectedmovieorshow.Genre}</span>
                        </div>
                        <div>
                            <span>Language:</span>
                            <span>{selectedmovieorshow.Language}</span>
                        </div>
                        <div>
                            <span>Awards:</span>
                            <span>{selectedmovieorshow.Awards}</span>
                        </div>
                    </div>
                </div>
                <div className="section-right">
                    <img src={selectedmovieorshow.Poster} alt="img" />
                </div>
            </div>
        </>
    )
}

export default MovieDetails