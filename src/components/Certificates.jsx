// eslint-disable-next-line no-unused-vars
import React from 'react';
import CertificateItem from './CertificateItem';

const Certificates = () => {
    return (
        <footer className="flex flex-wrap justify-center md:justify-around items-stretch bg-gray-900 py-5 border-t-4 border-b-4 border-black">
            {/* Certificado 1 */}
            <CertificateItem
                imageUrl="https://hidegar.com/wp-content/uploads/2019/02/ISO-9001.png"
                altText="Normas ISO"
                description=""
            />
            {/* Certificado 2 */}
            <CertificateItem
                imageUrl="https://secure.porcicultura.com/uploads/Upload-5b2d111da349f-22062018.jpeg"
                altText="Normas ISO"
                description=""
            />
            {/* Certificado 3 */}
            <CertificateItem
                imageUrl="https://vectorise.net/logo/wp-content/uploads/2010/08/Logo-IQNet-Certified-Management-System.png"
                altText="Certificado IQNet"
                description=""
            />
            {/* Certificado 4 */}
            <CertificateItem
                imageUrl="https://www.rapunzel.de/img/logo-handinhand.png"
                altText="100% orgánico"
                description=""
            />
            {/* Certificado 5 */}
            <CertificateItem
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/USDA_organic_seal.svg/500px-USDA_organic_seal.svg.png"
                altText="Aval USDA"
                description=""
            />
            {/* Certificado 6 */}
            <CertificateItem
                imageUrl="https://spp.coop/wp-content/uploads/2023/06/cropped-ES-SPP-PP-CJ_2023-06-27_APR_crvs-01-300x300.png"
                altText="SPP"
                description=""
            />
        </footer>
    );
};

export default Certificates;
