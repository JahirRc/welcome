/* CREATE ABILITY DISPLAY */
function selectedAbilities(value){

    data = [{
        "color": "#EEEE9B",
        "titles": ["Black March, Ignited","Progidy Wave Controller","Reverse Flow Control","Main Character"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions":["BBam Ignites the Black March, dealing 620% of his ATK as DMG to the enemy with the highest ATK. In addition, he Stuns the enemy for 3s and decreases their Energy by 400. Bam's next 5 basic attacks are enhanced to Black March Slashes, increasing his ATK coefficient by 210% and decreasing the target's Energy by 40. Bam becomes immune to status effects while the Black March is ignited.",
        "Bam becomes immune to Jolt and spends 3s gathering the Tower's shinsu, then infuses it into the ally with the highest ATK. The infused ally recovers 400 Energy, their ATK increases by 80%, and their DEF increases by 80% until the end of the battle.",
        "Bam concentrates shinsu in his hand and fires it at the enemy to cause reverse flow control, dealing 700% DMG and Stopping their movement for 3s.",
        "Bam subconsciously emanates shinsu every 5s after the start of the battle, restoring the Energy of nearby allies by 200. Bam becomes distressed when an ally (not including himself) dies for the first time in battle, causing him to lose control of his shinsu and deal 400% of his ATK as DMG to nearby enemies and Stop their movement for 3s."]
    },
    {
        "color": "#B695C0",
        "titles": ["Mystery Sphere","Manbarondena","Quadruple Barrier","Weapon Boost"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Khun summons a Mystery Sphere above the area where the enemies are most concentrated for 5s, dealing 160% of his ATK as DMG every second and Paralyzing enemies for 1s. Enemies hit by the attack have their DEF decreased by 40% for 1s.",
        "Manbarondenna swallows the enemy with the highest ATK, dealing 100% of Khun's ATK as DMG and Sealing the enemy for 8s. The target is Knocked Down for 2s upon being released from the Seal. Activates only when there are 2 or more enemies.",
        "Khun summons four Lighthouses to create a barrier that lasts for 5s, equal to 400% of his ATK, for the ally with the lowest HP. The barrier grants the ally Status Effect Immunity and restores their Energy by 40 every second for the duration it is active.",
        "Khun increases the ATK of Purple Element allies by 32% at the start of the battle."]
    },
    {
        "color": "#EEEE9B",
        "titles": ["Time to Hunt","Hide Behind Me, Turtle","Wake up, Turtle","Leader Rak"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Rak runs toward the enemy with the highest ATK, swinging his spear in a fan-shaped area to deal 620% of his ATK as DMG, Knocking Back the enemies to the edge of the battlefield. He deals 820% of his ATK as DMG to targets with HP below 30%.",
        "Rak dashes toward the ally with the lowest HP to deal 620% of his ATK as DMG to nearby enemies and Knock them Back. In addition, Rak increases the Physical and Magic Resistance of both himself and the target ally by 80% for 5s.",
        "Rak takes chocolate bars out of his bag and throws them at nearby allies to recover their HP by 200% of his ATK every second for 3s and increase their DEF by 100% for 5s.",
        "Rak's Physical Resistance increases by 8% for every ally nearby. The effect is greatly enhanced if all allies are near him, increasing his Physical Resistance by an additional 32%. This skill changes Rak's basic attacks into ranged attacks and increases his ATK by 200% if there are no enemies nearby."]
    },
    {
        "color": "#B695C0",
        "titles": ["Chiffon Sword","Compression Needle","Reckless Princess","Bong Bong Output"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Endorsi jumps toward the enemy with Bong Bong, dealing 400% of her ATK as DMG and Knocking them Down for 2s. Endorse becomes Invincible while using this skill.",
        "Endorsi pierces through nearby enemies, dealing 200% of her ATK as DMG 3 times. Pierced enemies Bleed, taking 120% of Endorsi's ATK as DMG every second for 5s.",
        "Endorsi flies with Bong Bong, dealing 200% of her ATK as DMG to the enemy with the lowest DEF in the back row. The target is Knocked Down for 2s and cannot recover Energy for 5s. Endorsi becomes immune to status effects while using this skill.",
        "If Endorsi is the first to take fatal damage in battle, she Teleports back to her starting position with Bong Bong to recover 12% of her Max HP every second for 3s."]
    },
    {
        "color": "#ACD1AF",
        "titles": ["Rose Shower","Red Velvet Sword","Nuclear Punch","Shinsu Bubble"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Yuri jumps into the air in an Invincible state and fires a blast of Rose Shinsu, dealing 400% of her ATK as DMG to enemies in range and jolting them. She then creates an area of Rose Shinsu which deals 80% of her ATK as DMG every second for 5s and decreases the enemy's Swiftness by 40. In addition, this skill Locks the enemy for 6s if they stay in the Rose Shinsu Area for more than 3s.",
        "Yuri jumps over to the area where the enemies are most concentrated, dealing 620% of her ATK as DMG to enemies in range and Knocking them Down for 2s. She becomes Immune to status effects while using this skill.",
        "Yuri deals 400% of her ATK as DMG to enemies in a straight line and sends them Airborne for 2s. In addition, Yuri's DEF increases by 120% for 10s.",
        "Every time Yuri uses a skill, she creates a Shinsu Bubble barrier equal to 400% of her ATK that lasts for 3s."]
    },
    {
        "color": "#F47174",
        "titles": ["Green April, Ignition!","Run","We'll See About That","Half Princess"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Anaak Ignites the Green April, sending a giant Needle towards the enemy, dealing 620% of her ATK as DMG to the target and nearby enemies and Knocking them Down for 3s. The ground then explodes around the target area, dealing 620% of her ATK as DMG to enemies in range and sending them Airborne for 2s.",
        "Anak moves to the enemy with the highest ATK and slams the ground with her Hook, dealing 620% of her ATK as DMG and sending them Airborne for 3s. Anak becomes immune to status effects while moving with her Hook.",
        "Anak strengthens her body with shinsu and charges at the enemy with the highest ATK, dealing 620% of her ATK as DMG and Knocking them Down for 3s. If the enemy is Knocked Down by this attack, Anak grabs them and throws them behind her, dealing 620% of her ATK as DMG. Anaak becomes immune to status effects while throwing the enemy.",
        "Anaak ignores DMg that is 50% or lower her Max HP once. (Cooldwon: 6s)"]
    },
    {
        "color": "#F47174",
        "titles": ["Premptive Strike","Delay Tactic","Guide's Guidance","Reveal Weakpoint"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Hwaryun jumps toward the Weakpoint enemy to deal 800% of her ATK as DMG. She swings her staff to deal 400% of her ATK as DMG to other enemies and Knocks them Back. She then increases nearby allies' Swiftness by 40 and their ATK by 40% for 12s, then creates a barrier equal to 800% of ATK that lasts 8s.",
        "Hwaryun throws her staff, dealing 800% of her ATK as DMG and decreasing the Swiftness of enemies in its path by 40 for 10s. If the target is a Weakpoint enemy, they are Stunned for 2s.",
        "Hwaryun carves a path toward the Weakpoint enemy. She then orders all teammates to quickly move to the Weakpoint enemy and attack them while the path is active. The path lasts for 10s and increases the Swiftness of allies on it by 80.",
        "Hwaryun finds the enemy with the highest ATK at the start of the battle and marks them as Weakpoint. She increases her allies' ATK by 40% and Critical Hit Rate by 40% when attacking the Weakpoint enemy. When the Weakpoint enemy is defeated, all teammates' Energy increases by 400 and Hwaryun finds a new Weakpoint target."]
    },
    {
        "color": "#B695C0",
        "titles": ["Lighthouse Compression Release","Space Compression","Self-proclaimed Heroine","Suspicious Spell"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Rachel summons a compressed Lighthouse above the enemy and drops it to deal 200% of her ATK as DMG and Knocks the enemy Down for 2s. The compressed Lighthouse decompresses over 2s, growing in size every 0.5s and increasing her ATK by 100% each time. <br><br>However, if Rachel is struck by a Status Effect Attack, the Lighthouse stops decompressing and drops immediately.",
        "Rachel summons a Lighthouse above the area where enemies are most concentrated, dealing 200% of her ATK as DMG every 0.5s for 2s. She then pulls the enemies towards the Lighthouse. Rachel's DEF increases by 8% for 10s for each enemy that takes damage.",
        "Rachel steals 100 Energy from a Linked ally. She then deals 620% of her ATK as DMG to enemies around the ally and Stuns them for 2s. If there is no Linked ally, Rachel deals 620% of ATK as DMG to the closest enemy and steals 100 Energy from them.",
        "Rachel Links with the ally with the highest DEF at the start of the battle, redirecting 50% of DMG she takes to that ally. Rachel's DEF increases by 40% while the Link is active."]
    },
    {
        "color": "#EEEE9B",
        "titles": ["White Wave: Single Slash Annihilation","Ghost Fish Wheel Dance: Single Annihilation","Highest & Lowest Flying Swords","Strict Training"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Hatz runs toward the enemy to slash them in a fan-shaped area, dealing 1,020% of his ATK as a guaranteed Critical Hit and Knocking them Back.",
        "Hatz strengthens his two-handed grip and slashes his sword at the enemies in a straight line. The strike deals 620% of his ATK as a guaranteed Critical Hit and Jolts them.",
        "Using both his swords for one attack, Hatz employs the Highest Flying Sword to block basic attacks and uses the Lowest Flying Sword to deal 400% of his ATK as DMG to nearby enemies.<br><br>Hatz's basic attack DMG increases by 300% for 10s after using this skill.",
        "Hatz sees right through the enemy with a sharp gaze at the start of the battle, increasing his Critical Hit Rate by 16%. His Swiftness increases by 40 for 5s and he recovers 8% of his Max HP upon landing a Critical Hit."]
    },
    {
        "color": "#ACD1AF",
        "titles": ["Cry of Piercing Water","Close-Range Shinsu Manipulation Technique","Shinsu Shield","Beauty Sleep"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Laure swings a giant shinsu sickle to deal 900% of his ATK as DMG to nearby enemies, pulling them into the center. He then jumps to the back of the battlefield.",
        "Laure dashes to the area where the enemies are most concentrated, dealing 800% of his ATK as DMG and Silencing the enemies in range for 4s.",
        "Laure creates a Status Effect Immunity barrier equal to 2,000% of his ATK and falls asleep for 4s. Lauren wakes up immediately if he takes 1 DMG or more while sleeping.",
        "Laure recovers 200 Energy every second while asleep. His Attack is increased by 160% for 10s upon waking up."]
    },
    {
        "color": "#EEEE9B",
        "titles": ["Targetting","Shinsu Bomb","One Inch Punch","Scrappy Underdog"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Shibisu decreases the Physical and Magic Resistance of the enemy with the lowest HP by 80% for 10s. He then commands all allies to attack the target. Shibisu recovers 100% Energy if the target is defeated by the attack.",
        "Shibisu throws a shinsu bomb toward the most concentrated area of enemies, dealing 600% of his ATK as DMG to enemies and decreasing Energy Recovery by 90% for 10s.",
        "Shibisu dashes towards the enemy to deal 900% of his ATK as DMG, Stunning them for 3s.",
        "Shibisu increases the ATK of Yellow Element Allies by 32% at the start of the battle."]
    },
    {
        "color": "#EEEE9B",
        "titles": ["Antimatter Bomb","Mad Dog","Shinsu Bomb/Gum Bomb","Path of the Prince"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Wangnan throws an antimatter bomb crafted in the Workshop to deal 180% of his ATK as a Critical Hit 8 times to enemies in the area.",
        "Wangnan lets out a powerful shout, increasing his Critical Hit Rate by 40% and his Critical DMG by 80% for 10s. If he is inflicted with Fear at any time during combat, he immediately removes it and activates this skill.",
        "Wangnan throws a shinsu bomb and a gum bomb at the same time, each dealing 400% of his ATK as DMG to enemies. He deals an additional 620% of his ATK as a Critical Hit to enemies hit by both bombs, Stunning them for 2s.",
        "Wangnan's Critical DMG increases by 16% for every Yellow element ally at the start of the battle. When taking fatal damage in battle for the first time, Wangnan is revived after 5s with 80% of his Max HP, and his ATK is increased by 80% until the end of the battle."]
    },
    {
        "color": "#93CAED",
        "titles": ["Enhanced Lighthouse: Highly <br>Concentrated Shinsu Zone","Shinsu Wall","Advantage Rule","Weapon Boost Skill"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Lero Ro becomes immune to Jolt and focuses for 5s, then drops an enhanced Lighthouse to deal 800% of his ATK as DMG to enemies in range. In addition, he Jolts targets if their DEF is higher than his, and Stuns them for 3s if their DEF is lower. The Lighthouse creates a highly concentrated area of shinsu for 6s, decrasing the Swiftness of enemies in range by 48.",
        "When the enemy is near, Lero Ro summons a wall of shinsu to deal 620% of his ATK as DMG to nearby enemies, Knocking them Back. In addition, he decreases their Swiftness by 40 for 10s.",
        "Lero Ro scanes the battlefield and decreases all enemies' DEF by 40% for 10s. Enemies with decreased Swiftness see an additional 20% decrease to their DEF.",
        "Lero Ro increases Blue Element allies ATK by 32% at the start of the battle."]
    },
    {
        "color": "#B695C0",
        "titles": ["Tres Cuernos","Trident","Lightning Field","Lightning Shinsu"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Mascheny gathers shinsu to create Tres Cuernos, then throws it to deal 900% of her ATK as DMG to the enemy, Stealing 50 of their swiftness for 8s. Mascheny becomes Invincible while using this skill.",
        "Mascheny enhances her basic attacks and increases her Swiftness by 40 for 8s. The ATK coefficient of Mascheny's basic attack increases by 40% and her basic attack transforms into a three-pronged piercing attack.",
        "Mascheny unleashes her Lightning Field for 10s, creating a barrier equal to 600% of her ATK. She deals 200% of her ATK as DMG every second to enemies inside the field. The concentrated shinsu explodes when the Lightning Field disappears, Paralyzing enemies in range for 1s.",
        "Mascheny attaches lightning shinsu to the enemy for 10s when she lands a basic attack. Her basic attack DMG increases by 80% against targets with lightning shinsu attached to them. In addition, her lightning shinsu explodes after 4 attacks, dealing 80% of her ATK as DMG to nearby enemies and Paralyzing the target for 1s."]
    },
    {
        "color": "",
        "titles": ["","","",""],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": [" ",
        " ",
        " ",
        " "]
    },
    {
        "color": "",
        "titles": ["","","",""],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["",
        " ",
        " ",
        " "]
    },
    {
        "color": "#93CAED",
        "titles": ["Great Spear of Dawn","Lightning Spear","Discharge","Front Row - Lightning Pill"],
        "types": ["Special Move", "Active", "Active", "Passive"],
        "descriptions": ["Data Mascheny becomes Invincible, Teleports to the enemy with the highest ATK, then slams the Great Spear of Dawn into the ground to decrease the Magic Resistance of enemies hit by 20% for 10s and deal 240% of her ATK as DMG 5 times. The final attack causes a giant explosion with a circular range.",
        "Data Mascheny Dashes forward with her lance to deal 400% of her ATK as DMG to all enemies in her path and then returns to her starting position. Data Machine is Invincible while Dashing.",
        "Data Mascheny discharges lightning shinsu to deal 400% of her ATK as DMG to nearby enemies. Any enemies she hits are Stunned for 3s. She then creates a Shinsu Barrier that lasts for 10s. Enemies inside the Shinsu Barrier deal 40% less DMG to Data Mascheny. Data Mascheny becomes immune to status effects while using this skill.",
        "Data Mascheny removes all status effects and swallows a Lightning Pill when her HP drops to 40% or below. Upon consuming the Lightning Pill, Data Mascheny gains 100 Lightening Pill Gauge. Lightning Pill's effects are removed when the gauge hits 0. The Lightning Pill Gauge decreases by 10 every second, but increases by 10 whenever Data Machine uses a skill. While the Lightning Pill is active, Data Mascheny's ATK increases by 120% and her HP will not drop below 1."]
    }
]

    const abilities = document.getElementById('abilities');
    let abilitiesHTML = '';


        for (let i = 0; i < 4; i++) {
            abilitiesHTML += '<div id="ability" class="ability">'+
            '<div id="ability-elements" class="ability-elements">'+
            '<div style="background-color: '+ data[value]['color'] +'" id="icon-ability" class="icon-ability">'+
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cube" class="svg-inline--fa fa-cube " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36"><path fill="currentColor" d="M234.5 5.709C248.4 .7377 263.6 .7377 277.5 5.709L469.5 74.28C494.1 83.38 512 107.5 512 134.6V377.4C512 404.5 494.1 428.6 469.5 437.7L277.5 506.3C263.6 511.3 248.4 511.3 234.5 506.3L42.47 437.7C17 428.6 0 404.5 0 377.4V134.6C0 107.5 17 83.38 42.47 74.28L234.5 5.709zM256 65.98L82.34 128L256 190L429.7 128L256 65.98zM288 434.6L448 377.4V189.4L288 246.6V434.6z"></path></svg>'+
            '</div>'+
            '<div class="ability-text">'+
            '<div class="double-text">'+
            '<h1 class="ability-name">'+data[value]['titles'][i]+'</h1>'+
            '<h1 class="ability-type">'+data[value]['types'][i]+'</h1>'+
            '</div></div></div>'+
            '<div class="ability-description">'+
            '<h1 class="unique-ability-description">'+data[value]['descriptions'][i]+'</h1></div></div>';
        }


    abilities.innerHTML = abilitiesHTML;
}
