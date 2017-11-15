$(function(){
    var j;
    var d=new Array(10);
    var direction=new Array(
        [0],
        [2,4],
        [1,3,5],
        [2,6],
        [1,5,7],
        [2,4,6,8],
        [3,5,9],
        [4,8],
        [5,7,9],
        [6,8]
    );
    var position=new Array(
        [0],
        [0,0],
        [150,0],
        [300,0],
        [0,150],
        [150,150],
        [300,150],
        [0,300],
        [150,300],
        [300,300]
    )
    d[1]=1;d[2]=2;d[3]=3;
    d[4]=4;d[5]=5;d[6]=6;
    d[7]=7;d[8]=8;d[9]=0;
    $(".outBox").click(function(){
        var i=$(this).attr("cid");
        for(var j=1;j<10;j++){                 //找到在d中的下标
            if(d[j]==i)
            break;
        }
        if(whereTo(j)!=0){
            var newPos=whereTo(j);
            d[j]=0;
            d[newPos]=i;
            $(this).css("left",position[newPos][0]);
            $(this).css("top",position[newPos][1]);
        }
    })
    function whereTo(k){
        var flag=false;
        for(var i=0;i<direction[k].length;i++){
           if(d[direction[k][i]]==0){                      //有空位可以移动
               flag=true; 
               break;                            
           }
        }
        if(flag==true){
            return direction[k][i];                                  //返回可以移动到的位置
        }
        else{
            return 0;                             
        }
    }
    $("#reStart").click(function(){                             //重新开始游戏，模拟人的操作打乱方块
        for(let i=0;i<100;i++){
            var n=Math.random()*9;
            n=Math.floor(n);
            $(".outBox[cid="+n+"]").trigger("click");
        }
    });
}) 