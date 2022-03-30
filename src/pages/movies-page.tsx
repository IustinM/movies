import React,{useEffect} from 'react';
// importing components
import Nav from '../components/nav';
import TitleCarousel from '../components/title-carousel';
import Movies from '../components/Movies';
import Footer from '../components/footer';
// import utils
import { useInfiniteQuery } from 'react-query';



const MoviesPage = () => {
    


    

    return (<div className='bg-gradient-to-r from-[#7303c0] to-[#ec38bc]'>
        <Nav/>
        <TitleCarousel/> 
         <Movies/>
         <Footer/>
    </div>);
}



export default MoviesPage;