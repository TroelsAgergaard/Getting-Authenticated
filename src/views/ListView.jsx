import { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import useAxios from "../useAxios";

const ListView = (props) => {
  const [type, setType] = useState("Cat");
  const [animalData, animalError, animalLoading] = useAxios(
    `animals?type=${type}`,
    type
  );
  const [typeData, typeError, typeLoading] = useAxios("types");
  return (
    <>
      {typeError && <p>Der opstod en fejl...</p>}
      {typeLoading && <p>loading types...</p>}
      {typeData &&
        typeData.types.map(
          (type) =>
            !/\s/.test(type.name) && (
              <button
                onClick={() => {
                  setType(type.name);
                }}
                key={type.name}
              >
                {type.name}
              </button>
            )
        )}

      {animalError && <p>Der opstod en fejl...</p>}
      {animalLoading && <p>loading animals...</p>}
      {animalData && (
        <ul style={{ listStyleType: "none" }}>
          {animalData.animals.map((animal) => (
            <ListItem key={animal.id} name={animal.type} />
          ))}
        </ul>
      )}
      <Link to="/detailsview">Link</Link>
      <Link to="/selectview">Select</Link>
    </>
  );
};

export default ListView;
