import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import Input from '@/components/Input';
import { forgotPassword } from '@/redux/ducks/auth.duck';

import FormLayout from '../../components/FormLayout';
import FormFooter from '../../components/FormFooter';
import ImageSide from '../../components/ImageSide';
import { PATHS } from '../../constants';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(forgotPassword(state));
  };

  return (
    <>
      <ImageSide
        title="MAGIC IS IN THE DETAILS"
        description={(
          <span>
            Please use your e-mail to reset your password.
            <br />
            If you are not a member, please&nbsp;
            <a href={PATHS.SIGN_IN}>register</a>.
          </span>
        )}
      />
      <FormLayout title="Forgot Password">
        <Input
          type="email"
          name="email"
          label="E-mail"
          value={state.email}
          onChange={handleInputChange}
        />
        <FormFooter
          linkProps={{
            label: 'Sign in now', href: PATHS.SIGN_IN,
          }}
          buttonProps={{ label: 'Reset', onClick: handleSubmit }}
        />
      </FormLayout>
    </>
  );
};

export default memo(ForgotPassword);
