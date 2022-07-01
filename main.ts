input.onButtonPressed(Button.A, function () {
    numberx += 1
    if (numberx == (standby1 || (standby2 || standby3))) {
        numbery += 1
        numberx = 0
    }
    led.plot(numberx, numbery)
    if (numberx == 4 && numbery == 4) {
        numberx = 0
        numbery = 0
        while (!(input.buttonIsPressed(Button.A))) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        numberx = -1
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let numbery = 0
let numberx = 0
let standby3 = 0
let standby2 = 0
let standby1 = 0
standby1 = 5
standby2 = 10
standby3 = 15
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
