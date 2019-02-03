import * as types from '../constants/ActionTypes';
import friends from './friendlist';
import * as genderType from '../constants/GenderTypes';

const initialState = {
  friendsById: [
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
  ]
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(friends(undefined, {})).toEqual({
      friendsById: [
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
      ]
    })
  })

  it('should addFriend function add friends to list on addFriend', () => {
    const newFriend = {
      name: 'Janith Widarshana',
      gender: genderType.MALE,
      type: types.ADD_FRIEND
    }
    expect(friends(undefined, newFriend)).toEqual({
      friendsById: [
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
        },
        {
          name: 'Janith Widarshana',
          starred: false,
          gender: genderType.MALE
        }
      ]
    });
  });

  it('should deleteFriend function remove a friend from list', () => {
    const newFriend = {
      id: 0,
      type: types.DELETE_FRIEND
    }
    expect(friends(undefined, newFriend)).toEqual({
      friendsById: [
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
      ]
    });
  });

  it('should starFriend function mark as stared friend', () => {
    const newFriend = {
      id: 1,
      type: types.STAR_FRIEND
    }
    expect(friends(undefined, newFriend)).toEqual({
      friendsById: [
        {
          name: 'Theodore Roosevelt',
          starred: true,
          gender: genderType.MALE
        },
        {
          name: 'Abraham Lincoln',
          starred: true,
          gender: genderType.FEMALE
        },
        {
          name: 'George Washington',
          starred: false,
          gender: genderType.MALE
        }
      ]
    });
  });

});