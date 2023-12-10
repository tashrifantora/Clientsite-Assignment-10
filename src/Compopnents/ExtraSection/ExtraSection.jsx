import { MdOutlineEngineering } from "react-icons/md";
import { BiSolidCarMechanic } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { GrAction } from "react-icons/gr";

const ExtraSection = () => {
    return (
        <div>
            {/* Extra section 1*/}
            <div>
                <h1 className="text-5xl text-center mb-8">Our Extra services</h1>
                <p className="text-center mx-auto max-w-2xl leading-7 mb-8">Extra services encompass a range of supplementary offerings that complement or enhance a primary product or service. These may involve upgrades, add-ons, customization, extended warranties, maintenance packages, consultation, training, or freebies.</p>

                {/* section 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div className="border rounded-lg p-6 shadow-xl">
                        <div className="w-16">
                            <MdOutlineEngineering className="p-3 w-20 h-20 mx-auto border rounded-full bg-base-200 mb-2"></MdOutlineEngineering>
                        </div>
                        <h1 className="text-2xl font-semibold mb-2">Engine Upgrades</h1>
                        <p className="text-lg">Engine upgrade facilities include a dyno room, assembly space, machine shop, CAD station, clean room, welding area, specialized tools, fuel calibration, emissions testing, safety measures, training, documentation, and consultation spaces.</p>
                    </div>

                    {/* section 2 */}
                    <div className="border rounded-lg p-6 shadow-xl">
                        <div className="w-16">
                            <BiSolidCarMechanic className="p-3 w-20 h-20 mx-auto border rounded-full bg-base-200 mb-2"></BiSolidCarMechanic>
                        </div>
                        <h1 className="text-2xl font-semibold mb-2">Free Support</h1>
                        <p className="text-lg">Free support refers to assistance or services provided at no cost. This can include technical support, customer service, or guidance offered without charges to users or customers.</p>
                    </div>

                    {/* section 3 */}
                    <div className="border rounded-lg p-6 shadow-xl">
                        <div className="w-16">
                            <GrShieldSecurity className="p-3 w-20 h-20 mx-auto border rounded-full bg-base-200 mb-2"></GrShieldSecurity>
                        </div>
                        <h1 className="text-2xl font-semibold mb-2">Security Inspections</h1>
                        <p className="text-lg">Security inspections involve assessing a facility or system to identify vulnerabilities, risks, and compliance with safety protocols. These evaluations aim to enhance security measures and minimize potential threats or hazards.</p>
                    </div>

                    {/* section 4 */}
                    <div className="border rounded-lg p-6 shadow-xl">
                        <div className="w-16">
                            <GrAction className="p-3 w-20 h-20 mx-auto border rounded-full bg-base-200 mb-2"></GrAction>
                        </div>
                        <h1 className="text-2xl font-semibold mb-2">Break Checkup</h1>
                        <p className="text-lg">A brake checkup is an examination of a vehicles braking system to assess its condition, including brake pads, rotors, fluid, and overall performance. Regular brake checkups are crucial for safety and maintenance.</p>
                    </div>
                </div>


            </div>


            {/* Extra Section 2 */}
            <div>
                <div className="hero md:w-4/5  h-[400px] m-36 mx-auto" style={{ backgroundImage: 'url(https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="mx-auto">
                        <h2 className="md:text-3xl text-white mb-6">Sign up and get <span className="md:text-4xl font-bold">10% OFF</span> your first order</h2>
                        <div className="md:flex">
                            <input className="w-full p-3 rounded" type="email" name="email" id="" placeholder="Email Address" />

                            <button className="btn bg-sky-900 text-white border-none">Subscribe</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;