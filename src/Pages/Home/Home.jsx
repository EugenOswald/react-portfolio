import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import HeroSection from './HeroSection/HeroSection';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import MySkills from './MySkills/MySkills';

const Home = () => {
	return (
		<>
			<HeroSection />
			<MySkills />
			<AboutMe />
			<MyPortfolio />
			<ContactMe />
		</>
	);
};

export default Home;
