export default {

    videos: {

        intro1: {

            self: {

                url: "intro1.mp3",
                controls: true,
                options: {

                }
 
            },

            components: {

                items: [
                    { 
                        apparitionTimeCode: 1, 
                        url: "", 
                        mana: 0,
                        vie: 0  
                    },
                ],

                choices: [
                    {
                        id: "bouillant",
                        text: "Oui !",
                        route: "intro2",
                        choiceTimeCode: 2
                    },
                ],

                relances: [
                    { 
						delay: 1000, 
						url: "" 
					}
                ]

            },
        },
        
        intro2: {

            self: {

                url: "intro2.mp3",
                controls: true,
                options: {}

            },

            components: {


                choices: [
           
                    {
                        id: "start",
                        text: "Start the game",
                        route: "weed",
                        choiceTimeCode: 36
                    }
                ],

                relances: [
                    {
                        delay: 10000,
                        url: ""
                    }
                ]

            }

        },

        weed: {

            self: { 

                url: "weed_start.mp3",
                controls: true,
                options: {}
 
            },

            components: {

                choices: [
         
                    {
                        id: "hokage",
                        text: "Devenir Hokage",
                        route: "hokage",
                        choiceTimeCode: 35
                    },
                    {
                        id: "papillon",
                        text: "Chasser les papillons",
                        route: "papillon",
                        choiceTimeCode: 36
                    }
                ],

                relances: [
                    { 
						delay: 8000, 
						url: "" 
					}
                ]

            }

        },

        hokage: {

            self: { 

                url: "weed_start.mp4",
                controls: true,
                options: {}
 
            },

            components: {

                choices: [
         
                    {
                        id: "banane",
                        text: "Banane",
                        choiceImage: "banane.png",
                        audio: "weed_hokage_banane.mp3",
                        choiceTimeCode: 55
                    },
                    {
                        id: "couteau",
                        text: "Couteau",
                        choiceImage: "couteau.png",
                        audio: "weed_hokage_couteau.mp3",
                        choiceTimeCode: 56
                    },
                    {
                        id: "fusil",
                        text: "Fusil",
                        choiceImage: "fusil.png",
                        audio: "weed_hokage_fusil.mp3",
                        choiceTimeCode: 57
                    }
                ],

                images: [
                    { 
                        banane: [
                           
                                { banane_face: "img/bananeface.jpg" , appear_time: 1 },
                                { nicolas_cage: "img/nicolascage.jpg" ,  appear_time: 1.5 },
                                { black_kid_meme: "img/blackkidmeme.jpg" ,  appear_time: 1.7 },
                                { old_boy_meme: "img/oldboymeme.jpg" ,  appear_time: 2 }
                        ],
                        couteau: [

                                { banane_face: "img/couteau.jpg", appear_time: 1 },
                                { nicolas_cage: "img/nicolascage.jpg", appear_time: 1.5 },
                                { black_kid_meme: "img/blackkidmeme.jpg", appear_time: 1.7 },
                                { old_boy_meme: "img/oldboymeme.jpg", appear_time: 2 }

                        ],
                        fusil: [

                                { fusil: "img/fusil.jpg", appear_time: 1 },
                                { nicolas_cage: "img/nicolascage.jpg", appear_time: 1.5 },
                                { black_kid_meme: "img/blackkidmeme.jpg", appear_time: 1.7 },
                                { old_boy_meme: "img/oldboymeme.jpg", appear_time: 2 }

                        ],
                    },
                ],

                relances: [
                    { 
						delay: 8000, 
						url: "" 
					}
                ]

            }

        },

        ninja_training: {

            self: {

                url: "naruto",
                audio: "naruto_ninja_sound.mp3",
                controls: true,
                options: {}

            },

            components: {

                choices: [
                    {
                        id: "Valorant",
                        choiceTimeCode: 55 
                        // a la place de choiceTimeCode, viandra une condition qui dira : quand le dernier monstre (le 3éme genre) est die (0hp), alors on vien pécho l'id pour envoyé sur le component valorant dchirekt 
                    },
        
                ],

                background: [

                    { montagne_left: "img/background/montagne_left_dbz.png" },
                    { montagne_rigt: "img/background/montagne_right_dbz.png" },
                   
                ],

                enemy: [
                     { 
                        life_enemy_1: 100,
                        life_enemy_2: 100,
                        life_enemy_3: 100,
                                        
                        audio: [
                            { appear : "enemy_appear.mp3" },
                            { touched : "enemy_hitted.mp3" },
                            { attack : "enemy_attack.mp3" },
                            { last_one : "enemy_lastOne.mp3" },
                        ],

                        images: [

                            { 
                                castaner_living: "img/castaner_dying.png",
                                appear_time: 1,
                                castaner_dying: "img/castaner_dying.png",
                                missile: "img/castaner_missile.png"
                            },
                            { 
                                cohen_bendit_living: "img/cohen_bendit_living.png",
                                appear_time: 1.5,
                                cohen_bendit_dying: "img/cohen_bendit_dying.png",
                                missile: "img/cohen_bendit_missile.png"
                            },
                            { 
                                blanker_living: "img/blanker_face.png",
                                appear_time: 1.7,
                                blanker_dying: "img/blanker_dying.png",
                                missile: "img/blanker_missile.png"
                             },
                            
                        ],

                        weapon : [
                            {
                                cursors: [
                                    { cursor_fusil: "img/sprites/cursor_fusil.png" },
                                    { cursor_couteau: "img/sprites/cursor_couteau.png" },
                                    { cursor_banane: "img/sprites/cursor_banane.png" }
                                ],

                                sprite: [
                                    { hit_fusil: "img/sprites/hit_fusil.gif" },
                                    { hit_couteau: "img/sprites/hit_couteau.gif" },
                                    { hit_banane: "img/sprites/hit_banane.png" }
                                ],

                                sound: [
                                    { shot_fusil: "sounds/shot/fusil" },
                                    { shot_couteau: "sounds/shot/shotgun" },
                                    { shot_banane: "sounds/shot/banane" },
                                ]
                            }
                        ]
                    }
                ],

            

                relances: [
                    {
                        delay: 8000,
                        url: "relances/ninja_training_relance_1.mp3"
                    }
                ]

            }

        },

    }

}
