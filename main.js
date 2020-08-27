let toggleNavStatus = false;

let toggle = function(){
    let getLeftNav = document.querySelector(".left-nav");
    let getLeftNavUl = document.querySelector(".left-nav ul");
    let getLeftNavLinks = document.querySelectorAll(".left-nav a");
    let getButtonColor = document.querySelector(".btn-bg");
    
    if(toggleNavStatus === false){
        getLeftNavUl.style.visibility="visible";
        getLeftNav.style.width="250px";
        getButtonColor.style.opacity="0.5";
        
        let arrayLength = getLeftNavLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getLeftNavLinks[i];
        }
        toggleNavStatus = true;
    }
        else if(toggleNavStatus === true){
        getLeftNavUl.style.visibility="hidden";
        getLeftNav.style.width="50px";
        getButtonColor.style.opacity="1";
            
//        let arrayLength = getLeftNavLinks.length;
//        for (let i = 0; i < arrayLength; i++){
//            getLeftNavLinks[i];
//        }
        
        toggleNavStatus = false;
    }
}
