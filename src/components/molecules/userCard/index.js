import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H from '../../atoms/h';
import Field from '../field';
import { useForm } from 'react-hook-form';
import style from './style';
import ErrorMessege from '../../atoms/ErrorMessege';



const Wrapper = styled.div`
  ${style}
`;

const UserCard = ({itemActive,label}) => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
      console.log(values);
    };
   console.log(itemActive);
    return (
      <Wrapper className='user-card'>
          <div  className="user-card__box">
              <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="user-card__header">
                        <H>Edit user</H>
                      </div>
                      <div className="user-card__body">
                      <Field icon="user"
                        label="email"  kind="input">
                        <input className="notempty"
                          name="email"
                          label="email"  type="text"
                          ref={register({
                            required: 'Required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "invalid email address"
                            }
                          })}
                          kind="input"
                          value={itemActive.email}
                        />
                      </Field>
                      <Field icon=""
                        label="First name"  kind="input">
                        <input  className="notempty"
                          name="firstname" type="text"
                          ref={register({
                            required: 'Required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "invalid email address"
                            }
                          })}
                          kind="input"
                          value={itemActive.firstName}
                        />
                      </Field>
                      <Field icon=""
                        label="Last name"  kind="input">
                        <input  className="notempty"
                          name="firstname" type="text"
                          ref={register({
                            required: 'Required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "invalid email address"
                            }
                          })}
                          kind="input"
                          value={itemActive.lastName}
                        />
                      </Field>
                      <Field
                        label="password"  kind="input" icon="key">
                        <input  className="notempty"
                          name="password"
                          type="password"
                          value={itemActive.password}
                        />
                      </Field>
                      <Field
                        label="Confirm password"  kind="input" icon="">
                        <input
                          name="Confirmpassword"
                          type="password"
                        />
                      </Field>
                      {errors.email && <ErrorMessege>{errors.email.message }</ErrorMessege> }
                      {errors.password && <ErrorMessege>{errors.password.message }</ErrorMessege> }
                      <button className="btn btn__primary" type="submit">Submit</button>
                      </div>
            </form>
          </div>
      </Wrapper>
    );
}

UserCard.propTypes = {
  label: PropTypes.string,
};

export default UserCard;