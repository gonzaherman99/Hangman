import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState();
  const [state1, setState1] = useState();
  const [starts, setStarts] = useState();
  const [title, setTitle] = useState();
  const [word, setWord] = useState();
  const [error, setError] = useState();

  var valueS = [];

  var numberE = 0;

  var errors = 0;

  function handleChange(event) {
  	var value = event.target.value;
  	if (valueS.length > 0) {
  		valueS[0] = value;
  	} else {
  		valueS.push(value);
  	}
  }

 function handleSubmit(event, param) {

 	var array = [];

 		for(var i = 0; i <= title.length; i++) {
        		array.push(title[i]);
   		}
    	 for (var i = 0; i < word.length; i++) {
     		 if (valueS[0] === word[i]) {
        	  	array[i] = valueS[0];
        	  	array.join();
        	  	var string = array.toString();
        	  	var commas = string.replace(/\,/g,"");
        		setTitle(commas);
      		} else {
        		numberE = numberE  + 1;
      		}
  		}
  		if (numberE === word.length) {
  			change();
  		}
  		numberE = 0;
  	event.preventDefault();
  }

  setTimeout(
      function(){
      setState('up');
  },2000);
  
  setTimeout(
      function(){
      setState1('up');
  },5000);

  var guessN = [];

  var words = ['mountain', 'well', 'hello', 'car', 'window', 'house'];

  function game() {
    setStarts(true);

    var number = Math.floor(Math.random() * 6);

    var selected = words[number];

    setWord(selected);

    for (var i = 0; i < selected.length; i++) {
         guessN.push('_');
    }

    setTitle(guessN);
  }

  var styles = {
  	visibility: 'visible'
  };

  var styles2 = {
  	visibility: 'hidden'
  };

  var i = 1;

  function change() {
  	if (error >= 2) {
  		setError(error + 1)
  	} else {
  		setError(i + 1);
	}

	if (error === 9) {
		console.log('game over');
		setTimeout(
    	  	function(){
    		  	window.location.reload();
  			},2000);
	}
  		console.log(error);

  }
      
  
  return (
  	<div className={error === 10 ? 'App-header2' : ''}>
  		<h1  className='over' style={error === 10 ? styles : styles2}>GAME OVER</h1>
    <div>
    	<div className={starts === true ? 'App2' : 'App'}>
      		<header className='App-header'>

        		<h1 className={state === 'up' ? 'up' : ''}>HANGMAN</h1>

        		<h2 className={state1 === 'up' ? 'up' : 'down'} onClick={game}>START</h2>

      		</header>
    	</div>
    	<div className={starts === true ? 'game2' : 'game'}>

        	<h2 className="word">{title}</h2>

        	<h1>ENTER THE LETTER BELOW TO FIND THE WORD</h1>

        	<form className={error === 10 ? 'downForm' : ''} onSubmit={handleSubmit}>
           		<input type="text"  maxLength="1" onChange={handleChange} opacity/>
           		<button type="submit">Submit</button>
        	</form>

        	<div id='hang1' style={error >= 2 ? styles : styles2}>
        	/
        	</div>
        	<div id='hang2' style={error >= 3 ? styles : styles2}>
        	/
        	</div>
        	<div id='hang3' style={error >= 4 ? styles : styles2}>
        	o
        	</div>
        	<div id='hang4' style={error >= 5 ? styles : styles2}>
        	/
        	</div>
        	<div id='hang5' style={error >= 6 ? styles : styles2}>
        	/
        	</div>
        	<div id='hang6' style={error >= 7 ? styles : styles2}>
        	/
        	</div>
        	<div id='hang7' style={error >= 8 ? styles : styles2}>
        	/
        	</div>
        	<div id='hang8' style={error >= 9 ? styles : styles2}>
        	/
        	</div>

    	</div>
    </div>
    </div>
  );
}


export default App;