import keys from "./auth/GetAuthKey";

function fiFetch(scenario, sessionId) {
  var myHeaders = new Headers();
  myHeaders.append("x-jws-signature", keys.jws_sig);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("x-request-meta", keys.request_meta);
  myHeaders.append("x-scenario-id", scenario);
  myHeaders.append("Authorization", "Bearer " + keys.auth);

  var raw = JSON.stringify({
    ver: "2.0.0",
    timestamp: "2023-06-26T11:39:57.153Z",
    txnid: "3dd436f8-0747-4a8f-9001-375e419430be",
    sessionId: sessionId,
    fipId: "FIP-1",
    linkRefNumber: [
      {
        id: "XXXX-XXXX-XXXX",
      },
    ],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/proxy/v2/FI/fetch", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default fiFetch;
