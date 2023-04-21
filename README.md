# GROUP 5 PROJECT REPORT

## Hosted on Netlify:

https://tech1m-juniors.netlify.app/

## Contributors (Group Members):

1. [Adetunji Igbatayo](https://github.com/TunjiDev)
2. [Deborah Idowu](https://github.com/idowudeborah)
3. [Wisdom Iwunwa](https://github.com/wisdomI)

## Task Performed by each member:

1. [Adetunji Igbatayo](https://github.com/TunjiDev): Sliced all screens from the Figma design, built user authentication and authorization features, such as signup, login, reset password, routes protection, and signout. Also, created reusable custom components, custom hooks, and added extra functionalities like signout and color mode. Made the app mobile responsive. Performed unit and manual testing in all areas of the web app to ensure everything worked fine, as well as code refactoring and cleanup.
2. [Deborah Idowu](https://github.com/idowudeborah): Assisted with the slicing of screens, performed SEO optimization, and increased the SEO ratings and Accessibility to a score of 92 and 93 (respectively) when analyzed with Chrome Lighthouse. Also, handled some typography aspects such as font to match the design, performed manual testing in all areas of the app to ensure everything worked as expected, and code cleanup.
3. [Wisdom Iwunwa](https://github.com/wisdomI): Added a favicon (logo) for the web app, performed manual testing in all areas of the app to ensure everything worked as intended, and code cleanup.

## CODE STRUCTURE:

The project's components are organized in the components folder, while images and icons are stored in the assets folder. The wrapper folder stores components that will be seen in almost every page of the app, such as the TopBar and the SideBar. The pages folder contains all page components of the app, and the App component renders the main components, such as the Login page, signup page, wrapper, dashboard, and students page. The hooks folder stores a custom hook that handles user input validation, and the context-store folder contains the Context API component that manages global state across the entire app.

To style the app, we're using Chakra UI as the preferred styling library, which wraps around the App component in the index.js file to apply global styles. Unit tests were carried out using Jest in the index.test.js file.

To improve code maintainability and adhere to the DRY (don't repeat yourself) principles of programming, we created reusable components that can be used in various parts of the app. For instance, the PaymentList component passes payment data as props to its children components. The Payment data is an array of objects that contains the payment details of students, such as amount paid, payment status, payment date, etc. The children components then map through the array of objects to dynamically generate the contents.

### User Authentication and Authorization

This section describes how users can sign up, log in, and reset their passwords, as well as the validation rules and access controls in place to ensure only authorized users can access certain features of the application.

Firebase and localstorage were the main technologies used for authentication. Using firebase's authentication features and restful APIs users can signup, signin and reset their passwords.

Visitors and first-time users are taken to the welcome screen, which is the index route ("/").

Clicking the "Let's Get Started" button takes the user to the signup page where they can register. They will be routed to "/signup".

Clicking "login" takes the user to the login page ("/login").

Users who are not logged in and have forgotten their passwords can click the "forgot password" link on the login page to go to the "forgot password" page ("/forgot-password"). When users enter their valid email addresses to reset their passwords, they will receive an email with a link to reset the password and then be redirected to the login page.

VALIDATION:\
If users enter incorrect details such as wrong passwords or emails during sign up or login, they will receive validation errors.

You can sign up as either an instructor or a super admin.

AUTHENTICATION & AUTHORIZATION:\
Only registered or logged-in users can access the admin dashboard.\
Logged-in users can no longer visit the login page."\
Users can logout by tapping the gear icon at the top right corner of the admin dashboard, and clicking the logout button that appears in the modal.

## Tech Stacks

- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)

  React is a popular JavaScript library for building user interfaces.

- ![ContextAPI](https://img.shields.io/badge/-ContextAPI-3178C6?style=flat-square&logo=react&logoColor=white)

  ContextAPI is a global state management feature of React that allows you to share data between components without passing props manually. This was used for authentication of the app.

- ![LocalStorage](https://img.shields.io/badge/-LocalStorage-4285F4?style=flat-square&logo=google&logoColor=white)

  LocalStorage is a web storage API that allows you to store data in the user's browser.

- ![Chakra UI](https://img.shields.io/badge/-Chakra%20UI-319795?style=flat-square&logo=chakraui&logoColor=white)

  Chakra UI is a simple and modular component library for building and styling React applications.

- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

  React Router is a popular library for managing routing in React applications.

- ![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white)

  Firebase is a mobile and web application development platform owned by Google. It provides developers with a suite of tools and services to help build high-quality apps, including authentication, real-time database, cloud messaging, hosting, and more.

- ![React Helmet Async](https://img.shields.io/badge/-React%20Helmet%20Async-5A3E85?style=flat-square)

  React Helmet Async is a library for managing document head tags in React applications for SEO.

- ![Recharts](https://img.shields.io/badge/-Recharts-0081CB?style=flat-square&logo=recharts&logoColor=white)

  Recharts is a composable charting library built on top of React components.

- ![React Icons](https://img.shields.io/badge/-React%20Icons-61DAFB?style=flat-square&logo=react&logoColor=white)

  React Icons is a collection of icons for React applications.

## Environment Variables

The following environment variables were used:

REACT_APP_API_KEY

Kindly add it to your project before starting the server locally.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
