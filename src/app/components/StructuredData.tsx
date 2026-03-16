import React from 'react';

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    "name": "Full Gospel Pentecostal Church (FGPC) Nagercoil",
    "image": "https://fgpcnagercoil.com/header/fgpc_nagercoil.png",
    "@id": "https://fgpcnagercoil.com",
    "url": "https://fgpcnagercoil.com",
    "telephone": "04652 229379",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "174, Church Street, Vettoornimadam",
      "addressLocality": "Nagercoil",
      "postalCode": "629003",
      "addressRegion": "Tamilnadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.1883, 
      "longitude": 77.4109
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fgpcnagercoil",
      "https://www.instagram.com/fgpcnagercoil",
      "https://www.youtube.com/@fgpcngl"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
