import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, image, url, type = "website" }) {
  const siteTitle = "Roshinth Sojan | Founder & CEO";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = "Roshinth Sojan, CEO of Kanniyakumarione, crafts high-trust digital ventures, immersive narratives, and community-focused experiences.";
  const metaDescription = description || siteDescription;
  const siteImage = "/src/assets/kanniyakumarione%20logo.png";
  const metaImage = image || siteImage;
  const siteUrl = "https://founder.kanniyakumarione.com/";
  const metaUrl = url || siteUrl;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roshinth Sojan",
    "jobTitle": "CEO & Founder",
    "url": siteUrl,
    "contactPoint": {
      "@id": "roshinth-sojan-contact",
      "@type": "ContactPoint",
      "telephone": "+91-7358847752",
      "contactType": "CEO Direct",
      "email": "kanniyakumarione@gmail.com"
    },
    "image": "/src/assets/kanniyakumarione%20logo.png",
    "sameAs": [
      "https://www.kanniyakumarione.com/",
      "https://services.kanniyakumarione.com/",
      "https://tamilbible.kanniyakumarione.com/",
      "https://twitter.com/kanniyakumarione",
      "https://linkedin.com/in/kanniyakumarione"
    ],
    "description": "Founder Kanniyakumarione spearheads the Kanniyakumarione ecosystem, encompassing global ventures, specialized service labs, and cultural heritage platforms."
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
