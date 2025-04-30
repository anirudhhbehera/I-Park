import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

// Try to fetch token from cookies
const initialToken = Cookies.get('token');

let initialUser = null;

// if (initialToken) {
//   try {
//     const decoded = jwtDecode(initialToken);
//     // Validate minimal required fields
//     if (decoded && decoded.id && decoded.email && decoded.role) {
//       initialUser = {
//         id: decoded.id,
//         email: decoded.email,
//         role: decoded.role
//       };
//     }
//   }
//   catch (e) {
//     console.error('Token decode failed:', e);
//   }
// }
if (initialToken) {
  try {
    const decoded = jwtDecode(initialToken);
    if (decoded && decoded.id && decoded.email && decoded.role) {
      initialUser = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role
      };
    }
  } catch (e) {
    console.error('Token decode failed:', e);
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: initialToken || null,
    user: initialUser // will contain { id, email, role }
  },
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
      Cookies.set('token', token); // optional if you want to persist token again

      try {
        const decoded = jwtDecode(token);
        state.user = {
          id: decoded.id,
          email: decoded.email,
          role: decoded.role
        };
      } catch {
        state.user = null;
      }
    },
    clearAuth(state) {
      state.token = null;
      state.user = null;
      Cookies.remove('token');
    }
  }
});

export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
