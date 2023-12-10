import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import BrandedCar from "../BrandedCar/BrandedCar";


const BrandedCars = () => {
    const { loading } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    const brandedcars = useLoaderData();

    const { id } = useParams()

    const brand = brandedcars.find(item => item.id == id)


    useEffect(() => {
        fetch(`https://velocity-vertex-server.vercel.app/brandedcars/${brand.id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [brand.id])


    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }


    return (
        <div className="mx-5 md:mx-10">
            <div>
                <div className="carousel w-full  mb-8">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero h-2/3 md:h-[800px] mb-20 " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?w=1380&t=st=1697750312~exp=1697750912~hmac=c85993e8ae98a720a603579d8bea5243075e08d92878172a25b979bd28170e4f)' }}>
                            <div className="hero-content text-center text-neutral-content">

                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero h-[800px] mb-20 " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-bridge_114579-4066.jpg?w=1380&t=st=1697751248~exp=1697751848~hmac=c7668e6065072baa4a9a6fbabf6a5df5ce8abd9984ec356ab9af830f240e373b)' }}>
                            <div className="hero-content text-center text-neutral-content">

                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero h-[800px] mb-20 " style={{ backgroundImage: 'url(https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                            <div className="hero-content text-center text-neutral-content">

                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <BrandedCar
                        key={product._id}
                        product={product}
                    ></BrandedCar>)
                }
            </div>
        </div>
    );
};

export default BrandedCars;