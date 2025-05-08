import FormPage from '@/pages/form';
import NotFound from '@/pages/not-found';
import path from 'path';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import Cookies from 'js-cookie';

// 2️⃣ Below your imports, before AppRouter, define:
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = Cookies.get('token');
  return token ? children : <Navigate to="/login" replace />;
}
const DashboardLayout = lazy(
  () => import('@/components/layout/dashboard-layout')
);
const SignInPage = lazy(() => import('@/pages/auth/signin'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
const StudentPage = lazy(() => import('@/pages/students'));
const StudentDetailPage = lazy(
  () => import('@/pages/students/StudentDetailPage')
);
const IparkDashboard = lazy(() => import('@/pages/IparkPages/index.tsx'));
const Hotel = lazy(
  () =>
    import('../../../I-Park/src/pages/IparkPages/Components/Master/Hotel/Hotel')
);
const HotelBranch = lazy(
  () =>
    import(
      '../../../I-Park/src/pages/IparkPages/Components/Master/HotelBranch/HotelBranch'
    )
);
const Valet = lazy(
  () =>
    import('../../../I-Park/src/pages/IparkPages/Components/Master/Valet/Valet')
);
// ----------------------------------------------------------------------
const HotelBranchGroup = lazy(
  () =>
    import(
      '../../../I-Park/src/pages/IparkPages/Components/Master/HotelBranchGroup/HotelBranchGroup'
    )
);
export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/dashboard',
          element: <DashboardPage />
          // index: true
        },
        {
          path: '/Hotel',
          element: <Hotel />
          // index: true
        },
        {
          path: '/HotelBranchGroup',
          element: <HotelBranchGroup />
          // index: true
        },
        {
          path: '/HotelBranch',
          element: <HotelBranch />
          // index: true
        },
        {
          path: '/Valet',
          element: <Valet />
          // index: true
        },
        {
          // path: 'IparkDashboard',
          element: <IparkDashboard />,
          index: true
        },
        {
          path: 'student',
          element: <StudentPage />
        },
        {
          path: 'student/details',
          element: <StudentDetailPage />
        },
        {
          path: 'form',
          element: <FormPage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <SignInPage />,
      index: true
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
