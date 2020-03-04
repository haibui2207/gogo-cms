import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl, FormattedHTMLMessage } from 'react-intl';
import Input from '@/components/Input';
import { forgotPassword } from '@/redux/ducks/auth.duck';

import FormLayout from '../../components/FormLayout';
import FormFooter from '../../components/FormFooter';
import ImageSide from '../../components/ImageSide';
import { PATHS } from '../../constants';

const ResetPassword = () => {
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
        title={intl.formatMessage({ id: 'RESET_PASSWORD.IMAGE_SIDE.TITLE' })}
        description={(
          <FormattedHTMLMessage
            id="RESET_PASSWORD.IMAGE_SIDE.SUB_TITLE"
            values={{ href: PATHS.SIGN_UP }}
          />
        )}
      />
      <FormLayout
        title={intl.formatMessage({ id: 'RESET_PASSWORD.FORM.TITLE' })}
      >
        <Input
          type="password"
          name="password"
          label={intl.formatMessage({
            id: 'RESET_PASSWORD.FORM.FIELD.PASSWORD',
          })}
          value={state.password}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          label={intl.formatMessage({
            id: 'RESET_PASSWORD.FORM.FIELD.CONFIRM_PASSWORD',
          })}
          value={state.confirmPassword}
          onChange={handleInputChange}
        />
        <FormFooter
          linkProps={{
            label: intl.formatMessage({
              id: 'RESET_PASSWORD.FORM.FOOTER.SIGN_IN',
            }),
            href: PATHS.SIGN_IN,
          }}
          buttonProps={{
            label: intl.formatMessage({
              id: 'RESET_PASSWORD.FORM.FOOTER.SUBMIT_BUTTON',
            }),
            onClick: handleSubmit,
          }}
        />
      </FormLayout>
    </>
  );
};

export default memo(ResetPassword);
