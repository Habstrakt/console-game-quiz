(function() {
  // 1. Создать конструктор
  const Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  // 4.2 описать метод displayQuestion который будет выводить вопрос и ответы
  // Записываем его в прототип класса Question, чтобы все объекты этого класса могли его использовать
  // и он был описан только 1 раз

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    this.answers.forEach(function(item, index) {
      console.log(index + 1, item);
    })
  }

  Question.prototype.checkAnswer = function(answer) {
    if(+answer === this.correctAnswer) {
      console.log('Правильный ответ');
    } else {
      console.log('Не правильный ответ');
    }
  }

  // 2. Создать 3-4 вопроса используя конструктор
  let q1 = new Question('Вопрос 1', ['Ответ 1', 'Ответ 2', 'Ответ 3'], 1);
  let q2 = new Question('Вопрос 2', ['Ответ 1', 'Ответ 2', 'Ответ 3'], 1);
  let q3 = new Question('Вопрос 3', ['Ответ 1', 'Ответ 2', 'Ответ 3'], 1);

  // 3. поместить все вопросы в массив
  const questionArray = [q1, q2, q3];


  // 4. Выберите один случайный вопрос
  // 4.1 Найти случайное число 
  let randNum = Math.floor(Math.random() * questionArray.length);

  // 4.3 распечатываем в консоль случайный вопрос с вариантом ответа
  questionArray[randNum].displayQuestion();

  // 5. Используйте функцию prompt для запроса ответа от пользователя
  let answer = prompt('Введите число ответа');

  questionArray[randNum].checkAnswer(answer);

})()

