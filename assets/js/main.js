/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

const countDownClock = (number = 100, format = 'seconds') => {
  
	const d = document;
	const daysElement = d.querySelector('.days');
	const hoursElement = d.querySelector('.hours');
	const minutesElement = d.querySelector('.minutes');
	const secondsElement = d.querySelector('.seconds');
	let countdown;
	convertFormat(format);
	
	
	function convertFormat(format) {
	  switch(format) {
		case 'seconds':
		  return timer(number);
		case 'minutes':
		  return timer(number * 60);
		  case 'hours':
		  return timer(number * 60 * 60);
		case 'days':
		  return timer(number * 60 * 60 * 24);             
	  }
	}
  
	function timer(seconds) {
	  const now = Date.now();
	  const then = now + seconds * 1000;
  
	  countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
  
		if(secondsLeft <= 0) {
		  clearInterval(countdown);
		  return;
		};
  
		displayTimeLeft(secondsLeft);
  
	  },1000);
	}
  
	function displayTimeLeft(seconds) {
	  daysElement.textContent = Math.floor(seconds / 86400);
	  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
	  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
	  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
	}
  }
  
  
  /*
	start countdown
	enter number and format
	days, hours, minutes or seconds
  */
	var x = new Date("Apr 2, 2023 12:00:00");
	var y = new Date();
	let seconds = Math.abs(x.getTime() - y.getTime())/1000;
  
	if(seconds < 3600) {
		document.getElementById("cajt").innerHTML = "Nimaš več cajta!";
	}
	
	countDownClock(seconds, 'seconds');