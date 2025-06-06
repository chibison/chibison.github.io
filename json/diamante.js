const diamante = {
  "nombre": "diamante",
	"titulo": "Diamante",
  "gen": 4,
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
      "nombre": "Pokédex nacional",
      "imagen": "otros/gen4/pokedex.png",
      "filtro": "pokedex",
      "defecto": false
    },
    {
      "nombre": "Pokéradar",
      "imagen": "otros/gen4/radar.png",
      "filtro": "radar",
      "defecto": false
    },
    {
      "nombre": "Aparición masiva",
      "imagen": "otros/gen4/masiva.png",
      "filtro": "masiva",
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
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
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
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ruta 201",
      "hierba":[
        {
        	"numero": 396,
          "nivel": "2-3",
        	"porcentaje": 50
        },
        {
        	"numero": 399,
          "nivel": "2-3",
          "porcentaje": 50
        },
        {
          "pokedex": "*",
          "numero": 58,
          "nivel": 2,
          "porcentaje": 8,
          "cartucho": "Rojo fuego"
        }
      ],
      "radar":[
        {
          "pokedex": "*",
        	"numero": 29,
        	"nivel": 3,
        	"porcentaje": 20
        },
        {
          "pokedex": "*",
        	"numero": 32,
        	"nivel": 2,
        	"porcentaje": 2
        }
      ],
      "masiva":[
        {
          "pokedex": "*",
        	"numero": 84,
        	"nivel": 2,
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Lago Veraz",
      "regalo":[
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
          "nivel": "2-4",
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 50}, "dia": {"porcentaje": 50}, "noche": {"porcentaje": 40}}
        },
        {
          "numero": 399,
          "nivel": "2-4",
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 50}, "dia": {"porcentaje": 50}, "noche": {"porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 337,
          "nivel": 4,
          "porcentaje": 8,
          "cartucho": "Zafiro"
        },
        {
          "pokedex": "*",
          "numero": 338,
          "nivel": 4,
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 397,
          "nivel": 4,
          "porcentaje": 4,
          "cartucho": "Rojo Fuego / Verde Hoja / Esmeralda"
        },
        {
          "pokedex": "*",
          "numero": 400,
          "nivel": 4,
          "porcentaje": 4,
          "cartucho": "Rojo Fuego / Verde Hoja / Esmeralda"
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
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
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
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        }
      ],
      "masiva":[
        {
          "pokedex": "*",
        	"numero": 283,
        	"nivel": 2,
        	"porcentaje": 40
        }
      ],
      "radar":[
        {
          "pokedex": "*",
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
          "nivel": "3-4",
          "porcentaje": 30
        },
        {
        	"numero": 396,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-4", "porcentaje": 30}, "dia": {"nivel": "2-4", "porcentaje": 40}, "noche": {"nivel": "3-4", "porcentaje": 30}}
        },
        {
        	"numero": 399,
          "nivel": "2-4",
          "porcentaje": 30
        },
        {
        	"numero": 401,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-4", "porcentaje": 10}, "noche": {"nivel": 4, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 58,
          "nivel": 2,
          "porcentaje": 8,
          "cartucho": "Rojo Fuego"
        }
      ],
      "radar":[
        {
          "pokedex": "*",
      	  "numero": 161,
        	"nivel": "2-4",
      	  "porcentaje": 22
        }
      ],
      "masiva":[
        {
          "pokedex": "*",
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
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 35}, "dia": {"nivel": "4-6", "porcentaje": 45}, "noche": {"nivel": 4, "porcentaje": 25}}
        },
        {
        	"numero": 399,
          "nivel": "4-6",
          "porcentaje": 15
        },
        {
        	"numero": 403,
          "nivel": "4-5",
          "porcentaje": 25
        },
        {
        	"numero": 63,
          "nivel": "4-5",
          "porcentaje": 15
        },
        {
        	"numero": 401,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 10}, "noche": {"nivel": "4-5", "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 5, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 273,
          "nivel": 5,
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 270,
          "nivel": 5,
          "porcentaje": 8,
          "cartucho": "Zafiro"
        },
        {
          "pokedex": "*",
          "numero": 204,
          "nivel": 5,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
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
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
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
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        }
      ],
      "radar":[
        {
          "pokedex": "*",
        	"numero": 280,
        	"nivel": "4-6",
        	"porcentaje": 21
        },
        {
          "pokedex": "*",
        	"numero": 281,
        	"nivel": 6,
        	"porcentaje": 1
        }
      ],
      "masiva":[
        {
          "pokedex": "*",
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
            	"porcentaje": 80
            },
            {
            	"numero": 41,
            	"nivel": "5-8",
            	"porcentaje": 20
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando": [
            {
            	"numero": 74,
            	"nivel": 9,
            	"porcentaje": 10
            },
            {
            	"numero": 41,
            	"nivel": "8-10",
            	"porcentaje": 60
            },
            {
              "numero": 54,
              "nivel": "8-10",
              "porcentaje": 30
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
      "nombre": "Ciudad Pirita",
      "lema": "Ciudad de la energía.",
      "fosil": [
        {
          "numero": 408
        },
        {
          "pokedex": "*",
          "numero": 138
        },
        {
          "pokedex": "*",
          "numero": 140
        },
        {
          "pokedex": "*",
          "numero": 142
        },
        {
          "pokedex": "*",
          "numero": 345
        },
        {
          "pokedex": "*",
          "numero": 347
        }
      ],
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
            	"nivel": "4-10",
            	"porcentaje": 50
            },
            {
            	"numero": 41,
            	"nivel": "6-8",
            	"porcentaje": 48
            },
            {
            	"numero": 95,
            	"nivel": 8,
            	"porcentaje": 2
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando":[
            {
            	"numero": 74,
            	"nivel": "4-10",
            	"porcentaje": 50
            },
            {
            	"numero": 41,
            	"nivel": "6-8",
            	"porcentaje": 48
            },
            {
            	"numero": 95,
            	"nivel": 9,
            	"porcentaje": 2
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
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-6", "porcentaje": 25}, "dia": {"nivel": "4-6", "porcentaje": 35}, "noche": {"nivel": "4-6", "porcentaje": 25}}
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "4-5", "porcentaje": 25}, "dia": {"nivel": "4-5", "porcentaje": 25}, "noche": {"nivel": "4-5", "porcentaje": 15}}
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
              "pokedex": "*",
              "numero": 273,
              "nivel": 6,
              "porcentaje": 8,
              "cartucho": "Rubí"
            },
            {
              "pokedex": "*",
              "numero": 270,
              "nivel": 6,
              "porcentaje": 8,
              "cartucho": "Zafiro"
            },
            {
              "pokedex": "*",
              "numero": 204,
              "nivel": 6,
              "porcentaje": 8,
              "cartucho": "Esmeralda"
            },
            {
              "pokedex": "*",
              "numero": 10,
              "nivel": 6,
              "porcentaje": 8,
              "cartucho": "Rojo Fuego"
            },
            {
              "pokedex": "*",
              "numero": 13,
              "nivel": 6,
              "porcentaje": 8,
              "cartucho": "Verde Hoja"
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
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
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
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
            }
          ],
          "radar":[
            {
              "pokedex": "*",
            	"numero": 280,
            	"nivel": "4-6",
            	"porcentaje": 21
            },
            {
              "pokedex": "*",
            	"numero": 281,
            	"nivel": 6,
            	"porcentaje": 1
            }
          ]
        },
        {
          "nombre": "Zona norte",
          "hierba":[
            {
            	"numero": 396,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 25}, "dia": {"nivel": "6-8", "porcentaje": 35}, "noche": {"nivel": 6, "porcentaje": 25}}
            },
            {
            	"numero": 399,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "6-8", "porcentaje": 25}, "dia": {"nivel": "6-8", "porcentaje": 25}, "noche": {"nivel": "6-8", "porcentaje": 25}}
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel":"6-7", "porcentaje": 25}, "dia": {"nivel": "6-7", "porcentaje": 25}, "noche": {"nivel": "6-7", "porcentaje": 15}}
            },
            {
            	"numero": 403,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "6-7", "porcentaje": 15}, "dia": {"nivel": "6-7", "porcentaje": 15}, "noche": {"nivel": "6-7", "porcentaje": 15}}
            },
            {
            	"numero": 401,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 10}, "noche": {"nivel": 6, "porcentaje": 10}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 6, "porcentaje": 10}}
            },
            {
              "pokedex": "*",
              "numero": 273,
              "nivel": 8,
              "porcentaje": 8,
              "cartucho": "Rubí"
            },
            {
              "pokedex": "*",
              "numero": 270,
              "nivel": 8,
              "porcentaje": 8,
              "cartucho": "Zafiro"
            },
            {
              "pokedex": "*",
              "numero": 204,
              "nivel": 8,
              "porcentaje": 8,
              "cartucho": "Esmeralda"
            }
          ],
          "radar":[
            {
              "pokedex": "*",
            	"numero": 191,
            	"nivel": "6-8",
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
        	"nivel": "4-6",
        	"porcentaje": 78
        },
        {
        	"numero": 74,
        	"nivel": 5,
        	"porcentaje": 20
        },
        {
        	"numero": 54,
        	"nivel": 5,
        	"porcentaje": 2
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
      "nombre": "Ruta 205",
      "plantas": [
        {
          "nombre": "Zona sur",
          "hierba": [
            {
              "numero": 422,
              "variedad": 1,
              "nivel": "8-10",
              "porcentaje": 45
            },
            {
              "numero": 418,
              "nivel": "8-10",
              "porcentaje": 35
            },

            {
              "numero": 399,
              "nivel": 9,
              "porcentaje": 10
            },
            {
              "numero": 417,
              "nivel": 9,
              "porcentaje": 10
            },
            {
              "pokedex": "*",
              "numero": 239,
              "nivel": 10,
              "porcentaje": 8,
              "cartucho": "Rojo Fuego"
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
              "porcentaje": 5
            },

            {
              "numero": 279,
              "nivel": "20-40",
              "porcentaje": 5
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
            },
            {
              "numero": 456,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
            },
            {
              "pokedex": "*",
              "numero": 457,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 45}}
            },
            {
              "pokedex": "*",
              "numero": 90,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-40","porcentaje": 15}}
            }
          ],
          "radar":[
            {
              "pokedex": "*",
              "numero": 187,
              "nivel": "9-10",
              "porcentaje": 22
            }
          ]
        },
        {
          "nombre": "Zona norte",
          "hierba": [
            {
              "numero": 399,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "10-12", "porcentaje": 45}, "dia": {"nivel": "10-12", "porcentaje": 45}, "noche": {"nivel": "10-12", "porcentaje": 45}}
            },
            {
              "numero": 418,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "10-12", "porcentaje": 35}, "dia": {"nivel": "10-12", "porcentaje": 35}, "noche": {"nivel": "10-12", "porcentaje": 35}}
            },
            {
              "numero": 417,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 11, "porcentaje": 10}, "dia": {"nivel": 11, "porcentaje": 10}, "noche": {"nivel": 11, "porcentaje": 10}}
            },
            {
              "numero": 422,
              "variedad": 1,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 11, "porcentaje": 10}, "dia": {"nivel": 11, "porcentaje": 10}, "noche": {"nivel": 11, "porcentaje": 10}}
            },
            {
              "pokedex": "*",
              "numero": 270,
              "nivel": 12,
              "porcentaje": 8,
              "cartucho": "Zafiro"
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
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
            },
            {
              "numero": 339,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 65}}
            },
            {
              "pokedex": "*",
              "numero": 340,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
            }
          ],
          "radar":[
            {
              "pokedex": "*",
              "numero": 187,
              "nivel": 11,
              "porcentaje": 20
            },
            {
              "pokedex": "*",
              "numero": 188,
              "nivel": 12,
              "porcentaje": 2
            }
          ]
        }
      ]
    },
    {
      "nombre": "Valle Eólico",
      "hierba": [
        {
          "numero": 399,
          "nivel": 8,
          "porcentaje": 10
        },
        {
          "numero": 417,
          "nivel": "7-8",
          "porcentaje": 25
        },
        {
          "numero": 418,
          "nivel": "7-9",
          "porcentaje": 35
        },
        {
          "numero": 422,
          "variedad": 1,
          "nivel": "7-9",
          "porcentaje": 30
        },
        {
          "pokedex": "*",
          "numero": 239,
          "nivel": 9,
          "porcentaje": 8,
          "cartucho": "Rojo Fuego"
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
          "porcentaje": 5
        },

        {
          "numero": 279,
          "nivel": "20-40",
          "porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 90,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-40","porcentaje": 15}}
        }
      ],
      "radar":[
        {
          "pokedex": "*",
          "numero": 179,
          "nivel": "7-9",
          "porcentaje": 22
        }
      ],
      "masiva":[
        {
          "pokedex": "*",
          "numero": 309,
          "nivel": "2-7",
          "porcentaje": 40
        }
      ],
      "especial":[
        {
          "numero": 425,
          "nivel": 22,
          "observaciones": "Solo viernes"
        }
      ]
    },
    {
      "nombre": "Bosque Vetusto",
      "hierba": [
        {
        	"numero": 427,
        	"nivel": "10-12",
        	"porcentaje": 19
        },
        {
        	"numero": 266,
        	"nivel": 10,
        	"porcentaje": 20
        },
        {
        	"numero": 267,
        	"nivel": "10-12",
        	"porcentaje": 2
        },
        {
        	"numero": 265,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "10-11", "porcentaje": 30}, "dia": {"nivel": "10-11", "porcentaje": 30}, "noche": {"nivel": "10-11", "porcentaje": 20}}
        },
        {
        	"numero": 406,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "10-12", "porcentaje": 29}, "dia": {"nivel": "10-12", "porcentaje": 29}, "noche": {"nivel": "10-12", "porcentaje": 19}}
        },
        {
        	"numero": 198,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": "10-11", "porcentaje": 20}}
        },
        {
          "pokedex": "*",
          "numero": 11,
          "nivel": 12,
          "porcentaje": 8,
          "cartucho": "Rojo fuego"
        },
        {
          "pokedex": "*",
          "numero": 14,
          "nivel": 12,
          "porcentaje": 8,
          "cartucho": "Verde Hoja"
        },
        {
          "pokedex": "*",
          "numero": 273,
          "nivel": 12,
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 204,
          "nivel": 12,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar":[
        {
          "pokedex": "*",
        	"numero": 290,
        	"nivel": "10-12",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
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
          "nivel": "12-16",
          "porcentaje": 100
        },
        {
          "pokedex": "*",
          "numero": 93,
          "nivel": 16,
          "porcentaje": 4,
          "cartucho": "Rubí / Zafiro / Esmeralda / Rojo Fuego / Verde Hoja"
        },
        {
          "pokedex": "*",
          "numero": 94,
          "nivel": "16-17",
          "porcentaje": 4,
          "cartucho": "Rubí / Zafiro / Esmeralda / Rojo Fuego / Verde Hoja"
        }
      ],
      "especial": [
        {
          "pokedex": "*",
          "numero": 479,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15}}
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
      ]
    },
    {
      "nombre": "Ruta 206",
      "hierba": [
        {
        	"numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 35}, "dia": {"nivel": "14-16", "porcentaje": 45}, "noche": {"nivel": "14-16", "porcentaje": 25}}
        },
        {
        	"numero": 434,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 25}, "dia": {"nivel": "14-16", "porcentaje": 25}, "noche": {"nivel": "14-16", "porcentaje": 25}}
        },
        {
        	"numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 10}, "dia": {"nivel": 14, "porcentaje": 10}, "noche": {"nivel": 14, "porcentaje": 10}}
        },
        {
        	"numero": 402,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 10}, "dia": {"nivel": 14, "porcentaje": 10}, "noche": {"nivel":"14-15" , "porcentaje": 20}}
        },
        {
        	"numero": 436,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 10}, "dia": {"nivel": 15, "porcentaje": 10}, "noche": {"nivel": 15, "porcentaje": 10}}
        },
        {
        	"numero": 401,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 207,
          "nivel": 15,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar":[
        {
          "pokedex": "*",
        	"numero": 343,
        	"nivel": "15-16",
        	"porcentaje": 22
        }
      ],
      "masiva":[
        {
          "pokedex": "*",
          "numero": 299,
          "nivel": 14,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Cueva Extravío",
      "plantas": [
        {
          "nombre": "Zona Oscura",
          "caminando": [
            {
            	"numero": 41,
            	"nivel": "14-16",
            	"porcentaje": 45
            },
            {
            	"numero": 74,
            	"nivel": "14-16",
            	"porcentaje": 15
            },
            {
            	"numero": 436,
            	"nivel": "14-16",
            	"porcentaje": 40
            },
            {
              "pokedex": "*",
              "numero": 27,
              "nivel": 16,
              "porcentaje": 8,
              "cartucho": "Verde Hoja"
            }
          ]
        },
        {
          "nombre": "Zona Secreta",
          "caminando": [
            {
            	"numero": 41,
            	"nivel": "15-17",
            	"porcentaje": 45
            },
            {
            	"numero": 74,
            	"nivel": 16,
            	"porcentaje": 10
            },
            {
            	"numero": 436,
            	"nivel": "15-17",
            	"porcentaje": 40
            },
            {
              "numero": 443,
              "nivel": "15-17",
              "porcentaje": 5
            },
            {
              "pokedex": "*",
              "numero": 27,
              "nivel": "16-17",
              "porcentaje": 8,
              "cartucho": "Verde Hoja"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 207",
      "hierba": [
        {
          "numero": 74,
          "nivel": "5-7",
          "porcentaje": 55
        },
        {
          "numero": 66,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-7", "porcentaje": 35}, "dia": {"nivel": "5-7", "porcentaje": 45}, "noche": {"nivel": "5-7", "porcentaje": 25}}
        },
        {
          "numero": 401,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 6, "porcentaje": 10}, "noche": {"nivel": 6, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 6, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 207,
          "nivel": 7,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar":[
        {
          "pokedex": "*",
          "numero": 246,
          "nivel": "6-7",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
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
          "nivel": "15-16",
          "porcentaje": 25
        },
        {
          "numero": 173,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 25}, "dia": {"nivel": 14, "porcentaje": 5}, "noche": {"nivel": 14, "porcentaje": 5}}
        },
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": "14-16", "porcentaje": 30}, "noche": {"nivel": "14-16", "porcentaje": 30}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 10}, "dia": {"nivel": "14-16", "porcentaje": 20}, "noche": {"nivel": "14-16", "porcentaje": 20}}
        },
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-15", "porcentaje": 10}, "dia": {"nivel": "14-15", "porcentaje": 10}, "noche": {"nivel": "14-15", "porcentaje": 10}}
        },
        {
          "numero": 433,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 10}, "dia": {"nivel": 15, "porcentaje": 10}, "noche": {"nivel": 15, "porcentaje": 10}}
        }
      ],
      "surf": [
        {
          "numero": 41,
          "nivel": "20-40",
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
      "nombre": "Ruta 208",
      "hierba": [
        {
        	"numero": 54,
        	"nivel": "16-18",
        	"porcentaje": 30
        },
        {
        	"numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 20}, "dia": {"nivel": "16-17", "porcentaje": 20}, "noche": {"nivel": "16-17", "porcentaje": 10}}
        },
        {
        	"numero": 66,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 20}, "dia": {"nivel": "16-17", "porcentaje": 20}, "noche": {"nivel": "16-17", "porcentaje": 10}}
        },
        {
        	"numero": 399,
        	"nivel": 16,
        	"porcentaje": 20
        },
        {
        	"numero": 400,
        	"nivel": "17-18",
        	"porcentaje": 10
        },
        {
        	"numero": 41,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 16, "porcentaje": 20}}
        },
        {
          "pokedex": "*",
          "numero": 335,
          "nivel": 18,
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 336,
          "nivel": 18,
          "porcentaje": 8,
          "cartucho": "Zafiro"
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
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 236,
        	"nivel": "17-18",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
        	"numero": 206,
        	"nivel": 16,
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
          "pokedex": "*",
        	"observaciones": "Casa de Tecla."
        }
      ],
      "huevo": [
        {
        	"numero": 440,
        	"nivel": 1,
        	"observaciones": "Regalado por montañero"
        }
      ]
    },
    {
      "nombre": "Ruta 209",
      "hierba": [
        {
        	"numero": 400,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-18", "porcentaje": 35}, "dia": {"nivel": "16-18", "porcentaje": 45}, "noche": {"nivel": "16-18", "porcentaje": 35}}
        },
        {
        	"numero": 439,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 25}, "dia": {"nivel": 16, "porcentaje": 5}, "noche": {"nivel": 16, "porcentaje": 5}}
        },
        {
        	"numero": 396,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 20}, "dia": {"nivel": 16, "porcentaje": 20}, "noche": {"nivel": 16, "porcentaje": 20}}
        },
        {
        	"numero": 397,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-18", "porcentaje": 15}, "dia": {"nivel": "16-18", "porcentaje": 25}, "noche": {"nivel": "17-18", "porcentaje": 15}}
        },
        {
        	"numero": 113,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 5}, "dia": {"nivel": 16, "porcentaje": 5}, "noche": {"nivel": 16, "porcentaje": 5}}
        },
        {
        	"numero": 92,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 16, "porcentaje": 10}}
        },
        {
        	"numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 16, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 37,
          "nivel": 16,
          "porcentaje": 8,
          "cartucho": "Verde Hoja"
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
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
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
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 128,
        	"nivel": 18,
        	"porcentaje": 20
        },
        {
          "pokedex": "*",
        	"numero": 241,
        	"nivel": 16,
        	"porcentaje": 2
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
        	"numero": 209,
        	"nivel": 16,
        	"porcentaje": 40
        }
      ],
      "especial": [
        {
          "numero": 442,
          "nivel": 25,
          "observaciones": "Interactuar con 32 personas en el subsuelo."
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
            	"numero": 92,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 50}, "dia": {"nivel": "16-19", "porcentaje": 50}, "noche": {"nivel": "16-19", "porcentaje": 40}}
            },
            {
            	"numero": 41,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 50}, "dia": {"nivel": "16-19", "porcentaje": 50}, "noche": {"nivel": "16-19" , "porcentaje": 40}}
            },
            {
            	"numero": 198,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "2º piso",
          "caminando": [
            {
            	"numero": 92,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 50}, "dia": {"nivel": "16-19", "porcentaje": 50}, "noche": {"nivel": "16-19", "porcentaje": 40}}
            },
            {
            	"numero": 41,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 50}, "dia": {"nivel": "16-19", "porcentaje": 50}, "noche": {"nivel": "16-19" , "porcentaje": 40}}
            },
            {
            	"numero": 198,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "17", "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "3er piso",
          "caminando": [
            {
            	"numero": 42,
            	"nivel": "18-20",
            	"porcentaje": 1
            },
            {
              "numero": 92,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 50}, "dia": {"nivel": "16-19", "porcentaje": 50}, "noche": {"nivel": "16-19", "porcentaje": 40}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 49}, "dia": {"nivel": "18-20", "porcentaje": 49}, "noche": {"nivel": "18-21" , "porcentaje": 39}}
            },
            {
              "numero": 198,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "4º piso",
          "caminando": [
            {
              "numero": 42,
              "nivel": "18-20",
              "porcentaje": 5
            },
            {
              "numero": 92,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 50}, "dia": {"nivel": "16-19", "porcentaje": 50}, "noche": {"nivel": "16-19", "porcentaje": 40}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 45}, "dia": {"nivel": "16-19", "porcentaje": 45}, "noche": {"nivel": "16-19" , "porcentaje": 35}}
            },
            {
              "numero": 198,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "17-19", "porcentaje": 20}}
            }
          ]
        },
        {
          "nombre": "5º piso",
          "caminando": [
            {
              "numero": 42,
              "nivel": "18-22",
              "porcentaje": 10
            },
            {
              "numero": 92,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-19", "porcentaje": 50}, "dia": {"nivel": "16-19", "porcentaje": 50}, "noche": {"nivel": "16-19", "porcentaje": 40}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 40}, "dia": {"nivel": "18-20", "porcentaje": 40}, "noche": {"nivel": "18-21" , "porcentaje": 30}}
            },
            {
              "numero": 198,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 20}}
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
              "variedad": 7
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
              "porcentaje": 50,
              "variedad": 26
            },
            {
              "numero": 201,
              "nivel": "14-30",
              "porcentaje": 50,
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
          "numero": 74,
          "nivel": 19,
          "porcentaje": 30
        },
        {
          "numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 30}, "dia": {"nivel": "18-20", "porcentaje": 50}, "noche": {"nivel": "18-20", "porcentaje": 30}}
        },
        {
          "numero": 439,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 25}, "dia": {"nivel": "18-20", "porcentaje": 5}, "noche": {"nivel": "18-20", "porcentaje": 5}}
        },
        {
          "numero": 402,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 19, "porcentaje": 10}, "dia": {"nivel": 19, "porcentaje": 10}, "noche": {"nivel": "18-19", "porcentaje": 30}}
        },
        {
          "numero": 113,
          "nivel": "18-20",
          "porcentaje": 5
        },
        {
          "pokedex": "*",
          "numero": 273,
          "nivel": 18,
          "porcentaje": 4,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 274,
          "nivel": 20,
          "porcentaje": 4,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 204,
          "nivel": "18-20",
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 128,
          "nivel": 18,
          "porcentaje": 20
        },
        {
          "pokedex": "*",
          "numero": 241,
          "nivel": 20,
          "porcentaje": 2
        }
      ]
    },
    {
      "nombre": "Ruta 215",
      "hierba": [
        {
        	"numero": 74,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "20-22", "porcentaje": 35}, "dia": {"nivel": "20-22", "porcentaje": 25}, "noche": {"nivel": "20-22", "porcentaje": 25}}
        },
        {
        	"numero": 77,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-22", "porcentaje": 30}, "dia": {"nivel": "21-22", "porcentaje": 40}, "noche": {"nivel": "21-22", "porcentaje": 20}}
        },
        {
        	"numero": 64,
        	"nivel": "20-22",
        	"porcentaje": 15
        },
        {
        	"numero": 63,
        	"nivel": 20,
        	"porcentaje": 10
        },
        {
        	"numero": 402,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 20, "porcentaje": 10}, "dia": {"nivel": 20, "porcentaje": 10}, "noche": {"nivel": "20-22", "porcentaje": 30}}
        },
        {
          "pokedex": "*",
          "numero": 207,
          "nivel": 22,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 262,
        	"nivel": "20-22",
        	"porcentaje": 22
        }
      ],
      "masiva":[
        {
          "pokedex": "*",
        	"numero": 96,
        	"nivel": "20-22",
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 214",
      "hierba": [
        {
        	"numero": 77,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "23-24", "porcentaje": 35}, "dia": {"nivel": "23-24", "porcentaje": 35}, "noche": {"nivel": "23-24", "porcentaje": 25}}
        },
        {
        	"numero": 74,
        	"nivel": 22,
        	"porcentaje": 20
        },
        {
        	"numero": 75,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "23-24", "porcentaje": 15}, "dia": {"nivel": "23-24", "porcentaje": 15}, "noche": {"nivel": "23-24", "porcentaje": 5}}
        },
        {
        	"numero": 434,
        	"nivel": "23-24",
        	"porcentaje": 15
        },
        {
        	"numero": 203,
        	"nivel": 24,
        	"porcentaje": 10
        },
        {
        	"numero": 402,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 5}, "dia": {"nivel": 24, "porcentaje": 5}, "noche": {"nivel": "23-24", "porcentaje": 25}}
        },
        {
          "pokedex": "*",
          "numero": 207,
          "nivel": 24,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        },
        {
          "pokedex": "*",
          "numero": 37,
          "nivel": 24,
          "porcentaje": 8,
          "cartucho": "Verde hoja"
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
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
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
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 262,
        	"nivel": "23-24",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 325,
          "nivel": "22-23",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Túnel del Ruinamaníaco",
      "caminando": [
        {
        	"numero": 74,
        	"nivel": 22,
        	"porcentaje": 95,
          "observaciones": "<10 Unown"
        },
        {
        	"numero": 449,
        	"nivel": "22-23",
        	"porcentaje": 5,
          "observaciones": "<10 Unown"
        },
        {
          "numero": 74,
          "nivel": 23,
          "porcentaje": 90,
          "observaciones": "10-25 Unown"
        },
        {
          "numero": 449,
          "nivel": "22-24",
          "porcentaje": 10,
          "observaciones": "10-25 Unown"
        },
        {
          "numero": 74,
          "nivel": 24,
          "porcentaje": 80,
          "observaciones": ">26 Unown"
        },
        {
          "numero": 449,
          "nivel": "22-25",
          "porcentaje": 20,
          "observaciones": ">26 Unown"
        }
      ]
    },
    {
      "nombre": "Orilla Valor",
      "hierba": [
        {
        	"numero": 74,
        	"nivel": 20,
        	"porcentaje": 20
        },
        {
        	"numero": 75,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-22", "porcentaje": 15}, "dia": {"nivel": "21-22", "porcentaje": 15}, "noche": {"nivel": "21-22", "porcentaje": 5}}
        },
        {
        	"numero": 203,
        	"nivel": "21-22",
        	"porcentaje": 30
        },
        {
        	"numero": 397,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-22", "porcentaje": 15}, "dia": {"nivel": "21-22", "porcentaje": 15}, "noche": {"nivel": "21-22", "porcentaje": 5}}
        },
        {
        	"numero": 400,
        	"nivel": "21-22",
        	"porcentaje": 15
        },
        {
        	"numero": 402,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "21-22", "porcentaje": 5}, "dia": {"nivel": "21-22", "porcentaje": 5}, "noche": {"nivel": "21-22", "porcentaje": 25}}
        }
      ],
      "radar":[
        {
          "pokedex": "*",
        	"numero": 33,
        	"nivel": 22,
        	"porcentaje": 2
        },
        {
          "pokedex": "*",
        	"numero": 30,
        	"nivel": 22,
        	"porcentaje": 20
        }
      ]
    },
    {
      "nombre": "Ruta 213",
      "hierba": [
        {
        	"numero": 422,
          "variedad": 0,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "20-22", "porcentaje": 40}, "dia": {"nivel": "20-22", "porcentaje": 40}, "noche": {"nivel": "20-22", "porcentaje": 50}}
        },
        {
        	"numero": 418,
        	"nivel": "20-21",
        	"porcentaje": 30
        },
        {
        	"numero": 278,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 20, "porcentaje": 20}, "dia": {"nivel": 20, "porcentaje": 20}, "noche": {"nivel": 20, "porcentaje": 10}}
        },
        {
        	"numero": 419,
        	"nivel": 22,
        	"porcentaje": 10
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
        	"numero": 359,
        	"nivel": 20,
        	"porcentaje": 40
        }
      ],
      "radar":[
        {
          "pokedex": "*",
        	"numero": 277,
        	"nivel": 21,
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
        	"numero": 279,
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
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 319,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 5}}
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
          "porcentaje": 5
        },
        {
        	"numero": 278,
        	"nivel": "20-30",
        	"porcentaje": 30
        },
        {
        	"numero": 279,
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
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
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
            	"nivel": 24,
            	"porcentaje": 20
            },
            {
            	"numero": 400,
            	"nivel": 25,
            	"porcentaje": 20
            },
            {
            	"numero": 183,
            	"nivel": "25-26",
            	"porcentaje": 15
            },
            {
            	"numero": 195,
            	"nivel": "25-26",
            	"porcentaje": 15
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 10}, "dia": {"nivel": 24, "porcentaje": 10}}
            },
            {
            	"numero": 396,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 26, "porcentaje": 10}, "dia": {"nivel": 26, "porcentaje": 10}}
            },
            {
            	"numero": 54,
            	"nivel": "24-26",
            	"porcentaje": 8
            },
            {
            	"numero": 298,
            	"nivel": 24,
            	"porcentaje": 1
            },
            {
            	"numero": 399,
            	"nivel": 26,
            	"porcentaje": 1
            },
            {
            	"numero": 163,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 24, "porcentaje": 10}}
            },
            {
            	"numero": 164,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 26, "porcentaje": 10}}
            },
            {
              "pokedex": "*",
              "numero": 24,
              "nivel": "24-26",
              "porcentaje": 8,
              "cartucho": "Rojo fuego"
            }
          ]
        },
        {
          "nombre": "Áreas 3 y 4",
          "hierba":[
            {
            	"numero": 194,
            	"nivel": 22,
            	"porcentaje": 20
            },
            {
            	"numero": 400,
            	"nivel": 23,
            	"porcentaje": 20
            },
            {
            	"numero": 183,
            	"nivel": "23-24",
            	"porcentaje": 15
            },
            {
            	"numero": 195,
            	"nivel": "23-24",
            	"porcentaje": 15
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 10}, "dia": {"nivel": 22, "porcentaje": 10}}
            },
            {
            	"numero": 396,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 10}, "dia": {"nivel": 24, "porcentaje": 10}}
            },
            {
            	"numero": 54,
            	"nivel": "22-24",
            	"porcentaje": 8
            },
            {
            	"numero": 298,
            	"nivel": 22,
            	"porcentaje": 1
            },
            {
            	"numero": 399,
            	"nivel": 24,
            	"porcentaje": 1
            },
            {
            	"numero": 163,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "22-24", "porcentaje": 20}}
            },
            {
              "pokedex": "*",
            	"numero": 24,
            	"nivel": "24-26",
            	"porcentaje": 8,
            	"cartucho": "Rojo fuego"
            }
          ]
        },
        {
          "nombre": "Área 5",
          "hierba": [
            {
            	"numero": 400,
            	"nivel": 21,
            	"porcentaje": 20
            },
            {
            	"numero": 194,
            	"nivel": 20,
            	"porcentaje": 20
            },
            {
            	"numero": 183,
            	"nivel": "21-22",
            	"porcentaje": 15
            },
            {
            	"numero": 195,
            	"nivel": "21-22",
            	"porcentaje": 15
            },
            {
            	"numero": 298,
            	"nivel": 20,
            	"porcentaje": 5
            },
            {
            	"numero": 399,
            	"nivel": 22,
            	"porcentaje": 5
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 20, "porcentaje": 10}, "dia": {"nivel": 20, "porcentaje": 10}}
            },
            {
            	"numero": 396,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 10}, "dia": {"nivel": 22, "porcentaje": 10}}
            },
            {
            	"numero": 163,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "20-22", "porcentaje": 20}}
            },
            {
              "pokedex": "*",
              "numero": 24,
              "nivel": "20-22",
              "porcentaje": 8,
              "cartucho": "Rojo fuego"
            }
          ]
        },
        {
          "nombre": "Área 6",
          "hierba": [
            {
            	"numero": 400,
            	"nivel": 21,
            	"porcentaje": 20
            },
            {
            	"numero": 194,
            	"nivel": 20,
            	"porcentaje": 20
            },
            {
            	"numero": 183,
            	"nivel": "21-22",
            	"porcentaje": 15
            },
            {
            	"numero": 195,
            	"nivel": "21-22",
            	"porcentaje": 15
            },
            {
            	"numero": 54,
            	"nivel": "20-22",
            	"porcentaje": 8
            },
            {
            	"numero": 298,
            	"nivel": 20,
            	"porcentaje": 1
            },
            {
            	"numero": 399,
            	"nivel": 22,
            	"porcentaje": 1
            },
            {
            	"numero": 406,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 20, "porcentaje": 10}, "dia": {"nivel": 20, "porcentaje": 10}}
            },
            {
            	"numero": 396,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 10}, "dia": {"nivel": 22, "porcentaje": 10}}
            },
            {
            	"numero": 163,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": "20-22", "porcentaje": 20}}
            },
            {
              "pokedex": "*",
              "numero": 24,
              "nivel": "20-22",
              "porcentaje": 8,
              "cartucho": "Rojo fuego"
            }
          ]
        }
      ],
      "surf": [
        {
        	"numero": 194,
        	"nivel": "30-40",
        	"porcentaje": 60
        },
        {
        	"numero": 183,
        	"nivel": "30-40",
        	"porcentaje": 30
        },
        {
        	"numero": 54,
        	"nivel": "20-40",
        	"porcentaje": 5
        },
        {
        	"numero": 195,
        	"nivel": "20-40",
        	"porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 15}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "28-55","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 318,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "15-30","porcentaje": 45}}
        }
      ],
      "observatorio": [
        {
          "numero": 55,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 194,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 195,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 298,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 183,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 315,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 397,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 451,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 453,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 455,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 399,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 400,
          "nivel": "22-26",
          "porcentaje": 10
        },
        {
          "numero": 46,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 102,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 115,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 193,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 285,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 316,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 452,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
        },
        {
          "numero": 454,
          "nivel": "22-26",
          "porcentaje": 10,
          "pokedex": "*"
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
              "numero": 400,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 35}, "dia": {"nivel": "18-20", "porcentaje": 35}, "noche": {"nivel": "18-20", "porcentaje": 25}}
            },
            {
              "numero": 194,
              "nivel": 18,
              "porcentaje": 30
            },
            {
              "numero": 315,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "18-20", "porcentaje": 25}, "dia": {"nivel": "18-20", "porcentaje": 25}, "noche": {"nivel": "18-20", "porcentaje": 15}}
            },
            {
              "numero": 402,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 10}, "dia": {"nivel": 18, "porcentaje": 10}, "noche": {"nivel": "18-19", "porcentaje": 30}}
            },
            {
              "pokedex": "*",
              "numero": 23,
              "nivel": "18-20",
              "porcentaje": 8,
              "cartucho": "Rojo fuego"
            },
            {
              "pokedex": "*",
              "numero": 270,
              "nivel": 18,
              "porcentaje": 4,
              "cartucho": "Zafiro"
            },
            {
              "pokedex": "*",
              "numero": 271,
              "nivel": 20,
              "porcentaje": 4,
              "cartucho": "Zafiro"
            }
          ],
          "surf": [
            {
              "numero": 194,
              "nivel": "20-40",
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
          ],
          "radar": [
            {
              "pokedex": "*",
              "numero": 88,
              "nivel": "18-20",
              "porcentaje": 22
            }
          ]
        },
        {
          "nombre": "Zona norte",
          "hierba": [
            {
              "numero": 406,
              "nivel": 16,
              "porcentaje": 30
            },
            {
              "numero": 396,
              "nivel": 16,
              "porcentaje":20
            },
            {
              "numero": 402,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-18", "porcentaje": 20}, "dia": {"nivel": "17-18", "porcentaje": 10}, "noche": {"nivel": "17-18", "porcentaje": 30}}
            },
            {
              "numero": 397,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-18", "porcentaje": 15}, "dia": {"nivel": "17-18", "porcentaje": 25}, "noche": {"nivel": "17-18", "porcentaje": 5}}
            },
            {
              "numero": 315,
              "nivel": "16-17",
              "porcentaje": 15
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
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
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
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
            }
          ],
          "radar": [
            {
              "pokedex": "*",
              "numero": 235,
              "nivel": "17-18",
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
          "nivel": "16-18",
          "porcentaje": 10
        },
        {
          "numero": 315,
          "nivel": "16-18",
          "porcentaje": 30
        },
        {
          "numero": 172,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 30}, "dia": {"nivel": 16, "porcentaje": 20}, "noche": {"nivel": 16, "porcentaje": 10}}
        },
        {
          "numero": 397,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 20}, "dia": {"nivel": "17-24", "porcentaje": 60}, "noche": {"nivel": "16-17", "porcentaje": 20}}
        },
        {
          "numero": 402,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "16-17", "porcentaje": 10}, "dia": {"nivel": "16-17", "porcentaje": 20}, "noche": {"nivel": "16-17", "porcentaje": 30}}
        }
      ],
      "cambio": [
        {
          "numero": 137,
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
      "nombre": "Ruta 210 - Zona norte",
      "hierba": [
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "24-26", "porcentaje": 30}, "dia": {"nivel": "24-26", "porcentaje": 30}, "noche": {"nivel": "24-26", "porcentaje": 20}}
        },
        {
          "numero": 54,
          "nivel": 25,
          "porcentaje": 20
        },
        {
          "numero": 66,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "25-26", "porcentaje": 20}, "dia": {"nivel": "25-26", "porcentaje": 20}, "noche": {"nivel": "25-26", "porcentaje": 10}}
        },
        {
          "numero": 400,
          "nivel": 24,
          "porcentaje": 20
        },
        {
          "numero": 67,
          "nivel": 26,
          "porcentaje": 10
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 24, "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 335,
          "nivel": 26,
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 336,
          "nivel": 26,
          "porcentaje": 8,
          "cartucho": "Zafiro"
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
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 352,
          "nivel": "25-26",
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
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 5}}
        },
        {
          "pokedex": "*",
          "numero": 341,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 30}}
        },
        {
          "pokedex": "*",
          "numero": 342,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Forja Fuego",
      "hierba": [
        {
          "numero": 278,
          "nivel": 29,
          "porcentaje": 10
        },
        {
          "numero": 403,
          "nivel": 28,
          "porcentaje": 10
        },
        {
          "numero": 404,
          "nivel": 29,
          "porcentaje": 10
        },
        {
          "numero": 417,
          "nivel": 29,
          "porcentaje": 10
        },
        {
          "numero": 419,
          "nivel": "29-31",
          "porcentaje": 25
        },
        {
          "numero": 422,
          "variedad": 1,
          "nivel": 28,
          "porcentaje": 20
        },
        {
          "numero": 423,
          "variedad": 1,
          "nivel": "29-30",
          "porcentaje": 15
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
          "numero": 279,
          "nivel": "20-40",
          "porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 90,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-40","porcentaje": 15}}
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 81,
          "nivel": "28-29",
          "porcentaje": 40
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 304,
          "nivel": "29-31",
          "porcentaje": 22
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
          "porcentaje": 5
        },
        {
          "numero": 279,
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
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 366,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-30","porcentaje": 5}}
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
          "porcentaje": 5
        },
        {
          "numero": 279,
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
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 5}}
        },
        {
          "pokedex": "*",
          "numero": 170,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "15-25","porcentaje": 30}}
        },
        {
          "pokedex": "*",
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-45","porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 221",
      "hierba": [
        {
          "numero": 419,
          "nivel": "28-30",
          "porcentaje": 25
        },
        {
          "numero": 434,
          "nivel": 28,
          "porcentaje": 20
        },
        {
          "numero": 435,
          "nivel": "29-30",
          "porcentaje": 15
        },
        {
          "numero": 278,
          "nivel": 29,
          "porcentaje": 10
        },
        {
          "numero": 315,
          "nivel": 29,
          "porcentaje": 10
        },
        {
          "numero": 422,
          "variedad": 1,
          "nivel": 28,
          "porcentaje": 10
        },
        {
          "numero": 423,
          "variedad": 1,
          "nivel": "29-30",
          "porcentaje": 10
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 30,
          "nivel": 29,
          "porcentaje": 20
        },
        {
          "pokedex": "*",
          "numero": 33,
          "nivel": 30,
          "porcentaje": 2
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 83,
          "nivel": 28,
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
          "porcentaje": 5
        },
        {
          "numero": 279,
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
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 366,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-30","porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Lago Valor",
      "hierba": [
        {
          "numero": 54,
          "nivel": "35-36",
          "porcentaje": 20
        },
        {
          "numero": 400,
          "nivel": "34-36",
          "porcentaje": 45
        },
        {
          "numero": 433,
          "nivel": "35-36",
          "porcentaje": 10
        },
        {
          "numero": 397,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "34-36", "porcentaje": 25}, "dia": {"nivel": "34-36", "porcentaje": 25}, "noche": {"nivel": "34-36", "porcentaje": 5}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "34-36", "porcentaje": 20}}
        },
        {
          "pokedex": "*",
          "numero": 338,
          "nivel": 35,
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 337,
          "nivel": 35,
          "porcentaje": 8,
          "cartucho": "Zafiro"
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
          "pokedex": "*",
          "numero": 202,
          "nivel": "35-36",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 108,
          "nivel": "34-36",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 211 - Zona este",
      "hierba":[
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-28", "porcentaje": 35}, "dia": {"nivel": "27-28", "porcentaje": 35}, "noche": {"nivel": "27-28", "porcentaje": 35}}
        },
        {
          "numero": 67,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-28", "porcentaje": 20}, "dia": {"nivel": "27-28", "porcentaje": 20}, "noche": {"nivel": "27-28", "porcentaje": 10}}
        },
        {
          "numero": 75,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 27, "porcentaje": 20}, "dia": {"nivel": 27, "porcentaje": 20}, "noche": {"nivel": 27, "porcentaje": 20}}
        },
        {
          "numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-28", "porcentaje": 15}, "dia": {"nivel": "26-28", "porcentaje": 15}, "noche": {"nivel": "26-28", "porcentaje": 5}}
        },
        {
          "numero": 433,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-28", "porcentaje": 10}, "dia": {"nivel": "27-28", "porcentaje": 10}, "noche": {"nivel": "27-28", "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 26, "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 28, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 216,
          "nivel": "27-28",
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar":[
        {
          "pokedex": "*",
          "numero": 333,
          "nivel": "27-28",
          "porcentaje": 22
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 25}, "dia": {"nivel": 12, "porcentaje": 5}, "noche": {"nivel": 12, "porcentaje": 5}}
        },
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 20}, "dia": {"nivel": "12-13", "porcentaje": 30}, "noche": {"nivel": "12-13", "porcentaje": 30}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": "12-13", "porcentaje": 20}, "noche": {"nivel": "12-13", "porcentaje": 20}}
        },
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-14", "porcentaje": 25}, "dia": {"nivel": "13-14", "porcentaje": 10}, "noche": {"nivel": "13-14", "porcentaje": 10}}
        },
        {
          "numero": 433,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": 13, "porcentaje": 10}, "noche": {"nivel": 13, "porcentaje": 10}}
        }
      ],
      "surf": [
        {
          "numero": 41,
          "nivel": "20-40",
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
      "nombre": "Ruta 211 - Zona oeste",
      "hierba":[
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 35}, "dia": {"nivel": "12-14", "porcentaje": 35}, "noche": {"nivel": "12-14", "porcentaje": 25}}
        },
        {
          "numero": 399,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 35}, "dia": {"nivel": "12-14", "porcentaje": 35}, "noche": {"nivel": "12-14", "porcentaje": 25}}
        },
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": 13, "porcentaje": 10}, "noche": {"nivel": 13, "porcentaje": 10}}
        },
        {
          "numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": 13, "porcentaje": 10}, "noche": {"nivel": 13, "porcentaje": 10}}
        },
        {
          "numero": 433,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 10}, "dia": {"nivel": 13, "porcentaje": 10}, "noche": {"nivel": 13, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 12, "porcentaje": 10}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 216,
          "nivel": "12-14",
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar":[
        {
          "pokedex": "*",
          "numero": 236,
          "nivel": "12-14",
          "porcentaje": 22
        }
      ]
    },
    {
      "nombre": "Ruta 218",
      "hierba": [
        {
        	"numero": 419,
        	"nivel": "28-30",
        	"porcentaje": 35
        },
        {
        	"numero": 422,
          "variedad": 1,
        	"nivel": 28,
        	"porcentaje": 20
        },
        {
        	"numero": 423,
          "variedad": 1,
        	"nivel": "28-30",
        	"porcentaje": 20
        },
        {
        	"numero": 122,
        	"nivel": "29-30",
        	"porcentaje": 15
        },
        {
        	"numero": 278,
        	"nivel": 29,
        	"porcentaje": 10
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
        	"porcentaje": 5
        },
        {
        	"numero": 279,
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
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 132,
        	"nivel": "29-30",
        	"porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
        	"numero": 100,
        	"nivel": 28,
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
        	"numero": 278,
        	"nivel": "20-30",
        	"porcentaje": 30
        },
        {
        	"numero": 73,
        	"nivel": "20-40",
        	"porcentaje": 5
        },
        {
        	"numero": 279,
        	"nivel": "20-40",
        	"porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25","porcentaje": 55}}
        },
        {
          "numero": 456,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "10-35","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 457,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 120,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-40","porcentaje": 15}}
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
              "porcentaje": 5
            },
            {
              "numero": 279,
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
              "numero": 74,
              "nivel": 31,
              "porcentaje": 1
            },
            {
              "numero": 75,
              "nivel": "29-33",
              "porcentaje": 69
            },
            {
              "numero": 42,
              "nivel": "30-31",
              "porcentaje": 20
            },
            {
              "numero": 95,
              "nivel": "32-33",
              "porcentaje": 10
            },
            {
              "pokedex": "*",
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Zafiro"
            },
            {
              "pokedex": "*",
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Rubí"
            }
          ]
        },
        {
          "nombre": "Sótano 2 derecho",
          "caminando": [
            {
              "numero": 74,
              "nivel": 31,
              "porcentaje": 1
            },
            {
              "numero": 75,
              "nivel": "29-33",
              "porcentaje": 49
            },
            {
              "numero": 42,
              "nivel": "30-31",
              "porcentaje": 10
            },
            {
              "numero": 95,
              "nivel": "31-33",
              "porcentaje": 30
            },
            {
              "pokedex": "*",
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Zafiro"
            },
            {
              "pokedex": "*",
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Rubí"
            }
          ]
        },
        {
          "nombre": "Sótano 2 izquierdo",
          "caminando": [
            {
              "numero": 74,
              "nivel": 32,
              "porcentaje": 1
            },
            {
              "numero": 75,
              "nivel": "30-34",
              "porcentaje": 39
            },
            {
              "numero": 42,
              "nivel": "31-32",
              "porcentaje": 20
            },
            {
              "numero": 95,
              "nivel": "32-33",
              "porcentaje": 30
            },
            {
              "numero": 208,
              "nivel": "33-34",
              "porcentaje": 10
            },
            {
              "pokedex": "*",
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Zafiro"
            },
            {
              "pokedex": "*",
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Rubí"
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
              "numero": 74,
              "nivel": 32,
              "porcentaje": 1
            },
            {
              "numero": 75,
              "nivel": "30-34",
              "porcentaje": 39
            },
            {
              "numero": 42,
              "nivel": "31-32",
              "porcentaje": 20
            },
            {
              "numero": 95,
              "nivel": "32-33",
              "porcentaje": 30
            },
            {
              "numero": 208,
              "nivel": "33-34",
              "porcentaje": 10
            },
            {
              "pokedex": "*",
              "numero": 302,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Zafiro"
            },
            {
              "pokedex": "*",
              "numero": 303,
              "nivel": "30-33",
              "porcentaje": 8,
              "cartucho": "Rubí"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Monte Corona - Salida por ruta 216",
      "caminando":[
        {
          "numero": 67,
          "nivel": 31,
          "porcentaje": 10
        },
        {
          "numero": 35,
          "nivel": "30-32",
          "porcentaje": 15
        },
        {
          "numero": 75,
          "nivel": 31,
          "porcentaje": 20
        },
        {
          "numero": 42,
          "nivel": "31-32",
          "porcentaje": 20
        },
        {
          "numero": 307,
          "nivel": "31-32",
          "porcentaje": 25
        },
        {
          "numero": 433,
          "nivel": 30,
          "porcentaje": 10
        }
      ]
    },
    {
      "nombre": "Ruta 216",
      "hierba": [
        {
          "numero": 215,
          "nivel": "32-33",
          "porcentaje": 25
        },
        {
          "numero": 459,
          "nivel": "32-33",
          "porcentaje": 25
        },
        {
          "numero": 67,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "33-34", "porcentaje": 20}, "dia": {"nivel": "33-34", "porcentaje": 20}, "noche": {"nivel": "33-34", "porcentaje": 10}}
        },
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "33-34", "porcentaje": 20}, "dia": {"nivel": "33-34", "porcentaje": 20}, "noche": {"nivel": "33-34", "porcentaje": 10}}
        },
        {
          "numero": 75,
          "nivel": "33-34",
          "porcentaje": 10
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 33, "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 33, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 217,
          "nivel": "33-34",
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 361,
          "nivel": "33-34",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 225,
          "nivel": 32,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 217",
      "hierba": [
        {
          "numero": 215,
          "nivel": "34-35",
          "porcentaje": 25
        },
        {
          "numero": 459,
          "nivel": "34-35",
          "porcentaje": 25
        },
        {
          "numero": 67,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "35-36", "porcentaje": 20}, "dia": {"nivel": "35-36", "porcentaje": 20}, "noche": {"nivel": "35-36", "porcentaje": 10}}
        },
        {
          "numero": 307,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 35, "porcentaje": 10}, "dia": {"nivel": 35, "porcentaje": 10}}
        },
        {
          "numero": 308,
          "nivel": "35-36",
          "porcentaje":20
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 35, "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 35, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 217,
          "nivel": "35-36",
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 361,
          "nivel": "35-36",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 220,
          "nivel": 34,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Orilla Agudeza",
      "hierba": [
        {
        	"numero": 308,
          "nivel": "35-36",
          "porcentaje": 20
        },
        {
        	"numero": 459,
        	"nivel": "34-35",
        	"porcentaje": 25
        },
        {
        	"numero": 67,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "35-36", "porcentaje": 20}, "dia": {"nivel": "35-36", "porcentaje": 20}, "noche": {"nivel": "35-36", "porcentaje": 10}}
        },
        {
        	"numero": 307,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "34-35", "porcentaje": 10}, "dia": {"nivel": "34-35", "porcentaje": 10}}
        },
        {
        	"numero": 215,
          "nivel": "34-35",
        	"porcentaje": 25
        },
        {
        	"numero": 41,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": "34-35", "porcentaje": 10}}
        },
        {
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 35, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 216,
          "nivel": 36,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 361,
        	"nivel": "34-36",
        	"porcentaje": 12
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
        	"numero": 400,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "34-35", "porcentaje": 35}, "dia": {"nivel": "34-35", "porcentaje": 35}, "noche": {"nivel": "34-35", "porcentaje": 25}}
        },
        {
        	"numero": 54,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "34-36", "porcentaje": 30}, "dia": {"nivel": "34-36", "porcentaje": 30}, "noche": {"nivel": "34-36", "porcentaje": 20}}
        },
        {
        	"numero": 215,
        	"nivel": "34-36",
        	"porcentaje": 25
        },
        {
        	"numero": 433,
        	"nivel": "34-36",
        	"porcentaje": 15
        },
        {
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": "34-36", "porcentaje": 20}}
        },
        {
          "pokedex": "*",
          "numero": 217,
          "nivel": "34-36",
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        },
        {
          "pokedex": "*",
          "numero": 338,
          "nivel": "34-36",
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 337,
          "nivel": "34-36",
          "porcentaje": 8,
          "cartucho": "Zafiro"
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
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 55}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 55}}
        },
        {
          "pokedex": "*",
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-55","porcentaje": 45}}
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
        	"numero": 238,
        	"nivel": 35,
        	"porcentaje": 40
        }
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 202,
        	"nivel": "34-36",
        	"porcentaje": 22
        }
      ]
    },
    {
      "nombre": "Monte Corona",
      "plantas":[
        {
          "nombre": "Pisos de 1 a 6 y túnel",
          "caminando":[
            {
            	"numero": 437,
            	"nivel": 38,
            	"porcentaje": 20
            },
            {
            	"numero": 35,
            	"nivel": "36-38",
            	"porcentaje": 15
            },
            {
            	"numero": 75,
            	"nivel": 36,
            	"porcentaje": 20
            },
            {
            	"numero": 42,
            	"nivel": 37,
            	"porcentaje": 10
            },
            {
            	"numero": 67,
            	"nivel": 37,
            	"porcentaje": 10
            },
            {
            	"numero": 308,
            	"nivel": 37,
            	"porcentaje": 10
            },
            {
            	"numero": 433,
            	"nivel": "37-38",
            	"porcentaje": 10
            },
            {
              "numero": 436,
              "nivel": 36,
              "porcentaje": 5
            },
            {
              "pokedex": "*",
              "numero": 338,
              "nivel": "36-37",
              "porcentaje": 8,
              "cartucho": "Rubí"
            },
            {
              "pokedex": "*",
              "numero": 337,
              "nivel": "36-37",
              "porcentaje": 8,
              "cartucho": "Zafiro"
            }
          ],
          "surf": [
            {
              "numero": 41,
              "nivel": "20-40",
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
              "numero": 147,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "15-20","porcentaje": 30}}
            },
            {
              "pokedex": "*",
              "numero": 148,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "15-40","porcentaje": 5}}
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando":[
            {
            	"numero": 66,
            	"nivel": "15-16",
            	"porcentaje": 25
            },
            {
            	"numero": 173,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 25}, "dia": {"nivel": 14, "porcentaje": 5}, "noche": {"nivel": 14, "porcentaje": 5}}
            },
            {
            	"numero": 74,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": "14-16", "porcentaje": 30}, "noche": {"nivel": "14-16", "porcentaje": 30}}
            },
            {
            	"numero": 41,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 10}, "dia": {"nivel": "14-16", "porcentaje": 20}, "noche": {"nivel": "14-16", "porcentaje": 20}}
            },
            {
            	"numero": 307,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-15", "porcentaje": 10}, "dia": {"nivel": "14-15", "porcentaje": 10}, "noche": {"nivel": "14-15", "porcentaje": 10}}
            },
            {
            	"numero": 433,
            	"nivel": 15,
            	"porcentaje": 10
            }
          ],
          "surf": [
            {
            	"numero": 41,
            	"nivel": "20-40",
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
          "nombre": "Exterior (zona de nieve)",
          "hierba": [
            {
            	"numero": 459,
            	"nivel": 38,
            	"porcentaje": 20
            },
            {
            	"numero": 460,
            	"nivel": 40,
            	"porcentaje": 20
            },
            {
            	"numero": 433,
            	"nivel": "39-40",
            	"porcentaje": 10
            },
            {
            	"numero": 35,
            	"nivel": "38-39",
            	"porcentaje": 5
            },
            {
            	"numero": 437,
            	"nivel": "39-40",
            	"porcentaje": 5
            },
            {
            	"numero": 67,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "39-40", "porcentaje": 20}, "dia": {"nivel": "39-40", "porcentaje": 20}, "noche": {"nivel": "39-40", "porcentaje": 10}}
            },
            {
            	"numero": 308,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "39-40", "porcentaje": 20}, "dia": {"nivel": "39-40", "porcentaje": 20}, "noche": {"nivel": "39-40", "porcentaje": 10}}
            },
            {
            	"numero": 42,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 39, "porcentaje": 10}}
            },
            {
            	"numero": 164,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 39, "porcentaje": 10}}
            },
            {
              "pokedex": "*",
              "numero": 338,
              "nivel": "38-39",
              "porcentaje": 8,
              "cartucho": "Rubí"
            },
            {
              "pokedex": "*",
              "numero": 337,
              "nivel": "38-39",
              "porcentaje": 8,
              "cartucho": "Zafiro"
            }
          ],
          "radar": [
            {
              "pokedex": "*",
            	"numero": 294,
            	"nivel": "39-40",
            	"porcentaje": 12
            }
          ]
        },
        {
          "nombre": "Columnas Lanza",
          "caminando": [
            {
              "numero": 483,
              "nivel": 47
            }
          ]
        }
      ]
    },
    {
      "nombre": "Caverna Agudeza",
      "caminando": [
        {
          "numero": 480,
          "nivel": 50
        }
      ]
    },
    {
      "nombre": "Caverna Valor",
      "caminando": [
        {
          "numero": 482,
          "nivel": 50
        }
      ]
    },
    {
      "nombre": "Caverna Veraz",
      "errante": [
        {
          "numero": 481,
          "nivel": 50
        }
      ]
    },
    {
      "nombre": "Ruta 222",
      "hierba": [
        {
          "numero": 423,
          "variedad": 0,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "40-42", "porcentaje": 30}, "dia": {"nivel": "40-42", "porcentaje": 30}, "noche": {"nivel": "40-42", "porcentaje": 40}}
        },
        {
          "numero": 419,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "40-42", "porcentaje": 25}, "dia": {"nivel": "40-42", "porcentaje": 25}, "noche": {"nivel": "40-42", "porcentaje": 35}}
        },
        {
          "numero": 441,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "40-41", "porcentaje": 20}, "dia": {"nivel": "40-41", "porcentaje": 20}}
        },
        {
          "numero": 122,
          "nivel": "41-42",
          "porcentaje": 15
        },
        {
          "numero": 278,
          "nivel": 41,
          "porcentaje": 10
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
          "porcentaje": 5
        },
        {
          "numero": 279,
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
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 319,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 5}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 180,
          "nivel": "41-42",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 300,
          "nivel": 40,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ciudad Marina",
      "lema": "¡Con energía solar!",
      "surf":[
        {
        	"numero": 73,
        	"nivel": "35-45",
        	"porcentaje": 60
        },
        {
        	"numero": 279,
        	"nivel": "35-45",
        	"porcentaje": 30
        },
        {
        	"numero": 458,
        	"nivel": "30-45",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 120,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-40","porcentaje": 15}}
        }
      ],
    },
    {
      "nombre": "Ruta 223",
      "surf":[
        {
        	"numero": 73,
        	"nivel": "35-45",
        	"porcentaje": 60
        },
        {
        	"numero": 279,
        	"nivel": "35-45",
        	"porcentaje": 30
        },
        {
        	"numero": 458,
        	"nivel": "30-45",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 15}}
        },
        {
          "pokedex": "*",
          "numero": 320,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 321,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "35-55","porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Calle Victoria",
      "plantas": [
        {
          "nombre": "Primera planta",
          "caminando": [
            {
            	"numero": 42,
            	"nivel": "44-46",
            	"porcentaje": 20
            },
            {
            	"numero": 308,
            	"nivel": "44-46",
            	"porcentaje": 15
            },
            {
            	"numero": 67,
            	"nivel": "44-46",
            	"porcentaje": 25
            },
            {
            	"numero": 95,
            	"nivel": 44,
            	"porcentaje": 10
            },
            {
            	"numero": 208,
            	"nivel": 46,
            	"porcentaje": 10
            },
            {
            	"numero": 75,
            	"nivel": 45,
            	"porcentaje": 20
            }
          ]
        },
        {
          "nombre": "Segunda planta",
          "caminando": [
            {
              "numero": 42,
              "nivel": "45-47",
              "porcentaje": 20
            },
            {
              "numero": 308,
              "nivel": "45-47",
              "porcentaje": 15
            },
            {
              "numero": 64,
              "nivel": "45-47",
              "porcentaje": 25
            },
            {
              "numero": 95,
              "nivel": 45,
              "porcentaje": 10
            },
            {
              "numero": 208,
              "nivel": 47,
              "porcentaje": 10
            },
            {
              "numero": 75,
              "nivel": 46,
              "porcentaje": 20
            }
          ]
        },
        {
          "nombre": "Sótano profundo",
          "caminando": [
            {
            	"numero": 419,
            	"nivel": "50-51",
            	"porcentaje": 30
            },
            {
            	"numero": 67,
            	"nivel": "50-52",
            	"porcentaje": 25
            },
            {
            	"numero": 42,
            	"nivel": "50-52",
            	"porcentaje": 20
            },
            {
            	"numero": 308,
            	"nivel": "50-52",
            	"porcentaje": 15
            },
            {
            	"numero": 208,
            	"nivel": 52,
            	"porcentaje": 10
            }
          ],
          "surf": [
            {
            	"numero": 42,
            	"nivel": "40-55",
            	"porcentaje": 90
            },
            {
            	"numero": 131,
            	"nivel": "40-60",
            	"porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 100}}
            },
            {
              "pokedex": "*",
              "numero": 130,
              "probabilidad": {"tipo":"cania", "super":{"nivel": "20-55","porcentaje": 100}}
            }
          ]
        }
      ]
    },
    {
      "nombre": "Liga Pokémon",
      "surf": [
        {
          "numero": 73,
          "nivel": "35-45",
          "porcentaje": 65
        },
        {
          "numero": 279,
          "nivel": "35-55",
          "porcentaje": 35
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":"10-25" ,"porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 60}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 370,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-30","porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 225",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "50-52", "porcentaje": 40}, "dia": {"nivel": "50-52", "porcentaje": 40}, "noche": {"nivel": "50-52", "porcentaje": 20}}
        },
        {
          "numero": 20,
          "nivel": "50-52",
          "porcentaje": 30
        },
        {
          "numero": 435,
          "nivel": 51,
          "porcentaje": 10
        },
        {
          "numero": 19,
          "nivel": "20-22",
          "porcentaje": 5
        },
        {
          "numero": 21,
          "nivel": "20-22",
          "porcentaje": 5
        },
        {
          "numero": 67,
          "nivel": 51,
          "porcentaje": 5
        },
        {
          "numero": 315,
          "nivel": 51,
          "porcentaje": 5
        },
        {
          "numero": 354,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "50-52", "porcentaje": 20}}
        }
      ],
      "surf": [
        {
          "numero": 55,
          "nivel": "40-55",
          "porcentaje": 70
        },
        {
          "numero": 61,
          "nivel": "40-50",
          "porcentaje": 30
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 65}}
        },
        {
          "pokedex": "*",
          "numero": 61,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 35}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 56,
          "nivel": 22,
          "porcentaje": 2
        },
        {
          "pokedex": "*",
          "numero": 57,
          "nivel": 51,
          "porcentaje": 20
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 296,
          "nivel": "50-51",
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 226",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "51-53", "porcentaje": 40}, "dia": {"nivel": "51-53", "porcentaje": 40}, "noche": {"nivel": "51-53", "porcentaje": 20}}
        },
        {
          "numero": 20,
          "nivel": "51-52",
          "porcentaje": 30
        },
        {
          "numero": 55,
          "nivel": "51-53",
          "porcentaje": 10
        },
        {
          "numero": 19,
          "nivel": "20-22",
          "porcentaje": 5
        },
        {
          "numero": 21,
          "nivel": "20-22",
          "porcentaje": 5
        },
        {
          "numero": 67,
          "nivel": 53,
          "porcentaje": 10
        },
        {
          "numero": 354,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "51-53", "porcentaje": 20}}
        }
      ],
      "surf": [
        {
          "numero": 279,
          "nivel": "40-55",
          "porcentaje": 60
        },
        {
          "numero": 86,
          "nivel": "35-45",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "40-55",
          "porcentaje": 5
        },
        {
          "numero": 87,
          "nivel": "40-55",
          "porcentaje": 5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 65}}
        },
        {
          "numero": 116,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 35}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 117,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 369,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-50","porcentaje": 15}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 56,
          "nivel": 22,
          "porcentaje": 2
        },
        {
          "pokedex": "*",
          "numero": 57,
          "nivel": "51-53",
          "porcentaje": 20
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 98,
          "nivel": 52,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 227",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "54-55", "porcentaje": 20}, "dia": {"nivel": "54-55", "porcentaje": 20}, "noche": {"nivel": "54-55", "porcentaje": 10}}
        },
        {
          "numero": 112,
          "nivel": 55,
          "porcentaje": 20
        },
        {
          "numero": 323,
          "nivel": 55,
          "porcentaje": 20
        },
        {
          "numero": 75,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "54-56", "porcentaje": 15}, "dia": {"nivel": "54-56", "porcentaje": 15}, "noche": {"nivel": "54-56", "porcentaje": 5}}
        },
        {
          "numero": 110,
          "nivel": 55,
          "porcentaje": 10
        },
        {
          "numero": 227,
          "nivel": 56,
          "porcentaje": 5
        },
        {
          "numero": 111,
          "nivel": "22-24",
          "porcentaje": 5
        },
        {
          "numero": 322,
          "nivel": "22-24",
          "porcentaje": 5
        },
        {
          "numero": 42,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 54, "porcentaje": 10}}
        },
        {
          "numero": 354,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 54, "porcentaje": 10}}
        },
        {
          "pokedex": "*",
          "numero": 207,
          "nivel": 22,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        },
        {
          "pokedex": "*",
          "numero": 240,
          "nivel": 22,
          "porcentaje": 8,
          "cartucho": "Verde hoja"
        }
      ],
      "surf": [
        {
          "numero": 61,
          "nivel": "40-55",
          "porcentaje": 70
        },
        {
          "numero": 60,
          "nivel": "20-30",
          "porcentaje": 30
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
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 324,
          "nivel": "24-55",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 327,
          "nivel": 55,
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "54-55", "porcentaje": 20}, "dia": {"nivel": "54-55", "porcentaje": 20}, "noche": {"nivel": 55, "porcentaje": 10}}
            },
            {
              "numero": 112,
              "nivel": 55,
              "porcentaje": 20
            },
            {
              "numero": 323,
              "nivel": 55,
              "porcentaje": 20
            },
            {
              "numero": 75,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "54-56", "porcentaje": 15}, "dia": {"nivel": "54-56", "porcentaje": 15}, "noche": {"nivel": 56, "porcentaje": 5}}
            },
            {
              "numero": 110,
              "nivel": 55,
              "porcentaje": 10
            },
            {
              "numero": 227,
              "nivel": 56,
              "porcentaje": 5
            },
            {
              "numero": 322,
              "nivel": "22-24",
              "porcentaje": 5
            },
            {
              "numero": 111,
              "nivel": "22-24",
              "porcentaje": 5
            },
            {
              "numero": 42,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 54, "porcentaje": 10}}
            },
            {
              "numero": 354,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 54, "porcentaje": 10}}
            },
            {
              "pokedex": "*",
              "numero": 207,
              "nivel": 22,
              "porcentaje": 8,
              "cartucho": "Esmeralda"
            },
            {
              "pokedex": "*",
              "numero": 240,
              "nivel": 22,
              "porcentaje": 8,
              "cartucho": "Verde hoja"
            }
          ],
          "radar": [
            {
              "pokedex": "*",
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
              "nivel": "53-58",
              "porcentaje": 30
            },
            {
              "numero": 75,
              "nivel": "51-57",
              "porcentaje": 20
            },
            {
              "numero": 42,
              "nivel": "52-56",
              "porcentaje": 10
            },
            {
              "numero": 67,
              "nivel": "56-58",
              "porcentaje": 10
            },
            {
              "numero": 110,
              "nivel": "51-58",
              "porcentaje": 10
            },
            {
              "numero": 74,
              "nivel": "25-29",
              "porcentaje": 5
            },
            {
              "numero": 218,
              "nivel": "25-29",
              "porcentaje": 5
            },
            {
              "numero": 95,
              "nivel": "54-56",
              "porcentaje": 5
            },
            {
              "numero": 323,
              "nivel": "54-56",
              "porcentaje": 5
            },
            {
              "pokedex": "*",
              "numero": 240,
              "nivel": 27,
              "porcentaje": 8,
              "cartucho": "Verde hoja"
            }
          ]
        },
        {
          "nombre": "Sala final",
          "caminando": [
            {
              "numero": 485,
              "nivel": 70
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 228",
      "hierba": [
        {
          "numero": 51,
          "nivel": "52-54",
          "porcentaje": 30
        },
        {
          "numero": 112,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "52-53", "porcentaje": 20}, "dia": {"nivel": "52-53", "porcentaje": 20}, "noche": {"nivel": "52-53", "porcentaje": 10}}
        },
        {
          "numero": 332,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 53, "porcentaje": 20}, "dia": {"nivel": 53, "porcentaje": 20}, "noche": {"nivel": "52-53", "porcentaje": 40}}
        },
        {
          "numero": 450,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "52-54", "porcentaje": 20}, "dia": {"nivel": "52-54", "porcentaje": 20}, "noche": {"nivel": "52-54", "porcentaje": 10}}
        },
        {
          "numero": 50,
          "nivel": "23-25",
          "porcentaje": 5
        },
        {
          "numero": 331,
          "nivel": "23-25",
          "porcentaje": 5
        },
        {
          "pokedex": "*",
          "numero": 28,
          "nivel": 23,
          "porcentaje": 8,
          "cartucho": "Verde hoja"
        }
      ],
      "surf": [
        {
          "numero": 61,
          "nivel": "40-55",
          "porcentaje": 70
        },
        {
          "numero": 60,
          "nivel": "20-30",
          "porcentaje":30
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 339,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-55","porcentaje": 55}}
        },
        {
          "pokedex": "*",
          "numero": 340,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 45}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 329,
          "nivel": "52-54",
          "porcentaje": 20
        },
        {
          "pokedex": "*",
          "numero": 328,
          "nivel": 25,
          "porcentaje": 2
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 374,
          "nivel": 53,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 229",
      "hierba": [
        {
          "numero": 44,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 51, "porcentaje": 20}, "dia": {"nivel": "51-52", "porcentaje": 30}, "noche": {"nivel": 51, "porcentaje": 20}}
        },
        {
          "numero": 70,
           "probabilidad": {"tipo":"hora", "maniana": {"nivel": 51, "porcentaje": 20}, "dia": {"nivel": "51-52", "porcentaje": 30}, "noche": {"nivel": 51, "porcentaje": 20}}
        },
        {
          "numero": 166,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 52, "porcentaje": 20}}
        },
        {
          "numero": 314,
          "nivel": 50,
          "porcentaje": 10
        },
        {
          "numero": 315,
          "nivel": 50,
          "porcentaje": 10
        },
        {
          "numero": 43,
          "nivel": "20-22",
          "porcentaje": 5
        },
        {
          "numero": 69,
          "nivel": "20-22",
          "porcentaje": 5
        },
        {
          "numero": 123,
          "nivel": 52,
          "porcentaje": 5
        },
        {
          "numero": 313,
          "nivel": 50,
          "porcentaje": 5
        },
        {
          "numero": 168,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 52, "porcentaje": 20}}
        },
        {
          "pokedex": "*",
          "numero": 274,
          "nivel": 20,
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokedex": "*",
          "numero": 271,
          "nivel": 20,
          "porcentaje": 8,
          "cartucho": "Zafiro"
        },
        {
          "pokedex": "*",
          "numero": 204,
          "nivel": 20,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "surf": [
        {
          "numero": 278,
          "nivel": "40-55",
          "porcentaje": 70
        },
        {
          "numero": 279,
          "nivel": "45-55",
          "porcentaje":30
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 100}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-55","porcentaje": 100}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 48,
          "nivel": 22,
          "porcentaje": 2
        },
        {
          "pokedex": "*",
          "numero": 49,
          "nivel": "50-52",
          "porcentaje": 20
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 16,
          "nivel": 51,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 230",
      "hierba": [
        {
          "numero": 44,
          "nivel": 50,
          "porcentaje": 20
        },
        {
          "numero": 70,
          "nivel": 50,
          "porcentaje": 20
        },
        {
          "numero": 419,
          "nivel": "50-52",
          "porcentaje": 13
        },
        {
          "numero": 43,
          "nivel": "18-23",
          "porcentaje": 11
        },
        {
          "numero": 69,
          "nivel": "18-23",
          "porcentaje": 11
        },
        {
          "numero": 55,
          "nivel": 52,
          "porcentaje": 10
        },
        {
          "numero": 267,
          "nivel": 51,
          "porcentaje": 10
        },
        {
          "numero": 423,
          "variedad": 0,
          "nivel": 51,
          "porcentaje": 5
        }
      ],
      "surf": [
        {
          "numero": 279,
          "nivel": "40-55",
          "porcentaje": 60
        },
        {
          "numero": 86,
          "nivel": "35-45",
          "porcentaje":30
        },
        {
          "numero": 73,
          "nivel": "40-55",
          "porcentaje": 5
        },
        {
          "numero": 87,
          "nivel": "40-55",
          "porcentaje":5
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 320,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "40-55","porcentaje": 15}}
        },
        {
          "pokedex": "*",
          "numero": 321,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "35-55","porcentaje": 5}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
          "numero": 175,
          "nivel": "18-23",
          "porcentaje": 22
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
          "numero": 222,
          "nivel": 50,
          "porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Ruta 224",
      "hierba": [
        {
        	"numero": 315,
        	"nivel": "52-54",
        	"porcentaje": 20
        },
        {
        	"numero": 419,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 53, "porcentaje": 20}, "dia": {"nivel": 53, "porcentaje": 20}, "noche": {"nivel": "53-54", "porcentaje": 30}}
        },
        {
        	"numero": 423,
          "variedad": 0,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 53, "porcentaje": 20}, "dia": {"nivel": 53, "porcentaje": 20}, "noche": {"nivel": "52-53", "porcentaje": 30}}
        },
        {
        	"numero": 441,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "52-54", "porcentaje": 20}, "dia": {"nivel": "52-54", "porcentaje": 20}}
        },
        {
        	"numero": 44,
        	"nivel": 53,
        	"porcentaje": 5
        },
        {
        	"numero": 70,
        	"nivel": 53,
        	"porcentaje": 5
        },
        {
        	"numero": 267,
        	"nivel": 23,
        	"porcentaje": 5
        },
        {
        	"numero": 418,
        	"nivel": 23,
        	"porcentaje": 4
        },
        {
        	"numero": 422,
          "variedad": 0,
        	"nivel": 23,
        	"porcentaje": 1
        },
        {
          "pokedex": "*",
          "numero": 213,
          "nivel": 23,
          "porcentaje": 8,
          "cartucho": "Esmeralda"
        }
      ],
      "surf":[
        {
          "numero": 73,
          "nivel": "40-55",
          "porcentaje": 35
        },
        {
          "numero": 279,
          "nivel": "40-55",
          "porcentaje": 65
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10","porcentaje": 100}, "buena":{"nivel":"10-25" ,"porcentaje": 55}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": "10-25","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 130,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "30-40","porcentaje": 40}}
        },
        {
          "pokedex": "*",
          "numero": 224,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-50","porcentaje": 45}}
        },
        {
          "pokedex": "*",
          "numero": 370,
          "probabilidad": {"tipo":"cania", "super":{"nivel": "20-30","porcentaje": 15}}
        }
      ],
      "radar": [
        {
          "pokedex": "*",
        	"numero": 355,
        	"nivel": 23,
        	"porcentaje": 2
        },
        {
          "pokedex": "*",
        	"numero":356,
        	"nivel": 52,
        	"porcentaje": 20
        }
      ],
      "masiva": [
        {
          "pokedex": "*",
        	"numero": 177,
        	"nivel": 53,
        	"porcentaje": 40
        }
      ]
    },
    {
      "nombre": "Fuente Despedida",
      "hierba": [
        {
          "pokemon": "*",
        	"numero": 400,
        	"nivel": "52-54",
        	"porcentaje": 45
        },
        {
          "pokemon": "*",
        	"numero": 397,
        	"nivel": "52-54",
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 25}, "dia": {"porcentaje": 25}, "noche": {"porcentaje": 5}}
        },
        {
          "pokemon": "*",
        	"numero": 55,
        	"nivel": "53-54",
        	"porcentaje": 20
        },
        {
          "pokemon": "*",
        	"numero": 358,
          "nivel": "52-54",
        	"porcentaje": 10
        },
        {
          "pokemon": "*",
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": "52-54", "porcentaje": 20}}
        },
        {
          "pokedex": "*",
          "numero": 337,
          "nivel": 52,
          "porcentaje": 8,
          "cartucho": "Zafiro"
        },
        {
          "pokedex": "*",
          "numero": 338,
          "nivel": 52,
          "porcentaje": 8,
          "cartucho": "Rubí"
        }
      ],
      "surf": [
        {
          "pokemon": "*",
        	"numero": 55,
        	"nivel": "40-55",
        	"porcentaje": 100
        }
      ],
      "pesca": [
        {
          "pokemon": "*",
        	"numero": 129,
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": "3-10", "porcentaje": 100}, "buena":{"nivel": "10-25", "porcentaje": 55}}
        },
        {
          "pokemon": "*",
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
        	"probabilidad": {"tipo":"cania", "super":{"nivel": "20-50", "porcentaje": 45}}
        }
      ]
    },
    {
      "nombre": "Cueva Retorno",
      "caminando": [
        {
          "pokemon": "*",
        	"numero": 42,
        	"nivel": "45-66",
        	"porcentaje": 30
        },
        {
          "pokemon": "*",
        	"numero": 93,
        	"nivel": "44-66",
        	"porcentaje": 30
        },
        {
          "pokemon": "*",
        	"numero": 436,
        	"nivel": "44-66",
        	"porcentaje": 5
        },
        {
          "pokemon": "*",
        	"numero": 437,
        	"nivel": "45-66",
        	"porcentaje": 35
        },
        {
          "pokedex": "*",
          "numero": 337,
          "nivel": "44-66",
          "porcentaje": 8,
          "cartucho": "Zafiro"
        },
        {
          "pokedex": "*",
          "numero": 338,
          "nivel": "44-66",
          "porcentaje": 8,
          "cartucho": "Rubí"
        },
        {
          "pokemon": "*",
          "numero": 487,
          "nivel": 70
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
            	"nivel": "50-56",
            	"porcentaje": 35
            },
            {
            	"numero": 42,
            	"nivel": "50-56",
            	"porcentaje": 35
            },
            {
            	"numero": 95,
            	"nivel": "50-53",
            	"porcentaje": 15
            },
            {
            	"numero": 208,
            	"nivel": "52-56",
            	"porcentaje": 5
            },
            {
            	"numero": 75,
            	"nivel": "50-56",
            	"porcentaje": 10
            }
          ]
        },
        {
          "nombre": "Sótanos 1, 2, y 3",
          "caminando": [
            {
              "numero": 215,
              "nivel": "50-56",
              "porcentaje": 35
            },
            {
              "numero": 42,
              "nivel": "50-56",
              "porcentaje": 35
            },
            {
              "numero": 95,
              "nivel": "50-53",
              "porcentaje": 5
            },
            {
              "numero": 208,
              "nivel": "52-56",
              "porcentaje": 15
            },
            {
              "numero": 75,
              "nivel": "50-56",
              "porcentaje": 10
            }
          ]
        },
        {
          "nombre": "Sótano 4 y sala Regigigas",
          "caminando": [
            {
              "numero": 215,
              "nivel": "50-56",
              "porcentaje": 35
            },
            {
              "numero": 42,
              "nivel": "50-56",
              "porcentaje": 35
            },
            {
              "numero": 208,
              "nivel": "52-56",
              "porcentaje": 20
            },
            {
              "numero": 75,
              "nivel": "50-56",
              "porcentaje": 10
            },
            {
              "numero": 486,
              "nivel": 70
            }
          ]
        }
      ]
    },
    {
      "nombre": "Isla Plenilunio",
      "errante": [
        {
        	"numero": 488,
        	"nivel": 50
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
            	"porcentaje": 29
            },
            {
            	"numero": 266,
              "nivel": "5-15",
            	"porcentaje": 14
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
            	"porcentaje": 11
            },
            {
            	"numero": 420,
            	"nivel": "5-15",
            	"porcentaje": 7.5
            },
            {
            	"numero": 190,
            	"nivel": "5-15",
            	"porcentaje": 5.5
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
            	"porcentaje": 11.5
            },
            {
            	"numero": 266,
              "nivel": "5-15",
            	"porcentaje": 4
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
            	"porcentaje": 16
            },
            {
            	"numero": 420,
            	"nivel": "5-15",
            	"porcentaje": 15
            },
            {
            	"numero": 190,
            	"nivel": "5-15",
            	"porcentaje": 8
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
          "numero": 198
        },
        {
          "numero": 443
        },
        {
          "numero": 447
        },
        {
          "numero": 215
        },
        {
          "numero": 81
        },
        {
          "numero": 108
        },
        {
          "numero": 111
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
          "numero": 133
        },
        {
          "numero": 207
        },
        {
          "numero": 220
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
          "numero": 280
        },
        {
          "numero": 299
        },
        {
          "numero": 355
        },
        {
          "numero": 361
        },
        {
        	"numero": 366
        },
        {
        	"numero": 374
        },
        {
          "numero": 408
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
        	"numero": 74
        },
        {
        	"numero": 77
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
        	"numero": 104
        },
        {
        	"numero": 236
        },
        {
        	"numero": 120
        },
        {
        	"numero": 238
        },
        {
        	"numero": 446
        },
        {
        	"numero": 147
        },
        {
        	"numero": 161
        },
        {
        	"numero": 41
        },
        {
        	"numero": 177
        },
        {
        	"numero": 179
        },
        {
        	"numero": 298
        },
        {
        	"numero": 438
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
        	"numero": 458
        },
        {
        	"numero": 116
        },
        {
        	"numero": 231
        },
        {
        	"numero": 440
        },
        {
        	"numero": 246
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
        	"numero": 296
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
          "numero": 325
        },
        {
          "numero": 328
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

      ]
    },
    {
      "nombre": "Crianza",
      "otros": [
        {
          "numero": 109
        },
        {
        	"numero": 165
        },
        {
        	"numero": 167
        },
        {
        	"numero": 261
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
        	"numero": 489,
          "observaciones": "De Manaphy y Ditto"
        }
      ]
    },
    {
      "nombre": "Intercambiar de Perla",
      "otros": [
        {
        	"numero": 79
        },
        {
        	"numero": 127
        },
        {
        	"numero": 200
        },
        {
        	"numero": 228
        },
        {
        	"numero": 234
        },
        {
        	"numero": 363
        },
        {
        	"numero": 371
        },
        {
        	"numero": 410
        },
        {
        	"numero": 431
        },
        {
        	"numero": 484
        }
      ]
    },
    {
      "nombre": "Intercambiar de Platino",
      "otros": [
        {
          "numero": 114
        },
        {
        	"numero": 357
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
        	"numero": 144
        },
        {
        	"numero": 145
        },
        {
        	"numero": 146
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
        },
        {
        	"numero": 386
        }
      ]
    },
    {
      "nombre": "Evento",
      "plantas": [
        {
          "nombre": "Isla Lunanueva",
          "caminando": [
            {
              "numero": 491,
              "nivel": 40
            }
          ]
        },
        {
          "nombre": "Paraíso Floral",
          "caminando": [
            {
            	"numero": 492,
            	"nivel": 30
            }
          ]
        },
        {
          "nombre": "Sala del Origen",
          "caminando": [
            {
            	"numero": 493,
            	"nivel": 80
            }
          ]
        }
      ],
      "especial": [
        {
          "numero": 490,
          "observaciones": "Transferir huevo de Manaphy de Pokémon Ranger"
        }
      ]
    }
  ]
}
