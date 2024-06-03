import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";
import NewEventPage from "./pages/NewEventPage.jsx";
import EditEventPage from "./pages/EditEventPage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import EventsRootLayout from "./pages/EventsRootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
