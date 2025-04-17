import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import loginImg from '@/assets/login-img.png';
import logopng from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault(); // if it's inside a <form>
    
    // Optional: do login logic here...

    navigate('/');
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
            {/* <h1 className="text-2xl font-bold tracking-tight">PARK</h1> */}
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold">Welcome back!</h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                // required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••"
                // required
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              {/* <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm">
                  Remember for 30 days
                </label>
              </div> */}
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
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>

          {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div> */}

          {/* <div className="flex gap-4">
            <Button variant="outline" className="flex w-full items-center justify-center gap-2">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M17.13 17.13c-1.41 1.41-3.12 2.33-5.13 2.33-4.97 0-9-4.03-9-9s4.03-9 9-9c2.01 0 3.72.92 5.13 2.33" />
                <path d="M19 12h-7" />
                <path d="M16 9l3 3-3 3" />
              </svg>
              Sign in with Google
            </Button>

            <Button variant="outline" className="flex w-full items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                <path d="M10 2c1 .5 2 2 2 5" />
              </svg>
              Sign in with Apple
            </Button>
          </div>  */}

          {/* <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-medium text-black hover:underline">
              Sign Up
            </Link>
          </div> */}
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
