# Javascript30Plus - 06 Type Ahead

## Changes

- Move script into seperate file

- Create `CreateFillerResponse` function

- Use `CreateFillerResponse` to dynamically generate initial form at start of application

- Create `CreateSuggestionResult` function

- Use `CreateSuggestionResult` and `CreateFillerReponse` to dynamically generate search results inside
of `displayMatches`

- Create class `suggestion` instead of targeting `li` scoped off `suggestions`, change references in css and js

- Switch to bem, rename `name` and `population` class to `suggestion__name` and `suggestion__population`, change
references in css and js
