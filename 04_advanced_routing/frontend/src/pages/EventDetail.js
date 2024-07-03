import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailsPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event}></EventItem>
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected details" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
