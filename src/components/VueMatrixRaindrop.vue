<template>
    <div>
        <div id="text">
        <canvas id="vue-matrix-raindrop"></canvas>
        <div id="inner-text">
            <h1 id="inner-text-2">
            <br/>
            </h1>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue-matrix-raindrop',
    props:{
        canvasWidth:{
            type:Number,
            default:1200
        },
        canvasHeight:{
            type:Number,
            default:200
        },
        fontSize:{
            type:Number,
            default:20
        },
        fontFamily:{
            type:String,
            default:'arial'
        },
        textContent:{
            type:String,
            default:'ऽ१२३४५६७८९०अआइईउऊएऐओऔऋऌॠॡकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळ'
        },
        textColor:{
            type:String,
            default:'#bbb',
            validator:function(value){
                var colorReg = /^#([0-9a-fA-F]{6})|([0-9a-fA-F]{3})$/g
              return colorReg.test(value)
            }
        },
        backgroundColor:{
            type:String,
            default:'rgba(255,255,255,0.3)',
            validator:function(value){
              var reg = /^[rR][gG][Bb][Aa][(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?(0\.\d{1,2}|1|0)?[)]{1}$/;
              return reg.test(value);
            }
        },
        speed:{
            type:Number,
            default:5,
            validator:function(value){
              return value%1 === 0;
            }
        }
    },
    mounted:function(){
          this.initRAF();
          this.initCanvas();
          this.initRainDrop();
          this.animationUpdate();
    },
    methods:{
         initRAF(){
         window.requestAnimationFrame = (function(){
           return window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                  };
         })();
         window.cancelAnimationFrame = (function () {
           return window.cancelAnimationFrame ||
                  window.webkitCancelAnimationFrame ||
                  window.mozCancelAnimationFrame ||
                  window.oCancelAnimationFrame ||
                  function (id) {
                    window.clearTimeout(id);
                  };
           })();
       },
         initCanvas(){
         this.canvas = document.getElementById('vue-matrix-raindrop');
         if(this.canvas.tagName.toLowerCase() !== 'canvas'){
            console.error("Error! Invalid canvas! Please check the canvas's id!")
         }
         this.canvas.width = this.canvasWidth;
         this.canvas.height = this.canvasHeight;
         this.canvasCtx = this.canvas.getContext('2d');
         this.canvasCtx.font = this.fontSize+'px '+this.fontFamily;
         this.columns = this.canvas.width / this.fontSize;
       },
       initRainDrop(){
             for(var i=0;i<this.columns;i++){
                 this.rainDropPositionArray.push(0);
        }
       },
       animationUpdate(){
            this.speedCnt++;
            if(this.speedCnt===this.speed){
                 this.speedCnt = 0;

           this.canvasCtx.fillStyle=this.backgroundColor;
           this.canvasCtx.fillRect(0,0,this.canvas.width,this.canvas.height);

           this.canvasCtx.fillStyle=this.textColor;
           for(var i=0,len=this.rainDropPositionArray.length;i<len;i++){
             this.rainDropPositionArray[i]++;
             var randomTextIndex = Math.floor(Math.random()*this.textContent.length);
             var randomText = this.textContent[randomTextIndex];
             var textYPostion = this.rainDropPositionArray[i]*this.fontSize;
             this.canvasCtx.fillText(randomText,i*this.fontSize,textYPostion);
             if(textYPostion>this.canvasHeight){
               if(Math.random()>0.9){
                 this.rainDropPositionArray[i]=0;
               }
             }
           }
         }
         window.requestAnimationFrame(this.animationUpdate)
       }
    },
        data () {
            return {
                canvasCtx:null,
                canvas:null,
                columns:0,
                rainDropPositionArray:[],
                speedCnt:0
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#text {
  width: 100%;
  height: 30vh;
  background: url("") white;
}
#inner-text {
  width: 100%;
  height: 0%;
  display: flex;
  align-items: left;
  justify-content: left;
  color: black;
  font-size: 1.25em;
}
#inner-text h1 {
  width: 80em;
  position: relative;
  left: 1em;
  top: -6em;
}
</style>