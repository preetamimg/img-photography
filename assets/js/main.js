document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".    ");
    const body = document.body;

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            body.classList.add("body_hovered");
        });

        button.addEventListener("mouseout", () => {
            body.classList.remove("body_hovered");
        });
    });
});