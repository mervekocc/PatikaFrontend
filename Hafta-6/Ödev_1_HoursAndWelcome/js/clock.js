// name printing 
let fullname = prompt("Lütfen adınızı giriniz : ")
document.getElementById('myName').innerHTML = fullname;

//hours and day printing
function clockDay() {
  
    let date = new Date();
    let clock = date.toLocaleTimeString('tr-TR')
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day=days[date.getDay()];
   
    document.getElementById("myClock").innerHTML = clock +" "+day  ;
}
// Rerun dateTime function every one second
setInterval(clockDay, 1000); 




