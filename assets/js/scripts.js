document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    } else {
        console.error("Element with id 'year' not found");
    }
});