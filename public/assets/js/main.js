(function() {	
	document.addEventListener("DOMContentLoaded", function() {
		var waypoint = new Waypoint({
			element: document.querySelector('.aboutme'),
			handler: function(direction) {
				var nav = document.querySelector('nav');
				if (direction == 'down') {
					nav.classList.add('sticky');
				} else {
					nav.classList.remove('sticky');
				}
			},
			offset: 60
		})
		
		document.querySelector('.js--button-projects').addEventListener('click', function(e){
			handleScroll('.project-head', e);
		});

		document.querySelector('.js--button-contact').addEventListener('click', function(e){
			handleScroll('.contact', e);
		});
		document.querySelector('.js--nav-aboutme').addEventListener('click', function(e){
			handleScroll('.aboutme', e);
		});
		document.querySelector('.js--nav-skills').addEventListener('click', function(e){
			handleScroll('.skills', e);
		});

		function handleScroll(selector, e) {
			e.preventDefault();
			var elem = document.querySelector(selector);
			elem.scrollIntoView({behavior: "smooth", block: "start"});
		}

		const createWPAnimation = (selector, animation, offset) => {
			var waypoint = new Waypoint({
				element: document.querySelector(selector),
				handler: function(direction) {
					document.querySelector(selector).classList.add('animated', animation);
				},
				offset: offset
			})
		}

		createWPAnimation('.js-point-1', 'fadeIn', '50%');
		createWPAnimation('.js-point-2', 'fadeInUp', '60%');
		createWPAnimation('.js-point-3', 'bounceInUp', '50%');
		createWPAnimation('.js-point-4', 'pulse', '90%');
		createWPAnimation('.js-point-5', 'bounce', '50%');
		
		document.querySelector('.burger-x').addEventListener('click', function(){
			document.querySelector('.main-nav').classList.toggle('hidden');
			var burger = document.querySelector('.js-icon');
			burger.classList.toggle('ion-ios-menu');
			burger.classList.toggle('ion-ios-close');
		});
	})
})();