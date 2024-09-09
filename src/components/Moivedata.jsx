import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import munjya from '../book my show/asset 3.jpeg'
import chandu from '../book my show/asset 1.jpeg'
import jhamkudi from '../book my show/asset 2.jpeg'
import kalki from '../book my show/kalki.jpg'
import badboys from '../book my show/asset 6.jpeg';
import insideout from '../book my show/asset 5.jpeg';
import chandubg from '../book my show/chandu-bg.jpg';
import munjyabg from '../book my show/munjyabg.jpg';
import jhamkudibg from '../book my show/jhamkudibg.jpg'
import kalkibg from '../book my show/kalkibg.jpg';
import badboysbg from '../book my show/bad-boys-bg.jpg'
import insideoutbg from '../book my show/inside-out-bg.jpg'
import { IoShareSocialOutline } from "react-icons/io5";
import { BiData } from 'react-icons/bi'

const Moivedata = () => {

    const [data, setdata] = useState([
        {
            id: '1',
            name: 'Chandu Champion',
            type: 'Biography,Drama,Sports',
            ua: 'UA',
            img: chandu,
            bg: chandubg,
            time: '2h 23m',
            viewType: '2D',
            lang: 'Hindi',
            date: '14 Jun, 2024',
            rating: '9.2/10',
            about: 'This is an unbelievable tale of a man who faced one adversary after another with an undying spirit. His unwavering zeal and never-give-up attitude led to the creation of history. This is the story of Chandu Champion!',
        },
        {
            id: '2',
            name: 'Munjya',
            type: 'Comedy,Horror',
            ua: 'UA',
            img: munjya,
            bg: munjyabg,
            time: '2h 32m',
            viewType: '2D',
            lang: 'Hindi',
            date: '7 Jun, 2024',
            rating: '8.2/10',
            about: 'A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.',
        },
        {
            id: '3',
            name: 'Jhamkudi',
            type: 'Comedy,Horror,Mystery',
            ua: 'UA',
            img: jhamkudi,
            bg: jhamkudibg,
            time: '2h 3m',
            viewType: '2D',
            lang: 'Gujarati',
            date: '31 May, 2024',
            rating: '8.6/10',
            about: 'While Gujarat is celebrating Navratri, the village of Raniwada is forbidden to play Garba due to the curse of an evil witch named Jhamkudi. But when the rules are broken, the haunting begins. Will Bablo and Kumud be able to solve the mystery and save Raniwada from the curse of Jhamkudi?',
        },
        {
            id: '4',
            name: 'Kalki 2898 AD',
            type: 'Action,Sci-Fi,Thriller',
            ua: 'UA',
            img: kalki,
            bg: kalkibg,
            time: '3h 1m',
            viewType: '2D, IMAX 3D, IMAX 2D, 3D',
            lang: 'Telugu, Hindi, Kannada, Malayalam, Tamil',
            date: '27 Jun, 2024',
            rating: '9.2/10',
            about: 'When the world is taken over by darkness. A force will rise.',
        },
        {
            id: '5',
            name: 'Bad Boys: Ride or Die',
            type: 'Action,Adventure,Comedy',
            ua: 'A',
            img: badboys,
            bg: badboysbg,
            time: '1h 57m',
            viewType: '2D, MX4D, 4DX, IMAX 2D',
            lang: 'English, Hindi, Telugu, Tamil',
            date: '6 Jun, 2024',
            rating: '8.6/10',
            about: 'The world`s favorite Bad Boys are back with their iconic mix of edge-of-your-seat action and outrageous comedy but this time with a twist: Miami`s finest are now on the run.',
        },
        {
            id: '6',
            name: 'Inside Out 2',
            type: 'Animation,Comedy,Drama',
            ua: 'U',
            img: insideout,
            bg: insideoutbg,
            time: '1h 36m',
            viewType: '2D, IMAX 3Db, 4DX, MX4D 3D, ICE 3D, 3D',
            lang: 'English, Hindi, Tamil',
            date: '14 Jun, 2024',
            rating: '9.2/10',
            about: 'Disney and Pixar`s "Inside Out 2" returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new emotions! Joy, Sadness, Anger, Fear and Disgust, who`ve long been running a successful operation by all accounts, aren`t sure how to feel when Anxiety shows up. And it looks like she`s not alone.',
        },
    ])

    const shareHandle = (data) => {
        if (navigator.share) {
            navigator.share({
                id: data.id,
                url: window.location.href,
                text: data.description,
            });
        } else {
            alert('Sharing is not supported in your browser..');
        }
    }
    
    const moviedata = (item) => {
        console.log(item);
        localStorage.setItem("movieName", JSON.stringify(item))
    }


    // const { movienamex } = useParams()
    // console.log(movienamex, '00000');

    const { id } = useParams();

    const movie = data.find(item => item.id == parseInt(id));

    return (
        <>
            <div
                style={{ backgroundImage: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.04) 97.47%, #1A1A1A 100%) , url(${movie.bg})` }}
                className="bg h-[480px]"
            >
                <div className="container text-white h-full">
                    <div className="flex h-full items-center">
                        <div className="">
                            <img src={movie.img} className='h-[390px]' alt="" />
                        </div>
                        <div className="ms-[32px] moviedata">
                            <h1 className='text-[36px] capitalize font-bold'>{movie.name}</h1>
                            <div className="mt-4">
                                <div className='movietype'>
                                    <span className='rounded-sm text-center text-black text-[16px]'>{movie.viewType}</span>
                                </div>
                                <div className="movietype">
                                    <span className='mt-2 rounded-sm text-center text-black text-[16px]'>{movie.lang}</span>
                                </div>
                            </div>
                            <div className="text-[16px] mt-3 font-normal">
                                {movie.time}
                                <span className='text-[16px] px-[8px]'> • </span>
                                {movie.type}
                                <span className='text-[16px] px-[8px]'> • </span>
                                {movie.ua}
                                <span className='text-[16px] px-[8px]'> • </span>
                                {movie.date}
                            </div>
                            <Link to={'/book'}>
                                <button onClick={() => moviedata(movie.name)} className='text-white text-[18px] font-medium mt-[35px] rounded-lg px-[45px] py-[10px] bg-[#F84464]'>Book tickets</button>
                            </Link>
                        </div>
                        <div className="ms-[450px]" style={{ backgroundColor: '#484E4E' }}>
                            <span className='flex' onClick={() => shareHandle(data)}> <IoShareSocialOutline className='text-white text-[30px] me-3' /> Share </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Moivedata