let maxsound = 0
let soundlevel = 0
let strip = 255
let strip2 = neopixel.create(DigitalPin.P13, 25, NeoPixelMode.RGB)
let range2 = strip2.range(0, 4)
let range22 = strip2.range(5, 9)
let range3 = strip2.range(10, 14)
let range4 = strip2.range(15, 19)
let range5 = strip2.range(20, 24)
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
    soundlevel = input.soundLevel()
    if (soundlevel > maxsound) {
        range2.showBarGraph(0, soundlevel)
        range22.showBarGraph(0, soundlevel)
        range3.showBarGraph(0, soundlevel)
        range4.showBarGraph(0, soundlevel)
        range5.showBarGraph(0, soundlevel)
        maxsound = soundlevel
        basic.pause(100)
    }
})
