let selectedService = "";

function scrollToServices() {
    document.getElementById("services").scrollIntoView();
}

function openForm(service) {
    selectedService = service;
    document.getElementById("popup").style.display = "block";
    document.getElementById("title").innerText = service + " Form";
}

function closeForm() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("serviceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let aadhaar = document.getElementById("aadhaar").value;
    let pan = document.getElementById("pan").value;
    let dob = document.getElementById("dob").value;
    let father = document.getElementById("father").value;
    let mother = document.getElementById("mother").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    let message = `Service: ${selectedService}%0A
Name: ${name}%0A
Aadhaar: ${aadhaar}%0A
PAN: ${pan}%0A
DOB: ${dob}%0A
Father: ${father}%0A
Mother: ${mother}%0A
Mobile: ${mobile}%0A
Address: ${address}`;

    let phone = "9149383541";

    let url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
});