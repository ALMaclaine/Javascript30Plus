# Javascript30Plus - 10 Hold Shift and Check Checkboxes

## Changes

- Move style into separate file

- Move script into separate file

- Add class `item__text` to p tag, style it instead of tag

- Add class `item__checkbox` to input elements inside of `item` components

- Add `CreateToDoItem` function

- Move html todo info into array in index.js

- Delete todo components out of index.html

- Dynamically generate todos using `CreateToDoItem` on load

- Write `handleCheck` to save last click index, if shift is down, take the min/max of last and current
index, grab truth value of last clicked index, iterate over inputs from min to max setting
checked to truth value 

- Add `handleCheck` to each input element in `CreateToDoItem`

- Make item div draggable

- Write `reAppendDivs` function to clear the todo container and fill it with stored divs

- Write `swapToDos` function

- Write `startDrag`, `allowDrag`, `finishDrag` methods, attach them in `CreateToDoItem` to div


