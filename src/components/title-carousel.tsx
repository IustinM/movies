import React,{useState} from "react";
import { isError, useQuery } from "react-query";

// importing utils


const TitleCarousel = () =>{
    const key = '8550cbc503198174b8c1f43b78c9cb14';
    let [bannerNumber ,setBannerNumber] = useState<number>(0)
    let[activeBanner,setActiveBanner] = useState<boolean>(false);
      
      
  
    
    const popularMovies = async ({pageParam = 1}) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pageParam}`);
        

        return await response.json()
    }
    const { data, isLoading,isError} =  useQuery('popular' , popularMovies);
    const handleNumber = (number:number) =>{
        setBannerNumber(number);
        setActiveBanner(true);

    }
  
    
    if(isLoading) return <div>...Loading</div>
    const bannerMovies = [data.results[0].backdrop_path,data.results[1].backdrop_path,data.results[2].backdrop_path]
    if(isError) return <div>Error</div>
   
    return <div className="title-carousel flex w-full relative">
                 
                 <div style={ {backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + bannerMovies[bannerNumber]+ "\")"} } className=" w-full carousel bg-center bg-cover bg-no-repeat min-h-[70vh]  text-white font-poppins flex items-end">
                            <div className="text-carousel w-[40%] bg-[#00000059] rounded-[1rem] p-[1rem] m-[2rem] md:w-full md:mb-[3.5rem]">
                            <h1 className="title text-[3rem] md:text-[1.5rem]">{data.results[bannerNumber].title}</h1>
                        <p className="text-[1.5rem] md:text-[1rem]">{data.results[bannerNumber].overview}</p>

                            </div>
                 </div> 
                 
                 {/* :/ */}
             {/* <div style={ {backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + bannerMovies[1]+ "\")"} } className=" bg-center bg-cover bg-no-repeat carousel min-h-[70vh]  text-white font-poppins flex items-end">
                    <div className="text-carousel w-[40%] bg-[#00000059] rounded-[1rem] p-[1rem] m-[2rem]">
                    <h1 className="title text-[3rem]">{popularMovies.results[1].title}</h1>
                    <p className="text-[1.5rem]">{popularMovies.results[1].overview}</p>

                    </div>
            </div> 
             <div style={ {backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + bannerMovies[2]+ "\")"} } className="carousel bg-center bg-cover bg-no-repeat min-h-[70vh]  text-white font-poppins flex items-end">
                    <div className="text-carousel w-[40%] bg-[#00000059] rounded-[1rem] p-[1rem] m-[2rem]">
                    <h1 className="title text-[3rem]">{popularMovies.results[2].title}</h1>
                    <p className="text-[1.5rem]">{popularMovies.results[2].overview}</p>

                    </div>
            </div>  */}
            
             <div className="dots flex absolute bottom-0 left-[50%] translate-x-[-50%] mb-[1rem]">
                {bannerMovies.map(banner =>(<div id={bannerMovies.indexOf(banner).toString()}   onClick={() =>handleNumber(bannerMovies.indexOf(banner))}  className={" cursor-pointer w-[25px] h-[25px] bg-white mx-[0.5rem]  rounded-full"}></div>))}
             </div>

        </div>
    
}


export default TitleCarousel;