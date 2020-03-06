import React, { memo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useOnClickOutside } from '@/utils';

import useStyles from './switchingLanguageButton.styles';

const SwitchingLanguageButton = ({ className }) => {
  const [active, setActivity] = useState(false);
  const ref = useRef();
  const classes = useStyles();

  useOnClickOutside(ref, () => {
    setActivity(false);
  });

  const toggle = () => {
    setActivity(!active);
  };

  return (
    <span
      ref={ref}
      role="presentation"
      className={classNames(
        classes.switchingLanguageButton,
        className,
        active && 'active',
      )}
      onClick={toggle}
    >
      <span>EN</span>
      <i className="icon-arrow-down" />
    </span>
  );
};

SwitchingLanguageButton.defaultProps = { className: '' };
SwitchingLanguageButton.propTypes = { className: PropTypes.string };

export default memo(SwitchingLanguageButton);
