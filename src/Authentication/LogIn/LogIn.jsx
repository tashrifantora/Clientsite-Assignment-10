import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'


const LogIn = () => {
    const { userSignIn, loading } = useContext(AuthContext);
    const navigation = useNavigate()




    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }


    const handleSignIn = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)


        userSignIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Well done',
                    text: 'You registered successully',
                    footer: '<a href="">Thank you</a>'
                });
                navigation('/')

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} !!`,
                })
            })

    }


    return (
        <div className="px-5 md:px-10">

            <div className="bg-sky-200 p-5 mt-8">
                <h2 className="text-4xl my-8 text-center font-bold">Please Login</h2>


                <form onSubmit={handleSignIn} className=" md:w-3/4 lg:w-1/2 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Email:</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Password:</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn text-bold bg-sky-900  text-white border-none">Login</button>
                    </div>
                </form>
                <p className="text-center text-lg  font-medium mt-4">Do not have account ? Please <Link className="text-blue-800 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LogIn;