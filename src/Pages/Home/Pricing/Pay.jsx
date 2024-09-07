import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Pay = () => {
    return (
        <div className="pt-20 lg:pt-32 pb-10">
             <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 mb-10 lg:py-4">
                    Payment
                </h3>
            </div>
            <div className=" p-20 border-orange-400 border-2 ">
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Pay;