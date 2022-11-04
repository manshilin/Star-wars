 /*
 1. Выбрать поле для игры done
 2. Заполнить игровое поле карточками done
 3. Сделать клик по карточкам done
 4. Сделать переворачивание карточек done
    4.1. Размещаем картинки для каждой карточки done
    4.2. Показываем картинку done
5. Если выбрано 2 картинки проверяем на совпадение done
    5.1. Если совпадают убираем карточки done
    5.2 Если не совпадают закрываем карточки done
6. Если все карточки удалены выводим окно с перезапуском игры done
7. При нажатии на кнопку рестарт перегрузка игры done
 */ 

let cardsField = document.querySelector("#cards");
let resetBlocks = document.querySelector("#reset");
let resetBtn = document.querySelector("#reset-btn");
let levelBtn1 = document.querySelector("#level-btn1");
let levelBtn2 = document.querySelector("#level-btn2");
let levelBtn3 = document.querySelector("#level-btn3");
let levelBlock = document.querySelector("#level");
let deletedCards = 0;
let level = 0;
let level1 = 16;
let level2 = 32;
let level3 = 48;
let images = [];
let intermediateImages1 = [];
let intermediateImages2 = [];
let intermediateImages = [];

levelBtn1.onclick = function(){
    levelBlock.style.display = "none";
    level = level1;
    
        for(let i = 0; i < level; i++){
            let li = document.createElement("li");
            li.id = i;
            cardsField.appendChild(li); 
        }
        
        
            for (let i = 0; i < level/2; i++) {
                intermediateImages[i] = i+1;
                intermediateImages1[i] = i+1;
            }

            intermediateImages.push.apply(intermediateImages, intermediateImages1);
            
            images = intermediateImages.sort(function(){
                return Math.random() - 0.5;
              });
           
            

}
       

levelBtn2.onclick = function(){
    levelBlock.style.display = "none";
    level = level2;
        cardsField.style.width = "800px";
        for(let i = 0; i < level; i++){
            let li = document.createElement("li");
            li.id = i;
            cardsField.appendChild(li); 
        }
        
        
            for (let i = 0; i < level/2; i++) {
                intermediateImages[i] = i+1;
                intermediateImages1[i] = i+1;
            }

            intermediateImages.push.apply(intermediateImages, intermediateImages1);
            
            images = intermediateImages.sort(function(){
                return Math.random() - 0.5;
              });
           
            

}

levelBtn3.onclick = function(){
        levelBlock.style.display = "none";
        level = level3;
        cardsField.style.width = "600px";
        cardsField.style.height = "800px";
        for(let i = 0; i < level; i++){
            let li = document.createElement("li");
            li.id = i;
            cardsField.appendChild(li); 
        }
        
        
            for (let i = 0; i < level/2; i++) {
                intermediateImages[i] = i+1;
                intermediateImages1[i] = i+1;
            }

            intermediateImages.push.apply(intermediateImages, intermediateImages1);
            
            images = intermediateImages.sort(function(){
                return Math.random() - 0.5;
              });
           
            

}
        
    
 

let selected = [];
let pause = false;


cardsField.onclick = function(event) {
        if(pause == false){
             let element = event.target;
                if (element.tagName == "LI" && element.className != "active") {
                    element.className = "active"
                    selected.push(element);
                    let img = images[element.id];
                    element.style.backgroundImage = "url('images/"+img+".png')"; 
                }
                if(selected.length == 2) {
                    pause = true;
                    if (images[selected[0].id] == images[selected[1].id]) {
                        deletedCards = deletedCards + 2;
                        selected[0].style.visibility = "hidden";
                        selected[1].style.visibility = "hidden";
                    
                    }
                    setTimeout( refreshCards, 600);
                    selected = [];
                    pause = false;
                }
        }
}

function refreshCards() {
    for (let i = 0; i < level; i++) {
        cardsField.children[i].className = "";
        cardsField.children[i].style.backgroundImage = "url('images/back.png')";
        
    }
    if (deletedCards == level) {
        resetBlocks.style.display = "block";
        
    }
    selected = [];
    
}

resetBtn.onclick = function () {
     
    location.reload();    
   
} 
