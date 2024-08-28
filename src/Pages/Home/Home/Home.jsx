import Banner from "../Banner/Banner";
import LatestSurvey from "../LatestSurvey/LatestSurvey";
import MostVoted from "../MostVoted/MostVoted";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MostVoted></MostVoted>
            <LatestSurvey></LatestSurvey>
        </div>
    );
};

export default Home;