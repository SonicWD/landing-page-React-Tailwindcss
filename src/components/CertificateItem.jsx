// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const CertificateItem = ({ imageUrl, altText, description }) => {
    return (
        <div className="text-center mx-2 text-white relative">
            {/* Imagen */}
            <img
                src={imageUrl}
                alt={altText}
                className="w-24 h-24 rounded-full bg-white p-2 object-cover"
            />
            {/* Texto */}
            <p className="text-sm mt-2">{description}</p>
        </div>
    );
};

// Validación de propiedades del componente CertificateItem
CertificateItem.propTypes = {
    imageUrl: PropTypes.string.isRequired, // URL de la imagen (obligatoria)
    altText: PropTypes.string.isRequired, // Texto alternativo de la imagen (obligatorio)
    description: PropTypes.string.isRequired, // Descripción del certificado (obligatoria)
};

export default CertificateItem;
