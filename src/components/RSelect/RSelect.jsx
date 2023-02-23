import React, { useId } from 'react';
import Select from 'react-select';

const RSelect = ({ ...props }) => {
  return (
    <Select
      className={`react-select-container ${
        props.className ? props.className : ''
      }`}
      classNamePrefix="react-select"
      instanceId={useId()}
      {...props}
    />
  );
};

export default RSelect;
