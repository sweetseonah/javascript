var currentNum=0;
var menuNum=0;
var liList;
var spanList;
var sid;

function selectMenu(num){
	if(currentNum!=num){
		var btn1=spanList[currentNum].getElementsByTagName('img')[0];
		btn1.src=btn1.src.replace('_over.png','.png')
		liList[currentNum].className="off";

		var btn2=spanList[num].getElementsByTagName('img')[0];
		btn2.src=btn2.src.replace('.png','_over.png')
		liList[num].className="";
		currentNum=num
	}
}

function init(){
	 liList=document.getElementById('visual').getElementsByTagName('li');
	spanList=document.getElementById('visualBtn').getElementsByTagName('span')
	for(var i=0; i<spanList.length; i++){
		spanList[i].getElementsByTagName('a')[0].num=i;
		spanList[i].getElementsByTagName('a')[0].onmouseover=function(){

			clearInterval(sid)
			menuNum=this.num;
			selectMenu(menuNum);
		}

 

		spanList[i].getElementsByTagName('a')[0].onmouseout=function(){

			clearInterval(sid)

			sid =  setInterval(rolling,3000)

			

		}

		

	}

}

 

function stopbtn(){

	clearInterval(sid)

}

 

function playbtn(){

	clearInterval(sid)

	sid =  setInterval(rolling,3000)

}

 

function leftbtn(){

	clearInterval(sid)

	menuNum--

	if(menuNum<0){

		menuNum=spanList.length-1

	}

	selectMenu(menuNum);

}

 

function rightbtn(){

	clearInterval(sid)

	menuNum++

	if(menuNum>spanList.length-1){

		menuNum=0

	}

	selectMenu(menuNum);

}

 

function rolling(){

	menuNum++

	if(menuNum>spanList.length-1){

		menuNum=0

	}

	selectMenu(menuNum);

}

 

sid =  setInterval(rolling,3000)

 

 

 

 

 

 

window.onload=init;