const verdehoja =	{
	"nombre": "verdehoja",
	"titulo": "Verde Hoja",
	"gen": 3,
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
		}
	],
	"lugares":
	[
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
			"surf": [
				{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}
		],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5-10",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 120,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 99,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				}
			]
		},
		{
			"nombre": "Ruta 1",
			"hierba": [
				{
					"numero": 16,
					"nivel": "2-5",
					"porcentaje": 50
				},
				{
					"numero": 19,
					"nivel": "2-4",
					"porcentaje": 50
				}
			]
		},
		{
			"nombre": "Ciudad Verde",
			"lema":"El paraíso del eterno verdor.",
			"surf": [{
				"numero": 79,
				"nivel": "20-40",
				"porcentaje": 100
			}
		],
			"pesca": [
			{
				"numero": 129,
				"probabilidad": {"tipo": "cania", "vieja": {"nivel": 5, "porcentaje": 100}, "buena": {"nivel": "5-15", "porcentaje": 20}}
			},
				{
					"numero": 60,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 118,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 61,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "20-30",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-35",
							"porcentaje": 5
						}
					}
				}
			]
		},
		{
			"nombre": "Ruta 22",
			"hierba": [{
					"numero": 19,
					"nivel": "2-5",
					"porcentaje": 45
				},
				{
					"numero": 21,
					"nivel": "3-5",
					"porcentaje": 10
				},
				{
					"numero": 56,
					"nivel": "2-5",
					"porcentaje": 45
				}
			],
			"surf": [{
				"numero": 79,
				"nivel": "20-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 60,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 118,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-35",
							"porcentaje": 5
						}
					}
				},
				{
					"numero": 61,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "20-30",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			]
		},
		{
			"nombre": "Ruta 2",
			"hierba": [
				{
					"numero": 16,
					"nivel": "2-5",
					"porcentaje": 45
				},
				{
					"numero": 19,
					"nivel": "2-5",
					"porcentaje": 45
				},
				{
					"numero": 10,
					"nivel": "4-5",
					"porcentaje": 5
				},
				{
					"numero": 13,
					"nivel": "4-5",
					"porcentaje": 5
				}
			],
			"intercambio": [
				{
				"numero": 122,

				"necesita": 63
			}]
		},
		{
			"nombre": "Bosque Verde",
			"hierba": [
				{
					"numero": 13,
					"nivel": "3-5",
					"porcentaje": 40
				},
				{
					"numero": 14,
					"nivel": 5,
					"porcentaje": 5
				},
				{
					"numero": 10,
					"nivel": "3-5",
					"porcentaje": 40
				},
				{
					"numero": 11,
					"nivel": "4-6",
					"porcentaje": 10
				},
				{
					"numero": 25,
					"nivel": "3-5",
					"porcentaje": 5
				}
			]
		},
		{
			"nombre": "Ruta 3",
			"hierba": [
				{
					"numero": 21,
					"nivel": "6-8",
					"porcentaje": 35
				},
				{
					"numero": 16,
					"nivel": "6-7",
					"porcentaje": 30
				},
				{
					"numero": 29,
					"nivel": "6-7",
					"porcentaje": 14
				},
				{
					"numero": 39,
					"nivel": "3-7",
					"porcentaje": 10
				},
				{
					"numero": 56,
					"nivel": "7",
					"porcentaje": 10
				},
				{
					"numero": 32,
					"nivel": "6",
					"porcentaje": 1
				}
			]
		},
		{
			"nombre": "Monte Moon",
			"plantas": [{
					"nombre": "Planta baja",
					"caminando": [{
							"numero": 41,
							"nivel": "7-10",
							"porcentaje": 69
						},
						{
							"numero": 74,
							"nivel": "7-9",
							"porcentaje": 25
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
					"nombre": "Sótano 1",
					"caminando": [{
						"numero": 46,
						"nivel": "5-10",
						"porcentaje": 100
					}]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [{
							"numero": 41,
							"nivel": "8-11",
							"porcentaje": 49
						},
						{
							"numero": 74,
							"nivel": "9-10",
							"porcentaje": 30
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
			"hierba": [{
					"numero": 19,
					"nivel": "8-12",
					"porcentaje": 35
				},
				{
					"numero": 21,
					"nivel": "8-12",
					"porcentaje": 35
				},
				{
					"numero": 27,
					"nivel": "6-12",
					"porcentaje": 25
				},
				{
					"numero": 56,
					"nivel": "10-12",
					"porcentaje": 5
				}
			],
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 84
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				}
			],
			"especial": [{
				"numero": 129,
				"nivel": 5,
				"observaciones": "Comprar por 500P"
			}]
		},
		{
			"nombre": "Ciudad Celeste",
			"lema": "¡Una misteriosa aura azulada la rodea!",
			"surf": [
				{
					"numero": 72,
					"nivel": "5-40",
					"porcentaje": 100
				}
			],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 84
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				}
			],
			"intercambio": [{
				"numero": 124,
				"necesita": 61
			}]
		},
		{
			"nombre": "Ruta 24",
			"hierba": [
				{
					"numero": 10,
					"nivel": 7,
					"porcentaje": 20
				},
				{
					"numero": 13,
					"nivel": 7,
					"porcentaje": 20
				},
				{
					"numero": 69,
					"nivel": "12-14",
					"porcentaje": 25
				},
				{
					"numero": 16,
					"nivel": "11-13",
					"porcentaje": 15
				},
				{
					"numero": 63,
					"nivel": "8-12",
					"porcentaje": 15
				},
				{
					"numero": 14,
					"nivel": 8,
					"porcentaje": 1
				},
				{
					"numero": 11,
					"nivel": 8,
					"porcentaje": 4
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "5-40",
					"porcentaje": 100
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 80
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						},
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				}
			]
		},
		{
			"nombre": "Ruta 25",
			"hierba": [{
					"numero": 69,
					"nivel": "12-14",
					"porcentaje": 25
				},
				{
					"numero": 10,
					"nivel": 8,
					"porcentaje": 20
				},
				{
					"numero": 13,
					"nivel": 8,
					"porcentaje": 20
				},
				{
					"numero": 16,
					"nivel": "11-13",
					"porcentaje": 15
				},
				{
					"numero": 63,
					"nivel": "9-13",
					"porcentaje": 15
				},
				{
					"numero": 14,
					"nivel": 9,
					"porcentaje": 1
				},
				{
					"numero": 11,
					"nivel": 9,
					"porcentaje": 4
				}
			],
			"surf": [{
				"numero": 79,
				"nivel": "20-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 60,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 118,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 61,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "20-30",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-35",
							"porcentaje": 5
						}
					}
				}
			]
		},
		{
			"nombre": "Ruta 5",
			"hierba": [
		    {
					"numero": 69,
					"nivel": "13-16",
					"porcentaje": 25
				},
				{
					"numero": 52,
					"nivel": "10-16",
					"porcentaje": 35
				},
				{
					"numero": 16,
					"nivel": "13-16",
					"porcentaje": 40
				}
			],
			"intercambio": [{
				"numero": 32,
				"necesita": 29
			}]
		},
		{
			"nombre": "Ruta 6",
			"hierba": [{
					"numero": 69,
					"nivel": "13-16",
					"porcentaje": 25
				},
				{
					"numero": 52,
					"nivel": "10-16",
					"porcentaje": 35
				},
				{
					"numero": 16,
					"nivel": "13-16",
					"porcentaje": 40
				}
			],
			"surf": [{
				"numero": 79,
				"nivel": "20-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 60,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 118,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 61,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "20-30",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-35",
							"porcentaje": 5
						}
					}
				}
			]
		},
		{
			"nombre": "Ciudad Carmín",
			"lema": "El puerto de los ocasos exquisitos.",
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						},
						"super": {
							"nivel": "25-33",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				},
				{
					"numero": 120,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			],
			"intercambio": [{
				"numero": 83,

				"necesita": 21
			}]
		},
		{
			"nombre": "Cueva Diglett",
			"caminando": [{
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
			"nombre": "Ruta 11",
			"hierba": [
				{
					"numero": 27,
					"nivel": "12-15",
					"porcentaje": 40
				},
				{
					"numero": 21,
					"nivel": "13-17",
					"porcentaje": 35
				},
				{
					"numero": 96,
					"nivel": "11-15",
					"porcentaje": 25
				}
			],
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 84
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				}
			],
			"intercambio": [{
				"numero": 33,
				"necesita": 30
			}]
		},
		{
			"nombre": "Ruta 9",
			"hierba": [{
					"numero": 19,
					"nivel": "14-17",
					"porcentaje": 40
				},
				{
					"numero": 21,
					"nivel": "13-17",
					"porcentaje": 35
				},
				{
					"numero": 27,
					"nivel": "11-17",
					"porcentaje": 25
				}
			]
		},
		{
			"nombre": "Ruta 10",
			"hierba": [
				{
					"numero": 27,
					"nivel": "11-17",
					"porcentaje": 25
				},
				{
					"numero": 21,
					"nivel": "13-17",
					"porcentaje": 35
				},
				{
					"numero": 100,
					"nivel": "14-17",
					"porcentaje": 40
				}
			],
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 84
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				}
			]
		},
		{
			"nombre": "Túnel Roca",
			"plantas": [{
					"nombre": "Planta baja",
					"caminando": [{
							"numero": 74,
							"nivel": "15-17",
							"porcentaje": 35
						},
						{
							"numero": 41,
							"nivel": "15-16",
							"porcentaje": 30
						},
						{
							"numero": 56,
							"nivel": "16-17",
							"porcentaje": 15
						},
						{
							"numero": 66,
							"nivel": "16-17",
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
					"nombre": "Sótano",
					"caminando": [{
							"numero": 74,
							"nivel": "15-17",
							"porcentaje": 35
						},
						{
							"numero": 41,
							"nivel": "15-16",
							"porcentaje": 30
						},
						{
							"numero": 56,
							"nivel": "16-17",
							"porcentaje": 15
						},
						{
							"numero": 66,
							"nivel": "17",
							"porcentaje": 10
						},
						{
							"numero": 95,
							"nivel": "13-17",
							"porcentaje": 10
						}
					],
					"roca": [{
							"numero": 74,
							"nivel": "5-30",
							"porcentaje": 95
						},
						{
							"numero": 75,
							"nivel": "25-40",
							"porcentaje": 5
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 8",
			"hierba": [
				{
					"numero": 16,
					"nivel": "18-20",
					"porcentaje": 30
				},
				{
					"numero": 52,
					"nivel": "18-20",
					"porcentaje": 30
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
				}
			]
		},
		{
			"nombre": "Ruta 7",
			"hierba": [{
					"numero": 52,
					"nivel": "17-20",
					"porcentaje": 40
				},
				{
					"numero": 16,
					"nivel": "19-22",
					"porcentaje": 30
				},
				{
					"numero": 69,
					"nivel": "19-22",
					"porcentaje": 20
				},
				{
					"numero": 37,
					"nivel": "18-20",
					"porcentaje": 10
				}
			]
		},
		{
			"nombre": "Ciudad Azulona",
			"lema": "La ciudad de los sueños de arco iris.",
			"surf": [
				{
					"numero": 79,
					"nivel": "5-40",
					"porcentaje": 99
				},
				{
					"numero": 109,
					"nivel": "30-40",
					"porcentaje": 1
				}
			],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 100
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 99
						}
					}
				},
				{
					"numero": 88,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "30-40",
							"porcentaje": 1
						}
					}
				}
			],
			"regalo": [{
				"numero": 133,
				"nivel": 25
			}],
			"casino": [{
					"numero": 35,
					"nivel": 12,
					"fichas": 750
				},
				{
					"numero": 63,
					"nivel": 7,
					"fichas": 120
				},
				{
					"numero": 127,
					"nivel": 18,
					"fichas": 2500
				},
				{
					"numero": 137,
					"nivel": 18,
					"fichas": 6500
				},
				{
					"numero": 147,
					"nivel": 24,
					"fichas": 4600
				}
			]
		},
		{
			"nombre": "Torre Pokémon",
			"plantas": [
				{
					"nombre": "Planta 2",
					"caminando": [{
							"numero": 92,
							"nivel": "13-19",
							"porcentaje": 90
						},
						{
							"numero": 104,
							"nivel": "15-17",
							"porcentaje": 9
						},
						{
							"numero": 93,
							"nivel": "20",
							"porcentaje": 1
						}
					]
				},
				{
					"nombre": "Planta 3 y 4",
					"caminando": [{
							"numero": 92,
							"nivel": "13-19",
							"porcentaje": 86
						},
						{
							"numero": 104,
							"nivel": "15-17",
							"porcentaje": 9
						},
						{
							"numero": 93,
							"nivel": "20",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre": "Planta 5",
					"caminando": [{
							"numero": 92,
							"nivel": "14-19",
							"porcentaje": 85
						},
						{
							"numero": 104,
							"nivel": "15-17",
							"porcentaje": 9
						},
						{
							"numero": 93,
							"nivel": "21-23",
							"porcentaje": 6
						}
					]
				},
				{
					"nombre": "Planta 6",
					"caminando": [{
							"numero": 92,
							"nivel": "15-19",
							"porcentaje": 75
						},
						{
							"numero": 104,
							"nivel": "17-19",
							"porcentaje": 10
						},
						{
							"numero": 93,
							"nivel": "23-25",
							"porcentaje": 15
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 12",
			"hierba": [
				{
					"numero": 16,
					"nivel": "23-27",
					"porcentaje": 30
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 35
				},
				{
					"numero": 70,
					"nivel": "28-30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-26",
					"porcentaje": 30
				}
			],
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 84
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			],
			"especial": [{
				"numero": 143,
				"nivel": 30
			}]
		},
		{
			"nombre": "Ruta 13",
			"hierba": [{
					"numero": 16,
					"nivel": "25-27",
					"porcentaje": 20
				},
				{
					"numero": 17,
					"nivel": 29,
					"porcentaje": 5
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 35
				},
				{
					"numero": 70,
					"nivel": "28-30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-26",
					"porcentaje": 30
				},
				{
					"numero": 132,
					"nivel": 25,
					"porcentaje": 5
				}
			],
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 84
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			]
		},
		{
			"nombre": "Ruta 14",
			"hierba": [{
					"numero": 16,
					"nivel": 27,
					"porcentaje": 10
				},
				{
					"numero": 17,
					"nivel": 29,
					"porcentaje": 5
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 35
				},
				{
					"numero": 70,
					"nivel": "30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-26",
					"porcentaje": 30
				},
				{
					"numero": 132,
					"nivel": 23,
					"porcentaje": 15
				}
			]
		},
		{
			"nombre": "Ruta 15",
			"hierba": [{
					"numero": 16,
					"nivel": "25-27",
					"porcentaje": 20
				},
				{
					"numero": 17,
					"nivel": 29,
					"porcentaje": 5
				},
				{
					"numero": 69,
					"nivel": "22-26",
					"porcentaje": 35
				},
				{
					"numero": 70,
					"nivel": "28-30",
					"porcentaje": 5
				},
				{
					"numero": 48,
					"nivel": "24-26",
					"porcentaje": 30
				},
				{
					"numero": 132,
					"nivel": 25,
					"porcentaje": 5
				}
			]
		},
		{
			"nombre": "Ciudad Fucsia",
			"lema": "¡La ciudad rosa!",
			"surf": [{
				"numero": 79,
				"nivel": "20-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 60,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						}
					}
				},
				{
					"numero": 118,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-35",
							"porcentaje": 5
						}
					}
				},
				{
					"numero": 119,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "20-30",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			]
		},
		{
			"nombre": "Zona Safari",
			"lema": "¡Atrapa Pokémon!",
			"plantas": [{
					"nombre": "Zona Central",
					"hierba": [{
							"numero": 29,
							"nivel": 22,
							"porcentaje": 20
						},
						{
							"numero": 102,
							"nivel": "24-25",
							"porcentaje": 20
						},
						{
							"numero": 111,
							"nivel": 25,
							"porcentaje": 20
						},
						{
							"numero": 48,
							"nivel": 22,
							"porcentaje": 15
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
							"porcentaje": 5
						},
						{
							"numero": 127,
							"nivel": 23,
							"porcentaje": 4
						},
						{
							"numero": 113,
							"nivel": 23,
							"porcentaje": 1
						}
					],
					"surf": [{
						"numero": 79,
						"nivel": "20-40",
						"porcentaje": 100
					}],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 119,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 147,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 148,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Zona 1",
					"hierba": [{
							"numero": 29,
							"nivel": 24,
							"porcentaje": 20
						},
						{
							"numero": 84,
							"nivel": 26,
							"porcentaje": 20
						},
						{
							"numero": 102,
							"nivel": "23-25",
							"porcentaje": 20
						},
						{
							"numero": 46,
							"nivel": 22,
							"porcentaje": 15
						},
						{
							"numero": 30,
							"nivel": 33,
							"porcentaje": 10
						},
						{
							"numero": 32,
							"nivel": 24,
							"porcentaje": 5
						},
						{
							"numero": 47,
							"nivel": 25,
							"porcentaje": 5
						},
						{
							"numero": 115,
							"nivel": 25,
							"porcentaje": 4
						},
						{
							"numero": 127,
							"nivel": 28,
							"porcentaje": 1
						}
					],
					"surf": [{
						"numero": 79,
						"nivel": "20-40",
						"porcentaje": 100
					}],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 119,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 147,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 148,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Zona 2",
					"hierba": [{
							"numero": 29,
							"nivel": 30,
							"porcentaje": 20
						},
						{
							"numero": 102,
							"nivel": "25-27",
							"porcentaje": 20
						},
						{
							"numero": 111,
							"nivel": 26,
							"porcentaje": 20
						},
						{
							"numero": 46,
							"nivel": 23,
							"porcentaje": 15
						},
						{
							"numero": 30,
							"nivel": 30,
							"porcentaje": 10
						},
						{
							"numero": 33,
							"nivel": 30,
							"porcentaje": 5
						},
						{
							"numero": 49,
							"nivel": 32,
							"porcentaje": 5
						},
						{
							"numero": 113,
							"nivel": 26,
							"porcentaje": 4
						},
						{
							"numero": 128,
							"nivel": 28,
							"porcentaje": 1
						}
					],
					"surf": [{
						"numero": 79,
						"nivel": "20-40",
						"porcentaje": 100
					}],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 25
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 119,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 147,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 148,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Zona 3",
					"hierba": [
						{
							"numero": 29,
							"nivel": 22,
							"porcentaje": 20
						},
						{
							"numero": 84,
							"nivel": 26,
							"porcentaje": 20
						},
						{
							"numero": 102,
							"nivel": "25-27",
							"porcentaje": 20
						},
						{
							"numero": 48,
							"nivel": 23,
							"porcentaje": 15
						},
						{
							"numero": 30,
							"nivel": 30,
							"porcentaje": 10
						},
						{
							"numero": 32,
							"nivel": 30,
							"porcentaje": 5
						},
						{
							"numero": 49,
							"nivel": 32,
							"porcentaje": 5
						},
						{
							"numero": 128,
							"nivel": 25,
							"porcentaje": 4
						},
						{
							"numero": 115,
							"nivel": 28,
							"porcentaje": 1
						}
					],
					"surf": [{
						"numero": 79,
						"nivel": "20-40",
						"porcentaje": 100
					}],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 25
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 119,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 147,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 148,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 18",
			"hierba": [{
					"numero": 19,
					"nivel": 22,
					"porcentaje": 5
				},
				{
					"numero": 20,
					"nivel": "25-29",
					"porcentaje": 15
				},
				{
					"numero": 21,
					"nivel": "20-22",
					"porcentaje": 30
				},
				{
					"numero": 22,
					"nivel": "25-29",
					"porcentaje": 15
				},
				{
					"numero": 84,
					"nivel": "24-28",
					"porcentaje": 35
				}
			],
			"intercambio": [{
				"numero": 108,
				"necesita": 80
			}]
		},
		{
			"nombre": "Ruta 17",
			"hierba": [{
					"numero": 19,
					"nivel": 22,
					"porcentaje": 5
				},
				{
					"numero": 20,
					"nivel": "25-29",
					"porcentaje": 25
				},
				{
					"numero": 21,
					"nivel": "20-22",
					"porcentaje": 30
				},
				{
					"numero": 22,
					"nivel": "25-27",
					"porcentaje": 5
				},
				{
					"numero": 84,
					"nivel": "24-28",
					"porcentaje": 35
				}
			]
		},
		{
			"nombre": "Ruta 16",
			"hierba": [{
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
					"porcentaje": 30
				},
				{
					"numero": 84,
					"nivel": "18-22",
					"porcentaje": 35
				}
			],
			"especial": [{
				"numero": 143,
				"nivel": 30
			}]
		},
		{
			"nombre": "Ciudad Azafrán",
			"lema": "La brillante y dorada tierra del comercio.",
			"regalo": [{
					"numero": 106,
					"nivel": 25
				},
				{
					"numero": 107,
					"nivel": 25
				}
			],
			"regalo": [{
				"numero": 131,
				"nivel": 15
			}]
		},
		{
			"nombre": "Ruta 19",
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 80
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				},
				{
					"numero": 99,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			]
		},
		{
			"nombre": "Ruta 20",
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 80
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				},
				{
					"numero": 99,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			]
		},
		{
			"nombre": "Islas Espuma",
			"plantas": [{
					"nombre": "Planta baja",
					"caminando": [{
							"numero": 79,
							"nivel": "26-33",
							"porcentaje": 55
						},
						{
							"numero": 41,
							"nivel": "22-26",
							"porcentaje": 34
						},
						{
							"numero": 42,
							"nivel": "26-30",
							"porcentaje": 11
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando": [{
							"numero": 79,
							"nivel": "29-31",
							"porcentaje": 40
						},
						{
							"numero": 41,
							"nivel": "22-26",
							"porcentaje": 34
						},
						{
							"numero": 42,
							"nivel": "26-30",
							"porcentaje": 11
						},
						{
							"numero": 86,
							"nivel": 28,
							"porcentaje": 10
						},
						{
							"numero": 80,
							"nivel": "33-35",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [{
							"numero": 79,
							"nivel": "30-32",
							"porcentaje": 40
						},
						{
							"numero": 41,
							"nivel": "22-24",
							"porcentaje": 20
						},
						{
							"numero": 42,
							"nivel": "26-30",
							"porcentaje": 10
						},
						{
							"numero": 86,
							"nivel": "30-32",
							"porcentaje": 20
						},
						{
							"numero": 80,
							"nivel": "32-34",
							"porcentaje": 10
						}
					]
				},
				{
					"nombre": "Sótano 3",
					"caminando": [{
							"numero": 79,
							"nivel": "30-32",
							"porcentaje": 20
						},
						{
							"numero": 41,
							"nivel": 24,
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": "26-30",
							"porcentaje": 10
						},
						{
							"numero": 86,
							"nivel": "30-32",
							"porcentaje": 40
						},
						{
							"numero": 80,
							"nivel": "32-34",
							"porcentaje": 15
						},
						{
							"numero": 87,
							"nivel": "32-34",
							"porcentaje": 5
						}
					],
					"surf": [{
							"numero": 79,
							"nivel": "30-40",
							"porcentaje": 4
						},
						{
							"numero": 80,
							"nivel": "35-40",
							"porcentaje": 1
						},
						{
							"numero": 98,
							"nivel": "25-30",
							"porcentaje": 30
						},
						{
							"numero": 86,
							"nivel": "25-35",
							"porcentaje": 60
						},
						{
							"numero": 87,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-30",
									"porcentaje": 80
								}
							}
						},
						{
							"numero": 116,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 16
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 4
								}
							}
						}
					]
				},
				{
					"nombre": "Sótano 4",
					"caminando": [{
							"numero": 79,
							"nivel": "32",
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": "26-30",
							"porcentaje": 15
						},
						{
							"numero": 86,
							"nivel": "30-34",
							"porcentaje": 50
						},
						{
							"numero": 80,
							"nivel": "32-34",
							"porcentaje": 15
						},
						{
							"numero": 87,
							"nivel": "34-36",
							"porcentaje": 10
						},
						{
							"numero": 144,
							"nivel": 50
						}
					],
					"surf": [{
							"numero": 79,
							"nivel": "30-40",
							"porcentaje": 4
						},
						{
							"numero": 80,
							"nivel": "35-40",
							"porcentaje": 1
						},
						{
							"numero": 98,
							"nivel": "25-30",
							"porcentaje": 30
						},
						{
							"numero": 86,
							"nivel": "25-35",
							"porcentaje": 60
						},
						{
							"numero": 87,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-30",
									"porcentaje": 80
								}
							}
						},
						{
							"numero": 116,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 16
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 4
								}
							}
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 21",
			"hierba": [{
				"numero": 114,
				"nivel": "17-28",
				"porcentaje": 100
			}],
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-35",
							"porcentaje": 80
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				},
				{
					"numero": 99,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			]
		},
		{
			"nombre": "Isla Canela",
			"lema": "La feroz ciudad del ardiente deseo.",
			"surf": [{
				"numero": 72,
				"nivel": "5-40",
				"porcentaje": 100
			}],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 116,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 120,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 80,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
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
			"nombre": "Mansión Pokémon",
			"plantas": [
				{
					"nombre": "Planta baja, planta 1 y 2",
					"caminando": [
						{
							"numero": 19,
							"nivel": "26-28",
							"porcentaje": 15
						},
						{
							"numero": 20,
							"nivel": "32-36",
							"porcentaje": 30
						},
						{
							"numero": 88,
							"nivel": "28-30",
							"porcentaje": 30
						},
						{
							"numero": 37,
							"nivel": "30-32",
							"porcentaje": 15
						},
						{
							"numero": 109,
							"nivel": 28,
							"porcentaje": 5
						},
						{
							"numero": 89,
							"nivel": 32,
							"porcentaje": 5
						}
					]
				},
				{
					"nombre": "Sótano",
					"caminando": [
						{
							"numero": 19,
							"nivel": 26,
							"porcentaje": 5
						},
						{
							"numero": 20,
							"nivel": "34-38",
							"porcentaje": 30
						},
						{
							"numero": 88,
							"nivel": "28-30",
							"porcentaje": 30
						},
						{
							"numero": 37,
							"nivel": "30-32",
							"porcentaje": 15
						},
						{
							"numero": 132,
							"nivel": 30,
							"porcentaje": 10
						},
						{
							"numero": 109,
							"nivel": 28,
							"porcentaje": 5
						},
						{
							"numero": 89,
							"nivel": 34,
							"porcentaje": 5
						}
					]
				}
			]
		},
		{
			"nombre": "Isla Prima",
			"lema": "Punto de encuentro para todos.",
			"surf":[
				{
					"numero": 72,
					"nivel": "5-40",
					"porcentaje": 95
				},
				{
					"numero": 73,
					"nivel": "35-40",
					"porcentaje": 5
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 80
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 120,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 99,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				}
			],
			"plantas":[
				{
					"nombre": "Playa Tesoro",
					"hierba": [
						{
							"numero": 21,
							"nivel": "31-32",
							"porcentaje": 35
						},
						{
							"numero":114,
							"nivel": "33-35",
							"porcentaje": 30
						},
						{
							"numero": 22,
							"nivel": "36-40",
							"porcentaje": 20
						},
						{
							"numero": 52,
							"nivel": 31,
							"porcentaje": 10
						},
						{
							"numero": 53,
							"nivel": "37-40",
							"porcentaje": 5
						},
						{
							"numero": 79,
							"nivel": 31,
							"porcentaje": 5
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 95
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 80
								}
							}
						},
						{
							"numero": 120,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						}
					]
				},
				{
					"nombre": "Camino Candente",
					"hierba": [
						{
							"numero": 77,
							"nivel": "31-34",
							"porcentaje": 30
						},
						{
							"numero": 21,
							"nivel": "30-32",
							"porcentaje": 25
						},
						{
							"numero": 22,
							"nivel": 36,
							"porcentaje": 10
						},
						{
							"numero": 52,
							"nivel": 31,
							"porcentaje": 10
						},
						{
							"numero": 74,
							"nivel": 31,
							"porcentaje": 10
						},
						{
							"numero": 53,
							"nivel": "37-40",
							"porcentaje": 5
						},
						{
							"numero": 78,
							"nivel": "37-40",
							"porcentaje":5
						},
						{
							"numero": 79,
							"nivel": 34,
							"porcentaje": 5
						}
					],
					"roca":[
						{
							"numero": 74,
							"nivel": "5-30",
							"porcentaje": 95
						},
						{
							"numero": 75,
							"nivel": "25-40",
							"porcentaje": 5
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 95
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 80
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						}
					]
				},
				{
					"nombre": "Monte Ascuas",
					"plantas": [
						{
							"nombre":"Ladera",
							"hierba":[
										{
											"numero": 77,
											"nivel": "30-36",
											"porcentaje": 35
										},
										{
											"numero": 22,
											"nivel": "38-40",
											"porcentaje":25
										},
										{
											"numero": 21,
											"nivel": "30-32",
											"porcentaje": 10
										},
										{
											"numero": 66,
											"nivel": 35,
											"porcentaje":10
										},
										{
											"numero": 74,
											"nivel": 33,
											"porcentaje":10
										},
										{
											"numero": 78,
											"nivel": "39-42",
											"porcentaje": 5
										},
										{
											"numero": 126,
											"nivel": "38-40",
											"porcentaje": 5
										}
								]
						},
						{
							"nombre": "Entrada y salida al desfiladero",
							"caminando": [
								{
									"numero": 66,
									"nivel": "31-39",
									"porcentaje": 95
								},
								{
									"numero": 77,
									"nivel": "29-37",
									"porcentaje": 5
								}
							],
							"roca":[
									{
										"numero": 74,
										"nivel": "5-30",
										"porcentaje": 95
									},
									{
										"numero": 75,
										"nivel": "25-40",
										"porcentaje": 5
									}
							]
						},
						{
							"nombre": "Desfiladero",
							"caminando": [
								{
									"numero": 66,
									"nivel": "32-36",
									"porcentaje": 40
								},
								{
									"numero": 74,
									"nivel": "30-34",
									"porcentaje": 40
								},
								{
									"numero": 67,
									"nivel": "38-40",
									"porcentaje": 20
								}
							],
							"roca":[
									{
										"numero": 74,
										"nivel": "5-30",
										"porcentaje": 65
									},
									{
										"numero": 75,
										"nivel": "25-40",
										"porcentaje": 35
									}
							]
						},
						{
							"nombre": "Cima",
							"caminando":[
								{
									"numero": 146,
									"nivel": 50
								}
							]
						},
						{
							"nombre": "Cueva",
							"plantas":[
								{
									"nombre":"Planta baja, sótano 4 y 5",
									"caminando":[
										{
											"numero": 74,
											"nivel": "34-42",
											"porcentaje":70
										},
										{
											"numero": 218,
											"nivel": "24-30",
											"porcentaje": 30
										}
									],
									"roca":[
											{
												"numero": 74,
												"nivel": "5-30",
												"porcentaje": 65
											},
											{
												"numero": 75,
												"nivel": "25-40",
												"porcentaje": 35
											}
									]
								},
								{
									"nombre":"Sótano 1 y 2",
									"caminando":[
										{
											"numero": 74,
											"nivel": "40-44",
											"porcentaje":40
										},
										{
											"numero": 218,
											"nivel": "22-32",
											"porcentaje": 60
										}
									],
									"roca":[
											{
												"numero": 74,
												"nivel": "5-30",
												"porcentaje": 65
											},
											{
												"numero": 75,
												"nivel": "25-40",
												"porcentaje": 35
											}
									]
								},
								{
									"nombre":"Sótano 3",
									"caminando":[
										{
											"numero": 218,
											"nivel": "18-36",
											"porcentaje": 100
										}
									],
									"roca":[
											{
												"numero": 218,
												"nivel": "15-35",
												"porcentaje": 90
											},
											{
												"numero": 219,
												"nivel": "25-45",
												"porcentaje": 10
											}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"nombre": "Isla Secunda",
			"lema": "Isla ideal para dos.",
			"plantas":[
				{
					"nombre": "Cabo Extremo",
					"hierba": [
						{
							"numero": 69,
							"nivel": "30-32",
							"porcentaje": 30
						},
						{
							"numero": 21,
							"nivel": 31,
							"porcentaje": 20
						},
						{
							"numero": 70,
							"nivel": "36-38",
							"porcentaje": 15
						},
						{
							"numero": 22,
							"nivel": 36,
							"porcentaje": 10
						},
						{
							"numero": 52,
							"nivel": 31,
							"porcentaje": 10
						},
						{
							"numero": 53,
							"nivel": "37-40",
							"porcentaje": 5
						},
						{
							"numero": 79,
							"nivel": 31,
							"porcentaje":5
						},
						{
							"numero": 80,
							"nivel": "37-40",
							"porcentaje":5
						}
					],
					"surf":[
						{
							"numero": 79,
							"nivel": "5-40",
							"porcentaje": 95
						},
						{
							"numero": 80,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 5
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 61,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						}
					]
				}
			]
		},
		{
			"nombre": "Isla Tera",
			"lema": "Isla familiar para familiares.",
			"plantas":[
				{
					"nombre":"Puerto Isla Tera",
					"hierba":[
						{
							"numero": 206,
							"nivel":"5-35",
							"porcentaje": 100
						}
					]
				},
				{
					"nombre": "Puente Unión",
					"hierba":[
						{
							"numero": 16,
							"nivel": "29-32",
							"porcentaje": 30
						},
						{
							"numero": 69,
							"nivel": 31,
							"porcentaje": 20
						},
						{
							"numero": 17,
							"nivel": "34-40",
							"porcentaje": 15
						},
						{
							"numero": 70,
							"nivel": 36,
							"porcentaje": 10
						},
						{
							"numero": 52,
							"nivel": 31,
							"porcentaje": 10
						},
						{
							"numero": 48,
							"nivel": 34,
							"porcentaje": 5
						},
						{
							"numero": 53,
							"nivel": "37-40",
							"porcentaje": 5
						},
						{
							"numero": 79,
							"nivel": 31,
							"porcentaje": 5
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 95
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 80
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Bosque Baya",
					"hierba": [
						{
							"numero": 17,
							"nivel": 37,
							"porcentaje": 20
						},
						{
							"numero": 70,
							"nivel": 35,
							"porcentaje": 20
						},
						{
							"numero": 16,
							"nivel": 32,
							"porcentaje": 10
						},
						{
							"numero": 69,
							"nivel": 30,
							"porcentaje": 10
						},
						{
							"numero": 48,
							"nivel": 34,
							"porcentaje":10
						},
						{
							"numero": 96,
							"nivel": 34,
							"porcentaje": 10
						},
						{
							"numero": 49,
							"nivel": "37-40",
							"porcentaje":5
						},
						{
							"numero": 79,
							"nivel": 31,
							"porcentaje": 5
						},
						{
							"numero": 97,
							"nivel": "37-40",
							"porcentaje": 5
						},
						{
							"numero": 102,
							"nivel": 35,
							"porcentaje": 5
						}
					],
					"surf":[
						{
							"numero": 79,
							"nivel": "5-40",
							"porcentaje": 95
						},
						{
							"numero": 80,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 119,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 5
								}
							}
						}
					],
					"especial":[
						{
							"numero":97,
							"nivel": 30
						}
					]
				}
			]
		},
		{
			"nombre": "Central de energía",
			"caminando": [{
					"numero": 81,
					"nivel": "22-25",
					"porcentaje": 30
				},
				{
					"numero": 100,
					"nivel": "22-25",
					"porcentaje": 30
				},
				{
					"numero": 25,
					"nivel": "22-26",
					"porcentaje": 25
				},
				{
					"numero": 82,
					"nivel": "31-34",
					"porcentaje": 15
				},
				{
					"numero": 145,
					"nivel": 50
				}
			],
			"especial": [{
					"numero": 101,
					"nivel": 34
				}
			]
		},
		{
			"nombre": "Ruta 23",
			"hierba": [{
					"numero": 21,
					"nivel": "32-34",
					"porcentaje": 15
				},
				{
					"numero": 22,
					"nivel": "40-44",
					"porcentaje": 25
				},
				{
					"numero": 27,
					"nivel": "32-34",
					"porcentaje": 20
				},
				{
					"numero": 28,
					"nivel": 44,
					"porcentaje": 5
				},
				{
					"numero": 56,
					"nivel": "32-34",
					"porcentaje": 30
				},
				{
					"numero": 57,
					"nivel": 42,
					"porcentaje": 5
				}
			],
			"surf": [{
				"numero": 79,
				"nivel": "20-40",
				"porcentaje": 100
			}],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": 5,
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 60,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 118,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-35",
							"porcentaje": 5
						}
					}
				},
				{
					"numero": 61,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "20-30",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				}
			]
		},
		{
			"nombre": "Calle Victoria",
			"plantas": [{
					"nombre": "Planta baja",
					"caminando": [{
							"numero": 95,
							"nivel": "40-46",
							"porcentaje": 30
						},
						{
							"numero": 66,
							"nivel":32,
							"porcentaje": 20
						},
						{
							"numero": 74,
							"nivel": 32,
							"porcentaje": 20
						},
						{
							"numero": 41,
							"nivel": 32,
							"porcentaje": 10
						},
						{
							"numero": 28,
							"nivel": 44,
							"porcentaje": 5
						},
						{
							"numero": 42,
							"nivel": 44,
							"porcentaje": 5
						},
						{
							"numero": 67,
							"nivel": "44-46",
							"porcentaje": 5
						},
						{
							"numero": 105,
							"nivel": "44-46",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre": "Primera planta",
					"caminando": [{
							"numero": 95,
							"nivel": "45-48",
							"porcentaje": 20
						},
						{
							"numero": 66,
							"nivel":34,
							"porcentaje": 20
						},
						{
							"numero": 74,
							"nivel": 34,
							"porcentaje": 20
						},
						{
							"numero": 41,
							"nivel": 34,
							"porcentaje": 10
						},
						{
							"numero": 57,
							"nivel": 42,
							"porcentaje": 10
						},
						{
							"numero": 28,
							"nivel": 46,
							"porcentaje": 5
						},
						{
							"numero": 42,
							"nivel": 46,
							"porcentaje": 5
						},
						{
							"numero": 67,
							"nivel": "46-48",
							"porcentaje": 5
						},
						{
							"numero": 105,
							"nivel": "46-48",
							"porcentaje": 5
						}
					]
				},
				{
					"nombre": "Segunda planta",
					"caminando": [{
							"numero": 95,
							"nivel": "40-46",
							"porcentaje": 30
						},
						{
							"numero": 66,
							"nivel":32,
							"porcentaje": 20
						},
						{
							"numero": 74,
							"nivel": 32,
							"porcentaje": 20
						},
						{
							"numero": 41,
							"nivel": 32,
							"porcentaje": 10
						},
						{
							"numero": 28,
							"nivel": 44,
							"porcentaje": 5
						},
						{
							"numero": 42,
							"nivel": 44,
							"porcentaje": 5
						},
						{
							"numero": 67,
							"nivel": "44-46",
							"porcentaje": 5
						},
						{
							"numero": 105,
							"nivel": "44-46",
							"porcentaje": 5
						}
					]
				}
			]
		},
		{
			"nombre": "Isla Quarta",
			"lema": "La isla cálida, azul y rara.",
			"surf":[
				{
					"numero": 79,
					"nivel": "5-35",
					"porcentaje": 30
				},
				{
					"numero": 183,
					"nivel": "5-25",
					"porcentaje": 70
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 118,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 60,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 60
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 61,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "20-30",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-35",
							"porcentaje": 5
						}
					}
				}
			],
			"plantas":[
				{
					"nombre":"Cueva Glaciada",
					"plantas": [
						{
							"nombre":"Planta baja (Sala 1)",
							"caminando":[
								{
									"numero": 86,
									"nivel": "43-47",
									"porcentaje": 40
								},
								{
									"numero": 42,
									"nivel": "45-48",
									"porcentaje":25
								},
								{
									"numero": 87,
									"nivel": "49-53",
									"porcentaje":20
								},
								{
									"numero": 41,
									"nivel": 40,
									"porcentaje": 10
								},
								{
									"numero": 79,
									"nivel": 41,
									"porcentaje":5
								}
							],
							"surf":[
								{
									"numero": 86,
									"nivel": "5-35",
									"porcentaje": 60
								},
								{
									"numero": 79,
									"nivel": "5-35",
									"porcentaje": 30
								},
								{
									"numero": 183,
									"nivel": "5-35",
									"porcentaje": 5
								},
								{
									"numero": 87,
									"nivel": "35-40",
									"porcentaje": 5
								}
							],
							"pesca": [
								{
									"numero": 129,
									"probabilidad": {
										"tipo": "cania",
										"vieja": {
											"nivel": "5",
											"porcentaje": 100
										},
										"buena": {
											"nivel": "5-15",
											"porcentaje": 20
										}
									}
								},
								{
									"numero": 118,
									"probabilidad": {
										"tipo": "cania",
										"buena": {
											"nivel": "5-15",
											"porcentaje": 60
										},
										"super": {
											"nivel": "15-25",
											"porcentaje": 40
										}
									}
								},
								{
									"numero": 60,
									"probabilidad": {
										"tipo": "cania",
										"buena": {
											"nivel": "5-15",
											"porcentaje": 60
										},
										"super": {
											"nivel": "15-25",
											"porcentaje": 40
										}
									}
								},
								{
									"numero": 61,
									"probabilidad": {
										"tipo": "cania",
										"super": {
											"nivel": "20-30",
											"porcentaje": 40
										}
									}
								},
								{
									"numero": 130,
									"probabilidad": {
										"tipo": "cania",
										"super": {
											"nivel": "15-25",
											"porcentaje": 15
										}
									}
								},
								{
									"numero": 79,
									"probabilidad": {
										"tipo": "cania",
										"super": {
											"nivel": "15-35",
											"porcentaje": 5
										}
									}
								}
							]
						},
						{
							"nombre":"Sótano y Planta baja (Sala 2)",
							"caminando":[
								{
									"numero": 220,
									"nivel": "23-31",
									"porcentaje": 50
								},
								{
									"numero": 42,
									"nivel": "45-48",
									"porcentaje":25
								},
								{
									"numero": 86,
									"nivel": "45",
									"porcentaje":10
								},
								{
									"numero": 41,
									"nivel": 40,
									"porcentaje": 10
								},
								{
									"numero": 215,
									"nivel": 30,
									"porcentaje":5
								}
							]
						},
						{
							"nombre":"Planta baja (Sala 3)",
							"caminando":[
								{
									"numero": 86,
									"nivel": "43-47",
									"porcentaje": 40
								},
								{
									"numero": 42,
									"nivel": "45-48",
									"porcentaje":25
								},
								{
									"numero": 87,
									"nivel": "49-53",
									"porcentaje":20
								},
								{
									"numero": 41,
									"nivel": 40,
									"porcentaje": 10
								},
								{
									"numero": 79,
									"nivel": 41,
									"porcentaje":5
								}
							],
							"surf":[
								{
									"numero": 72,
									"nivel": "5-45",
									"porcentaje": 95
								},
								{
									"numero": 73,
									"nivel": "35-45",
									"porcentaje": 4
								},
								{
									"numero": 131,
									"nivel": "30-45",
									"porcentaje": 1
								}
							],
							"pesca": [{
									"numero": 129,
									"probabilidad": {
										"tipo": "cania",
										"vieja": {
											"nivel": "5",
											"porcentaje": 100
										},
										"buena": {
											"nivel": "5-15",
											"porcentaje": 20
										}
									}
								},
								{
									"numero": 98,
									"probabilidad": {
										"tipo": "cania",
										"buena": {
											"nivel": "5-15",
											"porcentaje": 80
										},
										"super": {
											"nivel": "15-25",
											"porcentaje": 40
										}
									}
								},
								{
									"numero": 120,
									"probabilidad": {
										"tipo": "cania",
										"super": {
											"nivel": "15-25",
											"porcentaje": 40
										}
									}
								},
								{
									"numero": 99,
									"probabilidad": {
										"tipo": "cania",
										"super": {
											"nivel": "25-35",
											"porcentaje": 4
										}
									}
								},
								{
									"numero": 130,
									"probabilidad": {
										"tipo": "cania",
										"super": {
											"nivel": "15-25",
											"porcentaje": 15
										}
									}
								},
								{
									"numero": 79,
									"probabilidad": {
										"tipo": "cania",
										"super": {
											"nivel": "25-35",
											"porcentaje": 1
										}
									}
								}
							]
						}
					]
				}
			]
		},
		{
			"nombre": "Isla Inta",
			"lema": "Isla que marca el paso del tiempo.",
			"surf":[
				{
					"numero": 72,
					"nivel": "5-40",
					"porcentaje": 65
				},
				{
					"numero": 73,
					"nivel": "35-40",
					"porcentaje": 5
				},
				{
					"numero": 187,
					"nivel": "5-15",
					"porcentaje": 30
				},
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {
						"tipo": "cania",
						"vieja": {
							"nivel": "5",
							"porcentaje": 100
						},
						"buena": {
							"nivel": "5-15",
							"porcentaje": 20
						}
					}
				},
				{
					"numero": 98,
					"probabilidad": {
						"tipo": "cania",
						"buena": {
							"nivel": "5-15",
							"porcentaje": 80
						},
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 120,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 40
						}
					}
				},
				{
					"numero": 99,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 4
						}
					}
				},
				{
					"numero": 130,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "15-25",
							"porcentaje": 15
						}
					}
				},
				{
					"numero": 79,
					"probabilidad": {
						"tipo": "cania",
						"super": {
							"nivel": "25-35",
							"porcentaje": 1
						}
					}
				}
			],
			"plantas":[
				{
					"nombre":"Prado Isla Inta",
					"hierba": [
						{
							"numero": 161,
							"nivel": "10-15",
							"porcentaje": 30
						},
						{
							"numero": 16,
							"nivel": 44,
							"porcentaje": 20
						},
						{
							"numero": 17,
							"nivel": "48-50",
							"porcentaje": 15
						},
						{
							"numero": 187,
							"nivel": "10-15",
							"porcentaje": 15
						},
						{
							"numero": 52,
							"nivel": 41,
							"porcentaje": 10
						},
						{
							"numero": 53,
							"nivel": "47-50",
							"porcentaje": 5
						},
						{
							"numero": 79,
							"nivel": 41,
							"porcentaje": 5
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 65
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						},
						{
							"numero": 187,
							"nivel": "5-15",
							"porcentaje": 30
						},
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Pilar Recuerdo",
					"hierba": [
						{
							"numero": 187,
							"nivel": "6-16",
							"porcentaje": 100
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 65
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						},
						{
							"numero": 187,
							"nivel": "5-15",
							"porcentaje": 30
						},
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Aquarinto",
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 65
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						},
						{
							"numero": 187,
							"nivel": "5-15",
							"porcentaje": 30
						},
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					],
					"huevo":[
						{
							"numero": 175,
							"nivel": 5,
							"observaciones": "Alta amistad de pokémon de equipo y espacio libre"
						}
					]
				},
				{
					"nombre": "Lugar de Recreo",
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 65
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						},
						{
							"numero": 187,
							"nivel": "5-15",
							"porcentaje": 30
						},
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Cueva Perdida",
					"plantas": [
						{
							"nombre": "Entrada y salas de paso",
							"caminando": [
								{
									"numero": 93,
									"nivel": "44-52",
									"porcentaje": 30
								},
								{
									"numero": 92,
									"nivel": "38-40",
									"porcentaje": 25
								},
								{
									"numero": 41,
									"nivel": 37,
									"porcentaje": 20
								},
								{
									"numero": 42,
									"nivel": "41-43",
									"porcentaje": 20
								},
								{
									"numero": 200,
									"nivel": "20-22",
									"porcentaje": 5
								}
							]
						},
						{
							"nombre": "Salas con ítem",
							"caminando": [
								{
									"numero": 93,
									"nivel": "44-52",
									"porcentaje": 30
								},
								{
									"numero": 92,
									"nivel": 40,
									"porcentaje": 20
								},
								{
									"numero": 41,
									"nivel": 37,
									"porcentaje": 20
								},
								{
									"numero": 42,
									"nivel": 41,
									"porcentaje": 10
								},
								{
									"numero": 200,
									"nivel": "15-22",
									"porcentaje": 20
								}
							]
						}
					]
				}
			]
		},
		{
			"nombre": "Isla Exta",
			"lema": "Isla de la fortuna y el saber.",
			"plantas": [
				{
					"nombre": "Bosquejo",
					"hierba": [
						{
							"numero": 165,
							"nivel": "9-14",
							"porcentaje": 30
						},
						{
							"numero": 11,
							"nivel": 9,
							"porcentaje": 20
						},
						{
							"numero": 214,
							"nivel": "15-30",
							"porcentaje": 20
						},
						{
							"numero": 10,
							"nivel": 6,
							"porcentaje": 10
						},
						{
							"numero": 13,
							"nivel": 6,
							"porcentaje": 10
						},
						{
							"numero": 167,
							"nivel": "9-14",
							"porcentaje":5
						},
						{
							"numero": 14,
							"nivel": 9,
							"porcentaje":5
						}
					]
				},
				{
					"nombre": "Vía Verde",
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 65
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Vía Acuática",
					"hierba":[
						{
							"numero": 161,
							"nivel": "10-15",
							"porcentaje":30
						},
						{
							"numero": 21,
							"nivel": 44,
							"porcentaje": 20
						},
						{
							"numero": 22,
							"nivel": "48-50",
							"porcentaje":15
						},
						{
							"numero": 69,
							"nivel": 44,
							"porcentaje":10
						},
						{
							"numero": 52,
							"nivel": 41,
							"porcentaje":10
						},
						{
							"numero": 70,
							"nivel": 48,
							"porcentaje":5
						},
						{
							"numero": 53,
							"nivel": "47-50",
							"porcentaje":5
						},
						{
							"numero": 79,
							"nivel": 41,
							"porcentaje":5
						}
					],
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 95
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				},
				{
					"nombre": "Valle Ruinas",
					"hierba": [
						{
							"numero": 177,
							"nivel": "15-20",
							"porcentaje": 25
						},
						{
							"numero": 21,
							"nivel": 44,
							"porcentaje":20
						},
						{
							"numero": 22,
							"nivel": 49,
							"porcentaje": 10
						},
						{
							"numero": 52,
							"nivel": 43,
							"porcentaje": 10
						},
						{
							"numero": 193,
							"nivel": 18,
							"porcentaje": 10
						},
						{
							"numero": 183,
							"nivel": 15,
							"porcentaje": 10
						},
						{
							"numero": 53,
							"nivel": "49-52",
							"porcentaje": 5
						},
						{
							"numero": 79,
							"nivel": 41,
							"porcentaje": 5
						},
						{
							"numero": 202,
							"nivel": 25,
							"porcentaje": 5
						}
					],
					"surf":[
						{
							"numero": 183,
							"nivel": "5-25",
							"porcentaje": 100
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 61,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 5
								}
							}
						}
					]
				},
				{
					"nombre": "Isla Aislada",
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 95
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					]
				}
			]
		},
		{
			"nombre": "Isla Sétima",
			"lema": "Isla de aventura infinita.",
			"plantas": [
				{
					"nombre": "Entrada al Cañon",
					"hierba":[
						{
							"numero": 161,
							"nivel": "10-15",
							"porcentaje":30
						},
						{
							"numero": 21,
							"nivel": 44,
							"porcentaje": 20
						},
						{
							"numero": 22,
							"nivel": "48-50",
							"porcentaje": 15
						},
						{
							"numero": 231,
							"nivel": "10-15",
							"porcentaje": 15
						},
						{
							"numero": 52,
							"nivel": 41,
							"porcentaje": 10
						},
						{
							"numero": 53,
							"nivel": "47-50",
							"porcentaje": 5
						},
						{
							"numero": 79,
							"nivel": 41,
							"porcentaje": 5
						}
					]
				},
				{
					"nombre": "Cañón Sétano",
					"hierba":[
						{
							"numero": 74,
							"nivel": 46,
							"porcentaje": 20
						},
						{
							"numero": 231,
							"nivel": 15,
							"porcentaje": 20
						},
						{
							"numero": 22,
							"nivel": 50,
							"porcentaje": 15
						},
						{
							"numero": 52,
							"nivel": 43,
							"porcentaje": 10
						},
						{
							"numero": 104,
							"nivel": 46,
							"porcentaje": 10
						},
						{
							"numero": 105,
							"nivel": 52,
							"porcentaje": 10
						},
						{
							"numero": 53,
							"nivel": "49-52",
							"porcentaje": 5
						},
						{
							"numero": 95,
							"nivel": 79,
							"porcentaje": 5
						},
						{
							"numero": 246,
							"nivel": "15-20",
							"porcentaje": 5
						}
					],
					"roca":[
						{
							"numero": 74,
							"nivel": "25-40",
							"porcentaje": 65
						},
						{
							"numero": 75,
							"nivel": "30-50",
							"porcentaje": 35
						}
					]
				},
				{
					"nombre": "Ruinas Sete",
					"surf":[
						{
							"numero": 72,
							"nivel": "5-40",
							"porcentaje": 90
						},
						{
							"numero": 73,
							"nivel": "35-40",
							"porcentaje": 5
						},
						{
							"numero": 226,
							"nivel": "35-40",
							"porcentaje": 5
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": "5",
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 98,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 80
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 223,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 99,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 4
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "25-35",
									"porcentaje": 1
								}
							}
						}
					],
					"plantas": [
						{
							"nombre": "Cámara Anémuna",
							"caminando": [
								{
									"numero":201,
									"variedad": 0,
									"nivel": 25,
									"porcentaje": 99
								},
								{
									"numero":201,
									"variedad": 27,
									"nivel": 25,
									"porcentaje": 1
								}
							]
						},
						{
							"nombre": "Cámara Tulipdos",
							"caminando": [
								{
									"numero":201,
									"variedad": 2,
									"nivel": 25,
									"porcentaje": 50
								},
								{
									"numero":201,
									"variedad": 3,
									"nivel": 25,
									"porcentaje": 30
								},
								{
									"numero":201,
									"variedad": 7,
									"nivel": 25,
									"porcentaje": 14
								},
								{
									"numero":201,
									"variedad": 20,
									"nivel": 25,
									"porcentaje": 5
								},
								{
									"numero":201,
									"variedad": 14,
									"nivel": 25,
									"porcentaje": 1
								}
							]
						},
						{
							"nombre": "Cámara Trisante",
							"caminando": [
								{
									"numero":201,
									"variedad": 13,
									"nivel": 25,
									"porcentaje": 60
								},
								{
									"numero":201,
									"variedad": 18,
									"nivel": 25,
									"porcentaje": 30
								},
								{
									"numero":201,
									"variedad": 8,
									"nivel": 25,
									"porcentaje": 8
								},
								{
									"numero":201,
									"variedad": 4,
									"nivel": 25,
									"porcentaje": 2
								}
							]
						},
						{
							"nombre": "Cámara Quarciso",
							"caminando": [
								{
									"numero":201,
									"variedad": 15,
									"nivel": 25,
									"porcentaje": 40
								},
								{
									"numero":201,
									"variedad": 9,
									"nivel": 25,
									"porcentaje": 20
								},
								{
									"numero":201,
									"variedad": 11,
									"nivel": 25,
									"porcentaje": 20
								},
								{
									"numero":201,
									"variedad": 17,
									"nivel": 25,
									"porcentaje": 14
								},
								{
									"numero":201,
									"variedad": 16,
									"nivel": 25,
									"porcentaje": 6
								}
							]
						},
						{
							"nombre": "Cámara Hibinca",
							"caminando": [
								{
									"numero":201,
									"variedad": 24,
									"nivel": 25,
									"porcentaje": 40
								},
								{
									"numero":201,
									"variedad": 6,
									"nivel": 25,
									"porcentaje": 25
								},
								{
									"numero":201,
									"variedad": 19,
									"nivel": 25,
									"porcentaje": 20
								},
								{
									"numero":201,
									"variedad": 5,
									"nivel": 25,
									"porcentaje": 13
								},
								{
									"numero":201,
									"variedad": 10,
									"nivel": 25,
									"porcentaje": 2
								}
							]
						},
						{
							"nombre": "Cámara Seiris",
							"caminando": [
								{
									"numero":201,
									"variedad": 21,
									"nivel": 25,
									"porcentaje": 50
								},
								{
									"numero":201,
									"variedad": 22,
									"nivel": 25,
									"porcentaje": 30
								},
								{
									"numero":201,
									"variedad": 23,
									"nivel": 25,
									"porcentaje": 20
								},
								{
									"numero":201,
									"variedad": 12,
									"nivel": 25,
									"porcentaje": 8
								},
								{
									"numero":201,
									"variedad": 1,
									"nivel": 25,
									"porcentaje": 2
								}
							]
						},
						{
							"nombre": "Cámara Pasiete",
							"caminando": [
								{
									"numero":201,
									"variedad": 25,
									"nivel": 25,
									"porcentaje": 99
								},
								{
									"numero":201,
									"variedad": 26,
									"nivel": 25,
									"porcentaje": 1
								}
							]
						}
					]
				}
			]
		},
		{
			"nombre": "Cueva Celeste",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 42,
							"nivel": "46-55",
							"porcentaje": 14
						},
						{
							"numero": 47,
							"nivel": "49-58",
							"porcentaje": 25
						},
						{
							"numero": 57,
							"nivel": "52-61",
							"porcentaje": 11
						},
						{
							"numero": 67,
							"nivel": 46,
							"porcentaje": 10
						},
						{
							"numero": 82,
							"nivel": 49,
							"porcentaje": 20
						},
						{
							"numero": 132,
							"nivel": "52-61",
							"porcentaje": 11
						},
						{
							"numero": 101,
							"nivel": 58,
							"porcentaje": 5
						},
						{
							"numero": 202,
							"nivel": 55,
							"porcentaje": 4
						}
					],
					"roca": [
						{
							"numero": 74,
							"nivel": "30-50",
							"porcentaje": 65
						},
						{
							"numero": 75,
							"nivel": "40-55",
							"porcentaje": 35
						}
					],
					"surf":[
						{
							"numero": 79,
							"nivel": "30-50",
							"porcentaje": 65
						},
						{
							"numero": 80,
							"nivel": "40-55",
							"porcentaje": 35
						}
					],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 5
								}
							}
						},
						{
							"numero": 61,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 15
								}
							}
						}
					]
				},
				{
					"nombre": "Primer piso",
					"caminando": [
						{
							"numero": 42,
							"nivel": "49-58",
							"porcentaje": 25
						},
						{
							"numero": 47,
							"nivel": "52-61",
							"porcentaje": 14
						},
						{
							"numero": 64,
							"nivel": "55-64",
							"porcentaje": 11
						},
						{
							"numero": 67,
							"nivel": 49,
							"porcentaje": 20
						},
						{
							"numero": 82,
							"nivel": 52,
							"porcentaje": 10
						},
						{
							"numero": 132,
							"nivel": "55-64",
							"porcentaje": 11
						},
						{
							"numero": 101,
							"nivel": 61,
							"porcentaje": 4
						},
						{
							"numero": 202,
							"nivel": 58,
							"porcentaje": 5
						}
					],
					"roca": [
						{
							"numero": 74,
							"nivel": "30-50",
							"porcentaje": 65
						},
						{
							"numero": 75,
							"nivel": "40-55",
							"porcentaje": 35
						}
					]
				},
				{
					"nombre": "Sótano",
					"caminando": [
						{
							"numero": 42,
							"nivel": "52-61",
							"porcentaje": 11
						},
						{
							"numero": 47,
							"nivel": "55-64",
							"porcentaje": 14
						},
						{
							"numero": 64,
							"nivel": "58-67",
							"porcentaje": 25
						},
						{
							"numero": 67,
							"nivel": 52,
							"porcentaje": 10
						},
						{
							"numero": 82,
							"nivel": 55,
							"porcentaje": 10
						},
						{
							"numero": 132,
							"nivel": "58-67",
							"porcentaje": 25
						},
						{
							"numero": 101,
							"nivel": 64,
							"porcentaje": 4
						},
						{
							"numero": 202,
							"nivel": 61,
							"porcentaje": 1
						},
						{
							"numero": 150,
							"nivel": 70
						}
					],
					"roca": [
						{
							"numero": 74,
							"nivel": "40-60",
							"porcentaje": 65
						},
						{
							"numero": 75,
							"nivel": "50-65",
							"porcentaje": 35
						}
					],
					"surf":[
						{
							"numero": 79,
							"nivel": "40-60",
							"porcentaje": 65
						},
						{
							"numero": 80,
							"nivel": "50-65",
							"porcentaje": 35
						}
					],
					"pesca": [{
							"numero": 129,
							"probabilidad": {
								"tipo": "cania",
								"vieja": {
									"nivel": 5,
									"porcentaje": 100
								},
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 60,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 60
								},
								"super": {
									"nivel": "15-25",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 118,
							"probabilidad": {
								"tipo": "cania",
								"buena": {
									"nivel": "5-15",
									"porcentaje": 20
								}
							}
						},
						{
							"numero": 79,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-25",
									"porcentaje": 5
								}
							}
						},
						{
							"numero": 61,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "20-30",
									"porcentaje": 40
								}
							}
						},
						{
							"numero": 130,
							"probabilidad": {
								"tipo": "cania",
								"super": {
									"nivel": "15-35",
									"porcentaje": 15
								}
							}
						}
					]
				}
			]
		},
		{
			"nombre": "Evento",
			"plantas": [
				{
					"nombre": "Roca Ombligo",
					"especial":[
						{
							"numero": 249,
							"nivel": 70,
							"observaciones": "Misti-Ticket"
						},
						{
							"numero": 250,
							"nivel": 70,
							"observaciones": "Misti-Ticket"
						}
					]
				},
				{
					"nombre": "Isla Origen",
					"especial":[
						{
							"numero": 386,
							"nivel": 30,
							"observaciones": "Ori-Ticket"
						}
					]
				}
			]
		},
		{
			"nombre": "Kanto",
			"errante": [
				{
					"numero": 243,
					"nivel": 50,
					"observaciones": "Inicial Squirtle"
				},
				{
					"numero": 244,
					"nivel": 50,
					"observaciones": "Inicial Bulbasaur"
				},
				{
					"numero": 245,
					"nivel": 50,
					"observaciones": "Inicial Charmander"
				}
			]
		},
		{
			"nombre": "Cueva Cambiante",
			"caminando": [
				{
					"numero": 41,
					"nivel": "6-16",
					"porcentaje": 100
				}
			],
			"evento": [
				{
					"numero": 179,
					"nivel": "3-13"
				},
				{
					"numero": 190,
					"nivel": "18-28"
				},
				{
					"numero": 204,
					"nivel": "19-29"
				},
				{
					"numero": 213,
					"nivel": "18-28"
				},
				{
					"numero": 216,
					"nivel": "18-28"
				},
				{
					"numero": 228,
					"nivel": "12-20"
				},
				{
					"numero": 234,
					"nivel": "18-28"
				},
				{
					"numero": 235,
					"nivel": "18-28"
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
					"numero": 13
				},
				{
					"numero": 16
				},
				{
					"numero": 25
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
					"numero": 39
				},
				{
					"numero": 41
				},
				{
					"numero": 61
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
					"numero": 79
				},
				{
					"numero": 84
				},
				{
					"numero": 88
				},
				{
					"numero": 92
				},
				{
					"numero": 95
				},
				{
					"numero": 98
				},
				{
					"numero": 102
				},
				{
					"numero": 109
				},
				{
					"numero": 111
				},
				{
					"numero": 113
				},
				{
					"numero": 116
				},
				{
					"numero": 120
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
					"numero": 147
				},
				{
					"numero": 220
				},
				{
					"numero": 223
				},
				{
					"numero": 161
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
					"numero": 177
				},
				{
					"numero": 183
				},
				{
					"numero": 187
				},
				{
					"numero": 231
				},
				{
					"numero": 246
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
					"numero": 173
				},
				{
					"numero": 174
				},
				{
					"numero": 236
				},
				{
					"numero": 238
				},
				{
					"numero": 240
				},
				{
					"numero": 298
				},
				{
					"numero": 360
				}
			]
		},
		{
			"nombre": "Intercambiar de Rojo Fuego",
			"otros":[
				{
					"numero": 23
				},
				{
					"numero": 43
				},
				{
					"numero": 54
				},
				{
					"numero": 58
				},
				{
					"numero": 90
				},
				{
					"numero": 239
				},
				{
					"numero": 123
				},
				{
					"numero": 194
				},
				{
					"numero": 198
				},
				{
					"numero": 211
				},
				{
					"numero": 225
				},
				{
					"numero": 227
				}
			]
		},
		{
			"nombre": "Intercambiar de otros juegos",
			"otros":[
				{
					"numero": 151
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
					"numero": 163
				},
				{
					"numero": 170
				},
				{
					"numero": 179
				},
				{
					"numero": 185
				},
				{
					"numero": 190
				},
				{
					"numero": 191
				},
				{
					"numero": 196
				},
				{
					"numero": 197
				},
				{
					"numero": 203
				},
				{
					"numero": 204
				},
				{
					"numero": 207
				},
				{
					"numero": 209
				},
				{
					"numero": 213
				},
				{
					"numero": 216
				},
				{
					"numero": 222
				},
				{
			 		"numero": 228
				},
				{
					"numero": 235
				},
				{
					"numero": 241
				},
				{
					"numero": 251
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
					"numero": 263
				},
				{
					"numero": 265
				},
				{
					"numero": 270
				},
				{
					"numero": 273
				},
				{
					"numero": 276
				},
				{
					"numero": 278
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
					"numero": 296
				},
				{
					"numero": 299
				},
				{
					"numero": 300
				},
				{
					"numero": 302
				},
				{
					"numero": 303
				},
				{
					"numero": 304
				},
				{
					"numero": 307
				},
				{
					"numero": 309
				},
				{
					"numero": 311
				},
				{
					"numero": 312
				},
				{
					"numero": 313
				},
				{
					"numero": 314
				},
				{
					"numero": 315
				},
				{
					"numero": 316
				},
				{
					"numero": 318
				},
				{
					"numero": 320
				},
				{
					"numero": 322
				},
				{
					"numero": 324
				},
				{
					"numero": 325
				},
				{
					"numero": 327
				},
				{
					"numero": 328
				},
				{
					"numero": 331
				},
				{
					"numero": 333
				},
				{
					"numero": 335
				},
				{
					"numero": 336
				},
				{
					"numero": 337
				},
				{
					"numero": 338
				},
				{
					"numero": 339
				},
				{
					"numero": 341
				},
				{
					"numero": 343
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
					"numero": 351
				},
				{
					"numero": 352
				},
				{
					"numero": 353
				},
				{
					"numero": 355
				},
				{
					"numero": 357
				},
				{
					"numero": 358
				},
				{
					"numero": 359
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
					"numero": 369
				},
				{
					"numero": 370
				},
				{
					"numero": 371
				},
				{
					"numero": 374
				},
				{
					"numero": 377
				},
				{
					"numero": 378
				},
				{
					"numero": 379
				},
				{
					"numero": 380
				},
				{
					"numero": 381
				},
				{
					"numero": 382
				},
				{
					"numero": 383
				},
				{
					"numero": 384
				},
				{
					"numero": 385
				}
			]
		}
	]
}
