let clip: recording.Clip = null
basic.forever(function () {
    clip = recording.createClipVar(4)
    recording.recordClipVar(clip)
})
