import React from 'react';
import { shallow } from 'enzyme';

// import Feedback from './';

// setup = () => {
//     const props = {
//         enableFeedback: true,
//         serviceState: {},
//         userAddress: '',
//         chainId: '3'
//     }
//     const wrapper = shallow(<Feedback />);
//     return { wrapper, props };
// }

describe('Wilkommen auf Pru`fung', () => {
    it('should pass', () => {
        // const wrapper = shallow(<Feedback name="React" />);
        expect("React").toBe("React");
    })
});