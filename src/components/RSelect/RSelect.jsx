import React, { Fragment, useId } from 'react';
import Select from 'react-select';

const RSelect = ({ ...props }) => {
  return (
    <Fragment>
      <Select
        className={`react-select-container ${
          props.className ? props.className : ''
        }`}
        classNamePrefix="react-select"
        instanceId={useId()}
        {...props}
      />
    </Fragment>
  );
};

export default RSelect;
