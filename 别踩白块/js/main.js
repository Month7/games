$(function(){
    function check(){
        $(".row").each(function(){
            var top_=$(this).offset().top;
            if(top_>=700){
                clearInterval(timer);
                alert("游戏失败！");
            }
        })
    }
   
    var i=0;
    var score=0;
    i=4*(Math.random());    
    i=Math.floor(i);
    $(".row").find("div").eq(i).addClass("black");
    var timer=setInterval(function(){
        var j=4*(Math.random());
        j=Math.floor(j);
        var newCell=[];
        for(var i=0;i<4;i++){
            newCell[i]=$("<div></div>");
            newCell[i].addClass("cell");
        }
        newCell[j].addClass("black");
        var newRow=$("<div></div>");
        newRow.addClass("row");
        for(var i=0;i<4;i++){
            newRow.append(newCell[i]);
        }
        $(".main").prepend(newRow);
        check();
    },1000);
    $(".black").click(function(){
        $(this).parents(".row").remove();
        score++;
        $("#score").find("p").html(score);
    });
    $(".main").on("click",".black",function(){
        // console.log("1");
        $(this).parents(".row").remove();
        score++;
        $("#score").find("p").html(score);
    })
    // $(".black").live({
    //     click：function(){
    //         console.log("1");
    //     }
    // })
    // $(".black").live({
    //     click: function() {
    //       // do something on click
    //       console.log("1");
    //     }
    //   });
})