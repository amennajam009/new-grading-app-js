function calculator(){
    var a=parseInt(document.getElementById('one').value);
    var b=parseInt(document.getElementById('two').value);
    var c=parseInt(document.getElementById('three').value);
    var d=parseInt(document.getElementById('four').value);
    var e=parseInt(document.getElementById('five').value);
    
    if(a>100 || b>100 || c>100 || d>100 || e>100){
          alert('Enter the correct number');
        
    }
    else if(a<1 || b<1 || c<1 || d<1 || e<1){
        alert('Enter the correct number');
    }
    else{
        var Obtained=a+b+c+d+e;
        document.getElementById('Obtained').innerHTML=Obtained;
        var per=Obtained/500*100;
        document.getElementById('per').innerHTML=per;
        if(a>30 && b>30 && c>30 && d>30 && e>30){
       document.getElementById('remarks').innerHTML="<span style='color:#229954'>'Pass'</span>";
        }
        else{
            document.getElementById('remarks').innerHTML="<span style='color:#C70039'>'Fail'</span>";
        }
    if(per>=90){
        document.getElementById('grade').innerHTML="<span style='color: #F1C40F'>'A+'</span>";
    }
    else if(per>=70){
        document.getElementById('grade').innerHTML="<span style='color: #F1C40F '>'A'</span>";
    }
    else if(per>=60){
        document.getElementById('grade').innerHTML="<span style='color: #0000ff '>'B'</span>";
    }
    else if(per>=50){
        document.getElementById('grade').innerHTML="<span style='color: #a52a2a '>'C'</span>";
    }
    else if(per>=45){
        document.getElementById('grade').innerHTML="<span style='color: #a52a2a '>'D'</span>";
    }
    
    else{
        document.getElementById('grade').innerHTML="<span style='color: #d40000 '>'E'</span>";
    }
        
    }
}