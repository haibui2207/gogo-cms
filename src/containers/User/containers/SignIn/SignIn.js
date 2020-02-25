import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import Input from '@/components/Input';
import { signIn } from '@/redux/ducks/auth.duck';

import FormLayout from '../../components/FormLayout';
import FormFooter from '../../components/FormFooter';
import ImageSide from '../../components/ImageSide';
import { PATHS } from '../../constants';

const SignIn = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in',
    password: 'gogo123',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(signIn(state));
  };

  return (
    <>
      <ImageSide
        title="MAGIC IS IN THE DETAILS"
        description={(
          <span>
            Please use your credentials to login.
            <br />
            If you are not a member, please&nbsp;
            <a href={PATHS.SIGN_UP}>register</a>.
          </span>
        )}
      />
      <FormLayout title="Login">
        <Input
          type="email"
          name="email"
          label="E-mail"
          value={state.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={state.password}
          onChange={handleInputChange}
        />
        <FormFooter
          linkProps={{ label: 'Forgot password?', href: PATHS.FORGOT_PASSWORD }}
          buttonProps={{ label: 'Login', onClick: handleSubmit }}
        />
      </FormLayout>
    </>
  );
};

export default memo(SignIn);
