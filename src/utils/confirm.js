import { confirmAlert } from 'react-confirm-alert';

export default (e, title, message, handleSubmit) => {
  e.preventDefault();
  confirmAlert({
    title,
    message,
    buttons: [
      {
        label: 'Yes',
        onClick: () => handleSubmit(),
      },
      {
        label: 'No',
      },
    ],
  });
};
