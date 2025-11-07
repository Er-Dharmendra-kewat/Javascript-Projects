// const form = document.getElementById("contactForm");
// const output = document.getElementById("output");

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // stop page reload

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // basic validation
//     if (!name || !email || !message) { // this is handle if you will used required in the input tags it does the work of required
//         output.innerHTML = "<p style='color:red;'>Please fill out all fields.</p>";
//         return;
//     }
//     // show the data below the form
//     output.innerHTML = `<h3>Submitted Data:</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`;
//     form.reset(); // clear the form
// });




const form = document.getElementById("contactForm");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // basic validation (still useful)
    if (!name || !email || !message) {
        output.innerHTML = "<p style='color:red;'>Please fill out all fields.</p>";
        return;
    }

    // Clear old content before adding new
    // output.innerHTML = "";

    // Create heading
    const heading = document.createElement("h3");
    heading.textContent = "Submitted Data:";
    output.appendChild(heading);

    // Create Name paragraph
    const namePara = document.createElement("p");
    namePara.innerHTML = `<strong>Name:</strong> ${name}`;
    output.appendChild(namePara);

    // Create Email paragraph
    const emailPara = document.createElement("p");
    emailPara.innerHTML = `<strong>Email:</strong> ${email}`;
    output.appendChild(emailPara);

    // Create Message paragraph
    const messagePara = document.createElement("p");
    messagePara.innerHTML = `<strong>Message:</strong> ${message}`;
    output.appendChild(messagePara);

    form.reset(); // clear form fields
});
