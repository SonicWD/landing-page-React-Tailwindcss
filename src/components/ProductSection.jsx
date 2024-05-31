/** @jsxImportSource react */
import React from 'react';
import Product from './Product';

function ProductSection() {
  return (
    <article className="flex justify-around p-4">
      <Product
        imageSrc="path_to_image1.jpg"
        altText="Producto 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                    dolorem cum, temporibus necessitatibus neque vitae? Eos ullam sunt
                    maxime, id iste nulla iusto minima incidunt labore pariatur
                    assumenda deleniti est."
      />
      <Product
        imageSrc="path_to_image2.jpg"
        altText="Producto 2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
                    impedit fugiat ad! Dolores ipsum delectus laudantium animi
                    explicabo! Sequi minus perspiciatis voluptas id quas, consectetur
                    ipsum ducimus dolores dignissimos!"
      />
    </article>
  );
}

export default ProductSection;
