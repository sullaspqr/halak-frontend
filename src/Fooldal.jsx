import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
export const Fooldal=()=> {
    return (
        <div>
            <h1>Főoldal</h1>
            <h2>Üdvözöljük az oldalon!</h2>
            <Link to={'/halak'} className="btn btn-primary">Tovább a halakhoz</Link>
        </div>
    );
}