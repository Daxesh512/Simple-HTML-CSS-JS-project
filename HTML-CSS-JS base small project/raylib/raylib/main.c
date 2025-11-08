#include "raylib.h"
#include<stdio.h>

#ifndef raylibpp
    #include"raylibpp.h"
#endif

int main(void)
{
    
    const int screenWidth = 800;
    const int screenHeight = 450;

    InitWindow(screenWidth, screenHeight, "Raylibpp colision test");

    Vector2 rPosition = { (float)screenWidth/2, (float)screenHeight/2 };

    struct hitbox2d rlHitbox={30,30,rPosition.x,rPosition.y};

    //the florr
    struct hitbox2d floorbox={100,800,0,400};

    SetTargetFPS(60);
    

    // Main game loop
    while (!WindowShouldClose())
    {
        int coliding=RPP2colision(rlHitbox,floorbox);
        printf(rlHitbox.x < floorbox.x + floorbox.width &&
        rlHitbox.x + rlHitbox.width > floorbox.x &&
        rlHitbox.y < floorbox.y + floorbox.height &&
        rlHitbox.y + rlHitbox.height > floorbox.y);

        if (IsKeyDown(KEY_RIGHT)) rPosition.x += 2.0f;
        if (IsKeyDown(KEY_LEFT)) rPosition.x -= 2.0f;
        if (IsKeyDown(KEY_UP)) rPosition.y -= 2.0f;
        if (IsKeyDown(KEY_DOWN)) rPosition.y += 2.0f;
      

        BeginDrawing();

            ClearBackground(RAYWHITE);

            if (!coliding)
            {
            DrawText("move the ball with arrow keys", 10, 10, 20, DARKGRAY);
            }
            else DrawText("Colision", 10, 10, 20, DARKGRAY);

            
            DrawRectangle((int)rPosition.x, (int)rPosition.y, 30, 30, MAROON);

            DrawRectangle((int)floorbox.x, (int)floorbox.y, floorbox.width, floorbox.height, RED);

        EndDrawing();
        
    }

    
    CloseWindow();

    return 0;
}