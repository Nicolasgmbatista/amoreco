const products = [
    {
        id: 1,
        name: "Brinco Miçanga Colorful",
        category: "brincos",
        price: "R$ 45,00",
        image: "img/brinco1.jpg",
        description: "Brincos leves e vibrantes"
    },
    {
        id: 2,
        name: "Colar Longo Boho",
        category: "colares",
        price: "R$ 85,00",
        image: "img/colar1.jpg",
        description: "Colar longo com miçangas variadas"
    },
    {
        id: 3,
        name: "Pulseira Ajustável",
        category: "pulseiras",
        price: "R$ 35,00",
        image: "img/pulseira1.jpg",
        description: "Pulseira delicada e ajustável"
    },
    {
        id: 4,
        name: "Chapéu Decorado",
        category: "chapeus",
        price: "R$ 120,00",
        image: "img/chapeu1.jpg",
        description: "Chapéu com detalhes em miçangas"
    },
    {
        id: 5,
        name: "Brinco Argola Miçanga",
        category: "brincos",
        price: "R$ 55,00",
        image: "img/brinco2.jpg",
        description: "Argolas modernas com miçangas"
    },
    {
        id: 6,
        name: "Colar Personalizado",
        category: "colares",
        price: "R$ 95,00",
        image: "img/colar2.jpg",
        description: "Faça com suas cores favoritas"
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product-card bg-white rounded-2xl overflow-hidden border border-zinc-100`;
    card.innerHTML = `
        <div class="h-64 bg-zinc-200 relative">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
                ${product.price}
            </div>
        </div>
        <div class="p-5">
            <h3 class="font-semibold text-xl mb-1">${product.name}</h3>
            <p class="text-zinc-500 text-sm mb-5">${product.description}</p>
            
            <button onclick="contactWhatsApp('${product.name}')" 
                    class="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition">
                <i class="fab fa-whatsapp"></i>
                Quero este!
            </button>
        </div>
    `;
    return card;
}

function renderProducts(filteredProducts) {
    const container = document.getElementById('products-grid');
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

function filterCategory(category) {
    document.querySelectorAll('button[id^="btn-"]').forEach(btn => {
        btn.classList.remove('active-filter');
    });
    
    if (category === 'all') {
        document.getElementById('btn-all').classList.add('active-filter');
        renderProducts(products);
    } else {
        document.getElementById(`btn-${category}`).classList.add('active-filter');
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

function contactWhatsApp(productName) {
    const message = encodeURIComponent(`Olá! Fiquei interessada(o) no produto *${productName}* da Zamirazzo. Pode me dar mais informações?`);
    window.open(`https://wa.me/5541999999999?text=${message}`, '_blank');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    
    const logo = document.getElementById('logo');
    if (logo) {
        logo.onerror = () => {
            logo.src = 'https://via.placeholder.com/180x70/rose-600/ffffff?text=Zamirazzo';
        };
    }
});
