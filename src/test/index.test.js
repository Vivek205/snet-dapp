import React from 'react';
import { shallow } from 'enzyme';

import BasicTest from './';

const MyComponent = shallow(<BasicTest />);

describe('Snapshot testing', () => {
    it('renders properly', () => {
        expect(MyComponent).toMatchSanpshot();
    })
});

describe('Basic testing setup', () => {
    it('should work', () => {
        const wrapper = shallow(<BasicTest />);
        expect(true).toBe(true);
    })
});