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
            timedActions: [

         {
                    at: 4,
                    text:"Go to teh Jungle",
                    id:"valorant_fusil",
                    route: "jungle",
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
            timedActions: [

                {
                    at: 4,
                    text:"Go to teh Jungle",
                    id:"jungle",
                    route: "jungle",
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
            timedActions: [

                {
                    at: 4,
                    text:"Go to teh Jungle",
                    id:"valorant_fusil",
                    route: "jungle",
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
           
            audio_container: [
                {
                    isLooping:false,
                    isAutoPlay:true,
                    url:"naruto-background-sound.mp3",
                    type:"sound"
                }
            ]


        },
        jungle: {

            self: {
              

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
            ]


        },

    }
}

