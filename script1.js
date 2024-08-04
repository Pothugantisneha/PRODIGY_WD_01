// Change navbar color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'FF69B4';
        navbar.style.color='black';
    } else {
        navbar.style.backgroundColor = 'FF69B4';
    }
});
const items = {
    footwear: [
        { image: 'https://images.pexels.com/photos/1801279/pexels-photo-1801279.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Heels', rating: '★★★★☆', price: 'Rs 5000' },
        { image: 'https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Heels', rating: '★★★★★', price: 'Rs 700' },
        { image: 'https://images.pexels.com/photos/3194609/pexels-photo-3194609.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Sneakers', rating: '★★★★☆', price: 'Rs 500' },
        { image: 'https://images.pexels.com/photos/24702077/pexels-photo-24702077/free-photo-of-white-summer-sneakers-leaning-against-black-marble-wall.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Sneakers', rating: '★★★★★', price: 'Rs 700' }
    ],
    makeup: [
        { image: 'https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Lipstick', rating: '★★★★☆', price: 'Rs 450' },
        { image: 'https://images.pexels.com/photos/8981524/pexels-photo-8981524.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Foundation', rating: '★★★★★', price: 'Rs 300' },
        {image: 'https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Powder', rating: '★★★★☆', price: 'Rs 250' },
        { image: 'https://images.pexels.com/photos/1339340/pexels-photo-1339340.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Eyeshadow', rating: '★★★★★', price: 'Rs 300' }
    ],
    accessories: [
        { image: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Earrings', rating: '★★★★☆', price: 'Rs 450' },
        { image: 'https://images.pexels.com/photos/1648741/pexels-photo-1648741.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Earrings', rating: '★★★★★', price: 'Rs 300' },
        {image: 'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Bracelet', rating: '★★★★☆', price: 'Rs 250' },
        { image: 'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Bangles', rating: '★★★★★', price: 'Rs 300' }
    ],
    clothes: [
        { image: 'https://images.pexels.com/photos/6479577/pexels-photo-6479577.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Dress', rating: '★★★★☆', price: 'Rs 6000' },
        { image: 'https://images.pexels.com/photos/4374417/pexels-photo-4374417.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Dress', rating: '★★★★★', price: 'Rs 8000' }
    ],
    bags: [
        { image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Handbag', rating: '★★★★☆', price: 'Rs 800' },
        { image: 'https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Handbag', rating: '★★★★★', price: 'Rs 7000' }
    ],
    skincare: [
        { image: 'https://images.pexels.com/photos/7797119/pexels-photo-7797119.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Moisturizer', rating: '★★★★☆', price: 'Rs 500' },
        { image: 'https://images.pexels.com/photos/17656719/pexels-photo-17656719/free-photo-of-beauty-products-on-a-blue-background.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Sunscreen', rating: '★★★★★', price: 'Rs 350' }
    ]
};

function showItems(category) {
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    if (category === 'all') {
        for (const cat in items) {
            items[cat].forEach(item => createCard(item, container));
        }
    } else {
        items[category].forEach(item => createCard(item, container));
    }
}

function createCard(item, container) {
    const card = document.createElement('div');
    card.className = 'item-card';

    const img = document.createElement('img');
    img.src = item.image;
    card.appendChild(img);

    const details = document.createElement('div');
    details.className = 'item-details';

    const name = document.createElement('h3');
    name.textContent = item.name;
    details.appendChild(name);

    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = item.rating;
    details.appendChild(rating);

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = item.price;
    details.appendChild(price);

    card.appendChild(details);
    container.appendChild(card);
}

// Initial display of all items
document.addEventListener('DOMContentLoaded', function() {
    showItems('all');
});
const navLinks = document.querySelectorAll('#nav-links a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = 'black'; // Change to desired hover color
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = 'white'; // Reset to original color
    });
});