export default {

    videos: {

        intro1: {
            id: 'intro1',
            self: {

                url: "intro1.mp4",
                controls: true,
                options: {

                }
 
            },
     
            timedChoices: [

                    {
                        at: 12,
                        id: "intro2",
                        text: "éh wa chu bouillant",
                        route: "intro2",
                        type: "choice"
                    },
             


                ],


          
        },
        
        intro2: {
            id: 'intro2',
            self: {

                url: "intro2.mp4",
                controls: true,
               
            },

            timedChoices: [

                {
                    at: 15,
                    id: "weed",
                    text: "Start Teh Game",
                    route: "weed",
                    type: "choice"
                },

            ],

        },

        weed: {
            id: 'weed',
            self: { 

                url: "weed_start.mp4",
                controls: true,
                options: {

                }
 
            },
            timedAudios : [
                {
                  
                    at: 1,
                    id: 'bobmarley',
                    url: 'bob_marley.mp3',
                    isContinue: true,
                    type: 'sound'
                }

            ],

            timedChoices: [
    
                {
                    at: 56.5,
                    id: "hokage",
                    text: "Devenir Hokage",
                    route: "hokage",
                    type: "choice"
                },
                
                {
                    at: 57.5,
                    id: "papillon",
                    text: "Chasser les papillons",
                    route: "papillon",
                    type: "choice"
                },
              
            ]

        },

        hokage: {
            id: 'hokage',
            self: { 

                url: "weed_hokage.mp4",
                controls: true,
                options: {}
 
            },
            
            timedChoices: [
         
                    {
                        at: 7.5,
                        id: "banane",
                        text: "Banane",
                        route: "banane",
                        img: "banane.png",
                        type: "choice"
                    },
                    
                    {
                        at: 7.5,
                        id: "couteau",
                        text: "Couteau",
                        route: "couteau",
                        img: "couteau.png",
                        type: "choice"
                    },
                    {
                        at: 7.5,
                        id: "fusil",
                        text: "Fusil",
                        route: "fusil",
                        img: "fusil.png",
                        type: "choice"
                    }
                ],

                timedAudios:[
                    {
                        at: 7.5,
                        mustStop: true,
                        type:"sound"
                    }
                ]
        },


        banane: {
            id:"banane",
            self: {

                url: "weed_hokage_banane.mp4",
                controls: true,
                options: {
                    
                }
            },

            timedAudios: [
                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound"
                },
            ],

            timedImposedRoots: [
                {
                    at: 40,
                    id:"shooting",
                    route: "shooting",
                    type:"imposed",

                }
            ]
        },

        couteau: {
            id:"couteau",
            self: {

                url: "weed_hokage_couteau.mp4",
                controls: true,
                options: {
            
                }
            },
            timedAudios: [
                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound"
                },
            ],

            timedImposedRoots: [
                {
                    at: 40,
                    id:"shooting",
                    route: "shooting",
                    type:"imposed",

                }
            ]
        },

        fusil: {
            id:"fusil",
            self: {

                url: "weed_hokage_fusil.mp4",
                controls: true,
                options: {
                
                }
            },
            timedAudios: [
                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound"
                },
            ],

            timedImposedRoots: [
                {
                    at: 40,
                    id:"shooting",
                    route: "shooting",
                    type:"imposed",

                }
            ]
        },


        shooting:  {
            id:"shooting",
            isBackground: true,
 
            backgrounds: [
         
                {   
                    url:"shooting_naruto.mp4",
                    control:true,
                    css:{},
                    isLooping: true,
                    displayControl: false,
                    type:"video"
                
                },
            ],
            enemy: [
            {  
                id: "castaner",
                url: "castaner.png",
                vie: 100,
                type: "enemy"
                
            },
            {
                id: "castex",
                url: "castex.png",
                vie: 100,
                type: "enemy"
                
            },
            
         
        ],

        },

        valorant_banane: {
            id:"valorant_banane",

            self: {

                url: "valorant_banane.mp4",
                controls: true,
                options: {
                
                }
             },
            backgrounds: [],
            timedChoices: [

                {
                    at: 14,
                    text:"Aller dans la jungle",
                    id:"valorant_fusil",
                    route: "jungle_banane",
                    type:"choice",
                },
      
                {
                    at: 15,
                    id: "couteau",
                    text: "Couteau",
                    route: "shooting_remake",
                    img: "couteau.png",
                    type: "choice"
                },
                {
                    at: 7.5,
                    id: "fusil",
                    text: "Fusil",
                    route: "shooting_remake",
                    img: "fusil.png",
                    type: "choice"
                },
            ],
            timedAudios: [
                {
                    at:0,
                    to:33,
                    isLooping:false,
                    url:"background/valorant_sound.mp3",
                    type:"sound"
                }
            ]

            },

        
        valorant_couteau: {

            id:"valorant_couteau",
            self: {

                url: "valorant_couteau.mp4",
                controls: true,
             },
            background_container: [],
            timedChoices: [

                {
                    at: 4,
                    text:"Aller dans la jungle",
                    id:"jungle",
                    route: "fantome_noyade",
                    type:"choice",
                },
                {
                    at: 7.5,
                    id: "banane",
                    text: "Banane",
                    route: "shooting_remake",
                    img: "banane.png",
                    type: "choice"
                },
                
                {
                    at: 7.5,
                    id: "fusil",
                    text: "Fusil",
                    route: "shooting_remake",
                    img: "fusil.png",
                    type: "choice"
                },
            ],
            timedAudios: [
                {
                    at:0,
                    to:33,
                    isLooping:false,
                    url:"background/valorant_couteau_sound.mp3",
                    type:"sound"
                }
            ]
             
            },

        valorant_fusil: {
            id:"valorant_fusil",

            self: {

                url: "valorant_fusil.mp4",
                controls: true,
             },
            background_container: [],
            timedChoices: [

                {
                    at: 23,
                    text:"Aller dans la jungle",
                    id:"valorant_fusil",
                    route: "jungle_fusil",
                    type:"choice",
                },
                
                {
                    at: 23,
                    id: "banane",
                    text: "Banane",
                    route: "shooting_remake",
                    img: "banane.png",
                    type: "choice"
                },
                
                {
                    at: 23,
                    id: "couteau",
                    text: "Couteau",
                    route: "shooting_remake",
                    img: "couteau.png",
                    type: "choice"
                },
            ],
            timedAudios: [
                {
                    at:0,
                    to:33,
                    isLooping:false,
                    url:"background/valorant_fusil_sound.mp3",
                    type:"sound"
                }
            ]
            },
        shooting_remake: {
            id:"shooting_remake",
            isBackground: true,
          
            backgrounds: [
         
                {   
                    url:"shooting_naruto.mp4",
                    control:true,
                    css:{},
                    isLooping: true,
                    displayControl: false,
                    type:"video"
                
                },
                {
                    url:"naruto-background-sound.mp3",
                    controle: true,
                    type:"audio"

                }
            ],
            timedAudios: [],
            enemy: [
            {  
                id: "castaner",
                url: "castaner.png",
                vie: 100,
                type: "enemy"
                
            },
            {
                id: "castex",
                url: "castex.png",
                vie: 100,
                type: "enemy"
                
            },
  
        ],

        },

        fantome_noyade: {
            id:"fantome_noyade",
            self: {
                url: "fantome_noyade.mp4",
                controls: true,

            },
            timedChoices: [

                {
                    at: 56,
                    to: 63,
                    text:"Noyer le fantome",
                    id:"noyade_1",
                    route: "noyade_1",
                    type:"choice",
                },
                
                {
                    at: 70,
                    to: 75,
                    text:"222 NOYER FANTOME",
                    id:"noyade_2",
                    route: "noyade_2",
                    type:"choice",
                },

            ]

        },
        noyade_1: {
            id:"noyade_1",
            self: {
                url: "jungle_fusil.mp4",
                controls: true,

            },
           
            timedChoices: [

                {
                    at: 4,
                    text:"foret",
                    id:"foret",
                    route: "foret",
                    type:"choice",
                },
                
                {
                    at: 4,
                    text:"Parler au PNJ",
                    id:"scribe_1",
                    route: "scribe_1",
                    type:"choice",
                },
                {  
                    at:0,
                    url:"background/rain-background.mp3",
                    type:"sound",
                    isLooping:true
                },

            ]

        },

        diablo: {
            id:"diablo",
            self: {
                url: "diablo.mp4",
                controls: true,

            },
           
            timedChoices: [

                {
                    at: 4,
                    text:"foret",
                    id:"foret",
                    route: "foret",
                    type:"choice",
                },
                {
                    at: 4,
                    text:"Parler au PNJ",
                    id:"scribe_1",
                    route: "scribe_1",
                    type:"choice",
                },

            ]
        },

        cyberpunk: {
            id:"cyberpunk",
            self:{
                url: "cyberpunk.mp4",
                controls: true,
                
            },
            timedChoices: [],
            ctas: [
                {
                    id:"esquive_fleche",
                    at: 2,
                    to: 5,
                    text:'ESQUIVE FLECHE!',
                    type:"dodge",
                    display:true
                },
                {
                    id:"esquive_chat",
                    at: 6,
                    to: 7,
                    text:'ESQUIVE CHAT!',
                    type:"dodge",
                    display:true
                }
            ],

        },

        generique: {
            id:"generique",
            self:{
                url: "generique.mp4",
                controls: true,
            },

            timedChoices: [
           
        
             ],
        
            boss: [
                {   id: "boss_fusil",
                    url: "boss.png",
                    vieBoss: 1000,
                    degatBoss: 10,
                    type: "boss"
                   
                },
            ],

        },

    }
}

