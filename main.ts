radio.onReceivedNumber(function (receivedNumber) {
    servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
    for (let index = 0; index < 4; index++) {
        motor.turnRight(50)
        basic.pause(2000)
        motor.stop()
        servos.setServoPosition(servos.ServoPin.P0, Position.HALF_DOWN)
        basic.pause(1000)
        servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
        seedsDropped += 1
    }
})
let seedsDropped = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(seedsDropped)
})
