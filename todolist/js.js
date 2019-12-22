var t=null;
var q=null;

function huiche()
{
    alert("不要按回车了，这个功能我电脑上真的没有");
}

window.onload=function()
{
    var qu=JSON.parse(localStorage.getItem("value"));
    var qu2=JSON.parse(localStorage.getItem("value2"));
    var l=qu.length;
    var len=qu2.length;
    var a=document.getElementById("labelc");
    var b=document.getElementById("labelcc");
    for(let i=0;i<l;i++)
    {    
        var newnode1=document.createElement("ul");
        newnode1.className="ulcc";
        var newnode2=document.createElement("input");
        newnode2.type="checkbox";
        newnode2.className="checkboxc";
        var newnode3=document.createElement("input");
        newnode3.type="text";
        newnode3.className="textcss";
        newnode3.onclick="huiche()";
        newnode3.value=qu[i];
        newnode1.appendChild(newnode2);
        newnode1.appendChild(newnode3);
        a.appendChild(newnode1);
    }
    for(let j=0;j<len;j++)
    {
        var newnode1=document.createElement("ul");
        newnode1.className="ulc";
        var newnode2=document.createElement("input");
        newnode2.type="checkbox";
        newnode2.className="check";
        var newnode3=document.createElement("input");
        newnode3.type="text";
        newnode3.className="text";
        newnode3.value=qu2[j];
        newnode3.onclick="huiche()";
        newnode1.appendChild(newnode2);
        newnode1.appendChild(newnode3);
        b.appendChild(newnode1);
    }
    alert("退出前记得要在编辑中寻找保存，以防止数据丢失哦~~~~");
}

function guanbi()
{
    var a=confirm("确定要做这么多事情🐎????");
    if(a==true)
    {
        var b=document.getElementsByClassName("textcss");//先删除啥也没写的
        var el=document.getElementsByClassName("text");
        var length=b.length;
        var le=el.length;
        var varr=new Array();
        var arr=new Array();
        for(let i=0;i<length;i++)
        {
            if(b[i].value=="")
            {
                var c=b[i].parentNode;
                c.parentNode.removeChild(c);
                length--;
                i--;
            }
            else
            {
                varr[i]=b[i].value;
            }
        }
        for(let j=0;j<le;j++)
        {
            arr[j]=el[j].value;
        }
        localStorage.setItem('value',JSON.stringify(varr));
        localStorage.setItem('value2',JSON.stringify(arr));
        window.location.reload();
    }
}

function clear1()
{
    var a=confirm("真的要把自己刚写好的表单清空🐎qwq");
    if(a==true)
    {
        var b=document.getElementsByClassName("ulcc");
        var len=b.length;
        for(let i=0;i<len;)
        {
            var q=b[i].parentNode;
            q.removeChild(b[i]);
            len--;
        }
    }
}

function clear2()
{
    var a=confirm("真的要请空自己这么长时间的劳动成果🐎qwq");
    if(a==true)
    {
        var b=document.getElementsByClassName("ulc");
        var len=b.length;
        for(let i=0;i<len;)
        {
            var q=b[i].parentNode;
            q.removeChild(b[i]);
            len--;
        }
    }
}

function done()
{
    var a=document.getElementById("labelc");
    var b=document.getElementById("labelcc");
    var d=document.getElementsByClassName("checkboxc");
    var tc=document.getElementsByClassName("textcss");
    var len=d.length;
    for(let i=0;i<len;i++)
    {
        if(d[i].checked==true)
        {
            if(tc[i].value!="")
            {
                var newnode1=document.createElement("ul");
                newnode1.className="ulc";
                var newnode2=document.createElement("input");
                newnode2.type="checkbox";
                newnode2.className="check";
                var newnode3=document.createElement("input");
                newnode3.type="text";
                newnode3.className="text";
                newnode3.value=tc[i].value;
                newnode3.onclick="huiche()";
                newnode1.appendChild(newnode2);
                newnode1.appendChild(newnode3);
                b.appendChild(newnode1);
            }
            var p=d[i].parentNode;
            a.removeChild(p);
            len--;
            i--;
        }
    }
}

function redone()
{
    var a=document.getElementById("labelcc");
    var b=document.getElementById("labelc");
    var d=document.getElementsByClassName("check");
    var tc=document.getElementsByClassName("text");
    var len=d.length;
    for(let i=0;i<len;i++)
    {
        if(d[i].checked==true)
        {
            var newnode1=document.createElement("ul");
            newnode1.className="ulcc";
            var newnode2=document.createElement("input");
            newnode2.type="checkbox";
            newnode2.className="checkboxc";
            var newnode3=document.createElement("input");
            newnode3.type="text";
            newnode3.className="textcss";
            newnode3.value=tc[i].value;
            newnode3.onclick="huiche()";
            newnode1.appendChild(newnode2);
            newnode1.appendChild(newnode3);
            b.appendChild(newnode1);
            var p=d[i].parentNode;
            a.removeChild(p);
            len--;
            i--;
        }
    }
}

function startMove()
{
    var b=document.getElementsByClassName("ulc");
    var last=document.getElementsByClassName("bianji");
    var e=document.getElementsByClassName("bianjii");
    var hh=document.getElementsByClassName("hrs");
    if(e[0].value=="Edit")
    {
        e[0].value="UnEdit";
        hh[1].style.marginTop="60px";
        /*for(let i=0;i<b.length;i++)
        {
            b[i].style.left=-96+"px";
            left=parseInt(b[i].style.left);
            t=setInterval(function ()
            {
                left+=20;
                b[i].style.left=left+"px";
                if(left== 4)
                {
                    clearInterval(t);
                }
            },1000)
        }*/
        last[0].style.width="100px";
        last[1].style.width="100px"; 
        last[2].style.width="100px";
        var height=0;
        q=setInterval(function ()
            {
                last[0].style.height=height+"px";
                last[1].style.height=height+"px";
                last[2].style.height=height+"px";
                if(height==50)
                {
                    clearInterval(q);
                }
                height+=10;
            },20)
    }
    else
    {
        e[0].value="Edit";
        var height=50;
        q=setInterval(function ()
            {
                last[0].style.height=height+"px";
                last[1].style.height=height+"px";
                last[2].style.height=height+"px";
                if(height==0)
                {
                    clearInterval(q);
                }
                height-=10;
            },20)
        last[0].style.width="0px";
        last[1].style.width="0px"; 
        last[2].style.width="0px";
        hh[1].style.marginTop="0px";
    }
    
}

function  add()
{
    
    var a=document.getElementById("labelc");
    var newnode1=document.createElement("ul");
    newnode1.className="ulcc";
    var newnode2=document.createElement("input");
    newnode2.type="checkbox";
    newnode2.className="checkboxc";
    var newnode3=document.createElement("input");
    newnode3.type="text";
    newnode3.className="textcss";
    newnode3.onclick="huiche()";
    newnode1.appendChild(newnode2);
    newnode1.appendChild(newnode3);
    a.appendChild(newnode1);
}

function del()
{

    var tanchu=confirm("确定要删除已勾选的选项🐎？？？");
    if(tanchu==true)
    {
        var a=document.getElementById("labelc");
        var b=document.getElementsByClassName("checkboxc");
        var len=b.length;
        for(let i=0;i<len;i++)
        {
            if(b[i].checked==true)
            {
                var c=b[i].parentNode;
                c.parentNode.removeChild(c);
                len--;
                i--;
            }
        }
    }
}

function save()
{
    var a=confirm("确定要做这么多事情🐎????");
    if(a==true)
    {
        var b=document.getElementsByClassName("textcss");//先删除啥也没写的
        var el=document.getElementsByClassName("text");
        var length=b.length;
        var le=el.length;
        var varr=new Array();
        var arr=new Array();
        for(let i=0;i<length;i++)
        {
            if(b[i].value=="")
            {
                var c=b[i].parentNode;
                c.parentNode.removeChild(c);
                length--;
                i--;
            }
            else
            {
                varr[i]=b[i].value;
            }
        }
        for(let j=0;j<le;j++)
        {
            arr[j]=el[j].value;
        }
        localStorage.setItem('value',JSON.stringify(varr));
        localStorage.setItem('value2',JSON.stringify(arr));
        window.location.reload();
    }

    //worldbreak break all
}