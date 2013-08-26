(function($){
	$.fn.extend({
		insertAtCaret: function(myValue){
			var $t=$(this)[0];
			if (document.selection) {
				this.focus();
				sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
			}
			else 
				if ($t.selectionStart || $t.selectionStart == '0') {
					var startPos = $t.selectionStart;
					var endPos = $t.selectionEnd;
					var scrollTop = $t.scrollTop;
					$t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
					this.focus();
					$t.selectionStart = startPos + myValue.length;
					$t.selectionEnd = startPos + myValue.length;
					$t.scrollTop = scrollTop;
				}
				else {
					this.value += myValue;
					this.focus();
				}
		}
	})	
})(jQuery);
$("body").append("<div id='tagbox'></div>");
function diag()
{
    var str=prompt("请输入内容","");
    return str;
}
function inserttitle1()
{
	var content = diag();
	$('#topic').insertAtCaret('---+++'+content+'\n');
}
function inserttitle2()
{
	var content = diag();
	$('#topic').insertAtCaret('   * '+content+'\n');
}
function inserttitle3()
{
	var content = diag();
	$('#topic').insertAtCaret('      * '+content+'\n');
}
function inserttitle4()
{
	var content = diag();
	$('#topic').insertAtCaret('         * '+content+'\n');
}
function insert()
{
	var content = diag();
	$('#topic').insertAtCaret('<verbatim>\r\n'+content+'\r\n</verbatim>\r');
}