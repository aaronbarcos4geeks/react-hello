import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {

	const cardsData = [
		{ title: "Card 1", description: "An amazing beach", imgSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" },
		{ title: "Card 2", description: "An amazing mountain", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" },
		{ title: "Card 3", description: "An amazing forest", imgSrc: "https://ecosistemas.ovacen.com/wp-content/uploads/2018/01/bosque.jpg" },
		{ title: "Card 4", description: "An amazing city", imgSrc: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" },
	];

	return (
		<div className="text-center">
			<Navbar />
			<div className="container pt-4 d-flex flex-column gap-4 align-items-center" style={{ marginBottom: "8rem" }}>
				<Jumbotron />
				<div className="row row-cols-1 row-cols-lg-4 gap-5 justify-content-center" style={{ padding: 'inherit' }}>
					{cardsData.map((card, index) => (
						<Card key={index} title={card.title} description={card.description} imgSrc={card.imgSrc} className="col" />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
