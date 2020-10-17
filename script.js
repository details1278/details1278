function dataAlert(){
    var x, date, place, nim, prodi,lineid;

    x=document.getElementById("inputfn").value;
    date=document.getElementById("inputdate").value;
    nim=document.getElementById("inputnim").value;
    prodi=document.getElementById("inputprodi").value;
    place = document.getElementById("inputplace").value;
    lineid =document.getElementById("inputlineid").value;

    if(x==""||date==""||place==""||nim==""||prodi==""||lineid==""){
        if(x==""){
            alert("Please input your full name~~");
        }
        if(nim==""){
            alert("Please input your NIM");
        }
        if(prodi==""){
            alert("Please input your major");
        }
        if(place==""){
            alert("Please input your place of birth");
        }
        if(date==""){
            alert("Please input your date of birth");
        }
        if(lineid==""){
            alert("Please input your LINE ID");
        }
    }else{
        alert("Are you sure the data is correct? "
        + "\nFull Name : "+x
        + "\nNIM : " +nim
        + "\nProgram Studi : " +prodi
        + "\nPlace of Birth : "+place
        + "\nDate of Birth(DD/MM/YYYY) : " +date
        + "\nLINE ID : "+lineid);
    }   
}
function readmore1(){
    var dots = document.getElementById("dots1");
    var moretxt = document.getElementById("more1");
    var btn = document.getElementById("btn1");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read More"
        moretxt.style.display = "none";
    }else{
        dots.style.display = "none";
        btn.innerHTML = "Show Less";
        moretxt.style.display = "inline";
    }
}
function readmore2(){
    var dots = document.getElementById("dots2");
    var moretxt = document.getElementById("more2");
    var btn = document.getElementById("btn2");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read More"
        moretxt.style.display = "none";
    }else{
        dots.style.display = "none";
        btn.innerHTML = "Show Less";
        moretxt.style.display = "inline";
    }
}
function readmore3(){
    var dots = document.getElementById("dots3");
    var moretxt = document.getElementById("more3");
    var btn = document.getElementById("btn3");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read More"
        moretxt.style.display = "none";
    }else{
        dots.style.display = "none";
        btn.innerHTML = "Show Less";
        moretxt.style.display = "inline";
    }
}
function readmore4(){
    var dots = document.getElementById("dots4");
    var moretxt = document.getElementById("more4");
    var btn = document.getElementById("btn4");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read More"
        moretxt.style.display = "none";
    }else{
        dots.style.display = "none";
        btn.innerHTML = "Show Less";
        moretxt.style.display = "inline";
    }
}
function readmore5(){
    var dots = document.getElementById("dots5");
    var moretxt = document.getElementById("more5");
    var btn = document.getElementById("btn5");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read More"
        moretxt.style.display = "none";
    }else{
        dots.style.display = "none";
        btn.innerHTML = "Show Less";
        moretxt.style.display = "inline";
    }
}
function sendMsg(){
    var x, msg, email,emailcheck;

    x = document.getElementById("fullname").value;
    msg = document.getElementById("message").value;
    email = document.getElementById("email").value;

    var emailcheck = email.includes("@",1);
    if(x==""||email==""||emailcheck==false||msg==""){
        if(x == ""){
            alert("Please input your full name~");
        }
        if(email==""){
            alert("Please input your email!");
        }
        if(emailcheck==false){
            alert("Please re-input your email!");
        }
        if(msg==""){
            alert("Please input your message~");
        }
    }else{
        alert("We received your message! "
        + "\nWe will contact you soon! ");
    }
    
}