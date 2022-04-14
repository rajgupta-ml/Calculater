var Keys = document.getElementsByClassName("same");
const numberShow = document.getElementById("numberShow");
const Show = document.getElementById("show");

var n = 19;
let string = '';
var sol = 0;
for(var i = 0; i < n; i++){
    Keys[i].addEventListener("click", (e) => {
        e.preventDefault();
        var classes = e.target;
        var ide = classes.id;
        if(ide != 'equal' && ide != 'back' && ide != 'ac'){
            string += classes.innerHTML.toString();
            numberShow.innerHTML += classes.innerText.toString();
                if(string[string.length-1] == '+' || string[string.length-1] == '-' || string[string.length-1] == '*' || string[string.length-1] == '/'){
                    if(string.length >= 1 && string[string.length-1] == string[string.length-2]){
                        Show.innerHTML = 'error';
                        return;
                    }
                }
        }
        if(ide == 'equal') Show.innerHTML = eval(string);

      
        if(ide == 'ac'){
            string = '';
            numberShow.innerHTML = '0';
            Show.innerHTML = '0';
        }

        if(ide == 'back'){
            string =  string.slice(0, -1);
            numberShow.innerHTML = string;
            Show.innerHTML = string;
        }
        });
}
