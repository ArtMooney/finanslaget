export default defineNuxtPlugin(() => {
  if (process.client && window.parent !== window) {
    const updateHeight = () => {
      const height = Math.max(
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
      );

      window.parent.postMessage(
        {
          type: "resize",
          height: height,
          source: "finanslaget-app",
        },
        "*",
      );
    };

    setTimeout(updateHeight, 100);
    setTimeout(updateHeight, 500);
    setTimeout(updateHeight, 1000);
    setTimeout(updateHeight, 2000);

    window.addEventListener("resize", updateHeight);
    window.addEventListener("load", updateHeight);

    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
});
