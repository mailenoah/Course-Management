# Course Management System

A full-stack web application for managing courses, built with Angular and .NET 7 Web API. This application demonstrates CRUD (Create, Read, Update, Delete) operations with a modern, responsive user interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage Guide](#usage-guide)
- [Screenshots](#screenshots)
- [Database Schema](#database-schema)
- [Contributing](#contributing)


## 🎯 Overview

The Course Management System is a proof-of-concept application developed to showcase software development productivity using the Angular framework with a .NET backend. The application allows users to perform full CRUD operations on course records stored in a SQL Server database.

## ✨ Features

- **Course Listing**: View all courses in an organized card layout
- **Add Course**: Create new courses with name, duration, and description
- **Edit Course**: Update existing course information
- **Delete Course**: Remove courses from the database
- **Responsive Design**: Professional UI that works across different screen sizes
- **Real-time Updates**: Changes reflect immediately in the database
- **Form Validation**: Ensures data integrity before submission
- **Angular Routing**: Seamless navigation between pages

## 🛠 Tech Stack

### Frontend
- **Angular** (Latest version)
- **TypeScript**
- **HTML5 & CSS3**
- **Bootstrap** (for responsive design)
- **RxJS** (for reactive programming)

### Backend
- **.NET 7 Web API**
- **Entity Framework Core**
- **SQL Server**
- **C#**

### Development Tools
- **Visual Studio 2022** (Backend)
- **Visual Studio Code** (Frontend)
- **SQL Server Management Studio**

## 📁 Project Structure

```
Course-Management/
├── frontend/                 # Angular Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── course-listing/
│   │   │   │   ├── add-course/
│   │   │   │   └── edit-course/
│   │   │   ├── services/
│   │   │   │   └── course.service.ts
│   │   │   ├── models/
│   │   │   │   └── course.model.ts
│   │   │   └── app-routing.module.ts
│   │   ├── assets/
│   │   └── environments/
│   ├── angular.json
│   └── package.json
│
└── backend/                  # .NET 7 Web API
    ├── Controllers/
    │   └── CourseController.cs
    ├── Models/
    │   └── Course.cs
    ├── Data/
    │   └── AppDbContext.cs
    ├── appsettings.json
    └── Program.cs
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Angular CLI** - Install via `npm install -g @angular/cli`
- **Visual Studio 2022** - [Download](https://visualstudio.microsoft.com/)
- **.NET 7 SDK** - [Download](https://dotnet.microsoft.com/download)
- **SQL Server** (Express or Developer Edition) - [Download](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mailenoah/Course-Management.git
cd Course-Management
```

### 2. Backend Setup (.NET API)

#### Step 2.1: Configure Database Connection

1. Open the `backend` folder in Visual Studio 2022
2. Open `appsettings.json`
3. Update the connection string with your SQL Server instance:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=Assignment1;Trusted_Connection=True;MultipleActiveResultSets=True"
  }
}
```

> **Note**: Replace the `Server` value with your SQL Server instance name, or use `.` for the default local instance.

#### Step 2.2: Run Database Migrations

1. Open **Package Manager Console** in Visual Studio:
   - Go to `Tools` → `NuGet Package Manager` → `Package Manager Console`

2. Run the following commands:

```powershell
Add-Migration Initial
Update-Database
```

This will create the database and seed it with initial course data.

#### Step 2.3: Build and Run the API

1. Press `F5` or click the "Run" button in Visual Studio
2. The API should start running on `https://localhost:7XXX` (note the port number)
3. Keep the API running while using the application

### 3. Frontend Setup (Angular)

#### Step 3.1: Install Dependencies

```bash
cd frontend
npm install
```

#### Step 3.2: Configure API Endpoint

1. Open `src/environments/environment.ts`
2. Update the API URL if your backend is running on a different port:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7XXX/api'  // Update port number
};
```

#### Step 3.3: Run the Angular Application

```bash
ng serve
```

The application will be available at `http://localhost:4200`

## 🎮 Running the Application

1. **Start the Backend API**:
   - Open the backend solution in Visual Studio 2022
   - Press `F5` to run the API
   - Ensure it's running without errors

2. **Start the Frontend**:
   - Open a terminal in the `frontend` directory
   - Run `ng serve`
   - Navigate to `http://localhost:4200` in your browser

3. **Verify Everything is Working**:
   - The Course Listing page should display 10 default courses
   - Test CRUD operations to ensure database connectivity

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/{id}` | Get a specific course by ID |
| POST | `/api/courses` | Create a new course |
| PUT | `/api/courses/{id}` | Update an existing course |
| DELETE | `/api/courses/{id}` | Delete a course |

### Example Request Bodies

#### Create Course (POST)
```json
{
  "name": "Introduction to Programming",
  "duration": "12 weeks",
  "description": "Learn the fundamentals of programming"
}
```

#### Update Course (PUT)
```json
{
  "id": 1,
  "name": "Advanced Programming",
  "duration": "16 weeks",
  "description": "Deep dive into advanced programming concepts"
}
```

## 📖 Usage Guide

### Viewing Courses

1. Launch the application
2. The **Course Listing** page displays all courses in card format
3. Each card shows:
   - Course Name
   - Duration
   - Description
   - Edit and Delete buttons

### Adding a New Course

1. Click **"Add Course"** in the navigation bar
2. Fill in the form:
   - **Name**: Course title
   - **Duration**: Course length (e.g., "8 weeks")
   - **Description**: Brief course description
3. The **Submit** button enables only when all fields are filled
4. Click **Submit** to save the course
5. The new course appears first in the Course Listing

### Editing a Course

1. Click the **Edit** button on any course card
2. Modify the desired fields
3. Click **Submit** to save changes
4. Click **Cancel** to discard changes
5. Returns to Course Listing after submission

### Deleting a Course

1. Click the **Delete** button on any course card
2. The course is immediately removed from the database
3. The listing updates automatically

## 📸 Screenshots
<img width="829" height="519" alt="image" src="https://github.com/user-attachments/assets/574996bf-4e63-442a-bde4-7811ac8480fa" />
<img width="817" height="494" alt="image" src="https://github.com/user-attachments/assets/1719e230-b442-40dd-b4b5-8b6caaaf6cfc" />
<img width="846" height="454" alt="image" src="https://github.com/user-attachments/assets/4e65bbf8-0e3e-4a9b-a5b6-bc5842cc7642" />

## 🗄 Database Schema

### Courses Table

| Column | Type | Constraints |
|--------|------|-------------|
| Id | int | Primary Key, Auto-increment |
| Name | nvarchar(max) | Not Null |
| Duration | nvarchar(max) | Not Null |
| Description | nvarchar(max) | Not Null |

### Seed Data

The application comes with 10 pre-seeded courses (AIM101, AIM102, etc.) for testing purposes.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

- **No node_modules**: The `node_modules` folder is excluded from the repository. Run `npm install` to restore dependencies.
- **No bin/obj folders**: These folders are excluded from version control. Visual Studio will regenerate them.
- **CORS Configuration**: The API is configured to accept requests from `http://localhost:4200`
- **Database Migrations**: Always run migrations after pulling changes that affect the database schema

## ⚠️ Troubleshooting

### Common Issues

**Issue**: API returns 404 errors
- **Solution**: Ensure the API is running and the `apiUrl` in `environment.ts` matches the API's actual URL

**Issue**: Database connection fails
- **Solution**: Verify your SQL Server is running and the connection string in `appsettings.json` is correct

**Issue**: CORS errors in the browser
- **Solution**: Check that CORS is properly configured in the API's `Program.cs` file

**Issue**: Angular app doesn't start
- **Solution**: Delete `node_modules` and `.angular` folders, then run `npm install` again



## 👨‍💻 Author

**Student Number**: u22550799

## 🙏 Acknowledgments

- University of Pretoria - INF354 Course
- Angular Documentation
- .NET Documentation
- Stack Overflow Community

---

**Last Updated**: February 2026

