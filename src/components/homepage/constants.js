/* eslint-disable no-useless-concat */
/* eslint-disable max-len */
// Import Hero Image for Main_Content
import Artwork from './images/hero-illustration.svg';

/**
 * Exports React Helmet related  Strings
 *
 * @constant
 */

export const HELMET_STRINGS = {
    CANON_LINK: 'http://mysite.com/example',
    CHARSET: 'utf-8',
    META_DESC: 'description',
    META_DESC_CONTENT: 'CleanIT is a on-demand laundry service provider that provides vendors to users, ensuring efficient and quality service from all vendor',
    META_VIEWPORT: 'viewport',
    META_VIEWPORT_CONTENT: 'width=device-width, initial-scale=1',
    PAGE_TITLE: 'Home',
    TITLE_TEMPLATE: '%s - CleanIT',
    TITLE_TEMPLATE_DEFAULT_TITLE: 'CleanIT',
};

/**
 * Exports Main Content related  Strings
 *
 * @constant
 */

export const MAIN_CONTENT = {
    HERO_DESC: 'CleanIT is your on-demand laundry service middle-man. As a User, we  ' + 'provide you the means to meet hundreds of laundry service providers with a resolve ' + 'to provide quality and efficient service. As a Vendor, we provide you the means to ' + 'meet thousands of people who require laundry services.',
    HERO_IMG: Artwork,
    HERO_TITLE: 'Let us help you worry-less about your laundry',
    LINKS: [{
        link_class: 'btn-primary -large -mr-2',
        link_text: 'Sign Up',
        link_to: '/sign-up',
    }, {
        link_class: 'btn-primary -alternate -large',
        link_text: 'Login',
        link_to: '/login',
    }],
};
