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
	})
})();