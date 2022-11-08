basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.servoWritePin(AnalogPin.P2, 0)
        pins.servoWritePin(AnalogPin.P2, 1)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 80) {
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
