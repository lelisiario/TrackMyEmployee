-- Insert departments
INSERT INTO department (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Human Resources');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
    ('Sales Associate', 50000.00, 1),
    ('Sales Manager', 80000.00, 1),
    ('Software Engineer', 80000.00, 2),
    ('Lead Engineer', 100000.00, 2),
    ('Accountant', 60000.00, 3),
    ('Financial Analyst', 75000.00, 3),
    ('HR Coordinator', 45000.00, 4),
    ('HR Manager', 90000.00, 4);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mike', 'Johnson', 3, NULL),
    ('Sarah', 'Williams', 4, 3),
    ('Emily', 'Brown', 5, 3),
    ('David', 'Davis', 6, NULL),
    ('Emma', 'Wilson', 7, 6),
    ('Chris', 'Jones', 8, 7);
