import React, { useState } from "react";
import './Header.scss'
import { Link } from "react-router-dom";
import Img from '../../assests/img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchAsyncMovie, fetchAsyncShow } from "../../features/Movies/MovieSlice";
const Header = () =>{
    const [term , setTerm] = useState('');
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(term);
        dispatch(fetchAsyncMovie(term))
        dispatch(fetchAsyncShow(term))
        setTerm('');
    }

    return(
        <>
            <div className="header">
                    <div className="logo">
                        <Link style={{textDecoration:'none',color:'white'}} to='/'>Movie App</Link>
                    </div>
                    <div className="search-bar">
                        <form onSubmit={submitHandler}>
                            <input 
                            type="text"
                            // value={}
                            placeholder="Search Movies or Shows..."
                            onChange={(e)=>setTerm(e.target.value)}
                            />
                            <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                        </form>

                    </div>


                <div className="user-img">
                    <img src={Img} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Header