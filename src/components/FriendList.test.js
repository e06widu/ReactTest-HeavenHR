import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import FriendList from './FriendList';
import * as genderType from '../constants/GenderTypes';

configure({ adapter: new Adapter() });

describe('<FriendList />', () => {
    let wrapper;

    const jestFunction = jest.fn(x => x);
    const actions = {
        addFriend: jestFunction,
        deleteFriend: jestFunction,
        starFriend: jestFunction
    };

    const friendList = [
        {
            name: 'Theodore Roosevelt',
            starred: true,
            gender: genderType.MALE
        },
        {
            name: 'Abraham Lincoln',
            starred: false,
            gender: genderType.FEMALE
        },
        {
            name: 'George Washington',
            starred: false,
            gender: genderType.MALE
        }
    ];
    const props = {
        friends: friendList,
        actions: actions
    };

    beforeEach(() => {
        wrapper = shallow(<FriendList {...props} />);
    });

    it('<FriendList /> renders Two Friends when there are 2 friends with out pagination', () => {
        const friendList1 = [
            {
                name: 'Theodore Roosevelt',
                starred: true,
                gender: genderType.MALE
            },
            {
                name: 'Abraham Lincoln',
                starred: false,
                gender: genderType.FEMALE
            }
        ];
        const props = {
            friends: friendList1,
            actions: actions
        };
        wrapper = shallow(<FriendList {...props} />);
        expect(wrapper.find("FriendListItem").length).toBe(2);
        expect(wrapper.find("Pagination").length).toBe(0);

    });

    it('<FriendList /> renders Two Friends when there are more than 2 friends with pagination', () => {

        expect(wrapper.find("FriendListItem").length).toBe(2);
        expect(wrapper.find("Pagination").length).toBe(1);

    });


});