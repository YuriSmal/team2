

let planTumblersBtn1 = document.querySelector('.plan-tumblers-btn1');
let planTumblersBtn2 = document.querySelector('.plan-tumblers-btn2');
let planStarterCard = document.querySelector('.plan-starter');
let planProCard = document.querySelector('.plan-pro');



planStarterCard.onclick = (e) => {
	e.preventDefault();
	planProCard.classList.remove('plan-right-block-active');

	planStarterCard.classList.add('plan-right-block-active');
}
planProCard.onclick = (e) => {
	console.log(1)
	e.preventDefault();
	planStarterCard.classList.remove('plan-right-block-active');

	planProCard.classList.add('plan-right-block-active');
}
planTumblersBtn1.onclick = (e) => {
	e.preventDefault();
	let planRightBlockSub1 = document.querySelector('.plan-right-block-active .plan-right-block-sub1');
	let planRightBlockSub2 = document.querySelector('.plan-right-block-active .plan-right-block-sub2');

	planTumblersBtn2.classList.remove('plan-tumblers-active');
	planTumblersBtn1.classList.add('plan-tumblers-active');

		planRightBlockSub1.style.zIndex = '5';
		planRightBlockSub1.style.opacity = '1';
		planRightBlockSub2.style.zIndex = '0';
		planRightBlockSub2.style.opacity = '0';
	
}


planTumblersBtn2.onclick = (e) => {
	e.preventDefault();
	let planRightBlockSub1 = document.querySelector('.plan-right-block-active .plan-right-block-sub1');
	let planRightBlockSub2 = document.querySelector('.plan-right-block-active .plan-right-block-sub2');

	planTumblersBtn1.classList.remove('plan-tumblers-active');
	planTumblersBtn2.classList.add('plan-tumblers-active');
	
		planRightBlockSub2.style.zIndex = '5';
		planRightBlockSub2.style.opacity = '1';
		planRightBlockSub1.style.zIndex = '0';
		planRightBlockSub1.style.opacity = '0';
	
}