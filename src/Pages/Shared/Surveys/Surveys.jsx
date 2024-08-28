import { useEffect, useState } from "react";
import SurveyCart from "./SurveyCart";


const Surveys = () => {
    const [surveys, setSurveys] = useState([]);

    const [filteredSurveys, setFilteredSurveys] = useState([]);
    const [category, setCategory] = useState("");
    const [sortOrder, setSortOrder] = useState(""); 

    useEffect(() => {
        fetch('http://localhost:5000/suurveys')
            .then(res => res.json())
            .then(data => {
                setSurveys(data);
                setFilteredSurveys(data);
            })
    }, []);
  
    useEffect(() => {
        let filtered = [...surveys];

        if (category && category !== "all") {
            filtered = filtered.filter(survey => survey[category] !== undefined);
        }

        if (sortOrder === "Asc") {
            filtered.sort((a, b) => a.totalVotes - b.totalVotes);
        } else if (sortOrder === "Dsc") {
            filtered.sort((a, b) => b.totalVotes - a.totalVotes);
        }

        setFilteredSurveys(filtered);
    }, [category, sortOrder, surveys]);
    
    
        
    return (
        <div className="pt-20 lg:pt-32 pb-10">
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4">
                    Survey
                </h3>
            </div>

            <div className="flex justify-center items-center my-6 gap-7"> 
                <div className="flex justify-center items-center">
                   <p className="font-bold">Categories: </p>               
                    <select className="p-2 border border-gray-300 rounded ml-2 " name="Category" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option className="font-medium" value="all">Select A Category</option>
                        <option className="capitalize" value="affectedPeople">affected People</option>
                        <option className="capitalize" value="homelessPeople">homeless People</option>
                        <option className="capitalize" value="donationsReceived">donations Received</option>
                        <option className="capitalize" value="aidDistributed">aid Distributed</option>
                        <option className="capitalize" value="totalVotes">total Votes</option>
                    </select>  
                </div>     
                <div className="flex justify-center items-center">
                    <p className="font-bold">Votes: </p>
                    <select className="p-2 border border-gray-300 rounded ml-2" name="voted" 
                       value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}>
                        <option className="font-medium" value="all">Short By Vote</option>
                        <option value="Asc">Ascending</option>
                        <option value="Dsc">Descending</option>                       
                    </select> 
                </div>           
            </div>
            <div className="relative z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
                {
                    filteredSurveys.map(survey => <SurveyCart
                        key={survey._id}
                        survey={survey}
                    ></SurveyCart>)
                }
            </div>
        </div>
    );
};

export default Surveys;