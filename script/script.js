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

        const renderAnswers = () => {
            for (i = 0; i < 2; i++) {
                const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
                answerItem.innerHTML = `
              <input type="radio" id="answerItem1" name="answer" class="d-none">
              <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${questions.answers[i].url}" alt="burger">
                  <span>${questions.answers[i].title}</span>
              </label>
        `;
                formAnswers.appendChild(answerItem);
            }
        }

        const renderQuestions = () => {
            questionTitle.textContent = `${questions.question}`;
            renderAnswers();
        }
        renderQuestions();
    }
})