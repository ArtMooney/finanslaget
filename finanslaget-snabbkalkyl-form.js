(function () {
  const iframe = document.createElement("iframe");
  iframe.id = "finanslaget-iframe";
  iframe.src = "https://finanslaget.pages.dev";
  iframe.title = "Small form app to get price suggestions from Finanslaget";
  iframe.style.width = "100%";
  iframe.style.height = "0";
  iframe.style.overflow = "hidden";
  iframe.style.border = "none";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope";

  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "resize" && event.data.height) {
      iframe.style.height = `${event.data.height}px`;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.currentScript.insertAdjacentElement("afterend", iframe);
  });
})();
