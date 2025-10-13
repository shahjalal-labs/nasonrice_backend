## Airport city findout

- find out airport or city: by city name or airport name through keywords query:

- airport and city not found for bangladesh and middle east countries. checked with jeddah, dhaka, qatar,Dammam, Egypt etc.

## `api: https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=Lebanon`

response:

```
{
    "meta": {
        "count": 26,
        "links": {
            "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=bri",
            "next": "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=bri&page%5Boffset%5D=10",
            "last": "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=bri&page%5Boffset%5D=16"
        }
    },
    "data": [
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "BRISTOL",
            "detailedName": "BRISTOL/GB:BRISTOL",
            "id": "ABRS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABRS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+01:00",
            "iataCode": "BRS",
            "geoCode": {
                "latitude": 51.38278,
                "longitude": -2.71916
            },
            "address": {
                "cityName": "BRISTOL",
                "cityCode": "BRS",
                "countryName": "UNITED KINGDOM",
                "countryCode": "GB",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 5
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRISTOL",
            "detailedName": "BRISTOL/GB",
            "id": "CBRS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBRS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+01:00",
            "iataCode": "BRS",
            "geoCode": {
                "latitude": 51.38278,
                "longitude": -2.71916
            },
            "address": {
                "cityName": "BRISTOL",
                "cityCode": "BRS",
                "countryName": "UNITED KINGDOM",
                "countryCode": "GB",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 5
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "PALESE",
            "detailedName": "BARI/IT:PALESE",
            "id": "ABRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BRI",
            "geoCode": {
                "latitude": 41.13695,
                "longitude": 16.76195
            },
            "address": {
                "cityName": "BARI",
                "cityCode": "BRI",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 3
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BARI",
            "detailedName": "BARI/IT",
            "id": "CBRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BRI",
            "geoCode": {
                "latitude": 41.13695,
                "longitude": 16.76195
            },
            "address": {
                "cityName": "BARI",
                "cityCode": "BRI",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 3
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "CASALE",
            "detailedName": "BRINDISI/IT:CASALE",
            "id": "ABDS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABDS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BDS",
            "geoCode": {
                "latitude": 40.6575,
                "longitude": 17.94695
            },
            "address": {
                "cityName": "BRINDISI",
                "cityCode": "BDS",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRINDISI",
            "detailedName": "BRINDISI/IT",
            "id": "CBDS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBDS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BDS",
            "geoCode": {
                "latitude": 40.6575,
                "longitude": 17.94695
            },
            "address": {
                "cityName": "BRINDISI",
                "cityCode": "BDS",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "TRI-CITIES RGNL TN/VA",
            "detailedName": "BRISTOL/JOHNSON/KINGSP/TN/US:T",
            "id": "ATRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ATRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "-04:00",
            "iataCode": "TRI",
            "geoCode": {
                "latitude": 36.47528,
                "longitude": -82.4075
            },
            "address": {
                "cityName": "BRISTOL/JOHNSON/KINGSP",
                "cityCode": "TRI",
                "countryName": "UNITED STATES OF AMERICA",
                "countryCode": "US",
                "stateCode": "TN",
                "regionCode": "NAMER"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRISTOL/JOHNSON/KINGSP",
            "detailedName": "BRISTOL/JOHNSON/KINGSP/TN/US",
            "id": "CTRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CTRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "-04:00",
            "iataCode": "TRI",
            "geoCode": {
                "latitude": 36.47528,
                "longitude": -82.4075
            },
            "address": {
                "cityName": "BRISTOL/JOHNSON/KINGSP",
                "cityCode": "TRI",
                "countryName": "UNITED STATES OF AMERICA",
                "countryCode": "US",
                "stateCode": "TN",
                "regionCode": "NAMER"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "VALLEE DE LA DORDOGNE",
            "detailedName": "BRIVE LA GAILLARD/FR:VALLEE DE",
            "id": "ABVE",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABVE",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BVE",
            "geoCode": {
                "latitude": 45.04139,
                "longitude": 1.48639
            },
            "address": {
                "cityName": "BRIVE LA GAILLARD",
                "cityCode": "BVE",
                "countryName": "FRANCE",
                "countryCode": "FR",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 0
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRIVE LA GAILLARD",
            "detailedName": "BRIVE LA GAILLARD/FR",
            "id": "CBVE",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBVE",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BVE",
            "geoCode": {
                "latitude": 45.04139,
                "longitude": 1.48639
            },
            "address": {
                "cityName": "BRIVE LA GAILLARD",
                "cityCode": "BVE",
                "countryName": "FRANCE",
                "countryCode": "FR",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 0
                }
            }
        }
    ]
}{
    "meta": {
        "count": 26,
        "links": {
            "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=bri",
            "next": "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=bri&page%5Boffset%5D=10",
            "last": "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=bri&page%5Boffset%5D=16"
        }
    },
    "data": [
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "BRISTOL",
            "detailedName": "BRISTOL/GB:BRISTOL",
            "id": "ABRS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABRS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+01:00",
            "iataCode": "BRS",
            "geoCode": {
                "latitude": 51.38278,
                "longitude": -2.71916
            },
            "address": {
                "cityName": "BRISTOL",
                "cityCode": "BRS",
                "countryName": "UNITED KINGDOM",
                "countryCode": "GB",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 5
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRISTOL",
            "detailedName": "BRISTOL/GB",
            "id": "CBRS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBRS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+01:00",
            "iataCode": "BRS",
            "geoCode": {
                "latitude": 51.38278,
                "longitude": -2.71916
            },
            "address": {
                "cityName": "BRISTOL",
                "cityCode": "BRS",
                "countryName": "UNITED KINGDOM",
                "countryCode": "GB",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 5
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "PALESE",
            "detailedName": "BARI/IT:PALESE",
            "id": "ABRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BRI",
            "geoCode": {
                "latitude": 41.13695,
                "longitude": 16.76195
            },
            "address": {
                "cityName": "BARI",
                "cityCode": "BRI",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 3
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BARI",
            "detailedName": "BARI/IT",
            "id": "CBRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BRI",
            "geoCode": {
                "latitude": 41.13695,
                "longitude": 16.76195
            },
            "address": {
                "cityName": "BARI",
                "cityCode": "BRI",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 3
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "CASALE",
            "detailedName": "BRINDISI/IT:CASALE",
            "id": "ABDS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABDS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BDS",
            "geoCode": {
                "latitude": 40.6575,
                "longitude": 17.94695
            },
            "address": {
                "cityName": "BRINDISI",
                "cityCode": "BDS",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRINDISI",
            "detailedName": "BRINDISI/IT",
            "id": "CBDS",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBDS",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BDS",
            "geoCode": {
                "latitude": 40.6575,
                "longitude": 17.94695
            },
            "address": {
                "cityName": "BRINDISI",
                "cityCode": "BDS",
                "countryName": "ITALY",
                "countryCode": "IT",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "TRI-CITIES RGNL TN/VA",
            "detailedName": "BRISTOL/JOHNSON/KINGSP/TN/US:T",
            "id": "ATRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ATRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "-04:00",
            "iataCode": "TRI",
            "geoCode": {
                "latitude": 36.47528,
                "longitude": -82.4075
            },
            "address": {
                "cityName": "BRISTOL/JOHNSON/KINGSP",
                "cityCode": "TRI",
                "countryName": "UNITED STATES OF AMERICA",
                "countryCode": "US",
                "stateCode": "TN",
                "regionCode": "NAMER"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRISTOL/JOHNSON/KINGSP",
            "detailedName": "BRISTOL/JOHNSON/KINGSP/TN/US",
            "id": "CTRI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CTRI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "-04:00",
            "iataCode": "TRI",
            "geoCode": {
                "latitude": 36.47528,
                "longitude": -82.4075
            },
            "address": {
                "cityName": "BRISTOL/JOHNSON/KINGSP",
                "cityCode": "TRI",
                "countryName": "UNITED STATES OF AMERICA",
                "countryCode": "US",
                "stateCode": "TN",
                "regionCode": "NAMER"
            },
            "analytics": {
                "travelers": {
                    "score": 1
                }
            }
        },
        {
            "type": "location",
            "subType": "AIRPORT",
            "name": "VALLEE DE LA DORDOGNE",
            "detailedName": "BRIVE LA GAILLARD/FR:VALLEE DE",
            "id": "ABVE",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/ABVE",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BVE",
            "geoCode": {
                "latitude": 45.04139,
                "longitude": 1.48639
            },
            "address": {
                "cityName": "BRIVE LA GAILLARD",
                "cityCode": "BVE",
                "countryName": "FRANCE",
                "countryCode": "FR",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 0
                }
            }
        },
        {
            "type": "location",
            "subType": "CITY",
            "name": "BRIVE LA GAILLARD",
            "detailedName": "BRIVE LA GAILLARD/FR",
            "id": "CBVE",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CBVE",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "+02:00",
            "iataCode": "BVE",
            "geoCode": {
                "latitude": 45.04139,
                "longitude": 1.48639
            },
            "address": {
                "cityName": "BRIVE LA GAILLARD",
                "cityCode": "BVE",
                "countryName": "FRANCE",
                "countryCode": "FR",
                "regionCode": "EUROP"
            },
            "analytics": {
                "travelers": {
                    "score": 0
                }
            }
        }
    ]
}
```

---
