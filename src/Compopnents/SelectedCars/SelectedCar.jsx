import PropTypes from 'prop-types';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const SelectedCar = ({ car, cars, setCars }) => {

    console.log(cars, setCars)
    const { _id, name, image, price, rating } = car;

    /*  const carAdded = addedCar.filter(cars => cars._id !== _id);
     setAddedCar(addedCar); */


    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log("Deleted")

                    fetch(`https://velocity-vertex-server.vercel.app/product-details/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your added product has been deleted.',
                                    'success'
                                )
                                const remaining = cars.filter(car => car._id !== _id)
                                setCars(remaining)
                            }
                        })
                }
            })
    }

    return (
        <div className='md:px-10'>
            <div className="card h-[450px] md:w-2/3 mx-auto lg:card-side bg-base-100 shadow-xl p-4 mb-8">
                <figure><img className='p-5' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Car Model: {name}</h2>
                    <p><span className='text-lg font-semibold'>Price:</span> ${price}</p>
                    <p><span className='text-lg font-semibold'>Rating:</span> {rating}</p>
                    <div className="card-actions justify-end">
                        <Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-sky-900 text-white"><AiFillDelete className='text-xl'></AiFillDelete> Delete</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

SelectedCar.propTypes = {
    car: PropTypes.object
}

export default SelectedCar;