import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useIntl } from 'react-intl';

import useStyles from './searchBox.styles';

const SearchBox = ({ className, onSearch, ...rest }) => {
  const classes = useStyles();
  const intl = useIntl();

  const handlePressEnter = e => {
    const { keyCode, target: { value } } = e;
    if (keyCode === 13) {
      e.preventDefault();
      onSearch(value);
    }
  };

  return (
    <div className={classNames(classes.searchBox, className)}>
      <input
        placeholder={intl.formatMessage({ id: 'SEARCH.PLACEHOLDER' })}
        onKeyUp={handlePressEnter}
        className={classes.input}
        {...rest}
      />
      <span role="presentation" onClick={onSearch}>
        <i className="icon-search" />
      </span>
    </div>
  );
};

SearchBox.defaultProps = {
  className: '',
};
SearchBox.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default memo(SearchBox);
