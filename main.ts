function PattrnTypes () {
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 0)) {
    	
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 1)) {
    	
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 2)) {
    	
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 3)) {
    	
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 4)) {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    if (Menu == 0) {
        Speed += 1
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (Menu == 1) {
        Which_pattern += 1
    }
})
function Display () {
    if (Menu == 1) {
        if (Which_pattern == 0) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
        }
        if (Which_pattern == 1) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                . # . . .
                # # # # #
                `)
        }
        if (Which_pattern == 2) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                # . . . #
                . # # # .
                `)
        }
        if (Which_pattern == 3) {
            basic.showLeds(`
                . . # # .
                . # . # .
                # # # # #
                . . . # .
                . . . # .
                `)
        }
        if (Which_pattern == 4) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # .
                . . . . #
                # # # # .
                `)
        }
    }
}
function Speed_Logic () {
    if (Speed > 100) {
        Speed = 100
    }
    if (Speed < -100) {
        Speed = -100
    }
}
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    if (Menu == 0) {
        Speed += -10
        music.playTone(165, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    Speed = 0
})
input.onButtonPressed(Button.B, function () {
    if (Menu == 0) {
        Speed += -1
        music.playTone(247, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (Menu == 1) {
        Playing_pattern += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Menu += 1
    Speed = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Menu == 0) {
        basic.showString("" + (Speed))
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    if (Menu == 0) {
        Speed += 10
        music.playTone(784, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
    }
})
let Playing_pattern = 0
let Which_pattern = 0
let Menu = 0
let Speed = 0
Speed = 0
Menu = 0
Which_pattern = 0
let Patterns = [
0,
1,
2,
3,
4
]
music.setVolume(255)
led.setBrightness(255)
basic.forever(function () {
    servos.P0.run(Speed)
    Speed_Logic()
    Display()
    PattrnTypes()
    if (Menu > 1) {
        Menu = 0
    }
    if (Which_pattern > 4) {
        Which_pattern = 0
    }
    if (Playing_pattern > 1) {
        Playing_pattern = 0
    }
})
