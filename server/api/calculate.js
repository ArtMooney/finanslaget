import { checkLogin } from "../utils/check-login.js";
import { calculateMonthlyPayment } from "../utils/calculate-monthly-payment.js";
import { calculateMultiplePeriods } from "../utils/calculate-multiple-periods.js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const headers = getHeaders(event);

  // if (!(await checkLogin(headers, config.userName, config.userPass))) {
  //   throw createError({
  //     statusCode: 401,
  //     statusMessage: "Login failed",
  //   });
  // }

  const totalAmount = 10000;

  // const noOfMonths = 60;
  // const result = await calculateMonthlyPayment(totalAmount, noOfMonths, totalAmount * 0.1, totalAmount * 0.1);

  const result = await calculateMultiplePeriods(
    totalAmount,
    totalAmount * 0.1,
    totalAmount * 0.1,
  );

  if (result) {
    for (const res of result) {
      res.monthlyPayment = Math.round(res.monthlyPayment);
    }
  }

  return { result };
});
