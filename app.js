let btn = document.querySelector('button');
let fb = document.querySelectorAll('.icon img')[0];
let tw = document.querySelectorAll('.icon img')[1];
let wa = document.querySelectorAll('.icon img')[2];
var curScroll = 0;
const header = document.querySelector('nav');
const main = document.querySelector('main');
const home = document.querySelector('header');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.sidebar .option');
const menu = document.querySelector('.menu');
	btn.addEventListener('click', (e)=>{
		window.open('https://www.youtube.com/channel/UCHKwfbpfgesVq7-favln5Vg?view_as=subscriber','_blank');
		e.stopPropagation();
	})

	fb.addEventListener('click',(e)=>{
		window.open('https://web.facebook.com/vincant.cahmlz/','_blank');
		e.stopPropagation();
	})

	tw.addEventListener('click',(e)=>{
		window.open('https://twitter.com/vinsite123','_blank');
		e.stopPropagation();
	})

	wa.addEventListener('click',(e)=>{
		window.open('https://twitter.com/vinsite123','_blank');
		e.stopPropagation();
	})

	window.addEventListener('scroll', function(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if(header.style.display != 'none'){
			if(scrollTop > curScroll){
				header.style.top='-8vh';
			}else{
				header.style.top='0vh';
				header.style.zIndex = '4';
				header.classList.toggle('sticky',window.scrollY > 0);
				header.style.transition = '.5s';
			}
			curScroll = scrollTop;
		}
		if(sidebar.style.display != 'none'){
			if(scrollTop > curScroll){
				sidebar.style.top='-8vh';
			}else{
				sidebar.style.top='0vh';
				sidebar.style.zIndex = '4';
				sidebar.classList.toggle('sticky2',window.scrollY > 0);
				sidebar.style.transition = '.5s';
			}
			curScroll = scrollTop;
		}
	})
	function goHome(){
		window.scrollTo({
			top: home.offsetTop,
			behavior: 'smooth'
		})
		event.stopPropagation();
	}

	function goAbout(){
		window.scrollTo({
			top: main.offsetTop,
			behavior: 'smooth'
		})
		event.stopPropagation();
	}

	function goContact(){
		window.scrollTo({
			top: contact.offsetTop,
			behavior: 'smooth'
		})
		event.stopPropagation();
	}

let img = document.querySelector('.about .havin img');
let imgInfo = document.querySelector('.havin .havin-info');
let img2 = document.querySelector('.about .kopi img');
let img2Info = document.querySelector('.kopi .kopi-info');
let skill = document.querySelector('.skill-icon');
let box = document.querySelectorAll('.box');
let btnWG = document.getElementById('btn-wg');
	window.addEventListener('scroll',()=>{
		if(img.getBoundingClientRect().top < (window.innerHeight / 2)){
			img.style.opacity = '1';
			img.style.transform = 'translateY(0)';
			imgInfo.style.transform = 'scale(1)';
		}
		if(img2.getBoundingClientRect().top < (window.innerHeight / 2)){
			img2.style.opacity = '1';
			img2.style.transform = 'translateY(0)';
			img2Info.style.transform = 'scale(1)';
		}
		if(skill.getBoundingClientRect().top < (window.innerHeight / 1.2)){
			box.forEach((e,i)=>{
				e.style.transform = 'scale(1)';
			})
		}
	})

	btnWG.addEventListener('click',()=>{
		window.open('https://vin-site.000webhostapp.com','_blank');
	})

	hamburger.addEventListener('click',function(){
	let span = document.querySelectorAll('.sidebar span');
	if(menu.style.right == '0vw'){
		menu.classList.remove('left');
		menu.style.right='-40vw';
		span[0].style.transform = 'rotateZ(0)';
		span[1].style.marginTop = '-2px';
		span[1].style.transform = 'rotateZ(90deg)';
		
	}else{
		menu.style.right='0vw';		
		menu.classList.add('left');
		span[0].style.transform = 'rotateZ(-310deg)';
		span[1].style.marginTop = '0px';
		span[1].style.transform = 'rotateZ(-45deg)';
	}
	event.stopPropagation();
})