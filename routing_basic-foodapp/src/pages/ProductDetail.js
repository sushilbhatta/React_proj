import { Link, useParams } from "react-router-dom";
export default function ProductDetail() {
  const params = useParams();
  console.log(params);
  //   gives the object of all the dynamic route paramaters used .
  return (
    <>
      <h1>Product Detail!</h1>
      <p>{params.productId}</p>
      <Link to='..' relative='path'>
        back
      </Link>
    </>
  );
}
