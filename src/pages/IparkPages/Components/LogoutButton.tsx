import { LogOutIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast(
      (t) => (
        <div className="space-y-2">
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
    <Button
      variant="outline"
      className="inline-flex items-center space-x-2 rounded-full bg-red-500 text-[#ffffff] hover:bg-red-600"
      onClick={handleLogout}
    >
      <LogOutIcon className="h-4 w-4" />
      <span>Logout</span>
    </Button>
  );
}
