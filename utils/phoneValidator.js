export function phoneValidator(form) {
  const phoneReg = /^((\+46)|0)[ -]?([1-9][0-9]{1,2})[ -]?([0-9]{5,8})$/;

  let phoneVerificationError = false;
  const inputs = form.querySelectorAll("input");

  for (const input of inputs) {
    if (input.type === "tel") {
      const cleanedValue = input.value.replace(/\s+/g, "");

      if (phoneReg.test(cleanedValue)) {
        phoneVerificationError = true;
        break;
      } else if (cleanedValue) {
        input.focus();
        return false;
      }
    }
  }

  return phoneVerificationError;
}
