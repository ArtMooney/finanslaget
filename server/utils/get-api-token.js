export async function getApiToken() {
  let headersList = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  let bodyContent = JSON.stringify({
    APIKey: "{2DB960DC-73A1-41E7-84DB-45493A71C666}",
    vendorNo: "SNABBKALKYL",
    vendorToken: "{c052c083-aa6a-4d0c-a505-29a950192a28}",
    SiteID: "test",
  });

  let response = await fetch("https://emmy.workanywhere.se:443/api/login", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.token;
}
