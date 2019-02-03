import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import * as genderType from '../constants/GenderTypes';

import FriendListItem from './FriendListItem';

configure({ adapter: new Adapter() });


describe('<FriendListItem />', () => {
    let wrapper;
    const starFriend = jest.fn(x => x);
    const props = {
        id: 0,
        name: 'Janith Widarshana',
        gender: genderType.MALE,
        starred: false,
        starFriend: starFriend
    };

    beforeEach(() => {
        wrapper = shallow(<FriendListItem {...props} />);
    });

    it('renders without crashing', () => {
        expect(wrapper.find(".friend-name > span").html()).toEqual('<span>Janith Widarshana</span>');
        expect(wrapper.find(".friend-gender > small").html()).toEqual('<small>MALE</small>');

    });

});