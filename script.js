const form = document.getElementById("awesomeForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // You can perform any further actions here, like sending data to a server or displaying a message.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);

    // For demonstration purposes, let's show an alert
    alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nPassword: " + password);
  });

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }