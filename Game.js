/**
 * main game class for runing the game 
 */
class Game
{

    
    /**
     * a constructor ffor the main loop class 
     * @param {float} width  // width of screen
     * @param {Float} height //height of screen
     */
    constructor(width,height)
    {
        
        this.boundRecursiveUpdate = this.update.bind(this);//bind update to this  when it goes out tof scope
        this.canvasWidth = width; // assign the width of the screen
        this.canvasHeight = height; // assign the height of the screen
        this.ctx={};//create a canvas var 
        this.event ;
        var img = {};
        this.img = new Image();   // Create new img element
        var imgLoaded = false;
        
        this.initWorld();//call initialise canvas     
        
        this.mySpriteObject = new Sprite(this.ctx, {
            width: 1000,
            height: 28,
            image: this.img,
            ticksPerFrame: 1,
            numberOfFrames: 36,
            posX: 200,
            posY: 300
        }); 
        this.mySpriteObject2 = new Sprite(this.ctx, {
            width: 1000,
            height: 28,
            image: this.img,
            ticksPerFrame: 10,
            numberOfFrames: 36,
            posX: 100,
            posY: 100
        });       
    }
    /**
     * a function which initialises the canvas and key listiner 
     */
    initWorld()//prints out “Initialising game”
    {
       
        var that = this;
        this.img.addEventListener('load', function()
         {
            that.imgLoaded = true;
           
         }, false);
        this.img.src = 'ball.png'; // Set source path

        console.log("Initialising game")
        var canvas = document.createElement("canvas");	// make a canvas
        canvas.id = 'mycanvas'; // name the canvas
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        this.ctx = canvas.getContext("2d"); //assign it to ctx
        document.body.appendChild(canvas);

      
    }
    /**
     * update for the game 
     */
    update()
    {
        console.log("hi");
        this.draw();     
        if(this.imgLoaded)
        {
        this.mySpriteObject.update();
        this.mySpriteObject2.update();
        }
        window.requestAnimationFrame(this.boundRecursiveUpdate);// call game update
    }
    /**
     * function which draws on the canvas
     */
    draw()
    {
        
        if(this.imgLoaded)
        {
         this.mySpriteObject.render();
         this.mySpriteObject2.render();
        }
    }

    


}
