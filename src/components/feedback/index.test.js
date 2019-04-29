import React from 'react';
import { Shallow } from 'enzyme';

import Feedback from './';

setup = () => {
    const props = {
        enableFeedback: true,
        serviceState: {},
        userAddress: '',
        chainId: '3'
    }
    const wrapper = Shallow(<Feedback />);
    return { wrapper, props };
}

describe('Wilkommen auf Pru`fung', () => {
    it('should pass', () => {
        const wrapper = shallow(<MyComponent name="React" />);
        expect(wrapper.text()).toBe("React");
    })
});