  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const emailInput = document.getElementById("exampleFormControlInput1");
    const textareaInput = document.getElementById("exampleFormControlTextarea1");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar el email usando `test()`
    if (emailPattern.test(emailInput.value)) {
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
    } else {
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
    }

    // Validar el `textarea` usando su longitud
    if (textareaInput.value.length > 0 && textareaInput.value.length <= 400) {
      textareaInput.classList.add("is-valid");
      textareaInput.classList.remove("is-invalid");
    } else {
      textareaInput.classList.add("is-invalid");
      textareaInput.classList.remove("is-valid");
    }

    // Si ambos campos son válidos, muestra un mensaje
    if (emailPattern.test(emailInput.value) && textareaInput.value.length <= 400) {
      alert("Formulario enviado correctamente.");
    }
  });
