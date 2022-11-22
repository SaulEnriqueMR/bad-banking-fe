import {createContext} from "react";

const PageContext = createContext({
	activePage: 'home',
	setActivePage: () => {},
});

export default PageContext;
