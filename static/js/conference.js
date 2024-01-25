const list_btn = [];
const docGetElById = [];


const btn_conf = document.querySelector(".conf"); //Кнопка Совещание
const conference = document.querySelector(".conference"); //div Совещание
const btn_inp_name_level = document.querySelector(".btn-inp-name-level"); // Кнопка "Ok"
const input_name_part = document.querySelector(".inp-name-part"); //Объект input-name
const level = document.querySelector(".level"); //Объект select

const LegendOpPart = document.querySelector(".legend-o-part");
const LegendImportancePart = document.querySelector(".legend-importance-part");
const LegendPositivePart = document.querySelector(".legend-positive-part");
const LegendCompetencePart = document.querySelector(".legend-сompetence-part");
const LegendIrPart = document.querySelector(".legend-ir-part");

const color_17 = document.querySelector(".color_17");
const color_18 = document.querySelector(".color_18");
const color_19 = document.querySelector(".color_19");
const color_20 = document.querySelector(".color_20");

const add_part = document.querySelector(".add-part");
const analiz_part = document.querySelector(".analiz-part");
const previous_part = document.querySelector(".previous-part");

const or_17 = document.querySelector(".or-17");
const or_18 = document.querySelector(".or-18");
const or_19 = document.querySelector(".or-19");
const or_20 = document.querySelector(".or-20");

let flag_sozd_prev = 0;
let rezOk = [];
let jNicname = 1;
let iii = 0; //Счетчик откратия форм, числа участников (iii+1), числа объектов в массиве mass
let mass;

let obj_part_opin;



//Нажатие кнопки "Совещание"
btn_conf.onclick = () => {
// const div_rez1=document.querySelectorAll('div .rez1');
// const divRez1=Array.from(div_rez1);//Преобразование NodeList в МАССИВ
    if(document.querySelectorAll('.del').length>0){
        for(let j=0;j<document.querySelectorAll('.del').length-1;j++){
            document.querySelectorAll('.del')[j].remove();
        }
    }

    let list = document.querySelectorAll(".field>.flex");
    for (let val of list) {
        val.classList.remove("flex");
        val.classList.add("none");

        conference.classList.remove('none');
        conference.classList.add("flex");

        document.querySelector(".accordion-item_input").checked = false;
        // Обнуление при нажатии кнопки
        analiz_part.classList.add("none");
        previous_part.classList.add("none");
    }

    level.value = "";

    color_17.disabled = true;
    color_18.disabled = true;
    color_19.disabled = true;
    color_20.disabled = true;
    add_part.disabled = true;
    analiz_part.disabled = true;

    iii = 0;
    mass = [];
    obj_part_opin = {
        name: "Nickname",
        level: 1,
        Red: 128,
        Black: 128,
        Green: 128,
        Blue: 128,
        K:1,
    };

    color_17.value = 128;
    color_18.value = 128;
    color_19.value = 128;
    color_20.value = 128;
    input_name_part.value = "";
    level.value = "";

    LegendOpPart.innerText = "Оцени мнение Nickname";
    LegendImportancePart.innerText = "Оцени значение вопроса для Nickname";
    LegendPositivePart.innerText = "Оцени важность положительного решения для Nickname";
    LegendCompetencePart.innerText = "Оцени компетентность Nickname";
    LegendIrPart.innerText = "Оцени противополо́жность интересов  Nickname";
};

function Ok(j) {
    let a;
    if (input_name_part.value != "") {
        a = input_name_part.value;
    } else {
        a = `Nickname ${j}`;
        j++;
    }
    return [a, j];
}

//Нажатие кнопки "Ok"
btn_inp_name_level.onclick = () => {
    flag_sozd_prev = 1;
    rezOk = Ok(jNicname);
    obj_part_opin.name = rezOk[0];
    jNicname = rezOk[1];

    obj_part_opin.level = Number(level.value);
    if (obj_part_opin.level == "") {
        alert(`Выбери значимость участника и нажми 'Ok!'`);
    } else {
        color_17.disabled = false;
        color_18.disabled = false;
        color_19.disabled = false;
        color_20.disabled = false;
        add_part.disabled = false;
        analiz_part.disabled = false;
    }

    LegendOpPart.innerText = "Оцени мнение " + obj_part_opin.name;
    LegendImportancePart.innerText =
        "Оцени значение вопроса для " + obj_part_opin.name;
    LegendPositivePart.innerText =
        "Оцени важность положительного решения для " + obj_part_opin.name;
    LegendCompetencePart.innerText = "Оцени компетентность " + obj_part_opin.name;
    LegendIrPart.innerText =
        "Оцени противополо́жность интересов " + obj_part_opin.name;
};

color_17.onchange = () => {
    or_17.style.color = `rgb(${color_17.value},0,0)`;
    obj_part_opin.Red = Number(color_17.value);
};

color_18.onchange = () => {
    or_18.style.color = `rgb(${color_18.value},${color_18.value},${color_18.value})`;
    obj_part_opin.Black = Number(color_18.value);
};

color_19.onchange = () => {
    or_19.style.color = `rgb(0,${color_19.value},0)`;
    obj_part_opin.Green = Number(color_19.value);
};

color_20.onchange = () => {
    or_20.style.color = `rgb(0,0,${color_20.value})`;
    obj_part_opin.Blue = Number(color_20.value);
};



//Кнопка ------ "Добавить участника"-------
add_part.onclick = () => {
    mass[iii] = Object.assign({}, obj_part_opin);

    iii++;

    if (mass[iii] == undefined) {
        flag_sozd_prev = 0;
        color_17.value = 128;
        color_18.value = 128;
        color_19.value = 128;
        color_20.value = 128;
        input_name_part.value = "";
        level.value = "";

        color_17.disabled = true;
        color_18.disabled = true;
        color_19.disabled = true;
        color_20.disabled = true;
        add_part.disabled = true;
        analiz_part.disabled = true;

        LegendOpPart.innerText = "Оцени мнение Nickname";
        LegendImportancePart.innerText = "Оцени значение вопроса для Nickname";
        LegendPositivePart.innerText = "Оцени важность положительного решения для Nickname";
        LegendCompetencePart.innerText = "Оцени компетентность Nickname";
        LegendIrPart.innerText = "Оцени противополо́жность интересов Nickname";

        previous_part.classList.remove("none");
    } else {
        obj_part_opin = mass[iii];

        color_17.disabled = false;
        color_18.disabled = false;
        color_19.disabled = false;
        color_20.disabled = false;
        add_part.disabled = false;
        analiz_part.disabled = false;

        input_name_part.value = mass[iii].name;
        level.value = mass[iii].level;
        color_17.value = mass[iii].Red;
        color_18.value = mass[iii].Black;
        color_19.value = mass[iii].Green;
        color_20.value = mass[iii].Blue;

        previous_part.classList.remove("none");

        LegendOpPart.innerText = "Оцени мнение " + mass[iii].name;
        LegendImportancePart.innerText =
            "Оцени значение вопроса для " + mass[iii].name;
        LegendPositivePart.innerText =
            "Оцени важность положительного решения для " + mass[iii].name;
        LegendCompetencePart.innerText = "Оцени компетентность " + mass[iii].name;
        LegendIrPart.innerText =
            "Оцени противополо́жность интересов " + mass[iii].name;
    }
    if (analiz_part.classList[2] == "none") {
        analiz_part.classList.remove("none");
        previous_part.classList.remove("none");
    }
};

previous_part.onclick = () => {
    if (flag_sozd_prev == 1) {
        mass[iii] = Object.assign({}, obj_part_opin); //Сохранил с которого был переход назад
        flag_sozd_prev = 0; //Флаг обнулил
    }

    iii--;

    obj_part_opin = mass[iii]; //Переписал значения объекта предшественника

    if (iii == 0) {
        previous_part.classList.add("none");
    }

    color_17.disabled = false;
    color_18.disabled = false;
    color_19.disabled = false;
    color_20.disabled = false;
    add_part.disabled = false;
    analiz_part.disabled = false;

    input_name_part.value = mass[iii].name;
    level.value = mass[iii].level;
    color_17.value = mass[iii].Red;
    color_18.value = mass[iii].Black;
    color_19.value = mass[iii].Green;
    color_20.value = mass[iii].Blue;

    LegendOpPart.innerText = "Оцени мнение " + mass[iii].name;
    LegendImportancePart.innerText =
        "Оцени значение вопроса для " + mass[iii].name;
    LegendPositivePart.innerText =
        "Оцени важность положительного решения для " + mass[iii].name;
    LegendCompetencePart.innerText = "Оцени компетентность " + mass[iii].name;
    LegendIrPart.innerText =
        "Оцени противополо́жность интересов " + mass[iii].name;

    if (mass.length <= 1) {
        analiz_part.classList.add("none");
    }
};
// -----------АНАЛИЗИРОВАТЬ!-----------
const conf_analiz = document.querySelector(".conf_analiz");
const answer = document.querySelector(".answer");
const part_conf = document.querySelector(".part_conf");
// const members=document.querySelector('.memebers');

let red1 = 0;
let green1 = 0;
let blue1 = 0;
let opacity_cast = 0;

analiz_part.onclick = () => {
    if (flag_sozd_prev == 1) {
        mass[iii] = Object.assign({}, obj_part_opin); //Сохранил с которого был переход назад
        flag_sozd_prev = 0; //Флаг обнулил
    }

    let list = document.querySelectorAll(".field>.flex");
    for (let pr of list) {
        pr.classList.remove("flex");
        pr.classList.add("none");
    }
    conf_analiz.classList.remove("none");
    conf_analiz.classList.add("flex");
    for (let k = 0; k <= mass.length - 1; k++) {
        red1 = red1 + mass[k].K*(mass[k].Red + mass[k].Black) * (mass[k].level / 1.5);
        green1 = green1 + mass[k].K*(mass[k].Green + mass[k].Black) * (mass[k].level / 1.5);
        blue1 = blue1 + mass[k].K*(mass[k].Blue + mass[k].Black) * (mass[k].level / 1.5);
        opacity_cast = opacity_cast + mass[k].K*mass[k].level / 1.5;
    }
    
    red1 = red1 / mass.length;
    green1 = green1 / mass.length;
    blue1 = blue1 / mass.length;
    opacity_cast = opacity_cast / mass.length;
    document.querySelector(".answer").style.backgroundColor =
        "rgb(" + red1 + "," + green1 + "," + blue1 + "," + opacity_cast + ")";


    // --------MEMBERS---------
    //Для кнопок!!!------------
    const member = [];
    const pp = [];
    const btn = [];
    //------------------------
    

    for (let ii = 0; ii <= mass.length - 1; ii++) {
        member[ii] = document.createElement("div"); //Создание элемента <div>
        pp[ii] = document.createElement("p"); //Создание элемента <p>
        btn[ii] = document.createElement("button"); //Создание элемента <button>

        pp[ii].innerText = mass[ii].name; //Добавляем в параграфф текст 'name'
        btn[ii].innerText = "(-)"; //Добавляем в ткнопку (-)

        //Задаю цвет тексту имени, согласно данным в mass[ii]
        pp[ii].style.color = `rgb(${(mass[ii].Red + mass[ii].Black) / 2}, ${(mass[ii].Green + mass[ii].Black) / 2
            }, ${(mass[ii].Blue + mass[ii].Black) / 2}, ${mass[ii].level / 1.5})`;

        member[ii].appendChild(pp[ii]); //Добавляю в <div> <p>
        member[ii].appendChild(btn[ii]); //Добавляю в <div> <button>

        btn[ii].classList.add("btn"); //Присвоил кнопке класс btn
        btn[ii].classList.add("del"); //Присвоил кнопке класс del
        btn[ii].classList.add("btn_name"); //Присвоил кнопке доп. класс btn_name
        btn[ii].classList.add(`btn${ii}`); //Присвоил кнопке доп. класс btn+ii
        btn[ii].id = `btn${ii}`; //присвоил кнопке id

        pp[ii].classList.add(`p${ii}`);
        pp[ii].classList.add("del");

        btn[ii].dataset.number=ii;//Присвоил data атрибут "number" и задал ему згначение ii
        pp[ii].dataset.number=ii;//Присвоил data атрибут "number" и задал ему згначение ii

        list_btn[ii] = `.${btn[ii].classList[1]}`; //Сформировал массив из доп. классов в формате ".btn+ii"

        btn[ii].style.margin = "2px";
        member[ii].classList.add("rez1");
        member[ii].classList.add("del");
        part_conf.appendChild(member[ii]);
    
    }

    //ОБРАБОТКА КНОПОК УЧАСТНИКОВ
    
    document.querySelectorAll('.btn_name').forEach(function(btn) {
        btn.addEventListener('click', function(){
            let n=btn.dataset.number;
            
            if(document.querySelector(`.btn${n}`).innerText=='(-)'){
                document.querySelector(`.p${n}`).style.textDecoration='line-through red';//Перечеркнул текст
                document.querySelector(`.btn${n}`).innerText='(+)';//Изменил текст в кнопке

                mass[n].K=0;//Обнуление K - коэф. учета цвета участника совещания

                //Блок изменения цвета
                //ПРЕОБРАЗОВАТЬ В ФУНКЦИЮ ПРИ ОПТИМИЗАЦИИ КОДА!!!!!!!----------------
                    let rgb=[0,0,0,0];
                    let sum=0;
                    for (let k = 0; k <= mass.length - 1; k++) {
                        rgb[0]=rgb[0]+0.5*mass[k].K*(mass[k].Red + mass[k].Black) * (mass[k].level / 1.5);
                        rgb[1]=rgb[1]+0.5*mass[k].K*(mass[k].Green + mass[k].Black) * (mass[k].level / 1.5);
                        rgb[2]=rgb[2]+0.5*mass[k].K*(mass[k].Blue + mass[k].Black) * (mass[k].level / 1.5);
                        rgb[3]=rgb[3]+mass[k].K*mass[k].level / 1.5;
                        sum=sum+mass[k].K;
                    }
                    for(let kk=0; kk<=4;kk++){
                        
                        rgb[kk]=(sum!=0?rgb[kk]/sum:0);
                    }
                    
                //--------------------------------------------------------------------
                document.querySelector(".answer").style.backgroundColor =
                    "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + rgb[3] + ")";

                //Конец блока изменения цвета

            }else{
                document.querySelector(`.p${n}`).style.textDecoration='none';
                document.querySelector(`.btn${n}`).innerText='(-)';

                mass[n].K=1;// K=1 - коэф. учета цвета
                
                //Блок изменения цвета
               
                //ПРЕОБРАЗОВАТЬ В ФУНКЦИЮ ПРИ ОПТИМИЗАЦИИ КОДА!!!!!!!----------------
                let rgb=[0,0,0,0];
                let sum=0;
                for (let k = 0; k <= mass.length - 1; k++) {
                    rgb[0]=rgb[0]+0.5*mass[k].K*(mass[k].Red + mass[k].Black) * (mass[k].level / 1.5);
                    rgb[1]=rgb[1]+0.5*mass[k].K*(mass[k].Green + mass[k].Black) * (mass[k].level / 1.5);
                    rgb[2]=rgb[2]+0.5*mass[k].K*(mass[k].Blue + mass[k].Black) * (mass[k].level / 1.5);
                    rgb[3]=rgb[3]+mass[k].K*mass[k].level / 1.5;
                    sum=sum+mass[k].K;
                }
                for(let kk=0; kk<=4;kk++){
                    
                    rgb[kk]=(sum!=0?rgb[kk]/sum:0);
                }
                //---------------------------------------------------------------------
                document.querySelector(".answer").style.backgroundColor =
                "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + rgb[3] + ")";
                
                //Конец блока изменения цвета
            }
            
        })
        
    })
    

};
