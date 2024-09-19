// using tanstak Query
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http.js";

// component loading
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function NewEventsSection() {
  // configuring the useQuery hook
  // 1. queryFn paramas==> defines the actual code that will execute the  code to send the http request and
  // note : tanstack query doesnot send the http requests.
  // we need to write a code to execute this operation by ourselfs.
  // Tanstack query then manages tje data ,error ,caching and much more.

  const { data, isPending, isError, error } = useQuery({
    // data is the actual data returned by https response method.
    // there are other properties also returned by the useQuery

    queryKey: ["events"],
    // fetchEvents is the user defined Function to send https  requests.
    queryFn: fetchEvents,
  });
  let content;

  // if (isLoading) {
  //   content = <LoadingIndicator />;
  // }

  if (isPending) {
    content = <LoadingIndicator />;
  }
  // if (error) {
  //   content = (
  //     <ErrorBlock title='An error occurred' message='Failed to fetch events' />
  //   );
  // }
  if (isError) {
    content = (
      <ErrorBlock
        title='An error occurred'
        message={error.info?.message || "Failed to fetxch events."}
      />
    );
  }
  if (data) {
    content = (
      <ul className='events-list'>
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className='content-section' id='new-events-section'>
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
