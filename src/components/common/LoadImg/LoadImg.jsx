import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label';

const LoadImg = ({ picture, name, style }) => {
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <>
      {picture && isCompleted ? (
        <img
          className={style}
          onError={() => setIsCompleted(false)}
          src={picture}
          alt={name}
        />
      ) : (
        <Label name={name} />
      )}
    </>
  );
};

export default LoadImg;

LoadImg.defaultProps = {
  picture: null,
};

LoadImg.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
