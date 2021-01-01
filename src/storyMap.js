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
                        at: 5,
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
                    at: 5,
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
                    at: 2,
                    id: "hokage",
                    text: "Devenir Hokage",
                    route: "hokage",
                    type: "choice"
                },
                
                {
                    at: 4,
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
                        type: "choice"
                    },
                    
                    {
                        at: 7.5,
                        id: "couteau",
                        text: "Couteau",
                        route: "couteau",
                        type: "choice"
                    },
                    {
                        at: 7.5,
                        id: "fusil",
                        text: "Fusil",
                        route: "fusil",
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
                        at: 35,
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
                    at: 36,
                    url: "naruto-sound.mp3",
                    type:"sound"
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
            }

        },

    }

