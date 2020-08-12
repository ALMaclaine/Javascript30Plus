# Javascript30Plus - 15 LocalStorage

## Changes

- Move script into separate file

- Change `add-items` container from form to div

- Delete `addItems` selector and listener

- Make `addItem` `input` a `button`

- Adjust css styles to work for button

- Switch `add-tems` sub compoents to bem, adjust style selectors

- Grab `addItems` button in script, add click listener calling `addItem`

- Grab `itemInput` input in script, adjust `addItem` to use reference instead of `this`,
delete `preventDefault` call, replace `reset` call with `.value= ''`

- Add `CreateFoodItem` function

- Use `CreateFoodItem` in `populateList`

- Add class `plates__item` to `li` child of `plates`, update JS/styles

- Add class `plates__toggle` to `input` child of `plates__item`, update JS/styles

- Add class `plates__label` to `input` child of `plates__item`, update JS/styles

- Add class `header` to `h2` tag, update styles

- Add `removeItem` function

- Add delete item button to markup

- Update `toggleDone` function to call `removeItem`

- Add key listener to `window` to submit item on enter

- Have `addItem` check if value is empty string, return if so
