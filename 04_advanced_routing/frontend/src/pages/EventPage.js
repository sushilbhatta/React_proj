import { Link } from "react-router-dom";

const DUMMYEVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 1" },
  { id: "e3", title: "Event 1" },
  { id: "e4", title: "Event 1" },
];
export default function Event() {
  return (
    <div>
      <ul>
        {DUMMYEVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
