import React, { useState, useEffect } from 'react';
import './styles/car.css';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Cars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const requestURL = 'http://localhost:8000/car';
        axios.get(requestURL)
            .then((data) => {
                setCars(data.data);
            });
    }, []);

    return(
        <div>
            <div class="title">
                Cars
            </div>
            <table class="table">
        <thead>
            <tr>
                <th>car ID</th>
                <th>car mark</th>
                <th>car speed</th>
                <th>car number</th>
            </tr>
        </thead>
        <tbody>
        {
                            cars.map((car) => (
                                <tr key={car.id}>
                                    <td>{car.id}</td>
                                    <td>{car.carMark}</td>
                                    <td>{car.carSpeed}</td>
                                    <td>{car.carNumber}</td>
                                </tr>
                            ))
                        }
        </tbody>
    </table>
    <div class="home">
        <Link to="/home"><button class="btn">Home</button></Link>
    </div>
        </div>
    )
}
