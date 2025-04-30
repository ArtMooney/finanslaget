import { checkLogin } from "../utils/check-login.js";
import { calculateMonthlyPayment } from "../utils/calculate-monthly-payment.js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const headers = getHeaders(event);

  // if (!(await checkLogin(headers, config.userName, config.userPass))) {
  //   throw createError({
  //     statusCode: 401,
  //     statusMessage: "Login failed",
  //   });
  // }

  // Exempel på användning:
  // const result = await calculateMonthlyPayment(10000, 60, 1000, 1000);
  // console.log(result.monthlyPayment);
  //
  // const multipleResults = await calculateMultiplePeriods(10000, 1000, 1000);
  // console.log(multipleResults.map(r => r.monthlyPayment));

  const result = await calculateMonthlyPayment(10000, 60, 1000, 1000);

  return { result };
  return { status: "ok" };
});
