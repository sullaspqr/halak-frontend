import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const Fishes = () => {
    const [fishes, setFishes] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);

        axios
            .get("https://halak.sulla.hu/api/halakDTO")
            .then((response) => {
                setFishes(response.data);
            })
            .catch(console.log)
            .finally(() => setFetchPending(false));
    }, []);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Halak</h2>
                    {fishes.map((fish, index) => (
                        <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                            <p className="text-dark">Hal neve: {fish.nev}</p>
                            <p className="text-danger">Haj faja: {fish.faj}</p>
                            <p className="text-danger">Hal mérete: {fish.meretCm}</p>
                            <p className="text-danger">Melyik tóban őshonos: {fish.toNev}</p>
                            <div className="card-body">
                                
                                <br />
                                <NavLink to={"/hal/" + fish.id} className="btn btn-primary">
                                    További adatok
                                </NavLink>
                                <NavLink to={"/halak"} className="btn btn-danger">
                                    Vissza
                                </NavLink>
                                <br />
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}