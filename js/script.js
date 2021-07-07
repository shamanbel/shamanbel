  
const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close'),
		chooseElem = document.querySelector('.menu__list');

hamburger.addEventListener('click', function() {
menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
menu.classList.remove('active');
});
chooseElem.addEventListener('click', () => {
	menu.classList.remove('active');
	});

const 	counters = document.querySelectorAll('.skills__ratings-counter'),
		lines = document.querySelectorAll('.skills__ratings-line span');

		counters.forEach((item, i) => {
			lines[i].style.width = item.innerHTML;
				});

// $('form').submit(function(e) {
// 	e.preventDefault();
// 	ajax({
// 		type: "POST",
// 		url:"mailer/smart.php",
// 		data: $(this).serialize(),
// 	}).done(function(){
// 		$(this).find("input").val("");
// 		$('form').trigger('reset');

// 	});
// 	return false;

// });