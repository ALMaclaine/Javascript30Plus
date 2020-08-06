# Javascript30Plus - 02 JS and CSS Clock

## Changes

- Move Javascript into external script file

- Move CSS into external style file

- Rename `clock-face` to `clock__face` to match bem

- Rename `hand` to `clock__hand` to match bem

- Move clock width/height into a dimension var

- Make `clock__hand` transition compact by moving timing function onto transition

- Move `clock__hand` transition function onto variable

- Rename `hour-hand`, `min-hand`, `second-hand` to bem style eg: `clock__hand--hour`

- Change JS to use new class names

- Add styles for `clock__hand--hour`, `clock__hand--min`, `clock__hand--second`

- Make variables for length of each hand

- Change lengths to match clock, min, seconds same length, hour shorter

- Make seconds hand red

- Delete `width` from `clock__hand`

- Make variables for width of each hand

- Add calculated `transformY` offsets to each hand modifier to make them centered

- Make hour hand fatter and second hand skinnier

- Delete `height` from `clock__hand`

- Move `rotate(90deg)` from `clock__hand` to `clock__face`

- Delete `+ 90` from each degree calculation in script

- Make function for setting transform

- Make script store initial transform so it's not overwritten

- Add computed transform origin

- Delete `transform-origin` from `clock__hand`

- Fix reset glitch by using ellapsedMilliseconds to avoid a rotation back to 0 degrees

- Set hands to initially hidden so they won't jump to position on load

- Add updaterate data attribute to clock element

- Grab updaterate attribute from clock element in js

- Set setInterval timing to updaterate

- Add a generic font type to font-family on `html` style
