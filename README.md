🚀 Finora AI – Your AI-Powered Personal Finance App
Finora AI is a smart personal finance management app that helps you track expenses, manage recurring payments, and gain actionable, AI-driven insights—all designed for modern financial wellness.

Built with ❤️ by faizzshaykh

✨ Features
📊 AI-Driven Insights: Get smart analysis of your spending patterns with personalized suggestions to help you save and budget more effectively.

📅 Monthly Reports: Automatically generated and delivered straight to your inbox via Resend, giving you a clear overview of your financial health.

📥 CSV Import: Easily import your bank and transaction data to get started quickly.

🔄 Recurring Transactions: Never forget a bill again. Track all your subscriptions, bills, and other recurring payments in one place.

☁️ Cloud Storage: Your financial files are securely uploaded and stored with Cloudinary.

🤖 AI-Powered: Built with the Google Gemini API to provide advanced insights and a more intelligent user experience.

💻 Tech Stack
Frontend: React, Vite, and Tailwind CSS for a fast, modern, and responsive user interface.

Backend: Node.js and Express.js (MERN Stack) for a robust and scalable server.

Database: MongoDB Atlas for flexible and reliable data storage.

AI: Google Gemini API to power intelligent financial analysis.

Media Storage: Cloudinary for secure and efficient file uploads.

Emailing/Reports: Resend to handle automated email delivery.

🚀 Getting Started
Follow these steps to get your local development environment up and running.

1️⃣ Clone the repository
Bash

git clone <your-repo-url>
cd <your-repo-folder>
2️⃣ Create Environment Variables
You'll need to create a separate .env file for the backend and add your API keys and credentials.

Backend .env

Create a file named .env in your backend folder and add the following content, replacing the placeholders with your actual keys.

Code snippet

PORT=8000
NODE_ENV=development

MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET="jwt_secret_key"
JWT_EXPIRES_IN="15m"

JWT_REFRESH_SECRET="jwt_refresh_secret_key"
JWT_REFRESH_EXPIRES_IN="7D"

GEMINI_API_KEY=<your-google-gemini-api-key>

CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

RESEND_API_KEY=<your-resend-api-key>
RESEND_MAILER_SENDER=yourmail@gmail.com

CRON_SECRET=finsec_secure_secret_here

FRONTEND_ORIGIN=http://localhost:5173
Frontend .env

If your frontend requires any environment variables, create a separate .env file in the frontend folder.

3️⃣ Install Dependencies
Install the necessary packages for both the backend and frontend.

Backend:

Bash

npm install
Frontend:

Bash

npm install -f
4️⃣ Run the Application
Start the server and client to launch the application.

Backend:

Bash

npm run dev

Frontend:

Bash

npm run dev