import React from "react";
import { useInfiniteQuery } from "react-query";
// import utils

// import components
import Movie from "./Movie";

// for simplicity i choose to repeat myself :(

const Movies =  () =>{
    const key = '8550cbc503198174b8c1f43b78c9cb14';
    // :(
    const popularMovies = async ({pageParam = 1}) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pageParam}`);
        const {results } = await response.json()
        return {data :results,
                nextPage: pageParam + 1,
        }
    }
    // :(
    const latestMovies = async ({pageParam = 1}) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${pageParam}`);
        const {results } = await response.json()
        return {data :results,
                nextPage: pageParam + 1,
        }
    }
    // :(
    const topMovies = async ({pageParam = 1}) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pageParam}`);
        const {results } = await response.json()
        return {data :results,
                nextPage: pageParam + 1,
        }
    }
    const { data,fetchNextPage,hasNextPage,isFetching,isFetchingNextPage,isLoading,isError} =  useInfiniteQuery('popular2' , popularMovies,{getNextPageParam:(lastPage,pages) => lastPage.nextPage} );
    const upcomingFetched =  useInfiniteQuery('latest' , latestMovies,{getNextPageParam:(lastPage,pages) => lastPage.nextPage} );
    const topFetched =  useInfiniteQuery('top' , topMovies,{getNextPageParam:(lastPage,pages) => lastPage.nextPage} );
    if(upcomingFetched.isLoading) return <div>Loading...</div>
    if(isError) return <div>Loading...</div>

  

    return(
        <div className="movies w-full">

            <h1 className="text-[3rem] text-white p-[3rem]">Popular Movies</h1>
        <div className="popular-movies w-full grid justify-items-center  grid-cols-auto gap-y-[5rem] gap-x-[0rem] items-center ">
           
           {data!.pages.map(page => 
            page.data.map((movie:any) => <Movie movie={movie}/> )
           )}

        </div>
                <div className="button min-h-[10vh] flex justify-center items-center ">
                    <button onClick={() => fetchNextPage()} className="bg-black hover:scale-[1.05] text-[#ffffff] text-[1.5rem] px-[0.7rem] py-[0.5rem] rounded-[1rem] transition-all">Load More</button>
                </div>

            <h1 className="text-[3rem] text-white p-[3rem]">Latest Movies</h1>
        <div className="upcoming-movies w-full grid justify-items-center  grid-cols-auto gap-y-[5rem] gap-x-[0rem] items-center ">
           
           {upcomingFetched.data!.pages.map(page =>
            page.data.map((movie:any) => <Movie movie={movie}/> )
           )}

        </div>
                <div className="button min-h-[10vh] flex justify-center items-center ">
                    <button onClick={() => upcomingFetched.fetchNextPage()} className="bg-black hover:scale-[1.05] text-[#ffffff] text-[1.5rem] px-[0.7rem] py-[0.5rem] rounded-[1rem] transition-all">Load More</button>
                </div>
                <h1 className="text-[3rem] text-white p-[3rem]">Top Rated Movies</h1>
        <div className="top-movies w-full grid justify-items-center  grid-cols-auto gap-y-[5rem] gap-x-[0rem] items-center ">
           {/* :) */}
           {topFetched.data!.pages.map(page =>
            page.data.map((movie:any) => <Movie movie={movie}/> )
           )}

        </div>
                <div className="button min-h-[10vh] flex justify-center items-center ">
                    <button onClick={() => topFetched.fetchNextPage()} className="bg-black hover:scale-[1.05] text-[#ffffff] text-[1.5rem] px-[0.7rem] py-[0.5rem] rounded-[1rem] transition-all">Load More</button>
                </div>
        
        </div>
    )
}

export default Movies;