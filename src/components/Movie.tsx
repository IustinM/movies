import React from "react";

const Movie = ({movie}:{movie:any}) =>{
    return(
        <div className=" hover:scale-[1.1] transition-all shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative movie w-[15rem] min-h-[35vh] bg-center bg-cover bg-no-repeat text-white font-poppins flex flex-col justify-end rounded-[1rem]"  style={ {backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movie.backdrop_path + "\")"} }> 
            <p className="absolute top-[0rem] right-[0rem] bg-gradient-to-r from-[#7303c0] to-[#ec38bc] m-[0.7rem] px-[1rem] rounded-[1rem]">{movie.vote_average}</p>
            <div className="movie-text bg-[#00000070] min-h-[7rem] flex flex-col justify-center items-center text-center rounded-b-[1rem]">

            <h2 className="text-[1.2rem]">{movie.title}</h2>
            <h3 className="text-[0.8rem]">{movie.release_date}</h3>
            </div>
        </div>
    )
}

export default Movie;