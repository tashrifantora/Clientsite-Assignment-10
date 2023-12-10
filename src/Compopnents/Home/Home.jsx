import { useLoaderData } from "react-router-dom";
import CarCategory from "../CarCategory/CarCategory";
import CategorySection from '../../../public/img/homeSection.jpg'
import ExtraSection from "../ExtraSection/ExtraSection";


const Home = () => {
    const carsCategory = useLoaderData([]);

    return (
        <div className="px-5 md:px-10">
            <div className="hero h-[820px] mb-20 " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> Velocity Vertex</h1>
                        <p className="mb-5">Discover DriveHub your ultimate destination for premium cars in the heart of the city. Our showroom features a carefully curated selection of high-quality vehicles, from sleek sedans to adventurous SUVs. At DriveHub, we prioritize your satisfaction, offering a seamless car-buying experience with expert guidance from our friendly staff. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="my-14">
                <div>
                    <h2 className="text-5xl font-bold text-center mb-6">Our available Branded Car Section</h2>
                    <p className="text-center mx-auto max-w-2xl leading-7 mb-8">Drive into excellence at our brand car shop, where luxury meets performance. Discover a curated collection of premium vehicles, each embodying sophistication and cutting-edge technology. Our expert team ensures a seamless experience.</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            carsCategory.map(carCategory => <CarCategory
                                key={carCategory.id}
                                carCategory={carCategory}
                            ></CarCategory>)
                        }
                    </div>
                    <img className=" md:w-full lg:w-1/2" src={CategorySection} alt="" />
                </div>

            </div>

            <ExtraSection></ExtraSection>


        </div>



    );
};

export default Home;