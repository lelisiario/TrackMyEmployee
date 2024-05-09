// Import required modules
const inquirer = require('inquirer');
const { getAllEmployees, addEmployee } = require('../lib/utils');

// Function to display all employees
async function viewAllEmployees() {
    try {
        const employees = await getAllEmployees();
        console.table(employees);
    } catch (error) {
        console.error('Error viewing employees:', error);
    }
}

// Function to prompt user to add a new employee
async function addNewEmployee() {
    try {
        const employeeData = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter the first name of the new employee:'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the last name of the new employee:'
            },
        ]);

        // Call addEmployee function passing the employeeData object
        await addEmployee(employeeData);
        console.log('New employee added successfully!');
    } catch (error) {
        console.error('Error adding employee:', error);
    }
}

// Export functions for use in other files
module.exports = {
    viewAllEmployees,
    addNewEmployee
};
