function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let listaMes = document.getElementById('days');

window.onload = 
function() {
    //1
    for (i = 0; i < decemberDaysList.length; i += 1) {
        let itensDiaMes = document.createElement('li');
        itensDiaMes.innerText = decemberDaysList[i];
        itensDiaMes.className = 'day';
        if ((itensDiaMes.innerText == '24') ||
            (itensDiaMes.innerText == '25') ||
            (itensDiaMes.innerText == '31')){
            itensDiaMes.classList.add('holiday');
        }
        if ((itensDiaMes.innerText == '4') ||
            (itensDiaMes.innerText == '11') ||
            (itensDiaMes.innerText == '18') ||
            (itensDiaMes.innerText == '25')){
            itensDiaMes.classList.add('friday');
        }
        listaMes.appendChild(itensDiaMes);
    }

    //2
    let containerBotao = document.querySelector('.buttons-container');
    let botaoFeriado = document.createElement('button');
    botaoFeriado.id = 'btn-holiday';
    botaoFeriado.innerText = 'Feriados';
    containerBotao.appendChild(botaoFeriado);

    //3
    let diasDoMes = document.querySelectorAll('.day');
    let botaoColoreFeriado = document.getElementById('btn-holiday');
    let checkTrueFeriado = true;
    botaoColoreFeriado.addEventListener('click', function () {
        if (checkTrueFeriado === true) {
            checkTrueFeriado = false;
        for (let i = 0; i < diasDoMes.length; i += 1) {
            if (diasDoMes[i].classList.contains('holiday')) {
                diasDoMes[i].style.backgroundColor = 'darkred';
            }
        }
        } else {
            checkTrueFeriado = true;
            for (let i = 0; i < diasDoMes.length; i += 1) {
                if (diasDoMes[i].classList.contains('holiday')) {
                    diasDoMes[i].style.backgroundColor = 'rgb(238,238,238)';
                }
            }
        }
    });

    //4
    let botaoSexta = document.createElement('button');
    botaoSexta.id = 'btn-friday';
    botaoSexta.innerText = 'Sexta-Feira';
    containerBotao.appendChild(botaoSexta);

    //5
    botaoModificaSexta = document.getElementById('btn-friday')
    let checkTrueSexta = true;
    botaoModificaSexta.addEventListener('click', function() {
        if (checkTrueSexta === true) {
            checkTrueSexta = false;
            for (let i = 0; i < diasDoMes.length; i += 1) {
                if (diasDoMes[i].classList.contains('friday')) {
                    diasDoMes[i].style.color = 'gold';
                }
            }
        } else {
            checkTrueSexta = true;
            for (let i = 0; i < diasDoMes.length; i += 1) {
                if (diasDoMes[i].classList.contains('friday')) {
                    diasDoMes[i].style.color = 'rgb(119,119,119)';
                }
            }
        }
    });

    //6
    const zoomDia = document.querySelector('.days-container');

    zoomDia.addEventListener('mouseover', function(evento) {
        evento.target.style.fontSize = '30px';
    });
    zoomDia.addEventListener('mouseout', function(evento) {
        evento.target.style.fontSize = '20px';
    });
    
    //7
    const tarefas = document.querySelector('.my-tasks');
    let tarefaUm = document.createElement('span');
    tarefaUm.innerText = 'Projetos';
    tarefas.appendChild(tarefaUm);

    //8
    let tarefaCor = document.createElement('div');
    tarefaCor.style.backgroundColor = 'green';
    tarefaCor.className = 'task';
    tarefas.appendChild(tarefaCor);

    //9
    const corSpan = document.querySelector('.my-tasks span');
    const selecaoTarefa = document.querySelector('div .task');
    let checkTrueTarefa = true;
    selecaoTarefa.addEventListener('click', function() {
        if (checkTrueTarefa === true) {
            checkTrueTarefa = false;
            selecaoTarefa.classList.add('selected');
            corSpan.style.color = 'green';
        } else {
            checkTrueTarefa = true;
            selecaoTarefa.classList.remove('selected');
            corSpan.style.color = 'rgb(119,119,119)';
        }
        
        //10
        if (selecaoTarefa.classList.contains('selected')) {
            zoomDia.addEventListener('mouseover', function(evento) {
                if (evento.target.style.color === 'green') {
                    zoomDia.addEventListener('click', function(evento){
                        evento.target.style.color = 'rgb(119,119,119)';
                    });
                } else {
                    zoomDia.addEventListener('click', function(evento) {
                        evento.target.style.color = 'green';
                    });
                }
            });
        }
    });
};