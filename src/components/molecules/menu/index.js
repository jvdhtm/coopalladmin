import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import ListTag from '../../atoms/list';
import { Link } from "gatsby"

const Wrapper = styled.div`
  ${style}
`;

const Menu =({items})=> {
    return <Wrapper>
            <ListTag className="menu">
            { items.map((item, i) => { 
                  return <li>
                            { item.url ? <Link to={item.url}>{item.title}</Link>:<span>{item.title}</span>}
                            <Menu items={item.children}/>
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