const aScript = document.createElement("script");
aScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js");
document.body.append(aScript);
aScript.onload=()=>{
$(document).ready(function(){
$('body').addClass('xepo_ads');
});
$(document).on('click','.xepo_ads',function(e){
$(this).removeClass('xepo_ads');
//ubah google dengan ads direct link
//window.open('https://www.highperformancecpmgate.com/arwgc4a3gj?key=32e55ecf41ec9483a4c30821e28dcfeb', '_blank');
window.open('https://www.effectiveratecpm.com/ysvks7g42e?key=2aeac5900a9f0bd8cd863490958fe863', '_blank');
});
};
