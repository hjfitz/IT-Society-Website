import React from 'react';

/**
 * Expects a list as props.image of the format
 *
 * [
 *  { src: '/some/url', tagline: 'big caption', smallTag: 'smaller caption' },
 * ]
 *
 */
class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.image,
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image" />
            {this.state.images.map(image => (
              <div>
                <img alt="" src={image.src} />
                <div className="caption center-align">
                  <h3>{image.tagline}</h3>
                  {image.smallTag ? (
                    <h5 className="light grey-text text-lighten-3">
                      {image.smallTag}
                    </h5>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
