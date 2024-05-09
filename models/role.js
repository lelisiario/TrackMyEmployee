// Import required modules
const inquirer = require('inquirer');
const { getAllRoles, addRole } = require('../lib/utils');

// Function to display all roles
async function viewAllRoles() {
    try {
        const roles = await getAllRoles();
        console.table(roles);
    } catch (error) {
        console.error('Error viewing roles:', error);
    }
}

// Function to prompt user to add a new role
async function addNewRole() {
    try {
        const roleData = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the new role:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the new role:'
            },
        ]);

        // Call addRole function passing the roleData object
        await addRole(roleData);
        console.log('New role added successfully!');
    } catch (error) {
        console.error('Error adding role:', error);
    }
}

// Export functions for use in other files
module.exports = {
    viewAllRoles,
    addNewRole
};
