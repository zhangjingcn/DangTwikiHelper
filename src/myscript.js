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
    });
    jQuery('.close').live("click", function() {
        closeWindow();
    });
    jQuery('.btn_or').live("click", function() {
        if(type==1)
        {
            inserttitle1();
        }
    });
    jQuery('.btn_gr').live("click", function() {
        closeWindow();
    });
    $('.order_list_pop .close').hover(function () {
        $(this).css('background-position', 'right -191px');
    }, function () {
        $(this).css('background-position', 'right -168px');
    });
})(jQuery);
var type = 0;
$("body").append("<div id='tag_box' style=\"position:absolute;width:410px;\"></div>");
var StringBuilder = function() {
    this.cache = [];
    if (arguments.length)
            this.append.apply(this, arguments);
};
StringBuilder.prototype = {
    prepend : function() {
            this.cache.splice.apply(this.cache, [].concat
                            .apply([ 0, 0 ], arguments));
            return this;
    },
    append : function() {
            this.cache = this.cache.concat.apply(this.cache, arguments);
            return this;
    },
    toString : function() {
            return this.getString();
    },
    getString : function() {
            return this.cache.join('');
    }
};
function closeWindow() {
    jQuery("#tag_box").hide();
}
function postionWindow() {
    var lin = document.getElementById("tag_box");
    screenwidth = jQuery(window).width();
    screenheight = jQuery(window).height();
    mytop = jQuery(document).scrollTop();
    myleft = jQuery(document).scrollLeft();
    getPosLeft = screenwidth / 2 - 211;
    getPosTop = screenheight / 2 - 124;
    lin.style.left = getPosLeft + myleft + "px";
    lin.style.top = getPosTop + mytop + "px";
}
function showTitle1()
{
    type=1;
    jQuery("#tag_box").html("");
    var sb = new StringBuilder();
    sb.append("<div class=\"order_list_pop\">");
    sb.append("<div class=\"head\">");
    sb.append("<div class=\"title\">增加1级标题</div>");
    sb.append("</div>");
    sb.append("<div class=\"close\"></div>");
    sb.append("<div class=\"body\">");
    sb.append("<div class=\"c\"><input type=\"text\" class=\"text\" id=\"tag_box_input\" class=\"aligncenter\" style=\"width:250px;\"/></div>");
        sb.append("<div class=\"button_box\"><input type=\"button\" class=\"btn_or\" value=\"确定\"><input type=\"button\" class=\"btn_gr\" value=\"取消\"></div>");
    sb.append("</div>");
    sb.append("</div>");
    jQuery("#tag_box").html(sb.getString());
    postionWindow();
    jQuery("#tag_box").show();
}
function inserttitle1()
{
    alert("11");
    var content = $("#tag_box_input").value();
    $('#topic').insertAtCaret('---+++'+content+'\n');
    closeWindow();
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