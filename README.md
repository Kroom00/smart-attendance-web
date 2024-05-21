# Student Attendance Tracking System

## Overview
The Student Attendance Tracking System is a web-based application designed to manage student attendance records. The system allows teachers to mark attendance for their courses, view attendance history. Students can log in to view their attendance records.

## Flow Chart
![diagram](https://github.com/Kroom00/smart-attendance-web/assets/88386673/598f29bd-e557-4628-95bc-c7d24274a3d8)


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
    npm install
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
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/54433e4d-b5a6-4fb7-9b36-84183d603d1b)
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/2ed2b6e3-96eb-4ca0-b17d-de5a717313c1)
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/14cfab35-9815-47d6-b0e9-07f97f355497)
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/b69c2873-f784-4b3e-8323-b77532252e58)
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/908bffb5-2ddf-4d1b-930a-52498a8cc6bd)
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/5e97c642-8de8-4512-9ffb-b179352ac681)
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/690fa5c5-0be4-45d0-a0a2-db3830a4a870)
![image](https://github.com/Kroom00/smart-attendance-web/assets/88386673/8b2d890e-b59a-4571-b2ba-9471bc478349)



## Future Work
- Implement notification system for absent students
- Develop mobile application for easier access
- Add analytics to monitor attendance trends
- Integrate with school management systems
- Allow parents to view student attendance

