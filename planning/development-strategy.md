<!--

  These will be the main types of tasks in the quiz project:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`

  Some general changes you will need to make:
  - client/data/quiz.js (to add questions)
  - client/config.js (to configure your repo name for deployment)

  For each user story you may need to write code in:
  - client/src/components
  - client/src/handlers
  - client/src/logic
  - client/styles
  - client/public

  everything else should work already!

-->

# Data

## Should-Have

As a developer, I want to know the current index of the rendered question

1. indexOfRenderedQuestion
2. numberOfTotalQuestions
3. score

# Home Page

## Must-Haves

As a user, I can read instructions for the quiz:

1. instruction.js component

- create a title(h1) and instructions text (p) inside a div

2. css for the component
3. render homepage
4. append numberOfQuestions.js component inside of instruction.js component

As a user, I can know how many questions are in the quiz:

1. numberOfQuestions.js shared component

- create a text (p) for the number of questions

2. css for the component

As a user, I can start the quiz in the home page:

1. startButton.js component (button that links to the quiz page)
2. css for the component

# Quiz Page

## Must-Haves

As a user, I can restart the quiz:

1. restartButton.js component (goes to the first question, clean the score)
2. restartButtonListener (in the component)
3. restartButtonHandler.js
4. css for the component

As a user, I can select one or more answers for the current question:

1. answerButton.js component
2. change component class to "selected"
3. css for the component class

As a user, I can go forward to the next question:

1. nextButton.js component
2. nextButtonHandler.js
3. nextButtonListener (in the component)
4. css for the component

As a user, I want to submit my answers at the end of the quiz:

1. submitButton.js component (removes all the containers, renders text message in div and shows the score)
2. submitButtonHandler.js
3. submitButtonListener (in the component)
4. css for the component

## Should-Have

As a user, I can go backwards to the previous question:

1. previousButton.js component (for the first question it is inactive)
2. previousButtonHandler.js
3. previousButtonListener (in the component)
4. css for the component
