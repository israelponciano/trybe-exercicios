document.getElementById('container').style.backgroundColor = 'snow';

document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'gold';

let coresNoEmergency = document.querySelectorAll('.no-emergency-tasks .emergency-color');
for (let i = 0; i < coresNoEmergency.length; i += 1) {
    coresNoEmergency[i].style.backgroundColor = 'black';
};

let coresEmergency = document.querySelectorAll('.emergency-tasks .emergency-color');
for (let i = 0; i < coresEmergency.length; i += 1) {
    coresEmergency[i].style.backgroundColor = 'purple';
}

document.getElementById('header-container').style.backgroundColor = 'green'


