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

const UserCard = ({itemActive}) => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
      console.log(values);
    };
    return (
      <Wrapper className='page-card'>
          <div  className="page-card__box">
              <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="page-card__header">
                        <H>Edit user</H>
                      </div>
                      <div className="page-card__body">
                      <Field icon="document"
                        label="Title"  kind="input">
                        <input className="notempty"
                          name="title"
                          type="text"
                          ref={register({
                            required: 'Required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "invalid email address"
                            }
                          })}
                          kind="input"
                          value={itemActive.title}
                        />
                      </Field>

                      <Field icon="document"
                        label="Title"  kind="input">
                        <input className="notempty"
                          name="title"
                          type="text"
                          ref={register({
                            required: 'Required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "invalid email address"
                            }
                          })}
                          kind="input"
                          value={itemActive.title}
                        />
                      </Field>

                      {errors.title && errors.title.type === 'required' && <ErrorMessege>This is required</ErrorMessege>}
                      

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