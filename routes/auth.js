const express = require('express');
const bcrypt = require('bcrypt');
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const router = express.Router();

router.post("/views/index.ejs", async (req, res) => {
    const { role, Email, Password } = req.body;
    console.log(`Login attempt: role=${role}, Email=${Email}, Password=${Password}`); // Debug statement

    if (role === 'student') {
        const student = await Student.findOne({ Email });
        console.log(`Student found: ${student}`); // Debug statement
        if (!student) {
            console.log("Student not found"); // Debug statement
            return res.status(400).send("Invalid email or password");
        }

        const passwordMatch = await bcrypt.compare(Password, student.Password);
        console.log(`Password match: ${passwordMatch}`); // Debug statement
        if (!passwordMatch) {
            console.log("Password does not match"); // Debug statement
            return res.status(400).send("Invalid email or password");
        }

        req.session.email = Email; // Store the student's email in the session
        req.session.role = 'student'; // Store the role in the session
        console.log("Session set for student:", req.session); // Debug statement
        res.redirect("/student");
    } else if (role === 'teacher') {
        const teacher = await Teacher.findOne({ Email });
        console.log(`Teacher found: ${teacher}`); // Debug statement
        if (!teacher) {
            console.log("Teacher not found"); // Debug statement
            return res.status(400).send("Invalid email or password");
        }

        const passwordMatch = await bcrypt.compare(Password, teacher.Password);
        console.log(`Password match: ${passwordMatch}`); // Debug statement
        if (!passwordMatch) {
            console.log("Password does not match"); // Debug statement
            return res.status(400).send("Invalid email or password");
        }

        req.session.email = Email; // Store the teacher's email in the session
        req.session.role = 'teacher'; // Store the role in the session
        console.log("Session set for teacher:", req.session); // Debug statement
        res.redirect("/teacher");
    } else {
        console.log("Invalid role"); // Debug statement
        return res.status(400).send("Invalid role");
    }
});


router.post("/views/signup.ejs", async (req, res) => {
    const { role, Password, ...data } = req.body;
    console.log(`Signup attempt: role=${role}, Email=${data.Email}, Password=${Password}`); // Debug statement
    const hashedPassword = await bcrypt.hash(Password, 10); // Hash the password
    data.Password = hashedPassword;
    console.log(`Hashed password: ${hashedPassword}`); // Debug statement

    try {
        if (role === 'student') {
            await Student.create(data);
            console.log("Student created"); // Debug statement
        } else if (role === 'teacher') {
            await Teacher.create(data);
            console.log("Teacher created"); // Debug statement
        } else {
            console.log("Invalid role during signup"); // Debug statement
            return res.status(400).send("Invalid role");
        }
        res.redirect("/");
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).send("Error during signup");
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).send("Error logging out");
        }
        res.redirect("/"); // Redirect to the login page after logging out
    });
});


module.exports = router;
