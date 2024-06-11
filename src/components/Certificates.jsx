// eslint-disable-next-line no-unused-vars
import React from 'react';
import CertificateItem from './CertificateItem';

const Certificates = () => {
    return (
        <footer className="flex flex-wrap justify-center md:justify-around items-stretch bg-gray-900 py-5 border-t-4 border-b-4 border-black">
            {/* Certificado 1 */}
            <CertificateItem
                imageUrl="/images/certificates/certificate1.png"
                altText="Normas ISO"
                description=""
            />
            {/* Certificado 2 */}
            <CertificateItem
                imageUrl="/images/certificates/certificate2.jpeg"
                altText="Normas ISO"
                description=""
            />
            {/* Certificado 3 */}
            <CertificateItem
                imageUrl="/images/certificates/certificate3.png"
                altText="Certificado IQNet"
                description=""
            />
            {/* Certificado 4 */}
            <CertificateItem
                imageUrl="/images/certificates/certificate4.png"
                altText="100% orgánico"
                description=""
            />
            {/* Certificado 5 */}
            <CertificateItem
                imageUrl="/images/certificates/certificate5.png"
                altText="Aval USDA"
                description=""
            />
            {/* Certificado 6 */}
            <CertificateItem
                imageUrl="/images/certificates/certificate6.png"
                altText="SPP"
                description=""
            />
        </footer>
    );
};

export default Certificates;
