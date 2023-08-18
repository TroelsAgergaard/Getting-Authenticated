import { Link, useOutletContext } from "react-router-dom";
import { useFetch } from "../useFetch";

const Pets = (props) => {
  //const auth = useContext(authContext);
  const [auth, setAuth] = useOutletContext();
  let data = useFetch(auth, setAuth, "https://api.petfinder.com/v2/animals");
  return (
    <>
      <p>{data.animals[0].name}</p>
      <p>Pets list</p>
      <Link to="/">Tuts</Link>
    </>
  );
};
export default Pets;
