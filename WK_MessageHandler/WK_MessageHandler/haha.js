var footer = document.getElementsByClassName('footer')[0]
var newnode = document.createElement('pfooter')
newnode.innerHTML = "<div style='height:40px;background-color:#f00'></div>"
footer.parentNode.appendChild(newnode)
footer.parentNode.replaceChild(newnode,footer)

/*NSString *jsStr = @"var footer = document.getElementsByClassName(\"footer\")[0]; var newnode=document.createElement(\"pfooter\"); newnode.innerHTML='<div class = \"xhfooter\">  </div>'; footer.parentNode.appendChild(newnode); footer.parentNode.replaceChild(newnode,footer);";*/

function myAlert(){
    alert('哇哈哈哈哈xxxxxx');
}
