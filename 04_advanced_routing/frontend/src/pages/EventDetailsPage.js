import { useParams } from "react-router-dom";

export default function EventDetailsPage() {
  const params = useParams();
  return (
    <>
      <div>EventDetailsPage</div>
      <p>{params.eventId}</p>
    </>
  );
}
