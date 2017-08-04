import React from 'react';
import propTypes from 'prop-types';

// standard materialize card. allows for images and buttons
// title is mandatory
const Card = (props) => {
  const header = <span className="card-title">{props.header}</span>;
  const cardSize = props.width ? `s${props.width} m${props.width}` : 's12 m6';
  return (
    <div className={`row ${props.className}`}>
      <div className={`col ${cardSize}`}>
        <div className="card">
          {/* If there's an image, put it, and the header above the content. */}
          {props.image
            ? (
              <div className="card-image">
                <img alt="" src={props.imageSrc} />
                {header}
              </div>)
            : ''}
          <div className="card-content">
            {/* if there's an image, don't place the header here*/}
            {props.image ? '' : header}
            {props.children}
          </div>
          {props.buttons ? <div className="card-action"> {props.links} </div> : ''}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  buttons: propTypes.bool,
  links: propTypes.any,
  header: propTypes.string.isRequired,
  children: propTypes.any.isRequied,
  image: propTypes.bool.isRequired,
  imageSrc: propTypes.string,
};

Card.defaultProps = {
  buttons: false,
  links: '',
  cardColor: '',
  textColor: '',

  imageSrc: '',
  header: 'Card Header',
  children: <p>Card content</p>,
};

export default Card;
