import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components';
import style from './style';

const Wrapper = styled.span`
  ${style}
`;

const ErrorMessege = ({children ,className , ...props }) => {
    var Class = classNames('error',className);
        return <Wrapper className={Class} {...props} >
                    {children}
               </Wrapper>
  }
  export default ErrorMessege;