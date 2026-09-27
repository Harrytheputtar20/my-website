// ========================================
// RANTHAMBORE SAFARIS - WEBSITE SCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------
    // SMOOTH SCROLLING
    // ----------------------------------------

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ----------------------------------------
    // BOOKING FORM
    // ----------------------------------------

    const bookingForm = document.querySelector(".booking-form");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameInput = bookingForm.querySelector('input[name="name"]');
            const phoneInput = bookingForm.querySelector('input[name="phone"]');
            const emailInput = bookingForm.querySelector('input[name="email"]');
            const dateInput = bookingForm.querySelector('input[type="date"]');
            const guestsInput = bookingForm.querySelector('input[name="guests"]');
            const safariTypeInput = bookingForm.querySelector('select[name="safariType"]');
            const safariShiftInput = bookingForm.querySelector('select[name="safariShift"]');
            const zoneInput = bookingForm.querySelector('select[name="zone"]');
            const serviceInput = bookingForm.querySelector("select");

            const name = nameInput ? nameInput.value.trim() : "";
            const phone = phoneInput ? phoneInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const date = dateInput ? dateInput.value : "";
            const guests = guestsInput ? guestsInput.value : "";
            const service = serviceInput ? serviceInput.value : "";
            const safariType = safariTypeInput ? safariTypeInput.value : "";

            const safariShift = safariShiftInput ? safariShiftInput.value : "";

            const zone = zoneInput ? zoneInput.value : "";

            if (!name || !phone) {
                alert("Please enter your name and mobile number.");
                return;
            }

            // ----------------------------------------
            // WHATSAPP MESSAGE
            // ----------------------------------------

            const whatsappNumber = "916375526955";

            const message =

    "Hello Ranthambore Safaris,%0A%0A" +

    "I want to make a safari booking enquiry.%0A%0A" +

    "Name: " + encodeURIComponent(name) + "%0A" +

    "Mobile: " + encodeURIComponent(phone) + "%0A" +

    "Email: " + encodeURIComponent(email) + "%0A" +

    "Date: " + encodeURIComponent(date) + "%0A" +

    "Guests: " + encodeURIComponent(guests) + "%0A" +

    "Safari Type: " + encodeURIComponent(safariType) + "%0A" +

    "Safari Shift: " + encodeURIComponent(safariShift) + "%0A" +

    "Zone Preference: " + encodeURIComponent(zone) + "%0A%0A" +

    "Please share the available options and price.";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                message;

            window.open(whatsappURL, "_blank");


            // ----------------------------------------
            // SUCCESS MESSAGE
            // ----------------------------------------

            alert(
                "Thank you, " +
                name +
                "! Your booking enquiry is ready for WhatsApp."
            );

        });
    }


    // ----------------------------------------
    // CURRENT YEAR IN FOOTER
    // ----------------------------------------

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // ----------------------------------------
    // DATE FIELD - PREVENT PAST DATES
    // ----------------------------------------

    const dateField = document.querySelector('input[type="date"]');

    if (dateField) {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(today.getMonth() + 1).padStart(2, "0");

        const day = String(today.getDate()).padStart(2, "0");

        const todayString = year + "-" + month + "-" + day;

        dateField.min = todayString;
    }


    // ----------------------------------------
    // SIMPLE SCROLL EFFECT
    // ----------------------------------------

    window.addEventListener("scroll", function () {

        const header = document.querySelector(".header");

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

});