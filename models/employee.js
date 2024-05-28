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
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the role ID of the new employee:'
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the manager ID of the new employee (leave blank if none):'
            }
        ]);

        // Call addEmployee function passing the employeeData object
        console.log("Collected employee data", employeeData);

        const { first_name, last_name, role_id, manager_id } = employeeData;
        console.log("Adding Employee:", first_name, last_name, role_id, manager_id);
        await addEmployee(first_name, last_name, role_id, manager_id || null);
        console.log('New employee added successfully!');
    } catch (error) {
        console.error('Error adding new employee:', error);
    }
}

// Export functions for use in other files
module.exports = {
    viewAllEmployees,
    addNewEmployee,
};
