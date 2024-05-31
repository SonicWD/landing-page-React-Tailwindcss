//import React from 'react';
import PropTypes from 'prop-types';

function Product({ imageSrc = "", altText = "", description = "" }) {
  return (
    <section>
      <img src={imageSrc} alt={altText} />
      <p>{description}</p>
    </section>
  );
}

Product.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  description: PropTypes.string
};

export default Product;
