//------------------VAR---------------
let i = 0; //i - счетчик
let TA = '';//TA - переменная для хранения вопросап пользователя
let al = 0;//al- флаг соответвия введенного пользователем текста требованитям вопроса. Принимает значения "0" или "1". "0" - СООТВЕТСВУЕТ.
//------------------------------------
let mood = 128;
let conf = 128;
let red = 128;
let green = 128;
let blue = 128;
//-----------------------------------
//-----------------------------------
// Menue buttons
const btn_pr = document.querySelector('.primary');
const btn_ato = document.querySelector('.ato');
const btn_askto = document.querySelector('.askto');
const btn_next = document.querySelector('.next');
const btn_back = document.querySelector('.back');

// Oracle menue
const TextPrimary = document.querySelector('.TextPrimary');
const AboutTheOracle = document.querySelector('.AboutTheOracle');

// Oracle menu
//----document.querySelector('.accordion-item_input').checked=false; - скрывает контекстное меню!!!
// Обработчик кнопки button-primary
btn_pr.addEventListener('click',
        () => {
                let list = document.querySelectorAll('.field>.flex');
                for (let val of list) {
                        val.classList.remove('flex');
                        val.classList.add('none');

                        TextPrimary.classList.add('flex');

                        btn_next.classList.remove('flex');
                        btn_next.classList.add('none');
                        btn_back.classList.remove('flex');
                        btn_back.classList.add('none');

                        document.querySelector('.accordion-item_input').checked=false;
                };
        }
);
// Обработчик кнопки button-ato
btn_ato.addEventListener('click',
        () => {
                let list = document.querySelectorAll('.field>.flex');
                for (let val of list) {
                        val.classList.remove('flex');
                        val.classList.add('none');

                        AboutTheOracle.classList.add('flex');

                        btn_next.classList.remove('flex');
                        btn_next.classList.add('none');
                        btn_back.classList.remove('flex');
                        btn_back.classList.add('none');

                        document.querySelector('.accordion-item_input').checked=false;
                };
        }
);
// Обработчик кнопки button-askto
btn_askto.addEventListener('click',
        () => {
                let list = document.querySelectorAll('.field>.flex');
                for (let val of list) {
                        val.classList.remove('flex');
                        val.classList.add('none');
                        
                        div[i].classList.add('flex');

                        btn_next.classList.remove('none');
                        btn_next.classList.add('flex');
                        document.querySelector('.accordion-item_input').checked=false;
                };
        }
);


// Divs для блока "Спросить у Оракула"
const div = [
        document.querySelector('.div-question'),
        document.querySelector('.div-ask'),
        document.querySelector('.div-confidence'),
        document.querySelector('.div-red'),
        document.querySelector('.div-green'),
        document.querySelector('.div-blue'),
        document.querySelector('.rez')
];

// Back & Next
btn_next.addEventListener('click',
        () => {
                let list = document.querySelectorAll('.field>.flex');
                let el = list[0].classList[0];
                // Проверка вопроса!!!
                if (el == 'div-question') {
                        TA = document.querySelector('.question1').value;
                        if (TA == '') {
                                alert('Введите вопрос!');
                                al = 1;
                        } else {
                                if (!TA.endsWith('?')) {
                                        alert(`Я не чувствую интонации! Вопрос должен заканчиваться знаком '?'`);
                                        al = 1;
                                }
                        }
                }
                //Блок действий, если вопрос поставлен коректно.
                if (al == 0) {
                        if (0 <= i && i <= (div.length - 2)) {
                                i++;
                        }
                        for (let val of list) {
                                val.classList.remove('flex');
                                val.classList.add('none');

                                div[i].classList.add('flex');

                                btn_back.classList.remove('none');
                                btn_back.classList.add('flex');

                                document.querySelector('.rez p').textContent = TA;
                                document.querySelector('.rez p').style.color = 'rgb(' + conf*CofMood(mood) + ',' + conf*CofMood(mood) + ',' + conf*CofMood(mood) + ')';
                                document.querySelector('.rez').style.backgroundColor = 'rgb(' + red/CofMood(mood)+ ',' + green + ',' + blue + ',' + ((green+(256-blue)))*0.5 / 256 + ')'
                        }
                }

                console.log(i);
                console.log(div.length-1);
                if(i==div.length-1){
                        btn_next.classList.remove('flex');
                        btn_next.classList.add('none');
                        btn_back.classList.remove('flex');
                        btn_back.classList.add('none');
                        al = 0;
                        i=0;
                        document.querySelector('.question1').value='';
                        document.querySelector('.color_01').value=128;
                        document.querySelector('.color_02').value=128;
                        document.querySelector('.color_03').value=128;
                        document.querySelector('.color_04').value=128;
                        document.querySelector('.color_05').value=128;
                }
                al = 0;
        }
);

btn_back.addEventListener('click',
        () => {
                let list = document.querySelectorAll('.field>.flex'); if (0 < i) {
                        i--;
                };
                for (let val of list) {
                        val.classList.remove('flex');
                        val.classList.add('none');
                        div[i].classList.add('flex');
                        btn_back.classList.remove('none');
                        btn_back.classList.add('flex');
                };
        }
);

// ---------------------------------------
document.getElementById("color_01").addEventListener("change", pos_or => {
        document.documentElement.style.setProperty("--color", (256 - (pos_or.target.value)));
        mood = 256-pos_or.target.value;
        console.log(mood);
});

document.getElementById("color_02").addEventListener("change", pos_or => {
        document.documentElement.style.setProperty("--color", (256 - (pos_or.target.value)));
        conf = 256-pos_or.target.value;
        console.log(conf);
});

document.getElementById("color_03").addEventListener("change", pos_or => {
        document.documentElement.style.setProperty("--color", (256 - (pos_or.target.value)));
        red = 256-pos_or.target.value;
        console.log(red);
});

document.getElementById("color_04").addEventListener("change", pos_or => {
        document.documentElement.style.setProperty("--color", (256 - (pos_or.target.value)));
        green = 256-pos_or.target.value;
        console.log(green);
});

document.getElementById("color_05").addEventListener("change", pos_or => {
        document.documentElement.style.setProperty("--color", (256 - (pos_or.target.value)));
        blue = 256-pos_or.target.value;
        console.log(blue);
});
//--------------------------------------FUNCTION- НАСТРОЕНИЕ---------------------------------------------
function CofMood(md){
        let CofMood;
        if(85<=md<=171){
                CofMood=1;
        }else{
                if(md>=171){CofMood=0.9;}
                CofMood=1.1;
        }
        return CofMood;
}




