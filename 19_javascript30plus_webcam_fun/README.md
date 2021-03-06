# Javascript30Plus - 19 Webcam Fun

## Changes

- Uncomment range sliders

- Add ids to each slider to match label `for`

- Add class `slider__label` to each label and style it

- Delete `<br>` elements

- Wrap each label/input into a div

- Wrap each color label/input min/max pair in a div add class `control__pair`

- Add styles for `slider__pair`

- Add `user-select: none` to universal selector

- Delete line `ctx.globalAlpha = 0.8;` from `paintToCanvas` function

- Remove class `controls` from div surrounding controls

- Add checkbox input pair to markup to control red effect/green screen

- Add `effectOptions` object to track which options are on, set conditions inside of
`paintToCanvas` to turn effects on/off

- Add listeners to checkboxes to set options on/off

- Remove inline listener for taking photo, add id`takePhoto`, add click listener to take photo

- Remove `float: left` and clearfix styles

- Use `createElement` instead of `innerHTML` in `takePhoto`

- Swap img tag in styles for `.snapshot`

- Add record video button

- Add record video code

- Add qualifiers to r/g/b/a variables

- Move levels and slider selectors out of `greenScreen` function

- Add default values to levels object

- Set default values on inputs while adding event listener

- Add range limiting code to event listener so min can't be greater than max

- Make sliders default to disabled, enable/disable them when green screen checkbox is clicked

- Make canvas background black to match image output when exporting image with some portions alphaed out
