import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventPage from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventDetailsPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import RootLayout from "./pages/Root";
import RootEvent from "./pages/EventsRoot";
import { loader as eventsLoader } from "./pages/Events";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <RootEvent />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: eventsLoader,
          },
          // the nested route setup can used not only for the wapper layout  but to use the shared loader function.
          {
            path: ":eventId",
            id: "event-detail", //used to identify which route component belong by useRouteLoaderData()
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: deleteEventAction,
                // loader: eventDetailLoader,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// loader will be executed right after the particular  route is clicked not after the component rendeer.
// reacter router will wait for data fetching to be completed and only then it will navigate to that  particular route
// this ensures that data is already avaliavle while the component is being rendered to ensure the good user experience.

// react router provide the tol to see the current route transistion state ie
// there is a hook whch helps  to give feedback to user that
//  that is not completly fetched and we havnt reached the
// next route that you requested.
// the hook is called useNavigation()
// useNavigation hook helps to find out ,
// 1.curently we are in active trasnistion
// 2.if we are loading data
// 3.we have no active transition going on.
