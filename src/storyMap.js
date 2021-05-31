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
     
            timedActions: [

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
            audio_container: [
              
            ],
            video_container: [
          
            ],

            timedActions: [

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
            audio_container: [
              
            ],
            video_container: [
 
            ],


            timedActions: [
    
                {
                    at: 56.5,
                    id: "hokage",
                    text: "Devenir Hokage",
                    route: "hokage",
                    type: "choice"
                },
                
                {
                    at: 57.6,
                    id: "papillon",
                    text: "Chasser les papillons",
                    route: "papillon",
                    type: "choice"
                },
                {
                  
                    at: 1,
                    id: 'bobmarley',
                    url: 'bob_marley.wav',
                    isContinue: true,
                    type: 'sound'
                }

            ]

        },

        hokage: {
            id: 'hokage',
            self: { 

                url: "weed_hokage.mp4",
                controls: true,
                options: {}
 
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],

            timedActions: [
         
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
        },


        banane: {
            id:"banane",
            self: {

                url: "weed_hokage_banane.mp4",
                controls: true,
                options: {
                    
                }
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                    {
                        at: 18,
                        url: "naruto-sound.mp3",
                        type:"sound",
                        
                    },
                    {
                        at: 40,
                        id:"shooting",
                        route: "shooting",
                        type:"choice",
                      
                    
                    },
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
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
    
                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound"
                },
                {
                    at: 41,
                    id:"shooting",
                    route: "shooting",
                    type:"choice",
            
                },
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
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound",
                    
                },
                {
                    at: 41,
                    id:"shooting",
                    route: "shooting",
                    type:"choice",
            
                },


            ]
        },


        shooting: {
            id:"shooting",
            self: {
            },
            audio_container: [
              
            ],
            video_container: [
                {   
                    url:"shooting_naruto.mp4",
                    type:"video",
                    isLooping:true
                }
            ],

            enemy: [
                {   id: "castaner",
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
            audio_container: [
                {
                  
                    url:"valorant_sound.mp3",
                    type:"sound"
                }
            ],
            video_container: [
               
            ],
            timedActions: [

                {
                    at: 14,
                    text:"Go to teh Jungle",
                    id:"valorant_fusil",
                    route: "jungle_banane",
                    type:"choice",
                },
                
                {
                    at: 4,
                    text:"SHOOT DEM'ALL",
                    id:"shooting_remake",
                    route: "shooting_remake",
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
                }
              
              
            ]
            },

        
        valorant_couteau: {

            id:"valorant_couteau",
            self: {

                url: "valorant_couteau.mp4",
                controls: true,
             },
            audio_container: [
                {
                    isLooping:false,
                    isAutoPlay:true,
                    url:"valorant_couteau_sound.mp3",
                    type:"sound"
                }
            ],
            video_container: [
               
            ],
            timedActions: [

                {
                    at: 4,
                    text:"Go to teh Jungle",
                    id:"jungle",
                    route: "fantome_noyade",
                    type:"choice",
                },
                
                {
                    at: 4,
                    text:"SHOOT DEM'ALL",
                    id:"shooting_remake",
                    route: "shooting_remake",
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
                }
              
            ]
             
            },

        valorant_fusil: {
            id:"valorant_fusil",

            self: {

                url: "valorant_fusil.mp4",
                controls: true,
             },
            audio_container: [
                // {
                //     isLooping:false,
                //     isAutoPlay:true,
                //     url:"valorant_fusil_sound.mp3",
                //     type:"sound"
                //   }
              
            ],
            video_container: [
               
            ],
            timedActions: [

                {
                    at: 23,
                    text:"Go to teh Jungle",
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
                {
                    at:0,
                    to:33,
                    isLooping:false,
                    isAutoPlay:true,
                    url:"background/valorant_fusil_sound.mp3",
                    type:"sound"
                }
                  
              
            ]
            },
        shooting_remake: {
            id:"shooting_remake",
            self: {
                // url: "valorant_fusil.mp4",
                // controls: true,

            },
           

            audio_container: [
            {
                
                url:"naruto-background-sound.mp3",
                type:"sound"
            }

            ],
            video_container: [
            {   
                url:"shooting_naruto.mp4",
                type:"video",
                isLooping:true
            }
            ],

            enemy: [
            {   id: "castaner",
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
           
            audio_container: [
      
            ],
            video_container: [
                {
                    
                    url:"rain-background.mp4",
                    type:"video",
                    isLooping:false
                    
                }
            ],
            timedActions: [

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
           
            video_container: [
                {
                    
    
                }
            ],
            timedActions: [

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

        jungle_banane: {
            id:"jungle_banane",
            self: {
                url: "jungle_banane.mp4",
                controls: true,

            },
           

            video_container: [
                {
                    
                    url:"rain-background.mp4",
                    type:"video",
                    isLooping:false
                    
                }
            ],
            timedActions: [

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

        
        foret_banane: {
            id:"foret_banane",
            self:{
                url: "foret_banane.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
           
        
            ],
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
        foret_couteau: {
            id:"foret_couteau",
            self:{
                url: "foret_couteau.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
           
        
             ],
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
        foret_fusil: {
            id:"foret_fusil",
            self:{
                url: "foret_fusil.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
           
        
             ],
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
        boss_banane: {
            id:"boss_banane",
            self:{
           
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
           
        
             ],
        
            boss: [
                {   id: "boss_banane",
                    url: "boss.png",
                    vieBoss: 1000,
                    degatBoss: 10,
                    type: "boss"
                   
                },
            ],

        },
        boss_couteau: {
            id:"boss_couteau",
            self:{
           
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
           
        
             ],
        
            boss: [
                {   id: "boss_couteau",
                    url: "boss.png",
                    vieBoss: 1000,
                    degatBoss: 10,
                    type: "boss"
                   
                },
            ],

        },
        boss_fusil: {
            id:"boss_fusil",
            self:{
           
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
           
        
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
        generique: {
            id:"generique",
            self:{
                url: "generique.mp4",
                controls: true,
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [
           
        
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

