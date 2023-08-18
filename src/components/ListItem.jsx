import { useState } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <Link to="/emf">
        <li>{props.name}</li>
      </Link>
      <div
        onClick={() => {
          setLiked(!liked);
        }}
      >
        {liked ? <FaHeart /> : <FaHeartBroken />}
      </div>
    </div>
  );
};

export default ListItem;
