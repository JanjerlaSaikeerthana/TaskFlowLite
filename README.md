TaskFlowLite

A simple and efficient Full Stack Task Management Application that helps users organize daily tasks, track progress, and improve productivity.

Features

1.Add new tasks
2.Delete tasks
3.Mark tasks as completed
4.View all tasks instantly
5.Clean and responsive UI
6.Success and error messages for better user experience

Tech Stack

Backend

1.Java
2.Spring Boot
3.Spring Data JPA
4.H2 Database

Frontend

1.HTML
2.CSS
3.JavaScript

Project Structure

TaskFlowLite/
│
├── backend/
│   ├── src/main/java/com/app/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   └── TaskflowproApplication.java
│   └── src/main/resources/
│       └── application.properties
│
└── frontend/
    ├── index.html
    └── script.js
    
How to Run the Project

Backend Setup

1.Open the backend folder in your IDE
2.Run TaskflowproApplication.java
3.Server will start at http://localhost:8080

Frontend Setup

1.Open the frontend folder
2.Double-click index.html
3.Application will open in your browser

API Endpoints

1.GET /tasks → Get all tasks
2.POST /tasks → Add new task
3.PUT /tasks/{id} → Mark task as completed
4.DELETE /tasks/{id} → Delete task

Future Enhancements

1.Add task priority (High/Medium/Low)
2.Add deadlines and reminders
3.Search and filter tasks
4.User authentication
5.Dark mode UI

Project Overview

TaskFlowLite is a beginner-friendly full-stack application demonstrating CRUD operations, REST API integration, and frontend-backend communication.

Author

Janjerla Saikeerthana

Acknowledgement

This project was built for learning and demonstration purposes as a full-stack development task.
