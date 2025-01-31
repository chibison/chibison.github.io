const platino = {
  "nombre": "platino",
	"titulo": "Platino",
  "gen": 4,
  "filtros":[
    {
      "nombre": "Pesca",
      "imagen": "cania/vieja.png",
      "filtro": "pesca",
      "defecto": false
    },
    {
      "nombre": "Surf",
      "imagen": "otros/MT.png",
      "filtro": "surf",
      "defecto": false
    },
    {
      "nombre": "Miel",
      "imagen": "otros/miel.png",
      "filtro": "miel",
      "defecto": false
    },
    {
      "nombre": "Pokéradar",
      "imagen": "otros/pokeradar.png",
      "filtro": "radar",
      "defecto": false
    }
  ],
  "lugares":[
    {
      "nombre": "Pueblo Hojaverde",
      "lema": "¡Fresco y libre!",
      "surf": [
        {
          "numero": 54,
          "nivel": "20-30",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ruta 201",
      "inicial":[
        {
          "numero": 387,
          "nivel": 5
        },
        {
          "numero": 390,
          "nivel": 5
        },
        {
          "numero": 393,
          "nivel": 5
        }
      ],
      "hierba":[
        {
          "numero": 396,
          "nivel": "2-3",
          "porcentaje": 50
        },
        {
          "numero": 399,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-4", "porcentaje": 40}, "dia": {"nivel": "2-3", "porcentaje": 50}, "noche": {"nivel": "2-4", "porcentaje": 40}}
        },
        {
          "numero": 401,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 10}, "noche": {"nivel": 3, "porcentaje": 10}}
        },
        {
          "numero": 58,
          "nivel": 2,
          "porcentaje": 8,
          "imagen": "Rojo Fuego"
        }
      ],
      "radar":[
        {
          "numero": 29,
          "nivel": "2-3",
          "porcentaje": 11
        },
        {
          "numero": 32,
          "nivel": "2-3",
          "porcentaje": 11
        }
      ],
      "masiva":[
        {
          "numero": 84,
          "nivel": "2-3",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Lago Veraz",
      "hierba":[
        {
          "numero": 396,
          "nivel": "2-4",
          "porcentaje": 50
        },
        {
          "numero": 399,
          "nivel": "2-4",
          "porcentaje": 50
        },
        {
          "numero": 337,
          "nivel": 4,
          "porcentaje": 8,
          "imagen": "Zafiro"
        },
        {
          "numero": 338,
          "nivel": 4,
          "porcentaje": 8,
          "imagen": "Rubí"
        }
      ],
      "surf": [
        {
          "numero": 54,
          "nivel": "20-30",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar":[
        {
          "numero": 202,
          "nivel": 4,
          "porcentaje": 22
        }
      ]
    },
    {
      "nombre": "Ruta 202",
      "hierba": [
        {
        	"numero": 403,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-4", "porcentaje": 30}, "dia": {"nivel": "3-4", "porcentaje": 20}, "noche": {"nivel": "3-4", "porcentaje": 20}}
        },
        {
        	"numero": 396,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-4", "porcentaje": 20}, "dia": {"nivel": "2-4", "porcentaje": 30}, "noche": {"nivel": "2-4", "porcentaje": 20}}
        },
        {
        	"numero": 399,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-3", "porcentaje": 40}, "dia": {"nivel": "2-3", "porcentaje": 50}, "noche": {"nivel": "2-3", "porcentaje": 50}}
        },
        {
        	"numero": 401,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 10}, "noche": {"nivel": 4, "porcentaje": 10}}
        },
        {
          "numero": 58,
          "nivel": 2,
          "porcentaje": 8,
          "imagen": "Rojo Fuego"
        }
      ],
      "radar":[
        {
      	"numero": 161,
      	"nivel": "2-4",
      	"porcentaje": 22
        }
      ],
      "masiva":[
        {
        	"numero": 263,
        	"nivel": 3,
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 203",
      "hierba": [
        {
        	"numero": 396,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-7", "porcentaje": 35}, "dia": {"nivel": "4-7", "porcentaje": 35}, "noche": {"nivel": "4-7", "porcentaje": 25}}
        },
        {
        	"numero": 399,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-7", "porcentaje": 15}, "dia": {"nivel": "4-7", "porcentaje": 25}, "noche": {"nivel": "5-7", "porcentaje": 15}}
        },
        {
        	"numero": 403,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-5", "porcentaje": 25}, "dia": {"nivel": "4-5", "porcentaje": 25}, "noche": {"nivel": "4-5", "porcentaje": 25}}
        },
        {
        	"numero": 63,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-5", "porcentaje": 15}, "dia": {"nivel": "4-5", "porcentaje": 15}, "noche": {"nivel": "4-5", "porcentaje": 15}}
        },
        {
        	"numero": 401,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 10}, "noche": {"nivel": 5, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 4, "porcentaje": 10}}
        },
        {
          "numero": 273,
          "nivel": 5,
          "porcentaje": 8,
          "imagen": "Rubí"
        },
        {
          "numero": 270,
          "nivel": 5,
          "porcentaje": 8,
          "imagen": "Zafiro"
        },
        {
          "numero": 204,
          "nivel": 5,
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "surf": [
        {
        	"numero": 54,
        	"nivel": "20-30",
        	"porcentaje": 90
        },
        {
        	"numero": 55,
        	"nivel": "20-40",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
        	"numero": 129,
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
        	"numero": 118,
        	"probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
        	"numero": 130,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
        	"numero": 119,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "masiva":[
        {
        	"numero": 104,
        	"nivel": 4,
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Puerta Pirita",
      "plantas": [
        {
          "nombre": "Planta baja",
          "caminando": [
            {
            	"numero": 74,
            	"nivel": "5-8",
            	"porcentaje": 15
            },
            {
            	"numero": 41,
            	"nivel": "5-8",
            	"porcentaje": 50
            },
            {
              "numero": 54,
              "nivel": "5-7",
              "porcentaje": 35
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando": [
            {
            	"numero": 74,
            	"nivel": "6-8",
            	"porcentaje": 10
            },
            {
            	"numero": 41,
            	"nivel": "5-9",
            	"porcentaje": 50
            },
            {
              "numero": 54,
              "nivel": "8-10",
              "porcentaje": 35
            },
            {
              "numero": 42,
              "nivel": 10,
              "porcentaje": 5
            }
          ]
        }
      ],
      "surf":[
        {
        	"numero": 41,
        	"nivel": "20-30",
        	"porcentaje": 60
        },
        {
        	"numero": 54,
        	"nivel": "20-30",
        	"porcentaje": 30
        },
        {
        	"numero": 42,
        	"nivel": "20-40",
        	"porcentaje": 5
        },
        {
        	"numero": 55,
        	"nivel": "20-40",
        	"porcentaje": 5
        }
      ],
      "pesca":[
        {
        	"numero": 129,
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
        	"numero": 339,
        	"probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
        	"numero": 130,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
        	"numero": 340,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ciudad Pirita",
      "lema": "Ciudad de la energía.",
      "intercambio": [
        {
        	"numero": 63,
        	"necesita": 66
        }
      ]
    },
    {
      "nombre": "Mina Pirita",
      "plantas": [
        {
          "nombre": "Planta baja",
          "caminando":[
            {
            	"numero": 74,
            	"nivel": "4-8",
            	"porcentaje": 70
            },
            {
            	"numero": 41,
            	"nivel": "5-7",
            	"porcentaje": 20
            },
            {
            	"numero": 95,
            	"nivel": "6-8",
            	"porcentaje": 10
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando":[
            {
            	"numero": 74,
            	"nivel": "5-9",
            	"porcentaje": 70
            },
            {
            	"numero": 41,
            	"nivel": "6-8",
            	"porcentaje": 20
            },
            {
            	"numero": 95,
            	"nivel": "7-9",
            	"porcentaje": 10
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 204",
      "plantas":[
        {
          "nombre": "Zona sur",
          "hierba": [
            {
            	"numero": 396,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-6", "porcentaje": 25}, "dia": {"nivel": "4-6", "porcentaje": 25}, "noche": {"nivel": "4-6", "porcentaje": 25}}
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-5", "porcentaje": 15}, "dia": {"nivel": "3-5", "porcentaje": 25}, "noche": {"nivel": "4-5", "porcentaje": 15}}
            },
            {
            	"numero": 399,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-6", "porcentaje": 25}, "dia": {"nivel": "4-6", "porcentaje": 25}, "noche": {"nivel": "4-6", "porcentaje": 25}}
            },
            {
            	"numero": 403,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-5", "porcentaje": 15}, "dia": {"nivel": "4-5", "porcentaje": 15}, "noche": {"nivel": "4-5", "porcentaje": 15}}
            },
            {
            	"numero": 401,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 10}, "noche": {"nivel": 4, "porcentaje": 10}}
            },
            {
              "numero": 265,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 10}, "dia": {"nivel": 4, "porcentaje": 10}}
            },
            {
              "numero": 273,
              "nivel": 6,
              "porcentaje": 8,
              "imagen": "Rubí"
            },
            {
              "numero": 270,
              "nivel": 6,
              "porcentaje": 8,
              "imagen": "Zafiro"
            },
            {
              "numero": 204,
              "nivel": 6,
              "porcentaje": 8,
              "imagen": "Esmeralda"
            },
            {
              "numero": 10,
              "nivel": 6,
              "porcentaje": 8,
              "imagen": "Rojo Fuego"
            },
            {
              "numero": 13,
              "nivel": 6,
              "porcentaje": 8,
              "imagen": "Verde Hoja"
            }
          ],
          "surf": [
            {
              "numero": 54,
              "nivel": "20-30",
              "porcentaje": 90
            },
            {
              "numero": 55,
              "nivel": "20-40",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
            },
            {
              "pokedex": "*",
              "numero": 119,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
            }
          ]
        },
        {
          "nombre": "Zona norte",
          "hierba":[
            {
            	"numero": 396,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "9-11", "porcentaje": 25}, "dia": {"nivel": "9-11", "porcentaje": 25}, "noche": {"nivel": "9-11", "porcentaje": 25}}
            },
            {
            	"numero": 399,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "9-11", "porcentaje": 25}, "dia": {"nivel": "9-11", "porcentaje": 25}, "noche": {"nivel": "9-11", "porcentaje": 25}}
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel":"9-10", "porcentaje": 15}, "dia": {"nivel": "8-10", "porcentaje": 25}, "noche": {"nivel": "9-10", "porcentaje": 15}}
            },
            {
            	"numero": 403,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "9-10", "porcentaje": 15}, "dia": {"nivel": "9-10", "porcentaje": 15}, "noche": {"nivel": "9-10", "porcentaje": 15}}
            },
            {
            	"numero": 401,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 8, "porcentaje": 10}, "noche": {"nivel": 9, "porcentaje": 10}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 8, "porcentaje": 10}}
            },
            {
              "numero": 265,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 9, "porcentaje": 10}, "dia": {"nivel": 9, "porcentaje": 10}}
            },
            {
              "numero": 273,
              "nivel": 10,
              "porcentaje": 8,
              "imagen": "Rubí"
            },
            {
              "numero": 270,
              "nivel": 10,
              "porcentaje": 8,
              "imagen": "Zafiro"
            },
            {
              "numero": 204,
              "nivel": 10,
              "porcentaje": 8,
              "imagen": "Esmeralda"
            },
            {
              "numero": 10,
              "nivel": 10,
              "porcentaje": 8,
              "imagen": "Rojo Fuego"
            },
            {
              "numero": 13,
              "nivel": 10,
              "porcentaje": 8,
              "imagen": "Verde Hoja"
            }
          ],
          "radar":[
            {
            	"numero": 191,
            	"nivel": "9-11",
            	"porcentaje": 22
            }
          ]
        }
      ]
    },
    {
      "nombre": "Senda Desolada",
      "caminando": [
        {
        	"numero": 41,
        	"nivel": "3-6",
        	"porcentaje": 65
        },
        {
        	"numero": 54,
        	"nivel": "4-6",
        	"porcentaje": 35
        }
      ],
      "surf":[
        {
          "numero": 41,
          "nivel": "20-30",
          "porcentaje": 30
        },
        {
          "numero": 54,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 42,
          "nivel": "20-40",
          "porcentaje": 5
        },
        {
          "numero": 55,
          "nivel": "20-40",
          "porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Valle Eólico",
      "hierba": [
        {
          "numero": 403,
          "nivel": 10,
          "porcentaje": 20
        },
        {
          "numero": 417,
          "nivel": "9-11",
          "porcentaje": 10
        },
        {
          "numero": 418,
          "nivel": "9-11",
          "porcentaje": 25
        },
        {
          "numero": 422,
          "variedad": 1,
          "nivel": "9-12",
          "porcentaje": 45
        }
      ],
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 30
        },

        {
          "numero": 422,
          "variedad": 1,
          "nivel": "20-30",
          "porcentaje": 60
        },

        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 1
        },

        {
          "numero": 423,
          "variedad": 1,
          "nivel": "20-30",
          "porcentaje": 9
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 90,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
        }
      ],
      "radar":[
        {
          "numero": 179,
          "nivel": "9-12",
          "porcentaje": 22
        }
      ],
      "masiva":[
        {
          "numero": 309,
          "nivel": "9-10",
          "porcentaje": 40
        }
      ],
      "especial": [
        {
          "numero": 425,
          "nivel": 15,
          "observaciones": "Solo viernes"
        }
      ]
    },
    {
      "nombre": "Ruta 205",
      "plantas": [
        {
          "nombre": "Zona sur",
          "hierba": [
            {
            	"numero": 422,
              "variedad": 1,
            	"nivel": "9-12",
            	"porcentaje": 65
            },
            {
            	"numero": 418,
            	"nivel": "10-11",
            	"porcentaje": 15
            },

            {
            	"numero": 399,
            	"nivel": 10,
            	"porcentaje": 10
            },
            {
              "numero": 417,
              "nivel": "9-11",
              "porcentaje": 10
            }
          ],
          "surf": [
            {
            	"numero": 72,
            	"nivel": "20-30",
            	"porcentaje": 30
            },

            {
            	"numero": 422,
              "variedad": 1,
            	"nivel": "20-30",
            	"porcentaje": 60
            },

            {
            	"numero": 73,
            	"nivel": "20-40",
            	"porcentaje": 1
            },

            {
            	"numero": 423,
              "variedad": 1,
            	"nivel": "20-40",
            	"porcentaje": 9
            }
          ],
          "pesca":[
            {
            	"numero": 129,
            	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
            },
            {
            	"numero": 456,
            	"probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
            },
            {
              "pokedex": "*",
            	"numero": 130,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
            },
            {
              "pokedex": "*",
            	"numero": 457,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
            },
            {
              "pokedex": "*",
              "numero": 90,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
            }
          ],
          "radar":[
            {
            	"numero": 187,
            	"nivel": "9-12",
            	"porcentaje": 22
            }
          ]
        },
        {
          "nombre": "Zona norte",
          "hierba": [
            {
            	"numero": 399,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 30}, "dia": {"nivel": "12-14", "porcentaje": 30}, "noche": {"nivel": "12-14", "porcentaje": 30}}
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 28}, "dia": {"nivel": "12-14", "porcentaje": 38}, "noche": {"nivel": "12-14", "porcentaje": 28}}
            },
            {
            	"numero": 265,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": 13, "porcentaje": 10}}
            },
            {
            	"numero": 266,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 10}, "dia": {"nivel": 14, "porcentaje": 10}, "noche": {"nivel": 14, "porcentaje": 10}}
            },
            {
              "numero": 268,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 10}, "dia": {"nivel": 14, "porcentaje": 10}, "noche": {"nivel": 14, "porcentaje": 10}}
            },
            {
              "numero": 267,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 1}, "dia": {"nivel": 15, "porcentaje": 1}, "noche": {"nivel": 15, "porcentaje": 1}}
            },
            {
              "numero": 269,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 1}, "dia": {"nivel": 15, "porcentaje": 1}, "noche": {"nivel": 15, "porcentaje": 1}}
            },
            {
              "numero": 270,
              "nivel": "13-14",
              "porcentaje": 8,
              "imagen": "Zafiro"
            }
          ],
          "surf": [
            {
            	"numero": 54,
            	"nivel": "20-30",
            	"porcentaje": 90
            },

            {
            	"numero": 55,
            	"nivel": "20-40",
            	"porcentaje": 10
            }
          ],
          "pesca":[
            {
            	"numero": 129,
            	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
            	"numero": 339,
            	"probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
            	"numero": 130,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
            },
            {
              "pokedex": "*",
            	"numero": 340,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
            }
          ],
          "radar":[
            {
              "numero": 79,
              "nivel": "13-15",
              "porcentaje": 22
            }
          ]
        }
      ]
    },
    {
      "nombre": "Forja Fuego",
      "hierba": [
        {
          "numero": 419,
          "nivel": "29-31",
          "porcentaje": 25
        },
        {
          "numero": 81,
          "nivel": "28-30",
          "porcentaje": 30
        },
        {
        	"numero": 126,
          "nivel": "28-29",
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 30}, "dia": {"porcentaje": 30}, "noche": {"porcentaje": 20}}
        },
        {
        	"numero": 423,
          "variedad": 1,
          "nivel": "28-29",
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 15}, "dia": {"porcentaje": 15}, "noche": {"porcentaje": 25}}
        }
      ],
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 9
        },
        {
          "numero": 422,
          "variedad": 1,
          "nivel": "20-30",
          "porcentaje": 30
        },
        {
          "numero": 423,
          "variedad": 1,
          "nivel": "20-40",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 90,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
        }
      ],
      "radar": [
        {
          "numero": 304,
          "nivel": "29-31",
          "porcentaje": 22
        }
      ]
    },
    {
      "nombre": "Bosque Vetusto",
      "hierba": [
        {
        	"numero": 92,
        	"nivel": 13,
        	"porcentaje": 4
        },
        {
        	"numero": 399,
        	"nivel": 12,
        	"porcentaje": 10
        },
        {
        	"numero": 401,
        	"nivel": 10,
        	"porcentaje": 10
        },
        {
        	"numero": 427,
        	"nivel": "11-13",
        	"porcentaje": 24
        },
        {
        	"numero": 266,
        	"nivel": 12,
        	"porcentaje": 5
        },
        {
        	"numero": 267,
        	"nivel": 14,
        	"porcentaje": 1
        },
        {
        	"numero": 268,
        	"nivel": 12,
        	"porcentaje": 5
        },
        {
        	"numero": 269,
        	"nivel": 14,
        	"porcentaje": 1
        },
        {
        	"numero": 265,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 10}, "dia": {"nivel": 10, "porcentaje": 10}}
        },
        {
        	"numero": 406,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "10-12", "porcentaje": 30}, "dia": {"nivel": "10-12", "porcentaje": 40}, "noche": {"nivel": "10-12", "porcentaje": 30}}
        },
        {
        	"numero": 163,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 12, "porcentaje": 10}}
        },
        {
        	"numero": 401,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 10}}
        },
        {
          "numero": 10,
          "nivel": 13,
          "porcentaje": 4,
          "imagen": "Rojo Fuego"
        },
        {
          "numero": 11,
          "nivel": 13,
          "porcentaje": 4,
          "imagen": "Rojo Fuego"
        },
        {
          "numero": 13,
          "nivel": 13,
          "porcentaje": 4,
          "imagen": "Verde Hoja"
        },
        {
          "numero": 14,
          "nivel": 13,
          "porcentaje": 4,
          "imagen": "Verde Hoja"
        },
        {
          "numero": 273,
          "nivel": 13,
          "porcentaje": 8,
          "imagen": "Rubí"
        },
        {
          "numero": 204,
          "nivel": 13,
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "radar":[
        {
        	"numero": 290,
        	"nivel": "11-14",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
        	"numero": 287,
        	"nivel": "10-12",
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Vieja Mansión",
      "caminando": [
        {
          "numero": 92,
          "nivel": "14-17",
          "porcentaje": 100
        },
        {
          "numero": 93,
          "nivel": 16,
          "porcentaje": 4,
          "imagen": "Rubí / Zafiro / Esmeralda / Rojo Fuego / Verde Hoja"
        },
        {
          "numero": 94,
          "nivel": "16-17",
          "porcentaje": 4,
          "imagen": "Rubí / Zafiro / Esmeralda / Rojo Fuego / Verde Hoja"
        }
      ],
      "especial": [
        {
          "numero": 479,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 20}}
        }
      ]
    },
    {
      "nombre": "Ciudad Vetusta",
      "lema": "La historia viva.",
      "surf": [
        {
        	"numero": 54,
        	"nivel": "20-40",
        	"porcentaje": 90
        },
        {
        	"numero": 55,
        	"nivel": "20-40",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
        	"numero": 129,
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel": "10-25","porcentaje": 65}}
        },
        {
        	"numero": 339,
        	"probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
        	"numero": 130,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-40","porcentaje": 35}}
        }
      ],
      "intercambio": [
        {
        	"numero": 441,
        	"nivel": "6-7",
        	"necesita": 418
        }
      ],
      "huevo":[
        {
        	"numero": 175,
        	"nivel": 1
        }
      ]
    },
    {
      "nombre": "Ruta 206",
      "hierba": [
        {
          "numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 20}, "dia": {"nivel": "16-17", "porcentaje": 30}, "noche": {"nivel": "16-17", "porcentaje": 20}}
        },
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-18", "porcentaje": 30}, "dia": {"nivel": "16-18", "porcentaje": 30}, "noche": {"nivel": "16-18", "porcentaje": 30}}
        },
        {
          "numero": 402,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "noche": {"nivel":18, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 10}}
        },
        {
          "numero": 207,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-18", "porcentaje": 20}, "dia": {"nivel": "16-18", "porcentaje": 20}, "noche": {"nivel": 16, "porcentaje": 10}}
        },
        {
          "numero": 66,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-19", "porcentaje": 20}, "dia": {"nivel": "17-19", "porcentaje": 20}, "noche": {"nivel": "17-19", "porcentaje": 20}}
        }
      ],
      "radar":[
        {
          "numero": 343,
          "nivel": "17-19",
          "porcentaje": 22
        }
      ],
      "masiva":[
        {
          "numero": 246,
          "nivel": "14-16",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 207",
      "hierba": [
        {
        	"numero": 74,
        	"nivel": "5-7",
        	"porcentaje": 30
        },
        {
        	"numero": 66,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "6-8", "porcentaje": 35}, "dia": {"nivel": "5-8", "porcentaje": 45}, "noche": {"nivel": "6-8", "porcentaje": 35}}
        },
        {
          "numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-7", "porcentaje": 25}, "dia": {"nivel": "5-7", "porcentaje": 25}, "noche": {"nivel": "5-7", "porcentaje": 15}}
        },
        {
        	"numero": 401,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 5, "porcentaje": 10}, "noche": {"nivel": 6, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 5, "porcentaje": 10}}
        }
      ],
      "radar":[
        {
        	"numero": 234,
        	"nivel": "5-7",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
        	"numero": 231,
        	"nivel": 5,
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Monte Corona - Entrada por ruta 207",
      "caminando":[
        {
          "numero": 66,
          "nivel": 20,
          "porcentaje": 10
        },
        {
          "numero": 35,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-25", "porcentaje": 10}, "noche": {"nivel": 17, "porcentaje": 10}}
        },
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 19, "porcentaje": 20}, "dia": {"nivel": "17-19", "porcentaje": 30}, "noche": {"nivel": 19, "porcentaje": 20}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 19, "porcentaje": 5}, "dia": {"nivel": 19, "porcentaje": 5}, "noche": {"nivel": "19-20", "porcentaje": 15}}
        },
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 20}, "dia": {"nivel": "18-20", "porcentaje": 20}, "noche": {"nivel": 19, "porcentaje": 10}}
        },
        {
          "numero": 433,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": 19, "porcentaje": 10}, "noche": {"nivel": 19, "porcentaje": 10}}
        },
        {
          "numero": 436,
          "nivel": 18,
          "porcentaje": 20
        },
        {
          "numero": 299,
          "nivel": 18,
          "porcentaje": 5
        }
      ],
      "surf": [
        {
          "numero": 41,
          "nivel": "20-30",
          "porcentaje": 90
        },
        {
          "numero": 42,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ruta 208",
      "hierba": [
        {
        	"numero": 406,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-19", "porcentaje": 30}, "dia": {"nivel": "18-19", "porcentaje": 30}, "noche": {"nivel": 18, "porcentaje": 20}}
        },
        {
        	"numero": 399,
        	"nivel": 18,
        	"porcentaje": 20
        },
        {
        	"numero": 400,
        	"nivel": "18-20",
        	"porcentaje": 20
        },
        {
          "numero": 280,
          "nivel": "17-18",
          "porcentaje": 15
        },
        {
          "numero": 315,
          "nivel": "19-20",
          "porcentaje": 15
        },
        {
        	"numero": 41,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 19, "porcentaje": 10}}
        },
        {
          "numero": 335,
          "nivel": 20,
          "porcentaje": 8,
          "imagen": "Rubí"
        },
        {
          "numero": 336,
          "nivel": 20,
          "porcentaje": 8,
          "imagen": "Zafiro"
        }
      ],
      "surf": [
        {
        	"numero": 54,
        	"nivel": "20-30",
        	"porcentaje": 90
        },
        {
        	"numero": 55,
        	"nivel": "20-40",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
        	"numero": 235,
        	"nivel": "18-20",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
        	"numero": 206,
        	"nivel": 18,
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ciudad Corazón",
      "lema": "Acogedora y hospitalaria.",
      "regalo": [
        {
        	"numero": 133,
        	"nivel": 5,
        	"observaciones": "Casa de Tecla."
        }
      ]
    },
    {
      "nombre": "Ruta 209",
      "hierba": [
        {
        	"numero": 400,
          "nivel": "18-19",
        	"porcentaje": 30
        },
        {
        	"numero": 315,
          "nivel": "19-20",
          "porcentaje": 25
        },
        {
        	"numero": 280,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-19", "porcentaje": 20}, "dia": {"nivel": "17-19", "porcentaje": 20}, "noche": {"nivel": "17-19", "porcentaje": 10}}
        },
        {
        	"numero": 397,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-19", "porcentaje": 20}, "dia": {"nivel": "18-19", "porcentaje": 20}, "noche": {"nivel": 18, "porcentaje": 10}}
        },
        {
        	"numero": 113,
          "nivel": "17-19",
          "porcentaje": 5
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 19, "porcentaje": 10}}
        },
        {
          "numero": 355,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 10}}
        },
        {
          "numero": 37,
          "nivel": "17-20",
          "porcentaje": 8,
          "imagen": "Verde Hoja"
        }
      ],
      "surf": [
        {
        	"numero": 54,
        	"nivel": "20-30",
        	"porcentaje": 90
        },
        {
        	"numero": 55,
        	"nivel": "20-40",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
        	"numero": 281,
        	"nivel": "18-20",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
        	"numero": 209,
        	"nivel": "18-19",
        	"porcentaje": 40
        }
      ],
      "especial":[
        {
        	"numero": 442,
        	"nivel": 25
        }
      ]
    },
    {
      "nombre": "Torre Perdida",
      "plantas": [
        {
          "nombre": "1er piso",
          "caminando": [
            {
            	"numero": 41,
            	"nivel": "17-19",
            	"porcentaje": 35
            },
            {
            	"numero": 92,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-20", "porcentaje": 65}, "dia": {"nivel": "17-19", "porcentaje": 65}, "noche": {"nivel": "17-19", "porcentaje": 45}}
            },
            {
            	"numero": 355,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "2º piso",
          "caminando": [
            {
            	"numero": 41,
            	"nivel": "17-19",
            	"porcentaje": 35
            },
            {
            	"numero": 92,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-20", "porcentaje": 65}, "dia": {"nivel": "17-19", "porcentaje": 65}, "noche": {"nivel": "17-21", "porcentaje": 45}}
            },
            {
            	"numero": 355,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "3er piso",
          "caminando": [
            {
            	"numero": 41,
            	"nivel": "17-19",
            	"porcentaje": 35
            },
            {
            	"numero": 92,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-20", "porcentaje": 65}, "dia": {"nivel": "17-20", "porcentaje": 65}, "noche": {"nivel": "17-20", "porcentaje": 45}}
            },
            {
            	"numero": 355,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "4º Piso",
          "caminando": [
            {
              "numero": 41,
              "nivel": "17-19",
              "porcentaje": 35
            },
            {
              "numero": 92,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-20", "porcentaje": 65}, "dia": {"nivel": "17-20", "porcentaje": 65}, "noche": {"nivel": "17-20" , "porcentaje": 45}}
            },
            {
              "numero": 355,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "5º Piso",
          "caminando": [
            {
              "numero": 92,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-20", "porcentaje": 65}, "dia": {"nivel": "17-20", "porcentaje": 50}, "noche": {"nivel": "17-20", "porcentaje": 40}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-19", "porcentaje": 35}, "dia": {"nivel": "17-19", "porcentaje": 40}, "noche": {"nivel": "17-20" , "porcentaje": 30}}
            },
            {
              "numero": 42,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "21-22", "porcentaje": 10}}
            },
            {
              "numero": 355,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 20}}
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruinas Sosiego",
      "plantas": [
        {
          "nombre": "Cámara 2",
          "caminando":[
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 100,
              "variedad": 5
            }
          ]
        },
        {
          "nombre": "Cámara 3",
          "caminando":[
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 100,
              "variedad": 17
            }
          ]
        },
        {
          "nombre": "Cámara 4",
          "caminando":[
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 100,
              "variedad": 8
            }
          ]
        },
        {
          "nombre": "Cámara 5",
          "caminando":[
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 100,
              "variedad": 4
            }
          ]
        },
        {
          "nombre": "Cámara 6",
          "caminando":[
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 100,
              "variedad": 13
            }
          ]
        },
        {
          "nombre": "Cámara 7",
          "caminando":[
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 100,
              "variedad": 3
            }
          ]
        },
        {
          "nombre": "Salas pequeñas",
          "caminando":[
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 0
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 1
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 2
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 6
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 9
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 10
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 11
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 12
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 14
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 15
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 16
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 18
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 19
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 20
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 21
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 22
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 23
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 24
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 25
            }
          ]
        },
        {
          "nombre": "Piso superior",
          "caminando": [
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 26
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 5,
              "variedad": 27
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 210 - Zona sur",
      "hierba": [
        {
          "numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "19-21", "porcentaje": 25}, "dia": {"nivel": "19-21", "porcentaje": 45}, "noche": {"nivel": "19-21", "porcentaje": 15}}
        },
        {
          "numero": 74,
          "nivel": 18,
          "porcentaje": 20
        },
        {
          "numero": 397,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 19, "porcentaje": 20}, "dia": {"nivel": 19, "porcentaje": 10}, "noche": {"nivel": 19, "porcentaje": 20}}
        },
        {
          "numero": 123,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "19-21", "porcentaje": 15}, "dia": {"nivel": 19, "porcentaje": 5}, "noche": {"nivel": 19, "porcentaje": 5}}
        },
        {
          "numero": 315,
          "nivel": "20-21",
          "porcentaje": 15
        },
        {
          "numero": 113,
          "nivel": "19-21",
          "porcentaje": 5
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 20, "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 21, "porcentaje": 10}}
        },
        {
          "numero": 273,
          "nivel": 18,
          "porcentaje": 4,
          "imagen": "Rubí"
        },
        {
          "numero": 274,
          "nivel": 20,
          "porcentaje": 4,
          "imagen": "Rubí"
        },
        {
          "numero": 204,
          "nivel": "18-20",
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "radar": [
        {
          "numero": 128,
          "nivel": "19-20",
          "porcentaje": 11
        },
        {
          "numero": 241,
          "nivel": "19-20",
          "porcentaje": 11
        }
      ]
    },
    {
      "nombre": "Ruta 215",
      "hierba": [
        {
        	"numero": 397,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "19-21", "porcentaje": 30}, "dia": {"nivel": "19-22", "porcentaje": 40}, "noche": {"nivel": 19, "porcentaje": 20}}
        },
        {
        	"numero": 183,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "20-22", "porcentaje": 25}, "dia": {"nivel": "20-22", "porcentaje": 25}, "noche": {"nivel": "20-22", "porcentaje": 45}}
        },
        {
        	"numero": 123,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "20-22", "porcentaje": 15}, "dia": {"nivel": 20, "porcentaje": 5}, "noche": {"nivel": 20, "porcentaje": 5}}
        },
        {
        	"numero": 63,
        	"nivel": 19,
        	"porcentaje": 10
        },
        {
        	"numero": 64,
        	"nivel": "21-22",
        	"porcentaje": 10
        },
        {
        	"numero": 108,
        	"nivel": 20,
        	"porcentaje": 10
        }
      ],
      "masiva":[
        {
        	"numero": 96,
        	"nivel": "19-20",
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ciudad Rocavelo",
      "regalo":[
        {
        	"numero": 137,
        	"nivel": 25
        }
      ]
    },
    {
      "nombre": "Ruta 214",
      "hierba": [
        {
        	"numero": 111,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-24", "porcentaje": 30}, "dia": {"nivel": "21-24", "porcentaje": 20}, "noche": {"nivel": "21-24", "porcentaje": 30}}
        },
        {
        	"numero": 74,
        	"nivel": 21,
        	"porcentaje": 20
        },
        {
        	"numero": 75,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 35}, "dia": {"nivel": "22-24", "porcentaje": 35}, "noche": {"nivel": "23-24", "porcentaje": 25}}
        },
        {
        	"numero": 228,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "23-24", "porcentaje": 15}, "dia": {"nivel": "23-24", "porcentaje": 25}, "noche": {"nivel": "22-24", "porcentaje": 15}}
        },
        {
        	"numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 22, "porcentaje": 10}}
        },
        {
          "numero": 37,
          "nivel": 24,
          "porcentaje": 8,
          "imagen": "Verde Hoja"
        }
      ],
      "surf": [
        {
          "numero": 54,
          "nivel": "20-30",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
        	"numero": 261,
        	"nivel": "23-24",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
          "numero": 325,
          "nivel": "21-23",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Túnel del Ruinamaníaco",
      "caminando": [
        {
        	"numero": 74,
        	"nivel": "21-23",
        	"porcentaje": 95,
          "observaciones": "<10 Unown"
        },
        {
        	"numero": 449,
        	"nivel": "22-24",
        	"porcentaje": 5,
          "observaciones": "<10 Unown"
        },
        {
          "numero": 74,
          "nivel": "22-24",
          "porcentaje": 90,
          "observaciones": "10-25 Unown"
        },
        {
          "numero": 449,
          "nivel": "23-25",
          "porcentaje": 10,
          "observaciones": "10-25 Unown"
        },
        {
          "numero": 74,
          "nivel": "23-25",
          "porcentaje": 80,
          "observaciones": ">26 Unown"
        },
        {
          "numero": 449,
          "nivel": "24-26",
          "porcentaje": 20,
          "observaciones": ">26 Unown"
        }
      ]
    },
    {
      "nombre": "Orilla Valor",
      "hierba": [
        {
        	"numero": 228,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-28", "porcentaje": 10}, "dia": {"nivel": "27-28", "porcentaje": 10}, "noche": {"nivel": "27-28", "porcentaje": 20}}
        },
        {
        	"numero": 203,
        	"nivel": "26-28",
        	"porcentaje": 25
        },
        {
        	"numero": 397,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-28", "porcentaje": 25}, "dia": {"nivel": "26-28", "porcentaje": 35}, "noche": {"nivel": "26-28", "porcentaje": 15}}
        },
        {
        	"numero": 400,
        	"nivel": "25-27",
        	"porcentaje": 30
        },
        {
        	"numero": 402,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-27", "porcentaje": 10}, "noche": {"nivel": "26-27", "porcentaje": 10}}
        }
      ],
      "radar":[
        {
        	"numero": 33,
        	"nivel": 27,
        	"porcentaje": 11
        },
        {
        	"numero": 30,
        	"nivel": 27,
        	"porcentaje": 11
        }
      ]
    },
    {
      "nombre": "Ruta 213",
      "hierba": [
        {
        	"numero": 422,
          "variedad": 0,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "24-26", "porcentaje": 35}, "dia": {"nivel": "24-26", "porcentaje": 35}, "noche": {"nivel": "24-26", "porcentaje": 45}}
        },
        {
        	"numero": 418,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "23-25", "porcentaje": 25}, "dia": {"nivel": "23-25", "porcentaje": 25}, "noche": {"nivel": "23-25", "porcentaje": 35}}
        },
        {
        	"numero": 278,
        	"nivel": "24-26",
        	"porcentaje": 20
        },
        {
        	"numero": 441,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "23-25", "porcentaje": 20}, "dia": {"nivel": "23-25", "porcentaje": 20}}
        }
      ],
      "radar":[
        {
        	"numero": 277,
        	"nivel": "21-24",
        	"porcentaje": 22
        }
      ],
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 5
        },
        {
        	"numero": 278,
        	"nivel": "20-30",
        	"porcentaje": 30
        },
        {
        	"numero": 422,
          "variedad": 0,
        	"nivel": "20-30",
        	"porcentaje": 4
        },
        {
          "numero": 423,
          "variedad": 0,
          "nivel": "20-40",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ciudad Pradera",
      "lema": "La ciudad de los pantanos.",
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 9
        },
        {
        	"numero": 422,
          "variedad": 0,
        	"nivel": "20-30",
        	"porcentaje": 30
        },
        {
          "numero": 423,
          "variedad": 0,
          "nivel": "20-30",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "5-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Gran Pantano",
      "plantas": [
        {
          "nombre": "Áreas 1 y 2",
          "hierba":[
            {
            	"numero": 194,
            	"nivel": "28-30",
            	"porcentaje": 40
            },
            {
            	"numero": 400,
            	"nivel": 28,
            	"porcentaje": 20
            },
            {
            	"numero": 357,
              "nivel": "28-30",
            	"porcentaje": 20
            },
            {
            	"numero": 195,
            	"nivel": 30,
            	"porcentaje": 10
            },
            {
            	"numero": 114,
            	"nivel": "30-31",
            	"porcentaje": 5
            },
            {
            	"numero": 193,
            	"nivel": "30-31",
            	"porcentaje": 5
            },
            {
              "numero": 24,
              "nivel": 30,
              "porcentaje": 8,
              "imagen": "Rojo Fuego"
            }
          ]
        },
        {
          "nombre": "Áreas 3 y 4",
          "hierba":[
            {
            	"numero": 194,
            	"nivel": "27-29",
            	"porcentaje": 30
            },
            {
            	"numero": 400,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-28", "porcentaje": 30}, "dia": {"nivel": "27-28", "porcentaje": 30}, "noche": {"nivel": "27-28", "porcentaje": 20}}
            },
            {
            	"numero": 195,
            	"nivel": 29,
            	"porcentaje": 10
            },
            {
            	"numero": 114,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-30", "porcentaje": 25}, "dia": {"nivel": "27-30", "porcentaje": 25}, "noche": {"nivel": "27-30", "porcentaje": 15}}
            },
            {
            	"numero": 193,
            	"nivel": "29-30",
            	"porcentaje": 5
            },
            {
            	"numero": 163,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 27, "porcentaje": 10}}
            },
            {
            	"numero": 164,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 27, "porcentaje": 10}}
            },
            {
              "numero": 24,
              "nivel": 29,
              "porcentaje": 8,
              "imagen": "Rojo Fuego"
            }
          ]
        },
        {
          "nombre": "Área 5",
          "hierba":[
            {
            	"numero": 194,
            	"nivel": "26-28",
            	"porcentaje": 30
            },
            {
            	"numero": 400,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-27", "porcentaje": 30}, "dia": {"nivel": "26-27", "porcentaje": 30}, "noche": {"nivel": 26, "porcentaje": 20}}
            },
            {
            	"numero": 195,
            	"nivel": 28,
            	"porcentaje": 10
            },
            {
            	"numero": 114,
              "nivel": "28-29",
              "porcentaje": 5
            },
            {
            	"numero": 163,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "26-27", "porcentaje": 20}}
            },
            {
            	"numero": 193,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "27-29", "porcentaje": 15}}
            },
            {
              "numero": 24,
              "nivel": 28,
              "porcentaje": 8,
              "imagen": "Rojo Fuego"
            }
          ]
        },
        {
          "nombre": "Área 6",
          "hierba":[
            {
              "numero": 194,
              "nivel": "26-28",
              "porcentaje": 30
            },
            {
              "numero": 400,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-27", "porcentaje": 30}, "dia": {"nivel": "26-27", "porcentaje": 30}, "noche": {"nivel": 26, "porcentaje": 20}}
            },
            {
              "numero": 195,
              "nivel": 28,
              "porcentaje": 10
            },
            {
              "numero": 114,
              "nivel": "28-29",
              "porcentaje": 5
            },
            {
              "numero": 163,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "26-27", "porcentaje": 20}}
            },
            {
              "numero": 193,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-30", "porcentaje": 25}, "dia": {"nivel": "27-30", "porcentaje": 25}, "noche": {"nivel": "27-29", "porcentaje": 15}}
            },
            {
              "numero": 24,
              "nivel": 28,
              "porcentaje": 8,
              "imagen": "Rojo Fuego"
            }
          ]
        }
      ],
      "surf": [
        {
        	"numero": 194,
        	"nivel": "20-30",
        	"porcentaje": 90
        },
        {
        	"numero": 195,
        	"nivel": "20-40",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
        },
        {
          "pokedex": "*",
          "numero": 318,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        }
      ],
      "observatorio": [
        {
          "numero": 194,
          "nivel": "27-30",
          "porcentaje": 10
        },
        {
          "numero": 195,
          "nivel": "27-30",
          "porcentaje": 10
        },
        {
          "numero": 451,
          "nivel": "27-30",
          "porcentaje": 10
        },
        {
          "numero": 453,
          "nivel": "27-30",
          "porcentaje": 10
        },
        {
          "numero": 193,
          "nivel": "27-30",
          "porcentaje": 10
        },
        {
          "numero": 357,
          "nivel": "27-30",
          "porcentaje": 10
        },
        {
          "numero": 455,
          "nivel": "27-30",
          "porcentaje": 10
        },
        {
          "numero": 114,
          "nivel": "27-30",
          "porcentaje": "10"
        },
        {
          "numero": 46,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 102,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 115,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 285,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 316,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 352,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 452,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 454,
          "nivel": "27-30",
          "porcentaje": 10,
          "pokedex": "*"
        }
      ]
    },
    {
      "nombre": "Lago Valor",
      "hierba": [
        {
        	"numero": 54,
        	"nivel": "38-39",
        	"porcentaje": 15
        },
        {
        	"numero": 55,
        	"nivel": "40-41",
        	"porcentaje": 15
        },
        {
        	"numero": 397,
        	"nivel": "38-40",
        	"porcentaje": 35
        },
        {
        	"numero": 400,
        	"nivel": "39-41",
        	"porcentaje": 35
        },
        {
          "numero": 338,
          "nivel": "40-41",
          "porcentaje": 8,
           "imagen": "Rubí"
        },
        {
          "numero": 337,
          "nivel": "40-41",
          "porcentaje": 8,
           "imagen": "Zafiro"
        }
      ],
      "surf": [
        {
        	"numero": 54,
        	"nivel": "20-36",
        	"porcentaje": 90
        },
        {
        	"numero": 55,
        	"nivel": "20-40",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
        	"numero": 129,
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
        	"numero": 118,
        	"probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
        	"numero": 130,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
        	"numero": 119,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar":[
        {
        	"numero": 202,
        	"nivel": "38-40",
        	"porcentaje": 22
        }
      ]
    },
    {
      "nombre": "Ruta 210 - Zona norte",
      "hierba": [
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 20}, "dia": {"nivel": "27-29", "porcentaje": 20}, "noche": {"nivel": "27-29", "porcentaje": 10}}
        },
        {
          "numero": 333,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 27, "porcentaje": 20}, "dia": {"nivel": 27, "porcentaje": 30}, "noche": {"nivel": 27, "porcentaje": 20}}
        },
        {
          "numero": 400,
          "nivel": 28,
          "porcentaje": 20
        },
        {
          "numero": 66,
          "nivel": "28-29",
          "porcentaje": 15
        },
        {
          "numero": 123,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 15}, "dia": {"nivel": 29, "porcentaje": 5}, "noche": {"nivel": 29, "porcentaje": 5}}
        },
        {
          "numero": 67,
          "nivel": "29-30",
          "porcentaje": 10
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 27, "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 28, "porcentaje": 10}}
        },
        {
          "numero": 335,
          "nivel": "29-30",
          "porcentaje": 8,
          "imagen": "Rubí"
        },
        {
          "numero": 336,
          "nivel": "29-30",
          "porcentaje": 8,
          "imagen": "Zafiro"
        }
      ],
      "surf": [
        {
          "numero": 54,
          "nivel": "20-30",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "numero": 371,
          "nivel": "28-29",
          "porcentaje": 22
        }
      ]
    },
    {
      "nombre": "Pueblo Caelestis",
      "lema": "El pasado vive.",
      "surf": [
        {
          "numero": 54,
          "nivel": "20-30",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-20" ,"porcentaje": 65}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "15-35","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 5}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 341,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 30}}
        },
        {
          "pokedex": "*",
          "numero": 342,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 211 - Zona este",
      "hierba":[
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 40}, "dia": {"nivel": "27-29", "porcentaje": 40}, "noche": {"nivel": 27, "porcentaje": 20}}
        },
        {
          "numero": 67,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "29-30", "porcentaje": 15}, "dia": {"nivel": "29-30", "porcentaje": 15}, "noche": {"nivel": "29-30", "porcentaje": 15}}
        },
        {
          "numero": 75,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 20}, "dia": {"nivel": 28, "porcentaje": 20}, "noche": {"nivel": 28, "porcentaje": 20}}
        },
        {
          "numero": 433,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 15}, "dia": {"nivel": "28-30", "porcentaje": 15}, "noche": {"nivel": "28-30", "porcentaje": 15}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 28, "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 29, "porcentaje": 10}}
        },
        {
          "numero": 436,
          "nivel": 29,
          "porcentaje": 10
        }
      ]
    },
    {
      "nombre": "Monte Corona - Entrada por ruta 211",
      "caminando":[
        {
          "numero": 66,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": 13, "porcentaje": 25}, "noche": {"nivel": 13, "porcentaje": 25}}
        },
        {
          "numero": 173,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "noche": {"nivel": 13, "porcentaje": 10}}
        },
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": "13-15", "porcentaje": 30}, "noche": {"nivel": 15, "porcentaje": 20}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": 15, "porcentaje": 5}, "noche": {"nivel": "14-15", "porcentaje": 15}}
        },
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 20}, "dia": {"nivel": "14-16", "porcentaje": 20}, "noche": {"nivel": 16, "porcentaje": 10}}
        },
        {
          "numero": 433,
          "nivel": "13-15",
          "porcentaje": 10
        },
        {
          "numero": 436,
          "nivel": 14,
          "porcentaje": 20
        },
        {
          "numero": 299,
          "nivel": 14,
          "porcentaje": 5
        }
      ]
    },
    {
      "nombre": "Ruta 211 - Zona oeste",
      "hierba":[
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-15", "porcentaje": 40}, "dia": {"nivel": "13-15", "porcentaje": 40}, "noche": {"nivel": 13, "porcentaje": 20}}
        },
        {
          "numero": 399,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 20}, "dia": {"nivel": 14, "porcentaje": 20}, "noche": {"nivel": 14, "porcentaje": 20}}
        },
        {
          "numero": 66,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-15", "porcentaje": 15}, "dia": {"nivel": "14-15", "porcentaje": 15}, "noche": {"nivel": "14-15", "porcentaje": 15}}
        },
        {
          "numero": 433,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 15}, "dia": {"nivel": "14-16", "porcentaje": 15}, "noche": {"nivel": "14-16", "porcentaje": 15}}
        },
        {
          "numero": 436,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 10}, "dia": {"nivel": 16, "porcentaje": 10}, "noche": {"nivel": 16, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 10}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 10}}
        },
        {
          "numero": 216,
          "nivel": "12-14",
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "radar":[
        {
          "numero": 236,
          "nivel": "12-14",
          "porcentaje": 22
        }
      ]
    },
    {
      "nombre": "Ruta 212",
      "plantas": [
        {
          "nombre": "Zona sur",
          "hierba": [
            {
              "numero": 422,
              "variedad": 0,
              "nivel": "23-26",
              "porcentaje": 45
            },
            {
              "numero": 195,
              "nivel": "24-26",
              "porcentaje": 30
            },
            {
              "numero": 418,
              "nivel": "23-25",
              "porcentaje": 15
            },
            {
              "numero": 453,
              "nivel": "24-25",
              "porcentaje": 10
            },
            {
              "numero": 23,
              "nivel": "23-26",
              "porcentaje": 8,
              "imagen": "Rojo Fuego"
            },
            {
              "numero": 270,
              "nivel": 23,
              "porcentaje": 4,
              "imagen": "Zafiro"
            },
            {
              "numero": 271,
              "nivel": 26,
              "porcentaje": 4,
              "imagen": "Zafiro"
            }
          ],
          "surf": [
            {
              "numero": 422,
              "variedad": 0,
              "nivel": "20-30",
              "porcentaje": 60
            },
            {
              "numero": 423,
              "variedad": 0,
              "nivel": "20-40",
              "porcentaje": 9
            },
            {
              "numero": 72,
              "nivel": "20-30",
              "porcentaje": 30
            },
            {
              "numero": 73,
              "nivel": "20-40",
              "porcentaje": 1
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
              "numero": 223,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
            },
            {
              "pokedex": "*",
              "numero": 224,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
            }
          ],
          "radar": [
            {
              "numero": 88,
              "nivel": "24-26",
              "porcentaje": 22
            }
          ]
        },
        {
          "nombre": "Zona norte",
          "hierba": [
            {
              "numero": 315,
              "nivel": "22-24",
              "porcentaje": 35
            },
            {
              "numero": 183,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-23", "porcentaje": 25}, "dia": {"nivel": "21-23", "porcentaje": 25}, "noche": {"nivel": "21-23", "porcentaje": 45}}
            },
            {
              "numero": 281,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 20}, "dia": {"nivel": "22-24", "porcentaje": 10}, "noche": {"nivel": 24, "porcentaje": 10}}
            },
            {
              "numero": 397,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-23", "porcentaje": 20}, "dia": {"nivel": "21-23", "porcentaje": 20}, "noche": {"nivel": 23, "porcentaje": 10}}
            },
            {
              "numero": 280,
              "probabilidad": {"tipo":"hora", "dia": {"nivel": 22, "porcentaje": 10}}
            }
          ],
          "surf": [
            {
              "numero": 54,
              "nivel": "20-30",
              "porcentaje": 90
            },
            {
              "numero": 55,
              "nivel": "20-40",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
            },
            {
              "pokedex": "*",
              "numero": 119,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
            }
          ],
          "radar": [
            {
              "numero": 235,
              "nivel": 23,
              "porcentaje": 22
            }
          ]
        }
      ]
    },
    {
      "nombre": "Jardín Trofeo",
      "hierba": [
        {
          "numero": 25,
          "nivel": "22-24",
          "porcentaje": 10
        },
        {
          "numero": 315,
          "nivel": "22-23",
          "porcentaje": 30
        },
        {
          "numero": 172,
          "probabilidad": {"tipo":"hora", "dia": {"nivel": 16, "porcentaje": 20}, "noche": {"nivel": "21-22", "porcentaje": 10}}
        },
        {
          "numero": 397,
          "probabilidad": {"tipo":"hora", "dia": {"nivel": "17-24", "porcentaje": 60}, "noche": {"nivel": "23-24", "porcentaje": 20}}
        },
        {
          "numero": 402,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 10}, "noche": {"nivel": "22-23", "porcentaje": 30}}
        }
      ],
      "cambio": [
        {
        	"numero": 132,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
        	"numero": 133,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
        	"numero": 173,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
        	"numero": 35,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
        	"numero": 174,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
        	"numero": 39,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
        	"numero": 52,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
        	"numero": 440,
        	"nivel": "16-22",
        	"porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 113,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 439,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 298,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 183,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 438,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 311,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 312,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        },
        {
          "numero": 351,
          "nivel": "16-22",
          "porcentaje": 5,
          "pokedex": "*"
        }
      ]
    },
    {
      "nombre": "Ruta 218",
      "hierba": [
        {
        	"numero": 419,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "29-31", "porcentaje": 30}, "dia": {"nivel": "29-31", "porcentaje": 30}, "noche": {"nivel": "29-31", "porcentaje": 40}}
        },
        {
        	"numero": 423,
          "variedad": 1,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 25}, "dia": {"nivel": "28-30", "porcentaje": 25}, "noche": {"nivel": "28-30", "porcentaje": 35}}
        },
        {
        	"numero": 122,
        	"nivel": "29-31",
        	"porcentaje": 25
        },
        {
        	"numero": 441,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 20}, "dia": {"nivel": "28-30", "porcentaje": 20}}
        }
      ],
      "surf": [
        {
        	"numero": 72,
        	"nivel": "20-30",
        	"porcentaje": 60
        },
        {
        	"numero": 422,
          "variedad": 1,
        	"nivel": "20-30",
        	"porcentaje": 30
        },
        {
        	"numero": 73,
        	"nivel": "20-40",
        	"porcentaje": 9
        },
        {
        	"numero": 423,
          "variedad": 1,
        	"nivel": "20-40",
        	"porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "masiva": [
        {
        	"numero": 100,
        	"nivel": "28-29",
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ciudad Canal",
      "lema": "Puerto de transporte.",
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 422,
          "variedad": 1,
          "nivel": "20-30",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 9
        },
        {
          "numero": 423,
          "variedad": 1,
          "nivel": "20-40",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 120,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
        }
      ]
    },
    {
      "nombre": "Isla Hierro",
      "plantas":[
        {
          "nombre": "Exterior",
          "surf": [
            {
              "numero": 72,
              "nivel": "20-30",
              "porcentaje": 30
            },
            {
              "numero": 278,
              "nivel": "20-30",
              "porcentaje": 60
            },
            {
              "numero": 279,
              "nivel": "20-40",
              "porcentaje": 9
            },
            {
              "numero": 73,
              "nivel": "20-40",
              "porcentaje": 1
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
              "numero": 456,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 60}}
            },
            {
              "pokedex": "*",
              "numero": 457,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-55","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 211,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-40","porcentaje": 5}}
            }
          ]
        },
        {
          "nombre": "Planta baja",
          "caminando": [
            {
            	"numero": 74,
            	"nivel": "29-32",
            	"porcentaje": 35
            },
            {
            	"numero": 75,
            	"nivel": "31-33",
            	"porcentaje": 35
            },
            {
            	"numero": 41,
            	"nivel": 30,
            	"porcentaje": 10
            },
            {
            	"numero": 42,
            	"nivel": "31-32",
            	"porcentaje": 10
            },
            {
            	"numero": 95,
            	"nivel": "31-33",
            	"porcentaje": 10
            }
          ]
        },
        {
          "nombre": "Sótano 1",
          "caminando": [
            {
              "numero": 75,
              "nivel": "31-33",
              "porcentaje": 70
            },
            {
              "numero": 42,
              "nivel": "30-32",
              "porcentaje": 20
            },
            {
              "numero": 95,
              "nivel": "31-33",
              "porcentaje": 10
            },
            {
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Zafiro"
            },
            {
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Rubí"
            }
          ]
        },
        {
          "nombre": "Sótano 2 derecho",
          "caminando": [
            {
              "numero": 208,
              "nivel": "33-35",
              "porcentaje": 10
            },
            {
              "numero": 75,
              "nivel": "31-34",
              "porcentaje": 50
            },
            {
              "numero": 42,
              "nivel": "31-33",
              "porcentaje": 10
            },
            {
              "numero": 95,
              "nivel": 32,
              "porcentaje": 30
            },
            {
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Zafiro"
            },
            {
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Rubí"
            }
          ]
        },
        {
          "nombre": "Sótano 2 izquierdo",
          "caminando": [
            {
              "numero": 75,
              "nivel": "31-34",
              "porcentaje": 50
            },
            {
              "numero": 42,
              "nivel": "31-33",
              "porcentaje": 10
            },
            {
              "numero": 95,
              "nivel": 32,
              "porcentaje": 20
            },
            {
              "numero": 208,
              "nivel": "33-35",
              "porcentaje": 10
            },
            {
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Zafiro"
            },
            {
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Rubí"
            }
          ],
          "huevo": [
            {
            	"numero": 447,
            	"nivel": 1
            }
          ]
        },
        {
          "nombre": "Sótano 3",
          "caminando": [
            {
              "numero": 75,
              "nivel": "31-34",
              "porcentaje": 50
            },
            {
              "numero": 42,
              "nivel": "31-33",
              "porcentaje": 10
            },
            {
              "numero": 95,
              "nivel": 32,
              "porcentaje": 20
            },
            {
              "numero": 208,
              "nivel": "33-35",
              "porcentaje": 10
            },
            {
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Zafiro"
            },
            {
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "imagen": "Rubí"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruinas Hierro",
      "legendario": [
        {
          "numero": 379,
          "nivel": 30
        }
      ]
    },
    {
      "nombre": "Monte Corona - Salida por ruta 216",
      "caminando":[
        {
          "numero": 67,
          "nivel": 35,
          "porcentaje": 10
        },
        {
          "numero": 35,
          "nivel": 32,
          "porcentaje": 10
        },
        {
          "numero": 75,
          "nivel": 34,
          "porcentaje": 20
        },
        {
          "numero": 42,
          "nivel": 34,
          "porcentaje": 5
        },
        {
          "numero": 307,
          "nivel": "33-35",
          "porcentaje": 20
        },
        {
          "numero": 433,
          "nivel": "32-34",
          "porcentaje": 10
        },
        {
          "numero": 436,
          "nivel": 33,
          "porcentaje": 20
        },
        {
          "numero": 299,
          "nivel": 33,
          "porcentaje": 5
        }
      ]
    },
    {
      "nombre": "Ruta 216",
      "hierba": [
        {
          "numero": 215,
          "nivel": "33-35",
          "porcentaje": 35
        },
        {
          "numero": 459,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "32-35", "porcentaje": 40}, "dia": {"nivel": "32-35", "porcentaje": 40}, "noche": {"nivel": "32-35", "porcentaje": 30}}
        },
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "32-33", "porcentaje": 20}, "dia": {"nivel": "32-33", "porcentaje": 20}, "noche": {"nivel": 33, "porcentaje": 10}}
        },
        {
          "numero": 75,
          "nivel": 35,
          "porcentaje": 5
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 32, "porcentaje": 10}}
        },
        {
          "numero": 361,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 33, "porcentaje": 10}}
        },
        {
          "numero": 217,
          "nivel": 35,
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ]
    },
    {
      "nombre": "Ruta 217",
      "hierba": [
        {
          "numero": 215,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "33-35", "porcentaje": 25}, "dia": {"nivel": "33-35", "porcentaje": 25}, "noche": {"nivel": "33-35", "porcentaje": 15}}
        },
        {
          "numero": 459,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "32-35", "porcentaje": 40}, "dia": {"nivel": "32-35", "porcentaje": 40}, "noche": {"nivel": "32-35", "porcentaje": 30}}
        },
        {
          "numero": 220,
          "nivel": "32-34",
          "porcentaje": 35
        },
        {
          "numero": 361,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 33, "porcentaje": 20}}
        },
        {
          "numero": 217,
          "nivel": "35-36",
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "radar": [
        {
          "numero": 221,
          "nivel": "30-31",
          "porcentaje": 22
        },
      ],
      "masiva": [
        {
          "numero": 225,
          "nivel": "32-33",
          "porcentaje": 40
        },
      ]
    },
    {
      "nombre": "Orilla Agudeza",
      "hierba": [
        {
          "numero": 459,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "32-35", "porcentaje": 40}, "dia": {"nivel": "32-35", "porcentaje": 40}, "noche": {"nivel": "32-35", "porcentaje": 30}}
        },
        {
          "numero": 220,
          "nivel": "32-34",
        	"porcentaje": 35
        },
        {
          "numero": 215,
          "nivel": "33-35",
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 25}, "dia": {"porcentaje": 25}, "noche": {"porcentaje": 15}}
        },
        {
          "numero": 361,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "32-33", "porcentaje": 20}}
        },
        {
          "numero": 217,
          "nivel": 36,
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ]
    },
    {
      "nombre": "Ciudad Puntaneva",
      "lema": "Donde vive la nieve.",
      "intercambio": [
        {
        	"numero": 93,
        	"necesita": 308
        }
      ]
    },
    {
      "nombre": "Lago Agudeza",
      "hierba": [
        {
          "numero": 459,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "38-41", "porcentaje": 45}, "dia": {"nivel": "38-41", "porcentaje": 45}, "noche": {"nivel": "38-41", "porcentaje": 25}}
        },
        {
          "numero": 400,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "39-40", "porcentaje": 25}, "dia": {"nivel": "39-40", "porcentaje": 25}, "noche": {"nivel": "39-40", "porcentaje": 25}}
        },
        {
          "numero": 55,
          "nivel": "39-40",
          "porcentaje": 15
        },
        {
          "numero": 215,
          "nivel": 41,
          "porcentaje": 10
        },
        {
          "numero": 54,
          "nivel": 38,
          "porcentaje": 5
        },
        {
          "numero": 361,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "39-40", "porcentaje": 20}}
        },
        {
          "numero": 216,
          "nivel": "40-41",
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "surf": [
        {
          "numero": 54,
          "nivel": "20-40",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 55}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 5}, "super":{"nivel": "20-55","porcentaje": 45}}
        }
      ]
    },
    {
      "nombre": "Monte Corona",
      "plantas":[
        {
          "nombre": "1er a 6º piso y túnel",
          "caminando":[
            {
              "numero": 437,
              "nivel": 37,
              "porcentaje": 20
            },
            {
              "numero": 35,
              "nivel": 36,
              "porcentaje": 10
            },
            {
              "numero": 75,
              "nivel": 38,
              "porcentaje": 20
            },
            {
              "numero": 42,
              "nivel": 38,
              "porcentaje": 5
            },
            {
              "numero": 67,
              "nivel": 39,
              "porcentaje": 10
            },
            {
              "numero": 308,
              "nivel": "37-39",
              "porcentaje": 20
            },
            {
              "numero": 433,
              "nivel": "36-38",
              "porcentaje": 10
            },
            {
              "numero": 299,
              "nivel": 37,
              "porcentaje": 5
            },
            {
              "numero": 338,
              "nivel": 38,
              "porcentaje": 8,
              "imagen": "Rubí"
            },
            {
              "numero": 337,
              "nivel": 38,
              "porcentaje": 8,
              "imagen": "Zafiro"
            }
          ],
          "surf":[
            {
              "numero": 41,
              "nivel": "20-30",
              "porcentaje": 90
            },
            {
              "numero": 42,
              "nivel": "20-40",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
              "numero": 339,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 60}}
            },
            {
              "pokedex": "*",
              "numero": 147,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "15-25","porcentaje": 30}}
            },
            {
              "pokedex": "*",
              "numero": 148,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-55","porcentaje": 5}}
            },
            {
              "pokedex": "*",
              "numero": 340,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 5}}
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando":[
            {
              "numero": 66,
              "nivel": 20,
              "porcentaje": 10
            },
            {
              "numero": 35,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-25", "porcentaje": 10}, "noche": {"nivel": 17, "porcentaje": 10}}
            },
            {
              "numero": 74,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 19, "porcentaje": 20}, "dia": {"nivel": "17-19", "porcentaje": 30}, "noche": {"nivel": 19, "porcentaje": 20}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 19, "porcentaje": 5}, "dia": {"nivel": 19, "porcentaje": 5}, "noche": {"nivel": "19-20", "porcentaje": 15}}
            },
            {
              "numero": 307,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 20}, "dia": {"nivel": "18-20", "porcentaje": 20}, "noche": {"nivel": 19, "porcentaje": 10}}
            },
            {
              "numero": 433,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": 19, "porcentaje": 10}, "noche": {"nivel": 19, "porcentaje": 10}}
            },
            {
              "numero": 436,
              "nivel": 18,
              "porcentaje": 20
            },
            {
              "numero": 299,
              "nivel": 18,
              "porcentaje": 5
            }
          ],
          "surf": [
            {
              "numero": 41,
              "nivel": "20-30",
              "porcentaje": 90
            },
            {
              "numero": 42,
              "nivel": "20-40",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
              "numero": 339,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
            },
            {
              "pokedex": "*",
              "numero": 340,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
            }
          ],
          "especial": [
            {
              "numero": 349,
              "nivel": "10-20",
              "porcentaje": 50,
              "observaciones": "Supercaña en 4 cuadrados al azar"
            }
          ]
        },
        {
          "nombre": "Exterior",
          "hierba": [
            {
              "numero": 459,
              "nivel": 36,
              "porcentaje": 20
            },
            {
              "numero": 67,
              "nivel": 40,
              "porcentaje": 10
            },
            {
              "numero": 433,
              "nivel": "37-39",
              "porcentaje": 10
            },
            {
              "numero": 299,
              "nivel": 38,
              "porcentaje": 5
            },
            {
              "numero": 359,
              "nivel": "38-40",
              "porcentaje": 5
            },
            {
              "numero": 460,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "38-39", "porcentaje": 30}, "dia": {"nivel": "38-39", "porcentaje": 30}, "noche": {"nivel": 39, "porcentaje": 20}}
            },
            {
              "numero": 308,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "38-40", "porcentaje": 20}, "dia": {"nivel": "38-40", "porcentaje": 20}, "noche": {"nivel": 40, "porcentaje": 10}}
            },
            {
              "numero": 42,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 38, "porcentaje": 10}}
            },
            {
              "numero": 164,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 39, "porcentaje": 10}}
            },
            {
              "numero": 338,
              "nivel": "38-39",
              "porcentaje": 8,
              "imagen": "Rubí"
            },
            {
              "numero": 337,
              "nivel": "38-39",
              "porcentaje": 8,
              "imagen": "Zafiro"
            }
          ],
          "radar": [
            {
              "numero": 294,
              "nivel": "37-40",
              "porcentaje": 12
            }
          ]
        },
        {
          "nombre": "Ruinas Iceberg",
          "legendario": [
            {
              "numero": 378,
              "nivel": 30
            }
          ]
        }
      ]
    },
    {
      "nombre": "Columnas Lanza",
      "legendario": [
        {
          "numero": 483,
          "nivel": 70
        },
        {
          "numero": 484,
          "nivel": 70
        }
      ]
    },
    {
      "nombre": "Mundo Distorsión",
      "especial": [
        {
        	"numero": 487,
        	"nivel": 47
        }
      ]
    },
    {
      "nombre": "Caverna Agudeza",
      "legendario":[
        {
          "numero": 480,
          "nivel": 50
        }
      ]
    },
    {
      "nombre": "Caverna Valor",
      "legendario": [
        {
          "numero": 482,
          "nivel": 50
        }
      ]
    },
    {
      "nombre": "Ruta 219",
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 278,
          "nivel": "20-30",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 9
        },
        {
          "numero": 279,
          "nivel": "20-40",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "15-20","porcentaje": 30}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "25-35","porcentaje": 5}, "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ruta 220",
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 278,
          "nivel": "20-30",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 9
        },
        {
          "numero": 279,
          "nivel": "20-40",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "15-20","porcentaje": 30}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 60}}
        },
        {
          "numero": 457,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "25-35","porcentaje": 5}, "super":{"nivel": "30-55","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 170,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
        }
      ]
    },
    {
      "nombre": "Ruta 221",
      "hierba": [
        {
          "numero": 419,
          "nivel": "29-31",
          "porcentaje": 25
        },
        {
          "numero": 185,
          "nivel": "29-31",
          "porcentaje": 25
        },
        {
          "numero": 315,
          "nivel": "28-30",
          "porcentaje": 25
        },
        {
          "numero": 203,
          "nivel": "28-30",
          "porcentaje": 25
        }
      ],
      "radar": [
        {
          "numero": 30,
          "nivel": "30-31",
          "porcentaje": 11
        },
        {
          "numero": 33,
          "nivel": "30-31",
          "porcentaje": 11
        }
      ],
      "masiva": [
        {
          "numero": 83,
          "nivel": "28-29",
          "porcentaje": 40
        }
      ],
      "surf": [
        {
          "numero": 72,
          "nivel": "20-30",
          "porcentaje": 60
        },
        {
          "numero": 278,
          "nivel": "20-30",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 9
        },
        {
          "numero": 279,
          "nivel": "20-40",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "15-20","porcentaje": 30}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "numero": 457,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "25-35","porcentaje": 5}, "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ruta 222",
      "hierba": [
        {
          "numero": 125,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "39-41", "porcentaje": 30}, "dia": {"nivel": "39-41", "porcentaje": 30}, "noche": {"nivel": 39, "porcentaje": 20}}
        },
        {
          "numero": 419,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 40, "porcentaje": 20}, "dia": {"nivel": 40, "porcentaje": 20}, "noche": {"nivel": "38-41", "porcentaje": 40}}
        },
        {
          "numero": 81,
          "nivel": 39,
          "porcentaje": 10
        },
        {
          "numero": 278,
          "nivel": 38,
          "porcentaje": 10
        },
        {
          "numero": 404,
          "nivel": "38-40",
          "porcentaje": 10
        },
        {
          "numero": 441,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 38, "porcentaje": 10}, "dia": {"nivel": 38, "porcentaje": 10}}
        },
        {
          "numero": 82,
          "nivel": 41,
          "porcentaje": 5
        },
        {
          "numero": 279,
          "nivel": 40,
          "porcentaje": 5
        }
      ],
      "surf": [
        {
          "numero": 72,
          "nivel": "30-40",
          "porcentaje": 60
        },
        {
          "numero": 278,
          "nivel": "30-40",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "30-50",
          "porcentaje": 9
        },
        {
          "numero": 279,
          "nivel": "30-50",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "numero": 180,
          "nivel": "38-41",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "numero": 300,
          "nivel": "36-40",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ciudad Marina",
      "lema": "¡Con energía solar!",
      "surf": [
        {
          "numero": 72,
          "nivel": "30-40",
          "porcentaje": 60
        },
        {
          "numero": 278,
          "nivel": "30-40",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "30-50",
          "porcentaje": 9
        },
        {
          "numero": 279,
          "nivel": "30-50",
          "porcentaje": 1
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 120,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
        }
      ],
    },
    {
      "nombre": "Ruta 223",
      "surf":[
        {
          "numero": 73,
          "nivel": "30-50",
          "porcentaje": 60
        },
        {
          "numero": 279,
          "nivel": "30-50",
          "porcentaje": 30
        },
        {
          "numero": 458,
          "nivel": "30-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "numero": 224,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "25-35","porcentaje": 5}, "super":{"nivel": "20-50","porcentaje": 15}}
        },
        {
          "pokedex": "*",
          "numero": 320,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 321,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 5}}
        }
      ],
    },
    {
      "nombre": "Calle Victoria",
      "plantas": [
        {
          "nombre": "Primera planta",
          "caminando": [
            {
            	"numero": 42,
            	"nivel": 43,
            	"porcentaje": 5
            },
            {
            	"numero": 95,
            	"nivel": "41-42",
            	"porcentaje": 20
            },
            {
            	"numero": 208,
            	"nivel": 42,
            	"porcentaje": 5
            },
            {
            	"numero": 75,
            	"nivel": "40-42",
            	"porcentaje": 30
            },
            {
            	"numero": 111,
            	"nivel": 41,
            	"porcentaje": 20
            },
            {
            	"numero": 112,
            	"nivel": "41-43",
            	"porcentaje": 15
            },
            {
            	"numero": 444,
            	"nivel": 41,
            	"porcentaje": 5
            }
          ]
        },
        {
          "nombre": "Segunda planta",
          "caminando": [
            {
            	"numero": 42,
            	"nivel": 44,
            	"porcentaje": 5
            },
            {
            	"numero": 95,
            	"nivel": 42,
            	"porcentaje": 5
            },
            {
            	"numero": 208,
            	"nivel": "42-44",
            	"porcentaje": 40
            },
            {
            	"numero": 75,
            	"nivel": "41-43",
            	"porcentaje": 15
            },
            {
            	"numero": 82,
            	"nivel": "41-43",
            	"porcentaje": 30
            },
            {
            	"numero": 444,
            	"nivel": 43,
            	"porcentaje": 5
            }
          ]
        },
        {
          "nombre": "Sótano profundo",
          "caminando": [
            {
            	"numero": 419,
            	"nivel": "48-50",
            	"porcentaje": 30
            },
            {
            	"numero": 184,
            	"nivel": "47-49",
            	"porcentaje": 30
            },
            {
            	"numero": 87,
            	"nivel": "48-50",
            	"porcentaje": 15
            },
            {
            	"numero": 42,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "47-50", "porcentaje": 5}, "dia": {"nivel": "47-50", "porcentaje": 5}, "noche": {"nivel": "47-50", "porcentaje": 15}}
            },
            {
            	"numero": 75,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "47-49", "porcentaje": 15}, "dia": {"nivel": "47-49", "porcentaje": 5}, "noche": {"nivel": "47-49", "porcentaje": 5}}
            },
            {
            	"numero": 444,
            	"nivel": 49,
            	"porcentaje": 5
            }
          ],
          "surf": [
            {
            	"numero": 419,
            	"nivel": "35-55",
            	"porcentaje": 60
            },
            {
            	"numero": 87,
            	"nivel": "35-55",
            	"porcentaje": 30
            },
            {
            	"numero": 131,
            	"nivel": "35-55",
            	"porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 100}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 100}}
            }
          ]
        }
      ]
    },
    {
      "nombre": "Liga Pokémon",
      "surf": [
        {
          "numero": 278,
          "nivel": "30-40",
          "porcentaje": 60
        },
        {
          "numero": 279,
          "nivel": "30-50",
          "porcentaje": 35
        },
        {
          "numero": 73,
          "nivel": "30-50",
          "porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":"10-25" ,"porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 370,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-30","porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 230",
      "hierba": [
        {
          "numero": 279,
          "nivel": "48-50",
          "porcentaje": 30
        },
        {
          "numero": 419,
          "nivel": "48-50",
          "porcentaje": 25
        },
        {
          "numero": 69,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 47, "porcentaje": 20}, "dia": {"nivel": 47, "porcentaje": 20}}
        },
        {
          "numero": 315,
          "nivel": 49,
          "porcentaje": 10
        },
        {
          "numero": 44,
          "nivel": 49,
          "porcentaje": 5
        },
        {
          "numero": 70,
          "nivel": 49,
          "porcentaje": 5
        },
        {
          "numero": 278,
          "nivel": 48,
          "porcentaje": 5
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 47, "porcentaje": 20}}
        }
      ],
      "surf": [
        {
          "numero": 364,
          "nivel": "35-55",
          "porcentaje":60
        },
        {
          "numero": 279,
          "nivel": "35-55",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "35-55",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 320,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 15}}
        },
        {
          "pokedex": "*",
          "numero": 321,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 5}}
        }
      ],
      "radar": [
        {
          "numero": 175,
          "nivel": "48-50",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "numero": 222,
          "nivel": 48,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 229",
      "hierba": [
        {
          "numero": 315,
          "nivel": "48-50",
          "porcentaje": 45
        },
        {
          "numero": 166,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 50, "porcentaje": 20}}
        },
        {
          "numero": 313,
          "nivel": 49,
          "porcentaje": 10
        },
        {
          "numero": 314,
          "nivel": 49,
          "porcentaje": 10
        },
        {
          "numero": 16,
           "probabilidad": {"tipo":"hora", "maniana": {"nivel": 47, "porcentaje": 5}, "dia": {"nivel": "47-50", "porcentaje": 25}, "noche": {"nivel": "47-50", "porcentaje": 5}}
        },
        {
          "numero": 267,
          "nivel": 48,
          "porcentaje": 5
        },
        {
          "numero": 269,
          "nivel": 48,
          "porcentaje": 5
        },
        {
          "numero": 168,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 50, "porcentaje": 20}}
        },
        {
          "numero": 274,
          "nivel": 48,
          "porcentaje": 8,
          "imagen": "Rubí"
        },
        {
          "numero": 271,
          "nivel": 48,
          "porcentaje": 8,
          "imagen": "Zafiro"
        },
        {
          "numero": 204,
          "nivel": 48,
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "surf": [
        {
          "numero": 283,
          "nivel": "35-45",
          "porcentaje": 95
        },
        {
          "numero": 284,
          "nivel": "35-55",
          "porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":"10-25" ,"porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 55}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        }
      ],
      "radar": [
        {
          "numero": 48,
          "nivel": 48,
          "porcentaje": 2
        },
        {
          "numero": 49,
          "nivel": "47-50",
          "porcentaje": 20
        }
      ],
      "masiva": [
        {
          "numero": 127,
          "nivel": "48-49",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 228",
      "hierba": [
        {
          "numero": 51,
          "nivel": "50-52",
          "porcentaje": 30
        },
        {
          "numero": 112,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "50-52", "porcentaje": 20}, "dia": {"nivel": "50-52", "porcentaje": 20}, "noche": {"nivel": 52, "porcentaje": 10}}
        },
        {
          "numero": 332,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 52, "porcentaje": 20}, "dia": {"nivel": 52, "porcentaje": 20}, "noche": {"nivel": "50-52", "porcentaje": 40}}
        },
        {
          "numero": 450,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "50-51", "porcentaje": 20}, "dia": {"nivel": "50-51", "porcentaje": 20}, "noche": {"nivel": 51, "porcentaje": 10}}
        },
        {
          "numero": 50,
          "nivel": 49,
          "porcentaje": 5
        },
        {
          "numero": 331,
          "nivel": 50,
          "porcentaje": 5
        },
        {
          "numero": 28,
          "nivel": "49-50",
          "porcentaje": 8,
          "imagen": "Verde Hoja"
        }
      ],
      "surf": [
        {
          "numero": 61,
          "nivel": "35-55",
          "porcentaje": 70
        },
        {
          "numero": 60,
          "nivel": "35-45",
          "porcentaje": 30
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "15-20","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 55}}
        },
        {
          "numero": 340,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "25-35","porcentaje": 5}, "super":{"nivel": "30-55","porcentaje": 45}}
        }
      ],
      "masiva": [
        {
          "numero": 374,
          "nivel": "51-52",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruinas Pico Roca",
      "lgendario": [
        {
          "numero": 377,
          "nivel": 30
        }
      ]
    },
    {
      "nombre": "Ruta 227",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "51-53", "porcentaje": 20}, "dia": {"nivel": "51-53", "porcentaje": 20}, "noche": {"nivel": 53, "porcentaje": 10}}
        },
        {
          "numero": 112,
          "nivel": 54,
          "porcentaje": 20
        },
        {
          "numero": 323,
          "nivel": 53,
          "porcentaje": 20
        },
        {
          "numero": 75,
          "nivel": "51-53",
          "porcentaje": 15
        },
        {
          "numero": 110,
          "nivel": 52,
          "porcentaje": 10
        },
        {
          "numero": 227,
          "nivel": 53,
          "porcentaje": 5
        },
        {
          "numero": 111,
          "nivel": 52,
          "porcentaje": 5
        },
        {
          "numero": 322,
          "nivel": 51,
          "porcentaje": 5
        },
        {
          "numero": 42,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 53, "porcentaje": 10}}
        }
      ],
      "surf": [
        {
          "numero": 61,
          "nivel": "35-55",
          "porcentaje": 70
        },
        {
          "numero": 60,
          "nivel": "35-45",
          "porcentaje": 30
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "numero": 324,
          "nivel": "51-53",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "numero": 327,
          "nivel": "53-54",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Montaña Dura",
      "plantas": [
        {
          "nombre": "Exterior",
          "caminando": [
            {
            	"numero": 22,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "51-55", "porcentaje": 20}, "dia": {"nivel": "51-55", "porcentaje": 20}, "noche": {"nivel": "51-55", "porcentaje": 10}}
            },
            {
            	"numero": 112,
            	"nivel": "54-55",
            	"porcentaje": 20
            },
            {
            	"numero": 323,
              "nivel": 53,
            	"porcentaje": 20
            },
            {
            	"numero": 75,
              "nivel": "51-53",
            	"porcentaje": 15
            },
            {
            	"numero": 110,
              "nivel": 52,
              "porcentaje": 10
            },
            {
            	"numero": 227,
            	"nivel": 53,
            	"porcentaje": 5
            },
            {
            	"numero": 322,
            	"nivel": 51,
            	"porcentaje": 5
            },
            {
            	"numero": 111,
            	"nivel": 52,
            	"porcentaje": 5
            },
            {
            	"numero": 42,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 51, "porcentaje": 10}}
            }
          ],
          "radar": [
            {
            	"numero": 324,
            	"nivel": "51-56",
            	"porcentaje": 22
            }
          ]
        },
        {
          "nombre": "Interior",
          "caminando": [
            {
            	"numero": 219,
            	"nivel": 54,
            	"porcentaje": 20
            },
            {
            	"numero": 75,
            	"nivel": "51-53",
            	"porcentaje": 15
            },
            {
            	"numero": 42,
            	"nivel": 52,
            	"porcentaje": 20
            },
            {
            	"numero": 110,
            	"nivel": "51-53",
            	"porcentaje": 15
            },
            {
            	"numero": 111,
            	"nivel": 52,
            	"porcentaje": 5
            },
            {
            	"numero": 112,
            	"nivel": 54,
            	"porcentaje": 20
            },
            {
            	"numero": 218,
            	"nivel": 53,
            	"porcentaje": 5
            }
          ]
        },
        {
          "nombre": "Sala final",
          "legendario": [
            {
            	"numero": 485,
            	"nivel": 50
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 226",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "48-50", "porcentaje": 20}, "dia": {"nivel": "48-50", "porcentaje": 20}}
        },
        {
          "numero": 20,
          "nivel": "49-50",
          "porcentaje": 15
        },
        {
          "numero": 19,
          "nivel": 47,
          "porcentaje": 5
        },
        {
          "numero": 67,
          "nivel": "48-50",
          "porcentaje": 25
        },
        {
          "numero": 75,
          "nivel": 49,
          "porcentaje": 20
        },
        {
          "numero": 354,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "48-50", "porcentaje": 20}}
        },
        {
          "numero": 278,
          "nivel": "47-49",
          "porcentaje": 15
        }
      ],
      "surf": [
        {
          "numero": 278,
          "nivel": "35-45",
          "porcentaje": 60
        },
        {
          "numero": 279,
          "nivel": "35-55",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "35-55",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 116,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 117,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 369,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "15-50","porcentaje": 15}}
        }
      ],
      "radar": [
        {
          "numero": 56,
          "nivel": 47,
          "porcentaje": 2
        },
        {
          "numero": 57,
          "nivel": "51-53",
          "porcentaje": 20
        }
      ],
      "masiva": [
        {
          "numero": 98,
          "nivel": "48-49",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 225",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "48-50", "porcentaje": 30}, "dia": {"nivel": "48-50", "porcentaje": 30}, "noche": {"nivel": "48-49", "porcentaje": 10}}
        },
        {
          "numero": 20,
          "nivel": "49-50",
          "porcentaje": 15
        },
        {
          "numero": 19,
          "nivel": 47,
          "porcentaje": 5
        },
        {
          "numero": 21,
          "nivel": 47,
          "porcentaje": 5
        },
        {
          "numero": 67,
          "nivel": "48-50",
          "porcentaje": 25
        },
        {
          "numero": 75,
          "nivel": 49,
          "porcentaje": 20
        },
        {
          "numero": 354,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "48-50", "porcentaje": 20}}
        }
      ],
      "surf": [
        {
          "numero": 55,
          "nivel": "35-55",
          "porcentaje": 90
        },
        {
          "numero": 54,
          "nivel": "35-45",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "numero": 56,
          "nivel": 47,
          "porcentaje": 2
        },
        {
          "numero": 57,
          "nivel": "49-50",
          "porcentaje": 20
        }
      ],
      "masiva": [
        {
          "numero": 296,
          "nivel": "48-49",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 224",
      "hierba": [
        {
          "numero": 315,
          "nivel": 50,
          "porcentaje": 20
        },
        {
          "numero": 419,
          "nivel": 50,
          "porcentaje": 20
        },
        {
          "numero": 69,
          "nivel": 49,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 20}, "dia": {"porcentaje": 20}}
        },
        {
          "numero": 423,
          "variedad": 0,
          "nivel": 49,
          "porcentaje": 10
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 49, "porcentaje": 20}}
        },
        {
          "numero": 44,
          "nivel": 51,
          "porcentaje": 5
        },
        {
          "numero": 70,
          "nivel": 51,
          "porcentaje": 5
        },
        {
          "numero": 267,
          "nivel": 52,
          "porcentaje": 5
        },
        {
          "numero": 269,
          "nivel": 52,
          "porcentaje": 5
        },
        {
          "numero": 279,
          "nivel": 51,
          "porcentaje": 10
        },
        {
          "numero": 213,
          "nivel": 52,
          "porcentaje": 8,
          "imagen": "Esmeralda"
        }
      ],
      "surf":[
        {
          "numero": 73,
          "nivel": "35-55",
          "porcentaje": 30
        },
        {
          "numero": 279,
          "nivel": "35-55",
          "porcentaje": 60
        },
        {
          "numero": 423,
          "variedad": 0,
          "nivel": "35-55",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 370,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-30","porcentaje": 15}}
        }
      ],
      "radar": [
        {
          "numero": 355,
          "nivel": 23,
          "porcentaje": 2
        },
        {
          "numero":356,
          "nivel": 52,
          "porcentaje": 20
        }
      ],
      "masiva": [
        {
          "numero": 177,
          "nivel": 50,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Fuente Despedida",
      "hierba": [
        {
        	"numero": 400,
        	"nivel": "37-38",
        	"porcentaje": 30
        },
        {
          "numero": 397,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "38-40", "porcentaje": 25}, "dia": {"nivel": "38-40", "porcentaje": 25}, "noche": {"nivel": 40, "porcentaje": 10}}
        },
        {
        	"numero": 433,
        	"nivel": "37-39",
        	"porcentaje": 10
        },
        {
        	"numero": 356,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 40, "porcentaje": 5}, "dia": {"nivel": 40, "porcentaje": 5}, "noche": {"nivel": "39-40", "porcentaje": 15}}
        },
        {
        	"numero": 75,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "37-39", "porcentaje": 35}, "dia": {"nivel": "37-39", "porcentaje": 35}, "noche": {"nivel": "37-38", "porcentaje": 25}}
        },
        {
        	"numero": 42,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 38, "porcentaje": 10}}
        },
        {
          "numero": 337,
          "nivel": "39-40",
          "porcentaje": 8,
          "imagen": "Zafiro"
        },
        {
          "numero": 338,
          "nivel": "39-40",
          "porcentaje": 8,
          "imagen": "Rubí"
        }
      ],
      "surf": [
        {
        	"numero": 55,
        	"nivel": "20-40",
        	"porcentaje": 100
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-15", "porcentaje": 100}, "buena":{"nivel": "10-25", "porcentaje": 55}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25", "porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55", "porcentaje": 55}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55", "porcentaje": 45}}
        }
      ]
    },
    {
      "nombre": "Cueva Retorno",
      "plantas": [
        {
          "nombre": "Antes del primer pilar",
          "caminando": [
            {
              "numero": 42,
              "nivel": "17-18",
              "porcentaje": 25
            },
            {
              "numero": 92,
              "nivel": "15-17",
              "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 40}, "dia": {"porcentaje": 40}, "noche": {"porcentaje": 30}}
            },
            {
              "numero": 436,
              "nivel": 15,
              "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 15}, "dia": {"porcentaje": 15}, "noche": {"porcentaje": 20}}
            },
            {
              "numero": 433,
              "nivel": "16-18",
              "porcentaje": 10
            },
            {
              "numero": 355,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 5}, "dia": {"nivel": 18, "porcentaje": 5}, "noche": {"nivel": "16-18", "porcentaje": 15}}
            }
          ]
        },
        {
          "nombre": "Entre el primer y segundo pilar",
          "caminando": [
            {
              "numero": 42,
              "nivel": "37-38",
              "porcentaje": 25
            },
            {
              "numero": 93,
              "nivel": "35-37",
              "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 40}, "dia": {"porcentaje": 40}, "noche": {"porcentaje": 30}}
            },
            {
              "numero": 437,
              "nivel": 35,
              "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 15}, "dia": {"porcentaje": 15}, "noche": {"porcentaje": 20}}
            },
            {
              "numero": 358,
              "nivel": "36-38",
              "porcentaje": 10
            },
            {
              "numero": 356,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 38, "porcentaje": 5}, "dia": {"nivel": 38, "porcentaje": 5}, "noche": {"nivel": "36-38", "porcentaje": 15}}
            },
            {
              "numero": 337,
              "nivel": 38,
              "porcentaje": 8,
              "imagen": "Zafiro"
            },
            {
              "numero": 338,
              "nivel": 38,
              "porcentaje": 8,
              "imagen": "Rubí"
            }
          ]
        },
        {
          "nombre": "Entre el segundo y tercer pilar",
          "caminando": [
            {
              "numero": 42,
              "nivel": "45-47",
              "porcentaje": 25
            },
            {
              "numero": 93,
              "nivel": "45-47",
              "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 40}, "dia": {"porcentaje": 40}, "noche": {"porcentaje": 30}}
            },
            {
              "numero": 437,
              "nivel": 45,
              "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 15}, "dia": {"porcentaje": 15}, "noche": {"porcentaje": 20}}
            },
            {
              "numero": 358,
              "nivel": "45-47",
              "porcentaje": 10
            },
            {
              "numero": 356,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "47-48", "porcentaje": 5}, "dia": {"nivel": "47-48", "porcentaje": 5}, "noche": {"nivel": "46-48", "porcentaje": 15}}
            }
          ]
        },
        {
          "nombre": "Tras el tercer pilar",
          "legendario": [
            {
              "numero": 487,
              "nivel": 47,
              "observaciones": "Si histe o lo debilitaste en el Mundo Distorsión"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Templo Puntaneva",
      "plantas": [
        {
          "nombre": "Sala 1",
          "caminando": [
            {
            	"numero": 215,
            	"nivel": "49-51",
            	"porcentaje": 10
            },
            {
            	"numero": 42,
            	"nivel": "47-50",
            	"porcentaje": 80
            },
            {
            	"numero": 238,
            	"nivel": "47-49",
            	"porcentaje": 10
            }
          ]
        },
        {
          "nombre": "Sótanos 1, 2, y 3",
          "caminando": [
            {
              "numero": 215,
              "nivel": "49-51",
            	"porcentaje": 10
            },
            {
              "numero": 42,
              "nivel": "47-50",
            	"porcentaje": 80
            },
            {
              "numero": 124,
              "nivel": "47-51",
              "porcentaje": 10
            }
          ]
        },
        {
          "nombre": "Sótano 4 y sala Regigigas",
          "caminando": [
            {
              "numero": 215,
              "nivel": "49-51",
              "porcentaje": 10
            },
            {
              "numero": 42,
              "nivel": "47-50",
              "porcentaje": 80
            },
            {
              "numero": 124,
              "nivel": "47-51",
              "porcentaje": 10
            }
          ],
          "legendario": [
            {
            	"numero": 486,
            	"nivel": 1
            }
          ]
        }
      ]
    },
    {
      "nombre": "Evento",
      "plantas": [
        {
          "nombre": "Isla Lunanueva",
          "legendario": [
            {
              "numero": 491,
              "nivel": 40
            }
          ]
        },
        {
          "nombre": "Paraíso Floral",
          "legendario": [
            {
              "numero": 492,
              "nivel": 30
            }
          ]
        },
        {
          "nombre": "Sala del Origen",
          "legendario": [
            {
              "numero": 493,
              "nivel": 80
            }
          ]
        }
      ]
    },
    {
      "nombre": "Sinnoh",
      "plantas": [
        {
          "nombre": "Árboles normales",
          "miel": [
            {
            	"numero": 265,
            	"nivel": "5-15",
            	"porcentaje": 14
            },
            {
            	"numero": 415,
            	"nivel": "5-15",
            	"porcentaje": 32
            },
            {
            	"numero": 412,
              "variedad": 0,
            	"nivel": "5-15",
            	"porcentaje": 22
            },
            {
            	"numero": 420,
            	"nivel": "5-15",
            	"porcentaje": 11
            },
            {
            	"numero": 190,
            	"nivel": "5-15",
            	"porcentaje": 10
            },
            {
            	"numero": 214,
            	"nivel": "5-15",
            	"porcentaje": 1
            }
          ]
        },
        {
          "nombre": "Árboles de Munchlax",
          "miel": [
            {
            	"numero": 265,
            	"nivel": "5-15",
            	"porcentaje": 4
            },
            {
            	"numero": 415,
            	"nivel": "5-15",
            	"porcentaje": 22
            },
            {
            	"numero": 412,
              "variedad": 0,
            	"nivel": "5-15",
            	"porcentaje": 32
            },
            {
            	"numero": 420,
            	"nivel": "5-15",
            	"porcentaje": 16
            },
            {
            	"numero": 190,
            	"nivel": "5-15",
            	"porcentaje": 12.5
            },
            {
            	"numero": 214,
            	"nivel": "5-15",
            	"porcentaje": 3.5
            },
            {
            	"numero": 446,
            	"nivel": "5-15",
            	"porcentaje": 1,
              "observaciones": "Solo en 4 árboles del total"
            }
          ]
        }
      ],
      "errante": [
        {
          "numero": 481,
          "nivel": 50
        },
        {
          "numero": 488,
          "nivel": 50
        },
        {
          "numero": 144,
          "nivel": 60
        },
        {
          "numero": 145,
          "nivel": 60
        },
        {
          "numero": 146,
          "nivel": 60
        }
      ]
    },
    {
      "nombre": "Subsuelo",
      "fosil": [
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
          "numero": 345
        },
        {
          "numero": 347
        },
        {
          "numero": 408,
          "observaciones": "última cifra del ID del jugador es impar"
        },
        {
          "numero": 410,
          "observaciones": "última cifra del ID del jugador es par"
        }
      ]
    },
    {
      "nombre": "Evolución",
      "otros": [
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
          "numero": 396
        },
        {
          "numero": 403
        },
        {
          "numero": 406
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
          "numero": 190
        },
        {
          "numero": 425
        },
        {
          "numero": 427
        },
        {
          "numero": 443
        },
        {
          "numero": 447
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
          "numero": 173
        },
        {
          "numero": 37
        },
        {
          "numero": 174
        },
        {
          "numero": 43
        },
        {
          "numero": 46
        },
        {
          "numero": 215
        },
        {
          "numero": 52
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
          "numero": 104
        },
        {
          "numero": 74
        },
        {
          "numero": 77
        },
        {
          "numero": 79
        },
        {
          "numero": 81
        },
        {
          "numero": 84
        },
        {
          "numero": 88
        },
        {
          "numero": 90
        },
        {
          "numero": 96
        },
        {
          "numero": 98
        },
        {
          "numero": 100
        },
        {
          "numero": 102
        },
        {
          "numero": 439
        },
        {
          "numero": 138
        },
        {
          "numero": 140
        },
        {
          "numero": 446
        },
        {
          "numero": 147
        },
        {
          "numero": 236
        },
        {
          "numero": 108
        },
        {
          "numero": 112
        },
        {
          "numero": 114
        },
        {
          "numero": 120
        },
        {
          "numero": 84
        },
        {
          "numero": 239
        },
        {
          "numero": 240
        },
        {
          "numero": 175
        },
        {
          "numero": 193
        },
        {
          "numero": 41
        },
        {
          "numero": 133
        },
        {
          "numero": 170
        },
        {
          "numero": 177
        },
        {
          "numero": 179
        },
        {
          "numero": 187
        },
        {
          "numero": 191
        },
        {
          "numero": 204
        },
        {
          "numero": 209
        },
        {
          "numero": 123
        },
        {
          "numero": 207
        },
        {
          "numero": 220
        },
        {
          "numero": 458
        },
        {
          "numero": 137
        },
        {
          "numero": 228
        },
        {
          "numero": 116
        },
        {
          "numero": 231
        },
        {
          "numero": 113
        },
        {
          "numero": 246
        },
        {
          "numero": 261
        },
        {
          "numero": 263
        },
        {
          "numero": 270
        },
        {
          "numero": 273
        },
        {
          "numero": 285
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
          "numero": 296
        },
        {
          "numero": 299
        },
        {
          "numero": 300
        },
        {
          "numero": 304
        },
        {
          "numero": 309
        },
        {
          "numero": 316
        },
        {
          "numero": 318
        },
        {
          "numero": 325
        },
        {
          "numero": 333
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
          "numero": 355
        },
        {
          "numero": 361
        },
        {
          "numero": 371
        },
        {
          "numero": 374
        },
        {
          "numero": 408
        },
        {
          "numero": 410
        }
      ]
    },
    {
      "nombre": "Crianza",
      "otros": [
        {
          "numero": 86
        },
        {
          "numero": 109
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
          "numero": 276
        },
        {
          "numero": 293
        },
        {
          "numero": 353
        },
        {
          "numero": 360
        },
        {
          "numero": 363
        },
        {
          "numero": 489,
          "observaciones": "De Manaphy y Ditto"
        }
      ]
    },
    {
      "nombre": "Intercambiar de Diamante/Perla",
      "otros": [
        {
          "numero": 198
        },
        {
          "numero": 200
        },
        {
          "numero": 328
        },
        {
          "numero": 366
        },
        {
          "numero": 431
        },
        {
          "numero": 434
        }
      ]
    },
    {
      "nombre": "Intercambiar de otros juegos",
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
        	"numero": 150
        },
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
        	"numero": 243
        },
        {
        	"numero": 244
        },
        {
        	"numero": 245
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
        	"numero": 252
        },
        {
        	"numero": 255
        },
        {
        	"numero": 258
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
        },
        {
        	"numero": 386
        }
      ]
    },
    {
      "nombre": "Evento",
      "otros": [
        {
          "numero": 490
        }
      ]
    }
  ]
}
