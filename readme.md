# General TODOS

## TODO: Create the home page structure for index.html

That involves the navigation, tweets list, and trending hashtags section.

## TODO: Create HTML and Style for Navigation

Used Mockup for styles like border

Class structure like this:

    class navigation

        class logo

            <i class="fab fa-twitter"></i>

        class home-link

            <i class="fas fa-home"></i>

        class profile-container

            class profile 

## TODO: Create HTML and Style for Input Box

## TODO: Create HTML and Style for Individual Tweet

### TODO: User Info HTML and Styling

Class structures like this:

    class tweet-user-info

        class tweet-user-profile

        class tweet-user-name-container

            class tweet-user-fullname

            class tweet-user-username



    User Profile: width: 30px; height: 30px;

    User Full Name: font-size: 10px

    User Twitter Handel: font-size: 8px

## TODO: Create HTML and Style for Trending Box

### TODO: Styling for list of trends


    List Item: padding-left: 20px; padding-top and bottom: 8px

## TODO(API): Set up NodeJS Server

Return `Hello World` for the root `/` get request

[Example](https://expressjs.com/en/starter/hello-world.html)

## TODO(API): Create API endpoint `/tweeets` to return a list of tweets based on query

Use [axios](https://github.com/axios/axios) for making an API request to Twitter API

Console log the data

Return as a response

## TODO(API): Create Twitter `get()` helper function to move the Twitter API logic

#### :

    - Create Twitter class inside `api/helpers/twitter.js`
    - Create a `get()` function that takes in the necessary parameters
    - Inside `get()` return `axios.get(...)`
    - Import Twitter class in `app.js` with `const twitter = new Twitter();`
    - Initialize and use the `twitter` object to now do somethong like `twitter.get(...).then(...).catch(...)`

## TODO(API): Move the API Token to .env file and import it

## TODO: Complete `getTwitterData()` function to retrieve data from our API

Use the following static url to get data from api:

```http://localhost:3000/tweets?q=coding&count=10```

###

    - Use `fetch()`
    - Call function on load of js
    - Console log response

## TODO: Get search input and use it to build a `url` like the one above

Building a dynamic url that will change based on the user's search input

####

    - Call `getTwitterData()` function when a user clicks on search icon
    - Use string literals to build out the url
    - Console log response

### TODO: Get twitter data when a user hits enter


## TODO: Complete `buildTweets()` function to show the Tweets List(only text)

####

    - Call `buildTweets()` function from `getTwitterData()`
    - Use List.map() to loop over the list of tweets
    - Use string literals to replace html with the text from each tweet
    - Replace html content inside `.tweets-list`

## TODO: Add ability to show images in the tweets

####

    - Use `buildImages()` function
    - Check if there is media using `.length`property to call `buildImages()` function

## TODO: Add ability to show videos in the tweets

## TODO: Add ability to show gifs in the tweets

## TODO: Show user info in the tweets

## TODO: Use [moment.js](https://momentjs.com/) to show the date of tweet

## TODO: Complete `selectTrend()` function to allow a user to click on the trend and search for it

####

    - Call `selectTrend()` function from list item click
    - Get the inner text of list item
    - Set the value of input search using the text
    - Call `getTwitterData()` function

## TODO: Create HTML and Style for Next Page Button

####

    - Use `next-page-container` class
    - border-radius: 20px; margin-top: 20px;
    - Use arrow down font awesome icon

## TODO: Showing Next Page of Tweets

### TODO: Save Next Page Url

### TODO: Load tweets when selecting the next page button

[Here](https://developer.twitter.com/en/docs/tweets/timelines/guides/working-with-timelines) is how twitter pagination works

### TODO(API): ...something that has to do with `max_id`

### TODO: Fix logic to replace tweets when searching, but append tweets when going to next page

### TODO: Show next page button only when there is a next page

## TODO: Clean Up and Completion.

















