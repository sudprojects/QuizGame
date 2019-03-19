import React, { Component } from 'react';
import Display from './Components/Display/Display';
import './App.css';
import h2p from 'html2plaintext';
//import Timer from 'simple-react-timer';


//const nums = 10;
class App extends Component {

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

    console.log(data);
    console.log(h2p('The word &quot;news&quot; originates'));

    this.setState({
    userAnswer: undefined,
    question: h2p(data.results[0].question),
    answer: data.results[0].correct_answer,
    isDisabled: false

    });
}

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