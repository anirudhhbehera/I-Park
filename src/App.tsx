// import AppProvider from './providers';
// import AppRouter from './routes';
// import { Toaster } from 'react-hot-toast';
// export default function App() {
//   return (
//     <AppProvider>
//       <Toaster position="top-center" reverseOrder={false} />
//       <AppRouter />
//     </AppProvider>
//   );
// }
import AppProvider from './providers';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { setToken } from './store/authSlice'; // adjust the path if needed
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      dispatch(setToken(token)); // ⬅️ Will decode and populate user
    }
  }, [dispatch]);

  return (
    <AppProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <AppRouter />
    </AppProvider>
  );
}

export default App;
