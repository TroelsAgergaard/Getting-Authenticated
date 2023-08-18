import axios from "axios";
import { useEffect } from "react";
export function useFetch(context, setAuth, endpoint) {
  let fetchData = {};
  console.log("Token: " + context.token);
  !context.token &&
    useEffect(() => {
      console.log("update");
      axios
        .post(
          "https://api.petfinder.com/v2/oauth2/token",
          JSON.stringify({
            grant_type: "client_credentials",
            client_id: "5sO97VGlfixxh1EL6gdvsvYO0LNRYdt1cwrcWHeYYL0HYZwBpn",
          }),
          { headers: { "content-type": "application/json" } }
        )
        .then((data) =>
          setAuth({
            token: data.data.access_token,
            expire: Math.floor(Date.now() / 1000 + data.data.expires_in),
          })
        );
    }, []);
  context.token &&
    useEffect(() => {
      console.log("use");
      axios
        .get(endpoint, {
          headers: {
            Authorization: "Bearer " + context.token,
          },
        })
        .then((data) => (fetchData = data));
    });
  return fetchData;
}
