# Javascript30Plus - 11 Custom Video Player

## Changes

- Make `viewer` class an id instead

- Rename `progress` to `player__timeline`

- Change `progress__filled` to `player__progress`

- Change toggle to an id instead of class

- Delete `flex-basis: 50%` from `player__progress` so it starts at beginning of video

- Change `progress` `mousemove` and `mouseup` listener to have `window` as target so that
you can change the timeline without being on the progress bar, and be able to release the mouse
anywhere

- Select sliders specifically as well as generically

- Create `deltaVolume` and `deltaPlaybackRate` functions
    
- Add keydown listener on window for following conditions:
    - Space: togglePlay
    - Right Key, skip forward
    - Left Key, skip backwards
    - Up Arrow, Increase Volume
    - Down Arrow, Decrease Volume
    - Shift Right Key, increase playback rate
    - Shift Left Key, decrease playback rate
