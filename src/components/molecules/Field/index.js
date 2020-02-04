import * as React from 'react'
import classNames from 'classnames'
import Icon from '../../atoms/icon';
import ErrorMessege from '../../atoms/ErrorMessege';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  ${style}
`;

const Field = ({ className,fieldClassProp, children ,errorMessege , options ,kind ,type ,icon ,placeholder, iconclass,change ,label, value , ...props  }) => {


      var fieldClass ;
      fieldClass = classNames('field', fieldClassProp);
    if (kind === 'select') {

      return  <Wrapper className="field">
              <div className={fieldClass}>
                  {label  ? <label>{label}</label> : null}
                  {children}
                  { icon ? <Icon  icon={icon} className={iconclass}></Icon> : ""}
                  { errorMessege ? <ErrorMessege>{errorMessege}</ErrorMessege> : ''}
                </div>
              </Wrapper>
  
    } else if (kind === 'textarea') {
      return  <Wrapper className="field">
              <div className={fieldClass}>
              {children}
                {label  ? <label>{label}</label> : null}
                { icon ? <Icon  icon={icon} className={iconclass}></Icon> : ""}
                { errorMessege ? <ErrorMessege>{errorMessege}</ErrorMessege> : ''}
                
              </div>
              </Wrapper>
    }

    else if (kind === 'checkbox' || kind === '"radiobox"'){
      fieldClass = classNames('field field__box', fieldClassProp);
     return <Wrapper className="field">
              <div className={fieldClass}>
              {children}
                <span className="checkmark"></span>
                {label  ? <label>{label}</label> : null}
                { icon ? <Icon  icon={icon} className={iconclass}></Icon> : ""}
                { errorMessege ? <ErrorMessege>{errorMessege}</ErrorMessege> : ''}
            </div>
           </Wrapper>
    }
    else{
          return <Wrapper className="field">
                  <div className={fieldClass}>
                      {children}
                      {label  ? <label>{label}</label> : null}
                      { icon ? <Icon  icon={icon} className={iconclass}></Icon> : ""}
                      { errorMessege ? <ErrorMessege>{errorMessege}</ErrorMessege> : ''}

                  </div>
              </Wrapper>
    }
  }
  Field.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    errorMessege: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    change:PropTypes.func
};

  export default Field;
