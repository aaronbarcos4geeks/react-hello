import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {

	const cardsData = [
		{ title: "Card 1", description: "This is the description for card 1" },
		{ title: "Card 2", description: "This is the description for card 2" },
		{ title: "Card 3", description: "This is the description for card 3" },
		{ title: "Card 4", description: "This is the description for card 4" },
	];

	return (
		<div className="text-center">
			<Navbar />
			<div className="container pt-4 d-flex flex-column gap-4 align-items-center" style={{ marginBottom: "8rem" }}>
				<Jumbotron />
				<div className="row row-cols-1 row-cols-lg-4 gap-5 justify-content-center" style={{ padding: 'inherit' }}>
					{cardsData.map((card, index) => (
						<Card key={index} title={card.title} description={card.description} className="col" />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
