import { Helmet } from "react-helmet";
import Contact from "../Contact/Contact";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Available from "../Available/Available";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home|Trex Outfit Of The Day</title>
            </Helmet>
            
            <Banner></Banner>
            <Featured></Featured>
            <ProductCard></ProductCard>
            <Available></Available>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;