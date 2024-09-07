import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAdmin from "../../../Hooks/useAdmin";
import { AuthContext } from "../../../Providers/AuthProvider";


const CheckOutFrom = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price: 5 })
            .then(res => {
                console.log(res.data.clientSecret);

                setClientSecret(res.data.clientSecret);

            })
    }, [axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }
        // Confirm the card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('Error confirming card payment', confirmError);
            //setError(confirmError.message);
        } else {
            console.log('Payment successful', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction id: ', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: user?.email,
                    price: 5,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                };
                // Save payment to the database
                axiosSecure.post('/payments', payment)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('Payment information saved successfully');
                        }
                    })
                    .catch(err => console.log('Error saving payment info:', err));
            }
            // Update user role to pro-user
            // axiosSecure.post('/update-user-role', { role: 'pro-user' }).then(() => {
            //     alert('Your account has been upgraded to Pro!');
            // });
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className=" btn my-10 bg-orange-500 " type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-600"> Your Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutFrom;
