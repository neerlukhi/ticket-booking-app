import React, { useState } from 'react'
import munjya from '../book my show/asset 3.jpeg'
import chandu from '../book my show/asset 1.jpeg'
import jhamkudi from '../book my show/asset 2.jpeg'
import kalki from '../book my show/kalki.jpg'
import badboys from '../book my show/asset 6.jpeg';
import insideout from '../book my show/asset 5.jpeg';
import { Link } from 'react-router-dom'
import Bannerslider from './Bannerslider'


const Dashboard = () => {

    const [data, setData] = useState([
        {
            id: '1',
            name: 'Chandu Champion',
            type: 'Biography/Drama/Sports',
            img: chandu,
        },
        {
            id: '2',
            name: 'Munjya',
            type: 'Comedy/Horror',
            img: munjya,
        },
        {
            id: '3',
            name: 'Jhamkudi',
            type: 'Comedy/Horror/Mystery',
            img: jhamkudi,
        },
        {
            id: '4',
            name: 'Kalki 2898 AD',
            type: 'Action/Sci-Fi/Thriller',
            img: kalki,
        },
        {
            id: '5',
            name: 'Bad Boys: Ride or Die',
            type: 'Action/Adventure/Comedy',
            img: badboys,
        },
        {
            id: '6',
            name: 'Inside Out 2',
            type: 'Animation/Comedy/Drama',
            img: insideout,
        },
    ])


    return (
        <>
                <Bannerslider />
                <div className="">
                <div className="container">
                    <div className="card border-0 mt-[50px]">
                        <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {
                                data.map((item, index) => {
                                    return (
                                        <div class=" mb-[20px] rounded-lg ">
                                            <img src={item.img} className='w-[250px] rounded-lg' alt="" />
                                            <h3 class="mt-[10px] text-[18px] font-[500] text-gray-900 dark:text-dark">{item.name}</h3>
                                            <span className='text-[16px]'>{item.type}</span>
                                            <Link to={`ticket/${item.id}`}>
                                                <div className=" mt-2">
                                                    <button className='btn bg-primary text-white'>Read more..</button>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Dashboard