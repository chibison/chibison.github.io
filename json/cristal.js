"Te lo quedas si subes la amistad"
const cristal={
  "nombre":"cristal",
	"titulo": "Cristal",
  "gen":2,
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
      "nombre": "Golpe cabeza",
      "imagen": "otros/MT.png",
      "filtro": "cabeza",
      "defecto": false
    },
    {
      "nombre": "Golpe roca",
      "imagen": "otros/MT.png",
      "filtro": "roca",
      "defecto": false
    }
  ],
  "lugares": [
    {
      "nombre": "Pueblo Primavera",
      "lema": "El pueblo donde soplan vientos de un nuevo amanecer.",
      "inicial":[
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
          "probabilidad": {"tipo": "hora", "maniana": {"nivel":"2-3", "porcentaje":50}, "dia":{"nivel":"2-3", "porcentaje":50}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":2, "porcentaje":5}, "dia":{"nivel":2, "porcentaje":5}, "noche":{"nivel":"2-3", "porcentaje":45}}
        },
        {
          "numero": 161,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"2-3", "porcentaje":40}, "dia":{"nivel":"2-3", "porcentaje":40}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"2-3", "porcentaje":55}}
        },
        {
          "numero": 187,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":3, "porcentaje":5}, "dia":{"nivel":3, "porcentaje":5}}
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
          "probabilidad": {"tipo": "hora", "maniana": {"nivel":"2-3", "porcentaje":50}, "dia":{"nivel":"2-3", "porcentaje":50}, "noche":{"nivel":"2-3", "porcentaje":50}}
        },
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 2, "porcentaje": 30}, "dia":{"nivel": 2, "porcentaje": 30}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":"2-3", "porcentaje": 15}, "dia":{"nivel":"2-3", "porcentaje": 20}, "noche":{"nivel": "2-3", "porcentaje": 50}}
        },
        {
          "numero": 231,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 2, "porcentaje": 5}}
        }
      ],
      "cabeza":[
        {
          "numero": 163,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50 }, "especial":{"porcentaje": 60}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 30}}
        },
        {
          "numero": 164,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 10}}
        },
        {
          "numero": 10,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 15}}
        },
        {
          "numero": 11,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 5}}
        },
        {
          "numero": 12,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}}
        },
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 15}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 5}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}}
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
          "numero": 10,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"3-4", "porcentaje":50}, "dia":{"nivel":"3-4", "porcentaje":50}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":10}, "dia":{"nivel":"3-4", "porcentaje":40}}
        },
        {
          "numero": 13,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":3, "porcentaje":5}, "dia":{"nivel":3, "porcentaje":5}}
        },
        {
          "numero": 165,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":3, "porcentaje":30}}
        },
        {
          "numero": 167,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":3, "porcentaje":30}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"3-4", "porcentaje":45}}
        },
        {
          "numero": 187,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":5}, "dia":{"nivel":4, "porcentaje":5}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":3, "porcentaje":5}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":4, "porcentaje":20}}
        }
      ],
      "cabeza":[
        {
          "numero": 163,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 165,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 167,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 204,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
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
          "numero": 10,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":30}, "dia":{"nivel":4, "porcentaje":30}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":5, "porcentaje":10}, "dia":{"nivel":"4-5", "porcentaje":40}}
        },
        {
          "numero": 13,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":5}, "dia":{"nivel":4, "porcentaje":5}}
        },
        {
          "numero": 69,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":5, "porcentaje":20}, "dia":{"nivel":5, "porcentaje":20}, "noche":{"nivel":5, "porcentaje":20}}
        },
        {
          "numero": 165,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":30}}
        },
        {
          "numero": 187,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":5, "porcentaje":5}, "dia":{"nivel":5, "porcentaje":5}}
        },
        {
          "numero": 19,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"4-5", "porcentaje":40}}
        },
        {
          "numero": 167,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":4, "porcentaje":30}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":5, "porcentaje":10}}
        },
        {
          "numero": 60,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":4, "porcentaje":30}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":4, "porcentaje":5}}
        },
        {
          "numero": 92,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":5, "porcentaje":5}}
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "2-4", "porcentaje": 34}, "dia": {"nivel": "2-4", "porcentaje": 39}, "noche": {"nivel": "2-4", "porcentaje": 39}}
            },
            {
              "numero": 216,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 2, "porcentaje": 5}}
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
              "probabilidad": {"tipo":"hora", "noche": {"nivel": "20-25", "porcentaje": 15}}
            },
            {
              "numero": 216,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 20, "porcentaje": 5}}
            },
            {
              "numero": 217,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 10}, "dia": {"nivel": "25-30", "porcentaje": 15}}
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
          "numero": 165,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":4, "porcentaje":30}}
        },
        {
          "numero": 69,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":5, "porcentaje":20}, "dia":{"nivel":5, "porcentaje":20}, "noche":{"nivel":5, "porcentaje":20}}
        },
        {
          "numero": 58,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":5, "porcentaje":10}, "dia":{"nivel":5, "porcentaje":10}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"4-6", "porcentaje":40}, "dia":{"nivel":"4-6", "porcentaje":70}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"4-5", "porcentaje":45}}
        },
        {
          "numero": 167,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":4, "porcentaje":30}}
        },
        {
          "numero": 92,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":5, "porcentaje":5}}
        },
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":"20-22" ,"porcentaje":10}, "dia": {"nivel":"20-22" ,"porcentaje":10}}
            },
            {
              "numero": 194,
              "probabilidad": {"tipo":"hora", "noche": {"nivel":22,"porcentaje":5}}
            },
            {
              "numero": 195,
              "probabilidad": {"tipo":"hora", "noche": {"nivel":22,"porcentaje":5}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":5 ,"porcentaje":30}, "dia": {"nivel":5 ,"porcentaje":30}, "noche": {"nivel":5 ,"porcentaje":30}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":7,"porcentaje":5}, "dia": {"nivel":7,"porcentaje":5}}
        },
        {
          "numero": 69,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":7 ,"porcentaje":20}, "dia": {"nivel":7 ,"porcentaje":20}, "noche": {"nivel":7 ,"porcentaje":20}}
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":"6-7" ,"porcentaje":15}, "dia": {"nivel":"6-7" ,"porcentaje":15}}
        },
        {
          "numero": 194,
          "probabilidad": {"tipo":"hora", "noche": {"nivel":4 ,"porcentaje":30}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel":6,"porcentaje":10}}
        },
        {
          "numero": 23,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":4 ,"porcentaje":30},"dia": {"nivel":4 ,"porcentaje":30}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel":7 ,"porcentaje":5}}
        },
        {
          "numero": 92,
          "probabilidad": {"tipo":"hora", "noche": {"nivel":7 ,"porcentaje":5}}
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
          "probabilidad": {"tipo": "arbol","normal":{"porcentaje":65},"especial":{"porcentaje":50}}
        },
        {
          "numero": 23,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol","normal":{"porcentaje":15}}
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":4, "porcentaje":10}, "dia":{"nivel":4, "porcentaje":10}, "noche":{"nivel":"4-6", "porcentaje":40}}
            },
            {
              "numero": 27,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":6, "porcentaje":30}, "dia":{"nivel":6, "porcentaje":30}}
            },
            {
              "numero": 194,
              "probabilidad": {"tipo":"hora", "noche":{"nivel":5, "porcentaje":20}}
            },
            {
              "numero": 74,
              "nivel": 6,
              "porcentaje":30
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "5-7", "porcentaje":25}, "dia":{"nivel": "5-7", "porcentaje":25}, "noche":{"nivel":7, "porcentaje":5}}
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
              "porcentaje": 10
            },
            {
              "numero": 74,
              "nivel": 8,
              "porcentaje":30
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "6-8", "porcentaje":50}, "dia":{"nivel": "6-8", "porcentaje":50}, "noche":{"nivel": 6, "porcentaje":30}}
            },
            {
              "numero": 95,
              "nivel": 8,
              "porcentaje":10
            },
            {
              "numero": 194,
              "probabilidad": {"tipo":"hora", "noche":{"nivel": 8, "porcentaje": 20}}
            },
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje":50}, "dia":{"nivel": 22, "porcentaje":50}, "noche":{"nivel": 22, "porcentaje":30}}
            },
            {
              "numero": 20,
              "nivel":21,
              "porcentaje":10
            },
            {
              "numero": 42,
              "nivel": 22,
              "porcentaje":30
            },
            {
              "numero": 74,
              "nivel": 20,
              "porcentaje": 5
            },
            {
              "numero": 95,
              "nivel": 23,
              "porcentaje": 5
            },
            {
              "numero": 195,
              "probabilidad": {"tipo":"hora", "noche":{"nivel": 22, "porcentaje":20}}
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
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":6, "porcentaje":30}, "dia":{"nivel":6, "porcentaje":30}, "noche":{"nivel":7, "porcentaje":40}}
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": "6-7" , "porcentaje":15}, "dia":{"nivel": "6-8", "porcentaje": 35}}
        },
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":6, "porcentaje":30 }, "dia":{"nivel":"6-7", "porcentaje":15}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel": 4, "porcentaje": 5}, "noche":{"nivel":"6-8", "porcentaje": 40}}
        },
        {
          "numero": 74,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":6, "porcentaje":20}, "dia":{"nivel":6, "porcentaje":20}, "noche":{"nivel":6, "porcentaje":20}}
        },
        {
          "numero": 23,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":7, "porcentaje":5}, "dia":{"nivel":7, "porcentaje":5}}
        }
      ],
      "cabeza":[
        {
          "numero": 163,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 165,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 167,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 204,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ]
    },
    {
      "nombre": "Pueblo Azalea",
      "lema": "Donde la gente y los Pokémon viven en feliz armonía.",
      "cabeza":[
        {
          "numero": 163,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 165,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 167,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
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
          "numero": 10,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":5, "porcentaje":30}, "dia":{"nivel":5, "porcentaje":30}}
        },
        {
          "numero": 13,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":5, "porcentaje":30}, "dia":{"nivel":5, "porcentaje":30}}
        },
        {
          "numero": 11,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":7, "porcentaje":20}, "dia":{"nivel":7, "porcentaje":20}}
        },
        {
          "numero": 14,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":7, "porcentaje":10}, "dia":{"nivel":7, "porcentaje":10}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":7, "porcentaje":5}, "dia":{"nivel":7, "porcentaje":5}}
        },
        {
          "numero": 46,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":6, "porcentaje":5}, "dia":{"nivel":6, "porcentaje":5}, "noche":{"nivel":6, "porcentaje":5}}
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":"5-7", "porcentaje":50}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":5, "porcentaje":30}}
        },
        {
          "numero": 54,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":7, "porcentaje":10}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":7, "porcentaje":5}}
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
          "numero": 163,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50 }, "especial":{"porcentaje": 60}}
        },
        {
          "numero": 204,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 30}}
        },
        {
          "numero": 164,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 10}}
        },
        {
          "numero": 10,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 15}}
        },
        {
          "numero": 11,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 5}}
        },
        {
          "numero": 12,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}}
        },
        {
          "numero": 13,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 15}}
        },
        {
          "numero": 14,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 5}}
        },
        {
          "numero": 15,
          "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 34",
      "hierba":[
        {
          "numero":209,
          "probabilidad":{"tipo":"hora", "maniana":{"nivel":10, "porcentaje":30}, "dia":{"nivel":10, "porcentaje":30}}
        },
        {
          "numero":19,
          "nivel":11,
          "porcentaje":30
        },
        {
          "numero":16,
          "probabilidad":{"tipo":"hora", "maniana":{"nivel":12, "porcentaje":20}, "dia":{"nivel":12, "porcentaje":20}}
        },
        {
          "numero":39,
          "nivel":12,
          "porcentaje":5
        },
        {
          "numero": 63,
          "nivel": 10,
          "porcentaje": 10
        },
        {
          "numero": 132,
          "nivel": 10,
          "porcentaje":5
        },
        {
          "numero":163,
          "probabilidad":{"tipo":"hora", "noche":{"nivel":12, "porcentaje":20}}
        },
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
          "probabilidad": {"tipo": "cania", "buena": {"nivel": 20,  "noche":10}, "super": {"nivel": 40,  "noche":30}}
        }
      ],
      "cabeza":[
        {
          "numero": 163,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 165,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 167,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 204,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ],
      "huevo":[
        {
          "numero": 173,
          "observaciones": "Aleatorio"
        },
        {
          "numero": 174,
          "observaciones": "Aleatorio"
        },
        {
          "numero": 172,
          "observaciones": "Aleatorio"
        },
        {
          "numero": 236,
          "observaciones": "Aleatorio"
        },
        {
          "numero": 238,
          "observaciones": "Aleatorio"
        },
        {
          "numero": 239,
          "observaciones": "Aleatorio"
        },
        {
          "numero": 240,
          "observaciones": "Aleatorio"
        }
      ]
    },
    {
      "nombre": "Ciudad Trigal",
      "lema": "La alegre ciudad de rico encanto.",
      "intercambio": [
        {
          "numero": 66,
          "necesita": 63
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
          "numero": 104,
          "nivel": 15,
          "fichas": 800
        },
        {
          "numero": 63,
          "nivel": 10,
          "fichas": 100
        },
        {
          "numero": 202,
          "nivel": 15,
          "fichas": 1500
        }
      ]
    },
    {
      "nombre": "Ruta 35",
      "hierba": [
        {
          "numero": 209,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":12 ,"porcentaje":30}, "dia":{"nivel":12 ,"porcentaje":30}}
        },
        {
          "numero": 58,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":13,"porcentaje":20}, "dia":{"nivel":13,"porcentaje":20}}
        },
        {
          "numero": 96,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":12,"porcentaje":30}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":14 ,"porcentaje":30}, "dia":{"nivel":14 ,"porcentaje":30}}
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
          "nivel": 10,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":14 ,"porcentaje":30}}
        },
        {
          "numero": 39,
          "nivel": 12,
          "porcentaje": 5
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
          "numero": 10,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":10, "porcentaje":5}, "dia": {"nivel":10, "porcentaje": 5}}
        },
        {
          "numero": 13,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":10, "porcentaje":5}, "dia": {"nivel":10, "porcentaje": 5}}
        },
        {
          "numero": 16,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":13, "porcentaje":10}, "dia": {"nivel": 13, "porcentaje": 10}}
        },
        {
          "numero": 165,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":14, "porcentaje":20}}
        },
        {
          "numero": 29,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":12, "porcentaje":30}, "dia": {"nivel":12, "porcentaje":30}}
        },
        {
          "numero": 32,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":13, "porcentaje":30}, "dia": {"nivel":12, "porcentaje":30}}
        },
        {
          "numero": 191,
          "probabilidad":{"tipo":"hora", "dia": {"nivel":14, "porcentaje":20}}
        },
        {
          "numero": 163,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":"13-15", "porcentaje":40}}
        },
        {
          "numero": 54,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":12, "porcentaje":30}}
        },
        {
          "numero": 167,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":14, "porcentaje":20}}
        },
        {
          "numero": 48,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":"10-12", "porcentaje":10}}
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
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":15, "porcentaje":20}, "dia": {"nivel": "13-15", "porcentaje":55}}
        },
        {
          "numero": 58,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":16, "porcentaje":40}, "dia": {"nivel":16, "porcentaje":40}}
        },
        {
          "numero": 165,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":13, "porcentaje":30}}
        },
        {
          "numero": 17,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":15, "porcentaje":5}, "dia": {"nivel":15, "porcentaje":5}}
        },
        {
          "numero": 166,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":15, "porcentaje":5}}
        },
        {
          "numero": 163,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":15, "porcentaje":20}}
        },
        {
          "numero": 164,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":15, "porcentaje":5}}
        },
        {
          "numero": 234,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":"14-16", "porcentaje":40}}
        },
        {
          "numero": 167,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":13, "porcentaje":30}}
        },
        {
          "numero": 168,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":15, "porcentaje":5}}
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
        		  "porcentaje": 55
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
              "porcentaje": 30
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando": [
            {
              "numero": 19,
              "nivel": 14,
              "porcentaje":30
            },
            {
              "numero": 41,
              "nivel":15,
              "porcentaje":10
            },
            {
              "numero": 109,
              "nivel":"12-16",
              "porcentaje":59
            },
            {
              "numero": 110,
              "nivel":16,
              "porcentaje":1
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
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 30}, "dia": {"nivel": 16, "porcentaje": 30}}
        },
        {
          "numero": 17,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 16, "porcentaje":10}, "dia": {"nivel": 16, "porcentaje":10}}
        },
        {
          "numero": 128,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 13, "porcentaje":5}, "dia": {"nivel":13, "porcentaje":5}}
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
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":13, "porcentaje":5}, "dia": {"nivel":13, "porcentaje":5}}
        },
        {
          "numero": 52,
          "probabilidad":{"tipo":"hora", "noche": {"nivel": 16, "porcentaje":40}}
        },
        {
          "numero":164,
          "probabilidad":{"tipo":"hora", "noche": {"nivel": 16, "porcentaje":10}}
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
      "nombre": "Ruta 39",
      "hierba": [
        {
          "numero": 19,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":16, "porcentaje": 30}, "dia": {"nivel": 16, "porcentaje": 30}}
        },
        {
          "numero": 20,
          "nivel": 16,
          "porcentaje":30
        },
        {
          "numero": 17,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":16, "porcentaje":10}, "dia": {"nivel":16, "porcentaje":10}}
        },

        {
          "numero": 128,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":15, "porcentaje":5}, "dia": {"nivel":15, "porcentaje":5}}
        },
        {
          "numero": 81,
          "nivel": 16,
          "porcentaje":20
        },
        {
          "numero": 241,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":15, "porcentaje":5}, "dia": {"nivel":15, "porcentaje":5}}
        },
        {
          "numero": 52,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":16, "porcentaje":40}}
        },
        {
          "numero":164,
          "probabilidad":{"tipo":"hora", "noche": {"nivel":16, "porcentaje":10}}
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
          "nivel": "20-24",
          "porcentaje": 60
        },
        {
          "numero": 73,
          "nivel": "20-24",
          "porcentaje": 30
        },
        {
          "numero": 226,
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
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":14, "porcentaje":30}, "dia":{"nivel":14, "porcentaje":30}}
        },
        {
    		  "numero": 23,
    		  "probabilidad": {"tipo":"hora", "maniana":{"nivel":13, "porcentaje":30}, "dia":{"nivel":13, "porcentaje":30}}
    		},
        {
          "numero": 19,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":15, "porcentaje":20}, "dia":{"nivel":15, "porcentaje":20}, "noche":{"nivel":13, "porcentaje":30}}
        },
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":16, "porcentaje":10}, "dia":{"nivel":16, "porcentaje":10}, "noche":{"nivel":15, "porcentaje":20}}
        },
        {
          "numero": 24,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":15, "porcentaje":5}, "dia":{"nivel":15, "porcentaje":5}}
        },
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana":{"nivel":16, "porcentaje":5}, "dia":{"nivel":16, "porcentaje":5}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":14, "porcentaje":30}}
        },
        {
          "numero": 42,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":16, "porcentaje":15}}
        },
        {
          "numero": 183,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":15, "porcentaje":5}}
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
          "numero": 163,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 165,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 167,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        },
        {
          "numero": 204,
		  "nivel": 10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
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
              "nivel": 13,
              "porcentaje": 30
            },
            {
              "numero": 19,
              "nivel": 14,
              "porcentaje": 30
            },
            {
            	"numero": 66,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 20}, "dia": {"nivel": 14, "porcentaje": 20}}
            },
            {
            	"numero": 74,
            	"nivel": 14,
            	"porcentaje": 5
            },
            {
            	"numero": 20,
            	"nivel": 16,
            	"porcentaje": 5
            },
            {
            	"numero": 42,
            	"nivel": 13,
            	"porcentaje": 10
            },
            {
            	"numero": 183,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 20}}
            }
          ],
          "surf":[
            {
              "numero": 118,
              "nivel": "15-19",
              "porcentaje": 60
            },
            {
              "numero": 183,
              "nivel": "20-24",
              "porcentaje": 30
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
          ]
        },
        {
          "nombre": "Planta baja (interior)",
          "caminando": [
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}, "noche": {"nivel": "14-15", "porcentaje": 10}}
            },
            {
              "numero": 19,
              "nivel": 14,
              "porcentaje": 30
            },
            {
            	"numero": 66,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": 15, "porcentaje": 20}}
            },
            {
            	"numero": 74,
            	"nivel": 13,
            	"porcentaje": 30
            },
            {
            	"numero": 20,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 10}, "dia": {"nivel": 14, "porcentaje": 10}, "noche": {"nivel": 15, "porcentaje": 20}}
            },
            {
            	"numero": 42,
            	"nivel": 15,
            	"porcentaje": 5
            },
            {
              "numero": 183,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 5}}
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 10}, "dia": {"nivel": 16, "porcentaje": 10}}
            },
            {
            	"numero": 74,
            	"nivel": 16,
            	"porcentaje": 5
            },
            {
            	"numero": 20,
            	"nivel": 18,
            	"porcentaje": 5
            },
            {
            	"numero": 42,
            	"nivel": 17,
            	"porcentaje": 20
            },
            {
              "numero": 183,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 16, "porcentaje": 10}}
            }
          ],
          "surf":[
            {
              "numero": 118,
              "nivel": "15-19",
              "porcentaje": 60
            },
            {
              "numero": 183,
              "nivel": "20-24",
              "porcentaje": 30
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 32, "porcentaje": 30}, "dia": {"nivel": 32, "porcentaje": 30}}
            },
            {
            	"numero": 74,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 31, "porcentaje": 20}, "dia": {"nivel": 31, "porcentaje": 20}, "noche": {"nivel": 31, "porcentaje": 30}}
            },
            {
            	"numero": 20,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 30, "porcentaje": 10}, "dia": {"nivel": 30, "porcentaje": 10}, "noche": {"nivel": 30, "porcentaje": 20}}
            },
            {
            	"numero": 66,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 5}, "dia": {"nivel": 28, "porcentaje": 5}}
            },
            {
            	"numero": 42,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 30, "porcentaje": 5}, "dia": {"nivel": 30, "porcentaje": 5}, "noche": {"nivel": "30-32", "porcentaje": 15}}
            },
            {
              "numero": 183,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 28, "porcentaje": 5}}
            }
          ],
          "surf":[
            {
              "numero": 118,
              "nivel": "20-24",
              "porcentaje": 60
            },
            {
              "numero": 119,
              "nivel": "25-29",
              "porcentaje": 10
            },
            {
            	"numero": 183,
            	"nivel": "25-29",
            	"porcentaje": 30
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
          ]
        }
      ],
      "masiva": [
        {

          "numero": 79,
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
    		  "numero": 161,
    		  "probabilidad": {"tipo": "hora", "maniana":{"nivel": 15, "porcentaje": 30}, "dia":{"nivel": 15, "porcentaje": 30}}
    		},
        {
          "numero": 83,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel": 16, "porcentaje": 20}, "dia":{"nivel": 16, "porcentaje": 20}}
        },
        {
          "numero": 17,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":16, "porcentaje":30}, "dia":{"nivel":16, "porcentaje":30}}
        },
        {
          "numero": 162,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"15-17", "porcentaje":15}, "dia":{"nivel":"15-17", "porcentaje":15}}
        },
        {
          "numero": 20,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel": 17, "porcentaje":5}, "dia":{"nivel":17, "porcentaje":5}, "noche":{"nivel":"16-17", "porcentaje":25}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"15-17", "porcentaje":40}}
        },
        {
          "numero": 49,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":17, "porcentaje":5}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":16, "porcentaje":30}}
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
          "numero": 163,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 48,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje":15}}
        },
        {
          "numero": 204,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
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
          "numero": 163,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 48,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje":15}}
        },
        {
          "numero": 214,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        }
      ]
    },
    {
      "nombre":"Ruta 44",
      "hierba": [
        {
          "numero": 70,
          "nivel": 24,
          "porcentaje":10
        },
        {
          "numero": 108,
          "probabilidad": {"tipo": "hora", "maniana":{"nivel":"22-26", "porcentaje":40}, "dia":{"nivel":"22-26", "porcentaje":40}}
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
          "numero": 60,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":22, "porcentaje":30}}
        },
        {
          "numero": 61,
          "probabilidad": {"tipo": "hora", "noche":{"nivel":"24-26", "porcentaje":10}}
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
          "numero": 163,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 102,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 23,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje":15}}
        },
        {
          "numero": 204,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
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
              "probabilidad":{"tipo":"hora", "maniana": {"nivel":"21-23", "porcentaje":40}, "dia":{"nivel":"21-23", "porcentaje":40}}
            },
            {
              "numero": 41,
              "nivel": 22,
              "porcentaje": 30
            },
            {
              "numero": 42,
              "nivel": "22-24",
              "porcentaje": 30
            },
            {
              "numero": 225,
              "probabilidad": {"tipo":"hora", "noche":{"nivel":"21-23", "porcentaje":40}}
            }
          ]
        },
        {
          "nombre": "Sótano 1",
          "caminando": [
            {
              "numero": 220,
              "probabilidad":{"tipo":"hora", "maniana": {"nivel":"21-23", "porcentaje":40}, "dia":{"nivel":"21-23", "porcentaje":40}}
            },
            {
              "numero": 41,
              "nivel": 22,
              "porcentaje": 30
            },
            {
              "numero": 42,
              "nivel": "22-24",
              "porcentaje": 29
            },
            {
              "numero": 124,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 22, "porcentaje": 1}, "dia":{"nivel":22, "porcentaje":1}}
            },
            {
              "numero": 215,
              "probabilidad": {"tipo":"hora", "noche":{"nivel": 22, "porcentaje": 1}}
            },
            {
              "numero": 225,
              "probabilidad": {"tipo":"hora", "noche":{"nivel": "21-24", "porcentaje": 40}}
            }
          ]
        },
        {
          "nombre": "Sótano 2",
          "caminando": [
            {
              "numero": 220,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 40}, "dia":{"nivel":23, "porcentaje":40}}
            },
            {
              "numero": 41,
              "nivel":24,
              "porcentaje":30
            },
            {
              "numero": 42,
              "nivel": "24-26",
              "porcentaje": 25
            },
            {
              "numero": 124,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":"22-24", "porcentaje": 5}, "dia":{"nivel":"22-24", "porcentaje":5}}
            },
            {
              "numero": 215,
              "probabilidad": {"tipo":"hora", "noche": {"nivel":"22-24", "porcentaje": 5}}
            }
          ]
        },
        {
          "nombre": "Sótano 3",
          "caminando": [
            {
              "numero": 220,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":"24-26", "porcentaje": 40}, "dia":{"nivel":"24-26", "porcentaje":40}}
            },
            {
              "numero": 41,
              "nivel":25,
              "porcentaje":30
            },
            {
              "numero": 42,
              "nivel": 25,
              "porcentaje": 20
            },
            {
              "numero": 124,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel":"22-26", "porcentaje": 10}, "dia":{"nivel":"22-26", "porcentaje":10}}
            },
            {
              "numero": 215,
              "probabilidad": {"tipo":"hora", "noche": {"nivel":"22-26", "porcentaje": 10}}
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
          "numero": 85,
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
      ],
      "especial": [
        {
          "numero": 147,
          "nivel": 15,
          "observaciones": "Con Velocidad Extrema"
        }
      ]
    },
    {
      "nombre": "Ruta 45",
      "hierba": [
        {
          "numero": 75,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":23, "porcentaje": 30}, "dia":{"nivel":23, "porcentaje":30}, "noche":{"nivel":"23-27", "porcentaje":50}}
        },
        {
          "numero": 231,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":20, "porcentaje": 5}}
        },
        {
          "numero": 207,
          "nivel": 24,
          "porcentaje": 20
        },
        {
          "numero": 74,
          "nivel": 23,
          "porcentaje": 30
        },
        {
          "numero": 227,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":27, "porcentaje": 5}, "dia":{"nivel":27, "porcentaje":5}}
        },
        {
          "numero": 232,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":25, "porcentaje": 10}, "dia":{"nivel":"25-30", "porcentaje":15}}
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
          "numero": 163,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 50}, "especial":{"porcentaje": 60}}
        },
        {
          "numero": 204,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 30}}
        },
        {
          "numero": 164,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 10}}
        },
        {
          "numero": 10,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 15}}
        },
        {
          "numero": 11,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 5}}
        },
        {
          "numero": 12,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}}
        },
        {
          "numero": 13,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 15}}
        },
        {
          "numero": 14,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 5}}
        },
        {
          "numero": 15,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 5}}
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
        }
      ],
      "legendario": [
        {
          "numero": 245,
          "nivel": 40
        },
        {
          "numero": 250,
          "nivel": 60
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
        }
      ]
    },
    {
      "nombre": "Ruta 27",
      "hierba": [
        {
          "numero": 20,
          "nivel":30,
          "porcentaje": 20
        },
        {
          "numero": 24,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":28, "porcentaje":30}, "dia":{"nivel":28, "porcentaje":30}}
        },
        {
          "numero": 77,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":32, "porcentaje":5}, "dia":{"nivel":32, "porcentaje":5}}
        },
        {
          "numero": 84,
          "nivel":"28-30",
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 40}, "dia":{"porcentaje":40}}
        },
        {
          "numero": 85,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel":30, "porcentaje": 5}, "dia":{"nivel":30, "porcentaje":5}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "noche":{"nivel": "28-30", "porcentaje":40}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche":{"nivel":"28-32", "porcentaje":40}}
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
          "numero": 21,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 190,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 214,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        },
        {
          "numero": 24,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
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
          "numero":28,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":28, "porcentaje":30}, "dia": {"nivel":28, "porcentaje":30}}
        },
        {
          "numero": 77,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel":32, "porcentaje":20}, "dia": {"nivel":32, "porcentaje":20}}
        },
        {
          "numero": 20,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 30, "porcentaje":10}, "dia": {"nivel":30, "porcentaje":10}, "noche": {"nivel": "28-30" , "porcentaje": 40}}
        },
        {
          "numero": 84,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 35}, "dia": {"nivel": "28-30", "porcentaje":35}}
        },
        {
          "numero": 24,
          "probabilidad":{"tipo":"hora", "maniana": {"nivel": 30, "porcentaje": 5}, "dia": {"nivel": 30, "porcentaje":5}}
        },
        {
          "numero": 195,
          "probabilidad":{"tipo":"hora", "noche": {"nivel": "30-32" , "porcentaje": 10}}
        },
        {
          "numero": 164,
          "probabilidad":{"tipo":"hora", "noche": {"nivel": "28-32" , "porcentaje": 50}}
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
          "numero": 21,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 65}, "especial":{"porcentaje": 50}}
        },
        {
          "numero": 190,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 20}, "especial":{"porcentaje": 20}}
        },
        {
          "numero": 214,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "especial":{"porcentaje": 30}}
        },
        {
          "numero": 23,
          "nivel":  10,
          "probabilidad": {"tipo": "arbol", "normal":{"porcentaje": 15}}
        }
      ]
    },
    {
      "nombre": "Calle Victoria",
      "caminando": [
        {
          "numero": 75,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 34, "porcentaje": 30}, "dia": {"nivel": 34, "porcentaje": 30}, "noche": {"nivel": "34-40", "porcentaje": 50}}
        },
        {
          "numero": 42,
          "nivel": 34,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}, "noche": {"porcentaje": 30}}

        },
        {
          "numero": 95,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 33, "porcentaje": 20}, "dia": {"nivel": 33, "porcentaje": 20}, "noche": {"nivel": 32, "porcentaje": 20}}
        },
        {
          "numero": 111,
          "nivel": 32,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 30}, "dia": {"porcentaje": 30}}
        },
        {
          "numero": 112,
          "nivel": 35,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia": {"porcentaje": 5}}
        },
        {
        	"numero": 28,
          "nivel": 35,
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia": {"porcentaje": 5}}
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
          "numero": 19,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 209,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje":30}, "dia": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 81,
          "nivel": 14,
          "porcentaje": 20
        },
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 10}, "dia": {"nivel": 15, "porcentaje": 10}, "noche": {"nivel": 15, "porcentaje": 5}}
        },
        {
          "numero": 39,
          "nivel": 12,
          "porcentaje": 5
        },
        {
          "numero": 210,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}}
        },
        {
        	"numero": 52,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 30}}
        },
        {
        	"numero": 96,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 30}}
        },
        {
        	"numero": 54,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 10}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 30}, "dia": {"nivel": 17, "porcentaje": 30}}
        },
        {
          "numero": 209,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 20}, "dia": {"nivel": 18, "porcentaje": 20}}
        },
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 10}, "dia": {"nivel": 18, "porcentaje": 10}}
        },
        {
          "numero": 39,
          "nivel": 18,
          "porcentaje": 5
        },
        {
          "numero": 63,
          "nivel": 16,
          "porcentaje": 5
        },
        {
          "numero": 198,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 30}}
        },
        {
          "numero": 228,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 18, "porcentaje": 20}}
        },
        {
          "numero": 52,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 30}}
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
        	"numero": 25,
        	"nivel": 25,
        	"fichas": 2222
        },
        {
        	"numero": 137,
        	"nivel": 15,
        	"fichas": 5555
        },
        {
        	"numero": 246,
        	"nivel": 40,
        	"fichas": 8888
        }
      ]
    },
    {
      "nombre": "Ruta 16",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 45}, "dia": {"nivel": "27-29", "porcentaje": 40}}
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
          "probabilidad": {"tipo":"hora", "dia": {"nivel": 29, "porcentaje": 5}}
        },
        {
          "numero": 198,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 29, "porcentaje": 15}}
        }
      ]
    },
    {
      "nombre": "Ruta 17",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "30-32", "porcentaje": 40}, "dia": {"nivel": "30-32", "porcentaje": 40}}
        },
        {
          "numero": 88,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "29-33", "porcentaje": 55}, "dia": {"nivel": "29", "porcentaje": 20}, "noche": {"nivel": "29-33", "porcentaje": 95}}
        },
        {
          "numero": 89,
          "nivel": 33,
          "porcentaje": 5
        },
        {
          "numero": 218,
          "probabilidad": {"tipo":"hora", "dia": {"nivel": "29-32", "porcentaje": 35}}
        }
      ]
    },
    {
      "nombre": "Ruta 18",
      "hierba": [
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "27-29", "porcentaje": 45}, "dia": {"nivel": "27-29", "porcentaje": 40}}
        },
        {
          "numero": 88,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "26-28", "porcentaje": 50}, "dia": {"nivel": "26-28", "porcentaje": 50}, "noche": {"nivel": "26-29", "porcentaje": 95}}
        },
        {
          "numero": 89,
          "nivel": 30,
          "porcentaje": 5
        },
        {
          "numero": 218,
          "probabilidad": {"tipo":"hora", "dia": {"nivel": 27, "porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ruta 8",
      "hierba": [
        {
        	"numero": 17,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 19, "porcentaje": 30}, "dia": {"nivel": 19, "porcentaje": 30}}
        },
        {
          "numero": 209,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 30}, "dia": {"nivel": 17, "porcentaje": 30}}
        },
        {
        	"numero": 58,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 17, "porcentaje": 10}, "dia": {"nivel": 17, "porcentaje": 10}}
        },
        {
        	"numero": 63,
          "nivel": 16,
          "porcentaje": 20
        },
        {
          "numero": 64,
          "nivel": 18,
          "porcentaje": 5
        },
        {
          "numero": 39,
          "nivel": 16,
          "porcentaje": 5
        },
        {
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 20, "porcentaje": 30}}
        },
        {
        	"numero": 93,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 10}}
        },
        {
          "numero": 52,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 30}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 30}, "dia": {"nivel": 23, "porcentaje": 30}}
        },
        {
          "numero": 33,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 30}, "dia": {"nivel": 23, "porcentaje": 30}}
        },
        {
          "numero": 113,
          "nivel": 25,
          "porcentaje": 1
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "25-27", "porcentaje": 19}, "dia": {"nivel": "25-27", "porcentaje": 19}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "23-25", "porcentaje": 39}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 23, "porcentaje": 30}}
        },
        {
          "numero": 49,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 10}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 20}, "dia": {"nivel": 28, "porcentaje": 20}}
        },
        {
          "numero": 30,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 26, "porcentaje": 30}, "dia": {"nivel": 26, "porcentaje": 30}}
        },
        {
          "numero": 33,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 26, "porcentaje": 30}, "dia": {"nivel": 26, "porcentaje": 30}}
        },
        {
          "numero": 113,
          "nivel": 28,
          "porcentaje": 1
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 10}, "dia": {"nivel": 28, "porcentaje": 10}}
        },
        {
          "numero": 188,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 30, "porcentaje": 9}, "dia": {"nivel": 30, "porcentaje": 9}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "26-28", "porcentaje": 39}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 28, "porcentaje": 20}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 26, "porcentaje": 30}}
        },
        {
          "numero": 49,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 28, "porcentaje": 10}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 30}, "dia": {"nivel": 23, "porcentaje": 30}}
        },
        {
          "numero": 33,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 23, "porcentaje": 30}, "dia": {"nivel": 23, "porcentaje": 30}}
        },
        {
          "numero": 113,
          "nivel": 25,
          "porcentaje": 1
        },
        {
          "numero": 187,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "25-27", "porcentaje": 19}, "dia": {"nivel": "25-27", "porcentaje": 19}}
        },
        {
          "numero": 195,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "23-25", "porcentaje": 39}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 20}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 23, "porcentaje": 30}}
        },
        {
          "numero": 49,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 25, "porcentaje": 10}}
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
          "nivel": 15,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 30}, "dia": {"porcentaje": 30}}
        },
        {
          "numero": 20,
          "nivel": 15,
          "porcentaje": 20
        },
        {
          "numero": 22,
          "nivel": 15,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}}
        },
        {
          "numero": 105,
          "nivel": 15,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 5}, "dia": {"porcentaje": 5}}
        },
        {
          "numero": 125,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 5}, "dia": {"nivel": 18, "porcentaje": 5}, "noche": {"nivel": 18, "porcentaje": 5}}
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
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 30}}
        },
        {
          "numero": 49,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 5}}
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
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 30}, "dia": {"nivel": 10, "porcentaje": 30}}
            },
            {
              "numero": 74,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 11, "porcentaje": 30}, "dia": {"nivel": 11, "porcentaje": 30}, "noche": {"nivel": "11-12", "porcentaje": 50}}
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 10}, "dia": {"nivel": 12, "porcentaje": 10}, "noche": {"nivel": "12-15", "porcentaje": 40}}
            },
            {
              "numero": 67,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}}
            },
            {
              "numero": 66,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 20}, "dia": {"nivel": 12, "porcentaje": 20}}
            },
            {
              "numero": 105,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 5}, "dia": {"nivel": 12, "porcentaje": 5}}
            },
            {
              "numero": 93,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 17, "porcentaje": 10}}
            }
          ]
        },
        {
          "nombre": "Sótano",
          "caminando": [
            {
              "numero": 104,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 30}, "dia": {"nivel": 12, "porcentaje": 30}}
            },
            {
              "numero": 74,
              "nivel": 14,
              "porcentaje": 30
            },
            {
              "numero": 95,
              "nivel": 16,
              "porcentaje": 20
            },
            {
              "numero": 41,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 10}, "dia": {"nivel": 12, "porcentaje": 10}, "noche": {"nivel": "12-15", "porcentaje": 40}}
            },
            {
              "numero": 105,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}}
            },
            {
              "numero": 115,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 5}, "dia": {"nivel": 15, "porcentaje": 5}}
            },
            {
              "numero": 93,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 5}}
            },
            {
              "numero": 42,
              "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 5}}
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
          "nivel": 15,
          "porcentaje": 30
        },
        {
          "numero": 21,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 30}, "dia": {"nivel": 15, "porcentaje": 30}}
        },
        {
          "numero": 20,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": 15, "porcentaje": 20}, "noche": {"nivel": "15-18", "porcentaje": 25}}
        },
        {
          "numero": 105,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 18, "porcentaje": 5}, "dia": {"nivel": 18, "porcentaje": 5}}
        },
        {
          "numero": 22,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 15}, "dia": {"nivel": 15, "porcentaje": 15}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 30}}
        },
        {
          "numero": 49,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 10}}
        },
        {
          "numero": 41,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 5}}
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
      "nombre": "Central de Energía",
      "intercambio": [
        {
          "numero": 82,
          "necesita": 51
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
          "nivel": 10,
          "porcentaje": 5
        },
        {
          "numero": 10,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "8-10", "porcentaje": 60}, "dia": {"nivel": "8-10", "porcentaje": 50}}
        },
        {
          "numero": 11,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 20}}
        },
        {
          "numero": 63,
          "nivel": 12,
          "porcentaje": 10
        },
        {
          "numero": 12,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 5}, "dia": {"nivel": 14, "porcentaje": 5}}
        },
        {
          "numero": 191,
          "probabilidad": {"tipo":"hora", "dia": {"nivel": 12, "porcentaje": 30}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 30}}
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "10-12", "porcentaje": 50}}
        },
        {
          "numero": 44,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 5}}
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
          "nivel": 10,
          "porcentaje": 5
        },
        {
          "numero": 10,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 30}, "dia": {"nivel": 10, "porcentaje": 30}}
        },
        {
          "numero": 11,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 10}, "dia": {"nivel": 12, "porcentaje": 10}}
        },
        {
          "numero": 12,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 5}, "dia": {"nivel": 14, "porcentaje": 5}}
        },
        {
          "numero": 16,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 10, "porcentaje": 30}, "dia": {"nivel": 10, "porcentaje": 30}}
        },
        {
          "numero": 17,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 12, "porcentaje": 20}, "dia": {"nivel": 12, "porcentaje": 20}}
        },
        {
          "numero": 43,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 30}}
        },
        {
          "numero": 48,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 20}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 10, "porcentaje": 30}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "12-14", "porcentaje": 15}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 209,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 63,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "12-14", "porcentaje": 15}, "dia": {"nivel": "12-14", "porcentaje": 15}, "noche": {"nivel": "12-14", "porcentaje": 15}}
        },
        {
          "numero": 17,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 15, "porcentaje": 20}, "dia": {"nivel": 15, "porcentaje": 20}}
        },
        {
          "numero": 39,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 14, "porcentaje": 5}, "dia": {"nivel": 14, "porcentaje": 5}, "noche": {"nivel": 14, "porcentaje": 5}}
        },
        {
          "numero": 52,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 163,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 30}}
        },
        {
          "numero": 164,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 15, "porcentaje": 20}}
        }
      ]
    },
    {
      "nombre": "Ruta 11",
      "hierba": [
        {
        	"numero": 96,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 14, "porcentaje": 30}}
        },
        {
        	"numero": 19,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 5}, "dia": {"nivel": 16, "porcentaje": 5}}
        },
        {
        	"numero": 97,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": 16, "porcentaje": 5}}
        },
        {
        	"numero": 81,
        	"nivel": 15,
        	"porcentaje": 20
        },
        {
        	"numero": 187,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "14-16", "porcentaje": 35}, "dia": {"nivel": "14-16", "porcentaje": 35}}
        },
        {
        	"numero": 20,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 13, "porcentaje": 30}, "dia": {"nivel": 13, "porcentaje": 30}, "noche": {"nivel": 16, "porcentaje": 5}}
        },
        {
        	"numero": 17,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 16, "porcentaje": 10}, "dia": {"nivel": 16, "porcentaje": 10}}
        },
        {
        	"numero": 52,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 13, "porcentaje": 30}}
        },
        {
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 16, "porcentaje": 10}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "3-24", "porcentaje": 90}, "dia": {"nivel": "2-16", "porcentaje": 90}, "noche": {"nivel": "4-32", "porcentaje": 90}}
        },
        {
        	"numero": 51,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 24, "porcentaje": 10}, "dia": {"nivel": 16, "porcentaje": 10}, "noche": {"nivel": 32, "porcentaje": 10}}
        }
      ]
    },
    {
      "nombre": "Ruta 2",
      "hierba": [
        {
        	"numero": 10,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}, "dia": {"nivel": 3, "porcentaje": 30}}
        },
        {
        	"numero": 12,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 7, "porcentaje": 10}, "dia": {"nivel": 7, "porcentaje": 10}}
        },
        {
        	"numero": 16,
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 5, "porcentaje": 20}, "dia": {"nivel": "3-5", "porcentaje": 50}}
        },
        {
        	"numero": 17,
        	"probabilidad": {"tipo":"hora", "dia": {"nivel": 7, "porcentaje": 5}}
        },
        {
        	"numero": 25,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": 4, "porcentaje": 5}, "dia": {"nivel": 4, "porcentaje": 5}}
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
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": "3-5", "porcentaje": 50}}
        },
        {
        	"numero": 167,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 3, "porcentaje": 30}}
        },
        {
        	"numero": 164,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 7, "porcentaje": 10}}
        },
        {
        	"numero": 168,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 7, "porcentaje": 5}}
        }
      ]
    },
    {
      "nombre": "Ciudad Plateada",
      "intercambio": [
        {
        	"numero": 178,
        	"necesita": 93
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
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 2, "porcentaje": 30}, "dia": {"nivel": 2, "porcentaje": 30}, "noche": {"nivel": "2-3", "porcentaje": 50}}
        },
        {
        	"numero": 20,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 6, "porcentaje": 5}}
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
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "30-35", "porcentaje": 50}, "dia": {"nivel": "30-35", "porcentaje": 50}, "noche": {"nivel": "28-35", "porcentaje": 60}}
        },
        {
          "numero": 122,
          "probabilidad": {"tipo":"hora", "maniana": {"nivel": "28-30", "porcentaje": 10}, "dia": {"nivel": "28-30", "porcentaje": 10}}
        },
        {
          "numero": 19,
          "nivel": 25,
          "porcentaje": 30
        },
        {
          "numero": 20,
          "nivel": 20,
          "porcentaje": 10
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
        	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 3, "porcentaje": 30}, "dia": {"nivel": 3, "porcentaje": 30}, "noche": {"nivel": "3-7", "porcentaje": 60}}
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
          "numero": 60,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "3-4", "porcentaje": 40}}
        },
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
        	"numero": 78,
          "nivel": 40,
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 20}, "dia": {"porcentaje": 20}}
        },
        {
        	"numero": 24,
          "nivel": 42,
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}}
        },
        {
        	"numero": 114,
        	"nivel": 39,
        	"porcentaje": 30
        },
        {
        	"numero": 77,
        	"nivel": 40,
        	"probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 30}, "dia": {"porcentaje": 30}}
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
        	"numero": 61,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": 40, "porcentaje": 40}}
        },
        {
        	"numero": 42,
        	"probabilidad": {"tipo":"hora", "noche": {"nivel": "40-42", "porcentaje": 30}}
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
          "numero": 78,
          "nivel": 44,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 10}, "dia": {"porcentaje": 10}}
        },
        {
          "numero": 114,
          "nivel": 41,
          "porcentaje": 30
        },
        {
          "numero": 77,
          "nivel": 42,
          "probabilidad": {"tipo":"hora", "maniana": {"porcentaje": 30}, "dia": {"porcentaje": 30}}
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
          "numero": 61,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "42-44", "porcentaje": 40}}
        },
        {
          "numero": 42,
          "probabilidad": {"tipo":"hora", "noche": {"nivel": "40-44", "porcentaje": 30}}
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
            	"numero": 217,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 44, "porcentaje": 30}, "dia": {"nivel": 44, "porcentaje": 30}}
            },
            {
            	"numero": 95,
            	"nivel": 42,
            	"porcentaje": 20
            },
            {
            	"numero": 126,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 10}, "dia": {"nivel": 45, "porcentaje": 10}}
            },
            {
            	"numero": 75,
            	"nivel": 43,
            	"porcentaje": 30
            },
            {
            	"numero": 42,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 45, "porcentaje": 5}, "dia": {"nivel": 45, "porcentaje": 5}, "noche": {"nivel": "42-46", "porcentaje": 45}}
            },
            {
            	"numero": 246,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-20", "porcentaje": 5}, "dia": {"nivel": "15-20", "porcentaje": 5}}
            },
            {
            	"numero": 55,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 5}}
            }
          ]
        },
        {
          "nombre": "Primera y segunda planta",
          "caminando": [
            {
            	"numero": 217,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 47, "porcentaje": 20}, "dia": {"nivel": 47, "porcentaje": 20}}
            },
            {
            	"numero": 67,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 48, "porcentaje": 30}, "dia": {"nivel": 48, "porcentaje": 30}}
            },
            {
            	"numero": 47,
              "nivel": "46-48",
            	"porcentaje": 15
            },
            {
            	"numero": 42,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 48, "porcentaje": 30}, "dia": {"nivel": 48, "porcentaje": 30}, "noche": {"nivel": "46-48", "porcentaje": 50}}
            },
            {
            	"numero": 246,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-20", "porcentaje": 5}, "dia": {"nivel": "15-20", "porcentaje": 5}}
            },
            {
            	"numero": 55,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 48, "porcentaje": 30}}
            },
            {
            	"numero": 200,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 5}}
            }
          ],
          "surf":[
            {
              "numero": 119,
              "nivel": "35-44",
              "porcentaje": 60
            },
            {
              "numero": 55,
              "nivel": "35-39",
              "porcentaje": 30
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
            	"numero": 47,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "46-50", "porcentaje": 20}, "dia": {"nivel": "46-50", "porcentaje": 20}, "noche": {"nivel": "46-52", "porcentaje": 20}}
            },
            {
            	"numero": 42,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "46-50", "porcentaje": 80}, "dia": {"nivel": "46-50", "porcentaje": 80}, "noche": {"nivel": "48-50", "porcentaje": 50}}
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
            	"numero": 217,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 50, "porcentaje": 10}, "dia": {"nivel": 50, "porcentaje": 10}}
            },
            {
            	"numero": 75,
              "nivel": 48,
            	"porcentaje": 20
            },
            {
            	"numero": 95,
              "nivel": 48,
            	"porcentaje": 30
            },
            {
            	"numero": 42,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 51, "porcentaje": 30}, "dia": {"nivel": 51, "porcentaje": 30}, "noche": {"nivel": "49-53", "porcentaje": 45}}
            },
            {
            	"numero": 246,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "15-20", "porcentaje": 9}, "dia": {"nivel": "15-20", "porcentaje": 9}}
            },
            {
            	"numero": 247,
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": 20, "porcentaje": 1}, "dia": {"nivel": 20, "porcentaje": 1}}
            },
            {
            	"numero": 55,
            	"probabilidad": {"tipo":"hora", "noche": {"nivel": 45, "porcentaje": 5}}
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
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 40}, "dia": {"nivel": "22-24", "porcentaje": 40}, "noche": {"nivel": "22-24", "porcentaje": 60}}
            },
            {
            	"numero": 86,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 25}, "dia": {"nivel": "22-24", "porcentaje": 25}}
            },
            {
            	"numero": 42,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 5}, "dia": {"nivel": 25, "porcentaje": 5}, "noche": {"nivel": "24-25", "porcentaje": 10}}
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
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 40}, "dia": {"nivel": "22-24", "porcentaje": 40}, "noche": {"nivel": "22-24", "porcentaje": 60}}
            },
            {
            	"numero": 86,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "22-24", "porcentaje": 25}, "dia": {"nivel": "22-24", "porcentaje": 25}}
            },
            {
            	"numero": 42,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 25, "porcentaje": 5}, "dia": {"nivel": 25, "porcentaje": 5}, "noche": {"nivel": "24-25", "porcentaje": 10}}
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
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "23-25", "porcentaje": 40}, "dia": {"nivel": "23-25", "porcentaje": 40}, "noche": {"nivel": "23-25", "porcentaje": 60}}
            },
            {
            	"numero": 86,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "23-25", "porcentaje": 25}, "dia": {"nivel": "23-25", "porcentaje": 25}}
            },
            {
            	"numero": 42,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 26, "porcentaje": 5}, "dia": {"nivel": 26, "porcentaje": 5}, "noche": {"nivel": "25-26", "porcentaje": 10}}
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
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "24-26", "porcentaje": 40}, "dia": {"nivel": "24-26", "porcentaje": 40}, "noche": {"nivel": "24-26", "porcentaje": 60}}
            },
            {
            	"numero": 86,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "24-26", "porcentaje": 25}, "dia": {"nivel": "24-26", "porcentaje": 25}}
            },
            {
            	"numero": 42,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 27, "porcentaje": 5}, "dia": {"nivel": 27, "porcentaje": 5}, "noche": {"nivel": "26-27", "porcentaje": 10}}
            },
            {
            	"numero": 41,
            	"nivel": 25,
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
            	"probabilidad": {"tipo":"hora", "maniana": {"nivel": "25-27", "porcentaje": 40}, "dia": {"nivel": "25-27", "porcentaje": 40}, "noche": {"nivel": "25-27", "porcentaje": 60}}
            },
            {
            	"numero": 86,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": "25-27", "porcentaje": 25}, "dia": {"nivel": "25-27", "porcentaje": 25}}
            },
            {
            	"numero": 42,
              "probabilidad": {"tipo":"hora", "maniana": {"nivel": 28, "porcentaje": 5}, "dia": {"nivel": 28, "porcentaje": 5}, "noche": {"nivel": "27-28", "porcentaje": 10}}
            },
            {
            	"numero": 41,
            	"nivel": 26,
            	"porcentaje": 30
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
          ],
          "legendario": [
            {
            	"numero": 249,
            	"nivel": 60
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
        	"numero": 52
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
          "numero":37
        },
        {
          "numero":56
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
        },
        {
          "numero":179
        },
        {
          "numero":203
        },
        {
          "numero":223
        }
      ]
    },
    {
      "nombre": "Evento",
      "legendario": [
        {
          "numero": 251,
          "nivel": 30,
          "observaciones": "GS Ball en altar de Encinar"
        }
      ]
    }
  ]
}
