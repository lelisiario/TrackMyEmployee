// Import required modules
const inquirer = require('inquirer');
const { getAllDepartments, addDepartment } = require('../lib/utils');

// Function to display all departments
async function viewAllDepartments() {
    try {
        const departments = await getAllDepartments();
        console.table(departments);
    } catch (error) {
        console.error('Error viewing departments:', error);
    }
}

// Function to prompt user to add a new department
async function addNewDepartment() {
    try {
        const departmentData = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the new department:'
            }
        ]);

        await addDepartment(departmentData.name);
        console.log('New department added successfully!');
    } catch (error) {
        console.error('Error adding department:', error);
    }
}

// Export functions for use in other files
module.exports = {
    viewAllDepartments,
    addNewDepartment
};
