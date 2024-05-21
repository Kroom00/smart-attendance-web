# Student Attendance Tracking System

## Overview
The Student Attendance Tracking System is a web-based application designed to manage student attendance records. The system allows teachers to mark attendance for their courses, view attendance history, and generate reports. Students can log in to view their attendance records.

## Flow Chart
[Flow Chart](https://www.lucidchart.com/pages/)

## Setup
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd project-directory
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Setup environment variables in a `.env` file:
    ```env
    PORT=4000
    MONGO_URI=<mongodb://localhost:27017/School>
    ```
4. Start the server:
    ```bash
    npm run start
    ```

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: bcrypt for password hashing, express-session for session management

## Goals
- Automate the attendance tracking process
- Provide an easy-to-use interface for teachers and students
- Generate accurate attendance reports
- Allow teachers to update attendance records
- Ensure data security and privacy

## Screenshots
![Login Page](path/to/login-screenshot.png)
![Teacher Dashboard](path/to/dashboard-screenshot.png)
![Attendance Marking](path/to/attendance-screenshot.png)
![Attendance Reports](path/to/reports-screenshot.png)

## Future Work
- Implement notification system for absent students
- Develop mobile application for easier access
- Add analytics to monitor attendance trends
- Integrate with school management systems
- Allow parents to view student attendance

## Resources
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [EJS Documentation](https://ejs.co/)

## Team Members
- **Abdulkarim Alharthi** - 441017066
- **Mshari almouslfeh 2** - 441013628
- **Fahad Almutairi  3** - 440015421

## Deliverables
- A working REST API, built by you that runs on a local server.
- The URL of the GitHub repository for your app: [GitHub Repository](https://github.com/your-username/student-attendance-tracking-system)
- The URL of the slides for your presentation: [Presentation Slides](https://docs.google.com/presentation/d/your-presentation-id)
- Adequate and complete documentation in the README.md file.
