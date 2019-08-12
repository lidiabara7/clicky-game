import React from "react";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
// import Cards from "./components/Cards";
import cards from "./cards.json";

class App extends React.Component {
    // Setting the initial state for the cards and the scores
    state = {
        cards,
        clickedArray: [],
        topScore: 0,
        score: 0,
    };

    //this happends when a pic is clicked

    handleClick = (id) => {
        if (this.state.score === 12) {
            alert("YOU WIN!");
            this.resetGame();
        } else {
            this.state.clicked.push(id);
            this.setState({
            score: this.state.score + 1,
            });

        }

    };

    //  // handleIncrement increases this.state.count by 1
    //  handleIncrement = () => {
    //     // We always use the setState method to update a component's state
    //     this.setState({ score: this.state.score + 1 });
    // };

    render() {
        return (
            <div>
                <NavBar />
                <Counter />
                <h1 className="text-center">Clicky Game</h1>
                <h2 className="text-center">Click on an image to earn points, but don't click on any more than once!</h2>

                <div className="container">
                    {/* getting the cards/images from the cards.json file */}
                    {cards.map((imageArray) => {
                        return <img onClick={this.handleClick} src={imageArray.src} alt="click here"
                            key={imageArray.id} className="m-4"></img>
                    })}
                </div>
            </div>

        )
    }
}
export default App;

                    // The application should render different images (of your choice) to the screen. Each image should listen for click events.

                    // 4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

                    // 5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

                    // 6. Once the user's score is reset after an incorrect guess, the game should restart.

                    // 7. When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.
