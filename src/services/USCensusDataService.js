const census = require("citysdk");
const key = '125d1b7224cadc62c574b7c23b49e700d740bbb4';

// Get FIPS code for volusia county
census(
    {
      vintage: 2015, // required
      geoHierarchy: {
        // required
        county: {
          lat: 29.1969,
          lng: -81.0221
        }
      }
    },
    (err, res) => console.log(res)
  )

  