import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function useAxios(endpoint, state = "", id = "") {
  console.log("kører...");
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [context, setContext] = useOutletContext();

  useEffect(() => {
    const getResponse = async () => {
      try {
        if (!context.token || Math.floor(Date.now() / 1000) > context.expire) {
          console.log("update token");
          const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            JSON.stringify({
              grant_type: "client_credentials",
              client_id: "5sO97VGlfixxh1EL6gdvsvYO0LNRYdt1cwrcWHeYYL0HYZwBpn",
            }),
            { headers: { "content-type": "application/json" } }
          );
          const data = await response.data;
          setContext({
            token: data.access_token,
            expire: data.expires_in + Math.floor(Date.now() / 1000),
          });
        } else {
          console.log("use token");
          const nextResponse = await axios.get(
            !id
              ? `https://api.petfinder.com/v2/${endpoint}`
              : `https://api.petfinder.com/v2/${endpoint}/${id}`,
            {
              headers: {
                Authorization: "Bearer " + context.token,
              },
            }
          );
          const nextData = nextResponse.data;
          setData(nextData);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
      }
    };
    getResponse();
  }, [context, state]);
  return [data, error, loading];
  // retuner et array med data, error og loadingstate
}

export default useAxios;
