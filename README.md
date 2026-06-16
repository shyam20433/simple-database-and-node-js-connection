# 🚀 Employee & Department Database System

A simple, interactive console application connecting **Node.js** to a **PostgreSQL** database to manage company departments and employees.

---

## 🎨 Technology Stack & Badges

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Database](https://img.shields.io/badge/Database-Relational-blue?style=for-the-badge&logo=databricks&logoColor=white)

---

## 🛠️ 1. Database Setup (`SQL`)

We set up a robust, relational PostgreSQL structure with auto-generating IDs and key references.

### 🔄 Auto-Incrementing Sequences (`sequence_creation.sql`)
We created custom sequences to automatically generate and assign unique numeric IDs:
* 🟢 **`dept_id`**: A sequence for department numbers.
* 🔵 **`emp_id`**: A sequence for employee numbers.

---

### 📋 Table Structures (`table_creation.sql`)

```sql
                     ┌──────────────────┐
                     │    department    │
                     ├──────────────────┤
                     │  🔑 dept_id      │◄──────────┐
                     │     dept_name    │           │
                     └──────────────────┘           │ (1 to Many)
                                                    │
                     ┌──────────────────┐           │
                     │     employee     │           │
                     ├──────────────────┤           │
                     │  🔑 emp_id       │           │
                     │     employee_name│           │
                     │     phone        │           │
                     │  🔗 d_id         ├───────────┘
                     └──────────────────┘
```

* 🏢 **`department` Table**
  * `dept_id`: **Primary Key** 🔑 (Auto-increments using `dept_id` sequence).
  * `department_name`: Text field (`varchar`) representing the department (e.g., *CSE, AIML, DCS*).
* 👤 **`employee` Table**
  * `emp_id`: **Primary Key** 🔑 (Auto-increments using `emp_id` sequence).
  * `employee_name`: Text field (`varchar`) for the worker's name.
  * `phone`: Big integer (`bigint`) for contact details.
  * `d_id`: **Foreign Key** 🔗 (References `dept_id` from the `department` table).

---

### ⚙️ Database Helper Functions (`function creation.sql`)
We built database stored procedures (PL/pgSQL functions) to simplify inserts:
* 📂 **`add_dept(name)`**: Quick function to insert a new department.
* 🧑 **`add_emp(name, phone, d_id)`**: Quick function to register a new employee.

---

## 💻 2. Node.js Application (`server.js`)

An interactive Command Line Interface (CLI) application built using Node.js, utilizing a PostgreSQL database connection pool.

### ⚡ Key Features:
* 🔌 **Database Connection**: Establishes connection to PostgreSQL using a managed pool.
* 📂 **Interactive Terminal Menu**: Runs a continuous CLI interface where users can select options:

| Option | Operation | Action Description |
| :---: | :--- | :--- |
| **`1`** | **➕ Insert Employee** | Prompts for name, phone, and department, then adds the employee. |
| **`2`** | **➖ Delete Employee** | Deletes an employee record based on their unique ID. |
| **`3`** | **✏️ Update Employee** | Modifies the name and phone number of an existing employee. |
| **`4`** | **📖 Read Employees** | Displays a formatted table of all employee data (with custom display limits). |
| **`5`** | **❌ Exit** | Closes the database pool connections and exits the menu. |
