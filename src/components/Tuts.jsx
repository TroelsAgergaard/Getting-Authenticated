import { Link, useOutletContext } from "react-router-dom";

const Tuts = () => {
  const [auth, setAuth] = useOutletContext();
  return (
    <>
      <p>token: {auth.token}</p>
      <p>Tutorial</p>
      <Link to="/pets">Pets</Link>
    </>
  );
};

export default Tuts;
