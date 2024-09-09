import React, { useEffect, useState } from 'react';
import { RiArmchairLine } from "react-icons/ri";
import SeatMap from './Seatmap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal';
import { useParams } from 'react-router-dom';

const Seatbook = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');

    // const { movienamex } = useParams()

    let allmoviename

    useEffect(() => {
        const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || SeatMap.map(seat => ({ ...seat, isSelected: false, disabled: false }));
        setData(storedSeats);
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedSeats', JSON.stringify(data));
        allmoviename = JSON.parse(localStorage.getItem("movieName"))
        console.log(allmoviename, '*****');
    }, [data]);

    const recliner = data.filter((val) => val.price === 350);
    const executive = data.filter((val) => val.price === 250);
    const royal = data.filter((val) => val.price === 150);

    const handleSeatClick = (id) => {
        const temp = [...data];
        const selectedSeat = temp.find(seat => seat.id === id);
        if (!selectedSeat.disabled) {
            selectedSeat.isSelected = !selectedSeat.isSelected;
            if (selectedSeat.isSelected) {
                toast.info(`You've selected seat ${selectedSeat.seat}`);
            }
            setData(temp);
        }
    };

    const calculateTotalPrice = () => {
        return data.reduce((total, seat) => seat.isSelected ? total + seat.price : total, 0);
    };

    const handlePayNow = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveModal = () => {
        // if (allmoviename == true) {
            const userData = JSON.parse(localStorage.getItem('usersData')) || [];
            
            // Filter the selected seats
            const userSeats = data.filter(seat => seat.isSelected);

            // Add the new user data
            userData.push({ name, seats: userSeats });

            // Disable the selected seats
            const updatedData = data.map(seat => seat.isSelected ? { ...seat, isSelected: false, disabled: true } : seat);
            setData(updatedData);
            // console.log(data, '-/-/-');

            // Save the updated data to localStorage
            localStorage.setItem('usersData', JSON.stringify(userData));
            localStorage.setItem('selectedSeats', JSON.stringify(updatedData));
        // }
        setShowModal(false);
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <h1 className='text-center'>RECLINER : ₹350</h1>
            <ToastContainer />
            <div className="container bg-white seat grid grid-cols-10" style={{ gap: '10px' }}>
                {
                    recliner.map((seat, index) => (
                        <label
                            key={index}
                            className={`${seat.isSelected ? 'bg-green-600' : ''} ${seat.disabled ? 'disabled-seat cursor-not-allowed' : 'cursor-pointer'} grid place-items-center border-[1px] border-green-600 ticket-seat`}
                            style={{
                                padding: '10px',
                                textAlign: 'center',
                            }}
                        >
                            <input type="checkbox" onChange={() => handleSeatClick(seat.id)} value={seat.seat} checked={seat.isSelected} hidden disabled={seat.disabled} />
                            <RiArmchairLine className="seat-icon" size={35} />
                            <div>{seat.id}</div>
                        </label>
                    ))
                }
            </div>
            <h1 className='text-center'>EXECUTIVE : ₹250</h1>
            <div className="container bg-white seat grid grid-cols-10" style={{ gap: '10px' }}>
                {
                    executive.map((seat, index) => (
                        <label
                            key={index}
                            className={`${seat.isSelected ? 'bg-green-600' : ''} ${seat.disabled ? 'disabled-seat cursor-not-allowed' : 'cursor-pointer'} grid place-items-center border-[1px] border-green-600 ticket-seat`}
                            style={{
                                padding: '10px',
                                textAlign: 'center',
                            }}
                        >
                            <input type="checkbox" onChange={() => handleSeatClick(seat.id)} value={seat.seat} checked={seat.isSelected} hidden disabled={seat.disabled} />
                            <RiArmchairLine className="seat-icon" size={35} />
                            <div>{seat.id}</div>
                        </label>
                    ))
                }
            </div>
            <h1 className='text-center'>Platinum : ₹150</h1>
            <div className="container bg-white seat grid grid-cols-10" style={{ gap: '10px' }}>
                {
                    royal.map((seat, index) => (
                        <label
                            key={index}
                            className={`${seat.isSelected ? 'bg-green-600' : ''} ${seat.disabled ? 'disabled-seat cursor-not-allowed' : 'cursor-pointer'} grid place-items-center border-[1px] border-green-600 ticket-seat`}
                            style={{
                                padding: '10px',
                                textAlign: 'center',
                            }}
                        >
                            <input type="checkbox" onChange={() => handleSeatClick(seat.id)} value={seat.seat} checked={seat.isSelected} hidden disabled={seat.disabled} />
                            <RiArmchairLine className="seat-icon" size={35} />
                            <div>{seat.id}</div>
                        </label>
                    ))
                }
            </div>
            <div className="bg-gray-500 sticky text-white flex items-center bottom-0 w-full h-[70px]">
                <div className="container">
                    <div className="flex justify-between">
                        <h2 className='text-[18px]'>
                            Total Price: ₹{calculateTotalPrice()}
                        </h2>
                        <button onClick={handlePayNow} className='text-[18px] bg-black rounded-lg px-[12px] py-[5px]'>
                            Pay now
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                show={showModal}
                handleClose={handleCloseModal}
                handleSave={handleSaveModal}
                handleChange={handleChangeName}
                name={name}
            />
        </>
    );
}

export default Seatbook;
