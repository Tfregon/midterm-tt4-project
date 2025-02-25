document.addEventListener("DOMContentLoaded", async () => {
    const productList = document.getElementById("product-list");

    const products = [
        { title: "Produto 1", image: "assets/images/prod1.jpg", description: "Descrição curta", price: "$10" },
        { title: "Produto 2", image: "assets/images/prod2.jpg", description: "Descrição curta", price: "$20" },
        { title: "Produto 3", image: "assets/images/prod3.jpg", description: "Descrição curta", price: "$30" },
        { title: "Produto 4", image: "assets/images/prod4.jpg", description: "Descrição curta", price: "$40" },
        { title: "Produto 5", image: "assets/images/prod5.jpg", description: "Descrição curta", price: "$50" },
        { title: "Produto 6", image: "assets/images/prod6.jpg", description: "Descrição curta", price: "$60" },
        { title: "Produto 7", image: "assets/images/prod7.jpg", description: "Descrição curta", price: "$70" },
        { title: "Produto 8", image: "assets/images/prod8.jpg", description: "Descrição curta", price: "$80" },
        { title: "Produto 9", image: "assets/images/prod9.jpg", description: "Descrição curta", price: "$90" },
        { title: "Produto 10", image: "assets/images/prod10.jpg", description: "Descrição curta", price: "$100" },
        { title: "Produto 11", image: "assets/images/prod11.jpg", description: "Descrição curta", price: "$110" },
        { title: "Produto 12", image: "assets/images/prod12.jpg", description: "Descrição curta", price: "$120" },
    ];

    products.forEach(product => {
        const card = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += card;
    });
});
