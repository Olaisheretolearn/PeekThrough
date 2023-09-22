function viewContent() {
    const url = document.getElementById("urlInput").value.trim();
    const iframe = document.getElementById("contentFrame");

    if (url) {
        const proxyURL = `http://localhost:3000/proxy?url=${url}`;
        iframe.src = proxyURL;
        iframe.style.display = "block";
    } else {
        alert("Please enter a valid URL");
    }
}
