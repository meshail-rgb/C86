var Canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";

function player_update() {
    fabric.image.fromURL("player.png" , function(Img) {
        player_object = img;


        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(player_object);


    });
}function new_image(get_image) {
    fabric.image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(block_image_object);

    });
}
