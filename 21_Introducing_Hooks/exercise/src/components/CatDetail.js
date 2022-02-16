import React, { Component } from "react";
import "../styles/components/CatDetail.scss";

export class CatDetail extends Component {
  render() {
    const {
      catDetail: {
        weight: { metric },
        name,
        origin,
        description,
        life_span,
        temperament,
        img,
      },
    } = this.props;
    return (
        <div className="cat-card">
          <div className="cat-card-img">
            <img src={img} />
          </div>
          <div className="cat-card-body">
            <p className="cat-name">{name}</p>
            <p className="cat-origin">{origin}</p>
            <div className="cat-attribute">
              <p>
                <span className="cat-attribute-title">Temperament: </span>
                {temperament}
              </p>
              <p>
                <span className="cat-attribute-title">Life Span: </span>
                {life_span}
              </p>
              <p>
                <span className="cat-attribute-title">Weight: </span>
                {metric}
              </p>
            </div>
            <div className="cat-description">
              <p className="cat-attribute-title">Description</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
    );
  }
}
