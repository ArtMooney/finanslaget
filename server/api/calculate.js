import { checkLogin } from "../utils/check-login.js";
import { calculateMultiplePeriods } from "../utils/calculate-multiple-periods.js";
import { submitFormToHubspot } from "../utils/submit-form-to-hubspot.js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const headers = getHeaders(event);
  const body = await readBody(event);

  if (!(await checkLogin(headers, config.userName, config.userPass))) {
    throw createError({
      statusCode: 401,
      statusMessage: "Login failed",
    });
  }

  const totalAmount = parseInt(body.amount);

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

  try {
    const sendForm = await submitFormToHubspot(
      config.portalId,
      config.formId,
      {
        email: body.email,
        mobilephone: body.phone,
        organisationsnr: body.companyRegistrationNumber,
        belopp: body.amount,
        leasing_36_manader: result[1]?.monthlyPayment,
        leasing_48_manader: result[2]?.monthlyPayment,
        leasing_60_manader: result[0]?.monthlyPayment,
      },
      { pageUri: body.pageUri, pageName: body.pageName },
    );
  } catch (error) {}

  return result;
});
