
import $ from 'jquery'
$( document ).ready(function() {
	if(window.location.pathname === "/"){
		$('#sidebar').hide()
	}else{
		$('#sidebar').show()
	}

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });


});