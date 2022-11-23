import {Outlet} from "react-router-dom";
import AccountContext from "../state/AccountContext";
import PageContext from "../state/PageContext";
import {useContext} from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap'


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
					<LinkContainer to="/Deposit/">
						<Nav.Link onClick={() => changePage('deposit')} className={`nav-link ${isActivePage('deposit') ? 'active' : ''}`}>Deposit</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/Withdraw/">
						<Nav.Link onClick={() => changePage('withdraw')} className={`nav-link ${isActivePage('withdraw') ? 'active' : ''}`}>Withdraw</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/Transactions/">
						<Nav.Link onClick={() => changePage('transactions')} className={`nav-link ${isActivePage('transactions') ? 'active' : ''}`}>Transactions</Nav.Link>
					</LinkContainer>
				</>
		)
	}
	
	function getCashierContent() {
		return (
				<>
					<LinkContainer to="/Accounts/">
					<Nav.Link onClick={() => changePage('accounts')} className={`nav-link ${isActivePage('accounts') ? 'active' : ''}`}>All accounts</Nav.Link>
					</LinkContainer>
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
				<LinkContainer to="/Login/">
					<Nav.Link onClick={() => changePage('login')} className={`nav-link ${isActivePage('login') ? 'active' : ''}`}>Login</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/CreateAccount/">
					<Nav.Link onClick={() => changePage('create-account')} className={`nav-link ${isActivePage('create-account') ? 'active' : ''}`}>Create account</Nav.Link>
				</LinkContainer>
			</>
		)
	}
	
	// return (
	// 		<>
	// 			<nav className="navbar navbar-light navbar-expand-lg navbar-light">
	// 				<div className="container-fluid">
	// 					<a onClick={() => changePage('home')} className="navbar-brand" href="/#/">BadBank</a>
	// 					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	// 						<span className="navbar-toggler-icon"></span>
	// 					</button>
	// 					<div className="collapse navbar-collapse" id="navbarNav">
	// 						<ul className="nav navbar-nav">
	// 							{isLoggedIn() ? getContentLoggedIn() : getContentNotLoggedIn() }
	// 						</ul>
	// 					</div>
	// 				</div>
	// 			</nav>
	// 			<Outlet />
	// 		</>
	// )
	
	return (
			<>
				<Navbar className="navbar navbar-light navbar-expand-lg navbar-light" key="lg" expand="lg">
					<Container>
						<LinkContainer to="/">
							<Navbar.Brand onClick={() => changePage('home')} className="navbar-brand">BadBank</Navbar.Brand>
						</LinkContainer>
						<Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
						<Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
							<Offcanvas.Header closeButton></Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="me-auto">
									{isLoggedIn() ? getContentLoggedIn() : getContentNotLoggedIn() }
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			<Outlet/>
			</>
	)
}

export default NavBar;