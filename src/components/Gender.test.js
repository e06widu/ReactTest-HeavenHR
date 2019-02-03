import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Gender from './Gender';
import * as genderType from '../constants/GenderTypes';

configure({ adapter: new Adapter() });


describe('<Gender />', () => {
    let wrapper;
    const onChange = jest.fn(x => x);
    const props = {
        genderChanged: onChange,
    };

    beforeEach(() => {
        wrapper = shallow(<Gender {...props} />);
    });

    it('renders without crashing', () => {
        expect(wrapper.find("input[type='radio']").length).toBe(2);
        expect(wrapper.find("input[value='MALE']").length).toBe(1);

    });

    it('should trigger callback when Male checked', () => {
        const changeGenderSelection = jest.fn(x => x);
        wrapper = shallow(<Gender genderChanged={changeGenderSelection} />);
        const event = { target: { value: genderType.MALE } };

        wrapper.find("input[value='MALE']").simulate('change', event);
        wrapper.update();
        expect(changeGenderSelection).toBeTruthy();

    });


});