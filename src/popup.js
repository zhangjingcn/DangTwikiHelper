document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#title1').addEventListener('click', title1click);
    document.querySelector('#title2').addEventListener('click', title2click);
    document.querySelector('#title3').addEventListener('click', title3click);
    document.querySelector('#title4').addEventListener('click', title4click);
    document.querySelector('#link1').addEventListener('click', link1click);
    document.querySelector('#menu1').addEventListener('click', menu1click);
    document.querySelector('#table1').addEventListener('click', table1click);
    document.querySelector('#numlist1').addEventListener('click', numlist1click);
    document.querySelector('#verbatim').addEventListener('click', verbatimclick);
    document.querySelector('#icon').addEventListener('click', iconclick);
    document.querySelector('#about').addEventListener('click', aboutclick);
});
function title1click(e)
{
    chrome.tabs.executeScript(null,{code:"showTitle(1);"});
}
function title2click(e)
{
    chrome.tabs.executeScript(null,{code:"showTitle(2);"});
}
function title3click(e)
{
    chrome.tabs.executeScript(null,{code:"showTitle(3);"});
}
function title4click(e)
{
    chrome.tabs.executeScript(null,{code:"showTitle(4);"});
}
function numlist1click(e)
{
    chrome.tabs.executeScript(null,{code:"showTitle(8);"});
}
function link1click(e)
{
    chrome.tabs.executeScript(null,{code:"showlink1();"});
}
function menu1click(e)
{
    chrome.tabs.executeScript(null,{code:"insertmenu1();"});
}
function verbatimclick(e)
{
    chrome.tabs.executeScript(null,{code:"showVerbatim();"});
}
function aboutclick(e)
{
    chrome.tabs.executeScript(null,{code:"showAbout();"});
}
function table1click(e)
{
    chrome.tabs.executeScript(null,{code:"showTable1();"});
}
function iconclick()
{
    chrome.tabs.executeScript(null,{code:"showIcon();"});
}