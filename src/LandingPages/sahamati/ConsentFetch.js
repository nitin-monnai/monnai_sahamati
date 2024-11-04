const { default: keys } = require("./auth/GetAuthKey");

function consentFetch(scenario) {
  var myHeaders = new Headers();
  myHeaders.append("x-jws-signature", keys.jws_sig);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("x-request-meta", keys.request_meta);
  myHeaders.append("fip_api_key", keys.auth);
  myHeaders.append("x-scenario-id", scenario);

  var raw = JSON.stringify({
    ver: "2.0.0",
    timestamp: "2023-06-26T11:39:57.153Z",
    txnid: "0b811819-9044-4856-b0ee-8c88035f8858",
    consentId: "70d23e97-0dd8-4b59-b842-566f5b3b15de",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/proxy/v2/Consent/fetch", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
export default consentFetch;
