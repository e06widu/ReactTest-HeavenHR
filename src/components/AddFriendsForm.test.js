import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import AddFriendsForm from './AddFriendsForm';
import * as genderType from '../constants/GenderTypes';

configure({ adapter: new Adapter() });

describe('<AddFriendsForm />', () => {
    let wrapper;
    const onAddFriend = jest.fn(x => x);
    const props = {
        addFriend: onAddFriend,
    };

    beforeEach(() => {
        wrapper = shallow(<AddFriendsForm {...props} />);
    });

    it('renders without crashing', () => {
        expect(wrapper.find("button").length).toBe(1);
    });


    it('should trigger callback submit form and clear the friend name', () => {
        
        wrapper.setState({ name: 'Janith Widarshana', gender: 'MALE', isValid: true });
        wrapper.find("form").simulate('submit', {
            preventDefault: () => {
            }
        });
        expect(onAddFriend).toHaveBeenCalled();
        expect(wrapper.instance().state).toEqual({ name: '', gender: '', isValid: true });

    });
    

    it('should display a validation for empty name submittion', () => {
        wrapper.find("form").simulate('submit', {
            preventDefault: () => {
            }
        });
        wrapper.setState({ name: '', gender: 'MALE', isValid: false });
        expect(wrapper.find('.name-error').length).toBe(1);

    });

});