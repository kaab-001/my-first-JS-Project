const correctAnswer = ['B', 'C', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')


form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value];
    //lets check the response
    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index])
            score += 33.33;
    });
    //display of the result.

    scrollTo(0, 0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');




})