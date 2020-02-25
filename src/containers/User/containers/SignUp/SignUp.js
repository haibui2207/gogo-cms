import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import Input from '@/components/Input';
import { signUp } from '@/redux/ducks/auth.duck';

import FormLayout from '../../components/FormLayout';
import FormFooter from '../../components/FormFooter';
import ImageSide from '../../components/ImageSide';
import { PATHS } from '../../constants';

const SignUp = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(signUp(state));
  };

  return (
    <>
      <ImageSide
        title="MAGIC IS IN THE DETAILS"
        description={(
          <span>
            Please use this form to register.
            <br />
            If you are a member, please&nbsp;
            <a href={PATHS.SIGN_IN}>login</a>.
          </span>
        )}
      />
      <FormLayout title="Register">
        <Input
          name="name"
          label="Full Name"
          value={state.name}
          onChange={handleInputChange}
        />
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
          className="justify-content-end"
          buttonProps={{ label: 'Register', onClick: handleSubmit }}
        />
      </FormLayout>
    </>
  );
};

export default memo(SignUp);
