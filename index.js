
function change_theme(){
    let theme = document.body;
    theme.classList.toggle("dark_theme")
}

var calc_display = document.querySelector('#calculator_display');
var calc_btn = document.querySelectorAll('.btn');

for (item of calc_btn){
    item.addEventListener('click',(e)=>{
       btn_value = e.target.innerText;

       if(btn_value == 'x'){
        btn_value = '*' ;
    }
       calc_display.value+=btn_value;
    });

    function backspace (){
        calc_display.value = calc_display.value.substr(0,calc_display.value.length-1);
    }

    function clear_screen (){
    calc_display.value='';
    }

    function result(){
        calc_display.value = eval(calc_display.value);
    }

    function sin (){
        calc_display.value = Math.sin(calc_display.value);
    }

    function cos (){
        calc_display.value = Math.cos(calc_display.value);
    }

    function tan (){
        calc_display.value = Math.tan(calc_display.value);
    }

    function log (){
        calc_display.value = Math.log(calc_display.value);
    }

    function sqrt (){
        calc_display.value = Math.pow(calc_display.value,2);
    }

    function cube (){
        calc_display.value = Math.pow(calc_display.value,3);
    }

    function root (){
        calc_display.value = Math.sqrt(calc_display.value);
    }

    function cube_root (){
        calc_display.value = Math.cbrt(calc_display.value);
    }

    function pi(){
        calc_display.value = 3.14159265359;
    }

    function e(){
        calc_display.value = 2.71828182846;
    }

    function fact (){
        var i,num=calc_display.value,fact=1;
        for(i=1;i<=num;i++){
            fact = fact*i;
        }
        calc_display.value=fact;
    }

    function ceil(){
        calc_display.value = Math.ceil(calc_display.value);
    }

    function floor(){
        calc_display.value = Math.floor(calc_display.value);
    }

    function round(){
        calc_display.value = Math.round(calc_display.value);
    }

    

   
}