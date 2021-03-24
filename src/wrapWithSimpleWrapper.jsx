import React from 'react';
import { or, explicitNull } from 'airbnb-prop-types';
import PropTypes from 'prop-types';

const propTypes = {
  children: or([explicitNull().isRequired, PropTypes.node.isRequired]),
};

const defaultProps = {
  children: undefined,
};

// eslint-disable-next-line prefer-arrow-callback
const Wrapper = () => Object.assign(function SimpleSFCWrapper({ children }) {
  return children;
}, { propTypes, defaultProps });

export default function wrap(element) {
  return <Wrapper>{element}</Wrapper>;
}
