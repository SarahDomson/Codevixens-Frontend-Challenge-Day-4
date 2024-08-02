document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.card-container');

    let draggedCard = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            draggedCard = card;
            setTimeout(() => card.classList.add('invisible'), 0);
        });

        card.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedCard.classList.remove('invisible');
                draggedCard = null;
            }, 0);
        });

        card.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        card.addEventListener('dragenter', (e) => {
            e.preventDefault();
            card.classList.add('drag-over');
        });

        card.addEventListener('dragleave', () => {
            card.classList.remove('drag-over');
        });

        card.addEventListener('drop', (e) => {
            e.preventDefault();
            card.classList.remove('drag-over');
            if (draggedCard !== card) {
                let allCards = [...container.querySelectorAll('.card')];
                let draggedIndex = allCards.indexOf(draggedCard);
                let droppedIndex = allCards.indexOf(card);
                if (draggedIndex < droppedIndex) {
                    container.insertBefore(draggedCard, card.nextSibling);
                } else {
                    container.insertBefore(draggedCard, card);
                }
            }
        });
    });
});
