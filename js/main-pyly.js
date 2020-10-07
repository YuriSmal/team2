

let planTumblersBtn1 = document.querySelector('.plan-tumblers-btn1');
let planTumblersBtn2 = document.querySelector('.plan-tumblers-btn2');
let planStarterCard = document.querySelector('.plan-starter');
let planProCard = document.querySelector('.plan-pro');


planTumblersBtn1.onclick = (e) => {
	e.preventDefault();
	planProCard.classList.remove('plan-right-block-active');
	planTumblersBtn2.classList.remove('plan-tumblers-active');

	planStarterCard.classList.add('plan-right-block-active');
	planTumblersBtn1.classList.add('plan-tumblers-active');
}
planTumblersBtn2.onclick = (e) => {
	e.preventDefault();
	planStarterCard.classList.remove('plan-right-block-active');
	planTumblersBtn1.classList.remove('plan-tumblers-active');

	planProCard.classList.add('plan-right-block-active');
	planTumblersBtn2.classList.add('plan-tumblers-active');
}