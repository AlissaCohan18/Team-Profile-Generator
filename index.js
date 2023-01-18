//Link needed portions of code and packages
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//declare variables
const internArray = [];
const engineerArray = [];
const teamCompleted = "You have finished building your team!"

//TODO: const generateHTML = require("./utils/templateHTML");
//TODO: const createHTML = require("./utils/generateHTML");

//Questions to prompt for manager information
const promptMgrInfo = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Team Manager's name?",
          //validate that a name was provided
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Manager's name");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is their Employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is their e-mail address?",
        },
        {
          type: "input",
          name: "phone",
          message: "What is their office number?",
        },
        {
          type: "confirm",
          name: "addEmployee",
          message: "Would you like to add an Engineer or Intern to the team?",
          default: false,
        },
      ])
      //deconstruct and pass in responses
      .then(({ name, id, email, phone, addEmployee }) => {
        const teamManager = new Manager(name, id, email, phone);
        console.log(teamManager);
        //if adding team members, execute function to determine what type of employee to add
        if (addEmployee) {
          promptEmployeeType();
        } else {
            console.log(teamCompleted)
        }
      })
  );
};

// Determine whether new team member will be an intern or engineer
const promptEmployeeType = () => {
  return (
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "employeeType",
          message:
            "Your options are to add an Engineer or an Intern. Would you like to add an Engineer?",
          default: true,
        },
      ])
      //execute the corresponding code for either intern or engr based on the user response
      .then(({ employeeType }) => {
        if (employeeType) {
          promptEngrInfo();
        } else {
          promptInternInfo();
        }
      })
  );
};

//Question prompts for Intern information
const promptInternInfo = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is the Intern's Name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their e-mail address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school do they attend?",
      },
      {
        type: "confirm",
        name: "addEmployee",
        message:
          "Would you like to add an additional Engineer or Intern to the team?",
        default: false,
      },
    ])
    .then(({ name, id, email, school, addEmployee }) => {
      const teamIntern = new Intern(name, id, email, school);
     //add intern object to array of interns
      internArray.push(teamIntern);
      console.log(internArray);
      if (addEmployee) {
        promptEmployeeType();
      } else {
        console.log(teamCompleted)
    }
    });
};

const promptEngrInfo = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is the Engineer's Name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their e-mail address?",
      },
      {
        type: "input",
        name: "git",
        message: "What is their Git Username?",
      },
      {
        type: "confirm",
        name: "addEmployee",
        message:
          "Would you like to add an additional Engineer or Intern to the team?",
        default: false,
      },
    ])
    .then(({ name, id, email, git, addEmployee }) => {
      const teamEngr = new Engineer(name, id, email, git);
      //add engineer object to array of engineers
      engineerArray.push(teamEngr);
      console.log(engineerArray);
      if (addEmployee) {
        promptEmployeeType();
      } else {
        console.log(teamCompleted)
    }
    });
};

promptMgrInfo();
