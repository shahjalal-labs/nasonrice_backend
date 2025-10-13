## 1. AIRPORT OR CITY FIND OUT

- find out airport or city: by city name or airport name through keywords query:

- airport and city not found for bangladesh and middle east countries. checked with jeddah, dhaka, qatar,Dammam, Egypt etc.

## `api: https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=qatar`

> failure response:

```
{
	"meta": {
		"count": 0,
		"links": {
			"self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=qatar"
		}
	},
	"data": []
}

```

## `api: https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=Lebanon`

> success response:

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

## 2. find out fligths through origin to destination in a fixed date by location code

issue: failed to find out flights from middle east

> failure response:

```
{
	"meta": {
		"count": 0,
		"links": {
			"self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=FCO&destinationLocationCode=DBC&departureDate=2025-11-25&adults=1&nonStop=false&max=5"
		}
	},
	"data": []
}
```

`api: https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=FCO&destinationLocationCode=BWN&departureDate=2025-11-25&adults=1&nonStop=false&max=5
`

> success response:

```
{
	"meta": {
		"count": 5,
		"links": {
			"self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=FCO&destinationLocationCode=BWN&departureDate=2025-11-25&adults=1&nonStop=false&max=5"
		}
	},
	"data": [
		{
			"type": "flight-offer",
			"id": "1",
			"source": "GDS",
			"instantTicketingRequired": false,
			"nonHomogeneous": false,
			"oneWay": false,
			"isUpsellOffer": false,
			"lastTicketingDate": "2025-11-25",
			"lastTicketingDateTime": "2025-11-25",
			"numberOfBookableSeats": 9,
			"itineraries": [
				{
					"duration": "PT24H25M",
					"segments": [
						{
							"departure": {
								"iataCode": "FCO",
								"terminal": "3",
								"at": "2025-11-25T06:55:00"
							},
							"arrival": {
								"iataCode": "IST",
								"at": "2025-11-25T11:30:00"
							},
							"carrierCode": "TK",
							"number": "1362",
							"aircraft": {
								"code": "32B"
							},
							"operating": {
								"carrierCode": "TK"
							},
							"duration": "PT2H35M",
							"id": "4",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "IST",
								"at": "2025-11-25T15:30:00"
							},
							"arrival": {
								"iataCode": "SIN",
								"terminal": "1",
								"at": "2025-11-26T06:50:00"
							},
							"carrierCode": "TK",
							"number": "168",
							"aircraft": {
								"code": "359"
							},
							"operating": {
								"carrierCode": "TK"
							},
							"duration": "PT10H20M",
							"id": "5",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "SIN",
								"terminal": "2",
								"at": "2025-11-26T12:10:00"
							},
							"arrival": {
								"iataCode": "BWN",
								"at": "2025-11-26T14:20:00"
							},
							"carrierCode": "BI",
							"number": "422",
							"aircraft": {
								"code": "32N"
							},
							"operating": {
								"carrierCode": "BI"
							},
							"duration": "PT2H10M",
							"id": "6",
							"numberOfStops": 0,
							"blacklistedInEU": false
						}
					]
				}
			],
			"price": {
				"currency": "EUR",
				"total": "626.53",
				"base": "370.00",
				"fees": [
					{
						"amount": "0.00",
						"type": "SUPPLIER"
					},
					{
						"amount": "0.00",
						"type": "TICKETING"
					}
				],
				"grandTotal": "626.53"
			},
			"pricingOptions": {
				"fareType": [
					"PUBLISHED"
				],
				"includedCheckedBagsOnly": true
			},
			"validatingAirlineCodes": [
				"TK"
			],
			"travelerPricings": [
				{
					"travelerId": "1",
					"fareOption": "STANDARD",
					"travelerType": "ADULT",
					"price": {
						"currency": "EUR",
						"total": "626.53",
						"base": "370.00"
					},
					"fareDetailsBySegment": [
						{
							"segmentId": "4",
							"cabin": "ECONOMY",
							"fareBasis": "TLN2XPBO",
							"brandedFare": "PS",
							"brandedFareLabel": "PROMOTIONAL",
							"class": "T",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "5",
							"cabin": "ECONOMY",
							"fareBasis": "TLN2XPBO",
							"brandedFare": "PS",
							"brandedFareLabel": "PROMOTIONAL",
							"class": "T",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "6",
							"cabin": "ECONOMY",
							"fareBasis": "TLN2XPBO",
							"brandedFare": "PS",
							"brandedFareLabel": "PROMOTIONAL",
							"class": "S",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "flight-offer",
			"id": "2",
			"source": "GDS",
			"instantTicketingRequired": false,
			"nonHomogeneous": false,
			"oneWay": false,
			"isUpsellOffer": false,
			"lastTicketingDate": "2025-11-25",
			"lastTicketingDateTime": "2025-11-25",
			"numberOfBookableSeats": 9,
			"itineraries": [
				{
					"duration": "PT20H50M",
					"segments": [
						{
							"departure": {
								"iataCode": "FCO",
								"terminal": "3",
								"at": "2025-11-25T10:50:00"
							},
							"arrival": {
								"iataCode": "SIN",
								"terminal": "0",
								"at": "2025-11-26T05:40:00"
							},
							"carrierCode": "SQ",
							"number": "365",
							"aircraft": {
								"code": "359"
							},
							"operating": {
								"carrierCode": "SQ"
							},
							"duration": "PT11H50M",
							"id": "13",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "SIN",
								"terminal": "2",
								"at": "2025-11-26T12:30:00"
							},
							"arrival": {
								"iataCode": "BWN",
								"at": "2025-11-26T14:40:00"
							},
							"carrierCode": "SQ",
							"number": "148",
							"aircraft": {
								"code": "7M8"
							},
							"operating": {
								"carrierCode": "SQ"
							},
							"duration": "PT2H10M",
							"id": "14",
							"numberOfStops": 0,
							"blacklistedInEU": false
						}
					]
				}
			],
			"price": {
				"currency": "EUR",
				"total": "679.78",
				"base": "615.00",
				"fees": [
					{
						"amount": "0.00",
						"type": "SUPPLIER"
					},
					{
						"amount": "0.00",
						"type": "TICKETING"
					}
				],
				"grandTotal": "679.78"
			},
			"pricingOptions": {
				"fareType": [
					"PUBLISHED"
				],
				"includedCheckedBagsOnly": true
			},
			"validatingAirlineCodes": [
				"SQ"
			],
			"travelerPricings": [
				{
					"travelerId": "1",
					"fareOption": "STANDARD",
					"travelerType": "ADULT",
					"price": {
						"currency": "EUR",
						"total": "679.78",
						"base": "615.00"
					},
					"fareDetailsBySegment": [
						{
							"segmentId": "13",
							"cabin": "ECONOMY",
							"fareBasis": "Q15ITOL",
							"brandedFare": "YCLVALUE",
							"brandedFareLabel": "ECONOMY VALUE",
							"class": "Q",
							"includedCheckedBags": {
								"weight": 25,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "NO SHOW",
									"isChargeable": true,
									"amenityType": "TRAVEL_SERVICES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "SEAT SELECTION STANDARD ZONE",
									"isChargeable": false,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CANCELLATION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "BOOKING CHANGE",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "SEAT SELECTION FORWARD ZONE",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "50 PERCENT KF MILES EARNED",
									"isChargeable": false,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "14",
							"cabin": "ECONOMY",
							"fareBasis": "Q15ITOL",
							"brandedFare": "YCLVALUE",
							"brandedFareLabel": "ECONOMY VALUE",
							"class": "Q",
							"includedCheckedBags": {
								"weight": 25,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "NO SHOW",
									"isChargeable": true,
									"amenityType": "TRAVEL_SERVICES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "SEAT SELECTION STANDARD ZONE",
									"isChargeable": false,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CANCELLATION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "BOOKING CHANGE",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "SEAT SELECTION FORWARD ZONE",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "50 PERCENT KF MILES EARNED",
									"isChargeable": false,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "flight-offer",
			"id": "3",
			"source": "GDS",
			"instantTicketingRequired": false,
			"nonHomogeneous": false,
			"oneWay": false,
			"isUpsellOffer": false,
			"lastTicketingDate": "2025-11-25",
			"lastTicketingDateTime": "2025-11-25",
			"numberOfBookableSeats": 4,
			"itineraries": [
				{
					"duration": "PT24H25M",
					"segments": [
						{
							"departure": {
								"iataCode": "FCO",
								"terminal": "3",
								"at": "2025-11-25T06:55:00"
							},
							"arrival": {
								"iataCode": "IST",
								"at": "2025-11-25T11:30:00"
							},
							"carrierCode": "TK",
							"number": "1362",
							"aircraft": {
								"code": "32B"
							},
							"operating": {
								"carrierCode": "TK"
							},
							"duration": "PT2H35M",
							"id": "7",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "IST",
								"at": "2025-11-25T13:25:00"
							},
							"arrival": {
								"iataCode": "SIN",
								"terminal": "0",
								"at": "2025-11-26T04:45:00"
							},
							"carrierCode": "TK",
							"number": "9300",
							"aircraft": {
								"code": "359"
							},
							"operating": {
								"carrierCode": "SQ"
							},
							"duration": "PT10H20M",
							"id": "8",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "SIN",
								"terminal": "2",
								"at": "2025-11-26T12:10:00"
							},
							"arrival": {
								"iataCode": "BWN",
								"at": "2025-11-26T14:20:00"
							},
							"carrierCode": "BI",
							"number": "422",
							"aircraft": {
								"code": "32N"
							},
							"operating": {
								"carrierCode": "BI"
							},
							"duration": "PT2H10M",
							"id": "9",
							"numberOfStops": 0,
							"blacklistedInEU": false
						}
					]
				}
			],
			"price": {
				"currency": "EUR",
				"total": "742.53",
				"base": "486.00",
				"fees": [
					{
						"amount": "0.00",
						"type": "SUPPLIER"
					},
					{
						"amount": "0.00",
						"type": "TICKETING"
					}
				],
				"grandTotal": "742.53"
			},
			"pricingOptions": {
				"fareType": [
					"PUBLISHED"
				],
				"includedCheckedBagsOnly": true
			},
			"validatingAirlineCodes": [
				"TK"
			],
			"travelerPricings": [
				{
					"travelerId": "1",
					"fareOption": "STANDARD",
					"travelerType": "ADULT",
					"price": {
						"currency": "EUR",
						"total": "742.53",
						"base": "486.00"
					},
					"fareDetailsBySegment": [
						{
							"segmentId": "7",
							"cabin": "ECONOMY",
							"fareBasis": "ELN2PXOW",
							"brandedFare": "RS",
							"brandedFareLabel": "RESTRICTED",
							"class": "E",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "8",
							"cabin": "ECONOMY",
							"fareBasis": "ELN2PXOW",
							"brandedFare": "RS",
							"brandedFareLabel": "RESTRICTED",
							"class": "E",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "9",
							"cabin": "ECONOMY",
							"fareBasis": "ELN2PXOW",
							"brandedFare": "RS",
							"brandedFareLabel": "RESTRICTED",
							"class": "S",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "flight-offer",
			"id": "4",
			"source": "GDS",
			"instantTicketingRequired": false,
			"nonHomogeneous": false,
			"oneWay": false,
			"isUpsellOffer": false,
			"lastTicketingDate": "2025-11-23",
			"lastTicketingDateTime": "2025-11-23",
			"numberOfBookableSeats": 9,
			"itineraries": [
				{
					"duration": "PT22H25M",
					"segments": [
						{
							"departure": {
								"iataCode": "FCO",
								"terminal": "3",
								"at": "2025-11-25T08:55:00"
							},
							"arrival": {
								"iataCode": "DOH",
								"at": "2025-11-25T16:10:00"
							},
							"carrierCode": "QR",
							"number": "116",
							"aircraft": {
								"code": "359"
							},
							"operating": {
								"carrierCode": "QR"
							},
							"duration": "PT5H15M",
							"id": "1",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "DOH",
								"at": "2025-11-25T20:10:00"
							},
							"arrival": {
								"iataCode": "SIN",
								"terminal": "1",
								"at": "2025-11-26T08:45:00"
							},
							"carrierCode": "QR",
							"number": "942",
							"aircraft": {
								"code": "359"
							},
							"operating": {
								"carrierCode": "QR"
							},
							"duration": "PT7H35M",
							"id": "2",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "SIN",
								"terminal": "2",
								"at": "2025-11-26T12:10:00"
							},
							"arrival": {
								"iataCode": "BWN",
								"at": "2025-11-26T14:20:00"
							},
							"carrierCode": "BI",
							"number": "422",
							"aircraft": {
								"code": "32N"
							},
							"operating": {
								"carrierCode": "BI"
							},
							"duration": "PT2H10M",
							"id": "3",
							"numberOfStops": 0,
							"blacklistedInEU": false
						}
					]
				}
			],
			"price": {
				"currency": "EUR",
				"total": "754.60",
				"base": "507.00",
				"fees": [
					{
						"amount": "0.00",
						"type": "SUPPLIER"
					},
					{
						"amount": "0.00",
						"type": "TICKETING"
					}
				],
				"grandTotal": "754.60"
			},
			"pricingOptions": {
				"fareType": [
					"PUBLISHED"
				],
				"includedCheckedBagsOnly": true
			},
			"validatingAirlineCodes": [
				"QR"
			],
			"travelerPricings": [
				{
					"travelerId": "1",
					"fareOption": "STANDARD",
					"travelerType": "ADULT",
					"price": {
						"currency": "EUR",
						"total": "754.60",
						"base": "507.00"
					},
					"fareDetailsBySegment": [
						{
							"segmentId": "1",
							"cabin": "ECONOMY",
							"fareBasis": "NLR7R1RI",
							"brandedFare": "ECLASSIC",
							"brandedFareLabel": "ECONOMY CLASSIC",
							"class": "N",
							"includedCheckedBags": {
								"weight": 25,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "CABIN BAG 1 PIECE 7 KG",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "PRE RESERVED SEAT ASSIGNMENT",
									"isChargeable": true,
									"amenityType": "PRE_RESERVED_SEAT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL BEVERAGE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "PREMIUM SEAT",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "50 PCT QMILES ACCUMULATION",
									"isChargeable": false,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "2",
							"cabin": "ECONOMY",
							"fareBasis": "NLR7R1RI",
							"brandedFare": "ECLASSIC",
							"brandedFareLabel": "ECONOMY CLASSIC",
							"class": "N",
							"includedCheckedBags": {
								"weight": 25,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "CABIN BAG 1 PIECE 7 KG",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "PRE RESERVED SEAT ASSIGNMENT",
									"isChargeable": true,
									"amenityType": "PRE_RESERVED_SEAT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL BEVERAGE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "PREMIUM SEAT",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "50 PCT QMILES ACCUMULATION",
									"isChargeable": false,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "3",
							"cabin": "ECONOMY",
							"fareBasis": "NLR7R1RI",
							"brandedFare": "ECLASSIC",
							"brandedFareLabel": "ECONOMY CLASSIC",
							"class": "S",
							"includedCheckedBags": {
								"weight": 25,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "CABIN BAG 1 PIECE 7 KG",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "PRE RESERVED SEAT ASSIGNMENT",
									"isChargeable": true,
									"amenityType": "PRE_RESERVED_SEAT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL BEVERAGE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "PREMIUM SEAT",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "50 PCT QMILES ACCUMULATION",
									"isChargeable": false,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "flight-offer",
			"id": "5",
			"source": "GDS",
			"instantTicketingRequired": false,
			"nonHomogeneous": false,
			"oneWay": false,
			"isUpsellOffer": false,
			"lastTicketingDate": "2025-11-25",
			"lastTicketingDateTime": "2025-11-25",
			"numberOfBookableSeats": 4,
			"itineraries": [
				{
					"duration": "PT24H45M",
					"segments": [
						{
							"departure": {
								"iataCode": "FCO",
								"terminal": "3",
								"at": "2025-11-25T06:55:00"
							},
							"arrival": {
								"iataCode": "IST",
								"at": "2025-11-25T11:30:00"
							},
							"carrierCode": "TK",
							"number": "1362",
							"aircraft": {
								"code": "32B"
							},
							"operating": {
								"carrierCode": "TK"
							},
							"duration": "PT2H35M",
							"id": "10",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "IST",
								"at": "2025-11-25T15:30:00"
							},
							"arrival": {
								"iataCode": "SIN",
								"terminal": "1",
								"at": "2025-11-26T06:50:00"
							},
							"carrierCode": "TK",
							"number": "168",
							"aircraft": {
								"code": "359"
							},
							"operating": {
								"carrierCode": "TK"
							},
							"duration": "PT10H20M",
							"id": "11",
							"numberOfStops": 0,
							"blacklistedInEU": false
						},
						{
							"departure": {
								"iataCode": "SIN",
								"terminal": "2",
								"at": "2025-11-26T12:30:00"
							},
							"arrival": {
								"iataCode": "BWN",
								"at": "2025-11-26T14:40:00"
							},
							"carrierCode": "TK",
							"number": "9338",
							"aircraft": {
								"code": "7M8"
							},
							"operating": {
								"carrierCode": "SQ"
							},
							"duration": "PT2H10M",
							"id": "12",
							"numberOfStops": 0,
							"blacklistedInEU": false
						}
					]
				}
			],
			"price": {
				"currency": "EUR",
				"total": "777.88",
				"base": "486.00",
				"fees": [
					{
						"amount": "0.00",
						"type": "SUPPLIER"
					},
					{
						"amount": "0.00",
						"type": "TICKETING"
					}
				],
				"grandTotal": "777.88"
			},
			"pricingOptions": {
				"fareType": [
					"PUBLISHED"
				],
				"includedCheckedBagsOnly": true
			},
			"validatingAirlineCodes": [
				"TK"
			],
			"travelerPricings": [
				{
					"travelerId": "1",
					"fareOption": "STANDARD",
					"travelerType": "ADULT",
					"price": {
						"currency": "EUR",
						"total": "777.88",
						"base": "486.00"
					},
					"fareDetailsBySegment": [
						{
							"segmentId": "10",
							"cabin": "ECONOMY",
							"fareBasis": "ELN2PXOW",
							"brandedFare": "RS",
							"brandedFareLabel": "RESTRICTED",
							"class": "E",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "11",
							"cabin": "ECONOMY",
							"fareBasis": "ELN2PXOW",
							"brandedFare": "RS",
							"brandedFareLabel": "RESTRICTED",
							"class": "E",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						},
						{
							"segmentId": "12",
							"cabin": "ECONOMY",
							"fareBasis": "ELN2PXOW",
							"brandedFare": "RS",
							"brandedFareLabel": "RESTRICTED",
							"class": "E",
							"includedCheckedBags": {
								"weight": 30,
								"weightUnit": "KG"
							},
							"includedCabinBags": {
								"quantity": 1
							},
							"amenities": [
								{
									"description": "BAG INCLUDED",
									"isChargeable": false,
									"amenityType": "BAGGAGE",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "MEAL SERVICE",
									"isChargeable": false,
									"amenityType": "MEAL",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "STANDARD SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "REFUNDABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "CHANGEABLE TICKET",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "ONLINE MESSAGE RIGHT",
									"isChargeable": false,
									"amenityType": "ENTERTAINMENT",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								},
								{
									"description": "FRONT SEAT SELECTION",
									"isChargeable": true,
									"amenityType": "BRANDED_FARES",
									"amenityProvider": {
										"name": "BrandedFare"
									}
								}
							]
						}
					]
				}
			]
		}
	],
	"dictionaries": {
		"locations": {
			"FCO": {
				"cityCode": "ROM",
				"countryCode": "IT"
			},
			"BWN": {
				"cityCode": "BWN",
				"countryCode": "BN"
			},
			"SIN": {
				"cityCode": "SIN",
				"countryCode": "SG"
			},
			"IST": {
				"cityCode": "IST",
				"countryCode": "TR"
			},
			"DOH": {
				"cityCode": "DOH",
				"countryCode": "QA"
			}
		},
		"aircraft": {
			"7M8": "BOEING 737 MAX 8",
			"32B": "AIRBUS A321 (SHARKLETS)",
			"359": "AIRBUS A350-900",
			"32N": "AIRBUS A320NEO"
		},
		"currencies": {
			"EUR": "EURO"
		},
		"carriers": {
			"QR": "QATAR AIRWAYS",
			"TK": "TURKISH AIRLINES",
			"BI": "ROYAL BRUNEI",
			"SQ": "SINGAPORE AIRLINES"
		}
	}
}
```

## 3. flight pricing:

issue: price can be change very fast. therefor, when booking, price can missmatch and through error. it will allow booking if price not changed

**api**`: POST https://test.api.amadeus.com/v1/shopping/flight-offers/pricing`
body data:

```
{
    "data": {
      "type": "flight-offers-pricing",
      "flightOffers": [
        {
          "type": "flight-offer",
          "id": "1",
          "source": "GDS",
          "itineraries": [
            {
              "duration": "PT20H50M",
              "segments": [
                {
                  "id": "13",
                  "departure": { "iataCode": "FCO", "at": "2025-11-25T10:50:00" },
                  "arrival": { "iataCode": "SIN", "at": "2025-11-26T05:40:00" },
                  "carrierCode": "SQ",
                  "number": "365"
                },
                {
                  "id": "14",
                  "departure": { "iataCode": "SIN", "at": "2025-11-26T12:30:00" },
                  "arrival": { "iataCode": "BWN", "at": "2025-11-26T14:40:00" },
                  "carrierCode": "SQ",
                  "number": "148"
                }
              ]
            }
          ],
          "price": { "currency": "EUR", "total": "679.78" },
          "validatingAirlineCodes": ["SQ"],
          "travelerPricings": [
            {
              "travelerId": "1",
              "fareOption": "STANDARD",
              "travelerType": "ADULT",
              "price": {
                "currency": "EUR",
                "total": "679.78",
                "base": "615.00"
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "13",
                  "cabin": "ECONOMY",
                  "class": "Q"
                },
                {
                  "segmentId": "14",
                  "cabin": "ECONOMY",
                  "class": "Q"
                }
              ]
            }
          ]
        }
      ]
    }
  }


```

> success response:

```
{
	"data": {
		"type": "flight-offers-pricing",
		"flightOffers": [
			{
				"type": "flight-offer",
				"id": "1",
				"source": "GDS",
				"instantTicketingRequired": false,
				"nonHomogeneous": false,
				"paymentCardRequired": false,
				"lastTicketingDate": "2025-11-25",
				"itineraries": [
					{
						"segments": [
							{
								"departure": {
									"iataCode": "FCO",
									"terminal": "3",
									"at": "2025-11-25T10:50:00"
								},
								"arrival": {
									"iataCode": "SIN",
									"at": "2025-11-26T05:40:00"
								},
								"carrierCode": "SQ",
								"number": "365",
								"aircraft": {
									"code": "359"
								},
								"operating": {
									"carrierCode": "SQ"
								},
								"duration": "PT11H50M",
								"id": "13",
								"numberOfStops": 0,
								"co2Emissions": [
									{
										"weight": 420,
										"weightUnit": "KG",
										"cabin": "ECONOMY"
									}
								]
							},
							{
								"departure": {
									"iataCode": "SIN",
									"terminal": "2",
									"at": "2025-11-26T12:30:00"
								},
								"arrival": {
									"iataCode": "BWN",
									"at": "2025-11-26T14:40:00"
								},
								"carrierCode": "SQ",
								"number": "148",
								"aircraft": {
									"code": "7M8"
								},
								"operating": {
									"carrierCode": "SQ"
								},
								"duration": "PT2H10M",
								"id": "14",
								"numberOfStops": 0,
								"co2Emissions": [
									{
										"weight": 76,
										"weightUnit": "KG",
										"cabin": "ECONOMY"
									}
								]
							}
						]
					}
				],
				"price": {
					"currency": "EUR",
					"total": "679.78",
					"base": "615.00",
					"fees": [
						{
							"amount": "0.00",
							"type": "SUPPLIER"
						},
						{
							"amount": "0.00",
							"type": "TICKETING"
						},
						{
							"amount": "0.00",
							"type": "FORM_OF_PAYMENT"
						}
					],
					"grandTotal": "679.78",
					"billingCurrency": "EUR"
				},
				"pricingOptions": {
					"fareType": [
						"PUBLISHED"
					],
					"includedCheckedBagsOnly": false
				},
				"validatingAirlineCodes": [
					"SQ"
				],
				"travelerPricings": [
					{
						"travelerId": "1",
						"fareOption": "STANDARD",
						"travelerType": "ADULT",
						"price": {
							"currency": "EUR",
							"total": "679.78",
							"base": "615.00",
							"taxes": [
								{
									"amount": "2.09",
									"code": "EX"
								},
								{
									"amount": "5.99",
									"code": "SG"
								},
								{
									"amount": "17.25",
									"code": "YR"
								},
								{
									"amount": "8.00",
									"code": "HB"
								},
								{
									"amount": "24.89",
									"code": "IT"
								},
								{
									"amount": "2.00",
									"code": "L7"
								},
								{
									"amount": "1.21",
									"code": "MJ"
								},
								{
									"amount": "3.35",
									"code": "VT"
								}
							],
							"refundableTaxes": "47.53"
						},
						"fareDetailsBySegment": [
							{
								"segmentId": "13",
								"cabin": "ECONOMY",
								"fareBasis": "Q15ITOL",
								"brandedFare": "YCLVALUE",
								"class": "Q",
								"includedCheckedBags": {
									"weight": 25,
									"weightUnit": "KG"
								}
							},
							{
								"segmentId": "14",
								"cabin": "ECONOMY",
								"fareBasis": "Q15ITOL",
								"brandedFare": "YCLVALUE",
								"class": "Q",
								"includedCheckedBags": {
									"weight": 25,
									"weightUnit": "KG"
								}
							}
						]
					}
				]
			}
		],
		"bookingRequirements": {
			"emailAddressRequired": true,
			"mobilePhoneNumberRequired": true
		}
	},
	"dictionaries": {
		"locations": {
			"FCO": {
				"cityCode": "ROM",
				"countryCode": "IT"
			},
			"BWN": {
				"cityCode": "BWN",
				"countryCode": "BN"
			},
			"SIN": {
				"cityCode": "SIN",
				"countryCode": "SG"
			}
		}
	}
}
```

## flight booking:

issue: Hard to understand the process.
