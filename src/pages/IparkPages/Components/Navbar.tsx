import { ChevronDown, LogOutIcon, Search } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import placeholderImg from '@/assets/logo.svg';
import MasterDropdown from './MasterDropdown';
import Notification from './Dashboard/Notification';
import Profile from './Dashboard/Profile';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    toast(
      (t) => (
        <div className="space-y-2 ">
          <div>Are you sure you want to logout?</div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => {
                Cookies.remove('token');
                toast.dismiss(t.id);
                navigate('/login', { replace: true });
              }}
              className="rounded bg-red-500 px-3 py-1 text-white"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="rounded bg-gray-200 px-3 py-1"
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: 2000 }
    );
  };

  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-8 py-4">
      <div className="flex items-center gap-12">
        {/* <div className="font-serif text-xl font-bold">
          <span className="inline-block mr-1">I</span>
          <span className="inline-block mr-1">-</span>
          <NavLink
  to="/"
  end
  className={({ isActive }) =>
    `text-[#111111] font-bold ${isActive ? 'underline decoration-2 underline-offset-4' : 'no-underline'}`
  }
>
  <span>PARK</span>
</NavLink>

        </div> */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `inline-block ${isActive ? 'underline decoration-2 underline-offset-4' : 'no-underline'}`
          }
        >
          <img
            src={placeholderImg}
            alt="Logo"
            className="h-10 w-auto" // you can adjust size
          />
        </NavLink>
        <nav className="flex items-center gap-8">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `font-bold text-[#111111] ${isActive ? 'underline decoration-2 underline-offset-4' : 'no-underline'}`
            }
          >
            Dashboard
          </NavLink>

          <MasterDropdown />

          <NavLink
            to="#"
            className={({ isActive }) =>
              `font-bold text-[#111111] ${isActive ? 'no-underline' : 'no-underline'}`
            }
          >
            My Account
          </NavLink>

          <NavLink
            to="#"
            className={({ isActive }) =>
              `font-bold text-[#111111] ${isActive ? 'no-underline' : 'no-underline'}`
            }
          >
            Customer Feedback
          </NavLink>

          {/* <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-bold text-[#111111] ${isActive ? 'underline decoration-2 underline-offset-4' : 'no-underline'}`
            }
          >
            Logout
          </NavLink> */}
          {/* <button
  onClick={handleLogout}
  className=" font-bold text-[#111111] hover: rounded-full border border-red-200  hover:bg-red-300 px-3 py-1 flex items-center justify-center"
>
  Logout
</button> */}
          <Button
            variant="outline"
            className=" inline-flex items-center space-x-2 rounded-full bg-red-500 text-[#ffffff] hover:bg-red-600"
            onClick={handleLogout}
          >
            <LogOutIcon className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none"
          />
        </div>
        {/* <div className="flex items-center gap-1 text-gray-700">
          <span>English (United States)</span>
          <ChevronDown className="h-4 w-4" />
        </div> */}
        <Notification />
        <Profile />
      </div>
    </header>
  );
}
