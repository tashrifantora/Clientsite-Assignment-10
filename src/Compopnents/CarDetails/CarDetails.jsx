import { Link, useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { GrUpdate } from "react-icons/gr";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import { useContext } from "react";



const CarDetails = () => {
    const carDetails = useLoaderData()
    const { loading } = useContext(AuthContext);

    const { _id, category, name, image, description, price, rating } = carDetails;


    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }


    const handleSelectedCars = (selectedId) => {
        console.log(selectedId)
        fetch(`https://velocity-vertex-server.vercel.app/mycart`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ name, image, description, price, rating, category })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you',
                    text: 'Your product added successully',
                });
            })
    }


    return (
        <div className="mx-3 md:mx-10">
            <div className="card  md:w-2/3  lg:w-2/4 mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Car" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p><span className="text-lg font-semibold">Details:</span> {description}</p>
                    <div className=" flex gap-24">
                        <Link to={`/updateinfo/${_id}`}>
                            <button className="btn bg-sky-900 text-white">
                                <GrUpdate className="text-lg"></GrUpdate>Update
                            </button>
                        </Link>

                        <Link to={`/mycart/${_id}`}>
                            <button onClick={() => handleSelectedCars(_id)} className="btn bg-sky-900 text-white"><FaShoppingCart className="text-lg"></FaShoppingCart> Add To Cart</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarDetails;