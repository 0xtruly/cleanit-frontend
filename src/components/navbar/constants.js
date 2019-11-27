// Import Logo file
import Logo from "./images/placeholder-logo.svg";
/**
 * This constant houses the navbar items for the Navbar component.
 * 
 * @constant
 */

const menuItems = [{
		className: "nav-logo",
		key: "",
		linkTo: "/",
		linkClassName: "",
		text: "",
		img: Logo,
		imgAlt: "logo"
	}, {
		className: "",
		key: "home",
		linkTo: "/",
		linkClassName: "",
		text: "Home"
	},
	{
		className: "",
		key: "about",
		linkTo: "/about-us",
		linkClassName: "",
		text: "About Us"
	}, {
		className: "button-link",
		key: "signUp",
		linkTo: "/sign-up",
		linkClassName: "btn-primary",
		text: "Sign Up"
	},
	{
		className: "button-link pr-0",
		key: "login",
		linkTo: "/login",
		linkClassName: "btn-primary -alternate",
		text: "Login"
	}
]

export {
	menuItems
}