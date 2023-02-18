import currency from '../images/image-currency.jpg';
import restaurant from '../images/image-restaurant.jpg';
import confetti from '../images/image-confetti.jpg';
import plane from '../images/image-plane.jpg';

function ArticleSection() {
	return (
		<section className="articles__section">
			<h1 className="article__heading">Latest Articles</h1>

			<div className="articles__body">
				<div className="articles__item">
					<img src={currency} alt=""></img>
					<h5>By Claire Robinson</h5>
					<h3>Receive money in any currency with no fees</h3>
					<p>
						The world is getting smaller and we're becoming more mobile. So why
						should you be forced to receive money in a single ...
					</p>
				</div>

				<div className="articles__item">
					<img src={restaurant} alt=""></img>
					<h5>By Wilson Hutton</h5>
					<h3>Treat yourself without worrying about money</h3>
					<p>
						Our simple budgeting feature allows you to separate out your
						spending and set realistic limits each month. That means you ...
					</p>
				</div>

				<div className="articles__item">
					<img src={plane} alt=""></img>
					<h5>By Wilson Hutton</h5>
					<h3>Take your Easybank card wherever you go</h3>
					<p>
						We want you to enjoy travels. This is why we don't charge fees on
						purchases while your abroad. We'll even show you ...
					</p>
				</div>

				<div className="articles__item">
					<img src={confetti} alt=""></img>
					<h5>By Claire Robinson</h5>
					<h3>Our invite-only Beta accounts are now live!</h3>
					<p>
						After a lot hard work by the whole team, we're excited to launch our
						closed beta. It's easy to request an invite through the site ...
					</p>
				</div>
			</div>
		</section>
	);
}

export default ArticleSection;
