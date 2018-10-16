function f1()
{
    var tbody = document.getElementsByTagName('body');

    var para = document.createElement('p');
    var div = document.createElement('div');

    var myText = document.createTextNode("Test");
    para.appendChild(myText);
    div.appendChild(para)

    tBody[0].appendChild(div);

}