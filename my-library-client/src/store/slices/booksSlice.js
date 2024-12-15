import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/books';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (page = 1) => {
    const response = await api.get(`/books?page=${page}`);
    return response.data;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    totalPages: 0,
    currentPage: 1,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload.books;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default booksSlice.reducer;