const alarmSubmit = document.getElementById('alarmSubmit');
const alarm = document.getElementById('alarm');

alarmSubmit.addEventListener('click', setalarm);
var audio = new Audio('alarm.mp3');

function ringbell(){
    audio.play();
}

function setalarm(e) {
    e.preventDefault();

    alarmDate = new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}`);

    now = new Date();


    let timetoalarm=alarmDate-now;

    console.log(timetoalarm);

    if(timetoalarm>=0){
        setTimeout(() => {
            console.log("ringing now")
            ringbell();
            
        }, timetoalarm);
    }
    
    

}