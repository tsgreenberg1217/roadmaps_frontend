# Roadmaps Frontend
## Checkout the Demo [here](https://myroadmap.herokuapp.com/login)

## created with React.js and styled with the semantic library


## About Roadmaps

* Roadmaps allows users to create trips and invite friends on your trips.
* Together, you can plan trips. Each trip profile is given a google map that updates routes and arrival time every time a user creates or rearranges their stops on their trips.
* Each stop contains a profile page where users can post pictures of the places they've been and things they've done.

## How it's made 
* The front end uses the React.js library along with Redux and thunk for asynchronus dispatches.
* The google maps were gerated with the [react-google-maps](https://github.com/tomchentw/react-google-maps) library. Waypoints, routes, and arrival times were fetched from the google maps api.
* Styled with semantic, and some custom CSS

## Instructions to run frontend

1. First make sure that the roadmaps backend server is running (there is a readme file that has instructions on how to run the server)
2. clone the repository and make your current directory the frontend folder
3. In your terminal, run npm install
4. Then run npm start and have it run on port 3001

# How to use it.

## Signing up
* Sign up with a username and a password.

## Creating a Trip
* Enter the title of your trip, then the starting destination and the ending destination. Then click submit
* Before the trip is created, you will be asked if you want to associate your trip with a picture. 'Yes' means you can add a picture from your computer, 'Nah' means we will choose one for you :) 

## Using your Trip Profile

### Invites
* On the right hand side of the screen, there is a form where you can invite friends to your trip. If the user exsists, their name will appear on the right (that user will then have access to the trip through the 'invite' tab)

### Stops
* On the upper-left hand side of the window, there is a form that allows you to create stops. By default, every stop you create is right before the last stop on the list.
* You will notice that each stop have 'up' and 'down' buttons. This allows you to re-arrange your stops. So 'up' means you will arrive at that stop earlier, and down means you will arrive at that stop later.
* Next to the up and down arrows, you will see a picture icon. Clicking on that will bring you to the pictures page of the stop.

### Pictures
* On the top of the window, first submit something you did at the place (an example would be "Grand Ole Opry" if your stop is Nashville). You will then have a section were you can upload pictures of your activity.
