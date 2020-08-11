# Javascript30Plus - 13 Slide In On Scroll

## Changes

- More script into separate file

- Move styles into separate file

- Change forEach inside of `checkSlide` to a for loop, grab `sliderImage[i]` at start of loop

- Add additional condition `sliderImage.complete` to if condition

- In else block, if `sliderImage` classList doesn't contain `active` continue

- If `originalSrc` hasn't been stored already, store `src` property on `sliderImage`

- Replace `sliderImage.src` with `sliderImage.originalSrc + Date.now()`
