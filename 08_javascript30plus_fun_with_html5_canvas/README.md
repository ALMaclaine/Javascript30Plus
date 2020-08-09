# Javascript30Plus - 08 Fun with html5 canvas

## Changes

- Move styles into separate file

- Move script into separate file

- Set style.width/height to window.innerHeight/Width after setting canvas dimensions

- Move canvas dimension initialization into `setCanvasDimensions`, call it in script

- Add `resize` event listener  on window with `setCanvasDimension` as callback

- Move canvas style initialization into `canvasInitialization` function

- Call `canvasInitialization` as well as `setCanvasDimensions` in resize callback

- Move canvas drawing state into `drawState` object, adjust references

- Make `drawLine` method and use it in `draw`

- Create `CreateDrawAction` function

- Create new drawActions in `draw` using `CreateDrawAction`, draw them using `drawLine` add them to history

- Create `rewriteHistory` method and call it in resize handler

- Create `drawCount` variable, increment `drawCount` in mouseup handler, inside `draw` check if `history[drawCount]` is
array, if not put array in place, push action to current `history[drawcount]`, in `rewriteHistory` update it to write all
histories

- Create `nextIteration` function, use it in both `mousedown` and `mouseout`

- Create `undo` method

- Add window keydown listener to check for `ctrl-z` or `cmd-z` and call undo

- Add selected parameter to `drawLine`, if selected draw the line as blue, change `rewriteHistory` to add true parameter
to `drawLine` if selected line is being drawn
