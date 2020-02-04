import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H from '../../atoms/h';
import Field from '../../molecules/Field';
import { useForm } from 'react-hook-form';
import style from './style';
import ErrorMessege from '../../atoms/ErrorMessege';
import Logo from '../../atoms/Logo';

const Wrapper = styled.div`
  ${style}
`;

const Login = () => {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
      console.log(values);
    };
    return (
      <Wrapper className='login'>
          <div  className="login__box">
              <form onSubmit={handleSubmit(onSubmit)}>

                      <div className="login__header">
                        <Logo></Logo>
                        <H>Login</H>
                      </div>
                      <div className="login__body">
                      <Field icon="user"
                        label="email"  kind="input">
                        <input
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
                        />
                      </Field>
                      <Field
                        label="password"  kind="input" icon="key">
                        <input
                          name="password"
                          type="password"
                        />
                    </Field>
                      <H level={6}>
                        <a href="/lost_password">missing your password?</a> 
                      </H>
                      {errors.email && <ErrorMessege>{errors.email.message }</ErrorMessege> }
                      {errors.password && <ErrorMessege>{errors.password.message }</ErrorMessege> }

                      <button className="btn btn__primary" type="submit">Submit</button>
                      </div>
            </form>
          </div>
      </Wrapper>
    );
}

Login.propTypes = {
  label: PropTypes.string,
};

export default Login;