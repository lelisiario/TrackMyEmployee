// Import required modules
const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addNewDepartment, addNewRole, addNewEmployee, updateEmployeeRole } = require('./lib/utils');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addNewDepartment, addNewRole, addNewEmployee, updateEmployeeRole } = require('./lib/utils');

// Function to display main menu options
async function mainMenu() {
    try {
        // Prompt user to select an action from the main menu
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        });

        // Call corresponding function based on user's choice
        switch (choice) {
            case 'View all departments':
                await viewAllDepartments();
                break;
            case 'View all roles':
                await viewAllRoles();
                break;
            case 'View all employees':
                await viewAllEmployees();
                break;
            case 'Add a department':
                await addNewDepartment();
                break;
            case 'Add a role':
                await addNewRole();
                break;
            case 'Add an employee':
                await addNewEmployee();
                break;
            case 'Update an employee role':
                await updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Exiting application...');
                process.exit(0);
        }
    } catch (error) {
        console.error('Error in mainMenu:', error);
    }
}

// Function to start the application
async function startApp() {
    try {
        console.log('Welcome to the Employee Tracker!');
        // Call the main menu function
        await mainMenu();
    } catch (error) {
        console.error('Error starting application:', error);
    }
}

// Call the startApp function to begin the application
startApp();
