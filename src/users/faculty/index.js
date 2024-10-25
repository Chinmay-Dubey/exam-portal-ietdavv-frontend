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
export { default as FacultyDashboardPage } from './pages/dashboard/FacultyDashboardPage';
export { default as FacultyLoginPage } from './pages/login/FacultyLoginPage';

// Re-export components
export { default as FacultyFooter } from './components/footer/FacultyFooter';
