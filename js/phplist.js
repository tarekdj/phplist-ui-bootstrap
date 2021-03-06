
var menuArrowsrc = 'ui/dressprow/images/menuarrow.png';
var menuArrowActivesrc = 'ui/dressprow/images/menuarrow_active.png';

/* JS function to handle media queries */
window.matchMedia = window.matchMedia || (function(doc, undefined){
  
  var bool,
      docElem = doc.documentElement,
      refNode = docElem.firstElementChild || docElem.firstChild,
      // fakeBody required for <FF4 when executed in <head>
      fakeBody = doc.createElement('body'),
      div = doc.createElement('div');
  
  div.id = 'mq-test-1';
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.appendChild(div);
  
  return function(q){
    
    div.innerHTML = '&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';
    
    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth == 42;
    docElem.removeChild(fakeBody);
    
    return { matches: bool, media: q };
  };
  
})(document);


/* JS to execute on loading document */
$(document).ready(function() {
	// adding add and even classes to table in dbcheck page
	$(".dbcheck tr.row:even").addClass("even");
	$(".dbcheck tr.row:odd").addClass("odd");
	// make the content collapsible
	$('.dbcheck table div.header').each(function(index) {
		$(this).click(function () {
		$(this).next("div.content").toggle("slow");
		});
	});
	
/*    // open/close div global help    
        $("#globalhelp").click(function(){        
//    	    if(matchMedia('only screen and (max-width: 767px)').matches){ $("#menuTop").hide(); }
     	    $("#globalhelp .content").toggle();
	});
	

    // dropdown menu 1
    $('#webblertabs').each(function(){
        $(this).find('ul li').hide();
        $(this).find('ul li.current').show();
    });
    $('#webblertabs').hover(function(){
        $(this).find('ul li').slideDown();
    },
    function(){
        $(this).find('ul li').hide();
        $(this).find('ul li.current').show();
    });
    
    // dropdown menu 2
    $('.dropButton').hover(function(){
        $(this).find('.submenu').slideDown();
    },
    function(){
        $(this).find('.submenu').hide();
    });

        // styling list tab in send page
	$('body.send').find('.ui-tabs-panel li').each(function(){
	  var li = $(this);
	  listify(li);
	});
    listify_finish_tab('.campaignTracking');
    listify_finish_tab('.resetStatistics');
    listify_finish_tab('.isTestCampaign');

    function listify_finish_tab(selector)
    {
        var cbx = $(selector).find('input[type=checkbox]');
        var cbx_name = $(cbx).attr('name');
        var label = $(selector).find('label');
        $(cbx).attr('id', cbx_name);
        $(label).attr('for', cbx_name);
    }

    function listify(selector) 
    {
        $(selector).each(function(index, val) {
            // Give all checkboxes the same ID as the name attribute
            var cbx_name = $(this).find('input[type=checkbox]').attr('name');
            $(this).find('input[type=checkbox]').attr('id', cbx_name);

            // Wrap the contents of the <li> with a <label>
            var content = $(this).html().replace('(<span', '<span');
            content = content.replace('span>)','span><small>');
            content = content + "</small>";
            $(this).html('<label for="' + cbx_name + '">' + content + '</label>');

            // Pop the checkbox out of the label (for CSS selecting reasons)
            var cbx = $(this).find('input[type=checkbox]');
            $(this).prepend(cbx);
        });
        $('li input[type=checkbox]').hide();


    }

*/

});
