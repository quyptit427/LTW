document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = button.classList.contains('active');
        
        document.querySelectorAll('.accordion-header').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
            content.classList.remove('show');
        });
        
        if (!isActive) {
            button.classList.add('active');
            content.style.display = 'block';
            content.classList.add('show');
            
            const listItems = content.querySelectorAll('ul li');
            listItems.forEach((li, index) => {
                li.style.opacity = '0';
                li.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    li.style.opacity = '1';
                    li.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    });
});
function animateCounter(element, start, end, duration) {
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1);
        let currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue.toLocaleString(); // Định dạng số có dấu phẩy

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}