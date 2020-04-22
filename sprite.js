/**
 * Constructor function to initialise this sprite with the canvas context
 *  and a set of image options. The image options specify both image and
 *  animation properties. For example, image width, image height, the image
 *  object and the y coordinate where the image should be drawn.
 *  The animation properties include the ticks per frame and number of 
 *  frames.
 * @param {context} context The 2D context for the canvas.
 * @param {Object} imageOptions An object describing the image and animation     
 *                  properties.
 */

class Sprite
{

    constructor(context, imageOptions)
    {

        this.width = imageOptions.width;
        this.height = imageOptions.height;
        this.image = imageOptions.image;
        this.ctx = context;
        this.frameIndex = 0,
        this.tickCount = 0,
        this.ticksPerFrame = imageOptions.ticksPerFrame,
        this.numberOfFrames = imageOptions.numberOfFrames,
        this.posX = imageOptions.posX,
        this.posY = imageOptions.posY,
        this.loop = true;
    
    };

    render()
    {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            0,
           this.width/ this.numberOfFrames,
           this.height,
           this.posX,
           this.posY,
           (this.width/ this.numberOfFrames)*2,
           this.height*2);
    }

    update()
    {
        this.tickCount += 1;
			
        if (this.tickCount > this.ticksPerFrame)
         {
        
        	this.tickCount = 0;
        	// If the current frame index is in range
            if (this.frameIndex < this.numberOfFrames - 1) {
            // Go to the next frame
            this.frameIndex += 1; 
         }
         else if (this.loop)
        {
            this.frameIndex = 0;
        }
        }
    }
}