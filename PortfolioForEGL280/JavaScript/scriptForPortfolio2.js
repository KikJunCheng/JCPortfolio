document.addEventListener("DOMContentLoaded", function () { //ensures script only run after HTML is fully loaded
    const dots = document.querySelectorAll(".timeline-dot");//This selects all elements with the class .timeline-dot and stores them in a NodeList

    dots.forEach(dot =>  { //runs for every .timeline-dot
        const timelineItem = dot.closest(".timeline-item"); //finds the closest ancestor(parent or grandparent) of .timeline-dot
        const img = timelineItem.querySelector("img");

        dot.addEventListener("mouseenter", function () {
            img.classList.add("show"); // Apply CSS class for smooth transition
        });

        dot.addEventListener("mouseleave", function () {
            img.classList.remove("show"); // Remove class to hide smoothly
        });                                                                                                                     
    });
});
