//TODO: Everything on this page :)

// build a Node.js command-line application that takes in information about employees on a SW Egr team, then generates an HTML webpage that displays summaries for each person. 
//write a unit test for every part of your code


//Acceptance Criteria
    // WHEN I am prompted for my team members and their information (by typing node index.js)
    // THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    // WHEN I click on an email address in the HTML
    // THEN my email opens and populates the TO field of the email
    // WHEN I click on the GitHub username
    // THEN that GitHub profile opens in a new tab
    // WHEN I start the application
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    // WHEN I enter the team manager’s name, employee ID, email address, and office number
    // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    // WHEN I select the engineer option
    // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    // WHEN I select the intern option
    // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    // WHEN I decide to finish building my team
    // THEN I exit the application, and the HTML is generated (Styling in pict is just an ex/)



// Your application should use [Jest](https://www.npmjs.com/package/jest) 
// for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:


// dist/  for output (HTML) and CSS style sheet      
// lib/   for classes
// src/   for template helper code 

// **Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

//The first class is an `Employee` parent class with the following properties and methods:
  // * `name`
  // * `id`
  // * `email`
  // * `getName()`
  // * `getId()`
  // * `getEmail()`
  // * `getRole()`&mdash;returns `'Employee'`

//The other three classes will extend `Employee`.

//In addition to `Employee`'s properties and methods, `Manager` will also have the following:
  // * `officeNumber`
  // * `getRole()`&mdash;overridden to return `'Manager'`

//In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
  // * `github`&mdash;GitHub username
  // * `getGithub()`
  // * `getRole()`&mdash;overridden to return `'Engineer'`

//In addition to `Employee`'s properties and methods, `Intern` will also have the following:
  // * `school`
  // * `getSchool()`
  // * `getRole()`&mdash;overridden to return `'Intern'`

//Although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


//You are required to submit the following for review:
  // * A walkthrough video that demonstrates the functionality of the application and passing tests
  // * A sample HTML file generated using your application
  // * The URL of the GitHub repository, with a unique name and a readme describing the project