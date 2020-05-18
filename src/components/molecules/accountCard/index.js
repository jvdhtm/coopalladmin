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

const AccountCard = ({itemActive,changeStatus,changeCredit, changeName,onSubmit}) => {
    const { handleSubmit, errors } = useForm();
    return (
      <Wrapper className='account-card'>
          <div  className="account-card__box">
              <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="account-card__header">
                        <H>Edit Account</H>
                      </div>
                      <div className="account-card__body">
                      <Field icon=""
                        label="name"  kind="input">
                        <input  className="notempty"
                          type="text" name="name"
                          value={itemActive.title}
                          onChange={ changeName }
                        />
                      </Field>
                      <Field icon=""
                        label="credit"  kind="input">
                        <input  className="notempty"
                          type="number"
                          value={itemActive.credit}
                          onChange={ changeCredit }
                        />
                      </Field>
                      <div  className="account-card__status" >
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
                      {errors.email && <ErrorMessege>{errors.email.message }</ErrorMessege> }
                      {errors.password && <ErrorMessege>{errors.password.message }</ErrorMessege> }
                      <button className="btn btn__primary" type="submit">Submit</button>
                      </div>
            </form>
          </div>
      </Wrapper>
    );
}


AccountCard.propTypes = {
  label: PropTypes.string,
};



export default AccountCard;