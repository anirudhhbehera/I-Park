import AppProvider from './providers';
import AppRouter from './routes';
import { Toaster } from 'react-hot-toast';
export default function App() {
  return (
    <AppProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <AppRouter />
    </AppProvider>
  );
}
