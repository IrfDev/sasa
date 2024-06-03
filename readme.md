# Assasement

Three parts:

## Async + reactivity

- With the state store you've created, add a data key and a loading key
- Fetch all the persons age in the names list inside the App component based on the getAge from the helpers
- Update the "this page is loading" text based on the async state

The render count for the App.tsx file should be 2
The render count for the PeopleCardList.tsx file should be 2 as well

## Async + reactivity level 2

- Fetch all the persons genders in the names list inside the App component based on the getGender from the helpers
- From the response, get the age of the females
- Get the nationality of the females between 30 and 45
- Render the nationalities on the PeopleCardList

The render count for the App.tsx file should be 2
The render count for the PeopleCardList.tsx file should be 2 as well

## UI + reactivity

- Render all the persons, regardless their age, gender, if there's an error, etc
- Create a delete button for the persons
- Delete that person from the store
- Get the corresponding UI

The render count for the App.tsx file should be 2
The render count for the PeopleCardList.tsx file should be 2
The render count for the PeopleCard.tsx file should be 1
