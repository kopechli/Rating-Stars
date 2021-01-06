function rate(contaner,stars,link){
    link && addFontLink();
    var cntr = document.getElementsByClassName(contaner);
    for(let i=0 ; i< stars ; i++){
        var input = document.createElement("input");
        input.type = "radio";
        input.id = "star"+i;
        input.name = "rate";
        input.value= i;
        input.className = "fa fa-star";
        cntr[0].appendChild(input);
    }
}
function addFontLink(){
    var head = document.getElementsByTagName('HEAD')[0];  
    var newlink = document.createElement('link'); 
    newlink.rel = 'stylesheet';  
    newlink.type = 'text/css'; 
    newlink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'; 
    head.appendChild(newlink);  
}
function starsMonitor(){
    var stars = document.querySelectorAll("input[name='rate']");
    stars.forEach((star) => {
        star.addEventListener("change",()=>{
            checkPrevStars(star.value);
            let rating = {value:parseInt(star.value)+1};
            console.log(rating);
        });
    });
}
function checkPrevStars(current){
  let allStars =  document.getElementsByClassName("rate-stars");
  let starArray = allStars[0].childNodes;
  starArray.forEach((s) =>{s.value-1 < current ? s.classList.add('checked'):s.classList.remove('checked');});
}

