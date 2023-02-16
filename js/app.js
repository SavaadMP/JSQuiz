var Questions=[{
		"Que": "Who Is The Father Of Politcal Science!?",
		"a": "Augaste Comte",
		"b": "Aristotle",
		"c": "Mahathma Gandhi",
		"d": "Jawaharlal Nehru",
		"answer": "b"
	},{
		"Que": '"War is to man what maternity is to women" Whose Word It is?',
		"a": "Adolf Hitlur",
		"b": "John Lockie",
		"c": "Mussolini",
		"d": "Nepolien",
		"answer": "c"
	},{
		"Que": "Who Signed Panchasheel Principle With China!?",
		"a": "Augaste Comte",
		"b": "Jawaharlal Nehru",
		"c": "Mahathma Gandhi",
		"d": "Raja Ram Mohan Roy",
		"answer": "b"
	},{
		"Que": "Who Is The Father Of Sociology!?",
		"a": "Augaste Comte",
		"b": "Aristotle",
		"c": "Mahathma Gandhi",
		"d": "Raja Ram Mohan Roy",
		"answer": "a"
	},{
		"Que": "Who Is The Father Of Genetics!?",
		"a": "Alexander Fleming",
		"b": "Johns Mendal",
		"c": "Alec Jaffrey",
		"d": "Michel Faradey",
		"answer": "b"
	},{
		"Que": "Which Nation is not included in TRIPLE ALLIANCE!?",
		"a": "Germany",
		"b": "Italy",
		"c": "Austria-Hungary",
		"d": "France",
		"answer": "d"
	},{
		"Que": "Which Nation is not included in ALLIED POWERS!?",
		"a": "England",
		"b": "France",
		"c": "Japan",
		"d": "China",
		"answer": "c"
	},{
		"Que": "Find Out The Wrong Pair.",
		"a": "Champaran Sathyagraha - 1916",
		"b": "Lahore Session of INC - 1929",
		"c": "Rowlat Act - 1919",
		"d": "Khedha Movement - 1918",
		"answer": "a"
	},{
		"Que": "Industrial Production of Soap Is Known as",
		"a": "Contact Process",
		"b": "Hot Process",
		"c": "Hebar Process",
		"d": "None of the Above",
		"answer": "b"
	},{
		"Que": "Least distance of distinct vision for a normal human being is .......",
		"a": "20m",
		"b": "25m",
		"c": "25cm",
		"d": "20cm",
		"answer": "c"
	}]


// TotalQuestions
let TotalQns=Questions.length;
// Right And Wrong;
let correctAns=0
let wrongAns=0;
// SetUp For Question Number:-
let index=0;
// Questions:-
let QueTitle=document.getElementById("QueTitle");
// Recieving The Answer From User;
let userOutput=document.querySelectorAll('.options');

// Reset The Answer After CLicking Oneeee;
const reset=()=>{
	userOutput.forEach((input)=>{
		input.checked=false;
	})
}

const loadQuestion=()=>{
	// If Maximum Question Reaches..
	if(index===TotalQns){
		return endGame()
	}
	// Resetting Answer....
	reset();
	// Getting The Qustions Array
	const data=Questions[index];
	// Showing The Question;
	QueTitle.innerText=`Q${index+1}: ${data.Que}`;
	// Showing Optionsssssss;
	userOutput[0].nextElementSibling.innerText=data.a;
	userOutput[1].nextElementSibling.innerText=data.b;
	userOutput[2].nextElementSibling.innerText=data.c;
	userOutput[3].nextElementSibling.innerText=data.d;
}

// Function For Getting The  Answer
const AnswerInput=()=>{
	let answer;
	userOutput.forEach((input)=>{
		if(input.checked){
			answer=input.value;
		}
	})
	return answer;
}

// Quizz Submitting......
const submitQuiz=()=>{
	// Getting The Qustions Array
	const data=Questions[index];
	// Getting The  Answer
	const answer=AnswerInput();
	console.log(answer);

	if(answer==undefined){
		alert("Should Be Select One");
	}else{
		if(answer==data.answer){
			correctAns++;
		}else{
			wrongAns++;
		}
		
		// Changing The Question..
		index++;
		loadQuestion();
	}

	return;
}

const GoToHome=()=>{
	window.location.replace("index.html");
}

const reloadPage=()=>{
	window.location.reload();
}

const endGame=()=>{
	let percentage=(correctAns/TotalQns)*100;
	document.getElementById("box").innerHTML=`
		<div style="text-align: center;">
			<h1>Finished!!!!</h1>

			<h2>Total Questions: ${TotalQns}</h2>
			<h2>Correct Answers: ${correctAns}</h2>
			<h2>Wrong Answers: ${wrongAns}</h2>
			<h2>Percentage: ${percentage}%</h2>

			<button onclick="GoToHome()" 
			style="
			width: 80%;
			padding: 8px;
			font-size: 20px;
			color: white;
			background-color: #064970;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-family: 'Contrail One', cursive;
			margin:10px;
			">Go To Home</button>
			<button onClick="reloadPage()"
			style="
			width: 80%;
			padding: 8px;
			font-size: 20px;
			color: white;
			background-color: #064970;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-family: 'Contrail One', cursive;
			margin:10px;
			">Play Again</button>
		</div>
	`
}

// FuctionOnOpening:-
loadQuestion();