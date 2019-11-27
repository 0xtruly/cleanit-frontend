/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './index';

describe('Signup component', () => {
    it('should render without errors', () => {
        const component = shallow(<Signup />);
        const wrapper = component.find('.container');
        expect(wrapper.length).toBe(1);
    });

    // it('should render withour errors', () => {
    //     const component = shallow(<SignupForm />)
    //     const wrapper = component.find('.formContainer')
    //     expect(wrapper.length).toBe(1);
    // });
});
