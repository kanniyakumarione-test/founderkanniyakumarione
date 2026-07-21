import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, image, url, type = "website" }) {
  const siteTitle = "Roshinth Sojan | Founder & CEO of Kanniyakumari One";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = "Roshinth Sojan, Founder & CEO of Kanniyakumari One, building the ultimate local directory, tourism guide, and smart city portal for Kanyakumari.";
  const metaDescription = description || siteDescription;
  const siteImage = "https://founder.kanniyakumarione.com/assets/kanniyakumarione%20logo.png";
  const metaImage = image || siteImage;
  const siteUrl = "https://founder.kanniyakumarione.com/";
  const metaUrl = url || siteUrl;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roshinth Sojan",
    "jobTitle": "Founder & CEO",
    "organization": {
      "@type": "Organization",
      "name": "Kanniyakumari One",
      "url": "https://www.kanniyakumarione.com/"
    },
    "url": siteUrl,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7358847752",
      "contactType": "Contact",
      "email": "kanniyakumarione@gmail.com"
    },
    "image": siteImage,
    "sameAs": [
      "https://roshinth-sojan-portfolio.vercel.app/",
      "https://www.kanniyakumarione.com/",
      "https://services.kanniyakumarione.com/",
      "https://tamilbible.kanniyakumarione.com/",
      "https://twitter.com/kanniyakumarione",
      "https://www.linkedin.com/in/roshinth-sojan-846880264/"
    ],
    "description": "Founder and CEO of Kanniyakumari One, the official website for local business listings, tourism, services, and community resources in Kanyakumari district.",
    "knowsAbout": ["Local Directory", "Tourism", "Community Platform", "Leadership"]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="Roshinth Sojan, Kanniyakumari One, Founder, CEO, Kanyakumari, Local Directory, Tourism, Community Hub" />
      <meta name="author" content="Roshinth Sojan" />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Roshinth Sojan" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kanniyakumarione" />
      <meta name="twitter:creator" content="@kanniyakumarione" />
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

