import React from 'react';
import styles from './LandingPage.modules.css';
import NavigateButton from '../../components/NavigateButtons';

const LandingPage = () => {
  return (
    <div>
      <NavigateButton route="/user/login" title="go to User Login" />
      <NavigateButton route="/Student/login" title="go to Student Login" />
      <NavigateButton route="/Panel/login" title="go to Panel Login" />
      <NavigateButton route="/Faculty/login" title="go to Faculty Login" />
      <NavigateButton route="/Exam/login" title="go to Exam Login" />
      <NavigateButton route="/EDP/login" title="go to EDP Login" />
    </div>
  );
};

export default LandingPage;
