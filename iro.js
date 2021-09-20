

function teclaDw(){
var diry, dirx, jog, pjx, pjy, vel;
var tamTelaW, tamTelaH;
var jogo;
var frames;
function teclaDown(){
var tecla=event.KeyCode;
if (tecla==87){ // é cima, direcional superior
		diry=-1;;
 }else if (tecla==83){ // direcional inferior
		diry=+1;
 }
if (tecla==65) {
		dirx=-1;
 }else if (tecla==68){
		dirx=+1;
 }
}
function teclaUp(){
		var tecla=event.KeyCode;
		if ((tecla==87)||(tecla==83)){
		diry=0;
 }
		if ((tecla==65)||(tecla==68)){
		dirx=0;
 }
}

document.addEventListener("keydown", teclaDown);
document.addEventListener("keyup", teclaUp);

function move(){
      console.log();
		pjy+=diry*vel;
		pjx+=dirx*vel;
		jog.style.top=pjy+"px";
    	jog.style.left=pjx+"px";
}

function game(){
      console.log();
		if(jogo=true){
		move();
 }
 var frames = requestAnimationFrame(game);
}

function inicia(){
 var jogo=true;
 tamTelaH=window.innerHeight;
 tamTelaW=window.innerWidth;

 dirx=0;
 diry=0;
 pjx=tamTelaW/2;
 pjy=tamTelaH/2;
 vel=5;
 jog=document.getElementById('aramisJog').appendChild(img);
 jog.style.top=pjy+"px";
 jog.style.left=pjx+"px";
 game();
}
}
