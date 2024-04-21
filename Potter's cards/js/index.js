let passwordError = document.getElementById("password_error_inscription");

btnConnexion = document.getElementById("btn_connexion");
btnInscription = document.getElementById("btn_inscription");
connexionForm = document.getElementById("connexion_form");
inscriptionForm = document.getElementById("inscription_form");

connexionReturn = document.getElementById("connexion_return");
inscriptionReturn = document.getElementById("inscription_return");

connectedDiv = document.getElementById("connected_div");

// BUTTONS CONNEXION / INSCRIPTION

btnConnexion.addEventListener("click", () => {
  btnConnexion.style.display = "none";
  btnInscription.style.display = "none";

  connexionForm.style.display = "initial";
});

btnInscription.addEventListener("click", () => {
  btnConnexion.style.display = "none";
  btnInscription.style.display = "none";

  inscriptionForm.style.display = "initial";
});

connexionReturn.addEventListener("click", () => {
  btnConnexion.style.display = "block";
  btnInscription.style.display = "block";
  connexionForm.style.display = "none";
});
inscriptionReturn.addEventListener("click", () => {
  btnConnexion.style.display = "block";
  btnInscription.style.display = "block";
  inscriptionForm.style.display = "none";

  passwordError.textContent = "";
});

// CONNEXION / INSCRIPTION

/*
function validatePassword() {
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

  if (
    passwordRegex.test(document.getElementById("password_inscription").value)
  ) {
    formCorrectInscr += 1;
  } else {
    passwordError.textContent =
      "Adresse mail ou mot de passe incorrect, il doit contenir entre 8 et 20 caractères, comporter au minimum une majuscule, une minuscule, un chiffre ainsi qu'un caractère spécial.";
  }
}

document.getElementById("inscription_submit").addEventListener("click", () => {
  formCorrectInscr = 0;
  validatePassword();

  if (
    document.getElementById("email_inscription").value != "" &&
    document.getElementById("email_inscription").value.includes("@") &&
    document.getElementById("email_inscription").value.length >= 3
  ) {
    formCorrectInscr++;
  }
  if (document.getElementById("pseudo_inscription").value != "") {
    formCorrectInscr++;
  }

  if (formCorrectInscr == 3) {
    localStorage.setItem(
      "email",
      document.getElementById("email_inscription").value
    );
    localStorage.setItem(
      "pseudo",
      document.getElementById("pseudo_inscription").value
    );
    localStorage.setItem(
      "password",
      document.getElementById("password_inscription").value
    );

    localStorage.setItem("status_connected", false);

    btnConnexion.style.display = "block";
    btnInscription.style.display = "block";
    inscriptionForm.style.display = "none";

    document.getElementById("email_inscription").value = "";
    document.getElementById("pseudo_inscription").value = "";
    document.getElementById("password_inscription").value = "";
  }
});

document.getElementById("connexion_submit").addEventListener("click", () => {
  formCorrectConn = 0;

  if (
    document.getElementById("email_connexion").value ==
      localStorage.getItem("email") ||
    document.getElementById("email_connexion").value ==
      localStorage.getItem("pseudo")
  ) {
    formCorrectConn++;
  }
  if (
    document.getElementById("password_connexion").value ==
    localStorage.getItem("password")
  ) {
    formCorrectConn++;
  }

  if (formCorrectConn == 2) {
    btnConnexion.style.display = "none";
    btnInscription.style.display = "none";
    connexionForm.style.display = "none";

    connectedDiv.style.display = "initial";

    localStorage.setItem("status_connected", true);

    document.getElementById("username_span_index").textContent =
      localStorage.pseudo;

    document.getElementById("email_connexion").value = "";
    document.getElementById("password_connexion").value = "";
  }
});

document.getElementById("connected_div_disconnect").addEventListener("click", () => {
    localStorage.setItem("status_connected", false);

    connectedDiv.style.display = "none";
    btnConnexion.style.display = "block";
    btnInscription.style.display = "block";
  });
*/

// Code connexion:

const formulaire = document.getElementById("connexion_form");

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email_connexion").value;
  const password = document.getElementById("password_connexion").value;

  if (!email || !password) {
    alert("Veuillez compléter votre email & mdp");
    return;
  }

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  const token = data.token;

  localStorage.setItem("token", token);

  window.location.href = "collection.html";
});
