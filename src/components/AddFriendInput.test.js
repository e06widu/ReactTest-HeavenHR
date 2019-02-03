import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import AddFriendInput from './AddFriendInput';

configure({ adapter: new Adapter() });

describe('<AddFriendInput />', () => {
    let wrapper;
    const handleChange = jest.fn(x => x);
    const props = {
        value: '',
        nameChanged: handleChange,
    };

    beforeEach(() => {
        wrapper = shallow(<AddFriendInput {...props} />);
    });

    it('renders without crashing', () => {
        expect(wrapper.find("input").length).toBe(1);
    });


    it('should trigger callback when Friend name type', () => {
        const input = wrapper.find("input");
        input.simulate('change', { target: { value: 'Hello' } })
        wrapper.update();
        expect(handleChange).toHaveBeenCalled();

    });

});