const azul = {
	"nombre":"azul",
	"titulo": "Azul",
	"gen":1,
	"filtros":[
		{
			"nombre": "Pesca",
			"imagen": "cania/vieja.png",
			"filtro": "pesca",
			"defecto": false
		}
	],
	"lugares": [
		{
			"nombre": "Pueblo Paleta",
			"lema": "¡Un lienzo en blanco de tu viaje!",
			"regalo": [
				{
					"numero": 1,
					"nivel": 5
				},
				{
					"numero": 4,
					"nivel": 5
				},
				{
					"numero": 7,
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
				}
			]
		},
		{
			"nombre": "Ruta 1",
			"hierba": [
				{
					"numero": 16,
					"nivel": "2-5",
					"porcentaje": 55
				},
				{
					"numero": 19,
					"nivel": "2-4",
					"porcentaje": 45
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},

				{
					"numero": 72,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
				}
			]
		},
		{
			"nombre":"Ruta 22",
			"hierba":[
				{
					"numero": 19,
					"nivel": "2-4",
					"porcentaje": 50
				},
				{
					"numero": 21,
					"nivel": "3-5",
					"porcentaje": 10
				},
				{
					"numero": 29,
					"nivel": "2-4",
					"porcentaje": 35
				},
				{
					"numero": 32,
					"nivel": "3-4",
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":50}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":50}}
				}
			]
		},
		{
			"nombre": "Ruta 2",
			"hierba": [
				{
					"numero": 10,
					"nivel":"3-5",
					"porcentaje": 15
				},
				{
					"numero": 19,
					"nivel":"2-5",
					"porcentaje": 45
				},
				{
					"numero": 16,
					"nivel":"3-5",
					"porcentaje": 40
				}
			],
			"intercambio": [
				{
					"numero": 122,
					"necesita": 63
				}
			]
		},
		{
			"nombre": "Bosque Verde",
			"hierba": [
				{
					"numero":13,
					"nivel":"3-5",
					"porcentaje":5
				},
				{
					"numero":14,
					"nivel":"4",
					"porcentaje":5
				},
				{
					"numero":10,
					"nivel":"3-5",
					"porcentaje":50
				},
				{
					"numero": 11,
					"nivel": "4-6",
					"porcentaje":35
				},
				{
					"numero":25,
					"nivel":"3-5",
					"porcentaje":5
				},
			]
		},
		{
			"nombre":"Ruta 3",
			"hierba": [
				{
					"numero":16,
					"nivel":"6-8",
					"porcentaje":50
				},
				{
					"numero": 21,
					"nivel": "5-8",
					"porcentaje":40
				},
				{
					"numero":39,
					"nivel":"3-7",
					"porcentaje":10
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
							"porcentaje": 79
						},
						{
							"numero": 74,
							"nivel": "8-10",
							"porcentaje": 15
						},
						{
							"numero": 46,
							"nivel": 8,
							"porcentaje": 5
						},
						{
							"numero": 35,
							"nivel": 8,
							"porcentaje": 1
						}
					]
				},
				{
					"nombre":"Sótano 1",
					"caminando":[
						{
							"numero": 41,
							"nivel": "7-11",
							"porcentaje": 60
						},
						{
							"numero": 74,
							"nivel": "7-9",
							"porcentaje": 26
						},
						{
							"numero": 46,
							"nivel": 10,
							"porcentaje": 10
						},
						{
							"numero": 35,
							"nivel": 9,
							"porcentaje": 4
						}
					]
				},
				{
					"nombre":"Sótano 2",
					"caminando":[
						{
							"numero": 41,
							"nivel": "9-12",
							"porcentaje": 54
						},
						{
							"numero": 74,
							"nivel": "9-10",
							"porcentaje": 25
						},
						{
							"numero": 46,
							"nivel": "10-12",
							"porcentaje": 15
						},
						{
							"numero": 35,
							"nivel": "10-12",
							"porcentaje": 6
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
					"nivel": "8-12",
					"porcentaje": 45
				},
				{
					"numero": 21,
					"nivel": "8-12",
					"porcentaje": 30
				},
				{
					"numero": 27,
					"nivel": "6-12",
					"porcentaje": 25
				}
			],
			"comprar": [
				{
					"numero": 129,
					"nivel": 5,
					"precio": 500
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
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":33}}
						},
						{
							"numero": 54,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":33}}
						},
						{
							"numero":98,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":33}}
						}
			],
			"intercambio": [
				{
					"numero": 124,
					"necesita": 61
				}
			]
		},
		{
			"nombre": "Ruta 24",
			"hierba": [
				{
					"numero": 10,
					"nivel": 7,
					"porcentaje": 25
				},
				{
					"numero": 11,
					"nivel": 8,
					"porcentaje": 15
				},
				{
					"numero": 16,
					"nivel": "12-13",
					"porcentaje": 20
				},
				{
					"numero": 69,
					"nivel": "12-14",
					"porcentaje": 25
				},
				{
					"numero": 63,
					"nivel": "8-12",
					"porcentaje": 15
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":15, "porcentaje":50}, "super":{"nivel":15, "porcentaje":33}}
				},

				{
					"numero": 54,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":33}}
				},
				{
					"numero":98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":33}}
				}
			]
		},
		{
			"nombre": "Ruta 25",
			"hierba": [
				{
					"numero": 10,
					"nivel": 8,
					"porcentaje": 25
				},
				{
					"numero": 11,
					"nivel": 9,
					"porcentaje": 15
				},
				{
					"numero": 13,
					"nivel": 8,
					"porcentaje": 1
				},
				{
					"numero": 14,
					"nivel": 7,
					"porcentaje": 4
				},
				{
					"numero": 16,
					"nivel": 13,
					"porcentaje": 15
				},
				{
					"numero": 69,
					"nivel": "12-14" ,
					"porcentaje": 25
				},
				{
					"numero": 63,
					"nivel": "10-12",
					"porcentaje": 15
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":33}}
				},
				{
					"numero": 54,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":33}}
				},
				{
					"numero":98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":33}}
				}
			]
		},
		{
			"nombre": "Ruta 5",
			"hierba": [
				{
					"numero": 69,
					"nivel": "13-16",
					"porcentaje": 40
				},
				{
					"numero": 52,
					"nivel": "10-16",
					"porcentaje": 25
				},
				{
					"numero": 16,
					"nivel": "13-16",
					"porcentaje": 35
				}
			],
			"intercambio": [
				{
					"numero": 29,
					"necesita": 32
				}
			]
		},
		{
			"nombre": "Ruta 6",
			"hierba": [
				{
					"numero": 69,
					"nivel": "13-16",
					"porcentaje": 40
				},
				{
					"numero": 52,
					"nivel": "10-16",
					"porcentaje": 25
				},
				{
					"numero": 16,
					"nivel": "13-16",
					"porcentaje": 35
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
					"numero": 90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
				},
				{
					"numero":98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
				}
			]
		},
		{
			"nombre": "Ciudad Carmín",
			"lema": "El puerto de los ocasos exquisitos.",
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
					"numero": 90,
					"probabilidad": {"tipo":"cania", "super":{"nivel":15, "porcentaje":50}}
				},
	 		  {
					"numero":98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
				}
			],
			"intercambio": [
				{
					"numero": 83,
					"necesita": 21
				}
			]
		},
		{
			"nombre":"Ruta 11",
			"hierba": [
				{
					"numero": 27,
					"nivel": "12-15",
					"porcentaje": 45
				},
				{
					"numero": 21,
					"nivel": "13-17",
					"porcentaje": 30
				},
				{
					"numero": 96,
					"nivel": "9-15",
					"porcentaje": 25
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
					"numero": 90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
				},
				{
					"numero":98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
				}
			],
			"intercambio": [
				{
					"numero": 30,
					"necesita": 33
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
					"numero": 27,
					"nivel": "11-17",
					"porcentaje": 25
				},
				{
					"numero": 19,
					"nivel": "14-17",
					"porcentaje": 45
				},
				{
					"numero": 21,
					"nivel": "13-17",
					"porcentaje": 30
				}
			]
		},
		{
			"nombre":"Ruta 10",
			"hierba": [
				{
					"numero": 27,
					"nivel": "11-17",
					"porcentaje": 25
				},
				{
					"numero": 21,
					"nivel": "14-17",
					"porcentaje": 30
				},
				{
					"numero": 100,
					"nivel": "14-17",
					"porcentaje": 45
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
					"numero": 61,
					"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":50}}
				},
				{
					"numero":79,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
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
							"nivel": "15-18",
							"porcentaje": 55
						},
						{
							"numero": 74,
							"nivel": "16-17",
							"porcentaje": 25
						},
						{
							"numero": 66,
							"nivel": "15-17",
							"porcentaje": 15
						},
						{
							"numero": 95,
							"nivel": "13-15",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre":"Sótano",
					"caminando":[
						{
							"numero": 41,
							"nivel": "16-18",
							"porcentaje": 50
						},
						{
							"numero": 74,
							"nivel": "16-18",
							"porcentaje": 26
						},
						{
							"numero": 66,
							"nivel": "15-17",
							"porcentaje": 15
						},
						{
							"numero": 95,
							"nivel": "13-17",
							"porcentaje": 9
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
									"nivel": "18-24",
									"porcentaje": 90
								},
								{
									"numero": 93,
									"nivel": "25",
									"porcentaje": 1
								},
								{
									"numero": 104,
									"nivel": "20-22",
									"porcentaje": 9
								}
							]
						},
						{
							"nombre":"Planta 3",
							"caminando":[
								{
									"numero": 92,
									"nivel": "18-24",
									"porcentaje": 86
								},
								{
									"numero": 93,
									"nivel": 25,
									"porcentaje": 5
								},
								{
									"numero": 104,
									"nivel": "20-22",
									"porcentaje": 9
								}
							]
						},
						{
							"nombre":"Planta 4",
							"caminando":[
								{
									"numero": 92,
									"nivel": "18-24",
									"porcentaje": 86
								},
								{
									"numero": 93,
									"nivel": "25",
									"porcentaje": 5
								},
								{
									"numero": 104,
									"nivel": "20-22",
									"porcentaje": 9
								}
							]
						},
						{
							"nombre":"Planta 5",
							"caminando":[
								{
									"numero": 92,
									"nivel": "19-24",
									"porcentaje": 85
								},
								{
									"numero": 93,
									"nivel": "26-28",
									"porcentaje": 6
								},
								{
									"numero": 104,
									"nivel": "22-24",
									"porcentaje": 9
								}
							]
						},
						{
							"nombre":"Planta 6",
							"caminando":[
								{
									"numero": 92,
									"nivel": "20-24",
									"porcentaje": 75
								},
								{
									"numero": 93,
									"nivel": "28-30",
									"porcentaje": 15
								},
								{
									"numero": 104,
									"nivel": "22-24",
									"porcentaje": 10
								}
							]
						}

			]
		},
		{
			"nombre":"Ruta 8",
			"hierba":[
				{
					"numero": 52,
					"nivel": "18-20",
					"porcentaje": 25
				},
				{
					"numero": 27,
					"nivel": "17-19",
					"porcentaje": 20
				},
				{
					"numero": 37,
					"nivel": "15-18",
					"porcentaje": 20
				},
				{
					"numero": 16,
					"nivel": "18-20",
					"porcentaje": 35
				}
			]
		},
		{
			"nombre":"Ruta 7",
			"hierba":[
				{
					"numero": 52,
					"nivel": "17-20",
					"porcentaje": 30
				},
				{
					"numero": 69,
					"nivel": "19-22",
					"porcentaje": 25
				},
				{
					"numero": 37,
					"nivel": "18-20",
					"porcentaje": 10
				},
				{
					"numero": 16,
					"nivel": "19-22",
					"porcentaje": 35
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
				},
				{
					"numero": 61,
					"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":50}}
				},
				{
					"numero":79,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":50}}
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
					"numero":33,
					"nivel": 17,
					"fichas": 1200
				},
				{
					"numero":35,
					"nivel": 12,
					"fichas": 750
				},
				{
					"numero":63,
					"nivel": 6,
					"fichas": 120
				},
				{
					"numero":127,
					"nivel": 20,
					"fichas": 2500
				},
				{
					"numero":137,
					"nivel": 18,
					"fichas": 6500
				},
				{
					"numero":147,
					"nivel": 24,
					"fichas": 4600
				}
			]
		},
		{
			"nombre": "Ruta 16",
			"hierba": [
				{
					"numero": 19,
					"nivel": "18-22",
					"porcentaje": 30
				},
				{
					"numero": 20,
					"nivel": "23-25",
					"porcentaje": 5
				},
				{
					"numero": 21,
					"nivel": "20-22",
					"porcentaje": 40
				},
				{
					"numero": 84,
					"nivel": "18-22",
					"porcentaje": 25
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
					"numero": 20,
					"nivel": "25-29",
					"porcentaje": 30
				},
				{
					"numero": 21,
					"nivel": "20-22",
					"porcentaje": 40
				},
				{
					"numero": 22,
					"nivel": "25-27",
					"porcentaje": 5
				},
				{
					"numero": 84,
					"nivel": "24-28",
					"porcentaje": 25
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super":{"nivel":15, "porcentaje":25}}
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
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				}
			]
		},
		{
			"nombre":"Ruta 18",
			"hierba": [
				{
					"numero": 20,
					"nivel": "25-29",
					"porcentaje": 20
				},
				{
					"numero": 21,
					"nivel": "20-22",
					"porcentaje": 40
				},
				{
					"numero": 22,
					"nivel": "25-29",
					"porcentaje": 15
				},
				{
					"numero": 84,
					"nivel": "24-28",
					"porcentaje": 25
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super":{"nivel":15, "porcentaje":25}}
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
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				}
			],
			"intercambio":[
				{
					"numero":108,
					"necesita": 80
				}
			]
		},
		{
			"nombre":"Ruta 12",
			"hierba": [
				{
					"numero": 16,
					"nivel": "23-27",
					"porcentaje": 35
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 40
				},
				{
					"numero": 70,
					"nivel": "28-30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-26",
					"porcentaje": 20
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super": {"nivel":15, "porcentaje":25}}
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
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
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
					"nivel": "25-27",
					"porcentaje": 30
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 40
				},
				{
					"numero": 70,
					"nivel": "28-30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-26",
					"porcentaje": 20
				},
				{
					"numero": 132,
					"nivel": 25,
					"porcentaje": 5
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super": {"nivel":15, "porcentaje":25}}
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
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				}
			]
		},
		{
			"nombre":"Ruta 14",
			"hierba": [
				{
					"numero": 16,
					"nivel": 26,
					"porcentaje": 15
				},
				{
					"numero": 17,
					"nivel": "28-30",
					"porcentaje": 5
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 40
				},
				{
					"numero": 70,
					"nivel": "30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-26",
					"porcentaje": 20
				},
				{
					"numero": 132,
					"nivel": 23,
					"porcentaje": 15
				}
			]
		},
		{
			"nombre":"Ruta 15",
			"hierba": [
				{
					"numero": 16,
					"nivel": 23,
					"porcentaje": 15
				},
				{
					"numero": 17,
					"nivel": "28-30",
					"porcentaje": 5
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 40
				},
				{
					"numero": 70,
					"nivel": "30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "26-28",
					"porcentaje": 20
				},
				{
					"numero": 132,
					"nivel": 26,
					"porcentaje": 15
				}
			]
		},
		{
			"nombre":"Ciudad Fucsia",
			"lema":"¡La ciudad rosa!",
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel":5, "porcentaje":100}, "super":{"nivel":15, "porcentaje":25}}
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
					"numero": 98,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
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
							"nivel": 22,
							"porcentaje": 25
						},
						{
							"numero": 30,
							"nivel": 31,
							"porcentaje": 10
						},
						{
							"numero": 33,
							"nivel": 31,
							"porcentaje": 5
						},
						{
							"numero": 47,
							"nivel": 30,
							"porcentaje":5
						},
						{
							"numero": 48,
							"nivel": 22,
							"porcentaje":15
						},
						{
							"numero": 102,
							"nivel": "24-25",
							"porcentaje":20
						},
						{
							"numero": 111,
							"nivel": 25,
							"porcentaje":15
						},
						{
							"numero": 113,
							"nivel": 23,
							"porcentaje":1
						},
						{
							"numero": 127,
							"nivel": 23,
							"porcentaje":4
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
							"numero": 54,
							"probabilidad": {"tipo":"cania", "super":{"nivel":15, "porcentaje":25}}
						},
						{
							"numero": 79,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						},
						{
							"numero": 98,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						},
						{
							"numero": 147,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						}
				]
			},
			{
				"nombre": "Zona 1",
				"hierba": [
					{
						"numero": 29,
						"nivel": 24,
						"porcentaje":25
					},
					{
						"numero": 30,
						"nivel": 33,
						"porcentaje":10
					},
					{
						"numero": 32,
						"nivel": 24,
						"porcentaje":5
					},
					{
						"numero": 46,
						"nivel": 22,
						"porcentaje":15
					},
					{
						"numero": 47,
						"nivel": 25,
						"porcentaje":5
					},
					{
						"numero": 84,
						"nivel": 26,
						"porcentaje":15
					},
					{
						"numero": 102,
						"nivel": "23-25",
						"porcentaje":20
					},
					{
						"numero": 115,
						"nivel": 25,
						"porcentaje":4
					},
					{
						"numero": 127,
						"nivel": 28,
						"porcentaje":1
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
						"numero": 54,
						"probabilidad": {"tipo":"cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero": 79,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero": 98,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero": 147,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					}
				]
			},
			{
				"nombre": "Zona 2",
				"hierba": [
					{
						"numero": 29,
						"nivel": 22,
						"porcentaje":25
					},
					{
						"numero": 30,
						"nivel": 30,
						"porcentaje":10
					},
					{
						"numero": 33,
						"nivel": 30,
						"porcentaje":5
					},
					{
						"numero": 46,
						"nivel": 22,
						"porcentaje":15
					},
					{
						"numero": 49,
						"nivel": 32,
						"porcentaje":5
					},
					{
						"numero": 102,
						"nivel": "25-27",
						"porcentaje":20
					},
					{
						"numero": 111,
						"nivel": 26,
						"porcentaje":15
					},
					{
						"numero": 113,
						"nivel": 26,
						"porcentaje":4
					},
					{
						"numero": 128,
						"nivel": 28,
						"porcentaje":1
					}
				],
				"pesca":[
					{
						"numero": 129,
						"probabilidad": {"tipo": "cania", "vieja": {"nivel":5, "porcentaje":100}}
					},
					{
						"numero":60,
						"probabilidad": {"tipo": "cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 118,
						"probabilidad": {"tipo": "cania", "buena":{"nivel":10, "porcentaje":50}}
					},
					{
						"numero": 54,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero": 79,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero": 98,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero": 147,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					}
				]
			},
			{
				"nombre": "Zona 3",
				"hierba": [
					{
						"numero": 29,
						"nivel": 25,
						"porcentaje":25
					},
					{
						"numero": 30,
						"nivel": 33,
						"porcentaje":10
					},
					{
						"numero": 32,
						"nivel": 25,
						"porcentaje":5
					},
					{
						"numero": 48,
						"nivel": 23,
						"porcentaje":15
					},
					{
						"numero": 49,
						"nivel": 31,
						"porcentaje":5
					},
					{
						"numero": 84,
						"nivel": 26,
						"porcentaje":15
					},
					{
						"numero": 102,
						"nivel": "24-26",
						"porcentaje":20
					},
					{
						"numero": 115,
						"nivel": 28,
						"porcentaje":1
					},
					{
						"numero": 128,
						"nivel": 26,
						"porcentaje":4
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
						"numero": 54,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero":79,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero":98,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
					},
					{
						"numero":147,
						"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
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
					"nivel": "21-23",
					"porcentaje": 35
				},
				{
					"numero": 25,
					"nivel": "20-24",
					"porcentaje": 25
				},
				{
					"numero": 81,
					"nivel": "21-23",
					"porcentaje": 25
				},
				{
					"numero": 82,
					"nivel": "32-35",
					"porcentaje": 10
				},
				{
					"numero": 26,
					"nivel": "33-36",
					"porcentaje": 5
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
			],
			"legendario": [
				{
					"numero": 145,
					"nivel":50
				}
			]
		},
		{
			"nombre":"Ciudad Azafrán",
			"lema":"La brillante y dorada tierra del comercio.",
			"escoger": [
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
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
							"numero": 86,
							"nivel": 30,
							"porcentaje": 25
						},
						{
							"numero": 98,
							"nivel": "28-30",
							"porcentaje":20
						},
						{
							"numero": 120,
							"nivel": "28-30",
							"porcentaje":19
						},
						{
							"numero": 79,
							"nivel": 28,
							"porcentaje":5
						},
						{
							"numero": 41,
							"nivel": 21,
							"porcentaje":10
						},
						{
							"numero": 54,
							"nivel": 30,
							"porcentaje":15
						},
						{
							"numero": 42,
							"nivel": 29,
							"porcentaje":5
						},
						{
							"numero": 80,
							"nivel": 38,
							"porcentaje":1
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando": [
						{
							"numero": 98,
							"nivel": "30-32",
							"porcentaje": 25
						},
						{
							"numero": 90,
							"nivel": 30,
							"porcentaje":15
						},
						{
							"numero": 120,
							"nivel": 30,
							"porcentaje":25
						},
						{
							"numero": 86,
							"nivel": "28-30",
							"porcentaje":15
						},
						{
							"numero": 54,
							"nivel": "28-30",
							"porcentaje":15
						},
						{
							"numero": 87,
							"nivel": 38,
							"porcentaje":4
						},
						{
							"numero": 99,
							"nivel": 37,
							"porcentaje":1
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [
						{
							"numero": 86,
							"nivel": "30-32",
							"porcentaje": 40
						},
						{
							"numero": 54,
							"nivel": "30-32",
							"porcentaje":25
						},
						{
							"numero": 98,
							"nivel": "28-30",
							"porcentaje":15
						},
						{
							"numero": 120,
							"nivel": 28,
							"porcentaje":5
						},
						{
							"numero": 90,
							"nivel": 30,
							"porcentaje":10
						},
						{
							"numero": 42,
							"nivel": 30,
							"porcentaje":4
						},
						{
							"numero": 55,
							"nivel": 37,
							"porcentaje":1
						}
					]
				},
				{
					"nombre": "Sótano 3",
					"caminando": [
						{
							"numero": 54,
							"nivel": "31-33",
							"porcentaje": 40
						},
						{
							"numero": 86,
							"nivel": "31-33",
							"porcentaje":25
						},
						{
							"numero": 120,
							"nivel": "29-31",
							"porcentaje":15
						},
						{
							"numero": 98,
							"nivel": "29-31",
							"porcentaje":15
						},
						{
							"numero": 99,
							"nivel": 39,
							"porcentaje":4
						},
						{
							"numero": 87,
							"nivel": 37,
							"porcentaje":1
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
							"numero": 90,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						},
						{
							"numero":116,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						},
						{
							"numero":120,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						}
					]
				},
				{
					"nombre": "Sótano 4",
					"caminando": [
						{
							"numero": 98,
							"nivel": "31-33",
							"porcentaje": 40
						},
						{
							"numero": 120,
							"nivel": "31-33",
							"porcentaje":25
						},
						{
							"numero": 54,
							"nivel": "29-31",
							"porcentaje":15
						},
						{
							"numero": 86,
							"nivel": "29-31",
							"porcentaje":15
						},
						{
							"numero": 55,
							"nivel": 39,
							"porcentaje":4
						},
						{
							"numero": 42,
							"nivel": 32,
							"porcentaje":1
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
							"numero": 90,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						},
						{
							"numero":116,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						},
						{
							"numero":120,
							"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
						}
					],
					"legendario": [
						{
							"numero": 144,
							"nivel": 50
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				}
			],
			"intercambio": [
				{
					"numero": 86,
					"necesita": 77
				},
				{
					"numero": 101,
					"necesita": 26
				},
				{
					"numero": 114,
					"necesita": 48
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
							"numero": 37,
							"nivel": 34,
							"porcentaje": 10
						},
						{
							"numero": 77,
							"nivel": "28-34",
							"porcentaje": 40
						},
						{
							"numero": 88,
							"nivel": "30-32",
							"porcentaje": 40
						},
						{
							"numero": 89,
							"nivel": 37,
							"porcentaje": 4
						},
						{
							"numero": 109,
							"nivel": 30,
							"porcentaje": 5
						},
						{
							"numero": 110,
							"nivel": 39,
							"porcentaje": 1
						}
					]
				},
				{
					"nombre":"Primera planta",
					"caminando":[
						{
							"numero": 37,
							"nivel": 32,
							"porcentaje": 25
						},
						{
							"numero": 77,
							"nivel": "28-32",
							"porcentaje": 25
						},
						{
							"numero": 88,
							"nivel": "30-34",
							"porcentaje": 40
						},
						{
							"numero": 89,
							"nivel": 39,
							"porcentaje": 4
						},
						{
							"numero": 109,
							"nivel": 30,
							"porcentaje": 5
						},
						{
							"numero": 110,
							"nivel": 37,
							"porcentaje": 1
						}
					]
				},
				{
					"nombre":"Segunda planta",
					"caminando":[
						{
							"numero": 37,
							"nivel": 33,
							"porcentaje": 15
						},
						{
							"numero": 77,
							"nivel": "32-36",
							"porcentaje": 14
						},
						{
							"numero": 88,
							"nivel": "31-35",
							"porcentaje": 40
						},
						{
							"numero": 89,
							"nivel": "38-40",
							"porcentaje": 15
						},
						{
							"numero": 109,
							"nivel": 34,
							"porcentaje": 5
						},
						{
							"numero": 110,
							"nivel": 42,
							"porcentaje": 1
						},
						{
							"numero": 126,
							"nivel": 34,
							"porcentaje": 10
						}
					]
				},
				{
					"nombre":"Sótano",
					"caminando":[
						{
							"numero": 37,
							"nivel": 35,
							"porcentaje": 15
						},
						{
							"numero": 77,
							"nivel": "32-34",
							"porcentaje": 15
						},
						{
							"numero": 88,
							"nivel": "31-33",
							"porcentaje": 50
						},
						{
							"numero": 89,
							"nivel": 40,
							"porcentaje": 10
						},
						{
							"numero": 109,
							"nivel": 35,
							"porcentaje": 5
						},
						{
							"numero": 110,
							"nivel": 42,
							"porcentaje": 1
						},
						{
							"numero": 126,
							"nivel": 38,
							"porcentaje": 4
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
					"nivel": "21-23",
					"porcentaje": 25
				},
				{
					"numero": 17,
					"nivel": "30-32",
					"porcentaje": 15
				},
				{
					"numero": 19,
					"nivel": "21-23",
					"porcentaje": 35
				},
				{
					"numero": 20,
					"nivel": 30,
					"porcentaje": 15
				},
				{
					"numero": 114,
					"nivel": "28-32",
					"porcentaje": 10
				}
			],
			"surf": [
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
					"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}, "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":116,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				},
				{
					"numero":120,
					"probabilidad": {"tipo": "cania", "super":{"nivel":15, "porcentaje":25}}
				}
			]
		},
		{
			"nombre":"Ruta 23",
			"hierba":[
				{
					"numero": 21,
					"nivel": 26,
					"porcentaje": 15
				},
				{
					"numero": 22,
					"nivel": "38-43",
					"porcentaje": 25
				},
				{
					"numero": 27,
					"nivel": 26,
					"porcentaje": 25
				},
				{
					"numero": 28,
					"nivel": 41,
					"porcentaje": 5
				},
				{
					"numero": 132,
					"nivel": "33-43",
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
					"numero": 80,
					"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
				},
				{
					"numero": 117,
					"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
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
							"nivel": "36-42",
							"porcentaje": 30
						},
						{
							"numero": 66,
							"nivel": 22,
							"porcentaje": 25
						},
						{
							"numero": 41,
							"nivel": 26,
							"porcentaje": 15
						},
						{
							"numero": 74,
							"nivel": 24,
							"porcentaje": 15
						},
						{
							"numero": 42,
							"nivel": 40,
							"porcentaje": 5
						},
						{
							"numero": 67,
							"nivel": 41,
							"porcentaje": 5
						},
						{
							"numero": 105,
							"nivel": 40,
							"porcentaje": 4
						},
						{
							"numero": 75,
							"nivel": 43,
							"porcentaje": 1
						}
					]
				},
				{
					"nombre": "Primera planta",
					"caminando": [
						{
							"numero": 66,
							"nivel": 24,
							"porcentaje": 25
						},
						{
							"numero": 95,
							"nivel": "42-45",
							"porcentaje": 20
						},
						{
							"numero": 41,
							"nivel": 22,
							"porcentaje": 15
						},
						{
							"numero": 74,
							"nivel": 26,
							"porcentaje": 15
						},
						{
							"numero": 49,
							"nivel": 40,
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": 41,
							"porcentaje": 5
						},
						{
							"numero": 67,
							"nivel": 42,
							"porcentaje": 5
						},
						{
							"numero": 75,
							"nivel": 43,
							"porcentaje": 5
						}
					],
					"legendario":[
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
							"nivel": "36-42",
							"porcentaje": 30
						},
						{
							"numero": 66,
							"nivel": 24,
							"porcentaje": 25
						},
						{
							"numero": 41,
							"nivel": 22,
							"porcentaje": 15
						},
						{
							"numero": 74,
							"nivel": 26,
							"porcentaje": 15
						},
						{
							"numero": 42,
							"nivel": 41,
							"porcentaje": 5
						},
						{
							"numero": 75,
							"nivel": 42,
							"porcentaje": 5
						},
						{
							"numero": 67,
							"nivel": 42,
							"porcentaje": 4
						},
						{
							"numero": 105,
							"nivel": 43,
							"porcentaje": 1
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
							"numero": 26,
							"nivel": 53,
							"porcentaje": 4
						},
						{
							"numero": 42,
							"nivel": 46,
							"porcentaje": 25
						},
						{
							"numero": 47,
							"nivel": 52,
							"porcentaje": 5
						},
						{
							"numero": 49,
							"nivel": 49,
							"porcentaje":10
						},
						{
							"numero": 64,
							"nivel": 49,
							"porcentaje":5
						},
						{
							"numero": 82,
							"nivel":46 ,
							"porcentaje":15
						},
						{
							"numero": 85,
							"nivel": 49,
							"porcentaje":10
						},
						{
							"numero": 97,
							"nivel": 46,
							"porcentaje":15
						},
						{
							"numero": 132,
							"nivel": 53,
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
							"probabilidad": {"tipo":"cania", "buena":{"nivel":10, "porcentaje":50}}
						},
						{
							"numero": 80,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						},
						{
							"numero": 99,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						},
						{
							"numero": 117,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						}
					]
				},
				{
					"nombre":"Primer piso",
					"caminando":[
						{
							"numero": 40,
							"nivel": 54,
							"porcentaje":5
						},
						{
							"numero": 49,
							"nivel": 51,
							"porcentaje": 15
						},
						{
							"numero": 64,
							"nivel": 51,
							"porcentaje": 15
						},
						{
							"numero": 85,
							"nivel": 51,
							"porcentaje": 25
						},
						{
							"numero": 101,
							"nivel": 52,
							"porcentaje":10
						},
						{
							"numero": 105,
							"nivel": 52,
							"porcentaje":10
						},
						{
							"numero": 112,
							"nivel":52,
							"porcentaje":10
						},
						{
							"numero": 132,
							"nivel": "55-60",
							"porcentaje":5
						},
						{
							"numero": 113,
							"nivel": 56,
							"porcentaje":5
						}
					]
				},
				{
					"nombre":"Sótano",
					"caminando":[
						{
							"numero": 28,
							"nivel": 57,
							"porcentaje":5
						},
						{
							"numero": 26,
							"nivel": 64,
							"porcentaje": 10
						},
						{
							"numero": 113,
							"nivel": 64,
							"porcentaje": 10
						},
						{
							"numero": 47,
							"nivel": 64,
							"porcentaje": 10
						},
						{
							"numero": 112,
							"nivel": 55,
							"porcentaje":25
						},
						{
							"numero": 101,
							"nivel": 55,
							"porcentaje":15
						},
						{
							"numero": 105,
							"nivel": 55,
							"porcentaje":15
						},
						{
							"numero": 132,
							"nivel": "63-67",
							"porcentaje":10
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
							"numero": 80,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						},
						{
							"numero": 99,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						},
						{
							"numero": 117,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo": "cania", "super":{"nivel":23, "porcentaje":25}}
						}
					],
					"legendario":[
						{
							"numero":150,
							"nivel": 70
						}
					]
				}
			]
		},
		{
			"nombre": "Evolución",
			"otros": [
				{
					"numero":	1
				},
				{
					"numero":	4
				},
				{
					"numero":	7
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
					"numero": 52
				},
				{
					"numero": 56
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
					"numero": 72
				},
				{
					"numero": 74
				},
				{
					"numero": 77
				},
				{
					"numero": 90
				},
				{
					"numero": 92
				},
				{
					"numero": 102
				},
				{
					"numero": 120
				},
				{
					"numero": 129
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
			"nombre": "Intercambiar de Rojo",
			"otros":[
				{
					"numero":23
				},
				{
					"numero":43
				},
				{
					"numero":56
				},
				{
					"numero":58
				},
				{
					"numero":123
				},
				{
					"numero":125
				}
			]
		},
		{
			"nombre": "Evento",
			"legendario": [
				{
					"numero": 151
				}
			]
		}
	]
}
