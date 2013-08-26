document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#title1').addEventListener('click', title1click);
	document.querySelector('#title2').addEventListener('click', title2click);
	document.querySelector('#title3').addEventListener('click', title3click);
	document.querySelector('#title4').addEventListener('click', title4click);
});
function title1click(e)
{
	chrome.tabs.executeScript(null,{code:"inserttitle1();"});
}
function title2click(e)
{
	chrome.tabs.executeScript(null,{code:"inserttitle2();"});
}
function title3click(e)
{
	chrome.tabs.executeScript(null,{code:"inserttitle3();"});
}
function title4click(e)
{
	chrome.tabs.executeScript(null,{code:"inserttitle4();"});
}