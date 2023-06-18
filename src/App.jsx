import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./state/store";
import store from "./state/store";
import SignIn from "./pages/SignIn";
import Registration from "./pages/Registration";
import UpdateEmail from "./pages/UpdateEmail";
import UpdatePass from "./pages/UpdatePass";
import ResetPass from "./pages/ResetPass";

const ProfilePage = React.lazy(() => import("./pages/Profile"));
const CartPage = React.lazy(() => import("./pages/Cart"));
const UpdateNamePage = React.lazy(() => import("./pages/UpdateName"));
const UpdatePhonePage = React.lazy(() => import("./pages/UpdatePhone"));
const Product = React.lazy(() => import("./pages/Product"));
const Orders = React.lazy(() => import("./pages/Orders"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/cart",
        element: (
          <Suspense fallback="Loading Please Wait...">
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback="Loading Please Wait...">
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: "/updateName",
        element: (
          <Suspense fallback="Loading Please Wait...">
            <UpdateNamePage />
          </Suspense>
        ),
      },
      {
        path: "/updatePhone",
        element: (
          <Suspense fallback="Loading Please Wait...">
            <UpdatePhonePage />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback="Loading Please Wait...">
            <Product />
          </Suspense>
        ),
      },
      {
        path: "/orders",
        element: (
          <Suspense fallback="Loading Please Wait...">
            <Orders />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/updateEmail",
    element: <UpdateEmail />,
  },
  {
    path: "/updatePassword",
    element: <UpdatePass />,
  },
  {
    path: "/resetPassword",
    element: <ResetPass />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

export default App;
