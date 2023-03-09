function PattrnTypes () {
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 0)) {
    	
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 1)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(750)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 2)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 3)) {
        pins.digitalWritePin(DigitalPin.P0, randint(0, 1))
        pins.digitalWritePin(DigitalPin.P1, randint(0, 1))
        pins.digitalWritePin(DigitalPin.P2, randint(0, 1))
        basic.pause(500)
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 4)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
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
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 2207, 51, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
function Display () {
    if (Menu == 1) {
        if (Which_pattern == 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        if (Which_pattern == 1) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
        }
        if (Which_pattern == 2) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                . # . . .
                # # # # #
                `)
        }
        if (Which_pattern == 3) {
            basic.showLeds(`
                . # # # .
                . . . . #
                . . # # #
                . . . . #
                . # # # .
                `)
        }
        if (Which_pattern == 4) {
            basic.showLeds(`
                . . # # .
                . # . # .
                . # # # #
                . . . # .
                . . . # .
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
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Menu += 1
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
    servos.P2.run(Speed)
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
