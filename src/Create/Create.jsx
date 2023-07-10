//import React from 'react';
import './Create.css';

//one day will do this
function Create() {
    return(
        <div className='recipe_create'>
            <h1 className='headline'>Want to upload your own recipe! Do it here!</h1>
            <p> 1.id (should be made automatically)
                2.title (input)
                3.ingredient(s) (should be done as a list)
                4.instruction(s) (type and text)
                5.time(s) (a list as well)
                6.image (upload a image)
            </p>
        </div>
    )
}

export default Create;