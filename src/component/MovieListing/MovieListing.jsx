import React from "react";
import './MovieListing.scss'
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovie, getAllShow } from "../../features/Movies/MovieSlice.js";
import { Link } from "react-router-dom";
import { Setting } from "../../Apis/setting.js";
const MovieListing = () =>{
    const movies = useSelector(getAllMovie)
    const shows = useSelector(getAllShow)
    // console.log(movies);
    console.log(shows);

    return(
        <>
            <h1 className="heading">Movies</h1>
                <div className="movieContainer">
            <Slider {...Setting}>
                    {
                        movies.Search?.map((movie)=>(
                        <Link to={`/movie/${movie.imdbID}`}>
                        <div key={movie.imdbID} className="movieCard">
                            <img src={movie.Poster} alt="" />
                            <h3>Title: {movie.Title}</h3>
                            <h3>Year: {movie.Year}</h3>
                        </div>
                        </Link>
                    ))
                    }
            </Slider>
                </div>
                <h1 style={{display:'flex',flexDirection:'row'}} className="heading">Shows</h1>
                <div className="showContainer">
                    <Slider {...Setting}>
                    {
                        shows.Search?.map((show)=>(
                            <div key={show.imdbID} className="showCard">
                            <img src={show.Poster} alt="" />
                            <h3>Title: {show.Title}</h3>
                            <h3>Year: {show.Year}</h3>
                        </div>
                     ))   
                    }
                    </Slider>
                </div>
        </>
    )
}

export default MovieListing