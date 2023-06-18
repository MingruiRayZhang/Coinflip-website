let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
//let resetBtn = document.querySelector("#reset-button");


flipBtn.addEventListener("click", () => {
	//localStorage.setItem('name', 'Kyle')
	//sessionStorage.setItem('cointoss1', 'tossed')
	//document.cookie = 'cointoss2=Kyle'
	//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/mz74/Cointoss";
	//setCookie("testcookie","tossed",60);
	//Cookies.set('testc2', 'tossed', { expires: 60 })
	let check = checkCookie("cointoss");
	if (check) {
		showtossed();
		flipBtn.style.visibility = "hidden";
	}
	else {
		setCookie("cointoss","tossed",60);
		//let i = Math.floor(Math.random() * 2);
		let i = 0;
		//let i = 1;
		coin.style.animation = "none";
		if(i){
			setTimeout(function(){
				coin.style.animation = "spin-heads 3s forwards";
			}, 100);
			heads++;
		}
		else{
			setTimeout(function(){
				coin.style.animation = "spin-tails 3s forwards";
			}, 100);
			tails++;
		}
		//setTimeout(updateStats, 3000);
		showresult(i);
		//disableButton();
		hidebutton();
	}

});
/*
function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
*/
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
function hidebutton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
		flipBtn.style.visibility = "hidden";
    },3000);
}
function showresult(i){
	setTimeout(function(){
		if(i){
			document.getElementById('cointext').innerHTML = '';
			document.getElementById('cointext').innerHTML = '正面';	
		}
		else{
			document.getElementById('cointext').innerHTML = '';
			document.getElementById('cointext').innerHTML = '反面';
		}
	}, 3000);
}
function showtossed(){
	document.getElementById('cointext').innerHTML = '';
	document.getElementById('cointext').innerHTML = '对不起，您已经参加过硬币投掷。';
}

/*
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});
*/

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  let username = getCookie(cname);
  if (username != "") {
	return 1;
  } 
  else {
	return 0;
  }
}

