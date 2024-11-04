const { default: keys } = require("./auth/GetAuthKey");

function fiRequest(scenario) {
  var myHeaders = new Headers();
  myHeaders.append("x-jws-signature", "laborum magna laboris veniam");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("x-request-meta", keys.request_meta);
  myHeaders.append("x-scenario-id", "scenario_1");
  myHeaders.append("Authorization", "Bearer " + keys.auth);

  var raw = JSON.stringify({
    ver: "2.0.0",
    timestamp: "2023-06-26T11:39:57.153Z",
    txnid: "e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb",
    FIDataRange: {
      from: "2023-07-06T11:39:57.153Z",
      to: "2019-12-06T11:39:57.153Z",
    },
    Consent: {
      id: "654024c8-29c8-11e8-8868-0289437bf331",
      digitalSignature:
        "NdjwMjLortTb10dxcJezkvdOxPVvEdZvIqwqVWOHnE8pS_YDswcRPLTRmds2xO-Tvm_A2cFv1qKYpaZnv8Bl6xmZoOsG_F8_40gRZqIhz5hF9puzp8lEEhMlZ6NaX2Y2OYkwHcOBBpCIXpLXB4CMWiefUEWjO9zKDd5JJwZ4vLWeT4qgwvPfRqE60B33tzVlF5E6OA2mKK17sGRXsfrI9obEjL52RMdGo_9bv1HnHfvPlbj5ihj6d_5iTtoh7HUC_X8CrJGvkgkCjP_7of1jPb5QgJ9nx_Yfsxj3vf8zEseZIVISjF3MwBzW7Di4CpfQl4wlnpkQO9MKu78F69Z9Ig",
    },
    KeyMaterial: {
      cryptoAlg: "ECDH",
      Nonce: "29512b70-ca84-46b5-9471-63765599cf15",
      curve: "Curve25519",
      DHPublicKey: {
        expiry: "2023-07-06T11:39:57.153Z",
        KeyValue: "aliquip Excepteur",
        Parameters: "consequat ullamco",
      },
      params: "cipher=AES/GCM/NoPadding;KeyPairGenerator=ECDH",
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/proxy/v2/FI/request", requestOptions)
    .then((response) => response.text())
    // .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default fiRequest;
