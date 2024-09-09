import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const Ticketlist = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [usersData, setUsersData] = useState([]);
  var moviename = JSON.stringify(localStorage.getItem("movieName"))
  console.log(moviename, '*-*-*');
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('usersData')) || [];
    console.log(data,'-+-+');
    setUsersData(data);
  }, []);

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  };

  return (
    <>

      {/* <div className="payment-summary">
        <h1>Payment Details</h1>
        {usersData.map((user, index) => (
          <div key={index}>
            <h2>Name: {user.name}</h2>
            <h3>Selected Seats:</h3>
            <ul>
              {user.seats.map((seat) => (
                <li key={seat.id}>{seat.seat} - ₹{seat.price}</li>
              ))}
            </ul>
            <h3>Total Price: ₹{user.seats.reduce((total, seat) => total + seat.price, 0)}</h3>
          </div>
        ))}
      </div> */}
      <div className='container'>
        <div className='d-flex'>
          <Table striped bordered hover className='table'>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Movie name</th>
                <th>Seat Number</th>
                {/* <th>Amount</th> */}
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody className='tableBody'>
              {
                usersData.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td width="200px">
                      {user.name}
                    </td>
                    <td>
                      {moviename}
                    </td>
                    <td>
                      {
                        user.seats.map((seat) => (
                          <span key={seat.id} className='capitalize'> {seat.seat} ,  </span>
                        ))
                      }
                    </td>
                    {/* <td>
                      {user.seats.map((seat) => (
                        <span key={seat.id}>₹{seat.price},</span>
                      ))}
                    </td> */}
                    <td>
                      <span className='font-semibold'>₹{user.seats.reduce((total, seat) => total + seat.price, 0)}</span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Ticketlist