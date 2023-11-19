import React, { useEffect } from 'react';
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing.jsx';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovie, fetchAsyncShow} from '../../features/Movies/MovieSlice.js';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchMovie = async () =>{
            dispatch(fetchAsyncMovie())
            dispatch(fetchAsyncShow())
        }
        fetchMovie()
    },[dispatch])
    return (
        <div>
            <div className="banner-img">
                <MovieListing/>
            </div>
        </div>
    );
};

export default Home;