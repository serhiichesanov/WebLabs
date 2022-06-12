import React from "react";
import { Link } from "react-router-dom";
import './styles/home.css'

export default function Home() {
    return (
        <div>
            <div className="title">
                Renting car site
            </div>
            <div className="centered-home">
                <Link to="/cars">
                    <button className="btn-home">Cars list</button>
                </Link>
                <Link to="/rent">
                    <button className="btn-home">Create new rent</button>
                </Link>
                <Link to="/rents">
                    <button className="btn-home">Watch rents</button>
                </Link>
                <Link to="/users">
                    <button className="btn-home">Watch users</button>
                </Link>
            </div>
            <Link to="/login">
                <div>
                    <button className="btn-home signup-home">Sign in</button>
                </div>
                </Link>
        </div>
    );
}