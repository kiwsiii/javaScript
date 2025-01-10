const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);

    // Модальное окно
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');
    const closeModalButton = document.querySelector('#closeModal');

    function openModal() {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
     function closeModal() {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    closeModalButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Вызов модального окна через 10 секунд
    setTimeout(openModal, 10000);

    // Вызов модального окна при прокрутке до конца страницы
    let scrolledToEnd = false;

    function checkScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (!scrolledToEnd) {
                openModal();
                scrolledToEnd = true;
                window.removeEventListener('scroll', checkScroll);
            }
        }
    }

    window.addEventListener('scroll', checkScroll);


