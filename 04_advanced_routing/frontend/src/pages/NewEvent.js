import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return (
    <>
      <EventForm></EventForm>
    </>
  );
}
export async function action({ request, params }) {
  const data = await request.formData();
  console.log("DATA IS" + data);
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log("EVENT DATA IS" + eventData.title);
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  console.log("RESPONSE IS", response);
  if (!response.ok) {
    throw json({ message: "Could not save an event!" }, { status: 500 });
  }
  return redirect("/events");
}
