function showModal(title, description, images) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('whatsapp-link').href = `https://wa.me/+593998800124?text=Hola, estoy interesado en ${title}.`;

    const modalImagesContainer = document.getElementById('modal-images');
    modalImagesContainer.innerHTML = ''; // Clear existing images

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        modalImagesContainer.appendChild(img);
    });

    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}



