document.addEventListener('DOMContentLoaded', function() {

    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');

    const questions = {
        question: 'Какого цвета бургер вы хотите?',
        answers: [{
                title: "Стандарт",
                url: './image/burger.png'
            },
            {
                title: "Черный",
                url: './image/burgerBlack.png'
            }
        ]
    }

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
            questionTitle.textContent = `${questions.question}`;
            formAnswers.innerHTML = `
              <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${questions.answers[0].url}" alt="burger">
                  <span>${questions.answers[0].title}</span>
                </label>
              </div>
            `;
        }
        renderQuestions();

    }
})