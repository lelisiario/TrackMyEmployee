const { Department, Role, Employee } = require('../models'); // Import Sequelize models

// Function to get all departments
async function getAllDepartments() {
    try {
        const departments = await Department.findAll();
        return departments;
    } catch (error) {
        console.error('Error getting departments:', error);
    }
}

// Function to get all roles
async function getAllRoles() {
    try {
        const roles = await Role.findAll();
        return roles;
    } catch (error) {
        console.error('Error getting roles:', error);
    }
}

// Function to get all employees
async function getAllEmployees() {
    try {
        const employees = await Employee.findAll();
        return employees;
    } catch (error) {
        console.error('Error getting employees:', error);
    }
}

// Function to add a department
async function addDepartment(name) {
    try {
        const newDepartment = await Department.create({ name });
        return newDepartment;
    } catch (error) {
        console.error('Error adding department:', error);
    }
}

// Function to add a role
async function addRole(title, salary, departmentId) {
    try {
        const newRole = await Role.create({ title, salary, departmentId });
        return newRole;
    } catch (error) {
        console.error('Error adding role:', error);
    }
}

// Function to add an employee
async function addEmployee(firstName, lastName, roleId, managerId) {
    try {
        const newEmployee = await Employee.create({ firstName, lastName, roleId, managerId });
        return newEmployee;
    } catch (error) {
        console.error('Error adding employee:', error);
    }
}

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee
};
