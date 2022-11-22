import {Link, Outlet} from "react-router-dom";
import AccountContext from "../state/AccountContext";
import PageContext from "../state/PageContext";
import {useContext} from "react";


function NavBar() {
	const {account} = useContext(AccountContext)
	const {activePage, setActivePage} = useContext(PageContext)
	
	function isActivePage(section) {
		return activePage === section;
	}
	
	function changePage(section) {
		setActivePage(section);
	}
	
	function isLoggedIn() {
		return account.email !== undefined;
	}
	
	function isCustomer() {
		return account.role === 'CUSTOMER';
	}
	
	function getCustomerContent() {
		return(
				<>
					<li className="nav-item">
						<Link onClick={() => changePage('deposit')} className={`nav-link ${isActivePage('deposit') ? 'active' : ''}`} to="/Deposit/">Deposit</Link>
					</li>
					<li className="nav-item">
						<Link onClick={() => changePage('withdraw')} className={`nav-link ${isActivePage('withdraw') ? 'active' : ''}`} to="/Withdraw/">Withdraw</Link>
					</li>
					<li className="nav-item">
						<Link onClick={() => changePage('transactions')} className={`nav-link ${isActivePage('transactions') ? 'active' : ''}`} to="/Transactions/">Transactions</Link>
					</li>
				</>
		)
	}
	
	function getCashierContent() {
		return (
				<>
					<li className="nav-item">
						<Link onClick={() => changePage('accounts')} className={`nav-link ${isActivePage('accounts') ? 'active' : ''}`} to="/Accounts/">All accounts</Link>
					</li>
				</>
		)
	}
	
	function getContentLoggedIn() {
		return (
				<>
					{isCustomer() ? getCustomerContent() : getCashierContent() }
				</>
		)
	}
	
	function getContentNotLoggedIn() {
		return (
				<>
					<li className="nav-item">
						<Link onClick={() => changePage('login')} className={`nav-link ${isActivePage('login') ? 'active' : ''}`} to="/Login/">Login</Link>
					</li>
					<li className="nav-item">
						<Link onClick={() => changePage('create-account')} className={`nav-link ${isActivePage('create-account') ? 'active' : ''}`} to="/CreateAccount/">Create account</Link>
					</li>
				</>
		)
	}
	
	return (
			<>
				<nav className="navbar navbar-light navbar-expand-lg navbar-light">
					<div className="container-fluid">
						<a onClick={() => changePage('home')} className="navbar-brand" href="/#/">BadBank</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="nav navbar-nav">
								{isLoggedIn() ? getContentLoggedIn() : getContentNotLoggedIn() }
							</ul>
						</div>
					</div>
				</nav>
				<Outlet />
			</>
	)
}

export default NavBar;