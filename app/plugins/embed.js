export default defineNuxtPlugin(() => {
  if (process.client && window.parent !== window) {
    const updateHeight = () => {
      window.parent.postMessage(
        {
          height: document.body.scrollHeight,
          source: "finanslaget-app",
        },
        "*",
      );
    };

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
