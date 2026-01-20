function filterImages(category, element) {
    const images = document.querySelectorAll(".image-card");
    const menuItems = document.querySelectorAll(".services-menu span");

    // Remove active class from all menu items
    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    // Add active class to clicked menu item
    if (element) {
        element.classList.add("active");
    }

    images.forEach(image => {
        // Show all images
        if (category === "all") {
            image.style.display = "block";
        }
        // Show only selected category
        else if (image.classList.contains(category)) {
            image.style.display = "block";
        }
        // Hide others
        else {
            image.style.display = "none";
        }
    });

    // Scroll to gallery section to show filtered images
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
        gallerySection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// GET STARTED → scroll to gallery
function goToGallery() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
}

// Set "All" as active by default when page loads
document.addEventListener("DOMContentLoaded", function() {
    const allMenuItem = document.querySelector(".services-menu span");
    if (allMenuItem) {
        allMenuItem.classList.add("active");
    }
});
