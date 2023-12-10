import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import googleLogo from '../../../public/img/GoogleLogo.webp'
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser, signInWithGoogle, loading } = useContext(AuthContext);
    const nevigate = useNavigate()

    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }


    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.image.value;
        const password = form.password.value;

        console.log(name, email, password, photo)

        // Password varification 
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'your password should have at least 6 character or longer !!'
            })
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'your password should have at least 1 capital letter',
            });
            return
        }
        else if (!/[-/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You also have provide a special character'
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                // Update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('Profile updated')
                    })
                    .catch((error) => {
                        console.log(error)
                    })

                Swal.fire({
                    icon: 'success',
                    title: 'Well done',
                    text: 'You registered successully',
                    footer: '<a href="">Thank you</a>'
                })



                nevigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} !!`,
                })
            })
    }


    // SignIn with Google

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Well done',
                    text: 'Your google sign up successful',
                    footer: '<a href="">Thank you.</a>'
                })
                nevigate('/')
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
            <div className="bg-sky-300 p-5 mt-8">
                <h2 className="text-4xl my-8 text-center font-bold text-white">Please Register</h2>

                <form onSubmit={handleCreateUser} className=" md:w-3/4 lg:w-1/2 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Name:</span>
                        </label>
                        <input type="text" required name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Photo:</span>
                        </label>
                        <input type="photo" required name="image" placeholder="Image URL" className="input input-bordered" />
                    </div>

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
                        <button className="btn text-bold bg-sky-900  text-white border-none">Register</button>
                    </div>
                </form>

                <div className="text-center mt-5">
                    <button onClick={handleGoogleSignIn} className="btn text-lg  bg-sky-900  text-white border-none">
                        <img className="w-6" src={googleLogo} alt="" />
                        Google
                    </button>
                </div>

                <p className="text-center text-lg  font-medium mt-4">Do you already have an account ? <Link className="text-blue-800 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;