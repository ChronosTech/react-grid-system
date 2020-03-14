import React from 'react';
import PropTypes from 'prop-types';
import * as style from './style';
import ScreenClassResolver from '../../context/ScreenClassResolver';

const Hidden = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
}) => (
  <ScreenClassResolver>
    {(screenClass) => (style.hidden({
      screenClass,
      xs,
      sm,
      md,
      lg,
      xl,
    })
      ? null
      : children)}
  </ScreenClassResolver>
);

Hidden.propTypes = {
  /**
   * Content of the component
   */
  children: PropTypes.node.isRequired,
  /**
   * Hide on extra small devices
   */
  xs: PropTypes.bool,
  /**
   * Hide on small devices
   */
  sm: PropTypes.bool,
  /**
   * Hide on medium devices
   */
  md: PropTypes.bool,
  /**
   * Hide on large devices
   */
  lg: PropTypes.bool,
  /**
   * Hide on xlarge devices
   */
  xl: PropTypes.bool,
};

Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export default Hidden;
