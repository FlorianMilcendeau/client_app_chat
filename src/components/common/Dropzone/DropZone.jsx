/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import iconDownloadXS from '../../../assets/icons/download-xs.svg';
import iconDownloadXL from '../../../assets/icons/download-xl.svg';

import styles from './DropZone.module.css';

const DropZone = ({ setpicture }) => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFile) => {
    setpicture(acceptedFile[0]); // Set picture to sent

    setFiles(
      acceptedFile.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
  } = useDropzone({
    maxFiles: 1,
    accept: 'image/png, image/jpeg, image/jpg',
    onDrop,
    maxSize: 5000000,
  });

  const filesError = fileRejections.map((result) => {
    const { errors, file } = result;

    return (
      <ul key={file.path}>
        {errors.map((e) =>
          e.code === 'file-too-large' ? (
            <li key={e.code}>File is larger than 5MB</li>
          ) : (
            <li key={e.code}>{e.message}</li>
          )
        )}
      </ul>
    );
  });

  useEffect(
    () => () => {
      // revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <div
      {...getRootProps({
        className: `dropzone ${styles.drop} ${
          isDragActive && styles.dragActive
        }`,
      })}
    >
      <input
        {...getInputProps({
          name: 'picture',
        })}
      />
      <div className={styles.wrapperPictureDrop}>
        {files.length > 0 ? (
          files.map((file) => (
            <div key={file.name}>
              <img
                className={styles.pictureProfile}
                src={file.preview}
                alt="profile"
              />
            </div>
          ))
        ) : (
          <img
            className={styles.pictureProfile}
            src="https://via.placeholder.com/150"
            alt="placeholder"
          />
        )}
        <picture>
          <source srcSet={iconDownloadXL} media="(min-width:765px)" />
          <img
            className={styles.downloadLogoDrop}
            src={iconDownloadXS}
            alt="logo download"
          />
        </picture>
      </div>
      {filesError}
    </div>
  );
};

export default DropZone;

DropZone.propTypes = {
  setpicture: PropTypes.func.isRequired,
};
