import { Link } from "react-router-dom";
import { CgMoreO } from "react-icons/cg";


const SurveyCart = ({survey,  showDetailsButton = true}) => {
    const {city, title, homelessPeople, totalVotes} = survey;
    return (
        <div className="my-7">
            <div className="card bg-base-100 w-96 shadow-xl border-t-4 border-orange-400">
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title text-green-500 font-bold text-3xl">{city}</h2>
                    <h3 className="font-medium text-2xl">{title}</h3>
                    <p className="font-medium">Home Less People: <span className="text-red-700 font-bold">{homelessPeople}</span></p>
                    <h1 className="font-medium">Total Vote: <span className="text-orange-400 font-bold">{totalVotes}</span></h1>
                    <div className="card-actions">
                       {showDetailsButton && (
                            <Link to="">
                                <button className=" btn btn-xs sm:btn-sm md:btn-md border-b-4 border-orange-400 ">View Details 
                                    <CgMoreO></CgMoreO>
                                </button>
                            </Link>
                        )}
                                                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyCart;