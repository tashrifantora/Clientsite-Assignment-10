import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const UpdateForm = () => {
    const updatedCars = useLoaderData();
    const { _id, name, category, price, rating, image, description } = updatedCars;

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.options.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const image = form.image.value;
        const updatedCars = { name, category, price, Rating: rating, description, image }
        console.log(updatedCars)


        // Fatching method from client
        fetch(`https://velocity-vertex-server.vercel.app/product-details/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCars)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Car updated successfylly',
                        footer: '<a href="">Thank you!!</a>'
                    })
                    form.reset()
                }
            })

    }
    return (
        <div>

            <div className="mx-14">
                <h2 className="text-4xl font-bold text-center mb-8">Update Products:- {name}</h2>

                <form onSubmit={handleUpdateProduct} className="">

                    {/* From row  name & category*/}
                    <div className="md:flex gap-10 mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Car Model:</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Car Model Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Category:</span>
                            </label>
                            <label className="input-group">
                                <select className="select select-bordered w-full " defaultValue={category} name="options">
                                    <option value="DEFAULT" disabled selected>Car Options</option>
                                    <option value='1'>Toyota</option>
                                    <option value='2'>Ford</option>
                                    <option value='3'>BMW</option>
                                    <option value='4'>Mercedes-Benz</option>
                                    <option value='5'>Tesla</option>
                                    <option value='6'>Honda</option>
                                </select>
                            </label>
                        </div>

                    </div>

                    {/* From row price & rating */}
                    <div className="md:flex gap-10 mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Price:</span>
                            </label>
                            <label className="input-group">
                                <input type="tel" name="price" defaultValue={price} placeholder="Car price" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Rating:</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* From row description */}
                    <div className="md:flex gap-10 mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Short description:</span>
                            </label>
                            <label className="input-group w-full rounded border">
                                <textarea className=" text-lg pl-3" name="description" defaultValue={description} id="" cols="80" rows="6" placeholder="Discription..."></textarea>
                            </label>
                        </div>
                    </div>

                    {/* From row category & details */}
                    <div className="mb-8">

                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">ImageURL:</span>
                            </label>
                            <label className="input-group">
                                <input type="photo" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Submit" className="btn btn-block bg-sky-900 text-white" />

                </form>
            </div>

        </div>
    );
};

export default UpdateForm;