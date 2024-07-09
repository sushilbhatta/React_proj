import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      // 1st argument is data which is in form of  formData obj
      // since our action is not using Form component we need to  use useSubmit() hook to  extract the data submiited by the form  in this case it is null
      submit(null, { method: "delete" }); //action: "/a-diff-path"
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to='edit'>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
