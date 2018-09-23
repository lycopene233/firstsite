const imagePath = '/firstsite/img/180917_es6_icon/';

const typePercMap = new Map([
  ['danger',  0.2],
  ['weapon',  0.3],
  ['food',    0.3],
  ['healing', 0.2],
]);

const bgColorMap = new Map([
  ['danger',  '#E53235'],
  ['weapon',  '#FFC724'],
  ['food',    '#17AD5A'],
  ['healing', '#2E30FF'],
  ['passed',  '#fff'],
]);

const itemData = 
{
    "danger": [
      {
        "name": "wolf",
        "is_atkable": true,
        "buff": [
          ["food", 3],
        ],
        "debuff": [
          ["hp", -2],
          ["san", -1],
        ],
      },
      {
        "name": "shark",
        "is_atkable": true,
        "buff": [
          ["food", 3],
        ],
        "debuff": [
          ["hp", -1],
          ["san", -2],
        ],
      },
      {
        "name": "bomb",
        "debuff": [
          ["hp", -3],
        ],
      },
      {
        "name": "magic",
        "debuff": [
          ["san", -3],
        ],
      },
    ],
    "weapon": [
      {
        "name": "sword",
        "buff": [
          ["weapon", 2],
        ],
      },
      {
        "name": "bow",
        "buff": [
          ["weapon", 1],
        ],
      },
      {
        "name": "gun",
        "buff": [
          ["weapon", 3],
        ],
      },
    ],
    "food": [
      {
        "name": "fish",
        "buff": [
          ["food", 1],
        ],
      },
      {
        "name": "pig",
        "buff": [
          ["food", 3],
        ],
      },
      {
        "name": "rabbit",
        "buff": [
          ["food", 2],
        ],
      },
      {
        "name": "vegetable",
        "buff": [
          ["food", 1],
        ],
      },    
    ],
    "healing": [
      {
        "name": "lamp",
        "buff": [
          ["hp", 1],
          ["san", 1],
        ],
      },
      {
        "name": "medicine",
        "buff": [
          ["hp", 2],
        ],
      },
      {
        "name": "flower",
        "buff": [
          ["san", 2],
        ],
      },
    ],
};
