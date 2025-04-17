import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="px-8 py-4 border-t border-gray-200 mt-0 flex justify-between text-sm text-gray-500">
      <div className="flex gap-4">
        <Link to="#">Terms & Conditions</Link>
        <Link to="#">Privacy Policy</Link>
      </div>
      <div>© 2025 I-PARK. All rights reserved.</div>
    </footer>
  );
}
