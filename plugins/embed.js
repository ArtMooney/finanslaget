export default defineNuxtPlugin(() => {
  if (process.client && window.parent !== window) {
    const updateHeight = () => {
      setTimeout(() => {
        const height = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
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
      }, 50);
    };

    setTimeout(updateHeight, 100);
    setTimeout(updateHeight, 500);
    setTimeout(updateHeight, 1000);

    window.addEventListener("resize", () => {
      window.parent.postMessage(
        {
          type: "reset-height",
          source: "finanslaget-app",
        },
        "*",
      );

      updateHeight();
    });

    window.addEventListener("load", updateHeight);

    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
});
