import React,{ Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import'./GKQuestions.css';

export default class GKQuestions extends Component {
 //initiating the local state
    state = {
        questions: {
            1:'1.ලෝක මැලේරියා දිනය කවදාද..?',
            2:'2.එට්නා කදු වැටිය පිහිටා ඇත්තේ කිනම් රටේද..? ',
            3:'3.ස්කුබි-ඩු චිත්‍රපටයේ අධ්‍යක්ෂවරයාගේ නම කුමක්ද?',
            4:'4.පෘථිවියේ සිට චන්ද්‍රයාට ඇති දුර කොපමණද..?',
           

        },
        answers: {
            1:{
                1:'මාර්තු 25',
                2:'අප්‍රේල් 25',
                3:'සැප්තැම්බර් 25',
                4:'මැයි 25'
            },
            2:{
                1:'ජර්මනිය',
                2:'ඇෆ්ගනිස්තානය',
                3:'බ්‍රිතාන්‍ය',
                4:'ඉතාලිය'
            },
            3:{
                1:'රාජා ගොස්නල් ',
                2:'ජොනතන් වින්ටර්ස',
                3:'මැතීව් ලිලර්ඩ',
                4:'ඩේවිඩ් රොන්'
            },
            4:{
                1:'කිලෝමීටර් මිලියන 150',
                2:'කිලෝමීටර් මිලියන 384',
                3:'කිලෝමීටර් 384,000',
                4:'කිලෝමීටර් 150,000'
            },

           
        },
        correctAnswers:{
            1:'2',
            2:'4',
            3:'1',
            4:'3'

        },
        correctAnswer:0,
        clickedAnswer:0,
        step: 1,
        score:0

    }
    checkAnswer = answer => {
        const{ correctAnswers, step, score} = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score +1,
                correctAnswer:correctAnswers[step],
                clickedAnswer:answer
            });
           }
           else{
               this.setState({
                   correctAnswer: 0,
                   clickedAnswer:answer 
               });
           }
    }

    nextStep = step => {
        this.setState({
            step: step+1,
            correctAnswer:0,
            clickedAnswer:0 

        })
    }
    render(){
    let { questions,answers,correctAnswer,clickedAnswer,step,score} = this.state;

        return(
            
            <div className="content">
    { step <= Object.keys(questions).length ?
    (<>
    <Question

        question={questions[step]}
     />
     <Answer
     answer={answers[step]}
     step={step}
     checkAnswer = {this.checkAnswer}
     correctAnswer={ correctAnswer}
     clickedAnswer={ clickedAnswer}
     />
     <button
       className="NextStep"
       disabled={
           clickedAnswer && Object.keys(questions).length  >= step
           ? false : true
       }
       onClick={() => this.nextStep(step)}
     >  
     Next Question  
     </button>
     



     </>) :(
         <div className="finalPage">
             <h1>Finished Question Paper 1</h1>
     <p>Paper 1 Results {score} / {Object.keys(questions).length}</p>
     
     </div>
     )
     
    
     }
     </div>
        )
    }
}
 


