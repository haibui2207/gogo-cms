import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl, FormattedHTMLMessage } from 'react-intl';
import Input from '@/components/Input';
import { forgotPassword } from '@/redux/ducks/auth.duck';

import FormLayout from '../../components/FormLayout';
import FormFooter from '../../components/FormFooter';
import ImageSide from '../../components/ImageSide';
import { PATHS } from '../../constants';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
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
        title={intl.formatMessage({ id: 'FORGOT_PASSWORD.IMAGE_SIDE.TITLE' })}
        description={(
          <FormattedHTMLMessage
            id="FORGOT_PASSWORD.IMAGE_SIDE.SUB_TITLE"
            values={{ href: PATHS.SIGN_UP }}
          />
        )}
      />
      <FormLayout
        title={intl.formatMessage({ id: 'FORGOT_PASSWORD.FORM.TITLE' })}
      >
        <Input
          type="email"
          name="email"
          label={intl.formatMessage({ id: 'FORGOT_PASSWORD.FORM.FIELD.EMAIL' })}
          value={state.email}
          onChange={handleInputChange}
        />
        <FormFooter
          linkProps={{
            label: intl.formatMessage({
              id: 'FORGOT_PASSWORD.FORM.FOOTER.SIGN_IN',
            }),
            href: PATHS.SIGN_IN,
          }}
          buttonProps={{
            label: intl.formatMessage({
              id: 'FORGOT_PASSWORD.FORM.FOOTER.SUBMIT_BUTTON',
            }),
            onClick: handleSubmit,
          }}
        />
      </FormLayout>
    </>
  );
};

export default memo(ForgotPassword);
