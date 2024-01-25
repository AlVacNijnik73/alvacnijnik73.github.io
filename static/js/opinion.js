let RedOp=128;
let BlackOp=128;
let GreenOp=128;
let BlueOp=128;
let val2='';



const btn_opinion=document.querySelector('.op');
const Opinion=document.querySelector('.opinion');

const inpNameOpinion=document.querySelector('.inp-name-opinion');//Блок input
const btn_inp_name=document.querySelector('.btn-inp-name');// Кнопка "Ok"

const btn_analiz=document.querySelector('.analiz');
const div_analiz=document.querySelector('.div-analiz');

const LegendOp=document.querySelector('.legend-op');
const LegendImportance=document.querySelector('.legend-importance');
const LegendPositive=document.querySelector('.legend-positive');
const LegendCompetence=document.querySelector('.legend-сompetence');
const LegendIr=document.querySelector('.legend-ir');

//--Кнопка "Оценить мнение"
btn_opinion.addEventListener('click',
    ()=>{
        let list = document.querySelectorAll('.field>.flex');
        console.log(list);
        for(val of list){ val.classList.remove('flex'); val.classList.add('none'); Opinion.classList.add('flex'); btn_next.classList.remove('flex'); btn_next.classList.add('none'); btn_back.classList.add('none'); btn_back.classList.remove('flex');  document.querySelector('.accordion-item_input').checked=false;}
        document.querySelector('.color_07').value=128;
        document.querySelector('.color_08').value=128;
        document.querySelector('.color_09').value=128;
        document.querySelector('.color_10').value=128;
        document.querySelector('.inp-name-opinion').value='';
        LegendOp.innerText="Оцени мнение Nickname";
        LegendImportance.innerText='Оцени значение вопроса для Nickname';
        LegendPositive.innerText='Оцени важность позитива для Nickname';
        LegendCompetence.innerText='Оцени компетентность Nickname';
        LegendIr.innerText='Оцени иррациональность, плутовство Nickname';
    }
)


//--Кнопка "Ok"
btn_inp_name.onclick = ()=>{
    let val1 = inpNameOpinion.value;
    LegendOp.innerText="Оцени мнение "+val1;
    LegendImportance.innerText='Оцени значение вопроса для '+val1;
    LegendPositive.innerText='Оцени важность позитива для '+val1;
    LegendCompetence.innerText='Оцени компетентность '+val1;
    LegendIr.innerText='Оцени иррациональность, плутовство '+val1;
    val2=val1;
    val1="";
}
document.getElementById("color_07").addEventListener("change", pos_or_07 => {
    document.documentElement.style.setProperty("--colorOpRed", pos_or_07.target.value);
    RedOp = pos_or_07.target.value;
    console.log(RedOp);
});

document.getElementById("color_08").addEventListener("change", pos_or_08 => {
    document.documentElement.style.setProperty("--colorOpBlack", pos_or_08.target.value);
    BlackOp = pos_or_08.target.value;
    console.log(BlackOp);
});

document.getElementById("color_09").addEventListener("change", pos_or_09 => {
    document.documentElement.style.setProperty("--colorOpGreen", pos_or_09.target.value);
    GreenOp = pos_or_09.target.value;
    console.log(GreenOp);
});

document.getElementById("color_10").addEventListener("change", pos_or_10 => {
    document.documentElement.style.setProperty("--colorOpBlue", pos_or_10.target.value);
    BlueOp = pos_or_10.target.value;
    console.log(BlueOp);
});

// Кнопка Анализировать
btn_analiz.addEventListener('click',
    ()=>{
        let list = document.querySelectorAll('.field>.flex');
        for(val of list){ val.classList.remove('flex'); val.classList.add('none'); div_analiz.classList.add('flex'); btn_next.classList.remove('flex'); btn_next.classList.add('none'); btn_back.classList.add('none'); btn_back.classList.remove('flex');  document.querySelector('.accordion-item_input').checked=false;}
      
        document.querySelector('.part').style.fill='rgb('+((RedOp+BlackOp*(BlackOp>171?0.8:1))*0.5)+','+((GreenOp+BlackOp)*0.5)+','+((BlueOp+BlackOp)*0.5)+','+(RedOp*(GreenOp<85?0.8:1)*(BlueOp>171?0.8:1))/256+')';
        let tx1="важность проблемы для "+(val2!=""?val2:"Nickname ")+" - "+Math.trunc((RedOp*100)/256)+"%;\r\n";
        let tx2="позитивный настрой "+(val2!=""?val2:"Nickname ")+" - "+Math.trunc((BlackOp*100)/256)+"%;\r\n";
        let tx3="компетентность "+(val2!=""?val2:"Nickname ")+" - "+Math.trunc((GreenOp*100)/256)+"%;\r\n";
        let tx4="склонность ко лжи и обману "+(val2!=""?val2:"Nickname ")+" - "+Math.trunc((BlueOp*100)/256)+"%;\r\n";
        document.querySelector('.svg').dataset.tooltip=tx1+tx2+tx3+"\r\n"+tx4;
    },


)


