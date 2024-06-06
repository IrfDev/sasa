# Assasement

Three parts:

## Async + reactivity

- With the state store you've created, add a `persons` key and a `loading` key
- Fetch all the persons age in the data/names.ts list inside the App.tsx component based on the `getAge` function from the helpers
- Update the "this page is loading" text based on the async state inside the App.tsx
- On the PeopleCardList.tsx component use the `persons` key from your store and render the persons

The render count for the App.tsx file should be 2
The render count for the PeopleCardList.tsx file should be 2 as well

## Async + reactivity level 2

From prev step

- Fetch all the persons genders in the persons list inside the App.tsx component based on the getGender from the helpers and update your store state
- From the response, get the age of the females and update your store state
- Get the nationality of the females between 30 and 45
- Render the nationalities on the PeopleCardList

The render count for the App.tsx file should be 2
The render count for the PeopleCardList.tsx file should be 2 as well

## UI + reactivity

- Render all the persons, regardless their age, gender, if there's an error, etc
- Create a delete button for the persons
- Delete that person from the store
- Match the people card person

The render count for the App.tsx file should be 2
The render count for the PeopleCardList.tsx file should be 2
The render count for the PeopleCard.tsx file should be 1
