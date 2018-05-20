
var textv=document.getElementById("textbox").value;
var i=0;
var t=-1;
var tea=textv.split("");
var z=2;
var te,me;


function timer()
{document.getElementById('descr').innerHTML="START TYPING!!";
var StartTime= new Date();
var StopTime=setInterval(DisplayTime, 1000);
function DisplayTime()
{  var CurrentTime= new Date();
   var TimeDiff=CurrentTime.getTime()-StartTime.getTime();
   TimeDiff=Math.floor(TimeDiff/1000);
   var ShowTime=(TimeDiff<10)?'0:0':'0:';
   document.getElementById('timerwatch').innerHTML=ShowTime+TimeDiff;
   
   if(t==0)
   {clearInterval(StopTime);
    read();}
}

function read()
{
var CurrentTime= new Date();
var TimeDiff=CurrentTime.getTime()-StartTime.getTime();
TimeDiff=Math.floor(TimeDiff/1000);
var ar=textv.split(" ");
var l=ar.length;
var speed=l/TimeDiff;
document.getElementById('timerwatch').innerHTML="Your Speed is "+speed+" Words/S.";
}


}




function StopUpdatingTime()
{
document.getElementById('descr').innerHTML="TIME OVER!!";
document.getElementById("input").disabled = true;
}




function Speed()
{input.addEventListener('keydown', function (event) 
  {
  te=String.fromCharCode(event.keyCode);
  me=te.toLowerCase();

   
    if ((tea[i] !=me)) 
   {if(tea[i]=='.'&& event.keyCode==190||(tea[i]==','&& event.keyCode==188))
     {var inputText=document.getElementById("input").value;
     var arr=inputText.split("");i++;
          if(arr.length==(textv.length-1))
              {StopUpdatingTime();t=0;z=1;}
          }

     else{
     
     event.preventDefault();z=0;
     return false;
     }
   }

     else
    {var inputText=document.getElementById("input").value;
     var arr=inputText.split("");i++;
          if(arr.length==(textv.length-1))
              {StopUpdatingTime();t=0;z=1;}
          }

});



}



