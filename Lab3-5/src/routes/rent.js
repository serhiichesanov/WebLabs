import React, { useState, useEffect } from 'react';
import './styles/rent.css';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Rents() {
    const [rents, setRents] = useState([]);

    useEffect(() => {
        const requestURL = 'http://localhost:8000/rent';
        axios.get(requestURL)
            .then((data) => {
                setRents(data.data);
            });
    }, []);

    return(
        <div>
            <div class="title">
                Rents
            </div>
            <table class="table">
        <thead>
            <tr>
                <th>car ID</th>
                <th>user ID</th>
                <th>rent starts at</th>
                <th>rent ends at</th>
                <th>status</th>
            </tr>
        </thead>
        <tbody>
        {
                            rents.map((rent) => (
                                <tr key={rent.id}>
                                    <td>{rent.carId}</td>
                                    <td>{rent.userId}</td>
                                    <td>{rent.startRent}</td>
                                    <td>{rent.endRent}</td>
                                    <td>{rent.status}</td>
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
