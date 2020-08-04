# Javascript30Plus - 01 Drum Kit

## Changes

- Move Javascript into external script file

- change `sound` class to `key__sound` to follow [bem](https://seesparkbox.com/foundry/bem_by_example) css methodology.

- Replace `kbd` tag style with class style `key__icon` for [performance and to prevent conflicts](https://frontstuff.io/you-need-to-stop-targeting-tags-in-css).

- Move audio tags into `key` components to prepare for dynamic component generation

- Swap `playing` class with `key__playing` in CSS, `removeTransition` and `playSound`

- Pull key data out of html and into a JS object

- Replace `e.keyCode` with `e.code` inside of `playSound`

- Create key component creator function

- Add `keys` id to div with class `keys` for JS selection

- Delete key components from inside `keys` div in the html file

- Map over `keyData` array, creating `KeyComponents` and adding them to the `keys` div

- Replace keycode `dataKey` values in `keyData` objects with `code` value instead of `keyCode` value because `keyCode` is [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).

- Delete `dataKey` values inside `keyData` objects and generate them from `key` property

- Delete `file` values inside `keyData` objects and generate them from `name` property

- Store references to `audio` and `keyDiv` in an object based on `code` value and use in `playSound` instead of repeatedly selecting them

- Move repeated color in `key__sound` and `key__playing` into a CSS variable
