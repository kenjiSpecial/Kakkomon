//東大２０１２　数学問１　http://kaisoku.kawai-juku.ac.jp/nyushi/honshi/12/t01.html
//ブログ　http://kenji-special.com/blog/?p=5


window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

window.onload = main;
// 1 -> 100

function main(){
    var canvas = document.getElementById("myCanvas1")
    var context = canvas.getContext("2d");
    var basic = 400;

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, basic, basic);


    // drawing area01

    var wd = 200;
    var hg = 300;
    var rad = 100;

    var lineX = Math.sqrt(2)/3;


    context.beginPath();
    context.strokeStyle = "#333333";
    context.moveTo(wd, 0);
    context.lineTo(wd, hg * 2)
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = "#333333";
    context.moveTo(0, hg);
    context.lineTo( wd * 2, hg);
    context.stroke();
    context.closePath();

    context.beginPath();

    context.lineWidth = 2;
    context.arc(wd, hg - rad, rad, 0, 2 * Math.PI, true);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo( wd + rad * Math.sqrt(2)/3, 0);
    context.lineTo( wd + rad * Math.sqrt(2)/3, hg * 2);
    context.stroke();
    context.closePath();

    var en_y1 = 1 + Math.sqrt(1 - Math.pow(Math.sqrt(2)/3, 2));
    var en_y2 = 1 - Math.sqrt(1 - Math.pow(Math.sqrt(2)/3, 2));

    var theta1 = Math.atan2(en_y1 - 1, Math.sqrt(2)/3);
    var theta2 = Math.atan2(en_y2 - 1, Math.sqrt(2)/3);

    context.beginPath();
    context.fillStyle = "#001947"
    context.arc(wd, hg - rad, rad, theta1, theta2, true);
    context.fill();

    context.font = "bold 50px sans-serif";
    context.fillStyle = "#ffffff";
    context.fillText("D", 255, 215);

    //drawing area02
    var canvas2 = document.getElementById("myCanvas2")
    var context2 = canvas2.getContext("2d");


    var imgData01 = context.getImageData(0, 0, basic, basic);

    context2.putImageData(imgData01, 0, 0);

    //drawing area03
    var canvas3 = document.getElementById("myCanvas3")
    var context3 = canvas3.getContext("2d");

    var wd3 = 400;
    var hg3 = 300;

    var mg = 20;

    context3.fillStyle = "#ffffff";
    context3.fillRect( 0, 0, wd3, hg3);

    context3.beginPath();
    context3.strokeStyle = "#333333";
    context3.moveTo(mg, 0);
    context3.lineTo(mg, hg3);
    context3.stroke();
    context3.closePath();

    context3.beginPath();
    context3.moveTo(0, hg3 - mg);
    context3.lineTo(wd3, hg3 - mg);
    context3.stroke();
    context3.closePath()


    context3.beginPath();
    context3.moveTo(wd3/2, hg3 - mg);
    context3.lineTo(wd3/2, hg3 - mg - 5);
    context3.stroke();
    context3.closePath();

    context3.beginPath();
    context3.moveTo(mg, hg3/2);
    context3.lineTo(mg + 5, hg3/2);
    context3.stroke();
    context3.closePath();

    var context3_ImgData = context3.getImageData(0, 0, wd3, hg3);



    loop1();
    var loop1_count = 1;
    var loop1_div = 1;

    var loop1Count = 0;

    var maxTheta = 0;
    var maxDis = 0;

    function loop1(){

        context2.clearRect(0, 0, basic, basic);

        context2.putImageData(imgData01, 0, 0);



        if(loop1_count >= 300 || loop1_count <= 0){
            loop1_div *= -1;

            if(loop1Count == 0){
                var canvas4 = document.getElementById("myCanvas4");
                var context4 = canvas4.getContext("2d");

                var finalImgData = context3.getImageData(0, 0, 400, 300);
                context4.putImageData(finalImgData, 0, 0);

                context4.beginPath();
                context4.strokeStyle = "ff0000";
                context4.lineWidth = 2;

                context4.moveTo(convertGraph_PosX(maxTheta), convertGraph_PosY(0));
                context4.lineTo(convertGraph_PosX(maxTheta), convertGraph_PosY(maxDis));

                context4.stroke();

                context4.closePath();

                context4.font = "bold 18px sans-serif";
                context4.fillStyle = "#000";



                context4.fillText("θ: " + (Math.round(maxTheta* 100)/100).toString(), 30, 30);
                context4.fillText("cos(θ): " + (Math.round(Math.cos(maxTheta)* 100)/100).toString(), 30, 45);

                context4.fillText("distance: " + (Math.round(maxDis* 100)/100).toString(), 30, 70);

            }

            context3.clearRect(0, 0, wd3, hg3);
            context3.putImageData(context3_ImgData, 0, 0);



            loop1Count++;
        }

        loop1_count += loop1_div;

        var theta1 = loop1_count /300 *  (Math.PI/2);
//                console.log(theta1|0)
//                var thetaNum = ;
//                console.log(thetaNum);
        var thetaString = (((theta1* 100) | 0)/100).toString();
        var katamuki = Math.tan(theta1);

        var kouten1_y = Math.sqrt(2)/3 * katamuki;

        var x_Min = -100/katamuki;
        var x_Max = 300/katamuki;

        context2.beginPath();
        context2.lineWidth = 2;
        context2.strokeStyle = "#000000"
        context2.moveTo(x_Min +200, 400);
        context2.lineTo(x_Max +200, 0);
        context2.stroke();
        context2.closePath();

        context2.font = "italic 50px serif";
        context2.fillStyle = "#000000";
        context2.fillText("l", 160, 280);

        context2.fillStyle = "#ffffff"

        var cross2_posX, cross2_posY;

        var cross1_posY = katamuki * Math.sqrt(2)/3;
        if(cross1_posY > en_y2 && cross1_posY < en_y1){

            //y = ax; (y-1)2 + x2 = 1
            //a2x2 - 2ax + 1 + x2 = 1
            //(a2 + 1)x2 - 2ax = 0
            //x( (a2 + 1)x - 2a) = 0
            //x = 0, 2a / (a2 + 1)
            //y = a * x

            cross2_posX = 2 * katamuki / (Math.pow(katamuki, 2) + 1);
            cross2_posY = katamuki * cross2_posX;

            context2.beginPath()
            context2.arc( convert_posX(lineX), convert_posY(cross1_posY), 6, 0, Math.PI * 2, true);
            context2.fill()
            context2.stroke();
            context2.closePath();

            context2.beginPath();
            context2.arc( convert_posX(cross2_posX), convert_posY(cross2_posY), 6, 0, Math.PI * 2, true);
            context2.fill()
            context2.stroke();
            context2.closePath();

            context2.beginPath();
            context2.moveTo(convert_posX(lineX), convert_posY(cross1_posY));
            context2.lineTo(convert_posX(cross2_posX), convert_posY(cross2_posY));
            context2.lineWidth = 2;
            context2.strokeStyle = "#eeeeee";
            context2.stroke();

            context2.closePath();

            var dis = Math.sqrt(1 + katamuki * katamuki) * Math.sqrt(Math.pow(lineX - cross2_posX, 2));

            if(maxDis < dis){
                maxDis = dis;
                maxTheta = theta1;
            }

            context3.strokeStyle = "#000";
            context3.beginPath();
            context3.moveTo(convertGraph_PosX(theta1), convertGraph_PosY(0));
            context3.lineTo(convertGraph_PosX(theta1), convertGraph_PosY(dis));
            context3.stroke();
            context3.closePath();

        }else if(cross1_posY < en_y2 ){
            context2.beginPath()
            context2.arc( convert_posX(lineX), convert_posY(en_y2), 6, 0, Math.PI * 2, true);
            context2.fill()
            context2.stroke();
            context2.closePath();
        }else if(cross1_posY >  en_y1 ){
            context2.beginPath()
            context2.arc( convert_posX(lineX), convert_posY(en_y1), 6, 0, Math.PI * 2, true);
            context2.fill()
            context2.stroke();
            context2.closePath();
        }

        context2.font = "bold 24px sans-serif";
        context2.fillStyle = "#000";
        context2.fillText("θ: " + thetaString, 30, 60);

        requestAnimFrame(loop1)


    }

    function convert_posX(posX){
        return (200 + 100 * posX);
    }

    function convert_posY(posY){
        return (300 - 100 * posY);
    }

    function convertGraph_PosX(posX){
        return 20 + 360 * posX/ (Math.PI/2);
    }

    function convertGraph_PosY(posY){
        return 280 - posY * 300;
    }

}