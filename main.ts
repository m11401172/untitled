basic.forever(function () {
    if (input.lightLevel() > 100) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(200)
    }
})
