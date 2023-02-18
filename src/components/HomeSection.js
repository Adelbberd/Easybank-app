import introMobileImg from '../images/figma-designs/figma-images/bg-intro-mobile.svg';
import introDesktopImg from '../images/figma-designs/figma-images/easybank desktop image.svg';
import RequestBtn from './RequestBtn';

function HomeSection() {
	return (
		<section className="home__section">
			<div className="home_intro_image">
				<img src={introMobileImg} alt="background mobile intro" />
			</div>
			<div className="home_intro_div">
				<h1 className="home_section_heading">
					Next generation
					<br />
					digital banking
				</h1>

				<p>
					Take your financial life online. Your Easybank account will be
					one-stop-shop for spending, saving, budgeting, investing and much
					more.
				</p>

				<RequestBtn />
			</div>

			<img
				src={introDesktopImg}
				alt="background mobile intro"
				className="home_intro_image_desktop"
			/>
		</section>
	);
}

export default HomeSection;
