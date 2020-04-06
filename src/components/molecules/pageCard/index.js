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

const UserCard = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
      console.log(values);
    };
    return (
      <Wrapper className='page-card'>
          <div  className="page-card__box">
              <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="page-card__header">
                        <H>Create page</H>
                      </div>
                      <div className="page-card__body">
                      <Field 
                        label="Title"  kind="input">
                        <input 
                          name="title"
                          type="text"
                          ref={register({
                            required: 'Required'
                          })}
                          kind="input"
                          
                        />
                      </Field>

                      <Field 
                        label="Path"  kind="input">
                        <input
                          name="path"
                          type="text"
                          ref={register({
                            required: 'Required',
                          })}
                          kind="input"
                        />
                      </Field>
                      {errors.path && errors.path.type === 'required' && <ErrorMessege>This is required</ErrorMessege>}
                      {errors.title && errors.title.type === 'required' && <ErrorMessege>This is required</ErrorMessege>}
                      <button className="btn btn__primary" type="submit">Create</button>
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