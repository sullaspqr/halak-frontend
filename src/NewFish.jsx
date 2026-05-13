import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewFish = () => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // await axios.post("https://localhost:5000/api/HalakDTO", {...})
            await axios.post("https://halak.sulla.hu/api/HalakDTO", {
                nev: event.target.elements.nev.value,
                faj: event.target.elements.faj.value,
                meretCm: event.target.elements.meretCm.value,
                toNev: event.target.elements.toNev.value,
            });

            navigate("/");
        } 
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új hal felvitele</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Hal neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="nev" className="form-control" />
                    </div>
                </div>

                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Hal faja:</label>
                    <div className="col-sm-9">
                        <input type="text" name="faj" className="form-control" />
                    </div>
                </div>

                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Méret (cm):</label>
                    <div className="col-sm-9">
                        <input type="text" name="meretCm" className="form-control" />
                    </div>
                </div>

                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Őshonos tó neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="toNev" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">
                    Küldés
                </button>

            </form>
        </div>
    );
};