import React from "react";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Counter />
            <h1 className = "text-center">Clicky Game</h1>
            <h2 className = "text-center">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    )
}

export default App;

// The application should render different images (of your choice) to the screen. Each image should listen for click events.

// 4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

// 5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

// 6. Once the user's score is reset after an incorrect guess, the game should restart.

// 7. When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.