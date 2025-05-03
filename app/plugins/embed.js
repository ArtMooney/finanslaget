export default defineNuxtPlugin(() => {
  if (process.client && window.parent !== window) {
    setTimeout(() => {
      console.log("Skickar testmeddelande från iframe");
      window.parent.postMessage(
        {
          type: "resize",
          height: document.body.scrollHeight,
          source: "finanslaget-app",
        },
        "*",
      );
    }, 1000);

    window.addEventListener("resize", updateHeight);
    setTimeout(updateHeight, 500);

    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
});
