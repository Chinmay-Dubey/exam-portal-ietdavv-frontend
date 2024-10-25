//an index.js for specific users is NOT necessary, but it will make imports easier

// how?:

/*
Without index.js :
import StudentDashboardPage from './users/Student/pages/StudentDashboardPage';
import StudentProfilePage from './users/Student/pages/StudentProfilePage';

With index.js :
import { StudentDashboardPage, StudentProfilePage } from './users/Student';


all the pages + some components you want to export must get re-exported here
*/

//example:
// src/users/Student/index.js

// Re-export pages
export { default as UserDashboardPage } from './pages/dashboard/UserDashboardPage';
export { default as UserLoginPage } from './pages/login/UserLoginPage';

// Re-export components
export { default as UserNavbar } from './components/navbar/UserNavbar';
export { default as UserFooter } from './components/footer/UserFooter';
