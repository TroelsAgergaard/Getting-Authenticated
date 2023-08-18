import { useOutletContext } from "react-router-dom";

const SelectView = () => {
  const [context, setContext] = useOutletContext();

  return (
    <select
      onChange={(event) => {
        let location = event.target.value;
        setContext((context.location = location));
      }}
    >
      <option value="10001">NYC</option>
      <option value="B3H 1Y1">Halifax</option>
      <option value="test">Test</option>
    </select>
  );
};

export default SelectView;
