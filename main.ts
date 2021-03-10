let 跑車 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . . . 
    5 . . . 5 5 5 b d d 5 . . . . . . . 
    5 5 . 5 d b 5 b b b d 5 5 . . . . . 
    b b 5 d b b 5 b b b b b 5 5 5 . . . 
    . 5 5 c c 7 7 7 2 2 2 2 5 c c 5 5 . 
    5 5 c f f c 7 7 7 7 2 2 c f f c 5 5 
    5 c f b b f c 5 7 7 7 c f b b f c 5 
    5 5 f b b f 5 5 5 5 5 5 f b b f 5 5 
    . . . f f . . . . . . . . f f . . . 
    . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(跑車, 100, 100)
跑車.startEffect(effects.warmRadial)
music.baDing.play()
