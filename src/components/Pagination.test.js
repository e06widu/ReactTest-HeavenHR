import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Pagination from './Pagination';

configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
    let wrapper;

    const props = {
        totalRecords: 3,
        pageLimit: 2
    };


    beforeEach(() => {
        wrapper = shallow(<Pagination {...props} />);
    });

    it('should renders 2 pagination items for 3 total friend records', () => {
        expect(wrapper.find(".page-item").length).toBe(2);
    });

    it('should navigate to page by clicking page number', () => {
        wrapper.find('.page-link').at(1).simulate('click', {
            preventDefault: () => {
            }
        });
        expect(wrapper.find('.page-item').at(0).prop('className')).toBe('page-item');
        expect(wrapper.find('.page-item').at(1).prop('className')).toBe('page-item active');
    })


});