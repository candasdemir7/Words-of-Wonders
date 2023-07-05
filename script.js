$(function(){
    
    function difference(arr1, arr2) {
        return arr1.filter(x => !arr2.includes(x));
      }

    function fill()
    {
        let Array=[];

        while(Array.length<5)
        {
            let randomInt=Math.floor(Math.random()*5);

            if(!Array.includes(randomInt))
                Array.push(randomInt);
        }  

        $("#a1").text(array[Array[0]]).css({"font-size":"52px","align-items":"center"});
        $("#a2").text(array[Array[1]]).css({"font-size":"52px","align-items":"center"});
        $("#a3").text(array[Array[2]]).css({"font-size":"52px","align-items":"center"});
        $("#a4").text(array[Array[3]]).css({"font-size":"52px","align-items":"center"});
        $("#a5").text(array[Array[4]]).css({"font-size":"52px","align-items":"center"});

        return Array;
    };
    
    let array=["K","O","K","U","R"];let çıktı=["OKUR","KORU","KORKU", "KOR", "KUR"]; let cpyarr=[];
    let word=""; let counter=0; let hintc=0;
    let lClickCounter=[0,0,0,0,0]; let wdisplayC=[0,0,0,0,0,0]; let lChecker=[];
    let letters=["#p1","#p2","#p3","#p4","#p5","#p6","#p7","#p8","#p9","#p10","#p11","#p12","#p13", "#p14","#p15"];
    let Outletters=[];let valid=false;
   

    if($("#a1,#a2,#a3,#a4,#a5").is(":empty"))
    {
        cpyarr=fill();
    };


    function empty()
    {
             $("#a1").html("").css({"font-size":"52px","align-items":"center"});
         $("#a2").html("").css({"font-size":"52px","align-items":"center"});
             $("#a3").html("").css({"font-size":"52px","align-items":"center"});
             $("#a4").html("").css({"font-size":"52px","align-items":"center"});
                     $("#a5").html("").css({"font-size":"52px","align-items":"center"});
    };


    $("#a1").on("click",function(){
        if(lClickCounter[0]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#a1").animate({"top":"+=10"},70);
                    $("#a1").animate({"top":"-=10"},70);
                }
        }
       if(counter<5&&!word.includes(array[cpyarr[0]]))
       {
        $("#container").append(array[cpyarr[0]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"	#7fffd4"});
        $(this).css("background-color","#7fffd4");
        //$(this).animate({"color":"white"},100);
        word=word.concat(array[cpyarr[0]]);
        counter++;
        lClickCounter[0]++;
       }
    });
    $("#a2").on("click",function(){
        if(lClickCounter[1]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#a2").animate({"top":"+=10"},70);
                    $("#a2").animate({"top":"-=10"},70);
                }
        }
        if(counter<5&&!word.includes(array[cpyarr[1]]))
        {
        $("#container").append(array[cpyarr[1]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"	#7fffd4"});
        $(this).css("background-color","#7fffd4");
        word=word.concat(array[cpyarr[1]]);
        counter++;
        lClickCounter[1]++;
        }
    });

    $("#a3").on("click",function(){
        if(lClickCounter[2]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#a3").animate({"top":"+=10"},70);
                    $("#a3").animate({"top":"-=10"},70);
                }
        }
        if(counter<5&&!word.includes(array[cpyarr[2]]))
        {
        $("#container").append(array[cpyarr[2]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"	#7fffd4"});
        $(this).css("background-color","#7fffd4");
        word=word.concat(array[cpyarr[2]]);
        counter++;
        lClickCounter[2]++;
        }
    });
    $("#a4").on("click",function(){
        if(lClickCounter[3]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#a4").animate({"top":"+=10"},70);
                    $("#a4").animate({"top":"-=10"},70);
                }
        }
       if(counter<5&&!word.includes(array[cpyarr[3]]))
       {
        $("#container").append(array[cpyarr[3]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"	#7fffd4"});
        $(this).css("background-color","#7fffd4");
        word=word.concat(array[cpyarr[3]]);
        counter++;
        lClickCounter[3]++;
       }
    });


    $("#a5").on("click",function(){
        if(lClickCounter[4]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#a5").animate({"top":"+=10"},70);
                    $("#a5").animate({"top":"-=10"},70);
                }
        }
        if(counter<5&&!word.includes(array[cpyarr[4]]))
        {
        $("#container").append(array[cpyarr[4]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"	#7fffd4"});
        $(this).css("background-color","#7fffd4");
        word=word.concat(array[cpyarr[4]]);
        counter++;
        lClickCounter[4]++;
        }
    });

    $("#r2 img").on("mouseover",function(){
       $(this).css("opacity","1");
    });

    $("#r2 img").on("mouseout",function(){
        $(this).css("opacity","0.5");
    });

    $("#r2 img").mousedown(function(event){
      if(word==""&&event.which==1)
      {
        empty();
        $("#a1,#a2,#a3,#a4,#a5").css("background-color","");
        cpyarr=fill();
        //$("#container").text("");
        $("#container").css({"width":"50px","display":"none"});
        counter=0;
        lClickCounter=[0,0,0,0,0];
        //word="";
      }else if((event.which==1&&word!==""))
      {
          
          for(let i=0;i<3;i++)
          {
              $("#r2 img").animate({"left":"+=10"},90);
              $("#r2 img").animate({"left":"-=10"},90);
          }
      }
    });

    $("#r1 div,#r2 div,#r3 div").on("mouseover",function(){
        $(this).css("cursor","pointer");
    });

    $("#ipucu img").on("mouseover",function(){
        $(this).css("cursor","pointer");
    });

    $("#ipucu img").on("mouseover",function(){
        $(this).css("opacity","0.9");
    });

    $("#ipucu img").on("mouseout",function(){
        $(this).css("opacity","0.9");
    });

    $("#ipucu img").on("click",function(){
        if(hintc==0)
        {
            if( wdisplayC[0]==0)
            {
                $("#p1").fadeIn(1000);
                $("#p3").fadeIn(1000);
                $("#p5").fadeIn(1000);
                $("#p9").fadeIn(1000);
            }
            if( wdisplayC[1]==0)
            {
                $("#p2").fadeIn(1000);
                $("#p4").fadeIn(1000);
                $("#p6").fadeIn(1000);
                $("#p11").fadeIn(1000);  

            }
            if( wdisplayC[2]==0)
            {
                $("#p7").fadeIn(1000);
                $("#p8").fadeIn(1000);
                $("#p9").fadeIn(1000);  
                $("#p10").fadeIn(1000);  
                $("#p11").fadeIn(1000);  

            }
            
            if( wdisplayC[3]==0)
            {
                $("#p7").fadeIn(1000);
                $("#p12").fadeIn(1000);
                $("#p14").fadeIn(1000);  
             

            }

            if( wdisplayC[4]==0)
            {
                $("#p10").fadeIn(1000);
                $("#p13").fadeIn(1000);
                $("#p15").fadeIn(1000);  

            }

            hintc++;
        }
        else
        {
            Outletters=difference(letters,lChecker);
            console.log(Outletters);
            for(let i=0;i<Outletters.length;i++)
            {
                $(Outletters[i]).fadeOut(1000);
            }

            hintc=0;
        }
    });

    

    $("#background").contextmenu(function(event){
        event.preventDefault();
        if(word!=="")
        {
            event.preventDefault();
            if(çıktı.includes(word))
            {
                switch(word)
                    {
                        case "OKUR":{

                            if( wdisplayC[0]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p1").fadeOut(150).fadeIn(150);
                                    $("#p3").fadeOut(150).fadeIn(150);
                                    $("#p5").fadeOut(150).fadeIn(150);
                                    $("#p9").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p1").css({"color":"white","opacity":"1"});
                            $("#p1").fadeIn(1000);
                            $("#d1").css({"background-color":"	#7fffd4"});

                            $("#p3").css({"color":"white","opacity":"1"});
                            $("#p3").fadeIn(1000);
                            $("#d3").css({"background-color":"	#7fffd4"});

                            $("#p5").css({"color":"white","opacity":"1"});
                            $("#p5").fadeIn(1000);
                            $("#d5").css({"background-color":"	#7fffd4"});

                            $("#p9").css({"color":"white","opacity":"1"});
                            $("#p9").fadeIn(1000);
                            $("#d9").css({"background-color":"	#7fffd4"});
                           

                            
                            if(!lChecker.includes("#p1"))
                                lChecker.push("#p1");
                            if(!lChecker.includes("#p3"))
                            lChecker.push("#p3");
                            if(!lChecker.includes("#p5"))
                            lChecker.push("#p5");
                             if(!lChecker.includes("#p9"))
                             lChecker.push("#p9");
                        

                            valid=true;
                            wdisplayC[0]++;
                        };break;
                        case "KORU":{

                            if( wdisplayC[1]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p2").fadeOut(150).fadeIn(150);
                                    $("#p4").fadeOut(150).fadeIn(150);
                                    $("#p6").fadeOut(150).fadeIn(150);
                                    $("#p11").fadeOut(150).fadeIn(150);
                                
                                }
                            }
                            $("#p2").css({"color":"white","opacity":"1"});
                            $("#p2").fadeIn(1000);
                            $("#d2").css({"background-color":"	#7fffd4"});

                            $("#p4").css({"color":"white","opacity":"1.1"});
                            $("#p4").fadeIn(1000);
                            $("#d4").css({"background-color":"	#7fffd4"});

                            $("#p6").css({"color":"white","opacity":"1.1"});
                            $("#p6").fadeIn(1000);
                            $("#d6").css({"background-color":"	#7fffd4"});

                            $("#p11").css({"color":"white","opacity":"1.1"});
                            $("#p11").fadeIn(1000);
                            $("#d11").css({"background-color":"	#7fffd4"});

                            if(!lChecker.includes("#p2"))
                            lChecker.push("#p2");
                            if(!lChecker.includes("#p4"))
                            lChecker.push("#p4");
                            if(!lChecker.includes("#p6"))
                            lChecker.push("#p6");
                            if(!lChecker.includes("#p11"))
                            lChecker.push("#p11");

                            valid=true;
                            wdisplayC[1]++;
                        };break;
                        case "KORKU":{

                            if( wdisplayC[2]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p7").fadeOut(150).fadeIn(150);
                                    $("#p8").fadeOut(150).fadeIn(150);
                                    $("#p9").fadeOut(150).fadeIn(150);
                                    $("#p10").fadeOut(150).fadeIn(150);
                                    $("#p11").fadeOut(150).fadeIn(150);

                                }
                            }
                            $("#p7").css({"color":"white","opacity":"1.1"});
                            $("#p7").fadeIn(1000);
                            $("#d7").css({"background-color":"	#7fffd4"});

                            $("#p8").css({"color":"white","opacity":"1.1"});
                            $("#p8").fadeIn(1000);
                            $("#d8").css({"background-color":"	#7fffd4"});

                            $("#p9").css({"color":"white","opacity":"1.1"});
                            $("#p9").fadeIn(1000);
                            $("#d9").css({"background-color":"	#7fffd4"});

                            
                            $("#p10").css({"color":"white","opacity":"1.1"});
                            $("#p10").fadeIn(1000);
                            $("#d10").css({"background-color":"	#7fffd4"});

                            $("#p11").css({"color":"white","opacity":"1.1"});
                            $("#p11").fadeIn(1000);
                            $("#d11").css({"background-color":"	#7fffd4"});

                            if(!lChecker.includes("#p7"))
                            lChecker.push("#p7");
    
                            if(!lChecker.includes("#p8"))
                            lChecker.push("#p8");
                            
                            if(!lChecker.includes("#p9"))
                            lChecker.push("#p9");

                            if(!lChecker.includes("#p10"))
                            lChecker.push("#p10");

                            if(!lChecker.includes("#p11"))
                            lChecker.push("#p11");
                                

                            valid=true;
                            wdisplayC[2]++;
                        };break;
                        
                        case "KOR":{

                            if( wdisplayC[3]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p7").fadeOut(150).fadeIn(150);
                                    $("#p12").fadeOut(150).fadeIn(150);
                                    $("#p14").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p7").css({"color":"white","opacity":"1.1"});
                            $("#p7").fadeIn(1000);
                            $("#d7").css({"background-color":"	#7fffd4"});

                            $("#p12").css({"color":"white","opacity":"1.1"});
                            $("#p12").fadeIn(1000);
                            $("#d12").css({"background-color":"	#7fffd4"});

                            $("#p14").css({"color":"white","opacity":"1.1"});
                            $("#p14").fadeIn(1000);
                            $("#d14").css({"background-color":"	#7fffd4"});

                            if(!lChecker.includes("#p7"))
                            lChecker.push("#p7");
                            if(!lChecker.includes("#p12"))
                            lChecker.push("#p12");
                            if(!lChecker.includes("#p14"))
                            lChecker.push("#p14");

                            valid=true;
                            wdisplayC[3]++;
                            break};

                            case "KUR":{

                                if( wdisplayC[5]!=0)
                                {
                                    for(let i=0;i<3;i++)
                                    {
                                        $("#p10").fadeOut(150).fadeIn(150);
                                        $("#p13").fadeOut(150).fadeIn(150);
                                        $("#p15").fadeOut(150).fadeIn(150);
                                        
                                    }
                                }
                                $("#p10").css({"color":"white","opacity":"1.1"});
                                $("#p10").fadeIn(1000);
                                $("#d10").css({"background-color":"	#7fffd4"});
    
                                $("#p13").css({"color":"white","opacity":"1.1"});
                                $("#p13").fadeIn(1000);
                                $("#d13").css({"background-color":"	#7fffd4"});
    
                                $("#p15").css({"color":"white","opacity":"1.1"});
                                $("#p15").fadeIn(1000);
                                $("#d15").css({"background-color":"	#7fffd4"});
    
    
                                if(!lChecker.includes("#p10"))
                                lChecker.push("#p10");
                                if(!lChecker.includes("#p13"))
                                lChecker.push("#p13");
                                if(!lChecker.includes("#p15"))
                                lChecker.push("#p15");
                              
    
                                valid=true;
                                wdisplayC[5]++;
                            };break;
                       
                        
                    }
            }

            if(valid==false)
            {
                for(let i=0;i<3;i++)
                {
                    $("#container").animate({"left":"+=10"},70);
                    $("#container").animate({"left":"-=10"},70);
                }
            }
            

            setTimeout(function() {
                $("#container").text("");
                $("#a1,#a2,#a3,#a4,#a5").css("background-color","");
                $("#container").css({"width":"45px","display":"none"});
                word=""; counter=0; valid=false;
                lClickCounter=[0,0,0,0,0];

              }, 600);

        }
    });

});