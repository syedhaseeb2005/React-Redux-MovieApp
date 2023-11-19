import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from '../../Apis/MovieApis.jsx'
import ApiKey from '../../Apis/MoiveApiKey.jsx'

export const fetchAsyncMovie = createAsyncThunk('movies/fetchAsyncMovie',async (term)=>{
    // const movieText = 'batman'
    const response = await baseURL.get(`?apikey=${ApiKey}&s=${term}&type=movie`) 
    // console.log(response.data.Search)
    return response.data  
})

export const fetchAsyncShow = createAsyncThunk('movies/fetchAsyncShow',async (term)=>{
    // const seriesText = 'batman'
    const response = await baseURL.get(`?apikey=${ApiKey}&s=${term}&type=series`) 
    // console.log(response.data.Search)
    return response.data  
})


export const fetchAsyncMovieorShowDetails = createAsyncThunk('movies/fetchAsyncMovieorShowDetails',async (id)=>{
    const response = await baseURL.get(`?apikey=${ApiKey}&i=${id}&Plot=full`) 
    // console.log(response.data)
    return response.data  
})



const InitialState = {
    movies : {},
    shows : {},
    selectedmovieorshow : {}
}

export const movieSlice = createSlice({
    name : "movies",
    initialState : InitialState,
    reducers :{
        removeSelectedMovieorShow : (state) =>{
            state.selectedmovieorshow = {};
        }    
    },
    extraReducers:{
        [fetchAsyncMovie.pending] : () => {
            console.log("Pending");
        },
        [fetchAsyncMovie.fulfilled] : (state , {payload}) => {
            console.log("Fulfilled Successfully!");
            return {...state , movies : payload}
        },
        [fetchAsyncMovie.rejected] : () => {
            console.log("Fetch Rejected!");
        },
        [fetchAsyncShow.fulfilled] : (state , {payload}) => {
            console.log("Fulfilled Successfully!");
            return {...state , shows : payload}
        },
        [fetchAsyncMovieorShowDetails.fulfilled] : (state , {payload}) => {
            console.log("Fulfilled Successfully!");
            return {...state , selectedmovieorshow : payload}
        },
    },
})


export const {removeSelectedMovieorShow} = movieSlice.actions;
export const getAllMovie = (state) => state.movies.movies; 
export const getAllShow = (state) => state.movies.shows; 
export const getAllMovieorShowDetails = (state) => state?.movies.selectedmovieorshow; 
export default movieSlice.reducer;

