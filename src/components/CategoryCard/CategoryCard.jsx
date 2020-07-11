import React from "react";
import "./CategoryCard.css";
import { Label} from "semantic-ui-react";

const CategoryCard = ({ imageUrl,categoryClickHandler, name }) => {
  return (
    <div className="card" onClick={categoryClickHandler}>
      <Label as="a" size="large" color="red" horizontal>
        Sale
      </Label>
      <div className="image-container">
        <img className="categoryImage" alt="category-card" src={imageUrl} />
      </div>
      <div className="title">
        {name}
        <div className="sub-title">Know More</div>
      </div>
    </div>
  );
};

export default CategoryCard;
