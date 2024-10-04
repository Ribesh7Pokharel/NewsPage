const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust as needed)
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static("Public")); // Serve static files from "Public" directory

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Public/index.html");
});

// Handle form submissions for email signup
app.post('/', async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    // Log received data for debugging
    console.log("Received data:", { firstname, lastname, email });

    // Validate received data
    if (!firstname || !lastname || !email) {
        console.error("Missing required fields");
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'alphonso.schroeder@ethereal.email', // Your Ethereal email
            pass: 'z6sgjJnyTFvnFjA6Pk' // Your Ethereal password
        },
        logger: true, // Enable logging for debugging
        debug: true   // Enable debug output
    });

    try {
        // Send welcome email
        const info = await transporter.sendMail({
            from: '"Alphonso" <alphonso.schroeder@ethereal.email>', // Sender address
            to: email, // Receiver's email
            subject: "Thanks for subscribing ✔", // Subject line
            text: `Hello ${firstname} ${lastname}, thanks for subscribing. We will keep you updated.`, // Plain text body
            html: `<b>Hello ${firstname} ${lastname}, thanks for subscribing. We will keep you updated.</b>`, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ message: 'Subscription successful. Welcome email sent!' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

// Start server on port 5000 (change to avoid conflicts)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});