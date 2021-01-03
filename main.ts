input.onGesture(Gesture.EightG, function () {
    radio.sendNumber(input.acceleration(Dimension.Strength))
    for (let i = 0; i <= 2; i++) {
        led.plot(i + 2, 4)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    radio.sendNumber(42)
})
input.onGesture(Gesture.FreeFall, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    radio.sendNumber(input.acceleration(Dimension.Strength))
    for (let i = 0; i <= 4; i++) {
        led.plot(0, i)
    }
})
input.onGesture(Gesture.SixG, function () {
    radio.sendNumber(input.acceleration(Dimension.Strength))
    for (let i = 0; i <= 2; i++) {
        led.plot(i + 2, 2)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    radio.sendNumber(24)
})
input.onGesture(Gesture.ThreeG, function () {
    radio.sendNumber(input.acceleration(Dimension.Strength))
    for (let i = 0; i <= 2; i++) {
        led.plot(i + 2, 0)
    }
})
radio.setGroup(42)
basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    . # . . .
    . . . . .
    `)
radio.sendNumber(0)
basic.forever(function () {
	
})
