import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  // useLoaderData is the special hook  used to get the data returned by loader in route Defn
  // since the loader is async function it return a promise
  //  but react-router-dom ensures that the sent data by
  // loader is resolved and we get the actual data insted of promise.
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  console.log(events);

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;
// loader function is executed in the browser if=ven though code looks like a backend code

async function loadEvents() {
  // react router  resolve the promise by  sending response using browser Response constructor .
  // const res = new Response("any data of choice", { object with addn info like status code });
  // return res;
  // takes the first argument which is resolved.
  // router dom will extract the response  useing Response Constructor
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Cound not fetch events" };
    // alt
    // using throw with ErrorElement in an route defn
    // throw { message: "couldnot fetch events" };
    // insted of just simple error messsage we should  identify either error is 404 or 500 or anything else
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    // json is the helper utility fn provided by the react dom
    throw json({ message: "Could not fetch events" }, { status: 500 }); //we do not need to stingy json  when using the error message we donot need to parde back to object also
  } else {
    // return response;  directly returning response will not wowrk while defering
    const resData = await response.json();
    return resData.events;
    // could return obj,number,string ond so on
  }
}
export function loader() {
  return defer({
    events: loadEvents(),
  });
}
