# Quidax Books

 [Deployed Url](https://quidaxbooks.herokuapp.com/).

#### To Install and Set up the Project Locally

- Clone this project using
`git clone https://github.com/Chiazokam/quidax-books`
- cd into the cloned folder
 `cd quidax-books`
- Run yarn install to install all dependencies
 `yarn install`
- To generate the Apollo Type Definitions, run
 `yarn run codegen`.
This will generate a `generated` folder with a `graphql.ts` file within that contains all the Type Definitions needed for all the queries
- To start the app, run
 `yarn start`

####  Assumptions Made
- From the design, all transactions made on the application are in dollars
- All items in the cart at once are in the same currency
- When the cart is empty, some information is needed to display to the user. I created a       default text to let the user know this
- There isn't a need to show the left arrow on the carousel when the user has scrolled to the leftmost book. I hid the left arrow in that situation.
- Similar to the left arrow on the carousel, the right arrow disappears when there are no more books to show.
- Having two kinds of dates displayed in the app, I assumed that the `released year` comes later than th e`published year`
- Ratings were rounded up if their decimals are equal to or above 0.5. Ratings were rounded down if their ratings were below 0.5
- Texts that were quite long were truncated using ellipses.
- Because the data isn't being persisted, the cart is emptied each time the  page reloaded


#### Requirements Not Met (Including Things I Intended To Do but Could Not Do)
- I would need to make the Skeleton appear better
- I would need to put a loader component on the Details page
- Responsiveness of the Entire App
- Transition of the overlay on each book in the carousel
- Transition of the Cart into and out of the page.
- Search by `authors`, `tags`, `genres`


#### Issues Faced While completing the assignment
- Querying the API to search other fields apart from the `title` field
- Deployment


#### Constructive feedback