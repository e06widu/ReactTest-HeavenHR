import React, { Component, PropTypes } from 'react';

import AddFriendInput from './AddFriendInput';
import Gender from './Gender';
import './AddFriendsForm.css';
import * as genderType from '../constants/GenderTypes';

/**
 * Add new friend from
 */
export class AddFriendsForm extends Component {

    state = {
        name: '',
        gender: genderType.MALE,
        isValid: true
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name) {
            this.props.addFriend(this.state.name, this.state.gender);
            this.setState({
                name: '',
                gender: ''
            });
        } else {
            this.setState({
                isValid: false
            })
        }
    }

    handleGenderChange = (value) => {
        this.setState({
            gender: value,
        })
    }

    handleNameChange = (value) => {
        this.setState({
            name: value,
            isValid: true
        })
    }

    render() {
        return (
            <div className="p-2 add-friend-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <AddFriendInput value={this.state.name} nameChanged={this.handleNameChange} />
                        {this.state.isValid ? null : <span className="name-error">Please enter name</span>}
                    </div>
                    <div className="form-group">
                        <Gender gender={this.state.gender} genderChanged={this.handleGenderChange} />

                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary" >Add Friend</button>
                    </div>
                </form>
            </div>
        )
    }
}

AddFriendsForm.propTypes = {
    addFriend: PropTypes.func.isRequired
};

export default AddFriendsForm
