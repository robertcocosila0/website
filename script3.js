document.addEventListener("DOMContentLoaded", function() {
    const facades = document.querySelectorAll('.video-facade');

    facades.forEach(facade => {
        const id = facade.getAttribute('data-id');
        
        facade.style.backgroundImage = `url('https://img.youtube.com/vi/${id}/hqdefault.jpg')`;

        facade.addEventListener('click', function() {
            this.innerHTML = `
                <iframe 
                    src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen>
                </iframe>`;
        });
    });
});