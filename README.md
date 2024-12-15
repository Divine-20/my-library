# Book Management System (MYLibrary)

A full-stack web application for managing books and authors with authentication.

## Features

- User authentication with JWT
- Book management (CRUD operations)
- Author management (CRUD operations)
- Responsive design
- Pagination
- Beautiful UI with cover images
- Error handling and validation
- Logging and monitoring

## Tech Stack

### Backend
- Express.js
- Sequelize ORM
- PostgreSQL
- JWT for authentication
- Winston for logging
- Morgan for HTTP request logging

### Frontend
- React
- React Query for state management
- React Router for routing
- Styled Components for styling
- React Hook Form for form handling
- Axios for API calls

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up PostgreSQL database and update connection string in `server/config/database.js`

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

### Authentication
- POST /api/auth/login
  - Body: { email: string, password: string }
  - Returns: { token: string }

### Books
- GET /api/books
  - Headers: Authorization: Bearer {token}
  - Query params: page (optional)
  - Returns: { books: Book[], total: number, totalPages: number, currentPage: number }

- GET /api/books/:id
  - Headers: Authorization: Bearer {token}
  - Returns: Book

- POST /api/books
  - Headers: Authorization: Bearer {token}
  - Body: { title: string, isbn: string, authorId: string, coverImage: string }
  - Returns: Book

- PUT /api/books/:id
  - Headers: Authorization: Bearer {token}
  - Body: { title?: string, isbn?: string, authorId?: string, coverImage?: string }
  - Returns: Book

### Authors
- GET /api/authors
  - Headers: Authorization: Bearer {token}
  - Returns: Author[]

- GET /api/authors/:id
  - Headers: Authorization: Bearer {token}
  - Returns: Author

- POST /api/authors
  - Headers: Authorization: Bearer {token}
  - Body: { name: string, bio?: string }
  - Returns: Author

- PUT /api/authors/:id
  - Headers: Authorization: Bearer {token}
  - Body: { name?: string, bio?: string }
  - Returns: Author

## Testing

Run tests using:
```bash
npm run test
```

## Logging

Logs are stored in:
- error.log: Error level logs
- combined.log: All logs

## Monitoring

The application uses Winston for logging and Morgan for HTTP request logging. All logs are stored in files and also output to console in development mode.
