export default {

    videos: {

        intro1: {

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

            self: {

                url: "intro2.mp4",
                controls: true,
                options: {}

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

            self: {
            },
            audio_container: [
              
            ],
            video_container: [
               
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


            self: {

                url: "valorant_banane.mp4",
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
                    at: 4,
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
                    at: 7.5,
                    id: "banane",
                    text: "Banane",
                    route: "shooting_remake",
                    img: "banane.png",
                    type: "choice"
                },
                
                {
                    at: 7.5,
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


            self: {

                url: "valorant_couteau.mp4",
                controls: true,
             },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                {
                    at: 4,
                    text:"Go to teh Jungle",
                    id:"jungle",
                    route: "jungle_couteau",
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

        valorant_fusil: {


            self: {

                url: "valorant_fusil.mp4",
                controls: true,
             },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                {
                    at: 4,
                    text:"Go to teh Jungle",
                    id:"valorant_fusil",
                    route: "jungle_fusil",
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
        shooting_remake: {

            self: {
                // url: "valorant_fusil.mp4",
                // controls: true,

            },

            audio_container: [
                {
                    isLooping:false,
                    isAutoPlay:true,
                    url:"naruto-background-sound.mp3",
                    type:"sound"
                }
            ],
            video_container: [
               
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
        jungle_couteau: {

            self: {
                url: "jungle_couteau.mp4",
                controls: true,

            },
           
            audio_container: [
                {
                    
                    url:"rain-background.mp3",
                    type:"bg_sound",
                    isLooping:true
                }
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

        jungle_banane: {

            self: {
                url: "jungle_banane.mp4",
                controls: true,

            },
           
            audio_container: [
                {
                    
                    url:"rain-background.mp3",
                    type:"bg_sound",
                    isLooping:true
                }
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

        scribe_1: {
            self:{
                url: "scribe_1.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                    {
                        at: 0,
                        text:"Aller dans la foret",
                        id:"foret1",
                        route: "foret",
                        type:"choice",
                    },
                    {
                        at: 0,
                        text:"Parler au PNJ",
                        id:"scribe_2",
                        route: "scribe_2",
                        type:"choice",
                    },

                ]

        },
        scribe_2: {
            self:{
                url: "scribe_2.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                    {
                        at: 0,
                        text:"Aller dans la foret",
                        id:"foret2",
                        route: "foret",
                        type:"choice",
                    },
                    {
                        at: 0,
                        text:"Parler au PNJ",
                        id:"scribe_3",
                        route: "scribe_3",
                        type:"choice",
                    },

                ]

        },
        scribe_3: {
            self:{
                url: "scribe_3.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                    {
                        at: 0,
                        text:"Aller dans la foret",
                        id:"foret3",
                        route: "foret",
                        type:"choice",
                    },
                    {
                        at: 0,
                        text:"Parler au PNJ",
                        id:"scrib_4",
                        route: "scribe_4",
                        type:"choice",
                    },

                ]

        },
        scribe_4: {
            self:{
                url: "scribe_4.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                    {
                        at: 0,
                        text:"Aller dans la foret",
                        id:"4foret",
                        route: "foret",
                        type:"choice",
                    },
                    {
                        at: 0,
                        text:"Parler au PNJ",
                        id:"scrib_last",
                        route: "scribe_last",
                        type:"choice",
                    },

                ]

        },
        scribe_last: {
            self:{
                url: "scribe_last.mp4",
                controls: true,
                
            },
            audio_container: [
              
            ],
            video_container: [
               
            ],
            timedActions: [

                    {
                        at: 25.3,
                        text:"Aller dans cette putin de foret",
                        id:"5foret",
                        route: "foret",
                        type:"choice",
                    },
               

                ]

        },
        foret: {
            self:{
                url: "foret.mp4",
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

    }
}

