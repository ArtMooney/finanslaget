import { getApiToken } from "./get-api-token.js";

// example usage
// const noOfMonths = 60;
// const result = await calculateMonthlyPayment(totalAmount, noOfMonths, totalAmount * 0.1, totalAmount * 0.1);

export async function calculateMonthlyPayment(
  totalAmount,
  noOfMonths,
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
    noOfMonths: noOfMonths,
    residualAmount: residualAmount,
    downPayment: downPayment,
    monthlyPayment: 0, // Sätts till 0 då vi vill beräkna detta värde
  });

  let response = await fetch(
    "https://emmy.workanywhere.se:443/api/Checkout/Calculate",
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
