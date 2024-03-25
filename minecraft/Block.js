class Block {
    constructor({ id, name, displayName, hardness, resistance, stackSize, diggable, material, transparent, emitLight, filterLight, defaultState, minStateId, maxStateId, states, drops, boundingBox, harvestTools }) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.hardness = hardness;
        this.resistance = resistance;
        this.stackSize = stackSize;
        this.diggable = diggable;
        this.material = material;
        this.transparent = transparent;
        this.emitLight = emitLight;
        this.filterLight = filterLight;
        this.defaultState = defaultState;
        this.minStateId = minStateId;
        this.maxStateId = maxStateId;
        this.states = states;
        this.drops = drops;
        this.boundingBox = boundingBox;
        this.harvestTools = harvestTools || {}; // Default to an empty object if not provided
    }
}



const jsonData = [
    {
        "id": 0,
        "name": "air",
        "displayName": "Air",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 0,
        "minStateId": 0,
        "maxStateId": 0,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 1,
        "name": "stone",
        "displayName": "Stone",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 1,
        "minStateId": 1,
        "maxStateId": 1,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            22
        ],
        "boundingBox": "block"
    },
    {
        "id": 2,
        "name": "granite",
        "displayName": "Granite",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2,
        "minStateId": 2,
        "maxStateId": 2,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            2
        ],
        "boundingBox": "block"
    },
    {
        "id": 3,
        "name": "polished_granite",
        "displayName": "Polished Granite",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 3,
        "minStateId": 3,
        "maxStateId": 3,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            3
        ],
        "boundingBox": "block"
    },
    {
        "id": 4,
        "name": "diorite",
        "displayName": "Diorite",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 4,
        "minStateId": 4,
        "maxStateId": 4,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            4
        ],
        "boundingBox": "block"
    },
    {
        "id": 5,
        "name": "polished_diorite",
        "displayName": "Polished Diorite",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5,
        "minStateId": 5,
        "maxStateId": 5,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            5
        ],
        "boundingBox": "block"
    },
    {
        "id": 6,
        "name": "andesite",
        "displayName": "Andesite",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6,
        "minStateId": 6,
        "maxStateId": 6,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            6
        ],
        "boundingBox": "block"
    },
    {
        "id": 7,
        "name": "polished_andesite",
        "displayName": "Polished Andesite",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7,
        "minStateId": 7,
        "maxStateId": 7,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            7
        ],
        "boundingBox": "block"
    },
    {
        "id": 8,
        "name": "grass_block",
        "displayName": "Grass Block",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9,
        "minStateId": 8,
        "maxStateId": 9,
        "states": [
            {
                "name": "snowy",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            15
        ],
        "boundingBox": "block"
    },
    {
        "id": 9,
        "name": "dirt",
        "displayName": "Dirt",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10,
        "minStateId": 10,
        "maxStateId": 10,
        "states": [],
        "drops": [
            15
        ],
        "boundingBox": "block"
    },
    {
        "id": 10,
        "name": "coarse_dirt",
        "displayName": "Coarse Dirt",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11,
        "minStateId": 11,
        "maxStateId": 11,
        "states": [],
        "drops": [
            16
        ],
        "boundingBox": "block"
    },
    {
        "id": 11,
        "name": "podzol",
        "displayName": "Podzol",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 13,
        "minStateId": 12,
        "maxStateId": 13,
        "states": [
            {
                "name": "snowy",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            15
        ],
        "boundingBox": "block"
    },
    {
        "id": 12,
        "name": "cobblestone",
        "displayName": "Cobblestone",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 14,
        "minStateId": 14,
        "maxStateId": 14,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            22
        ],
        "boundingBox": "block"
    },
    {
        "id": 13,
        "name": "oak_planks",
        "displayName": "Oak Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 15,
        "minStateId": 15,
        "maxStateId": 15,
        "states": [],
        "drops": [
            23
        ],
        "boundingBox": "block"
    },
    {
        "id": 14,
        "name": "spruce_planks",
        "displayName": "Spruce Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 16,
        "minStateId": 16,
        "maxStateId": 16,
        "states": [],
        "drops": [
            24
        ],
        "boundingBox": "block"
    },
    {
        "id": 15,
        "name": "birch_planks",
        "displayName": "Birch Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 17,
        "minStateId": 17,
        "maxStateId": 17,
        "states": [],
        "drops": [
            25
        ],
        "boundingBox": "block"
    },
    {
        "id": 16,
        "name": "jungle_planks",
        "displayName": "Jungle Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18,
        "minStateId": 18,
        "maxStateId": 18,
        "states": [],
        "drops": [
            26
        ],
        "boundingBox": "block"
    },
    {
        "id": 17,
        "name": "acacia_planks",
        "displayName": "Acacia Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19,
        "minStateId": 19,
        "maxStateId": 19,
        "states": [],
        "drops": [
            27
        ],
        "boundingBox": "block"
    },
    {
        "id": 18,
        "name": "cherry_planks",
        "displayName": "Cherry Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 20,
        "minStateId": 20,
        "maxStateId": 20,
        "states": [],
        "drops": [
            28
        ],
        "boundingBox": "block"
    },
    {
        "id": 19,
        "name": "dark_oak_planks",
        "displayName": "Dark Oak Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21,
        "minStateId": 21,
        "maxStateId": 21,
        "states": [],
        "drops": [
            29
        ],
        "boundingBox": "block"
    },
    {
        "id": 20,
        "name": "mangrove_planks",
        "displayName": "Mangrove Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22,
        "minStateId": 22,
        "maxStateId": 22,
        "states": [],
        "drops": [
            30
        ],
        "boundingBox": "block"
    },
    {
        "id": 21,
        "name": "bamboo_planks",
        "displayName": "Bamboo Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 23,
        "minStateId": 23,
        "maxStateId": 23,
        "states": [],
        "drops": [
            31
        ],
        "boundingBox": "block"
    },
    {
        "id": 22,
        "name": "bamboo_mosaic",
        "displayName": "Bamboo Mosaic",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24,
        "minStateId": 24,
        "maxStateId": 24,
        "states": [],
        "drops": [
            34
        ],
        "boundingBox": "block"
    },
    {
        "id": 23,
        "name": "oak_sapling",
        "displayName": "Oak Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 25,
        "minStateId": 25,
        "maxStateId": 26,
        "states": [
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            35
        ],
        "boundingBox": "empty"
    },
    {
        "id": 24,
        "name": "spruce_sapling",
        "displayName": "Spruce Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 27,
        "minStateId": 27,
        "maxStateId": 28,
        "states": [
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            36
        ],
        "boundingBox": "empty"
    },
    {
        "id": 25,
        "name": "birch_sapling",
        "displayName": "Birch Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 29,
        "minStateId": 29,
        "maxStateId": 30,
        "states": [
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            37
        ],
        "boundingBox": "empty"
    },
    {
        "id": 26,
        "name": "jungle_sapling",
        "displayName": "Jungle Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 31,
        "minStateId": 31,
        "maxStateId": 32,
        "states": [
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            38
        ],
        "boundingBox": "empty"
    },
    {
        "id": 27,
        "name": "acacia_sapling",
        "displayName": "Acacia Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 33,
        "minStateId": 33,
        "maxStateId": 34,
        "states": [
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            39
        ],
        "boundingBox": "empty"
    },
    {
        "id": 28,
        "name": "cherry_sapling",
        "displayName": "Cherry Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 35,
        "minStateId": 35,
        "maxStateId": 36,
        "states": [
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            40
        ],
        "boundingBox": "empty"
    },
    {
        "id": 29,
        "name": "dark_oak_sapling",
        "displayName": "Dark Oak Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 37,
        "minStateId": 37,
        "maxStateId": 38,
        "states": [
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            41
        ],
        "boundingBox": "empty"
    },
    {
        "id": 30,
        "name": "mangrove_propagule",
        "displayName": "Mangrove Propagule",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 44,
        "minStateId": 39,
        "maxStateId": 78,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 5,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "hanging",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 31,
        "name": "bedrock",
        "displayName": "Bedrock",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 79,
        "minStateId": 79,
        "maxStateId": 79,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 32,
        "name": "water",
        "displayName": "Water",
        "hardness": 100.0,
        "resistance": 100.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 80,
        "minStateId": 80,
        "maxStateId": 95,
        "states": [
            {
                "name": "level",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 33,
        "name": "lava",
        "displayName": "Lava",
        "hardness": 100.0,
        "resistance": 100.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 1,
        "defaultState": 96,
        "minStateId": 96,
        "maxStateId": 111,
        "states": [
            {
                "name": "level",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 34,
        "name": "sand",
        "displayName": "Sand",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 112,
        "minStateId": 112,
        "maxStateId": 112,
        "states": [],
        "drops": [
            44
        ],
        "boundingBox": "block"
    },
    {
        "id": 35,
        "name": "suspicious_sand",
        "displayName": "Suspicious Sand",
        "hardness": 0.25,
        "resistance": 0.25,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 113,
        "minStateId": 113,
        "maxStateId": 116,
        "states": [
            {
                "name": "dusted",
                "type": "int",
                "num_values": 4,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 36,
        "name": "red_sand",
        "displayName": "Red Sand",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 117,
        "minStateId": 117,
        "maxStateId": 117,
        "states": [],
        "drops": [
            47
        ],
        "boundingBox": "block"
    },
    {
        "id": 37,
        "name": "gravel",
        "displayName": "Gravel",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 118,
        "minStateId": 118,
        "maxStateId": 118,
        "states": [],
        "drops": [
            48
        ],
        "boundingBox": "block"
    },
    {
        "id": 38,
        "name": "suspicious_gravel",
        "displayName": "Suspicious Gravel",
        "hardness": 0.25,
        "resistance": 0.25,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 119,
        "minStateId": 119,
        "maxStateId": 122,
        "states": [
            {
                "name": "dusted",
                "type": "int",
                "num_values": 4,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 39,
        "name": "gold_ore",
        "displayName": "Gold Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 123,
        "minStateId": 123,
        "maxStateId": 123,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            773
        ],
        "boundingBox": "block"
    },
    {
        "id": 40,
        "name": "deepslate_gold_ore",
        "displayName": "Deepslate Gold Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 124,
        "minStateId": 124,
        "maxStateId": 124,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            773
        ],
        "boundingBox": "block"
    },
    {
        "id": 41,
        "name": "iron_ore",
        "displayName": "Iron Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 125,
        "minStateId": 125,
        "maxStateId": 125,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            769
        ],
        "boundingBox": "block"
    },
    {
        "id": 42,
        "name": "deepslate_iron_ore",
        "displayName": "Deepslate Iron Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 126,
        "minStateId": 126,
        "maxStateId": 126,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            769
        ],
        "boundingBox": "block"
    },
    {
        "id": 43,
        "name": "coal_ore",
        "displayName": "Coal Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 127,
        "minStateId": 127,
        "maxStateId": 127,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            762
        ],
        "boundingBox": "block"
    },
    {
        "id": 44,
        "name": "deepslate_coal_ore",
        "displayName": "Deepslate Coal Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 128,
        "minStateId": 128,
        "maxStateId": 128,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            762
        ],
        "boundingBox": "block"
    },
    {
        "id": 45,
        "name": "nether_gold_ore",
        "displayName": "Nether Gold Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 129,
        "minStateId": 129,
        "maxStateId": 129,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            955
        ],
        "boundingBox": "block"
    },
    {
        "id": 46,
        "name": "oak_log",
        "displayName": "Oak Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 131,
        "minStateId": 130,
        "maxStateId": 132,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            110
        ],
        "boundingBox": "block"
    },
    {
        "id": 47,
        "name": "spruce_log",
        "displayName": "Spruce Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 134,
        "minStateId": 133,
        "maxStateId": 135,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            111
        ],
        "boundingBox": "block"
    },
    {
        "id": 48,
        "name": "birch_log",
        "displayName": "Birch Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 137,
        "minStateId": 136,
        "maxStateId": 138,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            112
        ],
        "boundingBox": "block"
    },
    {
        "id": 49,
        "name": "jungle_log",
        "displayName": "Jungle Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 140,
        "minStateId": 139,
        "maxStateId": 141,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            113
        ],
        "boundingBox": "block"
    },
    {
        "id": 50,
        "name": "acacia_log",
        "displayName": "Acacia Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 143,
        "minStateId": 142,
        "maxStateId": 144,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            114
        ],
        "boundingBox": "block"
    },
    {
        "id": 51,
        "name": "cherry_log",
        "displayName": "Cherry Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 146,
        "minStateId": 145,
        "maxStateId": 147,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            115
        ],
        "boundingBox": "block"
    },
    {
        "id": 52,
        "name": "dark_oak_log",
        "displayName": "Dark Oak Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 149,
        "minStateId": 148,
        "maxStateId": 150,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            116
        ],
        "boundingBox": "block"
    },
    {
        "id": 53,
        "name": "mangrove_log",
        "displayName": "Mangrove Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 152,
        "minStateId": 151,
        "maxStateId": 153,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            117
        ],
        "boundingBox": "block"
    },
    {
        "id": 54,
        "name": "mangrove_roots",
        "displayName": "Mangrove Roots",
        "hardness": 0.7,
        "resistance": 0.7,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 155,
        "minStateId": 154,
        "maxStateId": 155,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            118
        ],
        "boundingBox": "block"
    },
    {
        "id": 55,
        "name": "muddy_mangrove_roots",
        "displayName": "Muddy Mangrove Roots",
        "hardness": 0.7,
        "resistance": 0.7,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 157,
        "minStateId": 156,
        "maxStateId": 158,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            119
        ],
        "boundingBox": "block"
    },
    {
        "id": 56,
        "name": "bamboo_block",
        "displayName": "Block of Bamboo",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 160,
        "minStateId": 159,
        "maxStateId": 161,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            122
        ],
        "boundingBox": "block"
    },
    {
        "id": 57,
        "name": "stripped_spruce_log",
        "displayName": "Stripped Spruce Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 163,
        "minStateId": 162,
        "maxStateId": 164,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            124
        ],
        "boundingBox": "block"
    },
    {
        "id": 58,
        "name": "stripped_birch_log",
        "displayName": "Stripped Birch Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 166,
        "minStateId": 165,
        "maxStateId": 167,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            125
        ],
        "boundingBox": "block"
    },
    {
        "id": 59,
        "name": "stripped_jungle_log",
        "displayName": "Stripped Jungle Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 169,
        "minStateId": 168,
        "maxStateId": 170,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            126
        ],
        "boundingBox": "block"
    },
    {
        "id": 60,
        "name": "stripped_acacia_log",
        "displayName": "Stripped Acacia Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 172,
        "minStateId": 171,
        "maxStateId": 173,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            127
        ],
        "boundingBox": "block"
    },
    {
        "id": 61,
        "name": "stripped_cherry_log",
        "displayName": "Stripped Cherry Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 175,
        "minStateId": 174,
        "maxStateId": 176,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            128
        ],
        "boundingBox": "block"
    },
    {
        "id": 62,
        "name": "stripped_dark_oak_log",
        "displayName": "Stripped Dark Oak Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 178,
        "minStateId": 177,
        "maxStateId": 179,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            129
        ],
        "boundingBox": "block"
    },
    {
        "id": 63,
        "name": "stripped_oak_log",
        "displayName": "Stripped Oak Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 181,
        "minStateId": 180,
        "maxStateId": 182,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            123
        ],
        "boundingBox": "block"
    },
    {
        "id": 64,
        "name": "stripped_mangrove_log",
        "displayName": "Stripped Mangrove Log",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 184,
        "minStateId": 183,
        "maxStateId": 185,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            130
        ],
        "boundingBox": "block"
    },
    {
        "id": 65,
        "name": "stripped_bamboo_block",
        "displayName": "Block of Stripped Bamboo",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 187,
        "minStateId": 186,
        "maxStateId": 188,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            143
        ],
        "boundingBox": "block"
    },
    {
        "id": 66,
        "name": "oak_wood",
        "displayName": "Oak Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 190,
        "minStateId": 189,
        "maxStateId": 191,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            144
        ],
        "boundingBox": "block"
    },
    {
        "id": 67,
        "name": "spruce_wood",
        "displayName": "Spruce Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 193,
        "minStateId": 192,
        "maxStateId": 194,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            145
        ],
        "boundingBox": "block"
    },
    {
        "id": 68,
        "name": "birch_wood",
        "displayName": "Birch Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 196,
        "minStateId": 195,
        "maxStateId": 197,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            146
        ],
        "boundingBox": "block"
    },
    {
        "id": 69,
        "name": "jungle_wood",
        "displayName": "Jungle Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 199,
        "minStateId": 198,
        "maxStateId": 200,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            147
        ],
        "boundingBox": "block"
    },
    {
        "id": 70,
        "name": "acacia_wood",
        "displayName": "Acacia Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 202,
        "minStateId": 201,
        "maxStateId": 203,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            148
        ],
        "boundingBox": "block"
    },
    {
        "id": 71,
        "name": "cherry_wood",
        "displayName": "Cherry Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 205,
        "minStateId": 204,
        "maxStateId": 206,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            149
        ],
        "boundingBox": "block"
    },
    {
        "id": 72,
        "name": "dark_oak_wood",
        "displayName": "Dark Oak Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 208,
        "minStateId": 207,
        "maxStateId": 209,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            150
        ],
        "boundingBox": "block"
    },
    {
        "id": 73,
        "name": "mangrove_wood",
        "displayName": "Mangrove Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 211,
        "minStateId": 210,
        "maxStateId": 212,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            151
        ],
        "boundingBox": "block"
    },
    {
        "id": 74,
        "name": "stripped_oak_wood",
        "displayName": "Stripped Oak Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 214,
        "minStateId": 213,
        "maxStateId": 215,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            133
        ],
        "boundingBox": "block"
    },
    {
        "id": 75,
        "name": "stripped_spruce_wood",
        "displayName": "Stripped Spruce Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 217,
        "minStateId": 216,
        "maxStateId": 218,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            134
        ],
        "boundingBox": "block"
    },
    {
        "id": 76,
        "name": "stripped_birch_wood",
        "displayName": "Stripped Birch Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 220,
        "minStateId": 219,
        "maxStateId": 221,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            135
        ],
        "boundingBox": "block"
    },
    {
        "id": 77,
        "name": "stripped_jungle_wood",
        "displayName": "Stripped Jungle Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 223,
        "minStateId": 222,
        "maxStateId": 224,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            136
        ],
        "boundingBox": "block"
    },
    {
        "id": 78,
        "name": "stripped_acacia_wood",
        "displayName": "Stripped Acacia Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 226,
        "minStateId": 225,
        "maxStateId": 227,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            137
        ],
        "boundingBox": "block"
    },
    {
        "id": 79,
        "name": "stripped_cherry_wood",
        "displayName": "Stripped Cherry Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 229,
        "minStateId": 228,
        "maxStateId": 230,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            138
        ],
        "boundingBox": "block"
    },
    {
        "id": 80,
        "name": "stripped_dark_oak_wood",
        "displayName": "Stripped Dark Oak Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 232,
        "minStateId": 231,
        "maxStateId": 233,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            139
        ],
        "boundingBox": "block"
    },
    {
        "id": 81,
        "name": "stripped_mangrove_wood",
        "displayName": "Stripped Mangrove Wood",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 235,
        "minStateId": 234,
        "maxStateId": 236,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            140
        ],
        "boundingBox": "block"
    },
    {
        "id": 82,
        "name": "oak_leaves",
        "displayName": "Oak Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 264,
        "minStateId": 237,
        "maxStateId": 264,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 83,
        "name": "spruce_leaves",
        "displayName": "Spruce Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 292,
        "minStateId": 265,
        "maxStateId": 292,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 84,
        "name": "birch_leaves",
        "displayName": "Birch Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 320,
        "minStateId": 293,
        "maxStateId": 320,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 85,
        "name": "jungle_leaves",
        "displayName": "Jungle Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 348,
        "minStateId": 321,
        "maxStateId": 348,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 86,
        "name": "acacia_leaves",
        "displayName": "Acacia Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 376,
        "minStateId": 349,
        "maxStateId": 376,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 87,
        "name": "cherry_leaves",
        "displayName": "Cherry Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 404,
        "minStateId": 377,
        "maxStateId": 404,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 88,
        "name": "dark_oak_leaves",
        "displayName": "Dark Oak Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 432,
        "minStateId": 405,
        "maxStateId": 432,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 89,
        "name": "mangrove_leaves",
        "displayName": "Mangrove Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 460,
        "minStateId": 433,
        "maxStateId": 460,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 90,
        "name": "azalea_leaves",
        "displayName": "Azalea Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 488,
        "minStateId": 461,
        "maxStateId": 488,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 91,
        "name": "flowering_azalea_leaves",
        "displayName": "Flowering Azalea Leaves",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "leaves;mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 516,
        "minStateId": 489,
        "maxStateId": 516,
        "states": [
            {
                "name": "distance",
                "type": "int",
                "num_values": 7,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "persistent",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 92,
        "name": "sponge",
        "displayName": "Sponge",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 517,
        "minStateId": 517,
        "maxStateId": 517,
        "states": [],
        "drops": [
            164
        ],
        "boundingBox": "block"
    },
    {
        "id": 93,
        "name": "wet_sponge",
        "displayName": "Wet Sponge",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 518,
        "minStateId": 518,
        "maxStateId": 518,
        "states": [],
        "drops": [
            165
        ],
        "boundingBox": "block"
    },
    {
        "id": 94,
        "name": "glass",
        "displayName": "Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 519,
        "minStateId": 519,
        "maxStateId": 519,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 95,
        "name": "lapis_ore",
        "displayName": "Lapis Lazuli Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 520,
        "minStateId": 520,
        "maxStateId": 520,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            766
        ],
        "boundingBox": "block"
    },
    {
        "id": 96,
        "name": "deepslate_lapis_ore",
        "displayName": "Deepslate Lapis Lazuli Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 521,
        "minStateId": 521,
        "maxStateId": 521,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            766
        ],
        "boundingBox": "block"
    },
    {
        "id": 97,
        "name": "lapis_block",
        "displayName": "Block of Lapis Lazuli",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 522,
        "minStateId": 522,
        "maxStateId": 522,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            168
        ],
        "boundingBox": "block"
    },
    {
        "id": 98,
        "name": "dispenser",
        "displayName": "Dispenser",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 524,
        "minStateId": 523,
        "maxStateId": 534,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "triggered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            646
        ],
        "boundingBox": "block"
    },
    {
        "id": 99,
        "name": "sandstone",
        "displayName": "Sandstone",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 535,
        "minStateId": 535,
        "maxStateId": 535,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            169
        ],
        "boundingBox": "block"
    },
    {
        "id": 100,
        "name": "chiseled_sandstone",
        "displayName": "Chiseled Sandstone",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 536,
        "minStateId": 536,
        "maxStateId": 536,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            170
        ],
        "boundingBox": "block"
    },
    {
        "id": 101,
        "name": "cut_sandstone",
        "displayName": "Cut Sandstone",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 537,
        "minStateId": 537,
        "maxStateId": 537,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            171
        ],
        "boundingBox": "block"
    },
    {
        "id": 102,
        "name": "note_block",
        "displayName": "Note Block",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 539,
        "minStateId": 538,
        "maxStateId": 1687,
        "states": [
            {
                "name": "instrument",
                "type": "enum",
                "num_values": 23,
                "values": [
                    "harp",
                    "basedrum",
                    "snare",
                    "hat",
                    "bass",
                    "flute",
                    "bell",
                    "guitar",
                    "chime",
                    "xylophone",
                    "iron_xylophone",
                    "cow_bell",
                    "didgeridoo",
                    "bit",
                    "banjo",
                    "pling",
                    "zombie",
                    "skeleton",
                    "creeper",
                    "dragon",
                    "wither_skeleton",
                    "piglin",
                    "custom_head"
                ]
            },
            {
                "name": "note",
                "type": "int",
                "num_values": 25,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            659
        ],
        "boundingBox": "block"
    },
    {
        "id": 103,
        "name": "white_bed",
        "displayName": "White Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1691,
        "minStateId": 1688,
        "maxStateId": 1703,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 104,
        "name": "orange_bed",
        "displayName": "Orange Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1707,
        "minStateId": 1704,
        "maxStateId": 1719,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 105,
        "name": "magenta_bed",
        "displayName": "Magenta Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1723,
        "minStateId": 1720,
        "maxStateId": 1735,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 106,
        "name": "light_blue_bed",
        "displayName": "Light Blue Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1739,
        "minStateId": 1736,
        "maxStateId": 1751,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 107,
        "name": "yellow_bed",
        "displayName": "Yellow Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1755,
        "minStateId": 1752,
        "maxStateId": 1767,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 108,
        "name": "lime_bed",
        "displayName": "Lime Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1771,
        "minStateId": 1768,
        "maxStateId": 1783,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 109,
        "name": "pink_bed",
        "displayName": "Pink Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1787,
        "minStateId": 1784,
        "maxStateId": 1799,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 110,
        "name": "gray_bed",
        "displayName": "Gray Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1803,
        "minStateId": 1800,
        "maxStateId": 1815,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 111,
        "name": "light_gray_bed",
        "displayName": "Light Gray Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1819,
        "minStateId": 1816,
        "maxStateId": 1831,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 112,
        "name": "cyan_bed",
        "displayName": "Cyan Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1835,
        "minStateId": 1832,
        "maxStateId": 1847,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 113,
        "name": "purple_bed",
        "displayName": "Purple Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1851,
        "minStateId": 1848,
        "maxStateId": 1863,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 114,
        "name": "blue_bed",
        "displayName": "Blue Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1867,
        "minStateId": 1864,
        "maxStateId": 1879,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 115,
        "name": "brown_bed",
        "displayName": "Brown Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1883,
        "minStateId": 1880,
        "maxStateId": 1895,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 116,
        "name": "green_bed",
        "displayName": "Green Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1899,
        "minStateId": 1896,
        "maxStateId": 1911,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 117,
        "name": "red_bed",
        "displayName": "Red Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1915,
        "minStateId": 1912,
        "maxStateId": 1927,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 118,
        "name": "black_bed",
        "displayName": "Black Bed",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1931,
        "minStateId": 1928,
        "maxStateId": 1943,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "part",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "head",
                    "foot"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 119,
        "name": "powered_rail",
        "displayName": "Powered Rail",
        "hardness": 0.7,
        "resistance": 0.7,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1957,
        "minStateId": 1944,
        "maxStateId": 1967,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north_south",
                    "east_west",
                    "ascending_east",
                    "ascending_west",
                    "ascending_north",
                    "ascending_south"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            723
        ],
        "boundingBox": "empty"
    },
    {
        "id": 120,
        "name": "detector_rail",
        "displayName": "Detector Rail",
        "hardness": 0.7,
        "resistance": 0.7,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 1981,
        "minStateId": 1968,
        "maxStateId": 1991,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north_south",
                    "east_west",
                    "ascending_east",
                    "ascending_west",
                    "ascending_north",
                    "ascending_south"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            724
        ],
        "boundingBox": "empty"
    },
    {
        "id": 121,
        "name": "sticky_piston",
        "displayName": "Sticky Piston",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 1998,
        "minStateId": 1992,
        "maxStateId": 2003,
        "states": [
            {
                "name": "extended",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            641
        ],
        "boundingBox": "block"
    },
    {
        "id": 122,
        "name": "cobweb",
        "displayName": "Cobweb",
        "hardness": 4.0,
        "resistance": 4.0,
        "stackSize": 64,
        "diggable": true,
        "material": "coweb",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 2004,
        "minStateId": 2004,
        "maxStateId": 2004,
        "states": [],
        "harvestTools": {
            "777": true,
            "782": true,
            "787": true,
            "792": true,
            "797": true,
            "802": true,
            "942": true
        },
        "drops": [
            810
        ],
        "boundingBox": "empty"
    },
    {
        "id": 123,
        "name": "grass",
        "displayName": "Grass",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2005,
        "minStateId": 2005,
        "maxStateId": 2005,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 124,
        "name": "fern",
        "displayName": "Fern",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2006,
        "minStateId": 2006,
        "maxStateId": 2006,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 125,
        "name": "dead_bush",
        "displayName": "Dead Bush",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2007,
        "minStateId": 2007,
        "maxStateId": 2007,
        "states": [],
        "drops": [
            807
        ],
        "boundingBox": "empty"
    },
    {
        "id": 126,
        "name": "seagrass",
        "displayName": "Seagrass",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 2008,
        "minStateId": 2008,
        "maxStateId": 2008,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 127,
        "name": "tall_seagrass",
        "displayName": "Tall Seagrass",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 2010,
        "minStateId": 2009,
        "maxStateId": 2010,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 128,
        "name": "piston",
        "displayName": "Piston",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2017,
        "minStateId": 2011,
        "maxStateId": 2022,
        "states": [
            {
                "name": "extended",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            640
        ],
        "boundingBox": "block"
    },
    {
        "id": 129,
        "name": "piston_head",
        "displayName": "Piston Head",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2025,
        "minStateId": 2023,
        "maxStateId": 2046,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "short",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "type",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "normal",
                    "sticky"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 130,
        "name": "white_wool",
        "displayName": "White Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2047,
        "minStateId": 2047,
        "maxStateId": 2047,
        "states": [],
        "drops": [
            180
        ],
        "boundingBox": "block"
    },
    {
        "id": 131,
        "name": "orange_wool",
        "displayName": "Orange Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2048,
        "minStateId": 2048,
        "maxStateId": 2048,
        "states": [],
        "drops": [
            181
        ],
        "boundingBox": "block"
    },
    {
        "id": 132,
        "name": "magenta_wool",
        "displayName": "Magenta Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2049,
        "minStateId": 2049,
        "maxStateId": 2049,
        "states": [],
        "drops": [
            182
        ],
        "boundingBox": "block"
    },
    {
        "id": 133,
        "name": "light_blue_wool",
        "displayName": "Light Blue Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2050,
        "minStateId": 2050,
        "maxStateId": 2050,
        "states": [],
        "drops": [
            183
        ],
        "boundingBox": "block"
    },
    {
        "id": 134,
        "name": "yellow_wool",
        "displayName": "Yellow Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2051,
        "minStateId": 2051,
        "maxStateId": 2051,
        "states": [],
        "drops": [
            184
        ],
        "boundingBox": "block"
    },
    {
        "id": 135,
        "name": "lime_wool",
        "displayName": "Lime Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2052,
        "minStateId": 2052,
        "maxStateId": 2052,
        "states": [],
        "drops": [
            185
        ],
        "boundingBox": "block"
    },
    {
        "id": 136,
        "name": "pink_wool",
        "displayName": "Pink Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2053,
        "minStateId": 2053,
        "maxStateId": 2053,
        "states": [],
        "drops": [
            186
        ],
        "boundingBox": "block"
    },
    {
        "id": 137,
        "name": "gray_wool",
        "displayName": "Gray Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2054,
        "minStateId": 2054,
        "maxStateId": 2054,
        "states": [],
        "drops": [
            187
        ],
        "boundingBox": "block"
    },
    {
        "id": 138,
        "name": "light_gray_wool",
        "displayName": "Light Gray Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2055,
        "minStateId": 2055,
        "maxStateId": 2055,
        "states": [],
        "drops": [
            188
        ],
        "boundingBox": "block"
    },
    {
        "id": 139,
        "name": "cyan_wool",
        "displayName": "Cyan Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2056,
        "minStateId": 2056,
        "maxStateId": 2056,
        "states": [],
        "drops": [
            189
        ],
        "boundingBox": "block"
    },
    {
        "id": 140,
        "name": "purple_wool",
        "displayName": "Purple Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2057,
        "minStateId": 2057,
        "maxStateId": 2057,
        "states": [],
        "drops": [
            190
        ],
        "boundingBox": "block"
    },
    {
        "id": 141,
        "name": "blue_wool",
        "displayName": "Blue Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2058,
        "minStateId": 2058,
        "maxStateId": 2058,
        "states": [],
        "drops": [
            191
        ],
        "boundingBox": "block"
    },
    {
        "id": 142,
        "name": "brown_wool",
        "displayName": "Brown Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2059,
        "minStateId": 2059,
        "maxStateId": 2059,
        "states": [],
        "drops": [
            192
        ],
        "boundingBox": "block"
    },
    {
        "id": 143,
        "name": "green_wool",
        "displayName": "Green Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2060,
        "minStateId": 2060,
        "maxStateId": 2060,
        "states": [],
        "drops": [
            193
        ],
        "boundingBox": "block"
    },
    {
        "id": 144,
        "name": "red_wool",
        "displayName": "Red Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2061,
        "minStateId": 2061,
        "maxStateId": 2061,
        "states": [],
        "drops": [
            194
        ],
        "boundingBox": "block"
    },
    {
        "id": 145,
        "name": "black_wool",
        "displayName": "Black Wool",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "wool",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2062,
        "minStateId": 2062,
        "maxStateId": 2062,
        "states": [],
        "drops": [
            195
        ],
        "boundingBox": "block"
    },
    {
        "id": 146,
        "name": "moving_piston",
        "displayName": "Moving Piston",
        "hardness": -1.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2063,
        "minStateId": 2063,
        "maxStateId": 2074,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "type",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "normal",
                    "sticky"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 147,
        "name": "dandelion",
        "displayName": "Dandelion",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2075,
        "minStateId": 2075,
        "maxStateId": 2075,
        "states": [],
        "drops": [
            196
        ],
        "boundingBox": "empty"
    },
    {
        "id": 148,
        "name": "torchflower",
        "displayName": "Torchflower",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2076,
        "minStateId": 2076,
        "maxStateId": 2076,
        "states": [],
        "drops": [
            209
        ],
        "boundingBox": "empty"
    },
    {
        "id": 149,
        "name": "poppy",
        "displayName": "Poppy",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2077,
        "minStateId": 2077,
        "maxStateId": 2077,
        "states": [],
        "drops": [
            197
        ],
        "boundingBox": "empty"
    },
    {
        "id": 150,
        "name": "blue_orchid",
        "displayName": "Blue Orchid",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2078,
        "minStateId": 2078,
        "maxStateId": 2078,
        "states": [],
        "drops": [
            198
        ],
        "boundingBox": "empty"
    },
    {
        "id": 151,
        "name": "allium",
        "displayName": "Allium",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2079,
        "minStateId": 2079,
        "maxStateId": 2079,
        "states": [],
        "drops": [
            199
        ],
        "boundingBox": "empty"
    },
    {
        "id": 152,
        "name": "azure_bluet",
        "displayName": "Azure Bluet",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2080,
        "minStateId": 2080,
        "maxStateId": 2080,
        "states": [],
        "drops": [
            200
        ],
        "boundingBox": "empty"
    },
    {
        "id": 153,
        "name": "red_tulip",
        "displayName": "Red Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2081,
        "minStateId": 2081,
        "maxStateId": 2081,
        "states": [],
        "drops": [
            201
        ],
        "boundingBox": "empty"
    },
    {
        "id": 154,
        "name": "orange_tulip",
        "displayName": "Orange Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2082,
        "minStateId": 2082,
        "maxStateId": 2082,
        "states": [],
        "drops": [
            202
        ],
        "boundingBox": "empty"
    },
    {
        "id": 155,
        "name": "white_tulip",
        "displayName": "White Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2083,
        "minStateId": 2083,
        "maxStateId": 2083,
        "states": [],
        "drops": [
            203
        ],
        "boundingBox": "empty"
    },
    {
        "id": 156,
        "name": "pink_tulip",
        "displayName": "Pink Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2084,
        "minStateId": 2084,
        "maxStateId": 2084,
        "states": [],
        "drops": [
            204
        ],
        "boundingBox": "empty"
    },
    {
        "id": 157,
        "name": "oxeye_daisy",
        "displayName": "Oxeye Daisy",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2085,
        "minStateId": 2085,
        "maxStateId": 2085,
        "states": [],
        "drops": [
            205
        ],
        "boundingBox": "empty"
    },
    {
        "id": 158,
        "name": "cornflower",
        "displayName": "Cornflower",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2086,
        "minStateId": 2086,
        "maxStateId": 2086,
        "states": [],
        "drops": [
            206
        ],
        "boundingBox": "empty"
    },
    {
        "id": 159,
        "name": "wither_rose",
        "displayName": "Wither Rose",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2087,
        "minStateId": 2087,
        "maxStateId": 2087,
        "states": [],
        "drops": [
            208
        ],
        "boundingBox": "empty"
    },
    {
        "id": 160,
        "name": "lily_of_the_valley",
        "displayName": "Lily of the Valley",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2088,
        "minStateId": 2088,
        "maxStateId": 2088,
        "states": [],
        "drops": [
            207
        ],
        "boundingBox": "empty"
    },
    {
        "id": 161,
        "name": "brown_mushroom",
        "displayName": "Brown Mushroom",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 1,
        "filterLight": 0,
        "defaultState": 2089,
        "minStateId": 2089,
        "maxStateId": 2089,
        "states": [],
        "drops": [
            212
        ],
        "boundingBox": "empty"
    },
    {
        "id": 162,
        "name": "red_mushroom",
        "displayName": "Red Mushroom",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2090,
        "minStateId": 2090,
        "maxStateId": 2090,
        "states": [],
        "drops": [
            213
        ],
        "boundingBox": "empty"
    },
    {
        "id": 163,
        "name": "gold_block",
        "displayName": "Block of Gold",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2091,
        "minStateId": 2091,
        "maxStateId": 2091,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            76
        ],
        "boundingBox": "block"
    },
    {
        "id": 164,
        "name": "iron_block",
        "displayName": "Block of Iron",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2092,
        "minStateId": 2092,
        "maxStateId": 2092,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            74
        ],
        "boundingBox": "block"
    },
    {
        "id": 165,
        "name": "bricks",
        "displayName": "Bricks",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2093,
        "minStateId": 2093,
        "maxStateId": 2093,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            263
        ],
        "boundingBox": "block"
    },
    {
        "id": 166,
        "name": "tnt",
        "displayName": "TNT",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2095,
        "minStateId": 2094,
        "maxStateId": 2095,
        "states": [
            {
                "name": "unstable",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            657
        ],
        "boundingBox": "block"
    },
    {
        "id": 167,
        "name": "bookshelf",
        "displayName": "Bookshelf",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2096,
        "minStateId": 2096,
        "maxStateId": 2096,
        "states": [],
        "drops": [
            885
        ],
        "boundingBox": "block"
    },
    {
        "id": 168,
        "name": "chiseled_bookshelf",
        "displayName": "Chiseled Bookshelf",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2160,
        "minStateId": 2097,
        "maxStateId": 2352,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "slot_0_occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "slot_1_occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "slot_2_occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "slot_3_occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "slot_4_occupied",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "slot_5_occupied",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 169,
        "name": "mossy_cobblestone",
        "displayName": "Mossy Cobblestone",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2353,
        "minStateId": 2353,
        "maxStateId": 2353,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            267
        ],
        "boundingBox": "block"
    },
    {
        "id": 170,
        "name": "obsidian",
        "displayName": "Obsidian",
        "hardness": 50.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 2354,
        "minStateId": 2354,
        "maxStateId": 2354,
        "states": [],
        "harvestTools": {
            "799": true,
            "804": true
        },
        "drops": [
            268
        ],
        "boundingBox": "block"
    },
    {
        "id": 171,
        "name": "torch",
        "displayName": "Torch",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 14,
        "filterLight": 0,
        "defaultState": 2355,
        "minStateId": 2355,
        "maxStateId": 2355,
        "states": [],
        "drops": [
            269
        ],
        "boundingBox": "empty"
    },
    {
        "id": 172,
        "name": "wall_torch",
        "displayName": "Torch",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 14,
        "filterLight": 0,
        "defaultState": 2356,
        "minStateId": 2356,
        "maxStateId": 2359,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            269
        ],
        "boundingBox": "empty"
    },
    {
        "id": 173,
        "name": "fire",
        "displayName": "Fire",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 0,
        "defaultState": 2391,
        "minStateId": 2360,
        "maxStateId": 2871,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 174,
        "name": "soul_fire",
        "displayName": "Soul Fire",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 10,
        "filterLight": 0,
        "defaultState": 2872,
        "minStateId": 2872,
        "maxStateId": 2872,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 175,
        "name": "spawner",
        "displayName": "Monster Spawner",
        "hardness": 5.0,
        "resistance": 5.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 2873,
        "minStateId": 2873,
        "maxStateId": 2873,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 176,
        "name": "oak_stairs",
        "displayName": "Oak Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2885,
        "minStateId": 2874,
        "maxStateId": 2953,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            361
        ],
        "boundingBox": "block"
    },
    {
        "id": 177,
        "name": "chest",
        "displayName": "Chest",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 2955,
        "minStateId": 2954,
        "maxStateId": 2977,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "single",
                    "left",
                    "right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            277
        ],
        "boundingBox": "block"
    },
    {
        "id": 178,
        "name": "redstone_wire",
        "displayName": "Redstone Wire",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4138,
        "minStateId": 2978,
        "maxStateId": 4273,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "up",
                    "side",
                    "none"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "up",
                    "side",
                    "none"
                ]
            },
            {
                "name": "power",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "up",
                    "side",
                    "none"
                ]
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "up",
                    "side",
                    "none"
                ]
            }
        ],
        "drops": [
            635
        ],
        "boundingBox": "empty"
    },
    {
        "id": 179,
        "name": "diamond_ore",
        "displayName": "Diamond Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 4274,
        "minStateId": 4274,
        "maxStateId": 4274,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            764
        ],
        "boundingBox": "block"
    },
    {
        "id": 180,
        "name": "deepslate_diamond_ore",
        "displayName": "Deepslate Diamond Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 4275,
        "minStateId": 4275,
        "maxStateId": 4275,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            764
        ],
        "boundingBox": "block"
    },
    {
        "id": 181,
        "name": "diamond_block",
        "displayName": "Block of Diamond",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 4276,
        "minStateId": 4276,
        "maxStateId": 4276,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            77
        ],
        "boundingBox": "block"
    },
    {
        "id": 182,
        "name": "crafting_table",
        "displayName": "Crafting Table",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 4277,
        "minStateId": 4277,
        "maxStateId": 4277,
        "states": [],
        "drops": [
            278
        ],
        "boundingBox": "block"
    },
    {
        "id": 183,
        "name": "wheat",
        "displayName": "Wheat Crops",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4278,
        "minStateId": 4278,
        "maxStateId": 4285,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 8,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            }
        ],
        "drops": [
            813
        ],
        "boundingBox": "empty"
    },
    {
        "id": 184,
        "name": "farmland",
        "displayName": "Farmland",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4286,
        "minStateId": 4286,
        "maxStateId": 4293,
        "states": [
            {
                "name": "moisture",
                "type": "int",
                "num_values": 8,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            }
        ],
        "drops": [
            15
        ],
        "boundingBox": "block"
    },
    {
        "id": 185,
        "name": "furnace",
        "displayName": "Furnace",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 4295,
        "minStateId": 4294,
        "maxStateId": 4301,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            280
        ],
        "boundingBox": "block"
    },
    {
        "id": 186,
        "name": "oak_sign",
        "displayName": "Oak Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4303,
        "minStateId": 4302,
        "maxStateId": 4333,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            846
        ],
        "boundingBox": "empty"
    },
    {
        "id": 187,
        "name": "spruce_sign",
        "displayName": "Spruce Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4335,
        "minStateId": 4334,
        "maxStateId": 4365,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            847
        ],
        "boundingBox": "empty"
    },
    {
        "id": 188,
        "name": "birch_sign",
        "displayName": "Birch Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4367,
        "minStateId": 4366,
        "maxStateId": 4397,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            848
        ],
        "boundingBox": "empty"
    },
    {
        "id": 189,
        "name": "acacia_sign",
        "displayName": "Acacia Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4399,
        "minStateId": 4398,
        "maxStateId": 4429,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            850
        ],
        "boundingBox": "empty"
    },
    {
        "id": 190,
        "name": "cherry_sign",
        "displayName": "Cherry Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4431,
        "minStateId": 4430,
        "maxStateId": 4461,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            851
        ],
        "boundingBox": "empty"
    },
    {
        "id": 191,
        "name": "jungle_sign",
        "displayName": "Jungle Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4463,
        "minStateId": 4462,
        "maxStateId": 4493,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            849
        ],
        "boundingBox": "empty"
    },
    {
        "id": 192,
        "name": "dark_oak_sign",
        "displayName": "Dark Oak Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4495,
        "minStateId": 4494,
        "maxStateId": 4525,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            852
        ],
        "boundingBox": "empty"
    },
    {
        "id": 193,
        "name": "mangrove_sign",
        "displayName": "Mangrove Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4527,
        "minStateId": 4526,
        "maxStateId": 4557,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            853
        ],
        "boundingBox": "empty"
    },
    {
        "id": 194,
        "name": "bamboo_sign",
        "displayName": "Bamboo Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4559,
        "minStateId": 4558,
        "maxStateId": 4589,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            854
        ],
        "boundingBox": "empty"
    },
    {
        "id": 195,
        "name": "oak_door",
        "displayName": "Oak Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4601,
        "minStateId": 4590,
        "maxStateId": 4653,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            689
        ],
        "boundingBox": "block"
    },
    {
        "id": 196,
        "name": "ladder",
        "displayName": "Ladder",
        "hardness": 0.4,
        "resistance": 0.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4655,
        "minStateId": 4654,
        "maxStateId": 4661,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            281
        ],
        "boundingBox": "block"
    },
    {
        "id": 197,
        "name": "rail",
        "displayName": "Rail",
        "hardness": 0.7,
        "resistance": 0.7,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4663,
        "minStateId": 4662,
        "maxStateId": 4681,
        "states": [
            {
                "name": "shape",
                "type": "enum",
                "num_values": 10,
                "values": [
                    "north_south",
                    "east_west",
                    "ascending_east",
                    "ascending_west",
                    "ascending_north",
                    "ascending_south",
                    "south_east",
                    "south_west",
                    "north_west",
                    "north_east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            725
        ],
        "boundingBox": "empty"
    },
    {
        "id": 198,
        "name": "cobblestone_stairs",
        "displayName": "Cobblestone Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4693,
        "minStateId": 4682,
        "maxStateId": 4761,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            282
        ],
        "boundingBox": "block"
    },
    {
        "id": 199,
        "name": "oak_wall_sign",
        "displayName": "Oak Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4763,
        "minStateId": 4762,
        "maxStateId": 4769,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            846
        ],
        "boundingBox": "empty"
    },
    {
        "id": 200,
        "name": "spruce_wall_sign",
        "displayName": "Spruce Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4771,
        "minStateId": 4770,
        "maxStateId": 4777,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            847
        ],
        "boundingBox": "empty"
    },
    {
        "id": 201,
        "name": "birch_wall_sign",
        "displayName": "Birch Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4779,
        "minStateId": 4778,
        "maxStateId": 4785,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            848
        ],
        "boundingBox": "empty"
    },
    {
        "id": 202,
        "name": "acacia_wall_sign",
        "displayName": "Acacia Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4787,
        "minStateId": 4786,
        "maxStateId": 4793,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            850
        ],
        "boundingBox": "empty"
    },
    {
        "id": 203,
        "name": "cherry_wall_sign",
        "displayName": "Cherry Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4795,
        "minStateId": 4794,
        "maxStateId": 4801,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            851
        ],
        "boundingBox": "empty"
    },
    {
        "id": 204,
        "name": "jungle_wall_sign",
        "displayName": "Jungle Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4803,
        "minStateId": 4802,
        "maxStateId": 4809,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            849
        ],
        "boundingBox": "empty"
    },
    {
        "id": 205,
        "name": "dark_oak_wall_sign",
        "displayName": "Dark Oak Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4811,
        "minStateId": 4810,
        "maxStateId": 4817,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            852
        ],
        "boundingBox": "empty"
    },
    {
        "id": 206,
        "name": "mangrove_wall_sign",
        "displayName": "Mangrove Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4819,
        "minStateId": 4818,
        "maxStateId": 4825,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            853
        ],
        "boundingBox": "empty"
    },
    {
        "id": 207,
        "name": "bamboo_wall_sign",
        "displayName": "Bamboo Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4827,
        "minStateId": 4826,
        "maxStateId": 4833,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            854
        ],
        "boundingBox": "empty"
    },
    {
        "id": 208,
        "name": "oak_hanging_sign",
        "displayName": "Oak Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4867,
        "minStateId": 4834,
        "maxStateId": 4897,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            857
        ],
        "boundingBox": "empty"
    },
    {
        "id": 209,
        "name": "spruce_hanging_sign",
        "displayName": "Spruce Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4931,
        "minStateId": 4898,
        "maxStateId": 4961,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            858
        ],
        "boundingBox": "empty"
    },
    {
        "id": 210,
        "name": "birch_hanging_sign",
        "displayName": "Birch Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 4995,
        "minStateId": 4962,
        "maxStateId": 5025,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            859
        ],
        "boundingBox": "empty"
    },
    {
        "id": 211,
        "name": "acacia_hanging_sign",
        "displayName": "Acacia Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5059,
        "minStateId": 5026,
        "maxStateId": 5089,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            861
        ],
        "boundingBox": "empty"
    },
    {
        "id": 212,
        "name": "cherry_hanging_sign",
        "displayName": "Cherry Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5123,
        "minStateId": 5090,
        "maxStateId": 5153,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            862
        ],
        "boundingBox": "empty"
    },
    {
        "id": 213,
        "name": "jungle_hanging_sign",
        "displayName": "Jungle Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5187,
        "minStateId": 5154,
        "maxStateId": 5217,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            860
        ],
        "boundingBox": "empty"
    },
    {
        "id": 214,
        "name": "dark_oak_hanging_sign",
        "displayName": "Dark Oak Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5251,
        "minStateId": 5218,
        "maxStateId": 5281,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            863
        ],
        "boundingBox": "empty"
    },
    {
        "id": 215,
        "name": "crimson_hanging_sign",
        "displayName": "Crimson Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5315,
        "minStateId": 5282,
        "maxStateId": 5345,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            866
        ],
        "boundingBox": "empty"
    },
    {
        "id": 216,
        "name": "warped_hanging_sign",
        "displayName": "Warped Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5379,
        "minStateId": 5346,
        "maxStateId": 5409,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            867
        ],
        "boundingBox": "empty"
    },
    {
        "id": 217,
        "name": "mangrove_hanging_sign",
        "displayName": "Mangrove Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5443,
        "minStateId": 5410,
        "maxStateId": 5473,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            864
        ],
        "boundingBox": "empty"
    },
    {
        "id": 218,
        "name": "bamboo_hanging_sign",
        "displayName": "Bamboo Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5507,
        "minStateId": 5474,
        "maxStateId": 5537,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            865
        ],
        "boundingBox": "empty"
    },
    {
        "id": 219,
        "name": "oak_wall_hanging_sign",
        "displayName": "Oak Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5539,
        "minStateId": 5538,
        "maxStateId": 5545,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            857
        ],
        "boundingBox": "block"
    },
    {
        "id": 220,
        "name": "spruce_wall_hanging_sign",
        "displayName": "Spruce Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5547,
        "minStateId": 5546,
        "maxStateId": 5553,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            858
        ],
        "boundingBox": "block"
    },
    {
        "id": 221,
        "name": "birch_wall_hanging_sign",
        "displayName": "Birch Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5555,
        "minStateId": 5554,
        "maxStateId": 5561,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            859
        ],
        "boundingBox": "block"
    },
    {
        "id": 222,
        "name": "acacia_wall_hanging_sign",
        "displayName": "Acacia Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5563,
        "minStateId": 5562,
        "maxStateId": 5569,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            861
        ],
        "boundingBox": "block"
    },
    {
        "id": 223,
        "name": "cherry_wall_hanging_sign",
        "displayName": "Cherry Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5571,
        "minStateId": 5570,
        "maxStateId": 5577,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            862
        ],
        "boundingBox": "block"
    },
    {
        "id": 224,
        "name": "jungle_wall_hanging_sign",
        "displayName": "Jungle Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5579,
        "minStateId": 5578,
        "maxStateId": 5585,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            860
        ],
        "boundingBox": "block"
    },
    {
        "id": 225,
        "name": "dark_oak_wall_hanging_sign",
        "displayName": "Dark Oak Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5587,
        "minStateId": 5586,
        "maxStateId": 5593,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            863
        ],
        "boundingBox": "block"
    },
    {
        "id": 226,
        "name": "mangrove_wall_hanging_sign",
        "displayName": "Mangrove Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5595,
        "minStateId": 5594,
        "maxStateId": 5601,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            864
        ],
        "boundingBox": "block"
    },
    {
        "id": 227,
        "name": "crimson_wall_hanging_sign",
        "displayName": "Crimson Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5603,
        "minStateId": 5602,
        "maxStateId": 5609,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            866
        ],
        "boundingBox": "block"
    },
    {
        "id": 228,
        "name": "warped_wall_hanging_sign",
        "displayName": "Warped Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5611,
        "minStateId": 5610,
        "maxStateId": 5617,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            867
        ],
        "boundingBox": "block"
    },
    {
        "id": 229,
        "name": "bamboo_wall_hanging_sign",
        "displayName": "Bamboo Hanging Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5619,
        "minStateId": 5618,
        "maxStateId": 5625,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            865
        ],
        "boundingBox": "block"
    },
    {
        "id": 230,
        "name": "lever",
        "displayName": "Lever",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5635,
        "minStateId": 5626,
        "maxStateId": 5649,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            650
        ],
        "boundingBox": "empty"
    },
    {
        "id": 231,
        "name": "stone_pressure_plate",
        "displayName": "Stone Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5651,
        "minStateId": 5650,
        "maxStateId": 5651,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            673
        ],
        "boundingBox": "empty"
    },
    {
        "id": 232,
        "name": "iron_door",
        "displayName": "Iron Door",
        "hardness": 5.0,
        "resistance": 5.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5663,
        "minStateId": 5652,
        "maxStateId": 5715,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            688
        ],
        "boundingBox": "block"
    },
    {
        "id": 233,
        "name": "oak_pressure_plate",
        "displayName": "Oak Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5717,
        "minStateId": 5716,
        "maxStateId": 5717,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            677
        ],
        "boundingBox": "empty"
    },
    {
        "id": 234,
        "name": "spruce_pressure_plate",
        "displayName": "Spruce Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5719,
        "minStateId": 5718,
        "maxStateId": 5719,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            678
        ],
        "boundingBox": "empty"
    },
    {
        "id": 235,
        "name": "birch_pressure_plate",
        "displayName": "Birch Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5721,
        "minStateId": 5720,
        "maxStateId": 5721,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            679
        ],
        "boundingBox": "empty"
    },
    {
        "id": 236,
        "name": "jungle_pressure_plate",
        "displayName": "Jungle Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5723,
        "minStateId": 5722,
        "maxStateId": 5723,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            680
        ],
        "boundingBox": "empty"
    },
    {
        "id": 237,
        "name": "acacia_pressure_plate",
        "displayName": "Acacia Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5725,
        "minStateId": 5724,
        "maxStateId": 5725,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            681
        ],
        "boundingBox": "empty"
    },
    {
        "id": 238,
        "name": "cherry_pressure_plate",
        "displayName": "Cherry Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5727,
        "minStateId": 5726,
        "maxStateId": 5727,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            682
        ],
        "boundingBox": "empty"
    },
    {
        "id": 239,
        "name": "dark_oak_pressure_plate",
        "displayName": "Dark Oak Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5729,
        "minStateId": 5728,
        "maxStateId": 5729,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            683
        ],
        "boundingBox": "empty"
    },
    {
        "id": 240,
        "name": "mangrove_pressure_plate",
        "displayName": "Mangrove Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5731,
        "minStateId": 5730,
        "maxStateId": 5731,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            684
        ],
        "boundingBox": "empty"
    },
    {
        "id": 241,
        "name": "bamboo_pressure_plate",
        "displayName": "Bamboo Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5733,
        "minStateId": 5732,
        "maxStateId": 5733,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            685
        ],
        "boundingBox": "empty"
    },
    {
        "id": 242,
        "name": "redstone_ore",
        "displayName": "Redstone Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5735,
        "minStateId": 5734,
        "maxStateId": 5735,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            635
        ],
        "boundingBox": "block"
    },
    {
        "id": 243,
        "name": "deepslate_redstone_ore",
        "displayName": "Deepslate Redstone Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5737,
        "minStateId": 5736,
        "maxStateId": 5737,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            635
        ],
        "boundingBox": "block"
    },
    {
        "id": 244,
        "name": "redstone_torch",
        "displayName": "Redstone Torch",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 7,
        "filterLight": 0,
        "defaultState": 5738,
        "minStateId": 5738,
        "maxStateId": 5739,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            636
        ],
        "boundingBox": "empty"
    },
    {
        "id": 245,
        "name": "redstone_wall_torch",
        "displayName": "Redstone Torch",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 7,
        "filterLight": 0,
        "defaultState": 5740,
        "minStateId": 5740,
        "maxStateId": 5747,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            636
        ],
        "boundingBox": "empty"
    },
    {
        "id": 246,
        "name": "stone_button",
        "displayName": "Stone Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5757,
        "minStateId": 5748,
        "maxStateId": 5771,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            660
        ],
        "boundingBox": "empty"
    },
    {
        "id": 247,
        "name": "snow",
        "displayName": "Snow",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5772,
        "minStateId": 5772,
        "maxStateId": 5779,
        "states": [
            {
                "name": "layers",
                "type": "int",
                "num_values": 8,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8"
                ]
            }
        ],
        "harvestTools": {
            "778": true,
            "783": true,
            "788": true,
            "793": true,
            "798": true,
            "803": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 248,
        "name": "ice",
        "displayName": "Ice",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 5780,
        "minStateId": 5780,
        "maxStateId": 5780,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 249,
        "name": "snow_block",
        "displayName": "Snow Block",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5781,
        "minStateId": 5781,
        "maxStateId": 5781,
        "states": [],
        "harvestTools": {
            "778": true,
            "783": true,
            "788": true,
            "793": true,
            "798": true,
            "803": true
        },
        "drops": [
            872
        ],
        "boundingBox": "block"
    },
    {
        "id": 250,
        "name": "cactus",
        "displayName": "Cactus",
        "hardness": 0.4,
        "resistance": 0.4,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5782,
        "minStateId": 5782,
        "maxStateId": 5797,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            286
        ],
        "boundingBox": "block"
    },
    {
        "id": 251,
        "name": "clay",
        "displayName": "Clay",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5798,
        "minStateId": 5798,
        "maxStateId": 5798,
        "states": [],
        "drops": [
            882
        ],
        "boundingBox": "block"
    },
    {
        "id": 252,
        "name": "sugar_cane",
        "displayName": "Sugar Cane",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5799,
        "minStateId": 5799,
        "maxStateId": 5814,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            221
        ],
        "boundingBox": "empty"
    },
    {
        "id": 253,
        "name": "jukebox",
        "displayName": "Jukebox",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5816,
        "minStateId": 5815,
        "maxStateId": 5816,
        "states": [
            {
                "name": "has_record",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            288
        ],
        "boundingBox": "block"
    },
    {
        "id": 254,
        "name": "oak_fence",
        "displayName": "Oak Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5848,
        "minStateId": 5817,
        "maxStateId": 5848,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            289
        ],
        "boundingBox": "block"
    },
    {
        "id": 255,
        "name": "pumpkin",
        "displayName": "Pumpkin",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "gourd;mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5849,
        "minStateId": 5849,
        "maxStateId": 5849,
        "states": [],
        "drops": [
            300
        ],
        "boundingBox": "block"
    },
    {
        "id": 256,
        "name": "netherrack",
        "displayName": "Netherrack",
        "hardness": 0.4,
        "resistance": 0.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5850,
        "minStateId": 5850,
        "maxStateId": 5850,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            303
        ],
        "boundingBox": "block"
    },
    {
        "id": 257,
        "name": "soul_sand",
        "displayName": "Soul Sand",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5851,
        "minStateId": 5851,
        "maxStateId": 5851,
        "states": [],
        "drops": [
            304
        ],
        "boundingBox": "block"
    },
    {
        "id": 258,
        "name": "soul_soil",
        "displayName": "Soul Soil",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5852,
        "minStateId": 5852,
        "maxStateId": 5852,
        "states": [],
        "drops": [
            305
        ],
        "boundingBox": "block"
    },
    {
        "id": 259,
        "name": "basalt",
        "displayName": "Basalt",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5854,
        "minStateId": 5853,
        "maxStateId": 5855,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            306
        ],
        "boundingBox": "block"
    },
    {
        "id": 260,
        "name": "polished_basalt",
        "displayName": "Polished Basalt",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5857,
        "minStateId": 5856,
        "maxStateId": 5858,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            307
        ],
        "boundingBox": "block"
    },
    {
        "id": 261,
        "name": "soul_torch",
        "displayName": "Soul Torch",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 10,
        "filterLight": 0,
        "defaultState": 5859,
        "minStateId": 5859,
        "maxStateId": 5859,
        "states": [],
        "drops": [
            309
        ],
        "boundingBox": "empty"
    },
    {
        "id": 262,
        "name": "soul_wall_torch",
        "displayName": "Soul Torch",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 10,
        "filterLight": 0,
        "defaultState": 5860,
        "minStateId": 5860,
        "maxStateId": 5863,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            309
        ],
        "boundingBox": "empty"
    },
    {
        "id": 263,
        "name": "glowstone",
        "displayName": "Glowstone",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 15,
        "filterLight": 15,
        "defaultState": 5864,
        "minStateId": 5864,
        "maxStateId": 5864,
        "states": [],
        "drops": [
            894
        ],
        "boundingBox": "block"
    },
    {
        "id": 264,
        "name": "nether_portal",
        "displayName": "Nether Portal",
        "hardness": -1.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 11,
        "filterLight": 0,
        "defaultState": 5865,
        "minStateId": 5865,
        "maxStateId": 5866,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "x",
                    "z"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 265,
        "name": "carved_pumpkin",
        "displayName": "Carved Pumpkin",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 5867,
        "minStateId": 5867,
        "maxStateId": 5870,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            301
        ],
        "boundingBox": "block"
    },
    {
        "id": 266,
        "name": "jack_o_lantern",
        "displayName": "Jack o'Lantern",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "gourd;mineable/axe",
        "transparent": false,
        "emitLight": 15,
        "filterLight": 15,
        "defaultState": 5871,
        "minStateId": 5871,
        "maxStateId": 5874,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            302
        ],
        "boundingBox": "block"
    },
    {
        "id": 267,
        "name": "cake",
        "displayName": "Cake",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5875,
        "minStateId": 5875,
        "maxStateId": 5881,
        "states": [
            {
                "name": "bites",
                "type": "int",
                "num_values": 7,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 268,
        "name": "repeater",
        "displayName": "Redstone Repeater",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5885,
        "minStateId": 5882,
        "maxStateId": 5945,
        "states": [
            {
                "name": "delay",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "locked",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            638
        ],
        "boundingBox": "block"
    },
    {
        "id": 269,
        "name": "white_stained_glass",
        "displayName": "White Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5946,
        "minStateId": 5946,
        "maxStateId": 5946,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 270,
        "name": "orange_stained_glass",
        "displayName": "Orange Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5947,
        "minStateId": 5947,
        "maxStateId": 5947,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 271,
        "name": "magenta_stained_glass",
        "displayName": "Magenta Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5948,
        "minStateId": 5948,
        "maxStateId": 5948,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 272,
        "name": "light_blue_stained_glass",
        "displayName": "Light Blue Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5949,
        "minStateId": 5949,
        "maxStateId": 5949,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 273,
        "name": "yellow_stained_glass",
        "displayName": "Yellow Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5950,
        "minStateId": 5950,
        "maxStateId": 5950,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 274,
        "name": "lime_stained_glass",
        "displayName": "Lime Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5951,
        "minStateId": 5951,
        "maxStateId": 5951,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 275,
        "name": "pink_stained_glass",
        "displayName": "Pink Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5952,
        "minStateId": 5952,
        "maxStateId": 5952,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 276,
        "name": "gray_stained_glass",
        "displayName": "Gray Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5953,
        "minStateId": 5953,
        "maxStateId": 5953,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 277,
        "name": "light_gray_stained_glass",
        "displayName": "Light Gray Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5954,
        "minStateId": 5954,
        "maxStateId": 5954,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 278,
        "name": "cyan_stained_glass",
        "displayName": "Cyan Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5955,
        "minStateId": 5955,
        "maxStateId": 5955,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 279,
        "name": "purple_stained_glass",
        "displayName": "Purple Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5956,
        "minStateId": 5956,
        "maxStateId": 5956,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 280,
        "name": "blue_stained_glass",
        "displayName": "Blue Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5957,
        "minStateId": 5957,
        "maxStateId": 5957,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 281,
        "name": "brown_stained_glass",
        "displayName": "Brown Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5958,
        "minStateId": 5958,
        "maxStateId": 5958,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 282,
        "name": "green_stained_glass",
        "displayName": "Green Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5959,
        "minStateId": 5959,
        "maxStateId": 5959,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 283,
        "name": "red_stained_glass",
        "displayName": "Red Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5960,
        "minStateId": 5960,
        "maxStateId": 5960,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 284,
        "name": "black_stained_glass",
        "displayName": "Black Stained Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5961,
        "minStateId": 5961,
        "maxStateId": 5961,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 285,
        "name": "oak_trapdoor",
        "displayName": "Oak Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 5977,
        "minStateId": 5962,
        "maxStateId": 6025,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            701
        ],
        "boundingBox": "block"
    },
    {
        "id": 286,
        "name": "spruce_trapdoor",
        "displayName": "Spruce Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6041,
        "minStateId": 6026,
        "maxStateId": 6089,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            702
        ],
        "boundingBox": "block"
    },
    {
        "id": 287,
        "name": "birch_trapdoor",
        "displayName": "Birch Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6105,
        "minStateId": 6090,
        "maxStateId": 6153,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            703
        ],
        "boundingBox": "block"
    },
    {
        "id": 288,
        "name": "jungle_trapdoor",
        "displayName": "Jungle Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6169,
        "minStateId": 6154,
        "maxStateId": 6217,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            704
        ],
        "boundingBox": "block"
    },
    {
        "id": 289,
        "name": "acacia_trapdoor",
        "displayName": "Acacia Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6233,
        "minStateId": 6218,
        "maxStateId": 6281,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            705
        ],
        "boundingBox": "block"
    },
    {
        "id": 290,
        "name": "cherry_trapdoor",
        "displayName": "Cherry Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6297,
        "minStateId": 6282,
        "maxStateId": 6345,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            706
        ],
        "boundingBox": "block"
    },
    {
        "id": 291,
        "name": "dark_oak_trapdoor",
        "displayName": "Dark Oak Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6361,
        "minStateId": 6346,
        "maxStateId": 6409,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            707
        ],
        "boundingBox": "block"
    },
    {
        "id": 292,
        "name": "mangrove_trapdoor",
        "displayName": "Mangrove Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6425,
        "minStateId": 6410,
        "maxStateId": 6473,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            708
        ],
        "boundingBox": "block"
    },
    {
        "id": 293,
        "name": "bamboo_trapdoor",
        "displayName": "Bamboo Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6489,
        "minStateId": 6474,
        "maxStateId": 6537,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            709
        ],
        "boundingBox": "block"
    },
    {
        "id": 294,
        "name": "stone_bricks",
        "displayName": "Stone Bricks",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6538,
        "minStateId": 6538,
        "maxStateId": 6538,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            318
        ],
        "boundingBox": "block"
    },
    {
        "id": 295,
        "name": "mossy_stone_bricks",
        "displayName": "Mossy Stone Bricks",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6539,
        "minStateId": 6539,
        "maxStateId": 6539,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            319
        ],
        "boundingBox": "block"
    },
    {
        "id": 296,
        "name": "cracked_stone_bricks",
        "displayName": "Cracked Stone Bricks",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6540,
        "minStateId": 6540,
        "maxStateId": 6540,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            320
        ],
        "boundingBox": "block"
    },
    {
        "id": 297,
        "name": "chiseled_stone_bricks",
        "displayName": "Chiseled Stone Bricks",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6541,
        "minStateId": 6541,
        "maxStateId": 6541,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            321
        ],
        "boundingBox": "block"
    },
    {
        "id": 298,
        "name": "packed_mud",
        "displayName": "Packed Mud",
        "hardness": 1.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6542,
        "minStateId": 6542,
        "maxStateId": 6542,
        "states": [],
        "drops": [
            322
        ],
        "boundingBox": "block"
    },
    {
        "id": 299,
        "name": "mud_bricks",
        "displayName": "Mud Bricks",
        "hardness": 1.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6543,
        "minStateId": 6543,
        "maxStateId": 6543,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            323
        ],
        "boundingBox": "block"
    },
    {
        "id": 300,
        "name": "infested_stone",
        "displayName": "Infested Stone",
        "hardness": 0.75,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6544,
        "minStateId": 6544,
        "maxStateId": 6544,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 301,
        "name": "infested_cobblestone",
        "displayName": "Infested Cobblestone",
        "hardness": 1.0,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6545,
        "minStateId": 6545,
        "maxStateId": 6545,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 302,
        "name": "infested_stone_bricks",
        "displayName": "Infested Stone Bricks",
        "hardness": 0.75,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6546,
        "minStateId": 6546,
        "maxStateId": 6546,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 303,
        "name": "infested_mossy_stone_bricks",
        "displayName": "Infested Mossy Stone Bricks",
        "hardness": 0.75,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6547,
        "minStateId": 6547,
        "maxStateId": 6547,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 304,
        "name": "infested_cracked_stone_bricks",
        "displayName": "Infested Cracked Stone Bricks",
        "hardness": 0.75,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6548,
        "minStateId": 6548,
        "maxStateId": 6548,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 305,
        "name": "infested_chiseled_stone_bricks",
        "displayName": "Infested Chiseled Stone Bricks",
        "hardness": 0.75,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6549,
        "minStateId": 6549,
        "maxStateId": 6549,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 306,
        "name": "brown_mushroom_block",
        "displayName": "Brown Mushroom Block",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6550,
        "minStateId": 6550,
        "maxStateId": 6613,
        "states": [
            {
                "name": "down",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            0
        ],
        "boundingBox": "block"
    },
    {
        "id": 307,
        "name": "red_mushroom_block",
        "displayName": "Red Mushroom Block",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6614,
        "minStateId": 6614,
        "maxStateId": 6677,
        "states": [
            {
                "name": "down",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            0
        ],
        "boundingBox": "block"
    },
    {
        "id": 308,
        "name": "mushroom_stem",
        "displayName": "Mushroom Stem",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6678,
        "minStateId": 6678,
        "maxStateId": 6741,
        "states": [
            {
                "name": "down",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 309,
        "name": "iron_bars",
        "displayName": "Iron Bars",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6773,
        "minStateId": 6742,
        "maxStateId": 6773,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            333
        ],
        "boundingBox": "block"
    },
    {
        "id": 310,
        "name": "chain",
        "displayName": "Chain",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6777,
        "minStateId": 6774,
        "maxStateId": 6779,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            334
        ],
        "boundingBox": "block"
    },
    {
        "id": 311,
        "name": "glass_pane",
        "displayName": "Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6811,
        "minStateId": 6780,
        "maxStateId": 6811,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 312,
        "name": "melon",
        "displayName": "Melon",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "gourd;mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 6812,
        "minStateId": 6812,
        "maxStateId": 6812,
        "states": [],
        "drops": [
            943
        ],
        "boundingBox": "block"
    },
    {
        "id": 313,
        "name": "attached_pumpkin_stem",
        "displayName": "Attached Pumpkin Stem",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6813,
        "minStateId": 6813,
        "maxStateId": 6816,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            945
        ],
        "boundingBox": "empty"
    },
    {
        "id": 314,
        "name": "attached_melon_stem",
        "displayName": "Attached Melon Stem",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6817,
        "minStateId": 6817,
        "maxStateId": 6820,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            946
        ],
        "boundingBox": "empty"
    },
    {
        "id": 315,
        "name": "pumpkin_stem",
        "displayName": "Pumpkin Stem",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6821,
        "minStateId": 6821,
        "maxStateId": 6828,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 8,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            }
        ],
        "drops": [
            0
        ],
        "boundingBox": "empty"
    },
    {
        "id": 316,
        "name": "melon_stem",
        "displayName": "Melon Stem",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6829,
        "minStateId": 6829,
        "maxStateId": 6836,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 8,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            }
        ],
        "drops": [
            0
        ],
        "boundingBox": "empty"
    },
    {
        "id": 317,
        "name": "vine",
        "displayName": "Vines",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "vine_or_glow_lichen;plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6868,
        "minStateId": 6837,
        "maxStateId": 6868,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 318,
        "name": "glow_lichen",
        "displayName": "Glow Lichen",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "vine_or_glow_lichen;plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 6996,
        "minStateId": 6869,
        "maxStateId": 6996,
        "states": [
            {
                "name": "down",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 319,
        "name": "oak_fence_gate",
        "displayName": "Oak Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7004,
        "minStateId": 6997,
        "maxStateId": 7028,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            712
        ],
        "boundingBox": "block"
    },
    {
        "id": 320,
        "name": "brick_stairs",
        "displayName": "Brick Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7040,
        "minStateId": 7029,
        "maxStateId": 7108,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            339
        ],
        "boundingBox": "block"
    },
    {
        "id": 321,
        "name": "stone_brick_stairs",
        "displayName": "Stone Brick Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7120,
        "minStateId": 7109,
        "maxStateId": 7188,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            340
        ],
        "boundingBox": "block"
    },
    {
        "id": 322,
        "name": "mud_brick_stairs",
        "displayName": "Mud Brick Stairs",
        "hardness": 1.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7200,
        "minStateId": 7189,
        "maxStateId": 7268,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            341
        ],
        "boundingBox": "block"
    },
    {
        "id": 323,
        "name": "mycelium",
        "displayName": "Mycelium",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7270,
        "minStateId": 7269,
        "maxStateId": 7270,
        "states": [
            {
                "name": "snowy",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            15
        ],
        "boundingBox": "block"
    },
    {
        "id": 324,
        "name": "lily_pad",
        "displayName": "Lily Pad",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7271,
        "minStateId": 7271,
        "maxStateId": 7271,
        "states": [],
        "drops": [
            343
        ],
        "boundingBox": "block"
    },
    {
        "id": 325,
        "name": "nether_bricks",
        "displayName": "Nether Bricks",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7272,
        "minStateId": 7272,
        "maxStateId": 7272,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            344
        ],
        "boundingBox": "block"
    },
    {
        "id": 326,
        "name": "nether_brick_fence",
        "displayName": "Nether Brick Fence",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7304,
        "minStateId": 7273,
        "maxStateId": 7304,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            347
        ],
        "boundingBox": "block"
    },
    {
        "id": 327,
        "name": "nether_brick_stairs",
        "displayName": "Nether Brick Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7316,
        "minStateId": 7305,
        "maxStateId": 7384,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            348
        ],
        "boundingBox": "block"
    },
    {
        "id": 328,
        "name": "nether_wart",
        "displayName": "Nether Wart",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7385,
        "minStateId": 7385,
        "maxStateId": 7388,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 4,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "drops": [
            956
        ],
        "boundingBox": "empty"
    },
    {
        "id": 329,
        "name": "enchanting_table",
        "displayName": "Enchanting Table",
        "hardness": 5.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 7,
        "filterLight": 0,
        "defaultState": 7389,
        "minStateId": 7389,
        "maxStateId": 7389,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            353
        ],
        "boundingBox": "block"
    },
    {
        "id": 330,
        "name": "brewing_stand",
        "displayName": "Brewing Stand",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 1,
        "filterLight": 0,
        "defaultState": 7397,
        "minStateId": 7390,
        "maxStateId": 7397,
        "states": [
            {
                "name": "has_bottle_0",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "has_bottle_1",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "has_bottle_2",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            963
        ],
        "boundingBox": "block"
    },
    {
        "id": 331,
        "name": "cauldron",
        "displayName": "Cauldron",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7398,
        "minStateId": 7398,
        "maxStateId": 7398,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            964
        ],
        "boundingBox": "block"
    },
    {
        "id": 332,
        "name": "water_cauldron",
        "displayName": "Water Cauldron",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7399,
        "minStateId": 7399,
        "maxStateId": 7401,
        "states": [
            {
                "name": "level",
                "type": "int",
                "num_values": 3,
                "values": [
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            964
        ],
        "boundingBox": "block"
    },
    {
        "id": 333,
        "name": "lava_cauldron",
        "displayName": "Lava Cauldron",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 0,
        "defaultState": 7402,
        "minStateId": 7402,
        "maxStateId": 7402,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            964
        ],
        "boundingBox": "block"
    },
    {
        "id": 334,
        "name": "powder_snow_cauldron",
        "displayName": "Powder Snow Cauldron",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7403,
        "minStateId": 7403,
        "maxStateId": 7405,
        "states": [
            {
                "name": "level",
                "type": "int",
                "num_values": 3,
                "values": [
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            964
        ],
        "boundingBox": "block"
    },
    {
        "id": 335,
        "name": "end_portal",
        "displayName": "End Portal",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 0,
        "defaultState": 7406,
        "minStateId": 7406,
        "maxStateId": 7406,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 336,
        "name": "end_portal_frame",
        "displayName": "End Portal Frame",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": false,
        "emitLight": 1,
        "filterLight": 0,
        "defaultState": 7411,
        "minStateId": 7407,
        "maxStateId": 7414,
        "states": [
            {
                "name": "eye",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 337,
        "name": "end_stone",
        "displayName": "End Stone",
        "hardness": 3.0,
        "resistance": 9.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7415,
        "minStateId": 7415,
        "maxStateId": 7415,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            355
        ],
        "boundingBox": "block"
    },
    {
        "id": 338,
        "name": "dragon_egg",
        "displayName": "Dragon Egg",
        "hardness": 3.0,
        "resistance": 9.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 1,
        "filterLight": 0,
        "defaultState": 7416,
        "minStateId": 7416,
        "maxStateId": 7416,
        "states": [],
        "drops": [
            357
        ],
        "boundingBox": "block"
    },
    {
        "id": 339,
        "name": "redstone_lamp",
        "displayName": "Redstone Lamp",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7418,
        "minStateId": 7417,
        "maxStateId": 7418,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            658
        ],
        "boundingBox": "block"
    },
    {
        "id": 340,
        "name": "cocoa",
        "displayName": "Cocoa",
        "hardness": 0.2,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7419,
        "minStateId": 7419,
        "maxStateId": 7430,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 3,
                "values": [
                    "0",
                    "1",
                    "2"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            903
        ],
        "boundingBox": "block"
    },
    {
        "id": 341,
        "name": "sandstone_stairs",
        "displayName": "Sandstone Stairs",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7442,
        "minStateId": 7431,
        "maxStateId": 7510,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            358
        ],
        "boundingBox": "block"
    },
    {
        "id": 342,
        "name": "emerald_ore",
        "displayName": "Emerald Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7511,
        "minStateId": 7511,
        "maxStateId": 7511,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            765
        ],
        "boundingBox": "block"
    },
    {
        "id": 343,
        "name": "deepslate_emerald_ore",
        "displayName": "Deepslate Emerald Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7512,
        "minStateId": 7512,
        "maxStateId": 7512,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            765
        ],
        "boundingBox": "block"
    },
    {
        "id": 344,
        "name": "ender_chest",
        "displayName": "Ender Chest",
        "hardness": 22.5,
        "resistance": 600.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 7,
        "filterLight": 0,
        "defaultState": 7514,
        "minStateId": 7513,
        "maxStateId": 7520,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            268
        ],
        "boundingBox": "block"
    },
    {
        "id": 345,
        "name": "tripwire_hook",
        "displayName": "Tripwire Hook",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7530,
        "minStateId": 7521,
        "maxStateId": 7536,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            655
        ],
        "boundingBox": "empty"
    },
    {
        "id": 346,
        "name": "tripwire",
        "displayName": "Tripwire",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7664,
        "minStateId": 7537,
        "maxStateId": 7664,
        "states": [
            {
                "name": "attached",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "disarmed",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            810
        ],
        "boundingBox": "empty"
    },
    {
        "id": 347,
        "name": "emerald_block",
        "displayName": "Block of Emerald",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7665,
        "minStateId": 7665,
        "maxStateId": 7665,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            360
        ],
        "boundingBox": "block"
    },
    {
        "id": 348,
        "name": "spruce_stairs",
        "displayName": "Spruce Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7677,
        "minStateId": 7666,
        "maxStateId": 7745,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            362
        ],
        "boundingBox": "block"
    },
    {
        "id": 349,
        "name": "birch_stairs",
        "displayName": "Birch Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7757,
        "minStateId": 7746,
        "maxStateId": 7825,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            363
        ],
        "boundingBox": "block"
    },
    {
        "id": 350,
        "name": "jungle_stairs",
        "displayName": "Jungle Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7837,
        "minStateId": 7826,
        "maxStateId": 7905,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            364
        ],
        "boundingBox": "block"
    },
    {
        "id": 351,
        "name": "command_block",
        "displayName": "Command Block",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 7912,
        "minStateId": 7906,
        "maxStateId": 7917,
        "states": [
            {
                "name": "conditional",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "harvestTools": {},
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 352,
        "name": "beacon",
        "displayName": "Beacon",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 1,
        "defaultState": 7918,
        "minStateId": 7918,
        "maxStateId": 7918,
        "states": [],
        "drops": [
            374
        ],
        "boundingBox": "block"
    },
    {
        "id": 353,
        "name": "cobblestone_wall",
        "displayName": "Cobblestone Wall",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 7922,
        "minStateId": 7919,
        "maxStateId": 8242,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            375
        ],
        "boundingBox": "block"
    },
    {
        "id": 354,
        "name": "mossy_cobblestone_wall",
        "displayName": "Mossy Cobblestone Wall",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8246,
        "minStateId": 8243,
        "maxStateId": 8566,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            376
        ],
        "boundingBox": "block"
    },
    {
        "id": 355,
        "name": "flower_pot",
        "displayName": "Flower Pot",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8567,
        "minStateId": 8567,
        "maxStateId": 8567,
        "states": [],
        "drops": [
            1050
        ],
        "boundingBox": "block"
    },
    {
        "id": 356,
        "name": "potted_torchflower",
        "displayName": "Potted Torchflower",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8568,
        "minStateId": 8568,
        "maxStateId": 8568,
        "states": [],
        "drops": [
            1050,
            209
        ],
        "boundingBox": "block"
    },
    {
        "id": 357,
        "name": "potted_oak_sapling",
        "displayName": "Potted Oak Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8569,
        "minStateId": 8569,
        "maxStateId": 8569,
        "states": [],
        "drops": [
            1050,
            35
        ],
        "boundingBox": "block"
    },
    {
        "id": 358,
        "name": "potted_spruce_sapling",
        "displayName": "Potted Spruce Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8570,
        "minStateId": 8570,
        "maxStateId": 8570,
        "states": [],
        "drops": [
            1050,
            36
        ],
        "boundingBox": "block"
    },
    {
        "id": 359,
        "name": "potted_birch_sapling",
        "displayName": "Potted Birch Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8571,
        "minStateId": 8571,
        "maxStateId": 8571,
        "states": [],
        "drops": [
            1050,
            37
        ],
        "boundingBox": "block"
    },
    {
        "id": 360,
        "name": "potted_jungle_sapling",
        "displayName": "Potted Jungle Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8572,
        "minStateId": 8572,
        "maxStateId": 8572,
        "states": [],
        "drops": [
            1050,
            38
        ],
        "boundingBox": "block"
    },
    {
        "id": 361,
        "name": "potted_acacia_sapling",
        "displayName": "Potted Acacia Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8573,
        "minStateId": 8573,
        "maxStateId": 8573,
        "states": [],
        "drops": [
            1050,
            39
        ],
        "boundingBox": "block"
    },
    {
        "id": 362,
        "name": "potted_cherry_sapling",
        "displayName": "Potted Cherry Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8574,
        "minStateId": 8574,
        "maxStateId": 8574,
        "states": [],
        "drops": [
            1050,
            40
        ],
        "boundingBox": "block"
    },
    {
        "id": 363,
        "name": "potted_dark_oak_sapling",
        "displayName": "Potted Dark Oak Sapling",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8575,
        "minStateId": 8575,
        "maxStateId": 8575,
        "states": [],
        "drops": [
            1050,
            41
        ],
        "boundingBox": "block"
    },
    {
        "id": 364,
        "name": "potted_mangrove_propagule",
        "displayName": "Potted Mangrove Propagule",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8576,
        "minStateId": 8576,
        "maxStateId": 8576,
        "states": [],
        "drops": [
            1050,
            42
        ],
        "boundingBox": "block"
    },
    {
        "id": 365,
        "name": "potted_fern",
        "displayName": "Potted Fern",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8577,
        "minStateId": 8577,
        "maxStateId": 8577,
        "states": [],
        "drops": [
            1050,
            174
        ],
        "boundingBox": "block"
    },
    {
        "id": 366,
        "name": "potted_dandelion",
        "displayName": "Potted Dandelion",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8578,
        "minStateId": 8578,
        "maxStateId": 8578,
        "states": [],
        "drops": [
            1050,
            196
        ],
        "boundingBox": "block"
    },
    {
        "id": 367,
        "name": "potted_poppy",
        "displayName": "Potted Poppy",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8579,
        "minStateId": 8579,
        "maxStateId": 8579,
        "states": [],
        "drops": [
            1050,
            197
        ],
        "boundingBox": "block"
    },
    {
        "id": 368,
        "name": "potted_blue_orchid",
        "displayName": "Potted Blue Orchid",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8580,
        "minStateId": 8580,
        "maxStateId": 8580,
        "states": [],
        "drops": [
            1050,
            198
        ],
        "boundingBox": "block"
    },
    {
        "id": 369,
        "name": "potted_allium",
        "displayName": "Potted Allium",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8581,
        "minStateId": 8581,
        "maxStateId": 8581,
        "states": [],
        "drops": [
            1050,
            199
        ],
        "boundingBox": "block"
    },
    {
        "id": 370,
        "name": "potted_azure_bluet",
        "displayName": "Potted Azure Bluet",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8582,
        "minStateId": 8582,
        "maxStateId": 8582,
        "states": [],
        "drops": [
            1050,
            200
        ],
        "boundingBox": "block"
    },
    {
        "id": 371,
        "name": "potted_red_tulip",
        "displayName": "Potted Red Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8583,
        "minStateId": 8583,
        "maxStateId": 8583,
        "states": [],
        "drops": [
            1050,
            201
        ],
        "boundingBox": "block"
    },
    {
        "id": 372,
        "name": "potted_orange_tulip",
        "displayName": "Potted Orange Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8584,
        "minStateId": 8584,
        "maxStateId": 8584,
        "states": [],
        "drops": [
            1050,
            202
        ],
        "boundingBox": "block"
    },
    {
        "id": 373,
        "name": "potted_white_tulip",
        "displayName": "Potted White Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8585,
        "minStateId": 8585,
        "maxStateId": 8585,
        "states": [],
        "drops": [
            1050,
            203
        ],
        "boundingBox": "block"
    },
    {
        "id": 374,
        "name": "potted_pink_tulip",
        "displayName": "Potted Pink Tulip",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8586,
        "minStateId": 8586,
        "maxStateId": 8586,
        "states": [],
        "drops": [
            1050,
            204
        ],
        "boundingBox": "block"
    },
    {
        "id": 375,
        "name": "potted_oxeye_daisy",
        "displayName": "Potted Oxeye Daisy",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8587,
        "minStateId": 8587,
        "maxStateId": 8587,
        "states": [],
        "drops": [
            1050,
            205
        ],
        "boundingBox": "block"
    },
    {
        "id": 376,
        "name": "potted_cornflower",
        "displayName": "Potted Cornflower",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8588,
        "minStateId": 8588,
        "maxStateId": 8588,
        "states": [],
        "drops": [
            1050,
            206
        ],
        "boundingBox": "block"
    },
    {
        "id": 377,
        "name": "potted_lily_of_the_valley",
        "displayName": "Potted Lily of the Valley",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8589,
        "minStateId": 8589,
        "maxStateId": 8589,
        "states": [],
        "drops": [
            1050,
            207
        ],
        "boundingBox": "block"
    },
    {
        "id": 378,
        "name": "potted_wither_rose",
        "displayName": "Potted Wither Rose",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8590,
        "minStateId": 8590,
        "maxStateId": 8590,
        "states": [],
        "drops": [
            1050,
            208
        ],
        "boundingBox": "block"
    },
    {
        "id": 379,
        "name": "potted_red_mushroom",
        "displayName": "Potted Red Mushroom",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8591,
        "minStateId": 8591,
        "maxStateId": 8591,
        "states": [],
        "drops": [
            1050,
            213
        ],
        "boundingBox": "block"
    },
    {
        "id": 380,
        "name": "potted_brown_mushroom",
        "displayName": "Potted Brown Mushroom",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8592,
        "minStateId": 8592,
        "maxStateId": 8592,
        "states": [],
        "drops": [
            1050,
            212
        ],
        "boundingBox": "block"
    },
    {
        "id": 381,
        "name": "potted_dead_bush",
        "displayName": "Potted Dead Bush",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8593,
        "minStateId": 8593,
        "maxStateId": 8593,
        "states": [],
        "drops": [
            1050,
            177
        ],
        "boundingBox": "block"
    },
    {
        "id": 382,
        "name": "potted_cactus",
        "displayName": "Potted Cactus",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8594,
        "minStateId": 8594,
        "maxStateId": 8594,
        "states": [],
        "drops": [
            1050,
            286
        ],
        "boundingBox": "block"
    },
    {
        "id": 383,
        "name": "carrots",
        "displayName": "Carrots",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8595,
        "minStateId": 8595,
        "maxStateId": 8602,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 8,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            }
        ],
        "drops": [
            1051
        ],
        "boundingBox": "empty"
    },
    {
        "id": 384,
        "name": "potatoes",
        "displayName": "Potatoes",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8603,
        "minStateId": 8603,
        "maxStateId": 8610,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 8,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            }
        ],
        "drops": [
            1052
        ],
        "boundingBox": "empty"
    },
    {
        "id": 385,
        "name": "oak_button",
        "displayName": "Oak Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8620,
        "minStateId": 8611,
        "maxStateId": 8634,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            662
        ],
        "boundingBox": "empty"
    },
    {
        "id": 386,
        "name": "spruce_button",
        "displayName": "Spruce Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8644,
        "minStateId": 8635,
        "maxStateId": 8658,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            663
        ],
        "boundingBox": "empty"
    },
    {
        "id": 387,
        "name": "birch_button",
        "displayName": "Birch Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8668,
        "minStateId": 8659,
        "maxStateId": 8682,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            664
        ],
        "boundingBox": "empty"
    },
    {
        "id": 388,
        "name": "jungle_button",
        "displayName": "Jungle Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8692,
        "minStateId": 8683,
        "maxStateId": 8706,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            665
        ],
        "boundingBox": "empty"
    },
    {
        "id": 389,
        "name": "acacia_button",
        "displayName": "Acacia Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8716,
        "minStateId": 8707,
        "maxStateId": 8730,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            666
        ],
        "boundingBox": "empty"
    },
    {
        "id": 390,
        "name": "cherry_button",
        "displayName": "Cherry Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8740,
        "minStateId": 8731,
        "maxStateId": 8754,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            667
        ],
        "boundingBox": "empty"
    },
    {
        "id": 391,
        "name": "dark_oak_button",
        "displayName": "Dark Oak Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8764,
        "minStateId": 8755,
        "maxStateId": 8778,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            668
        ],
        "boundingBox": "empty"
    },
    {
        "id": 392,
        "name": "mangrove_button",
        "displayName": "Mangrove Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8788,
        "minStateId": 8779,
        "maxStateId": 8802,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            669
        ],
        "boundingBox": "empty"
    },
    {
        "id": 393,
        "name": "bamboo_button",
        "displayName": "Bamboo Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8812,
        "minStateId": 8803,
        "maxStateId": 8826,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            670
        ],
        "boundingBox": "empty"
    },
    {
        "id": 394,
        "name": "skeleton_skull",
        "displayName": "Skeleton Skull",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8843,
        "minStateId": 8827,
        "maxStateId": 8858,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1057
        ],
        "boundingBox": "block"
    },
    {
        "id": 395,
        "name": "skeleton_wall_skull",
        "displayName": "Skeleton Skull",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8860,
        "minStateId": 8859,
        "maxStateId": 8866,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1057
        ],
        "boundingBox": "block"
    },
    {
        "id": 396,
        "name": "wither_skeleton_skull",
        "displayName": "Wither Skeleton Skull",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8883,
        "minStateId": 8867,
        "maxStateId": 8898,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1058
        ],
        "boundingBox": "block"
    },
    {
        "id": 397,
        "name": "wither_skeleton_wall_skull",
        "displayName": "Wither Skeleton Skull",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8900,
        "minStateId": 8899,
        "maxStateId": 8906,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1058
        ],
        "boundingBox": "block"
    },
    {
        "id": 398,
        "name": "zombie_head",
        "displayName": "Zombie Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8923,
        "minStateId": 8907,
        "maxStateId": 8938,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1060
        ],
        "boundingBox": "block"
    },
    {
        "id": 399,
        "name": "zombie_wall_head",
        "displayName": "Zombie Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8940,
        "minStateId": 8939,
        "maxStateId": 8946,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1060
        ],
        "boundingBox": "block"
    },
    {
        "id": 400,
        "name": "player_head",
        "displayName": "Player Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8963,
        "minStateId": 8947,
        "maxStateId": 8978,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1059
        ],
        "boundingBox": "block"
    },
    {
        "id": 401,
        "name": "player_wall_head",
        "displayName": "Player Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 8980,
        "minStateId": 8979,
        "maxStateId": 8986,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1059
        ],
        "boundingBox": "block"
    },
    {
        "id": 402,
        "name": "creeper_head",
        "displayName": "Creeper Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9003,
        "minStateId": 8987,
        "maxStateId": 9018,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1061
        ],
        "boundingBox": "block"
    },
    {
        "id": 403,
        "name": "creeper_wall_head",
        "displayName": "Creeper Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9020,
        "minStateId": 9019,
        "maxStateId": 9026,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1061
        ],
        "boundingBox": "block"
    },
    {
        "id": 404,
        "name": "dragon_head",
        "displayName": "Dragon Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9043,
        "minStateId": 9027,
        "maxStateId": 9058,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1062
        ],
        "boundingBox": "block"
    },
    {
        "id": 405,
        "name": "dragon_wall_head",
        "displayName": "Dragon Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9060,
        "minStateId": 9059,
        "maxStateId": 9066,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1062
        ],
        "boundingBox": "block"
    },
    {
        "id": 406,
        "name": "piglin_head",
        "displayName": "Piglin Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9083,
        "minStateId": 9067,
        "maxStateId": 9098,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1063
        ],
        "boundingBox": "block"
    },
    {
        "id": 407,
        "name": "piglin_wall_head",
        "displayName": "Piglin Head",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9100,
        "minStateId": 9099,
        "maxStateId": 9106,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1063
        ],
        "boundingBox": "block"
    },
    {
        "id": 408,
        "name": "anvil",
        "displayName": "Anvil",
        "hardness": 5.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9107,
        "minStateId": 9107,
        "maxStateId": 9110,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            397
        ],
        "boundingBox": "block"
    },
    {
        "id": 409,
        "name": "chipped_anvil",
        "displayName": "Chipped Anvil",
        "hardness": 5.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9111,
        "minStateId": 9111,
        "maxStateId": 9114,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            398
        ],
        "boundingBox": "block"
    },
    {
        "id": 410,
        "name": "damaged_anvil",
        "displayName": "Damaged Anvil",
        "hardness": 5.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9115,
        "minStateId": 9115,
        "maxStateId": 9118,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            399
        ],
        "boundingBox": "block"
    },
    {
        "id": 411,
        "name": "trapped_chest",
        "displayName": "Trapped Chest",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9120,
        "minStateId": 9119,
        "maxStateId": 9142,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "single",
                    "left",
                    "right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            656
        ],
        "boundingBox": "block"
    },
    {
        "id": 412,
        "name": "light_weighted_pressure_plate",
        "displayName": "Light Weighted Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9143,
        "minStateId": 9143,
        "maxStateId": 9158,
        "states": [
            {
                "name": "power",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            675
        ],
        "boundingBox": "empty"
    },
    {
        "id": 413,
        "name": "heavy_weighted_pressure_plate",
        "displayName": "Heavy Weighted Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9159,
        "minStateId": 9159,
        "maxStateId": 9174,
        "states": [
            {
                "name": "power",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            676
        ],
        "boundingBox": "empty"
    },
    {
        "id": 414,
        "name": "comparator",
        "displayName": "Redstone Comparator",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9176,
        "minStateId": 9175,
        "maxStateId": 9190,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "mode",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "compare",
                    "subtract"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            639
        ],
        "boundingBox": "block"
    },
    {
        "id": 415,
        "name": "daylight_detector",
        "displayName": "Daylight Detector",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9207,
        "minStateId": 9191,
        "maxStateId": 9222,
        "states": [
            {
                "name": "inverted",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "power",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            652
        ],
        "boundingBox": "block"
    },
    {
        "id": 416,
        "name": "redstone_block",
        "displayName": "Block of Redstone",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9223,
        "minStateId": 9223,
        "maxStateId": 9223,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            637
        ],
        "boundingBox": "block"
    },
    {
        "id": 417,
        "name": "nether_quartz_ore",
        "displayName": "Nether Quartz Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9224,
        "minStateId": 9224,
        "maxStateId": 9224,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            767
        ],
        "boundingBox": "block"
    },
    {
        "id": 418,
        "name": "hopper",
        "displayName": "Hopper",
        "hardness": 3.0,
        "resistance": 4.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9225,
        "minStateId": 9225,
        "maxStateId": 9234,
        "states": [
            {
                "name": "enabled",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "down",
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            645
        ],
        "boundingBox": "block"
    },
    {
        "id": 419,
        "name": "quartz_block",
        "displayName": "Block of Quartz",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9235,
        "minStateId": 9235,
        "maxStateId": 9235,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            401
        ],
        "boundingBox": "block"
    },
    {
        "id": 420,
        "name": "chiseled_quartz_block",
        "displayName": "Chiseled Quartz Block",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9236,
        "minStateId": 9236,
        "maxStateId": 9236,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            400
        ],
        "boundingBox": "block"
    },
    {
        "id": 421,
        "name": "quartz_pillar",
        "displayName": "Quartz Pillar",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9238,
        "minStateId": 9237,
        "maxStateId": 9239,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            403
        ],
        "boundingBox": "block"
    },
    {
        "id": 422,
        "name": "quartz_stairs",
        "displayName": "Quartz Stairs",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9251,
        "minStateId": 9240,
        "maxStateId": 9319,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            404
        ],
        "boundingBox": "block"
    },
    {
        "id": 423,
        "name": "activator_rail",
        "displayName": "Activator Rail",
        "hardness": 0.7,
        "resistance": 0.7,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9333,
        "minStateId": 9320,
        "maxStateId": 9343,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north_south",
                    "east_west",
                    "ascending_east",
                    "ascending_west",
                    "ascending_north",
                    "ascending_south"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            726
        ],
        "boundingBox": "empty"
    },
    {
        "id": 424,
        "name": "dropper",
        "displayName": "Dropper",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9345,
        "minStateId": 9344,
        "maxStateId": 9355,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "triggered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            647
        ],
        "boundingBox": "block"
    },
    {
        "id": 425,
        "name": "white_terracotta",
        "displayName": "White Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9356,
        "minStateId": 9356,
        "maxStateId": 9356,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            405
        ],
        "boundingBox": "block"
    },
    {
        "id": 426,
        "name": "orange_terracotta",
        "displayName": "Orange Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9357,
        "minStateId": 9357,
        "maxStateId": 9357,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            406
        ],
        "boundingBox": "block"
    },
    {
        "id": 427,
        "name": "magenta_terracotta",
        "displayName": "Magenta Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9358,
        "minStateId": 9358,
        "maxStateId": 9358,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            407
        ],
        "boundingBox": "block"
    },
    {
        "id": 428,
        "name": "light_blue_terracotta",
        "displayName": "Light Blue Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9359,
        "minStateId": 9359,
        "maxStateId": 9359,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            408
        ],
        "boundingBox": "block"
    },
    {
        "id": 429,
        "name": "yellow_terracotta",
        "displayName": "Yellow Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9360,
        "minStateId": 9360,
        "maxStateId": 9360,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            409
        ],
        "boundingBox": "block"
    },
    {
        "id": 430,
        "name": "lime_terracotta",
        "displayName": "Lime Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9361,
        "minStateId": 9361,
        "maxStateId": 9361,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            410
        ],
        "boundingBox": "block"
    },
    {
        "id": 431,
        "name": "pink_terracotta",
        "displayName": "Pink Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9362,
        "minStateId": 9362,
        "maxStateId": 9362,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            411
        ],
        "boundingBox": "block"
    },
    {
        "id": 432,
        "name": "gray_terracotta",
        "displayName": "Gray Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9363,
        "minStateId": 9363,
        "maxStateId": 9363,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            412
        ],
        "boundingBox": "block"
    },
    {
        "id": 433,
        "name": "light_gray_terracotta",
        "displayName": "Light Gray Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9364,
        "minStateId": 9364,
        "maxStateId": 9364,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            413
        ],
        "boundingBox": "block"
    },
    {
        "id": 434,
        "name": "cyan_terracotta",
        "displayName": "Cyan Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9365,
        "minStateId": 9365,
        "maxStateId": 9365,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            414
        ],
        "boundingBox": "block"
    },
    {
        "id": 435,
        "name": "purple_terracotta",
        "displayName": "Purple Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9366,
        "minStateId": 9366,
        "maxStateId": 9366,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            415
        ],
        "boundingBox": "block"
    },
    {
        "id": 436,
        "name": "blue_terracotta",
        "displayName": "Blue Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9367,
        "minStateId": 9367,
        "maxStateId": 9367,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            416
        ],
        "boundingBox": "block"
    },
    {
        "id": 437,
        "name": "brown_terracotta",
        "displayName": "Brown Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9368,
        "minStateId": 9368,
        "maxStateId": 9368,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            417
        ],
        "boundingBox": "block"
    },
    {
        "id": 438,
        "name": "green_terracotta",
        "displayName": "Green Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9369,
        "minStateId": 9369,
        "maxStateId": 9369,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            418
        ],
        "boundingBox": "block"
    },
    {
        "id": 439,
        "name": "red_terracotta",
        "displayName": "Red Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9370,
        "minStateId": 9370,
        "maxStateId": 9370,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            419
        ],
        "boundingBox": "block"
    },
    {
        "id": 440,
        "name": "black_terracotta",
        "displayName": "Black Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 9371,
        "minStateId": 9371,
        "maxStateId": 9371,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            420
        ],
        "boundingBox": "block"
    },
    {
        "id": 441,
        "name": "white_stained_glass_pane",
        "displayName": "White Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9403,
        "minStateId": 9372,
        "maxStateId": 9403,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 442,
        "name": "orange_stained_glass_pane",
        "displayName": "Orange Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9435,
        "minStateId": 9404,
        "maxStateId": 9435,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 443,
        "name": "magenta_stained_glass_pane",
        "displayName": "Magenta Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9467,
        "minStateId": 9436,
        "maxStateId": 9467,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 444,
        "name": "light_blue_stained_glass_pane",
        "displayName": "Light Blue Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9499,
        "minStateId": 9468,
        "maxStateId": 9499,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 445,
        "name": "yellow_stained_glass_pane",
        "displayName": "Yellow Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9531,
        "minStateId": 9500,
        "maxStateId": 9531,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 446,
        "name": "lime_stained_glass_pane",
        "displayName": "Lime Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9563,
        "minStateId": 9532,
        "maxStateId": 9563,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 447,
        "name": "pink_stained_glass_pane",
        "displayName": "Pink Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9595,
        "minStateId": 9564,
        "maxStateId": 9595,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 448,
        "name": "gray_stained_glass_pane",
        "displayName": "Gray Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9627,
        "minStateId": 9596,
        "maxStateId": 9627,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 449,
        "name": "light_gray_stained_glass_pane",
        "displayName": "Light Gray Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9659,
        "minStateId": 9628,
        "maxStateId": 9659,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 450,
        "name": "cyan_stained_glass_pane",
        "displayName": "Cyan Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9691,
        "minStateId": 9660,
        "maxStateId": 9691,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 451,
        "name": "purple_stained_glass_pane",
        "displayName": "Purple Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9723,
        "minStateId": 9692,
        "maxStateId": 9723,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 452,
        "name": "blue_stained_glass_pane",
        "displayName": "Blue Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9755,
        "minStateId": 9724,
        "maxStateId": 9755,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 453,
        "name": "brown_stained_glass_pane",
        "displayName": "Brown Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9787,
        "minStateId": 9756,
        "maxStateId": 9787,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 454,
        "name": "green_stained_glass_pane",
        "displayName": "Green Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9819,
        "minStateId": 9788,
        "maxStateId": 9819,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 455,
        "name": "red_stained_glass_pane",
        "displayName": "Red Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9851,
        "minStateId": 9820,
        "maxStateId": 9851,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 456,
        "name": "black_stained_glass_pane",
        "displayName": "Black Stained Glass Pane",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9883,
        "minStateId": 9852,
        "maxStateId": 9883,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 457,
        "name": "acacia_stairs",
        "displayName": "Acacia Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9895,
        "minStateId": 9884,
        "maxStateId": 9963,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            365
        ],
        "boundingBox": "block"
    },
    {
        "id": 458,
        "name": "cherry_stairs",
        "displayName": "Cherry Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 9975,
        "minStateId": 9964,
        "maxStateId": 10043,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            366
        ],
        "boundingBox": "block"
    },
    {
        "id": 459,
        "name": "dark_oak_stairs",
        "displayName": "Dark Oak Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10055,
        "minStateId": 10044,
        "maxStateId": 10123,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            367
        ],
        "boundingBox": "block"
    },
    {
        "id": 460,
        "name": "mangrove_stairs",
        "displayName": "Mangrove Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10135,
        "minStateId": 10124,
        "maxStateId": 10203,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            368
        ],
        "boundingBox": "block"
    },
    {
        "id": 461,
        "name": "bamboo_stairs",
        "displayName": "Bamboo Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10215,
        "minStateId": 10204,
        "maxStateId": 10283,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            369
        ],
        "boundingBox": "block"
    },
    {
        "id": 462,
        "name": "bamboo_mosaic_stairs",
        "displayName": "Bamboo Mosaic Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10295,
        "minStateId": 10284,
        "maxStateId": 10363,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            370
        ],
        "boundingBox": "block"
    },
    {
        "id": 463,
        "name": "slime_block",
        "displayName": "Slime Block",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 10364,
        "minStateId": 10364,
        "maxStateId": 10364,
        "states": [],
        "drops": [
            642
        ],
        "boundingBox": "block"
    },
    {
        "id": 464,
        "name": "barrier",
        "displayName": "Barrier",
        "hardness": -1.0,
        "resistance": 3600000.8,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10366,
        "minStateId": 10365,
        "maxStateId": 10366,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 465,
        "name": "light",
        "displayName": "Light",
        "hardness": -1.0,
        "resistance": 3600000.8,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 0,
        "defaultState": 10398,
        "minStateId": 10367,
        "maxStateId": 10398,
        "states": [
            {
                "name": "level",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 466,
        "name": "iron_trapdoor",
        "displayName": "Iron Trapdoor",
        "hardness": 5.0,
        "resistance": 5.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10414,
        "minStateId": 10399,
        "maxStateId": 10462,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            700
        ],
        "boundingBox": "block"
    },
    {
        "id": 467,
        "name": "prismarine",
        "displayName": "Prismarine",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10463,
        "minStateId": 10463,
        "maxStateId": 10463,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            481
        ],
        "boundingBox": "block"
    },
    {
        "id": 468,
        "name": "prismarine_bricks",
        "displayName": "Prismarine Bricks",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10464,
        "minStateId": 10464,
        "maxStateId": 10464,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            482
        ],
        "boundingBox": "block"
    },
    {
        "id": 469,
        "name": "dark_prismarine",
        "displayName": "Dark Prismarine",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10465,
        "minStateId": 10465,
        "maxStateId": 10465,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            483
        ],
        "boundingBox": "block"
    },
    {
        "id": 470,
        "name": "prismarine_stairs",
        "displayName": "Prismarine Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10477,
        "minStateId": 10466,
        "maxStateId": 10545,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            484
        ],
        "boundingBox": "block"
    },
    {
        "id": 471,
        "name": "prismarine_brick_stairs",
        "displayName": "Prismarine Brick Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10557,
        "minStateId": 10546,
        "maxStateId": 10625,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            485
        ],
        "boundingBox": "block"
    },
    {
        "id": 472,
        "name": "dark_prismarine_stairs",
        "displayName": "Dark Prismarine Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10637,
        "minStateId": 10626,
        "maxStateId": 10705,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            486
        ],
        "boundingBox": "block"
    },
    {
        "id": 473,
        "name": "prismarine_slab",
        "displayName": "Prismarine Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10709,
        "minStateId": 10706,
        "maxStateId": 10711,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            256
        ],
        "boundingBox": "block"
    },
    {
        "id": 474,
        "name": "prismarine_brick_slab",
        "displayName": "Prismarine Brick Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10715,
        "minStateId": 10712,
        "maxStateId": 10717,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            257
        ],
        "boundingBox": "block"
    },
    {
        "id": 475,
        "name": "dark_prismarine_slab",
        "displayName": "Dark Prismarine Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10721,
        "minStateId": 10718,
        "maxStateId": 10723,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            258
        ],
        "boundingBox": "block"
    },
    {
        "id": 476,
        "name": "sea_lantern",
        "displayName": "Sea Lantern",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 15,
        "filterLight": 15,
        "defaultState": 10724,
        "minStateId": 10724,
        "maxStateId": 10724,
        "states": [],
        "drops": [
            1071
        ],
        "boundingBox": "block"
    },
    {
        "id": 477,
        "name": "hay_block",
        "displayName": "Hay Bale",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10726,
        "minStateId": 10725,
        "maxStateId": 10727,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            423
        ],
        "boundingBox": "block"
    },
    {
        "id": 478,
        "name": "white_carpet",
        "displayName": "White Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10728,
        "minStateId": 10728,
        "maxStateId": 10728,
        "states": [],
        "drops": [
            424
        ],
        "boundingBox": "block"
    },
    {
        "id": 479,
        "name": "orange_carpet",
        "displayName": "Orange Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10729,
        "minStateId": 10729,
        "maxStateId": 10729,
        "states": [],
        "drops": [
            425
        ],
        "boundingBox": "block"
    },
    {
        "id": 480,
        "name": "magenta_carpet",
        "displayName": "Magenta Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10730,
        "minStateId": 10730,
        "maxStateId": 10730,
        "states": [],
        "drops": [
            426
        ],
        "boundingBox": "block"
    },
    {
        "id": 481,
        "name": "light_blue_carpet",
        "displayName": "Light Blue Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10731,
        "minStateId": 10731,
        "maxStateId": 10731,
        "states": [],
        "drops": [
            427
        ],
        "boundingBox": "block"
    },
    {
        "id": 482,
        "name": "yellow_carpet",
        "displayName": "Yellow Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10732,
        "minStateId": 10732,
        "maxStateId": 10732,
        "states": [],
        "drops": [
            428
        ],
        "boundingBox": "block"
    },
    {
        "id": 483,
        "name": "lime_carpet",
        "displayName": "Lime Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10733,
        "minStateId": 10733,
        "maxStateId": 10733,
        "states": [],
        "drops": [
            429
        ],
        "boundingBox": "block"
    },
    {
        "id": 484,
        "name": "pink_carpet",
        "displayName": "Pink Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10734,
        "minStateId": 10734,
        "maxStateId": 10734,
        "states": [],
        "drops": [
            430
        ],
        "boundingBox": "block"
    },
    {
        "id": 485,
        "name": "gray_carpet",
        "displayName": "Gray Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10735,
        "minStateId": 10735,
        "maxStateId": 10735,
        "states": [],
        "drops": [
            431
        ],
        "boundingBox": "block"
    },
    {
        "id": 486,
        "name": "light_gray_carpet",
        "displayName": "Light Gray Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10736,
        "minStateId": 10736,
        "maxStateId": 10736,
        "states": [],
        "drops": [
            432
        ],
        "boundingBox": "block"
    },
    {
        "id": 487,
        "name": "cyan_carpet",
        "displayName": "Cyan Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10737,
        "minStateId": 10737,
        "maxStateId": 10737,
        "states": [],
        "drops": [
            433
        ],
        "boundingBox": "block"
    },
    {
        "id": 488,
        "name": "purple_carpet",
        "displayName": "Purple Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10738,
        "minStateId": 10738,
        "maxStateId": 10738,
        "states": [],
        "drops": [
            434
        ],
        "boundingBox": "block"
    },
    {
        "id": 489,
        "name": "blue_carpet",
        "displayName": "Blue Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10739,
        "minStateId": 10739,
        "maxStateId": 10739,
        "states": [],
        "drops": [
            435
        ],
        "boundingBox": "block"
    },
    {
        "id": 490,
        "name": "brown_carpet",
        "displayName": "Brown Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10740,
        "minStateId": 10740,
        "maxStateId": 10740,
        "states": [],
        "drops": [
            436
        ],
        "boundingBox": "block"
    },
    {
        "id": 491,
        "name": "green_carpet",
        "displayName": "Green Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10741,
        "minStateId": 10741,
        "maxStateId": 10741,
        "states": [],
        "drops": [
            437
        ],
        "boundingBox": "block"
    },
    {
        "id": 492,
        "name": "red_carpet",
        "displayName": "Red Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10742,
        "minStateId": 10742,
        "maxStateId": 10742,
        "states": [],
        "drops": [
            438
        ],
        "boundingBox": "block"
    },
    {
        "id": 493,
        "name": "black_carpet",
        "displayName": "Black Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10743,
        "minStateId": 10743,
        "maxStateId": 10743,
        "states": [],
        "drops": [
            439
        ],
        "boundingBox": "block"
    },
    {
        "id": 494,
        "name": "terracotta",
        "displayName": "Terracotta",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10744,
        "minStateId": 10744,
        "maxStateId": 10744,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            440
        ],
        "boundingBox": "block"
    },
    {
        "id": 495,
        "name": "coal_block",
        "displayName": "Block of Coal",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10745,
        "minStateId": 10745,
        "maxStateId": 10745,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            68
        ],
        "boundingBox": "block"
    },
    {
        "id": 496,
        "name": "packed_ice",
        "displayName": "Packed Ice",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 10746,
        "minStateId": 10746,
        "maxStateId": 10746,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 497,
        "name": "sunflower",
        "displayName": "Sunflower",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10748,
        "minStateId": 10747,
        "maxStateId": 10748,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [
            443
        ],
        "boundingBox": "empty"
    },
    {
        "id": 498,
        "name": "lilac",
        "displayName": "Lilac",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10750,
        "minStateId": 10749,
        "maxStateId": 10750,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [
            444
        ],
        "boundingBox": "empty"
    },
    {
        "id": 499,
        "name": "rose_bush",
        "displayName": "Rose Bush",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10752,
        "minStateId": 10751,
        "maxStateId": 10752,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [
            445
        ],
        "boundingBox": "empty"
    },
    {
        "id": 500,
        "name": "peony",
        "displayName": "Peony",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10754,
        "minStateId": 10753,
        "maxStateId": 10754,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [
            446
        ],
        "boundingBox": "empty"
    },
    {
        "id": 501,
        "name": "tall_grass",
        "displayName": "Tall Grass",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10756,
        "minStateId": 10755,
        "maxStateId": 10756,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 502,
        "name": "large_fern",
        "displayName": "Large Fern",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10758,
        "minStateId": 10757,
        "maxStateId": 10758,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 503,
        "name": "white_banner",
        "displayName": "White Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10759,
        "minStateId": 10759,
        "maxStateId": 10774,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1087
        ],
        "boundingBox": "empty"
    },
    {
        "id": 504,
        "name": "orange_banner",
        "displayName": "Orange Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10775,
        "minStateId": 10775,
        "maxStateId": 10790,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1088
        ],
        "boundingBox": "empty"
    },
    {
        "id": 505,
        "name": "magenta_banner",
        "displayName": "Magenta Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10791,
        "minStateId": 10791,
        "maxStateId": 10806,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1089
        ],
        "boundingBox": "empty"
    },
    {
        "id": 506,
        "name": "light_blue_banner",
        "displayName": "Light Blue Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10807,
        "minStateId": 10807,
        "maxStateId": 10822,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1090
        ],
        "boundingBox": "empty"
    },
    {
        "id": 507,
        "name": "yellow_banner",
        "displayName": "Yellow Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10823,
        "minStateId": 10823,
        "maxStateId": 10838,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1091
        ],
        "boundingBox": "empty"
    },
    {
        "id": 508,
        "name": "lime_banner",
        "displayName": "Lime Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10839,
        "minStateId": 10839,
        "maxStateId": 10854,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1092
        ],
        "boundingBox": "empty"
    },
    {
        "id": 509,
        "name": "pink_banner",
        "displayName": "Pink Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10855,
        "minStateId": 10855,
        "maxStateId": 10870,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1093
        ],
        "boundingBox": "empty"
    },
    {
        "id": 510,
        "name": "gray_banner",
        "displayName": "Gray Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10871,
        "minStateId": 10871,
        "maxStateId": 10886,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1094
        ],
        "boundingBox": "empty"
    },
    {
        "id": 511,
        "name": "light_gray_banner",
        "displayName": "Light Gray Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10887,
        "minStateId": 10887,
        "maxStateId": 10902,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1095
        ],
        "boundingBox": "empty"
    },
    {
        "id": 512,
        "name": "cyan_banner",
        "displayName": "Cyan Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10903,
        "minStateId": 10903,
        "maxStateId": 10918,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1096
        ],
        "boundingBox": "empty"
    },
    {
        "id": 513,
        "name": "purple_banner",
        "displayName": "Purple Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10919,
        "minStateId": 10919,
        "maxStateId": 10934,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1097
        ],
        "boundingBox": "empty"
    },
    {
        "id": 514,
        "name": "blue_banner",
        "displayName": "Blue Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10935,
        "minStateId": 10935,
        "maxStateId": 10950,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1098
        ],
        "boundingBox": "empty"
    },
    {
        "id": 515,
        "name": "brown_banner",
        "displayName": "Brown Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10951,
        "minStateId": 10951,
        "maxStateId": 10966,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1099
        ],
        "boundingBox": "empty"
    },
    {
        "id": 516,
        "name": "green_banner",
        "displayName": "Green Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10967,
        "minStateId": 10967,
        "maxStateId": 10982,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1100
        ],
        "boundingBox": "empty"
    },
    {
        "id": 517,
        "name": "red_banner",
        "displayName": "Red Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10983,
        "minStateId": 10983,
        "maxStateId": 10998,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1101
        ],
        "boundingBox": "empty"
    },
    {
        "id": 518,
        "name": "black_banner",
        "displayName": "Black Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 10999,
        "minStateId": 10999,
        "maxStateId": 11014,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            1102
        ],
        "boundingBox": "empty"
    },
    {
        "id": 519,
        "name": "white_wall_banner",
        "displayName": "White Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11015,
        "minStateId": 11015,
        "maxStateId": 11018,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1087
        ],
        "boundingBox": "empty"
    },
    {
        "id": 520,
        "name": "orange_wall_banner",
        "displayName": "Orange Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11019,
        "minStateId": 11019,
        "maxStateId": 11022,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1088
        ],
        "boundingBox": "empty"
    },
    {
        "id": 521,
        "name": "magenta_wall_banner",
        "displayName": "Magenta Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11023,
        "minStateId": 11023,
        "maxStateId": 11026,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1089
        ],
        "boundingBox": "empty"
    },
    {
        "id": 522,
        "name": "light_blue_wall_banner",
        "displayName": "Light Blue Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11027,
        "minStateId": 11027,
        "maxStateId": 11030,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1090
        ],
        "boundingBox": "empty"
    },
    {
        "id": 523,
        "name": "yellow_wall_banner",
        "displayName": "Yellow Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11031,
        "minStateId": 11031,
        "maxStateId": 11034,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1091
        ],
        "boundingBox": "empty"
    },
    {
        "id": 524,
        "name": "lime_wall_banner",
        "displayName": "Lime Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11035,
        "minStateId": 11035,
        "maxStateId": 11038,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1092
        ],
        "boundingBox": "empty"
    },
    {
        "id": 525,
        "name": "pink_wall_banner",
        "displayName": "Pink Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11039,
        "minStateId": 11039,
        "maxStateId": 11042,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1093
        ],
        "boundingBox": "empty"
    },
    {
        "id": 526,
        "name": "gray_wall_banner",
        "displayName": "Gray Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11043,
        "minStateId": 11043,
        "maxStateId": 11046,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1094
        ],
        "boundingBox": "empty"
    },
    {
        "id": 527,
        "name": "light_gray_wall_banner",
        "displayName": "Light Gray Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11047,
        "minStateId": 11047,
        "maxStateId": 11050,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1095
        ],
        "boundingBox": "empty"
    },
    {
        "id": 528,
        "name": "cyan_wall_banner",
        "displayName": "Cyan Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11051,
        "minStateId": 11051,
        "maxStateId": 11054,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1096
        ],
        "boundingBox": "empty"
    },
    {
        "id": 529,
        "name": "purple_wall_banner",
        "displayName": "Purple Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11055,
        "minStateId": 11055,
        "maxStateId": 11058,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1097
        ],
        "boundingBox": "empty"
    },
    {
        "id": 530,
        "name": "blue_wall_banner",
        "displayName": "Blue Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11059,
        "minStateId": 11059,
        "maxStateId": 11062,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1098
        ],
        "boundingBox": "empty"
    },
    {
        "id": 531,
        "name": "brown_wall_banner",
        "displayName": "Brown Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11063,
        "minStateId": 11063,
        "maxStateId": 11066,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1099
        ],
        "boundingBox": "empty"
    },
    {
        "id": 532,
        "name": "green_wall_banner",
        "displayName": "Green Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11067,
        "minStateId": 11067,
        "maxStateId": 11070,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1100
        ],
        "boundingBox": "empty"
    },
    {
        "id": 533,
        "name": "red_wall_banner",
        "displayName": "Red Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11071,
        "minStateId": 11071,
        "maxStateId": 11074,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1101
        ],
        "boundingBox": "empty"
    },
    {
        "id": 534,
        "name": "black_wall_banner",
        "displayName": "Black Banner",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11075,
        "minStateId": 11075,
        "maxStateId": 11078,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1102
        ],
        "boundingBox": "empty"
    },
    {
        "id": 535,
        "name": "red_sandstone",
        "displayName": "Red Sandstone",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11079,
        "minStateId": 11079,
        "maxStateId": 11079,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            488
        ],
        "boundingBox": "block"
    },
    {
        "id": 536,
        "name": "chiseled_red_sandstone",
        "displayName": "Chiseled Red Sandstone",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11080,
        "minStateId": 11080,
        "maxStateId": 11080,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            489
        ],
        "boundingBox": "block"
    },
    {
        "id": 537,
        "name": "cut_red_sandstone",
        "displayName": "Cut Red Sandstone",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11081,
        "minStateId": 11081,
        "maxStateId": 11081,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            490
        ],
        "boundingBox": "block"
    },
    {
        "id": 538,
        "name": "red_sandstone_stairs",
        "displayName": "Red Sandstone Stairs",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11093,
        "minStateId": 11082,
        "maxStateId": 11161,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            491
        ],
        "boundingBox": "block"
    },
    {
        "id": 539,
        "name": "oak_slab",
        "displayName": "Oak Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11165,
        "minStateId": 11162,
        "maxStateId": 11167,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            230
        ],
        "boundingBox": "block"
    },
    {
        "id": 540,
        "name": "spruce_slab",
        "displayName": "Spruce Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11171,
        "minStateId": 11168,
        "maxStateId": 11173,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            231
        ],
        "boundingBox": "block"
    },
    {
        "id": 541,
        "name": "birch_slab",
        "displayName": "Birch Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11177,
        "minStateId": 11174,
        "maxStateId": 11179,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            232
        ],
        "boundingBox": "block"
    },
    {
        "id": 542,
        "name": "jungle_slab",
        "displayName": "Jungle Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11183,
        "minStateId": 11180,
        "maxStateId": 11185,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            233
        ],
        "boundingBox": "block"
    },
    {
        "id": 543,
        "name": "acacia_slab",
        "displayName": "Acacia Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11189,
        "minStateId": 11186,
        "maxStateId": 11191,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            234
        ],
        "boundingBox": "block"
    },
    {
        "id": 544,
        "name": "cherry_slab",
        "displayName": "Cherry Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11195,
        "minStateId": 11192,
        "maxStateId": 11197,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            235
        ],
        "boundingBox": "block"
    },
    {
        "id": 545,
        "name": "dark_oak_slab",
        "displayName": "Dark Oak Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11201,
        "minStateId": 11198,
        "maxStateId": 11203,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            236
        ],
        "boundingBox": "block"
    },
    {
        "id": 546,
        "name": "mangrove_slab",
        "displayName": "Mangrove Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11207,
        "minStateId": 11204,
        "maxStateId": 11209,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            237
        ],
        "boundingBox": "block"
    },
    {
        "id": 547,
        "name": "bamboo_slab",
        "displayName": "Bamboo Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11213,
        "minStateId": 11210,
        "maxStateId": 11215,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            238
        ],
        "boundingBox": "block"
    },
    {
        "id": 548,
        "name": "bamboo_mosaic_slab",
        "displayName": "Bamboo Mosaic Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11219,
        "minStateId": 11216,
        "maxStateId": 11221,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            239
        ],
        "boundingBox": "block"
    },
    {
        "id": 549,
        "name": "stone_slab",
        "displayName": "Stone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11225,
        "minStateId": 11222,
        "maxStateId": 11227,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            242
        ],
        "boundingBox": "block"
    },
    {
        "id": 550,
        "name": "smooth_stone_slab",
        "displayName": "Smooth Stone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11231,
        "minStateId": 11228,
        "maxStateId": 11233,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            243
        ],
        "boundingBox": "block"
    },
    {
        "id": 551,
        "name": "sandstone_slab",
        "displayName": "Sandstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11237,
        "minStateId": 11234,
        "maxStateId": 11239,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            244
        ],
        "boundingBox": "block"
    },
    {
        "id": 552,
        "name": "cut_sandstone_slab",
        "displayName": "Cut Sandstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11243,
        "minStateId": 11240,
        "maxStateId": 11245,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            245
        ],
        "boundingBox": "block"
    },
    {
        "id": 553,
        "name": "petrified_oak_slab",
        "displayName": "Petrified Oak Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11249,
        "minStateId": 11246,
        "maxStateId": 11251,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            246
        ],
        "boundingBox": "block"
    },
    {
        "id": 554,
        "name": "cobblestone_slab",
        "displayName": "Cobblestone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11255,
        "minStateId": 11252,
        "maxStateId": 11257,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            247
        ],
        "boundingBox": "block"
    },
    {
        "id": 555,
        "name": "brick_slab",
        "displayName": "Brick Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11261,
        "minStateId": 11258,
        "maxStateId": 11263,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            248
        ],
        "boundingBox": "block"
    },
    {
        "id": 556,
        "name": "stone_brick_slab",
        "displayName": "Stone Brick Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11267,
        "minStateId": 11264,
        "maxStateId": 11269,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            249
        ],
        "boundingBox": "block"
    },
    {
        "id": 557,
        "name": "mud_brick_slab",
        "displayName": "Mud Brick Slab",
        "hardness": 1.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11273,
        "minStateId": 11270,
        "maxStateId": 11275,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            250
        ],
        "boundingBox": "block"
    },
    {
        "id": 558,
        "name": "nether_brick_slab",
        "displayName": "Nether Brick Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11279,
        "minStateId": 11276,
        "maxStateId": 11281,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            251
        ],
        "boundingBox": "block"
    },
    {
        "id": 559,
        "name": "quartz_slab",
        "displayName": "Quartz Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11285,
        "minStateId": 11282,
        "maxStateId": 11287,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            252
        ],
        "boundingBox": "block"
    },
    {
        "id": 560,
        "name": "red_sandstone_slab",
        "displayName": "Red Sandstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11291,
        "minStateId": 11288,
        "maxStateId": 11293,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            253
        ],
        "boundingBox": "block"
    },
    {
        "id": 561,
        "name": "cut_red_sandstone_slab",
        "displayName": "Cut Red Sandstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11297,
        "minStateId": 11294,
        "maxStateId": 11299,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            254
        ],
        "boundingBox": "block"
    },
    {
        "id": 562,
        "name": "purpur_slab",
        "displayName": "Purpur Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11303,
        "minStateId": 11300,
        "maxStateId": 11305,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            255
        ],
        "boundingBox": "block"
    },
    {
        "id": 563,
        "name": "smooth_stone",
        "displayName": "Smooth Stone",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11306,
        "minStateId": 11306,
        "maxStateId": 11306,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            262
        ],
        "boundingBox": "block"
    },
    {
        "id": 564,
        "name": "smooth_sandstone",
        "displayName": "Smooth Sandstone",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11307,
        "minStateId": 11307,
        "maxStateId": 11307,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            261
        ],
        "boundingBox": "block"
    },
    {
        "id": 565,
        "name": "smooth_quartz",
        "displayName": "Smooth Quartz Block",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11308,
        "minStateId": 11308,
        "maxStateId": 11308,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            259
        ],
        "boundingBox": "block"
    },
    {
        "id": 566,
        "name": "smooth_red_sandstone",
        "displayName": "Smooth Red Sandstone",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 11309,
        "minStateId": 11309,
        "maxStateId": 11309,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            260
        ],
        "boundingBox": "block"
    },
    {
        "id": 567,
        "name": "spruce_fence_gate",
        "displayName": "Spruce Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11317,
        "minStateId": 11310,
        "maxStateId": 11341,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            713
        ],
        "boundingBox": "block"
    },
    {
        "id": 568,
        "name": "birch_fence_gate",
        "displayName": "Birch Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11349,
        "minStateId": 11342,
        "maxStateId": 11373,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            714
        ],
        "boundingBox": "block"
    },
    {
        "id": 569,
        "name": "jungle_fence_gate",
        "displayName": "Jungle Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11381,
        "minStateId": 11374,
        "maxStateId": 11405,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            715
        ],
        "boundingBox": "block"
    },
    {
        "id": 570,
        "name": "acacia_fence_gate",
        "displayName": "Acacia Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11413,
        "minStateId": 11406,
        "maxStateId": 11437,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            716
        ],
        "boundingBox": "block"
    },
    {
        "id": 571,
        "name": "cherry_fence_gate",
        "displayName": "Cherry Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11445,
        "minStateId": 11438,
        "maxStateId": 11469,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            717
        ],
        "boundingBox": "block"
    },
    {
        "id": 572,
        "name": "dark_oak_fence_gate",
        "displayName": "Dark Oak Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11477,
        "minStateId": 11470,
        "maxStateId": 11501,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            718
        ],
        "boundingBox": "block"
    },
    {
        "id": 573,
        "name": "mangrove_fence_gate",
        "displayName": "Mangrove Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11509,
        "minStateId": 11502,
        "maxStateId": 11533,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            719
        ],
        "boundingBox": "block"
    },
    {
        "id": 574,
        "name": "bamboo_fence_gate",
        "displayName": "Bamboo Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11541,
        "minStateId": 11534,
        "maxStateId": 11565,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            720
        ],
        "boundingBox": "block"
    },
    {
        "id": 575,
        "name": "spruce_fence",
        "displayName": "Spruce Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11597,
        "minStateId": 11566,
        "maxStateId": 11597,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            290
        ],
        "boundingBox": "block"
    },
    {
        "id": 576,
        "name": "birch_fence",
        "displayName": "Birch Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11629,
        "minStateId": 11598,
        "maxStateId": 11629,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            291
        ],
        "boundingBox": "block"
    },
    {
        "id": 577,
        "name": "jungle_fence",
        "displayName": "Jungle Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11661,
        "minStateId": 11630,
        "maxStateId": 11661,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            292
        ],
        "boundingBox": "block"
    },
    {
        "id": 578,
        "name": "acacia_fence",
        "displayName": "Acacia Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11693,
        "minStateId": 11662,
        "maxStateId": 11693,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            293
        ],
        "boundingBox": "block"
    },
    {
        "id": 579,
        "name": "cherry_fence",
        "displayName": "Cherry Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11725,
        "minStateId": 11694,
        "maxStateId": 11725,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            294
        ],
        "boundingBox": "block"
    },
    {
        "id": 580,
        "name": "dark_oak_fence",
        "displayName": "Dark Oak Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11757,
        "minStateId": 11726,
        "maxStateId": 11757,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            295
        ],
        "boundingBox": "block"
    },
    {
        "id": 581,
        "name": "mangrove_fence",
        "displayName": "Mangrove Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11789,
        "minStateId": 11758,
        "maxStateId": 11789,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            296
        ],
        "boundingBox": "block"
    },
    {
        "id": 582,
        "name": "bamboo_fence",
        "displayName": "Bamboo Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11821,
        "minStateId": 11790,
        "maxStateId": 11821,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            297
        ],
        "boundingBox": "block"
    },
    {
        "id": 583,
        "name": "spruce_door",
        "displayName": "Spruce Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11833,
        "minStateId": 11822,
        "maxStateId": 11885,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            690
        ],
        "boundingBox": "block"
    },
    {
        "id": 584,
        "name": "birch_door",
        "displayName": "Birch Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11897,
        "minStateId": 11886,
        "maxStateId": 11949,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            691
        ],
        "boundingBox": "block"
    },
    {
        "id": 585,
        "name": "jungle_door",
        "displayName": "Jungle Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 11961,
        "minStateId": 11950,
        "maxStateId": 12013,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            692
        ],
        "boundingBox": "block"
    },
    {
        "id": 586,
        "name": "acacia_door",
        "displayName": "Acacia Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12025,
        "minStateId": 12014,
        "maxStateId": 12077,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            693
        ],
        "boundingBox": "block"
    },
    {
        "id": 587,
        "name": "cherry_door",
        "displayName": "Cherry Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12089,
        "minStateId": 12078,
        "maxStateId": 12141,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            694
        ],
        "boundingBox": "block"
    },
    {
        "id": 588,
        "name": "dark_oak_door",
        "displayName": "Dark Oak Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12153,
        "minStateId": 12142,
        "maxStateId": 12205,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            695
        ],
        "boundingBox": "block"
    },
    {
        "id": 589,
        "name": "mangrove_door",
        "displayName": "Mangrove Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12217,
        "minStateId": 12206,
        "maxStateId": 12269,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            696
        ],
        "boundingBox": "block"
    },
    {
        "id": 590,
        "name": "bamboo_door",
        "displayName": "Bamboo Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12281,
        "minStateId": 12270,
        "maxStateId": 12333,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            697
        ],
        "boundingBox": "block"
    },
    {
        "id": 591,
        "name": "end_rod",
        "displayName": "End Rod",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 14,
        "filterLight": 0,
        "defaultState": 12338,
        "minStateId": 12334,
        "maxStateId": 12339,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            270
        ],
        "boundingBox": "block"
    },
    {
        "id": 592,
        "name": "chorus_plant",
        "displayName": "Chorus Plant",
        "hardness": 0.4,
        "resistance": 0.4,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12403,
        "minStateId": 12340,
        "maxStateId": 12403,
        "states": [
            {
                "name": "down",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            0
        ],
        "boundingBox": "block"
    },
    {
        "id": 593,
        "name": "chorus_flower",
        "displayName": "Chorus Flower",
        "hardness": 0.4,
        "resistance": 0.4,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12404,
        "minStateId": 12404,
        "maxStateId": 12409,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 6,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 594,
        "name": "purpur_block",
        "displayName": "Purpur Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12410,
        "minStateId": 12410,
        "maxStateId": 12410,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            273
        ],
        "boundingBox": "block"
    },
    {
        "id": 595,
        "name": "purpur_pillar",
        "displayName": "Purpur Pillar",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12412,
        "minStateId": 12411,
        "maxStateId": 12413,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            274
        ],
        "boundingBox": "block"
    },
    {
        "id": 596,
        "name": "purpur_stairs",
        "displayName": "Purpur Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12425,
        "minStateId": 12414,
        "maxStateId": 12493,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            275
        ],
        "boundingBox": "block"
    },
    {
        "id": 597,
        "name": "end_stone_bricks",
        "displayName": "End Stone Bricks",
        "hardness": 3.0,
        "resistance": 9.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12494,
        "minStateId": 12494,
        "maxStateId": 12494,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            356
        ],
        "boundingBox": "block"
    },
    {
        "id": 598,
        "name": "torchflower_crop",
        "displayName": "Torchflower Crop",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12495,
        "minStateId": 12495,
        "maxStateId": 12496,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            1106
        ],
        "boundingBox": "empty"
    },
    {
        "id": 599,
        "name": "pitcher_crop",
        "displayName": "Pitcher Crop",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12498,
        "minStateId": 12497,
        "maxStateId": 12506,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 5,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [
            1107
        ],
        "boundingBox": "block"
    },
    {
        "id": 600,
        "name": "pitcher_plant",
        "displayName": "Pitcher Plant",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12508,
        "minStateId": 12507,
        "maxStateId": 12508,
        "states": [
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            }
        ],
        "drops": [
            210
        ],
        "boundingBox": "empty"
    },
    {
        "id": 601,
        "name": "beetroots",
        "displayName": "Beetroots",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12509,
        "minStateId": 12509,
        "maxStateId": 12512,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 4,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "drops": [
            1109
        ],
        "boundingBox": "empty"
    },
    {
        "id": 602,
        "name": "dirt_path",
        "displayName": "Dirt Path",
        "hardness": 0.65,
        "resistance": 0.65,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12513,
        "minStateId": 12513,
        "maxStateId": 12513,
        "states": [],
        "drops": [
            15
        ],
        "boundingBox": "block"
    },
    {
        "id": 603,
        "name": "end_gateway",
        "displayName": "End Gateway",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 1,
        "defaultState": 12514,
        "minStateId": 12514,
        "maxStateId": 12514,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 604,
        "name": "repeating_command_block",
        "displayName": "Repeating Command Block",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12521,
        "minStateId": 12515,
        "maxStateId": 12526,
        "states": [
            {
                "name": "conditional",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "harvestTools": {},
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 605,
        "name": "chain_command_block",
        "displayName": "Chain Command Block",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12533,
        "minStateId": 12527,
        "maxStateId": 12538,
        "states": [
            {
                "name": "conditional",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "harvestTools": {},
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 606,
        "name": "frosted_ice",
        "displayName": "Frosted Ice",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12539,
        "minStateId": 12539,
        "maxStateId": 12542,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 4,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 607,
        "name": "magma_block",
        "displayName": "Magma Block",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 3,
        "filterLight": 15,
        "defaultState": 12543,
        "minStateId": 12543,
        "maxStateId": 12543,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            494
        ],
        "boundingBox": "block"
    },
    {
        "id": 608,
        "name": "nether_wart_block",
        "displayName": "Nether Wart Block",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12544,
        "minStateId": 12544,
        "maxStateId": 12544,
        "states": [],
        "drops": [
            495
        ],
        "boundingBox": "block"
    },
    {
        "id": 609,
        "name": "red_nether_bricks",
        "displayName": "Red Nether Bricks",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12545,
        "minStateId": 12545,
        "maxStateId": 12545,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            497
        ],
        "boundingBox": "block"
    },
    {
        "id": 610,
        "name": "bone_block",
        "displayName": "Bone Block",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12547,
        "minStateId": 12546,
        "maxStateId": 12548,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            498
        ],
        "boundingBox": "block"
    },
    {
        "id": 611,
        "name": "structure_void",
        "displayName": "Structure Void",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12549,
        "minStateId": 12549,
        "maxStateId": 12549,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 612,
        "name": "observer",
        "displayName": "Observer",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12555,
        "minStateId": 12550,
        "maxStateId": 12561,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            644
        ],
        "boundingBox": "block"
    },
    {
        "id": 613,
        "name": "shulker_box",
        "displayName": "Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12566,
        "minStateId": 12562,
        "maxStateId": 12567,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            500
        ],
        "boundingBox": "block"
    },
    {
        "id": 614,
        "name": "white_shulker_box",
        "displayName": "White Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12572,
        "minStateId": 12568,
        "maxStateId": 12573,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            501
        ],
        "boundingBox": "block"
    },
    {
        "id": 615,
        "name": "orange_shulker_box",
        "displayName": "Orange Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12578,
        "minStateId": 12574,
        "maxStateId": 12579,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            502
        ],
        "boundingBox": "block"
    },
    {
        "id": 616,
        "name": "magenta_shulker_box",
        "displayName": "Magenta Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12584,
        "minStateId": 12580,
        "maxStateId": 12585,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            503
        ],
        "boundingBox": "block"
    },
    {
        "id": 617,
        "name": "light_blue_shulker_box",
        "displayName": "Light Blue Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12590,
        "minStateId": 12586,
        "maxStateId": 12591,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            504
        ],
        "boundingBox": "block"
    },
    {
        "id": 618,
        "name": "yellow_shulker_box",
        "displayName": "Yellow Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12596,
        "minStateId": 12592,
        "maxStateId": 12597,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            505
        ],
        "boundingBox": "block"
    },
    {
        "id": 619,
        "name": "lime_shulker_box",
        "displayName": "Lime Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12602,
        "minStateId": 12598,
        "maxStateId": 12603,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            506
        ],
        "boundingBox": "block"
    },
    {
        "id": 620,
        "name": "pink_shulker_box",
        "displayName": "Pink Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12608,
        "minStateId": 12604,
        "maxStateId": 12609,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            507
        ],
        "boundingBox": "block"
    },
    {
        "id": 621,
        "name": "gray_shulker_box",
        "displayName": "Gray Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12614,
        "minStateId": 12610,
        "maxStateId": 12615,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            508
        ],
        "boundingBox": "block"
    },
    {
        "id": 622,
        "name": "light_gray_shulker_box",
        "displayName": "Light Gray Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12620,
        "minStateId": 12616,
        "maxStateId": 12621,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            509
        ],
        "boundingBox": "block"
    },
    {
        "id": 623,
        "name": "cyan_shulker_box",
        "displayName": "Cyan Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12626,
        "minStateId": 12622,
        "maxStateId": 12627,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            510
        ],
        "boundingBox": "block"
    },
    {
        "id": 624,
        "name": "purple_shulker_box",
        "displayName": "Purple Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12632,
        "minStateId": 12628,
        "maxStateId": 12633,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            511
        ],
        "boundingBox": "block"
    },
    {
        "id": 625,
        "name": "blue_shulker_box",
        "displayName": "Blue Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12638,
        "minStateId": 12634,
        "maxStateId": 12639,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            512
        ],
        "boundingBox": "block"
    },
    {
        "id": 626,
        "name": "brown_shulker_box",
        "displayName": "Brown Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12644,
        "minStateId": 12640,
        "maxStateId": 12645,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            513
        ],
        "boundingBox": "block"
    },
    {
        "id": 627,
        "name": "green_shulker_box",
        "displayName": "Green Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12650,
        "minStateId": 12646,
        "maxStateId": 12651,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            514
        ],
        "boundingBox": "block"
    },
    {
        "id": 628,
        "name": "red_shulker_box",
        "displayName": "Red Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12656,
        "minStateId": 12652,
        "maxStateId": 12657,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            515
        ],
        "boundingBox": "block"
    },
    {
        "id": 629,
        "name": "black_shulker_box",
        "displayName": "Black Shulker Box",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 1,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12662,
        "minStateId": 12658,
        "maxStateId": 12663,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            }
        ],
        "drops": [
            516
        ],
        "boundingBox": "block"
    },
    {
        "id": 630,
        "name": "white_glazed_terracotta",
        "displayName": "White Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12664,
        "minStateId": 12664,
        "maxStateId": 12667,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            517
        ],
        "boundingBox": "block"
    },
    {
        "id": 631,
        "name": "orange_glazed_terracotta",
        "displayName": "Orange Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12668,
        "minStateId": 12668,
        "maxStateId": 12671,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            518
        ],
        "boundingBox": "block"
    },
    {
        "id": 632,
        "name": "magenta_glazed_terracotta",
        "displayName": "Magenta Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12672,
        "minStateId": 12672,
        "maxStateId": 12675,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            519
        ],
        "boundingBox": "block"
    },
    {
        "id": 633,
        "name": "light_blue_glazed_terracotta",
        "displayName": "Light Blue Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12676,
        "minStateId": 12676,
        "maxStateId": 12679,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            520
        ],
        "boundingBox": "block"
    },
    {
        "id": 634,
        "name": "yellow_glazed_terracotta",
        "displayName": "Yellow Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12680,
        "minStateId": 12680,
        "maxStateId": 12683,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            521
        ],
        "boundingBox": "block"
    },
    {
        "id": 635,
        "name": "lime_glazed_terracotta",
        "displayName": "Lime Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12684,
        "minStateId": 12684,
        "maxStateId": 12687,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            522
        ],
        "boundingBox": "block"
    },
    {
        "id": 636,
        "name": "pink_glazed_terracotta",
        "displayName": "Pink Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12688,
        "minStateId": 12688,
        "maxStateId": 12691,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            523
        ],
        "boundingBox": "block"
    },
    {
        "id": 637,
        "name": "gray_glazed_terracotta",
        "displayName": "Gray Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12692,
        "minStateId": 12692,
        "maxStateId": 12695,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            524
        ],
        "boundingBox": "block"
    },
    {
        "id": 638,
        "name": "light_gray_glazed_terracotta",
        "displayName": "Light Gray Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12696,
        "minStateId": 12696,
        "maxStateId": 12699,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            525
        ],
        "boundingBox": "block"
    },
    {
        "id": 639,
        "name": "cyan_glazed_terracotta",
        "displayName": "Cyan Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12700,
        "minStateId": 12700,
        "maxStateId": 12703,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            526
        ],
        "boundingBox": "block"
    },
    {
        "id": 640,
        "name": "purple_glazed_terracotta",
        "displayName": "Purple Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12704,
        "minStateId": 12704,
        "maxStateId": 12707,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            527
        ],
        "boundingBox": "block"
    },
    {
        "id": 641,
        "name": "blue_glazed_terracotta",
        "displayName": "Blue Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12708,
        "minStateId": 12708,
        "maxStateId": 12711,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            528
        ],
        "boundingBox": "block"
    },
    {
        "id": 642,
        "name": "brown_glazed_terracotta",
        "displayName": "Brown Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12712,
        "minStateId": 12712,
        "maxStateId": 12715,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            529
        ],
        "boundingBox": "block"
    },
    {
        "id": 643,
        "name": "green_glazed_terracotta",
        "displayName": "Green Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12716,
        "minStateId": 12716,
        "maxStateId": 12719,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            530
        ],
        "boundingBox": "block"
    },
    {
        "id": 644,
        "name": "red_glazed_terracotta",
        "displayName": "Red Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12720,
        "minStateId": 12720,
        "maxStateId": 12723,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            531
        ],
        "boundingBox": "block"
    },
    {
        "id": 645,
        "name": "black_glazed_terracotta",
        "displayName": "Black Glazed Terracotta",
        "hardness": 1.4,
        "resistance": 1.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12724,
        "minStateId": 12724,
        "maxStateId": 12727,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            532
        ],
        "boundingBox": "block"
    },
    {
        "id": 646,
        "name": "white_concrete",
        "displayName": "White Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12728,
        "minStateId": 12728,
        "maxStateId": 12728,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            533
        ],
        "boundingBox": "block"
    },
    {
        "id": 647,
        "name": "orange_concrete",
        "displayName": "Orange Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12729,
        "minStateId": 12729,
        "maxStateId": 12729,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            534
        ],
        "boundingBox": "block"
    },
    {
        "id": 648,
        "name": "magenta_concrete",
        "displayName": "Magenta Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12730,
        "minStateId": 12730,
        "maxStateId": 12730,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            535
        ],
        "boundingBox": "block"
    },
    {
        "id": 649,
        "name": "light_blue_concrete",
        "displayName": "Light Blue Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12731,
        "minStateId": 12731,
        "maxStateId": 12731,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            536
        ],
        "boundingBox": "block"
    },
    {
        "id": 650,
        "name": "yellow_concrete",
        "displayName": "Yellow Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12732,
        "minStateId": 12732,
        "maxStateId": 12732,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            537
        ],
        "boundingBox": "block"
    },
    {
        "id": 651,
        "name": "lime_concrete",
        "displayName": "Lime Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12733,
        "minStateId": 12733,
        "maxStateId": 12733,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            538
        ],
        "boundingBox": "block"
    },
    {
        "id": 652,
        "name": "pink_concrete",
        "displayName": "Pink Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12734,
        "minStateId": 12734,
        "maxStateId": 12734,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            539
        ],
        "boundingBox": "block"
    },
    {
        "id": 653,
        "name": "gray_concrete",
        "displayName": "Gray Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12735,
        "minStateId": 12735,
        "maxStateId": 12735,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            540
        ],
        "boundingBox": "block"
    },
    {
        "id": 654,
        "name": "light_gray_concrete",
        "displayName": "Light Gray Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12736,
        "minStateId": 12736,
        "maxStateId": 12736,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            541
        ],
        "boundingBox": "block"
    },
    {
        "id": 655,
        "name": "cyan_concrete",
        "displayName": "Cyan Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12737,
        "minStateId": 12737,
        "maxStateId": 12737,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            542
        ],
        "boundingBox": "block"
    },
    {
        "id": 656,
        "name": "purple_concrete",
        "displayName": "Purple Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12738,
        "minStateId": 12738,
        "maxStateId": 12738,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            543
        ],
        "boundingBox": "block"
    },
    {
        "id": 657,
        "name": "blue_concrete",
        "displayName": "Blue Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12739,
        "minStateId": 12739,
        "maxStateId": 12739,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            544
        ],
        "boundingBox": "block"
    },
    {
        "id": 658,
        "name": "brown_concrete",
        "displayName": "Brown Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12740,
        "minStateId": 12740,
        "maxStateId": 12740,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            545
        ],
        "boundingBox": "block"
    },
    {
        "id": 659,
        "name": "green_concrete",
        "displayName": "Green Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12741,
        "minStateId": 12741,
        "maxStateId": 12741,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            546
        ],
        "boundingBox": "block"
    },
    {
        "id": 660,
        "name": "red_concrete",
        "displayName": "Red Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12742,
        "minStateId": 12742,
        "maxStateId": 12742,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            547
        ],
        "boundingBox": "block"
    },
    {
        "id": 661,
        "name": "black_concrete",
        "displayName": "Black Concrete",
        "hardness": 1.8,
        "resistance": 1.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12743,
        "minStateId": 12743,
        "maxStateId": 12743,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            548
        ],
        "boundingBox": "block"
    },
    {
        "id": 662,
        "name": "white_concrete_powder",
        "displayName": "White Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12744,
        "minStateId": 12744,
        "maxStateId": 12744,
        "states": [],
        "drops": [
            549
        ],
        "boundingBox": "block"
    },
    {
        "id": 663,
        "name": "orange_concrete_powder",
        "displayName": "Orange Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12745,
        "minStateId": 12745,
        "maxStateId": 12745,
        "states": [],
        "drops": [
            550
        ],
        "boundingBox": "block"
    },
    {
        "id": 664,
        "name": "magenta_concrete_powder",
        "displayName": "Magenta Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12746,
        "minStateId": 12746,
        "maxStateId": 12746,
        "states": [],
        "drops": [
            551
        ],
        "boundingBox": "block"
    },
    {
        "id": 665,
        "name": "light_blue_concrete_powder",
        "displayName": "Light Blue Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12747,
        "minStateId": 12747,
        "maxStateId": 12747,
        "states": [],
        "drops": [
            552
        ],
        "boundingBox": "block"
    },
    {
        "id": 666,
        "name": "yellow_concrete_powder",
        "displayName": "Yellow Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12748,
        "minStateId": 12748,
        "maxStateId": 12748,
        "states": [],
        "drops": [
            553
        ],
        "boundingBox": "block"
    },
    {
        "id": 667,
        "name": "lime_concrete_powder",
        "displayName": "Lime Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12749,
        "minStateId": 12749,
        "maxStateId": 12749,
        "states": [],
        "drops": [
            554
        ],
        "boundingBox": "block"
    },
    {
        "id": 668,
        "name": "pink_concrete_powder",
        "displayName": "Pink Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12750,
        "minStateId": 12750,
        "maxStateId": 12750,
        "states": [],
        "drops": [
            555
        ],
        "boundingBox": "block"
    },
    {
        "id": 669,
        "name": "gray_concrete_powder",
        "displayName": "Gray Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12751,
        "minStateId": 12751,
        "maxStateId": 12751,
        "states": [],
        "drops": [
            556
        ],
        "boundingBox": "block"
    },
    {
        "id": 670,
        "name": "light_gray_concrete_powder",
        "displayName": "Light Gray Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12752,
        "minStateId": 12752,
        "maxStateId": 12752,
        "states": [],
        "drops": [
            557
        ],
        "boundingBox": "block"
    },
    {
        "id": 671,
        "name": "cyan_concrete_powder",
        "displayName": "Cyan Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12753,
        "minStateId": 12753,
        "maxStateId": 12753,
        "states": [],
        "drops": [
            558
        ],
        "boundingBox": "block"
    },
    {
        "id": 672,
        "name": "purple_concrete_powder",
        "displayName": "Purple Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12754,
        "minStateId": 12754,
        "maxStateId": 12754,
        "states": [],
        "drops": [
            559
        ],
        "boundingBox": "block"
    },
    {
        "id": 673,
        "name": "blue_concrete_powder",
        "displayName": "Blue Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12755,
        "minStateId": 12755,
        "maxStateId": 12755,
        "states": [],
        "drops": [
            560
        ],
        "boundingBox": "block"
    },
    {
        "id": 674,
        "name": "brown_concrete_powder",
        "displayName": "Brown Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12756,
        "minStateId": 12756,
        "maxStateId": 12756,
        "states": [],
        "drops": [
            561
        ],
        "boundingBox": "block"
    },
    {
        "id": 675,
        "name": "green_concrete_powder",
        "displayName": "Green Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12757,
        "minStateId": 12757,
        "maxStateId": 12757,
        "states": [],
        "drops": [
            562
        ],
        "boundingBox": "block"
    },
    {
        "id": 676,
        "name": "red_concrete_powder",
        "displayName": "Red Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12758,
        "minStateId": 12758,
        "maxStateId": 12758,
        "states": [],
        "drops": [
            563
        ],
        "boundingBox": "block"
    },
    {
        "id": 677,
        "name": "black_concrete_powder",
        "displayName": "Black Concrete Powder",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12759,
        "minStateId": 12759,
        "maxStateId": 12759,
        "states": [],
        "drops": [
            564
        ],
        "boundingBox": "block"
    },
    {
        "id": 678,
        "name": "kelp",
        "displayName": "Kelp",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12760,
        "minStateId": 12760,
        "maxStateId": 12785,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 26,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25"
                ]
            }
        ],
        "drops": [
            222
        ],
        "boundingBox": "empty"
    },
    {
        "id": 679,
        "name": "kelp_plant",
        "displayName": "Kelp Plant",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12786,
        "minStateId": 12786,
        "maxStateId": 12786,
        "states": [],
        "drops": [
            222
        ],
        "boundingBox": "empty"
    },
    {
        "id": 680,
        "name": "dried_kelp_block",
        "displayName": "Dried Kelp Block",
        "hardness": 0.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12787,
        "minStateId": 12787,
        "maxStateId": 12787,
        "states": [],
        "drops": [
            883
        ],
        "boundingBox": "block"
    },
    {
        "id": 681,
        "name": "turtle_egg",
        "displayName": "Turtle Egg",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12788,
        "minStateId": 12788,
        "maxStateId": 12799,
        "states": [
            {
                "name": "eggs",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "hatch",
                "type": "int",
                "num_values": 3,
                "values": [
                    "0",
                    "1",
                    "2"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 682,
        "name": "sniffer_egg",
        "displayName": "Sniffer Egg",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12800,
        "minStateId": 12800,
        "maxStateId": 12802,
        "states": [
            {
                "name": "hatch",
                "type": "int",
                "num_values": 3,
                "values": [
                    "0",
                    "1",
                    "2"
                ]
            }
        ],
        "drops": [
            566
        ],
        "boundingBox": "block"
    },
    {
        "id": 683,
        "name": "dead_tube_coral_block",
        "displayName": "Dead Tube Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12803,
        "minStateId": 12803,
        "maxStateId": 12803,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            567
        ],
        "boundingBox": "block"
    },
    {
        "id": 684,
        "name": "dead_brain_coral_block",
        "displayName": "Dead Brain Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12804,
        "minStateId": 12804,
        "maxStateId": 12804,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            568
        ],
        "boundingBox": "block"
    },
    {
        "id": 685,
        "name": "dead_bubble_coral_block",
        "displayName": "Dead Bubble Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12805,
        "minStateId": 12805,
        "maxStateId": 12805,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            569
        ],
        "boundingBox": "block"
    },
    {
        "id": 686,
        "name": "dead_fire_coral_block",
        "displayName": "Dead Fire Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12806,
        "minStateId": 12806,
        "maxStateId": 12806,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            570
        ],
        "boundingBox": "block"
    },
    {
        "id": 687,
        "name": "dead_horn_coral_block",
        "displayName": "Dead Horn Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12807,
        "minStateId": 12807,
        "maxStateId": 12807,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            571
        ],
        "boundingBox": "block"
    },
    {
        "id": 688,
        "name": "tube_coral_block",
        "displayName": "Tube Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12808,
        "minStateId": 12808,
        "maxStateId": 12808,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            567
        ],
        "boundingBox": "block"
    },
    {
        "id": 689,
        "name": "brain_coral_block",
        "displayName": "Brain Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12809,
        "minStateId": 12809,
        "maxStateId": 12809,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            568
        ],
        "boundingBox": "block"
    },
    {
        "id": 690,
        "name": "bubble_coral_block",
        "displayName": "Bubble Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12810,
        "minStateId": 12810,
        "maxStateId": 12810,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            569
        ],
        "boundingBox": "block"
    },
    {
        "id": 691,
        "name": "fire_coral_block",
        "displayName": "Fire Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12811,
        "minStateId": 12811,
        "maxStateId": 12811,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            570
        ],
        "boundingBox": "block"
    },
    {
        "id": 692,
        "name": "horn_coral_block",
        "displayName": "Horn Coral Block",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12812,
        "minStateId": 12812,
        "maxStateId": 12812,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            571
        ],
        "boundingBox": "block"
    },
    {
        "id": 693,
        "name": "dead_tube_coral",
        "displayName": "Dead Tube Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12813,
        "minStateId": 12813,
        "maxStateId": 12814,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 694,
        "name": "dead_brain_coral",
        "displayName": "Dead Brain Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12815,
        "minStateId": 12815,
        "maxStateId": 12816,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 695,
        "name": "dead_bubble_coral",
        "displayName": "Dead Bubble Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12817,
        "minStateId": 12817,
        "maxStateId": 12818,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 696,
        "name": "dead_fire_coral",
        "displayName": "Dead Fire Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12819,
        "minStateId": 12819,
        "maxStateId": 12820,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 697,
        "name": "dead_horn_coral",
        "displayName": "Dead Horn Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12821,
        "minStateId": 12821,
        "maxStateId": 12822,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 698,
        "name": "tube_coral",
        "displayName": "Tube Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12823,
        "minStateId": 12823,
        "maxStateId": 12824,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 699,
        "name": "brain_coral",
        "displayName": "Brain Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12825,
        "minStateId": 12825,
        "maxStateId": 12826,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 700,
        "name": "bubble_coral",
        "displayName": "Bubble Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12827,
        "minStateId": 12827,
        "maxStateId": 12828,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 701,
        "name": "fire_coral",
        "displayName": "Fire Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12829,
        "minStateId": 12829,
        "maxStateId": 12830,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 702,
        "name": "horn_coral",
        "displayName": "Horn Coral",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12831,
        "minStateId": 12831,
        "maxStateId": 12832,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 703,
        "name": "dead_tube_coral_fan",
        "displayName": "Dead Tube Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12833,
        "minStateId": 12833,
        "maxStateId": 12834,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 704,
        "name": "dead_brain_coral_fan",
        "displayName": "Dead Brain Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12835,
        "minStateId": 12835,
        "maxStateId": 12836,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 705,
        "name": "dead_bubble_coral_fan",
        "displayName": "Dead Bubble Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12837,
        "minStateId": 12837,
        "maxStateId": 12838,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 706,
        "name": "dead_fire_coral_fan",
        "displayName": "Dead Fire Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12839,
        "minStateId": 12839,
        "maxStateId": 12840,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 707,
        "name": "dead_horn_coral_fan",
        "displayName": "Dead Horn Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12841,
        "minStateId": 12841,
        "maxStateId": 12842,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 708,
        "name": "tube_coral_fan",
        "displayName": "Tube Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12843,
        "minStateId": 12843,
        "maxStateId": 12844,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 709,
        "name": "brain_coral_fan",
        "displayName": "Brain Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12845,
        "minStateId": 12845,
        "maxStateId": 12846,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 710,
        "name": "bubble_coral_fan",
        "displayName": "Bubble Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12847,
        "minStateId": 12847,
        "maxStateId": 12848,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 711,
        "name": "fire_coral_fan",
        "displayName": "Fire Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12849,
        "minStateId": 12849,
        "maxStateId": 12850,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 712,
        "name": "horn_coral_fan",
        "displayName": "Horn Coral Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12851,
        "minStateId": 12851,
        "maxStateId": 12852,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 713,
        "name": "dead_tube_coral_wall_fan",
        "displayName": "Dead Tube Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12853,
        "minStateId": 12853,
        "maxStateId": 12860,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 714,
        "name": "dead_brain_coral_wall_fan",
        "displayName": "Dead Brain Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12861,
        "minStateId": 12861,
        "maxStateId": 12868,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 715,
        "name": "dead_bubble_coral_wall_fan",
        "displayName": "Dead Bubble Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12869,
        "minStateId": 12869,
        "maxStateId": 12876,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 716,
        "name": "dead_fire_coral_wall_fan",
        "displayName": "Dead Fire Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12877,
        "minStateId": 12877,
        "maxStateId": 12884,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 717,
        "name": "dead_horn_coral_wall_fan",
        "displayName": "Dead Horn Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12885,
        "minStateId": 12885,
        "maxStateId": 12892,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 718,
        "name": "tube_coral_wall_fan",
        "displayName": "Tube Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12893,
        "minStateId": 12893,
        "maxStateId": 12900,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 719,
        "name": "brain_coral_wall_fan",
        "displayName": "Brain Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12901,
        "minStateId": 12901,
        "maxStateId": 12908,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 720,
        "name": "bubble_coral_wall_fan",
        "displayName": "Bubble Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12909,
        "minStateId": 12909,
        "maxStateId": 12916,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 721,
        "name": "fire_coral_wall_fan",
        "displayName": "Fire Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12917,
        "minStateId": 12917,
        "maxStateId": 12924,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 722,
        "name": "horn_coral_wall_fan",
        "displayName": "Horn Coral Wall Fan",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12925,
        "minStateId": 12925,
        "maxStateId": 12932,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 723,
        "name": "sea_pickle",
        "displayName": "Sea Pickle",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 6,
        "filterLight": 1,
        "defaultState": 12933,
        "minStateId": 12933,
        "maxStateId": 12940,
        "states": [
            {
                "name": "pickles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            179
        ],
        "boundingBox": "block"
    },
    {
        "id": 724,
        "name": "blue_ice",
        "displayName": "Blue Ice",
        "hardness": 2.8,
        "resistance": 2.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 12941,
        "minStateId": 12941,
        "maxStateId": 12941,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 725,
        "name": "conduit",
        "displayName": "Conduit",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 1,
        "defaultState": 12942,
        "minStateId": 12942,
        "maxStateId": 12943,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            598
        ],
        "boundingBox": "block"
    },
    {
        "id": 726,
        "name": "bamboo_sapling",
        "displayName": "Bamboo Shoot",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12944,
        "minStateId": 12944,
        "maxStateId": 12944,
        "states": [],
        "drops": [
            229
        ],
        "boundingBox": "empty"
    },
    {
        "id": 727,
        "name": "bamboo",
        "displayName": "Bamboo",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12945,
        "minStateId": 12945,
        "maxStateId": 12956,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            },
            {
                "name": "leaves",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "small",
                    "large"
                ]
            },
            {
                "name": "stage",
                "type": "int",
                "num_values": 2,
                "values": [
                    "0",
                    "1"
                ]
            }
        ],
        "drops": [
            229
        ],
        "boundingBox": "block"
    },
    {
        "id": 728,
        "name": "potted_bamboo",
        "displayName": "Potted Bamboo",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12957,
        "minStateId": 12957,
        "maxStateId": 12957,
        "states": [],
        "drops": [
            1050,
            229
        ],
        "boundingBox": "block"
    },
    {
        "id": 729,
        "name": "void_air",
        "displayName": "Void Air",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12958,
        "minStateId": 12958,
        "maxStateId": 12958,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 730,
        "name": "cave_air",
        "displayName": "Cave Air",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12959,
        "minStateId": 12959,
        "maxStateId": 12959,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 731,
        "name": "bubble_column",
        "displayName": "Bubble Column",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 12960,
        "minStateId": 12960,
        "maxStateId": 12961,
        "states": [
            {
                "name": "drag",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 732,
        "name": "polished_granite_stairs",
        "displayName": "Polished Granite Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 12973,
        "minStateId": 12962,
        "maxStateId": 13041,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            599
        ],
        "boundingBox": "block"
    },
    {
        "id": 733,
        "name": "smooth_red_sandstone_stairs",
        "displayName": "Smooth Red Sandstone Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13053,
        "minStateId": 13042,
        "maxStateId": 13121,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            600
        ],
        "boundingBox": "block"
    },
    {
        "id": 734,
        "name": "mossy_stone_brick_stairs",
        "displayName": "Mossy Stone Brick Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13133,
        "minStateId": 13122,
        "maxStateId": 13201,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            601
        ],
        "boundingBox": "block"
    },
    {
        "id": 735,
        "name": "polished_diorite_stairs",
        "displayName": "Polished Diorite Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13213,
        "minStateId": 13202,
        "maxStateId": 13281,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            602
        ],
        "boundingBox": "block"
    },
    {
        "id": 736,
        "name": "mossy_cobblestone_stairs",
        "displayName": "Mossy Cobblestone Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13293,
        "minStateId": 13282,
        "maxStateId": 13361,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            603
        ],
        "boundingBox": "block"
    },
    {
        "id": 737,
        "name": "end_stone_brick_stairs",
        "displayName": "End Stone Brick Stairs",
        "hardness": 3.0,
        "resistance": 9.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13373,
        "minStateId": 13362,
        "maxStateId": 13441,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            604
        ],
        "boundingBox": "block"
    },
    {
        "id": 738,
        "name": "stone_stairs",
        "displayName": "Stone Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13453,
        "minStateId": 13442,
        "maxStateId": 13521,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            605
        ],
        "boundingBox": "block"
    },
    {
        "id": 739,
        "name": "smooth_sandstone_stairs",
        "displayName": "Smooth Sandstone Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13533,
        "minStateId": 13522,
        "maxStateId": 13601,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            606
        ],
        "boundingBox": "block"
    },
    {
        "id": 740,
        "name": "smooth_quartz_stairs",
        "displayName": "Smooth Quartz Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13613,
        "minStateId": 13602,
        "maxStateId": 13681,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            607
        ],
        "boundingBox": "block"
    },
    {
        "id": 741,
        "name": "granite_stairs",
        "displayName": "Granite Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13693,
        "minStateId": 13682,
        "maxStateId": 13761,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            608
        ],
        "boundingBox": "block"
    },
    {
        "id": 742,
        "name": "andesite_stairs",
        "displayName": "Andesite Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13773,
        "minStateId": 13762,
        "maxStateId": 13841,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            609
        ],
        "boundingBox": "block"
    },
    {
        "id": 743,
        "name": "red_nether_brick_stairs",
        "displayName": "Red Nether Brick Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13853,
        "minStateId": 13842,
        "maxStateId": 13921,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            610
        ],
        "boundingBox": "block"
    },
    {
        "id": 744,
        "name": "polished_andesite_stairs",
        "displayName": "Polished Andesite Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 13933,
        "minStateId": 13922,
        "maxStateId": 14001,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            611
        ],
        "boundingBox": "block"
    },
    {
        "id": 745,
        "name": "diorite_stairs",
        "displayName": "Diorite Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14013,
        "minStateId": 14002,
        "maxStateId": 14081,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            612
        ],
        "boundingBox": "block"
    },
    {
        "id": 746,
        "name": "polished_granite_slab",
        "displayName": "Polished Granite Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14085,
        "minStateId": 14082,
        "maxStateId": 14087,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            617
        ],
        "boundingBox": "block"
    },
    {
        "id": 747,
        "name": "smooth_red_sandstone_slab",
        "displayName": "Smooth Red Sandstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14091,
        "minStateId": 14088,
        "maxStateId": 14093,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            618
        ],
        "boundingBox": "block"
    },
    {
        "id": 748,
        "name": "mossy_stone_brick_slab",
        "displayName": "Mossy Stone Brick Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14097,
        "minStateId": 14094,
        "maxStateId": 14099,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            619
        ],
        "boundingBox": "block"
    },
    {
        "id": 749,
        "name": "polished_diorite_slab",
        "displayName": "Polished Diorite Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14103,
        "minStateId": 14100,
        "maxStateId": 14105,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            620
        ],
        "boundingBox": "block"
    },
    {
        "id": 750,
        "name": "mossy_cobblestone_slab",
        "displayName": "Mossy Cobblestone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14109,
        "minStateId": 14106,
        "maxStateId": 14111,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            621
        ],
        "boundingBox": "block"
    },
    {
        "id": 751,
        "name": "end_stone_brick_slab",
        "displayName": "End Stone Brick Slab",
        "hardness": 3.0,
        "resistance": 9.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14115,
        "minStateId": 14112,
        "maxStateId": 14117,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            622
        ],
        "boundingBox": "block"
    },
    {
        "id": 752,
        "name": "smooth_sandstone_slab",
        "displayName": "Smooth Sandstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14121,
        "minStateId": 14118,
        "maxStateId": 14123,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            623
        ],
        "boundingBox": "block"
    },
    {
        "id": 753,
        "name": "smooth_quartz_slab",
        "displayName": "Smooth Quartz Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14127,
        "minStateId": 14124,
        "maxStateId": 14129,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            624
        ],
        "boundingBox": "block"
    },
    {
        "id": 754,
        "name": "granite_slab",
        "displayName": "Granite Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14133,
        "minStateId": 14130,
        "maxStateId": 14135,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            625
        ],
        "boundingBox": "block"
    },
    {
        "id": 755,
        "name": "andesite_slab",
        "displayName": "Andesite Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14139,
        "minStateId": 14136,
        "maxStateId": 14141,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            626
        ],
        "boundingBox": "block"
    },
    {
        "id": 756,
        "name": "red_nether_brick_slab",
        "displayName": "Red Nether Brick Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14145,
        "minStateId": 14142,
        "maxStateId": 14147,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            627
        ],
        "boundingBox": "block"
    },
    {
        "id": 757,
        "name": "polished_andesite_slab",
        "displayName": "Polished Andesite Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14151,
        "minStateId": 14148,
        "maxStateId": 14153,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            628
        ],
        "boundingBox": "block"
    },
    {
        "id": 758,
        "name": "diorite_slab",
        "displayName": "Diorite Slab",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14157,
        "minStateId": 14154,
        "maxStateId": 14159,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            629
        ],
        "boundingBox": "block"
    },
    {
        "id": 759,
        "name": "brick_wall",
        "displayName": "Brick Wall",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14163,
        "minStateId": 14160,
        "maxStateId": 14483,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            377
        ],
        "boundingBox": "block"
    },
    {
        "id": 760,
        "name": "prismarine_wall",
        "displayName": "Prismarine Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14487,
        "minStateId": 14484,
        "maxStateId": 14807,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            378
        ],
        "boundingBox": "block"
    },
    {
        "id": 761,
        "name": "red_sandstone_wall",
        "displayName": "Red Sandstone Wall",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 14811,
        "minStateId": 14808,
        "maxStateId": 15131,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            379
        ],
        "boundingBox": "block"
    },
    {
        "id": 762,
        "name": "mossy_stone_brick_wall",
        "displayName": "Mossy Stone Brick Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 15135,
        "minStateId": 15132,
        "maxStateId": 15455,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            380
        ],
        "boundingBox": "block"
    },
    {
        "id": 763,
        "name": "granite_wall",
        "displayName": "Granite Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 15459,
        "minStateId": 15456,
        "maxStateId": 15779,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            381
        ],
        "boundingBox": "block"
    },
    {
        "id": 764,
        "name": "stone_brick_wall",
        "displayName": "Stone Brick Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 15783,
        "minStateId": 15780,
        "maxStateId": 16103,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            382
        ],
        "boundingBox": "block"
    },
    {
        "id": 765,
        "name": "mud_brick_wall",
        "displayName": "Mud Brick Wall",
        "hardness": 1.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 16107,
        "minStateId": 16104,
        "maxStateId": 16427,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            383
        ],
        "boundingBox": "block"
    },
    {
        "id": 766,
        "name": "nether_brick_wall",
        "displayName": "Nether Brick Wall",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 16431,
        "minStateId": 16428,
        "maxStateId": 16751,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            384
        ],
        "boundingBox": "block"
    },
    {
        "id": 767,
        "name": "andesite_wall",
        "displayName": "Andesite Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 16755,
        "minStateId": 16752,
        "maxStateId": 17075,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            385
        ],
        "boundingBox": "block"
    },
    {
        "id": 768,
        "name": "red_nether_brick_wall",
        "displayName": "Red Nether Brick Wall",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 17079,
        "minStateId": 17076,
        "maxStateId": 17399,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            386
        ],
        "boundingBox": "block"
    },
    {
        "id": 769,
        "name": "sandstone_wall",
        "displayName": "Sandstone Wall",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 17403,
        "minStateId": 17400,
        "maxStateId": 17723,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            387
        ],
        "boundingBox": "block"
    },
    {
        "id": 770,
        "name": "end_stone_brick_wall",
        "displayName": "End Stone Brick Wall",
        "hardness": 3.0,
        "resistance": 9.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 17727,
        "minStateId": 17724,
        "maxStateId": 18047,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            388
        ],
        "boundingBox": "block"
    },
    {
        "id": 771,
        "name": "diorite_wall",
        "displayName": "Diorite Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18051,
        "minStateId": 18048,
        "maxStateId": 18371,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            389
        ],
        "boundingBox": "block"
    },
    {
        "id": 772,
        "name": "scaffolding",
        "displayName": "Scaffolding",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18403,
        "minStateId": 18372,
        "maxStateId": 18403,
        "states": [
            {
                "name": "bottom",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "distance",
                "type": "int",
                "num_values": 8,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            634
        ],
        "boundingBox": "block"
    },
    {
        "id": 773,
        "name": "loom",
        "displayName": "Loom",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18404,
        "minStateId": 18404,
        "maxStateId": 18407,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "drops": [
            1145
        ],
        "boundingBox": "block"
    },
    {
        "id": 774,
        "name": "barrel",
        "displayName": "Barrel",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18409,
        "minStateId": 18408,
        "maxStateId": 18419,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1154
        ],
        "boundingBox": "block"
    },
    {
        "id": 775,
        "name": "smoker",
        "displayName": "Smoker",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18421,
        "minStateId": 18420,
        "maxStateId": 18427,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1155
        ],
        "boundingBox": "block"
    },
    {
        "id": 776,
        "name": "blast_furnace",
        "displayName": "Blast Furnace",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18429,
        "minStateId": 18428,
        "maxStateId": 18435,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1156
        ],
        "boundingBox": "block"
    },
    {
        "id": 777,
        "name": "cartography_table",
        "displayName": "Cartography Table",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18436,
        "minStateId": 18436,
        "maxStateId": 18436,
        "states": [],
        "drops": [
            1157
        ],
        "boundingBox": "block"
    },
    {
        "id": 778,
        "name": "fletching_table",
        "displayName": "Fletching Table",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18437,
        "minStateId": 18437,
        "maxStateId": 18437,
        "states": [],
        "drops": [
            1158
        ],
        "boundingBox": "block"
    },
    {
        "id": 779,
        "name": "grindstone",
        "displayName": "Grindstone",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18442,
        "minStateId": 18438,
        "maxStateId": 18449,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1159
        ],
        "boundingBox": "block"
    },
    {
        "id": 780,
        "name": "lectern",
        "displayName": "Lectern",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18453,
        "minStateId": 18450,
        "maxStateId": 18465,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "has_book",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            648
        ],
        "boundingBox": "block"
    },
    {
        "id": 781,
        "name": "smithing_table",
        "displayName": "Smithing Table",
        "hardness": 2.5,
        "resistance": 2.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18466,
        "minStateId": 18466,
        "maxStateId": 18466,
        "states": [],
        "drops": [
            1160
        ],
        "boundingBox": "block"
    },
    {
        "id": 782,
        "name": "stonecutter",
        "displayName": "Stonecutter",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18467,
        "minStateId": 18467,
        "maxStateId": 18470,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1161
        ],
        "boundingBox": "block"
    },
    {
        "id": 783,
        "name": "bell",
        "displayName": "Bell",
        "hardness": 5.0,
        "resistance": 5.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18472,
        "minStateId": 18471,
        "maxStateId": 18502,
        "states": [
            {
                "name": "attachment",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "floor",
                    "ceiling",
                    "single_wall",
                    "double_wall"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1162
        ],
        "boundingBox": "block"
    },
    {
        "id": 784,
        "name": "lantern",
        "displayName": "Lantern",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 0,
        "defaultState": 18506,
        "minStateId": 18503,
        "maxStateId": 18506,
        "states": [
            {
                "name": "hanging",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1163
        ],
        "boundingBox": "block"
    },
    {
        "id": 785,
        "name": "soul_lantern",
        "displayName": "Soul Lantern",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 10,
        "filterLight": 0,
        "defaultState": 18510,
        "minStateId": 18507,
        "maxStateId": 18510,
        "states": [
            {
                "name": "hanging",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1164
        ],
        "boundingBox": "block"
    },
    {
        "id": 786,
        "name": "campfire",
        "displayName": "Campfire",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 15,
        "filterLight": 0,
        "defaultState": 18514,
        "minStateId": 18511,
        "maxStateId": 18542,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "signal_fire",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            763
        ],
        "boundingBox": "block"
    },
    {
        "id": 787,
        "name": "soul_campfire",
        "displayName": "Soul Campfire",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 10,
        "filterLight": 0,
        "defaultState": 18546,
        "minStateId": 18543,
        "maxStateId": 18574,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "signal_fire",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            305
        ],
        "boundingBox": "block"
    },
    {
        "id": 788,
        "name": "sweet_berry_bush",
        "displayName": "Sweet Berry Bush",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18575,
        "minStateId": 18575,
        "maxStateId": 18578,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 4,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 789,
        "name": "warped_stem",
        "displayName": "Warped Stem",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18580,
        "minStateId": 18579,
        "maxStateId": 18581,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            121
        ],
        "boundingBox": "block"
    },
    {
        "id": 790,
        "name": "stripped_warped_stem",
        "displayName": "Stripped Warped Stem",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18583,
        "minStateId": 18582,
        "maxStateId": 18584,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            132
        ],
        "boundingBox": "block"
    },
    {
        "id": 791,
        "name": "warped_hyphae",
        "displayName": "Warped Hyphae",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18586,
        "minStateId": 18585,
        "maxStateId": 18587,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            153
        ],
        "boundingBox": "block"
    },
    {
        "id": 792,
        "name": "stripped_warped_hyphae",
        "displayName": "Stripped Warped Hyphae",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18589,
        "minStateId": 18588,
        "maxStateId": 18590,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            142
        ],
        "boundingBox": "block"
    },
    {
        "id": 793,
        "name": "warped_nylium",
        "displayName": "Warped Nylium",
        "hardness": 0.4,
        "resistance": 0.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18591,
        "minStateId": 18591,
        "maxStateId": 18591,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            303
        ],
        "boundingBox": "block"
    },
    {
        "id": 794,
        "name": "warped_fungus",
        "displayName": "Warped Fungus",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18592,
        "minStateId": 18592,
        "maxStateId": 18592,
        "states": [],
        "drops": [
            215
        ],
        "boundingBox": "empty"
    },
    {
        "id": 795,
        "name": "warped_wart_block",
        "displayName": "Warped Wart Block",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18593,
        "minStateId": 18593,
        "maxStateId": 18593,
        "states": [],
        "drops": [
            496
        ],
        "boundingBox": "block"
    },
    {
        "id": 796,
        "name": "warped_roots",
        "displayName": "Warped Roots",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18594,
        "minStateId": 18594,
        "maxStateId": 18594,
        "states": [],
        "drops": [
            217
        ],
        "boundingBox": "empty"
    },
    {
        "id": 797,
        "name": "nether_sprouts",
        "displayName": "Nether Sprouts",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18595,
        "minStateId": 18595,
        "maxStateId": 18595,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 798,
        "name": "crimson_stem",
        "displayName": "Crimson Stem",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18597,
        "minStateId": 18596,
        "maxStateId": 18598,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            120
        ],
        "boundingBox": "block"
    },
    {
        "id": 799,
        "name": "stripped_crimson_stem",
        "displayName": "Stripped Crimson Stem",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18600,
        "minStateId": 18599,
        "maxStateId": 18601,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            131
        ],
        "boundingBox": "block"
    },
    {
        "id": 800,
        "name": "crimson_hyphae",
        "displayName": "Crimson Hyphae",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18603,
        "minStateId": 18602,
        "maxStateId": 18604,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            152
        ],
        "boundingBox": "block"
    },
    {
        "id": 801,
        "name": "stripped_crimson_hyphae",
        "displayName": "Stripped Crimson Hyphae",
        "hardness": 2.0,
        "resistance": 2.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18606,
        "minStateId": 18605,
        "maxStateId": 18607,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            141
        ],
        "boundingBox": "block"
    },
    {
        "id": 802,
        "name": "crimson_nylium",
        "displayName": "Crimson Nylium",
        "hardness": 0.4,
        "resistance": 0.4,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18608,
        "minStateId": 18608,
        "maxStateId": 18608,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            303
        ],
        "boundingBox": "block"
    },
    {
        "id": 803,
        "name": "crimson_fungus",
        "displayName": "Crimson Fungus",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18609,
        "minStateId": 18609,
        "maxStateId": 18609,
        "states": [],
        "drops": [
            214
        ],
        "boundingBox": "empty"
    },
    {
        "id": 804,
        "name": "shroomlight",
        "displayName": "Shroomlight",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 15,
        "filterLight": 15,
        "defaultState": 18610,
        "minStateId": 18610,
        "maxStateId": 18610,
        "states": [],
        "drops": [
            1169
        ],
        "boundingBox": "block"
    },
    {
        "id": 805,
        "name": "weeping_vines",
        "displayName": "Weeping Vines",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18611,
        "minStateId": 18611,
        "maxStateId": 18636,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 26,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25"
                ]
            }
        ],
        "drops": [
            219
        ],
        "boundingBox": "empty"
    },
    {
        "id": 806,
        "name": "weeping_vines_plant",
        "displayName": "Weeping Vines Plant",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18637,
        "minStateId": 18637,
        "maxStateId": 18637,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 807,
        "name": "twisting_vines",
        "displayName": "Twisting Vines",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18638,
        "minStateId": 18638,
        "maxStateId": 18663,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 26,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 808,
        "name": "twisting_vines_plant",
        "displayName": "Twisting Vines Plant",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18664,
        "minStateId": 18664,
        "maxStateId": 18664,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 809,
        "name": "crimson_roots",
        "displayName": "Crimson Roots",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18665,
        "minStateId": 18665,
        "maxStateId": 18665,
        "states": [],
        "drops": [
            216
        ],
        "boundingBox": "empty"
    },
    {
        "id": 810,
        "name": "crimson_planks",
        "displayName": "Crimson Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18666,
        "minStateId": 18666,
        "maxStateId": 18666,
        "states": [],
        "drops": [
            32
        ],
        "boundingBox": "block"
    },
    {
        "id": 811,
        "name": "warped_planks",
        "displayName": "Warped Planks",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 18667,
        "minStateId": 18667,
        "maxStateId": 18667,
        "states": [],
        "drops": [
            33
        ],
        "boundingBox": "block"
    },
    {
        "id": 812,
        "name": "crimson_slab",
        "displayName": "Crimson Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18671,
        "minStateId": 18668,
        "maxStateId": 18673,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            240
        ],
        "boundingBox": "block"
    },
    {
        "id": 813,
        "name": "warped_slab",
        "displayName": "Warped Slab",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18677,
        "minStateId": 18674,
        "maxStateId": 18679,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            241
        ],
        "boundingBox": "block"
    },
    {
        "id": 814,
        "name": "crimson_pressure_plate",
        "displayName": "Crimson Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18681,
        "minStateId": 18680,
        "maxStateId": 18681,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            686
        ],
        "boundingBox": "empty"
    },
    {
        "id": 815,
        "name": "warped_pressure_plate",
        "displayName": "Warped Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18683,
        "minStateId": 18682,
        "maxStateId": 18683,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            687
        ],
        "boundingBox": "empty"
    },
    {
        "id": 816,
        "name": "crimson_fence",
        "displayName": "Crimson Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18715,
        "minStateId": 18684,
        "maxStateId": 18715,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            298
        ],
        "boundingBox": "block"
    },
    {
        "id": 817,
        "name": "warped_fence",
        "displayName": "Warped Fence",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18747,
        "minStateId": 18716,
        "maxStateId": 18747,
        "states": [
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            299
        ],
        "boundingBox": "block"
    },
    {
        "id": 818,
        "name": "crimson_trapdoor",
        "displayName": "Crimson Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18763,
        "minStateId": 18748,
        "maxStateId": 18811,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            710
        ],
        "boundingBox": "block"
    },
    {
        "id": 819,
        "name": "warped_trapdoor",
        "displayName": "Warped Trapdoor",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18827,
        "minStateId": 18812,
        "maxStateId": 18875,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            711
        ],
        "boundingBox": "block"
    },
    {
        "id": 820,
        "name": "crimson_fence_gate",
        "displayName": "Crimson Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18883,
        "minStateId": 18876,
        "maxStateId": 18907,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            721
        ],
        "boundingBox": "block"
    },
    {
        "id": 821,
        "name": "warped_fence_gate",
        "displayName": "Warped Fence Gate",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18915,
        "minStateId": 18908,
        "maxStateId": 18939,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "in_wall",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            722
        ],
        "boundingBox": "block"
    },
    {
        "id": 822,
        "name": "crimson_stairs",
        "displayName": "Crimson Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 18951,
        "minStateId": 18940,
        "maxStateId": 19019,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            371
        ],
        "boundingBox": "block"
    },
    {
        "id": 823,
        "name": "warped_stairs",
        "displayName": "Warped Stairs",
        "hardness": 2.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19031,
        "minStateId": 19020,
        "maxStateId": 19099,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            372
        ],
        "boundingBox": "block"
    },
    {
        "id": 824,
        "name": "crimson_button",
        "displayName": "Crimson Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19109,
        "minStateId": 19100,
        "maxStateId": 19123,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            671
        ],
        "boundingBox": "empty"
    },
    {
        "id": 825,
        "name": "warped_button",
        "displayName": "Warped Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19133,
        "minStateId": 19124,
        "maxStateId": 19147,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            672
        ],
        "boundingBox": "empty"
    },
    {
        "id": 826,
        "name": "crimson_door",
        "displayName": "Crimson Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19159,
        "minStateId": 19148,
        "maxStateId": 19211,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            698
        ],
        "boundingBox": "block"
    },
    {
        "id": 827,
        "name": "warped_door",
        "displayName": "Warped Door",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19223,
        "minStateId": 19212,
        "maxStateId": 19275,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "hinge",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "left",
                    "right"
                ]
            },
            {
                "name": "open",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            699
        ],
        "boundingBox": "block"
    },
    {
        "id": 828,
        "name": "crimson_sign",
        "displayName": "Crimson Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19277,
        "minStateId": 19276,
        "maxStateId": 19307,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            855
        ],
        "boundingBox": "empty"
    },
    {
        "id": 829,
        "name": "warped_sign",
        "displayName": "Warped Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19309,
        "minStateId": 19308,
        "maxStateId": 19339,
        "states": [
            {
                "name": "rotation",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            856
        ],
        "boundingBox": "empty"
    },
    {
        "id": 830,
        "name": "crimson_wall_sign",
        "displayName": "Crimson Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19341,
        "minStateId": 19340,
        "maxStateId": 19347,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            855
        ],
        "boundingBox": "empty"
    },
    {
        "id": 831,
        "name": "warped_wall_sign",
        "displayName": "Warped Sign",
        "hardness": 1.0,
        "resistance": 1.0,
        "stackSize": 16,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19349,
        "minStateId": 19348,
        "maxStateId": 19355,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            856
        ],
        "boundingBox": "empty"
    },
    {
        "id": 832,
        "name": "structure_block",
        "displayName": "Structure Block",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19357,
        "minStateId": 19356,
        "maxStateId": 19359,
        "states": [
            {
                "name": "mode",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "save",
                    "load",
                    "corner",
                    "data"
                ]
            }
        ],
        "harvestTools": {},
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 833,
        "name": "jigsaw",
        "displayName": "Jigsaw Block",
        "hardness": -1.0,
        "resistance": 3600000.0,
        "stackSize": 64,
        "diggable": false,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19370,
        "minStateId": 19360,
        "maxStateId": 19371,
        "states": [
            {
                "name": "orientation",
                "type": "enum",
                "num_values": 12,
                "values": [
                    "down_east",
                    "down_north",
                    "down_south",
                    "down_west",
                    "up_east",
                    "up_north",
                    "up_south",
                    "up_west",
                    "west_up",
                    "east_up",
                    "north_up",
                    "south_up"
                ]
            }
        ],
        "harvestTools": {},
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 834,
        "name": "composter",
        "displayName": "Composter",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19372,
        "minStateId": 19372,
        "maxStateId": 19380,
        "states": [
            {
                "name": "level",
                "type": "int",
                "num_values": 9,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8"
                ]
            }
        ],
        "drops": [
            1153
        ],
        "boundingBox": "block"
    },
    {
        "id": 835,
        "name": "target",
        "displayName": "Target",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19381,
        "minStateId": 19381,
        "maxStateId": 19396,
        "states": [
            {
                "name": "power",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            }
        ],
        "drops": [
            649
        ],
        "boundingBox": "block"
    },
    {
        "id": 836,
        "name": "bee_nest",
        "displayName": "Bee Nest",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19397,
        "minStateId": 19397,
        "maxStateId": 19420,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "honey_level",
                "type": "int",
                "num_values": 6,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 837,
        "name": "beehive",
        "displayName": "Beehive",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19421,
        "minStateId": 19421,
        "maxStateId": 19444,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "honey_level",
                "type": "int",
                "num_values": 6,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ]
            }
        ],
        "drops": [
            1172
        ],
        "boundingBox": "block"
    },
    {
        "id": 838,
        "name": "honey_block",
        "displayName": "Honey Block",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 19445,
        "minStateId": 19445,
        "maxStateId": 19445,
        "states": [],
        "drops": [
            643
        ],
        "boundingBox": "block"
    },
    {
        "id": 839,
        "name": "honeycomb_block",
        "displayName": "Honeycomb Block",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19446,
        "minStateId": 19446,
        "maxStateId": 19446,
        "states": [],
        "drops": [
            1174
        ],
        "boundingBox": "block"
    },
    {
        "id": 840,
        "name": "netherite_block",
        "displayName": "Block of Netherite",
        "hardness": 50.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19447,
        "minStateId": 19447,
        "maxStateId": 19447,
        "states": [],
        "harvestTools": {
            "799": true,
            "804": true
        },
        "drops": [
            78
        ],
        "boundingBox": "block"
    },
    {
        "id": 841,
        "name": "ancient_debris",
        "displayName": "Ancient Debris",
        "hardness": 30.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19448,
        "minStateId": 19448,
        "maxStateId": 19448,
        "states": [],
        "harvestTools": {
            "799": true,
            "804": true
        },
        "drops": [
            67
        ],
        "boundingBox": "block"
    },
    {
        "id": 842,
        "name": "crying_obsidian",
        "displayName": "Crying Obsidian",
        "hardness": 50.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 10,
        "filterLight": 15,
        "defaultState": 19449,
        "minStateId": 19449,
        "maxStateId": 19449,
        "states": [],
        "harvestTools": {
            "799": true,
            "804": true
        },
        "drops": [
            1176
        ],
        "boundingBox": "block"
    },
    {
        "id": 843,
        "name": "respawn_anchor",
        "displayName": "Respawn Anchor",
        "hardness": 50.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19450,
        "minStateId": 19450,
        "maxStateId": 19454,
        "states": [
            {
                "name": "charges",
                "type": "int",
                "num_values": 5,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            }
        ],
        "harvestTools": {
            "799": true,
            "804": true
        },
        "drops": [
            1189
        ],
        "boundingBox": "block"
    },
    {
        "id": 844,
        "name": "potted_crimson_fungus",
        "displayName": "Potted Crimson Fungus",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19455,
        "minStateId": 19455,
        "maxStateId": 19455,
        "states": [],
        "drops": [
            1050,
            214
        ],
        "boundingBox": "block"
    },
    {
        "id": 845,
        "name": "potted_warped_fungus",
        "displayName": "Potted Warped Fungus",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19456,
        "minStateId": 19456,
        "maxStateId": 19456,
        "states": [],
        "drops": [
            1050,
            215
        ],
        "boundingBox": "block"
    },
    {
        "id": 846,
        "name": "potted_crimson_roots",
        "displayName": "Potted Crimson Roots",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19457,
        "minStateId": 19457,
        "maxStateId": 19457,
        "states": [],
        "drops": [
            1050,
            216
        ],
        "boundingBox": "block"
    },
    {
        "id": 847,
        "name": "potted_warped_roots",
        "displayName": "Potted Warped Roots",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19458,
        "minStateId": 19458,
        "maxStateId": 19458,
        "states": [],
        "drops": [
            1050,
            217
        ],
        "boundingBox": "block"
    },
    {
        "id": 848,
        "name": "lodestone",
        "displayName": "Lodestone",
        "hardness": 3.5,
        "resistance": 3.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19459,
        "minStateId": 19459,
        "maxStateId": 19459,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1175
        ],
        "boundingBox": "block"
    },
    {
        "id": 849,
        "name": "blackstone",
        "displayName": "Blackstone",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19460,
        "minStateId": 19460,
        "maxStateId": 19460,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1177
        ],
        "boundingBox": "block"
    },
    {
        "id": 850,
        "name": "blackstone_stairs",
        "displayName": "Blackstone Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19472,
        "minStateId": 19461,
        "maxStateId": 19540,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1179
        ],
        "boundingBox": "block"
    },
    {
        "id": 851,
        "name": "blackstone_wall",
        "displayName": "Blackstone Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19544,
        "minStateId": 19541,
        "maxStateId": 19864,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            390
        ],
        "boundingBox": "block"
    },
    {
        "id": 852,
        "name": "blackstone_slab",
        "displayName": "Blackstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19868,
        "minStateId": 19865,
        "maxStateId": 19870,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1178
        ],
        "boundingBox": "block"
    },
    {
        "id": 853,
        "name": "polished_blackstone",
        "displayName": "Polished Blackstone",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19871,
        "minStateId": 19871,
        "maxStateId": 19871,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1181
        ],
        "boundingBox": "block"
    },
    {
        "id": 854,
        "name": "polished_blackstone_bricks",
        "displayName": "Polished Blackstone Bricks",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19872,
        "minStateId": 19872,
        "maxStateId": 19872,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1185
        ],
        "boundingBox": "block"
    },
    {
        "id": 855,
        "name": "cracked_polished_blackstone_bricks",
        "displayName": "Cracked Polished Blackstone Bricks",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19873,
        "minStateId": 19873,
        "maxStateId": 19873,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1188
        ],
        "boundingBox": "block"
    },
    {
        "id": 856,
        "name": "chiseled_polished_blackstone",
        "displayName": "Chiseled Polished Blackstone",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 19874,
        "minStateId": 19874,
        "maxStateId": 19874,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1184
        ],
        "boundingBox": "block"
    },
    {
        "id": 857,
        "name": "polished_blackstone_brick_slab",
        "displayName": "Polished Blackstone Brick Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19878,
        "minStateId": 19875,
        "maxStateId": 19880,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1186
        ],
        "boundingBox": "block"
    },
    {
        "id": 858,
        "name": "polished_blackstone_brick_stairs",
        "displayName": "Polished Blackstone Brick Stairs",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19892,
        "minStateId": 19881,
        "maxStateId": 19960,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1187
        ],
        "boundingBox": "block"
    },
    {
        "id": 859,
        "name": "polished_blackstone_brick_wall",
        "displayName": "Polished Blackstone Brick Wall",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 19964,
        "minStateId": 19961,
        "maxStateId": 20284,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            392
        ],
        "boundingBox": "block"
    },
    {
        "id": 860,
        "name": "gilded_blackstone",
        "displayName": "Gilded Blackstone",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 20285,
        "minStateId": 20285,
        "maxStateId": 20285,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1180
        ],
        "boundingBox": "block"
    },
    {
        "id": 861,
        "name": "polished_blackstone_stairs",
        "displayName": "Polished Blackstone Stairs",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20297,
        "minStateId": 20286,
        "maxStateId": 20365,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1183
        ],
        "boundingBox": "block"
    },
    {
        "id": 862,
        "name": "polished_blackstone_slab",
        "displayName": "Polished Blackstone Slab",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20369,
        "minStateId": 20366,
        "maxStateId": 20371,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            1182
        ],
        "boundingBox": "block"
    },
    {
        "id": 863,
        "name": "polished_blackstone_pressure_plate",
        "displayName": "Polished Blackstone Pressure Plate",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20373,
        "minStateId": 20372,
        "maxStateId": 20373,
        "states": [
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            674
        ],
        "boundingBox": "empty"
    },
    {
        "id": 864,
        "name": "polished_blackstone_button",
        "displayName": "Polished Blackstone Button",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20383,
        "minStateId": 20374,
        "maxStateId": 20397,
        "states": [
            {
                "name": "face",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "floor",
                    "wall",
                    "ceiling"
                ]
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            661
        ],
        "boundingBox": "empty"
    },
    {
        "id": 865,
        "name": "polished_blackstone_wall",
        "displayName": "Polished Blackstone Wall",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20401,
        "minStateId": 20398,
        "maxStateId": 20721,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            391
        ],
        "boundingBox": "block"
    },
    {
        "id": 866,
        "name": "chiseled_nether_bricks",
        "displayName": "Chiseled Nether Bricks",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 20722,
        "minStateId": 20722,
        "maxStateId": 20722,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            346
        ],
        "boundingBox": "block"
    },
    {
        "id": 867,
        "name": "cracked_nether_bricks",
        "displayName": "Cracked Nether Bricks",
        "hardness": 2.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 20723,
        "minStateId": 20723,
        "maxStateId": 20723,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            345
        ],
        "boundingBox": "block"
    },
    {
        "id": 868,
        "name": "quartz_bricks",
        "displayName": "Quartz Bricks",
        "hardness": 0.8,
        "resistance": 0.8,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 20724,
        "minStateId": 20724,
        "maxStateId": 20724,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            402
        ],
        "boundingBox": "block"
    },
    {
        "id": 869,
        "name": "candle",
        "displayName": "Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20728,
        "minStateId": 20725,
        "maxStateId": 20740,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1190
        ],
        "boundingBox": "block"
    },
    {
        "id": 870,
        "name": "white_candle",
        "displayName": "White Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20744,
        "minStateId": 20741,
        "maxStateId": 20756,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1191
        ],
        "boundingBox": "block"
    },
    {
        "id": 871,
        "name": "orange_candle",
        "displayName": "Orange Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20760,
        "minStateId": 20757,
        "maxStateId": 20772,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1192
        ],
        "boundingBox": "block"
    },
    {
        "id": 872,
        "name": "magenta_candle",
        "displayName": "Magenta Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20776,
        "minStateId": 20773,
        "maxStateId": 20788,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1193
        ],
        "boundingBox": "block"
    },
    {
        "id": 873,
        "name": "light_blue_candle",
        "displayName": "Light Blue Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20792,
        "minStateId": 20789,
        "maxStateId": 20804,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1194
        ],
        "boundingBox": "block"
    },
    {
        "id": 874,
        "name": "yellow_candle",
        "displayName": "Yellow Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20808,
        "minStateId": 20805,
        "maxStateId": 20820,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1195
        ],
        "boundingBox": "block"
    },
    {
        "id": 875,
        "name": "lime_candle",
        "displayName": "Lime Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20824,
        "minStateId": 20821,
        "maxStateId": 20836,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1196
        ],
        "boundingBox": "block"
    },
    {
        "id": 876,
        "name": "pink_candle",
        "displayName": "Pink Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20840,
        "minStateId": 20837,
        "maxStateId": 20852,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1197
        ],
        "boundingBox": "block"
    },
    {
        "id": 877,
        "name": "gray_candle",
        "displayName": "Gray Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20856,
        "minStateId": 20853,
        "maxStateId": 20868,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1198
        ],
        "boundingBox": "block"
    },
    {
        "id": 878,
        "name": "light_gray_candle",
        "displayName": "Light Gray Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20872,
        "minStateId": 20869,
        "maxStateId": 20884,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1199
        ],
        "boundingBox": "block"
    },
    {
        "id": 879,
        "name": "cyan_candle",
        "displayName": "Cyan Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20888,
        "minStateId": 20885,
        "maxStateId": 20900,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1200
        ],
        "boundingBox": "block"
    },
    {
        "id": 880,
        "name": "purple_candle",
        "displayName": "Purple Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20904,
        "minStateId": 20901,
        "maxStateId": 20916,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1201
        ],
        "boundingBox": "block"
    },
    {
        "id": 881,
        "name": "blue_candle",
        "displayName": "Blue Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20920,
        "minStateId": 20917,
        "maxStateId": 20932,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1202
        ],
        "boundingBox": "block"
    },
    {
        "id": 882,
        "name": "brown_candle",
        "displayName": "Brown Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20936,
        "minStateId": 20933,
        "maxStateId": 20948,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1203
        ],
        "boundingBox": "block"
    },
    {
        "id": 883,
        "name": "green_candle",
        "displayName": "Green Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20952,
        "minStateId": 20949,
        "maxStateId": 20964,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1204
        ],
        "boundingBox": "block"
    },
    {
        "id": 884,
        "name": "red_candle",
        "displayName": "Red Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20968,
        "minStateId": 20965,
        "maxStateId": 20980,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1205
        ],
        "boundingBox": "block"
    },
    {
        "id": 885,
        "name": "black_candle",
        "displayName": "Black Candle",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20984,
        "minStateId": 20981,
        "maxStateId": 20996,
        "states": [
            {
                "name": "candles",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1206
        ],
        "boundingBox": "block"
    },
    {
        "id": 886,
        "name": "candle_cake",
        "displayName": "Cake with Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 20998,
        "minStateId": 20997,
        "maxStateId": 20998,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1190
        ],
        "boundingBox": "block"
    },
    {
        "id": 887,
        "name": "white_candle_cake",
        "displayName": "Cake with White Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21000,
        "minStateId": 20999,
        "maxStateId": 21000,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1191
        ],
        "boundingBox": "block"
    },
    {
        "id": 888,
        "name": "orange_candle_cake",
        "displayName": "Cake with Orange Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21002,
        "minStateId": 21001,
        "maxStateId": 21002,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1192
        ],
        "boundingBox": "block"
    },
    {
        "id": 889,
        "name": "magenta_candle_cake",
        "displayName": "Cake with Magenta Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21004,
        "minStateId": 21003,
        "maxStateId": 21004,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1193
        ],
        "boundingBox": "block"
    },
    {
        "id": 890,
        "name": "light_blue_candle_cake",
        "displayName": "Cake with Light Blue Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21006,
        "minStateId": 21005,
        "maxStateId": 21006,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1194
        ],
        "boundingBox": "block"
    },
    {
        "id": 891,
        "name": "yellow_candle_cake",
        "displayName": "Cake with Yellow Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21008,
        "minStateId": 21007,
        "maxStateId": 21008,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1195
        ],
        "boundingBox": "block"
    },
    {
        "id": 892,
        "name": "lime_candle_cake",
        "displayName": "Cake with Lime Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21010,
        "minStateId": 21009,
        "maxStateId": 21010,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1196
        ],
        "boundingBox": "block"
    },
    {
        "id": 893,
        "name": "pink_candle_cake",
        "displayName": "Cake with Pink Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21012,
        "minStateId": 21011,
        "maxStateId": 21012,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1197
        ],
        "boundingBox": "block"
    },
    {
        "id": 894,
        "name": "gray_candle_cake",
        "displayName": "Cake with Gray Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21014,
        "minStateId": 21013,
        "maxStateId": 21014,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1198
        ],
        "boundingBox": "block"
    },
    {
        "id": 895,
        "name": "light_gray_candle_cake",
        "displayName": "Cake with Light Gray Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21016,
        "minStateId": 21015,
        "maxStateId": 21016,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1199
        ],
        "boundingBox": "block"
    },
    {
        "id": 896,
        "name": "cyan_candle_cake",
        "displayName": "Cake with Cyan Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21018,
        "minStateId": 21017,
        "maxStateId": 21018,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1200
        ],
        "boundingBox": "block"
    },
    {
        "id": 897,
        "name": "purple_candle_cake",
        "displayName": "Cake with Purple Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21020,
        "minStateId": 21019,
        "maxStateId": 21020,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1201
        ],
        "boundingBox": "block"
    },
    {
        "id": 898,
        "name": "blue_candle_cake",
        "displayName": "Cake with Blue Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21022,
        "minStateId": 21021,
        "maxStateId": 21022,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1202
        ],
        "boundingBox": "block"
    },
    {
        "id": 899,
        "name": "brown_candle_cake",
        "displayName": "Cake with Brown Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21024,
        "minStateId": 21023,
        "maxStateId": 21024,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1203
        ],
        "boundingBox": "block"
    },
    {
        "id": 900,
        "name": "green_candle_cake",
        "displayName": "Cake with Green Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21026,
        "minStateId": 21025,
        "maxStateId": 21026,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1204
        ],
        "boundingBox": "block"
    },
    {
        "id": 901,
        "name": "red_candle_cake",
        "displayName": "Cake with Red Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21028,
        "minStateId": 21027,
        "maxStateId": 21028,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1205
        ],
        "boundingBox": "block"
    },
    {
        "id": 902,
        "name": "black_candle_cake",
        "displayName": "Cake with Black Candle",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21030,
        "minStateId": 21029,
        "maxStateId": 21030,
        "states": [
            {
                "name": "lit",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1206
        ],
        "boundingBox": "block"
    },
    {
        "id": 903,
        "name": "amethyst_block",
        "displayName": "Block of Amethyst",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21031,
        "minStateId": 21031,
        "maxStateId": 21031,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            72
        ],
        "boundingBox": "block"
    },
    {
        "id": 904,
        "name": "budding_amethyst",
        "displayName": "Budding Amethyst",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21032,
        "minStateId": 21032,
        "maxStateId": 21032,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 905,
        "name": "amethyst_cluster",
        "displayName": "Amethyst Cluster",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 5,
        "filterLight": 0,
        "defaultState": 21042,
        "minStateId": 21033,
        "maxStateId": 21044,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            768
        ],
        "boundingBox": "block"
    },
    {
        "id": 906,
        "name": "large_amethyst_bud",
        "displayName": "Large Amethyst Bud",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 4,
        "filterLight": 0,
        "defaultState": 21054,
        "minStateId": 21045,
        "maxStateId": 21056,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 907,
        "name": "medium_amethyst_bud",
        "displayName": "Medium Amethyst Bud",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 2,
        "filterLight": 0,
        "defaultState": 21066,
        "minStateId": 21057,
        "maxStateId": 21068,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 908,
        "name": "small_amethyst_bud",
        "displayName": "Small Amethyst Bud",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 1,
        "filterLight": 0,
        "defaultState": 21078,
        "minStateId": 21069,
        "maxStateId": 21080,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 909,
        "name": "tuff",
        "displayName": "Tuff",
        "hardness": 1.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21081,
        "minStateId": 21081,
        "maxStateId": 21081,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            12
        ],
        "boundingBox": "block"
    },
    {
        "id": 910,
        "name": "calcite",
        "displayName": "Calcite",
        "hardness": 0.75,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21082,
        "minStateId": 21082,
        "maxStateId": 21082,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            11
        ],
        "boundingBox": "block"
    },
    {
        "id": 911,
        "name": "tinted_glass",
        "displayName": "Tinted Glass",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21083,
        "minStateId": 21083,
        "maxStateId": 21083,
        "states": [],
        "drops": [
            167
        ],
        "boundingBox": "block"
    },
    {
        "id": 912,
        "name": "powder_snow",
        "displayName": "Powder Snow",
        "hardness": 0.25,
        "resistance": 0.25,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 21084,
        "minStateId": 21084,
        "maxStateId": 21084,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 913,
        "name": "sculk_sensor",
        "displayName": "Sculk Sensor",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 1,
        "filterLight": 0,
        "defaultState": 21086,
        "minStateId": 21085,
        "maxStateId": 21180,
        "states": [
            {
                "name": "power",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "sculk_sensor_phase",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "inactive",
                    "active",
                    "cooldown"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 914,
        "name": "calibrated_sculk_sensor",
        "displayName": "Calibrated Sculk Sensor",
        "hardness": 1.5,
        "resistance": 1.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 1,
        "filterLight": 0,
        "defaultState": 21182,
        "minStateId": 21181,
        "maxStateId": 21564,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "power",
                "type": "int",
                "num_values": 16,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ]
            },
            {
                "name": "sculk_sensor_phase",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "inactive",
                    "active",
                    "cooldown"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 915,
        "name": "sculk",
        "displayName": "Sculk",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21565,
        "minStateId": 21565,
        "maxStateId": 21565,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 916,
        "name": "sculk_vein",
        "displayName": "Sculk Vein",
        "hardness": 0.2,
        "resistance": 0.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 21693,
        "minStateId": 21566,
        "maxStateId": 21693,
        "states": [
            {
                "name": "down",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "east",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "north",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "south",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 917,
        "name": "sculk_catalyst",
        "displayName": "Sculk Catalyst",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 6,
        "filterLight": 15,
        "defaultState": 21695,
        "minStateId": 21694,
        "maxStateId": 21695,
        "states": [
            {
                "name": "bloom",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 918,
        "name": "sculk_shrieker",
        "displayName": "Sculk Shrieker",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 1,
        "defaultState": 21703,
        "minStateId": 21696,
        "maxStateId": 21703,
        "states": [
            {
                "name": "can_summon",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "shrieking",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 919,
        "name": "oxidized_copper",
        "displayName": "Oxidized Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21704,
        "minStateId": 21704,
        "maxStateId": 21704,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            81
        ],
        "boundingBox": "block"
    },
    {
        "id": 920,
        "name": "weathered_copper",
        "displayName": "Weathered Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21705,
        "minStateId": 21705,
        "maxStateId": 21705,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            80
        ],
        "boundingBox": "block"
    },
    {
        "id": 921,
        "name": "exposed_copper",
        "displayName": "Exposed Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21706,
        "minStateId": 21706,
        "maxStateId": 21706,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            79
        ],
        "boundingBox": "block"
    },
    {
        "id": 922,
        "name": "copper_block",
        "displayName": "Block of Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21707,
        "minStateId": 21707,
        "maxStateId": 21707,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            75
        ],
        "boundingBox": "block"
    },
    {
        "id": 923,
        "name": "copper_ore",
        "displayName": "Copper Ore",
        "hardness": 3.0,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21708,
        "minStateId": 21708,
        "maxStateId": 21708,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            771
        ],
        "boundingBox": "block"
    },
    {
        "id": 924,
        "name": "deepslate_copper_ore",
        "displayName": "Deepslate Copper Ore",
        "hardness": 4.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21709,
        "minStateId": 21709,
        "maxStateId": 21709,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            771
        ],
        "boundingBox": "block"
    },
    {
        "id": 925,
        "name": "oxidized_cut_copper",
        "displayName": "Oxidized Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21710,
        "minStateId": 21710,
        "maxStateId": 21710,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            85
        ],
        "boundingBox": "block"
    },
    {
        "id": 926,
        "name": "weathered_cut_copper",
        "displayName": "Weathered Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21711,
        "minStateId": 21711,
        "maxStateId": 21711,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            84
        ],
        "boundingBox": "block"
    },
    {
        "id": 927,
        "name": "exposed_cut_copper",
        "displayName": "Exposed Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21712,
        "minStateId": 21712,
        "maxStateId": 21712,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            83
        ],
        "boundingBox": "block"
    },
    {
        "id": 928,
        "name": "cut_copper",
        "displayName": "Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 21713,
        "minStateId": 21713,
        "maxStateId": 21713,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            82
        ],
        "boundingBox": "block"
    },
    {
        "id": 929,
        "name": "oxidized_cut_copper_stairs",
        "displayName": "Oxidized Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21725,
        "minStateId": 21714,
        "maxStateId": 21793,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            89
        ],
        "boundingBox": "block"
    },
    {
        "id": 930,
        "name": "weathered_cut_copper_stairs",
        "displayName": "Weathered Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21805,
        "minStateId": 21794,
        "maxStateId": 21873,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            88
        ],
        "boundingBox": "block"
    },
    {
        "id": 931,
        "name": "exposed_cut_copper_stairs",
        "displayName": "Exposed Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21885,
        "minStateId": 21874,
        "maxStateId": 21953,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            87
        ],
        "boundingBox": "block"
    },
    {
        "id": 932,
        "name": "cut_copper_stairs",
        "displayName": "Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 21965,
        "minStateId": 21954,
        "maxStateId": 22033,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            86
        ],
        "boundingBox": "block"
    },
    {
        "id": 933,
        "name": "oxidized_cut_copper_slab",
        "displayName": "Oxidized Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22037,
        "minStateId": 22034,
        "maxStateId": 22039,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            93
        ],
        "boundingBox": "block"
    },
    {
        "id": 934,
        "name": "weathered_cut_copper_slab",
        "displayName": "Weathered Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22043,
        "minStateId": 22040,
        "maxStateId": 22045,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            92
        ],
        "boundingBox": "block"
    },
    {
        "id": 935,
        "name": "exposed_cut_copper_slab",
        "displayName": "Exposed Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22049,
        "minStateId": 22046,
        "maxStateId": 22051,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            91
        ],
        "boundingBox": "block"
    },
    {
        "id": 936,
        "name": "cut_copper_slab",
        "displayName": "Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22055,
        "minStateId": 22052,
        "maxStateId": 22057,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            90
        ],
        "boundingBox": "block"
    },
    {
        "id": 937,
        "name": "waxed_copper_block",
        "displayName": "Waxed Block of Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22058,
        "minStateId": 22058,
        "maxStateId": 22058,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            94
        ],
        "boundingBox": "block"
    },
    {
        "id": 938,
        "name": "waxed_weathered_copper",
        "displayName": "Waxed Weathered Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22059,
        "minStateId": 22059,
        "maxStateId": 22059,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            96
        ],
        "boundingBox": "block"
    },
    {
        "id": 939,
        "name": "waxed_exposed_copper",
        "displayName": "Waxed Exposed Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22060,
        "minStateId": 22060,
        "maxStateId": 22060,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            95
        ],
        "boundingBox": "block"
    },
    {
        "id": 940,
        "name": "waxed_oxidized_copper",
        "displayName": "Waxed Oxidized Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22061,
        "minStateId": 22061,
        "maxStateId": 22061,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            97
        ],
        "boundingBox": "block"
    },
    {
        "id": 941,
        "name": "waxed_oxidized_cut_copper",
        "displayName": "Waxed Oxidized Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22062,
        "minStateId": 22062,
        "maxStateId": 22062,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            101
        ],
        "boundingBox": "block"
    },
    {
        "id": 942,
        "name": "waxed_weathered_cut_copper",
        "displayName": "Waxed Weathered Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22063,
        "minStateId": 22063,
        "maxStateId": 22063,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            100
        ],
        "boundingBox": "block"
    },
    {
        "id": 943,
        "name": "waxed_exposed_cut_copper",
        "displayName": "Waxed Exposed Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22064,
        "minStateId": 22064,
        "maxStateId": 22064,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            99
        ],
        "boundingBox": "block"
    },
    {
        "id": 944,
        "name": "waxed_cut_copper",
        "displayName": "Waxed Cut Copper",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22065,
        "minStateId": 22065,
        "maxStateId": 22065,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            98
        ],
        "boundingBox": "block"
    },
    {
        "id": 945,
        "name": "waxed_oxidized_cut_copper_stairs",
        "displayName": "Waxed Oxidized Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22077,
        "minStateId": 22066,
        "maxStateId": 22145,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            105
        ],
        "boundingBox": "block"
    },
    {
        "id": 946,
        "name": "waxed_weathered_cut_copper_stairs",
        "displayName": "Waxed Weathered Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22157,
        "minStateId": 22146,
        "maxStateId": 22225,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            104
        ],
        "boundingBox": "block"
    },
    {
        "id": 947,
        "name": "waxed_exposed_cut_copper_stairs",
        "displayName": "Waxed Exposed Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22237,
        "minStateId": 22226,
        "maxStateId": 22305,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            103
        ],
        "boundingBox": "block"
    },
    {
        "id": 948,
        "name": "waxed_cut_copper_stairs",
        "displayName": "Waxed Cut Copper Stairs",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22317,
        "minStateId": 22306,
        "maxStateId": 22385,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            102
        ],
        "boundingBox": "block"
    },
    {
        "id": 949,
        "name": "waxed_oxidized_cut_copper_slab",
        "displayName": "Waxed Oxidized Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22389,
        "minStateId": 22386,
        "maxStateId": 22391,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            109
        ],
        "boundingBox": "block"
    },
    {
        "id": 950,
        "name": "waxed_weathered_cut_copper_slab",
        "displayName": "Waxed Weathered Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22395,
        "minStateId": 22392,
        "maxStateId": 22397,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            108
        ],
        "boundingBox": "block"
    },
    {
        "id": 951,
        "name": "waxed_exposed_cut_copper_slab",
        "displayName": "Waxed Exposed Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22401,
        "minStateId": 22398,
        "maxStateId": 22403,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            107
        ],
        "boundingBox": "block"
    },
    {
        "id": 952,
        "name": "waxed_cut_copper_slab",
        "displayName": "Waxed Cut Copper Slab",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22407,
        "minStateId": 22404,
        "maxStateId": 22409,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            106
        ],
        "boundingBox": "block"
    },
    {
        "id": 953,
        "name": "lightning_rod",
        "displayName": "Lightning Rod",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22429,
        "minStateId": 22410,
        "maxStateId": 22433,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 6,
                "values": [
                    "north",
                    "east",
                    "south",
                    "west",
                    "up",
                    "down"
                ]
            },
            {
                "name": "powered",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            651
        ],
        "boundingBox": "block"
    },
    {
        "id": 954,
        "name": "pointed_dripstone",
        "displayName": "Pointed Dripstone",
        "hardness": 1.5,
        "resistance": 3.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22439,
        "minStateId": 22434,
        "maxStateId": 22453,
        "states": [
            {
                "name": "thickness",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "tip_merge",
                    "tip",
                    "frustum",
                    "middle",
                    "base"
                ]
            },
            {
                "name": "vertical_direction",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "up",
                    "down"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            1211
        ],
        "boundingBox": "block"
    },
    {
        "id": 955,
        "name": "dripstone_block",
        "displayName": "Dripstone Block",
        "hardness": 1.5,
        "resistance": 1.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22454,
        "minStateId": 22454,
        "maxStateId": 22454,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            13
        ],
        "boundingBox": "block"
    },
    {
        "id": 956,
        "name": "cave_vines",
        "displayName": "Cave Vines",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22456,
        "minStateId": 22455,
        "maxStateId": 22506,
        "states": [
            {
                "name": "age",
                "type": "int",
                "num_values": 26,
                "values": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25"
                ]
            },
            {
                "name": "berries",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 957,
        "name": "cave_vines_plant",
        "displayName": "Cave Vines Plant",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22508,
        "minStateId": 22507,
        "maxStateId": 22508,
        "states": [
            {
                "name": "berries",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 958,
        "name": "spore_blossom",
        "displayName": "Spore Blossom",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22509,
        "minStateId": 22509,
        "maxStateId": 22509,
        "states": [],
        "drops": [
            211
        ],
        "boundingBox": "empty"
    },
    {
        "id": 959,
        "name": "azalea",
        "displayName": "Azalea",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22510,
        "minStateId": 22510,
        "maxStateId": 22510,
        "states": [],
        "drops": [
            175
        ],
        "boundingBox": "block"
    },
    {
        "id": 960,
        "name": "flowering_azalea",
        "displayName": "Flowering Azalea",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22511,
        "minStateId": 22511,
        "maxStateId": 22511,
        "states": [],
        "drops": [
            176
        ],
        "boundingBox": "block"
    },
    {
        "id": 961,
        "name": "moss_carpet",
        "displayName": "Moss Carpet",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22512,
        "minStateId": 22512,
        "maxStateId": 22512,
        "states": [],
        "drops": [
            223
        ],
        "boundingBox": "block"
    },
    {
        "id": 962,
        "name": "pink_petals",
        "displayName": "Pink Petals",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22513,
        "minStateId": 22513,
        "maxStateId": 22528,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "flower_amount",
                "type": "int",
                "num_values": 4,
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            }
        ],
        "drops": [
            224
        ],
        "boundingBox": "empty"
    },
    {
        "id": 963,
        "name": "moss_block",
        "displayName": "Moss Block",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/hoe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22529,
        "minStateId": 22529,
        "maxStateId": 22529,
        "states": [],
        "drops": [
            225
        ],
        "boundingBox": "block"
    },
    {
        "id": 964,
        "name": "big_dripleaf",
        "displayName": "Big Dripleaf",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22531,
        "minStateId": 22530,
        "maxStateId": 22561,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "tilt",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "none",
                    "unstable",
                    "partial",
                    "full"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            227
        ],
        "boundingBox": "block"
    },
    {
        "id": 965,
        "name": "big_dripleaf_stem",
        "displayName": "Big Dripleaf Stem",
        "hardness": 0.1,
        "resistance": 0.1,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22563,
        "minStateId": 22562,
        "maxStateId": 22569,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            227
        ],
        "boundingBox": "empty"
    },
    {
        "id": 966,
        "name": "small_dripleaf",
        "displayName": "Small Dripleaf",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22573,
        "minStateId": 22570,
        "maxStateId": 22585,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "upper",
                    "lower"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 967,
        "name": "hanging_roots",
        "displayName": "Hanging Roots",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "plant;mineable/axe",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22587,
        "minStateId": 22586,
        "maxStateId": 22587,
        "states": [
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 968,
        "name": "rooted_dirt",
        "displayName": "Rooted Dirt",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22588,
        "minStateId": 22588,
        "maxStateId": 22588,
        "states": [],
        "drops": [
            18
        ],
        "boundingBox": "block"
    },
    {
        "id": 969,
        "name": "mud",
        "displayName": "Mud",
        "hardness": 0.5,
        "resistance": 0.5,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/shovel",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22589,
        "minStateId": 22589,
        "maxStateId": 22589,
        "states": [],
        "drops": [
            19
        ],
        "boundingBox": "block"
    },
    {
        "id": 970,
        "name": "deepslate",
        "displayName": "Deepslate",
        "hardness": 3.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22591,
        "minStateId": 22590,
        "maxStateId": 22592,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            9
        ],
        "boundingBox": "block"
    },
    {
        "id": 971,
        "name": "cobbled_deepslate",
        "displayName": "Cobbled Deepslate",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 22593,
        "minStateId": 22593,
        "maxStateId": 22593,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            9
        ],
        "boundingBox": "block"
    },
    {
        "id": 972,
        "name": "cobbled_deepslate_stairs",
        "displayName": "Cobbled Deepslate Stairs",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22605,
        "minStateId": 22594,
        "maxStateId": 22673,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            613
        ],
        "boundingBox": "block"
    },
    {
        "id": 973,
        "name": "cobbled_deepslate_slab",
        "displayName": "Cobbled Deepslate Slab",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22677,
        "minStateId": 22674,
        "maxStateId": 22679,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            630
        ],
        "boundingBox": "block"
    },
    {
        "id": 974,
        "name": "cobbled_deepslate_wall",
        "displayName": "Cobbled Deepslate Wall",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 22683,
        "minStateId": 22680,
        "maxStateId": 23003,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            393
        ],
        "boundingBox": "block"
    },
    {
        "id": 975,
        "name": "polished_deepslate",
        "displayName": "Polished Deepslate",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 23004,
        "minStateId": 23004,
        "maxStateId": 23004,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            10
        ],
        "boundingBox": "block"
    },
    {
        "id": 976,
        "name": "polished_deepslate_stairs",
        "displayName": "Polished Deepslate Stairs",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23016,
        "minStateId": 23005,
        "maxStateId": 23084,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            614
        ],
        "boundingBox": "block"
    },
    {
        "id": 977,
        "name": "polished_deepslate_slab",
        "displayName": "Polished Deepslate Slab",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23088,
        "minStateId": 23085,
        "maxStateId": 23090,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            631
        ],
        "boundingBox": "block"
    },
    {
        "id": 978,
        "name": "polished_deepslate_wall",
        "displayName": "Polished Deepslate Wall",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23094,
        "minStateId": 23091,
        "maxStateId": 23414,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            394
        ],
        "boundingBox": "block"
    },
    {
        "id": 979,
        "name": "deepslate_tiles",
        "displayName": "Deepslate Tiles",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 23415,
        "minStateId": 23415,
        "maxStateId": 23415,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            326
        ],
        "boundingBox": "block"
    },
    {
        "id": 980,
        "name": "deepslate_tile_stairs",
        "displayName": "Deepslate Tile Stairs",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23427,
        "minStateId": 23416,
        "maxStateId": 23495,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            616
        ],
        "boundingBox": "block"
    },
    {
        "id": 981,
        "name": "deepslate_tile_slab",
        "displayName": "Deepslate Tile Slab",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23499,
        "minStateId": 23496,
        "maxStateId": 23501,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            633
        ],
        "boundingBox": "block"
    },
    {
        "id": 982,
        "name": "deepslate_tile_wall",
        "displayName": "Deepslate Tile Wall",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23505,
        "minStateId": 23502,
        "maxStateId": 23825,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            396
        ],
        "boundingBox": "block"
    },
    {
        "id": 983,
        "name": "deepslate_bricks",
        "displayName": "Deepslate Bricks",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 23826,
        "minStateId": 23826,
        "maxStateId": 23826,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            324
        ],
        "boundingBox": "block"
    },
    {
        "id": 984,
        "name": "deepslate_brick_stairs",
        "displayName": "Deepslate Brick Stairs",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23838,
        "minStateId": 23827,
        "maxStateId": 23906,
        "states": [
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "half",
                "type": "enum",
                "num_values": 2,
                "values": [
                    "top",
                    "bottom"
                ]
            },
            {
                "name": "shape",
                "type": "enum",
                "num_values": 5,
                "values": [
                    "straight",
                    "inner_left",
                    "inner_right",
                    "outer_left",
                    "outer_right"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            615
        ],
        "boundingBox": "block"
    },
    {
        "id": 985,
        "name": "deepslate_brick_slab",
        "displayName": "Deepslate Brick Slab",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23910,
        "minStateId": 23907,
        "maxStateId": 23912,
        "states": [
            {
                "name": "type",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "top",
                    "bottom",
                    "double"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            632
        ],
        "boundingBox": "block"
    },
    {
        "id": 986,
        "name": "deepslate_brick_wall",
        "displayName": "Deepslate Brick Wall",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 23916,
        "minStateId": 23913,
        "maxStateId": 24236,
        "states": [
            {
                "name": "east",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "north",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "south",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            },
            {
                "name": "up",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "west",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "none",
                    "low",
                    "tall"
                ]
            }
        ],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            395
        ],
        "boundingBox": "block"
    },
    {
        "id": 987,
        "name": "chiseled_deepslate",
        "displayName": "Chiseled Deepslate",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24237,
        "minStateId": 24237,
        "maxStateId": 24237,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            328
        ],
        "boundingBox": "block"
    },
    {
        "id": 988,
        "name": "cracked_deepslate_bricks",
        "displayName": "Cracked Deepslate Bricks",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24238,
        "minStateId": 24238,
        "maxStateId": 24238,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            325
        ],
        "boundingBox": "block"
    },
    {
        "id": 989,
        "name": "cracked_deepslate_tiles",
        "displayName": "Cracked Deepslate Tiles",
        "hardness": 3.5,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24239,
        "minStateId": 24239,
        "maxStateId": 24239,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            327
        ],
        "boundingBox": "block"
    },
    {
        "id": 990,
        "name": "infested_deepslate",
        "displayName": "Infested Deepslate",
        "hardness": 1.5,
        "resistance": 0.75,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24241,
        "minStateId": 24240,
        "maxStateId": 24242,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 991,
        "name": "smooth_basalt",
        "displayName": "Smooth Basalt",
        "hardness": 1.25,
        "resistance": 4.2,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24243,
        "minStateId": 24243,
        "maxStateId": 24243,
        "states": [],
        "harvestTools": {
            "779": true,
            "784": true,
            "789": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            308
        ],
        "boundingBox": "block"
    },
    {
        "id": 992,
        "name": "raw_iron_block",
        "displayName": "Block of Raw Iron",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24244,
        "minStateId": 24244,
        "maxStateId": 24244,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            69
        ],
        "boundingBox": "block"
    },
    {
        "id": 993,
        "name": "raw_copper_block",
        "displayName": "Block of Raw Copper",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24245,
        "minStateId": 24245,
        "maxStateId": 24245,
        "states": [],
        "harvestTools": {
            "784": true,
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            70
        ],
        "boundingBox": "block"
    },
    {
        "id": 994,
        "name": "raw_gold_block",
        "displayName": "Block of Raw Gold",
        "hardness": 5.0,
        "resistance": 6.0,
        "stackSize": 64,
        "diggable": true,
        "material": "mineable/pickaxe",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24246,
        "minStateId": 24246,
        "maxStateId": 24246,
        "states": [],
        "harvestTools": {
            "794": true,
            "799": true,
            "804": true
        },
        "drops": [
            71
        ],
        "boundingBox": "block"
    },
    {
        "id": 995,
        "name": "potted_azalea_bush",
        "displayName": "Potted Azalea",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 24247,
        "minStateId": 24247,
        "maxStateId": 24247,
        "states": [],
        "drops": [
            1050,
            175
        ],
        "boundingBox": "block"
    },
    {
        "id": 996,
        "name": "potted_flowering_azalea_bush",
        "displayName": "Potted Flowering Azalea",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 24248,
        "minStateId": 24248,
        "maxStateId": 24248,
        "states": [],
        "drops": [
            1050,
            176
        ],
        "boundingBox": "block"
    },
    {
        "id": 997,
        "name": "ochre_froglight",
        "displayName": "Ochre Froglight",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 15,
        "filterLight": 15,
        "defaultState": 24250,
        "minStateId": 24249,
        "maxStateId": 24251,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            1212
        ],
        "boundingBox": "block"
    },
    {
        "id": 998,
        "name": "verdant_froglight",
        "displayName": "Verdant Froglight",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 15,
        "filterLight": 15,
        "defaultState": 24253,
        "minStateId": 24252,
        "maxStateId": 24254,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            1213
        ],
        "boundingBox": "block"
    },
    {
        "id": 999,
        "name": "pearlescent_froglight",
        "displayName": "Pearlescent Froglight",
        "hardness": 0.3,
        "resistance": 0.3,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 15,
        "filterLight": 15,
        "defaultState": 24256,
        "minStateId": 24255,
        "maxStateId": 24257,
        "states": [
            {
                "name": "axis",
                "type": "enum",
                "num_values": 3,
                "values": [
                    "x",
                    "y",
                    "z"
                ]
            }
        ],
        "drops": [
            1214
        ],
        "boundingBox": "block"
    },
    {
        "id": 1000,
        "name": "frogspawn",
        "displayName": "Frogspawn",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 24258,
        "minStateId": 24258,
        "maxStateId": 24258,
        "states": [],
        "drops": [],
        "boundingBox": "empty"
    },
    {
        "id": 1001,
        "name": "reinforced_deepslate",
        "displayName": "Reinforced Deepslate",
        "hardness": 55.0,
        "resistance": 1200.0,
        "stackSize": 64,
        "diggable": true,
        "material": "default",
        "transparent": false,
        "emitLight": 0,
        "filterLight": 15,
        "defaultState": 24259,
        "minStateId": 24259,
        "maxStateId": 24259,
        "states": [],
        "drops": [],
        "boundingBox": "block"
    },
    {
        "id": 1002,
        "name": "decorated_pot",
        "displayName": "Decorated Pot",
        "hardness": 0.0,
        "resistance": 0.0,
        "stackSize": 1,
        "diggable": true,
        "material": "default",
        "transparent": true,
        "emitLight": 0,
        "filterLight": 0,
        "defaultState": 24269,
        "minStateId": 24260,
        "maxStateId": 24275,
        "states": [
            {
                "name": "cracked",
                "type": "bool",
                "num_values": 2
            },
            {
                "name": "facing",
                "type": "enum",
                "num_values": 4,
                "values": [
                    "north",
                    "south",
                    "west",
                    "east"
                ]
            },
            {
                "name": "waterlogged",
                "type": "bool",
                "num_values": 2
            }
        ],
        "drops": [
            266
        ],
        "boundingBox": "block"
    }
]


const blocksArray = jsonData.map(item => new Block(item));


function getRandomDiggableElement(arr) {
    const diggableElements = arr.filter(item => item.diggable === true);
    const randomIndex = Math.floor(Math.random() * diggableElements.length);
    return diggableElements[randomIndex];
}

function getRandomBlock() {
    const randomBlock = new Block(getRandomDiggableElement(blocksArray))
    const elem = document.getElementById("displayName")
    fetchData(randomBlock.name)
    elem.innerText = randomBlock.displayName
}

function fetchData(block) {
    const img = document.getElementById("img")
    img.src = new URL(`https://mcapi.marveldc.me/item/${block}?version=1.20&width=200&height=200&fuzzySearch=false`)
}
