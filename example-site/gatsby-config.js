module.exports = {
    plugins: [
      {
        resolve: "hh-theme",
        options: {
          siteUrl: "https://happyhippo.ai/", // Used for sitemap generation
          manifestSettings: {
            favicon: "static/favicon-32x32.png", // Path is relative to the root
            siteName: "HappyHippo AI", // Used in manifest.json
            shortName: "HappyHippo", // Used in manifest.json
            startUrl: "https://happyhippo.ai/", // Used in manifest.json
            backgroundColor: "#FFFFFF", // Used in manifest.json
            themeColor: "#000000", // Used in manifest.json
            display: "minimal-ui", // Used in manifest.json
          },
          contentDirectory: "content", // Specifies the root content directory path
          blogSettings: {
            // If set, the blog integration is enabled
            path: "/blog", // Defines the slug for the blog listing page
            usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
          },
          googleAnalytics: {
            // If set, the Google Analytics integration is enabled
            trackingId: "G-Z1EHX59ZD7", // e.g. UA-XXXXXX-X
            anonymize: false, // Default is true
            environments: ["production"], // Default ["production"]
          },
        },
      },
    ],
  };
