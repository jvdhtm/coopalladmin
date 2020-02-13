import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import ListTag from '../../atoms/list';
import Icon from '../../atoms/icon';
import { Link } from "gatsby"

const Wrapper = styled.div`
  ${style}
`;

const Menu =({items})=> {
    return <Wrapper>
            <ListTag className="menu">
            { items.map((item, i) => { 
                  return <li key={i}>
                            { item.link ? 
                            <Link to={item.link} className={ 
                              item.active  ? "active":""
                              }>{item.title}</Link>:
                              <span className={
                                item.active  ? "active":""
                              }>{item.title}</span>}
                            { item.icon ? <Icon  icon={item.icon} ></Icon> : ""}
                            {
                              item.children.length > 0  ?  <Menu items={item.children}/>:""}
                            
                            { item.children.length > 0  ? <Icon   icon="cheveron-right" ></Icon> : ""}
                           
                        </li>
                        
                })
              }

            </ListTag>
        </Wrapper>

}

Menu.propTypes = {
    items: PropTypes.array
};

export default Menu;