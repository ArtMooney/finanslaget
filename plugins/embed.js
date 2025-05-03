export default defineNuxtPlugin(() => {
  if (process.client && window.parent !== window) {
    const debounce = (func, delay) => {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const updateHeight = () => {
      document.body.offsetHeight;

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
    };

    const debouncedUpdateHeight = debounce(updateHeight, 100);

    setTimeout(updateHeight, 100);
    setTimeout(updateHeight, 500);
    setTimeout(updateHeight, 1000);

    window.addEventListener("resize", debouncedUpdateHeight);
    window.addEventListener("load", updateHeight);
    window.addEventListener("transitionend", updateHeight);

    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
});
