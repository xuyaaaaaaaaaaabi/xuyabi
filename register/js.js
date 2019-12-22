var t=null;
var t2=null;
var t3=null;

function zhengze1(str)
{
    
    var reg=/^([a-zA-Z0-9_-]+)\@([a-zA-Z0-9]+)(\.[a-z]{2,3})$/;
    var ret=str.search(reg);
    if(ret==-1)
    {
        return false;
    }
    return true;
}
function zhengze2(str)
{
    var buxing=/^.{9,15}$/;
    
    var jichu;
    jichu=str.search(buxing);
    
    if(jichu==-1)
    {
        
        return -1;//-1代表根本什么也不满足厚
    }
    else
    {
        var ruo1=/[A-Z]/g;//至少有三个大写字母!!!注意要整体遍历满足
        var ruo2=/[#&*?]+/;//至少一个特殊字符
       // var ruo3=/.{9,10}/;//密码9-10位数
        var zhong1=/[2-8]/g;//数字在2-8之间
        var zhong2=/\d/g;//密码是数字
       // var gao1=/.{14,15}/;//密码14-15位
        var gao2=/([A-Za-z2-8#&*?])[^\1]*\1/;//任意字符只出现0次或者1次
        var cnt=0;//计数
        var pipei1,pipei2;
        var z1,z2;
        var g1="123";
        var ret;
        while(ret=ruo1.exec(str))
        {
            cnt++;
        }
        pipei1=str.search(ruo2);
        if((cnt>=3)&&(pipei1!=-1))
        {
            z1=str.match(zhong1);
            z2=str.match(zhong2);
            if(z1.length==z2.length)
            {
                if(!gao2.test(str))
                {
                    return 2;//高级
                }
                else
                {
                    return 1;//中级;
                }
            }
            else
            {
                return 8;//低级
            }
            
        }
        else
        {
            return 0;//0代表长度满足，但是不满足必需条件
        }
    }
}

function xingming()
{
    var a=document.getElementsByClassName("inin");
    var b=document.getElementsByClassName("tishi");
    var hi=document.getElementById("you");
    if(a[0].value=="请输入鸡的邮箱")
    {
        a[0].value="";
    } 
    b[0].style.display="inline";
    t2=setInterval(function ()
    {
        var jieguo=zhengze1(a[0].value);
        if(jieguo==false)
        {
            hi.style.display="inline";
        }
        else
        {
            hi.style.display="none";
        }
    },10);
}

function mima()
{
    var a=document.getElementsByClassName("inin");
    var b=document.getElementsByClassName("tishii");
    var c=document.getElementById("qiangdu");
    var d=document.getElementById("qiangdu2");
    /*if(a[1].value=="请输入鸡的密码")
    {
        a[1].value="";
    }*/
    b[0].style.display="inline";
    c.style.display="inline";
    d.style.display="inline";
    t3=setInterval(function()
    {
        a=document.getElementsByClassName("inin");
        var jg=zhengze2(a[1].value);
        if(jg==-1)
        {
            d.innerHTML="你给我好好读读要求厚，真素看不下去惹";
        }
        else if(jg==0)
        {
            d.innerHTML="小婊贝，至少要有三个大写字母且?#&*四个要至少宠幸一个哦";
        }
        else if(jg==8)
        {
            d.innerHTML="低菊🏵(宝贝，这种密码还想搞基？？？)";
        }
        else if(jg==1)
        {
            d.innerHTML="中菊💮(是我逼太紧了🐎，再争气一点就是高级了厚)";
        }
        else if(jg==2)
        {
            d.innerHTML=("高菊🌼(omg,我可以，小哥哥快拉我进鸡笼)");
        }
    },30)
    
}

function mima2()
{
    var a=document.getElementsByClassName("inin");
    var b=document.getElementsByClassName("ininn");
    var c=document.getElementById("buyiyang");
    if(b[0].value=="请再次输入鸡的密码")
    {
        b[0].value="";
    }
    t=setInterval(function()
    {
        if(a[1].value==b[0].value)
    {
        c.style.display="none";
    }
    else
    {
        c.style.display="inline";
    }
    }
    ,30)
}

function zhuce()
{ 
    var a=document.getElementsByClassName("inin");
    var b=zhengze1(a[0].value);
    var c=zhengze2(a[1].value);
    var f=document.getElementsByClassName("ininn");
    var d=false;
    if(a[1].value==f[0].value)
    {
        d==true;
    }
    if(b&&c>=1&&d)
    {
        var q=confirm("真的完成注册了🐎？？");
        if(q==true)
        {
            clearInterval(t);
            clearInterval(t2);
            clearInterval(t3);
            alert("注册成功了小婊贝！！");
            window.location.reload();
        }
    }
    else
    {
        if(b==false&&c<1)
        {
            alert("邮箱📫密码格式都不对，你是什么野路子的🐔？还想飞上枝头变凤凰？真素低菊");
        }
        else if(b==false)
        {
            alert("邮箱📫格式错了厚，你在想什么厚，这么简单都错了");
        }
        else if(c<1)
        {
            alert("给本宫好好检查你的密码厚，真素看不下去了🦃");
        }
        else if(!d)
        {
            alert("没看见提示吗，两次密码不一样都贴到你的脸上了厚，真素低菊");
        }
    }
}



function  anjian1()
{
    var a=document.getElementsByClassName("anjian");
    var b=document.getElementsByClassName("inin");
    if(a[0].value=="显示密码")
    {
        a[0].value="不显示密码";
        b[1].type="text";
    }
    else if(a[0].value=="不显示密码")
    {
        a[0].value="显示密码";
        b[1].type="password";
    }
}
function  anjian2()
{
    var a=document.getElementsByClassName("anjian");
    var b=document.getElementsByClassName("ininn");
    if(a[1].value=="显示密码")
    {
        a[1].value="不显示密码";
        b[0].type="text";
    }
    else if(a[1].value=="不显示密码")
    {
        a[1].value="显示密码";
        b[0].type="password";
    }
}

var shijian1,shijian2;
var op=0;
function xianshen()
{
    clearInterval(shijian2);
    op=0;
    var a=document.getElementById("yinshen");
    shijian1=setInterval(function()
    {
        a.style.opacity=op;
        op+=0.01;
        if(a.style.opacity==1)
        {
            clearInterval(shijian1);
        }
    },5)
}
function lishen()
{
    clearInterval(shijian1);
    op=1;
    var a=document.getElementById("yinshen");
    shijian2=setInterval(function()
    {
        a.style.opacity=op;
        op-=0.01;
        if(a.style.opacity==0)
        {
            clearInterval(shijian2);
        }
    },5)
}