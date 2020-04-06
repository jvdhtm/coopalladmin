import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PagesCard from "../../molecules/pagesCard"
import PageCard from "../../molecules/pageCard"
// Components



const Wrapper = styled.div`
  ${style}
`;

const pagesAdmin = ({ items, columns ,className ,...props }) => {
    const Class = classNames('pages-admin', className);
    return  <Wrapper className={Class}>
                    <PageCard ></PageCard>
                    <PagesCard items={items} columns={columns} ></PagesCard>
            </Wrapper> 
            
}

pagesAdmin.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
};



export default pagesAdmin;
