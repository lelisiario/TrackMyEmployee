// Import required modules
const pool = require('./config/connection'); // Assuming connection.js is in the config directory

// Function to retrieve all departments from the database
async function getAllDepartments() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM department');
        return rows;
    } catch (error) {
        console.error('Error retrieving departments:', error);
        throw error;
    }
}

// Function to retrieve all roles from the database
async function getAllRoles() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM role');
        return rows;
    } catch (error) {
        console.error('Error retrieving roles:', error);
        throw error;
    }
}

// Function to retrieve all employees from the database
async function getAllEmployees() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM employee');
        return rows;
    } catch (error) {
        console.error('Error retrieving employees:', error);
        throw error;
    }
}

// Function to add a new department to the database
async function addDepartment(name) {
    try {
        await pool.query('INSERT INTO department (name) VALUES (?)', [name]);
    } catch (error) {
        console.error('Error adding department:', error);
        throw error;
    }
}

// Function to add a new role to the database
async function addRole(title, salary, departmentId) {
    try {
        await pool.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    } catch (error) {
        console.error('Error adding role:', error);
        throw error;
    }
}

// Function to add a new employee to the database
async function addEmployee(firstName, lastName, roleId, managerId) {
    try {
        await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
}

// Export all functions for use in other files
module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee
};
