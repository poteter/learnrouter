import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Score from "./src/pages/score";
import Quiz from "./src/pages/quiz";
import {randomQuestion} from "./src/questions";
import {isCorrectAnswer} from "./src/questions";
import {BrowserRouter, Link} from "react-router-dom";

function App(){
    const [getQuiz, setQuiz] = useState(<p></p>);
    const [getScore, setScore] = useState(<p></p>);
    const [getCurrent, setCurrent] = useState(<h1>Wololo</h1>);

    const updateQuiz = () => {
        setQuiz(<h1>Quiz</h1>);
        setCurrent(getQuiz);
    }

    const updateScore = () => {
        setScore(<h1>Score</h1>);
        setCurrent(getScore);
    }

    return <div>
        {getCurrent}
        <BrowserRouter>
            <ul>
                <li onClick={updateQuiz}><Link to="/quiz">Quiz</Link></li>
                <li onClick={updateScore}><Link to="/score">Score</Link></li>
            </ul>
        </BrowserRouter>
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);