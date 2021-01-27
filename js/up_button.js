window.onload=function(){
    window.onscroll= function(){
        myFunction();
    };



    var upButton = this.document.getElementById("up_button");

    function myFunction(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >= 120){
            upButton.classList.remove("hidden");
        }
        else {
            upButton.classList.add("hidden");
        }
    }
console.log(upButton)
    upButton.addEventListener('click',function(){
        // console.log("!!!");
        window.scroll({ 
            top: 0, // could be negative value
            left: 0, 
            behavior: 'smooth' 
        });
    })

}