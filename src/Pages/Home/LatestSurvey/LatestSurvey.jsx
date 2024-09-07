import { useEffect, useState } from "react";
import SurveyCart from "../../Shared/Surveys/SurveyCart";


const LatestSurvey = () => {
    const [latestSurveys, setLatestSurveys] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/suurveys')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setLatestSurveys(sortedData.slice(0, 6));
            });
    }, []);

    return (
        <div>
            <div className="text-center mt-24 flex justify-center items-center mb-5">
                <h3 className="text-3xl flex items-center my-10 mx-auto absolute text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 py-4 border-orange-400">
                    Latest Survey
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-7xl my-14 md:bg-orange-100 md:pl-5">
                {
                    latestSurveys.map(survey => <SurveyCart
                    key={survey._id}
                    survey={survey}
                    showDetailsButton={false}
                    ></SurveyCart>)
                }
            </div>
            
        </div>
    );
};

export default LatestSurvey;
