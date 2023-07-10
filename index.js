let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button') //querySelectorAll() returns all elements that matches a css selector(s)
//querySelectorAll() returns a NodeList
let string = ""; //we will store our result here
let arr = Array.from(buttons); //creating the array from the buttons

arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string); //evaluate(eval()) is an inbuilt function in javascript which will auto evaluate the string
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC' ){ //target property returns the element where the event occurred
            //currentTrarget property returns the element whose event listener triggered the event
            string ="";
            input.value = string;
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1); //this will remove the last character from the string

        }
    
        else{
            string += e.target.innerHTML; //if the clicked button is not '=' then simply we will add the value to the string
            input.value = string;

        }
        


    })
})