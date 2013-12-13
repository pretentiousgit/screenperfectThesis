// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3103984-3']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(function(){
  // Insert link to submit grades from gradebook page
  var $body = $('body');
  if($body.hasClass('gradebook2') || $body.hasClass('grades')) {
    var gradesToolId = 159; // This is the ID of the LTI tool, needed to build the link to submit grades page
    var bodyClasses = $body.attr('class').split(' ');
    for(var i=0, l=bodyClasses.length; i < l; i++) {
      match = /context-course_(\d+)/.exec(bodyClasses[i]);  // Search for the class containing the course ID 
      if(match) {
        // Insert link to external tool 
        var courseId = match[1];
        var linkURL = '/courses/'+courseId+'/external_tools/'+gradesToolId;
        var liHTML = '<li id="submit_grades_link_holder" class="" style="float:right;background:none;margin:0 auto;"><a href="'+linkURL+'"><span class="ellipsible" style="">Final grades</span></a></li>';
        $('nav#breadcrumbs ul').append(liHTML);
	break;
      }
    }
  }
});
