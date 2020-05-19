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

const UserCard = ({itemActive,changeEmail,changeFirstName,changeLastName,changePassword,changeStatus}) => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
    };
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
                          onChange={ changeEmail }
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
                          onChange={ changeFirstName }
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
                          onChange={ changeLastName }
                        />
                      </Field>
                      <div  className="user-card__status" >
                        <H level={5}>Status</H>
                        <Field icon="checkmark" type="radio"
                          label="active"  kind="radiobox">
                          <input  className="notempty"
                            type="radio" name="status"
                            value="active"
                            checked={itemActive.statusOrg === "active"}
                            onChange={ changeStatus }
                          />
                        </Field>
                        <Field icon="checkmark" type="radio"
                          label="archived"  kind="radiobox">
                          <input  className="notempty"
                            type="radio" name="status"
                            value="archived"
                            checked={itemActive.statusOrg === "archived"}
                            onChange={ changeStatus }
                          />
                        </Field>
                        <Field icon="checkmark" type="radio"
                          label="confirming"  kind="radiobox">
                          <input  className="notempty"
                            type="radio" name="status"
                            value="confirming"
                            checked={itemActive.statusOrg === "confirming"}
                            onChange={ changeStatus }
                          />
                        </Field>
                        <Field icon="checkmark" type="radio"
                          label="halt"  kind="radiobox">
                          <input  className="notempty"
                            type="radio" name="status"
                            value="halt"
                            checked={itemActive.statusOrg === "halt"}
                            onChange={ changeStatus }
                          />
                        </Field>
                      </div>
                      <Field
                        label="password"  kind="input" icon="key">
                        <input  className="notempty"
                          name="password"
                          type="password"
                          value={itemActive.password}
                          onChange={ changePassword }
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