import axios from 'axios';
import { STRINGS } from './constants';

const { ENDPOINT } = STRINGS;

/** this is a test post request
 * and should not be considered
 * a real endpoint for user signup
 */

export const apiRequest = () => {
    axios.post(ENDPOINT, {
        body: 'lava',
        title: 'java',
        userId: 1,
    }).then(res => {
        if (res.ok) {
            console.log(res);
        }
    }).catch(error => {
        console.error(error);
    });
};
