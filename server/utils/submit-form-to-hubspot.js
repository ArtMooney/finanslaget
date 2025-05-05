export async function submitFormToHubspot(portalId, formId, formData, context) {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  // { fields: [{name: 'email', value: 'test@example.com'}, ...] }
  const fields = Object.entries(formData).map(([name, value]) => ({
    name,
    value,
  }));

  const requestBody = {
    fields,
    context: context,
  };

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: headersList,
        body: JSON.stringify(requestBody),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HubSpot form submission failed: ${errorData.message || response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form to HubSpot:", error);
    throw error;
  }
}
