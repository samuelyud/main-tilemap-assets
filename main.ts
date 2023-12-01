scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`floorTile`)
    tiles.setTileAt(tiles.getTileLocation(5, 4), assets.tile`chestClosed2`)
    tiles.setTileAt(tiles.getTileLocation(4, 0), assets.tile`topDoorOpen1`)
    tiles.setTileAt(tiles.getTileLocation(5, 0), assets.tile`topDoorOpen2`)
    tiles.setTileAt(tiles.getTileLocation(4, 7), assets.tile`bottomDoorOpen1`)
    tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`bottomDoorOpen2`)
    tiles.setTileAt(tiles.getTileLocation(0, 3), assets.tile`leftDoorOpen2`)
    tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`leftDoorOpen1`)
    tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`rightDoorOpen1`)
    tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`rightDoorOpen2`)
})
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . 6 9 9 9 9 9 9 6 . . . . 
    . . . . 6 9 9 5 5 9 9 6 . . . . 
    . . . . f f f 5 5 f f f . . . . 
    . . . . 6 5 5 5 5 5 5 6 . . . . 
    . . . . 6 9 9 5 5 9 9 6 . . . . 
    . . 6 6 6 9 9 5 5 9 9 6 6 6 . . 
    . . 6 9 9 6 6 6 6 6 6 9 9 6 . . 
    . . . 6 6 2 2 2 2 2 2 6 6 . . . 
    . . 6 9 6 9 2 2 2 2 9 6 9 6 . . 
    . . 6 9 6 9 9 2 2 9 9 6 9 6 . . 
    . . 6 9 6 9 9 9 2 9 9 6 9 6 . . 
    . . 6 9 6 9 9 9 9 9 9 6 9 6 . . 
    . . . 6 f f f f f f f f 6 . . . 
    . . . . 6 6 6 . . 6 6 6 . . . . 
    . . 6 6 6 6 6 . . 6 6 6 6 6 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
