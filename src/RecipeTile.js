import React from 'react';
import './RecipeTile.css';
const RecipeTile = ({recipe}) => {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|png|gif)$/)
        !=null&&(<div className="RecipeTile">
            <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt="img"/>
            <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
        </div>)
    );
}

export default RecipeTile;
