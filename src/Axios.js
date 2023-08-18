import axios from "axios";
axios
  .post(
    "https://api.petfinder.com/v2/oauth2/token",
    JSON.stringify({
      grant_type: "client_credentials",
      client_id: "5sO97VGlfixxh1EL6gdvsvYO0LNRYdt1cwrcWHeYYL0HYZwBpn",
    }),
    { headers: { "content-type": "application/json"} }
  )
  .then((res) => console.log(res.data));
