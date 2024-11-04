import keys from "./auth/GetAuthKey";

function createConsent(scenario, phoneNumber) {
  var myHeaders = new Headers();
  myHeaders.append("x-jws-signature", keys.jws_sig);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("x-request-meta", keys.request_meta);
  myHeaders.append("client_api_key", keys.auth);
  myHeaders.append("x-scenario-id", scenario);

  var raw = JSON.stringify({
    ver: "2.0.0",
    timestamp: "2024-05-09T15:23:55.384Z",
    txnid: "644d2aff-e43b-4bb9-9047-498cbb9896d1",
    ConsentDetail: {
      consentStart: "2024-05-09T15:23:55.384Z",
      consentExpiry: "2025-01-01T00:00:00.000Z",
      consentMode: "STORE",
      fetchType: "PERIODIC",
      consentTypes: ["PROFILE", "TRANSACTIONS", "SUMMARY"],
      fiTypes: ["DEPOSIT", "PROFESSION_APP_TRASACTIONS", "DIGILOCKER"],
      DataConsumer: {
        id: "central-trust-uat",
        type: "FIU",
      },
      Customer: {
        Identifiers: [
          {
            type: "MOBILE",
            value: phoneNumber,
          },
        ],
      },
      Purpose: {
        code: "101",
        refUri: "https://api.rebit.org.in/aa/purpose/101.xml",
        text: "To provide your asset insights",
        Category: {
          type: "Personal Finance",
        },
      },
      FIDataRange: {
        from: "2023-01-01T00:00:00.000Z",
        to: "2025-01-01T00:00:00.000Z",
      },
      DataLife: {
        unit: "YEAR",
        value: 3,
      },
      Frequency: {
        unit: "DAY",
        value: 10,
      },
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("http://localhost:3000//proxy/v2/Consent", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default createConsent;
