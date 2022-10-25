basic.forever(function () {
    if (input.lightLevel() < 100) {
        pins.servoWritePin(AnalogPin.P2, 142)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
    }
})
