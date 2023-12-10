import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CarCategory = ({ carCategory }) => {
    const { id, name, image } = carCategory;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Brand: {name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/brandedcars/${id}`}>
                            <button className="btn bg-sky-900 text-white">See more</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

CarCategory.propTypes = {
    carCategory: PropTypes.object
}

export default CarCategory;