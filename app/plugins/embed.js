export default defineNuxtPlugin(() => {
  if (process.client && window.parent !== window) {
    const updateHeight = () => {
      window.parent.postMessage(
        {
          type: "resize",
          height: document.body.scrollHeight,
          source: "finanslaget-app",
        },
        "*",
      );
    };

    setTimeout(() => {
      console.log("Skickar testmeddelande från iframe");
      updateHeight();
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
