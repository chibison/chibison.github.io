const zafiro = {
	"nombre":"zafiro",
	"titulo": "Zafiro",
	"gen":3,
	"filtros":[
		{
			"nombre": "Pesca",
			"imagen": "otros/gen3/pesca.png",
			"filtro": "pesca",
			"defecto": false
		},
		{
			"nombre": "Surf",
			"imagen": "otros/gen3/surf.png",
			"filtro": "surf",
			"defecto": false
		},
		{
			"nombre": "Golpe roca",
			"imagen": "otros/gen3/roca.png",
			"filtro": "roca",
			"defecto": false
		},
		{
			"nombre": "Buceo",
			"imagen": "otros/gen3/buceo.png",
			"filtro": "buceo",
			"defecto": false
		},
		{
			"nombre": "Aparición masiva",
			"imagen": "otros/gen3/masiva.png",
			"filtro": "masiva",
			"defecto": false
		}
	],
	"lugares": [
		{
			"nombre": "Ruta 101",
			"regalo":[
				{
					"numero": 252,
					"nivel": 5
				},
				{
					"numero": 255,
					"nivel": 5
				},
				{
					"numero": 258,
					"nivel": 5
				}
			],
			"hierba": [
				{
          "numero": 263,
          "nivel": "2-3",
		      "porcentaje": 45
				},
				{
					"numero": 265,
					"nivel": "2-3",
				  "porcentaje": 45
				},
				{
					"numero": 261,
					"nivel": "2-3",
				  "porcentaje": 10
				}
			]
		},
		{
			"nombre": "Ruta 103",
			"hierba":[
				{
					"numero": 263,
					"nivel": "2-4",
				  "porcentaje":60
				},
				{
					"numero": 261,
					"nivel": "2-4",
				  "porcentaje": 30
				},
				{
					"numero": 278,
					"nivel": "2-4",
				  "porcentaje": 10
				}

			],
			"surf":[
				{
					"numero": 72,
					"nivel": "5-35",
				  "porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
			  	"porcentaje":35
				},
				{
					"numero": 279,
					"nivel": "25-30",
				  "porcentaje":5
				}
			],
			"pesca":[
				{
	         "numero": 129,
			  	 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
			    "probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20 }}
				},
				{
					"numero": 320,
			    "probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-45" ,"porcentaje": 60}}
			  },
				{
					"numero": 319,
			    "probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje":40 }}
				}
			]
		},
		{
			"nombre": "Ruta 102",
			"hierba":[
				{
					"numero": 265,
					"nivel": "3-4",
					"porcentaje":30
				},
				{
					"numero": 263,
					"nivel": "3-4",
					"porcentaje":30
				},
				{
					"numero": 261,
					"nivel": "3-4",
					"porcentaje": 15
				},
				{
					"numero": 283,
					"nivel": 3,
					"porcentaje":1
				},
				{
					"numero": 270,
					"nivel": "3-4",
					"porcentaje":20
				},
				{
					"numero": 280,
					"nivel": "3-4",
					"porcentaje":4
				}
			],
			"surf":[
				{
					"numero": 183,
					"nivel": "5-35",
					"porcentaje": 99
				},
				{
					"numero": 283,
					"nivel": "20-30",
					"porcentaje":1
				}
			],
			"pesca":[
				{
	         "numero": 129,
			  	 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 118,
			    "probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 341,
			    "probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-45" ,"porcentaje": 100}}
			  }
			],
			"masiva": [
				{
					"pokedex": "*",
					"numero": 283,
					"nivel": "3-4",
					"porcentaje": 50
				}
			]
		},
		{
			"nombre": "Ciudad Petalia",
			"lema": "Donde las personas viven en armonía con el lugar.",
			"surf": [
				{
					"numero": 183,
					"nivel": "5-35",
					"porcentaje": 100
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 341,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			],
		},
		{
			"nombre": "Ruta 104",
			"hierba":[
				{
					"numero": 263,
					"nivel": "4-5",
					"porcentaje":50
				},
				{
					"numero": 265,
					"nivel": "4-5",
					"porcentaje":30
				},
				{
					"numero": 276,
					"nivel": "4-5",
					"porcentaje":10
				},
				{
					"numero": 278,
					"nivel": "3-5",
					"porcentaje":10
				}
			],
			"surf": [
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 95
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 100} ,"buena":{"nivel":"10-30" ,"porcentaje":100},"super":{"nivel":"20-45" ,"porcentaje":100}}
				}
			]
		},
		{
			"nombre": "Bosque Petalia",
			"hierba": [
				{
					"numero": 263,
					"nivel": "5-6",
					"porcentaje":30
				},
				{
					"numero": 265,
					"nivel": "5-6",
					"porcentaje":25
				},
				{
					"numero": 285,
					"nivel": "5-6",
					"porcentaje":15
				},
				{
					"numero": 266,
					"nivel": "5",
					"porcentaje":10
				},
				{
					"numero": 268,
					"nivel": "5",
					"porcentaje":10
				},
				{
					"numero": 276,
					"nivel": "5-6",
					"porcentaje":5
				},
				{
					"numero": 287,
					"nivel": "5-6",
					"porcentaje":5
				}
			]
		},
		{
			"nombre": "Ciudad Férrica",
			"lema": "La ciudad tecnológica que respeta el medio ambiente.",
			"intercambio": [
				{
					"numero": 296,
					"necesita": 287
				}
			],
			"fosil":[
				{
					"numero": 345,
					"nivel": 20,
					"observaciones": "Fósil raíz"
				},
				{
					"numero": 347,
					"nivel": 20,
					"observaciones": "Fósil garra"
				}
			]
		},
		{
			"nombre": "Ruta 116",
			"hierba": [
				{
					"numero": 293,
					"nivel": "6-7",
					"porcentaje":30
				},
				{
					"numero": 263,
					"nivel": "6-8",
					"porcentaje": 28
				},
				{
					"numero": 276,
					"nivel": "6-8",
					"porcentaje":20
				},
				{
					"numero": 290,
					"nivel": "6-7",
					"porcentaje":20
				},
				{
					"numero": 300,
					"nivel": "7-8",
					"porcentaje":2
				}
			],
			"masiva":[
				{
					"pokedex": "*",
					"numero": 300,
					"nivel": 15,
					"porcentaje":50
				}
			]
		},
		{
			"nombre": "Túnel Fervergal",
			"caminando": [
				{
					"numero": 293,
					"nivel": "5-8",
					"porcentaje": 100
				}
			]
		},
		{
			"nombre": "Pueblo Azuliza",
			"lema": "Una isla en medio del mar.",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel":"25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Cueva Granito",
			"plantas":[
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 296,
							"nivel": "6-10",
							"porcentaje": 50
						},
						{
							"numero": 41,
							"nivel": "7-8",
							"porcentaje": 30
						},
						{
							"numero": 63,
							"nivel": 8,
							"porcentaje": 10
						},
						{
							"numero": 74,
							"nivel": "6-9",
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando": [
						{
							"numero": 304,
							"nivel": "9-11",
							"porcentaje": 40
						},
						{
							"numero": 296,
							"nivel": "10-11",
							"porcentaje": 10
						},
						{
							"numero": 41,
							"nivel": "9-10",
							"porcentaje": 30
						},
						{
							"numero": 63,
							"nivel": 9,
							"porcentaje": 10
						},
						{
							"numero": 302,
							"nivel": "9-11",
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [
						{
							"numero": 304,
							"nivel": "10-12",
							"porcentaje": 40
						},
						{
							"numero": 41,
							"nivel": "10-11",
							"porcentaje": 30
						},
						{
							"numero": 63,
							"nivel": 10,
							"porcentaje": 10
						},
						{
							"numero": 302,
							"nivel": "10-12",
							"porcentaje": 20
						}
					],
					"roca": [
						{
							"numero": 74,
							"nivel": "5-20",
							"porcentaje": 70
						},
						{
							"numero": 299,
							"nivel": "10-20",
							"porcentaje": 30
						}
					]
				}
			]
		},
		{
			"nombre": "Ciudad Portual",
			"lema": "El puerto donde se cruzan los caminos de entrenadores y Pokémon.",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel":"25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 109",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel":"25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 110",
			"hierba": [
				{
					"numero": 309,
					"nivel": "12-13",
					"porcentaje": 30
				},
				{
					"numero": 263,
					"nivel": 12,
					"porcentaje": 20
				},
				{
					"numero": 316,
					"nivel": "12-13",
					"porcentaje": 15
				},
				{
					"numero": 311,
					"nivel": 13,
					"porcentaje": 15
				},
				{
					"numero": 43,
					"nivel": 13,
					"porcentaje": 10
				},
				{
					"numero": 278,
					"nivel": 12,
					"porcentaje": 8
				},
				{
					"numero": 312,
					"nivel": "12-13",
					"porcentaje": 2
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel":"25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 117",
			"hierba":[
				{
					"numero": 263,
					"nivel": "13-14",
					"porcentaje": 30
				},
				{
					"numero": 315,
					"nivel": "13-14",
					"porcentaje": 30
				},
				{
					"numero": 313,
					"nivel": "13-14",
					"porcentaje": 18
				},
				{
					"numero": 43,
					"nivel": 13,
					"porcentaje": 10
				},
				{
					"numero": 183,
					"nivel": 13,
					"porcentaje": 10
				},
				{
					"numero": 314,
					"nivel": 13,
					"porcentaje":1
				},
				{
					"numero": 283,
					"nivel": 13,
					"porcentaje":1
				}
			],
			"surf": [
				{
					"numero": 183,
					"nivel": "5-35",
					"porcentaje": 99
				},
				{
					"numero": 283,
					"nivel": "20-30",
					"porcentaje": 1
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 341,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			],
			"masiva":[
				{
					"pokedex": "*",
					"numero": 283,
					"nivel":15,
					"porcentaje": 50
				}
			]
		},
		{
			"nombre":"Ruta 111",
			"plantas": [
				{
					"nombre": "Zonas sur y norte",
					"roca": [
							{
								"numero": 74,
								"nivel": "5-20",
								"porcentaje": 100
							}
						],
					"surf": [
						{
							"numero": 183,
							"nivel": "5-35",
							"porcentaje": 99
						},
						{
							"numero": 283,
							"nivel": "20-30",
							"porcentaje": 1
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
						},
						{
							"numero": 339,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
						}
					]
				},
				{
					"nombre": "Desierto",
					"caminando": [
						{
							"numero": 27,
							"nivel": "19-21",
							"porcentaje":35
						},
						{
							"numero": 328,
							"nivel": "19-21",
							"porcentaje":35
						},
						{
							"numero": 331,
							"nivel": "19-21",
							"porcentaje":20
						},
						{
							"numero": 343,
							"nivel": "20-22",
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Ruinas del Desierto",
					"caminando": [
						{
							"numero": 377,
							"nivel": 40
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 112",
			"hierba": [
				{
					"numero": 66,
					"nivel": "14-16",
					"porcentaje": 25
				},
				{
					"numero": 322,
					"nivel": "14-16",
					"porcentaje":75
				}
			]
		},
		{
			"nombre": "Senda Ígnea",
			"caminando": [
				{
					"numero": 322,
					"nivel": "15-16",
					"porcentaje":30
				},
				{
					"numero": 109,
					"nivel": 14,
					"porcentaje": 2
				},
				{
					"numero": 324,
					"nivel": "14-16",
					"porcentaje": 18
				},
				{
					"numero": 66,
					"nivel": "15-16",
					"porcentaje":15
				},
				{
					"numero": 218,
					"nivel": 15,
					"porcentaje":10
				},
				{
					"numero": 88,
					"nivel": "15-16",
					"porcentaje":25
				}
			]
		},
		{
			"nombre":"Ruta 113",
			"hierba": [
				{
					"numero": 327,
					"nivel": "14-16",
					"porcentaje": 70
				},
				{
					"numero": 27,
					"nivel": "14-16",
					"porcentaje": 25
				},
				{
					"numero":227 ,
					"nivel": 16,
					"porcentaje": 5
				}
			]
		},
		{
			"nombre": "Ruta 114",
			"hierba": [
				{
					"numero": 333,
					"nivel": "15-17",
					"porcentaje": 40
				},
				{
					"numero": 270,
					"nivel": "15-16",
					"porcentaje": 30
				},
				{
					"numero": 271,
					"nivel": "16-18",
					"porcentaje": 10
				},
				{
					"numero": 336,
					"nivel": "15-17",
					"porcentaje": 19
				},
				{
					"numero": 283,
					"nivel": 15,
					"porcentaje": 1
				}
			],
			"roca": [
					{
						"numero": 74,
						"nivel": "5-20",
						"porcentaje": 100
					}
				],
				"surf": [
					{
						"numero": 183,
						"nivel": "5-35",
						"porcentaje": 99
					},
					{
						"numero": 283,
						"nivel": "20-30",
						"porcentaje": 1
					}
				],
				"pesca":[
					{
						 "numero": 129,
						 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
					},
					{
						"numero": 118,
						"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
					},
					{
						"numero": 339,
						"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
					}
				],
				"masiva":[
					{
						"pokedex": "*",
						"numero": 283,
						"nivel":15 ,
						"porcentaje": 50
					}
				]
		},
		{
			"nombre": "Cascada Meteoro",
			"plantas": [
				{
					"nombre":"Entrada",
					"caminando":[
						{
							"numero": 41,
							"nivel": "14-20",
							"porcentaje": 80
						},
						{
							"numero": 337,
							"nivel": "14-18",
							"porcentaje": 20
						}
					],
					"surf": [
						{
							"numero": 41,
							"nivel": "5-35",
							"porcentaje": 90
						},
						{
							"numero": 337,
							"nivel": "5-35",
							"porcentaje": 10
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
						},
						{
							"numero": 339,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
						}
					]
				},
				{
					"nombre":"Interior",
					"caminando":[
						{
							"numero": 42,
							"nivel": "33-40",
							"porcentaje": 65
						},
						{
							"numero": 337,
							"nivel": "33-39",
							"porcentaje": 35
						}
					],
					"surf": [
						{
							"numero": 42,
							"nivel": "30-35",
							"porcentaje": 90
						},
						{
							"numero": 337,
							"nivel": "5-35",
							"porcentaje": 10
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
						},
						{
							"numero": 339,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-35" ,"porcentaje": 80}}
						},
						{
							"numero": 340,
							"probabilidad": {"tipo":"cania", "super":{"nivel":"30-45" ,"porcentaje": 20}}
						}
					]
				},
				{
					"nombre": "Cuarto trasero",
					"caminando":[
						{
							"numero": 42,
							"nivel": "33-40",
							"porcentaje": 50
						},
						{
							"numero": 337,
							"nivel": "35-39",
							"porcentaje": 25
						},
						{
							"numero": 371,
							"nivel": "25-35",
							"porcentaje": 25
						}
					],
					"surf": [
						{
							"numero": 42,
							"nivel": "30-35",
							"porcentaje": 90
						},
						{
							"numero": 337,
							"nivel": "5-35",
							"porcentaje": 10
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
						},
						{
							"numero": 339,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-35" ,"porcentaje": 80}}
						},
						{
							"numero": 340,
							"probabilidad": {"tipo":"cania", "super":{"nivel":"30-45" ,"porcentaje": 20}}
						}
					]
				}
			]
		},
		{
			"nombre": "Desfiladero",
			"caminando":[
				{
					"numero": 322,
					"nivel": "20-22",
					"porcentaje": 55
				},
				{
					"numero": 66,
					"nivel": "20-22",
					"porcentaje": 25
				},
				{
					"numero": 325,
					"nivel": "20-22",
					"porcentaje": 20
				}
			]
		},
		{
			"nombre": "Pueblo Lavacalda",
			"lema": "¡No hay nada más relajante!",
			"huevo": [
				{
					"numero": 360,
					"nivel": 5
				}
			]
		},
		{
			"nombre": "Ruta 105",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-35" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Cueva Insular",
			"caminando":[
				{
					"numero": 378,
					"nivel": 40
				}
			]
		},
		{
			"nombre": "Ruta 106",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-35" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 107",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-35" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 108",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-35" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Nao Abandonada",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 99
				},
				{
					"numero": 73,
					"nivel": "30-35",
					"porcentaje": 1
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 },"buena":{"nivel":"10-30" ,"porcentaje":40}, "super":{"nivel":"25-35" ,"porcentaje": 80}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"20-35" ,"porcentaje": 20}}
				}
			]
		},
		{
			"nombre": "Malvalanova",
			"plantas": [
				{
					"nombre": "Entrada",
					"caminando": [
						{
							"numero": 81,
							"nivel": "22-26",
							"porcentaje": 50
						},
						{
							"numero": 100,
							"nivel": "22-26",
							"porcentaje": 50
						}
					]
				},
				{
					"nombre": "Sótano",
					"caminando": [
						{
							"numero": 81,
							"nivel": "22-26",
							"porcentaje": 49
						},
						{
							"numero": 100,
							"nivel": "22-26",
							"porcentaje": 49
						},
						{
							"numero": 82,
							"nivel": 26,
							"porcentaje": 1
						},
						{
							"numero": 101,
							"nivel": 26,
							"porcentaje": 1
						}
					]
				}
			]
		},
		{
			"nombre":"Ruta 115",
			"hierba": [
				{
					"numero": 276,
					"nivel": "23-25",
					"porcentaje": 40
				},
				{
					"numero": 333,
					"nivel": "23-25",
					"porcentaje":30
				},
				{
					"numero": 39,
					"nivel": "24-25",
					"porcentaje":10
				},
				{
					"numero": 277,
					"nivel": 25,
					"porcentaje":10
				},
				{
					"numero": 278,
					"nivel": "24-26",
					"porcentaje":10
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"25-35" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 118",
			"hierba": [
				{
					"numero": 263,
					"nivel": "24-26",
					"porcentaje": 30
				},
				{
					"numero": 309,
					"nivel": "24-26",
					"porcentaje": 30
				},
				{
					"numero": 278,
					"nivel": "25-27",
					"porcentaje": 19
				},
				{
					"numero": 310,
					"nivel": 26,
					"porcentaje": 10
				},
				{
					"numero": 264,
					"nivel": 26,
					"porcentaje": 10
				},
				{
					"numero": 352,
					"nivel": 25,
					"porcentaje": 1
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 318,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			]
		},
		{
			"nombre": "Ruta 119",
			"hierba": [
				{
					"numero": 43,
					"nivel": "24-27",
					"porcentaje": 30
				},
				{
					"numero": 263,
					"nivel": "25-27",
					"porcentaje": 30
				},
				{
					"numero": 264,
					"nivel": "25-27",
					"porcentaje": 30
				},
				{
					"numero": 357,
					"nivel": "25-27",
					"porcentaje": 9
				},
				{
					"numero": 352,
					"nivel": 25,
					"porcentaje": 1
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 318,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			],
			"especial": [
				{
					"numero": 349,
					"nivel": "20-25",
					"porcentaje": 60,
					"observaciones": "En seis cuadrados que van cambiando"
				},
				{
					"numero": 352,
					"nivel": 30,
					"observaciones": "Detector Devon"
				}
			]
		},
		{
			"nombre": "Instituto meteorológico",
			"regalo": [
				{
					"numero": 351,
					"nivel": 25
				}
			]
		},
		{
			"nombre": "Ciudad Arborada",
			"lema": "La ciudad arbórea que juega con la naturaleza.",
			"intercambio": [
				{
					"numero": 311,
					"necesita": 313
				}
			],
			"especial": [
				{
					"numero": 352,
					"nivel": 30,
					"observaciones": "Detector Devon"
				}
			]
		},
		{
			"nombre": "Ruta 120",
			"hierba": [
				{
					"numero": 264,
					"nivel": "25-27",
					"porcentaje": 30
				},
				{
					"numero": 43,
					"nivel": "25-27",
					"porcentaje": 25
				},
				{
					"numero": 263,
					"nivel": 25,
					"porcentaje": 20
				},
				{
					"numero": 183,
					"nivel": "25-27",
					"porcentaje": 15
				},
				{
					"numero": 359,
					"nivel": "25-27",
					"porcentaje": 8
				},
				{
					"numero": 283,
					"nivel": 25,
					"porcentaje": 1
				},
				{
					"numero": 352,
					"nivel": 25,
					"porcentaje": 1
				}
			],
			"surf": [
				{
					"numero": 183,
					"nivel": "5-35",
					"porcentaje": 99
				},
				{
					"numero": 283,
					"nivel": "20-30",
					"porcentaje": 1
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 339,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			],
			"masiva": [
				{
					"pokedex": "*",
					"numero": 283,
					"nivel": 28,
					"porcentaje": 50
				}
			],
			"especial": [
				{
					"numero": 352,
					"nivel": 30,
					"observaciones": "Detector Devon"
				}
			]
		},
		{
			"nombre": "Tumba antigua",
			"caminando":[
				{
					"numero": 379,
					"nivel": 40
				}
			]
		},
		{
			"nombre": "Ruta 121",
			"hierba": [
				{
					"numero": 353,
					"nivel": "26-28",
					"porcentaje": 30
				},
				{
					"numero": 263,
					"nivel": 26,
					"porcentaje": 20
				},
				{
					"numero": 264,
					"nivel": "26-28",
					"porcentaje": 20
				},
				{
					"numero": 43,
					"nivel": "26-28",
					"porcentaje": 15
				},
				{
					"numero": 278,
					"nivel": "26-28",
					"porcentaje": 9
				},
				{
					"numero": 44,
					"nivel": 28,
					"porcentaje": 5
				},
				{
					"numero": 352,
					"nivel": 25,
					"porcentaje": 1
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 } ,"super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Zona Safari",
			"plantas": [
				{
					"nombre": "Sureste (entrada)",
					"hierba": [
						{
							"numero": 43,
							"nivel": "25-27",
							"porcentaje": 40
						},
						{
							"numero": 203,
							"nivel": "25-27",
							"porcentaje": 20
						},
						{
							"numero": 84,
							"nivel": 25,
							"porcentaje": 10
						},
						{
							"numero": 177,
							"nivel": 25,
							"porcentaje": 10
						},
						{
							"numero": 202,
							"nivel": "27-29",
							"porcentaje": 10
						},
						{
							"numero": 25,
							"nivel": "25-27",
							"porcentaje": 5
						},
						{
							"numero": 44,
							"nivel": 25,
							"porcentaje": 5
						}
					]
				},
				{
					"nombre": "Suroeste",
					"hierba": [
						{
							"numero": 43,
							"nivel": "25-27",
							"porcentaje": 40
						},
						{
							"numero": 203,
							"nivel": "25-27",
							"porcentaje": 20
						},
						{
							"numero": 84,
							"nivel": 25,
							"porcentaje": 10
						},
						{
							"numero": 177,
							"nivel": 25,
							"porcentaje": 10
						},
						{
							"numero": 202,
							"nivel": "27-29",
							"porcentaje": 10
						},
						{
							"numero": 25,
							"nivel": "25-27",
							"porcentaje": 5
						},
						{
							"numero": 44,
							"nivel": 25,
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 54,
							"nivel": "20-35",
							"porcentaje": 100
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":40}, "super":{"nivel":"25-35" ,"porcentaje": 80} }
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel":"25-40" ,"porcentaje": 20}}
						}
					]
				},
				{
					"nombre": "Noroeste",
					"hierba": [
						{
							"numero": 43,
							"nivel": "27-29",
							"porcentaje": 30
						},
						{
							"numero": 111,
							"nivel": "27-29",
							"porcentaje": 30
						},
						{
							"numero": 44,
							"nivel": "29-31",
							"porcentaje": 15
						},
						{
							"numero": 84,
							"nivel": "27-29",
							"porcentaje": 15
						},
						{
							"numero": 85,
							"nivel": "29-31",
							"porcentaje": 5
						},
						{
							"numero": 127,
							"nivel": "27-29",
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 54,
							"nivel": "20-35",
							"porcentaje": 95
						},
						{
							"numero": 55,
							"nivel": "25-40",
							"porcentaje": 5
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":40}, "super":{"nivel":"25-35" ,"porcentaje": 80} }
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel":"25-40" ,"porcentaje": 20}}
						}
					]
				},
				{
					"nombre": "Noreste",
					"hierba": [
						{
							"numero": 43,
							"nivel": "27-29",
							"porcentaje": 30
						},
						{
							"numero": 231,
							"nivel": "27-29",
							"porcentaje": 30
						},
						{
							"numero": 44,
							"nivel": "29-31",
							"porcentaje": 15
						},
						{
							"numero": 177,
							"nivel": "27-29",
							"porcentaje": 15
						},
						{
							"numero": 178,
							"nivel": "29-31",
							"porcentaje": 5
						},
						{
							"numero": 214,
							"nivel": "27-29",
							"porcentaje": 5
						}
					],
					"roca":[
						{
							"numero": 74,
							"nivel": "5-30",
							"porcentaje": 100
						}
					]
				}
			]
		},
		{
			"nombre": "Ciudad Calagua",
			"lema": "Allí donde acaba la tierra y empieza el mar.",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":40} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 85}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"25-30" ,"porcentaje": 15}}
				}
			]
		},
		{
			"nombre": "Ruta 122",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			]
		},
		{
			"nombre": "Monte Pírico",
			"plantas": [
				{
					"nombre": "Planta baja, Piso 1, Piso 2",
					"caminando": [
						{
							"numero": 353,
							"nivel": "22-29",
							"porcentaje": 100
						}
					]
				},
				{
					"nombre": "Pisos 3, 4 y 5",
					"caminando": [
						{
							"numero": 353,
							"nivel": "22-29",
							"porcentaje": 90
						},
						{
							"numero": 355,
							"nivel": "25-29",
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Ladera",
					"hierba": [
						{
							"numero": 353,
							"nivel": "27-29",
							"porcentaje": 40
						},
						{
						"numero": 307,
						"nivel": "27-29",
						"porcentaje": 30
						},
						{
							"numero": 37,
							"nivel": "25-29",
							"porcentaje": 20
						},
						{
						"numero": 278,
						"nivel": "26-28",
						"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Cima",
					"hierba": [
						{
							"numero": 353,
							"nivel": "24-30",
							"porcentaje": 85
						},
						{
						"numero": 355,
						"nivel": "26-30",
						"porcentaje": 13
						},
						{
							"numero": 358,
							"nivel": "28",
							"porcentaje": 2
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 123",
			"hierba": [
				{
					"numero": 353,
					"nivel": "26-28",
					"porcentaje": 30
				},
				{
					"numero": 263,
					"nivel": 26,
					"porcentaje": 20
				},
				{
					"numero": 264,
					"nivel": "26-28",
					"porcentaje": 20
				},
				{
					"numero": 43,
					"nivel": "26-28",
					"porcentaje": 15
				},
				{
					"numero": 278,
					"nivel": "26-28",
					"porcentaje": 9
				},
				{
					"numero": 44,
					"nivel": 28,
					"porcentaje": 5
				},
				{
					"numero": 352,
					"nivel": 25,
					"porcentaje": 1
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Guarida Aqua",
			"especial": [
				{
					"numero": 101,
					"nivel": 30,
					"observaciones": "Como objetos"
				}
			]
		},
		{
			"nombre": "Ruta 124",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			],
			"buceo": [
				{
					"numero": 366,
					"nivel": "20-35",
					"porcentaje":65
				},
				{
					"numero": 170,
					"nivel": "20-30",
					"porcentaje": 30
				},
				{
					"numero": 369,
					"nivel": "30-35",
					"porcentaje": 5
				}
			]
		},
		{
			"nombre": "Ciudad Algaria",
			"lema": "Nuestra divisa: ¡quiere a los Pokémon!",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			],
			"regalo":[
				{
					"numero": 374,
					"nivel": 5,
					"observaciones": "Máximo Peñas al pasar la Liga"
				}
			]
		},
		{
			"nombre": "Ruta 125",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			]
		},
		{
			"nombre": "Cueva Cardumen",
			"plantas":[
				{
					"nombre": "Salas principales",
					"caminando": [
						{
							"numero": 363,
							"nivel": "26-32",
							"porcentaje": 50
						},
						{
							"numero": 41,
							"nivel": "26-32",
							"porcentaje": 45
						},
						{
							"numero": 42,
							"nivel": 32,
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 72,
							"nivel": "5-35",
							"porcentaje": 60
						},
						{
							"numero": 41,
							"nivel": "5-35",
							"porcentaje": 30
						},
						{
							"numero": 363,
							"nivel": "25-35",
							"porcentaje": 10
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 72,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
						},
						{
							"numero": 320,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"20-45" ,"porcentaje": 100}}
						}
					]
				},
				{
					"nombre": "Sala Helada",
					"caminando":[
						{
							"numero": 363,
							"nivel": "26-32",
							"porcentaje": 45
						},
						{
							"numero": 41,
							"nivel": "26-30",
							"porcentaje": 40
						},
						{
							"numero": 42,
							"nivel": "30-32",
							"porcentaje": 5
						},
						{
							"numero": 361,
							"nivel": "26-30",
							"porcentaje": 10
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 127",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			]
		},
		{
			"nombre": "Ruta 128",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 }}
				},
				{
					"numero": 370,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 },"super":{"nivel":"30-35" ,"porcentaje": 40}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"30-45" ,"porcentaje": 45}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje":15}}
				}
			]
		},
		{
			"nombre": "Caverna Abisal",
			"caminando": [
				{
					"numero": 41,
					"nivel": "28-35",
					"porcentaje": 90
				},
				{
					"numero": 42,
					"nivel": "33-36",
					"porcentaje": 10
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 41,
					"nivel": "5-35",
					"porcentaje": 35
				},
				{
					"numero": 42,
					"nivel": "30-35",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"20-45" ,"porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 126",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 } ,"buena":{"nivel":"10-30" ,"porcentaje":20} }
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-45" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			],
			"buceo":[
				{
					"numero": 366,
					"nivel": "20-35",
					"porcentaje":65
				},
				{
					"numero": 170,
					"nivel": "20-30",
					"porcentaje":30
				},
				{
					"numero": 369,
					"nivel": "30-35",
					"porcentaje":5
				}
			]
		},
		{
			"nombre": "Arrecípolis",
			"surf": [
				{
					"numero": 129,
					"nivel": "5-35",
					"porcentaje": 100
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje":70} ,"buena":{"nivel":"10-30" ,"porcentaje":100},"super":{"nivel":"30-35" ,"porcentaje": 80}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30}}
				},
				{
					"numero": 130,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"5-45" ,"porcentaje":20}}
				}
			]
		},
		{
			"nombre": "Cueva Ancestral",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 41,
							"nivel":"28-35",
							"porcentaje": 90
						},
						{
							"numero": 42,
							"nivel": "33-36",
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Sótanos 1 al 5",
					"caminando": [
						{
							"numero": 41,
							"nivel":"30-34",
							"porcentaje": 60
						},
						{
							"numero": 42,
							"nivel": "33-36",
							"porcentaje": 10
						},
						{
							"numero": 302,
							"nivel": "30-34",
							"porcentaje": 30
						}
					]
				},
				{
					"nombre": "Sótano 6",
					"caminando":[
						{
							"numero": 382,
							"nivel": 45
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 129",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 4
				},
				{
					"numero": 320,
					"nivel": "25-30",
					"porcentaje": 1
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			]
		},
		{
			"nombre": "Ruta 130",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			]
		},
		{
			"nombre": "Isla Espejismo",
			"hierba":[
				{
					"numero": 360,
					"nivel": "5-50",
					"porcentaje":100
				}
			]
		},
		{
			"nombre": "Ruta 131",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			]
		},
		{
			"nombre": "Pilar Celeste",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando":[
						{
							"numero": 42,
							"nivel": "48-50",
							"porcentaje": 30
						},
						{
							"numero": 302,
							"nivel": "48-50",
							"porcentaje": 30
						},
						{
							"numero": 344,
							"nivel": "47-50",
							"porcentaje": 25
						},
						{
							"numero": 354,
							"nivel": "48-50",
							"porcentaje": 15
						}
					]
				},
				{
					"nombre": "Pisos 1 y 2",
					"caminando":[
						{
							"numero": 42,
							"nivel": "51-53",
							"porcentaje": 30
						},
						{
							"numero": 302,
							"nivel": "51-53",
							"porcentaje": 30
						},
						{
							"numero": 344,
							"nivel": "50-53",
							"porcentaje": 25
						},
						{
							"numero": 354,
							"nivel": "51-53",
							"porcentaje": 15
						}
					]
				},
				{
					"nombre": "Pisos 3 y 4",
					"caminando":[
						{
							"numero": 42,
							"nivel": "54-56",
							"porcentaje": 30
						},
						{
							"numero": 302,
							"nivel": "54-56",
							"porcentaje": 30
						},
						{
							"numero": 344,
							"nivel": "54-56",
							"porcentaje": 19
						},
						{
							"numero": 354,
							"nivel": "54-56",
							"porcentaje": 15
						},
						{
							"numero": 334,
							"nivel": "54-60",
							"porcentaje": 6
						}
					]
				},
				{
					"nombre": "Azotea",
					"caminando":[
						{
							"numero": 384,
							"nivel": 70
						}
					]
				}
			]
		},
		{
			"nombre": "Pueblo Oromar",
			"lema": "Donde el radiante sol ilumina las aguas cada día.",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 60}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				}
			],
			"intercambio":[
				{
					"numero": 222,
					"necesita": 182
				}
			]
		},
		{
			"nombre": "Ruta 132",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 45}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				},
				{
					"numero": 116,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"25-30" ,"porcentaje": 15}}
				}
			]
		},
		{
			"nombre": "Ruta 133",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 45}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				},
				{
					"numero": 116,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"25-30" ,"porcentaje": 15}}
				}
			]
		},
		{
			"nombre": "Ruta 134",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 45}}
				},
				{
					"numero": 319,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje": 40}}
				},
				{
					"numero": 116,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"25-30" ,"porcentaje": 15}}
				}
			]
		},
		{
			"nombre": "Ciudad Colosalia",
			"lema": "El paraíso de las flores, el mar y los Pokémon.",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-35",
					"porcentaje": 60
				},
				{
					"numero": 278,
					"nivel": "10-30",
					"porcentaje": 35
				},
				{
					"numero": 279,
					"nivel": "25-30",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					 "numero": 129,
					 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70} ,"buena":{"nivel":"10-30" ,"porcentaje":60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30 }}
				},
				{
					"numero": 370,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20 },"super":{"nivel":"30-35" ,"porcentaje": 40}}
				},
				{
					"numero": 320,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"30-45" ,"porcentaje": 45}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "super":{"nivel":"30-35" ,"porcentaje":15}}
				}
			]
		},
		{
			"nombre": "Calle Victoria",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando":[
						{
							"numero": 41,
							"nivel": 36,
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": "38-40",
							"porcentaje": 25
						},
						{
							"numero": 293,
							"nivel": 36,
							"porcentaje": 5
						},
						{
							"numero": 294,
							"nivel": 40,
							"porcentaje":10
						},
						{
							"numero": 296,
							"nivel": 36,
							"porcentaje": 10
						},
						{
							"numero": 297,
							"nivel": "38-40",
							"porcentaje": 25
						},
						{
							"numero": 304,
							"nivel": 36,
							"porcentaje": 5
						},
						{
							"numero": 305,
							"nivel": 40,
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando":[
						{
							"numero": 42,
							"nivel": "38-42",
							"porcentaje": 35
						},
						{
							"numero": 307,
							"nivel": 38,
							"porcentaje": 5
						},
						{
							"numero": 308,
							"nivel": 40,
							"porcentaje": 10
						},
						{
							"numero": 305,
							"nivel": "40-42",
							"porcentaje": 15
						},
						{
							"numero": 297,
							"nivel": "38-42",
							"porcentaje": 35
						}
					],
					"roca":[
						{
							"numero": 74,
							"nivel": "30-40",
							"porcentaje": 30
						},
						{
							"numero": 75,
							"nivel": "30-40",
							"porcentaje":70
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando":[
						{
							"numero": 42,
							"nivel": "40-44",
							"porcentaje": 35
						},
						{
							"numero": 302,
							"nivel": "40-44",
							"porcentaje": 35
						},
						{
							"numero": 305,
							"nivel": "40-44",
							"porcentaje": 15
						},
						{
							"numero": 308,
							"nivel": "40-44",
							"porcentaje": 15
						}
					],
					"surf": [
						{
							"numero": 42,
							"nivel": "25-40",
							"porcentaje": 100
						}
					],
					"pesca":[
						{
							 "numero": 129,
							 "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-10","porcentaje": 70},"buena":{"nivel":"10-30" ,"porcentaje":60}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel":"5-10" ,"porcentaje":30},"buena":{"nivel":"10-30" ,"porcentaje":20}}
						},
						{
							"numero": 339,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":"10-30" ,"porcentaje":20}, "super":{"nivel":"25-35" ,"porcentaje": 80}}
						},
						{
							"numero": 340,
							"probabilidad": {"tipo":"cania", "super":{"nivel":"30-45" ,"porcentaje": 20}}
						}
					]
				}
			]
		},
		{
			"nombre": "Villa Raíz",
			"lema": "Un pueblo poco colorido.",
			"regalo": [
				{
					"numero": 152,
					"nivel": 5,
					"observaciones": "Al completar pokédex de Hoenn"
				},
				{
					"numero": 155,
					"nivel": 5,
					"observaciones": "Al completar pokédex de Hoenn"
				},
				{
					"numero": 158,
					"nivel": 5,
					"observaciones": "Al completar pokédex de Hoenn"
				}
			]
		},
		{
			"nombre": "Hoenn",
			"errante": [
				{
					"numero": 380,
					"nivel": 40
				}
			]
		},
		{
			"nombre": "Isla del Sur",
			"evento": [
				{
					"numero": 381,
					"nivel": 50,
					"observaciones": "Ticket Eón"
				}
			]
		},
		{
			"nombre": "Evolución",
			"otros": [
				{
					"numero": 27
				},
				{
					"numero": 37
				},
				{
					"numero": 41
				},
				{
					"numero": 43
				},
				{
					"numero": 63
				},
				{
					"numero": 66
				},
				{
					"numero": 74
				},
				{
					"numero": 88
				},
				{
					"numero": 109
				},
				{
					"numero": 111
				},
				{
					"numero": 116
				},
				{
					"numero": 120
				},
				{
					"numero": 152
				},
				{
					"numero": 155
				},
				{
					"numero": 158
				},
				{
					"numero": 170
				},
				{
					"numero": 218
				},
				{
					"numero": 231
				},
				{
					"numero": 252
				},
				{
					"numero": 255
				},
				{
					"numero": 258
				},
				{
					"numero": 261
				},
				{
					"numero": 265
				},
				{
					"numero": 270
				},
				{
					"numero": 280
				},
				{
					"numero": 283
				},
				{
					"numero": 285
				},
				{
					"numero": 287
				},
				{
					"numero": 290
				},
				{
					"numero": 293
				},
				{
					"numero": 300
				},
				{
					"numero": 304
				},
				{
					"numero": 316
				},
				{
					"numero": 320
				},
				{
					"numero": 322
				},
				{
					"numero": 325
				},
				{
					"numero": 328
				},
				{
					"numero": 331
				},
				{
					"numero": 341
				},
				{
					"numero": 345
				},
				{
					"numero": 347
				},
				{
					"numero": 349
				},
				{
					"numero": 355
				},
				{
					"numero": 361
				},
				{
					"numero": 363
				},
				{
					"numero": 366
				},
				{
					"numero": 371
				},
				{
					"numero": 374
				}
			]
		},
		{
			"nombre": "Crianza",
			"otros": [
				{
					"numero": 172
				},
				{
					"numero": 174
				},
				{
					"numero": 298
				}
			]
		},
		{
			"nombre": "Intercambiar de Rubí",
			"otros":[
				{
					"numero": 273
				},
				{
					"numero": 303
				},
				{
					"numero": 335
				},
				{
					"numero": 338
				},
				{
					"numero": 383
				}
			]
		},
		{
			"nombre": "Intercambiar de otros juegos",
			"otros":[
				{
					"numero": 1
				},
				{
					"numero": 4
				},
				{
					"numero": 7
				},
				{
					"numero": 10
				},
				{
					"numero": 13
				},
				{
					"numero": 16
				},
				{
					"numero": 19
				},
				{
					"numero": 21
				},
				{
					"numero": 23
				},
				{
					"numero": 29
				},
				{
					"numero": 32
				},
				{
					"numero": 173
				},
				{
					"numero": 46
				},
				{
					"numero": 48
				},
				{
					"numero": 50
				},
				{
					"numero": 52
				},
				{
					"numero": 56
				},
				{
					"numero": 58
				},
				{
					"numero": 60
				},
				{
					"numero": 69
				},
				{
					"numero": 77
				},
				{
					"numero": 79
				},
				{
					"numero": 83
				},
				{
					"numero": 86
				},
				{
					"numero": 90
				},
				{
					"numero": 92
				},
				{
					"numero": 95
				},
				{
					"numero": 96
				},
				{
					"numero": 98
				},
				{
					"numero": 102
				},
				{
					"numero": 104
				},
				{
					"numero": 108
				},
				{
					"numero": 113
				},
				{
					"numero": 114
				},
				{
					"numero": 115
				},
				{
					"numero": 122
				},
				{
					"numero": 123
				},
				{
					"numero": 128
				},
				{
					"numero": 131
				},
				{
					"numero": 132
				},
				{
					"numero": 133
				},
				{
					"numero": 137
				},
				{
					"numero": 138
				},
				{
					"numero": 140
				},
				{
					"numero": 142
				},
				{
					"numero": 143
				},
				{
					"numero": 144
				},
				{
					"numero": 145
				},
				{
					"numero": 146
				},
				{
					"numero": 147
				},
				{
					"numero": 150
				},
				{
					"numero": 151
				},
				{
					"numero": 161
				},
				{
					"numero": 163
				},
				{
					"numero": 165
				},
				{
					"numero": 167
				},
				{
					"numero": 175
				},
				{
					"numero": 179
				},
				{
					"numero": 185
				},
				{
					"numero": 187
				},
				{
					"numero": 190
				},
				{
					"numero": 191
				},
				{
					"numero": 193
				},
				{
					"numero": 194
				},
				{
					"numero": 198
				},
				{
					"numero": 200
				},
				{
					"numero": 201,
					"variedad": 0
				},
				{
					"numero": 201,
					"variedad": 1
				},
				{
					"numero": 201,
					"variedad": 2
				},
				{
					"numero": 201,
					"variedad": 3
				},
				{
					"numero": 201,
					"variedad": 4
				},
				{
					"numero": 201,
					"variedad": 5
				},
				{
					"numero": 201,
					"variedad": 6
				},
				{
					"numero": 201,
					"variedad": 7
				},
				{
					"numero": 201,
					"variedad": 8
				},
				{
					"numero": 201,
					"variedad": 9
				},
				{
					"numero": 201,
					"variedad": 10
				},
				{
					"numero": 201,
					"variedad": 11
				},
				{
					"numero": 201,
					"variedad": 12
				},
				{
					"numero": 201,
					"variedad": 13
				},
				{
					"numero": 201,
					"variedad": 14
				},
				{
					"numero": 201,
					"variedad": 15
				},
				{
					"numero": 201,
					"variedad": 16
				},
				{
					"numero": 201,
					"variedad": 17
				},
				{
					"numero": 201,
					"variedad": 18
				},
				{
					"numero": 201,
					"variedad": 19
				},
				{
					"numero": 201,
					"variedad": 20
				},
				{
					"numero": 201,
					"variedad": 21
				},
				{
					"numero": 201,
					"variedad": 22
				},
				{
					"numero": 201,
					"variedad": 23
				},
				{
					"numero": 201,
					"variedad": 24
				},
				{
					"numero": 201,
					"variedad": 25
				},
				{
					"numero": 201,
					"variedad": 26
				},
				{
					"numero": 201,
					"variedad": 27
				},
				{
					"numero": 204
				},
				{
					"numero": 206
				},
				{
					"numero": 207
				},
				{
					"numero": 209
				},
				{
					"numero": 211
				},
				{
					"numero": 213
				},
				{
					"numero": 215
				},
				{
					"numero": 216
				},
				{
					"numero": 220
				},
				{
					"numero": 223
				},
				{
					"numero": 225
				},
				{
					"numero": 226
				},
				{
					"numero": 228
				},
				{
					"numero": 234
				},
				{
					"numero": 235
				},
				{
					"numero": 236
				},
				{
					"numero": 238
				},
				{
					"numero": 239
				},
				{
					"numero": 240
				},
				{
					"numero": 241
				},
				{
					"numero": 243
				},
				{
					"numero": 244
				},
				{
					"numero": 245
				},
				{
					"numero": 246
				},
				{
					"numero": 249
				},
				{
					"numero": 250
				},
				{
					"numero": 251
				},
				{
					"numero": 386
				}
			]
		},
		{
			"nombre": "Eventos",
			"otros": [
				{
					"numero": 385,
					"observaciones": "Finalizar Pokémon Channel"
				}
			]
		}
  ]
}
