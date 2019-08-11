import React from 'react'

export default function navBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand"> Clicky Game </span>
                <span className="outline-success my-2 my-sm-0"> Click an image to begin </span>
                <span className="navbar-brand"> Score: | Top score:</span>

            </nav>
        </div>
    )
}
