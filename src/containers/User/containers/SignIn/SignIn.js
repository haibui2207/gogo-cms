import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl, FormattedHTMLMessage } from 'react-intl';
import Input from '@/components/Input';
import { signIn } from '@/redux/ducks/auth.duck';

import FormLayout from '../../components/FormLayout';
import FormFooter from '../../components/FormFooter';
import ImageSide from '../../components/ImageSide';
import { PATHS } from '../../constants';

const SignIn = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
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
        title={intl.formatMessage({ id: 'SIGN_IN.IMAGE_SIDE.TITLE' })}
        description={(
          <FormattedHTMLMessage
            id="SIGN_IN.IMAGE_SIDE.SUB_TITLE"
            values={{ href: PATHS.SIGN_UP }}
          />
        )}
      />
      <FormLayout title={intl.formatMessage({ id: 'SIGN_IN.FORM.TITLE' })}>
        <Input
          type="email"
          name="email"
          label={intl.formatMessage({ id: 'SIGN_IN.FORM.FIELD.EMAIL' })}
          value={state.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label={intl.formatMessage({ id: 'SIGN_IN.FORM.FIELD.PASSWORD' })}
          value={state.password}
          onChange={handleInputChange}
        />
        <FormFooter
          linkProps={{
            label: intl.formatMessage({
              id: 'SIGN_IN.FORM.FOOTER.FORGOT_PASSWORD',
            }),
            href: PATHS.FORGOT_PASSWORD,
          }}
          buttonProps={{
            label: intl.formatMessage({
              id: 'SIGN_IN.FORM.FOOTER.SUBMIT_BUTTON',
            }),
            onClick: handleSubmit,
          }}
        />
      </FormLayout>
    </>
  );
};

export default memo(SignIn);
