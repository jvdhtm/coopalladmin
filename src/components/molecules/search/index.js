import React from 'react';
import styled from 'styled-components';
import style from './style';
import { useForm } from 'react-hook-form';
import Field from '../../molecules/field';
const Wrapper = styled.div`
  ${style}
`;

const Search =()=> {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
      console.log(values);
    };
    return <Wrapper>
            <div className="search">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field icon="search"
                        label="search..."  kind="input">
                        <input
                        name="query" type="text"
                        ref={register({
                            required: 'Required'
                          })}
                        />
                    </Field>
                </form>
            </div>
            </Wrapper>

}
;

export default Search;