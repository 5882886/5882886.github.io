(() => {
  // <stdin>
  var highlights = document.querySelectorAll(".article-content div.highlight");
  var copyText = `\u{1F4C4}\u62F7\u8D1D`;
  var copiedText = `\u5DF2\u62F7\u8D1D!`;
  highlights.forEach((highlight) => {
    const copyButton = document.createElement("button");
    copyButton.innerHTML = copyText;
    copyButton.classList.add("copyCodeButton");
    highlight.appendChild(copyButton);
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        copyButton.textContent = copiedText;
        setTimeout(() => {
          copyButton.textContent = copyText;
        }, 1e3);
      }).catch((err) => {
        alert(err);
        console.log("Something went wrong", err);
      });
    });
  });
  new StackColorScheme(document.getElementById("dark-mode-toggle"));
})();
