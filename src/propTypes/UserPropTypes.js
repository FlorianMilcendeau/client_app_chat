import PropTypes from 'prop-types';

const userPropTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    bio: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default userPropTypes;
