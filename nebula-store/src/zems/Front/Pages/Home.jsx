import Hero from '../Components/Section/Hero';
import Categories from '../Components/Section/Categories';
import FeaturedProducts from '../Components/Section/FeaturedProducts';
import FlashSale from '../Components/Section/FlashSale';
import NewArrivals from '../Components/Section/NewArrivals';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Categories />
            <FeaturedProducts />
            <FlashSale />
            <NewArrivals />
        </div>
    );
};

export default Home;
