// <script src="https://finanslaget.pages.dev/finanslaget-snabbkalkyl-form.js?button_url=https%3A%2F%2Fbrave.se"></script>

(function () {
  const currentScript = document.currentScript;
  const scriptUrl = new URL(currentScript.src);
  const buttonUrl = scriptUrl.searchParams.get("button_url");
  const params = new URLSearchParams();

  let iframeUrl = "https://finanslaget.pages.dev/snabbkalkyl";

  if (buttonUrl) params.append("button_url", buttonUrl);

  if (params.toString()) {
    iframeUrl += `?${params.toString()}`;
  }

  const iframe = document.createElement("iframe");
  iframe.id = "finanslaget-snabbkalkyl";
  iframe.src = iframeUrl;
  iframe.title = "Small form app to get price suggestions from Finanslaget";
  iframe.style.width = "100%";
  iframe.style.height = "0";
  iframe.style.overflow = "hidden";
  iframe.style.border = "none";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope";

  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "resize" && event.data.height) {
      const iframe = document.getElementById("finanslaget-snabbkalkyl");
      if (iframe) iframe.style.height = `${event.data.height}px`;
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      currentScript.parentNode.insertBefore(iframe, currentScript.nextSibling);
    });
  } else {
    currentScript.parentNode.insertBefore(iframe, currentScript.nextSibling);
  }
})();
