import axios from 'axios';
import { STRINGS } from './constants';

const { SIGNUP_ENDPOINT, USER } = STRINGS;

/** this is a test post request
 * and should not be considered
 * a real endpoint for user signup
 */

export const createNewUserAccount = user => {
    const userDetails = { userAuth: user, userType: USER };
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify(userDetails);
    axios.post(SIGNUP_ENDPOINT, body, config)
        .then(response => {
            if (response.ok) {
                console.log(response);
            }
        }).catch(error => {
            console.error(error);
        });
};
