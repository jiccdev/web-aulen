import React, { Fragment, useState, useId } from 'react';
import Select from 'react-select';

const RSelect = ({ ...props }) => {
  const [isClearable, setIsClearable] = useState(true);
  return (
    <Fragment>
      <Select
        className={`react-select-container ${
          props.className ? props.className : ''
        }`}
        isClearable={isClearable}
        classNamePrefix="react-select"
        instanceId={useId()}
        {...props}
      />
    </Fragment>
  );
};

export default RSelect;
