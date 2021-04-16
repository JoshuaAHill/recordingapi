
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace recording {
    /**
     * Record a sound clip - max length
     */
    //% block Record Soundclip
    export function record() {
        // Placeholder for Testing
    }

    /**
     * play back the recorded soundclip - assumes only one
     */
    //% block Playback Soundclip
    export function playback() {
        // Placeholder for Testing
    }

    /**
     * play back the recorded soundclip at a given sample rate
     */
    //% block Playback Soundclip at %sampleRate
    //%
    export function playbackSampleRate(sampleRate : number = 11025) {
        // Placeholder for Testing
    }

    /**
     * Record a clip of a given length
     */
    //% block Record Soundclip for %length
    //%
    export function recordLength(length : number = 11025) {
        // Placeholder for Testing
    }

    /**
     * Having a class like this could mean a paradigm shift in C++
     * where the buffer is returned and not stored within mic recorder itself
     * i.e. mySoundClip = micRecorder.record(duration:3, sampleRate:11025);
     */
    export class Clip{
        duration : number;

        constructor(duration: number){
            this.duration = duration;
        }

        record(){

        }
        playback(){

        }
    }

    /**
     * Create a clip widget
     */
    //% blockId=create_clip
    //% block="create clip of length %duration"
    //% blockSetVariable=clip
    //% duration.min=1 duration.max=4 duration.defl=3
    export function createClipVar(duration : number = 3): Clip {
        return new Clip(duration);
    }

    /**
     * Record a clip variable
     */
    //% block Record Soundclip %clip
    //%
    export function recordClipVar(clip : Clip) {
        clip.record();
    }

    /**
     * Playback a clip variable
     */
    //% block Playback Soundclip %clip
    //%
    export function playbackClipVar(clip : Clip) {
        clip.playback();
    }


}
