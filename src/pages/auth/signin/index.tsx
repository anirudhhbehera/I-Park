import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import loginImg from '@/assets/login-img.png';
import logopng from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setToken } from '@/store/authSlice'; // adjust path as needed

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      // if (res.ok) {
      //   // store token
      //   Cookies.set('token', data.token, { expires: 7 });

      //   toast.success('Login Successful! 🎉'); // 👈 show success toast

      //   navigate('/');
      // }
      if (res.ok) {
        Cookies.set('token', data.token, { expires: 7 });

        dispatch(setToken(data.token)); // 👈 Update Redux with user details

        toast.success('Login Successful! 🎉');
        navigate('/');
      } else {
        toast.error(data.message || 'Login failed! 🚫'); // 👈 show error toast
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Something went wrong! ❌');
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side - Login Form */}
      <div className="flex w-full flex-col items-center justify-center px-4 md:w-1/2 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="h-22 w-22 relative">
              <img
                src={logopng}
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold">Welcome back!</h2>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address / Username
              </label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}
            <div className="relative space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type={showPwd ? 'text' : 'password'} // ← toggle here
                placeholder="••••••"
                className="w-full pr-10" // ← add right padding
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPwd((s) => !s)} // ← flip showPwd
                className="top-50 absolute right-3 text-gray-500 hover:text-gray-700"
                tabIndex={-1}
              >
                {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              Login
            </Button>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden bg-gray-100 md:block md:w-1/2">
        <div className="relative h-full w-full">
          <img
            src={loginImg}
            alt="Parked car in garage"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
