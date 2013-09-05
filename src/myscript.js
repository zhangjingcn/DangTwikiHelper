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
        if(type==1 || type==2 || type==3 || type==4 || type==8)
        {
            inserttitle(type);
        }
        else if(type==5){
            insertlink1();
        }
        else if(type == 7){
            insertTable1();
        }
        else if(type==9){
            insertVerbatim();
        }
    });
    jQuery('#icon_new').live("click", function() {
        insertIcon(1);
    });
    jQuery('#icon_update').live("click", function() {
        insertIcon(2);
    });
    jQuery('#icon_todo').live("click", function() {
        insertIcon(3);
    });
    jQuery('#icon_done').live("click", function() {
        insertIcon(4);
    });
    jQuery('#icon_closed').live("click", function() {
        insertIcon(5);
    });
        jQuery('#icon_minus').live("click", function() {
        insertIcon(6);
    });
    jQuery('#icon_add').live("click", function() {
        insertIcon(7);
    });
    jQuery('#icon_chicono').live("click", function() {
        insertIcon(8);
    });
    jQuery('#icon_chicoyes').live("click", function() {
        insertIcon(9);
    });
    jQuery('#icon_start').live("click", function() {
        insertIcon(10);
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
function showTitle(id)
{
    type=id;
    jQuery("#tag_box").html("");
    var sb = new StringBuilder();
    sb.append("<div style=\"width:410px;\" class=\"order_list_pop\">");
    sb.append("<div class=\"head\">");
    sb.append("<div class=\"title\">增加"+id+"级标题</div>");
    sb.append("</div>");
    sb.append("<div class=\"close\"></div>");
    sb.append("<div class=\"body\">");
    sb.append("<div class=\"c\"><input type=\"text\" class=\"text\" id=\"tag_box_input\" class=\"aligncenter\" /></div>");
    sb.append("<div class=\"t\">标题：</div>");
    sb.append("<div class=\"button_box\"><input type=\"button\" class=\"btn_or\" value=\"确定\"><input type=\"button\" class=\"btn_gr\" value=\"取消\"></div>");
    sb.append("</div>");
    sb.append("</div>");
    jQuery("#tag_box").html(sb.getString());
    postionWindow();
    jQuery("#tag_box").show();
}
function showlink1()
{
    type=5;
    jQuery("#tag_box").html("");
    var sb = new StringBuilder();
    sb.append("<div style=\"width:410px;\" class=\"order_list_pop\">");
    sb.append("<div class=\"head\">");
    sb.append("<div class=\"title\">增加链接</div>");
    sb.append("</div>");
    sb.append("<div class=\"close\"></div>");
    sb.append("<div class=\"body\">");
    sb.append("<div class=\"c\"><input type=\"text\" class=\"text\" id=\"tag_box_input_1\" class=\"aligncenter\" /></div>");
    sb.append("<div class=\"t\">href：</div>");
        sb.append("<div class=\"c\"><input type=\"text\" class=\"text\" id=\"tag_box_input_2\" class=\"aligncenter\" /></div>");
    sb.append("<div class=\"t\">text：</div>");
    sb.append("<div class=\"button_box\"><input type=\"button\" class=\"btn_or\" value=\"确定\"><input type=\"button\" class=\"btn_gr\" value=\"取消\"></div>");
    sb.append("</div>");
    sb.append("</div>");
    jQuery("#tag_box").html(sb.getString());
    postionWindow();
    jQuery("#tag_box").show();
}
function showTable1()
{
    type=7;
    jQuery("#tag_box").html("");
    var sb = new StringBuilder();
    sb.append("<div style=\"width:410px;\" class=\"order_list_pop\">");
    sb.append("<div class=\"head\">");
    sb.append("<div class=\"title\">增加表格</div>");
    sb.append("</div>");
    sb.append("<div class=\"close\"></div>");
    sb.append("<div class=\"body\">");
    sb.append("<div class=\"c\"><input type=\"text\" class=\"text\" id=\"tag_box_input_1\" class=\"aligncenter\" /></div>");
    sb.append("<div class=\"t\">行：</div>");
        sb.append("<div class=\"c\"><input type=\"text\" class=\"text\" id=\"tag_box_input_2\" class=\"aligncenter\" /></div>");
    sb.append("<div class=\"t\">列：</div>");
    sb.append("<div class=\"button_box\"><input type=\"button\" class=\"btn_or\" value=\"确定\"><input type=\"button\" class=\"btn_gr\" value=\"取消\"></div>");
    sb.append("</div>");
    sb.append("</div>");
    jQuery("#tag_box").html(sb.getString());
    postionWindow();
    jQuery("#tag_box").show();
}
function showVerbatim()
{
    type=9;
    jQuery("#tag_box").html("");
    var sb = new StringBuilder();
    sb.append("<div style=\"width:410px;\" class=\"order_list_pop\">");
    sb.append("<div class=\"head\">");
    sb.append("<div class=\"title\">增加代码</div>");
    sb.append("</div>");
    sb.append("<div class=\"close\"></div>");
    sb.append("<div class=\"body\">");
     sb.append("<div class=\"c\"><textarea id=\"tag_box_input\"></textarea></div>");
     sb.append("<div class=\"t\">code：</div>");
    sb.append("<div class=\"button_box\"><input type=\"button\" class=\"btn_or\" value=\"确定\"><input type=\"button\" class=\"btn_gr\" value=\"取消\"></div>");
    sb.append("</div>");
    sb.append("</div>");
    jQuery("#tag_box").html(sb.getString());
    postionWindow();
    jQuery("#tag_box").show();
}
function showIcon()
{
    jQuery("#tag_box").html("");
    var sb = new StringBuilder();
    sb.append("<div style=\"width:410px;\" class=\"order_list_pop\">");
    sb.append("<div class=\"head\">");
    sb.append("<div class=\"title\">icon</div>");
    sb.append("</div>");
    sb.append("<div class=\"close\"></div>");
    sb.append("<div class=\"body\">");
    sb.append("<p><a id='icon_new'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/new.gif'/></a><a id='icon_update'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/updated.gif'/></a><a id='icon_todo'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/todo.gif'/></a><a id='icon_done'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/done.gif'/></a><a id='icon_closed'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/closed.gif'/></a></p>");
    sb.append("<p><a id='icon_minus'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/minus.gif'/></a><a id='icon_add'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/plus.gif'/></a><a id='icon_chicono'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/choice-no.gif'/></a><a id='icon_chicoyes'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/choice-yes.gif'/></a><a id='icon_start'><img src='http://twiki.dangdang.com/twiki/pub/TWiki/TWikiDocGraphics/starred.gif'/></a></p>");
    sb.append("</div>");
    sb.append("</div>");
    jQuery("#tag_box").html(sb.getString());
    postionWindow();
    jQuery("#tag_box").show();
}
function showAbout()
{
    jQuery("#tag_box").html("");
    var sb = new StringBuilder();
    sb.append("<div style=\"width:410px;\" class=\"order_list_pop\">");
    sb.append("<div class=\"head\">");
    sb.append("<div class=\"title\">关于</div>");
    sb.append("</div>");
    sb.append("<div class=\"close\"></div>");
    sb.append("<div class=\"body\">");
    sb.append("<p>contact:zhangjing@dangdang.com</p>");
    sb.append("<div class=\"button_box\"><input type=\"button\" class=\"btn_gr\" value=\"确定\"></div>");
    sb.append("</div>");
    sb.append("</div>");
    jQuery("#tag_box").html(sb.getString());
    postionWindow();
    jQuery("#tag_box").show();
}
function inserttitle()
{
    var content = $("#tag_box_input").val();
    if(type == 1)
        $('#topic').insertAtCaret('---+++'+content+'\n');
    else if(type == 2)
        $('#topic').insertAtCaret('   * '+content+'\n');
    else if(type == 3)
        $('#topic').insertAtCaret('      * '+content+'\n');
    else if(type == 4)
        $('#topic').insertAtCaret('         * '+content+'\n');
    else if(type == 8)
        $('#topic').insertAtCaret('1. '+content+'\n');
    closeWindow();
}
function insertlink1(){
    var href = $("#tag_box_input_1").val();
    var text = $("#tag_box_input_2").val();
    $('#topic').insertAtCaret('[['+href+']['+text+']]\n');
    closeWindow();
}
function insertmenu1(){
    $('#topic').insertAtCaret('%TOC%\n');
    closeWindow();
}
function insertVerbatim(){
    var content = $("#tag_box_input").val();
    $('#topic').insertAtCaret('<verbatim>\n'+content+'\n</verbatim>\n');
    closeWindow();
}
function insertTable1()
{
    var field = $("#tag_box_input_1").val();
    var line = $("#tag_box_input_2").val();
    for(var i = 0;i<field;i++){
        for(var j= 0;j<=line;j++){
            if(j == 0){
                $('#topic').insertAtCaret('   ');
            }
            $('#topic').insertAtCaret('|  ');      
        }
        $('#topic').insertAtCaret('\n');
    }
    closeWindow();
}
function insertIcon(id){
    if(id == 1){
        $('#topic').insertAtCaret('%N%');
    }
    else if(id == 2){
        $('#topic').insertAtCaret('%U%');
    }
    else if(id == 3){
        $('#topic').insertAtCaret('<img src="%ICONURL{todo}%" width="37" height="16" alt="TODO" border="0" />');
    }
    else if(id == 4){
        $('#topic').insertAtCaret('<img src="%ICONURL{done}%" width="37" height="16" alt="Done" border="0" />');
    }
    else if(id == 5){
        $('#topic').insertAtCaret('<img src="%ICONURL{closed}%" width="48" height="16" alt="Closed" border="0" />');
    }
    else if(id == 6){
        $('#topic').insertAtCaret('%ICON{minus}%');
    }
    else if(id == 7){
        $('#topic').insertAtCaret('%ICON{plus}%');
    }
    else if(id == 8){
        $('#topic').insertAtCaret('%ICON{choice-no}%');
    }
    else if(id == 9){
        $('#topic').insertAtCaret('%Y%');
    }
    else if(id == 10){
        $('#topic').insertAtCaret('%S%');
    }
    closeWindow();
}