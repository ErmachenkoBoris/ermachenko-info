let interval_id=0;
const greetings ="Hi, my name is Boris";
const greetingsArr = greetings.split('');

const quote2 ="I told you :)";
const quote2Arr = quote2.split('');
let greetingAnimateEngine = (function(
    ){
        let currentLetter = 0;
        return function(){
            if(currentLetter===greetingsArr.length) return 0;
            let div = document.createElement('div');
            div.className = "letter";
            div.innerHTML = `${greetingsArr[currentLetter]}`;
            document.getElementById("greetingsLetters").append(div);
            currentLetter++;
        }
    })();
let uote2AnimateEngine = (function(
        ){
            let currentLetter = 0;
            return function(){
                if(currentLetter===quote2Arr.length) return 0;
                let div = document.createElement('div');
                div.className = "letter";
                div.innerHTML = `${quote2Arr[currentLetter]}`;
                document.getElementById("quote2").append(div);
                currentLetter++;
            }
        })();
const speedWriting = 200;
window.onload=function() {
        if (!interval_id){
            interval_id = setInterval(greetingAnimateEngine, speedWriting);
        }
    };

window.onfocus=function() {
    if (!interval_id)
        interval_id = setInterval(greetingAnimateEngine, speedWriting);
};

window.onblur = function() {
    clearInterval(interval_id);
    interval_id = 0;
};
let i = 0;
function writeQuote2(){
    setInterval(uote2AnimateEngine, speedWriting);
}

