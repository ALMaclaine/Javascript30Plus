# Javascript30Plus - 22 Follow Along Link Highlighter

## Changes

- Move script into separate file

- Change script to use event delegation on document body

- Add lorem ipsum generator code

- Grab reference to wrapper

- Create `generateIpsumTag` function

- Delete ipsum markup from html

- Use `generateIpsumTag` to generate the initial ipsum

- Replace `a` tag style with class `highlightable`, adjust event delegation

- Add `highlightable` class to dynamically generated lorum

- Add `checkForScrolledToEnd` function to add more ipsum tags as the scroll reaches the end

- Add window scroll listener to call `checkForScrolledToEnd`

- Call `checkForSCrolledToEnd` a few times after initial append to make sure there's
enough text to fill the screen

- Add function `appendIpsum` and use it instead of directly accessing wrapper

- Add `currentTarget` variable to keep track of which element is highlighted

- Add resize listener on window to move the highlight when the window is moved
