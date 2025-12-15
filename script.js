let question = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')
let cir1 = document.querySelector('.cir1')
let cir2 = document.querySelector('.cir2')
let cir3 = document.querySelector('.cir3')
let cir4 = document.querySelector('.cir4')

let informatic_btn = document.querySelector('.informatic-btn')
let math_btn = document.querySelector('.math-btn')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')

let quiz = document.querySelector('.quiz')
let restart_btn = document.querySelector('.button-restart')
let button_start = document.querySelector('.button-start')

let questions = []
let query_counter = 0
let correct_answers = 0


function randint(min, max){
    return Math.round(Math.random() * (max - min) + min)
}


class Question {
    constructor(question, right_answer, ...wrong_answers){
        this.question = question
        this.right_answer = right_answer
        this.answers = [right_answer, ...wrong_answers]
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }

    display(){
        this.shuffle(this.answers)
        question.innerHTML = this.question

        for (let i = 0; i < answers.length; i++){
            answers[i].innerHTML = this.answers[i]
        }
    }
}



let a = randint(5, 40)
let b = randint(5, 40)

let informaticquestions = [
    new Question("Хто створив ОС Windows?", "Microsoft", "Apple", "Google", "IBM", "Intel"),
    new Question("Хто створив Microsoft?", "Білл Гейтс", "Стів Джобс", "Марк Цукерберг", "Ларрі Пейдж", "Сергій Брін"),
    new Question("Що таке PowerPoint?", "Це програма щоб робити презентації", "Це програма щоб писати", "Це програма щоб створювати таблицю", "Це програма щоб редагувати фотографії", "Це програма щоб малювати"),
    new Question("print(8 + 8)", 16, 88, 18, 14, 12)
]

let mathquestions = [
    new Question("20 + 50", 70, 30, 17, 48, 100),
    new Question("√144", 12, 7, 17, 30, 13),
    new Question("a² + b² = c²", "Теорема Піфагора", "Теорема Вієта", "Теорема Фалеса", "Теорема Талеса", "Теорема Коші"),
    new Question("(x² - y²) = ?", "(x - y)(x + y)", "(x - y)²", "(x + y)²", "x² - 2xy + y²", "x² + 2xy + y²"),
    new Question("√36 * √49", 42, 36, 63, 29, 14),
    new Question(`${a} + ${b}`, a + b, a + b - 3, a + b + 5, a + b - 7, a + b + 2)
]


informatic_btn.onclick = () => { questions = informaticquestions; startQuiz() }
math_btn.onclick = () => { questions = mathquestions; startQuiz() }



function startQuiz(){
    informatic_btn.style.display = 'none'
    math_btn.style.display = 'none'
    h1.style.display = 'none'
    h2.style.display = 'none'
    cir1.style.backgroundColor = '#0077FF'
    cir2.style.backgroundColor = '#0077FF'
    cir3.style.backgroundColor = '#0077FF'
    cir4.style.backgroundColor = '#0077FF'

    quiz.style.display = 'flex'
    query_counter = 0
    correct_answers = 0

    questions[query_counter].display()
}

answers.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.innerHTML == questions[query_counter].right_answer) {
            correct_answers++
        }

        query_counter++

        if (query_counter < questions.length){
            questions[query_counter].display()
        } else {
            showResult()
        }
    })
})

function showResult(){
    cir1.style.display = 'none'
    cir2.style.display = 'none'
    cir3.style.display = 'none'
    cir4.style.display = 'none'
    quiz.innerHTML = `
        <h1>Квіз завершено!</h1>
        <h2>Правильних відповідей: ${correct_answers} з ${questions.length}</h2>
    `
    restart_btn.style.display = 'block'
}


restart_btn.addEventListener('click', function() {
    restart_btn.style.display = 'none'
    quiz.style.display = 'none'
    h1.style.display = 'block'
    h2.style.display = 'block'
    cir1.style.display = 'flex'
    cir1.style.backgroundColor = '#09ff00'
    cir2.style.display = 'flex'
    cir2.style.backgroundColor = '#09ff00'
    cir3.style.display = 'flex'
    cir3.style.backgroundColor = '#09ff00'
    cir4.style.display = 'flex'
    cir4.style.backgroundColor = '#09ff00'

    informatic_btn.style.display = 'flex'
    math_btn.style.display = 'flex'

    quiz.innerHTML = `<div class="question"></div>
        <div class="answers">
        <button class="answer"></button>
        <button class="answer"></button>
        <button class="answer"></button>
        <button class="answer"></button>
        <button class="answer"></button>
        </div>`
        question = document.querySelector('.question')
        answers = document.querySelectorAll('.answer')

        for (let btn of answers){
            btn.addEventListener('click', function() {

            if (btn.innerHTML == questions[query_counter].right_answer) {
            correct_answers++
        }

        query_counter++

        if (query_counter < questions.length){
            questions[query_counter].display()
        } else {
            showResult()
        }
            })
        }
})
