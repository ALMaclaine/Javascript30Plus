# Javascript30Plus - 20 Speech Detection

## Changes

- Move styles into separate file

- Move script into separate file

- Deleted line `recognition.interimResults = true;` from script because we don't need intermediate results

- Simplify transcript access to a single call

- Remove is final check

- Delete existing p style

- Move p tag creation into handler, but replace it with a span instead, add `text-group` style to span

- Add `text-group` styles

- Add `selected` styles and click listener on `text-group` so that `selected` is toggled when clicked,
set element to selected variable

- Create `deselect` function

- Add key listener to deselect element on escape key

- Add `commander-mode` style

- Add `activateCommanderMode` and `deactivateCommanderMode` functions

- Check if `transcript` is `commander mode` if so call `activateCommanderMode`, at end of listener call `deactivateCommander`

- Create `foundWords` variable, and `found-word` style

- Add `clear` function

- Change result listener, if in commander mode, if next word is clear call `clear` function otherwise search all groups
for the word in question and add them to `foundWords` and add `found-word` style

- Change deselect to remove `found-word` style from all elements in `foundWords` and then reset the array

- Add `deactivateCommander` to `deselect` and end of commander mode check inside result listener, return afterwards
