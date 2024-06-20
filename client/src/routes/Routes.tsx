/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { Paths } from "@/constants/paths";
import { UserRoles } from "@shared/types/index";
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";
import Spinner from "@/components/Spinner/Spinner";
import MainLayOut from "@/layouts/MainLayOut/MainLayOut";
import Home from "@/pages/Home/Home";

const Login = lazy(() => import("@/pages/Login/Login"));
const Admin = lazy(() => import("@/pages/Admin"));
const UserDashboard = lazy(() => import("@/pages/UserDashboard"));
export const routes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <MainLayOut />,
    children: [
      {
        path: Paths.HOME,
        element: <Home />,
      },
      {
        path: Paths.LOGIN,
        element: (
          <GuestRoute>
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          </GuestRoute>
        ),
      },
      {
        path: Paths.ADMIN,
        element: (
          <PrivateRoute allowedRoles={[UserRoles.ADMIN]}>
            <Suspense fallback={<Spinner />}>
              <Admin />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: Paths.USER_DASHBOARD,
        element: (
          <PrivateRoute allowedRoles={[UserRoles.USER, UserRoles.ADMIN]}>
            <Suspense fallback={<Spinner />}>
              <UserDashboard />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
];
