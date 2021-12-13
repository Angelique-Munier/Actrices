$(function(){
   
    
    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,
        
    init = function(){
        
    bindEvents();  
    
    if(validIndex(openedIndex)){
         animateItem($mainMenuItems.eq(openedIndex), true, 700);
    }    
        
    },
   
        bindEvents = function(){
            
                 $mainMenuItems.children(".images").click(function(){
            
            //je clique sur class images et jobtioen l'index sur le quel j'ai cliquer
            var newIndex = $(this).parent().index();//je met virgule a lieu de ;
        
                checkAndAnimateItem(newIndex);
        });
            
            $(".button").hover(function(){
                
                    $(this).addClass("hovered");
                },
                 
                function(){
                    $(this).removeClass("hovered");
                
            }
            );
            
            $(".button").click(function(){
                
                var newIndex = $(this).index();
                
                checkAndAnimateItem(newIndex);
            });
            
    },
        
            
            
     
        
        validIndex = function(indexToCheck){
          
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        },
        
        animateItem = function($item, toOpen, speed){
        
            var $colorImage = $item.find(".color"),
        
             //syntax e l'autre ecriture une expression si oui valeur 1 si non valeur 2
                //expression ? valeur1 : valeur2
        
            //est ceque c'estouvert?si non faire 420px sinon 140px
            itemParam = toOpen ? {width:"420px"}:{width:"140px"} ,
            colorImageParam = toOpen ? {left:"0px"}:{left:"140px"};
               
            
            //je fais passer l'image sur lequel j'ai cliquer en couleur
            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam,speed);
        
    },
        
      checkAndAnimateItem = function(indexToCheckAndAnimate){
          
           if(openedIndex === indexToCheckAndAnimate){
               
                 animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            }else{
                if(validIndex(indexToCheckAndAnimate)){
                     animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }    
                
             
       
          
      };  
    
    
    
     
            
    init();  
        
        
    
    
    
    
});



//   //item sur le lequel j'ai cliquer et cela va me retourne l'index
//           
//            animateItem($item, true, 250);
//            openedIndex = newIndex;
            

// //mettr image coloré dans une variable cherche les descend class color
//            $colorImage = $item.find(".color");
//            
//            //je fais passer l'image sur lequel j'ai cliquer en couleur
//            $colorImage.animate({left:"0px"}, 250);
//            $item.animate({width:"420px"}, 250);