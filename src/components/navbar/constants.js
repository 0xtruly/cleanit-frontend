// Import Logo file
import Logo from './images/placeholder-logo.svg';
/**
 * This constant houses the navbar items for the Navbar component.
 *
 * @constant
 */

const menuItems = [{
    className: 'nav-logo',
    img: Logo,
    imgAlt: 'logo',
    key: '',
    linkClassName: '',
    linkTo: '/',
    text: '',
}, {
    className: '',
    key: 'home',
    linkClassName: '',
    linkTo: '/',
    text: 'Home',
},
{
    className: '',
    key: 'about',
    linkClassName: '',
    linkTo: '/about-us',
    text: 'About Us',
}, {
    className: 'button-link',
    key: 'signUp',
    linkClassName: 'btn-primary',
    linkTo: '/sign-up',
    text: 'Sign Up',
},
{
    className: 'button-link pr-0',
    key: 'login',
    linkClassName: 'btn-primary -alternate',
    linkTo: '/login',
    text: 'Login',
},
];

export {
    menuItems
};
