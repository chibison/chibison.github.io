const amarillo = {
	"nombre":"amarillo",
	"titulo": "Amarillo",
	"gen":1,
	"filtros":[
		{
			"nombre": "Pesca",
			"imagen": "otros/gen1/pesca.png",
			"filtro": "pesca",
			"defecto": false
		},
		{
			"nombre": "Surf",
			"imagen": "otros/gen1/surf.png",
			"filtro": "surf",
			"defecto": false
		}
	],
	"lugares": [
		{
			"nombre": "Pueblo Paleta",
			"lema": "¡Un lienzo en blanco de tu viaje!",
			"regalo": [
				{
					"numero": 25,
					"nivel": 5
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"10-20", "porcentaje":40}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"5-10", "porcentaje":60}}
				}
			]
		},
		{
			"nombre": "Ruta 1",
			"hierba": [
				{
					"numero": 16,
					"nivel": "2-7",
					"porcentaje": 70
				},
				{
					"numero": 19,
					"nivel": "2-4",
					"porcentaje": 30
				},
			]
		},
		{
			"nombre":"Ciudad Verde",
			"lema": "El paraíso del eterno verdor.",
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":"5-15", "porcentaje":100}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				}
			]
		},
		{
			"nombre":"Ruta 22",
			"hierba":[
				{
					"numero": 19,
					"nivel": 3,
					"porcentaje": 10
				},
				{
					"numero": 21,
					"nivel": "2-6",
					"porcentaje": 10
				},
				{
					"numero": 29,
					"nivel": "2-4",
					"porcentaje": 25
				},
				{
					"numero": 32,
					"nivel": "2-4",
					"porcentaje": 35
				},
				{
					"numero": 56,
					"nivel": "3-5",
					"porcentaje": 20
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":"5-15", "porcentaje":90}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 61,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":10}}
				}
			]
		},
		{
			"nombre": "Ruta 2",
			"hierba": [
				{
					"numero": 19,
					"nivel":"3-4",
					"porcentaje": 40
				},
				{
					"numero": 16,
					"nivel":"3-7",
					"porcentaje": 30
				},
				{
					"numero": 29,
					"nivel":"4-6",
					"porcentaje": 15
				},
				{
					"numero": 32,
					"nivel":"4-6",
					"porcentaje": 15
				}
			],
			"intercambio": [
				{
					"numero": 122,
					"necesita": 35
				}
			]
		},
		{
			"nombre": "Bosque Verde",
			"hierba": [
				{
					"numero":16,
					"nivel":"4-8",
					"porcentaje":24
				},
				{
					"numero":17,
					"nivel":9,
					"porcentaje":1
				},
				{
					"numero":10,
					"nivel":"3-6",
					"porcentaje":55
				},
				{
					"numero": 11,
					"nivel": "4-6",
					"porcentaje":20
				}
			]
		},
		{
			"nombre":"Ruta 3",
			"hierba": [
				{
					"numero":19,
					"nivel":"10-12",
					"porcentaje":15
				},
				{
					"numero": 21,
					"nivel": "8-12",
					"porcentaje":55
				},
				{
					"numero":27,
					"nivel":"8-10",
					"porcentaje":15
				},
				{
					"numero":56,
					"nivel":9,
					"porcentaje":15
				}
			]
		},
		{
			"nombre":"Monte Moon",
			"plantas":[
				{
					"nombre":"Planta baja",
					"caminando":[
						{
							"numero": 41,
							"nivel": "6-11",
							"porcentaje": 75
						},
						{
							"numero": 74,
							"nivel": 10,
							"porcentaje": 20
						},
						{
							"numero": 27,
							"nivel": 12,
							"porcentaje": 4
						},
						{
							"numero": 35,
							"nivel": 11,
							"porcentaje": 1
						}
					]
				},
				{
					"nombre":"Sótano 1",
					"caminando":[
						{
							"numero": 41,
							"nivel": "8-11",
							"porcentaje": 65
						},
						{
							"numero": 74,
							"nivel": "10-11",
							"porcentaje": 20
						},
						{
							"numero": 46,
							"nivel": "9-11",
							"porcentaje": 10
						},
						{
							"numero": 35,
							"nivel": "10-12",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre":"Sótano 2",
					"caminando":[
						{
							"numero": 41,
							"nivel": "10-13",
							"porcentaje": 60
						},
						{
							"numero": 74,
							"nivel": 11,
							"porcentaje": 15
						},
						{
							"numero": 46,
							"nivel": 13,
							"porcentaje": 15
						},
						{
							"numero": 35,
							"nivel": "9-13",
							"porcentaje": 10
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 4",
			"hierba" :[
				{
					"numero": 19,
					"nivel": "10-12",
					"porcentaje": 15
				},
				{
					"numero": 21,
					"nivel": "8-12",
					"porcentaje": 55
				},
				{
					"numero": 27,
					"nivel": "8-10",
					"porcentaje": 15
				},
				{
					"numero": 56,
					"nivel": 9,
					"porcentaje": 15
				}
			],
			"especial": [
				{
					"numero": 129,
					"nivel": 5,
					"observaciones": "Comprar por 500P"
				}
			]
		},
		{
			"nombre": "Ciudad Celeste",
			"lema": "¡Una misteriosa aura azulada la rodea!",
			"pesca" : [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":"25-30", "porcentaje":70}}
						},
						{
							"numero":119,
							"probabilidad": {"tipo": "cania", "super":{"nivel":"30-40", "porcentaje":30}}
						}
			],
			"regalo": [
				{
					"numero": 1,
					"nivel": 10,
					"observaciones": "Según felicidad de Pikachu"
				}
			]
		},
		{
			"nombre": "Ruta 24",
			"hierba": [
				{
					"numero": 16,
					"nivel": "13-17",
					"porcentaje": 29
				},
				{
					"numero": 17,
					"nivel": 17,
					"porcentaje": 1
				},
				{
					"numero": 43,
					"nivel": "12-14",
					"porcentaje": 35
				},
				{
					"numero": 48,
					"nivel": "13-16",
					"porcentaje": 10
				},
				{
					"numero": 69,
					"nivel": "12-14",
					"porcentaje": 25
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":15, "porcentaje":50}, "super":{"nivel":"20-30", "porcentaje":90}}
				},

				{
					"numero": 119,
					"probabilidad": {"tipo": "cania", "super":{"nivel":30, "porcentaje":10}}
				}
			],
			"regalo":[
				{
					"numero": 4,
					"nivel": 10
				}
			]
		},
		{
			"nombre": "Ruta 25",
			"hierba": [
				{
					"numero": 16,
					"nivel": "13-17",
					"porcentaje": 29
				},
				{
					"numero": 17,
					"nivel": 17,
					"porcentaje": 1
				},
				{
					"numero": 43,
					"nivel": "12-14",
					"porcentaje": 35
				},
				{
					"numero": 48,
					"nivel": "13-16",
					"porcentaje": 10
				},
				{
					"numero": 69,
					"nivel": "12-14",
					"porcentaje": 25
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"10-15", "porcentaje":70}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-25", "porcentaje":30}}
				}
			]
		},
		{
			"nombre": "Ruta 5",
			"hierba": [
				{
					"numero": 16,
					"nivel": "15-17",
					"porcentaje": 45
				},
				{
					"numero": 19,
					"nivel": "14-16",
					"porcentaje": 25
				},
				{
					"numero": 63,
					"nivel": 7,
					"porcentaje": 15
				},
				{
					"numero": 39,
					"nivel": "3-7",
					"porcentaje": 10
				},
				{
					"numero": 17,
					"nivel": 17,
					"porcentaje": 5
				}
			],
			"intercambio": [
				{
					"numero": 67,
					"necesita": 104
				}
			]
		},
		{
			"nombre": "Ruta 6",
			"hierba": [
				{
					"numero": 16,
					"nivel": "15-17",
					"porcentaje": 45
				},
				{
					"numero": 19,
					"nivel": "14-16",
					"porcentaje": 25
				},
				{
					"numero": 63,
					"nivel": 7,
					"porcentaje": 15
				},
				{
					"numero": 39,
					"nivel": "3-7",
					"porcentaje": 10
				},
				{
					"numero": 17,
					"nivel": 17,
					"porcentaje": 5
				}
			],
			"surf": [
				{
					"numero": 54,
					"nivel": 15,
					"porcentaje": 95
				},
				{
					"numero": 55,
					"nivel": "15-20",
					"porcentaje": 5
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":"5-20", "porcentaje":100}}
				}
			]
		},
		{
			"nombre": "Ciudad Carmín",
			"lema": "El puerto de los ocasos exquisitos.",
			"plantas": [
				{
					"nombre": "Ciudad",
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 72,
							"probabilidad": {"tipo":"cania", "super":{"nivel":"10-20", "porcentaje":90}}
						},
						{
							"numero": 116,
							"probabilidad": {"tipo": "cania", "super":{"nivel":5, "porcentaje":10}}
						}
					],
					"regalo": [
						{
							"numero": 7,
							"nivel": 10,
							"observaciones": "Si tienes Medalla Trueno"
						}
					]
				},
				{
					"nombre": "Puerto",
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 72,
							"probabilidad": {"tipo":"cania", "super":{"nivel":"10-20", "porcentaje":70}}
						},
						{
							"numero": 90,
							"probabilidad": {"tipo":"cania", "super":{"nivel":10, "porcentaje":10}}
						},
						{
							"numero":120,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":20}}
						}
					]
				}
			]
		},
		{
			"nombre":"Ruta 11",
			"hierba": [
				{
					"numero": 16,
					"nivel": "16-18",
					"porcentaje": 40
				},
				{
					"numero": 19,
					"nivel": "15-17",
					"porcentaje": 25
				},
				{
					"numero": 96,
					"nivel": "15-19",
					"porcentaje": 24
				},
				{
					"numero": 17,
					"nivel": "18-20",
					"porcentaje": 10
				},
				{
					"numero": 20,
					"nivel": 17,
					"porcentaje": 1
				}
			],
			"pesca":
			[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "super":{"nivel":15, "porcentaje":90}}
				},
				{
					"numero": 116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":10}}
				}
			],
			"intercambio": [
				{
					"numero": 51,
					"necesita": 108
				}
			]
		},
		{
			"nombre":"Cueva Diglett",
			"caminando" : [
				{
					"numero": 50,
					"nivel": "15-22",
					"porcentaje": 95
				},
				{
					"numero": 51,
					"nivel": "29-31",
					"porcentaje": 5
				}
			]
		},
		{
			"nombre":"Ruta 9",
			"hierba": [
				{
					"numero": 32,
					"nivel": "16-18",
					"porcentaje": 30
				},
				{
					"numero": 29,
					"nivel": "16-18",
					"porcentaje": 30
				},
				{
					"numero": 19,
					"nivel": 18,
					"porcentaje": 15
				},
				{
					"numero": 21,
					"nivel": 17,
					"porcentaje": 10
				},
				{
					"numero": 33,
					"nivel": 18,
					"porcentaje": 5
				},
				{
					"numero": 30,
					"nivel": 18,
					"porcentaje": 5
				},
				{
					"numero": 20,
					"nivel": 20,
					"porcentaje": 4
				},
				{
					"numero": 22,
					"nivel": 19,
					"porcentaje": 1
				}
			]
		},
		{
			"nombre":"Ruta 10",
			"hierba": [
				{
					"numero": 81,
					"nivel": "16-22",
					"porcentaje": 55
				},
				{
					"numero": 19,
					"nivel": 18,
					"porcentaje": 15
				},
				{
					"numero": 29,
					"nivel": 17,
					"porcentaje": 10
				},
				{
					"numero": 32,
					"nivel": 17,
					"porcentaje": 10
				},
				{
					"numero": 20,
					"nivel": 20,
					"porcentaje": 5
				},
				{
					"numero": 66,
					"nivel": "16-18",
					"porcentaje": 5
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-20", "porcentaje":70}}
				},
				{
					"numero":116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":10, "porcentaje":20}}
				},
				{
					"numero":99,
					"probabilidad": {"tipo": "cania", "super":{"nivel":25, "porcentaje":10}}
				}
			]
		},
		{
			"nombre":"Túnel Roca",
			"plantas" : [
				{
					"nombre":"Planta baja",
					"caminando":[
						{
							"numero": 41,
							"nivel": "15-21",
							"porcentaje": 55
						},
						{
							"numero": 74,
							"nivel": "16-20",
							"porcentaje": 35
						},
						{
							"numero": 66,
							"nivel": "17-21",
							"porcentaje": 10
						}
					]
				},
				{
					"nombre":"Sótano",
					"caminando":[
						{
							"numero": 41,
							"nivel": "20-22",
							"porcentaje": 45
						},
						{
							"numero": 74,
							"nivel": "17-21",
							"porcentaje": 25
						},
						{
							"numero": 66,
							"nivel": "18-20",
							"porcentaje": 20
						},
						{
							"numero": 95,
							"nivel": "14-22",
							"porcentaje": 10
						}
					]
				}
			]
		},
		{
			"nombre":"Torre Pokémon",
			"plantas": [
				{
					"nombre":"Planta 2",
					"caminando":[
						{
							"numero": 92,
							"nivel": "18-25",
							"porcentaje": 95
						},
						{
							"numero": 93,
							"nivel": "20-25",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre":"Planta 3",
					"caminando":[
						{
							"numero": 92,
							"nivel": "18-25",
							"porcentaje": 95
						},
						{
							"numero": 93,
							"nivel": "20-25",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre":"Planta 4",
					"caminando":[
						{
							"numero": 92,
							"nivel": "21-27",
							"porcentaje": 90
						},
						{
							"numero": 93,
							"nivel": "22-27",
							"porcentaje": 5
						},
						{
							"numero": 104,
							"nivel": 20,
							"porcentaje": 5
						}
					]
				},
				{
					"nombre":"Planta 5",
					"caminando":[
						{
							"numero": 92,
							"nivel": "21-27",
							"porcentaje": 90
						},
						{
							"numero": 93,
							"nivel": "22-27",
							"porcentaje": 5
						},
						{
							"numero": 104,
							"nivel": 22,
							"porcentaje": 5
						}
					]
				},
				{
					"nombre":"Planta 6",
					"caminando":[
						{
							"numero": 92,
							"nivel": "23-29",
							"porcentaje": 90
						},
						{
							"numero": 93,
							"nivel": "24-29",
							"porcentaje": 5
						},
						{
							"numero": 104,
							"nivel": 24,
							"porcentaje": 5
						}
					]
				}

	]
		},
		{
			"nombre":"Ruta 8",
			"hierba":[
				{
					"numero": 63,
					"nivel": "15-19",
					"porcentaje": 20
				},
				{
					"numero": 17,
					"nivel": 24,
					"porcentaje": 10
				},
				{
					"numero": 19,
					"nivel": 20,
					"porcentaje": 15
				},
				{
					"numero": 16,
					"nivel": "20-22",
					"porcentaje": 40
				},
				{
					"numero": 39,
					"nivel": "19-24",
					"porcentaje": 10
				},
				{
					"numero": 64,
					"nivel": "20-27",
					"porcentaje": 5
				}
			]
		},
		{
			"nombre":"Ruta 7",
			"hierba":[
				{
					"numero": 63,
					"nivel": "15-26",
					"porcentaje": 25
				},
				{
					"numero": 17,
					"nivel": 24,
					"porcentaje": 10
				},
				{
					"numero": 19,
					"nivel": 20,
					"porcentaje": 15
				},
				{
					"numero": 16,
					"nivel": "20-22",
					"porcentaje": 40
				},
				{
					"numero": 39,
					"nivel": "19-24",
					"porcentaje": 10
				}
			]
		},
		{
			"nombre":"Ciudad Azulona",
			"lema":"La ciudad de los sueños de arco iris.",
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":"5-20", "porcentaje":100}}
				}
			],
			"regalo":[
				{
					"numero":133,
					"nivel": 25,
					"observaciones": "Azotea de la Mansión Azulona, entrando por la parte posterior."
				}
			],
			"casino":[
				{
					"numero":37,
					"nivel": 18,
					"fichas": 1000
				},
				{
					"numero":40,
					"nivel": 22,
					"fichas": 2680
				},
				{
					"numero":63,
					"nivel": 15,
					"fichas": 230
				},
				{
					"numero":123,
					"nivel": 30,
					"fichas": 6500
				},
				{
					"numero":127,
					"nivel": 30,
					"fichas": 6500
				},
				{
					"numero":137,
					"nivel": 26,
					"fichas": 9999
				}
			]
		},
		{
			"nombre": "Ruta 16",
			"hierba": [
				{
					"numero": 19,
					"nivel": "23-24",
					"porcentaje": 25
				},
				{
					"numero": 20,
					"nivel": "25-26",
					"porcentaje": 5
				},
				{
					"numero": 21,
					"nivel": "22-23",
					"porcentaje": 30
				},
				{
					"numero": 22,
					"nivel": 24,
					"porcentaje": 5
				},
				{
					"numero": 84,
					"nivel": "22-26",
					"porcentaje": 35
				}
			],
			"especial":[
				{
					"numero":143,
					"nivel":30,
					"observaciones": "Durmiendo en el camino"
				}
			]
		},
		{
			"nombre":"Ruta 17",
			"hierba": [
				{
					"numero": 77,
					"nivel": "28-32",
					"porcentaje": 24
				},
				{
					"numero": 84,
					"nivel": "26-28",
					"porcentaje": 55
				},
				{
					"numero": 22,
					"nivel": "27-29",
					"porcentaje": 20
				},
				{
					"numero": 85,
					"nivel": 29,
					"porcentaje": 1
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"5-15", "porcentaje":70}}
				},
				{
					"numero":90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"25-35", "porcentaje":30}}
				}
			]
		},
		{
			"nombre":"Ruta 18",
			"hierba": [
				{
					"numero": 19,
					"nivel": "23-24",
					"porcentaje": 25
				},
				{
					"numero": 20,
					"nivel": "25-26",
					"porcentaje": 5
				},
				{
					"numero": 21,
					"nivel": "22-23",
					"porcentaje": 30
				},
				{
					"numero": 22,
					"nivel": "24",
					"porcentaje": 5
				},
				{
					"numero": 84,
					"nivel": "22-26",
					"porcentaje": 35
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":40}}
				},
				{
					"numero":90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"20-40", "porcentaje":60}}
				}
			],
			"intercambio":[
				{
					"numero":47,
					"necesita": 114
				}
			]
		},
		{
			"nombre":"Ruta 12",
			"hierba": [
				{
					"numero": 16,
					"nivel": 28,
					"porcentaje": 15
				},
				{
					"numero": 17,
					"nivel": 28,
					"porcentaje": 10
				},
				{
					"numero": 43,
					"nivel": "25-27",
					"porcentaje": 35
				},
				{
					"numero": 44,
					"nivel": 29,
					"porcentaje": 5
				},
				{
					"numero": 69,
					"nivel": "25-27",
					"porcentaje": 25
				},
				{
					"numero": 70,
					"nivel": 29,
					"porcentaje": 5
				},
				{
					"numero": 83,
					"nivel": "26-31",
					"porcentaje": 5
				}
			],
			"surf":[
				{
					"numero": 79,
					"nivel": 15,
					"porcentaje": 95
				},
				{
					"numero": 80,
					"nivel": "15-20",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-25", "porcentaje":70}}
				},
				{
					"numero": 117,
					"probabilidad": {"tipo": "cania", "super":{"nivel":25, "porcentaje":30}}
				}
			],
			"especial":[
				{
					"numero":143,
					"nivel":30,
					"observaciones": "Durmiendo en el camino"
				}
			]
		},
		{
			"nombre":"Ruta 13",
			"hierba": [
				{
					"numero": 16,
					"nivel": 28,
					"porcentaje": 10
				},
				{
					"numero": 17,
					"nivel": 28,
					"porcentaje": 15
				},
				{
					"numero": 43,
					"nivel": "25-27",
					"porcentaje": 35
				},
				{
					"numero": 44,
					"nivel": 29,
					"porcentaje": 5
				},
				{
					"numero": 69,
					"nivel": "25-27",
					"porcentaje": 25
				},
				{
					"numero": 70,
					"nivel": 29,
					"porcentaje": 5
				},
				{
					"numero": 83,
					"nivel": "26-31",
					"porcentaje": 5
				}
			],
			"surf":[
				{
					"numero": 79,
					"nivel": 15,
					"porcentaje": 95
				},
				{
					"numero": 80,
					"nivel": "15-20",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":10, "porcentaje":20}}
				},
				{
					"numero": 116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-20", "porcentaje":70}}
				},
				{
					"numero": 117,
					"probabilidad": {"tipo": "cania", "super":{"nivel":20, "porcentaje":10}}
				}
			]
		},
		{
			"nombre":"Ruta 14",
			"hierba": [
				{
					"numero": 17,
					"nivel": 30,
					"porcentaje": 10
				},
				{
					"numero": 43,
					"nivel": "26-28",
					"porcentaje": 35
				},
				{
					"numero": 44,
					"nivel": "30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-27",
					"porcentaje": 19
				},
				{
					"numero": 49,
					"nivel": 30,
					"porcentaje": 1
				},
				{
					"numero": 69,
					"nivel": "26-28",
					"porcentaje": 25
				},
				{
					"numero": 70,
					"nivel": 30,
					"porcentaje": 5
				}
			]
		},
		{
			"nombre":"Ruta 15",
			"hierba": [
				{
					"numero": 17,
					"nivel": 32,
					"porcentaje": 10
				},
				{
					"numero": 43,
					"nivel": "26-28",
					"porcentaje": 35
				},
				{
					"numero": 44,
					"nivel": "30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-27",
					"porcentaje": 19
				},
				{
					"numero": 49,
					"nivel": 30,
					"porcentaje": 1
				},
				{
					"numero": 69,
					"nivel": "26-28",
					"porcentaje": 25
				},
				{
					"numero": 70,
					"nivel": 30,
					"porcentaje": 5
				}
			]
		},
		{
			"nombre":"Ciudad Fucsia",
			"lema":"¡La ciudad rosa!",
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super":{"nivel":"5-15", "porcentaje":90}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 130,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":10}}
				}
			]
		},
		{
			"nombre": "Zona Safari",
			"plantas": [
				{
					"nombre": "Zona Central",
					"hierba": [
						{
							"numero": 29,
							"nivel": 36,
							"porcentaje":15
						},
						{
							"numero": 32,
							"nivel": 14,
							"porcentaje":25
						},
						{
							"numero": 33,
							"nivel": 23,
							"porcentaje":10
						},
						{
							"numero": 46,
							"nivel": 27,
							"porcentaje":5
						},
						{
							"numero": 47,
							"nivel": "27-32",
							"porcentaje":15
						},
						{
							"numero": 102,
							"nivel": 24,
							"porcentaje":15
						},
						{
							"numero": 111,
							"nivel": 20,
							"porcentaje":10
						},
						{
							"numero": 113,
							"nivel": 7,
							"porcentaje":1
						},
						{
							"numero": 114,
							"nivel": 22,
							"porcentaje":4
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super": {"nivel":"5-10", "porcentaje":70}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 147,
							"probabilidad": {"tipo":"cania", "super":{"nivel":10, "porcentaje":20}}
						},
						{
							"numero": 148,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":10}}
						}
				]
			},
			{
				"nombre": "Zona 1",
				"hierba": [
					{
						"numero": 29,
						"nivel": 29,
						"porcentaje":15
					},
					{
						"numero": 32,
						"nivel": 21,
						"porcentaje":25
					},
					{
						"numero": 30,
						"nivel": 32,
						"porcentaje":10
					},
					{
						"numero": 102,
						"nivel": "22-26",
						"porcentaje":20
					},
					{
						"numero": 104,
						"nivel": 19,
						"porcentaje":10
					},
					{
						"numero": 105,
						"nivel": 24,
						"porcentaje":5
					},
					{
						"numero": 113,
						"nivel": 21,
						"porcentaje":4
					},
					{
						"numero": 128,
						"nivel": 21,
						"porcentaje":10
					},
					{
						"numero": 123,
						"nivel": 15,
						"porcentaje":1
					}
				],
				"pesca":[
					{
						"numero": 129,
						"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super": {"nivel":"5-10", "porcentaje":90}}
					},
					{
						"numero":60,
						"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 118,
						"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 147,
						"probabilidad": {"tipo":"cania", "super":{"nivel":15, "porcentaje":10}}
					}
				]
			},
			{
				"nombre": "Zona 2",
				"hierba": [
					{
						"numero": 29,
						"nivel": 14,
						"porcentaje": 15
					},
					{
						"numero": 30,
						"nivel": 23,
						"porcentaje": 10
					},
					{
						"numero": 32,
						"nivel": 36,
						"porcentaje":25
					},
					{
						"numero": 102,
						"nivel": 20,
						"porcentaje":15
					},
					{
						"numero": 49,
						"nivel": 32,
						"porcentaje":5
					},
					{
						"numero": 104,
						"nivel": 16,
						"porcentaje": 5
					},
					{
						"numero": 111,
						"nivel": 25,
						"porcentaje": 10
					},
					{
						"numero": 115,
						"nivel": "28-33",
						"porcentaje": 15
					},
					{
						"numero": 123,
						"nivel": 25,
						"porcentaje": 4
					},
					{
						"numero": 127,
						"nivel": 15,
						"porcentaje": 1
					}
				],
				"pesca":[
					{
						"numero": 129,
						"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super": {"nivel":"5-10", "porcentaje":90}}
					},
					{
						"numero":60,
						"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 118,
						"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 147,
						"probabilidad": {"tipo":"cania", "super":{"nivel":15, "porcentaje":10}}
					}
				]
		  },
			{
				"nombre": "Zona 3",
				"hierba": [
					{
						"numero": 29,
						"nivel": 21,
						"porcentaje":15
					},
					{
						"numero": 32,
						"nivel": 29,
						"porcentaje":25
					},
					{
						"numero": 33,
						"nivel": 32,
						"porcentaje":10
					},
					{
						"numero": 102,
						"nivel": "22-26",
						"porcentaje":20
					},
					{
						"numero": 104,
						"nivel": 19,
						"porcentaje":10
					},
					{
						"numero": 105,
						"nivel": 24,
						"porcentaje":5
					},
					{
						"numero": 114,
						"nivel": 27,
						"porcentaje":1
					},
					{
						"numero": 127,
						"nivel": 25,
						"porcentaje":4
					},
					{
						"numero": 128,
						"nivel": 21,
						"porcentaje":10
					}
				],
				"pesca":[
					{
						"numero": 129,
						"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super": {"nivel":"5-15", "porcentaje":90}}
					},
					{
						"numero":60,
						"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 118,
						"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 147,
						"probabilidad": {"tipo":"cania", "super":{"nivel":15, "porcentaje":10}}
					}
				]
			}
		]
	},
		{
		"nombre": "Central de energía",
		"caminando":[
			{
				"numero": 100,
				"nivel": "33-37",
				"porcentaje": 20
			},
			{
				"numero": 81,
				"nivel": "30-35",
				"porcentaje": 40
			},
			{
				"numero": 82,
				"nivel": "33-38",
				"porcentaje": 20
			},
			{
				"numero": 88,
				"nivel": "33-37",
				"porcentaje": 15
			},
			{
				"numero": 89,
				"nivel": "33-37",
				"porcentaje": 5
			},
			{
				"numero": 145,
				"nivel":50
			}
		],
		"especial":[
			{
				"numero": 100,
				"nivel":40,
				"observaciones": "5 camuflados como objetos"
			},
			{
				"numero": 101,
				"nivel":43,
				"observaciones": "2 camuflados como objetos"
			}
		]
	},
		{
			"nombre":"Ciudad Azafrán",
			"lema":"La brillante y dorada tierra del comercio.",
			"regalo": [
				{
					"numero": 106,
					"nivel":30,
					"observaciones": "En Dojo-Karate"
				},
				{
					"numero": 107,
					"nivel":30,
					"observaciones": "En Dojo-Karate"
				}
			],
			"regalo":	[
				{
					"numero": 131,
					"nivel":15,
					"observaciones": "En Silph S.A."
				}
			]
		},
		{
			"nombre": "Ruta 19",
			"surf":[
				{
					"numero": 72,
					"nivel": "5-40",
					"porcentaje": 100
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-30", "porcentaje":60}}
				},
				{
					"numero":73,
					"probabilidad": {"tipo": "cania", "super":{"nivel":30, "porcentaje":10}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":20, "porcentaje":30}}
				}
			]
		},
		{
			"nombre": "Ruta 20",
			"surf":[
				{
					"numero": 72,
					"nivel": "5-40",
					"porcentaje": 100
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-30", "porcentaje":40}}
				},
				{
					"numero":73,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"20-40", "porcentaje":40}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":20, "porcentaje":20}}
				}
			]
		},
		{
			"nombre": "Islas Espuma",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 79,
							"nivel": "28-30",
							"porcentaje":15
						},
						{
							"numero": 41,
							"nivel": "9-36",
							"porcentaje":50
						},
						{
							"numero": 42,
							"nivel": "29-36",
							"porcentaje":5
						},
						{
							"numero": 98,
							"nivel": "25-27",
							"porcentaje":30
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando": [
						{
							"numero": 41,
							"nivel": "18-36",
							"porcentaje": 45
						},
						{
							"numero": 98,
							"nivel": "26-28",
							"porcentaje":25
						},
						{
							"numero": 42,
							"nivel": 27,
							"porcentaje":10
						},
						{
							"numero": 79,
							"nivel": 29,
							"porcentaje":10
						},
						{
							"numero": 86,
							"nivel": "22-26",
							"porcentaje":5
						},
						{
							"numero": 99,
							"nivel": 28,
							"porcentaje":5
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [
						{
							"numero": 41,
							"nivel": "27-36",
							"porcentaje": 40
						},
						{
							"numero": 98,
							"nivel": "27-29",
							"porcentaje":20
						},
						{
							"numero": 42,
							"nivel": "27-36",
							"porcentaje":15
						},
						{
							"numero": 79,
							"nivel": 31,
							"porcentaje":4
						},
						{
							"numero": 86,
							"nivel": 24,
							"porcentaje":10
						},
						{
							"numero": 99,
							"nivel": 28,
							"porcentaje":10
						},
						{
							"numero": 80,
							"nivel": 31,
							"porcentaje":1
						}
					]
				},
				{
					"nombre": "Sótano 3",
					"caminando": [
						{
							"numero": 41,
							"nivel": "27-36",
							"porcentaje": 25
						},
						{
							"numero": 42,
							"nivel": 27,
							"porcentaje":25
						},
						{
							"numero": 98,
							"nivel": "29-31",
							"porcentaje":20
						},
						{
							"numero": 86,
							"nivel": "26-30",
							"porcentaje":15
						},
						{
							"numero": 99,
							"nivel": 30,
							"porcentaje":10
						},
						{
							"numero": 87,
							"nivel": "28-32",
							"porcentaje":5
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "20-40",
							"porcentaje": 70
						},
						{
							"numero": 120,
							"nivel": 30,
							"porcentaje": 30
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 120,
							"probabilidad": {"tipo": "cania", "super":{"nivel":"20-40", "porcentaje":40}}
						},
						{
							"numero":98,
							"probabilidad": {"tipo": "cania", "super":{"nivel":25, "porcentaje":40}}
						},
						{
							"numero":99,
							"probabilidad": {"tipo": "cania", "super":{"nivel":35, "porcentaje":20}}
						}
					]
				},
				{
					"nombre": "Sótano 4",
					"caminando": [
						{
							"numero": 41,
							"nivel": "27-36",
							"porcentaje": 20
						},
						{
							"numero": 42,
							"nivel": "27-36",
							"porcentaje":30
						},
						{
							"numero": 98,
							"nivel": 30,
							"porcentaje":15
						},
						{
							"numero": 86,
							"nivel": "28-32",
							"porcentaje":20
						},
						{
							"numero": 99,
							"nivel": 32,
							"porcentaje":10
						},
						{
							"numero": 87,
							"nivel": "30-34",
							"porcentaje":5
						},
						{
							"numero": 144,
							"nivel": 50
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "20-40",
							"porcentaje": 70
						},
						{
							"numero": 120,
							"nivel": 30,
							"porcentaje": 30
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 120,
							"probabilidad": {"tipo": "cania", "super":{"nivel":"20-40", "porcentaje":40}}
						},
						{
							"numero":98,
							"probabilidad": {"tipo": "cania", "super":{"nivel":25, "porcentaje":40}}
						},
						{
							"numero":99,
							"probabilidad": {"tipo": "cania", "super":{"nivel":35, "porcentaje":20}}
						}
					]
				}
			]
		},
		{
			"nombre":"Isla Canela",
			"lema":"La feroz ciudad del ardiente deseo.",
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-30", "porcentaje":40}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"10-15", "porcentaje":60}}
				}
			],
			"intercambio": [
				{
					"numero": 87,
					"necesita": 58
				},
				{
					"numero": 89,
					"necesita": 115
				},
				{
					"numero": 112,
					"necesita": 55
				}
			],
			"fosil": [
				{
					"numero": 138,
					"nivel": 1
				},
				{
					"numero": 140,
					"nivel": 1
				},
				{
					"numero": 142,
					"nivel": 1
				}
			]
		},
		{
			"nombre":"Mansión Pokémon",
			"plantas": [
				{
					"nombre":"Planta baja",
					"caminando":[
						{
							"numero": 19,
							"nivel": "34-37",
							"porcentaje": 35
						},
						{
							"numero": 58,
							"nivel": "26-38",
							"porcentaje": 20
						},
						{
							"numero": 20,
							"nivel": "34-37",
							"porcentaje": 25
						},
						{
							"numero": 88,
							"nivel": "23-26",
							"porcentaje": 20
						}
					]
				},
				{
					"nombre":"Primera planta",
					"caminando":[
						{
							"numero": 89,
							"nivel": "35-38",
							"porcentaje": 5
						},
						{
							"numero": 19,
							"nivel": "37-40",
							"porcentaje": 35
						},
						{
							"numero": 20,
							"nivel": "37-40",
							"porcentaje": 25
						},
						{
							"numero": 88,
							"nivel": "26-35",
							"porcentaje": 35
						}
					]
				},
				{
					"nombre":"Segunda planta",
					"caminando":[
						{
							"numero": 89,
							"nivel": "35-43",
							"porcentaje": 5
						},
						{
							"numero": 19,
							"nivel": "40-43",
							"porcentaje": 35
						},
						{
							"numero": 20,
							"nivel": "40-43",
							"porcentaje": 25
						},
						{
							"numero": 88,
							"nivel": "32-38",
							"porcentaje": 35
						}
					]
				},
				{
					"nombre":"Sótano",
					"caminando":[
						{
							"numero": 20,
							"nivel": "37-46",
							"porcentaje": 40
						},
						{
							"numero": 88,
							"nivel": "35-38",
							"porcentaje": 40
						},
						{
							"numero": 89,
							"nivel": 41,
							"porcentaje": 10
						},
						{
							"numero": 132,
							"nivel": "12-24",
							"porcentaje": 10
						}
					]
				}
			]
		},
		{
			"nombre":"Ruta 21",
			"hierba":[
				{
					"numero": 16,
					"nivel": "11-17",
					"porcentaje": 60
				},
				{
					"numero": 17,
					"nivel": "15-19",
					"porcentaje": 10
				},
				{
					"numero": 19,
					"nivel": "13-15",
					"porcentaje": 25
				},
				{
					"numero": 20,
					"nivel": 15,
					"porcentaje": 5
				}
			],
			"surf":[
				{
					"numero": 72,
					"nivel": "5-40",
					"porcentaje": 100
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"15-30", "porcentaje":60}}
				},
				{
					"numero":73,
					"probabilidad": {"tipo": "cania", "super":{"nivel":30, "porcentaje":10}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":20, "porcentaje":30}}
				}
			]
		},
		{
			"nombre":"Ruta 23",
			"hierba":[
				{
					"numero": 22,
					"nivel": "40-45",
					"porcentaje": 15
				},
				{
					"numero": 30,
					"nivel": "41-44",
					"porcentaje": 25
				},
				{
					"numero": 33,
					"nivel": "41-44",
					"porcentaje": 35
				},
				{
					"numero": 56,
					"nivel": "36-41",
					"porcentaje": 20
				},
				{
					"numero": 57,
					"nivel": "41-46",
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
				},
				{
					"numero":60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50},"super":{"nivel":"25-30", "porcentaje":70}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 61,
					"probabilidad": {"tipo": "cania", "super":{"nivel":"30-40", "porcentaje":30}}
				}
			]
		},
		{
			"nombre":"Calle Victoria",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 95,
							"nivel": "45-47",
							"porcentaje": 10
						},
						{
							"numero": 74,
							"nivel": "31-41",
							"porcentaje": 55
						},
						{
							"numero": 41,
							"nivel": 44,
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": 39,
							"porcentaje": 10
						},
						{
							"numero": 67,
							"nivel": "39-42",
							"porcentaje": 5
						},
						{
							"numero": 75,
							"nivel": 44,
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Primera planta",
					"caminando": [
						{
							"numero": 95,
							"nivel": 49,
							"porcentaje": 10
						},
						{
							"numero": 74,
							"nivel": "36-46",
							"porcentaje": 50
						},
						{
							"numero": 42,
							"nivel": 44,
							"porcentaje": 15
						},
						{
							"numero": 67,
							"nivel": "42-45",
							"porcentaje": 10
						},
						{
							"numero": 75,
							"nivel": "41-47",
							"porcentaje": 15
						},
						{
							"numero": 146,
							"nivel": 50
						}
					]
				},
				{
					"nombre": "Segunda planta",
					"caminando": [
						{
							"numero": 95,
							"nivel": "43-45",
							"porcentaje": 10
						},
						{
							"numero": 74,
							"nivel": "26-41",
							"porcentaje": 65
						},
						{
							"numero": 41,
							"nivel": "39-44",
							"porcentaje": 20
						},
						{
							"numero": 75,
							"nivel": "41-47",
							"porcentaje": 5
						}
					]
				}
			]
		},
		{
			"nombre":"Cueva Celeste",
			"plantas":[
				{
					"nombre":"Planta baja",
					"caminando":[
						{
							"numero": 28,
							"nivel": 52,
							"porcentaje":10
						},
						{
							"numero": 42,
							"nivel": "50-55",
							"porcentaje": 40
						},
						{
							"numero": 44,
							"nivel": 55,
							"porcentaje": 10
						},
						{
							"numero": 46,
							"nivel": 54,
							"porcentaje":5
						},
						{
							"numero": 49,
							"nivel": 54,
							"porcentaje":5
						},
						{
							"numero": 70,
							"nivel":55 ,
							"porcentaje":10
						},
						{
							"numero": 75,
							"nivel": 45,
							"porcentaje":15
						},
						{
							"numero": 132,
							"nivel": "55-60",
							"porcentaje": 5
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":25, "porcentaje":40}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo": "cania", "super":{"nivel":"35-55", "porcentaje":60}}
						}
					]
				},
				{
					"nombre":"Primer piso",
					"caminando":[
						{
							"numero": 28,
							"nivel": 56,
							"porcentaje":10
						},
						{
							"numero": 42,
							"nivel": "52-57",
							"porcentaje": 40
						},
						{
							"numero": 44,
							"nivel": 58,
							"porcentaje": 5
						},
						{
							"numero": 70,
							"nivel": 58,
							"porcentaje": 5
						},
						{
							"numero": 75,
							"nivel": 50,
							"porcentaje":15
						},
						{
							"numero": 111,
							"nivel": 50,
							"porcentaje":10
						},
						{
							"numero": 112,
							"nivel":"58-60",
							"porcentaje":5
						},
						{
							"numero": 132,
							"nivel": 60,
							"porcentaje":10
						}
					]
				},
				{
					"nombre":"Sótano",
					"caminando":[
						{
							"numero": 42,
							"nivel": "54-59",
							"porcentaje":40
						},
						{
							"numero": 75,
							"nivel": 55,
							"porcentaje": 15
						},
						{
							"numero": 108,
							"nivel": "50-55",
							"porcentaje": 5
						},
						{
							"numero": 111,
							"nivel": 52,
							"porcentaje": 10
						},
						{
							"numero": 112,
							"nivel": 62,
							"porcentaje":10
						},
						{
							"numero": 113,
							"nivel": 56,
							"porcentaje":5
						},
						{
							"numero": 132,
							"nivel":"60-65",
							"porcentaje":15
						},
						{
							"numero":150,
							"nivel": 70
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}}
						},
						{
							"numero":60,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":25, "porcentaje":40}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo": "cania", "super":{"nivel":"35-55", "porcentaje":60}}
						}
					]
				}
			]
		},
		{
			"nombre": "Evolución",
			"otros": [
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
					"numero": 16
				},
				{
					"numero": 29
				},
				{
					"numero": 32
				},
				{
					"numero": 35
				},
				{
					"numero": 37
				},
				{
					"numero": 43
				},
				{
					"numero": 58
				},
				{
					"numero": 60
				},
				{
					"numero": 63
				},
				{
					"numero": 66
				},
				{
					"numero": 69
				},
				{
					"numero": 74
				},
				{
					"numero": 77
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
					"numero": 96
				},
				{
					"numero": 102
				},
				{
					"numero": 120
				},
				{
					"numero": 133
				},
				{
					"numero": 138
				},
				{
					"numero": 140
				},
				{
					"numero": 147
				}
			]
		},
		{
			"nombre": "Intercambiar de otros juegos",
			"otros":[
				{
					"numero":13
				},
				{
					"numero":23
				},
				{
					"numero":26
				},
				{
					"numero":52
				},
				{
					"numero":109
				},
				{
					"numero":124
				},
				{
					"numero":125
				},
				{
					"numero":126
				}
			]
		},
		{
			"nombre": "Evento",
			"otros": [
				{
					"numero": 151
				}
			]
		}
	]
}
