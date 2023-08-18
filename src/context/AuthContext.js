import { createContext } from "react";
const authContext = createContext({
  token: undefined,
  expire: undefined,
});
export default authContext; 
