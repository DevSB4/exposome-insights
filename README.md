# Ticketing System Project

The Ticketing System Project is a comprehensive web application designed to streamline the ticket management process. This application allows users to register, authenticate, create, and manage tickets efficiently. Built with modern technologies, it offers a secure and user-friendly experience.

## Features

### User Management

- **User Registration**: Users can create new accounts by providing necessary information such as name, email, and password.
- **User Authentication**: Registered users can log in securely using their credentials, ensuring data privacy and access control.

### Ticket Management

- **Ticket Creation**: Authenticated users can create new tickets by providing a title, description, priority level, and status.
- **Ticket Listing**: Users can view a list of all their created tickets, allowing for easy tracking and management.
- **Ticket Details**: Users can view detailed information about a specific ticket, including its title, description, priority, status, and creation date.
- **Ticket Updates**: Users have the ability to update the details of their own tickets, such as the title, description, priority, and status.
- **Ticket Deletion**: Users can delete their own tickets when they are no longer needed.

### Security and Validation

- **Password Hashing**: Passwords are securely hashed using the industry-standard bcrypt algorithm, ensuring that sensitive information is never stored in plain text.
- **JSON Web Tokens (JWT)**: Authentication is handled using JSON Web Tokens, providing a secure and stateless way of authenticating users.
- **Data Validation**: Input data is validated using the validator library, ensuring that only valid and expected data is accepted by the application.

### Technologies Used

#### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing for server-side execution of JavaScript code.
- **Express.js**: A minimal and flexible Node.js web application framework, providing a robust set of features for building web applications and APIs.
- **MongoDB**: A popular NoSQL database used for storing and retrieving data in a flexible and scalable manner.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with the database.
- **bcrypt**: A library for hashing passwords securely.
- **JSON Web Tokens (jsonwebtoken)**: A library for generating and verifying JSON Web Tokens, used for authentication purposes.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file, allowing for better configuration management.

#### Frontend

- **React.js**: A popular JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM.
- **React Router DOM**: A routing library for React applications, enabling navigation between different components and handling URLs.
- **Tailwind CSS**: A utility-first CSS framework that provides a set of low-level utility classes for building custom designs quickly.
- **React Hook Form**: A library that provides an easy and performant way to handle form state and validation in React applications.

## Getting Started

To get started with the Ticketing System Project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/ticketing-system.git`
2. Install dependencies for the backend: `cd backend && npm install`
3. Install dependencies for the frontend: `cd ../frontend && npm install`
4. Set up environment variables (e.g., database connection, JWT secret) in the `.env` file.
5. Start the backend server: `npm start` (from the `backend` directory)
6. Start the frontend development server: `npm start` (from the `frontend` directory)

## Contributing

Contributions to the Ticketing System Project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the established coding conventions and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
