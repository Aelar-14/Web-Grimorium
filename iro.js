function iro(){
var diry, dirx, jog, pjx, pjy, vel;
var tamTelaW, tamTelaH;
var jogo;
var frames;


function teclaDw(){

var tecla = eventKeyCode;
if (tecla == w){ // é cima, direcional superior
		diry = -1;;
 }
		else if (tecla == s){ // direcional inferior
		diry = +1;
 }
if (tecla == a) {
		dirx = -1;
 }
		else if (tecla == d){
		dirx = +1;
 }
function teclaUp(){
		var tecla = event.KeyCode;
		if ((tecla == w)||(tecla == s)){
		diry = 0;
 }
		if ((tecla == a)||(tecla == d)){
		dirx = 0;
 }
}

function move(){
      console.log();
		pjy += diry*vel;
		pjx += dirx*vel;
		jog.style.top = pjy + "px";
    	jog.style.left = pjx + "px";
}

function game(){
      console.log();
		if(jogo === true){
		move();
 }
 var frames = requestAnimationFrame(game);
}

function inicia(){
console.log();
 var jogo =true;
 tamTelaH = window.innerHeight;
 tamTelaW = window.innerWidth;

 dirx = 0;
 diry = 0;
 pjx = tamTelaW/2;
 pjy = tamTelaH/2;
 vel = 5;
 jog = document.getElementById("pers1");
 jog.style.top = pjy + "px";
 jog.style.left = pjx + "px";
 game();
}
 console.log();
 window.addEventListener("load", inicia);
 document.addEventListener("keydown", teclaDw);
 document.addEventListener("keyup", teclaUp);
