import {Link} from "react-router-dom";
import {useContext} from "react";
import PageContext from "../state/PageContext";

function Home() {
	const {setActivePage} = useContext(PageContext)
	
	function changePage(section) {
		setActivePage(section);
	}
	
	return (
			<>
				<div className="home">
					<div className="container home__layout">
						<div className="home__content">
							<div>
								<h1 className="title">BadBank Landing Module</h1>
								<h2 className="subtitle">Welcome to your bank</h2>
								<p className="home__text">Save your money with us <Link className="btn-main" to="/Login/" onClick={() => changePage('login')}>Start here</Link></p>
								<svg version="1.1" width="256" height="256" viewBox="0 0 256 256">
									<g className="svg-bank" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
										<path d="M 84.668 38.004 v -6.27 H 90 V 20 L 45 3.034 L 0 20 v 11.734 h 5.332 v 6.27 h 4.818 v 30.892 H 5.332 v 6.271 H 0 v 11.8 h 90 v -11.8 h -5.332 v -6.271 H 79.85 V 38.004 H 84.668 z M 81.668 35.004 H 66.332 v -3.27 h 15.336 V 35.004 z M 63.332 68.896 v 6.271 h -7.664 v -6.271 H 50.85 V 38.004 h 4.818 v -6.27 h 7.664 v 6.27 h 4.818 v 30.892 H 63.332 z M 26.668 38.004 v -6.27 h 7.664 v 6.27 h 4.818 v 30.892 h -4.818 v 6.271 h -7.664 v -6.271 H 21.85 V 38.004 H 26.668 z M 42.15 68.896 V 38.004 h 5.7 v 30.892 H 42.15 z M 37.332 35.004 v -3.27 h 15.336 v 3.27 H 37.332 z M 37.332 71.896 h 15.336 v 3.271 H 37.332 V 71.896 z M 3 22.075 L 45 6.24 l 42 15.835 v 6.659 H 3 V 22.075 z M 8.332 31.734 h 15.336 v 3.27 H 8.332 V 31.734 z M 13.15 38.004 h 5.7 v 30.892 h -5.7 V 38.004 z M 8.332 71.896 h 15.336 v 3.271 H 8.332 V 71.896 z M 87 83.966 H 3 v -5.8 h 84 V 83.966 z M 81.668 75.166 H 66.332 v -3.271 h 15.336 V 75.166 z M 76.85 68.896 H 71.15 V 38.004 h 5.699 V 68.896 z" className="bank-path" transform=" matrix(1 0 0 1 0 0) "/>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</>
	);
}

export default Home;
