$(function (){
   $('.menu_item').mouseover(function (){
        $(this).find('> .mega_menu').show();
        $(this).find('> .sub_menu_gabarie').show();
   });
   
   $('.menu_item').mouseout(function (){
       $(this).find('> .sub_menu_gabarie').hide();
       $(this).find('.mega_menu').hide();
   })
   $('.sub_menu_item').mouseover(function (){
        $(this).find('> .sub_menu_gabarie').show();
   });
   
   $('.sub_menu_gabarie').mouseout(function (){
      $(this).hide(); 
   });
   
   $('.mega_menu').mouseout(function (){
      $(this).hide(); 
   });
   
   $('.side_bar_menu_item').click(function (){
      $('.sub_side_bar:visible').hide();
      $(this).find('> .sub_side_bar').show();
   });
   
   isSideBarHidden = true;
   $('.menu_side_bar').click(function (){
       $('.menu:visible').hide();
      if(isSideBarHidden){
          $('.side_bar').show();
          isSideBarHidden = false;
      } 
        else{
            $('.side_bar').hide();
            isSideBarHidden = true;
        }
   });
   isMenuHidden = true;
   $('.menu_icon img:nth-child(2)').click(function (){
       $('.side_bar:visible').hide();
       if(isMenuHidden){
            $('.menu').show();
            isMenuHidden = false;
       }
       else{
           $('.menu').hide();
           isMenuHidden = true;
       }
        
   });
});