import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import Input from '@/components/Input';
import { useIntl, FormattedHTMLMessage } from 'react-intl';
import { signUp } from '@/redux/ducks/auth.duck';

import FormLayout from '../../components/FormLayout';
import FormFooter from '../../components/FormFooter';
import ImageSide from '../../components/ImageSide';
import { PATHS } from '../../constants';

const SignUp = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
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
        title={intl.formatMessage({ id: 'SIGN_UP.IMAGE_SIDE.TITLE' })}
        description={(
          <FormattedHTMLMessage
            id="SIGN_UP.IMAGE_SIDE.SUB_TITLE"
            values={{ href: PATHS.SIGN_IN }}
          />
        )}
      />
      <FormLayout title={intl.formatMessage({ id: 'SIGN_UP.FORM.TITLE' })}>
        <Input
          name="name"
          label={intl.formatMessage({ id: 'SIGN_UP.FORM.FIELD.FULL_NAME' })}
          value={state.name}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          label={intl.formatMessage({ id: 'SIGN_UP.FORM.FIELD.EMAIL' })}
          value={state.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label={intl.formatMessage({ id: 'SIGN_UP.FORM.FIELD.PASSWORD' })}
          value={state.password}
          onChange={handleInputChange}
        />
        <FormFooter
          className="justify-content-end"
          buttonProps={{
            label: intl.formatMessage({
              id: 'SIGN_UP.FORM.FOOTER.SUBMIT_BUTTON',
            }),
            onClick: handleSubmit,
          }}
        />
      </FormLayout>
    </>
  );
};

export default memo(SignUp);
