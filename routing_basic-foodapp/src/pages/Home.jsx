import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  // useNavigate is used to navigate programatically
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/products");
  }
  return (
    <div>
      <h1>My home page</h1>
      <p>
        Go to <Link to='products'>list of items</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate Programatically</button>
      </p>
    </div>
  );
}
