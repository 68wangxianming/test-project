report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/backstop_default_qqmap_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20190325-155543/backstop_default_qqmap_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_qqmap_0_document_0_phone.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.98",
          "analysisTime": 14
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20190325-155543/failed_diff_backstop_default_qqmap_0_document_0_phone.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});