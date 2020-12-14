let IsSwitched = false
let force = 0
input.onButtonPressed(Button.A, function () {
    if (IsSwitched) {
        basic.showString("B")
    } else {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    if (IsSwitched) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    IsSwitched = force > 100
})
