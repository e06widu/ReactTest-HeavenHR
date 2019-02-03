import React, { Component, PropTypes } from 'react'

class Gender extends Component {

    selectGender = (e) => {
        this.props.genderChanged(e.target.value);
    }

    render() {
        return (
            <div onChange={this.selectGender} className="d-flex" id="gender">
                <div className="form-check mr-3 ml-1">
                    <input type="radio" className="form-check-input" defaultChecked={this.props.gender === "MALE"} value="MALE" name="gender" id="maleCheck" />
                    <label className="form-check-label" htmlFor="maleCheck">Male</label>
                </div>
                <div className="form-check">
                    <input type="radio" className="form-check-input" defaultChecked={this.props.gender === "FEMALE"} value="FEMALE" name="gender" id="femaleCheck" />
                    <label className="form-check-label" htmlFor="femaleCheck">Female</label>
                </div>
            </div>
        )
    }
}


Gender.propTypes = {
    gender: PropTypes.string,
    genderChanged: PropTypes.func,
};


export default Gender;