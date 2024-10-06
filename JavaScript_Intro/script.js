let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myTextArea").value;
    document.getElementById("myH1").textContent = `Welcome Home ${username}!`;
}