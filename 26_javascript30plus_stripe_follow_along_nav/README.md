# Javascript30Plus - 26 Stripe Follow Along Nav

## Changes

- Move styles into separate file

- Move script into separate file

- Add class `.cool__link` to each direct `li` descendent of `cool`

- Delete triggers references

- Grab reference to `cool` container

- Use event delegation on `cool` to handle both `mouseenter` and `mouseleave`

- Replace style `.cool > li` with `.cool__link`

- Delete classes `dropdown1`, `dropdown3` from markup

- Change `.dropdown` and `.trigger-enter .dropdown` styles to use CSS delay
instead of JS timeout, move opacity change to `.trigger-enter`

- Delete all references to `.trigger-enter-active` in script and styles
