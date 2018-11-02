
//Zad.1.
var date = new Date();

var helloString = `Hello! Today is ${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    console.log(helloString);

document.getElementById('hello').innerHTML = helloString;


//Zad.2
var array = [1,14,15,-31,5,6,129,9,-21,55];
var minValue = array[0];
var maxValue = array[0];

for(i = 0; i <= array.length +1; i++){
    if(array[i] > maxValue){
        maxValue = array[i];
    }
    if(array[i] < minValue){
        minValue = array[i];
    }
}
console.log(minValue);
console.log(maxValue);

//Zad.3
function numerPesel(){
    var pesel = prompt("Podaj nr PESEL");
    if (pesel !== null && pesel.length === 11){
        var suma = pesel[0]*1 + pesel[1]*3 + pesel[2]*7 +pesel[3]*9 + pesel[4]*1 + pesel[5]*3 + pesel[6]*7 + pesel[7]*9 + pesel[8]*1 + pesel[9]*3;
        suma = suma%10;
        suma = 10-suma;
        controlNumber = suma%10;
        if (pesel[10] == controlNumber){
            alert(`${pesel} jest poprawny`)
        } else{
            alert(`${pesel} nie jest poprawny!`)
        }
    }else{
        alert('Podany PESEL nie ma 11 znaków')
  }
};
