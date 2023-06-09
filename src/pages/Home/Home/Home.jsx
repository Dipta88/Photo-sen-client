
import Section from "../../My Section/Section";
import PopularInstructors from "../../Popular Instructors/PopularInstructors";
import PopularClasses from "../../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import Start from "../Start/Start";

const Home = () => {
    return (
        <div>
        <Start></Start>
        <Banner></Banner>
        <Section></Section>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;