
function changeImage(value) {

    data = [
        {
            "name": "<span style='color:#EEEE9B'>[First Thorn]</span> Jue Viole Grace",
            "title": "The FUG god",
            "image": "./images/14.png",
            "rarity": "./images/rarity/ssrplus.png",
            "element": "./images/elements/yellow.png",
            "class": "./images/classes/ranged.png",
            "type": "./images/types/magic.png",
            "history": ""
        },
    
        {
            "name": "<span style='color:#93CAED'>[Data]</span> Khun Mascheny",
            "title": "The Harbringer of War",
            "image": "./images/16.png",
            "rarity": "./images/rarity/ssrplus.png",
            "element": "./images/elements/blue.png",
            "class": "./images/classes/assassin.png",
            "type": "./images/types/magic.png",
            "history": ""
        }
    ]

    var title = document.getElementById("title");
    var name = document.getElementById("name");
    var element = document.getElementById("element");
    var classs = document.getElementById("classs");

    var rarity2 = document.getElementById("rarity2");
    var element2 = document.getElementById("element2");
    var classs2 = document.getElementById("classs2");
    var type2 = document.getElementById("type2");

    a = value;

    switch (a){

        case "The Boy Who Chases After Light":
            if(document.getElementById("The Boy Who Chases After Light").getAttribute("src") == "./images/2.png"){

                document.getElementById("The Boy Who Chases After Light").src = "./images/14.png";
                title.innerHTML = data[0]['title'];
                name.innerHTML = data[0]['name'];
        
            }else{
                document.getElementById("The Boy Who Chases After Light").src = "./images/2.png";
                title.innerHTML = "The Boy Who Chases After Light";
                name.innerHTML = "<span style='color:#EEEE9B'>[Black March]</span> Bam";
            }
        break;


        case "The Bloody Dawn of Civilization":
            if(document.getElementById("The Bloody Dawn of Civilization").getAttribute("src") == "./images/9.png"){

                document.getElementById("The Bloody Dawn of Civilization").src = "./images/16.png";
                title.innerHTML = data[1]['title'];
                name.innerHTML = data[1]['name'];
                element.src = data[1]['element'];
                classs.src = data[1]['class'];

                element2.src = data[1]['element'];
                classs2.src = data[1]['class'];
        
            }else{

                document.getElementById("The Bloody Dawn of Civilization").src = "./images/9.png";
                title.innerHTML = "The Bloody Dawn of Civilization";
                name.innerHTML = "<span style='color:#B695C0'>[Lightning Spear]</span> Khun Mascheny";
                element.src = "./images/elements/purple.png";
                classs.src = "./images/classes/ranged.png";

                element2.src = "./images/elements/purple.png";
                classs2.src = "./images/classes/ranged.png";
            }
        break;

    }

}