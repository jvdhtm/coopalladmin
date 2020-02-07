import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import H from '../../atoms/h';
import Paragraph from '../../atoms/paragraph';
import Menu from '../../molecules/menu';
import Search from '../../molecules/search';
import { Link } from "gatsby"

const Wrapper = styled.div`
  ${style}
`;





const SideBar = ({ title, paragraph, items, className, ...props }) => {
    const Class = classNames('sidebar', className);
    return  <Wrapper>
                <div className={Class}>
                    <Search></Search>
                    { title ? <H level="3">{title}</H>:""}
                    { paragraph ? <Paragraph>{paragraph}</Paragraph>:""}
                    <div className="sidebar__body">
                        {items.length > 0 ? <Menu items = {items}></Menu>:""}
                    </div>  
                </div>
            </Wrapper> 
            
}

SideBar.propTypes = {
    children: PropTypes.any,
    items: PropTypes.array,
    title: PropTypes.string,
    className: PropTypes.string,
};


export default SideBar;
