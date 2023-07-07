//import React from 'react';
import {CgPlayButtonR} from 'react-icons/cg';


function Recipe() {
    return(
        <div>
            <p>Update this recipe</p>
            <CgPlayButtonR className="update_button"/>
            <p>Delete this recipe</p>
            <CgPlayButtonR className="delete_button"/>
            <p>This is where the recipe will go</p>
        </div>
    )
}

export default Recipe;