import { getApiToken } from "./get-api-token.js";

export async function calculateMultiplePeriods(
  totalAmount,
  residualAmount,
  downPayment,
) {
  const token = await getApiToken();

  let headersList = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  let bodyContent = JSON.stringify({
    totalAmount: totalAmount,
    noOfMonths: 60, // Detta värde ersätts av systemet med olika perioder
    residualAmount: residualAmount,
    downPayment: downPayment,
    monthlyPayment: 0, // Sätts till 0 då vi vill beräkna detta värde
  });

  let response = await fetch(
    "https://emmy.workanywhere.se:443/api/Checkout/CalculateMultiplePeriods",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
