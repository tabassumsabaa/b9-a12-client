import Banner from "../Banner/Banner";
import LatestSurvey from "../LatestSurvey/LatestSurvey";
import MostVoted from "../MostVoted/MostVoted";
import Work from "../Work/Work";
import Faqs from "./Faqs/Faqs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MostVoted></MostVoted>
            <LatestSurvey></LatestSurvey>
            <Work></Work>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;