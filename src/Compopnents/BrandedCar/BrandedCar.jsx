import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Provider/AuthProvider';


const BrandedCar = ({ product }) => {
    const { loading } = useContext(AuthContext)
    const { _id, name, image, description, price, rating } = product

    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    return (
        <div>

            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand Name: {name}</h2>
                    <p className='text-lg font-semibold'>Price: ${price} </p>
                    <p className='text-lg font-semibold'>Rating: {rating} </p>
                    <p><span className='text-lg font-semibold'>Description:</span> {description}</p>
                    <div className="card-actions justify-between">

                        <Link to={`/brandedcar-details/${_id}`}>
                            <button className="btn bg-sky-900 text-white">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

BrandedCar.propTypes = {
    product: PropTypes.object
}

export default BrandedCar;