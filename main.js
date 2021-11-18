const form = document.getElementById("form"),
  usuario = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usuarioValue = usuario.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usuarioValue === "") {
    setErrorFor(usuario, "No puede dejar el usuario en blanco.");
  } else {
    setSuccesFor(usuario);
  }

  if (emailValue === "") {
    setErrorFor(email, "No puede dejar un email en blanco.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "No ingreso un email valido.");
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "No puede dejar el password en blanco.");
  } else {
    setSuccesFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "No puede dejar el password en blanco.");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords no coinciden.");
  } else {
    setSuccesFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control succes";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
