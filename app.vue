<script setup>
useHead({
  htmlAttrs: {
    lang: "sv",
  },

  script: [
    {
      key: "schema-org-data",
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "",
        name: "",
        image: "",
        url: "",
        telephone: "",
        email: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "",
          postalCode: "",
          addressCountry: "",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 0,
          longitude: 0,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [],
          opens: "",
          closes: "",
        },
        description: "",
        sameAs: ["", ""],
        priceRange: "",
        areaServed: [],
        serviceType: [],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "",
            description: "",
          },
        },
      }),
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
