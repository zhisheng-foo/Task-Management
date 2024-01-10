# Project Title: TaskManagement System

## Description
TaskManagement System is a comprehensive task management system designed to streamline the process of managing tasks for individuals and teams. At its core, it leverages the power of LoopBack 3.0 for the backend, Ember.js for a dynamic and responsive frontend, and PostgreSQL for robust and reliable database management.

- **Key Features and Benefits**: 
  - Author authentication and authorization.
  - Create, read, update, and delete (CRUD) tasks.
  - Assign tasks to users and set deadlines.
  - Responsive Design
  - Customizable and Scalable

## Table of Contents 
If your README is long, add a table of contents to help users navigate.

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


##  Installation

### Prerequisites
Before setting up the TaskManagement System application, ensure you have the following software installed on your system:

1. **Node.js**:Ensure you have Node.js installed. **The application is compatible with versions 12 and 16.** You can download it from [Node.js official website](https://nodejs.org/).

2. **npm (Node Package Manager)**: This comes bundled with Node.js, and it's used for managing JavaScript packages. Ensure it's installed and up-to-date.

3. **LoopBack 3.0**: Our application's backend is built using LoopBack 3.0. Install it globally using npm:
   ```bash
   npm install -g loopback-cli
   ```
4. **Ember.js**: The frontend of the application is developed using Ember.js. You'll need Ember CLI to run the Ember application. Install it globally using npm:
   ```bash
   npm install -g ember-cli
   ```
---
### Setting Up and Running the Application
Follow these steps to get the application running:

1. **Clone the Repository**:
   Clone the Task=Management  repository to your local machine:
   ```bash
   git clone https://github.com/zhisheng-foo/Task-Management.git
   ```
   
2. **Install Dependencies**:
   Install the necessary Node.js dependencies:
   ```bash
   npm install
   ```
   
3. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project and configure the required environment variables:
   - `postgresql://Tester:Penis545@localhost:5432/Task_Management`: Set this to your PostgreSQL database connection string.

   
4. **Start the LoopBack Backend Server**:
   Run the LoopBack server:
   ```bash
   node .
   ```

5. **Navigate to Front-End Directory**:
   To start working with the front-end part of the application, open another terminal window. Then navigate to the `task-management` directory inside the `client/Front-End` folder by running:
   ```bash
   cd client/Front-End/task-management
   ```
   
6. **Start the Ember.js Frontend**:
   In that same directory, start the Ember.js server:
   ```bash
   ember serve
   ```

After completing these steps, the TaskManagement application should be running locally. The LoopBack server will manage the backend API, and Ember.js will serve the frontend interface.

---

## Usage

1. Register a new Author account.
   
   ![image](https://github.com/zhisheng-foo/Task-Management/assets/105271950/5570ef85-b285-454b-96bd-a3f3d4eab4a3)

2. Log in with your credentials.
   
   ![image](https://github.com/zhisheng-foo/Task-Management/assets/105271950/21f683eb-0d15-4830-99f1-aaaafdbaed83)

3. Create a new task by clicking on 'Create New Task'

   ![image](https://github.com/zhisheng-foo/Task-Management/assets/105271950/c8dcdae2-7086-4631-9a7c-3732a3d03668)
      
4. View a particular task by clicking on 'View Particular Task'.

   ![image](https://github.com/zhisheng-foo/Task-Management/assets/105271950/13b42682-fdf3-4e89-ac8d-a9a59f3e984d)

5. View all Task by clicking on 'View All Task'
    
   ![image](https://github.com/zhisheng-foo/Task-Management/assets/105271950/ea40b52e-7128-44ef-a483-ed5607f178a1)

6. Update Task by clicking on 'Update Task'
    
   ![image](https://github.com/zhisheng-foo/Task-Management/assets/105271950/588c7b72-42db-4f4b-b2ad-c9c85220f516)

7. Delete Task by clicking on 'Delete Task'
    
   ![image](https://github.com/zhisheng-foo/Task-Management/assets/105271950/cfd39fdf-0f79-49a4-8999-91e1995ad0b8)

Yes, providing a video of you testing both the backend and frontend of your application is an excellent idea. Videos can be incredibly helpful for demonstrating how the application works, showcasing its features, and guiding users through the testing process. Here's how you can incorporate this into your README:

---

## Testing

To facilitate a better understanding of how TaskMaster Pro works and how you can manually test its functionalities, we have provided video demonstrations covering both the backend and frontend components.

### Backend Testing Video
- **Description**: This video covers testing of the backend functionalities, including API endpoints, database interactions, and server-side logic.
- **Link to Video**: [Backend Testing Demo](https://drive.google.com/drive/folders/13bp_zPqFmvuz2S7Z8HCrwlOYeauMXel2?usp=sharing)

### Frontend Testing Video
- **Description**: In this video, you will see a walkthrough of the frontend interface, demonstrating user interactions, task management features, and responsiveness of the application.
- **Link to Video**: [Frontend Testing Demo](https://drive.google.com/drive/folders/1e4-PdFOFWUrqR55wc3SrDE1XbaY32a-G?usp=sharing)

---


   



