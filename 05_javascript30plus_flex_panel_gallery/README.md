# Javascript30Plus - 05 Flex Panel Gallery

## Changes

- Move styles into separate file

- Move script into separate file

- Combine `backgrgound` and `background-position` into one style on `panel` class, ensure it's above
background size otherwise it will be overwritten because of CSS application rules

- Add generic font family to `font-family` on `html` tag

- Add top class to top p of each panel and adjust 1st child styles

- Add bottom class to bottom p of each panel and adjust last child styles

- Add middle class to middle p of each panel and adjust nthchild(2) styles

- Adjust class names to bem (top -> panel--top etc)

- Add child selector between `.panel` and `.panel--middle`

- Add child selector between `.panel` and `p`

- Combine `.panel > *` and `.panel > p` styles

- Add `user-select: none` to `*` style

- Create `CreatePanel` function

- Pull panel data from html into object in script

- Dynamically generate panels with event listeners

- Add one more Panel
