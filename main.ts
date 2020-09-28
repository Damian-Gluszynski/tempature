let current_temperture = 0
basic.forever(function () {
    current_temperture = input.temperature()
    basic.showNumber(current_temperture)
    basic.pause(1000)
    basic.clearScreen()
})
