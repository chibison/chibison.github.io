const plata={
  "nombre":"plata",
	"titulo": "Plata",
  "gen":2,
  "filtros":[
    {
      "nombre": "Pesca",
      "imagen": "otros/gen2/pesca.png",
      "filtro": "pesca",
      "defecto": false
    },
    {
      "nombre": "Surf",
      "imagen": "otros/gen2/surf.png",
      "filtro": "surf",
      "defecto": false
    },
    {
      "nombre": "Golpe cabeza",
      "imagen": "otros/gen2/cabeza.png",
      "filtro": "cabeza",
      "defecto": false
    },
    {
      "nombre": "Golpe roca",
      "imagen": "otros/gen2/roca.png",
      "filtro": "roca",
      "defecto": false
    }
  ],
  "lugares": [
    {
      "nombre": "Pueblo Primavera",
      "lema": "El pueblo donde soplan vientos de un nuevo amanecer.",
      "regalo":[
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
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":10}, "super":{"nivel":40, "porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":20}, "super":{"nivel":40, "porcentaje":40}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Ruta 29",
      "hierba":[
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana": {"nivel":"2-4", "porcentaje":55}, "dia":{"nivel":"2-4", "porcentaje":55}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":5}, "dia":{"nivel":4, "porcentaje":5}, "noche":{"nivel":"2-4", "porcentaje":15}}
        },
        {
          "numero": 161,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"2-3", "porcentaje":40}, "dia":{"nivel":"2-3", "porcentaje":40}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"2-4", "porcentaje":85}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ]
    },
    {
      "nombre": "Ruta 46",
      "hierba": [
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-3", "porcentaje": 40}, "dia":{"nivel": "2-3", "porcentaje": 40}, "noche":{"nivel": "2-4", "porcentaje": 45}}
        },
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-3", "porcentaje": 35}, "dia":{"nivel": "2-3", "porcentaje": 35}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 2, "porcentaje": 20}, "dia":{"nivel": 2, "porcentaje": 20}, "noche":{"nivel": "2-3", "porcentaje": 50}}
        },
        {
          "numero": 39,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-5", "porcentaje": 5}, "dia":{"nivel": "3-5", "porcentaje": 5}, "noche":{"nivel": "3-5", "porcentaje": 5}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ]
    },
    {
      "nombre": "Ciudad Cerezo",
      "lema": "La ciudad de las flores bonitas y fragantes.",
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 98,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 55}, "super":{"nivel":40,"porcentaje": 60}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 222,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana": 10, "dia": 10}, "super":{"nivel":40, "maniana": 30, "dia": 30}}
        },
        {
          "numero": 99,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        },
        {
          "numero": 120,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "noche": 10}, "super":{"nivel":40, "noche": 30}}
        }
      ]
    },
    {
      "nombre":"Ruta 30",
      "hierba": [
        {
          "numero": 13,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"3-4", "porcentaje":50}, "dia":{"nivel":"3-4", "porcentaje":35}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":10}, "dia":{"nivel":"2-4", "porcentaje":50}}
        },
        {
          "numero": 14,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":10}, "dia":{"nivel":"4-5", "porcentaje":15}}
        },
        {
          "numero": 165,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":3, "porcentaje":30}, "dia":{"nivel":4, "porcentaje":15}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"3-4", "porcentaje":40}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":4, "porcentaje":60}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ],
      "surf":[
        {
          "numero": 60,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Ruta 31",
      "hierba": [
        {
          "numero": 13,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"4-5", "porcentaje":30}, "dia":{"nivel":"4-5", "porcentaje":35}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":5, "porcentaje":10}, "dia":{"nivel":3, "porcentaje":30}}
        },
        {
          "numero": 14,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":5, "porcentaje":10}, "dia":{"nivel":"5-6", "porcentaje":15}}
        },
        {
          "numero": 69,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":3, "porcentaje":20}, "dia":{"nivel":3, "porcentaje":20}, "noche":{"nivel":3, "porcentaje":20}}
        },
        {
          "numero": 165,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":30}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"4-5", "porcentaje":40}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"3-5", "porcentaje":40}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ],
      "surf":[
        {
          "numero": 60,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Cueva Oscura",
      "plantas": [
        {
          "nombre": "Zona Sur",
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
          "surf":[
            {
              "numero": 129,
              "nivel": "5-19",
              "porcentaje": 100
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ],
          "roca":[
            {
              "numero": 98,
              "nivel": 15,
              "porcentaje": 90
            },
            {
              "numero": 213,
              "nivel": 15,
              "porcentaje": 10
            }
          ],
          "masiva": [
            {

            	"numero": 74,
            	"nivel": "2-3",
            	"porcentaje": 40
            },
            {

            	"numero": 41,
            	"nivel": 2,
            	"porcentaje": 20
            },
            {

            	"numero": 206,
            	"nivel": "2-4",
            	"porcentaje": 40
            }
          ]
        },
        {
          "nombre": "Zona Norte",
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
            	"numero": 42,
            	"nivel": 23,
            	"porcentaje": 5
            },
            {
              "numero": 202,
              "nivel": "20-25",
              "porcentaje": 15
            }
          ],
          "surf":[
            {
              "numero": 129,
              "nivel": "5-19",
              "porcentaje": 100
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ]
        }
      ]
    },
    {
      "nombre":"Ciudad Malva",
      "lema": "La ciudad de los aromas nostálgicos.",
      "surf":[
        {
          "numero": 60,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ],
      "intercambio": [
        {
					"numero": 95,
					"necesita": 69
				}
      ],
      "huevo": [
        {
          "numero":175,
          "nivel":5
        }
      ]
    },
    {
      "nombre": "Torre Bellsprout",
      "caminando": [
        {
          "numero": 19,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"3-6", "porcentaje":100}, "dia":{"nivel":"3-6", "porcentaje":100}, "noche":{"nivel":"3-5", "porcentaje":15}}
        },
        {
          "numero": 92,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"3-6", "porcentaje":85}}
        },
      ]
    },
    {
      "nombre": "Ruta 36",
      "hierba": [
        {
          "numero": 37,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":13, "porcentaje":10}, "dia":{"nivel":13, "porcentaje":15}, "noche":{"nivel":13, "porcentaje":10}}
        },
        {
          "numero": 32,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":12, "porcentaje":30}, "dia":{"nivel":12, "porcentaje":30}, "noche":{"nivel":12, "porcentaje":30}}
        },
        {
          "numero": 29,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":12, "porcentaje":30}, "dia":{"nivel":12, "porcentaje":30}, "noche":{"nivel":12, "porcentaje":30}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"13-15", "porcentaje":25}, "dia":{"nivel":"13-15", "porcentaje":20}}
        },
        {
          "numero": 234,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":13, "porcentaje":5}, "dia":{"nivel":13, "porcentaje":5}, "noche":{"nivel":13, "porcentaje":5}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"13-15", "porcentaje":25}}
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
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
      "plantas":[
        {
          "nombre": "Exterior",
          "hierba":[
            {
              "numero": 177,
              "nivel": "18-24",
              "porcentaje":90
            },
            {
              "numero": 235,
              "nivel": "20-22",
              "porcentaje": 10
            }
          ],
          "surf": [
            {
              "numero": 194,
              "nivel": "15-19",
              "porcentaje": 60
            },
            {
              "numero": 195,
              "nivel": "15-24",
              "porcentaje": 40
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 60,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
            },
            {
              "numero": 61,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ]
        },
        {
          "nombre": "Sala Kabuto",
          "caminando": [
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 0
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 1
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 2
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 3
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 4
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 5
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 6
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 7
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 8
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 9
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 9,
              "variedad": 10
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
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 14,
              "variedad": 17
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
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 20,
              "variedad": 22
            }
          ]
        },
        {
          "nombre": "Sala Ho-Oh",
          "caminando": [
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 33,
              "variedad": 23
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 33,
              "variedad": 24
            },
            {
              "numero": 201,
              "nivel": 5,
              "porcentaje": 33,
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":6 ,"porcentaje":5}, "dia": {"nivel":"6-8" ,"porcentaje":10}}
        },
        {
          "numero": 69,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":6 ,"porcentaje":30}, "dia": {"nivel":6 ,"porcentaje":30}, "noche": {"nivel":6 ,"porcentaje":20}}
        },
        {
          "numero": 179,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":6 ,"porcentaje":20}, "dia": {"nivel":6 ,"porcentaje":20}, "noche": {"nivel":6 ,"porcentaje":10}}
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":6 ,"porcentaje":10}, "dia": {"nivel":6 ,"porcentaje":10}}
        },
        {
          "numero": 194,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":4 ,"porcentaje":4},  "noche": {"nivel": "6-8","porcentaje":35}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":4 ,"porcentaje":1}, "noche": {"nivel": 8,"porcentaje":5} }
        },
        {
          "numero": 23,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":4 ,"porcentaje":30}, "dia": {"nivel":4 ,"porcentaje":30}, "noche": {"nivel":4 ,"porcentaje":30}}
        }
      ],
      "surf":[
        {
          "numero": 72,
          "nivel": "15-19",
          "porcentaje": 60
        },
        {
          "numero": 195,
          "nivel": "20-24",
          "porcentaje": 30
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 72,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
        },
        {
          "numero": 211,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ],
      "masiva":[
        {

          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}}
        },
        {

          "numero": 211,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":"5-10", "porcentaje": 15}, "buena":{"nivel":20, "porcentaje":65}, "super": {"nivel": 40, "porcentaje":100}}
        }
      ]
    },
    {
      "nombre": "Cueva Unión",
      "plantas": [
        {
          "nombre":"Planta baja",
          "caminando": [
            {
              "numero": 19,
              "nivel": "4-6",
              "porcentaje":40
            },
            {
              "numero": 74,
              "nivel": 6,
              "porcentaje":30
            },
            {
              "numero": 41,
              "nivel": "5-7",
              "porcentaje":25
            },
            {
              "numero": 95,
              "nivel": 6,
              "porcentaje":5
            }
          ],
          "surf": [
            {
              "numero": 194,
              "nivel": "15-19",
              "porcentaje": 60
            },
            {
              "numero": 195,
              "nivel": "15-24",
              "porcentaje": 40
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ]
        },
        {
          "nombre":"Sótano 1",
          "caminando": [
            {
              "numero": 19,
              "nivel": "6-8",
              "porcentaje": 35
            },
            {
              "numero": 74,
              "nivel": 8,
              "porcentaje":30
            },
            {
              "numero": 41,
              "nivel": "7-9",
              "porcentaje":25
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
              "nivel": "15-19",
              "porcentaje": 60
            },
            {
              "numero": 195,
              "nivel": "15-24",
              "porcentaje": 40
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ]
        },
        {
          "nombre": "Sótano 2",
          "caminando": [
            {
              "numero": 41,
              "nivel": 22,
              "porcentaje": 30
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
            },
            {
              "numero": 74,
              "nivel": 21,
              "porcentaje": 10
            },
            {
              "numero": 19,
              "nivel": 20,
              "porcentaje": 5
            },
            {
              "numero": 95,
              "nivel": 23,
              "porcentaje": 5
            }
          ],
          "surf": [
            {
              "numero": 72,
              "nivel": "15-19",
              "porcentaje": 60
            },
            {
              "numero": 195,
              "nivel": "20-24",
              "porcentaje": 30
            },
            {
              "numero": 73,
              "nivel": "20-24",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}}
            },
            {
              "numero": 72,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 35}}
            },
            {
              "numero": 170,
              "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "porcentaje":20}, "super": {"nivel": 40, "porcentaje":40}}
            },
            {
              "numero": 90,
              "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "porcentaje":10}, "super": {"nivel": 40, "porcentaje":30}}
            },
            {
              "numero": 73,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":20}}
            },
            {
              "numero": 171,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ],
          "especial":[
            {
              "numero": 131,
              "nivel": 20,
              "observaciones": "Uno los viernes"
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
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":6, "porcentaje":10 }, "dia":{"nivel":6, "porcentaje":15}, "noche":{"nivel":6, "porcentaje":30}}
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": "6-8" , "porcentaje": 35}, "dia":{"nivel": "6-8", "porcentaje": 35}}
        },
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": 6, "porcentaje":20 }, "dia":{"nivel": 6, "porcentaje":20}}
        },
        {
          "numero": 23,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":7, "porcentaje":30}, "dia":{"nivel":7, "porcentaje":30}, "noche":{"nivel":7, "porcentaje":30}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": 4, "porcentaje": 5}, "noche":{"nivel":"6-8", "porcentaje": 40}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ]
    },
    {
      "nombre": "Pueblo Azalea",
      "lema": "Donde la gente y los Pokémon viven en feliz armonía.",
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ]
    },
    {
      "nombre": "Pozo Slowpoke",
      "plantas":[
        {
          "nombre": "Planta baja",
          "caminando":[
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
          "surf":[
            {
              "numero": 79,
              "nivel": "10-24",
              "porcentaje": 100
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super":{"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super":{"nivel":40, "porcentaje":70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando":[
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
              "nivel": "23",
              "porcentaje": 5
            }
          ],
          "surf":[
            {
              "numero": 79,
              "nivel": "15-24",
              "porcentaje": 90
            },
            {
              "numero": 80,
              "nivel": "20-24",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super":{"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super":{"nivel":40, "porcentaje":70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ]
        }
      ]
    },
    {
      "nombre": "Encinar",
      "caminando":[
        {
          "numero": 13,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": "5-6", "porcentaje": 50}, "dia":{"nivel": "5-6", "porcentaje": 60}}
        },
        {
          "numero": 14,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":6 , "porcentaje":30 }, "dia":{"nivel": "5-6", "porcentaje": 30}}
        },
        {
          "numero": 46,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": "5-6" , "porcentaje": 15}, "dia":{"nivel": 6, "porcentaje": 5}, "noche":{"nivel": "5-6", "porcentaje":15}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":5, "porcentaje": 5}, "dia":{"nivel": 5, "porcentaje": 5}, "noche":{"nivel": "5-6", "porcentaje": 25}}
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche":{"nivel": "5-6", "porcentaje": 60}}
        }
      ],
      "surf":[
        {
          "numero": 54,
          "nivel": "10-19",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "15-19",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super":{"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super":{"nivel":40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
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
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}}
        },
        {
          "numero": 98,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 55}, "super":{"nivel":40, "porcentaje":60}}
        },
        {
          "numero": 222,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana":10, "dia":10}, "super": {"nivel": 40, "maniana":30, "dia":30}}
        },
        {
          "numero": 99,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        },
        {
          "numero": 120,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20,  "noche":10}, "super": {"nivel": 40, "noche":30}}
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
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
      "regalo":[
        {
          "numero": 133,
          "nivel": 20
        }
      ],
      "casino":[
        {
          "numero": 27,
          "nivel": 10,
          "fichas": 700
        },
        {
          "numero": 63,
          "nivel": 10,
          "fichas": 200
        },
        {
          "numero": 147,
          "nivel": 10,
          "fichas": 2100
        }
      ]
    },
    {
      "nombre": "Ruta 35",
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
          "numero": 96,
          "nivel": 14,
          "porcentaje": 20
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":14 ,"porcentaje":5}, "dia":{"nivel":14 ,"porcentaje":5}}
        },
        {
          "numero": 63,
          "nivel": 10,
          "porcentaje": 10
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
          "probabilidad": {"tipo": "hora", "noche":{"nivel":14 ,"porcentaje":5}}
        }
      ],
      "surf":[
        {
          "numero": 54,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 55,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super":{"nivel": 40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super":{"nivel":40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ],
      "masiva": [
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

          "numero": 193,
          "nivel": "12-14",
          "porcentaje": 30
        },
        {

          "numero": 16,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 5 }, "dia": {"nivel": 14, "porcentaje": 5 }}
        },
        {

          "numero": 132,
          "nivel": 10,
          "porcentaje": 5
        },
        {

          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Parque Nacional",
      "hierba": [
        {
          "numero": 13,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": "10-12", "porcentaje": 50}, "dia": {"nivel":10, "porcentaje": 30}}
        },
        {
          "numero": 14,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 30}, "dia": {"nivel":10, "porcentaje": 30}}
        },
        {
          "numero": 16,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": "10-14", "porcentaje": 20}, "dia": {"nivel":"12-14", "porcentaje": 15}}
        },
        {
          "numero": 191,
          "probabilidad":{"tipo":"hora", "dia": {"nivel":"11-13", "porcentaje": 25}}
        },
        {
          "numero": 163,
          "probabilidad":{"tipo":"hora", "noche": {"nivel": "10-14", "porcentaje": 100}}
        }
      ],
      "concurso": [
        {
          "numero": 10,
          "nivel": "7-18",
          "porcentaje": 20
        },
        {
          "numero": 13,
          "nivel": "7-18",
          "porcentaje": 20
        },
        {
          "numero": 11,
          "nivel": "9-18",
          "porcentaje": 10
        },
        {
          "numero": 14,
          "nivel": "9-18",
          "porcentaje": 10
        },
        {
          "numero": 48,
          "nivel": "10-16",
          "porcentaje": 10
        },
        {
          "numero": 46,
          "nivel": "10-17",
          "porcentaje": 10
        },
        {
          "numero": 12,
          "nivel": "12-15",
          "porcentaje": 5
        },
        {
          "numero": 15,
          "nivel": "12-15",
          "porcentaje": 5
        },
        {
          "numero": 123,
          "nivel": "13-14",
          "porcentaje": 5
        },
        {
          "numero": 127,
          "nivel": "13-14",
          "porcentaje": 5
        }
      ]
    },
    {
      "nombre": "Ruta 37",
      "hierba": [
        {
          "numero": 16,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":15, "porcentaje":20}, "dia": {"nivel": "13-15", "porcentaje":50 }}
        },
        {
          "numero": 165,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":"13-15", "porcentaje":40}}
        },
        {
          "numero": 37,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":14, "porcentaje":10}, "dia": {"nivel":"14-16", "porcentaje":15}, "noche": {"nivel":14, "porcentaje":10}}
        },
        {
          "numero": 234,
          "nivel": 15,
          "porcentaje": 30
        },
        {
          "numero": 17,
          "probabilidad":{"tipo":"hora", "dia": {"nivel": 15, "porcentaje":5 }}
        },
        {
          "numero": 163,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":"13-15", "porcentaje":60}}
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ]
    },
    {
      "nombre": "Ciudad Iris",
      "lema": "Una ciudad donde conviven el pasado y el presente.",
      "surf":[
        {
          "numero": 60,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super":{"nivel": 40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super":{"nivel":40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Torre quemada",
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
              "numero": 20,
              "nivel": 15,
              "porcentaje": 5
            },
            {
              "numero": 41,
              "nivel": 14,
              "porcentaje": 10
            },
            {
              "numero": 109,
              "nivel": "14-16",
              "porcentaje": 35
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando": [
            {
              "numero": 19,
              "probabilidad":{"tipo":"hora", "maniana": {"nivel": "14-16" , "porcentaje": 40 }, "dia": {"nivel": 14, "porcentaje":35 }, "noche": {"nivel":"14-16" , "porcentaje":40 }}
            },
            {
              "numero": 41,
              "nivel":15,
              "porcentaje":5
            },
            {
              "numero": 109,
              "nivel": "14-16",
              "porcentaje":50
            },
            {
              "numero": 126,
              "probabilidad":{"tipo":"hora", "maniana": {"nivel":14 , "porcentaje":5 }, "dia": {"nivel":16, "porcentaje": 10}, "noche": {"nivel": 14, "porcentaje":5 }}
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 38",
      "hierba": [
        {
          "numero": 83,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 10}, "dia": {"nivel": 16, "porcentaje":10 }}
        },
        {
          "numero": 128,
          "nivel": 13,
          "porcentaje":4
        },
        {
          "numero": 209,
          "nivel": 13,
          "porcentaje":1
        },
        {
          "numero": 52,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 30}, "dia": {"nivel": 16, "porcentaje": 30}, "noche": {"nivel": 16, "porcentaje":40 }}
        },
        {
          "numero": 20,
          "nivel": 16,
          "porcentaje":30
        },
        {
          "numero": 81,
          "nivel": 16,
          "porcentaje":20
        },
        {
          "numero": 241,
          "nivel": 13,
          "porcentaje": 5
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ],
      "masiva": [
        {

          "numero": 209,
          "nivel": 16,
          "porcentaje":30
        },
        {

          "numero": 20,
          "nivel": 16,
          "porcentaje":30
        },
        {

          "numero": 81,
          "nivel": 16,
          "porcentaje":20
        },
        {

          "numero": 83,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 16, "porcentaje":10 }, "dia": {"nivel": 16, "porcentaje": 10}}
        },
        {

          "numero": 241,
          "nivel": 13,
          "porcentaje":5
        },
        {

          "numero": 128,
          "nivel": 13,
          "porcentaje":5
        },
        {

          "numero": 19,
          "probabilidad":{"tipo":"hora", "noche": {"nivel": 16, "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 39",
      "hierba": [
        {
          "numero": 20,
          "nivel": 17,
          "porcentaje":30
        },
        {
          "numero": 83,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 16, "porcentaje":10 }, "dia": {"nivel": 16, "porcentaje": 10}}
        },
        {
          "numero": 52,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 16, "porcentaje":30 }, "dia": {"nivel": 16, "porcentaje": 30}, "noche": {"nivel":16, "porcentaje": 40}}
        },
        {
          "numero": 81,
          "nivel": 16,
          "porcentaje":20
        },
        {
          "numero": 128,
          "nivel": 15,
          "porcentaje":5
        },
        {
          "numero": 241,
          "nivel": 15,
          "porcentaje":5
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ]
    },
    {
      "nombre":"Ciudad Olivo",
      "lema": "El puerto a tierras lejanas.",
      "plantas": [
        {
          "nombre": "Ciudad",
          "surf":[
            {
              "numero": 72,
              "nivel": "15-24",
              "porcentaje": 90
            },
            {
              "numero": 73,
              "nivel": "20-40",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}}
            },
            {
              "numero": 98,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 55}, "super":{"nivel":40,"porcentaje": 60}}
            },
            {
              "numero": 222,
              "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana": 10, "dia": 10}, "super":{"nivel":40, "maniana": 30, "dia": 30}}
            },
            {
              "numero": 99,
              "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
            },
            {
              "numero": 120,
              "probabilidad": {"tipo": "cania", "buena":{"nivel":20, "noche":10}, "super":{"nivel":40, "noche": 30}}
            }
          ],
          "intercambio":[
            {
              "numero": 100,
              "necesita": 98
            }
          ]
        },
        {
          "nombre": "Puerto",
          "surf": [
            {
              "numero": 72,
              "nivel": "15-24",
              "porcentaje": 90
            },
            {
              "numero": 73,
              "nivel": "20-40",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}}
            },
            {
              "numero": 72,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 35}}
            },
            {
              "numero": 170,
              "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "porcentaje":20}, "super":{"nivel":40, "porcentaje":40}}
            },
            {
              "numero": 90,
              "probabilidad": {"tipo": "cania", "buena":{"nivel":20, "porcentaje":10}, "super":{"nivel":40, "porcentaje":30}}
            },
            {
              "numero": 73,
              "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 20}}
            },
            {
              "numero": 171,
              "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 40",
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-40",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 98,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 55}, "super":{"nivel":40,"porcentaje": 60}}
        },
        {
          "numero": 222,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana": 10, "dia": 10, "noche": 0}, "super":{"nivel":40, "maniana": 30, "dia": 30, "noche": 0}}
        },
        {
          "numero": 99,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        },
        {
          "numero": 120,
          "probabilidad": {"tipo": "cania", "buena":{"nivel":20, "noche":10}, "super":{"nivel":40, "noche": 30}}
        }
      ],
      "roca":[
        {
    		  "numero": 98,
    		  "nivel": 15,
    		  "porcentaje": 90
    		},
        {
          "numero": 213,
          "nivel": 15,
          "porcentaje": 10
        }
      ]
    },
    {
      "nombre": "Ruta 41",
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 70
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 30
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 98,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 55}, "super":{"nivel":40,"porcentaje": 60}}
        },
        {
          "numero": 222,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana": 10, "dia": 10, "noche": 0}, "super":{"nivel":40, "maniana": 30, "dia": 30, "noche": 0}}
        },
        {
          "numero": 99,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        },
        {
          "numero": 120,
          "probabilidad": {"tipo": "cania", "buena":{"nivel":20, "noche":10}, "super":{"nivel":40, "noche": 30}}
        }
      ]
    },
    {
      "nombre": "Ciudad Orquídea",
      "lema": "Un puerto rodeado de agitadas aguas.",
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 98,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 55}, "super":{"nivel":40,"porcentaje": 60}}
        },
        {
          "numero": 222,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana": 10, "dia": 10, "noche": 0}, "super":{"nivel":40, "maniana": 30, "dia": 30, "noche": 0}}
        },
        {
          "numero": 99,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        },
        {
          "numero": 120,
          "probabilidad": {"tipo": "cania", "buena":{"nivel":20, "noche":10}, "super":{"nivel":40, "noche": 30}}
        }
      ],
      "roca":[
        {
          "numero": 98,
          "nivel": 15,
          "porcentaje": 90
        },
        {
          "numero": 213,
          "nivel": 15,
          "porcentaje": 10
        }
      ],
      "regalo":[
        {
          "numero": 213,
          "nivel": 15,
          "observaciones": "Te lo quedas si subes la amistad"
        }
      ]
    },
    {
      "nombre": "Ruta 42",
      "hierba":[
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": "14-16", "porcentaje":40}, "dia":{"nivel": "14-16", "porcentaje":40}}
        },
        {
          "numero": 180,
          "nivel": "15-17",
          "porcentaje": 10
        },
        {
          "numero": 179,
          "nivel": "13-15",
          "porcentaje": 50
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche":{"nivel": "14-16", "porcentaje":40}}
        }
      ],
      "surf":[
        {
          "numero": 118,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 119,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}, "super":{"nivel":40, "porcentaje": 20}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
        },
        {
          "numero": 119,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
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
              "numero": 19,
              "nivel": "14-16",
              "porcentaje": 14
            },
            {
              "numero": 183,
              "nivel": 15,
              "porcentaje": 1
            },
            {
              "numero": 66,
              "nivel": 14,
              "porcentaje": 20
            },
            {
              "numero": 74,
              "nivel": 14,
              "porcentaje": 5
            }
          ],
          "surf":[
            {
              "numero": 118,
              "nivel": "15-24",
              "porcentaje": 90
            },
            {
              "numero": 119,
              "nivel": "20-24",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}, "super":{"nivel":40, "porcentaje": 20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
            }
          ],
          "masiva": [
            {

              "numero": 183,
              "nivel": "13-15",
              "porcentaje": 40
            },
            {

              "numero": 41,
              "nivel": 15,
              "porcentaje": 30
            },
            {

              "numero": 66,
              "nivel": 14,
              "porcentaje": 20
            },
            {

              "numero": 19,
              "nivel": 16,
              "porcentaje": 5
            },
            {

              "numero": 74,
              "nivel": 14,
              "porcentaje": 5
            }
          ]
        },
        {
          "nombre": "Planta baja (interior)",
          "caminando": [
            {
              "numero": 41,
              "nivel": "13-15",
              "porcentaje": 50
            },
            {
              "numero": 19,
              "nivel": 14,
              "porcentaje": 10
            },
            {
              "numero": 66,
              "nivel": "13-15",
              "porcentaje": 35
            },
            {
              "numero": 74,
              "nivel": "13-15",
              "porcentaje": 50
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
              "numero": 19,
              "nivel": 16,
              "porcentaje": 20
            },
            {
              "numero": 20,
              "nivel": 16,
              "porcentaje": 5
            },
            {
              "numero": 66,
              "nivel": 16,
              "porcentaje": 10
            },
            {
              "numero": 74,
              "nivel": 16,
              "porcentaje": 5
            }
          ],
          "surf":[
            {
              "numero": 118,
              "nivel": "15-24",
              "porcentaje": 90
            },
            {
              "numero": 119,
              "nivel": "20-24",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}, "super":{"nivel":40, "porcentaje": 20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
            }
          ],
          "regalo": [
            {
              "numero": 236,
              "nivel": 10,
              "observaciones": "Después de ganar al Karateka Kiyo"
            }
          ],
          "masiva": [
            {

              "numero": 183,
              "nivel": "20-24",
              "porcentaje": 30,
              "observaciones": "Haciendo surf"
            },
            {

              "numero": 118,
              "nivel": "20-24",
              "porcentaje": 60,
              "observaciones": "Haciendo surf"
            },
            {

              "numero": 119,
              "nivel": "20-24",
              "porcentaje": 10,
              "observaciones": "Haciendo surf"
            }
          ]

        },
        {
          "nombre": "Primera planta",
          "caminando": [
            {
              "numero": 75,
              "nivel": 31,
              "porcentaje": 30
            },
            {
              "numero": 67,
              "nivel": 32,
              "porcentaje": 30
            },
            {
              "numero": 74,
              "nivel": 31,
              "porcentaje": 20
            },
            {
              "numero": 20,
              "nivel": 30,
              "porcentaje": 10
            },
            {
              "numero": 66,
              "nivel": 28,
              "porcentaje": 5
            },
            {
              "numero": 42,
              "nivel": 30,
              "porcentaje": 5
            }
          ],
          "surf":[
            {
              "numero": 118,
              "nivel": "20-29",
              "porcentaje": 90
            },
            {
              "numero": 119,
              "nivel": "25-29",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}, "super":{"nivel":40, "porcentaje": 20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
            }
          ],
          "masiva": [
            {

              "numero": 183,
              "nivel": "20-24",
              "porcentaje": 30,
              "observaciones": "Haciendo surf"
            },
            {

              "numero": 118,
              "nivel": "20-24",
              "porcentaje": 60,
              "observaciones": "Haciendo surf"
            },
            {

              "numero": 119,
              "nivel": "20-24",
              "porcentaje": 10,
              "observaciones": "Haciendo surf"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Pueblo Caoba",
      "lema":"Bienvenido al hogar de los Ninja.",
      "plantas": [
        {
          "nombre": "Escondite del Team Rocket",
          "caminando": [
            {
              "numero": 109,
              "nivel":  21,
              "observaciones": "Trampas sótano 1"
            },
            {
              "numero": 100,
              "nivel":  23,
              "observaciones": "Trampas sótano 1"
            },
            {
              "numero": 74,
              "nivel":  21,
              "observaciones": "Trampas sótano 1"
            },
            {
              "numero": 101,
              "nivel":  23,
              "observaciones": "Máquina de señal maligna"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 43",
      "hierba": [
        {
    		  "numero": 180,
    		  "nivel": 15,
    		  "probabilidad": {"tipo": "hora", "maniana":{"nivel": 15, "porcentaje": 30}, "dia":{"nivel": 15, "porcentaje": 40}, "noche":{"nivel": 15, "porcentaje": 30}}
    		},
        {
          "numero": 203,
          "nivel": 15,
          "porcentaje":30
        },
        {
          "numero": 17,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel": 17, "porcentaje": 25}, "dia":{"nivel": 17, "porcentaje": 20}}
        },
        {
          "numero": 179,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel": 15, "porcentaje": 10}, "dia":{"nivel": 15, "porcentaje": 10}, "noche":{"nivel": 15, "porcentaje": 5}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel": 16, "porcentaje": 5}, "noche":{"nivel": 16, "porcentaje": 15}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo": "hora", "noche":{"nivel": 17, "porcentaje": 20}}
        }
      ],
      "surf":[
        {
          "numero": 129,
          "nivel": "10-24",
          "porcentaje": 100
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}, "super":{"nivel":40, "porcentaje": 20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ]
    },
    {
      "nombre": "Lago de la Furia",
      "surf":[
        {
          "numero": 129,
          "nivel": "10-19",
          "porcentaje": 90
        },
        {
          "numero": 130,
          "nivel": "15-19",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":100}, "buena":{"nivel":20, "porcentaje": 90}, "super":{"nivel":40, "porcentaje": 70}}
        },
        {
          "numero": 130,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 10}, "super":{"nivel":40,"porcentaje": 30}}
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ]
    },
    {
      "nombre":"Ruta 44",
      "hierba": [
        {
          "numero": 70,
          "nivel": "22-24",
          "porcentaje": 35
        },
        {
          "numero": 108,
          "nivel": "24-26",
          "porcentaje": 15
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
      ],
      "surf":[
        {
          "numero": 60,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}, "super":{"nivel":40, "porcentaje": 20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
        },
        {
          "numero": 223,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ],
      "masiva":[
        {

          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}}
        },
        {

          "numero": 223,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje":65}, "super": {"nivel": 40, "porcentaje":100}}
        }
      ]
    },
    {
      "nombre": "Ruta Helada",
      "plantas":[
        {
          "nombre": "Planta baja",
          "caminando": [
            {
              "numero": 220,
              "nivel": "21-23",
              "porcentaje": 40
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":22, "porcentaje":5}, "noche":{"nivel":22, "porcentaje":5}}
            },
            {
              "numero": 42,
              "nivel": 22,
              "porcentaje": 30
            },
            {
              "numero": 124,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 5}, "dia":{"nivel":"20-22", "porcentaje":10}, "noche":{"nivel":22, "porcentaje":5}}
            },
            {
              "numero": 225,
              "nivel": 22,
              "porcentaje": 20
            }
          ]
        },
        {
          "nombre": "Sótano 1",
          "caminando": [
            {
              "numero": 220,
              "nivel": "21-23",
              "porcentaje": 40
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje":5}, "noche":{"nivel":23, "porcentaje":5}}
            },
            {
              "numero": 42,
              "nivel": 22,
              "porcentaje": 30
            },
            {
              "numero": 124,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 5}, "dia":{"nivel":"20-22", "porcentaje":10}, "noche":{"nivel":22, "porcentaje":5}}
            },
            {
              "numero": 225,
              "nivel": 22,
              "porcentaje": 20
            }
          ]
        },
        {
          "nombre": "Sótano 2",
          "caminando": [
            {
              "numero": 220,
              "nivel": "22-24",
              "porcentaje": 40
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":23, "porcentaje":5}, "noche":{"nivel":23, "porcentaje":5}}
            },
            {
              "numero": 42,
              "nivel": 23,
              "porcentaje": 30
            },
            {
              "numero": 124,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 5}, "dia":{"nivel":"21-23", "porcentaje":10}, "noche":{"nivel":23, "porcentaje":5}}
            },
            {
              "numero": 225,
              "nivel": 23,
              "porcentaje": 20
            }
          ]
        },
        {
          "nombre": "Sótano 3",
          "caminando": [
            {
              "numero": 220,
              "nivel": "23-25",
              "porcentaje": 40
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 25}, "noche":{"nivel":24, "porcentaje":25}}
            },
            {
              "numero": 42,
              "nivel": 24,
              "porcentaje": 30
            },
            {
              "numero": 124,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 5}, "dia":{"nivel":"22-24", "porcentaje":10}, "noche":{"nivel":24, "porcentaje":5}}
            },
            {
              "numero": 225,
              "nivel": 24,
              "porcentaje": 20
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ciudad Endrino",
      "lema": "Un tranquilo refugio de montaña.",
      "surf":[
        {
          "numero": 129,
          "nivel": "5-19",
          "porcentaje": 100
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}, "super":{"nivel":40, "porcentaje": 20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ],
      "intercambio":[
        {
          "numero": 112,
          "necesita": 148,
          "observaciones": "Hembra"
        }
      ]
    },
    {
      "nombre": "Guarida Dragón",
      "surf":[
        {
          "numero": 129,
          "nivel": "10-19",
          "porcentaje": 90
        },
        {
          "numero": 147,
          "nivel": "10-14",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":100}, "buena":{"nivel":20, "porcentaje": 90}, "super":{"nivel":40, "porcentaje": 60}}
        },
        {
          "numero": 147,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 10}, "super":{"nivel":40,"porcentaje": 30}}
        },
        {
          "numero": 148,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 45",
      "hierba": [
        {
          "numero": 75,
          "nivel": "23-25",
          "porcentaje": 55
        },
        {
          "numero": 231,
          "nivel": 20,
          "porcentaje": 10
        },
        {
          "numero": 227,
          "nivel": 27,
          "porcentaje": 5
        },
        {
          "numero": 74,
          "nivel": 23,
          "porcentaje": 30
        }
      ],
      "surf":[
        {
          "numero": 129,
          "nivel": "15-24",
          "porcentaje": 100
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":100}, "buena":{"nivel":20, "porcentaje": 90}, "super":{"nivel":40, "porcentaje": 60}}
        },
        {
          "numero": 147,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 10}, "super":{"nivel":40,"porcentaje": 30}}
        },
        {
          "numero": 148,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 10}}
        }
      ],
      "cabeza":[
      {
        "numero": 21,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":80},"especial":{"porcentaje":50}}
      },
      {
        "numero": 190,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","normal":{"porcentaje":20},"especial":{"porcentaje":20}}
      },
      {
        "numero": 214,
        "nivel": 10,
        "probabilidad": {"tipo": "arbol","especial":{"porcentaje":30}}
      }
    ]
    },
    {
      "nombre": "Torre Hojalata",
      "caminando":[
        {
          "numero": 19,
          "nivel": "20-24",
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 100}, "dia":{"porcentaje": 100}, "noche":{"porcentaje": 20}}
        },
        {
          "numero": 92,
          "probabilidad": {"tipo":"hora", "noche":{"nivel": "22-24", "porcentaje": 20}}
        },
        {
          "numero": 250,
          "nivel": 70
        }
      ]
    },
    {
      "nombre": "Johto",
      "errante":[
        {
          "numero": 243,
          "nivel": 40
        },
        {
          "numero": 244,
          "nivel": 40
        },
        {
          "numero": 245,
          "nivel": 40
        }
      ]
    },
    {
      "nombre": "Ruta 27",
      "hierba": [
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "dia":{"nivel": 30, "porcentaje": 10}, "noche":{"nivel": 30, "porcentaje": 10}}
        },
        {
          "numero": 24,
          "nivel": 28,
          "porcentaje":30
        },
        {
          "numero": 77,
          "nivel":  32,
          "porcentaje": 5
        },
        {
          "numero": 84,
          "nivel": "28-30",
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje":50}, "dia":{"porcentaje":50}}
        },
        {
          "numero": 85,
          "nivel": 30,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia":{"porcentaje": 5}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 10}, "noche":{"nivel": "28-32", "porcentaje": 55}}
        }
      ],
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 35}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 20}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 10},"super":{"nivel":40,"porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 20}, "super":{"nivel":40,"porcentaje": 40}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 10}}
        }
      ],
      "cabeza":[
          {
            "numero": 13,
            "nivel": 10,
            "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
          },
          {
            "numero": 14,
            "nivel": 10,
            "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
          },
          {
            "numero": 15,
            "nivel": 10,
            "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
          },
          {
            "numero": 102,
            "nivel": 10,
            "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
          },
          {
            "numero": 204,
            "nivel": 10,
            "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
          }
        ]
    },
    {
      "nombre": "Cataratas Tohjo",
      "caminando": [
        {
          "numero": 41,
          "nivel":  22,
          "porcentaje": 30
        },
        {
          "numero": 20,
          "nivel":  22,
          "porcentaje": 30
        },
        {
          "numero": 42,
          "nivel":  24,
          "porcentaje": 20
        },
        {
          "numero": 79,
          "nivel":  "21-23",
          "porcentaje": 15
        },
        {
          "numero": 19,
          "nivel":  20,
          "porcentaje": 5
        }
      ],
      "surf":[
        {
          "numero": 118,
          "nivel":  "20-24",
          "porcentaje": 60
        },
        {
          "numero": 79,
          "nivel":  "20-24",
          "porcentaje": 30
        },
        {
          "numero": 119,
          "nivel":  "20-24",
          "porcentaje": 10
        }
      ]
    },
    {
      "nombre": "Ruta 26",
      "hierba": [
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":"28-30", "porcentaje":34}, "dia":{"nivel":"28-30", "porcentaje":35}, "noche":{"nivel":"28-30", "porcentaje":70}}
        },
        {
          "numero": 24,
          "nivel": 30,
          "porcentaje":5
        },
        {
          "numero": 77,
          "nivel":  32,
          "porcentaje": 20
        },
        {
          "numero": 84,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 40}, "dia":{"nivel":"28-30", "porcentaje": 40}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":30, "porcentaje": 1}, "noche":{"nivel":"30-32", "porcentaje":10}}
        }
      ],
      "surf":[
        {
          "numero": 72,
          "nivel":  "25-34",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel":  "30-34",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 35}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 20}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 10},"super":{"nivel":40,"porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 20}, "super":{"nivel":40,"porcentaje": 40}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 10}}
        }
      ],
      "cabeza":[
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}, "especial":{"porcentaje": 5}}
        },
        {
          "numero": 102,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}, "especial":{"porcentaje": 15}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ]
    },
    {
      "nombre": "Calle Victoria",
      "caminando": [
        {
          "numero": 75,
          "nivel": 32,
          "porcentaje": 30
        },
        {
          "numero": 42,
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
      ]
    },
    {
      "nombre": "Ciudad Carmín",
      "surf": [
        {
          "numero": 72,
          "nivel": "30-39",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "35-39",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10,"porcentaje": 15}, "buena":{"nivel":20,"porcentaje": 35}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10,"porcentaje": 85}, "buena":{"nivel":20,"porcentaje": 35}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 10}, "super":{"nivel":40,"porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20,"porcentaje": 20}, "super":{"nivel":40,"porcentaje": 40}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 20}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40,"porcentaje": 10}}
        }
      ],
      "especial":[
        {
          "numero": 143,
          "nivel": 50
        }
      ]
    },
    {
      "nombre": "Ruta 6",
      "hierba":[
        {
          "numero": 16,
          "nivel": 13,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 30}, "dia": {"porcentaje": 30}}
        },
        {
          "numero": 69,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje":30 }, "dia": {"nivel": 13, "porcentaje": 30}, "noche": {"nivel": 13, "porcentaje": 20}}
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
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 52,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 20}, "dia": {"nivel": 14, "porcentaje": 20}, "noche": {"nivel": 14, "porcentaje": 30}}
        }
      ],
      "surf":[
        {
        	"numero": 54,
        	"nivel": "5-14",
        	"porcentaje": 90
        },
        {
        	"numero": 55,
        	"nivel": "10-14",
        	"porcentaje": 10
        }
      ],
      "pesca":[
        {
        	"numero": 129,
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10,"porcentaje": 85}, "buena":{"nivel": 20,"porcentaje": 35}, "super":{"nivel": 40, "porcentaje": 20}}
        },
        {
        	"numero": 60,
        	"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10,"porcentaje": 15}, "buena":{"nivel": 20,"porcentaje": 65}, "super":{"nivel": 40,"porcentaje": 70}}
        },
        {
        	"numero": 61,
        	"probabilidad": {"tipo":"cania", "super":{"nivel": 40,"porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 7",
      "hierba": [
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 30}, "dia": {"nivel": 17, "porcentaje": 30}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}}
        },
        {
          "numero": 52,
          "nivel": 17,
          "porcentaje": 30
        },
        {
          "numero": 20,
          "nivel": 19,
          "porcentaje": 10
        },
        {
          "numero": 37,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 20}, "dia": {"nivel": 18, "porcentaje": 25}, "noche": {"nivel": 18, "porcentaje": 20}}
        },
        {
          "numero": 53,
          "nivel": 19,
          "porcentaje": 5
        },
        {
          "numero": 198,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 30}}
        },
        {
          "numero": 228,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ciudad Azulona",
      "surf": [
        {
        	"numero": 88,
        	"nivel": "15-24",
        	"porcentaje": 90
        },
        {
        	"numero": 89,
        	"nivel": "15-19",
        	"porcentaje": 10
        }
      ],
      "casino": [
        {
        	"numero": 122,
        	"nivel": 15,
        	"fichas": 3333
        },
        {
        	"numero": 133,
        	"nivel": 15,
        	"fichas": 6666
        },
        {
        	"numero": 137,
        	"nivel": 20,
        	"fichas": 9999
        }
      ]
    },
    {
      "nombre": "Ruta 16",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 40}, "dia": {"nivel": "27-29", "porcentaje": 40}}
        },
        {
          "numero": 88,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-28", "porcentaje": 50}, "dia": {"nivel": "26-28", "porcentaje": 50}, "noche": {"nivel": "26-28", "porcentaje": 80}}
        },
        {
          "numero": 89,
          "nivel": 30,
          "porcentaje": 5
        },
        {
          "numero": 218,
          "nivel": 27,
          "porcentaje": 5
        },
        {
          "numero": 198,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "28-29", "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 17",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 40}, "dia": {"nivel": "28-30", "porcentaje": 40}}
        },
        {
          "numero": 88,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 50}, "dia": {"nivel": "29", "porcentaje": 20}, "noche": {"nivel": "27-29", "porcentaje": 80}}
        },
        {
          "numero": 89,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 32, "porcentaje": 5}, "dia": {"nivel": "30-32", "porcentaje": 5}, "noche": {"nivel": "30-32", "porcentaje": 15}}
        },
        {
          "numero": 218,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 29, "porcentaje": 5}, "dia": {"nivel": "25-27", "porcentaje": 35}, "noche": {"nivel": 29, "porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 18",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 40}, "dia": {"nivel": "27-29", "porcentaje": 40}}
        },
        {
          "numero": 88,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-28", "porcentaje": 50}, "dia": {"nivel": "26-28", "porcentaje": 50}, "noche": {"nivel": "26-28", "porcentaje": 80}}
        },
        {
          "numero": 89,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 30, "porcentaje": 5}, "dia": {"nivel": 30, "porcentaje": 5}, "noche": {"nivel": "28-30", "porcentaje": 15}}
        },
        {
          "numero": 218,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 27, "porcentaje": 5}, "dia": {"nivel": 27, "porcentaje": 5}, "noche": {"nivel": 27, "porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 8",
      "hierba": [
        {
        	"numero": 17,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "17-19", "porcentaje": 35}, "dia": {"nivel": "17-19", "porcentaje": 35}}
        },
        {
        	"numero": 52,
          "nivel": 17,
        	"porcentaje": 30
        },
        {
          "numero": 37,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 10}, "dia": {"nivel": 18, "porcentaje": 10}, "noche": {"nivel": 18, "porcentaje": 5}}
        },
        {
        	"numero": 63,
          "nivel": 15,
          "porcentaje": 20
        },
        {
          "numero": 64,
          "nivel": 15,
          "porcentaje": 5
        },
        {
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 19, "porcentaje": 10}}
        },
        {
        	"numero": 93,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 20, "porcentaje": 30}}
        }
      ]
    },
    {
      "nombre": "Ruta 13",
      "hierba": [
        {
          "numero": 17,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 20}, "dia": {"nivel": 25, "porcentaje": 20}}
        },
        {
          "numero": 30,
          "nivel": 23,
          "porcentaje": 30
        },
        {
          "numero": 33,
          "nivel": 23,
          "porcentaje": 30
        },
        {
          "numero": 113,
          "nivel": 25,
          "porcentaje": 1
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 15}, "dia": {"nivel": "22-24", "porcentaje": 19}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 4}, "noche": {"nivel": "22-24", "porcentaje": 19}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
        }
      ],
      "surf": [
        {
          "numero": 72,
          "nivel": "25-29",
          "porcentaje": 60
        },
        {
          "numero": 73,
          "nivel": "25-29",
          "porcentaje": 10
        },
        {
          "numero": 195,
          "nivel": "25-29",
          "porcentaje": 30
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 85}, "buena": {"nivel": 20, "porcentaje": 35}, "super": {"nivel": 40, "porcentaje": 20}}
        },
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 15}, "buena": {"nivel": 20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje": 70}}
        },
        {
          "numero": 211,
          "probabilidad": {"tipo":"cania", "super": {"nivel": 40, "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 14",
      "hierba": [
        {
          "numero": 17,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 20}, "dia": {"nivel": 25, "porcentaje": 20}}
        },
        {
          "numero": 30,
          "nivel": 23,
          "porcentaje": 30
        },
        {
          "numero": 33,
          "nivel": 23,
          "porcentaje": 30
        },
        {
          "numero": 113,
          "nivel": 25,
          "porcentaje": 1
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 10}, "dia": {"nivel": 24, "porcentaje": 10}}
        },
        {
          "numero": 188,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 26, "porcentaje": 5}, "dia": {"nivel": 26, "porcentaje": 9}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 4}, "noche": {"nivel": "22-24", "porcentaje": 19}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
        }
      ],
      "intercambio": [
        {
          "numero": 142,
          "necesita": 113
        }
      ]
    },
    {
      "nombre": "Ruta 15",
      "hierba": [
        {
          "numero": 17,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 20}, "dia": {"nivel": 25, "porcentaje": 20}}
        },
        {
          "numero": 30,
          "nivel": 23,
          "porcentaje": 30
        },
        {
          "numero": 33,
          "nivel": 23,
          "porcentaje": 30
        },
        {
          "numero": 113,
          "nivel": 25,
          "porcentaje": 1
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 15}, "dia": {"nivel": "22-24", "porcentaje": 19}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 4}, "noche": {"nivel": "22-24", "porcentaje": 19}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
        }
      ]
    },
    {
      "nombre": "Ciudad Fucsia",
      "surf": [
        {
          "numero": 129,
          "nivel": "10-24",
          "porcentaje": 100
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 100}, "buena":{"nivel": 20, "porcentaje": 90}, "super":{"nivel": 40, "porcentaje": 70}}
        },
        {
          "numero": 130,
          "probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 10}, "super":{"nivel": 40, "porcentaje": 30}}
        },
      ]
    },
    {
      "nombre": "Ruta 10",
      "hierba": [
        {
          "numero": 21,
          "nivel": 16,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 30}, "dia": {"porcentaje": 30}}
        },
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 20}, "dia": {"nivel": 17, "porcentaje": 20}, "noche": {"nivel": "16-18", "porcentaje": 25}}
        },
        {
          "numero": 22,
          "nivel": 18,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 5}, "noche": {"nivel": "16-17", "porcentaje": 40}}
        },
        {
          "numero": 125,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": "15-17", "porcentaje": 10}, "noche": {"nivel": 15, "porcentaje": 5}}
        },
        {
          "numero": 100,
          "nivel": 17,
          "porcentaje": 30
        }
      ],
      "surf": [
        {
          "numero": 118,
          "nivel": "10-19",
          "porcentaje": 90
        },
        {
          "numero": 119,
          "nivel": "15-19",
          "porcentaje": 10
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 85}, "buena": {"nivel": 20, "porcentaje": 35}, "super": {"nivel": 40, "porcentaje": 20}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 15}, "buena": {"nivel": 20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje": 70}}
        },
        {
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super": {"nivel": 40, "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Túnel Roca",
      "plantas": [
        {
          "nombre": "Planta baja",
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
              "numero": 41,
              "nivel": 8,
              "porcentaje": 10
            },
            {
              "numero": 67,
              "nivel": 14,
              "porcentaje": 5
            },
            {
              "numero": 66,
              "nivel": 12,
              "porcentaje": 20
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando": [
            {
              "numero": 74,
              "nivel": 12,
              "porcentaje": 30
            },
            {
              "numero": 41,
              "nivel": 10,
              "porcentaje": 10
            },
            {
              "numero": 105,
              "nivel": 14,
              "porcentaje": 5
            },
            {
              "numero": 115,
              "nivel": 14,
              "porcentaje": 5
            },
            {
              "numero": 104,
              "nivel": 12,
              "porcentaje": 30
            },
            {
              "numero": 95,
              "nivel": 16,
              "porcentaje": 20
            }
          ]
        }
      ]
    },
    {
      "nombre": "Ruta 9",
      "hierba": [
        {
          "numero": 19,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}, "noche": {"nivel": "13-15", "porcentaje": 70}}
        },
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-15", "porcentaje": 50}, "dia": {"nivel": "13-15", "porcentaje": 50}}
        },
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 15}, "dia": {"nivel": 15, "porcentaje": 15}, "noche": {"nivel": 15, "porcentaje": 30}}
        },
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}}
        }
      ],
      "surf": [
        {
          "numero": 118,
          "nivel": "10-19",
          "porcentaje": 90
        },
        {
          "numero": 119,
          "nivel": "15-19",
          "porcentaje": 10
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 85}, "buena": {"nivel": 20, "porcentaje": 35}, "super": {"nivel": 40, "porcentaje": 20}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 15}, "buena": {"nivel": 20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje": 70}}
        },
        {
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super": {"nivel": 40, "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ciudad Celeste",
      "surf": [
        {
          "numero": 118,
          "nivel": "5-14",
          "porcentaje": 90
        },
        {
          "numero": 119,
          "nivel": "10-14",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 98,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 55}, "super":{"nivel":40,"porcentaje": 60}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 222,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana": 10, "dia": 10}, "super":{"nivel":40, "maniana": 30, "dia": 30}}
        },
        {
          "numero": 99,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        },
        {
          "numero": 120,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "noche": 10}, "super":{"nivel":40, "noche": 30}}
        }
      ]
    },
    {
      "nombre": "Ruta 24",
      "hierba": [
        {
          "numero": 69,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "8-10", "porcentaje": 60}, "dia": {"nivel": "8-10", "porcentaje": 35}, "noche": {"nivel": 10, "porcentaje": 5}}
        },
        {
          "numero": 63,
          "nivel": 9,
          "porcentaje": 20
        },
        {
          "numero": 70,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 15}, "dia": {"nivel": "12-14", "porcentaje": 15}, "noche": {"nivel": 13, "porcentaje": 10}}
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
          "numero": 49,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 5}}
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 30}}
        }
      ],
      "surf": [
        {
          "numero": 118,
          "nivel": "5-14",
          "porcentaje": 90
        },
        {
          "numero": 119,
          "nivel": "10-14",
          "porcentaje": 10
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 85}, "buena": {"nivel": 20, "porcentaje": 35}, "super": {"nivel": 40, "porcentaje": 20}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 15}, "buena": {"nivel": 20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje": 70}}
        },
        {
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super": {"nivel": 40, "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 25",
      "hierba": [
        {
          "numero": 69,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 30}, "dia": {"nivel": 10, "porcentaje": 30}, "noche": {"nivel": 10, "porcentaje": 5}}
        },
        {
          "numero": 63,
          "nivel": 9,
          "porcentaje": 10
        },
        {
          "numero": 70,
          "nivel": 14,
          "porcentaje": 5
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 8, "porcentaje": 20}, "noche": {"nivel": 8, "porcentaje": 30}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 8, "porcentaje": 30}, "dia": {"nivel": "8-10", "porcentaje": 50}}
        },
        {
          "numero": 17,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 5}, "dia": {"nivel": 12, "porcentaje": 5}}
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 30}}
        },
        {
          "numero": 49,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 20}}
        }
      ],
      "surf": [
        {
          "numero": 118,
          "nivel": "5-14",
          "porcentaje": 90
        },
        {
          "numero": 119,
          "nivel": "10-14",
          "porcentaje": 10
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 85}, "buena": {"nivel": 20, "porcentaje": 35}, "super": {"nivel": 40, "porcentaje": 20}}
        },
        {
          "numero": 118,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 15}, "buena": {"nivel": 20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje": 70}}
        },
        {
          "numero": 119,
          "probabilidad": {"tipo":"cania", "super": {"nivel": 40, "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 5",
      "hierba":[
        {
          "numero": 16,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "13-15", "porcentaje": 40}, "dia": {"nivel": "13-15", "porcentaje": 40}}
        },
        {
          "numero": 69,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}, "noche": {"nivel": 13, "porcentaje": 20}}
        },
        {
          "numero": 63,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 10}, "dia": {"nivel": "12-14", "porcentaje": 10}, "noche": {"nivel": "12-14", "porcentaje": 10}}
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 44,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 10}}
        },
        {
        	"numero": 52,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 20}, "dia": {"nivel": 14, "porcentaje": 20}, "noche": {"nivel": 14, "porcentaje": 30}}
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
        	"numero": 97,
        	"nivel": 16,
        	"porcentaje": 10
        },
        {
        	"numero": 81,
        	"nivel": 15,
        	"porcentaje": 20
        }
      ]
    },
    {
      "nombre": "Ruta 12",
      "surf": [
        {
          "numero": 72,
          "nivel": "25-29",
          "porcentaje": 60
        },
        {
          "numero": 73,
          "nivel": "25-29",
          "porcentaje": 10
        },
        {
          "numero": 195,
          "nivel": "25-29",
          "porcentaje": 30
        }
      ],
      "pesca": [
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 85}, "buena": {"nivel": 20, "porcentaje": 35}, "super": {"nivel": 40, "porcentaje": 20}}
        },
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja": {"nivel": 10, "porcentaje": 15}, "buena": {"nivel": 20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje": 70}}
        },
        {
          "numero": 211,
          "probabilidad": {"tipo":"cania", "super": {"nivel": 40, "porcentaje": 10}}
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
      ]
    },
    {
      "nombre": "Ruta 2",
      "hierba": [
        {
        	"numero": 13,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}, "dia": {"nivel": 3, "porcentaje": 30}}
        },
        {
        	"numero": 14,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 5, "porcentaje": 20}, "dia": {"nivel": 5, "porcentaje": 20}}
        },
        {
        	"numero": 15,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 10}}
        },
        {
        	"numero": 16,
        	"probabilidad": {"tipo":"hora", "dia": {"nivel": "3-7", "porcentaje": 40}}
        },
        {
        	"numero": 17,
        	"probabilidad": {"tipo":"hora", "dia": {"nivel": 7, "porcentaje": 5}}
        },
        {
        	"numero": 25,
        	"nivel": 4,
          "porcentaje": 5
        },
        {
        	"numero": 165,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}}
        },
        {
        	"numero": 166,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 5}}
        },
        {
        	"numero": 163,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": "3-5", "porcentaje": 80}}
        },
        {
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 7, "porcentaje": 15}}
        },
      ]
    },
    {
      "nombre": "Ciudad Plateada",
      "intercambio": [
        {
        	"numero": 78,
        	"necesita": 44
        }
      ]
    },
    {
      "nombre": "Ciudad Verde",
      "surf":[
        {
          "numero": 60,
          "nivel": "5-14",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "10-14",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Ruta 1",
      "hierba": [
        {
        	"numero": 16,
          "nivel": "2-4",
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 45}, "dia": {"porcentaje": 45}}
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
      ]
    },
    {
      "nombre": "Pueblo Paleta",
      "surf":[
        {
          "numero": 72,
          "nivel": "30-39",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "35-39",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":10}, "super":{"nivel":40, "porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":20}, "super":{"nivel":40, "porcentaje":40}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Ruta 21",
      "hierba": [
        {
          "numero": 114,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "20-35", "porcentaje": 95}, "dia": {"nivel": "20-35", "porcentaje": 90}, "noche": {"nivel": "20-35", "porcentaje": 95}}
        },
        {
          "numero": 122,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 5}, "dia": {"nivel": "28-30", "porcentaje": 10}, "noche": {"nivel": 28, "porcentaje": 5}}
        }
      ],
      "surf":[
        {
          "numero": 72,
          "nivel": "30-39",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "35-39",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":10}, "super":{"nivel":40, "porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":20}, "super":{"nivel":40, "porcentaje":40}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Isla Canela",
      "surf":[
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":10}, "super":{"nivel":40, "porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":20}, "super":{"nivel":40, "porcentaje":40}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Ruta 20",
      "surf": [
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 72,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje":35}}
        },
        {
          "numero": 90,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":10}, "super":{"nivel":40, "porcentaje": 30}}
        },
        {
          "numero": 170,
          "probabilidad": {"tipo":"cania", "buena":{"nivel":20, "porcentaje":20}, "super":{"nivel":40, "porcentaje":40}}
        },
        {
          "numero": 73,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 171,
          "probabilidad": {"tipo":"cania", "super":{"nivel":40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Ruta 19",
      "surf": [
        {
          "numero": 72,
          "nivel": "15-24",
          "porcentaje": 90
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 98,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20,"porcentaje": 55}, "super":{"nivel":40,"porcentaje": 60}}
        },
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20, "porcentaje": 35}}
        },
        {
          "numero": 222,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "maniana": 10, "dia": 10}, "super":{"nivel":40, "maniana": 30, "dia": 30}}
        },
        {
          "numero": 99,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40, "porcentaje":10}}
        },
        {
          "numero": 120,
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20, "noche": 10}, "super":{"nivel":40, "noche": 30}}
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
        }
      ],
      "surf": [
        {
          "numero": 60,
          "nivel": "5-14",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "10-14",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo":"cania", "vieja":{"nivel":10, "porcentaje":85}, "buena":{"nivel":20,"porcentaje": 35}, "super":{"nivel":40,"porcentaje": 20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel":10, "porcentaje":15}, "buena":{"nivel":20, "porcentaje": 65}, "super":{"nivel":40,"porcentaje": 70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super":{"nivel":40,"porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 28",
      "hierba": [
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
        	"numero": 114,
        	"nivel": 39,
        	"porcentaje": 30
        },
        {
        	"numero": 77,
        	"nivel": 40,
        	"porcentaje": 30
        },
        {
        	"numero": 84,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 41, "porcentaje": 5}, "dia": {"nivel": 41, "porcentaje": 5}}
        },
        {
        	"numero": 85,
          "nivel": 43,
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia": {"porcentaje": 5}}
        },
        {
        	"numero": 215,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 40, "porcentaje": 10}}
        }
      ],
      "surf":[
        {
          "numero": 60,
          "nivel": "35-44",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "40-44",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Monte Plateado",
      "hierba": [
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
          "numero": 114,
          "nivel": 41,
          "porcentaje": 30
        },
        {
          "numero": 77,
          "nivel": 42,
          "porcentaje": 30
        },
        {
          "numero": 84,
          "nivel": 41,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia": {"porcentaje": 5}}
        },
        {
          "numero": 85,
          "nivel": 43,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia": {"porcentaje": 5}}
        },
        {
          "numero": 215,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "38-42", "porcentaje": 10}}
        }
      ],
      "surf":[
        {
          "numero": 60,
          "nivel": "35-44",
          "porcentaje": 90
        },
        {
          "numero": 61,
          "nivel": "35-39",
          "porcentaje": 10
        }
      ],
      "pesca":[
        {
          "numero": 129,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
        }
      ]
    },
    {
      "nombre": "Cueva Monte Plateado",
      "plantas": [
        {
          "nombre": "Primera planta, habitación 1",
          "caminando": [
            {
            	"numero": 232,
            	"nivel": 44,
            	"porcentaje": 30
            },
            {
            	"numero": 95,
            	"nivel": 42,
            	"porcentaje": 30
            },
            {
            	"numero": 75,
            	"nivel": 43,
            	"porcentaje": 30
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
          ]
        },
        {
          "nombre": "Primera y segunda planta",
          "caminando": [
            {
            	"numero": 232,
            	"nivel": 47,
            	"porcentaje": 20
            },
            {
            	"numero": 195,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 40}, "dia": {"nivel": 45, "porcentaje": 40}, "noche": {"nivel": 45, "porcentaje": 30}}
            },
            {
            	"numero": 55,
            	"nivel": 48,
            	"porcentaje": 30
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
          "surf":[
            {
              "numero": 119,
              "nivel": "35-44",
              "porcentaje": 90
            },
            {
              "numero": 118,
              "nivel": "35-39",
              "porcentaje": 10
            }
          ],
          "pesca":[
            {
              "numero": 129,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje":35}, "super": {"nivel":40, "porcentaje":20}}
            },
            {
              "numero": 118,
              "probabilidad": {"tipo": "cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel":20, "porcentaje": 65}, "super": {"nivel": 40, "porcentaje":70}}
            },
            {
              "numero": 119,
              "probabilidad": {"tipo": "cania", "super": {"nivel": 40, "porcentaje":10}}
            }
          ]
        },
        {
          "nombre": "Segunda planta, habitaciones 1 y 2",
          "caminando": [
            {
            	"numero": 232,
            	"nivel": 47,
            	"porcentaje": 20
            },
            {
            	"numero": 195,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 40}, "dia": {"nivel": 45, "porcentaje": 40}, "noche": {"nivel": 45, "porcentaje": 10}}
            },
            {
            	"numero": 55,
            	"nivel": 48,
            	"porcentaje": 30
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
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 30}}
            }
          ]
        },
        {
          "nombre": "Segunda planta, habitación 3",
          "caminando": [
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
              "numero": 42,
              "nivel": "48-51",
              "porcentaje": 50
            },
            {
              "numero": 246,
              "nivel": "15-20",
              "porcentaje": 5
            },
            {
              "numero": 95,
              "nivel": 48,
              "porcentaje": 30
            }
          ]
        }
      ]
    },
    {
      "nombre": "Islas Remolino",
      "plantas": [
        {
          "nombre": "Planta baja (noroeste, noreste y sureste)",
          "caminando": [
            {
            	"numero": 98,
            	"nivel": "22-24",
            	"porcentaje": 50
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
            },
            {
            	"numero": 41,
            	"nivel": 23,
            	"porcentaje": 30
            }
          ]
        },
        {
          "nombre": "Planta baja (suroeste)",
          "caminando": [
            {
            	"numero": 98,
            	"nivel": "22-24",
            	"porcentaje": 50
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
            },
            {
            	"numero": 41,
            	"nivel": 23,
            	"porcentaje": 30
            }
          ],
          "surf": [
            {
            	"numero": 72,
            	"nivel": "20-24",
            	"porcentaje": 60
            },
            {
            	"numero": 73,
            	"nivel": "20-24",
            	"porcentaje": 10
            },
            {
            	"numero": 116,
            	"nivel": "15-19",
            	"porcentaje": 30
            }
          ],
          "pesca": [
            {
            	"numero": 129,
            	"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje": 35}}
            },
            {
            	"numero": 98,
            	"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel": 20, "porcentaje": 55}, "super":{"nivel": 40, "porcentaje": 40}}
            },
            {
            	"numero": 116,
            	"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 10}, "super":{"nivel": 40, "porcentaje": 30}}
            },
            {
            	"numero": 99,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 20}}
            },
            {
            	"numero": 117,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 10}}
            }
          ]
        },
        {
          "nombre": "Sótano 1",
          "caminando": [
            {
            	"numero": 98,
            	"nivel": "23-25",
            	"porcentaje": 50
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
            },
            {
            	"numero": 41,
            	"nivel": 24,
            	"porcentaje": 30
            }
          ]
        },
        {
          "nombre": "Sótano 2 (acceso a la cascada)",
          "caminando": [
            {
            	"numero": 98,
            	"nivel": "23-25",
            	"porcentaje": 50
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
            },
            {
            	"numero": 41,
            	"nivel": 24,
            	"porcentaje": 30
            }
          ],
          "surf": [
            {
            	"numero": 73,
            	"nivel": "20-24",
            	"porcentaje": 10
            },
            {
            	"numero": 116,
            	"nivel": "15-24",
            	"porcentaje": 90
            }
          ],
          "pesca": [
            {
            	"numero": 129,
            	"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje": 35}}
            },
            {
            	"numero": 98,
            	"probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel": 20, "porcentaje": 55}, "super":{"nivel": 40, "porcentaje": 40}}
            },
            {
            	"numero": 116,
            	"probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 10}, "super":{"nivel": 40, "porcentaje": 30}}
            },
            {
            	"numero": 99,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 20}}
            },
            {
            	"numero": 117,
            	"probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 10}}
            }
          ]
        },
        {
          "nombre": "Sótano 2 (interior de la cascada)",
          "caminando": [
            {
              "numero": 98,
              "nivel": "24-26",
              "porcentaje": 50
            },
            {
              "numero": 86,
              "nivel": "24-26",
              "porcentaje": 15
            },
            {
              "numero": 42,
              "nivel": 25,
              "porcentaje": 5
            },
            {
              "numero": 41,
              "nivel": 25,
              "porcentaje": 30
            },
            {
              "numero": 249,
              "nivel": 40
            }
          ],
          "surf": [
            {
              "numero": 73,
              "nivel": "20-24",
              "porcentaje": 30
            },
            {
              "numero": 116,
              "nivel": "20-24",
              "porcentaje": 60
            },
            {
              "numero": 117,
              "nivel": "20-24",
              "porcentaje": 10
            }
          ],
          "pesca": [
            {
              "numero": 129,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 85}, "buena":{"nivel": 20, "porcentaje": 35}}
            },
            {
              "numero": 98,
              "probabilidad": {"tipo":"cania", "vieja":{"nivel": 10, "porcentaje": 15}, "buena":{"nivel": 20, "porcentaje": 55}, "super":{"nivel": 40, "porcentaje": 40}}
            },
            {
              "numero": 116,
              "probabilidad": {"tipo":"cania", "buena":{"nivel": 20, "porcentaje": 10}, "super":{"nivel": 40, "porcentaje": 30}}
            },
            {
              "numero": 99,
              "probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 20}}
            },
            {
              "numero": 117,
              "probabilidad": {"tipo":"cania", "super":{"nivel": 40, "porcentaje": 10}}
            }
          ]
        }
      ]
    },
    {
      "nombre": "Evolución",
      "otros": [
        {
        	"numero": 16
        },
        {
        	"numero": 23
        },
        {
        	"numero": 27
        },
        {
        	"numero": 29
        },
        {
        	"numero": 32
        },
        {
        	"numero": 37
        },
        {
        	"numero": 46
        },
        {
        	"numero": 63
        },
        {
        	"numero": 58
        },
        {
        	"numero": 66
        },
        {
        	"numero": 74
        },
        {
        	"numero": 81
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
        	"numero": 102
        },
        {
        	"numero": 109
        },
        {
        	"numero": 120
        },
        {
        	"numero": 147
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
        	"numero": 161
        },
        {
        	"numero": 165
        },
        {
        	"numero": 44
        },
        {
        	"numero": 41
        },
        {
        	"numero": 175
        },
        {
        	"numero": 177
        },
        {
        	"numero": 179
        },
        {
        	"numero": 69
        },
        {
        	"numero": 183
        },
        {
        	"numero": 60
        },
        {
        	"numero": 187
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
        	"numero": 204
        },
        {
        	"numero": 95
        },
        {
        	"numero": 123
        },
        {
        	"numero": 209
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
        	"numero": 238
        },
        {
        	"numero": 239
        },
        {
        	"numero": 240
        }
      ]
    },
    {
      "nombre": "Intercambiar de Oro",
      "otros":[
        {
          "numero":56
        },
        {
          "numero":58
        },
        {
          "numero":167
        },
        {
          "numero":207
        },
        {
          "numero":216
        },
        {
          "numero":226
        }
      ]
    },
    {
      "nombre": "Otros juegos",
      "otros":[
        {
          "numero":1
        },
        {
          "numero":4
        },
        {
          "numero":7
        },
        {
          "numero":138
        },
        {
          "numero":140
        },
        {
          "numero":144
        },
        {
          "numero":145
        },
        {
          "numero":146
        },
        {
          "numero":150
        },
        {
          "numero":151
        }
      ]
    },
    {
      "nombre": "Evento",
      "otros": [
        {
          "numero": 251,
          "nivel": 30,
          "observaciones": "GS Ball en altar de Encinar"
        }
      ]
    }
  ]
}
