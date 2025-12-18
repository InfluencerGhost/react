import PropTypes from 'prop-types';

export default function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1 className="welcome-message">Welcome back, {props.userName}!</h1>;
  } else {
    return <h1 className="login-prompt">Please sign up to continue...</h1>;
  }
}

UserGreeting.propTypes= {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: 'Guest'
};