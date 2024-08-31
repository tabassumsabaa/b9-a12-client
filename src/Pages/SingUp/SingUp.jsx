import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import signImg from "../../assets/Image/sing.avif";
import { MdFlood } from "react-icons/md";
import Swal from "sweetalert2";

const SingUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {  createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)  // Use createUser to sign up a new user
        .then(result => {
            const user = result.user;
            console.log("User created:", user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.email} User Created Successfully`,
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/login');
        })
        .catch(error => {
            console.error("Sign-Up Error:", error);
        });
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('Google Sign-In Error:', error);
            });
    }

    const seePass = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="hero bg-base-200 min-h-screen bg-opacity-15">
            <div className="hero-content flex-col lg:flex-row-reverse my-6">
                <div className="text-center md:w-1/2 lg:text-left py-6">
                    <Link to="/">
                      <button className="btn btn-active text-orange-500 bg-white flex justify-center items-center m-auto mb-10 text-5xl">
                          <MdFlood></MdFlood>
                      </button>
                    </Link>
                    <img src={signImg} alt="" />
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl border-t-4 border-b-4 border-orange-400">
                    <div className="text-center p-6">
                        <h1 className="text-5xl font-bold text-orange-500">Sing Up!</h1>

                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative ">
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password"
                                    className="input input-bordered pl-3 pr-12 block w-full px-4 py-2 text-gray-700 
                                bg-base-100 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                               focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none 
                               focus:ring focus:ring-opacity-40" required />
                                <div className="absolute e top-1/2 -translate-y-1/2 right-3 mb-2 text-lg inset-y-0 flex items-center px-3 cursor-pointer" onClick={seePass}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-500 text-white hover:text-black" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <div className="text-center mx-auto  mb-8">
                        <p>Already have an account? <Link to="/login" className="text-orange-500 font-bold">Sing In</Link></p>
                        <p className="text-2xl font-medium my-2">OR</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-active bg-white text-black rounded-xl sm:btn-sm md:btn-md">Continue with
                            <span className="text-3xl"> <FcGoogle></FcGoogle> </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;