function chargeCharacters()
{
    data = [{
        "name": "<span style='color:#EEEE9B'>[Black March]</span> Bam",
        "title": "The Boy Who Chases After Light",
        "image": "./images/2.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/yellow.png",
        "class": "./images/classes/support.png",
        "type": "./images/types/magic.png",
        "history": "Twenty-Fifth Bam, a boy who grew up in the lonely darkness of a cave.<br><br>One day, his only friend Rachel vanished into the Tower in search of the stars, and Bam followed her.<br><br>However, instead of Rachel, he found unfamiliar faces and crueld tests waiting for him<br><br>While he barely overcomes the first tests with the help of those around him, he gradually grows with his new teammates who help him develop his talent and convictions.<br><br>And the moment he reaches for the light he dreamed of finding, his whole world will change."
    },
    {
        "name": "<span style='color:#B695C0'>[Strategist]</span> Khun Aguero",
        "title": "The Cynical Light Bearer",
        "image": "./images/1.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/purple.png",
        "class": "./images/classes/support.png",
        "type": "./images/types/magic.png",
        "history": "A descendant of one of the Ten Great Families, the Khun family. He began to climb the Tower with aspirations of becoming the head of this family.<br><br>Due to some internal familial conflict, he was cast out as an 'abandoned son.'<br><br>He trusted no one, and was cold, calculated, and efficient, utilizing every means at his disposal to achieve his goals. However, he gradually begins to grow as a person as he learns about true friendship through his first teammates, Twenty-Fifth Bam and Rak Wraithraiser.<br><br>He is mainly responsible for the team's strategic planning, but not because he's an unskilled combatant- he does it because he 'likes to be in control'. In fact, he seems to excel in hand-to-hand and close-quarters combat."
    },
    {
        "name": "<span style='color:#EEEE9B'>[Hunter]</span> Rak",
        "title": "A Spear Bearer on the Prowl",
        "image": "./images/3.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/yellow.png",
        "class": "./images/classes/tank.png",
        "type": "./images/types/physical.png",
        "history": "A giant three-meter-tall crocodile monster.<br><br>He calls the other Regulars 'turtles', and declared that he is there to hunt them. But while trying to 'hunt' Twenty-Fifth Bam on the Floor of Tests, Khun's ploy forced him to become teammates with them. Since then, the three have been through a lot together, and have beocme good friend. Despite his gruff demeanor, he is a reliable teammate that treasures his friends more than anything else."
    },
    {
        "name": "<span style='color:#B695C0'>[Princess]</span> Endorsi",
        "title": "The Wings in Flight",
        "image": "./images/4.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/purple.png",
        "class": "./images/classes/assassin.png",
        "type": "./images/types/physical.png",
        "history": "A Princess of Zahard, an adopted daughter to the king of the Tower.<br><br>She appeared on the Floor of Test after annihilating everyone but the members of her own team. Although the harsh training she underwent to become one of Zahard's Princesses forced her to adapt to the Tower's rules from an early age, she gradually begins to open up and learn empathy after prolonged interactions and quarrels with Twenty-Fifth Bam, Anaak Zahard, and her other new friends.<br><br>Perhaps because she is forbidden from dating and pursuing marriage, she seems to have an idealistic perspective on the concept of love."
    },
    {
        "name": "<span style='color:#ACD1AF'>[Red Rose]</span> Yuri Jahad",
        "title": "A Growling Believer",
        "image": "./images/5.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/green.png",
        "class": "./images/classes/tank.png",
        "type": "./images/types/physical.png",
        "history": "A Princess of Zahard who was given the Black March by King Zahard. She is a High Ranked and a descendant of one of the Ten Great Families: the Ha Family.<br><br>After hearing rumors of an Irregular who opened the door to the Tower himself, Yuri inmediately headed to the lowest floor for the sole reason of getting some free entertainment. She was briefly disappointed after first seeing Twenty-Fifth Bam, but lent him the Black March, intrigued by his willingness to take on an unfair test.<br><br>After Twenty-Fifth Bam passed the test, she becomes a dependable ally in Bam's quest to climb the Tower.<br><br>She is infamous for her short temper, but she has many allies who follow her for her upright convictions. She is also known as the 'Black Snakehead'"
    },
    {
        "name": "<span style='color:#F47174'>[Green April]</span> Anaak Jahad",
        "title": "The Thorned Jade",
        "image": "./images/6.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/red.png",
        "class": "./images/classes/warrior.png",
        "type": "./images/types/physical.png",
        "history": "The wielder of the Green April, determined to climb the Tower of revenge.<br><br>She is one of the most talented Regulars, but she is often so reckless that even her friends can't hold her back. She tamed up with Shibisu and Hatz. Due to her strange friendship with Endorsi Zahard, and the unexpected familial bond they discovered after being placed in the same testing group, Anaak finds a reason to climb the Tower for something other than revenge.<br><br>It is said that a Ranked with the same name has already climber the Tower, but they went missing long ago."
    },
    {
        "name": "<span style='color:#F47174'>[Destined Path]</span> Hwaryun",
        "title": "Red Witch",
        "image": "./images/7.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/red.png",
        "class": "./images/classes/support.png",
        "type": "./images/types/physical.png",
        "history": "A Guide.<br><br>She loses her right eye to Twenty-Fifth Bam while trying to attack Rachel in the Crown Game. After a complicated series of events, she starts climbing the Tower with Bam. She always leads her group to the most advantageous outcomes with rational and cool-headed judgment. However, her dispassionate demeanor and strange goals make her appear to have many secrets.<br><br>She is a Red Witch and a Guide of the Tower."
    },
    {
        "name": "<span style='color:#B695C0'>[Young Girl]</span> Rachel",
        "title": "The Star-chaser",
        "image": "./images/8.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/purple.png",
        "class": "./images/classes/mage.png",
        "type": "./images/types/magic.png",
        "history": "The girl Twenty-Fifth Bam is chasing after.<br><br>She had always dreamt of climbing the Tower to see the stars. By entering the Tower, she hoped she would finally get her wish, but she soon discovers that Bam is the chosen one, not her.<br><br>In the face of this harsh reality and the cold treatment she often receives from others, Rachel continues to climb the Tower by embracing her resentment for the boy she believes took everything from her."
    },
    {
        "name": "<span style='color:#EEEE9B'>[Dual Swords]</span> Hatz",
        "title": "The Unbreakable Sword",
        "image": "./images/10.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/yellow.png",
        "class": "./images/classes/warrior.png",
        "type": "./images/types/physical.png",
        "history": "A duel-wielding swordsman.<br><br>While he comes off as serious and cold-hearted with his stern tone and stubborn behavior, he trusts his teammates more than anyone else. There are times when he unintentionally falls into danger because the priorities loyalty.<br><br>He is diligent, and always trains harder when he notices his skills falling behind.<br><br>Among the E-Rank Regulars beyond the 20th Floor, he is recognized as evenly-matched with Endorsi and Anaak Zahard."
    },
    {
        "name": "<span style='color:#ACD1AF'>[Insightful One]</span> Laure",
        "title": "The Sleeping Wave Controller",
        "image": "./images/11.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/green.png",
        "class": "./images/classes/mage.png",
        "type": "./images/types/magic.png",
        "history": "An odd Regular who always carries pillows and blankets. He can fall asleep anytime, anywhere.<br><br>The only way to get him to do anything is by taking his pillows and blankets, or finding some other way of keeping him awake.<br><br>As a member of the Eurasia Family, one of the Great Families, he has an extraordinary talent for controlling Shinsu and teaches Twenty-Fifth Bam how to make a baang with Shinsu.<br><br>He has a laid-back and indifferent personality, but he can get things done when necessary."
    },
    {
        "name": "<span style='color:#EEEE9B'>[Deadly Martial Arts]</span> Shibisu",
        "title": "The Scout Leader",
        "image": "./images/12.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/yellow.png",
        "class": "./images/classes/support.png",
        "type": "./images/types/physical.png",
        "history": "A sociable and intelligent Scout.<br><br>With a friendly face and welcoming personality, he gets along well with everyone and serves as a catalyst for getting people to work together.When his team is in danger, he thinks quickly and has the ability to create a plan that utilizes the team's strengths.<br><br>Although he is trusted by his colleagues for these reasons, he lacks combat ability and is often carried through tests by his teammates."
    },
    {
        "name": "<span style='color:#EEEE9B'>[Forever Prepping]</span> Wangnan Ja",
        "title": "The Quixotic Boy",
        "image": "./images/13.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/yellow.png",
        "class": "./images/classes/ranged.png",
        "type": "./images/types/magic.png",
        "history": "The self-proclaimed 'Future King of the Tower'<br><br>A young Regular who couldn't pass the 20th Floor, which is often referred to as the Eye of a Needle.Owing a huge debt to a loan shark due to testing fees, he believes this is the last chance to climb the Tower.<br><br>After meeting new teammates on the 20th Floor, he was able to get Viole to open up, give Miseng courage, and believed in Yihwa's ability, becoming the true leader of Team Sweet & Sour.<br><br>He can be cowardly at times, but he values loyalty and does not let evil slide."
    },
    {
        "name": "<span style='color:#93CAED'>[Tactician]</span> Lero Ro",
        "title": "The Explorer of Cruel Truths",
        "image": "./images/15.png",
        "rarity": "./images/rarity/ssr.png",
        "element": "./images/elements/blue.png",
        "class": "./images/classes/support.png",
        "type": "./images/types/magic.png",
        "history": ""
    },
    {
        "name": "<span style='color:#B695C0'>[Lightning Spear]</span> Khun Mascheny",
        "title": "The Bloody Dawn of Civilization",
        "image": "./images/9.png",
        "rarity": "./images/rarity/ssrplus.png",
        "element": "./images/elements/purple.png",
        "class": "./images/classes/ranged.png",
        "type": "./images/types/magic.png",
        "history": ""
    }]

    const container = document.getElementById('container');

    let characterHTML = '';

    data.forEach((item, index) => {
        characterHTML += '<div class="img-wrapper" data-rarity="' + item['rarity'] +
          '" data-type="' + item['type'] + '" data-class="' + item['class'] +
          '" data-color="' + item['element'] + '">' +
          '<img data-image-value="' + index + '" src="' + item['image'] +
          '" alt="Image 4" class="draggable-image">' +
          '</div>';

          container.innerHTML = characterHTML;
    });
}




