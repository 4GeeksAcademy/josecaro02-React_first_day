import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Title from "./Title";
import Navbar from "./Navbar";
import Cards from "./Cards";

//create your first component

let styles = {
	color: "red"
}
const Home = () => {
	return (
		// ya no es class sino className
		// los estilos en linea ahora son objetos y las propiedades del CSS se escriben en camel case
		// si se llaman variables o logica de JS en el return se hace con {}
		// siempre en el return se debe devolver un solo elemento padre
		<div className="text-center">
			<Navbar />
			<Title />
			<Cards />
			<h1>anha t-bone, porchetta <span style={{ color: "red" }}>short loin fatback</span> pork ground round meatloaf chislic kevin leberkas sirloin beef</h1>
		</div >
	);
};

export default Home;
