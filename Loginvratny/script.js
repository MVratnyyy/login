document.getElementById("login-button").addEventListener("click", function(event){
    event.preventDefault(); // Zabrání formuláři v odeslání při stisknutí tlačítka
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "user" && password === "password") {
      alert("Úspěšně jste se přihlásili.");
    } else {
      alert("Chybné uživatelské jméno nebo heslo.");
    }
  });
  