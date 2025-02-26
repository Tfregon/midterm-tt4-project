document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const productCategory = document.getElementById("productCategory");
    const productImage = document.getElementById("productImage");
    const previewImage = document.getElementById("previewImage");

    // Image Preview Handler
    productImage.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.classList.remove("d-none");
            };
            reader.readAsDataURL(file);
        } else {
            previewImage.src = "";
            previewImage.classList.add("d-none");
        }
    });

    // Form Submission
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (productName.value.trim() === "" || productPrice.value === "" || productCategory.value === "") {
            alert("Please fill in all required fields!");
            return;
        }

        const productData = {
            name: productName.value.trim(),
            price: parseFloat(productPrice.value),
            category: productCategory.value,
            image: previewImage.src || "default-image.png"
        };

        console.log("Product Added:", productData);
        alert("Product added successfully!");

        // Reset Form
        productForm.reset();
        previewImage.src = "";
        previewImage.classList.add("d-none");
    });
});
