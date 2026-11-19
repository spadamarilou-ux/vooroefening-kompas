let waarde_van_het_kompas = 0
basic.forever(function () {
    if (waarde_van_het_kompas > 45 && waarde_van_het_kompas < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (waarde_van_het_kompas < 0 && waarde_van_het_kompas < 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
