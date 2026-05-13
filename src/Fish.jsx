import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from "axios";

export const Fish =()=> {

    const params = useParams();
    const id = params.Id;
    const[fish,setFish] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await axios.get(`https://halak.sulla.hu/api/HalakDTO/${id}`);
            setFish(res.data);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || !fish.id ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                            <p className="text-dark">Hal neve: {fish.nev}</p>
                            <p className="text-danger">Haj faja: {fish.faj}</p>
                            <p className="text-danger">Hal mérete: {fish.meretCm}</p>
                            <p className="text-danger">Melyik tóban őshonos: {fish.toNev}</p>
                                
                                <br />
                                <NavLink key={fish.id} to={"/halak"}>
                                    <button className="btn btn-primary">Vissza</button>
                                </NavLink>
                                <br />
                                  </div>
                                    
                            </div>
                        
                    )}
                </div>
            );
}
