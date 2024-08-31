import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const SurveysDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [survey, setSurvey] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    // const [comment, setComment] = useState('');
    // const [results, setResults] = useState(null);
    // const [reported, setReported] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/suurveys/${id}`)
            .then(res => res.json())
            .then(data => setSurvey(data))
    }, []);

    const handleOptionChange = (question, answer) => {
        setSelectedAnswers(prevState => ({ ...prevState, [question]: answer }));
    };

    const handleVoteSubmit = (id) => {
        if (user && user.email) {
            console.log(user.email, id);
            const voters = {
                VoterId: survey._id,
                email: user.email,
                title: survey.title,
                createdAt: survey.createdAt
            }
            axiosSecure.post(`/votes`, voters)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${survey.city} added to Surveys`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not log in to vote.",
                text: "Please log in!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    //console.log(id);        
    console.log("Submitted Answers: ", selectedAnswers);
    // submitVote(id, selectedAnswers).then(response => setResults(response.results));
    const handleReportSurvey = (id) => {
        if (user && user.email) {
            const reportData = {                
                email: user.email,
                title: survey.title,
            };
            axiosSecure.post(`/reports`, reportData)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Survey reported successfully!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch(); 
                    }
                })
                .catch(err => console.error("Error reporting survey:", err));
        } else {
            Swal.fire({
                title: "You are not logged in to report.",
                text: "Please log in!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }

        // const handleAddComment = () => {
        //     if (isProUser && comment.trim()) {
        //         addComment(id, comment).then(() => {
        //             alert('Comment added');
        //             setComment('');
        //         });
        //     } else {
        //         alert('Only pro users can add comments.');
        //     }
        // };

        // if (!survey) {
        //     return <div>Loading...</div>;
        // }
    };
    return (
        <div className="container mx-auto p-6 pt-20 lg:pt-32 pb-10">
            <div className="border-2 border-orange-500 rounded-xl bg-opacity-10 my-5 p-5">
                <h1 className="text-3xl text-center uppercase font-bold mb-4 text-orange-400">{survey.city}</h1>
                <h2 className="text-3xl text-center font-bold mb-4">{survey.title}</h2>
                <div className='flex justify-center gap-3 w-[50%] m-auto'>
                    <p className="text-lg mb-4">Affected: {survey.affectedPeople}</p>
                    <p className="text-lg mb-4">Homeless: {survey.homelessPeople}</p>
                </div>
                <div className="flex justify-center gap-3 w-[50%] m-auto">
                    <p className="text-lg mb-4">CreateAt: {survey.createdAt}</p>
                    <p className="text-lg mb-4">Deadline: {new Date(survey.deadline).toLocaleDateString()}</p>
                </div>
                {/* Survey Questions */}
                <div className="border w-[70%] m-auto p-4 mb-6">
                    <h2 className="text-2xl text-center font-bold mb-4">Survey Questions</h2>
                    {/* Question 1 */}
                    <div className="mb-4 border-2 rounded-xl border-orange-500 p-4">
                        <p className="text-xl my-3">1. Are you interested in donating?</p>
                        <label>
                            <input type="radio" name="q1" value="yes" checked={selectedAnswers['q1'] === 'yes' ? 'bg-green-500' : ''}
                                onChange={() => handleOptionChange('q1', 'yes')} /> Yes
                        </label>
                        <label className="ml-4">
                            <input type="radio" name="q1" value="no" checked={selectedAnswers['q1'] === 'no' ? 'bg-red-500' : ''}
                                onChange={() => handleOptionChange('q1', 'no')} /> No
                        </label>
                    </div>
                    {/* Question 2 */}
                    <div className="mb-4 border-2 rounded-xl border-orange-500 p-4">
                        <p className="text-xl my-3">2.  Would you like to donate food?</p>
                        <label>
                            <input type="radio" name="q2" value="yes" checked={selectedAnswers['q2'] === 'yes'}
                                onChange={() => handleOptionChange('q2', 'yes')} /> Yes
                        </label>
                        <label className="ml-4">
                            <input type="radio" name="q2" value="no" checked={selectedAnswers['q2'] === 'no'}
                                onChange={() => handleOptionChange('q2', 'no')} /> No
                        </label>
                    </div>
                    {/* Question 3 */}
                    <div className="mb-4 border-2 rounded-xl border-orange-500 p-4">
                        <p className="text-xl my-3">3.  Would you like to donate clothes?</p>
                        <label>
                            <input type="radio" name="q3" value="yes" checked={selectedAnswers['q3'] === 'yes'}
                                onChange={() => handleOptionChange('q3', 'yes')} /> Yes
                        </label>
                        <label className="ml-4">
                            <input type="radio" name="q3" value="no" checked={selectedAnswers['q3'] === 'no'}
                                onChange={() => handleOptionChange('q3', 'no')} /> No
                        </label>
                    </div>
                    {/* Question 4 */}
                    <div className="mb-4 border-2 rounded-xl border-orange-500 p-4">
                        <p className="text-xl my-3">4.  Would you like to donate water?</p>
                        <label>
                            <input type="radio" name="q4" value="yes" checked={selectedAnswers['q4'] === 'yes'}
                                onChange={() => handleOptionChange('q4', 'yes')} /> Yes
                        </label>
                        <label className="ml-4">
                            <input type="radio" name="q4" value="no" checked={selectedAnswers['q4'] === 'no'}
                                onChange={() => handleOptionChange('q4', 'no')} /> No
                        </label>
                    </div>
                    {/* Question 5 */}
                    <div className="mb-4 border-2 rounded-xl border-orange-500 p-4">
                        <p className="text-xl my-3">5. Are you satisfied our work?</p>
                        <label>
                            <input type="radio" name="q5" value="yes" checked={selectedAnswers['q5'] === 'yes'}
                                onChange={() => handleOptionChange('q5', 'yes')} /> Yes
                        </label>
                        <label className="ml-4">
                            <input type="radio" name="q5" value="no" checked={selectedAnswers['q5'] === 'no'}
                                onChange={() => handleOptionChange('q5', 'no')} /> No
                        </label>
                    </div>
                    {/* Question 6 */}
                    <div className="mb-4 border-2 rounded-xl border-orange-500 p-4">
                        <p className="text-xl my-3">6. What you think to change there?</p>
                        <label>
                            <input type="radio" name="q6" value="yes" checked={selectedAnswers['q6'] === 'yes'}
                                onChange={() => handleOptionChange('q6', 'yes')} /> Yes
                        </label>
                        <label className="ml-4">
                            <input type="radio" name="q6" value="no" checked={selectedAnswers['q6'] === 'no'}
                                onChange={() => handleOptionChange('q6', 'no')} /> No
                        </label>
                    </div>
                    {/* Submit Vote Button */}
                    <button className="btn bg-blue-500 text-white mt-4" onClick={() => handleVoteSubmit(id)} disabled={Object.keys(selectedAnswers).length < 5}>
                        Submit Vote
                    </button>
                    {/* Report Survey Button */}
                    <button className="btn bg-red-500 text-white mt-4 ml-4" onClick={() => handleReportSurvey(id)}>
                        Report Survey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SurveysDetails;