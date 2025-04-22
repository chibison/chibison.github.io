const heartgold = {
	"nombre":"heartgold",
	"titulo": "Oro HeartGold",
	"gen":4,
	"filtros":[
		{
			"nombre": "Pesca",
			"imagen": "otros/gen4/pesca.png",
			"filtro": "pesca",
			"defecto": false
		},
		{
			"nombre": "Surf",
			"imagen": "otros/gen4/surf.png",
			"filtro": "surf",
			"defecto": false
		},
		{
			"nombre": "Golpe cabeza",
			"imagen": "otros/gen4/cabeza.png",
			"filtro": "cabeza",
			"defecto": false
		},
		{
			"nombre": "Golpe roca",
			"imagen": "otros/gen4/roca.png",
			"filtro": "roca",
			"defecto": false
		},
		{
			"nombre": "Sonidos de Hoenn y Sinnoh",
			"imagen": "otros/gen4/sonidos.png",
			"filtro": "sonidos",
			"defecto": false
		}
	],
  "lugares": [
		{
			"nombre": "Pueblo Primavera",
			"lema": "El pueblo donde soplan vientos de un nuevo amanecer.",
			"regalo": [
				{
					"numero": 152,
					"nivel": 5
				},
				{
					"numero": 155,
					"nivel": 5
				},
				{
					"numero": 158,
					"nivel": 5
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": "15-25",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			]
		},
		{
			"nombre": "Ruta 29",
			"hierba": [
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-3", "porcentaje": 55}, "dia": {"nivel": "2-4", "porcentaje": 55}}
				},
				{
					"numero": 161,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-3", "porcentaje": 40}, "dia": {"nivel": "2-3", "porcentaje": 40}}
				},
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 5}, "dia": {"nivel": 4, "porcentaje": 5}, "noche": {"nivel": "2-4", "porcentaje": 15}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "2-4", "porcentaje": 85}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "2-3",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "2-3",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Cerezo",
			"lema": "La ciudad de las flores bonitas y fragantes.",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				},
				{
				  "numero": 102,
				  "probabilidad": {"tipo": "arbol", "especial":{"nivel": "18-20", "porcentaje": 65}}
				},
				{
					"numero": 276,
					"probabilidad": {"tipo": "arbol", "especial":{"nivel": "18-25", "porcentaje": 35}}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": "15-25",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 67}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "maniana": 3, "dia": 3}, "super":{"nivel": 40, "maniana": 30, "dia": 30}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "noche": 3}, "super":{"nivel": 40, "noche": 30}}
				}
			]
		},
		{
			"nombre": "Ruta 30",
			"hierba": [
				{
					"numero": 10,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-4", "porcentaje": 50}, "dia": {"nivel": "3-4", "porcentaje": 35}}
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-4", "porcentaje": 40}, "dia": {"nivel": "2-4", "porcentaje": 50}}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 10}, "dia": {"nivel": 4, "porcentaje": 15}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 4, "porcentaje": 30}}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 2, "porcentaje": 30}}
				},
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "3-4", "porcentaje": 40}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": "15-32",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 4,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 4,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "2-3",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 31",
			"hierba": [
				{
					"numero": 10,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-5", "porcentaje": 35}, "dia": {"nivel": "4-5", "porcentaje": 35}}
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}, "dia": {"nivel": 3, "porcentaje": 30}}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 5, "porcentaje": 15}, "dia": {"nivel": 5, "porcentaje": 15}}
				},
				{
					"numero": 69,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 20}, "dia": {"nivel": 3, "porcentaje": 20}, "noche": {"nivel": 3, "porcentaje": 20}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 5, "porcentaje": 10}}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 3, "porcentaje": 30}}
				},
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "4-5", "porcentaje": 40}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "5-6", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "5-6", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-6", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": "15-32",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "3-4",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 4,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Cueva Oscura - Zona sur",
			"caminando": [
				{
					"numero": 74,
					"nivel": "2-4",
					"porcentaje": 60
				},
				{
					"numero": 41,
					"nivel": "2-4",
					"porcentaje": 39
				},
				{
					"numero": 206,
					"nivel": 4,
					"porcentaje": 1
				}
			],
			"masiva": [
				{
					"numero": 206,
					"nivel": "2-4",
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 129,
					"nivel": "2-20",
					"porcentaje": 100
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"roca": [
				{
					"numero": 206,
					"nivel": "4-8",
					"porcentaje": 90
				},
				{
					"numero": 74,
					"nivel": "8-14",
					"porcentaje": 10
				}
			],
			"sonidos":[
				{
					"numero": 296,
					"nivel": 2,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": "2-3",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 2,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": "2-3",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Malva",
			"lema": "La ciudad de los aromas nostálgicos.",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 50}}]}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo": "B", "normal":{"nivel": 10, "porcentaje": 30}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": 10, "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": 10, "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": 10, "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": "15-32",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"masiva": [
				{
					"numero": 340,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel": 20, "porcentaje": 65}, "super":{"nivel": 40, "porcentaje": 100}}
				}
			],
			"intercambio": [
				{
					"numero": 95,
					"necesita": 69
				}
			],
			"huevo":[
				{
					"numero": 175,
					"nivel": 1,
					"observaciones": "Profesor Elm tras conseguir Medalla Céfiro"
				},
				{
					"numero": 179,
					"nivel": 1,
					"observaciones": "Necesita código"
				},
				{
					"numero": 194,
					"nivel": 1,
					"observaciones": "Necesita código"
				},
				{
					"numero": 218,
					"nivel": 1,
					"observaciones": "Necesita código"
				}
			]
		},
		{
			"nombre": "Torre Bellsprout",
			"lema": "Vive la vida Pokémon.",
			"caminando": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-6", "porcentaje": 100}, "dia": {"nivel": "3-6", "porcentaje": 100}, "noche": {"nivel": "3-6", "porcentaje": 15}}
				},
				{
					"numero": 92,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "3-6", "porcentaje": 85}}
				}
			],
			"sonidos": [
				{
					"numero": 263,
					"nivel": "3-4",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 327,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 441,
					"nivel": "3-4",
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 307,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 36",
			"hierba": [
				{
					"numero": 32,
					"nivel": 12,
					"porcentaje": 30
				},
				{
					"numero": 29,
					"nivel": 12,
					"porcentaje": 30
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-15", "porcentaje": 25}, "dia": {"nivel": 13, "porcentaje": 20}}
				},
				{
					"numero": 58,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": "13-15", "porcentaje": 15}, "noche": {"nivel": 13, "porcentaje": 10}}
				},
				{
					"numero": 234,
					"nivel": 13,
					"porcentaje": 5
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "6-7", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "6-7", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "6-7", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "6-7", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 13,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "2-3",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			],
			"especial": [
				{
					"numero": 185,
					"nivel": 20
				}
			]
		},
		{
			"nombre": "Ruinas Alfa",
			"lema": "La autoridad en las Ruinas Alfa.",
			"plantas": [
				{
					"nombre": "Exterior",
					"hierba": [
						{
							"numero": 177,
							"nivel": "18-24",
							"porcentaje": 90
						},
						{
							"numero": 235,
							"nivel": "20-22",
							"porcentaje": 10
						}
					],
					"roca": [
						{
							"numero": 74,
							"nivel": "3-14",
							"porcentaje": 100
						}
					],
					"surf": [
						{
							"numero": 194,
							"nivel": "10-20",
							"porcentaje": 60
						},
						{
							"numero": 195,
							"nivel": "10-25",
							"porcentaje": 40
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 60,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
						}
					],
					"sonidos": [
						{
							"numero": 293,
							"nivel": "20-22",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 264,
							"nivel": "18",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 399,
							"nivel": 18,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 418,
							"nivel": "20-22",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sala Kabuto",
					"caminando": [
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 0
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 1
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 2
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 3
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 4
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 5
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 6
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 7
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 8
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 10,
							"variedad": 9
						}
					]
				},
				{
					"nombre": "Sala Omanyte",
					"caminando": [
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 14,
							"variedad": 10
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 14,
							"variedad": 11
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 14,
							"variedad": 12
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 14,
							"variedad": 13
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 14,
							"variedad": 14
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 14,
							"variedad": 15
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 14,
							"variedad": 16
						}
					]
				},
				{
					"nombre": "Sala Aerodactyl",
					"caminando": [
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 20,
							"variedad": 17
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 20,
							"variedad": 18
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 20,
							"variedad": 19
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 20,
							"variedad": 20
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 20,
							"variedad": 21
						}
					]
				},
				{
					"nombre": "Sala Ho-Oh",
					"caminando": [
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 25,
							"variedad": 22
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 25,
							"variedad": 23
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 25,
							"variedad": 24
						},
						{
							"numero": 201,
							"nivel": 5,
							"porcentaje": 25,
							"variedad": 25
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 32",
			"hierba": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-6", "porcentaje": 35}, "dia": {"nivel": "4-6", "porcentaje": 40}, "noche": {"nivel": 4, "porcentaje": 30}}
				},
				{
					"numero": 69,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 30}, "dia": {"nivel": 6, "porcentaje": 30}, "noche": {"nivel": 6, "porcentaje": 20}}
				},
				{
					"numero": 179,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 20}, "dia": {"nivel": 6, "porcentaje": 20}, "noche": {"nivel": 6, "porcentaje": 10}}
				},
				{
					"numero": 187,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 10}, "dia": {"nivel": 6, "porcentaje": 10}}
				},
				{
					"numero": 41,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 5}, "noche": {"nivel": 4, "porcentaje": 5}}
				},
				{
					"numero": 194,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 6, "porcentaje": 35}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "6-7", "porcentaje": 80}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "6-7", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "10-20",
					"porcentaje": 60
				},
				{
					"numero": 195,
					"nivel": "15-25",
					"porcentaje": 30
				},
				{
					"numero": 73,
					"nivel": "15-36",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 38}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 211,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 2}, "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"masiva": [
				{
					"numero": 211,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel": 20, "porcentaje": 70}, "super":{"nivel": 40, "porcentaje": 100}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "4-6",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 6,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 6,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "4-6",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Cueva Unión",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 27,
							"nivel": 6,
							"porcentaje": 30
						},
						{
							"numero": 19,
							"nivel": 4,
							"porcentaje": 10
						},
						{
							"numero": 74,
							"nivel": 6,
							"porcentaje": 30
						},
						{
							"numero": 41,
							"nivel": "5-7",
							"porcentaje": 25
						},
						{
							"numero": 95,
							"nivel": 6,
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 194,
							"nivel": "10-20",
							"porcentaje": 60
						},
						{
							"numero": 195,
							"nivel": "10-25",
							"porcentaje": 40
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 5,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": 6,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 5,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": 6,
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando": [
						{
							"numero": 27,
							"nivel": 8,
							"porcentaje": 30
						},
						{
							"numero": 19,
							"nivel": 6,
							"porcentaje": 5
						},
						{
							"numero": 74,
							"nivel": 8,
							"porcentaje": 30
						},
						{
							"numero": 41,
							"nivel": "7-9",
							"porcentaje": 25
						},
						{
							"numero": 95,
							"nivel": 8,
							"porcentaje": 10
						}
					],
					"surf": [
						{
							"numero": 194,
							"nivel": "10-20",
							"porcentaje": 60
						},
						{
							"numero": 195,
							"nivel": "10-25",
							"porcentaje": 40
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 7,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": 8,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 7,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": 8,
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [
						{
							"numero": 19,
							"nivel": 20,
							"porcentaje": 5
						},
						{
							"numero": 74,
							"nivel": 21,
							"porcentaje": 10
						},
						{
							"numero": 41,
							"nivel": 22,
							"porcentaje": 30
						},
						{
							"numero": 95,
							"nivel": 23,
							"porcentaje": 5
						},
						{
							"numero": 20,
							"nivel": 22,
							"porcentaje": 30
						},
						{
							"numero": 42,
							"nivel": 22,
							"porcentaje": 20
						}
					],
					"surf": [
						{
							"numero": 72,
							"nivel": "10-20",
							"porcentaje": 60
						},
						{
							"numero": 195,
							"nivel": "15-25",
							"porcentaje": 30
						},
						{
							"numero": 73,
							"nivel": "10-25",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
						},
						{
							"numero": 98,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 67}}
						},
						{
							"numero": 222,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "maniana": 3, "dia": 3}, "super":{"nivel": 40, "maniana": 30, "dia": 30}}
						},
						{
							"numero": 99,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						},
						{
							"numero": 120,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "noche": 3}, "super":{"nivel": 40, "noche": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 22,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": 22,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 22,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": 22,
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					],
					"especial": [
						{
							"numero": 131,
							"nivel": 20,
							"observaciones": "Viernes"
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 33",
			"hierba": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "6-7", "porcentaje": 40}, "dia": {"nivel": "4-7", "porcentaje": 45}, "noche": {"nivel": "4-7", "porcentaje": 60}}
				},
				{
					"numero": 187,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "6-8", "porcentaje": 35}, "dia": {"nivel": "6-8", "porcentaje": 35}}
				},
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 20}, "dia": {"nivel": 6, "porcentaje": 20}}
				},
				{
					"numero": 41,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 5}, "noche": {"nivel": "4-8", "porcentaje": 40}}
				}
			],
			"cabeza":[
				{
					"numero": 21,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "6-8", "porcentaje": 80}}]}
				},
				{
					"numero": 190,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "6-7", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "6-7",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 6,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "6-7",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Pueblo Azalea",
			"lema": "Donde la gente y los Pokémon viven en feliz armonía.",
			"cabeza":[
				{
					"numero": 21,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "6-8", "porcentaje": 80}}]}
				},
				{
					"numero": 190,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "6-7", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "4-5", "porcentaje": 30}}]}
				}
			]
		},
		{
			"nombre": "Pozo Slowpoke",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 41,
							"nivel": "5-8",
							"porcentaje": 85
						},
						{
							"numero": 79,
							"nivel": "6-8",
							"porcentaje": 15
						}
					],
					"surf": [
						{
							"numero": 79,
							"nivel": "5-25",
							"porcentaje": 100
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 7,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "5-6",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 7,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "5-6",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano",
					"caminando": [
						{
							"numero": 41,
							"nivel": "19-23",
							"porcentaje": 80
						},
						{
							"numero": 79,
							"nivel": "21-23",
							"porcentaje": 15
						},
						{
							"numero": 42,
							"nivel": 23,
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 79,
							"nivel": "10-25",
							"porcentaje": 90
						},
						{
							"numero": 80,
							"nivel": "15-30",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 19,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "21-23",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 19,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "21-23",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				}
			]
		},
		{
			"nombre": "Encinar",
			"hierba": [
				{
					"numero": 10,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-6", "porcentaje": 50}, "dia": {"nivel": "5-6", "porcentaje": 60}}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 30}, "dia": {"nivel": 6, "porcentaje": 30}}
				},
				{
					"numero": 46,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-6", "porcentaje": 15}, "dia": {"nivel": "5-6", "porcentaje": 5}, "noche": {"nivel": "5-6", "porcentaje": 15}}
				},
				{
					"numero": 41,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 5, "porcentaje": 5}, "dia": {"nivel": 5, "porcentaje": 5}, "noche": {"nivel": "5-6", "porcentaje": 25}}
				}
			],
			"cabeza":[
				{
					"numero": 10,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 30}}]}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 10}}]}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 60}}, {"tipo":"B", "normal":{"nivel": "6-8", "porcentaje": 50}}]}
				},
				{
					"numero": 12,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "6-8", "porcentaje": 10}}]}
				},
				{
					"numero": 164,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "6-8", "porcentaje": 10}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "6-8", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 54,
					"nivel": "5-20",
					"porcentaje": 90
				},
				{
					"numero": 55,
					"nivel": "10-20",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"regalo": [
				{
					"numero": 172,
					"nivel": 30,
					"observaciones": "Pichu Picoreja"
				}
			],
			"sonidos": [
				{
					"numero": 325,
					"nivel": "5-6",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 322,
					"nivel": 6,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 406,
					"nivel": "5-6",
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 455,
					"nivel": 6,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 34",
			"hierba":[
				{
					"numero": 96,
					"nivel": "10-12",
					"porcentaje": 50
				},
				{
					"numero": 19,
					"nivel": "11-13",
					"porcentaje": 35
				},
				{
					"numero": 63,
					"nivel": 10,
					"porcentaje": 10
				},
				{
					"numero": 132,
					"nivel": 10,
					"porcentaje": 5
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "9-10", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "11-12", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "9-10", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "11-12", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "9-10", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "11-12", "porcentaje": 30}}]}
				}
			],
			"masiva": [
				{
					"numero": 280,
					"nivel": "10-11",
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": "15-29",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 67}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "maniana": 3, "dia": 3}, "super":{"nivel": 40, "maniana": 30, "dia": 30}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "noche": 3}, "super":{"nivel": 40, "noche": 30}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "10-11",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "10-11",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Trigal",
			"lema": "La alegre ciudad de rico encanto.",
			"intercambio": [
				{
					"numero": 66,
					"necesita": 96
				}
			],
			"regalo": [
				{
					"numero": 133,
					"nivel": 5
				}
			],
			"casino": [
				{
					"numero": 63,
					"nivel": 15,
					"fichas": 200
				},
				{
					"numero": 23,
					"nivel": 15,
					"fichas": 700
				},
				{
					"numero": 147,
					"nivel": 15,
					"fichas": 2100
				}
			]
		},
		{
			"nombre": "Ruta 35",
			"hierba": [
				{
					"numero": 29,
					"nivel": 12,
					"porcentaje": 30
				},
				{
					"numero": 32,
					"nivel": 12,
					"porcentaje": 30
				},
				{
					"numero": 96,
					"nivel": 14,
					"porcentaje": 20
				},
				{
					"numero": 63,
					"nivel": 10,
					"porcentaje": 10
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 5}, "dia": {"nivel": 14, "porcentaje": 5}}
				},
				{
					"numero": 132,
					"nivel": 10,
					"porcentaje": 4
				},
				{
					"numero": 193,
					"nivel": 12,
					"porcentaje": 1
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 5}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "9-10", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "10-11", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "9-10", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "10-11", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "9-10", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "13-14", "porcentaje": 30}}]}
				}
			],
			"masiva": [
				{
					"numero": 193,
					"nivel": 12,
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 54,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 55,
					"nivel": "15-35",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 14,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 14,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Parque Nacional",
			"hierba": [
				{
					"numero": 10,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "10-12", "porcentaje": 50}, "dia": {"nivel": 10, "porcentaje": 30}}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 30}, "dia": {"nivel": 10, "porcentaje": 30}}
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "10-14", "porcentaje": 20}, "dia": {"nivel": "12-14", "porcentaje": 15}}
				},
				{
					"numero": 191,
					"probabilidad": {"tipo":"hora", "dia": {"nivel": 12, "porcentaje": 25}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "10-14", "porcentaje": 100}}
				}
			],
			"concurso": [
				{
					"numero": 10,
					"nivel": "7-18",
					"porcentaje": 20
				},
				{
					"numero": 10,
					"nivel": "24-36",
					"porcentaje": 20,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 13,
					"nivel": "7-18",
					"porcentaje": 20
				},
				{
					"numero": 13,
					"nivel": "24-26",
					"porcentaje": 20,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 11,
					"nivel": "9-18",
					"porcentaje": 10
				},
				{
					"numero": 11,
					"nivel": "26-36",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 14,
					"nivel": "9-18",
					"porcentaje": 10
				},
				{
					"numero": 14,
					"nivel": "26-36",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 48,
					"nivel": "10-16",
					"porcentaje": 10
				},
				{
					"numero": 48,
					"nivel": "25-32",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 46,
					"nivel": "10-17",
					"porcentaje": 10
				},
				{
					"numero": 46,
					"nivel": "27-34",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 12,
					"nivel": "12-15",
					"porcentaje": 5
				},
				{
					"numero": 12,
					"nivel": "27-30",
					"porcentaje": 5,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 15,
					"nivel": "12-15",
					"porcentaje": 5
				},
				{
					"numero": 15,
					"nivel": "27-30",
					"porcentaje": 5,
					"pokedex": "*",
					"observaciones": "Martes"
				},
				{
					"numero": 123,
					"nivel": "13-14",
					"porcentaje": 5
				},
				{
					"numero": 123,
					"nivel": "27-28",
					"porcentaje": 5,
					"pokedex": "*",
					"observaciones": "Martes, Jueves, Sábado"
				},
				{
					"numero": 127,
					"nivel": "13-14",
					"porcentaje": 5
				},
				{
					"numero": 127,
					"nivel": "27-28",
					"porcentaje": 5,
					"pokedex": "*",
					"observaciones": "Martes, Jueves, Sábado"
				},
				{
					"numero": 265,
					"nivel": "24-36",
					"porcentaje": 20,
					"pokedex": "*",
					"observaciones": "Jueves, Sábado"
				},
				{
					"numero": 290,
					"nivel": "26-36",
					"porcentaje": 20,
					"pokedex": "*",
					"observaciones": "Jueves, Sábado"
				},
				{
					"numero": 266,
					"nivel": "24-36",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Jueves"
				},
				{
					"numero": 313,
					"nivel": "26-36",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Jueves"
				},
				{
					"numero": 401,
					"nivel": "27-30",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Jueves, Sábado"
				},
				{
					"numero": 402,
					"nivel": "27-30",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Jueves, Sábado"
				},
				{
					"numero": 269,
					"nivel": "25-32",
					"porcentaje": 5,
					"pokedex": "*",
					"observaciones": "Jueves"
				},
				{
					"numero": 415,
					"nivel": "27-34",
					"porcentaje": 5,
					"pokedex": "*",
					"observaciones": "Jueves, Sábado"
				},
				{
					"numero": 268,
					"nivel": "24-36",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Sábado"
				},
				{
					"numero": 314,
					"nivel": "26-36",
					"porcentaje": 10,
					"pokedex": "*",
					"observaciones": "Sábado"
				},
				{
					"numero": 267,
					"nivel": "25-32",
					"porcentaje": 5,
					"pokedex": "*",
					"observaciones": "Sábado"
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "10-12", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "13-15", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "10-12", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "13-15", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "10-12", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "13-15", "porcentaje": 30}}]}
				},
				{
					"numero": 102,
					"nivel":  "18-20",
					"probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 65}},
					"observaciones": "Árbol especial al norte con treparrocas"
				},
				{
					"numero": 420,
					"nivel":  "18-25",
					"probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 35}},
					"observaciones": "Árbol especial al norte con treparrocas"
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 10,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "10-12",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},

		{
			"nombre": "Ruta 37",
			"hierba": [
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-15", "porcentaje": 60}, "dia": {"nivel": "13-15", "porcentaje": 15}}
				},
				{
					"numero": 58,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 10}, "dia": {"nivel": "14-15", "porcentaje": 15}, "noche": {"nivel": 14, "porcentaje": 10}}
				},
				{
					"numero": 234,
					"nivel": 15,
					"porcentaje": 30
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "dia": {"nivel": 15, "porcentaje": 5}}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "13-15", "porcentaje": 40}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 20}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "12-14", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "15-17", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "12-14", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "15-17", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "12-14", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "15-17", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "13-15",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 15,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "13-15",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Iris",
			"lema": "Una ciudad donde conviven el pasado y el presente.",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "12-14", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "15-17", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "12-14", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "15-17", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "12-14", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "15-17", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": "15-25",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			]
		},
		{
			"nombre": "Torre Quemada",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 19,
							"nivel": "13-15",
							"porcentaje": 50
						},
						{
							"numero": 109,
							"nivel": "14-16",
							"porcentaje": 35
						},
						{
							"numero": 41,
							"nivel": 14,
							"porcentaje": 10
						},
						{
							"numero": 20,
							"nivel": 15,
							"porcentaje": 5
						}
					],
					"sonidos": [
						{
							"numero": 263,
							"nivel": "13-14",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 327,
							"nivel": 15,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 307,
							"nivel": 15,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 441,
							"nivel": "13-14",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano",
					"caminando": [
						{
							"numero": 109,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 50}, "dia": {"nivel": "14-16", "porcentaje": 50}, "noche": {"nivel": "14-16", "porcentaje": 50}}
						},
						{
							"numero": 19,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 40}, "dia": {"nivel": "14-16", "porcentaje": 35}, "noche": {"nivel": "14-16", "porcentaje": 40}}
						},
						{
							"numero": 41,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}, "noche": {"nivel": 15, "porcentaje": 5}}
						},
						{
							"numero": 126,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 5}, "dia": {"nivel": "14-16", "porcentaje": 10}, "noche": {"nivel": "14-16", "porcentaje": 5}}
						}
					],
					"sonidos": [
						{
							"numero": 263,
							"nivel": 14,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 327,
							"nivel": 16,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 307,
							"nivel": 16,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 441,
							"nivel": 14,
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 38",
			"hierba": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 30}, "dia": {"nivel": 16, "porcentaje": 30}, "noche": {"nivel": 16, "porcentaje": 40}}
				},
				{
					"numero": 20,
					"nivel": 16,
					"porcentaje": 30
				},
				{
					"numero": 81,
					"nivel": 16,
					"porcentaje": 20
				},
				{
					"numero": 83,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 10}, "dia": {"nivel": 16, "porcentaje": 10}}
				},
				{
					"numero": 241,
					"nivel": 13,
					"porcentaje": 5
				},
				{
					"numero": 128,
					"nivel": 13,
					"porcentaje": 4
				},
				{
					"numero": 209,
					"nivel": 13,
					"porcentaje": 1
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "13-14", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "13-14", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "15-16", "porcentaje": 30}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "especial":{"nivel": "18-25", "porcentaje": 65}}
				},
				{
					"numero": 412,
					"variedad": 0,
					"probabilidad": {"tipo": "arbol", "especial":{"nivel": "18-25", "porcentaje": 35}}
				}
			],
			"masiva": [
				{
					"numero": 209,
					"nivel": "13-16",
					"porcentaje": 40
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 16,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 16,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": 16,
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 39",
			"hierba": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 30}, "dia": {"nivel": 16, "porcentaje": 30}, "noche": {"nivel": 16, "porcentaje": 40}}
				},
				{
					"numero": 20,
					"nivel": 17,
					"porcentaje": 30
				},
				{
					"numero": 81,
					"nivel": 16,
					"porcentaje": 20
				},
				{
					"numero": 83,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 10}, "dia": {"nivel": 16, "porcentaje": 10}}
				},
				{
					"numero": 241,
					"nivel": 15,
					"porcentaje": 5
				},
				{
					"numero": 128,
					"nivel": 15,
					"porcentaje": 5
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "14-15", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "16-17", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "14-15", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "16-17", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "14-15", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "16-17", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "16-17",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 16,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "16-17",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Olivo",
			"lema": "El puerto a tierras lejanas.",
			"surf": [
				{
					"numero": 72,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": "15-29",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 67}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "maniana": 3, "dia": 3}, "super":{"nivel": 40, "maniana": 30, "dia": 30}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "noche": 3}, "super":{"nivel": 40, "noche": 30}}
				}
			],
			"intercambio": [
				{
					"numero": 208,

					"observaciones": "Cualquier pokémon."
				},
				{
					"numero": 100,
					"necesita": 98
				}
			]
		},
		{
			"nombre": "Ruta 40",
			"surf": [
				{
					"numero": 72,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": "15-29",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 67}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "maniana": 3, "dia": 3}, "super":{"nivel": 40, "maniana": 30, "dia": 30}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "noche": 3}, "super":{"nivel": 40, "noche": 30}}
				}
			]
		},
		{
			"nombre": "Ruta 41",
			"surf": [
				{
					"numero": 72,
					"nivel": "15-25",
					"porcentaje": 60
				},
				{
					"numero": 73,
					"nivel": "15-25",
					"porcentaje": 30
				},
				{
					"numero": 226,
					"nivel": "15-25",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			]
		},
		{
			"nombre": "Ciudad Orquídea",
			"surf": [
				{
					"numero": 72,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": "15-25",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 67}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "maniana": 3, "dia": 3}, "super":{"nivel": 40, "maniana": 30, "dia": 30}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "noche": 3}, "super":{"nivel": 40, "noche": 30}}
				}
			],
			"roca": [
				{
					"numero": 98,
					"nivel": "15-24",
					"porcentaje": 90
				},
				{
					"numero": 213,
					"nivel": "23-29",
					"porcentaje": 10
				}
			],
			"regalo": [
				{
					"numero": 213,
					"nivel": 20,
					"observaciones": "Si tienes amistad"
				},
				{
					"numero": 72,
					"nivel": 15,
					"observaciones": "Si no tienes otro pokémon"
				}
			]
		},
		{
			"nombre": "Ruta 47",
			"hierba": [
				{
					"numero": 132,
					"nivel": "31-40",
					"porcentaje": 41
				},
				{
					"numero": 83,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 35, "porcentaje": 20}, "dia": {"nivel": 35, "porcentaje": 20}}
				},
				{
					"numero": 241,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 35, "porcentaje": 20}, "dia": {"nivel": 35, "porcentaje": 20}, "noche": {"nivel": 35, "porcentaje": 5}}
				},
				{
					"numero": 20,
					"nivel": "31-33",
					"porcentaje": 5
				},
				{
					"numero": 44,
					"nivel": 32,
					"porcentaje": 5
				},
				{
					"numero": 21,
					"nivel": 31,
					"porcentaje": 5
				},
				{
					"numero": 22,
					"nivel": 34,
					"porcentaje": 4
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 35, "porcentaje": 20}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "17-18", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "17-18", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "17-18", "porcentaje": 30}}]}
				},
				{
				  "numero": 11,
				  "probabilidad": {"tipo": "arbol", "especial":{"nivel": "25-28", "porcentaje":50}},
					"observaciones": "Necesita surf y cascada"
				},
				{
				  "numero": 12,
				  "probabilidad": {"tipo": "arbol", "especial":{"nivel": "25-28", "porcentaje":30}},
					"observaciones": "Necesita surf y cascada"
				},
				{
				  "numero": 214,
				  "probabilidad": {"tipo": "arbol", "especial":{"nivel": "25-30", "porcentaje":20}},
					"observaciones": "Necesita surf y cascada"
				}
			],
			"masiva": [
				{
					"numero": 132,
					"nivel": 35,
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "10-25",
					"porcentaje": 60
				},
				{
					"numero": 86,
					"nivel": "10-20",
					"porcentaje": 30
				},
				{
					"numero": 120,
					"nivel": "15-25",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "33-34",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": "31-32",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": "31-32",
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "33-34",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 48",
			"hierba": [
				{
					"numero": 128,
					"nivel": "20-24",
					"porcentaje": 21
				},
				{
					"numero": 44,
					"nivel": "22-24",
					"porcentaje": 20
				},
				{
					"numero": 83,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 20}, "dia": {"nivel": 25, "porcentaje": 20}}
				},
				{
					"numero": 187,
					"nivel": "20-22",
					"porcentaje": 11
				},
				{
					"numero": 22,
					"nivel": 21,
					"porcentaje": 10
				},
				{
					"numero": 58,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-22", "porcentaje": 9}, "dia": {"nivel": "21-22", "porcentaje": 9}, "noche": {"nivel": "21-25", "porcentaje": 29}}
				},
				{
					"numero": 203,
					"nivel": 20,
					"porcentaje": 5
				},
				{
					"numero": 50,
					"nivel": 20,
					"porcentaje": 4
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "17-18", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "17-18", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "17-18", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "20-21",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": "22-24",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "20-21",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Zona Safari",
			"plantas": [
				{
					"nombre": "Peña",
					"hierba": [
						{
							"numero": 74,
							"nivel": "15-17",
							"porcentaje": 40
						},
						{
							"numero": 75,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 20}, "dia": {"nivel": "16-17", "porcentaje": 20}}
						},
						{
							"numero": 81,
							"nivel": "15-16",
							"porcentaje": 20
						},
						{
							"numero": 82,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}, "noche": {"nivel": 17, "porcentaje": 20}}
						},
						{
							"numero": 126,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 202,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "16-17", "porcentaje": 20}}
						},
						{
							"numero": 264,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "5 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 335,
							"nivel": 46,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 45, "porcentaje": 10}, "dia": {"nivel": 45, "porcentaje": 10}, "noche": {"nivel": 43, "porcentaje": 10}},
							"observaciones": "12 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 46,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "3 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 22,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "5 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 126,
							"nivel": 41,
							"probabilidad": {"tipo": "hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}},
							"observaciones": "10 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 202,
							"nivel": 41,
							"probabilidad": {"tipo": "hora", "noche": {"porcentaje": 10}},
							"observaciones": "10 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 305,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "24 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 80,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "5 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 436,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 45, "porcentaje": 10}, "dia": {"nivel": 45, "porcentaje": 10}, "noche": {"nivel": 46, "porcentaje": 10}},
							"observaciones": "7 bloques bosque + 18 bloques roca (30 días)",
							"pokedex": "*"
						},
						{
							"numero": 363,
							"nivel": "44-45",
							"porcentaje": 10,
							"observaciones": "18 bloques agua (40 días)",
							"pokedex": "*"
						},
						{
							"numero": 288,
							"nivel": 47,
							"porcentaje": 10,
							"observaciones": "10 bloques planicie + 19 bloques bosque (60 días)",
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Pantano",
					"hierba": [
						{
							"numero": 21,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 54,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-16", "porcentaje": 20}}
						},
						{
							"numero": 55,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 20}}
						},
						{
							"numero": 83,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 132,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 161,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 194,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 40}}
						},
						{
							"numero": 195,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "16-17", "porcentaje": 20}}
						},
						{
							"numero": 162,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "2 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 283,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "6 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 271,
							"nivel": 47,
							"porcentaje": 10,
							"observaciones": "14 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 83,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "3 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 417,
							"nivel": 43,
							"porcentaje": 10,
							"observaciones": "8 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 84,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "4 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 55,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "5 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 132,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "15 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 418,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 45, "porcentaje": 10}, "dia": {"nivel": 45, "porcentaje": 10}, "noche": {"nivel": 44, "porcentaje": 10}},
							"observaciones": "18 bloques agua (40 días)",
							"pokedex": "*"
						},
						{
							"numero": 372,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "21 bloques roca (70 días)",
							"pokedex": "*"
						}
					],
					"surf": [
						{
							"numero": 60,
							"nivel": "15-16",
							"porcentaje": 30
						},
						{
							"numero": 194,
							"nivel": "15-16",
							"porcentaje": 30
						},
						{
							"numero": 195,
							"nivel": "16-17",
							"porcentaje": 20
						},
						{
							"numero": 54,
							"nivel": "16-17",
							"porcentaje": 20
						},
						{
							"numero": 55,
							"probabilidad": [{"nivel": 37, "porcentaje": 10, "observaciones": "4 bloques agua"}, {"nivel": 45, "porcentaje": 10, "observaciones": "6 bloques agua"}],
							"pokedex": "*"
						},
						{
							"numero": 195,
							"nivel": 37,
							"porcentaje": 10,
							"observaciones": "3 bloques agua",
							"pokedex": "*"
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-14", "porcentaje": 60}}
						},
						{
							"numero": 60,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-15", "porcentaje": 40}, "buena":{"nivel": "22-24", "porcentaje": 70}, "super":{"nivel": "35-37", "porcentaje": 50}}
						},
						{
							"numero": 61,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": "23-25", "porcentaje": 30}, "super":{"nivel": "35-37", "porcentaje": 50}}
						},
						{
							"numero": 61,
							"probabilidad": [{"tipo": "cania", "vieja":{"nivel": 17, "porcentaje": 10, "observaciones": "2 bloques agua"}},
															 {"tipo": "cania", "vieja":{"nivel": 18, "porcentaje": 10, "observaciones": "3 bloques agua"}}],
							"pokedex": "*"
						},
						{
							"numero": 341,
							"probabilidad": [{"tipo": "cania", "buena":{"nivel": 26, "porcentaje": 10, "observaciones": "10 bloques agua"}},
															 {"tipo": "cania", "buena":{"nivel": 28, "porcentaje": 10, "observaciones": "14 bloques agua"}}],
							"pokedex": "*"
						},
						{
							"numero": 130,
							"probabilidad": [{"tipo": "cania", "super":{"nivel": "44-45", "porcentaje": 10, "observaciones": "6 bloques agua"}},
															 {"tipo": "cania", "super":{"nivel": "47-48", "porcentaje": 10, "observaciones": "9 bloques agua"}}],
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Arboleda",
					"hierba": [
						{
							"numero": 16,
							"nivel": "15-17",
							"probabilidad": {"tipo":"hora", "maniana":{"porcentaje": 30}, "dia":{"porcentaje": 30}}
						},
						{
							"numero": 69,
							"probabilidad": {"tipo":"hora", "maniana":{"nivel": "15-17", "porcentaje": 40}, "dia":{"nivel": "15-17", "porcentaje": 40}, "noche":{"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 92,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 20}}
						},
						{
							"numero": 93,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "16-17", "porcentaje": 20}}
						},
						{
							"numero": 122,
							"nivel": "16-17",
							"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 20}, "dia": {"porcentaje": 20}}
						},
						{
							"numero": 200,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}, "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 122,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "3 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 406,
							"nivel": 47,
							"porcentaje": 10,
							"observaciones": "24 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 200,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "4 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 125,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "4 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 108,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "3 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 399,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "10 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 283,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "24 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 353,
							"porcentaje": 10,
							"probabilidad": {"tipo":"hora", "maniana":{"nivel": 46}, "dia":{"nivel": 46}, "noche":{"nivel": 47}},
							"observaciones": "18 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 374,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "21 bloques roca (70 días)",
							"pokedex": "*"
						},
						{
							"numero": 437,
							"porcentaje": 10,
							"probabilidad": {"tipo":"hora", "maniana":{"nivel": 46}, "dia":{"nivel": 45}, "noche":{"nivel": 45}},
							"observaciones": "9 bloques bosque + 19 bloques roca (110 días)",
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Montaña",
					"hierba": [
						{
							"numero": 19,
							"nivel": "15-16",
							"porcentaje": 20
						},
						{
							"numero": 20,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 41,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 40}}
						},
						{
							"numero": 42,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 82,
							"nivel": 17,
							"porcentaje": 10
						},
						{
							"numero": 108,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 246,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 82,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "3 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 313,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "10 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 433,
							"nivel": 38,
							"porcentaje": 10,
							"observaciones": "10 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 307,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 44}, "dia": {"nivel": 43}, "noche": {"nivel": 43}},
							"observaciones": "20 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 246,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "5 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 337,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "15 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 98,
							"nivel": 43,
							"porcentaje": 10,
							"observaciones": "3 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 356,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 45}, "dia": {"nivel": 45}, "noche": {"nivel": 46}},
							"observaciones": "18 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 375,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "28 bloques roca (30 días)",
							"pokedex": "*"
						},
						{
							"numero": 364,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "7 bloques roca + 17 bloques agua (80 días)",
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Laguna",
					"hierba": [
						{
							"numero": 41,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 79,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 80,
							"nivel": 17,
							"porcentaje": 10
						},
						{
							"numero": 84,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 98,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 85,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "10 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 309,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "10 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 179,
							"nivel": 43,
							"porcentaje": 10,
							"observaciones": "5 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 310,
							"nivel": 37,
							"porcentaje": 10,
							"observaciones": "10 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 406,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "18 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 80,
							"porcentaje": 10,
							"probabilidad": [{"nivel": 42, "observaciones": "3 bloques roca"}, {"nivel": 37, "observaciones": "5 bloques agua"}],
							"pokedex": "*"
						},
						{
							"numero": 99,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "8 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 304,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 45, "porcentaje": 10}, "dia": {"nivel": 45, "porcentaje": 10}, "noche": {"nivel": 44, "porcentaje": 10}},
							"observaciones": "24 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 443,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "13 bloques planicie + 17 bloques roca (100 días)",
							"pokedex": "*"
						}
					],
					"surf": [
						{
							"numero": 129,
							"nivel": "15-16",
							"porcentaje": 30
						},
						{
							"numero": 60,
							"nivel": "15-16",
							"porcentaje": 30
						},
						{
							"numero": 61,
							"nivel": "16-17",
							"porcentaje": 20
						},
						{
							"numero": 131,
							"nivel": "15-16",
							"porcentaje": 20
						},
						{
							"numero": 131,
							"probabilidad": [{"tipo": "hora", "maniana": {"nivel": 37, "porcentaje": 10}, "dia": {"nivel": 37, "porcentaje": 10}, "noche": {"nivel": 36, "porcentaje": 10}, "observaciones": "10 bloques agua"},
															 {"tipo": "hora", "maniana": {"nivel": 42, "porcentaje": 10}, "dia": {"nivel": 42, "porcentaje": 10}, "noche": {"nivel": 41, "porcentaje": 10}, "observaciones": "14 bloques agua"},
														 	 {"tipo": "hora", "maniana": {"nivel": 47, "porcentaje": 10}, "dia": {"nivel": 47, "porcentaje": 10}, "noche": {"nivel": 46, "porcentaje": 10}, "observaciones": "18 bloques agua"}],

							"pokedex": "*"
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-14", "porcentaje": 40}, "buena":{"nivel": "22-23", "porcentaje": 30}}
						},
						{
							"numero": 98,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "13-15", "porcentaje": 30}, "buena":{"nivel": "22-25", "porcentaje": 40}}
						},
						{
							"numero": 99,
							"probabilidad": {"tipo":"cania", "super":{"nivel": "38-39", "porcentaje": 20}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "13-15", "porcentaje": 30}, "buena":{"nivel": "22-23", "porcentaje": 30}, "super":{"nivel": "35-38", "porcentaje": 40}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": "35-38", "porcentaje": 40}}
						},
						{
							"numero": 98,
							"probabilidad": {"tipo": "cania", "vieja": {"nivel": "17/18", "porcentaje": 10, "observaciones": "2/3 bloques agua"}},
							"pokedex": "*"
						},
						{
							"numero": 99,
							"probabilidad": {"tipo": "cania", "buena": {"nivel": "26/27", "porcentaje": 10, "observaciones": "5/8 bloques agua"}},
							"pokedex": "*"
						},
						{
							"numero": 341,
							"probabilidad": [{"tipo": "cania", "super": {"nivel": 46, "porcentaje": 10, "observaciones": "15 bloques agua"}},
															 {"tipo": "cania", "super": {"nivel": 48, "porcentaje": 10, "observaciones": "20 bloques agua"}}],
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Prado",
					"hierba": [
						{
							"numero": 19,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 20,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 63,
							"nivel": "5-17",
							"porcentaje": 30
						},
						{
							"numero": 203,
							"probabilidad": {"tipo":"hora", "maniana":{"nivel": "15-17", "porcentaje": 30}, "dia":{"nivel": "15-17", "porcentaje": 30}, "noche":{"nivel": "15-16", "porcentaje": 20}}
						},
						{
							"numero": 234,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 20}}
						},
						{
							"numero": 235,
							"probabilidad": {"tipo":"hora", "maniana":{"nivel": 17, "porcentaje": 10}, "dia":{"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 203,
							"nivel": 40,
							"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}},
							"observaciones": "3 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 403,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 43, "porcentaje": 10}, "dia": {"nivel": 43, "porcentaje": 10}, "noche": {"nivel": 44, "porcentaje": 10}},
							"observaciones": "10 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 310,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "15 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 235,
							"nivel": 41,
							"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}},
							"observaciones": "3 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 263,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "15 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 77,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "5 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 270,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "12 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 283,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "28 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 234,
							"probabilidad": [{"tipo": "hora", "noche": {"nivel": 40, "porcentaje": 10, "observaciones": "3 bloques planicie"}}, {"tipo": "hora", "noche": {"nivel": 41, "porcentaje": 10, "observaciones": "3 bloques bosque"}}],
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Lagos",
					"hierba": [
						{
							"numero": 39,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 46,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 96,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 20}}
						},
						{
							"numero": 97,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "16-17", "porcentaje": 20}}
						},
						{
							"numero": 161,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 198,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}, "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 47,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "3 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 162,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "5 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 417,
							"nivel": 47,
							"porcentaje": 10,
							"observaciones": "10 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 98,
							"nivel": 37,
							"porcentaje": 10,
							"observaciones": "5 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 97,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "noche": {"nivel": 37}},
							"observaciones": "5 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 198,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 37}, "dia": {"nivel": 37}},
							"observaciones": "5 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 70,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "8 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 358,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 46}, "dia": {"nivel": 46}, "noche": {"nivel": 47}},
							"observaciones": "15 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 100,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "10 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 355,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "28 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 419,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "10 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 371,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 45}, "dia": {"nivel": 45}, "noche": {"nivel": 44}},
							"observaciones": "9 bloques bosque + 19 bloques roca (110 días)",
							"pokedex": "*"
						}
					],
					"surf":[
						{
							"numero": 129,
							"nivel": "15-17",
							"porcentaje": 60
						},
						{
							"numero": 118,
							"nivel": "15-17",
							"porcentaje": 40
						},
						{
							"numero": 119,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "4 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 198,
							"nivel": 47,
							"porcentaje": 10,
							"observaciones": "10 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 355,
							"nivel": 48,
							"porcentaje": 10,
							"observaciones": "35 bloques agua",
							"pokedex": "*"
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-15", "porcentaje": 100}, "buena":{"nivel": "22-24", "porcentaje": 40}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": "22-24", "porcentaje": 40}, "super":{"nivel": "35-37", "porcentaje": 40}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": "24-25", "porcentaje": 20}, "super":{"nivel": "35-37", "porcentaje": 40}}
						},
						{
							"numero": 147,
							"probabilidad": {"tipo":"cania", "super":{"nivel": "36-37", "porcentaje": 20}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo": "cania", "vieja":{"nivel": 17, "porcentaje": 10}},
							"observaciones": "4 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 119,
							"probabilidad": {"tipo": "cania", "vieja":{"nivel": 17, "porcentaje": 10, "observaciones": "3 bloques agua"}, "buena": {"nivel": 27, "porcentaje": 10, "observaciones": "6 bloques agua"}},
							"pokedex": "*"
						},
						{
							"numero": 147,
							"probabilidad": {"tipo": "cania", "buena":{"nivel": 29, "porcentaje": 10}},
							"observaciones": "10 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 148,
							"porcentaje": 10,
							"probabilidad": [{"tipo": "cania", "super":{"nivel": 42, "observaciones": "15 bloques agua"}},{"tipo": "cania", "super":{"nivel": 45, "observaciones": "20 bloques agua"}}],
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Parterre",
					"hierba":[
						{
							"numero": 35,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 39,
							"nivel": "15-17",
							"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 50}, "dia": {"porcentaje": 30}, "noche": {"porcentaje": 30}}
						},
						{
							"numero": 183,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 187,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 40}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 188,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 191,
							"probabilidad": {"tipo":"hora", "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 194,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 20,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "5 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 113,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "12 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 188,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "8 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 274,
							"probabilidad": [{"nivel": 38, "porcentaje": 10, "observaciones": "28 bloques boque"}, {"nivel": 48, "porcentaje": 10, "observaciones": "35 bloques boque"}],
							"pokedex": "*"
						},
						{
							"numero": 74,
							"probabilidad": {"tipo": "hora", "maniana":{"nivel": 45, "porcentaje": 10}, "dia": {"nivel": 45, "porcentaje": 10}},
							"observaciones": "3 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 35,
						  "probabilidad": {"tipo": "hora", "noche":{"nivel": 42, "porcentaje": 10}},
							"observaciones": "3 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 194,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "3 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 273,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "18 bloques planicie (10 días)",
							"pokedex": "*"
						},
						{
							"numero": 299,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "18 bloques roca (30 días)",
							"pokedex": "*"
						},
						{
							"numero": 447,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 45}, "dia": {"nivel": 46}, "noche": {"nivel": 45}},
							"observaciones": "10 bloques bosque + 14 bloques roca (70 días)",
							"pokedex": "*"
						},

					],
					"surf": [
						{
							"numero": 129,
							"nivel": "15-17",
							"porcentaje": 50
						},
						{
							"numero": 183,
							"nivel": "16-17",
							"porcentaje": 20
						},
						{
							"numero": 194,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 188,
							"nivel": 47,
							"porcentaje": 10,
							"observaciones": "3 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 284,
							"probabilidad": [{"nivel":"42", "porcentaje": 10, "observaciones":"10 bloques agua"}, {"nivel":"46", "porcentaje": 10, "observaciones":"14 bloques agua"}],
							"pokedex": "*"
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-15", "porcentaje": 60}, "buena":{"nivel": "22-24", "porcentaje": 40}}
						},
						{
							"numero": 60,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-15", "porcentaje": 40}, "buena":{"nivel": "22-24", "porcentaje": 40}, "super": {"nivel": "35-36", "porcentaje": 40}}
						},
						{
							"numero": 61,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": "24-25", "porcentaje": 20}, "super":{"nivel": "35-38", "porcentaje": 60}}
						},
						{
							"numero": 61,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "15-16", "porcentaje": 10, "observaciones": "2-3 bloques agua"}, "buena":{"nivel": 27, "porcentaje": 10, "observaciones": "5 bloques agua"}},
							"pokedex": "*"
						},
						{
							"numero": 130,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 28, "porcentaje": 10, "observaciones": "7 bloques agua"}, "super":{"nivel": "42-45", "porcentaje": 10, "observaciones": "10-14 bloques agua"}},
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Páramo",
					"hierba":[
						{
							"numero": 22,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 66,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 20}, "dia": {"nivel": "16-17", "porcentaje": 20}}
						},
						{
							"numero": 67,
							"probabilidad": {"tipo":"hora", "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 81,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 95,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-16", "porcentaje": 20}, "dia": {"nivel": "15-17", "porcentaje": 30}, "noche": {"nivel": "15-17", "porcentaje": 40}}
						},
						{
							"numero": 115,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 20}, "dia": {"nivel": "15-17", "porcentaje": 20}}
						},
						{
							"numero": 310,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "3 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 314,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "10 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 69,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "3 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 67,
							"nivel": 40,
							"porcentaje": 10,
							"observaciones": "5 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 451,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 44, "porcentaje": 10}, "dia": {"nivel": 44, "porcentaje": 10}, "noche": {"nivel": 45, "porcentaje": 10}},
							"observaciones": "28 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 55,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "3 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 99,
							"nivel": 48,
							"porcentaje": 10,
							"observaciones": "10 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 308,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "18 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 286,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "21 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 338,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 10}, "dia": {"nivel": 46, "porcentaje": 10}, "noche": {"nivel": 45, "porcentaje": 10}},
							"observaciones": "21 bloques roca (30 días)",
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Desierto",
					"hierba":[
						{
							"numero": 22,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 27,
							"nivel": "15-17",
							"porcentaje": 40
						},
						{
							"numero": 28,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 104,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 20}, "dia": {"nivel": "16-17", "porcentaje": 20}}
						},
						{
							"numero": 105,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 22,
							"probabilidad": [{"tipo": "hora", "todo": {"nivel": 38, "porcentaje": 10, "observaciones": "3 bloques planicie"}},
							                 {"tipo": "hora", "noche": {"nivel": 41, "porcentaje": 10, "observaciones": "6 bloques roca"}}],
							"pokedex": "*"
						},
						{
							"numero": 105,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 41, "porcentaje": 10} ,"dia": {"nivel": 41, "porcentaje": 10}},
							"observaciones": "6 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 327,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "14 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 449,
							"nivel": 43,
							"porcentaje": 10,
							"observaciones": "28 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 270,
							"nivel": 38,
							"porcentaje": 10,
							"observaciones": "8 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 455,
							"nivel": 48,
							"porcentaje": 10,
							"observaciones": "25 bloques planicie (10 días)",
							"pokedex": "*"
						},
						{
							"numero": 331,
							"nivel": 35,
							"porcentaje": 10,
							"observaciones": "18 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 329,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 44, "porcentaje": 10},"dia": {"nivel": 45, "porcentaje": 10}, "noche": {"nivel": 44, "porcentaje": 10}},
							"observaciones": "25 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 328,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 46, "porcentaje": 10},"dia": {"nivel": 47, "porcentaje": 10}, "noche": {"nivel": 46, "porcentaje": 10}},
							"observaciones": "25 bloques roca (30 días)",
							"pokedex": "*"
						},
						{
							"numero": 332,
							"nivel": 48,
							"porcentaje": 10,
							"observaciones": "21 bloques agua (40 días)",
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Sabana",
					"hierba":[
						{
							"numero": 29,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 30,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 32,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 33,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 41,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 42,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 111,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 128,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 111,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "5 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 112,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "10 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 128,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "5 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 228,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "4 bloques bosque",
							"pokedex": "*"
						},
						{
							"numero": 263,
							"nivel": 38,
							"porcentaje": 10,
							"observaciones": "10 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 285,
							"nivel": 45,
							"porcentaje": 10,
							"observaciones": "6 bloques planicie + 18 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 298,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "5 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 324,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 46, "porcentaje": 10}, "dia": {"nivel": 47, "porcentaje": 10}, "noche": {"nivel": 47, "porcentaje": 10}},
							"observaciones": "18 bloques roca (30 días)",
							"pokedex": "*"
						},
						{
							"numero": 332,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "18 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 404,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 46, "porcentaje": 10}, "dia": {"nivel": 46, "porcentaje": 10}, "noche": {"nivel": 45, "porcentaje": 10}},
							"observaciones": "24 bloques planicie",
							"pokedex": "*"
						}
					]
				},
				{
					"nombre": "Albufera",
					"hierba":[
						{
							"numero": 23,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 20}, "dia": {"nivel": "15-17", "porcentaje":20}}
						},
						{
							"numero": 24,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 43,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 20}}
						},
						{
							"numero": 44,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 20}}
						},
						{
							"numero": 88,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
						},
						{
							"numero": 109,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 110,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-17", "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 194,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "15-17", "porcentaje": 30}}
						},
						{
							"numero": 44,
							"nivel": 42,
							"porcentaje": 10,
							"observaciones": "2 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 189,
							"nivel": 38,
							"porcentaje": 10,
							"observaciones": "5 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 50,
							"nivel": 43,
							"porcentaje": 10,
							"observaciones": "5 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 213,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "8 bloques roca",
							"pokedex": "*"
						},
						{
							"numero": 89,
							"nivel": 35,
							"porcentaje": 10,
							"observaciones": "8 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 336,
							"nivel": 48,
							"porcentaje": 10,
							"observaciones": "18 bloques planicie (10 días)",
							"pokedex": "*"
						},
						{
							"numero": 455,
							"nivel": 41,
							"porcentaje": 10,
							"observaciones": "18 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 453,
							"nivel": 44,
							"porcentaje": 10,
							"observaciones": "21 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 315,
							"nivel": 46,
							"porcentaje": 10,
							"observaciones": "25 bloques bosque (20 días)",
							"pokedex": "*"
						},
						{
							"numero": 354,
							"porcentaje": 10,
							"probabilidad": {"tipo": "hora", "maniana": {"nivel": 44}, "dia": {"nivel": 44}, "noche": {"nivel": 45}},
							"observaciones": "25 bloques roca (30 días)",
							"pokedex": "*"
						},
						{
							"numero": 189,
							"nivel": 38,
							"porcentaje": 10,
							"observaciones": "5 bloques planicie",
							"pokedex": "*"
						},
						{
							"numero": 89,
							"nivel": 38,
							"porcentaje": 10,
							"observaciones": "8 bloques agua",
							"pokedex": "*"
						}
					],
					"surf": [
						{
							"numero": 60,
							"nivel": "15-17",
							"porcentaje": 40
						},
						{
							"numero": 194,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 88,
							"nivel": "15-17",
							"porcentaje": 30
						},
						{
							"numero": 89,
							"nivel": 48,
							"porcentaje": 10,
							"observaciones": "16 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 189,
							"nivel": 47,
							"porcentaje": 10,
							"observaciones": "10 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 195,
							"nivel": 43,
							"porcentaje": 10,
							"observaciones": "13 bloques agua",
							"pokedex": "*"
						}
					],
					"pesca":[
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-15", "porcentaje": 60}, "buena":{"nivel": "22-24", "porcentaje": 40}}
						},
						{
							"numero": 60,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "12-15", "porcentaje": 40}}
						},
						{
							"numero": 61,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": "24-25", "porcentaje": 60}, "super":{"nivel": "35-38", "porcentaje": 80}}
						},
						{
							"numero": 130,
							"probabilidad": {"tipo":"cania", "super":{"nivel": "36-37", "porcentaje": 20}}
						},
						{
							"numero": 60,
							"porcentaje": 10,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": "16-18"}},
							"observaciones": "2-3 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 130,
							"porcentaje": 10,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": "26-29"}},
							"observaciones": "3-4 bloques agua",
							"pokedex": "*"
						},
						{
							"numero": 339,
							"porcentaje": 10,
							"probabilidad": {"tipo": "cania", "super":{"nivel": "42-45"}},
							"observaciones": "4-5 bloques agua",
							"pokedex": "*"
						}
					]
				}
			]
		},
		{
			"nombre": "Ruta 42",
			"hierba": [
				{
					"numero": 179,
					"nivel": 13,
					"porcentaje": 30
				},
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 30}, "dia": {"nivel": "14-16", "porcentaje": 30}}
				},
				{
					"numero": 56,
					"nivel": 15,
					"porcentaje": 30
				},
				{
					"numero": 180,
					"nivel": "15-17",
					"porcentaje": 10
				},
				{
					"numero": 41,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "14-16", "porcentaje": 30}}
				}
			],
			"cabeza":[
				{
					"numero": 21,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "15-16", "porcentaje": 80}}]}
				},
				{
					"numero": 190,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "15-16", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 118,
					"nivel": "10-25",
					"porcentaje": 90
				},
				{
					"numero": 119,
					"nivel": "15-25",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "13-14",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 14,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 14,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "13-14",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 43",
			"hierba": [
				{
					"numero": 180,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 30}, "dia": {"nivel": "15-17", "porcentaje": 40}, "noche": {"nivel": 15, "porcentaje": 30}}
				},
				{
					"numero": 203,
					"nivel": 15,
					"porcentaje": 30
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 25}, "dia": {"nivel": 17, "porcentaje": 20}}
				},
				{
					"numero": 179,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 10}, "dia": {"nivel": 15, "porcentaje": 10}, "noche": {"nivel": 16, "porcentaje": 5}}
				},
				{
					"numero": 48,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 5}, "noche": {"nivel": "15-17", "porcentaje": 15}}
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 20}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "17-18", "porcentaje": 65}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "17-18", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-16", "porcentaje": 30}}]}
				},
				{
					"numero": 48,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "17-18", "porcentaje": 15}}]}
				}
			],
			"surf": [
				{
					"numero": 129,
					"nivel": "5-50",
					"porcentaje": 100
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 15,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 17,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 17,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 15,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Lago de la Furia",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "14-16", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "17-19", "porcentaje": 65}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "14-16", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "17-19", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "14-16", "porcentaje": 30}}]}
				},
				{
					"numero": 48,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "17-19", "porcentaje": 15}}]}
				}
			],
			"surf": [
				{
					"numero": 129,
					"nivel": "5-20",
					"porcentaje": 90
				},
				{
					"numero": 130,
					"nivel": "10-20",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 100}, "buena":{"nivel": 20, "porcentaje": 97}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 130,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 10}}
				}
			],
			"especial": [
				{
					"numero": 130,
					"nivel": 30,
					"observaciones": "Variocolor"
				}
			]
		},
		{
			"nombre": "Ruta 44",
			"hierba": [
				{
					"numero": 70,
					"nivel": "22-24",
					"porcentaje": 35
				},
				{
					"numero": 114,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 69,
					"nivel": 22,
					"porcentaje": 20
				},
				{
					"numero": 108,
					"nivel": "24-26",
					"porcentaje": 15
				}
			],
			"cabeza":[
				{
					"numero": 21,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-22", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "23-24", "porcentaje": 80}}]}
				},
				{
					"numero": 190,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-22", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "23-24", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-22", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": "15-30",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": "20-30",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 38}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 223,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 2}, "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"masiva": [
				{
					"numero": 223,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel": 20, "porcentaje": 70}, "super":{"nivel": 40, "porcentaje": 100}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "22-23",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "22-23",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta Helada",
			"plantas": [
				{
					"nombre": "Planta baja y Sótano 1",
					"caminando": [
						{
							"numero": 41,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 25}, "dia": {"nivel": 22, "porcentaje": 20}, "noche": {"nivel": 22, "porcentaje": 25}}
						},
						{
							"numero": 124,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 5}, "dia": {"nivel": 22, "porcentaje": 10}, "noche": {"nivel": 22, "porcentaje": 5}}
						},
						{
							"numero": 220,
							"nivel": "21-23",
							"porcentaje": 40
						},
						{
							"numero": 42,
							"nivel": 22,
							"porcentaje": 30
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 22,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "21-22",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 22,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "21-22",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótanos 2 y 3",
					"caminando": [
						{
							"numero": 41,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 25}, "dia": {"nivel": 23, "porcentaje": 20}, "noche": {"nivel": 23, "porcentaje": 25}}
						},
						{
							"numero": 124,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 5}, "dia": {"nivel": 23, "porcentaje": 10}, "noche": {"nivel": 23, "porcentaje": 5}}
						},
						{
							"numero": 220,
							"nivel": "22-24",
							"porcentaje": 40
						},
						{
							"numero": 42,
							"nivel": 23,
							"porcentaje": 30
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 23,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "22-24",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 23,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "22-24",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				}
			]
		},
		{
			"nombre": "Ciudad Endrino",
			"lema": "Un tranquilo refugio de montaña.",
			"surf": [
				{
					"numero": 129,
					"nivel": "2-20",
					"porcentaje": 100
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"intercambio": [
				{
					"numero": 85,
					"necesita": 148,
					"observaciones": "Hembra"
				}
			]
		},
		{
			"nombre": "Guarida Dragón",
			"surf": [
				{
					"numero": 129,
					"nivel": "5-20",
					"porcentaje": 90
				},
				{
					"numero": 147,
					"nivel": "5-15",
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 100}, "buena":{"nivel": 20, "porcentaje": 97}, "super":{"nivel": 40, "porcentaje": 65}}
				},
				{
					"numero": 147,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 32}}
				},
				{
					"numero": 148,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"regalo": [
				{
					"numero": 147,
					"nivel": 15,
					"observaciones": "Si aciertas todas las preguntas tiene Velocidad extrema."
				}
			]
		},
		{
			"nombre": "Ruta 45",
			"hierba": [
				{
					"numero": 75,
					"nivel": "23-27",
					"porcentaje": 40
				},
				{
					"numero": 207,
					"nivel": 24,
					"porcentaje": 20
				},
				{
					"numero": 231,
					"nivel": 20,
					"porcentaje": 10
				},
				{
					"numero": 74,
					"nivel": 23,
					"porcentaje": 30
				}
			],
			"cabeza":[
							{
								"numero": 21,
								"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "23-24", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "26-27", "porcentaje": 80}}]}
							},
							{
								"numero": 190,
								"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "23-24", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "26-27", "porcentaje": 20}}]}
							},
							{
								"numero": 214,
								"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "23-25", "porcentaje": 30}}]}
							}
						],
			"masiva": [
				{
					"numero": 333,
					"nivel": 23,
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 129,
					"nivel": "2-25",
					"porcentaje": 100
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 24,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 24,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Cueva Oscura - Zona norte",
			"caminando": [
				{
					"numero": 74,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 41,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 75,
					"nivel": 25,
					"porcentaje": 20
				},
				{
					"numero": 202,
					"nivel": "20-25",
					"porcentaje": 15
				},
				{
					"numero": 42,
					"nivel": 23,
					"porcentaje": 5
				}
			],
			"surf": [
				{
					"numero": 129,
					"nivel": "2-20",
					"porcentaje": 100
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos":[
				{
					"numero": 296,
					"nivel": 25,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 25,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 46",
			"hierba": [
				{
					"numero": 74,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-3", "porcentaje": 40}, "dia": {"nivel": "2-3", "porcentaje": 40}, "noche": {"nivel": "2-3", "porcentaje": 45}}
				},
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-3", "porcentaje": 35}, "dia": {"nivel": "2-3", "porcentaje": 35}}
				},
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-4", "porcentaje": 25}, "dia": {"nivel": "2-4", "porcentaje": 25}, "noche": {"nivel": "2-4", "porcentaje": 55}}
				}
			],
			"cabeza":[
							{
								"numero": 21,
								"probabilidad": {"tipo": "arbol", "grupos":[{"tipo": "A", "normal":{"nivel": "2-3", "porcentaje": 50}},
																														{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 80}}]}
							},
							{
								"numero": 190,
								"probabilidad": {"tipo": "arbol", "grupos":[{"tipo": "A", "normal":{"nivel": "2-3", "porcentaje": 20}},
																														{"tipo": "B", "normal":{"nivel": "4-5", "porcentaje": 20}}]}
							},
							{
								"numero": 214,
								"probabilidad": {"tipo": "arbol", "grupos":[{"tipo": "A", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
							}
						],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "2-3",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 2,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "2-3",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Torre Campana",
			"caminando" :[
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "20-24", "porcentaje": 100}, "dia": {"nivel": "20-24", "porcentaje": 100}, "noche": {"nivel": "22-24", "porcentaje": 20}}
				},
				{
					"numero": 92,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "20-22", "porcentaje": 80}}
				}
			],
			"sonidos": [
				{
					"numero": 263,
					"nivel": "20-21",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 327,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 441,
					"nivel": "20-21",
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 307,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			],
			"legendario":[
				{
					"numero": 250,
					"nivel": 45
				}
			]
		},
		{
			"nombre": "Ruta 27",
			"hierba": [
				{
					"numero": 84,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 50}, "dia": {"nivel": "28-30", "porcentaje": 50}}
				},
				{
					"numero": 20,
					"nivel": "28-30",
					"porcentaje": 40
				},
				{
					"numero": 28,
					"nivel": 30,
					"porcentaje": 5
				},
				{
					"numero": 77,
					"nivel": 32,
					"porcentaje": 5
				},
				{
					"numero": 195,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "28-30", "porcentaje": 50}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "28-29", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "31-32", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "28-29", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "31-32", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "28-29", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "31-32", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "15-20",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 20,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"masiva": [
				{
					"numero": 370,
					"nivel": 20,
					"porcentaje": 60,
					"observaciones": "Surf"
				}
			],
			"sonidos":[
				{
					"numero": 296,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Cataratas Tohjo",
			"caminando": [
				{
					"numero": 20,
					"nivel": 22,
					"porcentaje": 30
				},
				{
					"numero": 41,
					"nivel": 22,
					"porcentaje": 30
				},
				{
					"numero": 42,
					"nivel": 22,
					"porcentaje": 20
				},
				{
					"numero": 79,
					"nivel": "20-23",
					"porcentaje": 15
				},
				{
					"numero": 19,
					"nivel": 20,
					"porcentaje": 5
				}
			],
			"surf": [
				{
					"numero": 118,
					"nivel": 20,
					"porcentaje": 60
				},
				{
					"numero": 79,
					"nivel": 20,
					"porcentaje": 30
				},
				{
					"numero": 119,
					"nivel": 20,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos":[
				{
					"numero": 296,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": 22,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 26",
			"hierba": [
				{
					"numero": 84,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 40}, "dia": {"nivel": "28-30", "porcentaje": 40}}
				},
				{
					"numero": 20,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": "28-30", "porcentaje": 5}, "buena":{"nivel": "28-30", "porcentaje": 5}, "super":{"nivel": "28-30", "porcentaje": 40}}
				},
				{
					"numero": 28,
					"nivel": 28,
					"porcentaje": 30
				},
				{
					"numero": 77,
					"nivel": 32,
					"porcentaje": 20
				},
				{
					"numero": 85,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 30, "porcentaje": 5}, "dia": {"nivel": 30, "porcentaje": 5}}
				},
				{
					"numero": 195,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 30, "porcentaje": 10}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "28-29", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "31-32", "porcentaje": 50}}]}
				},
				{
					"numero": 102,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "28-29", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "31-32", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "28-29", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "31-32", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "15-20",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 30,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 32,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 28,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 32,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 28,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Calle Victoria",
			"caminando": [
				{
					"numero": 42,
					"nivel": 32,
					"porcentaje": 30
				},
				{
					"numero": 75,
					"nivel": 32,
					"porcentaje": 30
				},
				{
					"numero": 232,
					"nivel": 33,
					"porcentaje": 20
				},
				{
					"numero": 95,
					"nivel": "34-36",
					"porcentaje": 15
				},
				{
					"numero": 111,
					"nivel": 35,
					"porcentaje": 5
				}
			],
			"roca": [
				{
					"numero": 74,
					"nivel": "24-32",
					"porcentaje": 90
				},
				{
					"numero": 75,
					"nivel": "30-33",
					"porcentaje": 10
				}
			],
			"sonidos": [
				{
					"numero": 296,
					"nivel": 33,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": 32,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 33,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": 32,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Carmín",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 30}}]}
				}
			],
			"roca": [
				{
					"numero": 50,
					"nivel": "24-37",
					"porcentaje": 90
				},
				{
					"numero": 213,
					"nivel": "32-35",
					"porcentaje": 10
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "30-35",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 35,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"masiva": [
				{
					"numero": 278,
					"nivel": 35,
					"porcentaje": 60
				}
			]
		},
		{
			"nombre": "Ruta 6",
			"hierba": [
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-15", "porcentaje": 50}, "dia": {"nivel": "13-15", "porcentaje": 50}}
				},
				{
					"numero": 69,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}, "noche": {"nivel": 14, "porcentaje": 20}}
				},
				{
					"numero": 81,
					"nivel": 15,
					"porcentaje": 10
				},
				{
					"numero": 63,
					"nivel": "12-14",
					"porcentaje": 10
				},
				{
					"numero": 43,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 60}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 54,
					"nivel": "5-10",
					"porcentaje": 90
				},
				{
					"numero": 55,
					"nivel": 10,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 13,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 14,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 14,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 13,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Azafrán",
			"regalo": [
				{
					"numero": 252,
					"nivel": 5,
					"observaciones": "Tras conseguir las 16 medallas y derrotar a Rojo."
				},
				{
					"numero": 255,
					"nivel": 5,
					"observaciones": "Tras conseguir las 16 medallas y derrotar a Rojo."
				},
				{
					"numero": 258,
					"nivel": 5,
					"observaciones": "Tras conseguir las 16 medallas y derrotar a Rojo."
				}
			],
			"intercambio": [
				{
					"numero": 25,
					"necesita": 25,
					"observaciones": "Americano"
				},
				{
					"numero": 374,
					"necesita": 205,
					"observaciones": "Tras escoger inicial Hoenn"
				}
			]
		},
		{
			"nombre": "Ruta 7",
			"hierba": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-19", "porcentaje": 40}, "dia": {"nivel": "17-19", "porcentaje": 35}, "noche": {"nivel": 17, "porcentaje": 30}}
				},
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 30}, "dia": {"nivel": 17, "porcentaje": 30}}
				},
				{
					"numero": 58,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 20}, "dia": {"nivel": "15-18", "porcentaje": 25}, "noche": {"nivel": 18, "porcentaje": 20}}
				},
				{
					"numero": 20,
					"nivel": 19,
					"porcentaje": 10
				},
				{
					"numero": 198,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 35}}
				},
				{
					"numero": 228,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 5}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-17", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "18-20", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-17", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "18-20", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-17", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 17,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 18,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "17-18",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Azulona",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-17", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "18-20", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-17", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "18-20", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "15-17", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 88,
					"nivel": "15-20",
					"porcentaje": 90
				},
				{
					"numero": 89,
					"nivel": 15,
					"porcentaje": 10
				}
			],
			"casino": [
				{
					"numero": 122,
					"nivel": 5,
					"fichas": 3333
				},
				{
					"numero": 133,
					"nivel": 5,
					"fichas": 6666
				},
				{
					"numero": 137,
					"nivel": 5,
					"fichas": 9999
				}
			]
		},
		{
			"nombre": "Ruta 5",
			"hierba": [
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-15", "porcentaje": 60}, "dia": {"nivel": "13-15", "porcentaje": 60}}
				},
				{
					"numero": 69,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}, "noche": {"nivel": 14, "porcentaje": 20}}
				},
				{
					"numero": 63,
					"nivel": "12-14",
					"porcentaje": 10
				},
				{
					"numero": 43,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 60}}
				},
				{
					"numero": 44,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 10}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 13,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 14,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "13-14",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Celeste",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "14-16", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "11-13", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 118,
					"nivel": "5-10",
					"porcentaje": 90
				},
				{
					"numero": 119,
					"nivel": 10,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			]
		},
		{
			"nombre": "Ruta 24",
			"hierba": [
				{
					"numero": 69,
					"probabilidad": {"tipo":"hora", "maniana":{"nivel": "8-10", "porcentaje": 60}, "dia":{"nivel": 8, "porcentaje": 35}, "noche":{"nivel": 8, "porcentaje": 5}}
				},
				{
					"numero": 63,
					"nivel": 9,
					"porcentaje": 20
				},
				{
					"numero": 70,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 15}, "dia": {"nivel": "12-14", "porcentaje": 15}, "noche": {"nivel": 12, "porcentaje": 10}}
				},
				{
					"numero": 48,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 8, "porcentaje": 5}, "noche": {"nivel": 8, "porcentaje": 30}}
				},
				{
					"numero": 191,
					"probabilidad": {"tipo":"hora", "dia": {"nivel": 10, "porcentaje": 30}}
				},
				{
					"numero": 43,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 30}}
				},
				{
					"numero": 49,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 5}}
				}
			],
			"surf": [
				{
					"numero": 118,
					"nivel": "5-10",
					"porcentaje": 90
				},
				{
					"numero": 119,
					"nivel": 10,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "8-10",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 9,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 9,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "8-10",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 25",
			"hierba": [
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana":{"nivel": 8, "porcentaje": 30}, "dia":{"nivel": 8, "porcentaje": 50}}
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana":{"nivel": 10, "porcentaje": 5}, "dia":{"nivel": 10, "porcentaje": 5}}
				},
				{
					"numero": 63,
					"nivel": 9,
					"porcentaje": 10
				},
				{
					"numero": 69,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 30}, "dia": {"nivel": 10, "porcentaje": 30}, "noche": {"nivel": 14, "porcentaje": 5}}
				},
				{
					"numero": 70,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 5}, "dia": {"nivel": 14, "porcentaje": 5}, "noche": {"nivel": 10, "porcentaje": 5}}
				},
				{
					"numero": 48,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 8, "porcentaje": 20}, "noche": {"nivel": 8, "porcentaje": 30}}
				},
				{
					"numero": 43,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 30}}
				},
				{
					"numero": 49,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 8, "porcentaje": 20}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "10-11", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "13-14", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "10-11", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "13-14", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "10-11", "porcentaje": 30}}]}
				},
				{
					"numero": 287,
					"probabilidad": {"tipo": "arbol", "especial":{"nivel": "10-18", "porcentaje": 35}},
					"observaciones": "Árboles en la esquina noroeste."
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "especial":{"nivel": "10-14", "porcentaje": 65}},
					"observaciones": "Árboles en la esquina noroeste."
				}
			],
			"masiva": [
				{
					"numero": 427,
					"nivel": "8-10",
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 118,
					"nivel": "5-10",
					"porcentaje": 90
				},
				{
					"numero": 119,
					"nivel": 10,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "8-10",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 8,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 8,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "8-10",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			],
			"legendario": [
				{
					"numero": 245,
					"nivel": 40
				}
			]
		},

		{
			"nombre": "Ruta 9",
			"hierba": [
				{
					"numero": 56,
					"nivel": 13,
					"porcentaje": 30
				},
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 30}, "dia": {"nivel": 15, "porcentaje": 30}, "noche": {"nivel": 15, "porcentaje": 40}}
				},
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 20}, "dia": {"nivel": 13, "porcentaje": 20}}
				},
				{
					"numero": 20,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 10}, "dia": {"nivel": 15, "porcentaje": 10}, "noche": {"nivel": "13-15", "porcentaje": 25}}
				},
				{
					"numero": 22,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}}
				},
				{
					"numero": 57,
					"nivel": 15,
					"porcentaje": 5
				}
			],
			"masiva": [
				{
					"numero": 302,
					"nivel": "13-15",
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 118,
					"nivel": "10-15",
					"porcentaje": 90
				},
				{
					"numero": 119,
					"nivel": 15,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "13-15",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 13,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 13,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "13-15",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Túnel Roca",
			"caminando": [
				{
					"numero": 104,
					"nivel": "10-13",
					"porcentaje": 35
				},
				{
					"numero": 74,
					"nivel": 10,
					"porcentaje": 30
				},
				{
					"numero": 66,
					"nivel": 12,
					"porcentaje": 20
				},
				{
					"numero": 41,
					"nivel": 8,
					"porcentaje": 10
				},
				{
					"numero": 67,
					"nivel": 14,
					"porcentaje": 5
				}
			],
			"sonidos":[
				{
					"numero": 296,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": 10,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 12,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": 10,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 10",
			"hierba": [
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 30}, "dia": {"nivel": 16, "porcentaje": 30}}
				},
				{
					"numero": 100,
					"nivel": 17,
					"porcentaje": 30
				},
				{
					"numero": 20,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-18", "porcentaje": 25}, "dia": {"nivel": "16-18", "porcentaje": 20}, "noche": {"nivel": 16, "porcentaje": 25}}
				},
				{
					"numero": 22,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 10}, "dia": {"nivel": 18, "porcentaje": 10}}
				},
				{
					"numero": 125,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": "15-18", "porcentaje": 10}, "noche": {"nivel": 15, "porcentaje": 5}}
				},
				{
					"numero": 195,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "16-18", "porcentaje": 40}}
				},
			],
			"surf": [
				{
					"numero": 118,
					"nivel": "10-15",
					"porcentaje": 90
				},
				{
					"numero": 119,
					"nivel": 15,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "16-17",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 16,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 16,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "16-17",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			],
			"legendario": [
				{
					"numero": 145,
					"nivel": 50
				}
			]
		},
		{
			"nombre": "Central de energía",
			"intercambio": [
				{
					"numero": 82,
					"necesita": 51
				}
			]
		},
		{
			"nombre": "Ruta 8",
			"hierba": [
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-19", "porcentaje": 65}, "dia": {"nivel": "17-19", "porcentaje": 65}}
				},
				{
					"numero": 63,
					"nivel": 15,
					"porcentaje": 20
				},
				{
					"numero": 58,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 10}, "dia": {"nivel": 18, "porcentaje": 10}, "noche": {"nivel": 17, "porcentaje": 5}}
				},
				{
					"numero": 64,
					"nivel": 15,
					"porcentaje": 5
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "17-18", "porcentaje": 40}}
				},
				{
					"numero": 93,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 19, "porcentaje": 30}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "16-17", "porcentaje": 50}},{"tipo": "B", "normal":{"nivel": "18-19", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "16-17", "porcentaje": 20}},{"tipo": "B", "normal":{"nivel": "18-19", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "16-17", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "17-19",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 15,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "15-19",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 12",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "22-23", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "24-25", "porcentaje": 65}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "22-23", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "24-25", "porcentaje": 20}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "22-23", "porcentaje": 30}}]}
				},
				{
					"numero": 114,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "24-25", "porcentaje": 15}}]}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": 25,
					"porcentaje": 60
				},
				{
					"numero": 195,
					"nivel": 25,
					"porcentaje": 30
				},
				{
					"numero": 73,
					"nivel": 25,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 211,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"masiva": [
				{
					"numero": 369,
					"nivel": "10-40",
					"porcentaje": 100
				}
			]
		},
		{
			"nombre": "Ruta 11",
			"hierba": [
				{
					"numero": 96,
					"nivel": "14-16",
					"porcentaje": 40
				},
				{
					"numero": 19,
					"nivel": 15,
					"porcentaje": 30
				},
				{
					"numero": 81,
					"nivel": 15,
					"porcentaje": 20
				},
				{
					"numero": 97,
					"nivel": 16,
					"porcentaje": 10
				}
			],
			"cabeza":[
				{
					"numero": 21,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "15-16", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "15-16", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "13-14", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "14-15",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 15,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "14-15",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			],
			"especial": [
				{
					"numero": 143,
					"nivel": 50
				}
			]
		},
		{
			"nombre": "Cueva Diglett",
			"caminando": [
				{
					"numero": 50,
					"nivel": "13-19",
					"porcentaje": 90
				},
				{
					"numero": 51,
					"nivel": "19-29",
					"porcentaje": 10
				}
			],
			"intercambio": [
				{
					"numero": 111,
					"necesita": 438,
					"observaciones": "Tras obtener todas las medallas de Kanto."
				}
			],
			"sonidos":[
				{
					"numero": 296,
					"nivel": 19,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": "15-17",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 19,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": "15-17",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 13",
			"hierba": [
				{
					"numero": 33,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 30,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 20}, "dia": {"nivel": 25, "porcentaje": 20}}
				},
				{
					"numero": 187,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 19}, "dia": {"nivel": "22-24", "porcentaje": 19}}
				},
				{
					"numero": 113,
					"nivel": 25,
					"porcentaje": 1
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
				},
				{
					"numero": 195,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "22-24", "porcentaje": 19}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "22-23", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "24-25", "porcentaje": 65}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "22-23", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "24-25", "porcentaje": 20}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "22-23", "porcentaje": 30}}]}
				},
				{
					"numero": 114,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "24-25", "porcentaje": 15}}]}
				}
			],
			"masiva": [
				{
					"numero": 113,
					"nivel": 23,
					"porcentaje": 40
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": 25,
					"porcentaje": 60
				},
				{
					"numero": 195,
					"nivel": 25,
					"porcentaje": 30
				},
				{
					"numero": 73,
					"nivel": 25,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
				},
				{
					"numero": 211,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 25,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 25,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 14",
			"hierba": [
				{
					"numero": 33,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 30,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 20}, "dia": {"nivel": 25, "porcentaje": 20}}
				},
				{
					"numero": 187,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 10}, "dia": {"nivel": 24, "porcentaje": 10}}
				},
				{
					"numero": 188,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 26, "porcentaje": 9}, "dia": {"nivel": 26, "porcentaje": 9}}
				},
				{
					"numero": 113,
					"nivel": 25,
					"porcentaje": 1
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
				},
				{
					"numero": 195,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "22-24", "porcentaje": 19}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "29-30", "porcentaje": 65}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "29-30", "porcentaje": 20}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 30}}]}
				},
				{
					"numero": 114,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "29-30", "porcentaje": 15}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 25,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "23-25",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 15",
			"hierba": [
				{
					"numero": 33,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 30,
					"nivel": 23,
					"porcentaje": 30
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 20}, "dia": {"nivel": 25, "porcentaje": 20}}
				},
				{
					"numero": 187,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 19}, "dia": {"nivel": "22-24", "porcentaje": 19}}
				},
				{
					"numero": 113,
					"nivel": 25,
					"porcentaje": 1
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
				},
				{
					"numero": 195,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "22-24", "porcentaje": 19}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-23", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "24-26", "porcentaje": 65}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-23", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "24-26", "porcentaje": 20}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-23", "porcentaje": 30}}]}
				},
				{
					"numero": 114,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "24-26", "porcentaje": 15}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 23,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 25,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "23-25",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Fucsia",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-23", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "26-34", "porcentaje": 65}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-23", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "26-34", "porcentaje": 20}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "21-23", "porcentaje": 30}}]}
				},
				{
					"numero": 114,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "26-34", "porcentaje": 15}}]}
				}
			],
			"surf": [
				{
					"numero": 129,
					"nivel": "10-20",
					"porcentaje": 100
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 100}, "buena":{"nivel": 20, "porcentaje": 97}, "super":{"nivel": 40, "porcentaje": 70}}
				},
				{
					"numero": 130,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				}
			]
		},
		{
			"nombre": "Ruta 18",
			"hierba": [
				{
					"numero": 22,
					"nivel": "27-29",
					"porcentaje": 40,
					"probabilidad": {"tipo":"hora", "maniana": {}, "dia": {}}
				},
				{
					"numero": 88,
					"nivel": "26-28",
					"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 50}, "dia": {"porcentaje": 50}, "noche": {"porcentaje": 80}}
				},
				{
					"numero": 89,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 30, "porcentaje": 5}, "dia": {"nivel": 30, "porcentaje": 5}, "noche": {"nivel": "29-30", "porcentaje": 15}}
				},
				{
					"numero": 218,
					"nivel": 27,
					"porcentaje": 5
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "29-30", "porcentaje": 65}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "29-30", "porcentaje": 20}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 30}}]}
				},
				{
					"numero": 114,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "29-30", "porcentaje": 15}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "26-27",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 28,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "26-28",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 17",
			"hierba": [
				{
					"numero": 22,
					"nivel": "28-30",
					"porcentaje": 40,
					"probabilidad": {"tipo":"hora", "maniana": {}, "dia": {}}
				},
				{
					"numero": 88,
					"nivel": "27-29",
					"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 50}, "dia": {"porcentaje": 50}, "noche": {"porcentaje": 80}}
				},
				{
					"numero": 89,
					"nivel": "30-32",
					"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia": {"porcentaje": 5}, "noche": {"porcentaje": 15}}
				},
				{
					"numero": 218,
					"nivel": "27-29",
					"porcentaje": 5
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "26-27",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 28,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "26-28",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 16",
			"hierba": [
				{
					"numero": 22,
					"nivel": "27-29",
					"porcentaje": 40,
					"probabilidad": {"tipo":"hora", "maniana": {}, "dia": {}}
				},
				{
					"numero": 88,
					"nivel": "26-28",
					"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 50}, "dia": {"porcentaje": 50}, "noche": {"porcentaje": 80}}
				},
				{
					"numero": 89,
					"nivel": "29-30",
					"porcentaje": 5
				},
				{
					"numero": 218,
					"nivel": "27-29",
					"porcentaje": 5
				},
				{
					"numero": 198,
					"nivel": 29,
					"probabilidad": {"tipo":"hora", "noche": {"porcentaje": 10}}
				}
			],
			"cabeza":[
				{
					"numero": 21,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "29-30", "porcentaje": 80}}]}
				},
				{
					"numero": 415,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "29-30", "porcentaje": 20}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "26-27", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": "26-27",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 28,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "26-28",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 19",
			"surf": [
				{
					"numero": 72,
					"nivel": "30-35",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 35,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 98,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 67}}
				},
				{
					"numero": 222,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "maniana": 3, "dia": 3}, "super":{"nivel": 40, "maniana": 30, "dia": 30}}
				},
				{
					"numero": 99,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				},
				{
					"numero": 120,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "noche": 3}, "super":{"nivel": 40, "noche": 30}}
				}
			],
			"roca": [
				{
					"numero": 98,
					"nivel": "24-27",
					"porcentaje": 90
				},
				{
					"numero": 99,
					"nivel": "28-31",
					"porcentaje": 10
				}
			],
			"masiva": [
				{
					"numero": 366,
					"nivel": 35,
					"porcentaje": 60
				}
			]
		},
		{
			"nombre": "Ruta 20",
			"surf": [
				{
					"numero": 72,
					"nivel": "30-35",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 35,
					"porcentaje": 10
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 95}, "buena": {"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 5}, "buena": {"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			]
		},
		{
			"nombre": "Isla Canela",
			"surf": [
				{
					"numero": 72,
					"nivel": "30-35",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 35,
					"porcentaje": 10
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 95}, "buena": {"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 5}, "buena": {"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			]
		},
		{
			"nombre": "Ruta 21",
			"hierba": [
				{
					"numero": 114,
					"nivel": "20-35",
					"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 95}, "dia": {"porcentaje": 90}, "noche": {"porcentaje": 95}}
				},
				{
					"numero": 122,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 5}, "dia": {"nivel": "28-30", "porcentaje": 10}, "noche": {"nivel": 28, "porcentaje": 5}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "24-26", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "27-30", "porcentaje": 65}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "24-26", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "27-30", "porcentaje": 20}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "24-26", "porcentaje": 30}}]}
				},
				{
					"numero": 114,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "27-30", "porcentaje": 15}}]}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "30-35",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 35,
					"porcentaje": 10
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 95}, "buena": {"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 5}, "buena": {"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "25-30",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 35,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 35,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "25-30",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Pueblo Paleta",
			"regalo": [
				{
					"numero": 1,
					"nivel": 5,
					"observaciones": "Tras conseguir las 16 medallas y derrotar a Rojo."
				},
				{
					"numero": 4,
					"nivel": 5,
					"observaciones": "Tras conseguir las 16 medallas y derrotar a Rojo."
				},
				{
					"numero": 7,
					"nivel": 5,
					"observaciones": "Tras conseguir las 16 medallas y derrotar a Rojo."
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "5-6", "porcentaje": 50}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "5-6", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-6", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 72,
					"nivel": "30-35",
					"porcentaje": 90
				},
				{
					"numero": 73,
					"nivel": 35,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
				},
				{
					"numero": 72,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
				},
				{
					"numero": 170,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 60}}
				},
				{
					"numero": 90,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
				},
				{
					"numero": 73,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 171,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
				}
			]
		},
		{
			"nombre": "Ruta 1",
			"hierba": [
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-4", "porcentaje": 45}, "dia": {"nivel": "2-4", "porcentaje": 45}}
				},
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 2, "porcentaje": 30}, "dia": {"nivel": 2, "porcentaje": 30}, "noche": {"nivel": "2-6", "porcentaje": 55}}
				},
				{
					"numero": 161,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 20}, "dia": {"nivel": 3, "porcentaje": 20}}
				},
				{
					"numero": 162,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 5}, "dia": {"nivel": 6, "porcentaje": 5}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "2-4", "porcentaje": 45}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "5-6", "porcentaje": 50}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "5-6", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "2-3", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-6", "porcentaje": 30}}]}
				}
			],
			"masiva": [
				{
					"numero": 261,
					"nivel": 2,
					"porcentaje": 40
				},
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 2,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "2-3",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Verde",
			"surf": [
				{
					"numero": 60,
					"nivel": "5-10",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": 10,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 50}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-7", "porcentaje": 30}}]}
				}
			]
		},
		{
			"nombre": "Ruta 2 - Sur",
			"hierba": [
				{
					"numero": 10,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-4", "porcentaje": 31}, "dia": {"nivel": "3-4", "porcentaje": 31}}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 5, "porcentaje": 20}, "dia": {"nivel": 5, "porcentaje": 20}}
				},
				{
					"numero": 12,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "7-8", "porcentaje": 10}}
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}, "dia": {"nivel": "3-8", "porcentaje": 40}}
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 5}, "dia": {"nivel": "7-10", "porcentaje": 9}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "3-5", "porcentaje": 50}}
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "7-10", "porcentaje": 14}}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 4}, "noche": {"nivel": "3-4", "porcentaje": 31}}
				},
				{
					"numero": 168,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 7, "porcentaje": 5}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 50}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-7", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "3-5",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Bosque Verde",
			"hierba": [
				{
					"numero": 10,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 40}, "dia": {"nivel": 3, "porcentaje": 40}}
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 10}, "dia": {"nivel": "3-7", "porcentaje": 15}}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-5", "porcentaje": 30}, "dia": {"nivel": "3-5", "porcentaje": 30}}
				},
				{
					"numero": 12,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 10}}
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 4}, "dia": {"nivel": 7, "porcentaje": 9}}
				},
				{
					"numero": 25,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-7", "porcentaje": 6}, "dia": {"nivel": "4-7", "porcentaje": 6}, "noche": {"nivel": 4, "porcentaje": 5}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "3-5", "porcentaje": 80}}
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 7, "porcentaje": 15}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 50}}]}
				},
				{
					"numero": 164,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-7", "porcentaje": 50}}]}
				},
				{
					"numero": 273,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 30}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 10}}]}
				},
				{
					"numero": 168,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-7", "porcentaje": 10}}]}
				},
				{
					"numero": 285,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 10}}, {"tipo":"B", "normal":{"nivel": "5-7", "porcentaje": 10}}]}
				}
			],
			"masiva": [
				{
					"numero": 401,
					"nivel": "3-5",
					"porcentaje": 40
				}
			],
			"sonidos": [
				{
					"numero": 322,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 325,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 406,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 455,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 2 - Norte",
			"hierba": [
				{
					"numero": 10,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-4", "porcentaje": 31}, "dia": {"nivel": "3-4", "porcentaje": 31}}
				},
				{
					"numero": 11,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 5, "porcentaje": 20}}
				},
				{
					"numero": 12,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "7-8", "porcentaje": 10}, "dia": {"nivel": "7-8", "porcentaje": 10}}
				},
				{
					"numero": 16,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}, "dia": {"nivel": "3-5", "porcentaje": 50}}
				},
				{
					"numero": 17,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 5}, "dia": {"nivel": "7-10", "porcentaje": 9}}
				},
				{
					"numero": 163,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "3-5", "porcentaje": 50}}
				},
				{
					"numero": 164,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": "7-10", "porcentaje": 14}}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 4}, "noche": {"nivel": "3-4", "porcentaje": 31}}
				},
				{
					"numero": 168,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 7, "porcentaje": 5}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 50}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-7", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "3-5",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ciudad Plateada",
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "7-9", "porcentaje": 80}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "7-9", "porcentaje": 20}}], "especial": {"nivel": "5-9", "porcentaje": 65}}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-5", "porcentaje": 30}}]}
				},
				{
					"numero": 396,
					"probabilidad": {"tipo": "arbol", "especial":{"nivel": "5-12", "porcentaje": 35}}
				}
			],
			"intercambio": [
				{
					"numero": 178,
					"necesita": 93
				}
			],
			"fosil":[
				{
					"numero": 142,
					"nivel": 20,
					"observaciones": "Ámbar viejo"
				},
				{
					"numero": 140,
					"nivel": 20,
					"observaciones": "Fósil Domo"
				},
				{
					"numero": 138,
					"nivel": 20,
					"observaciones": "Fósil Hélix"
				},
				{
					"numero": 345,
					"nivel": 20,
					"observaciones": "Fósil Raíz"
				},
				{
					"numero": 347,
					"nivel": 20,
					"observaciones": "Fósil Garra"
				},
				{
					"numero": 410,
					"nivel": 20,
					"observaciones": "Fósil Coraza"
				},
				{
					"numero": 408,
					"nivel": 20,
					"observaciones": "Fósil Cráneo"
				}
			],
			"evento": [
				{
					"numero": 381,
					"nivel": 40,
					"observaciones": "Evento misticristal"
				}
			]
		},
		{
			"nombre": "Ruta 3",
			"hierba": [
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-8", "porcentaje": 55}, "dia": {"nivel": "5-8", "porcentaje": 55}}
				},
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-10", "porcentaje": 35}, "dia": {"nivel": "5-10", "porcentaje": 35}, "noche": {"nivel": "5-10", "porcentaje": 60}}
				},
				{
					"numero": 39,
					"nivel": 6,
					"porcentaje": 10
				},
				{
					"numero": 41,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 5, "porcentaje": 30}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "6-7", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "9-10", "porcentaje": 80}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "6-7", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "9-10", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "6-7", "porcentaje": 30}}]}
				}
			],
			"masiva": [
				{
					"numero": 343,
					"nivel": 5,
					"porcentaje": 40
				}
			],
			"sonidos": [
				{
					"numero": 311,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 312,
					"nivel": 8,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 403,
					"nivel": "5-8",
					"porcentaje": 40,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Monte Moon",
			"caminando": [
				{
					"numero": 41,
					"nivel": 6,
					"porcentaje": 30
				},
				{
					"numero": 74,
					"nivel": 8,
					"porcentaje": 30
				},
				{
					"numero": 27,
					"nivel": 8,
					"porcentaje": 20
				},
				{
					"numero": 46,
					"nivel": 12,
					"porcentaje": 10
				},
				{
					"numero": 28,
					"nivel": 10,
					"porcentaje": 5
				},
				{
					"numero": 35,
					"nivel": 8,
					"porcentaje": 5
				}
			],
			"sonidos":[
				{
					"numero": 296,
					"nivel": 8,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 359,
					"nivel": "6-8",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 433,
					"nivel": 8,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 436,
					"nivel": "6-8",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": 35,
					"porcentaje": 60
				},
				{
					"numero": 129,
					"nivel": "30-35",
					"porcentaje": 40
				}
			],
			"pesca":[
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 100}, "buena":{"nivel": 20, "porcentaje": 90}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 10}, "super":{"nivel": 40, "porcentaje": 100}}
				}
			]
		},
		{
			"nombre": "Ruta 4",
			"hierba": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-10", "porcentaje": 35}, "dia": {"nivel": "5-10", "porcentaje": 35}, "noche": {"nivel": "8-10", "porcentaje": 30}}
				},
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-8", "porcentaje": 55}, "dia": {"nivel": "5-8", "porcentaje": 55}, "noche": {"nivel": 5, "porcentaje": 30}}
				},
				{
					"numero": 39,
					"nivel": 6,
					"porcentaje": 10
				},
				{
					"numero": 41,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 5, "porcentaje": 30}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "6-7", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "9-10", "porcentaje": 80}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "6-7", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "9-10", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "6-7", "porcentaje": 30}}]}
				}
			],
			"surf": [
				{
					"numero": 118,
					"nivel": "5-10",
					"porcentaje": 90
				},
				{
					"numero": 119,
					"nivel": 10,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 20}}
				},
				{
					"numero": 118,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 70}}
				},
				{
					"numero": 119,
					"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 10}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 8,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 8,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Ruta 22",
			"hierba": [
				{
					"numero": 19,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}, "dia": {"nivel": 3, "porcentaje": 30}, "noche": {"nivel": "3-7", "porcentaje": 95}}
				},
				{
					"numero": 21,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-5", "porcentaje": 50}, "dia": {"nivel": "3-5", "porcentaje": 50}}
				},
				{
					"numero": 22,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 5}, "dia": {"nivel": 7, "porcentaje": 5}}
				},
				{
					"numero": 77,
					"nivel": 6,
					"porcentaje": 5
				},
				{
					"numero": 84,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 10}, "dia": {"nivel": 4, "porcentaje": 10}}
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": "5-10",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": 10,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"cabeza":[
				{
					"numero": 163,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 50}}]}
				},
				{
					"numero": 265,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 20}},
									{"tipo": "B", "normal":{"nivel": "5-7", "porcentaje": 20}}]}
				},
				{
					"numero": 204,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "3-4", "porcentaje": 30}}]}
				},
				{
					"numero": 167,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"B", "normal":{"nivel": "5-7", "porcentaje": 30}}]}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 5,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": 3,
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Islas Espuma",
			"plantas": [
				{
					"nombre": "Zonas de acceso",
					"caminando": [
						{
							"numero": 41,
							"nivel": "26-28",
							"porcentaje": 30
						},
						{
							"numero": 42,
							"nivel": "30-32",
							"porcentaje": 30
						},
						{
							"numero": 54,
							"nivel": "28-29",
							"porcentaje": 30
						},
						{
							"numero": 55,
							"nivel": 32,
							"porcentaje": 10
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": "30-32",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "28-29",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": "30-32",
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "28-29",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando": [
						{
							"numero": 41,
							"nivel": "28-29",
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": "32-34",
							"porcentaje": 30
						},
						{
							"numero": 54,
							"nivel": "26-28",
							"porcentaje": 16
						},
						{
							"numero": 55,
							"nivel": "32-34",
							"porcentaje": 14
						},
						{
							"numero": 86,
							"nivel": "32-34",
							"porcentaje": 30
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": "32-34",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "28-34",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": "32-34",
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "28-34",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [
						{
							"numero": 41,
							"nivel": "29-30",
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": "33-35",
							"porcentaje": 30
						},
						{
							"numero": 54,
							"nivel": "27-30",
							"porcentaje": 16
						},
						{
							"numero": 55,
							"nivel": "33-35",
							"porcentaje": 14
						},
						{
							"numero": 86,
							"nivel": "33-35",
							"porcentaje": 30
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": "33-35",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "30-35",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": "33-35",
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "30-35",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 3",
					"caminando": [
						{
							"numero": 41,
							"nivel": "31-32",
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": "34-36",
							"porcentaje": 30
						},
						{
							"numero": 54,
							"nivel": "31-32",
							"porcentaje": 12
						},
						{
							"numero": 55,
							"nivel": "34-36",
							"porcentaje": 14
						},
						{
							"numero": 86,
							"nivel": 34,
							"porcentaje": 10
						},
						{
							"numero": 87,
							"nivel": "35-36",
							"porcentaje": 24
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": "34-36",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "32-34",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": "34-36",
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "32-34",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 4",
					"caminando": [
						{
							"numero": 42,
							"nivel": "38-40",
							"porcentaje": 30
						},
						{
							"numero": 54,
							"nivel": 34,
							"porcentaje": 10
						},
						{
							"numero": 55,
							"nivel": "37-38",
							"porcentaje": 14
						},
						{
							"numero": 86,
							"nivel": 34,
							"porcentaje": 10
						},
						{
							"numero": 87,
							"nivel": "37-38",
							"porcentaje": 24
						},
						{
							"numero": 124,
							"nivel": "38-40",
							"porcentaje": 12
						}
					],
					"surf": [
						{
							"numero": 86,
							"nivel": "30-40",
							"porcentaje": 60
						},
						{
							"numero": 116,
							"nivel": "30-40",
							"porcentaje": 30
						},
						{
							"numero": 80,
							"nivel": "35-50",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
						},
						{
							"numero": 98,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 7}}
						},
						{
							"numero": 54,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 30}}
						},
						{
							"numero": 116,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
						},
						{
							"numero": 130,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 60}}
						},
						{
							"numero": 99,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 5}}
						},
						{
							"numero": 117,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 5}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 38,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": 34,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 38,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": 34,
							"porcentaje": 20,
							"region": "Sinnoh"
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
			"nombre": "Ruta 28",
			"hierba": [
				{
					"numero": 77,
					"nivel": 40,
					"porcentaje": 30
				},
				{
					"numero": 114,
					"nivel": 39,
					"porcentaje": 30
				},
				{
					"numero": 232,
					"nivel": 40,
					"porcentaje": 20
				},
				{
					"numero": 78,
					"nivel": 42,
					"porcentaje": 10
				},
				{
					"numero": 84,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 41, "porcentaje": 5}, "dia": {"nivel": 41, "porcentaje": 5}}
				},
				{
					"numero": 85,
					"probabilidad": {"tipo":"hora", "maniana": {"nivel": 43, "porcentaje": 5}, "dia": {"nivel": 43, "porcentaje": 5}}
				},
				{
					"numero": 215,
					"probabilidad": {"tipo":"hora", "noche": {"nivel": 42, "porcentaje": 10}}
				}
			],
			"cabeza":[
				{
					"numero": 177,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "39-40", "porcentaje": 20}},
									{"tipo":"B", "normal":{"nivel": "41-43", "porcentaje": 20}}]}
				},
				{
					"numero": 190,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "39-40", "porcentaje": 30}},
									{"tipo": "B", "normal":{"nivel": "41-43", "porcentaje": 30}}]}
				},
				{
					"numero": 214,
					"probabilidad": {"tipo": "arbol", "grupos":[{"tipo":"A", "normal":{"nivel": "39-40", "porcentaje": 50}},
									{"tipo": "B", "normal":{"nivel": "41-43", "porcentaje": 50}}]}
				}
			],
			"surf": [
				{
					"numero": 60,
					"nivel": "35-40",
					"porcentaje": 90
				},
				{
					"numero": 61,
					"nivel": 40,
					"porcentaje": 10
				}
			],
			"pesca": [
				{
					"numero": 129,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
				},
				{
					"numero": 60,
					"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
				}
			],
			"sonidos": [
				{
					"numero": 293,
					"nivel": "39-40",
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 264,
					"nivel": 40,
					"porcentaje": 20,
					"region": "Hoenn"
				},
				{
					"numero": 399,
					"nivel": 40,
					"porcentaje": 20,
					"region": "Sinnoh"
				},
				{
					"numero": 418,
					"nivel": "39-40",
					"porcentaje": 20,
					"region": "Sinnoh"
				}
			]
		},
		{
			"nombre": "Monte Plateado",
			"plantas": [
				{
					"nombre": "Exterior - Centro Pokémon",
					"hierba": [
						{
							"numero": 77,
							"nivel": 42,
							"porcentaje": 30
						},
						{
							"numero": 114,
							"nivel": 41,
							"porcentaje": 30
						},
						{
							"numero": 232,
							"nivel": 42,
							"porcentaje": 20
						},
						{
							"numero": 78,
							"nivel": 44,
							"porcentaje": 10
						},
						{
							"numero": 84,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 41, "porcentaje": 5}, "dia": {"nivel": 41, "porcentaje": 5}}
						},
						{
							"numero": 85,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 43, "porcentaje": 5}, "dia": {"nivel": 43, "porcentaje": 5}}
						},
						{
							"numero": 215,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "41-43", "porcentaje": 10}}
						}
					],
					"cabeza":[
						{
							"numero": 177,
							"probabilidad": {"tipo": "arbol", "normal":{"nivel": "39-43", "porcentaje": 10}}
						},
						{
							"numero": 190,
							"probabilidad": {"tipo": "arbol", "normal":{"nivel": "39-43", "porcentaje": 30}}
						},
						{
							"numero": 214,
							"probabilidad": {"tipo": "arbol", "normal":{"nivel": "39-43", "porcentaje": 60}}
						}
					],
					"surf": [
						{
							"numero": 60,
							"nivel": "30-40",
							"porcentaje": 8
						},
						{
							"numero": 61,
							"nivel": "30-45",
							"porcentaje": 92
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 60,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 93}}
						}
					],
					"sonidos": [
						{
							"numero": 293,
							"nivel": "41-42",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 264,
							"nivel": 42,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 399,
							"nivel": 42,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 418,
							"nivel": "41-42",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Exterior - Ladera",
					"hierba": [
						{
							"numero": 42,
							"nivel": "48-51",
							"porcentaje": 40
						},
						{
							"numero": 95,
							"nivel": 48,
							"porcentaje": 30
						},
						{
							"numero": 231,
							"nivel": 48,
							"porcentaje": 10
						},
						{
							"numero": 232,
							"nivel": 50,
							"porcentaje": 10
						},
						{
							"numero": 55,
							"nivel": 51,
							"porcentaje": 5
						},
						{
							"numero": 246,
							"nivel": "15-20",
							"porcentaje": 5
						}
					],
					"cabeza":[
						{
							"numero": 177,
							"probabilidad": {"tipo": "arbol", "normal":{"nivel": "42-48", "porcentaje": 10}}
						},
						{
							"numero": 190,
							"probabilidad": {"tipo": "arbol", "normal":{"nivel": "42-48", "porcentaje": 30}}
						},
						{
							"numero": 214,
							"probabilidad": {"tipo": "arbol", "normal":{"nivel": "42-48", "porcentaje": 60}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 48,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "48-51",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 48,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "48-51",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Exterior - Ladera nevada",
					"hierba": [
						{
							"numero": 55,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 48, "porcentaje": 30}, "dia": {"nivel": 48, "porcentaje": 30}, "noche": {"nivel": 48, "porcentaje": 20}}
						},
						{
							"numero": 215,
							"nivel": 45,
							"porcentaje": 20
						},
						{
							"numero": 232,
							"nivel": 47,
							"porcentaje": 20
						},
						{
							"numero": 195,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 15}, "dia": {"nivel": 45, "porcentaje": 15}, "noche": {"nivel": 45, "porcentaje": 10}}
						},
						{
							"numero": 246,
							"nivel": "15-30",
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": 48,
							"porcentaje": 5
						},
						{
							"numero": 200,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": "45-48", "porcentaje": 15}}
						},
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 47,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "45-48",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 47,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "45-48",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Interior - Cueva con Cascadas",
					"caminando": [
						{
							"numero": 95,
							"nivel": 42,
							"porcentaje": 30
						},
						{
							"numero": 232,
							"nivel": 44,
							"porcentaje": 30
						},
						{
							"numero": 75,
							"nivel": "41-43",
							"porcentaje": 20
						},
						{
							"numero": 231,
							"nivel": 43,
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": 45,
							"porcentaje": 5
						},
						{
							"numero": 246,
							"nivel": "15-20",
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 118,
							"nivel": "30-40",
							"porcentaje": 8
						},
						{
							"numero": 119,
							"nivel": "30-50",
							"porcentaje": 92
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 63}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 30}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 7}, "super":{"nivel": 40, "porcentaje": 37}}
						},
						{
							"numero": 130,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 63}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 43,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "42-44",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 43,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "42-44",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Interior - Cueva Pequeña",
					"caminando": [
						{
							"numero": 195,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 35}, "dia": {"nivel": 45, "porcentaje": 35}, "noche": {"nivel": 45, "porcentaje": 5}}
						},
						{
							"numero": 55,
							"nivel": 48,
							"porcentaje": 20
						},
						{
							"numero": 232,
							"nivel": "47-48",
							"porcentaje": 20
						},
						{
							"numero": 231,
							"nivel": 46,
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": 48,
							"porcentaje": 5
						},
						{
							"numero": 246,
							"nivel": "15-20",
							"porcentaje": 5
						},
						{
							"numero": 247,
							"nivel": 45,
							"porcentaje": 5
						},
						{
							"numero": 200,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 30}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": "47-48",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "45-46",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": "47-48",
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "45-46",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Interior - Cueva Espiral",
					"caminando": [
						{
							"numero": 195,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 30}, "dia": {"nivel": 45, "porcentaje": 30}, "noche": {"nivel": 45, "porcentaje": 20}}
						},
						{
							"numero": 215,
							"nivel": 48,
							"porcentaje": 20
						},
						{
							"numero": 232,
							"nivel": "48-50",
							"porcentaje": 20
						},
						{
							"numero": 231,
							"nivel": 46,
							"porcentaje": 10
						},
						{
							"numero": 55,
							"nivel": 48,
							"porcentaje": 10
						},
						{
							"numero": 42,
							"nivel": 48,
							"porcentaje": 5
						},
						{
							"numero": 246,
							"nivel": "15-20",
							"porcentaje": 5
						},
						{
							"numero": 200,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 10}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": "48-50",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "46-48",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": "48-50",
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "46-48",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Interior - Cueva Final",
					"caminando": [
						{
							"numero": 55,
							"nivel": 48,
							"porcentaje": 30
						},
						{
							"numero": 215,
							"nivel": 50,
							"porcentaje": 20
						},
						{
							"numero": 232,
							"nivel": 47,
							"porcentaje": 20
						},
						{
							"numero": 195,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 20}, "dia": {"nivel": 45, "porcentaje": 20}, "noche": {"nivel": 45, "porcentaje": 10}}
						},
						{
							"numero": 42,
							"nivel": 48,
							"porcentaje": 5
						},
						{
							"numero": 246,
							"nivel": "15-20",
							"porcentaje": 5
						},
						{
							"numero": 200,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 10}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 47,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "45-48",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 47,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "45-48",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Cueva de Moltres",
					"caminando": [
						{
							"numero": 55,
							"nivel": 48,
							"porcentaje": 10
						},
						{
							"numero": 208,
							"nivel": 48,
							"porcentaje": 20
						},
						{
							"numero": 232,
							"nivel": "47-48",
							"porcentaje": 20
						},
						{
							"numero": 195,
							"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 40}, "dia": {"nivel": 45, "porcentaje": 40}, "noche": {"nivel": 45, "porcentaje": 30}}
						},
						{
							"numero": 42,
							"nivel": 48,
							"porcentaje": 5
						},
						{
							"numero": 246,
							"nivel": "15-20",
							"porcentaje": 5
						},
						{
							"numero": 200,
							"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 10}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": "47-48",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "45-48",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": "47-48",
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "45-48",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					],
					"legendario": [
						{
							"numero": 146,
							"nivel": 50
						}
					]
				}
			]
		},
		{
			"nombre": "Monte Mortero",
			"plantas": [
				{
					"nombre": "Planta baja (entrada)",
					"caminando": [
						{
							"numero": 41,
							"nivel": "13-15",
							"porcentaje": 60
						},
						{
							"numero": 66,
							"nivel": 14,
							"porcentaje": 20
						},
						{
							"numero": 19,
							"nivel": "14-16",
							"porcentaje": 14
						},
						{
							"numero": 74,
							"nivel": 14,
							"porcentaje": 5
						},
						{
							"numero": 183,
							"nivel": 15,
							"porcentaje": 1
						}
					],
					"masiva": [
						{
							"numero": 183,
							"nivel": "13-15",
							"porcentaje": 40
						}
					],
					"surf": [
						{
							"numero": 118,
							"nivel": "10-25",
							"porcentaje": 90
						},
						{
							"numero": 119,
							"nivel": "15-25",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 14,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "13-15",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 14,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "13-15",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Planta baja (interior)",
					"caminando": [
						{
							"numero": 41,
							"nivel": 14,
							"porcentaje": 5
						},
						{
							"numero": 66,
							"nivel": "13-15",
							"porcentaje": 35
						},
						{
							"numero": 19,
							"nivel": 14,
							"porcentaje": 10
						},
						{
							"numero": 74,
							"nivel": "13-15",
							"porcentaje": 50
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 15,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": 13,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 15,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": 13,
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano",
					"caminando": [
						{
							"numero": 41,
							"nivel": "15-17",
							"porcentaje": 60
						},
						{
							"numero": 66,
							"nivel": 16,
							"porcentaje": 10
						},
						{
							"numero": 19,
							"nivel": 16,
							"porcentaje": 20
						},
						{
							"numero": 74,
							"nivel": 16,
							"porcentaje": 5
						},
						{
							"numero": 20,
							"nivel": 16,
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 118,
							"nivel": "10-25",
							"porcentaje": 90
						},
						{
							"numero": 119,
							"nivel": "15-25",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 15,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": 13,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 15,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": 13,
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					],
					"regalo": [
						{
							"numero": 236,
							"nivel": 10,
							"observaciones": "Vencer Karateka Kiyo"
						}
					]
				},
				{
					"nombre": "Primera planta",
					"caminando": [
						{
							"numero": 42,
							"nivel": 30,
							"porcentaje": 5
						},
						{
							"numero": 66,
							"nivel": 28,
							"porcentaje": 5
						},
						{
							"numero": 67,
							"nivel": 32,
							"porcentaje": 30
						},
						{
							"numero": 74,
							"nivel": "31-32",
							"porcentaje": 20
						},
						{
							"numero": 20,
							"nivel": 30,
							"porcentaje": 10
						},
						{
							"numero": 75,
							"nivel": 31,
							"porcentaje": 30
						}
					],
					"surf": [
						{
							"numero": 118,
							"nivel": "10-25",
							"porcentaje": 90
						},
						{
							"numero": 119,
							"nivel": "15-25",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}, "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 118,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 40}, "super":{"nivel": 40, "porcentaje": 90}}
						},
						{
							"numero": 119,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 31,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "31-32",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 31,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "31-32",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				}
			]
		},
		{
			"nombre": "Islas Remolino",
			"plantas": [
				{
					"nombre": "Planta baja",
					"caminando": [
						{
							"numero": 98,
							"nivel": "22-24",
							"porcentaje": 50
						},
						{
							"numero": 41,
							"nivel": 23,
							"porcentaje": 30
						},
						{
							"numero": 86,
							"nivel": "22-24",
							"porcentaje": 15
						},
						{
							"numero": 42,
							"nivel": 23,
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 72,
							"nivel": "15-25",
							"porcentaje": 60
						},
						{
							"numero": 116,
							"nivel": "10-20",
							"porcentaje": 30
						},
						{
							"numero": 73,
							"nivel": "15-25",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
						},
						{
							"numero": 98,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 60}}
						},
						{
							"numero": 116,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
						},
						{
							"numero": 99,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 117,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 24,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "22-23",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 24,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "22-23",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 1",
					"caminando": [
						{
							"numero": 98,
							"nivel": "22-24",
							"porcentaje": 50
						},
						{
							"numero": 41,
							"nivel": 23,
							"porcentaje": 30
						},
						{
							"numero": 86,
							"nivel": "22-24",
							"porcentaje": 15
						},
						{
							"numero": 42,
							"nivel": 23,
							"porcentaje": 5
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 24,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "22-23",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 24,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "22-23",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 2",
					"caminando": [
						{
							"numero": 98,
							"nivel": "22-24",
							"porcentaje": 50
						},
						{
							"numero": 41,
							"nivel": 23,
							"porcentaje": 30
						},
						{
							"numero": 86,
							"nivel": "22-24",
							"porcentaje": 15
						},
						{
							"numero": 42,
							"nivel": 23,
							"porcentaje": 5
						}
					],
					"surf": [
						{
							"numero": 116,
							"nivel": "15-25",
							"porcentaje": 60
						},
						{
							"numero": 73,
							"nivel": "15-25",
							"porcentaje": 30
						},
						{
							"numero": 117,
							"nivel": "15-30",
							"porcentaje": 10
						}
					],
					"pesca": [
						{
							"numero": 129,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 95}, "buena":{"nivel": 20, "porcentaje": 60}}
						},
						{
							"numero": 98,
							"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 5}, "buena":{"nivel": 20, "porcentaje": 37}, "super":{"nivel": 40, "porcentaje": 60}}
						},
						{
							"numero": 116,
							"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 3}, "super":{"nivel": 40, "porcentaje": 30}}
						},
						{
							"numero": 99,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 7}}
						},
						{
							"numero": 117,
							"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 3}}
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 24,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "22-23",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 24,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "22-23",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					]
				},
				{
					"nombre": "Sótano 3",
					"caminando": [
						{
							"numero": 98,
							"nivel": "23-25",
							"porcentaje": 50
						},
						{
							"numero": 41,
							"nivel": 24,
							"porcentaje": 30
						},
						{
							"numero": 86,
							"nivel": "23-25",
							"porcentaje": 15
						},
						{
							"numero": 42,
							"nivel": 24,
							"porcentaje": 5
						}
					],
					"sonidos":[
						{
							"numero": 296,
							"nivel": 25,
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 359,
							"nivel": "23-24",
							"porcentaje": 20,
							"region": "Hoenn"
						},
						{
							"numero": 433,
							"nivel": 25,
							"porcentaje": 20,
							"region": "Sinnoh"
						},
						{
							"numero": 436,
							"nivel": "23-24",
							"porcentaje": 20,
							"region": "Sinnoh"
						}
					],
					"legendario":[
						{
							"numero": 249,
							"nivel": 70
						}
					]
				}
			]
		},
		{
			"nombre": "Torre oculta",
			"legendario": [
				{
					"numero": 382,
					"nivel": 50
				},
				{
					"numero": 384,
					"nivel": 50
				}
			]
		},
		{
			"nombre": "Johto",
			"errante": [
				{
					"numero": 243
				},
				{
					"numero": 244
				}
			]
		},
		{
			"nombre": "Kanto",
			"errante": [
				{
					"numero": 380
				}
			]
		},
		{
			"nombre": "PokéWalker",
			"plantas": [
				{
					"nombre": "Prado Tranquilo",
					"observaciones": "Disponible desde el inicio. Tipos preferentes: Fuego - Bicho - Volador",
					"walker": [
						{
							"numero": 84,
							"grupo": "A",
							"nivel": 8,
							"pasos": 2000,
							"observaciones": "Muy común"
						},
						{
							"numero": 115,
							"grupo": "A",
							"nivel": 8,
							"pasos": 3000,
							"observaciones": "Raro"
						},
						{
							"numero": 29,
							"grupo": "B",
							"nivel": 5,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 32,
							"grupo": "B",
							"nivel": 5,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 16,
							"grupo": "C",
							"nivel": 5,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 161,
							"grupo": "C",
							"nivel": 5,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Bosque Murmullos",
					"observaciones": "Disponible desde el inicio.Tipos preferentes: Fuego - Hielo - Volador",
					"walker": [
						{
							"numero": 202,
							"grupo": "A",
							"nivel": 15,
							"pasos": 4000,
							"observaciones": "Raro"
						},
						{
							"numero": 69,
							"grupo": "A",
							"nivel": 8,
							"pasos": 3000,
							"observaciones": "Muy común"
						},
						{
							"numero": 46,
							"grupo": "B",
							"nivel": 6,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 48,
							"grupo": "B",
							"nivel": 6,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 21,
							"grupo": "C",
							"nivel": 5,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 43,
							"grupo": "C",
							"nivel": 5,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Camino Pedregoso",
					"observaciones": "Disponible al ganar 50 vatios. Tipos preferentes: Agua - Lucha - Tierra",
					"walker": [
						{
							"numero": 95,
							"grupo": "A",
							"nivel": 9,
							"pasos": 4000,
							"observaciones": "Común"
						},
						{
							"numero": 240,
							"grupo": "A",
							"nivel": 9,
							"pasos": 5000,
							"observaciones": "Muy raro"
						},
						{
							"numero": 66,
							"grupo": "B",
							"nivel": 7,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 77,
							"grupo": "B",
							"nivel": 7,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 74,
							"grupo": "C",
							"nivel": 6,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 163,
							"grupo": "C",
							"nivel": 6,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Costa Bella",
					"observaciones": "Disponible al ganar 200 vatios. Tipos preferentes: Planta - Eléctrico - Dragón",
					"walker": [
						{
							"numero": 54,
							"grupo": "A",
							"nivel": 10,
							"pasos": 4000,
							"observaciones": "Común"
						},
						{
							"numero": 120,
							"grupo": "A",
							"nivel": 10,
							"pasos": 5000,
							"observaciones": "Muy raro"
						},
						{
							"numero": 60,
							"grupo": "B",
							"nivel": 8,
							"pasos": 1500,
							"observaciones": "Muy común"
						},
						{
							"numero": 79,
							"grupo": "B",
							"nivel": 8,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 191,
							"grupo": "C",
							"nivel": 6,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 194,
							"grupo": "C",
							"nivel": 6,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Urbanización",
					"observaciones": "Disponible al ganar 500 vatios. Tipos preferentes: Lucha - Normal - Psíquico",
					"walker": [
						{
							"numero": 239,
							"grupo": "A",
							"nivel": 11,
							"pasos": 5000,
							"observaciones": "Muy raro"
						},
						{
							"numero": 81,
							"grupo": "A",
							"nivel": 11,
							"pasos": 4000,
							"observaciones": "Común"
						},
						{
							"numero": 198,
							"grupo": "B",
							"nivel": 11,
							"pasos": 1000,
							"observaciones": "Común"
						},
						{
							"numero": 81,
							"grupo": "B",
							"nivel": 8,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 163,
							"grupo": "C",
							"nivel": 7,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 19,
							"grupo": "C",
							"nivel": 7,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Cueva Sombría",
					"observaciones": "Disponible al ganar 1.000 vatios. Tipos preferentes: Agua - Siniestro - Roca",
					"walker": [
						{
							"numero": 92,
							"grupo": "A",
							"nivel": 15,
							"pasos": 5000,
							"observaciones": "Raro"
						},
						{
							"numero": 238,
							"grupo": "A",
							"nivel": 12,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 92,
							"grupo": "B",
							"nivel": 10,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 95,
							"grupo": "B",
							"nivel": 10,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 66,
							"grupo": "C",
							"nivel": 8,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 41,
							"grupo": "C",
							"nivel": 8,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Mar Azul",
					"observaciones": "Disponible al ganar 2.000 vatios. Tipos preferentes: Planta - Eléctrico - Dragón",
					"walker": [
						{
							"numero": 60,
							"grupo": "A",
							"nivel": 15,
							"pasos": 4000,
							"observaciones": "Muy común"
						},
						{
							"numero": 147,
							"grupo": "A",
							"nivel": 10,
							"pasos": 5000,
							"observaciones": "Raro"
						},
						{
							"numero": 90,
							"grupo": "B",
							"nivel": 12,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 98,
							"grupo": "B",
							"nivel": 12,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 72,
							"grupo": "C",
							"nivel": 9,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 118,
							"grupo": "C",
							"nivel": 9,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Arrabal",
					"observaciones": "Disponible al ganar 3.000 vatios. Tipos preferentes: Lucha - Fantasma - Normal",
					"walker": [
						{
							"numero": 63,
							"grupo": "A",
							"nivel": 15,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 100,
							"grupo": "A",
							"nivel": 15,
							"pasos": 3000,
							"observaciones": "Muy común"
						},
						{
							"numero": 88,
							"grupo": "B",
							"nivel": 13,
							"pasos": 1500,
							"observaciones": "Muy común"
						},
						{
							"numero": 109,
							"grupo": "B",
							"nivel": 13,
							"pasos": 1500,
							"observaciones": "Muy común"
						},
						{
							"numero": 19,
							"grupo": "C",
							"nivel": 16,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 162,
							"grupo": "C",
							"nivel": 15,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Llano de Hoenn",
					"observaciones": "Disponible al ganar 5.000 vatios. Tipos preferentes: Fuego - Bicho - Volador",
					"walker": [
						{
							"numero": 300,
							"grupo": "A",
							"nivel": 30,
							"pasos": 7500,
							"observaciones": "Común"
						},
						{
							"numero": 264,
							"grupo": "A",
							"nivel": 30,
							"pasos": 5000,
							"observaciones": "Muy común"
						},
						{
							"numero": 313,
							"grupo": "B",
							"nivel": 25,
							"pasos": 2000,
							"observaciones": "Muy común"
						},
						{
							"numero": 314,
							"grupo": "B",
							"nivel": 25,
							"pasos": 2000,
							"observaciones": "Muy común"
						},
						{
							"numero": 263,
							"grupo": "C",
							"nivel": 17,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 265,
							"grupo": "C",
							"nivel": 15,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Playa Cálida",
					"observaciones": "Disponible al ganar 7.500 vatios. Tipos preferentes: Planta - Eléctrico - Dragón",
					"walker": [
						{
							"numero": 320,
							"grupo": "A",
							"nivel": 31,
							"pasos": 7000,
							"observaciones": "Común"
						},
						{
							"numero": 298,
							"grupo": "A",
							"nivel": 20,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 318,
							"grupo": "B",
							"nivel": 26,
							"pasos": 1500,
							"observaciones": "Muy común"
						},
						{
							"numero": 116,
							"grupo": "B",
							"nivel": 20,
							"pasos": 1500,
							"observaciones": "Muy común"
						},
						{
							"numero": 118,
							"grupo": "C",
							"nivel": 22,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 129,
							"grupo": "C",
							"nivel": 15,
							"pasos": 0,
							"observaciones": "Muy raro"
						}
					]
				},
				{
					"nombre": "Sendero Volcán",
					"observaciones": "Disponible al ganar 10.000 vatios. Tipos preferentes: Agua - Lucha - Roca",
					"walker": [
						{
							"numero": 307,
							"grupo": "A",
							"nivel": 32,
							"pasos": 5000,
							"observaciones": "Muy común"
						},
						{
							"numero": 218,
							"grupo": "A",
							"nivel": 31,
							"pasos": 5000,
							"observaciones": "Muy común"
						},
						{
							"numero": 228,
							"grupo": "B",
							"nivel": 27,
							"pasos": 2000,
							"observaciones": "Muy común"
						},
						{
							"numero": 111,
							"grupo": "B",
							"nivel": 25,
							"pasos": 2000,
							"observaciones": "Muy común"
						},
						{
							"numero": 74,
							"grupo": "C",
							"nivel": 29,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 77,
							"grupo": "C",
							"nivel": 19,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Casa del Árbol",
					"observaciones": "Disponible al ganar 15.000 vatios. Tipos preferentes: Fuego - Volador - Hielo",
					"walker": [
						{
							"numero": 351,
							"grupo": "A",
							"nivel": 30,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 352,
							"grupo": "A",
							"nivel": 30,
							"pasos": 5000,
							"observaciones": "Raro"
						},
						{
							"numero": 234,
							"grupo": "B",
							"nivel": 28,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 203,
							"grupo": "B",
							"nivel": 28,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 44,
							"grupo": "C",
							"nivel": 14,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 70,
							"grupo": "C",
							"nivel": 13,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Cueva del Terror",
					"observaciones": "Disponible al ganar 20.000 vatios. Tipos preferentes: Siniestro - Fantasma - Roca",
					"walker": [
						{
							"numero": 105,
							"grupo": "A",
							"nivel": 30,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 128,
							"grupo": "A",
							"nivel": 30,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 177,
							"grupo": "B",
							"nivel": 24,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 42,
							"grupo": "B",
							"nivel": 33,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 92,
							"grupo": "C",
							"nivel": 15,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 66,
							"grupo": "C",
							"nivel": 13,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Llano de Sinnoh",
					"observaciones": "Disponible al ganar 25.000 vatios. Tipos preferentes: Fuego - Hielo - Volador",
					"walker": [
						{
							"numero": 415,
							"grupo": "A",
							"nivel": 30,
							"pasos": 7000,
							"observaciones": "Común"
						},
						{
							"numero": 439,
							"grupo": "A",
							"nivel": 29,
							"pasos": 7000,
							"observaciones": "Común"
						},
						{
							"numero": 403,
							"grupo": "B",
							"nivel": 33,
							"pasos": 3000,
							"observaciones": "Muy común"
						},
						{
							"numero": 406,
							"grupo": "B",
							"nivel": 30,
							"pasos": 3000,
							"observaciones": "Muy común"
						},
						{
							"numero": 401,
							"grupo": "C",
							"nivel": 15,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 399,
							"grupo": "C",
							"nivel": 13,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Senda Glacial",
					"observaciones": "Disponible al ganar 30.000 vatios. Tipos preferentes: Fuego - Hielo - Tierra",
					"walker": [
						{
							"numero": 459,
							"grupo": "A",
							"nivel": 31,
							"pasos": 10000,
							"observaciones": "Común"
						},
						{
							"numero": 361,
							"grupo": "A",
							"nivel": 28,
							"pasos": 10000,
							"observaciones": "Común"
						},
						{
							"numero": 215,
							"grupo": "B",
							"nivel": 28,
							"pasos": 3000,
							"observaciones": "Muy común"
						},
						{
							"numero": 436,
							"grupo": "B",
							"nivel": 20,
							"pasos": 3000,
							"observaciones": "Muy común"
						},
						{
							"numero": 220,
							"grupo": "C",
							"nivel": 16,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 179,
							"grupo": "C",
							"nivel": 15,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Gran Bosque",
					"observaciones": "Disponible al ganar 40.000 vatios. Tipos preferentes: Fuego - Hielo - Volador",
					"walker": [
						{
							"numero": 357,
							"grupo": "A",
							"nivel": 35,
							"pasos": 6000,
							"observaciones": "Común"
						},
						{
							"numero": 438,
							"grupo": "A",
							"nivel": 30,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 114,
							"grupo": "B",
							"nivel": 30,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 400,
							"grupo": "B",
							"nivel": 30,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 179,
							"grupo": "C",
							"nivel": 19,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 102,
							"grupo": "C",
							"nivel": 17,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Lago Bruma",
					"observaciones": "Disponible al ganar 50.000 vatios. Tipos preferentes: Planta - Eléctrico - Dragón",
					"walker": [
						{
							"numero": 200,
							"grupo": "A",
							"nivel": 32,
							"pasos": 6000,
							"observaciones": "Común"
						},
						{
							"numero": 433,
							"grupo": "A",
							"nivel": 22,
							"pasos": 5000,
							"observaciones": "Común"
						},
						{
							"numero": 418,
							"grupo": "B",
							"nivel": 28,
							"pasos": 1000,
							"observaciones": "Muy común"
						},
						{
							"numero": 93,
							"grupo": "B",
							"nivel": 25,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 223,
							"grupo": "C",
							"nivel": 219,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 170,
							"grupo": "C",
							"nivel": 17,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Playa Tormenta",
					"observaciones": "Disponible al ganar 65.000 vatios. Tipos preferentes: Planta - Eléctrico - Dragón",
					"walker": [
						{
							"numero": 422,
							"variedad": 1,
							"grupo": "A",
							"nivel": 30,
							"pasos": 5000,
							"observaciones": "Muy común"
						},
						{
							"numero": 456,
							"grupo": "A",
							"nivel": 26,
							"pasos": 4000,
							"observaciones": "Raro"
						},
						{
							"numero": 86,
							"grupo": "B",
							"nivel": 27,
							"pasos": 1500,
							"observaciones": "Muy común"
						},
						{
							"numero": 129,
							"grupo": "B",
							"nivel": 30,
							"pasos": 500,
							"observaciones": "Muy común"
						},
						{
							"numero": 54,
							"grupo": "C",
							"nivel": 22,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 90,
							"grupo": "C",
							"nivel": 20,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Zona Vacacional",
					"observaciones": "Disponible al ganar 80.000 vatios. Tipos preferentes: Lucha - Normal - Psíquico",
					"walker": [
						{
							"numero": 417,
							"grupo": "A",
							"nivel": 33,
							"pasos": 8000,
							"observaciones": "Común"
						},
						{
							"numero": 25,
							"grupo": "A",
							"nivel": 30,
							"pasos": 8000,
							"observaciones": "Común"
						},
						{
							"numero": 35,
							"grupo": "B",
							"nivel": 31,
							"pasos": 4000,
							"observaciones": "Muy común"
						},
						{
							"numero": 39,
							"grupo": "B",
							"nivel": 30,
							"pasos": 4000,
							"observaciones": "Muy común"
						},
						{
							"numero": 183,
							"grupo": "C",
							"nivel": 25,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 187,
							"grupo": "C",
							"nivel": 25,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Cueva Calma",
					"observaciones": "Disponible al ganar 100.000 vatios. Tipos preferentes: Siniestro - Psíquico - Fantasma",
					"walker": [
						{
							"numero": 446,
							"grupo": "A",
							"nivel": 33,
							"pasos": 10000,
							"observaciones": "Muy raro"
						},
						{
							"numero": 442,
							"grupo": "A",
							"nivel": 31,
							"pasos": 10000,
							"observaciones": "Muy raro"
						},
						{
							"numero": 349,
							"grupo": "B",
							"nivel": 30,
							"pasos": 7500,
							"observaciones": "Raro"
						},
						{
							"numero": 433,
							"grupo": "B",
							"nivel": 26,
							"pasos": 500,
							"observaciones": "Común"
						},
						{
							"numero": 42,
							"grupo": "C",
							"nivel": 33,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 164,
							"grupo": "C",
							"nivel": 30,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				},
				{
					"nombre": "Ultramar",
					"observaciones": "Disponible al conseguir un pokémon extranjero en la Terminal Global. Tipos preferentes: Siniestro - Psíquico - Fantasma",
					"walker": [
						{
							"numero": 224,
							"grupo": "A",
							"nivel": 19,
							"pasos": 5000,
							"observaciones": "Muy raro"
						},
						{
							"numero": 120,
							"grupo": "A",
							"nivel": 18,
							"pasos": 5000,
							"observaciones": "Raro"
						},
						{
							"numero": 222,
							"grupo": "B",
							"nivel": 16,
							"pasos": 2500,
							"observaciones": "Común"
						},
						{
							"numero": 116,
							"grupo": "B",
							"nivel": 15,
							"pasos": 2500,
							"observaciones": "Común"
						},
						{
							"numero": 223,
							"grupo": "C",
							"nivel": 14,
							"pasos": 0,
							"observaciones": "Muy común"
						},
						{
							"numero": 170,
							"grupo": "C",
							"nivel": 12,
							"pasos": 0,
							"observaciones": "Muy común"
						}
					]
				}
			]
		},
		{
			"nombre": "Evolución",
			"otros": [
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
					"numero": 41
				},
				{
					"numero": 175
				},
				{
					"numero": 179
				},
				{
					"numero": 44
				},
				{
					"numero": 183
				},
				{
					"numero": 60
				},
				{
					"numero": 191
				},
				{
					"numero": 133
				},
				{
					"numero": 79
				},
				{
					"numero": 123
				},
				{
					"numero": 218
				},
				{
					"numero": 220
				},
				{
					"numero": 223
				},
				{
					"numero": 228
				},
				{
					"numero": 116
				},
				{
					"numero": 137
				},
				{
					"numero": 236
				},
				{
					"numero": 113
				},
				{
					"numero": 246
				},
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
					"numero": 17
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
					"numero": 58
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
					"numero": 90
				},
				{
					"numero": 92
				},
				{
					"numero": 100
				},
				{
					"numero": 102
				},
				{
					"numero": 120
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
					"numero": 204
				},
				{
					"numero": 209
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
					"numero": 300
				},
				{
					"numero": 304
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
					"numero": 325
				},
				{
					"numero": 328
				},
				{
					"numero": 333
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
				},
				{
					"numero": 396
				},
				{
					"numero": 403
				},
				{
					"numero": 315
				},
				{
					"numero": 412,
					"variedad": 0
				},
				{
					"numero": 412,
					"variedad": 1
				},
				{
					"numero": 412,
					"variedad": 2
				},
				{
					"numero": 415
				},
				{
					"numero": 420
				},
				{
					"numero": 422,
					"variedad": 1
				},
				{
					"numero": 190
				},
				{
					"numero": 427
				},
				{
					"numero": 200
				},
				{
					"numero": 198
				},
				{
					"numero": 443
				},
				{
					"numero": 447
				},
				{
					"numero": 449
				},
				{
					"numero": 451
				},
				{
					"numero": 453
				},
				{
					"numero": 456
				},
				{
					"numero": 459
				},
				{
					"numero": 215
				},
				{
					"numero": 108
				},
				{
					"numero": 111
				},
				{
					"numero": 114
				},
				{
					"numero": 193
				},
				{
					"numero": 207
				},
				{
					"numero": 355
				}
			]
		},
		{
			"nombre": "Crianza",
			"otros": [
				{
					"numero": 173
				},
				{
					"numero": 174
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
					"numero": 360
				},
				{
					"numero": 440
				},
				{
					"numero": 458
				}
			]
		},
		{
			"nombre": "Intercambiar de Soulsilver",
			"otros": [
				{
					"numero": 37
				},
				{
					"numero": 52
				},
				{
					"numero": 140
				},
				{
					"numero": 165
				},
				{
					"numero": 216
				},
				{
					"numero": 225
				},
				{
					"numero": 227
				},
				{
					"numero": 303
				},
				{
					"numero": 316
				},
				{
					"numero": 345
				},
				{
					"numero": 383
				}
			]
		},
		{
			"nombre": "Intercambiar de otros juegos",
			"otros": [
				{
					"numero": 150
				},
				{
					"numero": 151
				},
				{
					"numero": 251
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
					"numero": 385
				},
				{
					"numero": 386
				},
				{
					"numero": 387
				},
				{
					"numero": 390
				},
				{
					"numero": 393
				},
				{
					"numero": 408
				},
				{
					"numero": 410
				},
				{
					"numero": 422,
					"variedad": 0
				},
				{
					"numero": 425
				},
				{
					"numero": 431
				},
				{
					"numero": 434
				},
				{
					"numero": 462
				},
				{
					"numero": 470
				},
				{
					"numero": 471
				},
				{
					"numero": 476
				},
				{
					"numero": 479
				},
				{
					"numero": 480
				},
				{
					"numero": 481
				},
				{
					"numero": 482
				},
				{
					"numero": 483
				},
				{
					"numero": 484
				},
				{
					"numero": 485
				},
				{
					"numero": 486
				},
				{
					"numero": 487
				},
				{
					"numero": 488
				},
				{
					"numero": 489
				},
				{
					"numero": 490
				},
				{
					"numero": 491
				},
				{
					"numero": 492
				},
				{
					"numero": 493
				}
			]
		}
  ]
}
