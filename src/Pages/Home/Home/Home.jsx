import Banner from "../Banner/Banner";
import LatestSurvey from "../LatestSurvey/LatestSurvey";
import MostVoted from "../MostVoted/MostVoted";
import Work from "../Work/Work";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MostVoted></MostVoted>
            <LatestSurvey></LatestSurvey>
            <Work></Work>
        </div>
    );
};

export default Home;