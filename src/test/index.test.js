import React from 'react';
import { shallow } from 'enzyme';

import BasicTest from './';

describe('Basic testing setup', () => {
    it('should work', () => {
        const wrapper = shallow(<BasicTest />);
        expect(true).toBe(true);
    })
});