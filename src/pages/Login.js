import {useContext} from "react";
import AccountContext from "../state/AccountContext";

function Login() {
	const {account} = useContext(AccountContext)
	
	return(
			<>
				{JSON.stringify(account)}
			</>
	)
}

export default Login;