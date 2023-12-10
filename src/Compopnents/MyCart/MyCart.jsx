import { useLoaderData } from "react-router-dom";
import SelectedCar from "../SelectedCars/SelectedCar";
import { useState } from "react";


const MyCart = () => {
    const selectedCars = useLoaderData();
    const [cars, setCars] = useState(selectedCars)


    return (
        <div className="px-10">
            <div>
                <h2 className="text-5xl font-bold text-center mb-5">Your selected product</h2>
                {
                    cars.map(car => <SelectedCar key={car._id}
                        car={car}
                        cars={cars}
                        setCars={setCars}

                    ></SelectedCar>)
                }
            </div>
        </div>
    );
};

export default MyCart;