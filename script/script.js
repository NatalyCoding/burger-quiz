document.addEventListener('DOMContentLoaded', function() {

    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const modalWrap = document.querySelector('.modal');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const answersTitle = 'Стандарт';
    const answersUrl = './image/burger.png';

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    })

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    })

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.modal-dialog') &&
            !event.target.closest('.openModalButton')
        ) {
            modalBlock.classList.remove('d-block');
        }
    })

    const playTest = () => {

        const renderQuestions = () => {
            questionTitle.textContent = 'Какого цвета бургер вы хотите?';
            formAnswers.innerHTML = `
              <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answersUrl}" alt="burger">
                  <span>${answersTitle}</span>
                </label>
              </div>
            `;
        }
        renderQuestions();

    }
})