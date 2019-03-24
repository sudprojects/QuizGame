import React, { Component } from 'react';
import Display from './Components/Display/Display';
import './App.css';
import h2p from 'html2plaintext';

class App extends Component {

// Initializing state
    state = {
    question: undefined,
    answer: undefined,
    userAnswer: undefined,
    answerType: undefined,
    score: 0,
    isDisabled: false
    
  }

  getQuestion = async (e) =>{
    e.preventDefault();
    
    const api_call = await fetch(`https://opentdb.com/api.php?amount=01&category=9&type=boolean`);
    const data = await api_call.json();

    //Updating state after api response
    this.setState({
    userAnswer: undefined,
    question: h2p(data.results[0].question),
    answer: data.results[0].correct_answer,
    isDisabled: false

    });
}

//Checking whether answer is correct when user clicks "True" button
//Increasing or decreasing the score based on correct/incorrect answer
trueButton = async (anstrue) =>{
anstrue.preventDefault();
this.setState({
userAnswer: 'true',
isDisabled: true

});

if(this.state.answer === 'True'){

this.setState({
  answerType:'correct answer',
  score: this.state.score + 1 
})

}else{
  this.setState({
  answerType:'Wrong answer',
  score: this.state.score - 1
})
}
}

//Checking whether answer is correct when user clicks "False" button
//Increasing or decreasing the score based on correct/incorrect answer
falseButton = async (ansfalse) =>{
ansfalse.preventDefault();
this.setState({
userAnswer: 'false',
isDisabled: true
});

if(this.state.answer === 'False'){

this.setState({
  answerType:'correct answer',
  score: this.state.score + 1 
})

}else{
  this.setState({
  answerType:'Wrong answer',
  score: this.state.score - 1 
})
}
}

// rendering Display component
  render() {
    return (
      <div className="App">

      <Display getQuestion = {this.getQuestion} 
               question = {this.state.question} 
               answer = {this.state.answer}
               trueButton = {this.trueButton}
               falseButton = {this.falseButton}
               userAnswer = {this.state.userAnswer}
               answerType = {this.state.answerType}
               score = {this.state.score}
               isDisabled = {this.state.isDisabled}
                />
      
      </div>
    );
  }
}

export default App;
// <Timer startTime ={nums} />