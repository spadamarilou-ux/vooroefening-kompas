basic.forever(function () {
    let waarde_van_het_kompas = 0
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
