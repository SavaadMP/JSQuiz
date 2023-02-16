let userName;

if (window.localStorage.getItem("name")===null) {
	userName=prompt("What Is Your Name!? ");
	while(userName==""){
		userName=prompt("What Is Your Name!? ");
	}
	window.localStorage.setItem("name", userName);
}else {
	userName=window.localStorage.getItem("name");
}

var WlcmMsg=document.querySelector(".welcome_msg");
WlcmMsg.innerText=`Welcome ${userName} 💛✌`;

const resetLocalStorage=()=>{
	window.localStorage.clear();
	window.location.reload();
}