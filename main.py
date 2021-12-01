soundlevel = 0
strip = 255
strip2 = neopixel.create(DigitalPin.P13, 25, NeoPixelMode.RGB)
range2 = strip2.range(0, 4)
range22 = strip2.range(5, 9)
range3 = strip2.range(10, 14)
range4 = strip2.range(15, 19)
range5 = strip2.range(20, 24)

def on_forever():
    global soundlevel
    maxsound = 0
    soundlevel = input.sound_level()
    if soundlevel > maxsound:
        range2.show_bar_graph(soundlevel, 255)
        range22.show_bar_graph(soundlevel, 255)
        range3.show_bar_graph(soundlevel, 255)
        range4.show_bar_graph(soundlevel, 255)
        range5.show_bar_graph(soundlevel, 255)
basic.forever(on_forever)

