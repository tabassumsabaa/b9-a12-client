import { useEffect, useState } from "react";
import SurveyCart from "../../Shared/Surveys/SurveyCart";



const MostVoted = () => {
    const [mostVote, setMostVote] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/suurveys')
            .then(res => res.json())
            .then(data => {
                const Most = data.sort((a, b) => b.totalVotes - a.totalVotes);
                const top = Most.slice(0, 6);
                setMostVote(top);
            })
    }, []);
    return (
        <div >
            <div className="text-center mt-24 flex justify-center items-center">
                <h3 className="text-3xl flex items-center my-10 mx-auto absolute text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 py-4 border-orange-400">
                    Most VOTED Survey
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl my-7">
                {
                    mostVote.map(survey => <SurveyCart
                        key={survey._id}
                        survey={survey}
                        showDetailsButton={false}
                    ></SurveyCart> )
                }
            </div>
        </div>
    );
};

export default MostVoted;