import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import * as types from '../constants/ActionTypes';
import * as genderType from '../constants/GenderTypes';

describe('FriendsActions Testing', () => {
    it('addFriend should return Friend name and gender', () => {
        const name = 'Janith Widarshana';
        const gender = genderType.MALE;
        const addedAction = addFriend(name, gender);
        expect(addedAction.name).toBe(name);
        expect(addedAction.gender).toBe(gender);
        expect(addedAction.type).toBe(types.ADD_FRIEND);
    });

    it('deleteFriend should return selected friend id', () => {
        const id = 1;
        const deleteAction = deleteFriend(id);
        expect(deleteAction.id).toBe(id);
        expect(deleteAction.type).toBe(types.DELETE_FRIEND);
    });

    it('starFriend should return selected friend id', () => {
        const id = 1;
        const starFriendAction = starFriend(id);
        expect(starFriendAction.id).toBe(id);
        expect(starFriendAction.type).toBe(types.STAR_FRIEND);
    });

});