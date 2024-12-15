export const validateBook = (book) => {
  const errors = [];

  if (!book.title?.trim()) {
    errors.push("Title is required");
  }

  if (!book.isbn?.trim()) {
    errors.push("ISBN is required");
  } else if (!/^[\d-]{10,17}$/.test(book.isbn.trim())) {
    errors.push("Invalid ISBN format");
  }

  if (!book.authorId) {
    errors.push("Author is required");
  }

  if (!book.coverImage?.trim()) {
    errors.push("Cover image URL is required");
  } else if (!isValidUrl(book.coverImage)) {
    errors.push("Invalid cover image URL");
  }

  return errors;
};

export const validateAuthor = (author) => {
  const errors = [];

  if (!author.name?.trim()) {
    errors.push("Name is required");
  }

  return errors;
};
export const validateUser = (user) => {
  const errors = [];

  if (!user.firstName?.trim()) {
    errors.push("First name is required");
  }
  if (!user.lastName?.trim()) {
    errors.push("Last name is required");
  }
  if (!user.password?.trim()) {
    errors.push("Password is required");
  } else if (user.password.length < 6) {
    errors.push("Password must be at least 6 characters long");
  } else if (!/[A-Z]/.test(user.password)) {
    errors.push("Password must contain at least one uppercase letter");
  } else if (!/[0-9]/.test(user.password)) {
    errors.push("Password must contain at least one number");
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(user.password)) {
    errors.push("Password must contain at least one special character");
  }
  if (!user.email?.trim()) {
    errors.push("email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    errors.push("Invalid email format");
  }

  return errors;
};

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};
