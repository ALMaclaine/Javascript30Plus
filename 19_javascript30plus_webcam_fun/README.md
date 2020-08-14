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
