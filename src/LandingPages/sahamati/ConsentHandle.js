import keys from "./auth/GetAuthKey";

function consentHandle(scenario) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("x-request-meta", keys.request_meta);
  myHeaders.append("x-jws-signature", keys.jws_sig);
  myHeaders.append("Authorization", "Bearer " + keys.auth);
  myHeaders.append("x-scenario-id", scenario);

  var raw = JSON.stringify({
    ver: "2.0.0",
    timestamp: "2023-06-26T11:39:57.153Z",
    txnid: "795038d3-86fb-4d3a-a681-2d39e8f4fc3c",
    ConsentHandle: "39e108fe-9243-11e8-b9f2-0256d88baae8",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("http://localhost:3000/proxy/v2/Consent/handle", requestOptions)
    .then((response) => response.text())
    // .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default consentHandle;
