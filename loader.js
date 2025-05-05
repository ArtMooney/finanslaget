// <script src="https://cdn.jsdelivr.net/gh/ArtMooney/finanslaget@v0.0.1/loader.js"></script>

(function () {
  const appContainer = document.createElement("div");
  appContainer.id = "custom-app-container";
  document.body.appendChild(appContainer);

  const appUrl =
    "https://cdn.jsdelivr.net/gh/ArtMooney/finanslaget@v0.0.1/dist";
  window.apiBase = "https://finanslaget.pages.dev";

  fetch(appUrl + "/index.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(html, "text/html");

      const scriptSrc = htmlDoc
        .querySelector('script[src*=".js"]')
        ?.getAttribute("src");
      const cssSrc = htmlDoc
        .querySelector('link[rel="stylesheet"]')
        ?.getAttribute("href");

      if (scriptSrc) {
        const scriptElement = document.createElement("script");
        scriptElement.type = "module";
        scriptElement.src = appUrl + scriptSrc;
        document.head.appendChild(scriptElement);
      }

      if (cssSrc) {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = appUrl + cssSrc;
        document.head.appendChild(linkElement);
      }
    })
    .catch((error) => console.error("Error loading app:", error));
})();
