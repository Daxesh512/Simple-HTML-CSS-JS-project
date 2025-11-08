
/*
+======================================================
*                   RayLib++ /raylibpp
*   raylib++ is a small library to help you create 
    games with raylib

    It Includes:
    1.
*   2.
*   3.
*   4.
*/

/*
The hitbox for a 2d object
used to ceck colision

float height 
float width
are the size of the hitbox

float x and y are the hitbox colision
*/
struct hitbox2d
{
    //size
    float height;float width;

    //position
    float x;float y;
};

int RPP2colision(struct hitbox2d box1,struct hitbox2d box2) //ceck the 2D colision between 2 objects
{
    if (box1.x < box2.x + box2.width &&
        box1.x + box1.width > box2.x &&
        box1.y < box2.y + box2.height &&
        box1.y + box1.height > box2.y) 
    {
    return 1;
    }
    else return 0;

    return 100;
    
}