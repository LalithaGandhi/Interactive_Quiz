# Interactive_Quiz
## Description
The **Interactive Quiz Application** is a high-level, dynamic front-end web application developed using HTML5, CSS3, and Vanilla JavaScript. It is designed to provide a seamless user experience by injecting content from a centralized Question Bank into a stable, responsive UI. The application features a dedicated layout reservoir to prevent visual shifting when switching between questions with or without multimedia content.

## Key Features
*   **Dynamic Data Injection**: Populates questions and options from a JavaScript array for easy scalability.
*   **Visual Stability**: Uses a layout reservoir to ensure question text and buttons stay in fixed positions, regardless of image presence.
*   **15-Second Countdown Timer**: Automatically advances the quiz and provides feedback if the user does not respond within the time limit.
*   **Educational Feedback**: Offers explanations after each selection and a hint system for difficult questions.
*   **Multimedia Integration**: Supports high-quality visual aids using optimized CSS object-fit properties.

## Technologies Used
*   **HTML5**: Semantic document structure.
*   **CSS3**: Flexbox layouts, responsive design, and custom transitions.
*   **JavaScript (ES6+)**: State management, DOM manipulation, and timer intervals.

## Project Structure
*   `index.html`: Main skeletal structure and dynamic templates.
*   `style.css`: UI styling and layout reservoir logic.
*   `script.js`: State management, scoring, and data population.

##  Installation and Usage
1. Clone the repository to your local machine.
2. Ensure all project files are located in the same directory.
3. Open `index.html` in a modern web browser.
4. Note: An active internet connection is required to load external multimedia resources.

##  User Instructions
1. The first question loads automatically with an active 15-second timer.
2. Select an answer choice to unlock the **Next Question** button.
3. Read the explanation provided after each question to learn more about the topic.
4. View your final score summary upon completion of the quiz.
