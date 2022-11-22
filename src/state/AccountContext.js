import {createContext} from "react";

const AccountContext = createContext({
	account: {},
	setAccount: () => {}
});

export default AccountContext;
