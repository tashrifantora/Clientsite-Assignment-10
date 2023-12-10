import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const AddProducts = () => {
    const brands = useLoaderData()


    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.options.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const image = form.image.value;
        const newProducts = { name, category, price, Rating: rating, description, image }
        console.log(newProducts)


        // Fatching method from client
        fetch('https://velocity-vertex-server.vercel.app/cars', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product added successfylly',
                        footer: '<a href="">Thank you</a>'
                    })
                    form.reset()
                }
            })

    }
    return (
        <div className="mx-14">
            <h2 className="text-4xl font-bold text-center mb-8">Add Product</h2>

            <form onSubmit={handleAddProduct} className="">

                {/* From row  name & category*/}
                <div className="md:flex gap-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Car Model:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Car Model Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Category:</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full " name="options">
                                <option value="DEFAULT" disabled selected>Car Options</option>
                                {
                                    brands.map(brand => <option value={brand.id} key={brand.id}>{brand.name}</option>)
                                }
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
                            <input type="tel" name="price" placeholder="Car price" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Rating:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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
                            <textarea className=" text-lg pl-3" name="description" id="" cols="80" rows="6" placeholder="Discription..."></textarea>
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
                            <input type="photo" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Product" className="btn btn-block bg-sky-900 text-white" />

            </form>
        </div>
    );
};

export default AddProducts;