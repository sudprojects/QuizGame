import React from 'react';
import './Display.css';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

//Destructuring props
const Display = ({ getQuestion, question, answer, trueButton, falseButton, userAnswer, answerType, score, isDisabled  }) => {

// Returning question, buttons, score 

	return (
		<div>
		
		<div className = "myflex">
		<article className=" child1 mw5 mw6-ns hidden ba mv4">
		  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Sud's Quiz</h1>
		  <div class="pa3 bt">
		    <p class="f6 f5-ns lh-copy measure mv0">

			{/* Checking condition if user comes to the page first time */}
		    {!question && <p>Click Show Question button to see your first question</p>}
			{question && <p>{question}</p>}
		    </p>
		  </div>
		</article>

		<article className=" child2 mw5 mw6-ns hidden ba mv4">
		  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Score</h1>
		  <div class="pa3 bt">
		  <h1>{score}</h1>
		  </div>
		</article>
		</div>

		{/* Only show True/False buttons when the question is displayed on screen*/}
		{question && <button className = 'f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue pointer' onClick = {trueButton} disabled = {isDisabled}>True </button>}
		{question && <button className = 'f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue pointer' onClick = {falseButton} disabled = {isDisabled}>False </button>}
		{/* Only show "Next question" buttons when the question is displayed on screen*/}
		{!question && <p><button className = 'f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black pointer' onClick = {getQuestion}>Show Question</button></p>}
		{question && <p><button className = 'f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black pointer' onClick = {getQuestion}>Next Question</button></p>}
		{question && <p>{answerType} </p>}
		
		</div>

		);


}

export default Display;
