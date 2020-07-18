radio.onReceivedString(function (receivedString) {
    if (receivedString == "doorOpen") {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    } else if (receivedString == "doorClosed") {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(17)
