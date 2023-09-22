function viewContent() {
    const url = document.getElementById("urlInput").value.trim();
    const iframe = document.getElementById("contentFrame");

    if (url) {
        const proxyURL = `https://peekthrough-f3e7464557f6.herokuapp.com/proxy?url=${url}`;
        iframe.src = proxyURL;
        iframe.style.display = "block";
    } else {
        alert("Please enter a valid URL");
    }
}
