export type Prefab = {
  hash: number;
  name: string;
  embedded: {
    [entity: string]: {
      hash: number;
      name: string;
      savables: {
        [savable: string]: {
          hash: number;
          name: string;
        };
      };
    };
  };
};

export const Prefab = {
  'ATM_Coin_Bank': {
    'hash': 9780,
    'name': 'ATM Coin Bank',
    'embedded': {
      'ATM_Coin_Bank_7202': {
        'hash': 7202,
        'name': 'ATM Coin Bank',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Base_Dock_28320': {
        'hash': 28320,
        'name': 'Base Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'DepositDock_33532': {
        'hash': 33532,
        'name': 'DepositDock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Grab_22452': {
        'hash': 22452,
        'name': 'Grab',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Hand_Touch_46540': {
        'hash': 46540,
        'name': 'Hand Touch',
        'savables': {}
      },
      'Withdraw_Dock_34750': {
        'hash': 34750,
        'name': 'Withdraw Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Absolute_Apple_Tree_Variant': {
    'hash': 15898,
    'name': 'Absolute Apple Tree Variant',
    'embedded': {
      'Absolute_Apple_Tree_Variant_58592': {
        'hash': 58592,
        'name': 'Absolute Apple Tree Variant',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Absolute_Blueberry_Tree_Variant': {
    'hash': 16322,
    'name': 'Absolute Blueberry Tree Variant',
    'embedded': {
      'Absolute_Blueberry_Tree_Variant_24412': {
        'hash': 24412,
        'name': 'Absolute Blueberry Tree Variant',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'And': {
    'hash': 42422,
    'name': 'And',
    'embedded': {}
  },
  'Anvil': {
    'hash': 23182,
    'name': 'Anvil',
    'embedded': {
      'Anvil_57386': {
        'hash': 57386,
        'name': 'Anvil',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Anvil_Training': {
    'hash': 24218,
    'name': 'Anvil Training',
    'embedded': {
      'Anvil_Training_24216': {
        'hash': 24216,
        'name': 'Anvil Training',
        'savables': {}
      }
    }
  },
  'Apple_Core_Burnt': {
    'hash': 50484,
    'name': 'Apple Core Burnt',
    'embedded': {
      'Apple_Core_Burnt_10462': {
        'hash': 10462,
        'name': 'Apple Core Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_5784': {
        'hash': 5784,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Core_Cooked': {
    'hash': 15500,
    'name': 'Apple Core Cooked',
    'embedded': {
      'Apple_Core_Cooked_10462': {
        'hash': 10462,
        'name': 'Apple Core Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_5784': {
        'hash': 5784,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Core_Ripe': {
    'hash': 902,
    'name': 'Apple Core Ripe',
    'embedded': {
      'Apple_Core_Ripe_10462': {
        'hash': 10462,
        'name': 'Apple Core Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_5784': {
        'hash': 5784,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Core_Unripe': {
    'hash': 31614,
    'name': 'Apple Core Unripe',
    'embedded': {
      'Apple_Core_Unripe_10462': {
        'hash': 10462,
        'name': 'Apple Core Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      },
      'Cooking_5784': {
        'hash': 5784,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Flower_Bloom': {
    'hash': 12580,
    'name': 'Apple Flower Bloom',
    'embedded': {
      'Apple_Flower_Bloom_29560': {
        'hash': 29560,
        'name': 'Apple Flower Bloom',
        'savables': {}
      }
    }
  },
  'Apple_Flower_Bud': {
    'hash': 12578,
    'name': 'Apple Flower Bud',
    'embedded': {
      'Apple_Flower_Bud_35946': {
        'hash': 35946,
        'name': 'Apple Flower Bud',
        'savables': {}
      }
    }
  },
  'Apple_Full_Burnt': {
    'hash': 62102,
    'name': 'Apple Full Burnt',
    'embedded': {
      'Apple_Core_Spawner_52298': {
        'hash': 52298,
        'name': 'Apple Core Spawner',
        'savables': {}
      },
      'Apple_Full_Burnt_57036': {
        'hash': 57036,
        'name': 'Apple Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_11820': {
        'hash': 11820,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Full_Cooked': {
    'hash': 14844,
    'name': 'Apple Full Cooked',
    'embedded': {
      'Apple_Core_Spawner_53358': {
        'hash': 53358,
        'name': 'Apple Core Spawner',
        'savables': {}
      },
      'Apple_Full_Cooked_56646': {
        'hash': 56646,
        'name': 'Apple Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_5588': {
        'hash': 5588,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Full_Ripe': {
    'hash': 40010,
    'name': 'Apple Full Ripe',
    'embedded': {
      'Apple_Core_Spawner_56836': {
        'hash': 56836,
        'name': 'Apple Core Spawner',
        'savables': {}
      },
      'Apple_Full_Ripe_56174': {
        'hash': 56174,
        'name': 'Apple Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_2434': {
        'hash': 2434,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Full_Unripe': {
    'hash': 6740,
    'name': 'Apple Full Unripe',
    'embedded': {
      'Apple_Core_Spawner_37092': {
        'hash': 37092,
        'name': 'Apple Core Spawner',
        'savables': {}
      },
      'Apple_Full_Unripe_55618': {
        'hash': 55618,
        'name': 'Apple Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_430': {
        'hash': 430,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Growth': {
    'hash': 19192,
    'name': 'Apple Growth',
    'embedded': {
      'Apple_Growth_33458': {
        'hash': 33458,
        'name': 'Apple Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Apple_Half_Burnt': {
    'hash': 65526,
    'name': 'Apple Half Burnt',
    'embedded': {
      'Apple_Half_Burnt_55062': {
        'hash': 55062,
        'name': 'Apple Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_64844': {
        'hash': 64844,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Half_Cooked': {
    'hash': 2000,
    'name': 'Apple Half Cooked',
    'embedded': {
      'Apple_Half_Cooked_54784': {
        'hash': 54784,
        'name': 'Apple Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_61738': {
        'hash': 61738,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Half_Ripe': {
    'hash': 7278,
    'name': 'Apple Half Ripe',
    'embedded': {
      'Apple_Half_Ripe_54506': {
        'hash': 54506,
        'name': 'Apple Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_54586': {
        'hash': 54586,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Half_Unripe': {
    'hash': 62012,
    'name': 'Apple Half Unripe',
    'embedded': {
      'Apple_Half_Unripe_54228': {
        'hash': 54228,
        'name': 'Apple Half Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_60662': {
        'hash': 60662,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Apple_Tree': {
    'hash': 61222,
    'name': 'Apple Tree',
    'embedded': {
      'Apple_Tree_58592': {
        'hash': 58592,
        'name': 'Apple Tree',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Apple_Tree_Growth': {
    'hash': 14226,
    'name': 'Apple Tree Growth',
    'embedded': {
      'Apple_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Apple Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Apple_Tree_Separated': {
    'hash': 8974,
    'name': 'Apple Tree Separated',
    'embedded': {}
  },
  'Apple_Tree_Stage_1': {
    'hash': 50926,
    'name': 'Apple Tree Stage 1',
    'embedded': {
      'Apple_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Apple Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Apple_Tree_Stage_2': {
    'hash': 57538,
    'name': 'Apple Tree Stage 2',
    'embedded': {
      'Apple_Tree_Stage_2_11646': {
        'hash': 11646,
        'name': 'Apple Tree Stage 2',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Apple_Tree_Stage_3': {
    'hash': 62702,
    'name': 'Apple Tree Stage 3',
    'embedded': {
      'Apple_Tree_Stage_3_15774': {
        'hash': 15774,
        'name': 'Apple Tree Stage 3',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Area_of_Influence_Receiver_puzzle': {
    'hash': 13256,
    'name': 'Area of Influence Receiver puzzle',
    'embedded': {
      'Area_of_Influence_Receiver_puzzle_13236': {
        'hash': 13236,
        'name': 'Area of Influence Receiver puzzle',
        'savables': {
          'AreaOfInfluenceReceiver': {
            'hash': 309083880,
            'name': 'AreaOfInfluenceReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      }
    }
  },
  'Area_of_Influence_Sender_puzzle': {
    'hash': 59482,
    'name': 'Area of Influence Sender puzzle',
    'embedded': {
      'Area_of_Influence_Sender_puzzle_59428': {
        'hash': 59428,
        'name': 'Area of Influence Sender puzzle',
        'savables': {
          'AreaOfInfluenceSender': {
            'hash': 176949352,
            'name': 'AreaOfInfluenceSender'
          },
          'LogicIntSender': {
            'hash': 2880587164,
            'name': 'LogicIntSender'
          }
        }
      }
    }
  },
  'Arrow': {
    'hash': 56460,
    'name': 'Arrow',
    'embedded': {
      'Arrow_43746': {
        'hash': 43746,
        'name': 'Arrow',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Arrow_Tip_59378': {
        'hash': 59378,
        'name': 'Arrow Tip',
        'savables': {}
      }
    }
  },
  'Arrow_Light_Beam_Effect': {
    'hash': 1798,
    'name': 'Arrow Light Beam Effect',
    'embedded': {
      'Arrow_Light_Beam_Effect_64504': {
        'hash': 64504,
        'name': 'Arrow Light Beam Effect',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Arrow_Shaft_Wooden': {
    'hash': 29772,
    'name': 'Arrow Shaft Wooden',
    'embedded': {
      'Arrow_Shaft_Wooden_31664': {
        'hash': 31664,
        'name': 'Arrow Shaft Wooden',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Deco_33560': {
        'hash': 33560,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Feather_38282': {
        'hash': 38282,
        'name': 'Slot Feather',
        'savables': {}
      },
      'Slot_Grass_13582': {
        'hash': 13582,
        'name': 'Slot Grass',
        'savables': {}
      },
      'Tip_59148': {
        'hash': 59148,
        'name': 'Tip',
        'savables': {}
      }
    }
  },
  'Arrow_Shaft_Wooden_Training': {
    'hash': 36772,
    'name': 'Arrow Shaft Wooden Training',
    'embedded': {
      'Arrow_Shaft_Wooden_Training_36760': {
        'hash': 36760,
        'name': 'Arrow Shaft Wooden Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Tip_59796': {
        'hash': 59796,
        'name': 'Tip',
        'savables': {}
      }
    }
  },
  'Arrow_Training': {
    'hash': 36190,
    'name': 'Arrow Training',
    'embedded': {
      'Arrow_Training_43746': {
        'hash': 43746,
        'name': 'Arrow Training',
        'savables': {
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Tip_59502': {
        'hash': 59502,
        'name': 'Tip',
        'savables': {}
      }
    }
  },
  'Arrow_Training_Dud': {
    'hash': 8858,
    'name': 'Arrow Training Dud',
    'embedded': {
      'Arrow_Training_Dud_43746': {
        'hash': 43746,
        'name': 'Arrow Training Dud',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Ash_Gotera_Seed_Spray': {
    'hash': 61862,
    'name': 'Ash Gotera Seed Spray',
    'embedded': {
      'Ash_Gotera_Seed_Spray_44772': {
        'hash': 44772,
        'name': 'Ash Gotera Seed Spray',
        'savables': {}
      }
    }
  },
  'Ash_Gotera_Smoke': {
    'hash': 48860,
    'name': 'Ash Gotera Smoke',
    'embedded': {
      'Ash_Gotera_Smoke_50236': {
        'hash': 50236,
        'name': 'Ash Gotera Smoke',
        'savables': {}
      }
    }
  },
  'Ash_Pile': {
    'hash': 53398,
    'name': 'Ash Pile',
    'embedded': {
      'Ash_Pile_41772': {
        'hash': 41772,
        'name': 'Ash Pile',
        'savables': {
          'BasicDecay': {
            'hash': 3801256786,
            'name': 'BasicDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Ash_Tree_Growth': {
    'hash': 48208,
    'name': 'Ash Tree Growth',
    'embedded': {
      'Ash_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Ash Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Ash_Tree_Seed': {
    'hash': 35274,
    'name': 'Ash Tree Seed',
    'embedded': {
      'Ash_Tree_Seed_35258': {
        'hash': 35258,
        'name': 'Ash Tree Seed',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Ash_Tree_Stage_1': {
    'hash': 17892,
    'name': 'Ash Tree Stage 1',
    'embedded': {
      'Ash_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Ash Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Assembly_Deck': {
    'hash': 17520,
    'name': 'Assembly Deck',
    'embedded': {
      'Assembly_Deck_17438': {
        'hash': 17438,
        'name': 'Assembly Deck',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'GenericAssemblyStation': {
            'hash': 2971871217,
            'name': 'GenericAssemblyStation'
          }
        }
      },
      'Dock_5748': {
        'hash': 5748,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Pickup_59306': {
        'hash': 59306,
        'name': 'Pickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Auto_Cam_Player': {
    'hash': 61644,
    'name': 'Auto_Cam_Player',
    'embedded': {}
  },
  'Axe_Head': {
    'hash': 34412,
    'name': 'Axe Head',
    'embedded': {
      'Axe_Head_56484': {
        'hash': 56484,
        'name': 'Axe Head',
        'savables': {
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_59758': {
        'hash': 59758,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Pole_7796': {
        'hash': 7796,
        'name': 'Insert Pole',
        'savables': {}
      },
      'metal_axeHead_curve_geo_17472': {
        'hash': 17472,
        'name': 'metal_axeHead_curve_geo',
        'savables': {}
      }
    }
  },
  'Axe_Head_Curve': {
    'hash': 50322,
    'name': 'Axe Head Curve',
    'embedded': {
      'Axe_Head_Curve_56484': {
        'hash': 56484,
        'name': 'Axe Head Curve',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_60150': {
        'hash': 60150,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_AxeType_7796': {
        'hash': 7796,
        'name': 'Insert AxeType',
        'savables': {}
      },
      'metal_axeHead_Curve_geo_LOD0_46530': {
        'hash': 46530,
        'name': 'metal_axeHead_Curve_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Axe_Head_Felling': {
    'hash': 9918,
    'name': 'Axe Head Felling',
    'embedded': {
      'Axe_Head_Felling_58934': {
        'hash': 58934,
        'name': 'Axe Head Felling',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_60560': {
        'hash': 60560,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_AxeType_7796': {
        'hash': 7796,
        'name': 'Insert AxeType',
        'savables': {}
      },
      'metal_axeHead_felling_geo_LOD0_40512': {
        'hash': 40512,
        'name': 'metal_axeHead_felling_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Axe_Head_GreatCurve': {
    'hash': 10056,
    'name': 'Axe Head GreatCurve',
    'embedded': {
      'Axe_Head_GreatCurve_39022': {
        'hash': 39022,
        'name': 'Axe Head GreatCurve',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_61024': {
        'hash': 61024,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_HammerType_End_Cap_7796': {
        'hash': 7796,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      },
      'metal_axeHead_greatCurve_geo_LOD0_47596': {
        'hash': 47596,
        'name': 'metal_axeHead_greatCurve_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Axe_Head_LShape': {
    'hash': 17400,
    'name': 'Axe Head LShape',
    'embedded': {
      'Axe_Head_LShape_25390': {
        'hash': 25390,
        'name': 'Axe Head LShape',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_61514': {
        'hash': 61514,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_AxeType_7796': {
        'hash': 7796,
        'name': 'Insert AxeType',
        'savables': {}
      },
      'metal_axeHead_Lshape_LOD0_22814': {
        'hash': 22814,
        'name': 'metal_axeHead_Lshape_LOD0',
        'savables': {}
      }
    }
  },
  'Axe_Training': {
    'hash': 57010,
    'name': 'Axe_Training',
    'embedded': {}
  },
  'Babu': {
    'hash': 9140,
    'name': 'Babu',
    'embedded': {
      'Babu_55348': {
        'hash': 55348,
        'name': 'Babu',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Babu_AI_55590': {
        'hash': 55590,
        'name': 'Babu AI',
        'savables': {}
      },
      'Body_41706': {
        'hash': 41706,
        'name': 'Body',
        'savables': {}
      },
      'Dig_Spawn_65330': {
        'hash': 65330,
        'name': 'Dig Spawn',
        'savables': {}
      },
      'Drop_Spawn_3448': {
        'hash': 3448,
        'name': 'Drop Spawn',
        'savables': {}
      },
      'Head_Collision_43064': {
        'hash': 43064,
        'name': 'Head Collision',
        'savables': {}
      },
      'Interactor_49402': {
        'hash': 49402,
        'name': 'Interactor',
        'savables': {}
      },
      'babu_tusk_L_(1)_16632': {
        'hash': 16632,
        'name': 'babu_tusk_L (1)',
        'savables': {}
      },
      'babu_tusk_R_(1)_17014': {
        'hash': 17014,
        'name': 'babu_tusk_R (1)',
        'savables': {}
      }
    }
  },
  'Babu_Leg_Bone': {
    'hash': 32526,
    'name': 'Babu Leg Bone',
    'embedded': {
      'Babu_Leg_Bone_26390': {
        'hash': 26390,
        'name': 'Babu Leg Bone',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Babu_Leg_Full_Burnt': {
    'hash': 64844,
    'name': 'Babu Leg Full Burnt',
    'embedded': {
      'Babu_Leg_Full_Burnt_25250': {
        'hash': 25250,
        'name': 'Babu Leg Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Bone_Spawner_38786': {
        'hash': 38786,
        'name': 'Bone Spawner',
        'savables': {}
      },
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Babu_Leg_Full_Cooked': {
    'hash': 42916,
    'name': 'Babu Leg Full Cooked',
    'embedded': {
      'Babu_Leg_Full_Cooked_25250': {
        'hash': 25250,
        'name': 'Babu Leg Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Bone_Spawner_38786': {
        'hash': 38786,
        'name': 'Bone Spawner',
        'savables': {}
      },
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Babu_Leg_Full_Ripe': {
    'hash': 2562,
    'name': 'Babu Leg Full Ripe',
    'embedded': {
      'Babu_Leg_Full_Ripe_25250': {
        'hash': 25250,
        'name': 'Babu Leg Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Bone_Spawner_38786': {
        'hash': 38786,
        'name': 'Bone Spawner',
        'savables': {}
      },
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Babu_Leg_Half_Burnt': {
    'hash': 50328,
    'name': 'Babu Leg Half Burnt',
    'embedded': {
      'Babu_Leg_Half_Burnt_16238': {
        'hash': 16238,
        'name': 'Babu Leg Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_16182': {
        'hash': 16182,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Babu_Leg_Half_Cooked': {
    'hash': 50326,
    'name': 'Babu Leg Half Cooked',
    'embedded': {
      'Babu_Leg_Half_Cooked_16238': {
        'hash': 16238,
        'name': 'Babu Leg Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_16182': {
        'hash': 16182,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Babu_Leg_Half_Ripe': {
    'hash': 50252,
    'name': 'Babu Leg Half Ripe',
    'embedded': {
      'Babu_Leg_Half_Ripe_16238': {
        'hash': 16238,
        'name': 'Babu Leg Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_16182': {
        'hash': 16182,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Bag': {
    'hash': 35324,
    'name': 'Bag',
    'embedded': {
      'Bag_43012': {
        'hash': 43012,
        'name': 'Bag',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Bag_Body_42972': {
        'hash': 42972,
        'name': 'Bag Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Dock_BL_42978': {
        'hash': 42978,
        'name': 'Dock BL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BM_42976': {
        'hash': 42976,
        'name': 'Dock BM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BR_42974': {
        'hash': 42974,
        'name': 'Dock BR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_ML_42984': {
        'hash': 42984,
        'name': 'Dock ML',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MM_42982': {
        'hash': 42982,
        'name': 'Dock MM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MR_42980': {
        'hash': 42980,
        'name': 'Dock MR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TL_42990': {
        'hash': 42990,
        'name': 'Dock TL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TM_42988': {
        'hash': 42988,
        'name': 'Dock TM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TR_42986': {
        'hash': 42986,
        'name': 'Dock TR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Roll_Dock_47074': {
        'hash': 47074,
        'name': 'Roll Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Slot_Bag_Attach_30776': {
        'hash': 30776,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_55164': {
        'hash': 55164,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Pin_Collectible_Attach_31454': {
        'hash': 31454,
        'name': 'Slot Bag Pin Collectible Attach',
        'savables': {}
      },
      'Slot_Bag_Tool_Attachment_36292': {
        'hash': 36292,
        'name': 'Slot Bag Tool Attachment',
        'savables': {}
      },
      'Slot_Bag_Tool_Attachment_36386': {
        'hash': 36386,
        'name': 'Slot Bag Tool Attachment',
        'savables': {}
      },
      'standard_bag_Body_14336': {
        'hash': 14336,
        'name': 'standard_bag_Body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_backPin_L_14300': {
        'hash': 14300,
        'name': 'standard_bag_backPin_L',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_backPin_R_14296': {
        'hash': 14296,
        'name': 'standard_bag_backPin_R',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_crossStrap_01_14332': {
        'hash': 14332,
        'name': 'standard_bag_crossStrap_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_flap_14328': {
        'hash': 14328,
        'name': 'standard_bag_flap',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_flap_clasp_01_14324': {
        'hash': 14324,
        'name': 'standard_bag_flap_clasp_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_handle_body_14308': {
        'hash': 14308,
        'name': 'standard_bag_handle_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_handle_wraps_14304': {
        'hash': 14304,
        'name': 'standard_bag_handle_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_sideBuckle_L_01_14316': {
        'hash': 14316,
        'name': 'standard_bag_sideBuckle_L_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_sideBuckle_L_02_14312': {
        'hash': 14312,
        'name': 'standard_bag_sideBuckle_L_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_sideBuckle_R_01_14376': {
        'hash': 14376,
        'name': 'standard_bag_sideBuckle_R_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_sideBuckle_R_02_14372': {
        'hash': 14372,
        'name': 'standard_bag_sideBuckle_R_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_bot_L_01_14360': {
        'hash': 14360,
        'name': 'standard_bag_strap_bot_L_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_bot_R_01_14356': {
        'hash': 14356,
        'name': 'standard_bag_strap_bot_R_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_bot_buckle_L_02_14368': {
        'hash': 14368,
        'name': 'standard_bag_strap_bot_buckle_L_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_bot_buckle_R_02_14364': {
        'hash': 14364,
        'name': 'standard_bag_strap_bot_buckle_R_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_top_L_01_14344': {
        'hash': 14344,
        'name': 'standard_bag_strap_top_L_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_top_R_01_14340': {
        'hash': 14340,
        'name': 'standard_bag_strap_top_R_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_top_buckle_L_01_14352': {
        'hash': 14352,
        'name': 'standard_bag_strap_top_buckle_L_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_strap_top_buckle_R_01_14348': {
        'hash': 14348,
        'name': 'standard_bag_strap_top_buckle_R_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Barrel_Bag': {
    'hash': 19354,
    'name': 'Barrel Bag',
    'embedded': {
      'Bag_Body_42972': {
        'hash': 42972,
        'name': 'Bag Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Barrel_Bag_43012': {
        'hash': 43012,
        'name': 'Barrel Bag',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Dock_TL_42990': {
        'hash': 42990,
        'name': 'Dock TL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Heat_47560': {
        'hash': 47560,
        'name': 'Heat',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Liquid_Part_65316': {
        'hash': 65316,
        'name': 'Liquid Part',
        'savables': {
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          }
        }
      },
      'Slot_Bag_Attach_30776': {
        'hash': 30776,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_55164': {
        'hash': 55164,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'barrel_bag_bottomCap_37710': {
        'hash': 37710,
        'name': 'barrel_bag_bottomCap',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_handleRod_37706': {
        'hash': 37706,
        'name': 'barrel_bag_handleRod',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_handleTop_37702': {
        'hash': 37702,
        'name': 'barrel_bag_handleTop',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_ladleHook_37698': {
        'hash': 37698,
        'name': 'barrel_bag_ladleHook',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_01_37746': {
        'hash': 37746,
        'name': 'barrel_bag_plank_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_02_37742': {
        'hash': 37742,
        'name': 'barrel_bag_plank_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_03_37738': {
        'hash': 37738,
        'name': 'barrel_bag_plank_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_04_37734': {
        'hash': 37734,
        'name': 'barrel_bag_plank_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_05_37730': {
        'hash': 37730,
        'name': 'barrel_bag_plank_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_06_37726': {
        'hash': 37726,
        'name': 'barrel_bag_plank_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_07_37714': {
        'hash': 37714,
        'name': 'barrel_bag_plank_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_plank_08_37722': {
        'hash': 37722,
        'name': 'barrel_bag_plank_08',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_ringBottom_37718': {
        'hash': 37718,
        'name': 'barrel_bag_ringBottom',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'barrel_bag_ringtop_37750': {
        'hash': 37750,
        'name': 'barrel_bag_ringtop',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Basic_Population_Folder': {
    'hash': 31116,
    'name': 'Basic_Population_Folder',
    'embedded': {}
  },
  'Birch_Tree_Growth': {
    'hash': 48218,
    'name': 'Birch Tree Growth',
    'embedded': {
      'Birch_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Birch Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Birch_Tree_Seed': {
    'hash': 55274,
    'name': 'Birch Tree Seed',
    'embedded': {
      'Birch_Tree_Seed_35258': {
        'hash': 35258,
        'name': 'Birch Tree Seed',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Birch_Tree_Stage_1': {
    'hash': 17704,
    'name': 'Birch Tree Stage 1',
    'embedded': {
      'Birch_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Birch Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Blue_Mix_Recipe_Burnt_Stew': {
    'hash': 57666,
    'name': 'Blue_Mix_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Blue_Mix_Recipe_Cooked_Stew': {
    'hash': 57642,
    'name': 'Blue_Mix_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Blue_Mix_Recipe_Raw_Stew': {
    'hash': 57614,
    'name': 'Blue_Mix_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Blueberry_Flower_Bloom': {
    'hash': 40922,
    'name': 'Blueberry Flower Bloom',
    'embedded': {
      'Blueberry_Flower_Bloom_25566': {
        'hash': 25566,
        'name': 'Blueberry Flower Bloom',
        'savables': {}
      }
    }
  },
  'Blueberry_Flower_Bud': {
    'hash': 40920,
    'name': 'Blueberry Flower Bud',
    'embedded': {
      'Blueberry_Flower_Bud_25268': {
        'hash': 25268,
        'name': 'Blueberry Flower Bud',
        'savables': {}
      }
    }
  },
  'Blueberry_Full_Burnt': {
    'hash': 49890,
    'name': 'Blueberry Full Burnt',
    'embedded': {
      'Blueberry_Full_Burnt_56526': {
        'hash': 56526,
        'name': 'Blueberry Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_46248': {
        'hash': 46248,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Blueberry_Full_Cooked': {
    'hash': 47468,
    'name': 'Blueberry Full Cooked',
    'embedded': {
      'Blueberry_Full_Cooked_55520': {
        'hash': 55520,
        'name': 'Blueberry Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_45334': {
        'hash': 45334,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Blueberry_Full_Ripe': {
    'hash': 45012,
    'name': 'Blueberry Full Ripe',
    'embedded': {
      'Blueberry_Full_Ripe_54516': {
        'hash': 54516,
        'name': 'Blueberry Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_44398': {
        'hash': 44398,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Blueberry_Full_Unripe': {
    'hash': 42556,
    'name': 'Blueberry Full Unripe',
    'embedded': {
      'Blueberry_Full_Unripe_53512': {
        'hash': 53512,
        'name': 'Blueberry Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      },
      'Cooking_43444': {
        'hash': 43444,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Blueberry_Growth': {
    'hash': 19292,
    'name': 'Blueberry Growth',
    'embedded': {
      'Blueberry_Growth_33458': {
        'hash': 33458,
        'name': 'Blueberry Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Blueberry_Recipe_Burnt_Stew': {
    'hash': 36830,
    'name': 'Blueberry_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Blueberry_Recipe_Cooked_Stew': {
    'hash': 36086,
    'name': 'Blueberry_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Blueberry_Recipe_Raw_Stew': {
    'hash': 35338,
    'name': 'Blueberry_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Blueberry_Tree': {
    'hash': 878,
    'name': 'Blueberry Tree',
    'embedded': {
      'Blueberry_Tree_24412': {
        'hash': 24412,
        'name': 'Blueberry Tree',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Blueberry_Tree_Growth': {
    'hash': 14700,
    'name': 'Blueberry Tree Growth',
    'embedded': {
      'Blueberry_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Blueberry Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Blueberry_Tree_Separated': {
    'hash': 13784,
    'name': 'Blueberry_Tree_Separated',
    'embedded': {}
  },
  'Blueberry_Tree_Stage_1': {
    'hash': 26588,
    'name': 'Blueberry Tree Stage 1',
    'embedded': {
      'Blueberry_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Blueberry Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Blueberry_Tree_Stage_2': {
    'hash': 1038,
    'name': 'Blueberry Tree Stage 2',
    'embedded': {
      'Blueberry_Tree_Stage_2_1020': {
        'hash': 1020,
        'name': 'Blueberry Tree Stage 2',
        'savables': {}
      }
    }
  },
  'Blueberry_Tree_Stage_3': {
    'hash': 1040,
    'name': 'Blueberry Tree Stage 3',
    'embedded': {
      'Blueberry_Tree_Stage_3_1022': {
        'hash': 1022,
        'name': 'Blueberry Tree Stage 3',
        'savables': {}
      }
    }
  },
  'Book': {
    'hash': 44174,
    'name': 'Book',
    'embedded': {}
  },
  'Bookshelf': {
    'hash': 64316,
    'name': 'Bookshelf',
    'embedded': {
      'Bookshelf_64030': {
        'hash': 64030,
        'name': 'Bookshelf',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Dock_2780': {
        'hash': 2780,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64568': {
        'hash': 64568,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64570': {
        'hash': 64570,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64572': {
        'hash': 64572,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64574': {
        'hash': 64574,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64576': {
        'hash': 64576,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64578': {
        'hash': 64578,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64580': {
        'hash': 64580,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64582': {
        'hash': 64582,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64584': {
        'hash': 64584,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64586': {
        'hash': 64586,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64588': {
        'hash': 64588,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64590': {
        'hash': 64590,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64592': {
        'hash': 64592,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64594': {
        'hash': 64594,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64596': {
        'hash': 64596,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64598': {
        'hash': 64598,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64600': {
        'hash': 64600,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64602': {
        'hash': 64602,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_64604': {
        'hash': 64604,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Bookshelf_NoBackboard': {
    'hash': 59952,
    'name': 'Bookshelf_NoBackboard',
    'embedded': {
      'Bookshelf_NoBackboard_64030': {
        'hash': 64030,
        'name': 'Bookshelf_NoBackboard',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Dock_2780': {
        'hash': 2780,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62044': {
        'hash': 62044,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62046': {
        'hash': 62046,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62048': {
        'hash': 62048,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62050': {
        'hash': 62050,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62052': {
        'hash': 62052,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62054': {
        'hash': 62054,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62056': {
        'hash': 62056,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62058': {
        'hash': 62058,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62060': {
        'hash': 62060,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62062': {
        'hash': 62062,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62064': {
        'hash': 62064,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62066': {
        'hash': 62066,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62068': {
        'hash': 62068,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62070': {
        'hash': 62070,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62072': {
        'hash': 62072,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62074': {
        'hash': 62074,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62076': {
        'hash': 62076,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62078': {
        'hash': 62078,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62080': {
        'hash': 62080,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Bought_Skill_Orb_Replacer': {
    'hash': 42842,
    'name': 'Bought_Skill_Orb_Replacer',
    'embedded': {}
  },
  'Boulder_Button_Spawner': {
    'hash': 21830,
    'name': 'Boulder_Button_Spawner',
    'embedded': {}
  },
  'Bouncing_Movement': {
    'hash': 34396,
    'name': 'Bouncing Movement',
    'embedded': {
      'Bouncing_Movement_60930': {
        'hash': 60930,
        'name': 'Bouncing Movement',
        'savables': {
          'WayPointPath': {
            'hash': 1063725326,
            'name': 'WayPointPath'
          }
        }
      }
    }
  },
  'Bow': {
    'hash': 56546,
    'name': 'Bow',
    'embedded': {
      'Arrow_Dock_40686': {
        'hash': 40686,
        'name': 'Arrow Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bow_40716': {
        'hash': 40716,
        'name': 'Bow',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'String_40688': {
        'hash': 40688,
        'name': 'String',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Bow_Blade': {
    'hash': 27416,
    'name': 'Bow Blade',
    'embedded': {
      'Bow_Blade_27418': {
        'hash': 27418,
        'name': 'Bow Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_12228': {
        'hash': 12228,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Bow_Blade_7796': {
        'hash': 7796,
        'name': 'Insert Bow Blade',
        'savables': {}
      },
      'metal_blade_bow_full_geo_LOD0_52240': {
        'hash': 52240,
        'name': 'metal_blade_bow_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Bow_Training': {
    'hash': 42340,
    'name': 'Bow Training',
    'embedded': {
      'Arrow_Dock_40686': {
        'hash': 40686,
        'name': 'Arrow Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bow_Training_42328': {
        'hash': 42328,
        'name': 'Bow Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'String_40688': {
        'hash': 40688,
        'name': 'String',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Bramble_Obstacle': {
    'hash': 59178,
    'name': 'Bramble Obstacle',
    'embedded': {
      'Bramble_Obstacle_59546': {
        'hash': 59546,
        'name': 'Bramble Obstacle',
        'savables': {}
      },
      'Hurting_Bit_59546': {
        'hash': 59546,
        'name': 'Hurting Bit',
        'savables': {}
      }
    }
  },
  'Breakable_Box': {
    'hash': 19624,
    'name': 'Breakable Box',
    'embedded': {
      'Breakable_Box_17050': {
        'hash': 17050,
        'name': 'Breakable Box',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Content_40226': {
        'hash': 40226,
        'name': 'Spawn Content',
        'savables': {}
      }
    }
  },
  'Breakable_Pot': {
    'hash': 60800,
    'name': 'Breakable Pot',
    'embedded': {
      'Breakable_Pot_17050': {
        'hash': 17050,
        'name': 'Breakable Pot',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Content_40226': {
        'hash': 40226,
        'name': 'Spawn Content',
        'savables': {}
      }
    }
  },
  'Breakable_Root_Bendy': {
    'hash': 41482,
    'name': 'Breakable Root Bendy',
    'embedded': {
      'Breakable_Root_Bendy_42186': {
        'hash': 42186,
        'name': 'Breakable Root Bendy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Curved': {
    'hash': 64388,
    'name': 'Breakable Root Curved',
    'embedded': {
      'Breakable_Root_Curved_2746': {
        'hash': 2746,
        'name': 'Breakable Root Curved',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Fence': {
    'hash': 62846,
    'name': 'Breakable Root Fence',
    'embedded': {
      'Breakable_Root_Fence_63540': {
        'hash': 63540,
        'name': 'Breakable Root Fence',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Ground_01': {
    'hash': 34014,
    'name': 'Breakable Root Ground 01',
    'embedded': {
      'Breakable_Root_Ground_01_34010': {
        'hash': 34010,
        'name': 'Breakable Root Ground 01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Ground_02': {
    'hash': 23246,
    'name': 'Breakable Root Ground 02',
    'embedded': {
      'Breakable_Root_Ground_02_23250': {
        'hash': 23250,
        'name': 'Breakable Root Ground 02',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Ground_03': {
    'hash': 21206,
    'name': 'Breakable Root Ground 03',
    'embedded': {
      'Breakable_Root_Ground_03_21202': {
        'hash': 21202,
        'name': 'Breakable Root Ground 03',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Ground_04': {
    'hash': 18702,
    'name': 'Breakable Root Ground 04',
    'embedded': {
      'Breakable_Root_Ground_04_18706': {
        'hash': 18706,
        'name': 'Breakable Root Ground 04',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Ground_05': {
    'hash': 16298,
    'name': 'Breakable Root Ground 05',
    'embedded': {
      'Breakable_Root_Ground_05_16294': {
        'hash': 16294,
        'name': 'Breakable Root Ground 05',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Ground_06': {
    'hash': 13634,
    'name': 'Breakable Root Ground 06',
    'embedded': {
      'Breakable_Root_Ground_06_13638': {
        'hash': 13638,
        'name': 'Breakable Root Ground 06',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_HangingShort_Bendy': {
    'hash': 13856,
    'name': 'Breakable Root HangingShort Bendy',
    'embedded': {
      'Breakable_Root_HangingShort_Bendy_13860': {
        'hash': 13860,
        'name': 'Breakable Root HangingShort Bendy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_HangingShort_Curved': {
    'hash': 12224,
    'name': 'Breakable Root HangingShort Curved',
    'embedded': {
      'Breakable_Root_HangingShort_Curved_12228': {
        'hash': 12228,
        'name': 'Breakable Root HangingShort Curved',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_HangingShort_Straight': {
    'hash': 9226,
    'name': 'Breakable Root HangingShort Straight',
    'embedded': {
      'Breakable_Root_HangingShort_Straight_9230': {
        'hash': 9230,
        'name': 'Breakable Root HangingShort Straight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_HangingShort_Wavy': {
    'hash': 8534,
    'name': 'Breakable Root HangingShort Wavy',
    'embedded': {
      'Breakable_Root_HangingShort_Wavy_8538': {
        'hash': 8538,
        'name': 'Breakable Root HangingShort Wavy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Hanging_Bendy': {
    'hash': 63792,
    'name': 'Breakable Root Hanging Bendy',
    'embedded': {
      'Breakable_Root_Hanging_Bendy_63796': {
        'hash': 63796,
        'name': 'Breakable Root Hanging Bendy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Hanging_Column_01': {
    'hash': 37666,
    'name': 'Breakable Root Hanging Column 01',
    'embedded': {
      'Breakable_Root_Hanging_Column_01_37662': {
        'hash': 37662,
        'name': 'Breakable Root Hanging Column 01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Hanging_Column_02': {
    'hash': 24548,
    'name': 'Breakable Root Hanging Column 02',
    'embedded': {
      'Breakable_Root_Hanging_Column_02_24552': {
        'hash': 24552,
        'name': 'Breakable Root Hanging Column 02',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Hanging_Straight': {
    'hash': 12714,
    'name': 'Breakable Root Hanging Straight',
    'embedded': {
      'Breakable_Root_Hanging_Straight_12710': {
        'hash': 12710,
        'name': 'Breakable Root Hanging Straight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Hanging_Thin_Bendy': {
    'hash': 6394,
    'name': 'Breakable Root Hanging Thin Bendy',
    'embedded': {
      'Breakable_Root_Hanging_Thin_Bendy_6398': {
        'hash': 6398,
        'name': 'Breakable Root Hanging Thin Bendy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Hanging_Thin_Straight': {
    'hash': 57168,
    'name': 'Breakable Root Hanging Thin Straight',
    'embedded': {
      'Breakable_Root_Hanging_Thin_Straight_57164': {
        'hash': 57164,
        'name': 'Breakable Root Hanging Thin Straight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Mound_Large': {
    'hash': 15602,
    'name': 'Breakable Root Mound Large',
    'embedded': {
      'Breakable_Root_Mound_Large_15598': {
        'hash': 15598,
        'name': 'Breakable Root Mound Large',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Mound_Small': {
    'hash': 43010,
    'name': 'Breakable Root Mound Small',
    'embedded': {
      'Breakable_Root_Mound_Small_43014': {
        'hash': 43014,
        'name': 'Breakable Root Mound Small',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Spawner': {
    'hash': 40946,
    'name': 'Breakable Root Spawner',
    'embedded': {
      'Breakable_Root_Spawner_6790': {
        'hash': 6790,
        'name': 'Breakable Root Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Breakable_Root_Straight': {
    'hash': 47012,
    'name': 'Breakable Root Straight',
    'embedded': {
      'Breakable_Root_Straight_47710': {
        'hash': 47710,
        'name': 'Breakable Root Straight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Breakable_Root_Wavy': {
    'hash': 28332,
    'name': 'Breakable Root Wavy',
    'embedded': {
      'Breakable_Root_Wavy_28960': {
        'hash': 28960,
        'name': 'Breakable Root Wavy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Broken_Box_Piece': {
    'hash': 260,
    'name': 'Broken Box Piece',
    'embedded': {
      'Broken_Box_Piece_1356': {
        'hash': 1356,
        'name': 'Broken Box Piece',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Breakable_Root_Piece_Ground': {
    'hash': 43996,
    'name': 'Broken Breakable Root Piece Ground',
    'embedded': {
      'Broken_Breakable_Root_Piece_Ground_45852': {
        'hash': 45852,
        'name': 'Broken Breakable Root Piece Ground',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Breakable_Root_Piece_Short': {
    'hash': 43998,
    'name': 'Broken Breakable Root Piece Short',
    'embedded': {
      'Broken_Breakable_Root_Piece_Short_45854': {
        'hash': 45854,
        'name': 'Broken Breakable Root Piece Short',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Breakable_Root_Piece_Thick': {
    'hash': 43994,
    'name': 'Broken Breakable Root Piece Thick',
    'embedded': {
      'Broken_Breakable_Root_Piece_Thick_45850': {
        'hash': 45850,
        'name': 'Broken Breakable Root Piece Thick',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Breakable_Root_Piece_Thin': {
    'hash': 44000,
    'name': 'Broken Breakable Root Piece Thin',
    'embedded': {
      'Broken_Breakable_Root_Piece_Thin_45856': {
        'hash': 45856,
        'name': 'Broken Breakable Root Piece Thin',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Burnable_Root_Piece_Ground': {
    'hash': 60406,
    'name': 'Broken Burnable Root Piece Ground',
    'embedded': {
      'Broken_Burnable_Root_Piece_Ground_21172': {
        'hash': 21172,
        'name': 'Broken Burnable Root Piece Ground',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Burnable_Root_Piece_Short': {
    'hash': 58460,
    'name': 'Broken Burnable Root Piece Short',
    'embedded': {
      'Broken_Burnable_Root_Piece_Short_21416': {
        'hash': 21416,
        'name': 'Broken Burnable Root Piece Short',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Burnable_Root_Piece_Thick': {
    'hash': 64302,
    'name': 'Broken Burnable Root Piece Thick',
    'embedded': {
      'Broken_Burnable_Root_Piece_Thick_20728': {
        'hash': 20728,
        'name': 'Broken Burnable Root Piece Thick',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Burnable_Root_Piece_Thin': {
    'hash': 61492,
    'name': 'Broken Burnable Root Piece Thin',
    'embedded': {
      'Broken_Burnable_Root_Piece_Thin_21074': {
        'hash': 21074,
        'name': 'Broken Burnable Root Piece Thin',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Crystal_Piece_01': {
    'hash': 60484,
    'name': 'Broken Crystal Piece 01',
    'embedded': {
      'Broken_Crystal_Piece_01_63000': {
        'hash': 63000,
        'name': 'Broken Crystal Piece 01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Crystal_Piece_02': {
    'hash': 49198,
    'name': 'Broken Crystal Piece 02',
    'embedded': {
      'Broken_Crystal_Piece_02_46364': {
        'hash': 46364,
        'name': 'Broken Crystal Piece 02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Crystal_Piece_03': {
    'hash': 37046,
    'name': 'Broken Crystal Piece 03',
    'embedded': {
      'Broken_Crystal_Piece_03_34076': {
        'hash': 34076,
        'name': 'Broken Crystal Piece 03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Crystal_Piece_04': {
    'hash': 23220,
    'name': 'Broken Crystal Piece 04',
    'embedded': {
      'Broken_Crystal_Piece_04_20126': {
        'hash': 20126,
        'name': 'Broken Crystal Piece 04',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_ExplosionBoulder_Part_01': {
    'hash': 45514,
    'name': 'Broken_ExplosionBoulder_Part_01',
    'embedded': {
      'Broken_ExplosionBoulder_Part_01_53690': {
        'hash': 53690,
        'name': 'Broken_ExplosionBoulder_Part_01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_ExplosionBoulder_Part_02': {
    'hash': 45518,
    'name': 'Broken_ExplosionBoulder_Part_02',
    'embedded': {
      'Broken_ExplosionBoulder_Part_02_3998': {
        'hash': 3998,
        'name': 'Broken_ExplosionBoulder_Part_02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_ExplosionBoulder_Part_03': {
    'hash': 45516,
    'name': 'Broken_ExplosionBoulder_Part_03',
    'embedded': {
      'Broken_ExplosionBoulder_Part_03_39886': {
        'hash': 39886,
        'name': 'Broken_ExplosionBoulder_Part_03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_ExplosionBoulder_Part_04': {
    'hash': 45512,
    'name': 'Broken_ExplosionBoulder_Part_04',
    'embedded': {
      'Broken_ExplosionBoulder_Part_04_29214': {
        'hash': 29214,
        'name': 'Broken_ExplosionBoulder_Part_04',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_ExplosionBoulder_Part_05': {
    'hash': 45520,
    'name': 'Broken_ExplosionBoulder_Part_05',
    'embedded': {
      'Broken_ExplosionBoulder_Part_05_18196': {
        'hash': 18196,
        'name': 'Broken_ExplosionBoulder_Part_05',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Broken_Vine_Bunch_Dead_Piece': {
    'hash': 7264,
    'name': 'Broken Vine Bunch Dead Piece',
    'embedded': {
      'Broken_Vine_Bunch_Dead_Piece_11182': {
        'hash': 11182,
        'name': 'Broken Vine Bunch Dead Piece',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Bronze_Alloy_Ingot': {
    'hash': 26316,
    'name': 'Bronze_Alloy_Ingot',
    'embedded': {}
  },
  'Brown_Mushroom_Shield': {
    'hash': 17258,
    'name': 'Brown Mushroom Shield',
    'embedded': {
      'Brown_Mushroom_Shield_15482': {
        'hash': 15482,
        'name': 'Brown Mushroom Shield',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Bung': {
    'hash': 8050,
    'name': 'Bung',
    'embedded': {}
  },
  'Buried_Grass': {
    'hash': 47090,
    'name': 'Buried Grass',
    'embedded': {
      'Buried_Grass_64192': {
        'hash': 64192,
        'name': 'Buried Grass',
        'savables': {
          'SpawnBuried': {
            'hash': 654225716,
            'name': 'SpawnBuried'
          }
        }
      },
      'PullPickup_51602': {
        'hash': 51602,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Buried_Pullup': {
    'hash': 61742,
    'name': 'Buried Pullup',
    'embedded': {
      'Buried_Pullup_64192': {
        'hash': 64192,
        'name': 'Buried Pullup',
        'savables': {
          'SpawnBuried': {
            'hash': 654225716,
            'name': 'SpawnBuried'
          }
        }
      },
      'PullPickup_51602': {
        'hash': 51602,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Buried_Pullup_Bramble': {
    'hash': 37764,
    'name': 'Buried Pullup Bramble',
    'embedded': {
      'Buried_Pullup_Bramble_64192': {
        'hash': 64192,
        'name': 'Buried Pullup Bramble',
        'savables': {
          'SpawnBuried': {
            'hash': 654225716,
            'name': 'SpawnBuried'
          }
        }
      },
      'PullPickup_51602': {
        'hash': 51602,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Buried_Pullup_Potato_Sapling': {
    'hash': 10960,
    'name': 'Buried Pullup Potato Sapling',
    'embedded': {
      'Buried_Pullup_Potato_Sapling_64192': {
        'hash': 64192,
        'name': 'Buried Pullup Potato Sapling',
        'savables': {
          'SpawnBuried': {
            'hash': 654225716,
            'name': 'SpawnBuried'
          }
        }
      },
      'PullPickup_51602': {
        'hash': 51602,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Buried_Pullup_Primitive': {
    'hash': 29550,
    'name': 'Buried Pullup Primitive',
    'embedded': {
      'Buried_Pullup_Primitive_64192': {
        'hash': 64192,
        'name': 'Buried Pullup Primitive',
        'savables': {
          'SpawnBuried': {
            'hash': 654225716,
            'name': 'SpawnBuried'
          }
        }
      },
      'PullPickup_51602': {
        'hash': 51602,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Burnable_Root_Fence': {
    'hash': 45144,
    'name': 'Burnable Root Fence',
    'embedded': {
      'Burnable_Root_Fence_63540': {
        'hash': 63540,
        'name': 'Burnable Root Fence',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Ground_01': {
    'hash': 5702,
    'name': 'Burnable Root Ground 01',
    'embedded': {
      'Burnable_Root_Ground_01_10714': {
        'hash': 10714,
        'name': 'Burnable Root Ground 01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Ground_02': {
    'hash': 34852,
    'name': 'Burnable Root Ground 02',
    'embedded': {
      'Burnable_Root_Ground_02_36732': {
        'hash': 36732,
        'name': 'Burnable Root Ground 02',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Ground_03': {
    'hash': 65260,
    'name': 'Burnable Root Ground 03',
    'embedded': {
      'Burnable_Root_Ground_03_2088': {
        'hash': 2088,
        'name': 'Burnable Root Ground 03',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Ground_04': {
    'hash': 36342,
    'name': 'Burnable Root Ground 04',
    'embedded': {
      'Burnable_Root_Ground_04_38842': {
        'hash': 38842,
        'name': 'Burnable Root Ground 04',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Ground_05': {
    'hash': 35154,
    'name': 'Burnable Root Ground 05',
    'embedded': {
      'Burnable_Root_Ground_05_37204': {
        'hash': 37204,
        'name': 'Burnable Root Ground 05',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Ground_06': {
    'hash': 37414,
    'name': 'Burnable Root Ground 06',
    'embedded': {
      'Burnable_Root_Ground_06_59980': {
        'hash': 59980,
        'name': 'Burnable Root Ground 06',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_HangingShort_Bendy': {
    'hash': 58042,
    'name': 'Burnable Root HangingShort Bendy',
    'embedded': {
      'Burnable_Root_HangingShort_Bendy_60188': {
        'hash': 60188,
        'name': 'Burnable Root HangingShort Bendy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_HangingShort_Curved': {
    'hash': 29008,
    'name': 'Burnable Root HangingShort Curved',
    'embedded': {
      'Burnable_Root_HangingShort_Curved_31246': {
        'hash': 31246,
        'name': 'Burnable Root HangingShort Curved',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_HangingShort_Straight': {
    'hash': 43200,
    'name': 'Burnable Root HangingShort Straight',
    'embedded': {
      'Burnable_Root_HangingShort_Straight_45316': {
        'hash': 45316,
        'name': 'Burnable Root HangingShort Straight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_HangingShort_Wavy': {
    'hash': 680,
    'name': 'Burnable Root HangingShort Wavy',
    'embedded': {
      'Burnable_Root_HangingShort_Wavy_3040': {
        'hash': 3040,
        'name': 'Burnable Root HangingShort Wavy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Hanging_Bendy': {
    'hash': 44884,
    'name': 'Burnable Root Hanging Bendy',
    'embedded': {
      'Burnable_Root_Hanging_Bendy_46884': {
        'hash': 46884,
        'name': 'Burnable Root Hanging Bendy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Hanging_Column_01': {
    'hash': 39694,
    'name': 'Burnable Root Hanging Column 01',
    'embedded': {
      'Burnable_Root_Hanging_Column_01_43274': {
        'hash': 43274,
        'name': 'Burnable Root Hanging Column 01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Hanging_Column_02': {
    'hash': 14166,
    'name': 'Burnable Root Hanging Column 02',
    'embedded': {
      'Burnable_Root_Hanging_Column_02_16140': {
        'hash': 16140,
        'name': 'Burnable Root Hanging Column 02',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Hanging_Straight': {
    'hash': 39592,
    'name': 'Burnable Root Hanging Straight',
    'embedded': {
      'Burnable_Root_Hanging_Straight_41518': {
        'hash': 41518,
        'name': 'Burnable Root Hanging Straight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Hanging_Thin_Bendy': {
    'hash': 64866,
    'name': 'Burnable Root Hanging Thin Bendy',
    'embedded': {
      'Burnable_Root_Hanging_Thin_Bendy_1566': {
        'hash': 1566,
        'name': 'Burnable Root Hanging Thin Bendy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Hanging_Thin_Straight': {
    'hash': 36356,
    'name': 'Burnable Root Hanging Thin Straight',
    'embedded': {
      'Burnable_Root_Hanging_Thin_Straight_38530': {
        'hash': 38530,
        'name': 'Burnable Root Hanging Thin Straight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Mound_Large': {
    'hash': 48874,
    'name': 'Burnable Root Mound Large',
    'embedded': {
      'Burnable_Root_Mound_Large_15598': {
        'hash': 15598,
        'name': 'Burnable Root Mound Large',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_Root_Mound_Small': {
    'hash': 17066,
    'name': 'Burnable Root Mound Small',
    'embedded': {
      'Burnable_Root_Mound_Small_17070': {
        'hash': 17070,
        'name': 'Burnable Root Mound Small',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_VineBunch': {
    'hash': 35828,
    'name': 'Burnable VineBunch',
    'embedded': {
      'Burnable_VineBunch_35834': {
        'hash': 35834,
        'name': 'Burnable VineBunch',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Burnable_VineBunch_Tutorial': {
    'hash': 38202,
    'name': 'Burnable VineBunch Tutorial',
    'embedded': {
      'Burnable_VineBunch_Tutorial_35834': {
        'hash': 35834,
        'name': 'Burnable VineBunch Tutorial',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Button_Spawner': {
    'hash': 42752,
    'name': 'Button_Spawner',
    'embedded': {}
  },
  'Campfire': {
    'hash': 63848,
    'name': 'Campfire',
    'embedded': {
      'Campfire_8496': {
        'hash': 8496,
        'name': 'Campfire',
        'savables': {}
      },
      'Fire_8488': {
        'hash': 8488,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Campfire_Infinite': {
    'hash': 63034,
    'name': 'Campfire Infinite',
    'embedded': {
      'Campfire_Infinite_8496': {
        'hash': 8496,
        'name': 'Campfire Infinite',
        'savables': {}
      }
    }
  },
  'Campfire_Spawner': {
    'hash': 6584,
    'name': 'Campfire Spawner',
    'embedded': {
      'Campfire_Spawner_55752': {
        'hash': 55752,
        'name': 'Campfire Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Tinder_Spawner_64618': {
        'hash': 64618,
        'name': 'Tinder Spawner',
        'savables': {}
      }
    }
  },
  'Campfire_Weak': {
    'hash': 9276,
    'name': 'Campfire Weak',
    'embedded': {
      'Campfire_Weak_8496': {
        'hash': 8496,
        'name': 'Campfire Weak',
        'savables': {}
      },
      'Fire_8488': {
        'hash': 8488,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Candy_Cane': {
    'hash': 27314,
    'name': 'Candy Cane',
    'embedded': {
      'Candy_Cane_24532': {
        'hash': 24532,
        'name': 'Candy Cane',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Candy_Cane_Knife_Spawner_3782': {
        'hash': 3782,
        'name': 'Candy Cane Knife Spawner',
        'savables': {}
      }
    }
  },
  'Candy_Cane_Knife': {
    'hash': 7676,
    'name': 'Candy Cane Knife',
    'embedded': {
      'Candy_Cane_Knife_24532': {
        'hash': 24532,
        'name': 'Candy Cane Knife',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Carrot_Full_Burnt': {
    'hash': 62634,
    'name': 'Carrot Full Burnt',
    'embedded': {
      'Carrot_Full_Burnt_61108': {
        'hash': 61108,
        'name': 'Carrot Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_3266': {
        'hash': 3266,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carrot_Full_Cooked': {
    'hash': 60742,
    'name': 'Carrot Full Cooked',
    'embedded': {
      'Carrot_Full_Cooked_59204': {
        'hash': 59204,
        'name': 'Carrot Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_1986': {
        'hash': 1986,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carrot_Full_Ripe': {
    'hash': 58838,
    'name': 'Carrot Full Ripe',
    'embedded': {
      'Carrot_Full_Ripe_57300': {
        'hash': 57300,
        'name': 'Carrot Full Ripe',
        'savables': {
          'BuildupPickup': {
            'hash': 3373651539,
            'name': 'BuildupPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_706': {
        'hash': 706,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Leaves_Parent_29566': {
        'hash': 29566,
        'name': 'Leaves Parent',
        'savables': {}
      }
    }
  },
  'Carrot_Full_Unripe': {
    'hash': 56934,
    'name': 'Carrot Full Unripe',
    'embedded': {
      'Carrot_Full_Unripe_55396': {
        'hash': 55396,
        'name': 'Carrot Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_64962': {
        'hash': 64962,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carrot_Half_Burnt': {
    'hash': 64146,
    'name': 'Carrot Half Burnt',
    'embedded': {
      'Carrot_Half_Burnt_63824': {
        'hash': 63824,
        'name': 'Carrot Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_38970': {
        'hash': 38970,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carrot_Half_Cooked': {
    'hash': 63758,
    'name': 'Carrot Half Cooked',
    'embedded': {
      'Carrot_Half_Cooked_63420': {
        'hash': 63420,
        'name': 'Carrot Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_38624': {
        'hash': 38624,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carrot_Half_Ripe': {
    'hash': 63354,
    'name': 'Carrot Half Ripe',
    'embedded': {
      'Carrot_Half_Ripe_63016': {
        'hash': 63016,
        'name': 'Carrot Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_38278': {
        'hash': 38278,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carrot_Half_Unripe': {
    'hash': 62950,
    'name': 'Carrot Half Unripe',
    'embedded': {
      'Carrot_Half_Unripe_62612': {
        'hash': 62612,
        'name': 'Carrot Half Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Cooking_37932': {
        'hash': 37932,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carrot_Leaves': {
    'hash': 10440,
    'name': 'Carrot Leaves',
    'embedded': {
      'Carrot_Leaves_14888': {
        'hash': 14888,
        'name': 'Carrot Leaves',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'PullPickup_32134': {
        'hash': 32134,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Carsi_Ingot': {
    'hash': 60868,
    'name': 'Carsi Ingot',
    'embedded': {
      'Carsi_Ingot_32738': {
        'hash': 32738,
        'name': 'Carsi Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_12680': {
        'hash': 12680,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Carved_Pumpkin_Smelter': {
    'hash': 27322,
    'name': 'Carved Pumpkin Smelter',
    'embedded': {
      'Carved_Pumpkin_Smelter_24226': {
        'hash': 24226,
        'name': 'Carved Pumpkin Smelter',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Fire_30100': {
        'hash': 30100,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Cast_Iron_Lamp': {
    'hash': 24782,
    'name': 'Cast Iron Lamp',
    'embedded': {
      'Cast_Iron_Lamp_48448': {
        'hash': 48448,
        'name': 'Cast Iron Lamp',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Fire_30100': {
        'hash': 30100,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Cauldron_Medium': {
    'hash': 45082,
    'name': 'Cauldron Medium',
    'embedded': {
      'Cauldron_Medium_42440': {
        'hash': 42440,
        'name': 'Cauldron Medium',
        'savables': {
          'CookingPot': {
            'hash': 2882590463,
            'name': 'CookingPot'
          },
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          },
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StewManager': {
            'hash': 1499506132,
            'name': 'StewManager'
          }
        }
      },
      'Handle_Top_20': {
        'hash': 20,
        'name': 'Handle Top',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Heat_47560': {
        'hash': 47560,
        'name': 'Heat',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Liquid_19522': {
        'hash': 19522,
        'name': 'Liquid',
        'savables': {}
      },
      'Top_of_Liquid_not_rotating_59824': {
        'hash': 59824,
        'name': 'Top of Liquid not rotating',
        'savables': {}
      },
      'cookingPot_main_40': {
        'hash': 40,
        'name': 'cookingPot_main',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_medium_handle_L_grp_52': {
        'hash': 52,
        'name': 'cookingPot_medium_handle_L_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_medium_handle_R_grp_44': {
        'hash': 44,
        'name': 'cookingPot_medium_handle_R_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_01_24': {
        'hash': 24,
        'name': 'cookingPot_plate_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_02_28': {
        'hash': 28,
        'name': 'cookingPot_plate_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_03_36': {
        'hash': 36,
        'name': 'cookingPot_plate_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_04_32': {
        'hash': 32,
        'name': 'cookingPot_plate_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_mid_01_48': {
        'hash': 48,
        'name': 'cookingPot_plate_mid_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_mid_02_56': {
        'hash': 56,
        'name': 'cookingPot_plate_mid_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Cave_Explosion_Boulder': {
    'hash': 31136,
    'name': 'Cave Explosion Boulder',
    'embedded': {
      'Cave_Explosion_Boulder_31140': {
        'hash': 31140,
        'name': 'Cave Explosion Boulder',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Cave_Explosion_Boulder_Clusters': {
    'hash': 17608,
    'name': 'Cave Explosion Boulder Clusters',
    'embedded': {
      'Cave_Explosion_Boulder_Clusters_17602': {
        'hash': 17602,
        'name': 'Cave Explosion Boulder Clusters',
        'savables': {}
      }
    }
  },
  'Cave_Grass': {
    'hash': 63846,
    'name': 'Cave Grass',
    'embedded': {
      'Cave_Grass_7194': {
        'hash': 7194,
        'name': 'Cave Grass',
        'savables': {}
      },
      'Fire_7186': {
        'hash': 7186,
        'name': 'Fire',
        'savables': {
          'FireDissolve': {
            'hash': 3457519710,
            'name': 'FireDissolve'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Cave_Layer_Chunk': {
    'hash': 61672,
    'name': 'Cave_Layer_Chunk',
    'embedded': {}
  },
  'Cave_Layer_Generation': {
    'hash': 61664,
    'name': 'Cave_Layer_Generation',
    'embedded': {}
  },
  'Cave_Surface_Teleporter_Ruins': {
    'hash': 43368,
    'name': 'Cave_Surface_Teleporter_Ruins',
    'embedded': {}
  },
  'Cave_Teleporter': {
    'hash': 27074,
    'name': 'Cave_Teleporter',
    'embedded': {}
  },
  'Cave_Teleporter_Station': {
    'hash': 22840,
    'name': 'Cave_Teleporter_Station',
    'embedded': {}
  },
  'Cave_Teleporter_Station_Ruins': {
    'hash': 29310,
    'name': 'Cave_Teleporter_Station_Ruins',
    'embedded': {}
  },
  'Cave_Wall_Support': {
    'hash': 63840,
    'name': 'Cave Wall Support',
    'embedded': {
      'Cave_Wall_Support_5636': {
        'hash': 5636,
        'name': 'Cave Wall Support',
        'savables': {}
      },
      'Torch_Dock_5626': {
        'hash': 5626,
        'name': 'Torch Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Cave_Water_Mound': {
    'hash': 57530,
    'name': 'Cave Water Mound',
    'embedded': {
      'Cave_Water_Mound_57514': {
        'hash': 57514,
        'name': 'Cave Water Mound',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          }
        }
      },
      'Heat_Point_52154': {
        'hash': 52154,
        'name': 'Heat Point',
        'savables': {}
      },
      'Mushroom_Spawn_Area_22970': {
        'hash': 22970,
        'name': 'Mushroom Spawn Area',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Wyrm_Spawn_Area_45512': {
        'hash': 45512,
        'name': 'Wyrm Spawn Area',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      }
    }
  },
  'Ceiling_Lantern': {
    'hash': 682,
    'name': 'Ceiling Lantern',
    'embedded': {
      'Ceiling_Lantern_684': {
        'hash': 684,
        'name': 'Ceiling Lantern',
        'savables': {}
      },
      'ceilingLight_Light_jnt_48980': {
        'hash': 48980,
        'name': 'ceilingLight_Light_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'ceilingLight_arm_jnt_48984': {
        'hash': 48984,
        'name': 'ceilingLight_arm_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'ceilingLight_root_jnt_48976': {
        'hash': 48976,
        'name': 'ceilingLight_root_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Ceiling_Lantern_Lit': {
    'hash': 32476,
    'name': 'Ceiling Lantern Lit',
    'embedded': {
      'Ceiling_Lantern_Lit_684': {
        'hash': 684,
        'name': 'Ceiling Lantern Lit',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Fire_55870': {
        'hash': 55870,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          }
        }
      },
      'ceilingLight_Light_jnt_48980': {
        'hash': 48980,
        'name': 'ceilingLight_Light_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'ceilingLight_arm_jnt_48984': {
        'hash': 48984,
        'name': 'ceilingLight_arm_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'ceilingLight_root_jnt_48976': {
        'hash': 48976,
        'name': 'ceilingLight_root_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Ceiling_Light': {
    'hash': 8226,
    'name': 'Ceiling Light',
    'embedded': {
      'Ceiling_Light_8232': {
        'hash': 8232,
        'name': 'Ceiling Light',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Fire_54948': {
        'hash': 54948,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'ceilingLight_Light_jnt_48980': {
        'hash': 48980,
        'name': 'ceilingLight_Light_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'ceilingLight_arm_jnt_48984': {
        'hash': 48984,
        'name': 'ceilingLight_arm_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'ceilingLight_root_jnt_48976': {
        'hash': 48976,
        'name': 'ceilingLight_root_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Character_Level_Stone': {
    'hash': 60762,
    'name': 'Character Level Stone',
    'embedded': {
      'Character_Level_Stone_57948': {
        'hash': 57948,
        'name': 'Character Level Stone',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Hand_Touch_46540': {
        'hash': 46540,
        'name': 'Hand Touch',
        'savables': {}
      },
      'Landmark_Finder_24472': {
        'hash': 24472,
        'name': 'Landmark Finder',
        'savables': {
          'Landmark': {
            'hash': 2590537994,
            'name': 'Landmark'
          },
          'LandmarkDiscoverZone': {
            'hash': 4095875831,
            'name': 'LandmarkDiscoverZone'
          }
        }
      }
    }
  },
  'Chess_Black_Bishop': {
    'hash': 16998,
    'name': 'Chess Black Bishop',
    'embedded': {
      'Chess_Black_Bishop_42198': {
        'hash': 42198,
        'name': 'Chess Black Bishop',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_Black_Checker': {
    'hash': 16378,
    'name': 'Chess Black Checker',
    'embedded': {
      'Chess_Black_Checker_42196': {
        'hash': 42196,
        'name': 'Chess Black Checker',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_Black_King': {
    'hash': 17200,
    'name': 'Chess Black King',
    'embedded': {
      'Chess_Black_King_42194': {
        'hash': 42194,
        'name': 'Chess Black King',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_Black_Knight': {
    'hash': 17291,
    'name': 'Chess Black Knight',
    'embedded': {
      'Chess_Black_Knight_42200': {
        'hash': 42200,
        'name': 'Chess Black Knight',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_Black_Pawn': {
    'hash': 17282,
    'name': 'Chess Black Pawn',
    'embedded': {
      'Chess_Black_Pawn_42202': {
        'hash': 42202,
        'name': 'Chess Black Pawn',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_Black_Queen': {
    'hash': 16204,
    'name': 'Chess Black Queen',
    'embedded': {
      'Chess_Black_Queen_42192': {
        'hash': 42192,
        'name': 'Chess Black Queen',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_Black_Rook': {
    'hash': 16142,
    'name': 'Chess Black Rook',
    'embedded': {
      'Chess_Black_Rook_42196': {
        'hash': 42196,
        'name': 'Chess Black Rook',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_Board': {
    'hash': 16896,
    'name': 'Chess Board',
    'embedded': {
      'Chess_Board_24184': {
        'hash': 24184,
        'name': 'Chess Board',
        'savables': {
          'GhostSnapSlotCollection': {
            'hash': 1823429789,
            'name': 'GhostSnapSlotCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Chess_White_Bishop': {
    'hash': 17162,
    'name': 'Chess White Bishop',
    'embedded': {
      'Chess_White_Bishop_42198': {
        'hash': 42198,
        'name': 'Chess White Bishop',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_White_Checker': {
    'hash': 16326,
    'name': 'Chess White Checker',
    'embedded': {
      'Chess_White_Checker_42196': {
        'hash': 42196,
        'name': 'Chess White Checker',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_White_King': {
    'hash': 16276,
    'name': 'Chess White King',
    'embedded': {
      'Chess_White_King_42194': {
        'hash': 42194,
        'name': 'Chess White King',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_White_Knight': {
    'hash': 17038,
    'name': 'Chess White Knight',
    'embedded': {
      'Chess_White_Knight_42200': {
        'hash': 42200,
        'name': 'Chess White Knight',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_White_Pawn': {
    'hash': 17240,
    'name': 'Chess White Pawn',
    'embedded': {
      'Chess_White_Pawn_42202': {
        'hash': 42202,
        'name': 'Chess White Pawn',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_White_Queen': {
    'hash': 16246,
    'name': 'Chess White Queen',
    'embedded': {
      'Chess_White_Queen_42192': {
        'hash': 42192,
        'name': 'Chess White Queen',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chess_White_Rook': {
    'hash': 17084,
    'name': 'Chess White Rook',
    'embedded': {
      'Chess_White_Rook_42196': {
        'hash': 42196,
        'name': 'Chess White Rook',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chisel': {
    'hash': 44380,
    'name': 'Chisel',
    'embedded': {
      'Chisel_48634': {
        'hash': 48634,
        'name': 'Chisel',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_64518': {
        'hash': 64518,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_25524': {
        'hash': 25524,
        'name': 'Insert SwordType',
        'savables': {}
      },
      'metal_chisel_blade_full_geo_LOD0_48424': {
        'hash': 48424,
        'name': 'metal_chisel_blade_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'ChiselDeck': {
    'hash': 37398,
    'name': 'ChiselDeck',
    'embedded': {
      'ChiselDeck_50854': {
        'hash': 50854,
        'name': 'ChiselDeck',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'ChisellingDeck': {
            'hash': 3236280681,
            'name': 'ChisellingDeck'
          },
          'Landmark': {
            'hash': 2590537994,
            'name': 'Landmark'
          },
          'LandmarkDiscoverZone': {
            'hash': 4095875831,
            'name': 'LandmarkDiscoverZone'
          }
        }
      },
      'ChiselDeck_SetBlock_grp_63040': {
        'hash': 63040,
        'name': 'ChiselDeck_SetBlock_grp',
        'savables': {}
      },
      'Docker_11728': {
        'hash': 11728,
        'name': 'Docker',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'leftHandle_grip_41084': {
        'hash': 41084,
        'name': 'leftHandle_grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'panelSwivel_slotFrame_29114': {
        'hash': 29114,
        'name': 'panelSwivel_slotFrame',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'rightHandle_grip_41080': {
        'hash': 41080,
        'name': 'rightHandle_grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'rotateHandleGrip_22918': {
        'hash': 22918,
        'name': 'rotateHandleGrip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Chocolate_Easter_Egg': {
    'hash': 30164,
    'name': 'Chocolate Easter Egg',
    'embedded': {
      'Chocolate_Easter_Egg_30160': {
        'hash': 30160,
        'name': 'Chocolate Easter Egg',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Christmas_Gift_Box': {
    'hash': 17920,
    'name': 'Christmas Gift Box',
    'embedded': {
      'Christmas_Gift_Box_17050': {
        'hash': 17050,
        'name': 'Christmas Gift Box',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Content_40226': {
        'hash': 40226,
        'name': 'Spawn Content',
        'savables': {}
      }
    }
  },
  'Christmas_Gift_Box_Spawner': {
    'hash': 63174,
    'name': 'Christmas Gift Box Spawner',
    'embedded': {
      'Christmas_Gift_Box_Spawner_42278': {
        'hash': 42278,
        'name': 'Christmas Gift Box Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Christmas_Gift_Box_Special': {
    'hash': 18144,
    'name': 'Christmas Gift Box Special',
    'embedded': {
      'Christmas_Gift_Box_Special_17050': {
        'hash': 17050,
        'name': 'Christmas Gift Box Special',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Content_40226': {
        'hash': 40226,
        'name': 'Spawn Content',
        'savables': {}
      }
    }
  },
  'Christmas_Gift_Mail_Box_01': {
    'hash': 24764,
    'name': 'Christmas Gift Mail Box 01',
    'embedded': {
      'Christmas_Gift_Mail_Box_01_17050': {
        'hash': 17050,
        'name': 'Christmas Gift Mail Box 01',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'SentGift': {
            'hash': 661497638,
            'name': 'SentGift'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Christmas_Gift_Mail_Box_02': {
    'hash': 16494,
    'name': 'Christmas Gift Mail Box 02',
    'embedded': {
      'Christmas_Gift_Mail_Box_02_17050': {
        'hash': 17050,
        'name': 'Christmas Gift Mail Box 02',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'SentGift': {
            'hash': 661497638,
            'name': 'SentGift'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Christmas_Gift_Mail_Box_03': {
    'hash': 1080,
    'name': 'Christmas Gift Mail Box 03',
    'embedded': {
      'Christmas_Gift_Mail_Box_03_17050': {
        'hash': 17050,
        'name': 'Christmas Gift Mail Box 03',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'SentGift': {
            'hash': 661497638,
            'name': 'SentGift'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Christmas_Tree': {
    'hash': 56318,
    'name': 'Christmas Tree',
    'embedded': {
      'Christmas_Tree_15640': {
        'hash': 15640,
        'name': 'Christmas Tree',
        'savables': {}
      }
    }
  },
  'Chunk_Directional_Surface': {
    'hash': 47534,
    'name': 'Chunk_Directional_Surface',
    'embedded': {}
  },
  'Chunk_Spherical_Surface': {
    'hash': 47614,
    'name': 'Chunk_Spherical_Surface',
    'embedded': {}
  },
  'Chute_Gcore_Dynamic': {
    'hash': 60246,
    'name': 'Chute Gcore Dynamic',
    'embedded': {
      'Chute_Gcore_Dynamic_53304': {
        'hash': 53304,
        'name': 'Chute Gcore Dynamic',
        'savables': {}
      },
      'Complete_63570': {
        'hash': 63570,
        'name': 'Complete',
        'savables': {}
      },
      'Diggable_4216': {
        'hash': 4216,
        'name': 'Diggable',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Enemy_Spawn_12232': {
        'hash': 12232,
        'name': 'Enemy Spawn',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Erupt_Area_2920': {
        'hash': 2920,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Erupt_Area_3280': {
        'hash': 3280,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Erupt_Area_3286': {
        'hash': 3286,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Erupt_Area_3486': {
        'hash': 3486,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Geyser_AI_2664': {
        'hash': 2664,
        'name': 'Geyser AI',
        'savables': {}
      },
      'Geyser_AI_2944': {
        'hash': 2944,
        'name': 'Geyser AI',
        'savables': {}
      },
      'Geyser_AI_2946': {
        'hash': 2946,
        'name': 'Geyser AI',
        'savables': {}
      },
      'Geyser_AI_29794': {
        'hash': 29794,
        'name': 'Geyser AI',
        'savables': {}
      },
      'Geyser_AI_3258': {
        'hash': 3258,
        'name': 'Geyser AI',
        'savables': {}
      },
      'Reset_63566': {
        'hash': 63566,
        'name': 'Reset',
        'savables': {}
      },
      'Targeted_Geyser_(1)_27232': {
        'hash': 27232,
        'name': 'Targeted Geyser (1)',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Targeted_Geyser_(2)_27100': {
        'hash': 27100,
        'name': 'Targeted Geyser (2)',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Targeted_Geyser_(3)_26416': {
        'hash': 26416,
        'name': 'Targeted Geyser (3)',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Targeted_Geyser_(4)_26284': {
        'hash': 26284,
        'name': 'Targeted Geyser (4)',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Targeted_Geyser_(5)_25600': {
        'hash': 25600,
        'name': 'Targeted Geyser (5)',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Top_Enemy_Spawn_12202': {
        'hash': 12202,
        'name': 'Top Enemy Spawn',
        'savables': {
          'DirectionalBoundsSurface': {
            'hash': 1962842866,
            'name': 'DirectionalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'CircleSpawner': {
    'hash': 49642,
    'name': 'CircleSpawner',
    'embedded': {
      'CircleSpawner_52610': {
        'hash': 52610,
        'name': 'CircleSpawner',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'SpawnInCircle': {
            'hash': 1714180166,
            'name': 'SpawnInCircle'
          }
        }
      }
    }
  },
  'CircleSpawner(ExplosiveSpike)': {
    'hash': 31046,
    'name': 'CircleSpawner(ExplosiveSpike)',
    'embedded': {
      'CircleSpawner(ExplosiveSpike)_52620': {
        'hash': 52620,
        'name': 'CircleSpawner(ExplosiveSpike)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'SpawnInCircle': {
            'hash': 1714180166,
            'name': 'SpawnInCircle'
          }
        }
      }
    }
  },
  'CircleSpawner_ExplosiveSpike': {
    'hash': 31046,
    'name': 'CircleSpawner_ExplosiveSpike',
    'embedded': {}
  },
  'Climbing_Unlock_Orb_Pedestal': {
    'hash': 51594,
    'name': 'Climbing Unlock Orb Pedestal',
    'embedded': {
      'Climbing_Unlock_Orb_Pedestal_51198': {
        'hash': 51198,
        'name': 'Climbing Unlock Orb Pedestal',
        'savables': {}
      },
      'Hand_Touch_(1)_46540': {
        'hash': 46540,
        'name': 'Hand Touch (1)',
        'savables': {
          'PlayerUnlockStation': {
            'hash': 2912807649,
            'name': 'PlayerUnlockStation'
          }
        }
      }
    }
  },
  'Coal': {
    'hash': 19658,
    'name': 'Coal',
    'embedded': {
      'Coal_19542': {
        'hash': 19542,
        'name': 'Coal',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Coal_Ash': {
    'hash': 2792,
    'name': 'Coal Ash',
    'embedded': {
      'Coal_Ash_2796': {
        'hash': 2796,
        'name': 'Coal Ash',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Coal_Boulder_01': {
    'hash': 23502,
    'name': 'Coal Boulder 01',
    'embedded': {
      'Coal_Boulder_01_23506': {
        'hash': 23506,
        'name': 'Coal Boulder 01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Coal_Boulder_02': {
    'hash': 57382,
    'name': 'Coal Boulder 02',
    'embedded': {
      'Coal_Boulder_02_57386': {
        'hash': 57386,
        'name': 'Coal Boulder 02',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Coal_Boulder_03': {
    'hash': 23788,
    'name': 'Coal Boulder 03',
    'embedded': {
      'Coal_Boulder_03_23792': {
        'hash': 23792,
        'name': 'Coal Boulder 03',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Coal_Training': {
    'hash': 51610,
    'name': 'Coal Training',
    'embedded': {
      'Coal_Training_51606': {
        'hash': 51606,
        'name': 'Coal Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Coin_Press': {
    'hash': 31306,
    'name': 'Coin Press',
    'embedded': {
      'Coin_Press_65312': {
        'hash': 65312,
        'name': 'Coin Press',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Input_36080': {
        'hash': 36080,
        'name': 'Input',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Lever_Physics_45996': {
        'hash': 45996,
        'name': 'Lever Physics',
        'savables': {
          'Lever': {
            'hash': 1594932294,
            'name': 'Lever'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Output_52720': {
        'hash': 52720,
        'name': 'Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Concoction_Crate': {
    'hash': 23304,
    'name': 'Concoction Crate',
    'embedded': {
      'Concoction_Crate_21538': {
        'hash': 21538,
        'name': 'Concoction Crate',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          }
        }
      },
      'Heat_Area_15578': {
        'hash': 15578,
        'name': 'Heat Area',
        'savables': {}
      }
    }
  },
  'Constant': {
    'hash': 42424,
    'name': 'Constant',
    'embedded': {}
  },
  'Cooking_Stand': {
    'hash': 6742,
    'name': 'Cooking Stand',
    'embedded': {
      'Cooking_Stand_51236': {
        'hash': 51236,
        'name': 'Cooking Stand',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Crank_19094': {
        'hash': 19094,
        'name': 'Crank',
        'savables': {}
      },
      'Handle_16064': {
        'hash': 16064,
        'name': 'Handle',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Hangable_Dock_5626': {
        'hash': 5626,
        'name': 'Hangable Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Long_S_Hook_17940': {
        'hash': 17940,
        'name': 'Long S Hook',
        'savables': {}
      }
    }
  },
  'Copper_Boulder': {
    'hash': 65380,
    'name': 'Copper Boulder',
    'embedded': {
      'Copper_Boulder_5600': {
        'hash': 5600,
        'name': 'Copper Boulder',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Origin_38012': {
        'hash': 38012,
        'name': 'Spawn Origin',
        'savables': {}
      }
    }
  },
  'Copper_Boulder_Parts': {
    'hash': 46024,
    'name': 'Copper_Boulder_Parts',
    'embedded': {
      'Copper_Boulder_Parts_4828': {
        'hash': 4828,
        'name': 'Copper_Boulder_Parts',
        'savables': {}
      },
      'Copper_Boulder_part_01_4846': {
        'hash': 4846,
        'name': 'Copper_Boulder_part_01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Copper_Boulder_part_02_13706': {
        'hash': 13706,
        'name': 'Copper_Boulder_part_02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Copper_Boulder_part_03_13714': {
        'hash': 13714,
        'name': 'Copper_Boulder_part_03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Copper_Boulder_part_04_13722': {
        'hash': 13722,
        'name': 'Copper_Boulder_part_04',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Copper_Boulder_part_05_13718': {
        'hash': 13718,
        'name': 'Copper_Boulder_part_05',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Copper_Ingot': {
    'hash': 32850,
    'name': 'Copper Ingot',
    'embedded': {
      'Copper_Ingot_32738': {
        'hash': 32738,
        'name': 'Copper Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_12806': {
        'hash': 12806,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Copper_Ore': {
    'hash': 2484,
    'name': 'Copper Ore',
    'embedded': {
      'Copper_Ore_24090': {
        'hash': 24090,
        'name': 'Copper Ore',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Craft_Piece_SideFlat_2Way': {
    'hash': 26748,
    'name': 'Craft Piece SideFlat 2Way',
    'embedded': {
      'Craft_Piece_SideFlat_2Way_24176': {
        'hash': 24176,
        'name': 'Craft Piece SideFlat 2Way',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_5256': {
        'hash': 5256,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Edgetype_Craft_57508': {
        'hash': 57508,
        'name': 'Insert Edgetype Craft',
        'savables': {}
      },
      'Slot_EdgeType_39368': {
        'hash': 39368,
        'name': 'Slot EdgeType',
        'savables': {}
      },
      'Slot_EdgeType_51672': {
        'hash': 51672,
        'name': 'Slot EdgeType',
        'savables': {}
      },
      'Slot_EdgeType_51674': {
        'hash': 51674,
        'name': 'Slot EdgeType',
        'savables': {}
      },
      'Slot_EdgeType_57506': {
        'hash': 57506,
        'name': 'Slot EdgeType',
        'savables': {}
      }
    }
  },
  'Craft_Piece_Side_1Way': {
    'hash': 1274,
    'name': 'Craft Piece Side 1Way',
    'embedded': {
      'Craft_Piece_Side_1Way_58156': {
        'hash': 58156,
        'name': 'Craft Piece Side 1Way',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_3876': {
        'hash': 3876,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_AxeType_Craft_39368': {
        'hash': 39368,
        'name': 'Insert AxeType Craft',
        'savables': {}
      },
      'Slot_AxeType_7170': {
        'hash': 7170,
        'name': 'Slot AxeType',
        'savables': {}
      }
    }
  },
  'Craft_Piece_Side_2Way': {
    'hash': 24046,
    'name': 'Craft Piece Side 2Way',
    'embedded': {
      'Craft_Piece_Side_2Way_21146': {
        'hash': 21146,
        'name': 'Craft Piece Side 2Way',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_4164': {
        'hash': 4164,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_AxeType_Craft_39368': {
        'hash': 39368,
        'name': 'Insert AxeType Craft',
        'savables': {}
      },
      'Slot_AxeType_15316': {
        'hash': 15316,
        'name': 'Slot AxeType',
        'savables': {}
      },
      'Slot_AxeType_15318': {
        'hash': 15318,
        'name': 'Slot AxeType',
        'savables': {}
      }
    }
  },
  'Craft_Piece_Side_4Way': {
    'hash': 32160,
    'name': 'Craft Piece Side 4Way',
    'embedded': {
      'Craft_Piece_Side_4Way_30046': {
        'hash': 30046,
        'name': 'Craft Piece Side 4Way',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_4512': {
        'hash': 4512,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_AxeType_Craft_15432': {
        'hash': 15432,
        'name': 'Insert AxeType Craft',
        'savables': {}
      },
      'Slot_AxeType_17932': {
        'hash': 17932,
        'name': 'Slot AxeType',
        'savables': {}
      },
      'Slot_AxeType_18636': {
        'hash': 18636,
        'name': 'Slot AxeType',
        'savables': {}
      },
      'Slot_AxeType_19782': {
        'hash': 19782,
        'name': 'Slot AxeType',
        'savables': {}
      },
      'Slot_AxeType_40654': {
        'hash': 40654,
        'name': 'Slot AxeType',
        'savables': {}
      }
    }
  },
  'Craft_Piece_Side_Flat_1Way': {
    'hash': 38606,
    'name': 'Craft Piece Side Flat 1Way',
    'embedded': {
      'Craft_Piece_Side_Flat_1Way_36346': {
        'hash': 36346,
        'name': 'Craft Piece Side Flat 1Way',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_4868': {
        'hash': 4868,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Edgetype_Craft_15580': {
        'hash': 15580,
        'name': 'Insert Edgetype Craft',
        'savables': {}
      },
      'Slot_EdgeType_38338': {
        'hash': 38338,
        'name': 'Slot EdgeType',
        'savables': {}
      },
      'Slot_EdgeType_39368': {
        'hash': 39368,
        'name': 'Slot EdgeType',
        'savables': {}
      }
    }
  },
  'Crafting_Deck': {
    'hash': 28396,
    'name': 'Crafting Deck',
    'embedded': {
      'Crafting_Deck_64040': {
        'hash': 64040,
        'name': 'Crafting Deck',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'GenericCraftingStation': {
            'hash': 766675725,
            'name': 'GenericCraftingStation'
          }
        }
      },
      'Crafting_Deck_Crank_Handle_01_16064': {
        'hash': 16064,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Crafting_Deck_Crank_Handle_02_19132': {
        'hash': 19132,
        'name': 'Crafting_Deck_Crank_Handle_02',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Crafting_Deck_Top_MOVE_25974': {
        'hash': 25974,
        'name': 'Crafting_Deck_Top_MOVE',
        'savables': {}
      },
      'Crafting_Deck_top_ROTATE_21724': {
        'hash': 21724,
        'name': 'Crafting_Deck_top_ROTATE',
        'savables': {}
      },
      'GameObject_47008': {
        'hash': 47008,
        'name': 'GameObject',
        'savables': {}
      },
      'Page_Slot_29114': {
        'hash': 29114,
        'name': 'Page Slot',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Crane_Center_Piece': {
    'hash': 25456,
    'name': 'Crane Center Piece',
    'embedded': {
      'Crane_Center_Piece_6864': {
        'hash': 6864,
        'name': 'Crane Center Piece',
        'savables': {}
      }
    }
  },
  'Crank': {
    'hash': 15392,
    'name': 'Crank',
    'embedded': {}
  },
  'Crate': {
    'hash': 36180,
    'name': 'Crate',
    'embedded': {
      'Crate_14764': {
        'hash': 14764,
        'name': 'Crate',
        'savables': {
          'GeneratedLoot': {
            'hash': 3642863935,
            'name': 'GeneratedLoot'
          }
        }
      },
      'Dock_1_2780': {
        'hash': 2780,
        'name': 'Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_2_31842': {
        'hash': 31842,
        'name': 'Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_3_31266': {
        'hash': 31266,
        'name': 'Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_4_30878': {
        'hash': 30878,
        'name': 'Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Crate_Stack_Spawner': {
    'hash': 38974,
    'name': 'Crate Stack Spawner',
    'embedded': {
      'Crate_Stack_Spawner_14614': {
        'hash': 14614,
        'name': 'Crate Stack Spawner',
        'savables': {}
      }
    }
  },
  'Crater_Gcore_Dynamic': {
    'hash': 21218,
    'name': 'Crater Gcore Dynamic',
    'embedded': {
      'Crater_Gcore_Dynamic_53304': {
        'hash': 53304,
        'name': 'Crater Gcore Dynamic',
        'savables': {}
      },
      'Enemy_Spawn_30256': {
        'hash': 30256,
        'name': 'Enemy Spawn',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      }
    }
  },
  'Cross_Slash': {
    'hash': 38008,
    'name': 'Cross Slash',
    'embedded': {
      'Cross_Slash_34552': {
        'hash': 34552,
        'name': 'Cross Slash',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Crystal_Blue': {
    'hash': 38178,
    'name': 'Crystal Blue',
    'embedded': {
      'Crystal_Blue_40232': {
        'hash': 40232,
        'name': 'Crystal Blue',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Crystal_Blue_NoLight': {
    'hash': 14778,
    'name': 'Crystal Blue NoLight',
    'embedded': {
      'Crystal_Blue_NoLight_40232': {
        'hash': 40232,
        'name': 'Crystal Blue NoLight',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Crystal_Cluster_Blue': {
    'hash': 18096,
    'name': 'Crystal Cluster Blue',
    'embedded': {
      'Crystal_Cluster_Blue_24556': {
        'hash': 24556,
        'name': 'Crystal Cluster Blue',
        'savables': {}
      }
    }
  },
  'Crystal_Gem_Blue': {
    'hash': 8002,
    'name': 'Crystal Gem Blue',
    'embedded': {
      'Crystal_Gem_Blue_11514': {
        'hash': 11514,
        'name': 'Crystal Gem Blue',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Crystal_Lance_Blue': {
    'hash': 23400,
    'name': 'Crystal Lance Blue',
    'embedded': {
      'Crystal_Lance_Blue_26000': {
        'hash': 26000,
        'name': 'Crystal Lance Blue',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Crystal_Pick_Blue': {
    'hash': 2924,
    'name': 'Crystal Pick Blue',
    'embedded': {
      'Crystal_Pick_Blue_5368': {
        'hash': 5368,
        'name': 'Crystal Pick Blue',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Crystal_Shard_Blue': {
    'hash': 7092,
    'name': 'Crystal Shard Blue',
    'embedded': {
      'Crystal_Shard_Blue_9072': {
        'hash': 9072,
        'name': 'Crystal Shard Blue',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      }
    }
  },
  'Crystal_Structure_Blue': {
    'hash': 51128,
    'name': 'Crystal Structure Blue',
    'embedded': {
      'Crystal_Structure_Blue_54360': {
        'hash': 54360,
        'name': 'Crystal Structure Blue',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Crystal_Structure_Rocks': {
    'hash': 34144,
    'name': 'Crystal Structure Rocks',
    'embedded': {
      'Crystal_Structure_Rocks_54772': {
        'hash': 54772,
        'name': 'Crystal Structure Rocks',
        'savables': {}
      }
    }
  },
  'Crystal_Sword_Blue': {
    'hash': 56894,
    'name': 'Crystal Sword Blue',
    'embedded': {
      'Crystal_Sword_Blue_59644': {
        'hash': 59644,
        'name': 'Crystal Sword Blue',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Crystal_Wyrm': {
    'hash': 37392,
    'name': 'Crystal Wyrm',
    'embedded': {
      'Animation_6144': {
        'hash': 6144,
        'name': 'Animation',
        'savables': {}
      },
      'Body_1052': {
        'hash': 1052,
        'name': 'Body',
        'savables': {}
      },
      'Crystal_Wyrm_37044': {
        'hash': 37044,
        'name': 'Crystal Wyrm',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Crystal_Wyrm_AI_46146': {
        'hash': 46146,
        'name': 'Crystal Wyrm AI',
        'savables': {}
      },
      'Gameplay_42330': {
        'hash': 42330,
        'name': 'Gameplay',
        'savables': {}
      },
      'Ground_58968': {
        'hash': 58968,
        'name': 'Ground',
        'savables': {}
      },
      'SlashDamage_L_57358': {
        'hash': 57358,
        'name': 'SlashDamage L',
        'savables': {}
      },
      'SlashDamage_R_59218': {
        'hash': 59218,
        'name': 'SlashDamage R',
        'savables': {}
      },
      'Spawner_240': {
        'hash': 240,
        'name': 'Spawner',
        'savables': {}
      },
      'scythe_l_jnt_544': {
        'hash': 544,
        'name': 'scythe_l_jnt',
        'savables': {}
      },
      'scythe_r_jnt_542': {
        'hash': 542,
        'name': 'scythe_r_jnt',
        'savables': {}
      }
    }
  },
  'Crystal_Wyrm_(Trial)': {
    'hash': 48128,
    'name': 'Crystal Wyrm (Trial)',
    'embedded': {
      'Animation_6144': {
        'hash': 6144,
        'name': 'Animation',
        'savables': {}
      },
      'Body_1052': {
        'hash': 1052,
        'name': 'Body',
        'savables': {}
      },
      'Crystal_Wyrm_(Trial)_37044': {
        'hash': 37044,
        'name': 'Crystal Wyrm (Trial)',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Crystal_Wyrm_AI_46146': {
        'hash': 46146,
        'name': 'Crystal Wyrm AI',
        'savables': {}
      },
      'Gameplay_42330': {
        'hash': 42330,
        'name': 'Gameplay',
        'savables': {}
      },
      'Ground_58968': {
        'hash': 58968,
        'name': 'Ground',
        'savables': {}
      },
      'SlashDamage_L_57358': {
        'hash': 57358,
        'name': 'SlashDamage L',
        'savables': {}
      },
      'SlashDamage_R_59218': {
        'hash': 59218,
        'name': 'SlashDamage R',
        'savables': {}
      },
      'Spawner_240': {
        'hash': 240,
        'name': 'Spawner',
        'savables': {}
      },
      'scythe_l_jnt_544': {
        'hash': 544,
        'name': 'scythe_l_jnt',
        'savables': {}
      },
      'scythe_r_jnt_542': {
        'hash': 542,
        'name': 'scythe_r_jnt',
        'savables': {}
      }
    }
  },
  'Curled_Wooden_Handle': {
    'hash': 64172,
    'name': 'Curled Wooden Handle',
    'embedded': {
      'Curled_Wooden_Handle_63962': {
        'hash': 63962,
        'name': 'Curled Wooden Handle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Dock_32818': {
        'hash': 32818,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Slot_Multi_(1)_2108': {
        'hash': 2108,
        'name': 'Slot Multi (1)',
        'savables': {}
      },
      'Slot_Multi_34270': {
        'hash': 34270,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_34272': {
        'hash': 34272,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Customization_Controller': {
    'hash': 5526,
    'name': 'Customization_Controller',
    'embedded': {}
  },
  'Dagger_Blade_Curved': {
    'hash': 9704,
    'name': 'Dagger Blade Curved',
    'embedded': {
      'Dagger_Blade_Curved_35392': {
        'hash': 35392,
        'name': 'Dagger Blade Curved',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_64976': {
        'hash': 64976,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Straight_Short_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight Short SwordType',
        'savables': {}
      },
      'metal_blade_dagger_curved_LOD0_13424': {
        'hash': 13424,
        'name': 'metal_blade_dagger_curved_LOD0',
        'savables': {}
      }
    }
  },
  'Dagger_Blade_Edgy': {
    'hash': 49402,
    'name': 'Dagger Blade Edgy',
    'embedded': {
      'Dagger_Blade_Edgy_35392': {
        'hash': 35392,
        'name': 'Dagger Blade Edgy',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_65480': {
        'hash': 65480,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Straight_Short_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight Short SwordType',
        'savables': {}
      },
      'metal_blade_dagger_edgy_geo_LOD0_6500': {
        'hash': 6500,
        'name': 'metal_blade_dagger_edgy_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Dagger_Blade_Round': {
    'hash': 56720,
    'name': 'Dagger Blade Round',
    'embedded': {
      'Dagger_Blade_Round_35392': {
        'hash': 35392,
        'name': 'Dagger Blade Round',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_442': {
        'hash': 442,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Straight_Short_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight Short SwordType',
        'savables': {}
      },
      'metal_blade_dagger_round_full_geo_LOD0_22702': {
        'hash': 22702,
        'name': 'metal_blade_dagger_round_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Dagger_Blade_Wide': {
    'hash': 54482,
    'name': 'Dagger Blade Wide',
    'embedded': {
      'Dagger_Blade_Wide_54484': {
        'hash': 54484,
        'name': 'Dagger Blade Wide',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_926': {
        'hash': 926,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Straight_Short_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight Short SwordType',
        'savables': {}
      },
      'metal_blade_dagger_wide_full_geo_LOD0_53410': {
        'hash': 53410,
        'name': 'metal_blade_dagger_wide_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Dais_Antler_Red_Variant': {
    'hash': 18358,
    'name': 'Dais Antler Red Variant',
    'embedded': {
      'Dais_AI_22350': {
        'hash': 22350,
        'name': 'Dais AI',
        'savables': {}
      },
      'Dais_Antler_Red_Variant_38050': {
        'hash': 38050,
        'name': 'Dais Antler Red Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Dais_Body_12508': {
        'hash': 12508,
        'name': 'Dais Body',
        'savables': {}
      },
      'Rare_Spawner_53168': {
        'hash': 53168,
        'name': 'Rare Spawner',
        'savables': {}
      }
    }
  },
  'Dais_Antler_Variant': {
    'hash': 30180,
    'name': 'Dais Antler Variant',
    'embedded': {
      'Dais_AI_22350': {
        'hash': 22350,
        'name': 'Dais AI',
        'savables': {}
      },
      'Dais_Antler_Variant_38050': {
        'hash': 38050,
        'name': 'Dais Antler Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Dais_Body_12508': {
        'hash': 12508,
        'name': 'Dais Body',
        'savables': {}
      },
      'Rare_Spawner_53168': {
        'hash': 53168,
        'name': 'Rare Spawner',
        'savables': {}
      }
    }
  },
  'Dais_Child_Red_Variant': {
    'hash': 13444,
    'name': 'Dais Child Red Variant',
    'embedded': {
      'Dais_AI_22350': {
        'hash': 22350,
        'name': 'Dais AI',
        'savables': {}
      },
      'Dais_Body_12508': {
        'hash': 12508,
        'name': 'Dais Body',
        'savables': {}
      },
      'Dais_Child_Red_Variant_38050': {
        'hash': 38050,
        'name': 'Dais Child Red Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Rare_Spawner_53168': {
        'hash': 53168,
        'name': 'Rare Spawner',
        'savables': {}
      }
    }
  },
  'Dais_Child_Variant': {
    'hash': 31838,
    'name': 'Dais Child Variant',
    'embedded': {
      'Dais_AI_22350': {
        'hash': 22350,
        'name': 'Dais AI',
        'savables': {}
      },
      'Dais_Body_12508': {
        'hash': 12508,
        'name': 'Dais Body',
        'savables': {}
      },
      'Dais_Child_Variant_38050': {
        'hash': 38050,
        'name': 'Dais Child Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Rare_Spawner_53168': {
        'hash': 53168,
        'name': 'Rare Spawner',
        'savables': {}
      }
    }
  },
  'Dais_Meat_Full_Burnt': {
    'hash': 41870,
    'name': 'Dais Meat Full Burnt',
    'embedded': {
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Dais_Meat_Full_Burnt_47410': {
        'hash': 47410,
        'name': 'Dais Meat Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Dais_Meat_Full_Cooked': {
    'hash': 43452,
    'name': 'Dais Meat Full Cooked',
    'embedded': {
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Dais_Meat_Full_Cooked_47410': {
        'hash': 47410,
        'name': 'Dais Meat Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Dais_Meat_Full_Ripe': {
    'hash': 47394,
    'name': 'Dais Meat Full Ripe',
    'embedded': {
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Dais_Meat_Full_Ripe_42392': {
        'hash': 42392,
        'name': 'Dais Meat Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Dais_Meat_Half_Burnt': {
    'hash': 43674,
    'name': 'Dais Meat Half Burnt',
    'embedded': {
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Dais_Meat_Half_Burnt_47410': {
        'hash': 47410,
        'name': 'Dais Meat Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Dais_Meat_Half_Cooked': {
    'hash': 43502,
    'name': 'Dais Meat Half Cooked',
    'embedded': {
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Dais_Meat_Half_Cooked_47410': {
        'hash': 47410,
        'name': 'Dais Meat Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Dais_Meat_Half_Ripe': {
    'hash': 43294,
    'name': 'Dais Meat Half Ripe',
    'embedded': {
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Dais_Meat_Half_Ripe_47410': {
        'hash': 47410,
        'name': 'Dais Meat Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Dais_Red_Variant': {
    'hash': 8530,
    'name': 'Dais Red Variant',
    'embedded': {
      'Dais_AI_22350': {
        'hash': 22350,
        'name': 'Dais AI',
        'savables': {}
      },
      'Dais_Body_12508': {
        'hash': 12508,
        'name': 'Dais Body',
        'savables': {}
      },
      'Dais_Red_Variant_38050': {
        'hash': 38050,
        'name': 'Dais Red Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Rare_Spawner_53168': {
        'hash': 53168,
        'name': 'Rare Spawner',
        'savables': {}
      }
    }
  },
  'Dais_Variant': {
    'hash': 42430,
    'name': 'Dais Variant',
    'embedded': {
      'Dais_AI_22350': {
        'hash': 22350,
        'name': 'Dais AI',
        'savables': {}
      },
      'Dais_Body_12508': {
        'hash': 12508,
        'name': 'Dais Body',
        'savables': {}
      },
      'Dais_Variant_38050': {
        'hash': 38050,
        'name': 'Dais Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Rare_Spawner_53168': {
        'hash': 53168,
        'name': 'Rare Spawner',
        'savables': {}
      }
    }
  },
  'Darksteel_Ingot': {
    'hash': 57556,
    'name': 'Darksteel_Ingot',
    'embedded': {}
  },
  'Death_Fern': {
    'hash': 37642,
    'name': 'Death Fern',
    'embedded': {
      'Death_Fern_37626': {
        'hash': 37626,
        'name': 'Death Fern',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Death_Fern_AI_29794': {
        'hash': 29794,
        'name': 'Death Fern AI',
        'savables': {}
      },
      'Emit_Gas_Spawner_16984': {
        'hash': 16984,
        'name': 'Emit Gas Spawner',
        'savables': {}
      }
    }
  },
  'Death_Fern_Poison_Cloud': {
    'hash': 39240,
    'name': 'Death Fern Poison Cloud',
    'embedded': {
      'Death_Fern_Poison_Cloud_50236': {
        'hash': 50236,
        'name': 'Death Fern Poison Cloud',
        'savables': {}
      }
    }
  },
  'Death_Fern_Seed_Planted': {
    'hash': 40824,
    'name': 'Death Fern Seed Planted',
    'embedded': {
      'Death_Fern_Seed_Planted_40780': {
        'hash': 40780,
        'name': 'Death Fern Seed Planted',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'DebugArrow': {
    'hash': 34892,
    'name': 'DebugArrow',
    'embedded': {
      'Arrow_Tip_59378': {
        'hash': 59378,
        'name': 'Arrow Tip',
        'savables': {}
      },
      'DebugArrow_43746': {
        'hash': 43746,
        'name': 'DebugArrow',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'DebugNet': {
    'hash': 12632,
    'name': 'DebugNet',
    'embedded': {}
  },
  'DebugPlayerStone': {
    'hash': 62120,
    'name': 'DebugPlayerStone',
    'embedded': {
      'DebugPlayerStone_30920': {
        'hash': 30920,
        'name': 'DebugPlayerStone',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_Primitive_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Primitive SwordType',
        'savables': {}
      }
    }
  },
  'DebugTool': {
    'hash': 16078,
    'name': 'DebugTool',
    'embedded': {}
  },
  'Decrafting_Deck': {
    'hash': 62244,
    'name': 'Decrafting Deck',
    'embedded': {
      'Decrafting_Deck_13304': {
        'hash': 13304,
        'name': 'Decrafting Deck',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Lever_Physics_45996': {
        'hash': 45996,
        'name': 'Lever Physics',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'TwoStepLever': {
            'hash': 2213531414,
            'name': 'TwoStepLever'
          }
        }
      },
      'Pickup_Holder_65018': {
        'hash': 65018,
        'name': 'Pickup Holder',
        'savables': {}
      }
    }
  },
  'Default_Burnt_Stew': {
    'hash': 20108,
    'name': 'Default_Burnt_Stew',
    'embedded': {}
  },
  'Default_Cooked_Stew': {
    'hash': 19398,
    'name': 'Default_Cooked_Stew',
    'embedded': {}
  },
  'Default_Raw_Stew': {
    'hash': 43078,
    'name': 'Default_Raw_Stew',
    'embedded': {}
  },
  'Descent_Shaft_Gcore_Elevator_Dynamic': {
    'hash': 52804,
    'name': 'Descent Shaft Gcore Elevator Dynamic',
    'embedded': {
      'Crafting_Deck_Crank_Handle_01_16064': {
        'hash': 16064,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Crafting_Deck_Crank_Handle_01_46520': {
        'hash': 46520,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Crafting_Deck_Crank_Handle_01_60092': {
        'hash': 60092,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Descent_Shaft_Gcore_Elevator_Dynamic_26570': {
        'hash': 26570,
        'name': 'Descent Shaft Gcore Elevator Dynamic',
        'savables': {}
      },
      'Elevator_61068': {
        'hash': 61068,
        'name': 'Elevator',
        'savables': {
          'NetworkedFloatStream': {
            'hash': 2127962967,
            'name': 'NetworkedFloatStream'
          }
        }
      }
    }
  },
  'Descent_Shaft_Gcore_Floor_Diggable_Dynamic': {
    'hash': 18120,
    'name': 'Descent Shaft Gcore Floor Diggable Dynamic',
    'embedded': {
      'Descent_Shaft_Gcore_Floor_Diggable_Dynamic_26570': {
        'hash': 26570,
        'name': 'Descent Shaft Gcore Floor Diggable Dynamic',
        'savables': {}
      },
      'Diggable_Spawner_2456': {
        'hash': 2456,
        'name': 'Diggable Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      }
    }
  },
  'Descent_Shaft_Gcore_Floor_Mining_Boulder_Dynamic': {
    'hash': 6308,
    'name': 'Descent Shaft Gcore Floor Mining Boulder Dynamic',
    'embedded': {
      'Descent_Shaft_Gcore_Floor_Mining_Boulder_Dynamic_26570': {
        'hash': 26570,
        'name': 'Descent Shaft Gcore Floor Mining Boulder Dynamic',
        'savables': {}
      },
      'Spawner_2456': {
        'hash': 2456,
        'name': 'Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      }
    }
  },
  'Descent_Shaft_Gcore_Wall_Wyrm_Dynamic': {
    'hash': 33338,
    'name': 'Descent Shaft Gcore Wall Wyrm Dynamic',
    'embedded': {
      'Descent_Shaft_Gcore_Wall_Wyrm_Dynamic_26570': {
        'hash': 26570,
        'name': 'Descent Shaft Gcore Wall Wyrm Dynamic',
        'savables': {}
      },
      'Spawner_36350': {
        'hash': 36350,
        'name': 'Spawner',
        'savables': {
          'CylindricalBoundsSurface': {
            'hash': 34507654,
            'name': 'CylindricalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Digging_Box_Hebios': {
    'hash': 42226,
    'name': 'Digging Box Hebios',
    'embedded': {
      'Destroy_Effect_Spawner_61034': {
        'hash': 61034,
        'name': 'Destroy Effect Spawner',
        'savables': {}
      },
      'Digging_Box_Hebios_43820': {
        'hash': 43820,
        'name': 'Digging Box Hebios',
        'savables': {
          'HealthBasedDigable': {
            'hash': 2126500253,
            'name': 'HealthBasedDigable'
          }
        }
      },
      'Spawn_Point_42650': {
        'hash': 42650,
        'name': 'Spawn Point',
        'savables': {}
      }
    }
  },
  'Digging_Dirt_Mound': {
    'hash': 43924,
    'name': 'Digging Dirt Mound',
    'embedded': {
      'Destroy_Effect_Spawner_61034': {
        'hash': 61034,
        'name': 'Destroy Effect Spawner',
        'savables': {}
      },
      'Destroy_Gravestone_Spawner_40844': {
        'hash': 40844,
        'name': 'Destroy Gravestone Spawner',
        'savables': {}
      },
      'Digging_Dirt_Mound_43820': {
        'hash': 43820,
        'name': 'Digging Dirt Mound',
        'savables': {
          'HealthBasedDigable': {
            'hash': 2126500253,
            'name': 'HealthBasedDigable'
          }
        }
      },
      'Spawn_Point_42650': {
        'hash': 42650,
        'name': 'Spawn Point',
        'savables': {}
      },
      'Stone_Spawner_6570': {
        'hash': 6570,
        'name': 'Stone Spawner',
        'savables': {}
      }
    }
  },
  'Digging_Dirt_Mound_Hebios': {
    'hash': 33570,
    'name': 'Digging Dirt Mound Hebios',
    'embedded': {
      'Destroy_Effect_Spawner_61034': {
        'hash': 61034,
        'name': 'Destroy Effect Spawner',
        'savables': {}
      },
      'Destroy_Gravestone_Spawner_40844': {
        'hash': 40844,
        'name': 'Destroy Gravestone Spawner',
        'savables': {}
      },
      'Digging_Dirt_Mound_Hebios_43820': {
        'hash': 43820,
        'name': 'Digging Dirt Mound Hebios',
        'savables': {
          'HealthBasedDigable': {
            'hash': 2126500253,
            'name': 'HealthBasedDigable'
          }
        }
      },
      'Spawn_Point_42650': {
        'hash': 42650,
        'name': 'Spawn Point',
        'savables': {}
      },
      'Stone_Spawner_6570': {
        'hash': 6570,
        'name': 'Stone Spawner',
        'savables': {}
      }
    }
  },
  'Digging_Dirt_Parts': {
    'hash': 2538,
    'name': 'Digging Dirt Parts',
    'embedded': {
      'Digging_Dirt_Parts_2554': {
        'hash': 2554,
        'name': 'Digging Dirt Parts',
        'savables': {}
      },
      'digging_chunk_01_LOD0_2158': {
        'hash': 2158,
        'name': 'digging_chunk_01_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_02_LOD0_2166': {
        'hash': 2166,
        'name': 'digging_chunk_02_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_03_LOD0_2182': {
        'hash': 2182,
        'name': 'digging_chunk_03_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_04_LOD0_2164': {
        'hash': 2164,
        'name': 'digging_chunk_04_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_05_LOD0_2180': {
        'hash': 2180,
        'name': 'digging_chunk_05_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_06_LOD0_2178': {
        'hash': 2178,
        'name': 'digging_chunk_06_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_07_LOD0_2170': {
        'hash': 2170,
        'name': 'digging_chunk_07_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_08_LOD0_2168': {
        'hash': 2168,
        'name': 'digging_chunk_08_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_09_LOD0_2176': {
        'hash': 2176,
        'name': 'digging_chunk_09_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_10_LOD0_2174': {
        'hash': 2174,
        'name': 'digging_chunk_10_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_11_LOD0_2162': {
        'hash': 2162,
        'name': 'digging_chunk_11_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_12_LOD0_2160': {
        'hash': 2160,
        'name': 'digging_chunk_12_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'digging_chunk_13_LOD0_2172': {
        'hash': 2172,
        'name': 'digging_chunk_13_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Digging_Geode': {
    'hash': 55696,
    'name': 'Digging Geode',
    'embedded': {
      'Destroy_Effect_Spawner_61034': {
        'hash': 61034,
        'name': 'Destroy Effect Spawner',
        'savables': {}
      },
      'Digging_Geode_43820': {
        'hash': 43820,
        'name': 'Digging Geode',
        'savables': {
          'HealthBasedDigable': {
            'hash': 2126500253,
            'name': 'HealthBasedDigable'
          }
        }
      },
      'Spawn_Point_42650': {
        'hash': 42650,
        'name': 'Spawn Point',
        'savables': {}
      }
    }
  },
  'Digging_Material_Box': {
    'hash': 35612,
    'name': 'Digging Material Box',
    'embedded': {
      'Destroy_Effect_Spawner_61034': {
        'hash': 61034,
        'name': 'Destroy Effect Spawner',
        'savables': {}
      },
      'Digging_Material_Box_43820': {
        'hash': 43820,
        'name': 'Digging Material Box',
        'savables': {
          'HealthBasedDigable': {
            'hash': 2126500253,
            'name': 'HealthBasedDigable'
          }
        }
      },
      'Spawn_Point_42650': {
        'hash': 42650,
        'name': 'Spawn Point',
        'savables': {}
      }
    }
  },
  'Directional_Encounter': {
    'hash': 23796,
    'name': 'Directional_Encounter',
    'embedded': {}
  },
  'Discovery_Landmark': {
    'hash': 37940,
    'name': 'Discovery_Landmark',
    'embedded': {}
  },
  'Disk_Encounter': {
    'hash': 65062,
    'name': 'Disk_Encounter',
    'embedded': {}
  },
  'Dragonfly': {
    'hash': 54404,
    'name': 'Dragonfly',
    'embedded': {
      'Dragonfly_38050': {
        'hash': 38050,
        'name': 'Dragonfly',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Dragonfly_AI_22350': {
        'hash': 22350,
        'name': 'Dragonfly AI',
        'savables': {}
      },
      'Dragonfly_Body_7558': {
        'hash': 7558,
        'name': 'Dragonfly Body',
        'savables': {}
      }
    }
  },
  'Dragonfly_Corpse': {
    'hash': 43552,
    'name': 'Dragonfly Corpse',
    'embedded': {
      'Dragonfly_Corpse_43536': {
        'hash': 43536,
        'name': 'Dragonfly Corpse',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Drawbridge_Puzzle_Range': {
    'hash': 40692,
    'name': 'Drawbridge Puzzle Range',
    'embedded': {
      'Drawbridge_44588': {
        'hash': 44588,
        'name': 'Drawbridge',
        'savables': {
          'DrawBridgeRangeLogic': {
            'hash': 2801168996,
            'name': 'DrawBridgeRangeLogic'
          }
        }
      },
      'Drawbridge_Puzzle_Range_48230': {
        'hash': 48230,
        'name': 'Drawbridge Puzzle Range',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          }
        }
      }
    }
  },
  'Drawbridge_Puzzle_Range_long': {
    'hash': 58514,
    'name': 'Drawbridge Puzzle Range long',
    'embedded': {
      'Drawbridge_Puzzle_Range_long_62878': {
        'hash': 62878,
        'name': 'Drawbridge Puzzle Range long',
        'savables': {
          'DrawBridgeRangeLogic': {
            'hash': 2801168996,
            'name': 'DrawBridgeRangeLogic'
          },
          'LinearPartCloner': {
            'hash': 566175523,
            'name': 'LinearPartCloner'
          },
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          }
        }
      }
    }
  },
  'Drawbridge_Puzzle_Toggle': {
    'hash': 24580,
    'name': 'Drawbridge Puzzle Toggle',
    'embedded': {
      'Drawbridge_Puzzle_Toggle_41872': {
        'hash': 41872,
        'name': 'Drawbridge Puzzle Toggle',
        'savables': {
          'DrawBridgeLogic': {
            'hash': 2978042925,
            'name': 'DrawBridgeLogic'
          },
          'DrawBridgeRangeLogic': {
            'hash': 2801168996,
            'name': 'DrawBridgeRangeLogic'
          },
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      }
    }
  },
  'Dried_Grass_Bush': {
    'hash': 24480,
    'name': 'Dried Grass Bush',
    'embedded': {
      'Dried_Grass_Bush_24440': {
        'hash': 24440,
        'name': 'Dried Grass Bush',
        'savables': {}
      }
    }
  },
  'Dummy_Shelf_Short': {
    'hash': 62404,
    'name': 'Dummy Shelf Short',
    'embedded': {
      'Dock_58090': {
        'hash': 58090,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dummy_Shelf_Short_60158': {
        'hash': 60158,
        'name': 'Dummy Shelf Short',
        'savables': {}
      }
    }
  },
  'Duplicate_Paper_Variant': {
    'hash': 11048,
    'name': 'Duplicate_Paper_Variant',
    'embedded': {}
  },
  'Dynamite': {
    'hash': 31326,
    'name': 'Dynamite',
    'embedded': {
      'Dynamite_40522': {
        'hash': 40522,
        'name': 'Dynamite',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Fuse_15214': {
        'hash': 15214,
        'name': 'Fuse',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'Fuse': {
            'hash': 3665939353,
            'name': 'Fuse'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Easter_Egg_01': {
    'hash': 55462,
    'name': 'Easter Egg 01',
    'embedded': {
      'Easter_Egg_01_21224': {
        'hash': 21224,
        'name': 'Easter Egg 01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Easter_Egg_02': {
    'hash': 57998,
    'name': 'Easter Egg 02',
    'embedded': {
      'Easter_Egg_02_28794': {
        'hash': 28794,
        'name': 'Easter Egg 02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Easter_Egg_03': {
    'hash': 20128,
    'name': 'Easter Egg 03',
    'embedded': {
      'Easter_Egg_03_28794': {
        'hash': 28794,
        'name': 'Easter Egg 03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Easter_Egg_04': {
    'hash': 21558,
    'name': 'Easter Egg 04',
    'embedded': {
      'Easter_Egg_04_28794': {
        'hash': 28794,
        'name': 'Easter Egg 04',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Edge_Blade_Long_Curve': {
    'hash': 17478,
    'name': 'Edge Blade Long Curve',
    'embedded': {
      'Edge_Blade_Long_Curve_15172': {
        'hash': 15172,
        'name': 'Edge Blade Long Curve',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_5674': {
        'hash': 5674,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Edgetype_7796': {
        'hash': 7796,
        'name': 'Insert Edgetype',
        'savables': {}
      },
      'edge_blade_longCurve_LOD0_22044': {
        'hash': 22044,
        'name': 'edge_blade_longCurve_LOD0',
        'savables': {}
      }
    }
  },
  'Edge_Curved_Blade': {
    'hash': 11938,
    'name': 'Edge Curved Blade',
    'embedded': {
      'Edge_Curved_Blade_9684': {
        'hash': 9684,
        'name': 'Edge Curved Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_6064': {
        'hash': 6064,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Edgetype_7796': {
        'hash': 7796,
        'name': 'Insert Edgetype',
        'savables': {}
      },
      'edge_blade_curved_LOD0_8062': {
        'hash': 8062,
        'name': 'edge_blade_curved_LOD0',
        'savables': {}
      }
    }
  },
  'Edge_Short_Curve_Blade': {
    'hash': 20892,
    'name': 'Edge Short Curve Blade',
    'embedded': {
      'Edge_Short_Curve_Blade_18048': {
        'hash': 18048,
        'name': 'Edge Short Curve Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_6416': {
        'hash': 6416,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Edgetype_7796': {
        'hash': 7796,
        'name': 'Insert Edgetype',
        'savables': {}
      },
      'edge_blade_shortCurve_LOD0_64382': {
        'hash': 64382,
        'name': 'edge_blade_shortCurve_LOD0',
        'savables': {}
      }
    }
  },
  'Edge_Straight_Blade': {
    'hash': 30124,
    'name': 'Edge Straight Blade',
    'embedded': {
      'Edge_Straight_Blade_27748': {
        'hash': 27748,
        'name': 'Edge Straight Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_6764': {
        'hash': 6764,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Edgetype_7796': {
        'hash': 7796,
        'name': 'Insert Edgetype',
        'savables': {}
      },
      'edge_blade_straight_LOD0_35880': {
        'hash': 35880,
        'name': 'edge_blade_straight_LOD0',
        'savables': {}
      }
    }
  },
  'Eggplant_Flower_Bloom': {
    'hash': 27848,
    'name': 'Eggplant Flower Bloom',
    'embedded': {
      'Eggplant_Flower_Bloom_42092': {
        'hash': 42092,
        'name': 'Eggplant Flower Bloom',
        'savables': {}
      }
    }
  },
  'Eggplant_Flower_Bud': {
    'hash': 27850,
    'name': 'Eggplant Flower Bud',
    'embedded': {
      'Eggplant_Flower_Bud_42164': {
        'hash': 42164,
        'name': 'Eggplant Flower Bud',
        'savables': {}
      }
    }
  },
  'Eggplant_Full_Burnt': {
    'hash': 55030,
    'name': 'Eggplant Full Burnt',
    'embedded': {
      'Cooking_29582': {
        'hash': 29582,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Full_Burnt_54596': {
        'hash': 54596,
        'name': 'Eggplant Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Eggplant_Full_Cooked': {
    'hash': 54506,
    'name': 'Eggplant Full Cooked',
    'embedded': {
      'Cooking_29092': {
        'hash': 29092,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Full_Cooked_54072': {
        'hash': 54072,
        'name': 'Eggplant Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Eggplant_Full_Ripe': {
    'hash': 53982,
    'name': 'Eggplant Full Ripe',
    'embedded': {
      'Cooking_28602': {
        'hash': 28602,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Full_Ripe_53548': {
        'hash': 53548,
        'name': 'Eggplant Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Eggplant_Full_Unripe': {
    'hash': 53458,
    'name': 'Eggplant Full Unripe',
    'embedded': {
      'Cooking_28112': {
        'hash': 28112,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Full_Unripe_53024': {
        'hash': 53024,
        'name': 'Eggplant Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Eggplant_Growth': {
    'hash': 19304,
    'name': 'Eggplant Growth',
    'embedded': {
      'Eggplant_Growth_33458': {
        'hash': 33458,
        'name': 'Eggplant Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Eggplant_Half_Burnt': {
    'hash': 62546,
    'name': 'Eggplant Half Burnt',
    'embedded': {
      'Cooking_37586': {
        'hash': 37586,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Half_Burnt_62208': {
        'hash': 62208,
        'name': 'Eggplant Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Eggplant_Half_Cooked': {
    'hash': 62142,
    'name': 'Eggplant Half Cooked',
    'embedded': {
      'Cooking_37240': {
        'hash': 37240,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Half_Cooked_61804': {
        'hash': 61804,
        'name': 'Eggplant Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Eggplant_Half_Ripe': {
    'hash': 61738,
    'name': 'Eggplant Half Ripe',
    'embedded': {
      'Cooking_36894': {
        'hash': 36894,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Half_Ripe_61400': {
        'hash': 61400,
        'name': 'Eggplant Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Eggplant_Half_Unripe': {
    'hash': 61334,
    'name': 'Eggplant Half Unripe',
    'embedded': {
      'Cooking_36548': {
        'hash': 36548,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Eggplant_Half_Unripe_60996': {
        'hash': 60996,
        'name': 'Eggplant Half Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Eggplant_Potato_Recipe_Burnt_Stew': {
    'hash': 57688,
    'name': 'Eggplant_Potato_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Eggplant_Potato_Recipe_Cooked_Stew': {
    'hash': 57712,
    'name': 'Eggplant_Potato_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Eggplant_Potato_Recipe_Raw_Stew': {
    'hash': 57736,
    'name': 'Eggplant_Potato_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Eggplant_Tree': {
    'hash': 27004,
    'name': 'Eggplant Tree',
    'embedded': {
      'Eggplant_Tree_24994': {
        'hash': 24994,
        'name': 'Eggplant Tree',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Eggplant_Tree_Growth': {
    'hash': 15090,
    'name': 'Eggplant Tree Growth',
    'embedded': {
      'Eggplant_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Eggplant Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Eggplant_Tree_Separated': {
    'hash': 17770,
    'name': 'Eggplant_Tree_Separated',
    'embedded': {}
  },
  'Eggplant_Tree_Stage_1': {
    'hash': 14282,
    'name': 'Eggplant Tree Stage 1',
    'embedded': {
      'Eggplant_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Eggplant Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Eggplant_Tree_Stage_2': {
    'hash': 14440,
    'name': 'Eggplant Tree Stage 2',
    'embedded': {
      'Eggplant_Tree_Stage_2_26756': {
        'hash': 26756,
        'name': 'Eggplant Tree Stage 2',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Eggplant_Tree_Stage_3': {
    'hash': 16154,
    'name': 'Eggplant Tree Stage 3',
    'embedded': {
      'Eggplant_Tree_Stage_3_22270': {
        'hash': 22270,
        'name': 'Eggplant Tree Stage 3',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Elevator': {
    'hash': 44898,
    'name': 'Elevator',
    'embedded': {
      'Crafting_Deck_Crank_Handle_01_16064': {
        'hash': 16064,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Crafting_Deck_Crank_Handle_01_46520': {
        'hash': 46520,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Elevator_26570': {
        'hash': 26570,
        'name': 'Elevator',
        'savables': {
          'WayPointPath': {
            'hash': 1063725326,
            'name': 'WayPointPath'
          }
        }
      }
    }
  },
  'Elevator_Puzzle_Crank': {
    'hash': 64134,
    'name': 'Elevator Puzzle Crank',
    'embedded': {
      'Crafting_Deck_Crank_Handle_01_16064': {
        'hash': 16064,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Crafting_Deck_Crank_Handle_01_46520': {
        'hash': 46520,
        'name': 'Crafting_Deck_Crank_Handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Elevator_26570': {
        'hash': 26570,
        'name': 'Elevator',
        'savables': {
          'WayPointPath': {
            'hash': 1063725326,
            'name': 'WayPointPath'
          }
        }
      },
      'Elevator_Puzzle_Crank_52968': {
        'hash': 52968,
        'name': 'Elevator Puzzle Crank',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          }
        }
      }
    }
  },
  'Elevator_Puzzle_Rope': {
    'hash': 20484,
    'name': 'Elevator Puzzle Rope',
    'embedded': {
      'Elevator_26570': {
        'hash': 26570,
        'name': 'Elevator',
        'savables': {
          'WayPointPath': {
            'hash': 1063725326,
            'name': 'WayPointPath'
          }
        }
      },
      'Elevator_Puzzle_Rope_27070': {
        'hash': 27070,
        'name': 'Elevator Puzzle Rope',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          }
        }
      }
    }
  },
  'Empty': {
    'hash': 40954,
    'name': 'Empty',
    'embedded': {}
  },
  'Etheral_Arrow': {
    'hash': 52366,
    'name': 'Etheral Arrow',
    'embedded': {
      'Etheral_Arrow_43746': {
        'hash': 43746,
        'name': 'Etheral Arrow',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Spike_grp_58940': {
        'hash': 58940,
        'name': 'Spike_grp',
        'savables': {}
      }
    }
  },
  'Evinon_Steel_Ingot': {
    'hash': 32198,
    'name': 'Evinon Steel Ingot',
    'embedded': {
      'Evinon_Steel_Ingot_32738': {
        'hash': 32738,
        'name': 'Evinon Steel Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_12930': {
        'hash': 12930,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Explosion_Boulder': {
    'hash': 44162,
    'name': 'Explosion Boulder',
    'embedded': {
      'Explosion_Boulder_13178': {
        'hash': 13178,
        'name': 'Explosion Boulder',
        'savables': {
          'ModifiableAdditionalStaticContent': {
            'hash': 159391088,
            'name': 'ModifiableAdditionalStaticContent'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Explosive_Spike': {
    'hash': 50412,
    'name': 'Explosive Spike',
    'embedded': {
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosive_Spike_15532': {
        'hash': 15532,
        'name': 'Explosive Spike',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      }
    }
  },
  'Fake_Player_combat_dummy': {
    'hash': 45454,
    'name': 'Fake Player combat_dummy',
    'embedded': {
      'Fake_Player_combat_dummy_57314': {
        'hash': 57314,
        'name': 'Fake Player combat_dummy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'dummy_arm_l_01_jnt_46272': {
        'hash': 46272,
        'name': 'dummy_arm_l_01_jnt',
        'savables': {}
      },
      'dummy_arm_l_02_jnt_46248': {
        'hash': 46248,
        'name': 'dummy_arm_l_02_jnt',
        'savables': {}
      },
      'dummy_arm_l_03_jnt_46250': {
        'hash': 46250,
        'name': 'dummy_arm_l_03_jnt',
        'savables': {}
      },
      'dummy_arm_r_01_jnt_46246': {
        'hash': 46246,
        'name': 'dummy_arm_r_01_jnt',
        'savables': {}
      },
      'dummy_arm_r_02_jnt_46254': {
        'hash': 46254,
        'name': 'dummy_arm_r_02_jnt',
        'savables': {}
      },
      'dummy_arm_r_03_jnt_46256': {
        'hash': 46256,
        'name': 'dummy_arm_r_03_jnt',
        'savables': {}
      },
      'dummy_head_01_jnt_46270': {
        'hash': 46270,
        'name': 'dummy_head_01_jnt',
        'savables': {}
      },
      'dummy_head_02_jnt_46264': {
        'hash': 46264,
        'name': 'dummy_head_02_jnt',
        'savables': {}
      },
      'dummy_head_03_jnt_46262': {
        'hash': 46262,
        'name': 'dummy_head_03_jnt',
        'savables': {}
      },
      'dummy_neck_jnt_46268': {
        'hash': 46268,
        'name': 'dummy_neck_jnt',
        'savables': {}
      },
      'dummy_spineMid_jnt_46274': {
        'hash': 46274,
        'name': 'dummy_spineMid_jnt',
        'savables': {}
      },
      'dummy_spine_01_jnt_46258': {
        'hash': 46258,
        'name': 'dummy_spine_01_jnt',
        'savables': {}
      },
      'dummy_spine_02_jnt_46260': {
        'hash': 46260,
        'name': 'dummy_spine_02_jnt',
        'savables': {}
      },
      'dummy_spine_03_jnt_46266': {
        'hash': 46266,
        'name': 'dummy_spine_03_jnt',
        'savables': {}
      },
      'dummy_sternum_jnt_46252': {
        'hash': 46252,
        'name': 'dummy_sternum_jnt',
        'savables': {}
      }
    }
  },
  'Feather_Red_Training': {
    'hash': 80,
    'name': 'Feather Red Training',
    'embedded': {
      'Feather_Red_Training_74': {
        'hash': 74,
        'name': 'Feather Red Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Firebug': {
    'hash': 40478,
    'name': 'Firebug',
    'embedded': {
      'Firebug_38050': {
        'hash': 38050,
        'name': 'Firebug',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Firebug_AI_22350': {
        'hash': 22350,
        'name': 'Firebug AI',
        'savables': {}
      },
      'firebug_7558': {
        'hash': 7558,
        'name': 'firebug',
        'savables': {}
      }
    }
  },
  'Firework': {
    'hash': 40748,
    'name': 'Firework',
    'embedded': {
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {
          'ColoredExplosive': {
            'hash': 3920618075,
            'name': 'ColoredExplosive'
          }
        }
      },
      'Firework_40732': {
        'hash': 40732,
        'name': 'Firework',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      },
      'Fuse__15214': {
        'hash': 15214,
        'name': 'Fuse ',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'Fuse': {
            'hash': 3665939353,
            'name': 'Fuse'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Fixed_Light_Bag_Attachment': {
    'hash': 1056,
    'name': 'Fixed Light Bag Attachment',
    'embedded': {
      'Dock_62078': {
        'hash': 62078,
        'name': 'Dock',
        'savables': {
          'AdditionalOwnedDock': {
            'hash': 2592242915,
            'name': 'AdditionalOwnedDock'
          }
        }
      },
      'Fixed_Light_Bag_Attachment_7868': {
        'hash': 7868,
        'name': 'Fixed Light Bag Attachment',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Insert_Bag_Tool_Attachment_7796': {
        'hash': 7796,
        'name': 'Insert Bag Tool Attachment',
        'savables': {}
      },
      'Storage_38218': {
        'hash': 38218,
        'name': 'Storage',
        'savables': {}
      },
      'bag_lighting_attachment_pin_49786': {
        'hash': 49786,
        'name': 'bag_lighting_attachment_pin',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_ropeWrap_01_49802': {
        'hash': 49802,
        'name': 'bag_lighting_attachment_ropeWrap_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_ropeWrap_02_49798': {
        'hash': 49798,
        'name': 'bag_lighting_attachment_ropeWrap_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_rope_01_49778': {
        'hash': 49778,
        'name': 'bag_lighting_attachment_rope_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_rope_02_49774': {
        'hash': 49774,
        'name': 'bag_lighting_attachment_rope_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_rope_03_49770': {
        'hash': 49770,
        'name': 'bag_lighting_attachment_rope_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_stick_01_49794': {
        'hash': 49794,
        'name': 'bag_lighting_attachment_stick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_stick_02_49790': {
        'hash': 49790,
        'name': 'bag_lighting_attachment_stick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'bag_lighting_attachment_stick_03_49782': {
        'hash': 49782,
        'name': 'bag_lighting_attachment_stick_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Flame_Step_Effect_Proto': {
    'hash': 24020,
    'name': 'Flame Step Effect Proto',
    'embedded': {
      'Flame_Step_Effect_Proto_26204': {
        'hash': 26204,
        'name': 'Flame Step Effect Proto',
        'savables': {}
      },
      'Heating_Bit_26176': {
        'hash': 26176,
        'name': 'Heating Bit',
        'savables': {}
      },
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      }
    }
  },
  'Flame_Step_Effect_Proto_Lava_Test_Long_Variant': {
    'hash': 54460,
    'name': 'Flame Step Effect Proto Lava Test Long Variant',
    'embedded': {
      'Flame_Step_Effect_Proto_Lava_Test_Long_Variant_63786': {
        'hash': 63786,
        'name': 'Flame Step Effect Proto Lava Test Long Variant',
        'savables': {}
      },
      'Heating_Bit_26176': {
        'hash': 26176,
        'name': 'Heating Bit',
        'savables': {}
      },
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      }
    }
  },
  'Flame_Step_Effect_Proto_Lava_Test_Variant': {
    'hash': 41226,
    'name': 'Flame Step Effect Proto Lava Test Variant',
    'embedded': {
      'Flame_Step_Effect_Proto_Lava_Test_Variant_63786': {
        'hash': 63786,
        'name': 'Flame Step Effect Proto Lava Test Variant',
        'savables': {}
      },
      'Heating_Bit_26176': {
        'hash': 26176,
        'name': 'Heating Bit',
        'savables': {}
      },
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      }
    }
  },
  'Flame_Step_Effect_Proto_Vent_test': {
    'hash': 5142,
    'name': 'Flame Step Effect Proto Vent test',
    'embedded': {
      'Flame_Step_Effect_Proto_Vent_test_10768': {
        'hash': 10768,
        'name': 'Flame Step Effect Proto Vent test',
        'savables': {}
      },
      'Heating_Bit_26176': {
        'hash': 26176,
        'name': 'Heating Bit',
        'savables': {}
      },
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      }
    }
  },
  'Flaming_Coalbed': {
    'hash': 13480,
    'name': 'Flaming Coalbed',
    'embedded': {
      'Flaming_Coalbed_26204': {
        'hash': 26204,
        'name': 'Flaming Coalbed',
        'savables': {}
      },
      'Heating_Bit_26176': {
        'hash': 26176,
        'name': 'Heating Bit',
        'savables': {}
      },
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      }
    }
  },
  'Flashlight_Lantern': {
    'hash': 23642,
    'name': 'Flashlight Lantern',
    'embedded': {
      'Fire_54948': {
        'hash': 54948,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Flashlight_Lantern_23664': {
        'hash': 23664,
        'name': 'Flashlight Lantern',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Fuel_Dock_63110': {
        'hash': 63110,
        'name': 'Fuel Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'flashlight_body_63430': {
        'hash': 63430,
        'name': 'flashlight_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_body_pin_01_63422': {
        'hash': 63422,
        'name': 'flashlight_body_pin_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_body_pin_02_63418': {
        'hash': 63418,
        'name': 'flashlight_body_pin_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_body_pin_03_63414': {
        'hash': 63414,
        'name': 'flashlight_body_pin_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_focusCylinder_63410': {
        'hash': 63410,
        'name': 'flashlight_focusCylinder',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_fuelDoor_axel_63402': {
        'hash': 63402,
        'name': 'flashlight_fuelDoor_axel',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_fuelDoor_body_63398': {
        'hash': 63398,
        'name': 'flashlight_fuelDoor_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_handle_body_63394': {
        'hash': 63394,
        'name': 'flashlight_handle_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_handle_pin_01_63390': {
        'hash': 63390,
        'name': 'flashlight_handle_pin_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_handle_pin_02_63426': {
        'hash': 63426,
        'name': 'flashlight_handle_pin_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'flashlight_handle_wraps_63406': {
        'hash': 63406,
        'name': 'flashlight_handle_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Flint': {
    'hash': 39484,
    'name': 'Flint',
    'embedded': {
      'Flint_39368': {
        'hash': 39368,
        'name': 'Flint',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_Primitive_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Primitive SwordType',
        'savables': {}
      }
    }
  },
  'Flint_Training': {
    'hash': 2356,
    'name': 'Flint Training',
    'embedded': {
      'Flint_Training_2350': {
        'hash': 2350,
        'name': 'Flint Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Float_Range_Operator': {
    'hash': 50768,
    'name': 'Float Range Operator',
    'embedded': {
      'Float_Range_Operator_13344': {
        'hash': 13344,
        'name': 'Float Range Operator',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicFloatRangeReceiver': {
            'hash': 2700376822,
            'name': 'LogicFloatRangeReceiver'
          }
        }
      }
    }
  },
  'Flower_Blue': {
    'hash': 23514,
    'name': 'Flower Blue',
    'embedded': {
      'Flower_Blue_28136': {
        'hash': 28136,
        'name': 'Flower Blue',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Flower_Red': {
    'hash': 61634,
    'name': 'Flower Red',
    'embedded': {
      'Flower_Red_27280': {
        'hash': 27280,
        'name': 'Flower Red',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'FlyCam_Player': {
    'hash': 44058,
    'name': 'FlyCam_Player',
    'embedded': {}
  },
  'Forage_Basket_Bag': {
    'hash': 39880,
    'name': 'Forage Basket Bag',
    'embedded': {
      'Bag_Body_42972': {
        'hash': 42972,
        'name': 'Bag Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Dock_BL_42978': {
        'hash': 42978,
        'name': 'Dock BL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BM_42976': {
        'hash': 42976,
        'name': 'Dock BM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BR_42974': {
        'hash': 42974,
        'name': 'Dock BR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_ML_42984': {
        'hash': 42984,
        'name': 'Dock ML',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MM_42982': {
        'hash': 42982,
        'name': 'Dock MM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MR_42980': {
        'hash': 42980,
        'name': 'Dock MR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TL_42990': {
        'hash': 42990,
        'name': 'Dock TL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TM_42988': {
        'hash': 42988,
        'name': 'Dock TM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TR_42986': {
        'hash': 42986,
        'name': 'Dock TR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Forage_Basket_Bag_43012': {
        'hash': 43012,
        'name': 'Forage Basket Bag',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Bag_Attach_30776': {
        'hash': 30776,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_55164': {
        'hash': 55164,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'basket_bag_handle_wraps_56574': {
        'hash': 56574,
        'name': 'basket_bag_handle_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_bottomStick_01_56570': {
        'hash': 56570,
        'name': 'basket_bottomStick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_bottomStick_02_56610': {
        'hash': 56610,
        'name': 'basket_bottomStick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_bottomStick_03_56558': {
        'hash': 56558,
        'name': 'basket_bottomStick_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_bottomStick_04_56618': {
        'hash': 56618,
        'name': 'basket_bottomStick_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_bottomStick_05_56614': {
        'hash': 56614,
        'name': 'basket_bottomStick_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_handle_56602': {
        'hash': 56602,
        'name': 'basket_handle',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_outerPillar_01_56554': {
        'hash': 56554,
        'name': 'basket_outerPillar_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_outerPillar_02_56566': {
        'hash': 56566,
        'name': 'basket_outerPillar_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_outerPillar_03_56622': {
        'hash': 56622,
        'name': 'basket_outerPillar_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_outerPillar_04_56550': {
        'hash': 56550,
        'name': 'basket_outerPillar_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_outerPillar_05_56590': {
        'hash': 56590,
        'name': 'basket_outerPillar_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_rim_01_56598': {
        'hash': 56598,
        'name': 'basket_rim_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_rim_02_56578': {
        'hash': 56578,
        'name': 'basket_rim_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_rim_03_56562': {
        'hash': 56562,
        'name': 'basket_rim_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_thatch_body_56594': {
        'hash': 56594,
        'name': 'basket_thatch_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_topStick_01_56546': {
        'hash': 56546,
        'name': 'basket_topStick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_topStick_02_56606': {
        'hash': 56606,
        'name': 'basket_topStick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_topStick_03_56534': {
        'hash': 56534,
        'name': 'basket_topStick_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_topStick_04_56586': {
        'hash': 56586,
        'name': 'basket_topStick_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_topStick_05_56538': {
        'hash': 56538,
        'name': 'basket_topStick_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_topStick_06_56582': {
        'hash': 56582,
        'name': 'basket_topStick_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_top_rim_56542': {
        'hash': 56542,
        'name': 'basket_top_rim',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Forage_Side_Pouch_Attachment': {
    'hash': 32874,
    'name': 'Forage Side Pouch Attachment',
    'embedded': {
      'Dock_45700': {
        'hash': 45700,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62078': {
        'hash': 62078,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Forage_Side_Pouch_Attachment_7868': {
        'hash': 7868,
        'name': 'Forage Side Pouch Attachment',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Insert_Bag_Attach_7796': {
        'hash': 7796,
        'name': 'Insert Bag Attach',
        'savables': {}
      },
      'Storage_62414': {
        'hash': 62414,
        'name': 'Storage',
        'savables': {}
      },
      'forage_basket_attachment_cover_27470': {
        'hash': 27470,
        'name': 'forage_basket_attachment_cover',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'forage_basket_attachment_knot_01_27466': {
        'hash': 27466,
        'name': 'forage_basket_attachment_knot_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'forage_basket_attachment_stick_01_30790': {
        'hash': 30790,
        'name': 'forage_basket_attachment_stick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'forage_basket_attachment_stick_02_30786': {
        'hash': 30786,
        'name': 'forage_basket_attachment_stick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'forage_basket_rim_01_30798': {
        'hash': 30798,
        'name': 'forage_basket_rim_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'forage_basket_rim_02_30794': {
        'hash': 30794,
        'name': 'forage_basket_rim_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Forest_Chunk_Point_Generator': {
    'hash': 45732,
    'name': 'Forest Chunk Point Generator',
    'embedded': {
      'Forest_Chunk_Point_Generator_16642': {
        'hash': 16642,
        'name': 'Forest Chunk Point Generator',
        'savables': {}
      }
    }
  },
  'Forest_Population': {
    'hash': 18818,
    'name': 'Forest Population',
    'embedded': {
      'Forest_Population_16642': {
        'hash': 16642,
        'name': 'Forest Population',
        'savables': {
          'BasicPopulationFolder': {
            'hash': 1931537627,
            'name': 'BasicPopulationFolder'
          }
        }
      }
    }
  },
  'Forge': {
    'hash': 11872,
    'name': 'Forge',
    'embedded': {
      'Fire_30100': {
        'hash': 30100,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Forge_61848': {
        'hash': 61848,
        'name': 'Forge',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Forge_Area_43486': {
        'hash': 43486,
        'name': 'Forge_Area',
        'savables': {}
      }
    }
  },
  'Forge_Training': {
    'hash': 33628,
    'name': 'Forge Training',
    'embedded': {
      'Forge_Training_31154': {
        'hash': 31154,
        'name': 'Forge Training',
        'savables': {}
      },
      'Heat_Area_43486': {
        'hash': 43486,
        'name': 'Heat Area',
        'savables': {}
      }
    }
  },
  'Friend_Request_Token': {
    'hash': 15314,
    'name': 'Friend_Request_Token',
    'embedded': {}
  },
  'Fruit_Tree_Path': {
    'hash': 40982,
    'name': 'Fruit Tree Path',
    'embedded': {
      'Fruit_Tree_Path_54338': {
        'hash': 54338,
        'name': 'Fruit Tree Path',
        'savables': {
          'PopulationPath': {
            'hash': 7704646,
            'name': 'PopulationPath'
          }
        }
      }
    }
  },
  'Gacha_Handle_': {
    'hash': 34422,
    'name': 'Gacha Handle ',
    'embedded': {
      'Gacha_Handle__58484': {
        'hash': 58484,
        'name': 'Gacha Handle ',
        'savables': {}
      },
      'Handle_Pickup_13422': {
        'hash': 13422,
        'name': 'Handle Pickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Garlic_Full_Burnt': {
    'hash': 52934,
    'name': 'Garlic Full Burnt',
    'embedded': {
      'Cooking_64222': {
        'hash': 64222,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Full_Burnt_52596': {
        'hash': 52596,
        'name': 'Garlic Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Garlic_Full_Cooked': {
    'hash': 52530,
    'name': 'Garlic Full Cooked',
    'embedded': {
      'Cooking_63850': {
        'hash': 63850,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Full_Cooked_52192': {
        'hash': 52192,
        'name': 'Garlic Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Garlic_Full_Ripe': {
    'hash': 52126,
    'name': 'Garlic Full Ripe',
    'embedded': {
      'Cooking_61942': {
        'hash': 61942,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Full_Ripe_49740': {
        'hash': 49740,
        'name': 'Garlic Full Ripe',
        'savables': {
          'BuildupPickup': {
            'hash': 3373651539,
            'name': 'BuildupPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Leaves_Parent_41624': {
        'hash': 41624,
        'name': 'Leaves Parent',
        'savables': {}
      },
      'Root_Parent_41626': {
        'hash': 41626,
        'name': 'Root Parent',
        'savables': {}
      }
    }
  },
  'Garlic_Full_Unripe': {
    'hash': 49162,
    'name': 'Garlic Full Unripe',
    'embedded': {
      'Cooking_61546': {
        'hash': 61546,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Full_Unripe_48792': {
        'hash': 48792,
        'name': 'Garlic Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Garlic_Half_Burnt': {
    'hash': 60930,
    'name': 'Garlic Half Burnt',
    'embedded': {
      'Cooking_36210': {
        'hash': 36210,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Half_Burnt_60592': {
        'hash': 60592,
        'name': 'Garlic Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Garlic_Half_Cooked': {
    'hash': 60526,
    'name': 'Garlic Half Cooked',
    'embedded': {
      'Cooking_35152': {
        'hash': 35152,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Half_Cooked_60188': {
        'hash': 60188,
        'name': 'Garlic Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Garlic_Half_Ripe': {
    'hash': 60122,
    'name': 'Garlic Half Ripe',
    'embedded': {
      'Cooking_34454': {
        'hash': 34454,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Half_Ripe_59784': {
        'hash': 59784,
        'name': 'Garlic Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Garlic_Half_Unripe': {
    'hash': 59718,
    'name': 'Garlic Half Unripe',
    'embedded': {
      'Cooking_34116': {
        'hash': 34116,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Garlic_Half_Unripe_59380': {
        'hash': 59380,
        'name': 'Garlic Half Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Garlic_Leaves': {
    'hash': 1266,
    'name': 'Garlic Leaves',
    'embedded': {
      'Garlic_Leaves_57126': {
        'hash': 57126,
        'name': 'Garlic Leaves',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'PullPickup_32134': {
        'hash': 32134,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Garlic_Roots': {
    'hash': 57564,
    'name': 'Garlic Roots',
    'embedded': {
      'Garlic_Roots_34536': {
        'hash': 34536,
        'name': 'Garlic Roots',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'PullPickup_32134': {
        'hash': 32134,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Geode_Tier_1': {
    'hash': 59336,
    'name': 'Geode Tier 1',
    'embedded': {
      'Geode_Tier_1_56136': {
        'hash': 56136,
        'name': 'Geode Tier 1',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Geode_Tier_1_Half_01': {
    'hash': 29678,
    'name': 'Geode Tier 1 Half 01',
    'embedded': {
      'Geode_Tier_1_Half_01_26864': {
        'hash': 26864,
        'name': 'Geode Tier 1 Half 01',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Geode_Tier_1_Half_02': {
    'hash': 38512,
    'name': 'Geode Tier 1 Half 02',
    'embedded': {
      'Geode_Tier_1_Half_02_35456': {
        'hash': 35456,
        'name': 'Geode Tier 1 Half 02',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Gift_Mail_Box': {
    'hash': 56348,
    'name': 'Gift Mail Box',
    'embedded': {
      'Gift_Mail_Box_17050': {
        'hash': 17050,
        'name': 'Gift Mail Box',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'SentGift': {
            'hash': 661497638,
            'name': 'SentGift'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Glowing_Mushroom_Recipe_Burnt_Stew': {
    'hash': 47384,
    'name': 'Glowing_Mushroom_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Glowing_Mushroom_Recipe_Cooked_Stew': {
    'hash': 47362,
    'name': 'Glowing_Mushroom_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Glowing_Mushroom_Recipe_Raw_Stew': {
    'hash': 44774,
    'name': 'Glowing_Mushroom_Recipe_Raw_Stew',
    'embedded': {}
  },
  'GoldCoin': {
    'hash': 61648,
    'name': 'GoldCoin',
    'embedded': {
      'GoldCoin_39174': {
        'hash': 39174,
        'name': 'GoldCoin',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_12524': {
        'hash': 12524,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Gold_Boulder': {
    'hash': 2584,
    'name': 'Gold Boulder',
    'embedded': {
      'Gold_Boulder_3932': {
        'hash': 3932,
        'name': 'Gold Boulder',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Origin_7418': {
        'hash': 7418,
        'name': 'Spawn Origin',
        'savables': {}
      }
    }
  },
  'Gold_Boulder_Parts': {
    'hash': 47738,
    'name': 'Gold_Boulder_Parts',
    'embedded': {
      'Gold_Boulder_Part_01_52930': {
        'hash': 52930,
        'name': 'Gold_Boulder_Part_01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Gold_Boulder_Part_02_52926': {
        'hash': 52926,
        'name': 'Gold_Boulder_Part_02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Gold_Boulder_Part_03_52922': {
        'hash': 52922,
        'name': 'Gold_Boulder_Part_03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Gold_Boulder_Part_04_52934': {
        'hash': 52934,
        'name': 'Gold_Boulder_Part_04',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Gold_Boulder_Parts_52902': {
        'hash': 52902,
        'name': 'Gold_Boulder_Parts',
        'savables': {}
      }
    }
  },
  'Gold_Ingot': {
    'hash': 30092,
    'name': 'Gold Ingot',
    'embedded': {
      'Gold_Ingot_29980': {
        'hash': 29980,
        'name': 'Gold Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_13048': {
        'hash': 13048,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      }
    }
  },
  'Gold_Ore': {
    'hash': 61650,
    'name': 'Gold Ore',
    'embedded': {
      'Gold_Ore_39896': {
        'hash': 39896,
        'name': 'Gold Ore',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Gotera': {
    'hash': 9466,
    'name': 'Gotera',
    'embedded': {
      'Dart_Shooter_56642': {
        'hash': 56642,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Gotera_7278': {
        'hash': 7278,
        'name': 'Gotera',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Gotera_AI_22350': {
        'hash': 22350,
        'name': 'Gotera AI',
        'savables': {}
      },
      'Gotera_Body_10036': {
        'hash': 10036,
        'name': 'Gotera Body',
        'savables': {}
      },
      'Impactor_63610': {
        'hash': 63610,
        'name': 'Impactor',
        'savables': {}
      },
      'Physical_Torso_8164': {
        'hash': 8164,
        'name': 'Physical Torso',
        'savables': {}
      },
      'Seed_Spray_1172': {
        'hash': 1172,
        'name': 'Seed Spray',
        'savables': {}
      },
      'Spawn_Drop_16220': {
        'hash': 16220,
        'name': 'Spawn Drop',
        'savables': {}
      },
      'root_jnt_17218': {
        'hash': 17218,
        'name': 'root_jnt',
        'savables': {}
      }
    }
  },
  'Gotera_Ash_Bomb': {
    'hash': 56764,
    'name': 'Gotera Ash Bomb',
    'embedded': {
      'AI_16472': {
        'hash': 16472,
        'name': 'AI',
        'savables': {}
      },
      'Explosion_7834': {
        'hash': 7834,
        'name': 'Explosion',
        'savables': {}
      },
      'Gotera_Ash_Bomb_40780': {
        'hash': 40780,
        'name': 'Gotera Ash Bomb',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Gotera_Ash_Variant': {
    'hash': 61448,
    'name': 'Gotera Ash Variant',
    'embedded': {
      'Dart_Shooter_6022': {
        'hash': 6022,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Gotera_AI_22350': {
        'hash': 22350,
        'name': 'Gotera AI',
        'savables': {}
      },
      'Gotera_Ash_Variant_7278': {
        'hash': 7278,
        'name': 'Gotera Ash Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Gotera_Body_10036': {
        'hash': 10036,
        'name': 'Gotera Body',
        'savables': {}
      },
      'Impactor_63610': {
        'hash': 63610,
        'name': 'Impactor',
        'savables': {}
      },
      'Physical_Torso_8164': {
        'hash': 8164,
        'name': 'Physical Torso',
        'savables': {}
      },
      'Seed_Spray_1172': {
        'hash': 1172,
        'name': 'Seed Spray',
        'savables': {}
      },
      'Spawn_Drop_16220': {
        'hash': 16220,
        'name': 'Spawn Drop',
        'savables': {}
      },
      'root_jnt_17218': {
        'hash': 17218,
        'name': 'root_jnt',
        'savables': {}
      }
    }
  },
  'Gotera_Big_Dart': {
    'hash': 26780,
    'name': 'Gotera Big Dart',
    'embedded': {
      'Dart_62940': {
        'hash': 62940,
        'name': 'Dart',
        'savables': {}
      },
      'Gotera_Big_Dart_3092': {
        'hash': 3092,
        'name': 'Gotera Big Dart',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Gotera_Big_Seed_Spray': {
    'hash': 18468,
    'name': 'Gotera Big Seed Spray',
    'embedded': {
      'Gotera_Big_Seed_Spray_44772': {
        'hash': 44772,
        'name': 'Gotera Big Seed Spray',
        'savables': {}
      }
    }
  },
  'Gotera_Birch_Variant': {
    'hash': 2370,
    'name': 'Gotera Birch Variant',
    'embedded': {
      'Dart_Shooter_6022': {
        'hash': 6022,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Gotera_AI_22350': {
        'hash': 22350,
        'name': 'Gotera AI',
        'savables': {}
      },
      'Gotera_Birch_Variant_7278': {
        'hash': 7278,
        'name': 'Gotera Birch Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Gotera_Body_10036': {
        'hash': 10036,
        'name': 'Gotera Body',
        'savables': {}
      },
      'Impactor_63610': {
        'hash': 63610,
        'name': 'Impactor',
        'savables': {}
      },
      'Physical_Torso_8164': {
        'hash': 8164,
        'name': 'Physical Torso',
        'savables': {}
      },
      'Seed_Spray_1172': {
        'hash': 1172,
        'name': 'Seed Spray',
        'savables': {}
      },
      'Spawn_Drop_16220': {
        'hash': 16220,
        'name': 'Spawn Drop',
        'savables': {}
      },
      'root_jnt_17218': {
        'hash': 17218,
        'name': 'root_jnt',
        'savables': {}
      }
    }
  },
  'Gotera_Dart': {
    'hash': 3088,
    'name': 'Gotera Dart',
    'embedded': {
      'Dart_62940': {
        'hash': 62940,
        'name': 'Dart',
        'savables': {}
      },
      'Gotera_Dart_3092': {
        'hash': 3092,
        'name': 'Gotera Dart',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Gotera_Redwood_Variant': {
    'hash': 27128,
    'name': 'Gotera Redwood Variant',
    'embedded': {
      'Dart_Shooter_56642': {
        'hash': 56642,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Gotera_AI_22350': {
        'hash': 22350,
        'name': 'Gotera AI',
        'savables': {}
      },
      'Gotera_Body_10036': {
        'hash': 10036,
        'name': 'Gotera Body',
        'savables': {}
      },
      'Gotera_Redwood_Variant_7278': {
        'hash': 7278,
        'name': 'Gotera Redwood Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Impactor_19042': {
        'hash': 19042,
        'name': 'Impactor',
        'savables': {}
      },
      'Impactor_19160': {
        'hash': 19160,
        'name': 'Impactor',
        'savables': {}
      },
      'Impactor_63610': {
        'hash': 63610,
        'name': 'Impactor',
        'savables': {}
      },
      'Physical_Torso_8164': {
        'hash': 8164,
        'name': 'Physical Torso',
        'savables': {}
      },
      'Seed_Spray_1172': {
        'hash': 1172,
        'name': 'Seed Spray',
        'savables': {}
      },
      'Spawn_Drop_16220': {
        'hash': 16220,
        'name': 'Spawn Drop',
        'savables': {}
      },
      'root_jnt_17218': {
        'hash': 17218,
        'name': 'root_jnt',
        'savables': {}
      }
    }
  },
  'Gotera_Seed_Spray': {
    'hash': 31540,
    'name': 'Gotera Seed Spray',
    'embedded': {
      'Gotera_Seed_Spray_44772': {
        'hash': 44772,
        'name': 'Gotera Seed Spray',
        'savables': {}
      }
    }
  },
  'Gotera_Seedling_Orb': {
    'hash': 59342,
    'name': 'Gotera Seedling Orb',
    'embedded': {
      'Gotera_Seedling_Orb_59268': {
        'hash': 59268,
        'name': 'Gotera Seedling Orb',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Stun_Explosion_58370': {
        'hash': 58370,
        'name': 'Stun Explosion',
        'savables': {}
      }
    }
  },
  'Gotera_Walnut_Bomb': {
    'hash': 35174,
    'name': 'Gotera Walnut Bomb',
    'embedded': {
      'Explosion_7834': {
        'hash': 7834,
        'name': 'Explosion',
        'savables': {}
      },
      'Gotera_Walnut_Bomb_40780': {
        'hash': 40780,
        'name': 'Gotera Walnut Bomb',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Gotera_Walnut_Variant': {
    'hash': 38096,
    'name': 'Gotera Walnut Variant',
    'embedded': {
      'Big_Dart_Shooter_(1)_4010': {
        'hash': 4010,
        'name': 'Big Dart Shooter (1)',
        'savables': {}
      },
      'Big_Dart_Shooter_(2)_4572': {
        'hash': 4572,
        'name': 'Big Dart Shooter (2)',
        'savables': {}
      },
      'Big_Dart_Shooter_5974': {
        'hash': 5974,
        'name': 'Big Dart Shooter',
        'savables': {}
      },
      'Dart_Shooter_(1)_37542': {
        'hash': 37542,
        'name': 'Dart Shooter (1)',
        'savables': {}
      },
      'Dart_Shooter_56642': {
        'hash': 56642,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Dart_Shooter_5986': {
        'hash': 5986,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Dart_Shooter_5998': {
        'hash': 5998,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Dart_Shooter_6010': {
        'hash': 6010,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Dart_Shooter_6022': {
        'hash': 6022,
        'name': 'Dart Shooter',
        'savables': {}
      },
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Gotera_AI_22350': {
        'hash': 22350,
        'name': 'Gotera AI',
        'savables': {}
      },
      'Gotera_Body_10036': {
        'hash': 10036,
        'name': 'Gotera Body',
        'savables': {}
      },
      'Gotera_Walnut_Variant_7278': {
        'hash': 7278,
        'name': 'Gotera Walnut Variant',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Impactor_63610': {
        'hash': 63610,
        'name': 'Impactor',
        'savables': {}
      },
      'Physical_Torso_8164': {
        'hash': 8164,
        'name': 'Physical Torso',
        'savables': {}
      },
      'Seed_Spray_1172': {
        'hash': 1172,
        'name': 'Seed Spray',
        'savables': {}
      },
      'Spawn_Drop_16220': {
        'hash': 16220,
        'name': 'Spawn Drop',
        'savables': {}
      },
      'root_jnt_17218': {
        'hash': 17218,
        'name': 'root_jnt',
        'savables': {}
      }
    }
  },
  'Gourd_Canteen': {
    'hash': 29032,
    'name': 'Gourd Canteen',
    'embedded': {
      'Gourd_Canteen_26784': {
        'hash': 26784,
        'name': 'Gourd Canteen',
        'savables': {
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Lid_Pickup_27480': {
        'hash': 27480,
        'name': 'Lid Pickup',
        'savables': {
          'CapPickup': {
            'hash': 3082855726,
            'name': 'CapPickup'
          }
        }
      }
    }
  },
  'Grass_Clump': {
    'hash': 57872,
    'name': 'Grass Clump',
    'embedded': {
      'Fire_30100': {
        'hash': 30100,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Grass_Clump_12138': {
        'hash': 12138,
        'name': 'Grass Clump',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      },
      'Insert_Grass_7796': {
        'hash': 7796,
        'name': 'Insert Grass',
        'savables': {}
      }
    }
  },
  'Gravestone_Parts': {
    'hash': 2596,
    'name': 'Gravestone Parts',
    'embedded': {
      'Gravestone_Parts_37752': {
        'hash': 37752,
        'name': 'Gravestone Parts',
        'savables': {}
      },
      'gravestone_base_LOD0_1602': {
        'hash': 1602,
        'name': 'gravestone_base_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type1_LOD0_1578': {
        'hash': 1578,
        'name': 'gravestone_brick_type1_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type1_LOD0_1596': {
        'hash': 1596,
        'name': 'gravestone_brick_type1_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type1_LOD0_1604': {
        'hash': 1604,
        'name': 'gravestone_brick_type1_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type1_LOD0_1608': {
        'hash': 1608,
        'name': 'gravestone_brick_type1_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type2_LOD0_1590': {
        'hash': 1590,
        'name': 'gravestone_brick_type2_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type2_LOD0_1606': {
        'hash': 1606,
        'name': 'gravestone_brick_type2_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type2_LOD0_1610': {
        'hash': 1610,
        'name': 'gravestone_brick_type2_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type2_LOD0_1614': {
        'hash': 1614,
        'name': 'gravestone_brick_type2_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type3_LOD0_1572': {
        'hash': 1572,
        'name': 'gravestone_brick_type3_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type3_LOD0_1594': {
        'hash': 1594,
        'name': 'gravestone_brick_type3_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type3_LOD0_1600': {
        'hash': 1600,
        'name': 'gravestone_brick_type3_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type3_LOD0_1612': {
        'hash': 1612,
        'name': 'gravestone_brick_type3_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type4_LOD0_1576': {
        'hash': 1576,
        'name': 'gravestone_brick_type4_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type4_LOD0_1582': {
        'hash': 1582,
        'name': 'gravestone_brick_type4_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_brick_type4_LOD0_1586': {
        'hash': 1586,
        'name': 'gravestone_brick_type4_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_spike_large_LOD0_1580': {
        'hash': 1580,
        'name': 'gravestone_spike_large_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_spike_large_LOD0_1588': {
        'hash': 1588,
        'name': 'gravestone_spike_large_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_spike_large_LOD0_1598': {
        'hash': 1598,
        'name': 'gravestone_spike_large_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_spike_small_LOD0_1584': {
        'hash': 1584,
        'name': 'gravestone_spike_small_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_spike_small_LOD0_1592': {
        'hash': 1592,
        'name': 'gravestone_spike_small_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'gravestone_torus_LOD0_1574': {
        'hash': 1574,
        'name': 'gravestone_torus_LOD0',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Great_Sword_Blade': {
    'hash': 63886,
    'name': 'Great Sword Blade',
    'embedded': {
      'Great_Sword_Blade_84': {
        'hash': 84,
        'name': 'Great Sword Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_62004': {
        'hash': 62004,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Large_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Large SwordType',
        'savables': {}
      },
      'metal_blade_greatsword_full_geo_LOD0_60392': {
        'hash': 60392,
        'name': 'metal_blade_greatsword_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Greater_Gotera_Charge_Explosion': {
    'hash': 5316,
    'name': 'Greater Gotera Charge Explosion',
    'embedded': {
      'Greater_Gotera_Charge_Explosion_58370': {
        'hash': 58370,
        'name': 'Greater Gotera Charge Explosion',
        'savables': {}
      }
    }
  },
  'Greater_Gotera_Seed_Spray': {
    'hash': 13476,
    'name': 'Greater Gotera Seed Spray',
    'embedded': {
      'Greater_Gotera_Seed_Spray_44772': {
        'hash': 44772,
        'name': 'Greater Gotera Seed Spray',
        'savables': {}
      }
    }
  },
  'Green_Crystal_cluster_03': {
    'hash': 23836,
    'name': 'Green_Crystal_cluster_03',
    'embedded': {
      'Green_Crystal_cluster_03_54542': {
        'hash': 54542,
        'name': 'Green_Crystal_cluster_03',
        'savables': {}
      }
    }
  },
  'Guard': {
    'hash': 51672,
    'name': 'Guard',
    'embedded': {
      'Guard_51546': {
        'hash': 51546,
        'name': 'Guard',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_56294': {
        'hash': 56294,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_Craft_39368': {
        'hash': 39368,
        'name': 'Insert SwordType Craft',
        'savables': {}
      },
      'Slot_SwordType_39370': {
        'hash': 39370,
        'name': 'Slot SwordType',
        'savables': {}
      }
    }
  },
  'Guard_Fancy': {
    'hash': 62140,
    'name': 'Guard Fancy',
    'embedded': {
      'Guard_Fancy_51546': {
        'hash': 51546,
        'name': 'Guard Fancy',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_56592': {
        'hash': 56592,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_Deco_39368': {
        'hash': 39368,
        'name': 'Insert SwordType Deco',
        'savables': {}
      },
      'Slot_SwordType_39370': {
        'hash': 39370,
        'name': 'Slot SwordType',
        'savables': {}
      }
    }
  },
  'Guard_Handle': {
    'hash': 43186,
    'name': 'Guard Handle',
    'embedded': {
      'Guard_Handle_51546': {
        'hash': 51546,
        'name': 'Guard Handle',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_Mid_39368': {
        'hash': 39368,
        'name': 'Insert Mid',
        'savables': {}
      },
      'Slot_End_39370': {
        'hash': 39370,
        'name': 'Slot End',
        'savables': {}
      }
    }
  },
  'Guard_Hemisphere': {
    'hash': 34428,
    'name': 'Guard Hemisphere',
    'embedded': {
      'Guard_Hemisphere_51546': {
        'hash': 51546,
        'name': 'Guard Hemisphere',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_56886': {
        'hash': 56886,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_Deco_39368': {
        'hash': 39368,
        'name': 'Insert SwordType Deco',
        'savables': {}
      },
      'Slot_SwordType_39370': {
        'hash': 39370,
        'name': 'Slot SwordType',
        'savables': {}
      }
    }
  },
  'Guard_Pointy_Ends': {
    'hash': 28160,
    'name': 'Guard Pointy Ends',
    'embedded': {
      'Guard_Pointy_Ends_51546': {
        'hash': 51546,
        'name': 'Guard Pointy Ends',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_57188': {
        'hash': 57188,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_Craft_39368': {
        'hash': 39368,
        'name': 'Insert SwordType Craft',
        'savables': {}
      },
      'Slot_Multi_31108': {
        'hash': 31108,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Guard_Round_Ends': {
    'hash': 21776,
    'name': 'Guard Round Ends',
    'embedded': {
      'Guard_Round_Ends_51546': {
        'hash': 51546,
        'name': 'Guard Round Ends',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_Mid_39368': {
        'hash': 39368,
        'name': 'Insert Mid',
        'savables': {}
      },
      'Slot_End_39370': {
        'hash': 39370,
        'name': 'Slot End',
        'savables': {}
      }
    }
  },
  'Guard_Straight_Ends': {
    'hash': 17348,
    'name': 'Guard Straight Ends',
    'embedded': {
      'Guard_Straight_Ends_51546': {
        'hash': 51546,
        'name': 'Guard Straight Ends',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_57430': {
        'hash': 57430,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_Craft_39368': {
        'hash': 39368,
        'name': 'Insert SwordType Craft',
        'savables': {}
      },
      'Slot_Multi_30024': {
        'hash': 30024,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Hammer': {
    'hash': 61660,
    'name': 'Hammer',
    'embedded': {}
  },
  'Hammer_Head': {
    'hash': 43146,
    'name': 'Hammer Head',
    'embedded': {
      'Hammer_Head_42978': {
        'hash': 42978,
        'name': 'Hammer Head',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_10366': {
        'hash': 10366,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_HammerType_End_Cap_52192': {
        'hash': 52192,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      }
    }
  },
  'Hammer_Head_Small': {
    'hash': 15476,
    'name': 'Hammer Head Small',
    'embedded': {
      'Hammer_Head_Small_18788': {
        'hash': 18788,
        'name': 'Hammer Head Small',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_10670': {
        'hash': 10670,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_HammerType_End_Cap_18784': {
        'hash': 18784,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      }
    }
  },
  'Hammer_Training': {
    'hash': 47018,
    'name': 'Hammer Training',
    'embedded': {
      'Hammer_Training_44084': {
        'hash': 44084,
        'name': 'Hammer Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hand_Camera': {
    'hash': 59806,
    'name': 'Hand_Camera',
    'embedded': {}
  },
  'Handle_Bow': {
    'hash': 64410,
    'name': 'Handle Bow',
    'embedded': {
      'Handle_Bow_1188': {
        'hash': 1188,
        'name': 'Handle Bow',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Grass_11474': {
        'hash': 11474,
        'name': 'Slot Grass',
        'savables': {}
      },
      'Slot_Grass_29036': {
        'hash': 29036,
        'name': 'Slot Grass',
        'savables': {}
      }
    }
  },
  'Handle_Fist': {
    'hash': 22988,
    'name': 'Handle Fist',
    'embedded': {
      'Handle_Fist_45004': {
        'hash': 45004,
        'name': 'Handle Fist',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_7356': {
        'hash': 7356,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Slot_Deco_22982': {
        'hash': 22982,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_22992': {
        'hash': 22992,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_23002': {
        'hash': 23002,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_54114': {
        'hash': 54114,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Multi_22990': {
        'hash': 22990,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Handle_Large_Branch': {
    'hash': 61098,
    'name': 'Handle Large Branch',
    'embedded': {
      'Handle_Large_Branch_61094': {
        'hash': 61094,
        'name': 'Handle Large Branch',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Multi_20330': {
        'hash': 20330,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Primitive_AxeType_55026': {
        'hash': 55026,
        'name': 'Slot Primitive AxeType',
        'savables': {}
      }
    }
  },
  'Handle_Large_Cool': {
    'hash': 25290,
    'name': 'Handle Large Cool',
    'embedded': {
      'Handle_Large_Cool_25294': {
        'hash': 25294,
        'name': 'Handle Large Cool',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_37768': {
        'hash': 37768,
        'name': 'Heat Point',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Slot_EdgeType_Craft_43172': {
        'hash': 43172,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_EdgeType_Craft_64610': {
        'hash': 64610,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_29320': {
        'hash': 29320,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_43166': {
        'hash': 43166,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Handle_Large_Standard': {
    'hash': 43252,
    'name': 'Handle_Large_Standard',
    'embedded': {}
  },
  'Handle_Long_Straight': {
    'hash': 20300,
    'name': 'Handle Long Straight',
    'embedded': {
      'Dock_32818': {
        'hash': 32818,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_Long_Straight_25294': {
        'hash': 25294,
        'name': 'Handle Long Straight',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_EdgeType_Craft_53492': {
        'hash': 53492,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_EdgeType_Craft_53692': {
        'hash': 53692,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_(1)_63178': {
        'hash': 63178,
        'name': 'Slot Multi (1)',
        'savables': {}
      },
      'Slot_Multi_53060': {
        'hash': 53060,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_53074': {
        'hash': 53074,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_63218': {
        'hash': 63218,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Straight_Short_Sword_Type_63270': {
        'hash': 63270,
        'name': 'Slot Straight Short Sword Type',
        'savables': {}
      },
      'Slot_Straight_Short_Sword_Type_63318': {
        'hash': 63318,
        'name': 'Slot Straight Short Sword Type',
        'savables': {}
      }
    }
  },
  'Handle_Medium_Branch': {
    'hash': 61400,
    'name': 'Handle Medium Branch',
    'embedded': {
      'Handle_Medium_Branch_61404': {
        'hash': 61404,
        'name': 'Handle Medium Branch',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_EdgeType_Craft_45470': {
        'hash': 45470,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_15462': {
        'hash': 15462,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_29458': {
        'hash': 29458,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_52880': {
        'hash': 52880,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_PommelType_55836': {
        'hash': 55836,
        'name': 'Slot PommelType',
        'savables': {}
      }
    }
  },
  'Handle_Medium_Cool': {
    'hash': 61856,
    'name': 'Handle Medium Cool',
    'embedded': {
      'Handle_Medium_Cool_61852': {
        'hash': 61852,
        'name': 'Handle Medium Cool',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_8548': {
        'hash': 8548,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Slot_EdgeType_Craft_57058': {
        'hash': 57058,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_EdgeType_Craft_59436': {
        'hash': 59436,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_3558': {
        'hash': 3558,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_59224': {
        'hash': 59224,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Handle_Medium_Curved': {
    'hash': 19316,
    'name': 'Handle Medium Curved',
    'embedded': {
      'Handle_Medium_Curved_19318': {
        'hash': 19318,
        'name': 'Handle Medium Curved',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_9036': {
        'hash': 9036,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Slot_EdgeType_Craft_51182': {
        'hash': 51182,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_7860': {
        'hash': 7860,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Handle_Medium_Ridged': {
    'hash': 60598,
    'name': 'Handle Medium Ridged',
    'embedded': {
      'Handle_Medium_Ridged_44084': {
        'hash': 44084,
        'name': 'Handle Medium Ridged',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Pole_19996': {
        'hash': 19996,
        'name': 'Slot Pole',
        'savables': {}
      },
      'Slot_Pole_64914': {
        'hash': 64914,
        'name': 'Slot Pole',
        'savables': {}
      }
    }
  },
  'Handle_Medium_Standard': {
    'hash': 41438,
    'name': 'Handle Medium Standard',
    'embedded': {
      'Handle_Medium_Standard_44084': {
        'hash': 44084,
        'name': 'Handle Medium Standard',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Pole_20070': {
        'hash': 20070,
        'name': 'Slot Pole',
        'savables': {}
      },
      'Slot_Pole_64914': {
        'hash': 64914,
        'name': 'Slot Pole',
        'savables': {}
      }
    }
  },
  'Handle_Medium_Straight': {
    'hash': 19180,
    'name': 'Handle Medium Straight',
    'embedded': {
      'Dock_39120': {
        'hash': 39120,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_Medium_Straight_19154': {
        'hash': 19154,
        'name': 'Handle Medium Straight',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_EdgeType_Craft_53492': {
        'hash': 53492,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_EdgeType_Craft_53692': {
        'hash': 53692,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_(1)_63178': {
        'hash': 63178,
        'name': 'Slot Multi (1)',
        'savables': {}
      },
      'Slot_Multi_53060': {
        'hash': 53060,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_53074': {
        'hash': 53074,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_63218': {
        'hash': 63218,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Straight_Short_Sword_Type_63270': {
        'hash': 63270,
        'name': 'Slot Straight Short Sword Type',
        'savables': {}
      },
      'Slot_Straight_Short_Sword_Type_63318': {
        'hash': 63318,
        'name': 'Slot Straight Short Sword Type',
        'savables': {}
      }
    }
  },
  'Handle_Round_Fist': {
    'hash': 3506,
    'name': 'Handle Round Fist',
    'embedded': {
      'Handle_Round_Fist_3514': {
        'hash': 3514,
        'name': 'Handle Round Fist',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Deco_31482': {
        'hash': 31482,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_38156': {
        'hash': 38156,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_50738': {
        'hash': 50738,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_57746': {
        'hash': 57746,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Multi_54114': {
        'hash': 54114,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Handle_Short': {
    'hash': 42230,
    'name': 'Handle Short',
    'embedded': {
      'Handle_Short_42104': {
        'hash': 42104,
        'name': 'Handle Short',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Large_SwordType_Craft_54356': {
        'hash': 54356,
        'name': 'Slot Large SwordType Craft',
        'savables': {}
      },
      'Slot_Large_SwordType_Craft_6134': {
        'hash': 6134,
        'name': 'Slot Large SwordType Craft',
        'savables': {}
      },
      'Slot_Multi_6136': {
        'hash': 6136,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_6138': {
        'hash': 6138,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_PommelType_20654': {
        'hash': 20654,
        'name': 'Slot PommelType',
        'savables': {}
      },
      'Slot_PommelType_30776': {
        'hash': 30776,
        'name': 'Slot PommelType',
        'savables': {}
      }
    }
  },
  'Handle_Short_C_Curve': {
    'hash': 34898,
    'name': 'Handle Short C Curve',
    'embedded': {
      'Handle_Short_C_Curve_44084': {
        'hash': 44084,
        'name': 'Handle Short C Curve',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_9524': {
        'hash': 9524,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Slot_Large_SwordType_Craft_5628': {
        'hash': 5628,
        'name': 'Slot Large SwordType Craft',
        'savables': {}
      },
      'Slot_Large_SwordType_Craft_5714': {
        'hash': 5714,
        'name': 'Slot Large SwordType Craft',
        'savables': {}
      },
      'Slot_Multi_5624': {
        'hash': 5624,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_5626': {
        'hash': 5626,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_PommelType_5686': {
        'hash': 5686,
        'name': 'Slot PommelType',
        'savables': {}
      },
      'Slot_PommelType_5700': {
        'hash': 5700,
        'name': 'Slot PommelType',
        'savables': {}
      }
    }
  },
  'Handle_Short_Cool': {
    'hash': 5920,
    'name': 'Handle Short Cool',
    'embedded': {
      'Handle_Short_Cool_5922': {
        'hash': 5922,
        'name': 'Handle Short Cool',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_51674': {
        'hash': 51674,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Slot_EdgeType_Craft_43890': {
        'hash': 43890,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Large_SwordType_Craft_33946': {
        'hash': 33946,
        'name': 'Slot Large SwordType Craft',
        'savables': {}
      },
      'Slot_Multi_48480': {
        'hash': 48480,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Handle_Short_Pointy_End': {
    'hash': 28636,
    'name': 'Handle Short Pointy End',
    'embedded': {
      'Handle_Short_Pointy_End_44084': {
        'hash': 44084,
        'name': 'Handle Short Pointy End',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Heat_Point_Collection_10000': {
        'hash': 10000,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Slot_EdgeType_Craft_14502': {
        'hash': 14502,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Large_SwordType_Craft_9736': {
        'hash': 9736,
        'name': 'Slot Large SwordType Craft',
        'savables': {}
      },
      'Slot_Multi_18472': {
        'hash': 18472,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Handle_Short_S_Curve': {
    'hash': 27820,
    'name': 'Handle Short S Curve',
    'embedded': {
      'Handle_Short_S_Curve_44084': {
        'hash': 44084,
        'name': 'Handle Short S Curve',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Mid_20238': {
        'hash': 20238,
        'name': 'Slot Mid',
        'savables': {}
      },
      'Slot_Mid_64914': {
        'hash': 64914,
        'name': 'Slot Mid',
        'savables': {}
      }
    }
  },
  'Handle_Short_Taper': {
    'hash': 24198,
    'name': 'Handle Short Taper',
    'embedded': {
      'Handle_Short_Taper_24200': {
        'hash': 24200,
        'name': 'Handle Short Taper',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Mid_20296': {
        'hash': 20296,
        'name': 'Slot Mid',
        'savables': {}
      },
      'Slot_Mid_64914': {
        'hash': 64914,
        'name': 'Slot Mid',
        'savables': {}
      }
    }
  },
  'Handle_Spear': {
    'hash': 20640,
    'name': 'Handle Spear',
    'embedded': {
      'Handle_Spear_24200': {
        'hash': 24200,
        'name': 'Handle Spear',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Deco_4866': {
        'hash': 4866,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Pole_64914': {
        'hash': 64914,
        'name': 'Slot Pole',
        'savables': {}
      }
    }
  },
  'Handle_Tonfa': {
    'hash': 57838,
    'name': 'Handle Tonfa',
    'embedded': {
      'Handle_Tonfa_57844': {
        'hash': 57844,
        'name': 'Handle Tonfa',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_EdgeType_Craft_52822': {
        'hash': 52822,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_HammerType_End_Cap_47874': {
        'hash': 47874,
        'name': 'Slot HammerType End Cap',
        'savables': {}
      },
      'Slot_Multi_64782': {
        'hash': 64782,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Shield_37414': {
        'hash': 37414,
        'name': 'Slot Shield',
        'savables': {}
      }
    }
  },
  'Handy_Cam': {
    'hash': 13790,
    'name': 'Handy_Cam',
    'embedded': {}
  },
  'Hanging_Health_Vine_01': {
    'hash': 52952,
    'name': 'Hanging Health Vine 01',
    'embedded': {
      'Directional_Encounter_43896': {
        'hash': 43896,
        'name': 'Directional Encounter',
        'savables': {
          'CylindricalBoundsSurface': {
            'hash': 34507654,
            'name': 'CylindricalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Hanging_Health_Vine_01_6398': {
        'hash': 6398,
        'name': 'Hanging Health Vine 01',
        'savables': {}
      }
    }
  },
  'Hanging_Health_Vine_02': {
    'hash': 56796,
    'name': 'Hanging Health Vine 02',
    'embedded': {
      'Directional_Encounter_43896': {
        'hash': 43896,
        'name': 'Directional Encounter',
        'savables': {
          'CylindricalBoundsSurface': {
            'hash': 34507654,
            'name': 'CylindricalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Hanging_Health_Vine_02_6398': {
        'hash': 6398,
        'name': 'Hanging Health Vine 02',
        'savables': {}
      }
    }
  },
  'Hanging_Health_Vine_03': {
    'hash': 53496,
    'name': 'Hanging Health Vine 03',
    'embedded': {
      'Directional_Encounter_43896': {
        'hash': 43896,
        'name': 'Directional Encounter',
        'savables': {
          'CylindricalBoundsSurface': {
            'hash': 34507654,
            'name': 'CylindricalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Hanging_Health_Vine_03_6398': {
        'hash': 6398,
        'name': 'Hanging Health Vine 03',
        'savables': {}
      }
    }
  },
  'Hanging_Loot_Box_Platform': {
    'hash': 54462,
    'name': 'Hanging Loot Box Platform',
    'embedded': {
      'Hanging_Loot_Box_Platform_12670': {
        'hash': 12670,
        'name': 'Hanging Loot Box Platform',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Boxes_(1)_18788': {
        'hash': 18788,
        'name': 'Spawn Boxes (1)',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Spawn_Boxes_(2)_18856': {
        'hash': 18856,
        'name': 'Spawn Boxes (2)',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Spawn_Boxes_(3)_18766': {
        'hash': 18766,
        'name': 'Spawn Boxes (3)',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Spawn_Boxes_53424': {
        'hash': 53424,
        'name': 'Spawn Boxes',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      }
    }
  },
  'Hanging_Loot_Sack': {
    'hash': 49658,
    'name': 'Hanging Loot Sack',
    'embedded': {
      'Box_5934': {
        'hash': 5934,
        'name': 'Box',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Hanging_Loot_Sack_12670': {
        'hash': 12670,
        'name': 'Hanging Loot Sack',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Link_5938': {
        'hash': 5938,
        'name': 'Link',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Hard_Metal_Small_Bits': {
    'hash': 62594,
    'name': 'Hard Metal Small Bits',
    'embedded': {
      'Hard_Metal_Small_Bits_62578': {
        'hash': 62578,
        'name': 'Hard Metal Small Bits',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Hard_Plate_Metal_Medium_Square': {
    'hash': 50988,
    'name': 'Hard Plate Metal Medium Square',
    'embedded': {
      'Hard_Plate_Metal_Medium_Square_51004': {
        'hash': 51004,
        'name': 'Hard Plate Metal Medium Square',
        'savables': {
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Mesh_51176': {
        'hash': 51176,
        'name': 'Mesh',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'hardPlate_metal_medium_square_LOD0_52344': {
        'hash': 52344,
        'name': 'hardPlate_metal_medium_square_LOD0',
        'savables': {}
      }
    }
  },
  'Healing_Pod': {
    'hash': 44360,
    'name': 'Healing Pod',
    'embedded': {
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Healing_Pod_15532': {
        'hash': 15532,
        'name': 'Healing Pod',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      }
    }
  },
  'Healing_Pod_Plant': {
    'hash': 48826,
    'name': 'Healing Pod Plant',
    'embedded': {
      'Healing_Pod_Plant_64192': {
        'hash': 64192,
        'name': 'Healing Pod Plant',
        'savables': {}
      },
      'PullPickup_51602': {
        'hash': 51602,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Spawn_Buried_57238': {
        'hash': 57238,
        'name': 'Spawn Buried',
        'savables': {
          'SpawnBuried': {
            'hash': 654225716,
            'name': 'SpawnBuried'
          }
        }
      }
    }
  },
  'Heart_Receptacle': {
    'hash': 56090,
    'name': 'Heart Receptacle',
    'embedded': {
      'Fake_Interactable_64848': {
        'hash': 64848,
        'name': 'Fake Interactable',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Heart_Receptacle_37620': {
        'hash': 37620,
        'name': 'Heart Receptacle',
        'savables': {}
      }
    }
  },
  'Hebios_Buried_Spawn_Area': {
    'hash': 51290,
    'name': 'Hebios Buried Spawn Area',
    'embedded': {
      'Hebios_Buried_Spawn_Area_51274': {
        'hash': 51274,
        'name': 'Hebios Buried Spawn Area',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      }
    }
  },
  'Hebios_Camp_Barren': {
    'hash': 56012,
    'name': 'Hebios_Camp_Barren',
    'embedded': {}
  },
  'Hebios_Camp_Barren_Dynamic': {
    'hash': 56012,
    'name': 'Hebios Camp Barren Dynamic',
    'embedded': {
      'Closed_Crate_Spawner_26166': {
        'hash': 26166,
        'name': 'Closed Crate Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Enemy_Spawn_30256': {
        'hash': 30256,
        'name': 'Enemy Spawn',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Hebios_Camp_Barren_Dynamic_53304': {
        'hash': 53304,
        'name': 'Hebios Camp Barren Dynamic',
        'savables': {}
      },
      'Hebios_Camp_Fire_Spawner_55752': {
        'hash': 55752,
        'name': 'Hebios Camp Fire Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Open_Crate_Spawner_48408': {
        'hash': 48408,
        'name': 'Open Crate Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Hebios_Camp_Spawner': {
    'hash': 43300,
    'name': 'Hebios_Camp_Spawner',
    'embedded': {}
  },
  'Hebios_Camp_Valley': {
    'hash': 42062,
    'name': 'Hebios Camp Valley',
    'embedded': {
      'Hebios_Camp_Valley_38962': {
        'hash': 38962,
        'name': 'Hebios Camp Valley',
        'savables': {
          'StaticGenerationParent': {
            'hash': 2975913730,
            'name': 'StaticGenerationParent'
          }
        }
      }
    }
  },
  'Hebios_Camp_Valley_Center_Section_NEW': {
    'hash': 5350,
    'name': 'Hebios_Camp_Valley_Center_Section_NEW',
    'embedded': {}
  },
  'Hebios_Camp_Valley_Center_Section_Pond': {
    'hash': 54680,
    'name': 'Hebios_Camp_Valley_Center_Section_Pond',
    'embedded': {}
  },
  'Hebios_Camp_Valley_Front_Section_Spike_Gate': {
    'hash': 42358,
    'name': 'Hebios_Camp_Valley_Front_Section_Spike_Gate',
    'embedded': {}
  },
  'Hebios_Camp_Valley_Front_Section_Stone_Cliff': {
    'hash': 19412,
    'name': 'Hebios_Camp_Valley_Front_Section_Stone_Cliff',
    'embedded': {}
  },
  'Hebios_Camp_Valley_Left_Section_Archway': {
    'hash': 40482,
    'name': 'Hebios_Camp_Valley_Left_Section_Archway',
    'embedded': {}
  },
  'Hebios_Camp_Valley_Left_Section_Hilly_Forest': {
    'hash': 37966,
    'name': 'Hebios_Camp_Valley_Left_Section_Hilly_Forest',
    'embedded': {}
  },
  'Hebios_Closed_Crate_Spawner': {
    'hash': 46524,
    'name': 'Hebios Closed Crate Spawner',
    'embedded': {
      'Hebios_Closed_Crate_Spawner_19058': {
        'hash': 19058,
        'name': 'Hebios Closed Crate Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Hebios_Crafted_Mould': {
    'hash': 22498,
    'name': 'Hebios Crafted Mould',
    'embedded': {
      'Hebios_Crafted_Mould_14710': {
        'hash': 14710,
        'name': 'Hebios Crafted Mould',
        'savables': {
          'Mould': {
            'hash': 391977879,
            'name': 'Mould'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'hebios_mould_centerFrame_grp_18498': {
        'hash': 18498,
        'name': 'hebios_mould_centerFrame_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_emblem_grp_9986': {
        'hash': 9986,
        'name': 'hebios_mould_emblem_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_frame_horizontal_grp_01_18458': {
        'hash': 18458,
        'name': 'hebios_mould_frame_horizontal_grp 01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_frame_horizontal_grp_02_18482': {
        'hash': 18482,
        'name': 'hebios_mould_frame_horizontal_grp 02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_frame_vertical_grp_01_18462': {
        'hash': 18462,
        'name': 'hebios_mould_frame_vertical_grp 01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_frame_vertical_grp_02_18486': {
        'hash': 18486,
        'name': 'hebios_mould_frame_vertical_grp 02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_grassKnot_grp_01_18450': {
        'hash': 18450,
        'name': 'hebios_mould_grassKnot_grp 01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_grassKnot_grp_02_18446': {
        'hash': 18446,
        'name': 'hebios_mould_grassKnot_grp 02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_grassKnot_grp_03_18502': {
        'hash': 18502,
        'name': 'hebios_mould_grassKnot_grp 03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_grassKnot_grp_04_18474': {
        'hash': 18474,
        'name': 'hebios_mould_grassKnot_grp 04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_ingotGraphic_grp_18494': {
        'hash': 18494,
        'name': 'hebios_mould_ingotGraphic_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_railSlot_grp_01_18490': {
        'hash': 18490,
        'name': 'hebios_mould_railSlot_grp 01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_railSlot_grp_02_18454': {
        'hash': 18454,
        'name': 'hebios_mould_railSlot_grp 02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_railSlot_grp_03_18470': {
        'hash': 18470,
        'name': 'hebios_mould_railSlot_grp 03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_railSlot_grp_04_18466': {
        'hash': 18466,
        'name': 'hebios_mould_railSlot_grp 04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_mould_timesGraphic_grp_18478': {
        'hash': 18478,
        'name': 'hebios_mould_timesGraphic_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'katana_guard_grp_63702': {
        'hash': 63702,
        'name': 'katana_guard_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'redwood_gotera_core_emblemPart_grp_52708': {
        'hash': 52708,
        'name': 'redwood_gotera_core_emblemPart_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'redwood_gotera_core_leafPart_grp_52712': {
        'hash': 52712,
        'name': 'redwood_gotera_core_leafPart_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Hebios_Guard': {
    'hash': 5144,
    'name': 'Hebios Guard',
    'embedded': {
      'Heat_Point_Collection_56294': {
        'hash': 56294,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Hebios_Guard_36330': {
        'hash': 36330,
        'name': 'Hebios Guard',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Insert_SwordType_Craft_39368': {
        'hash': 39368,
        'name': 'Insert SwordType Craft',
        'savables': {}
      },
      'Slot_SwordType_39370': {
        'hash': 39370,
        'name': 'Slot SwordType',
        'savables': {}
      }
    }
  },
  'Hebios_Handle_Katana': {
    'hash': 53200,
    'name': 'Hebios Handle Katana',
    'embedded': {
      'Hebios_Handle_Katana_40148': {
        'hash': 40148,
        'name': 'Hebios Handle Katana',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Enchantable': {
            'hash': 4134534481,
            'name': 'Enchantable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Joint_Group_SwordType_63178': {
        'hash': 63178,
        'name': 'Joint Group SwordType',
        'savables': {}
      },
      'Slot_EdgeType_Craft_53492': {
        'hash': 53492,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Straight_Short_Sword_Type_63318': {
        'hash': 63318,
        'name': 'Slot Straight Short Sword Type',
        'savables': {}
      }
    }
  },
  'Hebios_Handle_Kunai': {
    'hash': 18456,
    'name': 'Hebios Handle Kunai',
    'embedded': {
      'Hebios_Handle_Kunai_14986': {
        'hash': 14986,
        'name': 'Hebios Handle Kunai',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Multi_6136': {
        'hash': 6136,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Hebios_Handle_Naginata': {
    'hash': 24220,
    'name': 'Hebios Handle Naginata',
    'embedded': {
      'Hebios_Handle_Naginata_26368': {
        'hash': 26368,
        'name': 'Hebios Handle Naginata',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Enchantable': {
            'hash': 4134534481,
            'name': 'Enchantable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_EdgeType_Craft_53692': {
        'hash': 53692,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_53060': {
        'hash': 53060,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_63218': {
        'hash': 63218,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Straight_Short_Sword_Type_63270': {
        'hash': 63270,
        'name': 'Slot Straight Short Sword Type',
        'savables': {}
      }
    }
  },
  'Hebios_Handle_Wakizashi': {
    'hash': 47662,
    'name': 'Hebios Handle Wakizashi',
    'embedded': {
      'Hebios_Handle_Wakizashi_47666': {
        'hash': 47666,
        'name': 'Hebios Handle Wakizashi',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Enchantable': {
            'hash': 4134534481,
            'name': 'Enchantable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Joint_Group_SwordType_63178': {
        'hash': 63178,
        'name': 'Joint Group SwordType',
        'savables': {}
      },
      'Slot_Straight_Short_Sword_Type_63318': {
        'hash': 63318,
        'name': 'Slot Straight Short Sword Type',
        'savables': {}
      }
    }
  },
  'Hebios_Katana_Blade_Part_01': {
    'hash': 12388,
    'name': 'Hebios Katana Blade Part 01',
    'embedded': {
      'Hebios_Katana_Blade_Part_01_46162': {
        'hash': 46162,
        'name': 'Hebios Katana Blade Part 01',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Katana_Blade_Part_02': {
    'hash': 12386,
    'name': 'Hebios Katana Blade Part 02',
    'embedded': {
      'Hebios_Katana_Blade_Part_02_46162': {
        'hash': 46162,
        'name': 'Hebios Katana Blade Part 02',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Katana_Blade_Part_Full': {
    'hash': 17266,
    'name': 'Hebios Katana Blade Part Full',
    'embedded': {
      'Hebios_Katana_Blade_Part_Full_40924': {
        'hash': 40924,
        'name': 'Hebios Katana Blade Part Full',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Insert_Straight_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight SwordType',
        'savables': {}
      },
      'hebios_katana_blade_part_01_56656': {
        'hash': 56656,
        'name': 'hebios_katana_blade_part_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_katana_blade_part_02_56652': {
        'hash': 56652,
        'name': 'hebios_katana_blade_part_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Hebios_Naginata_Blade_Part_01': {
    'hash': 17238,
    'name': 'Hebios Naginata Blade Part 01',
    'embedded': {
      'Hebios_Naginata_Blade_Part_01_46162': {
        'hash': 46162,
        'name': 'Hebios Naginata Blade Part 01',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Naginata_Blade_Part_02': {
    'hash': 42894,
    'name': 'Hebios Naginata Blade Part 02',
    'embedded': {
      'Hebios_Naginata_Blade_Part_02_46162': {
        'hash': 46162,
        'name': 'Hebios Naginata Blade Part 02',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Naginata_Blade_Part_Full': {
    'hash': 17420,
    'name': 'Hebios Naginata Blade Part Full',
    'embedded': {
      'Hebios_Naginata_Blade_Part_Full_40924': {
        'hash': 40924,
        'name': 'Hebios Naginata Blade Part Full',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Insert_Straight_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight SwordType',
        'savables': {}
      },
      'naginata_blade_part_01_grp_21404': {
        'hash': 21404,
        'name': 'naginata_blade_part_01_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'naginata_blade_part_02_grp_21408': {
        'hash': 21408,
        'name': 'naginata_blade_part_02_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Hebios_Open_Crate_Spawner': {
    'hash': 46522,
    'name': 'Hebios Open Crate Spawner',
    'embedded': {
      'Hebios_Open_Crate_Spawner_19060': {
        'hash': 19060,
        'name': 'Hebios Open Crate Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Hebios_Sai_Blade_Part_01': {
    'hash': 57048,
    'name': 'Hebios Sai Blade Part 01',
    'embedded': {
      'Hebios_Sai_Blade_Part_01_46162': {
        'hash': 46162,
        'name': 'Hebios Sai Blade Part 01',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Sai_Blade_Part_02': {
    'hash': 56830,
    'name': 'Hebios Sai Blade Part 02',
    'embedded': {
      'Hebios_Sai_Blade_Part_02_46162': {
        'hash': 46162,
        'name': 'Hebios Sai Blade Part 02',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Sai_Blade_Part_Full': {
    'hash': 1600,
    'name': 'Hebios Sai Blade Part Full',
    'embedded': {
      'Hebios_Sai_Blade_Part_Full_40924': {
        'hash': 40924,
        'name': 'Hebios Sai Blade Part Full',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Insert_Straight_Short_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight Short SwordType',
        'savables': {}
      },
      'hebios_sai_blade_part_01_50732': {
        'hash': 50732,
        'name': 'hebios_sai_blade_part_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hebios_sai_blade_part_02_50728': {
        'hash': 50728,
        'name': 'hebios_sai_blade_part_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Hebios_Storage_Chest': {
    'hash': 44984,
    'name': 'Hebios Storage Chest',
    'embedded': {
      'Bottom_Dock_1_2780': {
        'hash': 2780,
        'name': 'Bottom Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_2_2778': {
        'hash': 2778,
        'name': 'Bottom Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_3_2776': {
        'hash': 2776,
        'name': 'Bottom Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_4_2770': {
        'hash': 2770,
        'name': 'Bottom Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_5_2772': {
        'hash': 2772,
        'name': 'Bottom Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_6_2774': {
        'hash': 2774,
        'name': 'Bottom Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_Left_23970': {
        'hash': 23970,
        'name': 'Handle Left',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_Right_23964': {
        'hash': 23964,
        'name': 'Handle Right',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Hebios_Storage_Chest_2788': {
        'hash': 2788,
        'name': 'Hebios Storage Chest',
        'savables': {
          'Chest': {
            'hash': 3598052397,
            'name': 'Chest'
          }
        }
      },
      'Lid_2768': {
        'hash': 2768,
        'name': 'Lid',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Loot_Module_27674': {
        'hash': 27674,
        'name': 'Loot Module',
        'savables': {
          'LootModule': {
            'hash': 634164392,
            'name': 'LootModule'
          }
        }
      },
      'Top_Dock_1_2766': {
        'hash': 2766,
        'name': 'Top Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_2_2764': {
        'hash': 2764,
        'name': 'Top Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_3_2762': {
        'hash': 2762,
        'name': 'Top Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_4_2756': {
        'hash': 2756,
        'name': 'Top Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_5_2758': {
        'hash': 2758,
        'name': 'Top Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_6_2760': {
        'hash': 2760,
        'name': 'Top Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Hebios_Storage_Chest_Gcore': {
    'hash': 31618,
    'name': 'Hebios Storage Chest Gcore',
    'embedded': {
      'Bottom_Dock_1_2780': {
        'hash': 2780,
        'name': 'Bottom Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_2_2778': {
        'hash': 2778,
        'name': 'Bottom Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_3_2776': {
        'hash': 2776,
        'name': 'Bottom Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_4_2770': {
        'hash': 2770,
        'name': 'Bottom Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_5_2772': {
        'hash': 2772,
        'name': 'Bottom Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_6_2774': {
        'hash': 2774,
        'name': 'Bottom Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_Left_23970': {
        'hash': 23970,
        'name': 'Handle Left',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_Right_23964': {
        'hash': 23964,
        'name': 'Handle Right',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Hebios_Storage_Chest_Gcore_2788': {
        'hash': 2788,
        'name': 'Hebios Storage Chest Gcore',
        'savables': {
          'Chest': {
            'hash': 3598052397,
            'name': 'Chest'
          }
        }
      },
      'Lid_2768': {
        'hash': 2768,
        'name': 'Lid',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Loot_Module_27674': {
        'hash': 27674,
        'name': 'Loot Module',
        'savables': {
          'LootModule': {
            'hash': 634164392,
            'name': 'LootModule'
          }
        }
      },
      'Top_Dock_1_2766': {
        'hash': 2766,
        'name': 'Top Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_2_2764': {
        'hash': 2764,
        'name': 'Top Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_3_2762': {
        'hash': 2762,
        'name': 'Top Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_4_2756': {
        'hash': 2756,
        'name': 'Top Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_5_2758': {
        'hash': 2758,
        'name': 'Top Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_6_2760': {
        'hash': 2760,
        'name': 'Top Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Hebios_Wakizashi_Blade_Part_01': {
    'hash': 49774,
    'name': 'Hebios Wakizashi Blade Part 01',
    'embedded': {
      'Hebios_Wakizashi_Blade_Part_01_46162': {
        'hash': 46162,
        'name': 'Hebios Wakizashi Blade Part 01',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Wakizashi_Blade_Part_02': {
    'hash': 50184,
    'name': 'Hebios Wakizashi Blade Part 02',
    'embedded': {
      'Hebios_Wakizashi_Blade_Part_02_46162': {
        'hash': 46162,
        'name': 'Hebios Wakizashi Blade Part 02',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Hebios_Wakizashi_Blade_Part_Full': {
    'hash': 9018,
    'name': 'Hebios Wakizashi Blade Part Full',
    'embedded': {
      'Hebios_Wakizashi_Blade_Part_Full_40924': {
        'hash': 40924,
        'name': 'Hebios Wakizashi Blade Part Full',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Insert_Straight_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight SwordType',
        'savables': {}
      },
      'wakizashi_blade_part_01_grp_31190': {
        'hash': 31190,
        'name': 'wakizashi_blade_part_01_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wakizashi_blade_part_02_grp_31194': {
        'hash': 31194,
        'name': 'wakizashi_blade_part_02_grp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Hitting_Short_Sword_Training': {
    'hash': 55646,
    'name': 'Hitting Short Sword Training',
    'embedded': {
      'Blade_1152': {
        'hash': 1152,
        'name': 'Blade',
        'savables': {}
      },
      'Hitting_Short_Sword_Training_1152': {
        'hash': 1152,
        'name': 'Hitting Short Sword Training',
        'savables': {}
      }
    }
  },
  'Hoarder_Bag': {
    'hash': 54214,
    'name': 'Hoarder Bag',
    'embedded': {
      'Bag_Body_42972': {
        'hash': 42972,
        'name': 'Bag Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Dock_(1)_47074': {
        'hash': 47074,
        'name': 'Dock (1)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_464': {
        'hash': 464,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BL_(1)_1146': {
        'hash': 1146,
        'name': 'Dock BL (1)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BL_42978': {
        'hash': 42978,
        'name': 'Dock BL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BM_(1)_1148': {
        'hash': 1148,
        'name': 'Dock BM (1)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BM_42976': {
        'hash': 42976,
        'name': 'Dock BM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BR_(1)_1432': {
        'hash': 1432,
        'name': 'Dock BR (1)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BR_(2)_1240': {
        'hash': 1240,
        'name': 'Dock BR (2)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BR_(3)_1150': {
        'hash': 1150,
        'name': 'Dock BR (3)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_BR_42974': {
        'hash': 42974,
        'name': 'Dock BR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_ML_42984': {
        'hash': 42984,
        'name': 'Dock ML',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MM_42982': {
        'hash': 42982,
        'name': 'Dock MM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MR_(1)_1430': {
        'hash': 1430,
        'name': 'Dock MR (1)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MR_42980': {
        'hash': 42980,
        'name': 'Dock MR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TL_42990': {
        'hash': 42990,
        'name': 'Dock TL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TM_42988': {
        'hash': 42988,
        'name': 'Dock TM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TR_(1)_1428': {
        'hash': 1428,
        'name': 'Dock TR (1)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TR_42986': {
        'hash': 42986,
        'name': 'Dock TR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Hoarder_Bag_43012': {
        'hash': 43012,
        'name': 'Hoarder Bag',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Bag_Attach_10614': {
        'hash': 10614,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_10616': {
        'hash': 10616,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_30776': {
        'hash': 30776,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_55164': {
        'hash': 55164,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Pin_Collectible_Attach_59540': {
        'hash': 59540,
        'name': 'Slot Bag Pin Collectible Attach',
        'savables': {}
      },
      'Slot_Bag_Tool_Attachment_1020': {
        'hash': 1020,
        'name': 'Slot Bag Tool Attachment',
        'savables': {}
      },
      'Slot_Bag_Tool_Attachment_918': {
        'hash': 918,
        'name': 'Slot Bag Tool Attachment',
        'savables': {}
      },
      'hoarder_bag_body_39890': {
        'hash': 39890,
        'name': 'hoarder_bag_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_clasp_front_L_39810': {
        'hash': 39810,
        'name': 'hoarder_bag_clasp_front_L',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_clasp_front_R_39850': {
        'hash': 39850,
        'name': 'hoarder_bag_clasp_front_R',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_flap_39878': {
        'hash': 39878,
        'name': 'hoarder_bag_flap',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_flap_clasp_39886': {
        'hash': 39886,
        'name': 'hoarder_bag_flap_clasp',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_L_01_39894': {
        'hash': 39894,
        'name': 'hoarder_bag_pin_L_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_L_02_39882': {
        'hash': 39882,
        'name': 'hoarder_bag_pin_L_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_L_03_39930': {
        'hash': 39930,
        'name': 'hoarder_bag_pin_L_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_L_04_39826': {
        'hash': 39826,
        'name': 'hoarder_bag_pin_L_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_L_05_39898': {
        'hash': 39898,
        'name': 'hoarder_bag_pin_L_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_L_06_39834': {
        'hash': 39834,
        'name': 'hoarder_bag_pin_L_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_L_07_39902': {
        'hash': 39902,
        'name': 'hoarder_bag_pin_L_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_R_01_39870': {
        'hash': 39870,
        'name': 'hoarder_bag_pin_R_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_R_02_39858': {
        'hash': 39858,
        'name': 'hoarder_bag_pin_R_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_R_03_39914': {
        'hash': 39914,
        'name': 'hoarder_bag_pin_R_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_R_04_39926': {
        'hash': 39926,
        'name': 'hoarder_bag_pin_R_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_R_05_39806': {
        'hash': 39806,
        'name': 'hoarder_bag_pin_R_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_R_06_39874': {
        'hash': 39874,
        'name': 'hoarder_bag_pin_R_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_pin_R_07_39814': {
        'hash': 39814,
        'name': 'hoarder_bag_pin_R_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_sideBuckle_L_01_39830': {
        'hash': 39830,
        'name': 'hoarder_bag_sideBuckle_L_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_sideBuckle_L_02_39802': {
        'hash': 39802,
        'name': 'hoarder_bag_sideBuckle_L_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_sideBuckle_R_01_39866': {
        'hash': 39866,
        'name': 'hoarder_bag_sideBuckle_R_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_sideBuckle_R_02_39906': {
        'hash': 39906,
        'name': 'hoarder_bag_sideBuckle_R_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_body_39822': {
        'hash': 39822,
        'name': 'hoarder_bag_strap_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_bottom_L_39854': {
        'hash': 39854,
        'name': 'hoarder_bag_strap_bottom_L',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_bottom_R_39798': {
        'hash': 39798,
        'name': 'hoarder_bag_strap_bottom_R',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_front_L_39838': {
        'hash': 39838,
        'name': 'hoarder_bag_strap_front_L',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_front_R_39818': {
        'hash': 39818,
        'name': 'hoarder_bag_strap_front_R',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_slot_L_39862': {
        'hash': 39862,
        'name': 'hoarder_bag_strap_slot_L',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_slot_R_39846': {
        'hash': 39846,
        'name': 'hoarder_bag_strap_slot_R',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_top_buckle_L_39922': {
        'hash': 39922,
        'name': 'hoarder_bag_strap_top_buckle_L',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_strap_top_buckle_R_39918': {
        'hash': 39918,
        'name': 'hoarder_bag_strap_top_buckle_R',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_topDetail_01_39910': {
        'hash': 39910,
        'name': 'hoarder_bag_topDetail_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'hoarder_bag_topDetail_02_39842': {
        'hash': 39842,
        'name': 'hoarder_bag_topDetail_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_handle_body_14308': {
        'hash': 14308,
        'name': 'standard_bag_handle_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_handle_wraps_14304': {
        'hash': 14304,
        'name': 'standard_bag_handle_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Hot_Coalbed': {
    'hash': 41234,
    'name': 'Hot Coalbed',
    'embedded': {
      'Heating_Bit_26176': {
        'hash': 26176,
        'name': 'Heating Bit',
        'savables': {}
      },
      'Hot_Coalbed_26204': {
        'hash': 26204,
        'name': 'Hot Coalbed',
        'savables': {}
      },
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      }
    }
  },
  'Hover_Piece': {
    'hash': 50934,
    'name': 'Hover Piece',
    'embedded': {
      'Hover_Piece_5676': {
        'hash': 5676,
        'name': 'Hover Piece',
        'savables': {}
      }
    }
  },
  'Info_Board': {
    'hash': 51114,
    'name': 'Info Board',
    'embedded': {
      'Info_Board_63822': {
        'hash': 63822,
        'name': 'Info Board',
        'savables': {
          'InfoBoard': {
            'hash': 3431876266,
            'name': 'InfoBoard'
          }
        }
      }
    }
  },
  'Int_Range_Operator': {
    'hash': 55740,
    'name': 'Int Range Operator',
    'embedded': {
      'Int_Range_Operator_13344': {
        'hash': 13344,
        'name': 'Int Range Operator',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicIntRangeReceiver': {
            'hash': 2610542999,
            'name': 'LogicIntRangeReceiver'
          }
        }
      }
    }
  },
  'Iron_Boulder': {
    'hash': 45344,
    'name': 'Iron Boulder',
    'embedded': {
      'Iron_Boulder_49644': {
        'hash': 49644,
        'name': 'Iron Boulder',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Origin_48914': {
        'hash': 48914,
        'name': 'Spawn Origin',
        'savables': {}
      }
    }
  },
  'Iron_Boulder_Parts': {
    'hash': 18070,
    'name': 'Iron_Boulder_Parts',
    'embedded': {
      'Iron_Boulder_Part_01_64822': {
        'hash': 64822,
        'name': 'Iron_Boulder_Part_01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Iron_Boulder_Part_02_64818': {
        'hash': 64818,
        'name': 'Iron_Boulder_Part_02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Iron_Boulder_Part_03_64806': {
        'hash': 64806,
        'name': 'Iron_Boulder_Part_03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Iron_Boulder_Part_04_64814': {
        'hash': 64814,
        'name': 'Iron_Boulder_Part_04',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Iron_Boulder_Part_05_64810': {
        'hash': 64810,
        'name': 'Iron_Boulder_Part_05',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Iron_Boulder_Part_06_64826': {
        'hash': 64826,
        'name': 'Iron_Boulder_Part_06',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Iron_Boulder_Parts_64778': {
        'hash': 64778,
        'name': 'Iron_Boulder_Parts',
        'savables': {}
      }
    }
  },
  'Iron_Boulder_Training': {
    'hash': 10140,
    'name': 'Iron Boulder Training',
    'embedded': {
      'Iron_Boulder_Training_10130': {
        'hash': 10130,
        'name': 'Iron Boulder Training',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Origin_48914': {
        'hash': 48914,
        'name': 'Spawn Origin',
        'savables': {}
      }
    }
  },
  'Iron_Ingot': {
    'hash': 23012,
    'name': 'Iron Ingot',
    'embedded': {
      'Heat_Point_Collection_13170': {
        'hash': 13170,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Iron_Ingot_22900': {
        'hash': 22900,
        'name': 'Iron Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Iron_Ore': {
    'hash': 61652,
    'name': 'Iron Ore',
    'embedded': {
      'Iron_Ore_37686': {
        'hash': 37686,
        'name': 'Iron Ore',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Ka_Karimata_Arrow': {
    'hash': 960,
    'name': 'Ka Karimata Arrow',
    'embedded': {
      'Ka_Karimata_Arrow_43746': {
        'hash': 43746,
        'name': 'Ka Karimata Arrow',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Tip_58698': {
        'hash': 58698,
        'name': 'Tip',
        'savables': {}
      }
    }
  },
  'Katana': {
    'hash': 34994,
    'name': 'Katana',
    'embedded': {
      'Katana_36330': {
        'hash': 36330,
        'name': 'Katana',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Enchantable': {
            'hash': 4134534481,
            'name': 'Enchantable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Key_Standard': {
    'hash': 39744,
    'name': 'Key Standard',
    'embedded': {
      'Key_Standard_26420': {
        'hash': 26420,
        'name': 'Key Standard',
        'savables': {
          'KeyItem': {
            'hash': 414036426,
            'name': 'KeyItem'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Kunai': {
    'hash': 32002,
    'name': 'Kunai',
    'embedded': {
      'Kunai_36330': {
        'hash': 36330,
        'name': 'Kunai',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Embeddable': {
            'hash': 22446553,
            'name': 'Embeddable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Ladder': {
    'hash': 56168,
    'name': 'Ladder',
    'embedded': {
      'Ladder_53890': {
        'hash': 53890,
        'name': 'Ladder',
        'savables': {}
      }
    }
  },
  'Lantern': {
    'hash': 41760,
    'name': 'Lantern',
    'embedded': {
      'Fire_54948': {
        'hash': 54948,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Fuel_Dock_63110': {
        'hash': 63110,
        'name': 'Fuel Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Lantern_56450': {
        'hash': 56450,
        'name': 'Lantern',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'lantern_arm_28726': {
        'hash': 28726,
        'name': 'lantern_arm',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_bar_01_28734': {
        'hash': 28734,
        'name': 'lantern_bar_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_bar_02_28742': {
        'hash': 28742,
        'name': 'lantern_bar_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_bar_03_28770': {
        'hash': 28770,
        'name': 'lantern_bar_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_bar_04_28766': {
        'hash': 28766,
        'name': 'lantern_bar_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_bar_05_28738': {
        'hash': 28738,
        'name': 'lantern_bar_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_bar_06_28778': {
        'hash': 28778,
        'name': 'lantern_bar_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_bar_07_28750': {
        'hash': 28750,
        'name': 'lantern_bar_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_base_28746': {
        'hash': 28746,
        'name': 'lantern_base',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_face_28754': {
        'hash': 28754,
        'name': 'lantern_face',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_handle_28758': {
        'hash': 28758,
        'name': 'lantern_handle',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_topCap_28762': {
        'hash': 28762,
        'name': 'lantern_topCap',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_topSwivel_28774': {
        'hash': 28774,
        'name': 'lantern_topSwivel',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'lantern_visor_28730': {
        'hash': 28730,
        'name': 'lantern_visor',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Large_Cave_Mushroom': {
    'hash': 29690,
    'name': 'Large Cave Mushroom',
    'embedded': {
      'Large_Cave_Mushroom_30160': {
        'hash': 30160,
        'name': 'Large Cave Mushroom',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Large_Cave_Mushroom_Body_30160': {
        'hash': 30160,
        'name': 'Large Cave Mushroom Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Spawner_26386': {
        'hash': 26386,
        'name': 'Spawner',
        'savables': {}
      },
      'cave_mushroom_headEnd_jnt_22906': {
        'hash': 22906,
        'name': 'cave_mushroom_headEnd_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'cave_mushroom_spine_jnt_27926': {
        'hash': 27926,
        'name': 'cave_mushroom_spine_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Large_Cave_Mushroom_Cluster': {
    'hash': 2422,
    'name': 'Large Cave Mushroom Cluster',
    'embedded': {
      'Large_Cave_Mushroom_Cluster_61380': {
        'hash': 61380,
        'name': 'Large Cave Mushroom Cluster',
        'savables': {}
      }
    }
  },
  'Large_Cave_Mushroom_OLD': {
    'hash': 36866,
    'name': 'Large Cave Mushroom OLD',
    'embedded': {
      'Large_Cave_Mushroom_OLD_30160': {
        'hash': 30160,
        'name': 'Large Cave Mushroom OLD',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawner_26386': {
        'hash': 26386,
        'name': 'Spawner',
        'savables': {}
      },
      'cave_mushroom_headEnd_jnt_22906': {
        'hash': 22906,
        'name': 'cave_mushroom_headEnd_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'cave_mushroom_spine_jnt_27926': {
        'hash': 27926,
        'name': 'cave_mushroom_spine_jnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Large_Guard_Rectangle': {
    'hash': 9304,
    'name': 'Large Guard Rectangle',
    'embedded': {
      'Heat_Point_Collection_57820': {
        'hash': 57820,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Large_SwordType_Craft_51894': {
        'hash': 51894,
        'name': 'Insert Large SwordType Craft',
        'savables': {}
      },
      'Large_Guard_Rectangle_51938': {
        'hash': 51938,
        'name': 'Large Guard Rectangle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Large_SwordType_51896': {
        'hash': 51896,
        'name': 'Slot Large SwordType',
        'savables': {}
      }
    }
  },
  'Large_Guard_TShape': {
    'hash': 23552,
    'name': 'Large Guard TShape',
    'embedded': {
      'Heat_Point_Collection_58132': {
        'hash': 58132,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Large_SwordType_Craft_23506': {
        'hash': 23506,
        'name': 'Insert Large SwordType Craft',
        'savables': {}
      },
      'Large_Guard_TShape_23550': {
        'hash': 23550,
        'name': 'Large Guard TShape',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Large_SwordType_23508': {
        'hash': 23508,
        'name': 'Slot Large SwordType',
        'savables': {}
      }
    }
  },
  'Large_Guard_Wedge': {
    'hash': 39010,
    'name': 'Large Guard Wedge',
    'embedded': {
      'Heat_Point_Collection_58440': {
        'hash': 58440,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Large_SwordType_Craft_38964': {
        'hash': 38964,
        'name': 'Insert Large SwordType Craft',
        'savables': {}
      },
      'Large_Guard_Wedge_39008': {
        'hash': 39008,
        'name': 'Large Guard Wedge',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Large_SwordType_38966': {
        'hash': 38966,
        'name': 'Slot Large SwordType',
        'savables': {}
      }
    }
  },
  'Large_Longsword_Blade': {
    'hash': 56124,
    'name': 'Large Longsword Blade',
    'embedded': {
      'Heat_Point_Collection_62508': {
        'hash': 62508,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Large_SwordType_31944': {
        'hash': 31944,
        'name': 'Insert Large SwordType',
        'savables': {}
      },
      'Large_Longsword_Blade_53840': {
        'hash': 53840,
        'name': 'Large Longsword Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'large_longsword_LOD0_45786': {
        'hash': 45786,
        'name': 'large_longsword_LOD0',
        'savables': {}
      }
    }
  },
  'Large_Mythril_Boulder': {
    'hash': 53902,
    'name': 'Large Mythril Boulder',
    'embedded': {
      'Large_Mythril_Boulder_29328': {
        'hash': 29328,
        'name': 'Large Mythril Boulder',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Origin_18860': {
        'hash': 18860,
        'name': 'Spawn Origin',
        'savables': {}
      }
    }
  },
  'Large_Spiked_Wooden_Club': {
    'hash': 55914,
    'name': 'Large Spiked Wooden Club',
    'embedded': {
      'Large_Spiked_Wooden_Club_55724': {
        'hash': 55724,
        'name': 'Large Spiked Wooden Club',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Large_Sword': {
    'hash': 8374,
    'name': 'Large_Sword',
    'embedded': {}
  },
  'Lava_Pool': {
    'hash': 34696,
    'name': 'Lava Pool',
    'embedded': {
      'Heat_Bit_35218': {
        'hash': 35218,
        'name': 'Heat Bit',
        'savables': {}
      },
      'Hurt_Bit_30842': {
        'hash': 30842,
        'name': 'Hurt Bit',
        'savables': {}
      },
      'Lava_Pool_16578': {
        'hash': 16578,
        'name': 'Lava Pool',
        'savables': {}
      },
      'Slow_Bit_34974': {
        'hash': 34974,
        'name': 'Slow Bit',
        'savables': {}
      }
    }
  },
  'Leaderboard': {
    'hash': 44390,
    'name': 'Leaderboard',
    'embedded': {
      'Leaderboard_27564': {
        'hash': 27564,
        'name': 'Leaderboard',
        'savables': {
          'Leaderboard': {
            'hash': 3257374625,
            'name': 'Leaderboard'
          }
        }
      }
    }
  },
  'Lectern': {
    'hash': 59986,
    'name': 'Lectern',
    'embedded': {
      'Candle_Flame_30100': {
        'hash': 30100,
        'name': 'Candle Flame',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Lectern_57672': {
        'hash': 57672,
        'name': 'Lectern',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'BookRestrictor': {
            'hash': 2629079826,
            'name': 'BookRestrictor'
          }
        }
      }
    }
  },
  'Lectern_Flat': {
    'hash': 45828,
    'name': 'Lectern Flat',
    'embedded': {
      'Lectern_Flat_45826': {
        'hash': 45826,
        'name': 'Lectern Flat',
        'savables': {}
      }
    }
  },
  'Leveling_Dummy': {
    'hash': 44224,
    'name': 'Leveling Dummy',
    'embedded': {
      'Leveling_Dummy_39942': {
        'hash': 39942,
        'name': 'Leveling Dummy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'dummy_arm_l_01_jnt_46272': {
        'hash': 46272,
        'name': 'dummy_arm_l_01_jnt',
        'savables': {}
      },
      'dummy_arm_l_02_jnt_46248': {
        'hash': 46248,
        'name': 'dummy_arm_l_02_jnt',
        'savables': {}
      },
      'dummy_arm_l_03_jnt_46250': {
        'hash': 46250,
        'name': 'dummy_arm_l_03_jnt',
        'savables': {}
      },
      'dummy_arm_r_01_jnt_46246': {
        'hash': 46246,
        'name': 'dummy_arm_r_01_jnt',
        'savables': {}
      },
      'dummy_arm_r_02_jnt_46254': {
        'hash': 46254,
        'name': 'dummy_arm_r_02_jnt',
        'savables': {}
      },
      'dummy_arm_r_03_jnt_46256': {
        'hash': 46256,
        'name': 'dummy_arm_r_03_jnt',
        'savables': {}
      },
      'dummy_head_01_jnt_46270': {
        'hash': 46270,
        'name': 'dummy_head_01_jnt',
        'savables': {}
      },
      'dummy_head_02_jnt_46264': {
        'hash': 46264,
        'name': 'dummy_head_02_jnt',
        'savables': {}
      },
      'dummy_head_03_jnt_46262': {
        'hash': 46262,
        'name': 'dummy_head_03_jnt',
        'savables': {}
      },
      'dummy_neck_jnt_46268': {
        'hash': 46268,
        'name': 'dummy_neck_jnt',
        'savables': {}
      },
      'dummy_spineMid_jnt_46274': {
        'hash': 46274,
        'name': 'dummy_spineMid_jnt',
        'savables': {}
      },
      'dummy_spine_01_jnt_46258': {
        'hash': 46258,
        'name': 'dummy_spine_01_jnt',
        'savables': {}
      },
      'dummy_spine_02_jnt_46260': {
        'hash': 46260,
        'name': 'dummy_spine_02_jnt',
        'savables': {}
      },
      'dummy_spine_03_jnt_46266': {
        'hash': 46266,
        'name': 'dummy_spine_03_jnt',
        'savables': {}
      },
      'dummy_sternum_jnt_46252': {
        'hash': 46252,
        'name': 'dummy_sternum_jnt',
        'savables': {}
      }
    }
  },
  'Lever': {
    'hash': 27966,
    'name': 'Lever',
    'embedded': {}
  },
  'LightPuzzle_Test': {
    'hash': 8524,
    'name': 'LightPuzzle_Test',
    'embedded': {}
  },
  'Liquid_Pump': {
    'hash': 39174,
    'name': 'Liquid_Pump',
    'embedded': {}
  },
  'Lockbox': {
    'hash': 6974,
    'name': 'Lockbox',
    'embedded': {
      'Chunk_19700': {
        'hash': 19700,
        'name': 'Chunk',
        'savables': {}
      },
      'Hand_Touch_46540': {
        'hash': 46540,
        'name': 'Hand Touch',
        'savables': {}
      },
      'Lockbox_9078': {
        'hash': 9078,
        'name': 'Lockbox',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Lockbox_Docks': {
    'hash': 2226,
    'name': 'Lockbox Docks',
    'embedded': {
      'Bottom_Dock_1_48412': {
        'hash': 48412,
        'name': 'Bottom Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_2_48414': {
        'hash': 48414,
        'name': 'Bottom Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_3_48416': {
        'hash': 48416,
        'name': 'Bottom Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_4_48422': {
        'hash': 48422,
        'name': 'Bottom Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_5_48420': {
        'hash': 48420,
        'name': 'Bottom Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_6_48418': {
        'hash': 48418,
        'name': 'Bottom Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Lockbox_Docks_64298': {
        'hash': 64298,
        'name': 'Lockbox Docks',
        'savables': {}
      }
    }
  },
  'Log_Mallet': {
    'hash': 42518,
    'name': 'Log_Mallet',
    'embedded': {}
  },
  'Log_Mallet_v02': {
    'hash': 42030,
    'name': 'Log_Mallet_v02',
    'embedded': {}
  },
  'LogicBoolOneTimeActivate': {
    'hash': 28136,
    'name': 'LogicBoolOneTimeActivate',
    'embedded': {
      'LogicBoolOneTimeActivate_28066': {
        'hash': 28066,
        'name': 'LogicBoolOneTimeActivate',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      }
    }
  },
  'LogicFloatChangeOnBool': {
    'hash': 62220,
    'name': 'LogicFloatChangeOnBool',
    'embedded': {
      'LogicFloatChangeOnBool_56894': {
        'hash': 56894,
        'name': 'LogicFloatChangeOnBool',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicFloatChangeOnBool': {
            'hash': 200292695,
            'name': 'LogicFloatChangeOnBool'
          },
          'LogicFloatSender': {
            'hash': 2120963769,
            'name': 'LogicFloatSender'
          }
        }
      }
    }
  },
  'LogicFloatReset': {
    'hash': 57100,
    'name': 'LogicFloatReset',
    'embedded': {
      'LogicFloatReset_56894': {
        'hash': 56894,
        'name': 'LogicFloatReset',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'LogicFloatReset': {
            'hash': 3245685963,
            'name': 'LogicFloatReset'
          },
          'LogicFloatSender': {
            'hash': 2120963769,
            'name': 'LogicFloatSender'
          }
        }
      }
    }
  },
  'LogicReset': {
    'hash': 36976,
    'name': 'LogicReset',
    'embedded': {
      'LogicReset_42904': {
        'hash': 42904,
        'name': 'LogicReset',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicReset': {
            'hash': 1934129787,
            'name': 'LogicReset'
          }
        }
      }
    }
  },
  'Logic_Context': {
    'hash': 34630,
    'name': 'Logic Context',
    'embedded': {
      'Logic_Context_34154': {
        'hash': 34154,
        'name': 'Logic Context',
        'savables': {
          'GlobalLogicManager': {
            'hash': 967932020,
            'name': 'GlobalLogicManager'
          }
        }
      }
    }
  },
  'Logic_Int_To_Bool': {
    'hash': 2454,
    'name': 'Logic Int To Bool',
    'embedded': {
      'Logic_Int_To_Bool_9620': {
        'hash': 9620,
        'name': 'Logic Int To Bool',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicIntReceiver': {
            'hash': 1081247904,
            'name': 'LogicIntReceiver'
          },
          'LogicIntToBool': {
            'hash': 2253011220,
            'name': 'LogicIntToBool'
          }
        }
      }
    }
  },
  'Logic_Operator': {
    'hash': 13390,
    'name': 'Logic Operator',
    'embedded': {
      'Logic_Operator_13344': {
        'hash': 13344,
        'name': 'Logic Operator',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicGateReceiver': {
            'hash': 1391720462,
            'name': 'LogicGateReceiver'
          }
        }
      }
    }
  },
  'Long_S_Hook': {
    'hash': 20598,
    'name': 'Long S Hook',
    'embedded': {
      'Hangable_Dock_5626': {
        'hash': 5626,
        'name': 'Hangable Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Long_S_Hook_17940': {
        'hash': 17940,
        'name': 'Long S Hook',
        'savables': {}
      }
    }
  },
  'Loot_Module': {
    'hash': 29544,
    'name': 'Loot_Module',
    'embedded': {}
  },
  'MRK_Activation_Line': {
    'hash': 24096,
    'name': 'MRK Activation Line',
    'embedded': {
      'Glow_Ended_44912': {
        'hash': 44912,
        'name': 'Glow Ended',
        'savables': {}
      },
      'Glow_Started_44908': {
        'hash': 44908,
        'name': 'Glow Started',
        'savables': {}
      },
      'MRK_Activation_Line_22336': {
        'hash': 22336,
        'name': 'MRK Activation Line',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      }
    }
  },
  'MRK_Automated_Pipe_Hazard_Elevator': {
    'hash': 38546,
    'name': 'MRK Automated Pipe Hazard Elevator',
    'embedded': {
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      },
      'MRK_Automated_Pipe_Hazard_Elevator_21038': {
        'hash': 21038,
        'name': 'MRK Automated Pipe Hazard Elevator',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      },
      'Reset_Receiver_17642': {
        'hash': 17642,
        'name': 'Reset Receiver',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'Steam_Spray_61896': {
        'hash': 61896,
        'name': 'Steam Spray',
        'savables': {}
      },
      'Steam_Start_37968': {
        'hash': 37968,
        'name': 'Steam Start',
        'savables': {}
      },
      'mrk_risingPipe_body_20878': {
        'hash': 20878,
        'name': 'mrk_risingPipe_body',
        'savables': {
          'CurveOutput': {
            'hash': 2576456808,
            'name': 'CurveOutput'
          }
        }
      }
    }
  },
  'MRK_Automated_Pipe_Hazard_Elevator_7.6_Variant': {
    'hash': 61754,
    'name': 'MRK Automated Pipe Hazard Elevator 7.6 Variant',
    'embedded': {
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      },
      'MRK_Automated_Pipe_Hazard_Elevator_7.6_Variant_21038': {
        'hash': 21038,
        'name': 'MRK Automated Pipe Hazard Elevator 7.6 Variant',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      },
      'Reset_Receiver_17642': {
        'hash': 17642,
        'name': 'Reset Receiver',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'Steam_Spray_61896': {
        'hash': 61896,
        'name': 'Steam Spray',
        'savables': {}
      },
      'Steam_Start_37968': {
        'hash': 37968,
        'name': 'Steam Start',
        'savables': {}
      },
      'mrk_risingPipe_body_20878': {
        'hash': 20878,
        'name': 'mrk_risingPipe_body',
        'savables': {
          'CurveOutput': {
            'hash': 2576456808,
            'name': 'CurveOutput'
          }
        }
      }
    }
  },
  'MRK_Automated_Pipe_Hazard_Elevator_Large_Inverse_Variant': {
    'hash': 34664,
    'name': 'MRK Automated Pipe Hazard Elevator Large Inverse Variant',
    'embedded': {
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      },
      'MRK_Automated_Pipe_Hazard_Elevator_Large_Inverse_Variant_21038': {
        'hash': 21038,
        'name': 'MRK Automated Pipe Hazard Elevator Large Inverse Variant',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      },
      'Reset_Receiver_17642': {
        'hash': 17642,
        'name': 'Reset Receiver',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'Steam_Spray_61896': {
        'hash': 61896,
        'name': 'Steam Spray',
        'savables': {}
      },
      'Steam_Start_37968': {
        'hash': 37968,
        'name': 'Steam Start',
        'savables': {}
      },
      'mrk_risingPipe_body_20878': {
        'hash': 20878,
        'name': 'mrk_risingPipe_body',
        'savables': {
          'CurveOutput': {
            'hash': 2576456808,
            'name': 'CurveOutput'
          }
        }
      }
    }
  },
  'MRK_Automated_Pipe_Hazard_Elevator_Tall_Variant': {
    'hash': 37626,
    'name': 'MRK Automated Pipe Hazard Elevator Tall Variant',
    'embedded': {
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      },
      'MRK_Automated_Pipe_Hazard_Elevator_Tall_Variant_21038': {
        'hash': 21038,
        'name': 'MRK Automated Pipe Hazard Elevator Tall Variant',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      },
      'Reset_Receiver_17642': {
        'hash': 17642,
        'name': 'Reset Receiver',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'Steam_Spray_61896': {
        'hash': 61896,
        'name': 'Steam Spray',
        'savables': {}
      },
      'Steam_Start_37968': {
        'hash': 37968,
        'name': 'Steam Start',
        'savables': {}
      },
      'mrk_risingPipe_body_20878': {
        'hash': 20878,
        'name': 'mrk_risingPipe_body',
        'savables': {
          'CurveOutput': {
            'hash': 2576456808,
            'name': 'CurveOutput'
          }
        }
      }
    }
  },
  'MRK_Fuel_Core': {
    'hash': 65358,
    'name': 'MRK Fuel Core',
    'embedded': {
      'MRK_Fuel_Core_63598': {
        'hash': 63598,
        'name': 'MRK Fuel Core',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MRK_Horizontal_Lift': {
    'hash': 37822,
    'name': 'MRK Horizontal Lift',
    'embedded': {
      'MRK_Horizontal_Lift_37846': {
        'hash': 37846,
        'name': 'MRK Horizontal Lift',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'NetworkedFloatStream': {
            'hash': 2127962967,
            'name': 'NetworkedFloatStream'
          }
        }
      },
      'Platform_57570': {
        'hash': 57570,
        'name': 'Platform',
        'savables': {
          'WayPointPath': {
            'hash': 1063725326,
            'name': 'WayPointPath'
          }
        }
      }
    }
  },
  'MRK_Lantern_01': {
    'hash': 36130,
    'name': 'MRK Lantern_01',
    'embedded': {
      'MRK_Lantern_01_992': {
        'hash': 992,
        'name': 'MRK Lantern_01',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      }
    }
  },
  'MRK_Lantern_Fire': {
    'hash': 29468,
    'name': 'MRK Lantern Fire',
    'embedded': {
      'Fire_29440': {
        'hash': 29440,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MRK_Lantern_Fire_29466': {
        'hash': 29466,
        'name': 'MRK Lantern Fire',
        'savables': {
          'FireLogic': {
            'hash': 1509838052,
            'name': 'FireLogic'
          },
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      }
    }
  },
  'MRK_Large_Gear_Variant': {
    'hash': 29874,
    'name': 'MRK Large Gear Variant',
    'embedded': {
      'MRK_Large_Gear_Variant_26800': {
        'hash': 26800,
        'name': 'MRK Large Gear Variant',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'Start_Rotating_5010': {
        'hash': 5010,
        'name': 'Start Rotating',
        'savables': {}
      },
      'Stop_Rotating_4822': {
        'hash': 4822,
        'name': 'Stop Rotating',
        'savables': {}
      }
    }
  },
  'MRK_Large_Lever': {
    'hash': 12812,
    'name': 'MRK Large Lever',
    'embedded': {
      'MRK_Large_Lever_9436': {
        'hash': 9436,
        'name': 'MRK Large Lever',
        'savables': {
          'Lever': {
            'hash': 1594932294,
            'name': 'Lever'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      },
      'mrk_large_lever_handle_ROT_2408': {
        'hash': 2408,
        'name': 'mrk_large_lever_handle_ROT',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'mrk_large_lever_handle_grip_44324': {
        'hash': 44324,
        'name': 'mrk_large_lever_handle_grip',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'MRK_Liftable_Pipe_Gate': {
    'hash': 9344,
    'name': 'MRK Liftable Pipe Gate',
    'embedded': {
      'Bottom_Handle_14368': {
        'hash': 14368,
        'name': 'Bottom Handle',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_60880': {
        'hash': 60880,
        'name': 'Handle',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_9490': {
        'hash': 9490,
        'name': 'Handle',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'MRK_Liftable_Pipe_Gate_47896': {
        'hash': 47896,
        'name': 'MRK Liftable Pipe Gate',
        'savables': {}
      },
      'mrk_pipe_gate_door_41532': {
        'hash': 41532,
        'name': 'mrk_pipe_gate_door',
        'savables': {
          'MovePickup': {
            'hash': 1874870249,
            'name': 'MovePickup'
          }
        }
      }
    }
  },
  'MRK_Molten_Core': {
    'hash': 51764,
    'name': 'MRK Molten Core',
    'embedded': {
      'MRK_Molten_Core_21206': {
        'hash': 21206,
        'name': 'MRK Molten Core',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MRK_Pipe_Gate': {
    'hash': 49320,
    'name': 'MRK Pipe Gate',
    'embedded': {
      'MRK_Pipe_Gate_47896': {
        'hash': 47896,
        'name': 'MRK Pipe Gate',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'SlidingDoor': {
            'hash': 3583462804,
            'name': 'SlidingDoor'
          }
        }
      }
    }
  },
  'MRK_Puzzle_Core_01': {
    'hash': 14158,
    'name': 'MRK Puzzle Core 01',
    'embedded': {
      'MRK_Puzzle_Core_01_12014': {
        'hash': 12014,
        'name': 'MRK Puzzle Core 01',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'MRK_Puzzle_Core_02': {
    'hash': 28416,
    'name': 'MRK Puzzle Core 02',
    'embedded': {
      'MRK_Puzzle_Core_02_12014': {
        'hash': 12014,
        'name': 'MRK Puzzle Core 02',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'MRK_Puzzle_Core_Initial_Stand_01_Variant': {
    'hash': 60550,
    'name': 'MRK Puzzle Core Initial Stand 01 Variant',
    'embedded': {
      'MRK_Puzzle_Core_Initial_Stand_01_Variant_57012': {
        'hash': 57012,
        'name': 'MRK Puzzle Core Initial Stand 01 Variant',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicIntSender': {
            'hash': 2880587164,
            'name': 'LogicIntSender'
          },
          'PlaceItemPuzzleLogic': {
            'hash': 1001395212,
            'name': 'PlaceItemPuzzleLogic'
          }
        }
      },
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      }
    }
  },
  'MRK_Puzzle_Core_Initial_Stand_02_Variant': {
    'hash': 30056,
    'name': 'MRK Puzzle Core Initial Stand 02 Variant',
    'embedded': {
      'MRK_Puzzle_Core_Initial_Stand_02_Variant_57012': {
        'hash': 57012,
        'name': 'MRK Puzzle Core Initial Stand 02 Variant',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicIntSender': {
            'hash': 2880587164,
            'name': 'LogicIntSender'
          },
          'PlaceItemPuzzleLogic': {
            'hash': 1001395212,
            'name': 'PlaceItemPuzzleLogic'
          }
        }
      },
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      }
    }
  },
  'MRK_Puzzle_Core_Stand_01': {
    'hash': 58540,
    'name': 'MRK Puzzle Core Stand 01',
    'embedded': {
      'MRK_Puzzle_Core_Stand_01_57012': {
        'hash': 57012,
        'name': 'MRK Puzzle Core Stand 01',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicIntSender': {
            'hash': 2880587164,
            'name': 'LogicIntSender'
          },
          'PlaceItemPuzzleLogic': {
            'hash': 1001395212,
            'name': 'PlaceItemPuzzleLogic'
          }
        }
      },
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      }
    }
  },
  'MRK_Puzzle_Core_Stand_02': {
    'hash': 34594,
    'name': 'MRK Puzzle Core Stand 02',
    'embedded': {
      'MRK_Puzzle_Core_Stand_02_57012': {
        'hash': 57012,
        'name': 'MRK Puzzle Core Stand 02',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicIntSender': {
            'hash': 2880587164,
            'name': 'LogicIntSender'
          },
          'PlaceItemPuzzleLogic': {
            'hash': 1001395212,
            'name': 'PlaceItemPuzzleLogic'
          }
        }
      },
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      }
    }
  },
  'MRK_Slip_Door': {
    'hash': 14114,
    'name': 'MRK Slip Door',
    'embedded': {
      'Grip_22142': {
        'hash': 22142,
        'name': 'Grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_22248': {
        'hash': 22248,
        'name': 'Grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_Point_21894': {
        'hash': 21894,
        'name': 'Grip Point',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_Point_21920': {
        'hash': 21920,
        'name': 'Grip Point',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_Point_22194': {
        'hash': 22194,
        'name': 'Grip Point',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_Point_22228': {
        'hash': 22228,
        'name': 'Grip Point',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_Point_22240': {
        'hash': 22240,
        'name': 'Grip Point',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'MRK_Slip_Door_26828': {
        'hash': 26828,
        'name': 'MRK Slip Door',
        'savables': {}
      },
      'mrk_slipDoor_gate_26512': {
        'hash': 26512,
        'name': 'mrk_slipDoor_gate',
        'savables': {
          'MovePickup': {
            'hash': 1874870249,
            'name': 'MovePickup'
          }
        }
      }
    }
  },
  'MRK_Small_Lever': {
    'hash': 1330,
    'name': 'MRK Small Lever',
    'embedded': {
      'MRK_Small_Lever_9436': {
        'hash': 9436,
        'name': 'MRK Small Lever',
        'savables': {
          'Lever': {
            'hash': 1594932294,
            'name': 'Lever'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      },
      'mrk_large_lever_handle_grip_44324': {
        'hash': 44324,
        'name': 'mrk_large_lever_handle_grip',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'mrk_small_lever_handle_ROT_29376': {
        'hash': 29376,
        'name': 'mrk_small_lever_handle_ROT',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'MRK_Smelter_Gem_Pedestal_1': {
    'hash': 33006,
    'name': 'MRK Smelter Gem Pedestal 1',
    'embedded': {
      'MRK_Smelter_Gem_Pedestal_1_27194': {
        'hash': 27194,
        'name': 'MRK Smelter Gem Pedestal 1',
        'savables': {}
      },
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      }
    }
  },
  'MRK_Smelter_Gem_Pedestal_2': {
    'hash': 56376,
    'name': 'MRK Smelter Gem Pedestal 2',
    'embedded': {
      'MRK_Smelter_Gem_Pedestal_2_27194': {
        'hash': 27194,
        'name': 'MRK Smelter Gem Pedestal 2',
        'savables': {}
      },
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      }
    }
  },
  'MRK_Smelter_Gem_Pedestal_3': {
    'hash': 57516,
    'name': 'MRK Smelter Gem Pedestal 3',
    'embedded': {
      'MRK_Smelter_Gem_Pedestal_3_27194': {
        'hash': 27194,
        'name': 'MRK Smelter Gem Pedestal 3',
        'savables': {}
      },
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      }
    }
  },
  'MRK_TeleporterOut': {
    'hash': 49418,
    'name': 'MRK_TeleporterOut',
    'embedded': {
      'MRK_Tele_Target_38234': {
        'hash': 38234,
        'name': 'MRK Tele Target',
        'savables': {}
      },
      'MRK_TeleporterOut_7710': {
        'hash': 7710,
        'name': 'MRK_TeleporterOut',
        'savables': {
          'LogicVector3Receiver': {
            'hash': 1228539097,
            'name': 'LogicVector3Receiver'
          },
          'LogicVector3Sender': {
            'hash': 2026743731,
            'name': 'LogicVector3Sender'
          },
          'PositionProvider': {
            'hash': 3538443740,
            'name': 'PositionProvider'
          },
          'TeleportationPoint': {
            'hash': 3146178080,
            'name': 'TeleportationPoint'
          }
        }
      },
      'Teleporter_27092': {
        'hash': 27092,
        'name': 'Teleporter',
        'savables': {}
      }
    }
  },
  'MRK_Wheel_Bridge': {
    'hash': 61844,
    'name': 'MRK Wheel Bridge',
    'embedded': {
      'Crank_Rise_8062': {
        'hash': 8062,
        'name': 'Crank Rise',
        'savables': {}
      },
      'MRK_Wheel_Bridge_43884': {
        'hash': 43884,
        'name': 'MRK Wheel Bridge',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'LogicFloatSender': {
            'hash': 2120963769,
            'name': 'LogicFloatSender'
          },
          'RotatePickup': {
            'hash': 2498617949,
            'name': 'RotatePickup'
          }
        }
      },
      'mrk_large_handle_01_23224': {
        'hash': 23224,
        'name': 'mrk_large_handle_01',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'mrk_large_handle_01_23226': {
        'hash': 23226,
        'name': 'mrk_large_handle_01',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'mrk_large_handle_01_23228': {
        'hash': 23228,
        'name': 'mrk_large_handle_01',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'mrk_large_handle_01_23230': {
        'hash': 23230,
        'name': 'mrk_large_handle_01',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'mrk_large_handle_01_52566': {
        'hash': 52566,
        'name': 'mrk_large_handle_01',
        'savables': {
          'Crank': {
            'hash': 1588536425,
            'name': 'Crank'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'mrk_rotating_platform_ROT_35674': {
        'hash': 35674,
        'name': 'mrk_rotating_platform_ROT',
        'savables': {
          'WheelGrab': {
            'hash': 320224849,
            'name': 'WheelGrab'
          }
        }
      }
    }
  },
  'MRK_activation_lever': {
    'hash': 35030,
    'name': 'MRK_activation_lever',
    'embedded': {
      'Cost_Definition_20328': {
        'hash': 20328,
        'name': 'Cost Definition',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_22852': {
        'hash': 22852,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Gacha_Turn_15766': {
        'hash': 15766,
        'name': 'Gacha Turn',
        'savables': {}
      },
      'MRK_activation_lever_34108': {
        'hash': 34108,
        'name': 'MRK_activation_lever',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'MRK_ActivationLever': {
            'hash': 2069630919,
            'name': 'MRK_ActivationLever'
          }
        }
      },
      'Stop_Rotating_48244': {
        'hash': 48244,
        'name': 'Stop Rotating',
        'savables': {}
      },
      'Stop_Rotating_48620': {
        'hash': 48620,
        'name': 'Stop Rotating',
        'savables': {}
      },
      'mrk_activation_lever_ROT_8682': {
        'hash': 8682,
        'name': 'mrk_activation_lever_ROT',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'MRK_gate_01': {
    'hash': 45658,
    'name': 'MRK_gate_01',
    'embedded': {
      'MRK_gate_01_42408': {
        'hash': 42408,
        'name': 'MRK_gate_01',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'SlidingDoor': {
            'hash': 3583462804,
            'name': 'SlidingDoor'
          }
        }
      }
    }
  },
  'MRK_gate_01_1.5x_Variant': {
    'hash': 64136,
    'name': 'MRK_gate_01 1.5x Variant',
    'embedded': {
      'MRK_gate_01_1.5x_Variant_42408': {
        'hash': 42408,
        'name': 'MRK_gate_01 1.5x Variant',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'SlidingDoor': {
            'hash': 3583462804,
            'name': 'SlidingDoor'
          }
        }
      }
    }
  },
  'MRK_gate_02': {
    'hash': 54328,
    'name': 'MRK_gate_02',
    'embedded': {
      'MRK_gate_02_42408': {
        'hash': 42408,
        'name': 'MRK_gate_02',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'SlidingDoor': {
            'hash': 3583462804,
            'name': 'SlidingDoor'
          }
        }
      }
    }
  },
  'MRK_heartReceptacle_01': {
    'hash': 9566,
    'name': 'MRK_heartReceptacle_01',
    'embedded': {
      'Hand_Touch_13548': {
        'hash': 13548,
        'name': 'Hand Touch',
        'savables': {}
      },
      'MRK_heartReceptacle_01_7518': {
        'hash': 7518,
        'name': 'MRK_heartReceptacle_01',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'OneTimeUpgradeInteraction': {
            'hash': 3230087383,
            'name': 'OneTimeUpgradeInteraction'
          }
        }
      }
    }
  },
  'Mail_Deposit_Box': {
    'hash': 64204,
    'name': 'Mail Deposit Box',
    'embedded': {
      'Cost_Dock_9564': {
        'hash': 9564,
        'name': 'Cost Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_23190': {
        'hash': 23190,
        'name': 'Handle',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Mail_Deposit_Box_64110': {
        'hash': 64110,
        'name': 'Mail Deposit Box',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Scroller_64946': {
        'hash': 64946,
        'name': 'Scroller',
        'savables': {}
      },
      'Send_Dock_Area_33168': {
        'hash': 33168,
        'name': 'Send Dock Area',
        'savables': {}
      },
      'Sending_Dock_1_9562': {
        'hash': 9562,
        'name': 'Sending Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Sending_Dock_2_54962': {
        'hash': 54962,
        'name': 'Sending Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Sending_Dock_3_9442': {
        'hash': 9442,
        'name': 'Sending Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'mail_depositBox_swivel_51358': {
        'hash': 51358,
        'name': 'mail_depositBox_swivel',
        'savables': {}
      },
      'scroller_throttle_handMetal_LOD0_31026': {
        'hash': 31026,
        'name': 'scroller_throttle_handMetal_LOD0',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Main_Menu_Controller': {
    'hash': 58810,
    'name': 'Main_Menu_Controller',
    'embedded': {}
  },
  'Map_Board': {
    'hash': 60974,
    'name': 'Map Board',
    'embedded': {
      'Hand_Touch_46540': {
        'hash': 46540,
        'name': 'Hand Touch',
        'savables': {}
      },
      'Map_Board_63822': {
        'hash': 63822,
        'name': 'Map Board',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'Landmark': {
            'hash': 2590537994,
            'name': 'Landmark'
          },
          'LandmarkDiscoverZone': {
            'hash': 4095875831,
            'name': 'LandmarkDiscoverZone'
          },
          'MapBoard': {
            'hash': 2443660852,
            'name': 'MapBoard'
          }
        }
      }
    }
  },
  'Material_Box': {
    'hash': 46376,
    'name': 'Material Box',
    'embedded': {
      'Loot_Spawner_46196': {
        'hash': 46196,
        'name': 'Loot Spawner',
        'savables': {}
      },
      'Material_Box_46360': {
        'hash': 46360,
        'name': 'Material Box',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Pieces_Spawner_23704': {
        'hash': 23704,
        'name': 'Pieces Spawner',
        'savables': {}
      }
    }
  },
  'Material_Box_Pieces': {
    'hash': 42982,
    'name': 'Material Box Pieces',
    'embedded': {
      'Material_Box_Pieces_43372': {
        'hash': 43372,
        'name': 'Material Box Pieces',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Metal_Bow': {
    'hash': 25100,
    'name': 'Metal Bow',
    'embedded': {
      'Arrow_Dock_25108': {
        'hash': 25108,
        'name': 'Arrow Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Metal_Bow_25094': {
        'hash': 25094,
        'name': 'Metal Bow',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Bow_Blade_10188': {
        'hash': 10188,
        'name': 'Slot Bow Blade',
        'savables': {}
      },
      'Slot_Bow_Blade_252': {
        'hash': 252,
        'name': 'Slot Bow Blade',
        'savables': {}
      },
      'Slot_Deco_61122': {
        'hash': 61122,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_65334': {
        'hash': 65334,
        'name': 'Slot Deco',
        'savables': {}
      },
      'String_25106': {
        'hash': 25106,
        'name': 'String',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Metal_Hammer_Head': {
    'hash': 22876,
    'name': 'Metal Hammer Head',
    'embedded': {
      'Heat_Point_Collection_1368': {
        'hash': 1368,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_HammerType_End_Cap_52192': {
        'hash': 52192,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      },
      'Metal_Hammer_Head_42978': {
        'hash': 42978,
        'name': 'Metal Hammer Head',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Deco_37872': {
        'hash': 37872,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_48318': {
        'hash': 48318,
        'name': 'Slot Deco',
        'savables': {}
      }
    }
  },
  'Metal_Hebios_Katana_Blade': {
    'hash': 17174,
    'name': 'Metal Hebios Katana Blade',
    'embedded': {
      'Insert_Straight_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight SwordType',
        'savables': {}
      },
      'Metal_Hebios_Katana_Blade_57166': {
        'hash': 57166,
        'name': 'Metal Hebios Katana Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'katana_blade_part_full_30124': {
        'hash': 30124,
        'name': 'katana_blade_part_full',
        'savables': {}
      }
    }
  },
  'Metal_Hebios_Naginata_Blade': {
    'hash': 15124,
    'name': 'Metal Hebios Naginata Blade',
    'embedded': {
      'Insert_Straight_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight SwordType',
        'savables': {}
      },
      'Metal_Hebios_Naginata_Blade_57606': {
        'hash': 57606,
        'name': 'Metal Hebios Naginata Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'naginata_blade_LOD0_56264': {
        'hash': 56264,
        'name': 'naginata_blade_LOD0',
        'savables': {}
      }
    }
  },
  'Metal_Hebios_Sai_Blade': {
    'hash': 53124,
    'name': 'Metal Hebios Sai Blade',
    'embedded': {
      'Insert_Straight_Short_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight Short SwordType',
        'savables': {}
      },
      'Metal_Hebios_Sai_Blade_57606': {
        'hash': 57606,
        'name': 'Metal Hebios Sai Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'sai_blade_LOD0_11144': {
        'hash': 11144,
        'name': 'sai_blade_LOD0',
        'savables': {}
      }
    }
  },
  'Metal_Hebios_Wakizashi_Blade': {
    'hash': 48902,
    'name': 'Metal Hebios Wakizashi Blade',
    'embedded': {
      'Insert_Straight_Short_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight Short SwordType',
        'savables': {}
      },
      'Metal_Hebios_Wakizashi_Blade_57606': {
        'hash': 57606,
        'name': 'Metal Hebios Wakizashi Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'wakizashi_blade_26702': {
        'hash': 26702,
        'name': 'wakizashi_blade',
        'savables': {}
      }
    }
  },
  'Metal_Tap': {
    'hash': 17334,
    'name': 'Metal Tap',
    'embedded': {
      'Metal_Tap_20796': {
        'hash': 20796,
        'name': 'Metal Tap',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Metal_Wall_Hook': {
    'hash': 61180,
    'name': 'Metal_Wall_Hook',
    'embedded': {}
  },
  'Mining_Base_Generator': {
    'hash': 6714,
    'name': 'Mining Base Generator',
    'embedded': {
      'Mining_Base_Generator_6374': {
        'hash': 6374,
        'name': 'Mining Base Generator',
        'savables': {}
      }
    }
  },
  'Mining_Path': {
    'hash': 30950,
    'name': 'Mining Path',
    'embedded': {
      'Mining_Path_30946': {
        'hash': 30946,
        'name': 'Mining Path',
        'savables': {
          'PopulationPath': {
            'hash': 7704646,
            'name': 'PopulationPath'
          }
        }
      }
    }
  },
  'Modular_Backpack': {
    'hash': 12060,
    'name': 'Modular_Backpack',
    'embedded': {}
  },
  'Modular_Hook': {
    'hash': 60188,
    'name': 'Modular_Hook',
    'embedded': {}
  },
  'Modular_Sack': {
    'hash': 8344,
    'name': 'Modular_Sack',
    'embedded': {}
  },
  'Mother_Fern': {
    'hash': 65004,
    'name': 'Mother Fern',
    'embedded': {
      'Death_Fern_AI_29794': {
        'hash': 29794,
        'name': 'Death Fern AI',
        'savables': {}
      },
      'Emit_Gas_Spawner_16984': {
        'hash': 16984,
        'name': 'Emit Gas Spawner',
        'savables': {}
      },
      'Mesh_15308': {
        'hash': 15308,
        'name': 'Mesh',
        'savables': {}
      },
      'Mother_Fern_37626': {
        'hash': 37626,
        'name': 'Mother Fern',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Seed_Spray_1172': {
        'hash': 1172,
        'name': 'Seed Spray',
        'savables': {}
      }
    }
  },
  'Mother_Fern_Seed_Spray': {
    'hash': 26710,
    'name': 'Mother Fern Seed Spray',
    'embedded': {
      'Mother_Fern_Seed_Spray_44772': {
        'hash': 44772,
        'name': 'Mother Fern Seed Spray',
        'savables': {}
      }
    }
  },
  'Mould': {
    'hash': 14826,
    'name': 'Mould',
    'embedded': {
      'Mould_14710': {
        'hash': 14710,
        'name': 'Mould',
        'savables': {
          'Mould': {
            'hash': 391977879,
            'name': 'Mould'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Mould_Press_Hebios': {
    'hash': 2594,
    'name': 'Mould Press Hebios',
    'embedded': {
      'Input_36080': {
        'hash': 36080,
        'name': 'Input',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Lever_Physics_45996': {
        'hash': 45996,
        'name': 'Lever Physics',
        'savables': {
          'Lever': {
            'hash': 1594932294,
            'name': 'Lever'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Mould_Press_Hebios_65312': {
        'hash': 65312,
        'name': 'Mould Press Hebios',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Output_52720': {
        'hash': 52720,
        'name': 'Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Mould_Press_Standard': {
    'hash': 13362,
    'name': 'Mould Press Standard',
    'embedded': {
      'Input_36080': {
        'hash': 36080,
        'name': 'Input',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Lever_Physics_45996': {
        'hash': 45996,
        'name': 'Lever Physics',
        'savables': {
          'Lever': {
            'hash': 1594932294,
            'name': 'Lever'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Mould_Press_Standard_65312': {
        'hash': 65312,
        'name': 'Mould Press Standard',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Output_52720': {
        'hash': 52720,
        'name': 'Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Mould_Rack': {
    'hash': 4070,
    'name': 'Mould Rack',
    'embedded': {
      'Dock_57418': {
        'hash': 57418,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_57450': {
        'hash': 57450,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_57456': {
        'hash': 57456,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_57470': {
        'hash': 57470,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_57504': {
        'hash': 57504,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_57528': {
        'hash': 57528,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_57550': {
        'hash': 57550,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_57556': {
        'hash': 57556,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Mould_Rack_498': {
        'hash': 498,
        'name': 'Mould Rack',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Rope_Grab_57800': {
        'hash': 57800,
        'name': 'Rope Grab',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'RopeGrab': {
            'hash': 237360636,
            'name': 'RopeGrab'
          }
        }
      },
      'Rope_Length_57794': {
        'hash': 57794,
        'name': 'Rope Length',
        'savables': {}
      }
    }
  },
  'Mould_Restriction_Zone': {
    'hash': 4900,
    'name': 'Mould Restriction Zone',
    'embedded': {
      'Mould_Restriction_Zone_2804': {
        'hash': 2804,
        'name': 'Mould Restriction Zone',
        'savables': {
          'MouldRestrictor': {
            'hash': 1571096900,
            'name': 'MouldRestrictor'
          }
        }
      }
    }
  },
  'MushroomBrown_Full_Burnt': {
    'hash': 47126,
    'name': 'MushroomBrown Full Burnt',
    'embedded': {
      'Cooking_35920': {
        'hash': 35920,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomBrown_Full_Burnt_36010': {
        'hash': 36010,
        'name': 'MushroomBrown Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomBrown_Full_Cooked': {
    'hash': 46510,
    'name': 'MushroomBrown Full Cooked',
    'embedded': {
      'Cooking_32900': {
        'hash': 32900,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomBrown_Full_Cooked_32990': {
        'hash': 32990,
        'name': 'MushroomBrown Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomBrown_Full_Ripe': {
    'hash': 61666,
    'name': 'MushroomBrown Full Ripe',
    'embedded': {
      'Cooking_30802': {
        'hash': 30802,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomBrown_Full_Ripe_30892': {
        'hash': 30892,
        'name': 'MushroomBrown Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomBrown_Half_Burnt': {
    'hash': 53372,
    'name': 'MushroomBrown Half Burnt',
    'embedded': {
      'Cooking_28740': {
        'hash': 28740,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomBrown_Half_Burnt_28794': {
        'hash': 28794,
        'name': 'MushroomBrown Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomBrown_Half_Cooked': {
    'hash': 50916,
    'name': 'MushroomBrown Half Cooked',
    'embedded': {
      'Cooking_26756': {
        'hash': 26756,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomBrown_Half_Cooked_26810': {
        'hash': 26810,
        'name': 'MushroomBrown Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomBrown_Half_Ripe': {
    'hash': 48460,
    'name': 'MushroomBrown Half Ripe',
    'embedded': {
      'Cooking_24846': {
        'hash': 24846,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomBrown_Half_Ripe_24900': {
        'hash': 24900,
        'name': 'MushroomBrown Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveLarge_Half_Burnt': {
    'hash': 60330,
    'name': 'MushroomCaveLarge Half Burnt',
    'embedded': {
      'Cooking_60736': {
        'hash': 60736,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveLarge_Half_Burnt_61496': {
        'hash': 61496,
        'name': 'MushroomCaveLarge Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveLarge_Half_Cooked': {
    'hash': 9414,
    'name': 'MushroomCaveLarge Half Cooked',
    'embedded': {
      'Cooking_55004': {
        'hash': 55004,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveLarge_Half_Cooked_55764': {
        'hash': 55764,
        'name': 'MushroomCaveLarge Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveLarge_Half_Ripe': {
    'hash': 54182,
    'name': 'MushroomCaveLarge Half Ripe',
    'embedded': {
      'Cooking_49572': {
        'hash': 49572,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveLarge_Half_Ripe_50332': {
        'hash': 50332,
        'name': 'MushroomCaveLarge Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveSmall_Full_Burnt': {
    'hash': 29148,
    'name': 'MushroomCaveSmall Full Burnt',
    'embedded': {
      'Cooking_27474': {
        'hash': 27474,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveSmall_Full_Burnt_28332': {
        'hash': 28332,
        'name': 'MushroomCaveSmall Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveSmall_Full_Cooked': {
    'hash': 40066,
    'name': 'MushroomCaveSmall Full Cooked',
    'embedded': {
      'Cooking_34902': {
        'hash': 34902,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveSmall_Full_Cooked_35760': {
        'hash': 35760,
        'name': 'MushroomCaveSmall Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveSmall_Full_Ripe': {
    'hash': 58270,
    'name': 'MushroomCaveSmall Full Ripe',
    'embedded': {
      'Cooking_28844': {
        'hash': 28844,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveSmall_Full_Ripe_29702': {
        'hash': 29702,
        'name': 'MushroomCaveSmall Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveSmall_Half_Burnt': {
    'hash': 47142,
    'name': 'MushroomCaveSmall Half Burnt',
    'embedded': {
      'Cooking_23588': {
        'hash': 23588,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveSmall_Half_Burnt_23644': {
        'hash': 23644,
        'name': 'MushroomCaveSmall Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveSmall_Half_Cooked': {
    'hash': 44488,
    'name': 'MushroomCaveSmall Half Cooked',
    'embedded': {
      'Cooking_21474': {
        'hash': 21474,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveSmall_Half_Cooked_21530': {
        'hash': 21530,
        'name': 'MushroomCaveSmall Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomCaveSmall_Half_Ripe': {
    'hash': 41834,
    'name': 'MushroomCaveSmall Half Ripe',
    'embedded': {
      'Cooking_19434': {
        'hash': 19434,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomCaveSmall_Half_Ripe_19490': {
        'hash': 19490,
        'name': 'MushroomCaveSmall Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomGlowing_Full_Burnt': {
    'hash': 43856,
    'name': 'MushroomGlowing Full Burnt',
    'embedded': {
      'Cooking_13584': {
        'hash': 13584,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomGlowing_Full_Burnt_41450': {
        'hash': 41450,
        'name': 'MushroomGlowing Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomGlowing_Full_Cooked': {
    'hash': 41428,
    'name': 'MushroomGlowing Full Cooked',
    'embedded': {
      'Cooking_6452': {
        'hash': 6452,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomGlowing_Full_Cooked_14334': {
        'hash': 14334,
        'name': 'MushroomGlowing Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomGlowing_Full_Ripe': {
    'hash': 38966,
    'name': 'MushroomGlowing Full Ripe',
    'embedded': {
      'Cooking_1062': {
        'hash': 1062,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomGlowing_Full_Ripe_33808': {
        'hash': 33808,
        'name': 'MushroomGlowing Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomGlowing_Half_Burnt': {
    'hash': 36504,
    'name': 'MushroomGlowing Half Burnt',
    'embedded': {
      'Cooking_61912': {
        'hash': 61912,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomGlowing_Half_Burnt_37030': {
        'hash': 37030,
        'name': 'MushroomGlowing Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomGlowing_Half_Cooked': {
    'hash': 34042,
    'name': 'MushroomGlowing Half Cooked',
    'embedded': {
      'Cooking_60048': {
        'hash': 60048,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomGlowing_Half_Cooked_14126': {
        'hash': 14126,
        'name': 'MushroomGlowing Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomGlowing_Half_Ripe': {
    'hash': 31580,
    'name': 'MushroomGlowing Half Ripe',
    'embedded': {
      'Cooking_58186': {
        'hash': 58186,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomGlowing_Half_Ripe_59620': {
        'hash': 59620,
        'name': 'MushroomGlowing Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomRed_Full_Burnt': {
    'hash': 46660,
    'name': 'MushroomRed Full Burnt',
    'embedded': {
      'Cooking_15932': {
        'hash': 15932,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomRed_Full_Burnt_16724': {
        'hash': 16724,
        'name': 'MushroomRed Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomRed_Full_Cooked': {
    'hash': 46888,
    'name': 'MushroomRed Full Cooked',
    'embedded': {
      'Cooking_29424': {
        'hash': 29424,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomRed_Full_Cooked_30216': {
        'hash': 30216,
        'name': 'MushroomRed Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomRed_Full_Ripe': {
    'hash': 61658,
    'name': 'MushroomRed Full Ripe',
    'embedded': {
      'Cooking_23868': {
        'hash': 23868,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomRed_Full_Ripe_24660': {
        'hash': 24660,
        'name': 'MushroomRed Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomRed_Half_Burnt': {
    'hash': 43272,
    'name': 'MushroomRed Half Burnt',
    'embedded': {
      'Cooking_19050': {
        'hash': 19050,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomRed_Half_Burnt_19104': {
        'hash': 19104,
        'name': 'MushroomRed Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomRed_Half_Cooked': {
    'hash': 40816,
    'name': 'MushroomRed Half Cooked',
    'embedded': {
      'Cooking_17118': {
        'hash': 17118,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomRed_Half_Cooked_17172': {
        'hash': 17172,
        'name': 'MushroomRed Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'MushroomRed_Half_Ripe': {
    'hash': 38360,
    'name': 'MushroomRed Half Ripe',
    'embedded': {
      'Cooking_15260': {
        'hash': 15260,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'MushroomRed_Half_Ripe_15314': {
        'hash': 15314,
        'name': 'MushroomRed Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Mushroom_Fairy_Circle_Puzzle': {
    'hash': 46706,
    'name': 'Mushroom Fairy Circle Puzzle',
    'embedded': {
      'Mushroom_Fairy_Circle_Puzzle_28402': {
        'hash': 28402,
        'name': 'Mushroom Fairy Circle Puzzle',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'SpawnInCircle': {
            'hash': 1714180166,
            'name': 'SpawnInCircle'
          }
        }
      }
    }
  },
  'Mushroom_Fairy_Circle_Puzzle_OLD': {
    'hash': 44688,
    'name': 'Mushroom_Fairy_Circle_Puzzle_OLD',
    'embedded': {}
  },
  'Mushroom_Fairy_Circle_Puzzle_Teleport': {
    'hash': 28040,
    'name': 'Mushroom Fairy Circle Puzzle Teleport',
    'embedded': {
      'Mushroom_Fairy_Circle_Puzzle_Teleport_8726': {
        'hash': 8726,
        'name': 'Mushroom Fairy Circle Puzzle Teleport',
        'savables': {
          'LogicVector3Receiver': {
            'hash': 1228539097,
            'name': 'LogicVector3Receiver'
          },
          'LogicVector3Sender': {
            'hash': 2026743731,
            'name': 'LogicVector3Sender'
          },
          'PositionProvider': {
            'hash': 3538443740,
            'name': 'PositionProvider'
          },
          'SpawnInCircle': {
            'hash': 1714180166,
            'name': 'SpawnInCircle'
          },
          'TeleportationPoint': {
            'hash': 3146178080,
            'name': 'TeleportationPoint'
          }
        }
      }
    }
  },
  'Mushroom_Mix_Recipe_Burnt_Stew': {
    'hash': 27398,
    'name': 'Mushroom_Mix_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Mushroom_Mix_Recipe_Cooked_Stew': {
    'hash': 27376,
    'name': 'Mushroom_Mix_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Mushroom_Mix_Recipe_Raw_Stew': {
    'hash': 14914,
    'name': 'Mushroom_Mix_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Mushroom_Poultry_Recipe_Burnt_Stew': {
    'hash': 54614,
    'name': 'Mushroom_Poultry_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Mushroom_Poultry_Recipe_Cooked_Stew': {
    'hash': 55358,
    'name': 'Mushroom_Poultry_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Mushroom_Poultry_Recipe_Raw_Stew': {
    'hash': 55978,
    'name': 'Mushroom_Poultry_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Mushroom_Recipe_Burnt_Stew': {
    'hash': 30560,
    'name': 'Mushroom_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Mushroom_Recipe_Cooked_Stew': {
    'hash': 31606,
    'name': 'Mushroom_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Mushroom_Recipe_Raw_Stew': {
    'hash': 32650,
    'name': 'Mushroom_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Mythril_Boulder': {
    'hash': 27368,
    'name': 'Mythril Boulder',
    'embedded': {
      'Mythril_Boulder_29328': {
        'hash': 29328,
        'name': 'Mythril Boulder',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Origin_18860': {
        'hash': 18860,
        'name': 'Spawn Origin',
        'savables': {}
      }
    }
  },
  'Mythril_Boulder_Parts': {
    'hash': 43522,
    'name': 'Mythril_Boulder_Parts',
    'embedded': {
      'Mythril_Boulder_Parts_59770': {
        'hash': 59770,
        'name': 'Mythril_Boulder_Parts',
        'savables': {}
      },
      'Mythril_Boulder_part_01_59808': {
        'hash': 59808,
        'name': 'Mythril_Boulder_part_01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Mythril_Boulder_part_02_59820': {
        'hash': 59820,
        'name': 'Mythril_Boulder_part_02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Mythril_Boulder_part_03_59816': {
        'hash': 59816,
        'name': 'Mythril_Boulder_part_03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Mythril_Boulder_part_04_59804': {
        'hash': 59804,
        'name': 'Mythril_Boulder_part_04',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Mythril_Boulder_part_05_59812': {
        'hash': 59812,
        'name': 'Mythril_Boulder_part_05',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Mythril_Ingot': {
    'hash': 24774,
    'name': 'Mythril Ingot',
    'embedded': {
      'Heat_Point_Collection_13294': {
        'hash': 13294,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Mythril_Ingot_24662': {
        'hash': 24662,
        'name': 'Mythril Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Mythril_Ore': {
    'hash': 11702,
    'name': 'Mythril Ore',
    'embedded': {
      'Mythril_Ore_15610': {
        'hash': 15610,
        'name': 'Mythril Ore',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Naginata': {
    'hash': 41052,
    'name': 'Naginata',
    'embedded': {
      'Naginata_36330': {
        'hash': 36330,
        'name': 'Naginata',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Enchantable': {
            'hash': 4134534481,
            'name': 'Enchantable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Name_Proxy': {
    'hash': 15340,
    'name': 'Name_Proxy',
    'embedded': {}
  },
  'Nand': {
    'hash': 42426,
    'name': 'Nand',
    'embedded': {}
  },
  'Navigation_wheel': {
    'hash': 20416,
    'name': 'Navigation_wheel',
    'embedded': {
      'Grip_(1)_54050': {
        'hash': 54050,
        'name': 'Grip (1)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(2)_54614': {
        'hash': 54614,
        'name': 'Grip (2)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(3)_56370': {
        'hash': 56370,
        'name': 'Grip (3)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(4)_53470': {
        'hash': 53470,
        'name': 'Grip (4)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_56728': {
        'hash': 56728,
        'name': 'Grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Navigation_wheel_16790': {
        'hash': 16790,
        'name': 'Navigation_wheel',
        'savables': {}
      }
    }
  },
  'New_Tree_Grower': {
    'hash': 62444,
    'name': 'New Tree Grower',
    'embedded': {
      'New_Tree_Grower_52858': {
        'hash': 52858,
        'name': 'New Tree Grower',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Non_Recipe_Burnt_Stew': {
    'hash': 48634,
    'name': 'Non_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Non_Recipe_Cooked_Stew': {
    'hash': 49314,
    'name': 'Non_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Non_Recipe_Raw_Stew': {
    'hash': 49962,
    'name': 'Non_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Nor': {
    'hash': 42420,
    'name': 'Nor',
    'embedded': {}
  },
  'Not': {
    'hash': 42414,
    'name': 'Not',
    'embedded': {}
  },
  'Oak_Tree_Growth': {
    'hash': 48238,
    'name': 'Oak Tree Growth',
    'embedded': {
      'Oak_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Oak Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Oak_Tree_Seed': {
    'hash': 17302,
    'name': 'Oak Tree Seed',
    'embedded': {
      'Oak_Tree_Seed_35258': {
        'hash': 35258,
        'name': 'Oak Tree Seed',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Oak_Tree_Stage_1': {
    'hash': 17412,
    'name': 'Oak Tree Stage 1',
    'embedded': {
      'Oak_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Oak Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Obstacle_Path': {
    'hash': 62838,
    'name': 'Obstacle Path',
    'embedded': {
      'Obstacle_Path_30946': {
        'hash': 30946,
        'name': 'Obstacle Path',
        'savables': {
          'PopulationPath': {
            'hash': 7704646,
            'name': 'PopulationPath'
          }
        }
      }
    }
  },
  'One_Time_Upgrade_Station_Health': {
    'hash': 46992,
    'name': 'One Time Upgrade Station Health',
    'embedded': {
      'One_Time_Upgrade_Station_Health_46540': {
        'hash': 46540,
        'name': 'One Time Upgrade Station Health',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'OneTimeUpgradeInteraction': {
            'hash': 3230087383,
            'name': 'OneTimeUpgradeInteraction'
          }
        }
      }
    }
  },
  'Onion_Full_Burnt': {
    'hash': 48718,
    'name': 'Onion Full Burnt',
    'embedded': {
      'Cooking_61106': {
        'hash': 61106,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Onion_Full_Burnt_48300': {
        'hash': 48300,
        'name': 'Onion Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Onion_Full_Cooked': {
    'hash': 48214,
    'name': 'Onion Full Cooked',
    'embedded': {
      'Cooking_60678': {
        'hash': 60678,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Onion_Full_Cooked_47812': {
        'hash': 47812,
        'name': 'Onion Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Onion_Full_Ripe': {
    'hash': 47730,
    'name': 'Onion Full Ripe',
    'embedded': {
      'Cooking_58282': {
        'hash': 58282,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Leaves_Parent_20548': {
        'hash': 20548,
        'name': 'Leaves Parent',
        'savables': {}
      },
      'Onion_Full_Ripe_44704': {
        'hash': 44704,
        'name': 'Onion Full Ripe',
        'savables': {
          'BuildupPickup': {
            'hash': 3373651539,
            'name': 'BuildupPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Roots_Parent_17652': {
        'hash': 17652,
        'name': 'Roots Parent',
        'savables': {}
      }
    }
  },
  'Onion_Full_Unripe': {
    'hash': 43966,
    'name': 'Onion Full Unripe',
    'embedded': {
      'Cooking_57758': {
        'hash': 57758,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Onion_Full_Unripe_43436': {
        'hash': 43436,
        'name': 'Onion Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Onion_Half_Burnt': {
    'hash': 59314,
    'name': 'Onion Half Burnt',
    'embedded': {
      'Cooking_33410': {
        'hash': 33410,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Onion_Half_Burnt_58976': {
        'hash': 58976,
        'name': 'Onion Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Onion_Half_Cooked': {
    'hash': 58910,
    'name': 'Onion Half Cooked',
    'embedded': {
      'Cooking_33064': {
        'hash': 33064,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Onion_Half_Cooked_58572': {
        'hash': 58572,
        'name': 'Onion Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Onion_Half_Ripe': {
    'hash': 58506,
    'name': 'Onion Half Ripe',
    'embedded': {
      'Cooking_32718': {
        'hash': 32718,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Onion_Half_Ripe_58168': {
        'hash': 58168,
        'name': 'Onion Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Onion_Half_Unripe': {
    'hash': 58102,
    'name': 'Onion Half Unripe',
    'embedded': {
      'Cooking_32372': {
        'hash': 32372,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Onion_Half_Unripe_57764': {
        'hash': 57764,
        'name': 'Onion Half Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Onion_Leaves': {
    'hash': 29078,
    'name': 'Onion Leaves',
    'embedded': {
      'Onion_Leaves_31538': {
        'hash': 31538,
        'name': 'Onion Leaves',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'PullPickup_51602': {
        'hash': 51602,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Onion_Roots': {
    'hash': 32068,
    'name': 'Onion Roots',
    'embedded': {
      'Onion_Roots_47660': {
        'hash': 47660,
        'name': 'Onion Roots',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'PullPickup_32872': {
        'hash': 32872,
        'name': 'PullPickup',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Or': {
    'hash': 42416,
    'name': 'Or',
    'embedded': {}
  },
  'Orchi_Ingot': {
    'hash': 16464,
    'name': 'Orchi Ingot',
    'embedded': {
      'Heat_Point_Collection_13422': {
        'hash': 13422,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Orchi_Ingot_32738': {
        'hash': 32738,
        'name': 'Orchi Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Ore_Bag': {
    'hash': 64560,
    'name': 'Ore Bag',
    'embedded': {
      'Bag_Body_42972': {
        'hash': 42972,
        'name': 'Bag Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Dock_BM_63062': {
        'hash': 63062,
        'name': 'Dock BM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_L_63242': {
        'hash': 63242,
        'name': 'Dock L',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_R_63236': {
        'hash': 63236,
        'name': 'Dock R',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TM_63222': {
        'hash': 63222,
        'name': 'Dock TM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Ore_Bag_43012': {
        'hash': 43012,
        'name': 'Ore Bag',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Bag_Attach_30776': {
        'hash': 30776,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_55164': {
        'hash': 55164,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_62396': {
        'hash': 62396,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Tool_Attachment_36292': {
        'hash': 36292,
        'name': 'Slot Bag Tool Attachment',
        'savables': {}
      },
      'Slot_Bag_Tool_Attachment_36386': {
        'hash': 36386,
        'name': 'Slot Bag Tool Attachment',
        'savables': {}
      },
      'ore_bag_frame_01_44248': {
        'hash': 44248,
        'name': 'ore_bag_frame_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_frame_02_44244': {
        'hash': 44244,
        'name': 'ore_bag_frame_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_frame_03_44312': {
        'hash': 44312,
        'name': 'ore_bag_frame_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_frame_04_44308': {
        'hash': 44308,
        'name': 'ore_bag_frame_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_rim_bottom_44264': {
        'hash': 44264,
        'name': 'ore_bag_rim_bottom',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_rim_top_44288': {
        'hash': 44288,
        'name': 'ore_bag_rim_top',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_sack_44268': {
        'hash': 44268,
        'name': 'ore_bag_sack',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_01_44328': {
        'hash': 44328,
        'name': 'ore_bag_stick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_02_44296': {
        'hash': 44296,
        'name': 'ore_bag_stick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_03_44284': {
        'hash': 44284,
        'name': 'ore_bag_stick_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_04_44228': {
        'hash': 44228,
        'name': 'ore_bag_stick_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_05_44224': {
        'hash': 44224,
        'name': 'ore_bag_stick_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_06_44304': {
        'hash': 44304,
        'name': 'ore_bag_stick_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_07_44300': {
        'hash': 44300,
        'name': 'ore_bag_stick_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_08_44240': {
        'hash': 44240,
        'name': 'ore_bag_stick_08',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_09_44236': {
        'hash': 44236,
        'name': 'ore_bag_stick_09',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_10_44324': {
        'hash': 44324,
        'name': 'ore_bag_stick_10',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_11_44320': {
        'hash': 44320,
        'name': 'ore_bag_stick_11',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_12_44280': {
        'hash': 44280,
        'name': 'ore_bag_stick_12',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_stick_13_44232': {
        'hash': 44232,
        'name': 'ore_bag_stick_13',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_strawBind_01_44316': {
        'hash': 44316,
        'name': 'ore_bag_strawBind_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_strawBind_02_44260': {
        'hash': 44260,
        'name': 'ore_bag_strawBind_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_strawBind_03_44276': {
        'hash': 44276,
        'name': 'ore_bag_strawBind_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_strawBind_04_44272': {
        'hash': 44272,
        'name': 'ore_bag_strawBind_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_strawBind_05_44256': {
        'hash': 44256,
        'name': 'ore_bag_strawBind_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_strawBind_06_44252': {
        'hash': 44252,
        'name': 'ore_bag_strawBind_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_strawBind_07_44292': {
        'hash': 44292,
        'name': 'ore_bag_strawBind_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_handle_body_14308': {
        'hash': 14308,
        'name': 'standard_bag_handle_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_bag_handle_wraps_14304': {
        'hash': 14304,
        'name': 'standard_bag_handle_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Ore_Side_Pouch_Attachment': {
    'hash': 61020,
    'name': 'Ore Side Pouch Attachment',
    'embedded': {
      'Dock_45700': {
        'hash': 45700,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62078': {
        'hash': 62078,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Insert_Bag_Attach_7796': {
        'hash': 7796,
        'name': 'Insert Bag Attach',
        'savables': {}
      },
      'Ore_Side_Pouch_Attachment_7868': {
        'hash': 7868,
        'name': 'Ore Side Pouch Attachment',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Storage_53834': {
        'hash': 53834,
        'name': 'Storage',
        'savables': {}
      },
      'ore_bag_attachment_cloth_01_30702': {
        'hash': 30702,
        'name': 'ore_bag_attachment_cloth_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_cloth_cover_43718': {
        'hash': 43718,
        'name': 'ore_bag_attachment_cloth_cover',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_knot_01_30682': {
        'hash': 30682,
        'name': 'ore_bag_attachment_knot_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_knot_02_30678': {
        'hash': 30678,
        'name': 'ore_bag_attachment_knot_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_knot_03_30674': {
        'hash': 30674,
        'name': 'ore_bag_attachment_knot_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_knot_04_30670': {
        'hash': 30670,
        'name': 'ore_bag_attachment_knot_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_stick_01_30698': {
        'hash': 30698,
        'name': 'ore_bag_attachment_stick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_stick_02_30694': {
        'hash': 30694,
        'name': 'ore_bag_attachment_stick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_stick_03_30690': {
        'hash': 30690,
        'name': 'ore_bag_attachment_stick_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_stick_04_30686': {
        'hash': 30686,
        'name': 'ore_bag_attachment_stick_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_stick_05_30658': {
        'hash': 30658,
        'name': 'ore_bag_attachment_stick_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'ore_bag_attachment_stick_06_30654': {
        'hash': 30654,
        'name': 'ore_bag_attachment_stick_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Ore_Storage': {
    'hash': 65420,
    'name': 'Ore Storage',
    'embedded': {
      'Filter_Dock_57214': {
        'hash': 57214,
        'name': 'Filter Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Interaction_Point_59032': {
        'hash': 59032,
        'name': 'Interaction Point',
        'savables': {}
      },
      'Internal_Dock_59328': {
        'hash': 59328,
        'name': 'Internal Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Ore_Storage_65062': {
        'hash': 65062,
        'name': 'Ore Storage',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'CommunalStorage': {
            'hash': 3084373371,
            'name': 'CommunalStorage'
          },
          'PlayerInteractionRestrictor': {
            'hash': 2951515968,
            'name': 'PlayerInteractionRestrictor'
          }
        }
      },
      'Withdraw_Dock_34750': {
        'hash': 34750,
        'name': 'Withdraw Dock',
        'savables': {}
      }
    }
  },
  'Ore_Training': {
    'hash': 56300,
    'name': 'Ore Training',
    'embedded': {
      'Ore_Training_56294': {
        'hash': 56294,
        'name': 'Ore Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Outdoor_Light_Fixture': {
    'hash': 4686,
    'name': 'Outdoor Light Fixture',
    'embedded': {
      'Fire_53718': {
        'hash': 53718,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Outdoor_Light_Fixture_2808': {
        'hash': 2808,
        'name': 'Outdoor Light Fixture',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Outdoor_Light_Fixture_Dim': {
    'hash': 2758,
    'name': 'Outdoor Light Fixture Dim',
    'embedded': {
      'Fire_34930': {
        'hash': 34930,
        'name': 'Fire',
        'savables': {}
      },
      'Outdoor_Light_Fixture_Dim_2756': {
        'hash': 2756,
        'name': 'Outdoor Light Fixture Dim',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Padlock_Standard': {
    'hash': 3830,
    'name': 'Padlock Standard',
    'embedded': {
      'Padlock_Standard_8924': {
        'hash': 8924,
        'name': 'Padlock Standard',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Page': {
    'hash': 40320,
    'name': 'Page',
    'embedded': {}
  },
  'Paper': {
    'hash': 37066,
    'name': 'Paper',
    'embedded': {
      'Paper_60604': {
        'hash': 60604,
        'name': 'Paper',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PaperPageInstance': {
            'hash': 2241532968,
            'name': 'PaperPageInstance'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Phantom': {
    'hash': 17772,
    'name': 'Phantom',
    'embedded': {
      'AI_25864': {
        'hash': 25864,
        'name': 'AI',
        'savables': {}
      },
      'Phantom_01_16416': {
        'hash': 16416,
        'name': 'Phantom_01',
        'savables': {}
      },
      'Phantom_25882': {
        'hash': 25882,
        'name': 'Phantom',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Phantom_Guard': {
    'hash': 6940,
    'name': 'Phantom Guard',
    'embedded': {
      'Heat_Point_Collection_56294': {
        'hash': 56294,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_Craft_39368': {
        'hash': 39368,
        'name': 'Insert SwordType Craft',
        'savables': {}
      },
      'Phantom_Guard_51546': {
        'hash': 51546,
        'name': 'Phantom Guard',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Multi_39370': {
        'hash': 39370,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Phantom_Head': {
    'hash': 43960,
    'name': 'Phantom Head',
    'embedded': {
      'AI_25864': {
        'hash': 25864,
        'name': 'AI',
        'savables': {}
      },
      'Phantom_01_16416': {
        'hash': 16416,
        'name': 'Phantom_01',
        'savables': {}
      },
      'Phantom_Head_25882': {
        'hash': 25882,
        'name': 'Phantom Head',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Pick_Axe': {
    'hash': 61654,
    'name': 'Pick Axe',
    'embedded': {
      'Pick_Axe_35090': {
        'hash': 35090,
        'name': 'Pick Axe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Pickaxe_Head': {
    'hash': 35878,
    'name': 'Pickaxe Head',
    'embedded': {
      'Heat_Point_Collection_14016': {
        'hash': 14016,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_HammerType_End_Cap_27166': {
        'hash': 27166,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      },
      'Pickaxe_Head_35758': {
        'hash': 35758,
        'name': 'Pickaxe Head',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pickaxe_Training': {
    'hash': 29706,
    'name': 'Pickaxe_Training',
    'embedded': {}
  },
  'PickupSlidingDoor': {
    'hash': 13452,
    'name': 'PickupSlidingDoor',
    'embedded': {
      'Grip_(1)_8328': {
        'hash': 8328,
        'name': 'Grip (1)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(2)_8460': {
        'hash': 8460,
        'name': 'Grip (2)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(3)_8292': {
        'hash': 8292,
        'name': 'Grip (3)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(4)_8306': {
        'hash': 8306,
        'name': 'Grip (4)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(5)_27902': {
        'hash': 27902,
        'name': 'Grip (5)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(6)_27924': {
        'hash': 27924,
        'name': 'Grip (6)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(7)_27886': {
        'hash': 27886,
        'name': 'Grip (7)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(8)_27948': {
        'hash': 27948,
        'name': 'Grip (8)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(9)_27940': {
        'hash': 27940,
        'name': 'Grip (9)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_8438': {
        'hash': 8438,
        'name': 'Grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'PickupSlidingDoor_13450': {
        'hash': 13450,
        'name': 'PickupSlidingDoor',
        'savables': {
          'MovePickup': {
            'hash': 1874870249,
            'name': 'MovePickup'
          }
        }
      }
    }
  },
  'PillarBridgeRotate': {
    'hash': 47436,
    'name': 'PillarBridgeRotate',
    'embedded': {
      'PillarBridgeRotate_10812': {
        'hash': 10812,
        'name': 'PillarBridgeRotate',
        'savables': {}
      },
      'handle_01_30518': {
        'hash': 30518,
        'name': 'handle_01',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'handle_02_30398': {
        'hash': 30398,
        'name': 'handle_02',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'handle_03_30390': {
        'hash': 30390,
        'name': 'handle_03',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'handle_04_30524': {
        'hash': 30524,
        'name': 'handle_04',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'PillarRotate': {
    'hash': 25648,
    'name': 'PillarRotate',
    'embedded': {
      'PillarRotate_10812': {
        'hash': 10812,
        'name': 'PillarRotate',
        'savables': {}
      },
      'handle_01_30158': {
        'hash': 30158,
        'name': 'handle_01',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'handle_02_30102': {
        'hash': 30102,
        'name': 'handle_02',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'handle_03_30096': {
        'hash': 30096,
        'name': 'handle_03',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Pink_Crystal_cluster_02': {
    'hash': 15424,
    'name': 'Pink_Crystal_cluster_02',
    'embedded': {
      'Pink_Crystal_cluster_02_54416': {
        'hash': 54416,
        'name': 'Pink_Crystal_cluster_02',
        'savables': {}
      }
    }
  },
  'PlaceItemPuzzleNoDock': {
    'hash': 12962,
    'name': 'PlaceItemPuzzleNoDock',
    'embedded': {
      'PlaceItemPuzzleNoDock_26668': {
        'hash': 26668,
        'name': 'PlaceItemPuzzleNoDock',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PlaceItemNoDockPuzzleLogic': {
            'hash': 1176706580,
            'name': 'PlaceItemNoDockPuzzleLogic'
          }
        }
      }
    }
  },
  'PlaceItemPuzzleNoDockFire': {
    'hash': 64858,
    'name': 'PlaceItemPuzzleNoDockFire',
    'embedded': {
      'PlaceItemPuzzleNoDockFire_54686': {
        'hash': 54686,
        'name': 'PlaceItemPuzzleNoDockFire',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PlaceItemNoDockFirePuzzleLogic': {
            'hash': 2495475500,
            'name': 'PlaceItemNoDockFirePuzzleLogic'
          }
        }
      }
    }
  },
  'Placed_Table': {
    'hash': 8520,
    'name': 'Placed Table',
    'embedded': {
      'Placed_Table_55788': {
        'hash': 55788,
        'name': 'Placed Table',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Object_(1)_45908': {
        'hash': 45908,
        'name': 'Spawn Object (1)',
        'savables': {}
      },
      'Spawn_Object_(2)_45906': {
        'hash': 45906,
        'name': 'Spawn Object (2)',
        'savables': {}
      },
      'Spawn_Object_(3)_45904': {
        'hash': 45904,
        'name': 'Spawn Object (3)',
        'savables': {}
      },
      'Spawn_Object_(4)_45902': {
        'hash': 45902,
        'name': 'Spawn Object (4)',
        'savables': {}
      },
      'Spawn_Object_45900': {
        'hash': 45900,
        'name': 'Spawn Object',
        'savables': {}
      },
      'table_leg_01_48772': {
        'hash': 48772,
        'name': 'table_leg_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_leg_02_48776': {
        'hash': 48776,
        'name': 'table_leg_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_leg_03_48784': {
        'hash': 48784,
        'name': 'table_leg_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_leg_04_48760': {
        'hash': 48760,
        'name': 'table_leg_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_main_48764': {
        'hash': 48764,
        'name': 'table_main',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_support_long_01_48780': {
        'hash': 48780,
        'name': 'table_support_long_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_support_long_02_48792': {
        'hash': 48792,
        'name': 'table_support_long_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_support_short_01_48788': {
        'hash': 48788,
        'name': 'table_support_short_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'table_support_short_02_48768': {
        'hash': 48768,
        'name': 'table_support_short_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Placement_Crate': {
    'hash': 36614,
    'name': 'Placement Crate',
    'embedded': {
      'Dock_1_2780': {
        'hash': 2780,
        'name': 'Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_2_31842': {
        'hash': 31842,
        'name': 'Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_3_31266': {
        'hash': 31266,
        'name': 'Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_4_30878': {
        'hash': 30878,
        'name': 'Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Placement_Crate_14764': {
        'hash': 14764,
        'name': 'Placement Crate',
        'savables': {
          'GeneratedLoot': {
            'hash': 3642863935,
            'name': 'GeneratedLoot'
          }
        }
      }
    }
  },
  'PlayerInAreaLogic': {
    'hash': 11982,
    'name': 'PlayerInAreaLogic',
    'embedded': {
      'PlayerInAreaLogic_9782': {
        'hash': 9782,
        'name': 'PlayerInAreaLogic',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PlayerDetect': {
            'hash': 403040752,
            'name': 'PlayerDetect'
          }
        }
      }
    }
  },
  'Player_Template': {
    'hash': 61646,
    'name': 'Player_Template',
    'embedded': {}
  },
  'Poison_Cloud': {
    'hash': 52444,
    'name': 'Poison Cloud',
    'embedded': {
      'Poison_Cloud_50236': {
        'hash': 50236,
        'name': 'Poison Cloud',
        'savables': {}
      }
    }
  },
  'Poison_Vent': {
    'hash': 37252,
    'name': 'Poison Vent',
    'embedded': {
      'PoisonSpawn_15766': {
        'hash': 15766,
        'name': 'PoisonSpawn',
        'savables': {
          'PlayerDetect': {
            'hash': 403040752,
            'name': 'PlayerDetect'
          }
        }
      },
      'Poison_Vent_46584': {
        'hash': 46584,
        'name': 'Poison Vent',
        'savables': {}
      }
    }
  },
  'Pole_Hugger_Edgy': {
    'hash': 17828,
    'name': 'Pole Hugger Edgy',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Pole_Hugger_Edgy_15532': {
        'hash': 15532,
        'name': 'Pole Hugger Edgy',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pole_Hugger_Pointy_Ends': {
    'hash': 10962,
    'name': 'Pole Hugger Pointy Ends',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Pole_Hugger_Pointy_Ends_15532': {
        'hash': 15532,
        'name': 'Pole Hugger Pointy Ends',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pole_Hugger_Short': {
    'hash': 4920,
    'name': 'Pole Hugger Short',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Pole_Hugger_Short_15532': {
        'hash': 15532,
        'name': 'Pole Hugger Short',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pole_Hugger_Tall': {
    'hash': 62282,
    'name': 'Pole Hugger Tall',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Pole_Hugger_Tall_15532': {
        'hash': 15532,
        'name': 'Pole Hugger Tall',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pommel': {
    'hash': 15658,
    'name': 'Pommel',
    'embedded': {
      'Heat_Point_Collection_58710': {
        'hash': 58710,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_PommelType_112': {
        'hash': 112,
        'name': 'Insert PommelType',
        'savables': {}
      },
      'Pommel_15532': {
        'hash': 15532,
        'name': 'Pommel',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pommel_Circle': {
    'hash': 57966,
    'name': 'Pommel Circle',
    'embedded': {
      'Heat_Point_Collection_58958': {
        'hash': 58958,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_PommelType_112': {
        'hash': 112,
        'name': 'Insert PommelType',
        'savables': {}
      },
      'Pommel_Circle_15532': {
        'hash': 15532,
        'name': 'Pommel Circle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pommel_Cone': {
    'hash': 52360,
    'name': 'Pommel Cone',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Pommel_Cone_15532': {
        'hash': 15532,
        'name': 'Pommel Cone',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pommel_Diamond': {
    'hash': 42764,
    'name': 'Pommel Diamond',
    'embedded': {
      'Heat_Point_Collection_59204': {
        'hash': 59204,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_PommelType_112': {
        'hash': 112,
        'name': 'Insert PommelType',
        'savables': {}
      },
      'Pommel_Diamond_15532': {
        'hash': 15532,
        'name': 'Pommel Diamond',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pommel_Large_Square': {
    'hash': 42138,
    'name': 'Pommel Large Square',
    'embedded': {
      'Heat_Point_Collection_59448': {
        'hash': 59448,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_PommelType_42136': {
        'hash': 42136,
        'name': 'Insert PommelType',
        'savables': {}
      },
      'Pommel_Large_Square_42132': {
        'hash': 42132,
        'name': 'Pommel Large Square',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pommel_Squashed': {
    'hash': 1736,
    'name': 'Pommel Squashed',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Pommel_Squashed_15532': {
        'hash': 15532,
        'name': 'Pommel Squashed',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Pond_Test': {
    'hash': 58844,
    'name': 'Pond Test',
    'embedded': {
      'Heat_Area_15578': {
        'hash': 15578,
        'name': 'Heat Area',
        'savables': {}
      },
      'Pond_Test_21538': {
        'hash': 21538,
        'name': 'Pond Test',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          }
        }
      }
    }
  },
  'Pond_Water': {
    'hash': 23384,
    'name': 'Pond Water',
    'embedded': {
      'Heat_Area_46624': {
        'hash': 46624,
        'name': 'Heat Area',
        'savables': {}
      },
      'Pond_Water_21272': {
        'hash': 21272,
        'name': 'Pond Water',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          }
        }
      }
    }
  },
  'Post_Box': {
    'hash': 9562,
    'name': 'Post Box',
    'embedded': {
      'Handle_17172': {
        'hash': 17172,
        'name': 'Handle',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Post_Box_7104': {
        'hash': 7104,
        'name': 'Post Box',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Potato_Full_Burnt': {
    'hash': 1574,
    'name': 'Potato Full Burnt',
    'embedded': {
      'Cooking_23418': {
        'hash': 23418,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Full_Burnt_1198': {
        'hash': 1198,
        'name': 'Potato Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Potato_Full_Cooked': {
    'hash': 57840,
    'name': 'Potato Full Cooked',
    'embedded': {
      'Cooking_9014': {
        'hash': 9014,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Full_Cooked_57464': {
        'hash': 57464,
        'name': 'Potato Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Potato_Full_Ripe': {
    'hash': 54692,
    'name': 'Potato Full Ripe',
    'embedded': {
      'Cooking_11142': {
        'hash': 11142,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Full_Ripe_54316': {
        'hash': 54316,
        'name': 'Potato Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Potato_Full_Unripe': {
    'hash': 52146,
    'name': 'Potato Full Unripe',
    'embedded': {
      'Cooking_31548': {
        'hash': 31548,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Full_Unripe_51770': {
        'hash': 51770,
        'name': 'Potato Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Potato_Growth': {
    'hash': 49408,
    'name': 'Potato Growth',
    'embedded': {
      'Potato_Growth_33458': {
        'hash': 33458,
        'name': 'Potato Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Potato_Half_Burnt': {
    'hash': 59748,
    'name': 'Potato Half Burnt',
    'embedded': {
      'Cooking_23418': {
        'hash': 23418,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Cooking_32800': {
        'hash': 32800,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Half_Burnt_59372': {
        'hash': 59372,
        'name': 'Potato Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Potato_Half_Cooked': {
    'hash': 50612,
    'name': 'Potato Half Cooked',
    'embedded': {
      'Cooking_32982': {
        'hash': 32982,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Cooking_9014': {
        'hash': 9014,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Half_Cooked_50236': {
        'hash': 50236,
        'name': 'Potato Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Potato_Half_Ripe': {
    'hash': 48134,
    'name': 'Potato Half Ripe',
    'embedded': {
      'Cooking_11142': {
        'hash': 11142,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Cooking_33006': {
        'hash': 33006,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Half_Ripe_47758': {
        'hash': 47758,
        'name': 'Potato Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Potato_Half_Unripe': {
    'hash': 45822,
    'name': 'Potato Half Unripe',
    'embedded': {
      'Cooking_31548': {
        'hash': 31548,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Cooking_33396': {
        'hash': 33396,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Potato_Half_Unripe_45446': {
        'hash': 45446,
        'name': 'Potato Half Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Potato_Plant_Growth': {
    'hash': 15786,
    'name': 'Potato Plant Growth',
    'embedded': {
      'Potato_Plant_Growth_33458': {
        'hash': 33458,
        'name': 'Potato Plant Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Potato_Plant_Stage_1': {
    'hash': 62602,
    'name': 'Potato Plant Stage 1',
    'embedded': {
      'Potato_Plant_Stage_1_63514': {
        'hash': 63514,
        'name': 'Potato Plant Stage 1',
        'savables': {}
      }
    }
  },
  'Potato_Plant_Stage_2': {
    'hash': 63530,
    'name': 'Potato Plant Stage 2',
    'embedded': {
      'Potato_Plant_Stage_2_63514': {
        'hash': 63514,
        'name': 'Potato Plant Stage 2',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Potato_Plant_Stage_3': {
    'hash': 54788,
    'name': 'Potato Plant Stage 3',
    'embedded': {
      'Potato_Plant_Stage_3_54748': {
        'hash': 54748,
        'name': 'Potato Plant Stage 3',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Potato_Puree_Recipe_Burnt_Stew': {
    'hash': 57936,
    'name': 'Potato_Puree_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Potato_Puree_Recipe_Cooked_Stew': {
    'hash': 57960,
    'name': 'Potato_Puree_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Potato_Puree_Recipe_Raw_Stew': {
    'hash': 57918,
    'name': 'Potato_Puree_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Potato_Sapling': {
    'hash': 50692,
    'name': 'Potato Sapling',
    'embedded': {
      'Potato_Sapling_52858': {
        'hash': 52858,
        'name': 'Potato Sapling',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Potatoes_29060': {
        'hash': 29060,
        'name': 'Potatoes',
        'savables': {
          'GrowerGroup': {
            'hash': 2363255897,
            'name': 'GrowerGroup'
          }
        }
      }
    }
  },
  'Potion_Hoops_Side_Tool_Attachment': {
    'hash': 31418,
    'name': 'Potion Hoops Side Tool Attachment',
    'embedded': {
      'Dock_Mid_31416': {
        'hash': 31416,
        'name': 'Dock Mid',
        'savables': {
          'AdditionalOwnedDock': {
            'hash': 2592242915,
            'name': 'AdditionalOwnedDock'
          }
        }
      },
      'Dock_Side_21918': {
        'hash': 21918,
        'name': 'Dock Side',
        'savables': {
          'AdditionalOwnedDock': {
            'hash': 2592242915,
            'name': 'AdditionalOwnedDock'
          }
        }
      },
      'Dock_Side_22020': {
        'hash': 22020,
        'name': 'Dock Side',
        'savables': {
          'AdditionalOwnedDock': {
            'hash': 2592242915,
            'name': 'AdditionalOwnedDock'
          }
        }
      },
      'Insert_Bag_Attach_7796': {
        'hash': 7796,
        'name': 'Insert Bag Attach',
        'savables': {}
      },
      'Potion_Hoops_Side_Tool_Attachment_7868': {
        'hash': 7868,
        'name': 'Potion Hoops Side Tool Attachment',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Storage_53262': {
        'hash': 53262,
        'name': 'Storage',
        'savables': {}
      },
      'potionHoops_sideTool_pad_01_30876': {
        'hash': 30876,
        'name': 'potionHoops_sideTool_pad_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'potionHoops_sideTool_ringHolder_29430': {
        'hash': 29430,
        'name': 'potionHoops_sideTool_ringHolder',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'potionHoops_sideTool_ringPin_01_30888': {
        'hash': 30888,
        'name': 'potionHoops_sideTool_ringPin_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'potionHoops_sideTool_ringPin_02_30884': {
        'hash': 30884,
        'name': 'potionHoops_sideTool_ringPin_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'potionHoops_sideTool_ringPin_03_30892': {
        'hash': 30892,
        'name': 'potionHoops_sideTool_ringPin_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'potionHoops_sideTool_strap_01_30880': {
        'hash': 30880,
        'name': 'potionHoops_sideTool_strap_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Potion_Medium': {
    'hash': 23644,
    'name': 'Potion Medium',
    'embedded': {
      'CapPickup_21290': {
        'hash': 21290,
        'name': 'CapPickup',
        'savables': {
          'CapPickup': {
            'hash': 3082855726,
            'name': 'CapPickup'
          }
        }
      },
      'Potion_Medium_23646': {
        'hash': 23646,
        'name': 'Potion Medium',
        'savables': {
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Potion_Small': {
    'hash': 62934,
    'name': 'Potion_Small',
    'embedded': {}
  },
  'Pouch': {
    'hash': 38942,
    'name': 'Pouch',
    'embedded': {
      'Pouch_36072': {
        'hash': 36072,
        'name': 'Pouch',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Storage_36080': {
        'hash': 36080,
        'name': 'Storage',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Pouch_Training': {
    'hash': 57348,
    'name': 'Pouch Training',
    'embedded': {
      'Pouch_Training_36072': {
        'hash': 36072,
        'name': 'Pouch Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Storage_65008': {
        'hash': 65008,
        'name': 'Storage',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Poultry_Onion_Mushroom_Recipe_Burnt_Stew': {
    'hash': 57780,
    'name': 'Poultry_Onion_Mushroom_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Poultry_Onion_Mushroom_Recipe_Cooked_Stew': {
    'hash': 57762,
    'name': 'Poultry_Onion_Mushroom_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Poultry_Onion_Mushroom_Recipe_Raw_Stew': {
    'hash': 57804,
    'name': 'Poultry_Onion_Mushroom_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Poultry_Potato_Recipe_Burnt_Stew': {
    'hash': 57894,
    'name': 'Poultry_Potato_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Poultry_Potato_Recipe_Cooked_Stew': {
    'hash': 57852,
    'name': 'Poultry_Potato_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Poultry_Potato_Recipe_Raw_Stew': {
    'hash': 57876,
    'name': 'Poultry_Potato_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Poultry_Recipe_Burnt_Stew': {
    'hash': 10830,
    'name': 'Poultry_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Poultry_Recipe_Cooked_Stew': {
    'hash': 11448,
    'name': 'Poultry_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Poultry_Recipe_Raw_Stew': {
    'hash': 12132,
    'name': 'Poultry_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Power_Strike_Counter': {
    'hash': 37516,
    'name': 'Power Strike Counter',
    'embedded': {
      'Power_Strike_Counter_63778': {
        'hash': 63778,
        'name': 'Power Strike Counter',
        'savables': {}
      }
    }
  },
  'Practice_Gate': {
    'hash': 64704,
    'name': 'Practice_Gate',
    'embedded': {}
  },
  'Profession_Upgrade_Shrine': {
    'hash': 32200,
    'name': 'Profession Upgrade Shrine',
    'embedded': {
      'Hand_Touch_46540': {
        'hash': 46540,
        'name': 'Hand Touch',
        'savables': {}
      },
      'Landscape_Finder_33664': {
        'hash': 33664,
        'name': 'Landscape Finder',
        'savables': {
          'Landmark': {
            'hash': 2590537994,
            'name': 'Landmark'
          },
          'LandmarkDiscoverZone': {
            'hash': 4095875831,
            'name': 'LandmarkDiscoverZone'
          }
        }
      },
      'Profession_Upgrade_Shrine_53594': {
        'hash': 53594,
        'name': 'Profession Upgrade Shrine',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'SkillShrine': {
            'hash': 2190886200,
            'name': 'SkillShrine'
          }
        }
      },
      'Testing_Area_29220': {
        'hash': 29220,
        'name': 'Testing Area',
        'savables': {}
      }
    }
  },
  'Prongs': {
    'hash': 40460,
    'name': 'Prongs',
    'embedded': {
      'Prongs_13190': {
        'hash': 13190,
        'name': 'Prongs',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Weapon_Dock_5626': {
        'hash': 5626,
        'name': 'Weapon Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Proto_Greater_Got_Bramble_Wall': {
    'hash': 34050,
    'name': 'Proto Greater Got Bramble Wall',
    'embedded': {
      'Proto_Greater_Got_Bramble_Wall_34034': {
        'hash': 34034,
        'name': 'Proto Greater Got Bramble Wall',
        'savables': {}
      }
    }
  },
  'Pumpkin_Growth': {
    'hash': 59922,
    'name': 'Pumpkin Growth',
    'embedded': {
      'Pumpkin_Growth_33458': {
        'hash': 33458,
        'name': 'Pumpkin Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Pumpkin_Recipe_Burnt_Stew': {
    'hash': 62678,
    'name': 'Pumpkin_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Pumpkin_Recipe_Cooked_Stew': {
    'hash': 62694,
    'name': 'Pumpkin_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Pumpkin_Recipe_Raw_Stew': {
    'hash': 62724,
    'name': 'Pumpkin_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Pumpkin_Tree': {
    'hash': 49086,
    'name': 'Pumpkin Tree',
    'embedded': {
      'Pumpkin_Tree_46510': {
        'hash': 46510,
        'name': 'Pumpkin Tree',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Pumpkin_Tree_Growth': {
    'hash': 41658,
    'name': 'Pumpkin Tree Growth',
    'embedded': {
      'Pumpkin_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Pumpkin Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Pumpkin_Tree_Separated': {
    'hash': 23566,
    'name': 'Pumpkin_Tree_Separated',
    'embedded': {}
  },
  'Pumpkin_Tree_Stage_1': {
    'hash': 38672,
    'name': 'Pumpkin Tree Stage 1',
    'embedded': {
      'Pumpkin_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Pumpkin Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Pumpkin_Tree_Stage_2': {
    'hash': 42508,
    'name': 'Pumpkin Tree Stage 2',
    'embedded': {
      'Pumpkin_Tree_Stage_2_46510': {
        'hash': 46510,
        'name': 'Pumpkin Tree Stage 2',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Pumpkin_Tree_Stage_3': {
    'hash': 63038,
    'name': 'Pumpkin Tree Stage 3',
    'embedded': {
      'Pumpkin_Tree_Stage_3_46510': {
        'hash': 46510,
        'name': 'Pumpkin Tree Stage 3',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Puzzle_Orb_1': {
    'hash': 31620,
    'name': 'Puzzle Orb 1',
    'embedded': {
      'Puzzle_Orb_1_11514': {
        'hash': 11514,
        'name': 'Puzzle Orb 1',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Puzzle_Orb_2': {
    'hash': 47150,
    'name': 'Puzzle Orb 2',
    'embedded': {
      'Puzzle_Orb_2_11514': {
        'hash': 11514,
        'name': 'Puzzle Orb 2',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Puzzle_Orb_Restrictor': {
    'hash': 29276,
    'name': 'Puzzle Orb Restrictor',
    'embedded': {
      'Puzzle_Orb_Restrictor_29424': {
        'hash': 29424,
        'name': 'Puzzle Orb Restrictor',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'PositionRestrictor': {
            'hash': 1776498660,
            'name': 'PositionRestrictor'
          }
        }
      }
    }
  },
  'Puzzle_Pillar_with_Wheel_Bridge': {
    'hash': 15908,
    'name': 'Puzzle Pillar with Wheel Bridge',
    'embedded': {
      'Elevator_20982': {
        'hash': 20982,
        'name': 'Elevator',
        'savables': {
          'WayPointPath': {
            'hash': 1063725326,
            'name': 'WayPointPath'
          }
        }
      },
      'Grip_(1)_54050': {
        'hash': 54050,
        'name': 'Grip (1)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(2)_54614': {
        'hash': 54614,
        'name': 'Grip (2)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(3)_56370': {
        'hash': 56370,
        'name': 'Grip (3)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(4)_53470': {
        'hash': 53470,
        'name': 'Grip (4)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(5)_19654': {
        'hash': 19654,
        'name': 'Grip (5)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_56728': {
        'hash': 56728,
        'name': 'Grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Puzzle_Pillar_with_Wheel_Bridge_31136': {
        'hash': 31136,
        'name': 'Puzzle Pillar with Wheel Bridge',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          }
        }
      },
      'WheelBridge(Clone)_43884': {
        'hash': 43884,
        'name': 'WheelBridge(Clone)',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'LogicFloatSender': {
            'hash': 2120963769,
            'name': 'LogicFloatSender'
          },
          'RotatePickup': {
            'hash': 2498617949,
            'name': 'RotatePickup'
          }
        }
      },
      'wheel_origin_43868': {
        'hash': 43868,
        'name': 'wheel_origin',
        'savables': {
          'WheelGrab': {
            'hash': 320224849,
            'name': 'WheelGrab'
          }
        }
      }
    }
  },
  'Quiver': {
    'hash': 64640,
    'name': 'Quiver',
    'embedded': {
      'Dock_33558': {
        'hash': 33558,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Quiver_33568': {
        'hash': 33568,
        'name': 'Quiver',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'standard_quiver_body_49088': {
        'hash': 49088,
        'name': 'standard_quiver_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_body_laces_01_43824': {
        'hash': 43824,
        'name': 'standard_quiver_body_laces_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_body_lipBlock_49092': {
        'hash': 49092,
        'name': 'standard_quiver_body_lipBlock',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_metalRingBottom_49080': {
        'hash': 49080,
        'name': 'standard_quiver_metalRingBottom',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_metalRingTop_49084': {
        'hash': 49084,
        'name': 'standard_quiver_metalRingTop',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_strap_49068': {
        'hash': 49068,
        'name': 'standard_quiver_strap',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_strap_clasp_01_49072': {
        'hash': 49072,
        'name': 'standard_quiver_strap_clasp_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_strap_clasp_02_49076': {
        'hash': 49076,
        'name': 'standard_quiver_strap_clasp_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_quiver_strap_wraps_43820': {
        'hash': 43820,
        'name': 'standard_quiver_strap_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Random_Placement_Crate': {
    'hash': 8246,
    'name': 'Random Placement Crate',
    'embedded': {
      'Crate_place(Clone)_14764': {
        'hash': 14764,
        'name': 'Crate place(Clone)',
        'savables': {
          'GeneratedLoot': {
            'hash': 3642863935,
            'name': 'GeneratedLoot'
          }
        }
      },
      'Dock_1_2780': {
        'hash': 2780,
        'name': 'Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_2_31842': {
        'hash': 31842,
        'name': 'Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_3_31266': {
        'hash': 31266,
        'name': 'Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_4_30878': {
        'hash': 30878,
        'name': 'Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Random_Placement_Crate_14764': {
        'hash': 14764,
        'name': 'Random Placement Crate',
        'savables': {}
      }
    }
  },
  'Random_Spawn_Rectangle': {
    'hash': 24644,
    'name': 'Random_Spawn_Rectangle',
    'embedded': {}
  },
  'Rapier_Blade': {
    'hash': 11332,
    'name': 'Rapier Blade',
    'embedded': {
      'Heat_Point_Collection_63016': {
        'hash': 63016,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Straight_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight SwordType',
        'savables': {}
      },
      'Rapier_Blade_35392': {
        'hash': 35392,
        'name': 'Rapier Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'metal_blade_rapier_full_geo_LOD0_6834': {
        'hash': 6834,
        'name': 'metal_blade_rapier_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Recycler': {
    'hash': 60684,
    'name': 'Recycler',
    'embedded': {
      'Display_Dock_6940': {
        'hash': 6940,
        'name': 'Display Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Display_Dock_6988': {
        'hash': 6988,
        'name': 'Display Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Display_Dock_6992': {
        'hash': 6992,
        'name': 'Display Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Fuel_54958': {
        'hash': 54958,
        'name': 'Dock Fuel',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Output_44868': {
        'hash': 44868,
        'name': 'Dock Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Output_58172': {
        'hash': 58172,
        'name': 'Dock Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Output_61316': {
        'hash': 61316,
        'name': 'Dock Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_24422': {
        'hash': 24422,
        'name': 'Handle',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_6394': {
        'hash': 6394,
        'name': 'Handle',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'HeatArea_37766': {
        'hash': 37766,
        'name': 'HeatArea',
        'savables': {}
      },
      'Recycler_57752': {
        'hash': 57752,
        'name': 'Recycler',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'Recycler': {
            'hash': 2450553269,
            'name': 'Recycler'
          }
        }
      },
      'recycler_fuelHatch_37522': {
        'hash': 37522,
        'name': 'recycler_fuelHatch',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'smelter_bellows_arm_jnt_25672': {
        'hash': 25672,
        'name': 'smelter_bellows_arm_jnt',
        'savables': {}
      }
    }
  },
  'Red_Iron_Ingot': {
    'hash': 31034,
    'name': 'Red Iron Ingot',
    'embedded': {
      'Heat_Point_Collection_13552': {
        'hash': 13552,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Red_Iron_Ingot_32738': {
        'hash': 32738,
        'name': 'Red Iron Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Red_Mushroom_Recipe_Burnt_Stew': {
    'hash': 63290,
    'name': 'Red_Mushroom_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Red_Mushroom_Recipe_Cooked_Stew': {
    'hash': 62660,
    'name': 'Red_Mushroom_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Red_Mushroom_Recipe_Raw_Stew': {
    'hash': 62024,
    'name': 'Red_Mushroom_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Red_Mushroom_Shield': {
    'hash': 49188,
    'name': 'Red Mushroom Shield',
    'embedded': {
      'Red_Mushroom_Shield_49190': {
        'hash': 49190,
        'name': 'Red Mushroom Shield',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Red_Sauce_Recipe_Burnt_Stew': {
    'hash': 57978,
    'name': 'Red_Sauce_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Red_Sauce_Recipe_Cooked_Stew': {
    'hash': 58026,
    'name': 'Red_Sauce_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Red_Sauce_Recipe_Raw_Stew': {
    'hash': 58002,
    'name': 'Red_Sauce_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Redwood_Gotera_Core': {
    'hash': 41402,
    'name': 'Redwood Gotera Core',
    'embedded': {
      'Redwood_Gotera_Core_41418': {
        'hash': 41418,
        'name': 'Redwood Gotera Core',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Redwood_Tree_Growth': {
    'hash': 48248,
    'name': 'Redwood Tree Growth',
    'embedded': {
      'Redwood_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Redwood Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Redwood_Tree_Seed': {
    'hash': 55054,
    'name': 'Redwood Tree Seed',
    'embedded': {
      'Redwood_Tree_Seed_35258': {
        'hash': 35258,
        'name': 'Redwood Tree Seed',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Redwood_Tree_Stage_1': {
    'hash': 17526,
    'name': 'Redwood Tree Stage 1',
    'embedded': {
      'Redwood_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Redwood Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Repair_Box': {
    'hash': 3458,
    'name': 'Repair Box',
    'embedded': {
      'Cost_1_22852': {
        'hash': 22852,
        'name': 'Cost 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_2_22786': {
        'hash': 22786,
        'name': 'Cost 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_3_22772': {
        'hash': 22772,
        'name': 'Cost 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_1_22642': {
        'hash': 22642,
        'name': 'Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_2_22692': {
        'hash': 22692,
        'name': 'Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_3_22698': {
        'hash': 22698,
        'name': 'Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Landmark_Finder_5660': {
        'hash': 5660,
        'name': 'Landmark Finder',
        'savables': {
          'Landmark': {
            'hash': 2590537994,
            'name': 'Landmark'
          },
          'LandmarkDiscoverZone': {
            'hash': 4095875831,
            'name': 'LandmarkDiscoverZone'
          }
        }
      },
      'RepairBox_15188': {
        'hash': 15188,
        'name': 'RepairBox',
        'savables': {}
      },
      'Repair_Box_65496': {
        'hash': 65496,
        'name': 'Repair Box',
        'savables': {
          'RepairBox': {
            'hash': 3820454400,
            'name': 'RepairBox'
          }
        }
      }
    }
  },
  'Repair_Box_Standing_Panel': {
    'hash': 32704,
    'name': 'Repair Box Standing Panel',
    'embedded': {
      'Cost_1_32664': {
        'hash': 32664,
        'name': 'Cost 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_2_32662': {
        'hash': 32662,
        'name': 'Cost 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_3_32660': {
        'hash': 32660,
        'name': 'Cost 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_1_32654': {
        'hash': 32654,
        'name': 'Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_2_32656': {
        'hash': 32656,
        'name': 'Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_3_32658': {
        'hash': 32658,
        'name': 'Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Landmark_Finder_4224': {
        'hash': 4224,
        'name': 'Landmark Finder',
        'savables': {
          'Landmark': {
            'hash': 2590537994,
            'name': 'Landmark'
          },
          'LandmarkDiscoverZone': {
            'hash': 4095875831,
            'name': 'LandmarkDiscoverZone'
          }
        }
      },
      'RepairBox_15188': {
        'hash': 15188,
        'name': 'RepairBox',
        'savables': {}
      },
      'Repair_Box_Standing_Panel_32702': {
        'hash': 32702,
        'name': 'Repair Box Standing Panel',
        'savables': {
          'RepairBox': {
            'hash': 3820454400,
            'name': 'RepairBox'
          }
        }
      }
    }
  },
  'Repair_Box_Wall_Panel': {
    'hash': 41842,
    'name': 'Repair Box Wall Panel',
    'embedded': {
      'Cost_1_41802': {
        'hash': 41802,
        'name': 'Cost 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_2_41800': {
        'hash': 41800,
        'name': 'Cost 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_3_41798': {
        'hash': 41798,
        'name': 'Cost 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_1_41792': {
        'hash': 41792,
        'name': 'Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_2_41794': {
        'hash': 41794,
        'name': 'Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_3_41796': {
        'hash': 41796,
        'name': 'Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Landmark_Finder_3504': {
        'hash': 3504,
        'name': 'Landmark Finder',
        'savables': {
          'Landmark': {
            'hash': 2590537994,
            'name': 'Landmark'
          },
          'LandmarkDiscoverZone': {
            'hash': 4095875831,
            'name': 'LandmarkDiscoverZone'
          }
        }
      },
      'RepairBox_15188': {
        'hash': 15188,
        'name': 'RepairBox',
        'savables': {}
      },
      'Repair_Box_Wall_Panel_41840': {
        'hash': 41840,
        'name': 'Repair Box Wall Panel',
        'savables': {
          'RepairBox': {
            'hash': 3820454400,
            'name': 'RepairBox'
          }
        }
      }
    }
  },
  'Repeater': {
    'hash': 40046,
    'name': 'Repeater',
    'embedded': {}
  },
  'Rock_Boulder_01': {
    'hash': 63838,
    'name': 'Rock_Boulder_01',
    'embedded': {}
  },
  'Rock_Boulder_02': {
    'hash': 63828,
    'name': 'Rock_Boulder_02',
    'embedded': {}
  },
  'Rock_Boulder_03': {
    'hash': 63836,
    'name': 'Rock_Boulder_03',
    'embedded': {}
  },
  'Rock_Boulder_04': {
    'hash': 63834,
    'name': 'Rock_Boulder_04',
    'embedded': {}
  },
  'Rock_Cluster': {
    'hash': 63824,
    'name': 'Rock Cluster',
    'embedded': {
      'Rock_Cluster_18314': {
        'hash': 18314,
        'name': 'Rock Cluster',
        'savables': {}
      }
    }
  },
  'Rock_Cluster_Tutorial': {
    'hash': 25922,
    'name': 'Rock Cluster Tutorial',
    'embedded': {
      'Rock_Cluster_Tutorial_18314': {
        'hash': 18314,
        'name': 'Rock Cluster Tutorial',
        'savables': {}
      }
    }
  },
  'Rock_Spire_Gcore_Dynamic': {
    'hash': 40128,
    'name': 'Rock Spire Gcore Dynamic',
    'embedded': {
      'Death_Fern_Spawner_32170': {
        'hash': 32170,
        'name': 'Death Fern Spawner',
        'savables': {
          'CylindricalBoundsSurface': {
            'hash': 34507654,
            'name': 'CylindricalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Health_Vine_Spawner_39788': {
        'hash': 39788,
        'name': 'Health Vine Spawner',
        'savables': {
          'DirectionalBoundsSurface': {
            'hash': 1962842866,
            'name': 'DirectionalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Rock_Spire_Gcore_Dynamic_23456': {
        'hash': 23456,
        'name': 'Rock Spire Gcore Dynamic',
        'savables': {}
      },
      'Vine_Boulder_Spawner_53936': {
        'hash': 53936,
        'name': 'Vine Boulder Spawner',
        'savables': {
          'CylindricalBoundsSurface': {
            'hash': 34507654,
            'name': 'CylindricalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Rock_WallBoulder_02': {
    'hash': 63832,
    'name': 'Rock_WallBoulder_02',
    'embedded': {}
  },
  'Rod_Long': {
    'hash': 44066,
    'name': 'Rod Long',
    'embedded': {
      'Dock_32818': {
        'hash': 32818,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Rod_Long_24200': {
        'hash': 24200,
        'name': 'Rod Long',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_AxeType_37426': {
        'hash': 37426,
        'name': 'Slot AxeType',
        'savables': {}
      },
      'Slot_EdgeType_Craft_31944': {
        'hash': 31944,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_53940': {
        'hash': 53940,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Rod_Medium': {
    'hash': 44204,
    'name': 'Rod Medium',
    'embedded': {
      'Dock_32818': {
        'hash': 32818,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Rod_Medium_44084': {
        'hash': 44084,
        'name': 'Rod Medium',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_AxeType_15522': {
        'hash': 15522,
        'name': 'Slot AxeType',
        'savables': {}
      },
      'Slot_Deco_37438': {
        'hash': 37438,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_EdgeType_Craft_35298': {
        'hash': 35298,
        'name': 'Slot EdgeType Craft',
        'savables': {}
      },
      'Slot_Multi_31156': {
        'hash': 31156,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Multi_39008': {
        'hash': 39008,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Rod_Slim_40cm': {
    'hash': 59588,
    'name': 'Rod Slim 40cm',
    'embedded': {
      'Rod_Slim_40cm_37330': {
        'hash': 37330,
        'name': 'Rod Slim 40cm',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Slot_Multi_44690': {
        'hash': 44690,
        'name': 'Slot Multi',
        'savables': {}
      }
    }
  },
  'Rope_Clump': {
    'hash': 43836,
    'name': 'Rope Clump',
    'embedded': {
      'Rope_Clump_47776': {
        'hash': 47776,
        'name': 'Rope Clump',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rope_Pully_Puzzle': {
    'hash': 51434,
    'name': 'Rope Pully Puzzle',
    'embedded': {
      'Rope_Grab_57800': {
        'hash': 57800,
        'name': 'Rope Grab',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'RopeGrab': {
            'hash': 237360636,
            'name': 'RopeGrab'
          }
        }
      },
      'Rope_Length_57794': {
        'hash': 57794,
        'name': 'Rope Length',
        'savables': {}
      },
      'Rope_Pully_Puzzle_4580': {
        'hash': 4580,
        'name': 'Rope Pully Puzzle',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'LogicFloatSender': {
            'hash': 2120963769,
            'name': 'LogicFloatSender'
          }
        }
      }
    }
  },
  'Ruins_Elevator_Puzzle_Square': {
    'hash': 27582,
    'name': 'Ruins Elevator Puzzle Square',
    'embedded': {
      'Ruins_Elevator_Puzzle_Square_31136': {
        'hash': 31136,
        'name': 'Ruins Elevator Puzzle Square',
        'savables': {}
      }
    }
  },
  'Ruins_Elevator_Puzzle_Square_Crystal_Pillar': {
    'hash': 3512,
    'name': 'Ruins Elevator Puzzle Square Crystal Pillar',
    'embedded': {
      'Crystal_Blue(Clone)_(1)_40232': {
        'hash': 40232,
        'name': 'Crystal Blue(Clone) (1)',
        'savables': {}
      },
      'Elevator_20982': {
        'hash': 20982,
        'name': 'Elevator',
        'savables': {
          'WayPointPath': {
            'hash': 1063725326,
            'name': 'WayPointPath'
          }
        }
      },
      'Ruins_Elevator_Puzzle_Square_Crystal_Pillar_31136': {
        'hash': 31136,
        'name': 'Ruins Elevator Puzzle Square Crystal Pillar',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          }
        }
      }
    }
  },
  'Ruins_Elevator_Puzzle_Square_Large_Variant': {
    'hash': 4192,
    'name': 'Ruins Elevator Puzzle Square Large Variant',
    'embedded': {
      'Ruins_Elevator_Puzzle_Square_Large_Variant_16752': {
        'hash': 16752,
        'name': 'Ruins Elevator Puzzle Square Large Variant',
        'savables': {}
      }
    }
  },
  'Ruins_Elevator_Puzzle_Square_Pillar_Variant': {
    'hash': 22284,
    'name': 'Ruins Elevator Puzzle Square Pillar Variant',
    'embedded': {
      'Ruins_Elevator_Puzzle_Square_Pillar_Variant_31136': {
        'hash': 31136,
        'name': 'Ruins Elevator Puzzle Square Pillar Variant',
        'savables': {}
      }
    }
  },
  'Ruins_Hand_Touch_Activator': {
    'hash': 1002,
    'name': 'Ruins Hand Touch Activator',
    'embedded': {
      'Ruins_Hand_Touch_Activator_46540': {
        'hash': 46540,
        'name': 'Ruins Hand Touch Activator',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      }
    }
  },
  'Ruins_Pillar_Crystal': {
    'hash': 58240,
    'name': 'Ruins Pillar Crystal',
    'embedded': {
      'Crystal_Blue(Clone)_(1)_40232': {
        'hash': 40232,
        'name': 'Crystal Blue(Clone) (1)',
        'savables': {}
      },
      'Ruins_Pillar_Crystal_58176': {
        'hash': 58176,
        'name': 'Ruins Pillar Crystal',
        'savables': {}
      }
    }
  },
  'Ruins_Sliding_Wall_Puzzle_Square': {
    'hash': 42494,
    'name': 'Ruins Sliding Wall Puzzle Square',
    'embedded': {
      'Ruins_Sliding_Wall_Puzzle_Square_42408': {
        'hash': 42408,
        'name': 'Ruins Sliding Wall Puzzle Square',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'SlidingDoor': {
            'hash': 3583462804,
            'name': 'SlidingDoor'
          }
        }
      }
    }
  },
  'Rusty_Axe': {
    'hash': 4412,
    'name': 'Rusty Axe',
    'embedded': {
      'Rusty_Axe_62196': {
        'hash': 62196,
        'name': 'Rusty Axe',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Chisel': {
    'hash': 40366,
    'name': 'Rusty Chisel',
    'embedded': {
      'Rusty_Chisel_40156': {
        'hash': 40156,
        'name': 'Rusty Chisel',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Greataxe': {
    'hash': 29296,
    'name': 'Rusty Greataxe',
    'embedded': {
      'Rusty_Greataxe_28996': {
        'hash': 28996,
        'name': 'Rusty Greataxe',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Greatsword': {
    'hash': 63156,
    'name': 'Rusty Greatsword',
    'embedded': {
      'Rusty_Greatsword_62946': {
        'hash': 62946,
        'name': 'Rusty Greatsword',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Hammer': {
    'hash': 36126,
    'name': 'Rusty Hammer',
    'embedded': {
      'Rusty_Hammer_58538': {
        'hash': 58538,
        'name': 'Rusty Hammer',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Pickaxe': {
    'hash': 46874,
    'name': 'Rusty Pickaxe',
    'embedded': {
      'Rusty_Pickaxe_46574': {
        'hash': 46574,
        'name': 'Rusty Pickaxe',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Pitchfork': {
    'hash': 59586,
    'name': 'Rusty Pitchfork',
    'embedded': {
      'Rusty_Pitchfork_58914': {
        'hash': 58914,
        'name': 'Rusty Pitchfork',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Shield': {
    'hash': 20684,
    'name': 'Rusty Shield',
    'embedded': {
      'Insert_Shield_64244': {
        'hash': 64244,
        'name': 'Insert Shield',
        'savables': {}
      },
      'Rusty_Shield_20260': {
        'hash': 20260,
        'name': 'Rusty Shield',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Short_Sword': {
    'hash': 44824,
    'name': 'Rusty Short Sword',
    'embedded': {
      'Rusty_Short_Sword_52378': {
        'hash': 52378,
        'name': 'Rusty Short Sword',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Rusty_Spade': {
    'hash': 33230,
    'name': 'Rusty Spade',
    'embedded': {
      'Fake_Pickup_6096': {
        'hash': 6096,
        'name': 'Fake Pickup',
        'savables': {}
      },
      'Rusty_Spade_60654': {
        'hash': 60654,
        'name': 'Rusty Spade',
        'savables': {
          'DiggingImpactor': {
            'hash': 3445325106,
            'name': 'DiggingImpactor'
          },
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Safe_Point': {
    'hash': 33004,
    'name': 'Safe Point',
    'embedded': {
      'Hand_Touch_46540': {
        'hash': 46540,
        'name': 'Hand Touch',
        'savables': {}
      },
      'Safe_Point_9078': {
        'hash': 9078,
        'name': 'Safe Point',
        'savables': {
          'CheckPoint': {
            'hash': 3704379512,
            'name': 'CheckPoint'
          },
          'SafePositionSetter': {
            'hash': 70871065,
            'name': 'SafePositionSetter'
          }
        }
      }
    }
  },
  'Sai': {
    'hash': 27038,
    'name': 'Sai',
    'embedded': {
      'Sai_36330': {
        'hash': 36330,
        'name': 'Sai',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Salt': {
    'hash': 49578,
    'name': 'Salt',
    'embedded': {
      'Salt_30920': {
        'hash': 30920,
        'name': 'Salt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Sandstone_Boulder_01': {
    'hash': 34168,
    'name': 'Sandstone_Boulder_01',
    'embedded': {
      'Sandstone_Boulder_01_13178': {
        'hash': 13178,
        'name': 'Sandstone_Boulder_01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Sandstone_Boulder_02': {
    'hash': 8006,
    'name': 'Sandstone_Boulder_02',
    'embedded': {
      'Sandstone_Boulder_02_13178': {
        'hash': 13178,
        'name': 'Sandstone_Boulder_02',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Sandstone_Boulder_03': {
    'hash': 5050,
    'name': 'Sandstone_Boulder_03',
    'embedded': {
      'Sandstone_Boulder_03_13178': {
        'hash': 13178,
        'name': 'Sandstone_Boulder_03',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Sandstone_Cluster': {
    'hash': 41676,
    'name': 'Sandstone Cluster',
    'embedded': {
      'Sandstone_Cluster_41674': {
        'hash': 41674,
        'name': 'Sandstone Cluster',
        'savables': {}
      }
    }
  },
  'Sandstone_Stone': {
    'hash': 55930,
    'name': 'Sandstone Stone',
    'embedded': {
      'Sandstone_Stone_30920': {
        'hash': 30920,
        'name': 'Sandstone Stone',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Sapling': {
    'hash': 25994,
    'name': 'Sapling',
    'embedded': {
      'Sapling_52900': {
        'hash': 52900,
        'name': 'Sapling',
        'savables': {}
      }
    }
  },
  'Sapling_Freshly_Planted': {
    'hash': 25992,
    'name': 'Sapling Freshly Planted',
    'embedded': {
      'Sapling_Freshly_Planted_44026': {
        'hash': 44026,
        'name': 'Sapling Freshly Planted',
        'savables': {}
      }
    }
  },
  'ScaleTemp': {
    'hash': 64402,
    'name': 'ScaleTemp',
    'embedded': {}
  },
  'Schmeechee_Glowing': {
    'hash': 53576,
    'name': 'Schmeechee Glowing',
    'embedded': {
      'Schmeechee_53578': {
        'hash': 53578,
        'name': 'Schmeechee',
        'savables': {}
      },
      'Schmeechee_AI_58356': {
        'hash': 58356,
        'name': 'Schmeechee AI',
        'savables': {}
      },
      'Schmeechee_Glowing_53582': {
        'hash': 53582,
        'name': 'Schmeechee Glowing',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Schmeechee_Orange': {
    'hash': 63728,
    'name': 'Schmeechee Orange',
    'embedded': {
      'Schmeechee_21916': {
        'hash': 21916,
        'name': 'Schmeechee',
        'savables': {}
      },
      'Schmeechee_AI_58356': {
        'hash': 58356,
        'name': 'Schmeechee AI',
        'savables': {}
      },
      'Schmeechee_Orange_58792': {
        'hash': 58792,
        'name': 'Schmeechee Orange',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Schmeechee_Poisonous': {
    'hash': 31646,
    'name': 'Schmeechee Poisonous',
    'embedded': {
      'Schmeechee_31648': {
        'hash': 31648,
        'name': 'Schmeechee',
        'savables': {}
      },
      'Schmeechee_AI_58356': {
        'hash': 58356,
        'name': 'Schmeechee AI',
        'savables': {}
      },
      'Schmeechee_Poisonous_31652': {
        'hash': 31652,
        'name': 'Schmeechee Poisonous',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Schmeechee_Red': {
    'hash': 3532,
    'name': 'Schmeechee Red',
    'embedded': {
      'Schmeechee_3534': {
        'hash': 3534,
        'name': 'Schmeechee',
        'savables': {}
      },
      'Schmeechee_AI_58356': {
        'hash': 58356,
        'name': 'Schmeechee AI',
        'savables': {}
      },
      'Schmeechee_Red_3538': {
        'hash': 3538,
        'name': 'Schmeechee Red',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Scythe_Blade': {
    'hash': 26788,
    'name': 'Scythe Blade',
    'embedded': {
      'Insert_AxeType_7796': {
        'hash': 7796,
        'name': 'Insert AxeType',
        'savables': {}
      },
      'Scythe_Blade_29280': {
        'hash': 29280,
        'name': 'Scythe Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'joint_blade_scythe_01_55756': {
        'hash': 55756,
        'name': 'joint_blade_scythe_01',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'joint_blade_scythe_02_55752': {
        'hash': 55752,
        'name': 'joint_blade_scythe_02',
        'savables': {}
      },
      'joint_blade_scythe_03_55776': {
        'hash': 55776,
        'name': 'joint_blade_scythe_03',
        'savables': {}
      },
      'joint_blade_scythe_04_55760': {
        'hash': 55760,
        'name': 'joint_blade_scythe_04',
        'savables': {}
      },
      'joint_blade_scythe_05_55772': {
        'hash': 55772,
        'name': 'joint_blade_scythe_05',
        'savables': {}
      },
      'joint_blade_scythe_06_55768': {
        'hash': 55768,
        'name': 'joint_blade_scythe_06',
        'savables': {}
      },
      'joint_blade_scythe_07_55764': {
        'hash': 55764,
        'name': 'joint_blade_scythe_07',
        'savables': {}
      },
      'metal_blade_scythe_full_geo_LOD0_2552': {
        'hash': 2552,
        'name': 'metal_blade_scythe_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Select_Server_Orb': {
    'hash': 55760,
    'name': 'Select_Server_Orb',
    'embedded': {}
  },
  'Send_Post': {
    'hash': 53190,
    'name': 'Send Post',
    'embedded': {
      'Grab_31026': {
        'hash': 31026,
        'name': 'Grab',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_5088': {
        'hash': 5088,
        'name': 'Handle',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Scroller_Touch_Mode_41098': {
        'hash': 41098,
        'name': 'Scroller Touch Mode',
        'savables': {}
      },
      'Send_Post_53122': {
        'hash': 53122,
        'name': 'Send Post',
        'savables': {}
      }
    }
  },
  'Set_Piece': {
    'hash': 62334,
    'name': 'Set_Piece',
    'embedded': {}
  },
  'Shelf': {
    'hash': 23630,
    'name': 'Shelf',
    'embedded': {
      'Dock_2780': {
        'hash': 2780,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60210': {
        'hash': 60210,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60212': {
        'hash': 60212,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60214': {
        'hash': 60214,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60216': {
        'hash': 60216,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60218': {
        'hash': 60218,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60220': {
        'hash': 60220,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60222': {
        'hash': 60222,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60224': {
        'hash': 60224,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60226': {
        'hash': 60226,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60228': {
        'hash': 60228,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60230': {
        'hash': 60230,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60232': {
        'hash': 60232,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60234': {
        'hash': 60234,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60236': {
        'hash': 60236,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60238': {
        'hash': 60238,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60240': {
        'hash': 60240,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60242': {
        'hash': 60242,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60244': {
        'hash': 60244,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60246': {
        'hash': 60246,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Shelf_5060': {
        'hash': 5060,
        'name': 'Shelf',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Shelf_Short': {
    'hash': 20452,
    'name': 'Shelf Short',
    'embedded': {
      'Dock_2780': {
        'hash': 2780,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58082': {
        'hash': 58082,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58084': {
        'hash': 58084,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58086': {
        'hash': 58086,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58088': {
        'hash': 58088,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58090': {
        'hash': 58090,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58092': {
        'hash': 58092,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58094': {
        'hash': 58094,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58096': {
        'hash': 58096,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_58098': {
        'hash': 58098,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Shelf_Short_60158': {
        'hash': 60158,
        'name': 'Shelf Short',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Shield': {
    'hash': 61656,
    'name': 'Shield',
    'embedded': {
      'Shield_32452': {
        'hash': 32452,
        'name': 'Shield',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Shield_Core_Bent_Middle': {
    'hash': 7232,
    'name': 'Shield Core Bent Middle',
    'embedded': {
      'Insert_Shield_Handle_112': {
        'hash': 112,
        'name': 'Insert Shield Handle',
        'savables': {}
      },
      'Shield_Core_Bent_Middle_10382': {
        'hash': 10382,
        'name': 'Shield Core Bent Middle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Shield_Part_47874': {
        'hash': 47874,
        'name': 'Slot Shield Part',
        'savables': {}
      },
      'Slot_Shield_Part_8898': {
        'hash': 8898,
        'name': 'Slot Shield Part',
        'savables': {}
      }
    }
  },
  'Shield_Core_Circle_Middle': {
    'hash': 52756,
    'name': 'Shield Core Circle Middle',
    'embedded': {
      'Insert_Shield_Handle_112': {
        'hash': 112,
        'name': 'Insert Shield Handle',
        'savables': {}
      },
      'Shield_Core_Circle_Middle_52754': {
        'hash': 52754,
        'name': 'Shield Core Circle Middle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Shield_Part_47874': {
        'hash': 47874,
        'name': 'Slot Shield Part',
        'savables': {}
      },
      'Slot_Shield_Part_8898': {
        'hash': 8898,
        'name': 'Slot Shield Part',
        'savables': {}
      }
    }
  },
  'Shield_Core_Handle': {
    'hash': 4530,
    'name': 'Shield Core Handle',
    'embedded': {
      'Shield_Core_Handle_4528': {
        'hash': 4528,
        'name': 'Shield Core Handle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Shield_Handle_47874': {
        'hash': 47874,
        'name': 'Slot Shield Handle',
        'savables': {}
      }
    }
  },
  'Shield_Core_Holed_Middle': {
    'hash': 50602,
    'name': 'Shield Core Holed Middle',
    'embedded': {
      'Insert_Shield_Handle_112': {
        'hash': 112,
        'name': 'Insert Shield Handle',
        'savables': {}
      },
      'Shield_Core_Holed_Middle_50604': {
        'hash': 50604,
        'name': 'Shield Core Holed Middle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Shield_Part_47874': {
        'hash': 47874,
        'name': 'Slot Shield Part',
        'savables': {}
      },
      'Slot_Shield_Part_8898': {
        'hash': 8898,
        'name': 'Slot Shield Part',
        'savables': {}
      }
    }
  },
  'Shield_Part_Half_Circle': {
    'hash': 50888,
    'name': 'Shield Part Half Circle',
    'embedded': {
      'Insert_Shield_Part_112': {
        'hash': 112,
        'name': 'Insert Shield Part',
        'savables': {}
      },
      'Shield_Part_Half_Circle_50886': {
        'hash': 50886,
        'name': 'Shield Part Half Circle',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Deco_25868': {
        'hash': 25868,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_25870': {
        'hash': 25870,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_51506': {
        'hash': 51506,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_51508': {
        'hash': 51508,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_52564': {
        'hash': 52564,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_52566': {
        'hash': 52566,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_53718': {
        'hash': 53718,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_53720': {
        'hash': 53720,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_55242': {
        'hash': 55242,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_55244': {
        'hash': 55244,
        'name': 'Slot Deco',
        'savables': {}
      }
    }
  },
  'Shield_Part_Half_Circle_Hole': {
    'hash': 44704,
    'name': 'Shield Part Half Circle Hole',
    'embedded': {
      'Insert_Shield_Part_112': {
        'hash': 112,
        'name': 'Insert Shield Part',
        'savables': {}
      },
      'Shield_Part_Half_Circle_Hole_44702': {
        'hash': 44702,
        'name': 'Shield Part Half Circle Hole',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Deco_25868': {
        'hash': 25868,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_25870': {
        'hash': 25870,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_51506': {
        'hash': 51506,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_51508': {
        'hash': 51508,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_52564': {
        'hash': 52564,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_52566': {
        'hash': 52566,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_55242': {
        'hash': 55242,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_55244': {
        'hash': 55244,
        'name': 'Slot Deco',
        'savables': {}
      }
    }
  },
  'Shield_Part_Half_Hole': {
    'hash': 12416,
    'name': 'Shield Part Half Hole',
    'embedded': {
      'Insert_Shield_Part_112': {
        'hash': 112,
        'name': 'Insert Shield Part',
        'savables': {}
      },
      'Shield_Part_Half_Hole_12414': {
        'hash': 12414,
        'name': 'Shield Part Half Hole',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Deco_20018': {
        'hash': 20018,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_46580': {
        'hash': 46580,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_52138': {
        'hash': 52138,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_56752': {
        'hash': 56752,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_63256': {
        'hash': 63256,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_854': {
        'hash': 854,
        'name': 'Slot Deco',
        'savables': {}
      }
    }
  },
  'Shield_Part_Half_Point_01': {
    'hash': 59936,
    'name': 'Shield Part Half Point 01',
    'embedded': {
      'Insert_Shield_Part_112': {
        'hash': 112,
        'name': 'Insert Shield Part',
        'savables': {}
      },
      'Shield_Part_Half_Point_01_56662': {
        'hash': 56662,
        'name': 'Shield Part Half Point 01',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Slot_Deco_20420': {
        'hash': 20420,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_26340': {
        'hash': 26340,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_26366': {
        'hash': 26366,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_26368': {
        'hash': 26368,
        'name': 'Slot Deco',
        'savables': {}
      },
      'Slot_Deco_26396': {
        'hash': 26396,
        'name': 'Slot Deco',
        'savables': {}
      }
    }
  },
  'Short_Sword': {
    'hash': 38566,
    'name': 'Short Sword',
    'embedded': {
      'Short_Sword_36330': {
        'hash': 36330,
        'name': 'Short Sword',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Short_Sword_Blade': {
    'hash': 55310,
    'name': 'Short Sword Blade',
    'embedded': {
      'Heat_Point_Collection_63534': {
        'hash': 63534,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Straight_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Straight SwordType',
        'savables': {}
      },
      'Short_Sword_Blade_36330': {
        'hash': 36330,
        'name': 'Short Sword Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'metal_blade_shortSword_full_geo_LOD0_4044': {
        'hash': 4044,
        'name': 'metal_blade_shortSword_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Short_Sword_Training': {
    'hash': 1150,
    'name': 'Short Sword Training',
    'embedded': {
      'Short_Sword_Training_1152': {
        'hash': 1152,
        'name': 'Short Sword Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Shotel_Blade': {
    'hash': 36438,
    'name': 'Shotel Blade',
    'embedded': {
      'Heat_Point_Collection_2136': {
        'hash': 2136,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert SwordType',
        'savables': {}
      },
      'Shotel_Blade_36346': {
        'hash': 36346,
        'name': 'Shotel Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'metal_blade_shotel_full_geo_LOD0_22394': {
        'hash': 22394,
        'name': 'metal_blade_shotel_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Silver_Boulder': {
    'hash': 9144,
    'name': 'Silver Boulder',
    'embedded': {
      'Silver_Boulder_11186': {
        'hash': 11186,
        'name': 'Silver Boulder',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawn_Origin_50402': {
        'hash': 50402,
        'name': 'Spawn Origin',
        'savables': {}
      }
    }
  },
  'Silver_Boulder_Parts': {
    'hash': 17120,
    'name': 'Silver_Boulder_Parts',
    'embedded': {
      'Silver_Boulder_Parts_56732': {
        'hash': 56732,
        'name': 'Silver_Boulder_Parts',
        'savables': {}
      },
      'Silver_Boulder_part_01_56744': {
        'hash': 56744,
        'name': 'Silver_Boulder_part_01',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Silver_Boulder_part_02_56752': {
        'hash': 56752,
        'name': 'Silver_Boulder_part_02',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Silver_Boulder_part_03_56748': {
        'hash': 56748,
        'name': 'Silver_Boulder_part_03',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Silver_Ingot': {
    'hash': 23528,
    'name': 'Silver Ingot',
    'embedded': {
      'Heat_Point_Collection_13678': {
        'hash': 13678,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Silver_Ingot_23416': {
        'hash': 23416,
        'name': 'Silver Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Silver_Ore': {
    'hash': 9586,
    'name': 'Silver Ore',
    'embedded': {
      'Silver_Ore_28602': {
        'hash': 28602,
        'name': 'Silver Ore',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Skill_Orb': {
    'hash': 17270,
    'name': 'Skill Orb',
    'embedded': {
      'Skill_Orb_35828': {
        'hash': 35828,
        'name': 'Skill Orb',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Skill_Orb_Replacer': {
    'hash': 23526,
    'name': 'Skill Orb Replacer',
    'embedded': {
      'Skill_Orb_Replacer_35828': {
        'hash': 35828,
        'name': 'Skill Orb Replacer',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'SlidingBlockTestLayoutINCOMPLETE': {
    'hash': 8280,
    'name': 'SlidingBlockTestLayoutINCOMPLETE',
    'embedded': {}
  },
  'Sliding_Door': {
    'hash': 33420,
    'name': 'Sliding_Door',
    'embedded': {}
  },
  'Slingshot': {
    'hash': 13142,
    'name': 'Slingshot',
    'embedded': {
      'Projectile_Dock_40686': {
        'hash': 40686,
        'name': 'Projectile Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Slingshot_15402': {
        'hash': 15402,
        'name': 'Slingshot',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'String_40688': {
        'hash': 40688,
        'name': 'String',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Slow_Grass': {
    'hash': 59062,
    'name': 'Slow Grass',
    'embedded': {
      'Slow_Grass_7970': {
        'hash': 7970,
        'name': 'Slow Grass',
        'savables': {}
      }
    }
  },
  'Small_Bone_Spike': {
    'hash': 61488,
    'name': 'Small Bone Spike',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Small_Bone_Spike_15532': {
        'hash': 15532,
        'name': 'Small Bone Spike',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Small_Cave_Mushroom_01': {
    'hash': 33796,
    'name': 'Small Cave Mushroom 01',
    'embedded': {
      'Small_Cave_Mushroom_01_33544': {
        'hash': 33544,
        'name': 'Small Cave Mushroom 01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawner_3488': {
        'hash': 3488,
        'name': 'Spawner',
        'savables': {}
      },
      'cave_mushroom_small_spineTop_jnt_38718': {
        'hash': 38718,
        'name': 'cave_mushroom_small_spineTop_jnt',
        'savables': {}
      },
      'cave_mushroom_small_spine_jnt_46098': {
        'hash': 46098,
        'name': 'cave_mushroom_small_spine_jnt',
        'savables': {}
      }
    }
  },
  'Small_Cave_Mushroom_Cluster': {
    'hash': 56444,
    'name': 'Small Cave Mushroom Cluster',
    'embedded': {
      'Small_Cave_Mushroom_Cluster_61380': {
        'hash': 61380,
        'name': 'Small Cave Mushroom Cluster',
        'savables': {}
      }
    }
  },
  'Small_Shield': {
    'hash': 63498,
    'name': 'Small Shield',
    'embedded': {
      'Insert_Shield_64244': {
        'hash': 64244,
        'name': 'Insert Shield',
        'savables': {}
      },
      'Small_Shield_32452': {
        'hash': 32452,
        'name': 'Small Shield',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Small_Shield_Training': {
    'hash': 21312,
    'name': 'Small Shield Training',
    'embedded': {
      'Small_Shield_Training_21302': {
        'hash': 21302,
        'name': 'Small Shield Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Smelter': {
    'hash': 44646,
    'name': 'Smelter',
    'embedded': {
      'Dock_37092': {
        'hash': 37092,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_37150': {
        'hash': 37150,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_37236': {
        'hash': 37236,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Fuel_54958': {
        'hash': 54958,
        'name': 'Dock Fuel',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Ore_(B)_42990': {
        'hash': 42990,
        'name': 'Dock Ore (B)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Ore_(T)_54962': {
        'hash': 54962,
        'name': 'Dock Ore (T)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Ore_Dispenser_L_54940': {
        'hash': 54940,
        'name': 'Dock Ore Dispenser L',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Ore_Dispenser_M_54938': {
        'hash': 54938,
        'name': 'Dock Ore Dispenser M',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Ore_Dispenser_R_54936': {
        'hash': 54936,
        'name': 'Dock Ore Dispenser R',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Output_54928': {
        'hash': 54928,
        'name': 'Dock Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_Output_54930': {
        'hash': 54930,
        'name': 'Dock Output',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Fire_54948': {
        'hash': 54948,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          }
        }
      },
      'Handle_24422': {
        'hash': 24422,
        'name': 'Handle',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_38408': {
        'hash': 38408,
        'name': 'Handle',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_5088': {
        'hash': 5088,
        'name': 'Handle',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Mould_Dock_54960': {
        'hash': 54960,
        'name': 'Mould Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Smelter_19322': {
        'hash': 19322,
        'name': 'Smelter',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'Smelter': {
            'hash': 902024186,
            'name': 'Smelter'
          }
        }
      },
      'UnlockDocks_10172': {
        'hash': 10172,
        'name': 'UnlockDocks',
        'savables': {
          'PositionRestrictor': {
            'hash': 1776498660,
            'name': 'PositionRestrictor'
          }
        }
      },
      'smelter_bellows_arm_jnt_25672': {
        'hash': 25672,
        'name': 'smelter_bellows_arm_jnt',
        'savables': {}
      },
      'smelter_dispenser_lever_Handle_5912': {
        'hash': 5912,
        'name': 'smelter_dispenser_lever_Handle',
        'savables': {
          'Lever': {
            'hash': 1594932294,
            'name': 'Lever'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'smelter_fuelGate_handle_59832': {
        'hash': 59832,
        'name': 'smelter_fuelGate_handle',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'smelter_fuelGate_pivot_10060': {
        'hash': 10060,
        'name': 'smelter_fuelGate_pivot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Smelter_Gem_1': {
    'hash': 34986,
    'name': 'Smelter Gem 1',
    'embedded': {
      'Smelter_Gem_1_11514': {
        'hash': 11514,
        'name': 'Smelter Gem 1',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Smelter_Gem_2': {
    'hash': 41638,
    'name': 'Smelter Gem 2',
    'embedded': {
      'Smelter_Gem_2_11514': {
        'hash': 11514,
        'name': 'Smelter Gem 2',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Smelter_Gem_3': {
    'hash': 46508,
    'name': 'Smelter Gem 3',
    'embedded': {
      'Smelter_Gem_3_11514': {
        'hash': 11514,
        'name': 'Smelter Gem 3',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Smelter_gem_2_item_pedestal': {
    'hash': 56098,
    'name': 'Smelter gem 2 item pedestal',
    'embedded': {
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      },
      'Smelter_gem_2_item_pedestal_27194': {
        'hash': 27194,
        'name': 'Smelter gem 2 item pedestal',
        'savables': {}
      }
    }
  },
  'Smelter_gem_3_item_pedestal': {
    'hash': 63036,
    'name': 'Smelter gem 3 item pedestal',
    'embedded': {
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      },
      'Smelter_gem_3_item_pedestal_27194': {
        'hash': 27194,
        'name': 'Smelter gem 3 item pedestal',
        'savables': {}
      }
    }
  },
  'Soft_Fabric_Large_Roll': {
    'hash': 23206,
    'name': 'Soft Fabric Large Roll',
    'embedded': {
      'Soft_Fabric_Large_Roll_47776': {
        'hash': 47776,
        'name': 'Soft Fabric Large Roll',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawner_43650': {
        'hash': 43650,
        'name': 'Spawner',
        'savables': {}
      }
    }
  },
  'Soft_Fabric_Medium_Roll': {
    'hash': 47760,
    'name': 'Soft Fabric Medium Roll',
    'embedded': {
      'Soft_Fabric_Medium_Roll_47776': {
        'hash': 47776,
        'name': 'Soft Fabric Medium Roll',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spawner_43650': {
        'hash': 43650,
        'name': 'Spawner',
        'savables': {}
      }
    }
  },
  'Soft_Fabric_Medium_Strips': {
    'hash': 63204,
    'name': 'Soft Fabric Medium Strips',
    'embedded': {
      'Soft_Fabric_Medium_Strips_63188': {
        'hash': 63188,
        'name': 'Soft Fabric Medium Strips',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Spade_Head': {
    'hash': 50548,
    'name': 'Spade Head',
    'embedded': {
      'Fake_Pickup_6096': {
        'hash': 6096,
        'name': 'Fake Pickup',
        'savables': {}
      },
      'Insert_AxeType_7796': {
        'hash': 7796,
        'name': 'Insert AxeType',
        'savables': {}
      },
      'Spade_Head_60654': {
        'hash': 60654,
        'name': 'Spade Head',
        'savables': {
          'DiggingImpactor': {
            'hash': 3445325106,
            'name': 'DiggingImpactor'
          },
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'spade_head_LOD0_45520': {
        'hash': 45520,
        'name': 'spade_head_LOD0',
        'savables': {}
      }
    }
  },
  'Spawn_Point': {
    'hash': 63844,
    'name': 'Spawn Point',
    'embedded': {
      'Spawn_Point_4036': {
        'hash': 4036,
        'name': 'Spawn Point',
        'savables': {}
      }
    }
  },
  'Spawner_Test': {
    'hash': 51070,
    'name': 'Spawner_Test',
    'embedded': {}
  },
  'Spear_Head_Pyramid': {
    'hash': 13554,
    'name': 'Spear_Head_Pyramid',
    'embedded': {}
  },
  'Spear_Head_Spiky': {
    'hash': 13680,
    'name': 'Spear_Head_Spiky',
    'embedded': {}
  },
  'Spear_Head_Standard': {
    'hash': 13816,
    'name': 'Spear_Head_Standard',
    'embedded': {}
  },
  'Spectral_Ghost': {
    'hash': 57494,
    'name': 'Spectral_Ghost',
    'embedded': {}
  },
  'Spherical_Encounter': {
    'hash': 1222,
    'name': 'Spherical_Encounter',
    'embedded': {}
  },
  'Spike_Fancy': {
    'hash': 12492,
    'name': 'Spike Fancy',
    'embedded': {
      'Heat_Point_Collection_3584': {
        'hash': 3584,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Spike_Fancy_15532': {
        'hash': 15532,
        'name': 'Spike Fancy',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spike_Short': {
    'hash': 6934,
    'name': 'Spike Short',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Spike_Short_15532': {
        'hash': 15532,
        'name': 'Spike Short',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spike_Tall': {
    'hash': 3558,
    'name': 'Spike Tall',
    'embedded': {
      'Insert_Deco_112': {
        'hash': 112,
        'name': 'Insert Deco',
        'savables': {}
      },
      'Spike_Tall_15532': {
        'hash': 15532,
        'name': 'Spike Tall',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spire_Gcore_Dynamic': {
    'hash': 23472,
    'name': 'Spire Gcore Dynamic',
    'embedded': {
      'Directional_Encounter_33516': {
        'hash': 33516,
        'name': 'Directional Encounter',
        'savables': {
          'DirectionalBoundsSurface': {
            'hash': 1962842866,
            'name': 'DirectionalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Spire_Gcore_Dynamic_23456': {
        'hash': 23456,
        'name': 'Spire Gcore Dynamic',
        'savables': {}
      }
    }
  },
  'Spread_Spawner_Dynamic': {
    'hash': 18426,
    'name': 'Spread Spawner Dynamic',
    'embedded': {
      'Directional_Encounter_(1)_45120': {
        'hash': 45120,
        'name': 'Directional Encounter (1)',
        'savables': {
          'DirectionalBoundsSurface': {
            'hash': 1962842866,
            'name': 'DirectionalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Directional_Encounter_45108': {
        'hash': 45108,
        'name': 'Directional Encounter',
        'savables': {
          'DirectionalBoundsSurface': {
            'hash': 1962842866,
            'name': 'DirectionalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Spread_Spawner_Dynamic_18410': {
        'hash': 18410,
        'name': 'Spread Spawner Dynamic',
        'savables': {}
      }
    }
  },
  'Spriggull': {
    'hash': 62050,
    'name': 'Spriggull',
    'embedded': {
      'Body_60576': {
        'hash': 60576,
        'name': 'Body',
        'savables': {}
      },
      'Heat_42194': {
        'hash': 42194,
        'name': 'Heat',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Interactor_2642': {
        'hash': 2642,
        'name': 'Interactor',
        'savables': {}
      },
      'Spriggull_62666': {
        'hash': 62666,
        'name': 'Spriggull',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Spriggull_AI_58356': {
        'hash': 58356,
        'name': 'Spriggull AI',
        'savables': {}
      },
      'skin_jaw_jnt_48650': {
        'hash': 48650,
        'name': 'skin_jaw_jnt',
        'savables': {}
      }
    }
  },
  'SpriggullDrumstick_Bone': {
    'hash': 24406,
    'name': 'SpriggullDrumstick Bone',
    'embedded': {
      'SpriggullDrumstick_Bone_26390': {
        'hash': 26390,
        'name': 'SpriggullDrumstick Bone',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'SpriggullDrumstick_Full_Burnt': {
    'hash': 20570,
    'name': 'SpriggullDrumstick Full Burnt',
    'embedded': {
      'Bone_Spawner_16064': {
        'hash': 16064,
        'name': 'Bone Spawner',
        'savables': {}
      },
      'Cooking_35958': {
        'hash': 35958,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'SpriggullDrumstick_Full_Burnt_36708': {
        'hash': 36708,
        'name': 'SpriggullDrumstick Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'SpriggullDrumstick_Full_Cooked': {
    'hash': 33190,
    'name': 'SpriggullDrumstick Full Cooked',
    'embedded': {
      'Bone_Spawner_16556': {
        'hash': 16556,
        'name': 'Bone Spawner',
        'savables': {}
      },
      'Cooking_29822': {
        'hash': 29822,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'SpriggullDrumstick_Full_Cooked_30572': {
        'hash': 30572,
        'name': 'SpriggullDrumstick Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'SpriggullDrumstick_Full_Ripe': {
    'hash': 43430,
    'name': 'SpriggullDrumstick Full Ripe',
    'embedded': {
      'Bone_Spawner_38786': {
        'hash': 38786,
        'name': 'Bone Spawner',
        'savables': {}
      },
      'Cooking_24500': {
        'hash': 24500,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'SpriggullDrumstick_Full_Ripe_25250': {
        'hash': 25250,
        'name': 'SpriggullDrumstick Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'SpriggullDrumstick_Half_Burnt': {
    'hash': 10908,
    'name': 'SpriggullDrumstick Half Burnt',
    'embedded': {
      'Cooking_19872': {
        'hash': 19872,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'SpriggullDrumstick_Half_Burnt_19928': {
        'hash': 19928,
        'name': 'SpriggullDrumstick Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'SpriggullDrumstick_Half_Cooked': {
    'hash': 8440,
    'name': 'SpriggullDrumstick Half Cooked',
    'embedded': {
      'Cooking_18026': {
        'hash': 18026,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'SpriggullDrumstick_Half_Cooked_18082': {
        'hash': 18082,
        'name': 'SpriggullDrumstick Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'SpriggullDrumstick_Half_Ripe': {
    'hash': 5972,
    'name': 'SpriggullDrumstick Half Ripe',
    'embedded': {
      'Cooking_16182': {
        'hash': 16182,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'SpriggullDrumstick_Half_Ripe_16238': {
        'hash': 16238,
        'name': 'SpriggullDrumstick Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spriggull_Egg': {
    'hash': 7014,
    'name': 'Spriggull Egg',
    'embedded': {
      'Spriggull_Egg_5216': {
        'hash': 5216,
        'name': 'Spriggull Egg',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Spriggull_Feather_Blue': {
    'hash': 7918,
    'name': 'Spriggull Feather Blue',
    'embedded': {
      'Spriggull_Feather_Blue_61684': {
        'hash': 61684,
        'name': 'Spriggull Feather Blue',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spriggull_Feather_Green': {
    'hash': 25446,
    'name': 'Spriggull Feather Green',
    'embedded': {
      'Insert_Feather_112': {
        'hash': 112,
        'name': 'Insert Feather',
        'savables': {}
      },
      'Spriggull_Feather_Green_25450': {
        'hash': 25450,
        'name': 'Spriggull Feather Green',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spriggull_Feather_Purple': {
    'hash': 36248,
    'name': 'Spriggull Feather Purple',
    'embedded': {
      'Insert_Feather_112': {
        'hash': 112,
        'name': 'Insert Feather',
        'savables': {}
      },
      'Spriggull_Feather_Purple_36244': {
        'hash': 36244,
        'name': 'Spriggull Feather Purple',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spriggull_Feather_Red': {
    'hash': 18734,
    'name': 'Spriggull Feather Red',
    'embedded': {
      'Spriggull_Feather_Red_18738': {
        'hash': 18738,
        'name': 'Spriggull Feather Red',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spriggull_Fletching_Blue': {
    'hash': 50608,
    'name': 'Spriggull Fletching Blue',
    'embedded': {
      'Insert_Feather_51282': {
        'hash': 51282,
        'name': 'Insert Feather',
        'savables': {}
      },
      'Spriggull_Fletching_Blue_51284': {
        'hash': 51284,
        'name': 'Spriggull Fletching Blue',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spriggull_Fletching_Red': {
    'hash': 24072,
    'name': 'Spriggull Fletching Red',
    'embedded': {
      'Insert_Feather_112': {
        'hash': 112,
        'name': 'Insert Feather',
        'savables': {}
      },
      'Spriggull_Fletching_Red_18738': {
        'hash': 18738,
        'name': 'Spriggull Fletching Red',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Spriggull_Nest': {
    'hash': 16680,
    'name': 'Spriggull Nest',
    'embedded': {
      'Spriggull_Nest_16166': {
        'hash': 16166,
        'name': 'Spriggull Nest',
        'savables': {}
      }
    }
  },
  'SpyGlass': {
    'hash': 5170,
    'name': 'SpyGlass',
    'embedded': {
      'SpyGlass_7714': {
        'hash': 7714,
        'name': 'SpyGlass',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'spyglass_body_01_57858': {
        'hash': 57858,
        'name': 'spyglass_body_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'spyglass_body_02_57854': {
        'hash': 57854,
        'name': 'spyglass_body_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'spyglass_wraps_57850': {
        'hash': 57850,
        'name': 'spyglass_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'SpyGlass_Long': {
    'hash': 64848,
    'name': 'SpyGlass Long',
    'embedded': {
      'SpyGlass_Long_7714': {
        'hash': 7714,
        'name': 'SpyGlass Long',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Stalactite_pillar': {
    'hash': 3944,
    'name': 'Stalactite pillar',
    'embedded': {
      'Explosion_17130': {
        'hash': 17130,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosion_17244': {
        'hash': 17244,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosion_17358': {
        'hash': 17358,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosion_17472': {
        'hash': 17472,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosion_17586': {
        'hash': 17586,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosion_17700': {
        'hash': 17700,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosion_21698': {
        'hash': 21698,
        'name': 'Explosion',
        'savables': {}
      },
      'Explosive_Spike_Stalactite(NoNetworkPrefab)_17234': {
        'hash': 17234,
        'name': 'Explosive Spike Stalactite(NoNetworkPrefab)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Explosive_Spike_Stalactite(NoNetworkPrefab)_17348': {
        'hash': 17348,
        'name': 'Explosive Spike Stalactite(NoNetworkPrefab)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Explosive_Spike_Stalactite(NoNetworkPrefab)_17462': {
        'hash': 17462,
        'name': 'Explosive Spike Stalactite(NoNetworkPrefab)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Explosive_Spike_Stalactite(NoNetworkPrefab)_17576': {
        'hash': 17576,
        'name': 'Explosive Spike Stalactite(NoNetworkPrefab)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Explosive_Spike_Stalactite(NoNetworkPrefab)_17690': {
        'hash': 17690,
        'name': 'Explosive Spike Stalactite(NoNetworkPrefab)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Explosive_Spike_Stalactite(NoNetworkPrefab)_17804': {
        'hash': 17804,
        'name': 'Explosive Spike Stalactite(NoNetworkPrefab)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Explosive_Spike_Stalactite(NoNetworkPrefab)_21742': {
        'hash': 21742,
        'name': 'Explosive Spike Stalactite(NoNetworkPrefab)',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'Hit_Detection_44554': {
        'hash': 44554,
        'name': 'Hit Detection',
        'savables': {
          'ImpactDetectionLogic': {
            'hash': 1435171891,
            'name': 'ImpactDetectionLogic'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Stalactite_pillar_50810': {
        'hash': 50810,
        'name': 'Stalactite pillar',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      }
    }
  },
  'Standard_Crafted_Mould': {
    'hash': 38578,
    'name': 'Standard Crafted Mould',
    'embedded': {
      'Flat_Mould_Emblem_9986': {
        'hash': 9986,
        'name': 'Flat Mould Emblem',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Standard_Crafted_Mould_14710': {
        'hash': 14710,
        'name': 'Standard Crafted Mould',
        'savables': {
          'Mould': {
            'hash': 391977879,
            'name': 'Mould'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'mould_standard_ingotGraphic_60818': {
        'hash': 60818,
        'name': 'mould_standard_ingotGraphic',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'mould_standard_outerFrame_01_60826': {
        'hash': 60826,
        'name': 'mould_standard_outerFrame_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'mould_standard_railSlot_01_60830': {
        'hash': 60830,
        'name': 'mould_standard_railSlot_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'mould_standard_railSlot_02_60814': {
        'hash': 60814,
        'name': 'mould_standard_railSlot_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'mould_standard_railSlot_03_60822': {
        'hash': 60822,
        'name': 'mould_standard_railSlot_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'mould_standard_railSlot_04_60806': {
        'hash': 60806,
        'name': 'mould_standard_railSlot_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'mould_standard_timesGraphic_60810': {
        'hash': 60810,
        'name': 'mould_standard_timesGraphic',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Standard_Side_Pouch_Attachment': {
    'hash': 7852,
    'name': 'Standard Side Pouch Attachment',
    'embedded': {
      'Dock_45700': {
        'hash': 45700,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62078': {
        'hash': 62078,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Insert_Bag_Attach_7796': {
        'hash': 7796,
        'name': 'Insert Bag Attach',
        'savables': {}
      },
      'Standard_Side_Pouch_Attachment_7868': {
        'hash': 7868,
        'name': 'Standard Side Pouch Attachment',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Storage_52822': {
        'hash': 52822,
        'name': 'Storage',
        'savables': {}
      },
      'standard_sidePouch_backPin_L1_7968': {
        'hash': 7968,
        'name': 'standard_sidePouch_backPin_L1',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_sidePouch_body_7972': {
        'hash': 7972,
        'name': 'standard_sidePouch_body',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_sidePouch_body_flap_7980': {
        'hash': 7980,
        'name': 'standard_sidePouch_body_flap',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_sidePouch_flap_7976': {
        'hash': 7976,
        'name': 'standard_sidePouch_flap',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Standard_Side_Tool_Attachment': {
    'hash': 59468,
    'name': 'Standard Side Tool Attachment',
    'embedded': {
      'Dock_62078': {
        'hash': 62078,
        'name': 'Dock',
        'savables': {
          'AdditionalOwnedDock': {
            'hash': 2592242915,
            'name': 'AdditionalOwnedDock'
          }
        }
      },
      'Insert_Bag_Attach_7796': {
        'hash': 7796,
        'name': 'Insert Bag Attach',
        'savables': {}
      },
      'Standard_Side_Tool_Attachment_7868': {
        'hash': 7868,
        'name': 'Standard Side Tool Attachment',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Storage_52526': {
        'hash': 52526,
        'name': 'Storage',
        'savables': {}
      },
      'standard_sideTool_slot_loop_33788': {
        'hash': 33788,
        'name': 'standard_sideTool_slot_loop',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_sideTool_slot_pad_01_33784': {
        'hash': 33784,
        'name': 'standard_sideTool_slot_pad_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_sideTool_slot_pad_02_33780': {
        'hash': 33780,
        'name': 'standard_sideTool_slot_pad_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'standard_sideTool_slot_strap_01_33776': {
        'hash': 33776,
        'name': 'standard_sideTool_slot_strap_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Standard_Stages': {
    'hash': 31152,
    'name': 'Standard Stages',
    'embedded': {
      'Standard_Stages_53224': {
        'hash': 53224,
        'name': 'Standard Stages',
        'savables': {
          'StageBasedPrefab': {
            'hash': 1390862571,
            'name': 'StageBasedPrefab'
          }
        }
      }
    }
  },
  'Steam_Spray': {
    'hash': 53376,
    'name': 'Steam Spray',
    'embedded': {
      'Hurting_Bit_26178': {
        'hash': 26178,
        'name': 'Hurting Bit',
        'savables': {}
      },
      'Start_event_44764': {
        'hash': 44764,
        'name': 'Start event',
        'savables': {}
      },
      'Steam_Spray_61896': {
        'hash': 61896,
        'name': 'Steam Spray',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'Stop_event_45050': {
        'hash': 45050,
        'name': 'Stop event',
        'savables': {}
      }
    }
  },
  'Steel_Alloy_Ingot': {
    'hash': 22222,
    'name': 'Steel_Alloy_Ingot',
    'embedded': {}
  },
  'Stick': {
    'hash': 61674,
    'name': 'Stick',
    'embedded': {
      'Slot_Multi_64914': {
        'hash': 64914,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Slot_Primitive_SwordType_30294': {
        'hash': 30294,
        'name': 'Slot Primitive SwordType',
        'savables': {}
      },
      'Stick_31654': {
        'hash': 31654,
        'name': 'Stick',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Stick_Charred': {
    'hash': 20564,
    'name': 'Stick Charred',
    'embedded': {
      'Stick_Charred_31654': {
        'hash': 31654,
        'name': 'Stick Charred',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Stick_Storage': {
    'hash': 46252,
    'name': 'Stick Storage',
    'embedded': {
      'Filter_Dock_57214': {
        'hash': 57214,
        'name': 'Filter Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Interaction_Point_59032': {
        'hash': 59032,
        'name': 'Interaction Point',
        'savables': {}
      },
      'Internal_Dock_59328': {
        'hash': 59328,
        'name': 'Internal Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Stick_Storage_59042': {
        'hash': 59042,
        'name': 'Stick Storage',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'CommunalStorage': {
            'hash': 3084373371,
            'name': 'CommunalStorage'
          },
          'PlayerInteractionRestrictor': {
            'hash': 2951515968,
            'name': 'PlayerInteractionRestrictor'
          }
        }
      },
      'Withdraw_Dock_34750': {
        'hash': 34750,
        'name': 'Withdraw Dock',
        'savables': {}
      }
    }
  },
  'Stick_Training': {
    'hash': 61414,
    'name': 'Stick Training',
    'embedded': {
      'Stick_Training_61396': {
        'hash': 61396,
        'name': 'Stick Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Stone': {
    'hash': 61670,
    'name': 'Stone',
    'embedded': {
      'Insert_Primitive_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Primitive SwordType',
        'savables': {}
      },
      'Stone_30920': {
        'hash': 30920,
        'name': 'Stone',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Stone_Boulder_01': {
    'hash': 33376,
    'name': 'Stone Boulder 01',
    'embedded': {
      'Stone_Boulder_01_33370': {
        'hash': 33370,
        'name': 'Stone Boulder 01',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Stone_Boulder_02': {
    'hash': 17686,
    'name': 'Stone Boulder 02',
    'embedded': {
      'Stone_Boulder_02_17680': {
        'hash': 17680,
        'name': 'Stone Boulder 02',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Stone_Boulder_03': {
    'hash': 12450,
    'name': 'Stone Boulder 03',
    'embedded': {
      'Stone_Boulder_03_12444': {
        'hash': 12444,
        'name': 'Stone Boulder 03',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Stone_Boulder_Cluster': {
    'hash': 8948,
    'name': 'Stone Boulder Cluster',
    'embedded': {
      'Stone_Boulder_Cluster_8942': {
        'hash': 8942,
        'name': 'Stone Boulder Cluster',
        'savables': {}
      }
    }
  },
  'Stone_Training': {
    'hash': 19490,
    'name': 'Stone Training',
    'embedded': {
      'Stone_Training_19480': {
        'hash': 19480,
        'name': 'Stone Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Storage_Chest': {
    'hash': 63826,
    'name': 'Storage Chest',
    'embedded': {
      'Bottom_Dock_1_2780': {
        'hash': 2780,
        'name': 'Bottom Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_2_2778': {
        'hash': 2778,
        'name': 'Bottom Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_3_2776': {
        'hash': 2776,
        'name': 'Bottom Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_4_2770': {
        'hash': 2770,
        'name': 'Bottom Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_5_2772': {
        'hash': 2772,
        'name': 'Bottom Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_6_2774': {
        'hash': 2774,
        'name': 'Bottom Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_Left_23970': {
        'hash': 23970,
        'name': 'Handle Left',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_Right_23964': {
        'hash': 23964,
        'name': 'Handle Right',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Lid_2768': {
        'hash': 2768,
        'name': 'Lid',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Storage_Chest_2788': {
        'hash': 2788,
        'name': 'Storage Chest',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'Chest': {
            'hash': 3598052397,
            'name': 'Chest'
          }
        }
      },
      'Top_Dock_1_2766': {
        'hash': 2766,
        'name': 'Top Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_2_2764': {
        'hash': 2764,
        'name': 'Top Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_3_2762': {
        'hash': 2762,
        'name': 'Top Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_4_2756': {
        'hash': 2756,
        'name': 'Top Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_5_2758': {
        'hash': 2758,
        'name': 'Top Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_6_2760': {
        'hash': 2760,
        'name': 'Top Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'Storage_Crate_Parts': {
    'hash': 16574,
    'name': 'Storage Crate Parts',
    'embedded': {
      'Storage_Crate_Parts_23406': {
        'hash': 23406,
        'name': 'Storage Crate Parts',
        'savables': {}
      }
    }
  },
  'Storage_Crate_Redwood_Closed': {
    'hash': 59594,
    'name': 'Storage Crate Redwood Closed',
    'embedded': {
      'Spawn_Content_29300': {
        'hash': 29300,
        'name': 'Spawn Content',
        'savables': {}
      },
      'Storage_Crate_Redwood_Closed_64282': {
        'hash': 64282,
        'name': 'Storage Crate Redwood Closed',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Storage_Crate_Redwood_Open': {
    'hash': 32788,
    'name': 'Storage Crate Redwood Open',
    'embedded': {
      'Random_Spawn_Rectangle_22462': {
        'hash': 22462,
        'name': 'Random Spawn Rectangle',
        'savables': {
          'RandomSpawnRectangle': {
            'hash': 3101665521,
            'name': 'RandomSpawnRectangle'
          }
        }
      },
      'Spawn_Content_3812': {
        'hash': 3812,
        'name': 'Spawn Content',
        'savables': {}
      },
      'Storage_Crate_Redwood_Open_50750': {
        'hash': 50750,
        'name': 'Storage Crate Redwood Open',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Street_Post': {
    'hash': 57248,
    'name': 'Street Post',
    'embedded': {
      'Sign_Body_17004': {
        'hash': 17004,
        'name': 'Sign Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Street_Post_54666': {
        'hash': 54666,
        'name': 'Street Post',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      },
      'Visual_1_28010': {
        'hash': 28010,
        'name': 'Visual 1',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      },
      'Visual_2_57532': {
        'hash': 57532,
        'name': 'Visual 2',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      },
      'Visual_3_15494': {
        'hash': 15494,
        'name': 'Visual 3',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      },
      'Visual_4_9368': {
        'hash': 9368,
        'name': 'Visual 4',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      }
    }
  },
  'Structure_Chest': {
    'hash': 35280,
    'name': 'Structure Chest',
    'embedded': {
      'Bottom_Dock_1_2780': {
        'hash': 2780,
        'name': 'Bottom Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_2_2778': {
        'hash': 2778,
        'name': 'Bottom Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_3_2776': {
        'hash': 2776,
        'name': 'Bottom Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_4_2770': {
        'hash': 2770,
        'name': 'Bottom Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_5_2772': {
        'hash': 2772,
        'name': 'Bottom Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Bottom_Dock_6_2774': {
        'hash': 2774,
        'name': 'Bottom Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Handle_Left_23970': {
        'hash': 23970,
        'name': 'Handle Left',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_Right_23964': {
        'hash': 23964,
        'name': 'Handle Right',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Lid_2768': {
        'hash': 2768,
        'name': 'Lid',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Storage_Chest_(1)_2788': {
        'hash': 2788,
        'name': 'Storage Chest (1)',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'Chest': {
            'hash': 3598052397,
            'name': 'Chest'
          }
        }
      },
      'Structure_Chest_21454': {
        'hash': 21454,
        'name': 'Structure Chest',
        'savables': {
          'GeneratedLoot': {
            'hash': 3642863935,
            'name': 'GeneratedLoot'
          }
        }
      },
      'Top_Dock_1_2766': {
        'hash': 2766,
        'name': 'Top Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_2_2764': {
        'hash': 2764,
        'name': 'Top Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_3_2762': {
        'hash': 2762,
        'name': 'Top Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_4_2756': {
        'hash': 2756,
        'name': 'Top Dock 4',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_5_2758': {
        'hash': 2758,
        'name': 'Top Dock 5',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Top_Dock_6_2760': {
        'hash': 2760,
        'name': 'Top Dock 6',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      }
    }
  },
  'TEMP_Hebios_Camp_Spawner_Barren': {
    'hash': 33858,
    'name': 'TEMP_Hebios_Camp_Spawner_Barren',
    'embedded': {}
  },
  'TEMP_Hebios_Camp_Spawner_Valley': {
    'hash': 33880,
    'name': 'TEMP_Hebios_Camp_Spawner_Valley',
    'embedded': {}
  },
  'TEMP_Watch_Tower_Spawner': {
    'hash': 44032,
    'name': 'TEMP_Watch_Tower_Spawner',
    'embedded': {}
  },
  'Tab_Lever': {
    'hash': 3354,
    'name': 'Tab_Lever',
    'embedded': {}
  },
  'Table_Placer': {
    'hash': 25418,
    'name': 'Table Placer',
    'embedded': {
      'Table_Placer_29584': {
        'hash': 29584,
        'name': 'Table Placer',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Tall_Support': {
    'hash': 46506,
    'name': 'Tall Support',
    'embedded': {
      'Tall_Support_5348': {
        'hash': 5348,
        'name': 'Tall Support',
        'savables': {}
      }
    }
  },
  'Tall_Support_Beams': {
    'hash': 5682,
    'name': 'Tall Support Beams',
    'embedded': {
      'Tall_Support_Beams_5680': {
        'hash': 5680,
        'name': 'Tall Support Beams',
        'savables': {}
      }
    }
  },
  'Targeted_Geyser': {
    'hash': 60812,
    'name': 'Targeted Geyser',
    'embedded': {
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Geyser_AI_29794': {
        'hash': 29794,
        'name': 'Geyser AI',
        'savables': {}
      },
      'Targeted_Geyser_37626': {
        'hash': 37626,
        'name': 'Targeted Geyser',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'TeleportOnTrueLogic': {
    'hash': 18260,
    'name': 'TeleportOnTrueLogic',
    'embedded': {
      'TeleportOnTrueLogic_11330': {
        'hash': 11330,
        'name': 'TeleportOnTrueLogic',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'TeleportationPoint': {
            'hash': 3146178080,
            'name': 'TeleportationPoint'
          }
        }
      }
    }
  },
  'Teleport_Point': {
    'hash': 33542,
    'name': 'Teleport_Point',
    'embedded': {}
  },
  'Teleporter_Puzzle': {
    'hash': 19164,
    'name': 'Teleporter Puzzle',
    'embedded': {
      'Customization_Teleporter_2940': {
        'hash': 2940,
        'name': 'Customization_Teleporter',
        'savables': {}
      },
      'Teleporter_Puzzle_7710': {
        'hash': 7710,
        'name': 'Teleporter Puzzle',
        'savables': {
          'LogicVector3Receiver': {
            'hash': 1228539097,
            'name': 'LogicVector3Receiver'
          },
          'LogicVector3Sender': {
            'hash': 2026743731,
            'name': 'LogicVector3Sender'
          },
          'PositionProvider': {
            'hash': 3538443740,
            'name': 'PositionProvider'
          },
          'TeleportationPoint': {
            'hash': 3146178080,
            'name': 'TeleportationPoint'
          }
        }
      }
    }
  },
  'Teleporter_To_Customization': {
    'hash': 60372,
    'name': 'Teleporter To Customization',
    'embedded': {
      'Customization_Teleporter_27658': {
        'hash': 27658,
        'name': 'Customization_Teleporter',
        'savables': {}
      },
      'Teleporter_To_Customization_60294': {
        'hash': 60294,
        'name': 'Teleporter To Customization',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Temp_Dynamic_Wall': {
    'hash': 31628,
    'name': 'Temp Dynamic Wall',
    'embedded': {
      'Temp_Dynamic_Wall_8038': {
        'hash': 8038,
        'name': 'Temp Dynamic Wall',
        'savables': {}
      }
    }
  },
  'Test_Fire': {
    'hash': 31268,
    'name': 'Test Fire',
    'embedded': {
      'Fire_30100': {
        'hash': 30100,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          }
        }
      },
      'Forge_Area_19102': {
        'hash': 19102,
        'name': 'Forge_Area',
        'savables': {}
      },
      'Test_Fire_61848': {
        'hash': 61848,
        'name': 'Test Fire',
        'savables': {}
      }
    }
  },
  'Test_Serializable_Large': {
    'hash': 57330,
    'name': 'Test_Serializable_Large',
    'embedded': {}
  },
  'Test_Serializable_Small': {
    'hash': 51498,
    'name': 'Test_Serializable_Small',
    'embedded': {}
  },
  'Thick_Great_Sword_Blade': {
    'hash': 25802,
    'name': 'Thick Great Sword Blade',
    'embedded': {
      'Heat_Point_Collection_64052': {
        'hash': 64052,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_Large_SwordType_7796': {
        'hash': 7796,
        'name': 'Insert Large SwordType',
        'savables': {}
      },
      'Thick_Great_Sword_Blade_84': {
        'hash': 84,
        'name': 'Thick Great Sword Blade',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'metal_thickGreatsword_blade_full_geo_LOD0_2564': {
        'hash': 2564,
        'name': 'metal_thickGreatsword_blade_full_geo_LOD0',
        'savables': {}
      }
    }
  },
  'Thin_Cloth_Medium_Square': {
    'hash': 34570,
    'name': 'Thin Cloth Medium Square',
    'embedded': {
      'Thin_Cloth_Medium_Square_14710': {
        'hash': 14710,
        'name': 'Thin Cloth Medium Square',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Timber_Bag': {
    'hash': 25122,
    'name': 'Timber Bag',
    'embedded': {
      'Bag_Body_42972': {
        'hash': 42972,
        'name': 'Bag Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Dock_TL_42990': {
        'hash': 42990,
        'name': 'Dock TL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Interaction_Point_59032': {
        'hash': 59032,
        'name': 'Interaction Point',
        'savables': {}
      },
      'Slot_Bag_Attach_30776': {
        'hash': 30776,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Slot_Bag_Attach_55164': {
        'hash': 55164,
        'name': 'Slot Bag Attach',
        'savables': {}
      },
      'Timber_Bag_43012': {
        'hash': 43012,
        'name': 'Timber Bag',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'basket_bag_handle_wraps_56574': {
        'hash': 56574,
        'name': 'basket_bag_handle_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'basket_handle_56602': {
        'hash': 56602,
        'name': 'basket_handle',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_leather_pad_14826': {
        'hash': 14826,
        'name': 'timber_bag_leather_pad',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_plank_01_14822': {
        'hash': 14822,
        'name': 'timber_bag_plank_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_plank_02_14818': {
        'hash': 14818,
        'name': 'timber_bag_plank_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_plank_03_14814': {
        'hash': 14814,
        'name': 'timber_bag_plank_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeKnot_01_14810': {
        'hash': 14810,
        'name': 'timber_bag_ropeKnot_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeKnot_02_14806': {
        'hash': 14806,
        'name': 'timber_bag_ropeKnot_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeKnot_03_14802': {
        'hash': 14802,
        'name': 'timber_bag_ropeKnot_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeKnot_04_14798': {
        'hash': 14798,
        'name': 'timber_bag_ropeKnot_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeKnot_05_14794': {
        'hash': 14794,
        'name': 'timber_bag_ropeKnot_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeKnot_07_14890': {
        'hash': 14890,
        'name': 'timber_bag_ropeKnot_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeKnot_08_14886': {
        'hash': 14886,
        'name': 'timber_bag_ropeKnot_08',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_01_14882': {
        'hash': 14882,
        'name': 'timber_bag_ropeNotch_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_02_14878': {
        'hash': 14878,
        'name': 'timber_bag_ropeNotch_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_03_14874': {
        'hash': 14874,
        'name': 'timber_bag_ropeNotch_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_04_14870': {
        'hash': 14870,
        'name': 'timber_bag_ropeNotch_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_05_14866': {
        'hash': 14866,
        'name': 'timber_bag_ropeNotch_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_06_14862': {
        'hash': 14862,
        'name': 'timber_bag_ropeNotch_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_07_14858': {
        'hash': 14858,
        'name': 'timber_bag_ropeNotch_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_ropeNotch_08_14854': {
        'hash': 14854,
        'name': 'timber_bag_ropeNotch_08',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_010_14846': {
        'hash': 14846,
        'name': 'timber_bag_stick_010',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_011_14842': {
        'hash': 14842,
        'name': 'timber_bag_stick_011',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_01_14850': {
        'hash': 14850,
        'name': 'timber_bag_stick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_02_14838': {
        'hash': 14838,
        'name': 'timber_bag_stick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_03_14834': {
        'hash': 14834,
        'name': 'timber_bag_stick_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_04_14830': {
        'hash': 14830,
        'name': 'timber_bag_stick_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_05_14790': {
        'hash': 14790,
        'name': 'timber_bag_stick_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_06_14786': {
        'hash': 14786,
        'name': 'timber_bag_stick_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_07_14782': {
        'hash': 14782,
        'name': 'timber_bag_stick_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_08_14778': {
        'hash': 14778,
        'name': 'timber_bag_stick_08',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_stick_09_14774': {
        'hash': 14774,
        'name': 'timber_bag_stick_09',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Timber_Side_Pouch_Attachment': {
    'hash': 7102,
    'name': 'Timber Side Pouch Attachment',
    'embedded': {
      'Dock_45700': {
        'hash': 45700,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62078': {
        'hash': 62078,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Insert_Bag_Attach_7796': {
        'hash': 7796,
        'name': 'Insert Bag Attach',
        'savables': {}
      },
      'Storage_52232': {
        'hash': 52232,
        'name': 'Storage',
        'savables': {}
      },
      'Timber_Side_Pouch_Attachment_7868': {
        'hash': 7868,
        'name': 'Timber Side Pouch Attachment',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'timber_bag_attachment_plank_01_358': {
        'hash': 358,
        'name': 'timber_bag_attachment_plank_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_ropeKnot_01_406': {
        'hash': 406,
        'name': 'timber_bag_attachment_ropeKnot_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_ropeKnot_02_402': {
        'hash': 402,
        'name': 'timber_bag_attachment_ropeKnot_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_ropeNotch_01_390': {
        'hash': 390,
        'name': 'timber_bag_attachment_ropeNotch_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_stick_01_386': {
        'hash': 386,
        'name': 'timber_bag_attachment_stick_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_stick_02_382': {
        'hash': 382,
        'name': 'timber_bag_attachment_stick_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_stick_03_378': {
        'hash': 378,
        'name': 'timber_bag_attachment_stick_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_stick_04_374': {
        'hash': 374,
        'name': 'timber_bag_attachment_stick_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_stick_05_370': {
        'hash': 370,
        'name': 'timber_bag_attachment_stick_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'timber_bag_attachment_stick_06_366': {
        'hash': 366,
        'name': 'timber_bag_attachment_stick_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Timed_Respawner': {
    'hash': 32620,
    'name': 'Timed Respawner',
    'embedded': {
      'Timed_Respawner_32662': {
        'hash': 32662,
        'name': 'Timed Respawner',
        'savables': {
          'RespawnOnDestroy': {
            'hash': 830106687,
            'name': 'RespawnOnDestroy'
          }
        }
      }
    }
  },
  'TimerLogic': {
    'hash': 18490,
    'name': 'TimerLogic',
    'embedded': {
      'TimerLogic_63978': {
        'hash': 63978,
        'name': 'TimerLogic',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'TimerLogic': {
            'hash': 3109677933,
            'name': 'TimerLogic'
          }
        }
      }
    }
  },
  'Tinder': {
    'hash': 34122,
    'name': 'Tinder',
    'embedded': {
      'Fire_8488': {
        'hash': 8488,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Spawner_49628': {
        'hash': 49628,
        'name': 'Spawner',
        'savables': {}
      },
      'Tinder_24372': {
        'hash': 24372,
        'name': 'Tinder',
        'savables': {
          'BasicDecay': {
            'hash': 3801256786,
            'name': 'BasicDecay'
          }
        }
      }
    }
  },
  'Tomato_Flower_Bloom': {
    'hash': 13022,
    'name': 'Tomato Flower Bloom',
    'embedded': {
      'Tomato_Flower_Bloom_49826': {
        'hash': 49826,
        'name': 'Tomato Flower Bloom',
        'savables': {}
      }
    }
  },
  'Tomato_Flower_Bud': {
    'hash': 13024,
    'name': 'Tomato Flower Bud',
    'embedded': {
      'Tomato_Flower_Bud_49898': {
        'hash': 49898,
        'name': 'Tomato Flower Bud',
        'savables': {}
      }
    }
  },
  'Tomato_Full_Burnt': {
    'hash': 38742,
    'name': 'Tomato Full Burnt',
    'embedded': {
      'Cooking_57238': {
        'hash': 57238,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Full_Burnt_38212': {
        'hash': 38212,
        'name': 'Tomato Full Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Tomato_Full_Cooked': {
    'hash': 38098,
    'name': 'Tomato Full Cooked',
    'embedded': {
      'Cooking_56718': {
        'hash': 56718,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Full_Cooked_37568': {
        'hash': 37568,
        'name': 'Tomato Full Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Tomato_Full_Ripe': {
    'hash': 37454,
    'name': 'Tomato Full Ripe',
    'embedded': {
      'Cooking_56198': {
        'hash': 56198,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Full_Ripe_36924': {
        'hash': 36924,
        'name': 'Tomato Full Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Tomato_Full_Unripe': {
    'hash': 36810,
    'name': 'Tomato Full Unripe',
    'embedded': {
      'Cooking_55678': {
        'hash': 55678,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Full_Unripe_36280': {
        'hash': 36280,
        'name': 'Tomato Full Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Tomato_Growth': {
    'hash': 19280,
    'name': 'Tomato Growth',
    'embedded': {
      'Tomato_Growth_33458': {
        'hash': 33458,
        'name': 'Tomato Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Tomato_Half_Burnt': {
    'hash': 57698,
    'name': 'Tomato Half Burnt',
    'embedded': {
      'Cooking_30630': {
        'hash': 30630,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Half_Burnt_57360': {
        'hash': 57360,
        'name': 'Tomato Half Burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Tomato_Half_Cooked': {
    'hash': 57294,
    'name': 'Tomato Half Cooked',
    'embedded': {
      'Cooking_30288': {
        'hash': 30288,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Half_Cooked_56956': {
        'hash': 56956,
        'name': 'Tomato Half Cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Tomato_Half_Ripe': {
    'hash': 56890,
    'name': 'Tomato Half Ripe',
    'embedded': {
      'Cooking_29946': {
        'hash': 29946,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Half_Ripe_56552': {
        'hash': 56552,
        'name': 'Tomato Half Ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Tomato_Half_Unripe': {
    'hash': 56486,
    'name': 'Tomato Half Unripe',
    'embedded': {
      'Cooking_29604': {
        'hash': 29604,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Tomato_Half_Unripe_56148': {
        'hash': 56148,
        'name': 'Tomato Half Unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Tomato_Tree': {
    'hash': 56492,
    'name': 'Tomato Tree',
    'embedded': {
      'Tomato_Tree_54408': {
        'hash': 54408,
        'name': 'Tomato Tree',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Tomato_Tree_Growth': {
    'hash': 16358,
    'name': 'Tomato Tree Growth',
    'embedded': {
      'Tomato_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Tomato Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Tomato_Tree_Separated': {
    'hash': 21548,
    'name': 'Tomato_Tree_Separated',
    'embedded': {}
  },
  'Tomato_Tree_Stage_1': {
    'hash': 2384,
    'name': 'Tomato Tree Stage 1',
    'embedded': {
      'Tomato_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Tomato Tree Stage 1',
        'savables': {}
      }
    }
  },
  'Tomato_Tree_Stage_2': {
    'hash': 2542,
    'name': 'Tomato Tree Stage 2',
    'embedded': {
      'Tomato_Tree_Stage_2_52164': {
        'hash': 52164,
        'name': 'Tomato Tree Stage 2',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Tomato_Tree_Stage_3': {
    'hash': 2892,
    'name': 'Tomato Tree Stage 3',
    'embedded': {
      'Tomato_Tree_Stage_3_23378': {
        'hash': 23378,
        'name': 'Tomato Tree Stage 3',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Torch': {
    'hash': 56698,
    'name': 'Torch',
    'embedded': {
      'Fire_30100': {
        'hash': 30100,
        'name': 'Fire',
        'savables': {
          'Fire': {
            'hash': 3457519710,
            'name': 'Fire'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Torch_30110': {
        'hash': 30110,
        'name': 'Torch',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Township_Bridge_Broken': {
    'hash': 8620,
    'name': 'Township Bridge Broken',
    'embedded': {
      'Township_Bridge_Broken_13660': {
        'hash': 13660,
        'name': 'Township Bridge Broken',
        'savables': {}
      }
    }
  },
  'Township_Bridge_Fixed': {
    'hash': 33334,
    'name': 'Township Bridge Fixed',
    'embedded': {
      'Township_Bridge_Fixed_13518': {
        'hash': 13518,
        'name': 'Township Bridge Fixed',
        'savables': {}
      }
    }
  },
  'Township_Bridge_Repair_Box': {
    'hash': 60674,
    'name': 'Township Bridge Repair Box',
    'embedded': {
      'Cost_1_22852': {
        'hash': 22852,
        'name': 'Cost 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_2_22786': {
        'hash': 22786,
        'name': 'Cost 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Cost_3_22772': {
        'hash': 22772,
        'name': 'Cost 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_1_22642': {
        'hash': 22642,
        'name': 'Dock 1',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_2_22692': {
        'hash': 22692,
        'name': 'Dock 2',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_3_22698': {
        'hash': 22698,
        'name': 'Dock 3',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Township_Bridge_Broken_60312': {
        'hash': 60312,
        'name': 'Township Bridge Broken',
        'savables': {}
      },
      'Township_Bridge_Repair_Box_60672': {
        'hash': 60672,
        'name': 'Township Bridge Repair Box',
        'savables': {
          'RepairBox': {
            'hash': 3820454400,
            'name': 'RepairBox'
          }
        }
      }
    }
  },
  'Trade_Deck': {
    'hash': 30016,
    'name': 'Trade Deck',
    'embedded': {
      'BuyCoinDisplay_3686': {
        'hash': 3686,
        'name': 'BuyCoinDisplay',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'BuyItemDisplay_3684': {
        'hash': 3684,
        'name': 'BuyItemDisplay',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'CoinTradeCounter_63408': {
        'hash': 63408,
        'name': 'CoinTradeCounter',
        'savables': {
          'ButtonCounter': {
            'hash': 3901697682,
            'name': 'ButtonCounter'
          }
        }
      },
      'Grab_14560': {
        'hash': 14560,
        'name': 'Grab',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grab_22452': {
        'hash': 22452,
        'name': 'Grab',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle_65280': {
        'hash': 65280,
        'name': 'Handle',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'ItemTradeCounters_404': {
        'hash': 404,
        'name': 'ItemTradeCounters',
        'savables': {
          'ButtonCounter': {
            'hash': 3901697682,
            'name': 'ButtonCounter'
          }
        }
      },
      'ProfitDock_52720': {
        'hash': 52720,
        'name': 'ProfitDock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'SellCoinDisplay_3680': {
        'hash': 3680,
        'name': 'SellCoinDisplay',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'SellItemDisplay_34750': {
        'hash': 34750,
        'name': 'SellItemDisplay',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'StockDock_50586': {
        'hash': 50586,
        'name': 'StockDock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'TaxDock_54312': {
        'hash': 54312,
        'name': 'TaxDock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'TaxLever_48782': {
        'hash': 48782,
        'name': 'TaxLever',
        'savables': {
          'Lever': {
            'hash': 1594932294,
            'name': 'Lever'
          }
        }
      },
      'TemporaryCoinDock_28320': {
        'hash': 28320,
        'name': 'TemporaryCoinDock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Trade_Deck_31038': {
        'hash': 31038,
        'name': 'Trade Deck',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'TaxManager': {
            'hash': 43510150,
            'name': 'TaxManager'
          },
          'TradeVendor': {
            'hash': 1645673210,
            'name': 'TradeVendor'
          }
        }
      }
    }
  },
  'TraderPrototype': {
    'hash': 28820,
    'name': 'TraderPrototype',
    'embedded': {}
  },
  'Training_Short_Sword_Blade_COLD': {
    'hash': 1850,
    'name': 'Training Short Sword Blade COLD',
    'embedded': {
      'Forged_Model_4044': {
        'hash': 4044,
        'name': 'Forged Model',
        'savables': {}
      },
      'Heat_Point_Collection_11428': {
        'hash': 11428,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Training_Short_Sword_Blade_COLD_36330': {
        'hash': 36330,
        'name': 'Training Short Sword Blade COLD',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Training_Short_Sword_Blade_HOT': {
    'hash': 13220,
    'name': 'Training Short Sword Blade HOT',
    'embedded': {
      'Forged_Model_4044': {
        'hash': 4044,
        'name': 'Forged Model',
        'savables': {}
      },
      'Heat_Point_Collection_11814': {
        'hash': 11814,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Training_Short_Sword_Blade_HOT_36330': {
        'hash': 36330,
        'name': 'Training Short Sword Blade HOT',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'ForgedPointCollection': {
            'hash': 2272630171,
            'name': 'ForgedPointCollection'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Tree': {
    'hash': 8860,
    'name': 'Tree',
    'embedded': {
      'Tree_54994': {
        'hash': 54994,
        'name': 'Tree',
        'savables': {
          'GrowthStageComponent': {
            'hash': 751359624,
            'name': 'GrowthStageComponent'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          },
          'TreeDecay': {
            'hash': 2042199192,
            'name': 'TreeDecay'
          },
          'WoodcutTree': {
            'hash': 1098050191,
            'name': 'WoodcutTree'
          }
        }
      }
    }
  },
  'Tree_Button_Spawner': {
    'hash': 3934,
    'name': 'Tree_Button_Spawner',
    'embedded': {}
  },
  'Tree_Grower': {
    'hash': 25934,
    'name': 'Tree Grower',
    'embedded': {
      'Tree_Grower_33458': {
        'hash': 33458,
        'name': 'Tree Grower',
        'savables': {
          'TimeBasedStagedPrefab': {
            'hash': 1085701614,
            'name': 'TimeBasedStagedPrefab'
          }
        }
      }
    }
  },
  'Tree_Grown': {
    'hash': 30572,
    'name': 'Tree Grown',
    'embedded': {
      'Tree_Grown_53296': {
        'hash': 53296,
        'name': 'Tree Grown',
        'savables': {}
      }
    }
  },
  'Tree_Spawner_-_Any_Ash': {
    'hash': 50794,
    'name': 'Tree Spawner - Any Ash',
    'embedded': {
      'Tree_Spawner_-_Any_Ash_50788': {
        'hash': 50788,
        'name': 'Tree Spawner - Any Ash',
        'savables': {
          'TreeSpawner': {
            'hash': 3638500874,
            'name': 'TreeSpawner'
          }
        }
      }
    }
  },
  'Tree_Spawner_-_Any_Birch': {
    'hash': 570,
    'name': 'Tree Spawner - Any Birch',
    'embedded': {
      'Tree_Spawner_-_Any_Birch_21194': {
        'hash': 21194,
        'name': 'Tree Spawner - Any Birch',
        'savables': {
          'TreeSpawner': {
            'hash': 3638500874,
            'name': 'TreeSpawner'
          }
        }
      }
    }
  },
  'Tree_Spawner_-_Any_Oak': {
    'hash': 48358,
    'name': 'Tree Spawner - Any Oak',
    'embedded': {
      'Tree_Spawner_-_Any_Oak_21194': {
        'hash': 21194,
        'name': 'Tree Spawner - Any Oak',
        'savables': {
          'TreeSpawner': {
            'hash': 3638500874,
            'name': 'TreeSpawner'
          }
        }
      }
    }
  },
  'Tree_Spawner_-_Any_Redwood': {
    'hash': 546,
    'name': 'Tree Spawner - Any Redwood',
    'embedded': {
      'Tree_Spawner_-_Any_Redwood_21194': {
        'hash': 21194,
        'name': 'Tree Spawner - Any Redwood',
        'savables': {
          'TreeSpawner': {
            'hash': 3638500874,
            'name': 'TreeSpawner'
          }
        }
      }
    }
  },
  'Tree_Spawner_-_Any_Standard': {
    'hash': 15738,
    'name': 'Tree Spawner - Any Standard',
    'embedded': {
      'Tree_Spawner_-_Any_Standard_21194': {
        'hash': 21194,
        'name': 'Tree Spawner - Any Standard',
        'savables': {
          'TreeSpawner': {
            'hash': 3638500874,
            'name': 'TreeSpawner'
          }
        }
      }
    }
  },
  'Tree_Spawner_-_Any_TEMP_TEST': {
    'hash': 58970,
    'name': 'Tree_Spawner_-_Any_TEMP_TEST',
    'embedded': {}
  },
  'Tree_Spawner_-_Any_Walnut': {
    'hash': 34710,
    'name': 'Tree Spawner - Any Walnut',
    'embedded': {
      'Tree_Spawner_-_Any_Walnut_21194': {
        'hash': 21194,
        'name': 'Tree Spawner - Any Walnut',
        'savables': {
          'TreeSpawner': {
            'hash': 3638500874,
            'name': 'TreeSpawner'
          }
        }
      }
    }
  },
  'Tree_Spawner_-_Small_Standard': {
    'hash': 57286,
    'name': 'Tree Spawner - Small Standard',
    'embedded': {
      'Tree_Spawner_-_Small_Standard_21194': {
        'hash': 21194,
        'name': 'Tree Spawner - Small Standard',
        'savables': {
          'TreeSpawner': {
            'hash': 3638500874,
            'name': 'TreeSpawner'
          }
        }
      }
    }
  },
  'Tree_Young': {
    'hash': 30570,
    'name': 'Tree Young',
    'embedded': {
      'Tree_Young_53362': {
        'hash': 53362,
        'name': 'Tree Young',
        'savables': {}
      }
    }
  },
  'Trial_Spawner_MD-T1': {
    'hash': 62144,
    'name': 'Trial Spawner MD-T1',
    'embedded': {
      'Trial_Spawner_MD-T1_37438': {
        'hash': 37438,
        'name': 'Trial Spawner MD-T1',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_MD-T2': {
    'hash': 60910,
    'name': 'Trial Spawner MD-T2',
    'embedded': {
      'Trial_Spawner_MD-T2_37438': {
        'hash': 37438,
        'name': 'Trial Spawner MD-T2',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_MD-T3': {
    'hash': 52988,
    'name': 'Trial Spawner MD-T3',
    'embedded': {
      'Trial_Spawner_MD-T3_37438': {
        'hash': 37438,
        'name': 'Trial Spawner MD-T3',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_MD-W1': {
    'hash': 32210,
    'name': 'Trial Spawner MD-W1',
    'embedded': {
      'Trial_Spawner_MD-W1_52626': {
        'hash': 52626,
        'name': 'Trial Spawner MD-W1',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_MD-W2': {
    'hash': 50818,
    'name': 'Trial Spawner MD-W2',
    'embedded': {
      'Trial_Spawner_MD-W2_52626': {
        'hash': 52626,
        'name': 'Trial Spawner MD-W2',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_T-1': {
    'hash': 7744,
    'name': 'Trial Spawner T-1',
    'embedded': {
      'Trial_Spawner_T-1_37438': {
        'hash': 37438,
        'name': 'Trial Spawner T-1',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_T-2': {
    'hash': 40198,
    'name': 'Trial Spawner T-2',
    'embedded': {
      'Trial_Spawner_T-2_9898': {
        'hash': 9898,
        'name': 'Trial Spawner T-2',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_T-3': {
    'hash': 45096,
    'name': 'Trial Spawner T-3',
    'embedded': {
      'Trial_Spawner_T-3_37438': {
        'hash': 37438,
        'name': 'Trial Spawner T-3',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_T-3-Myth': {
    'hash': 49994,
    'name': 'Trial Spawner T-3-Myth',
    'embedded': {
      'Trial_Spawner_T-3-Myth_37438': {
        'hash': 37438,
        'name': 'Trial Spawner T-3-Myth',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_W-1': {
    'hash': 33084,
    'name': 'Trial Spawner W-1',
    'embedded': {
      'Trial_Spawner_W-1_52626': {
        'hash': 52626,
        'name': 'Trial Spawner W-1',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_W-2': {
    'hash': 18696,
    'name': 'Trial Spawner W-2',
    'embedded': {
      'Trial_Spawner_W-2_52626': {
        'hash': 52626,
        'name': 'Trial Spawner W-2',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_W-2-Crys': {
    'hash': 58286,
    'name': 'Trial Spawner W-2-Crys',
    'embedded': {
      'Trial_Spawner_W-2-Crys_52626': {
        'hash': 52626,
        'name': 'Trial Spawner W-2-Crys',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Trial_Spawner_W-3': {
    'hash': 42624,
    'name': 'Trial Spawner W-3',
    'embedded': {
      'Trial_Spawner_W-3_52626': {
        'hash': 52626,
        'name': 'Trial Spawner W-3',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      }
    }
  },
  'Turabada': {
    'hash': 13804,
    'name': 'Turabada',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_13756': {
        'hash': 13756,
        'name': 'Turabada',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      }
    }
  },
  'Turabada_Arm': {
    'hash': 15584,
    'name': 'Turabada Arm',
    'embedded': {
      'Insert_HammerType_End_Cap_52192': {
        'hash': 52192,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      },
      'Turabada_Arm_15540': {
        'hash': 15540,
        'name': 'Turabada Arm',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Turabada_Copper_Destroy_Variant': {
    'hash': 34850,
    'name': 'Turabada Copper Destroy Variant',
    'embedded': {
      'Turabada_Copper_Destroy_Variant_37492': {
        'hash': 37492,
        'name': 'Turabada Copper Destroy Variant',
        'savables': {}
      }
    }
  },
  'Turabada_Copper_Trial_Variant': {
    'hash': 14248,
    'name': 'Turabada Copper Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Copper_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Copper Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Copper_Variant': {
    'hash': 39056,
    'name': 'Turabada Copper Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Copper_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Copper Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Destroy': {
    'hash': 37508,
    'name': 'Turabada Destroy',
    'embedded': {
      'Turabada_Destroy_37492': {
        'hash': 37492,
        'name': 'Turabada Destroy',
        'savables': {}
      }
    }
  },
  'Turabada_Gold_Destroy_Variant': {
    'hash': 15310,
    'name': 'Turabada Gold Destroy Variant',
    'embedded': {
      'Turabada_Gold_Destroy_Variant_37492': {
        'hash': 37492,
        'name': 'Turabada Gold Destroy Variant',
        'savables': {}
      }
    }
  },
  'Turabada_Gold_Trial_Variant': {
    'hash': 15506,
    'name': 'Turabada Gold Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Gold_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Gold Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Gold_Variant': {
    'hash': 37176,
    'name': 'Turabada Gold Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Gold_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Gold Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Hub_Dynamic': {
    'hash': 48478,
    'name': 'Turabada Hub Dynamic',
    'embedded': {
      'Core_Spawn_16554': {
        'hash': 16554,
        'name': 'Core Spawn',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Door_Blockage_Spawn_47616': {
        'hash': 47616,
        'name': 'Door Blockage Spawn',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Enemy_Spawn_30256': {
        'hash': 30256,
        'name': 'Enemy Spawn',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Turabada_Hub_Dynamic_53304': {
        'hash': 53304,
        'name': 'Turabada Hub Dynamic',
        'savables': {}
      }
    }
  },
  'Turabada_Iron_Destroy_Variant': {
    'hash': 42690,
    'name': 'Turabada Iron Destroy Variant',
    'embedded': {
      'Turabada_Iron_Destroy_Variant_37492': {
        'hash': 37492,
        'name': 'Turabada Iron Destroy Variant',
        'savables': {}
      }
    }
  },
  'Turabada_Iron_Trial_Variant': {
    'hash': 16684,
    'name': 'Turabada Iron Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Iron_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Iron Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Iron_Variant': {
    'hash': 8298,
    'name': 'Turabada Iron Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Iron_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Iron Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Large_Destroy_Variant': {
    'hash': 63178,
    'name': 'Turabada Large Destroy Variant',
    'embedded': {
      'Turabada_Large_Destroy_Variant_37492': {
        'hash': 37492,
        'name': 'Turabada Large Destroy Variant',
        'savables': {}
      }
    }
  },
  'Turabada_Large_Trial_Variant': {
    'hash': 17814,
    'name': 'Turabada Large Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Large_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Large Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Large_Variant': {
    'hash': 41172,
    'name': 'Turabada Large Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Large_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Large Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Mythril_Destroy_Variant': {
    'hash': 45488,
    'name': 'Turabada Mythril Destroy Variant',
    'embedded': {
      'Turabada_Mythril_Destroy_Variant_37492': {
        'hash': 37492,
        'name': 'Turabada Mythril Destroy Variant',
        'savables': {}
      }
    }
  },
  'Turabada_Mythril_Trial_Variant': {
    'hash': 18722,
    'name': 'Turabada Mythril Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Mythril_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Mythril Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Mythril_Variant': {
    'hash': 62968,
    'name': 'Turabada Mythril Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Mythril_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Mythril Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Preview': {
    'hash': 49464,
    'name': 'Turabada_Preview',
    'embedded': {}
  },
  'Turabada_Shard_Core': {
    'hash': 7900,
    'name': 'Turabada Shard Core',
    'embedded': {
      'Chisel_Piece_58818': {
        'hash': 58818,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58820': {
        'hash': 58820,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58822': {
        'hash': 58822,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58824': {
        'hash': 58824,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58826': {
        'hash': 58826,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58828': {
        'hash': 58828,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58830': {
        'hash': 58830,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58832': {
        'hash': 58832,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58834': {
        'hash': 58834,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58836': {
        'hash': 58836,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58838': {
        'hash': 58838,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58840': {
        'hash': 58840,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Chisel_Piece_58842': {
        'hash': 58842,
        'name': 'Chisel Piece',
        'savables': {}
      },
      'Explosion_44800': {
        'hash': 44800,
        'name': 'Explosion',
        'savables': {}
      },
      'Turabada_Shard_Core_7884': {
        'hash': 7884,
        'name': 'Turabada Shard Core',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Short_Destroy_Variant': {
    'hash': 48002,
    'name': 'Turabada Short Destroy Variant',
    'embedded': {
      'Turabada_Short_Destroy_Variant_37492': {
        'hash': 37492,
        'name': 'Turabada Short Destroy Variant',
        'savables': {}
      }
    }
  },
  'Turabada_Short_Trial_Variant': {
    'hash': 19936,
    'name': 'Turabada Short Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Short_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Short Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Short_Variant': {
    'hash': 63878,
    'name': 'Turabada Short Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Short_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Short Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Silver_Destroy_Variant': {
    'hash': 1960,
    'name': 'Turabada Silver Destroy Variant',
    'embedded': {
      'Turabada_Silver_Destroy_Variant_37492': {
        'hash': 37492,
        'name': 'Turabada Silver Destroy Variant',
        'savables': {}
      }
    }
  },
  'Turabada_Silver_Trial_Variant': {
    'hash': 20844,
    'name': 'Turabada Silver Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Silver_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Silver Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Silver_Variant': {
    'hash': 45716,
    'name': 'Turabada Silver Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Silver_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Silver Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Turabada_Spawner_Automatic': {
    'hash': 51652,
    'name': 'Turabada Spawner Automatic',
    'embedded': {
      'Turabada_Spawner_Automatic_26726': {
        'hash': 26726,
        'name': 'Turabada Spawner Automatic',
        'savables': {}
      },
      'caveRock_34072': {
        'hash': 34072,
        'name': 'caveRock',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Turabada_Spawner_Reactive': {
    'hash': 27188,
    'name': 'Turabada Spawner Reactive',
    'embedded': {
      'Reactive_AI_17314': {
        'hash': 17314,
        'name': 'Reactive AI',
        'savables': {}
      },
      'Turabada_Spawner_Reactive_26726': {
        'hash': 26726,
        'name': 'Turabada Spawner Reactive',
        'savables': {}
      },
      'caveRock_34072': {
        'hash': 34072,
        'name': 'caveRock',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Turabada_Trial_Variant': {
    'hash': 21882,
    'name': 'Turabada Trial Variant',
    'embedded': {
      'Arm_Collision_L_40528': {
        'hash': 40528,
        'name': 'Arm Collision L',
        'savables': {}
      },
      'Arm_Collision_R_42784': {
        'hash': 42784,
        'name': 'Arm Collision R',
        'savables': {}
      },
      'Explosion_58370': {
        'hash': 58370,
        'name': 'Explosion',
        'savables': {}
      },
      'Killed_Drops_63174': {
        'hash': 63174,
        'name': 'Killed Drops',
        'savables': {}
      },
      'Target_Collector_10522': {
        'hash': 10522,
        'name': 'Target Collector',
        'savables': {}
      },
      'Turabada_01_2540': {
        'hash': 2540,
        'name': 'Turabada_01',
        'savables': {}
      },
      'Turabada_AI_10656': {
        'hash': 10656,
        'name': 'Turabada AI',
        'savables': {
          'LevelStatModifier': {
            'hash': 788405183,
            'name': 'LevelStatModifier'
          }
        }
      },
      'Turabada_Trial_Variant_13756': {
        'hash': 13756,
        'name': 'Turabada Trial Variant',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'UnplacedMetalWallHook': {
    'hash': 18972,
    'name': 'UnplacedMetalWallHook',
    'embedded': {
      'Heat_Point_Collection_11020': {
        'hash': 11020,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'UnplacedMetalWallHook_26498': {
        'hash': 26498,
        'name': 'UnplacedMetalWallHook',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'VR_Player_Character_New': {
    'hash': 49582,
    'name': 'VR_Player_Character_New',
    'embedded': {}
  },
  'Vacuum': {
    'hash': 8586,
    'name': 'Vacuum',
    'embedded': {
      'Dock_42390': {
        'hash': 42390,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Vacuum_7480': {
        'hash': 7480,
        'name': 'Vacuum',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Vegetable_Ragu_Recipe_Burnt_Stew': {
    'hash': 58092,
    'name': 'Vegetable_Ragu_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Vegetable_Ragu_Recipe_Cooked_Stew': {
    'hash': 58074,
    'name': 'Vegetable_Ragu_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Vegetable_Ragu_Recipe_Raw_Stew': {
    'hash': 58050,
    'name': 'Vegetable_Ragu_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Vine_Attack_Fern': {
    'hash': 24402,
    'name': 'Vine Attack Fern',
    'embedded': {
      'Death_Fern_AI_29794': {
        'hash': 29794,
        'name': 'Death Fern AI',
        'savables': {}
      },
      'Emit_Gas_Spawner_16984': {
        'hash': 16984,
        'name': 'Emit Gas Spawner',
        'savables': {}
      },
      'Erupt_Area_19858': {
        'hash': 19858,
        'name': 'Erupt Area',
        'savables': {}
      },
      'Impactor_63610': {
        'hash': 63610,
        'name': 'Impactor',
        'savables': {}
      },
      'Impactor_65072': {
        'hash': 65072,
        'name': 'Impactor',
        'savables': {}
      },
      'Impactor_65078': {
        'hash': 65078,
        'name': 'Impactor',
        'savables': {}
      },
      'Mesh_15308': {
        'hash': 15308,
        'name': 'Mesh',
        'savables': {}
      },
      'Vine_Attack_Fern_37626': {
        'hash': 37626,
        'name': 'Vine Attack Fern',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Vine_Boulder_01': {
    'hash': 31088,
    'name': 'Vine Boulder 01',
    'embedded': {
      'Directional_Encounter_63404': {
        'hash': 63404,
        'name': 'Directional Encounter',
        'savables': {
          'DirectionalBoundsSurface': {
            'hash': 1962842866,
            'name': 'DirectionalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Vine_Boulder_01_62528': {
        'hash': 62528,
        'name': 'Vine Boulder 01',
        'savables': {}
      }
    }
  },
  'Vision_Recipe_Burnt_Stew': {
    'hash': 58138,
    'name': 'Vision_Recipe_Burnt_Stew',
    'embedded': {}
  },
  'Vision_Recipe_Cooked_Stew': {
    'hash': 58120,
    'name': 'Vision_Recipe_Cooked_Stew',
    'embedded': {}
  },
  'Vision_Recipe_Raw_Stew': {
    'hash': 58162,
    'name': 'Vision_Recipe_Raw_Stew',
    'embedded': {}
  },
  'Wakizashi': {
    'hash': 29856,
    'name': 'Wakizashi',
    'embedded': {
      'Wakizashi_36330': {
        'hash': 36330,
        'name': 'Wakizashi',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'Enchantable': {
            'hash': 4134534481,
            'name': 'Enchantable'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Walk_Air': {
    'hash': 50936,
    'name': 'Walk_Air',
    'embedded': {}
  },
  'Wall_Shelf': {
    'hash': 15548,
    'name': 'Wall Shelf',
    'embedded': {
      'Dock_62060': {
        'hash': 62060,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62062': {
        'hash': 62062,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62064': {
        'hash': 62064,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_62066': {
        'hash': 62066,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Wall_Shelf_62464': {
        'hash': 62464,
        'name': 'Wall Shelf',
        'savables': {}
      }
    }
  },
  'Wall_Street_Post': {
    'hash': 50078,
    'name': 'Wall Street Post',
    'embedded': {
      'Sign_Body_13458': {
        'hash': 13458,
        'name': 'Sign Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Visual_1_44280': {
        'hash': 44280,
        'name': 'Visual 1',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      },
      'Visual_2_38710': {
        'hash': 38710,
        'name': 'Visual 2',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      },
      'Visual_3_23608': {
        'hash': 23608,
        'name': 'Visual 3',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      },
      'Visual_4_16452': {
        'hash': 16452,
        'name': 'Visual 4',
        'savables': {
          'MeshPlacement': {
            'hash': 2169673426,
            'name': 'MeshPlacement'
          }
        }
      },
      'Wall_Street_Post_16266': {
        'hash': 16266,
        'name': 'Wall Street Post',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Wall_Torch_Holder': {
    'hash': 3786,
    'name': 'Wall Torch Holder',
    'embedded': {
      'Torch_Dock_5626': {
        'hash': 5626,
        'name': 'Torch Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Wall_Torch_Holder_54416': {
        'hash': 54416,
        'name': 'Wall Torch Holder',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Wall_Torch_Holder_Puzzle': {
    'hash': 30196,
    'name': 'Wall Torch Holder Puzzle',
    'embedded': {
      'Extra_Logic_1_49636': {
        'hash': 49636,
        'name': 'Extra Logic 1',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          }
        }
      },
      'Torch_Dock_5626': {
        'hash': 5626,
        'name': 'Torch Dock',
        'savables': {
          'LogicIntSender': {
            'hash': 2880587164,
            'name': 'LogicIntSender'
          },
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          },
          'PlaceItemPuzzleLogic': {
            'hash': 1001395212,
            'name': 'PlaceItemPuzzleLogic'
          }
        }
      },
      'Wall_Torch_Holder_Puzzle_30194': {
        'hash': 30194,
        'name': 'Wall Torch Holder Puzzle',
        'savables': {}
      }
    }
  },
  'Walnut_Gotera_Bomb_Dart': {
    'hash': 39716,
    'name': 'Walnut Gotera Bomb Dart',
    'embedded': {
      'Dart_62940': {
        'hash': 62940,
        'name': 'Dart',
        'savables': {}
      },
      'Walnut_Gotera_Bomb_Dart_3092': {
        'hash': 3092,
        'name': 'Walnut Gotera Bomb Dart',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Walnut_Tree_Growth': {
    'hash': 48268,
    'name': 'Walnut Tree Growth',
    'embedded': {
      'Walnut_Tree_Growth_33458': {
        'hash': 33458,
        'name': 'Walnut Tree Growth',
        'savables': {
          'GrowerComponent': {
            'hash': 3402094521,
            'name': 'GrowerComponent'
          }
        }
      }
    }
  },
  'Walnut_Tree_Seed': {
    'hash': 44172,
    'name': 'Walnut Tree Seed',
    'embedded': {
      'Walnut_Tree_Seed_35258': {
        'hash': 35258,
        'name': 'Walnut Tree Seed',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Walnut_Tree_Stage_1': {
    'hash': 26568,
    'name': 'Walnut Tree Stage 1',
    'embedded': {
      'Walnut_Tree_Stage_1_63514': {
        'hash': 63514,
        'name': 'Walnut Tree Stage 1',
        'savables': {}
      }
    }
  },
  'WarHammer': {
    'hash': 9630,
    'name': 'WarHammer',
    'embedded': {
      'Heat_Point_Collection_1720': {
        'hash': 1720,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Insert_HammerType_End_Cap_52192': {
        'hash': 52192,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      },
      'WarHammer_42978': {
        'hash': 42978,
        'name': 'WarHammer',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Water_Well_Dynamic': {
    'hash': 14364,
    'name': 'Water_Well_Dynamic',
    'embedded': {}
  },
  'Water_Well_Tunnel_Dynamic': {
    'hash': 12356,
    'name': 'Water Well Tunnel Dynamic',
    'embedded': {
      'Dock_2780': {
        'hash': 2780,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60224': {
        'hash': 60224,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60226': {
        'hash': 60226,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60228': {
        'hash': 60228,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60234': {
        'hash': 60234,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60236': {
        'hash': 60236,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60238': {
        'hash': 60238,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60244': {
        'hash': 60244,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_60246': {
        'hash': 60246,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Water_Well_Tunnel_Dynamic_14816': {
        'hash': 14816,
        'name': 'Water Well Tunnel Dynamic',
        'savables': {}
      }
    }
  },
  'Weapon_Rack_Wall': {
    'hash': 13062,
    'name': 'Weapon Rack Wall',
    'embedded': {
      'ToolDock_(1)_26316': {
        'hash': 26316,
        'name': 'ToolDock (1)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'ToolDock_(2)_26308': {
        'hash': 26308,
        'name': 'ToolDock (2)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'ToolDock_(3)_26304': {
        'hash': 26304,
        'name': 'ToolDock (3)',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'ToolDock_5626': {
        'hash': 5626,
        'name': 'ToolDock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Weapon_Rack_Wall_9260': {
        'hash': 9260,
        'name': 'Weapon Rack Wall',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          }
        }
      }
    }
  },
  'Wedge_Training': {
    'hash': 53570,
    'name': 'Wedge Training',
    'embedded': {
      'Wedge_Training_53566': {
        'hash': 53566,
        'name': 'Wedge Training',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      }
    }
  },
  'Weight_Gauge': {
    'hash': 48306,
    'name': 'Weight Gauge',
    'embedded': {
      'Weight_Gauge_48288': {
        'hash': 48288,
        'name': 'Weight Gauge',
        'savables': {}
      }
    }
  },
  'WheelBridge': {
    'hash': 7252,
    'name': 'WheelBridge',
    'embedded': {
      'Grip_(1)_54050': {
        'hash': 54050,
        'name': 'Grip (1)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(2)_54614': {
        'hash': 54614,
        'name': 'Grip (2)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(3)_56370': {
        'hash': 56370,
        'name': 'Grip (3)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(4)_53470': {
        'hash': 53470,
        'name': 'Grip (4)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(5)_19654': {
        'hash': 19654,
        'name': 'Grip (5)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_56728': {
        'hash': 56728,
        'name': 'Grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'WheelBridge_43884': {
        'hash': 43884,
        'name': 'WheelBridge',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'LogicFloatSender': {
            'hash': 2120963769,
            'name': 'LogicFloatSender'
          },
          'RotatePickup': {
            'hash': 2498617949,
            'name': 'RotatePickup'
          }
        }
      },
      'wheel_origin_43868': {
        'hash': 43868,
        'name': 'wheel_origin',
        'savables': {
          'WheelGrab': {
            'hash': 320224849,
            'name': 'WheelGrab'
          }
        }
      }
    }
  },
  'WheelPuzzle': {
    'hash': 52364,
    'name': 'WheelPuzzle',
    'embedded': {
      'Grip_(1)_54050': {
        'hash': 54050,
        'name': 'Grip (1)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(2)_54614': {
        'hash': 54614,
        'name': 'Grip (2)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(3)_56370': {
        'hash': 56370,
        'name': 'Grip (3)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(4)_53470': {
        'hash': 53470,
        'name': 'Grip (4)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_(5)_19654': {
        'hash': 19654,
        'name': 'Grip (5)',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Grip_56728': {
        'hash': 56728,
        'name': 'Grip',
        'savables': {
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'WheelPuzzle_43884': {
        'hash': 43884,
        'name': 'WheelPuzzle',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'LogicFloatSender': {
            'hash': 2120963769,
            'name': 'LogicFloatSender'
          },
          'RotatePickup': {
            'hash': 2498617949,
            'name': 'RotatePickup'
          }
        }
      },
      'wheel_origin_43868': {
        'hash': 43868,
        'name': 'wheel_origin',
        'savables': {
          'WheelGrab': {
            'hash': 320224849,
            'name': 'WheelGrab'
          }
        }
      }
    }
  },
  'WheelPuzzleOLD': {
    'hash': 61964,
    'name': 'WheelPuzzleOLD',
    'embedded': {}
  },
  'White_Gold_Ingot': {
    'hash': 13158,
    'name': 'White Gold Ingot',
    'embedded': {
      'Heat_Point_Collection_13798': {
        'hash': 13798,
        'name': 'Heat Point Collection',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'White_Gold_Ingot_32738': {
        'hash': 32738,
        'name': 'White Gold Ingot',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Woodcut_Ash_LeafClump_Base': {
    'hash': 28312,
    'name': 'Woodcut Ash LeafClump Base',
    'embedded': {
      'Woodcut_Ash_LeafClump_Base_28328': {
        'hash': 28328,
        'name': 'Woodcut Ash LeafClump Base',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C1C1': {
    'hash': 44892,
    'name': 'Woodcut Ash LeafClump C1C1',
    'embedded': {
      'Woodcut_Ash_LeafClump_C1C1_44890': {
        'hash': 44890,
        'name': 'Woodcut Ash LeafClump C1C1',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C1C2': {
    'hash': 34638,
    'name': 'Woodcut Ash LeafClump C1C2',
    'embedded': {
      'Woodcut_Ash_LeafClump_C1C2_34636': {
        'hash': 34636,
        'name': 'Woodcut Ash LeafClump C1C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C1C2_E': {
    'hash': 47502,
    'name': 'Woodcut Ash LeafClump C1C2 E',
    'embedded': {
      'Woodcut_Ash_LeafClump_C1C2_E_47500': {
        'hash': 47500,
        'name': 'Woodcut Ash LeafClump C1C2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C1_E': {
    'hash': 47458,
    'name': 'Woodcut Ash LeafClump C1 E',
    'embedded': {
      'Woodcut_Ash_LeafClump_C1_E_47456': {
        'hash': 47456,
        'name': 'Woodcut Ash LeafClump C1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C1_E_1': {
    'hash': 14074,
    'name': 'Woodcut Ash LeafClump C1 E 1',
    'embedded': {
      'Woodcut_Ash_LeafClump_C1_E_1_14072': {
        'hash': 14072,
        'name': 'Woodcut Ash LeafClump C1 E 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C1_E_2': {
    'hash': 40722,
    'name': 'Woodcut Ash LeafClump C1 E 2',
    'embedded': {
      'Woodcut_Ash_LeafClump_C1_E_2_40720': {
        'hash': 40720,
        'name': 'Woodcut Ash LeafClump C1 E 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C2C2': {
    'hash': 44908,
    'name': 'Woodcut Ash LeafClump C2C2',
    'embedded': {
      'Woodcut_Ash_LeafClump_C2C2_44906': {
        'hash': 44906,
        'name': 'Woodcut Ash LeafClump C2C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C2C3': {
    'hash': 9426,
    'name': 'Woodcut Ash LeafClump C2C3',
    'embedded': {
      'Woodcut_Ash_LeafClump_C2C3_9424': {
        'hash': 9424,
        'name': 'Woodcut Ash LeafClump C2C3',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C2C3_E': {
    'hash': 57802,
    'name': 'Woodcut Ash LeafClump C2C3 E',
    'embedded': {
      'Woodcut_Ash_LeafClump_C2C3_E_57800': {
        'hash': 57800,
        'name': 'Woodcut Ash LeafClump C2C3 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C2_E': {
    'hash': 29976,
    'name': 'Woodcut Ash LeafClump C2 E',
    'embedded': {
      'Woodcut_Ash_LeafClump_C2_E_29974': {
        'hash': 29974,
        'name': 'Woodcut Ash LeafClump C2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C2_E_1': {
    'hash': 24422,
    'name': 'Woodcut Ash LeafClump C2 E 1',
    'embedded': {
      'Woodcut_Ash_LeafClump_C2_E_1_24420': {
        'hash': 24420,
        'name': 'Woodcut Ash LeafClump C2 E 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C3C3': {
    'hash': 10682,
    'name': 'Woodcut Ash LeafClump C3C3',
    'embedded': {
      'Woodcut_Ash_LeafClump_C3C3_10680': {
        'hash': 10680,
        'name': 'Woodcut Ash LeafClump C3C3',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_LeafClump_C3_E': {
    'hash': 57250,
    'name': 'Woodcut Ash LeafClump C3 E',
    'embedded': {
      'Woodcut_Ash_LeafClump_C3_E_57248': {
        'hash': 57248,
        'name': 'Woodcut Ash LeafClump C3 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Ash_Seed_Spawner_Attachment': {
    'hash': 16054,
    'name': 'Woodcut Ash Seed Spawner Attachment',
    'embedded': {
      'Woodcut_Ash_Seed_Spawner_Attachment_36402': {
        'hash': 36402,
        'name': 'Woodcut Ash Seed Spawner Attachment',
        'savables': {}
      }
    }
  },
  'Woodcut_B0_B0': {
    'hash': 11470,
    'name': 'Woodcut_B0_B0',
    'embedded': {
      'Top_8056': {
        'hash': 8056,
        'name': 'Top_8056',
        'savables': {}
      }
    }
  },
  'Woodcut_B0_B0_S-30': {
    'hash': 19224,
    'name': 'Woodcut B0 B0 S-30',
    'embedded': {
      'Stick_53710': {
        'hash': 53710,
        'name': 'Stick',
        'savables': {}
      },
      'Top_53706': {
        'hash': 53706,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_B0_B0_S-30_35608': {
        'hash': 35608,
        'name': 'Woodcut B0 B0 S-30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_B0_B0_S15': {
    'hash': 35014,
    'name': 'Woodcut_B0_B0_S15',
    'embedded': {
      'Top_53706': {
        'hash': 53706,
        'name': 'Top_53706',
        'savables': {}
      },
      'Stick_53710': {
        'hash': 53710,
        'name': 'Stick_53710',
        'savables': {}
      }
    }
  },
  'Woodcut_B0_B0_S30': {
    'hash': 36844,
    'name': 'Woodcut B0 B0 S30',
    'embedded': {
      'Stick_53710': {
        'hash': 53710,
        'name': 'Stick',
        'savables': {}
      },
      'Top_53706': {
        'hash': 53706,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_B0_B0_S30_35608': {
        'hash': 35608,
        'name': 'Woodcut B0 B0 S30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_B0_B0_S30_S30': {
    'hash': 6224,
    'name': 'Woodcut B0 B0 S30 S30',
    'embedded': {
      'Branch_1_20342': {
        'hash': 20342,
        'name': 'Branch 1',
        'savables': {}
      },
      'Stick_1_20338': {
        'hash': 20338,
        'name': 'Stick 1',
        'savables': {}
      },
      'Stick_2_55820': {
        'hash': 55820,
        'name': 'Stick 2',
        'savables': {}
      },
      'Woodcut_B0_B0_S30_S30_6218': {
        'hash': 6218,
        'name': 'Woodcut B0 B0 S30 S30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_B0_B15_B30': {
    'hash': 35020,
    'name': 'Woodcut_B0_B15_B30',
    'embedded': {
      'Branch_1_20342': {
        'hash': 20342,
        'name': 'Branch_1_20342',
        'savables': {}
      },
      'Branch_2_20338': {
        'hash': 20338,
        'name': 'Branch_2_20338',
        'savables': {}
      }
    }
  },
  'Woodcut_B0_B30_S30': {
    'hash': 51486,
    'name': 'Woodcut B0 B30 S30',
    'embedded': {
      'Stick_51478': {
        'hash': 51478,
        'name': 'Stick',
        'savables': {}
      },
      'Top_51476': {
        'hash': 51476,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_B0_B30_S30_51474': {
        'hash': 51474,
        'name': 'Woodcut B0 B30 S30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_B0_E': {
    'hash': 29444,
    'name': 'Woodcut_B0_E',
    'embedded': {}
  },
  'Woodcut_B0_S0_S30': {
    'hash': 35028,
    'name': 'Woodcut_B0_S0_S30',
    'embedded': {
      'Stick_1_38940': {
        'hash': 38940,
        'name': 'Stick_1_38940',
        'savables': {}
      },
      'Stick_2_38936': {
        'hash': 38936,
        'name': 'Stick_2_38936',
        'savables': {}
      }
    }
  },
  'Woodcut_B0_S0_S60': {
    'hash': 8102,
    'name': 'Woodcut B0 S0 S60',
    'embedded': {
      'Stick_1_38940': {
        'hash': 38940,
        'name': 'Stick 1',
        'savables': {}
      },
      'Stick_2_38936': {
        'hash': 38936,
        'name': 'Stick 2',
        'savables': {}
      },
      'Woodcut_B0_S0_S60_35622': {
        'hash': 35622,
        'name': 'Woodcut B0 S0 S60',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_B0_S30_S30': {
    'hash': 54764,
    'name': 'Woodcut B0 S30 S30',
    'embedded': {
      'Stick_1_38940': {
        'hash': 38940,
        'name': 'Stick 1',
        'savables': {}
      },
      'Stick_2_38936': {
        'hash': 38936,
        'name': 'Stick 2',
        'savables': {}
      },
      'Woodcut_B0_S30_S30_35622': {
        'hash': 35622,
        'name': 'Woodcut B0 S30 S30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_B15_B15': {
    'hash': 38016,
    'name': 'Woodcut_B15_B15',
    'embedded': {
      'Top_4690': {
        'hash': 4690,
        'name': 'Top_4690',
        'savables': {}
      }
    }
  },
  'Woodcut_B30_B30': {
    'hash': 62548,
    'name': 'Woodcut_B30_B30',
    'embedded': {
      'Top_58002': {
        'hash': 58002,
        'name': 'Top_58002',
        'savables': {}
      }
    }
  },
  'Woodcut_B5_B5': {
    'hash': 1780,
    'name': 'Woodcut_B5_B5',
    'embedded': {
      'Top_37822': {
        'hash': 37822,
        'name': 'Top_37822',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_Base': {
    'hash': 37794,
    'name': 'Woodcut Birch LeafClump Base',
    'embedded': {
      'Woodcut_Birch_LeafClump_Base_36402': {
        'hash': 36402,
        'name': 'Woodcut Birch LeafClump Base',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C1_1': {
    'hash': 1178,
    'name': 'Woodcut Birch LeafClump C1C1 1',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C1_1_1176': {
        'hash': 1176,
        'name': 'Woodcut Birch LeafClump C1C1 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C1_1_E': {
    'hash': 7260,
    'name': 'Woodcut Birch LeafClump C1C1 1 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C1_1_E_7258': {
        'hash': 7258,
        'name': 'Woodcut Birch LeafClump C1C1 1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C1_2': {
    'hash': 42598,
    'name': 'Woodcut Birch LeafClump C1C1 2',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C1_2_42596': {
        'hash': 42596,
        'name': 'Woodcut Birch LeafClump C1C1 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C1_2_E': {
    'hash': 10700,
    'name': 'Woodcut Birch LeafClump C1C1 2 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C1_2_E_10698': {
        'hash': 10698,
        'name': 'Woodcut Birch LeafClump C1C1 2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C2_1': {
    'hash': 54804,
    'name': 'Woodcut Birch LeafClump C1C2 1',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C2_1_54802': {
        'hash': 54802,
        'name': 'Woodcut Birch LeafClump C1C2 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C2_1_E': {
    'hash': 2760,
    'name': 'Woodcut Birch LeafClump C1C2 1 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C2_1_E_2758': {
        'hash': 2758,
        'name': 'Woodcut Birch LeafClump C1C2 1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C2_2': {
    'hash': 12688,
    'name': 'Woodcut Birch LeafClump C1C2 2',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C2_2_12686': {
        'hash': 12686,
        'name': 'Woodcut Birch LeafClump C1C2 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1C2_2_E': {
    'hash': 54174,
    'name': 'Woodcut Birch LeafClump C1C2 2 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1C2_2_E_54172': {
        'hash': 54172,
        'name': 'Woodcut Birch LeafClump C1C2 2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C1_E': {
    'hash': 55364,
    'name': 'Woodcut Birch LeafClump C1 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C1_E_55362': {
        'hash': 55362,
        'name': 'Woodcut Birch LeafClump C1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C2C3_1': {
    'hash': 54092,
    'name': 'Woodcut Birch LeafClump C2C3 1',
    'embedded': {
      'Woodcut_Birch_LeafClump_C2C3_1_54090': {
        'hash': 54090,
        'name': 'Woodcut Birch LeafClump C2C3 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C2C3_1_E': {
    'hash': 2568,
    'name': 'Woodcut Birch LeafClump C2C3 1 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C2C3_1_E_2566': {
        'hash': 2566,
        'name': 'Woodcut Birch LeafClump C2C3 1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C2C3_2': {
    'hash': 54852,
    'name': 'Woodcut Birch LeafClump C2C3 2',
    'embedded': {
      'Woodcut_Birch_LeafClump_C2C3_2_54850': {
        'hash': 54850,
        'name': 'Woodcut Birch LeafClump C2C3 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C2C3_2_E': {
    'hash': 54108,
    'name': 'Woodcut Birch LeafClump C2C3 2 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C2C3_2_E_54106': {
        'hash': 54106,
        'name': 'Woodcut Birch LeafClump C2C3 2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C2_E': {
    'hash': 12672,
    'name': 'Woodcut Birch LeafClump C2 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C2_E_12670': {
        'hash': 12670,
        'name': 'Woodcut Birch LeafClump C2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C3C4_1': {
    'hash': 7276,
    'name': 'Woodcut Birch LeafClump C3C4 1',
    'embedded': {
      'Woodcut_Birch_LeafClump_C3C4_1_7274': {
        'hash': 7274,
        'name': 'Woodcut Birch LeafClump C3C4 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C3C4_1_E': {
    'hash': 34602,
    'name': 'Woodcut Birch LeafClump C3C4 1 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C3C4_1_E_34600': {
        'hash': 34600,
        'name': 'Woodcut Birch LeafClump C3C4 1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C3C4_2': {
    'hash': 12182,
    'name': 'Woodcut Birch LeafClump C3C4 2',
    'embedded': {
      'Woodcut_Birch_LeafClump_C3C4_2_12180': {
        'hash': 12180,
        'name': 'Woodcut Birch LeafClump C3C4 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C3C4_2_E': {
    'hash': 11234,
    'name': 'Woodcut Birch LeafClump C3C4 2 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C3C4_2_E_11232': {
        'hash': 11232,
        'name': 'Woodcut Birch LeafClump C3C4 2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C3_E': {
    'hash': 54820,
    'name': 'Woodcut Birch LeafClump C3 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C3_E_54818': {
        'hash': 54818,
        'name': 'Woodcut Birch LeafClump C3 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_LeafClump_C4_E': {
    'hash': 44404,
    'name': 'Woodcut Birch LeafClump C4 E',
    'embedded': {
      'Woodcut_Birch_LeafClump_C4_E_44402': {
        'hash': 44402,
        'name': 'Woodcut Birch LeafClump C4 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Birch_Seed_Spawner_Attachment': {
    'hash': 16026,
    'name': 'Woodcut Birch Seed Spawner Attachment',
    'embedded': {
      'Woodcut_Birch_Seed_Spawner_Attachment_36402': {
        'hash': 36402,
        'name': 'Woodcut Birch Seed Spawner Attachment',
        'savables': {}
      }
    }
  },
  'Woodcut_BranchRoot_V1_B0': {
    'hash': 8158,
    'name': 'Woodcut_BranchRoot_V1_B0',
    'embedded': {
      'Top_14282': {
        'hash': 14282,
        'name': 'Top_14282',
        'savables': {}
      }
    }
  },
  'Woodcut_BranchRoot_V1_B15_S30': {
    'hash': 22660,
    'name': 'Woodcut_BranchRoot_V1_B15_S30',
    'embedded': {
      'Top_63620': {
        'hash': 63620,
        'name': 'Top_63620',
        'savables': {}
      },
      'Branch_63622': {
        'hash': 63622,
        'name': 'Branch_63622',
        'savables': {}
      }
    }
  },
  'Woodcut_BranchRoot_V2_B0': {
    'hash': 50658,
    'name': 'Woodcut BranchRoot V2 B0',
    'embedded': {
      'Top_14282': {
        'hash': 14282,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_BranchRoot_V2_B0_10678': {
        'hash': 10678,
        'name': 'Woodcut BranchRoot V2 B0',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_Leaves_V1_L_F': {
    'hash': 42932,
    'name': 'Woodcut_Leaves_V1_L_F',
    'embedded': {}
  },
  'Woodcut_Leaves_V1_L_S': {
    'hash': 42928,
    'name': 'Woodcut_Leaves_V1_L_S',
    'embedded': {}
  },
  'Woodcut_Leaves_V1_S_F': {
    'hash': 42934,
    'name': 'Woodcut_Leaves_V1_S_F',
    'embedded': {}
  },
  'Woodcut_Leaves_V1_S_S': {
    'hash': 42930,
    'name': 'Woodcut_Leaves_V1_S_S',
    'embedded': {}
  },
  'Woodcut_Leaves_V2_D': {
    'hash': 63786,
    'name': 'Woodcut_Leaves_V2_D',
    'embedded': {}
  },
  'Woodcut_Leaves_V2_L': {
    'hash': 63466,
    'name': 'Woodcut_Leaves_V2_L',
    'embedded': {}
  },
  'Woodcut_Leaves_V2_Topper': {
    'hash': 26276,
    'name': 'Woodcut_Leaves_V2_Topper',
    'embedded': {}
  },
  'Woodcut_Oak_LeafClump_Base': {
    'hash': 60158,
    'name': 'Woodcut Oak LeafClump Base',
    'embedded': {
      'Woodcut_Oak_LeafClump_Base_36402': {
        'hash': 36402,
        'name': 'Woodcut Oak LeafClump Base',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C1C1_1': {
    'hash': 38364,
    'name': 'Woodcut Oak LeafClump C1C1 1',
    'embedded': {
      'Woodcut_Oak_LeafClump_C1C1_1_38362': {
        'hash': 38362,
        'name': 'Woodcut Oak LeafClump C1C1 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C1C1_2': {
    'hash': 38344,
    'name': 'Woodcut Oak LeafClump C1C1 2',
    'embedded': {
      'Woodcut_Oak_LeafClump_C1C1_2_38342': {
        'hash': 38342,
        'name': 'Woodcut Oak LeafClump C1C1 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C1C2_1': {
    'hash': 38324,
    'name': 'Woodcut Oak LeafClump C1C2 1',
    'embedded': {
      'Woodcut_Oak_LeafClump_C1C2_1_38322': {
        'hash': 38322,
        'name': 'Woodcut Oak LeafClump C1C2 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C1C2_2': {
    'hash': 38304,
    'name': 'Woodcut Oak LeafClump C1C2 2',
    'embedded': {
      'Woodcut_Oak_LeafClump_C1C2_2_38302': {
        'hash': 38302,
        'name': 'Woodcut Oak LeafClump C1C2 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C1C2_E': {
    'hash': 38284,
    'name': 'Woodcut Oak LeafClump C1C2 E',
    'embedded': {
      'Woodcut_Oak_LeafClump_C1C2_E_38282': {
        'hash': 38282,
        'name': 'Woodcut Oak LeafClump C1C2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C1_E': {
    'hash': 38382,
    'name': 'Woodcut Oak LeafClump C1 E',
    'embedded': {
      'Woodcut_Oak_LeafClump_C1_E_38380': {
        'hash': 38380,
        'name': 'Woodcut Oak LeafClump C1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C2C2_1': {
    'hash': 38242,
    'name': 'Woodcut Oak LeafClump C2C2 1',
    'embedded': {
      'Woodcut_Oak_LeafClump_C2C2_1_38240': {
        'hash': 38240,
        'name': 'Woodcut Oak LeafClump C2C2 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C2C2_2': {
    'hash': 38224,
    'name': 'Woodcut Oak LeafClump C2C2 2',
    'embedded': {
      'Woodcut_Oak_LeafClump_C2C2_2_38222': {
        'hash': 38222,
        'name': 'Woodcut Oak LeafClump C2C2 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C2C3_1': {
    'hash': 38204,
    'name': 'Woodcut Oak LeafClump C2C3 1',
    'embedded': {
      'Woodcut_Oak_LeafClump_C2C3_1_38202': {
        'hash': 38202,
        'name': 'Woodcut Oak LeafClump C2C3 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C2C3_2': {
    'hash': 38184,
    'name': 'Woodcut Oak LeafClump C2C3 2',
    'embedded': {
      'Woodcut_Oak_LeafClump_C2C3_2_38182': {
        'hash': 38182,
        'name': 'Woodcut Oak LeafClump C2C3 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C2C3_E': {
    'hash': 38162,
    'name': 'Woodcut Oak LeafClump C2C3 E',
    'embedded': {
      'Woodcut_Oak_LeafClump_C2C3_E_38160': {
        'hash': 38160,
        'name': 'Woodcut Oak LeafClump C2C3 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C2_E': {
    'hash': 38264,
    'name': 'Woodcut Oak LeafClump C2 E',
    'embedded': {
      'Woodcut_Oak_LeafClump_C2_E_38262': {
        'hash': 38262,
        'name': 'Woodcut Oak LeafClump C2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C3C3_1': {
    'hash': 38122,
    'name': 'Woodcut Oak LeafClump C3C3 1',
    'embedded': {
      'Woodcut_Oak_LeafClump_C3C3_1_38120': {
        'hash': 38120,
        'name': 'Woodcut Oak LeafClump C3C3 1',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C3C3_2': {
    'hash': 38102,
    'name': 'Woodcut Oak LeafClump C3C3 2',
    'embedded': {
      'Woodcut_Oak_LeafClump_C3C3_2_38100': {
        'hash': 38100,
        'name': 'Woodcut Oak LeafClump C3C3 2',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_LeafClump_C3_E': {
    'hash': 38144,
    'name': 'Woodcut Oak LeafClump C3 E',
    'embedded': {
      'Woodcut_Oak_LeafClump_C3_E_38142': {
        'hash': 38142,
        'name': 'Woodcut Oak LeafClump C3 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Oak_Seed_Spawner_Attachment': {
    'hash': 49710,
    'name': 'Woodcut Oak Seed Spawner Attachment',
    'embedded': {
      'Woodcut_Oak_Seed_Spawner_Attachment_36402': {
        'hash': 36402,
        'name': 'Woodcut Oak Seed Spawner Attachment',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_Base': {
    'hash': 55152,
    'name': 'Woodcut Redwood LeafClump Base',
    'embedded': {
      'Woodcut_Redwood_LeafClump_Base_55166': {
        'hash': 55166,
        'name': 'Woodcut Redwood LeafClump Base',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T1_D30_C1C2': {
    'hash': 21374,
    'name': 'Woodcut Redwood LeafClump T1 D30 C1C2',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T1_D30_C1C2_21372': {
        'hash': 21372,
        'name': 'Woodcut Redwood LeafClump T1 D30 C1C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T1_D30_C3C4': {
    'hash': 49074,
    'name': 'Woodcut Redwood LeafClump T1 D30 C3C4',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T1_D30_C3C4_49072': {
        'hash': 49072,
        'name': 'Woodcut Redwood LeafClump T1 D30 C3C4',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T1_D30_C5C6': {
    'hash': 55378,
    'name': 'Woodcut Redwood LeafClump T1 D30 C5C6',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T1_D30_C5C6_55376': {
        'hash': 55376,
        'name': 'Woodcut Redwood LeafClump T1 D30 C5C6',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T1_D30_C7C8': {
    'hash': 47486,
    'name': 'Woodcut Redwood LeafClump T1 D30 C7C8',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T1_D30_C7C8_47484': {
        'hash': 47484,
        'name': 'Woodcut Redwood LeafClump T1 D30 C7C8',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T2_D30_C1C2': {
    'hash': 55954,
    'name': 'Woodcut Redwood LeafClump T2 D30 C1C2',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T2_D30_C1C2_55952': {
        'hash': 55952,
        'name': 'Woodcut Redwood LeafClump T2 D30 C1C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T2_D30_C3C4': {
    'hash': 57266,
    'name': 'Woodcut Redwood LeafClump T2 D30 C3C4',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T2_D30_C3C4_57264': {
        'hash': 57264,
        'name': 'Woodcut Redwood LeafClump T2 D30 C3C4',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T2_D30_C5C6': {
    'hash': 1528,
    'name': 'Woodcut Redwood LeafClump T2 D30 C5C6',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T2_D30_C5C6_1526': {
        'hash': 1526,
        'name': 'Woodcut Redwood LeafClump T2 D30 C5C6',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T2_D30_C7C8': {
    'hash': 9410,
    'name': 'Woodcut Redwood LeafClump T2 D30 C7C8',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T2_D30_C7C8_9408': {
        'hash': 9408,
        'name': 'Woodcut Redwood LeafClump T2 D30 C7C8',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T3_D30_C1C2': {
    'hash': 10666,
    'name': 'Woodcut Redwood LeafClump T3 D30 C1C2',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T3_D30_C1C2_10664': {
        'hash': 10664,
        'name': 'Woodcut Redwood LeafClump T3 D30 C1C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T3_D30_C3C4': {
    'hash': 6716,
    'name': 'Woodcut Redwood LeafClump T3 D30 C3C4',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T3_D30_C3C4_6714': {
        'hash': 6714,
        'name': 'Woodcut Redwood LeafClump T3 D30 C3C4',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T3_D30_C5C6': {
    'hash': 55520,
    'name': 'Woodcut Redwood LeafClump T3 D30 C5C6',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T3_D30_C5C6_55518': {
        'hash': 55518,
        'name': 'Woodcut Redwood LeafClump T3 D30 C5C6',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T3_D30_C7C8': {
    'hash': 6732,
    'name': 'Woodcut Redwood LeafClump T3 D30 C7C8',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T3_D30_C7C8_6730': {
        'hash': 6730,
        'name': 'Woodcut Redwood LeafClump T3 D30 C7C8',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C1': {
    'hash': 42552,
    'name': 'Woodcut Redwood LeafClump T4 D30 C1',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C1_44634': {
        'hash': 44634,
        'name': 'Woodcut Redwood LeafClump T4 D30 C1',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C2': {
    'hash': 46726,
    'name': 'Woodcut Redwood LeafClump T4 D30 C2',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C2_46724': {
        'hash': 46724,
        'name': 'Woodcut Redwood LeafClump T4 D30 C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C3': {
    'hash': 1774,
    'name': 'Woodcut Redwood LeafClump T4 D30 C3',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C3_1772': {
        'hash': 1772,
        'name': 'Woodcut Redwood LeafClump T4 D30 C3',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C4': {
    'hash': 1512,
    'name': 'Woodcut Redwood LeafClump T4 D30 C4',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C4_1510': {
        'hash': 1510,
        'name': 'Woodcut Redwood LeafClump T4 D30 C4',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C5': {
    'hash': 54122,
    'name': 'Woodcut Redwood LeafClump T4 D30 C5',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C5_54120': {
        'hash': 54120,
        'name': 'Woodcut Redwood LeafClump T4 D30 C5',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C6': {
    'hash': 7242,
    'name': 'Woodcut Redwood LeafClump T4 D30 C6',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C6_7240': {
        'hash': 7240,
        'name': 'Woodcut Redwood LeafClump T4 D30 C6',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C7': {
    'hash': 44386,
    'name': 'Woodcut Redwood LeafClump T4 D30 C7',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C7_44384': {
        'hash': 44384,
        'name': 'Woodcut Redwood LeafClump T4 D30 C7',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafClump_T4_D30_C8': {
    'hash': 10754,
    'name': 'Woodcut Redwood LeafClump T4 D30 C8',
    'embedded': {
      'Woodcut_Redwood_LeafClump_T4_D30_C8_10752': {
        'hash': 10752,
        'name': 'Woodcut Redwood LeafClump T4 D30 C8',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_LeafTopper': {
    'hash': 34724,
    'name': 'Woodcut Redwood LeafTopper',
    'embedded': {
      'Woodcut_Redwood_LeafTopper_34720': {
        'hash': 34720,
        'name': 'Woodcut Redwood LeafTopper',
        'savables': {}
      }
    }
  },
  'Woodcut_Redwood_Seed_Spawner_Attachment': {
    'hash': 16012,
    'name': 'Woodcut Redwood Seed Spawner Attachment',
    'embedded': {
      'Woodcut_Redwood_Seed_Spawner_Attachment_36402': {
        'hash': 36402,
        'name': 'Woodcut Redwood Seed Spawner Attachment',
        'savables': {}
      }
    }
  },
  'Woodcut_Root_V1_T0': {
    'hash': 31522,
    'name': 'Woodcut_Root_V1_T0',
    'embedded': {
      'Top_49314': {
        'hash': 49314,
        'name': 'Top_49314',
        'savables': {}
      }
    }
  },
  'Woodcut_Root_V1_T0_B15': {
    'hash': 34660,
    'name': 'Woodcut_Root_V1_T0_B15',
    'embedded': {
      'Top_23584': {
        'hash': 23584,
        'name': 'Top_23584',
        'savables': {}
      },
      'Branch_12832': {
        'hash': 12832,
        'name': 'Branch_12832',
        'savables': {}
      }
    }
  },
  'Woodcut_Root_V1_T0_S30': {
    'hash': 34546,
    'name': 'Woodcut_Root_V1_T0_S30',
    'embedded': {
      'Top_56452': {
        'hash': 56452,
        'name': 'Top_56452',
        'savables': {}
      },
      'Stick_51558': {
        'hash': 51558,
        'name': 'Stick_51558',
        'savables': {}
      }
    }
  },
  'Woodcut_Root_V1_T30': {
    'hash': 47612,
    'name': 'Woodcut_Root_V1_T30',
    'embedded': {
      'Top_7658': {
        'hash': 7658,
        'name': 'Top_7658',
        'savables': {}
      }
    }
  },
  'Woodcut_S-15_S-15': {
    'hash': 39282,
    'name': 'Woodcut S-15 S-15',
    'embedded': {
      'Top_1286': {
        'hash': 1286,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_S-15_S-15_45390': {
        'hash': 45390,
        'name': 'Woodcut S-15 S-15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_S0_E': {
    'hash': 25704,
    'name': 'Woodcut_S0_E',
    'embedded': {}
  },
  'Woodcut_S0_S0': {
    'hash': 44986,
    'name': 'Woodcut_S0_S0',
    'embedded': {
      'Top_1286': {
        'hash': 1286,
        'name': 'Top_1286',
        'savables': {}
      }
    }
  },
  'Woodcut_S0_S0_S-30': {
    'hash': 25116,
    'name': 'Woodcut S0 S0 S-30',
    'embedded': {
      'Top_1_2062': {
        'hash': 2062,
        'name': 'Top 1',
        'savables': {}
      },
      'Top_2_60778': {
        'hash': 60778,
        'name': 'Top 2',
        'savables': {}
      },
      'Woodcut_S0_S0_S-30_64064': {
        'hash': 64064,
        'name': 'Woodcut S0 S0 S-30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_S0_S0_S30': {
    'hash': 190,
    'name': 'Woodcut S0 S0 S30',
    'embedded': {
      'Top_1_2062': {
        'hash': 2062,
        'name': 'Top 1',
        'savables': {}
      },
      'Top_2_60778': {
        'hash': 60778,
        'name': 'Top 2',
        'savables': {}
      },
      'Woodcut_S0_S0_S30_64064': {
        'hash': 64064,
        'name': 'Woodcut S0 S0 S30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_S0_S15_S15': {
    'hash': 62106,
    'name': 'Woodcut_S0_S15_S15',
    'embedded': {
      'Top_1_2062': {
        'hash': 2062,
        'name': 'Top_1_2062',
        'savables': {}
      },
      'Top_2_60778': {
        'hash': 60778,
        'name': 'Top_2_60778',
        'savables': {}
      }
    }
  },
  'Woodcut_S0_S30_S30': {
    'hash': 9058,
    'name': 'Woodcut S0 S30 S30',
    'embedded': {
      'Top_1_9064': {
        'hash': 9064,
        'name': 'Top 1',
        'savables': {}
      },
      'Top_2_9062': {
        'hash': 9062,
        'name': 'Top 2',
        'savables': {}
      },
      'Woodcut_S0_S30_S30_9060': {
        'hash': 9060,
        'name': 'Woodcut S0 S30 S30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_S15_S15': {
    'hash': 19364,
    'name': 'Woodcut S15 S15',
    'embedded': {
      'Top_1286': {
        'hash': 1286,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_S15_S15_45390': {
        'hash': 45390,
        'name': 'Woodcut S15 S15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_SL15_SL15': {
    'hash': 7464,
    'name': 'Woodcut SL15 SL15',
    'embedded': {
      'Top_1286': {
        'hash': 1286,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_SL15_SL15_7460': {
        'hash': 7460,
        'name': 'Woodcut SL15 SL15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_SR15_SR15': {
    'hash': 53266,
    'name': 'Woodcut SR15 SR15',
    'embedded': {
      'Top_1286': {
        'hash': 1286,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_SR15_SR15_53262': {
        'hash': 53262,
        'name': 'Woodcut SR15 SR15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_T0_B0_B30': {
    'hash': 35026,
    'name': 'Woodcut_T0_B0_B30',
    'embedded': {
      'Branch_1_4000': {
        'hash': 4000,
        'name': 'Branch_1_4000',
        'savables': {}
      },
      'Branch_2_3996': {
        'hash': 3996,
        'name': 'Branch_2_3996',
        'savables': {}
      }
    }
  },
  'Woodcut_T0_B15_B30': {
    'hash': 21794,
    'name': 'Woodcut_T0_B15_B30',
    'embedded': {
      'Branch_1_634': {
        'hash': 634,
        'name': 'Branch_1_634',
        'savables': {}
      },
      'Branch_2_636': {
        'hash': 636,
        'name': 'Branch_2_636',
        'savables': {}
      }
    }
  },
  'Woodcut_T0_B30_B30': {
    'hash': 26492,
    'name': 'Woodcut T0 B30 B30',
    'embedded': {
      'Branch_1_26494': {
        'hash': 26494,
        'name': 'Branch 1',
        'savables': {}
      },
      'Branch_2_26488': {
        'hash': 26488,
        'name': 'Branch 2',
        'savables': {}
      },
      'Woodcut_T0_B30_B30_26500': {
        'hash': 26500,
        'name': 'Woodcut T0 B30 B30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_T0_B45_B45_B60': {
    'hash': 62378,
    'name': 'Woodcut T0 B45 B45 B60',
    'embedded': {
      'Branch_1_4000': {
        'hash': 4000,
        'name': 'Branch 1',
        'savables': {}
      },
      'Branch_2_20244': {
        'hash': 20244,
        'name': 'Branch 2',
        'savables': {}
      },
      'Branch_3_20258': {
        'hash': 20258,
        'name': 'Branch 3',
        'savables': {}
      },
      'Woodcut_T0_B45_B45_B60_35620': {
        'hash': 35620,
        'name': 'Woodcut T0 B45 B45 B60',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_T0_E': {
    'hash': 49440,
    'name': 'Woodcut_T0_E',
    'embedded': {}
  },
  'Woodcut_T0_T0': {
    'hash': 6554,
    'name': 'Woodcut_T0_T0',
    'embedded': {
      'Top_39100': {
        'hash': 39100,
        'name': 'Top_39100',
        'savables': {}
      }
    }
  },
  'Woodcut_T0_T0_B30': {
    'hash': 35016,
    'name': 'Woodcut_T0_T0_B30',
    'embedded': {
      'Top_34360': {
        'hash': 34360,
        'name': 'Top_34360',
        'savables': {}
      },
      'Branch_34356': {
        'hash': 34356,
        'name': 'Branch_34356',
        'savables': {}
      }
    }
  },
  'Woodcut_T0_T0_B45': {
    'hash': 52242,
    'name': 'Woodcut_T0_T0_B45',
    'embedded': {
      'Top_15160': {
        'hash': 15160,
        'name': 'Top_15160',
        'savables': {}
      },
      'Branch_15162': {
        'hash': 15162,
        'name': 'Branch_15162',
        'savables': {}
      }
    }
  },
  'Woodcut_T0_T0_B45_B45_B60': {
    'hash': 34502,
    'name': 'Woodcut T0 T0 B45 B45 B60',
    'embedded': {
      'Branch_1_15162': {
        'hash': 15162,
        'name': 'Branch 1',
        'savables': {}
      },
      'Branch_2_19850': {
        'hash': 19850,
        'name': 'Branch 2',
        'savables': {}
      },
      'Branch_3_19844': {
        'hash': 19844,
        'name': 'Branch 3',
        'savables': {}
      },
      'Top_15160': {
        'hash': 15160,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_T0_T0_B45_B45_B60_55228': {
        'hash': 55228,
        'name': 'Woodcut T0 T0 B45 B45 B60',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_T0_T0_B60': {
    'hash': 29162,
    'name': 'Woodcut T0 T0 B60',
    'embedded': {
      'Branch_15162': {
        'hash': 15162,
        'name': 'Branch',
        'savables': {}
      },
      'Top_15160': {
        'hash': 15160,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_T0_T0_B60_55228': {
        'hash': 55228,
        'name': 'Woodcut T0 T0 B60',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_T0_T0_S30': {
    'hash': 35022,
    'name': 'Woodcut_T0_T0_S30',
    'embedded': {
      'Top_45916': {
        'hash': 45916,
        'name': 'Top_45916',
        'savables': {}
      },
      'Stick_45912': {
        'hash': 45912,
        'name': 'Stick_45912',
        'savables': {}
      }
    }
  },
  'Woodcut_T0_T0_S30_S30_S30': {
    'hash': 33712,
    'name': 'Woodcut_T0_T0_S30_S30_S30',
    'embedded': {
      'Top_836': {
        'hash': 836,
        'name': 'Top_836',
        'savables': {}
      },
      'Stick_1_34724': {
        'hash': 34724,
        'name': 'Stick_1_34724',
        'savables': {}
      },
      'Stick_2_17522': {
        'hash': 17522,
        'name': 'Stick_2_17522',
        'savables': {}
      },
      'Stick_3_910': {
        'hash': 910,
        'name': 'Stick_3_910',
        'savables': {}
      }
    }
  },
  'Woodcut_T0_T30_B30': {
    'hash': 2712,
    'name': 'Woodcut T0 T30 B30',
    'embedded': {
      'Branch_15162': {
        'hash': 15162,
        'name': 'Branch',
        'savables': {}
      },
      'Top_15160': {
        'hash': 15160,
        'name': 'Top',
        'savables': {}
      },
      'Woodcut_T0_T30_B30_55228': {
        'hash': 55228,
        'name': 'Woodcut T0 T30 B30',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_T15_T15': {
    'hash': 40700,
    'name': 'Woodcut_T15_T15',
    'embedded': {
      'Top_30734': {
        'hash': 30734,
        'name': 'Top_30734',
        'savables': {}
      }
    }
  },
  'Woodcut_T30_T30': {
    'hash': 30226,
    'name': 'Woodcut_T30_T30',
    'embedded': {
      'Top_28372': {
        'hash': 28372,
        'name': 'Top_28372',
        'savables': {}
      }
    }
  },
  'Woodcut_T5_T5': {
    'hash': 18498,
    'name': 'Woodcut_T5_T5',
    'embedded': {
      'Top_32750': {
        'hash': 32750,
        'name': 'Top_32750',
        'savables': {}
      }
    }
  },
  'Woodcut_Training_Block': {
    'hash': 13392,
    'name': 'Woodcut Training Block',
    'embedded': {
      'Woodcut_Training_Block_11246': {
        'hash': 11246,
        'name': 'Woodcut Training Block',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      }
    }
  },
  'Woodcut_Twigs_V1_-30': {
    'hash': 49360,
    'name': 'Woodcut_Twigs_V1_-30',
    'embedded': {}
  },
  'Woodcut_Twigs_V1_0': {
    'hash': 64824,
    'name': 'Woodcut_Twigs_V1_0',
    'embedded': {}
  },
  'Woodcut_Twigs_V1_30': {
    'hash': 19674,
    'name': 'Woodcut_Twigs_V1_30',
    'embedded': {}
  },
  'Woodcut_Twigs_V2_-30': {
    'hash': 63554,
    'name': 'Woodcut_Twigs_V2_-30',
    'embedded': {}
  },
  'Woodcut_Twigs_V2_0': {
    'hash': 1846,
    'name': 'Woodcut_Twigs_V2_0',
    'embedded': {}
  },
  'Woodcut_Twigs_V2_30': {
    'hash': 1452,
    'name': 'Woodcut_Twigs_V2_30',
    'embedded': {}
  },
  'Woodcut_Twigs_V3_-30': {
    'hash': 49972,
    'name': 'Woodcut_Twigs_V3_-30',
    'embedded': {}
  },
  'Woodcut_Twigs_V3_0': {
    'hash': 63168,
    'name': 'Woodcut_Twigs_V3_0',
    'embedded': {}
  },
  'Woodcut_Twigs_V3_30': {
    'hash': 15084,
    'name': 'Woodcut_Twigs_V3_30',
    'embedded': {}
  },
  'Woodcut_Twigs_V4_0': {
    'hash': 52628,
    'name': 'Woodcut_Twigs_V4_0',
    'embedded': {}
  },
  'Woodcut_Twigs_V4_30': {
    'hash': 31554,
    'name': 'Woodcut_Twigs_V4_30',
    'embedded': {}
  },
  'Woodcut_Twigs_V5_-15': {
    'hash': 16424,
    'name': 'Woodcut Twigs V5 -15',
    'embedded': {
      'Woodcut_Twigs_V5_-15_47386': {
        'hash': 47386,
        'name': 'Woodcut Twigs V5 -15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_Twigs_V5_15': {
    'hash': 32642,
    'name': 'Woodcut Twigs V5 15',
    'embedded': {
      'Woodcut_Twigs_V5_15_32644': {
        'hash': 32644,
        'name': 'Woodcut Twigs V5 15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_Twigs_V5_L15': {
    'hash': 40208,
    'name': 'Woodcut Twigs V5 L15',
    'embedded': {
      'Woodcut_Twigs_V5_L15_40210': {
        'hash': 40210,
        'name': 'Woodcut Twigs V5 L15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_Twigs_V5_R15': {
    'hash': 25388,
    'name': 'Woodcut Twigs V5 R15',
    'embedded': {
      'Woodcut_Twigs_V5_R15_25390': {
        'hash': 25390,
        'name': 'Woodcut Twigs V5 R15',
        'savables': {
          'WoodcutPointCollection': {
            'hash': 276353327,
            'name': 'WoodcutPointCollection'
          }
        }
      }
    }
  },
  'Woodcut_Walnut_LeafClump_Base': {
    'hash': 47632,
    'name': 'Woodcut Walnut LeafClump Base',
    'embedded': {
      'Woodcut_Walnut_LeafClump_Base_47646': {
        'hash': 47646,
        'name': 'Woodcut Walnut LeafClump Base',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C1C1': {
    'hash': 29962,
    'name': 'Woodcut Walnut LeafClump C1C1',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C1C1_29960': {
        'hash': 29960,
        'name': 'Woodcut Walnut LeafClump C1C1',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C1C1_E': {
    'hash': 2796,
    'name': 'Woodcut Walnut LeafClump C1C1 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C1C1_E_2794': {
        'hash': 2794,
        'name': 'Woodcut Walnut LeafClump C1C1 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C1C2': {
    'hash': 8570,
    'name': 'Woodcut Walnut LeafClump C1C2',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C1C2_8568': {
        'hash': 8568,
        'name': 'Woodcut Walnut LeafClump C1C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C1C2_E': {
    'hash': 54836,
    'name': 'Woodcut Walnut LeafClump C1C2 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C1C2_E_54834': {
        'hash': 54834,
        'name': 'Woodcut Walnut LeafClump C1C2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C2C2': {
    'hash': 8932,
    'name': 'Woodcut Walnut LeafClump C2C2',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C2C2_8930': {
        'hash': 8930,
        'name': 'Woodcut Walnut LeafClump C2C2',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C2C2_E': {
    'hash': 1792,
    'name': 'Woodcut Walnut LeafClump C2C2 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C2C2_E_1790': {
        'hash': 1790,
        'name': 'Woodcut Walnut LeafClump C2C2 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C2C3': {
    'hash': 47520,
    'name': 'Woodcut Walnut LeafClump C2C3',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C2C3_47518': {
        'hash': 47518,
        'name': 'Woodcut Walnut LeafClump C2C3',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C2C3_E': {
    'hash': 46292,
    'name': 'Woodcut Walnut LeafClump C2C3 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C2C3_E_46290': {
        'hash': 46290,
        'name': 'Woodcut Walnut LeafClump C2C3 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C3C3': {
    'hash': 54190,
    'name': 'Woodcut Walnut LeafClump C3C3',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C3C3_54188': {
        'hash': 54188,
        'name': 'Woodcut Walnut LeafClump C3C3',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C3C3_E': {
    'hash': 8292,
    'name': 'Woodcut Walnut LeafClump C3C3 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C3C3_E_8290': {
        'hash': 8290,
        'name': 'Woodcut Walnut LeafClump C3C3 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C3C4': {
    'hash': 57820,
    'name': 'Woodcut Walnut LeafClump C3C4',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C3C4_57818': {
        'hash': 57818,
        'name': 'Woodcut Walnut LeafClump C3C4',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C3C4_E': {
    'hash': 1546,
    'name': 'Woodcut Walnut LeafClump C3C4 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C3C4_E_1544': {
        'hash': 1544,
        'name': 'Woodcut Walnut LeafClump C3C4 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C4C4_E': {
    'hash': 44372,
    'name': 'Woodcut Walnut LeafClump C4C4 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C4C4_E_44370': {
        'hash': 44370,
        'name': 'Woodcut Walnut LeafClump C4C4 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C4C5_E': {
    'hash': 6218,
    'name': 'Woodcut Walnut LeafClump C4C5 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C4C5_E_6216': {
        'hash': 6216,
        'name': 'Woodcut Walnut LeafClump C4C5 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_LeafClump_C5C5_E': {
    'hash': 9940,
    'name': 'Woodcut Walnut LeafClump C5C5 E',
    'embedded': {
      'Woodcut_Walnut_LeafClump_C5C5_E_9938': {
        'hash': 9938,
        'name': 'Woodcut Walnut LeafClump C5C5 E',
        'savables': {}
      }
    }
  },
  'Woodcut_Walnut_Seed_Spawner_Attachment': {
    'hash': 16040,
    'name': 'Woodcut Walnut Seed Spawner Attachment',
    'embedded': {
      'Woodcut_Walnut_Seed_Spawner_Attachment_36402': {
        'hash': 36402,
        'name': 'Woodcut Walnut Seed Spawner Attachment',
        'savables': {}
      }
    }
  },
  'Woodcut_Wedge': {
    'hash': 47118,
    'name': 'Woodcut Wedge',
    'embedded': {
      'Woodcut_Wedge_10506': {
        'hash': 10506,
        'name': 'Woodcut Wedge',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Woodcut_Wedge_Ashen': {
    'hash': 232,
    'name': 'Woodcut Wedge Ashen',
    'embedded': {
      'Woodcut_Wedge_Ashen_3674': {
        'hash': 3674,
        'name': 'Woodcut Wedge Ashen',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Woodcut_Wedge_Burnt': {
    'hash': 290,
    'name': 'Woodcut Wedge Burnt',
    'embedded': {
      'Woodcut_Wedge_Burnt_3674': {
        'hash': 3674,
        'name': 'Woodcut Wedge Burnt',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Woodcut_Wedge_Charred': {
    'hash': 58068,
    'name': 'Woodcut Wedge Charred',
    'embedded': {
      'Woodcut_Wedge_Charred_3674': {
        'hash': 3674,
        'name': 'Woodcut Wedge Charred',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Woodcut_Wedge_Storage': {
    'hash': 12512,
    'name': 'Woodcut Wedge Storage',
    'embedded': {
      'Filter_Dock_57214': {
        'hash': 57214,
        'name': 'Filter Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Interaction_Point_59032': {
        'hash': 59032,
        'name': 'Interaction Point',
        'savables': {}
      },
      'Internal_Dock_59328': {
        'hash': 59328,
        'name': 'Internal Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Withdraw_Dock_34750': {
        'hash': 34750,
        'name': 'Withdraw Dock',
        'savables': {}
      },
      'Woodcut_Wedge_Storage_12490': {
        'hash': 12490,
        'name': 'Woodcut Wedge Storage',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'CommunalStorage': {
            'hash': 3084373371,
            'name': 'CommunalStorage'
          },
          'PlayerInteractionRestrictor': {
            'hash': 2951515968,
            'name': 'PlayerInteractionRestrictor'
          }
        }
      }
    }
  },
  'Woodcutting_Path': {
    'hash': 45418,
    'name': 'Woodcutting Path',
    'embedded': {
      'Woodcutting_Path_54368': {
        'hash': 54368,
        'name': 'Woodcutting Path',
        'savables': {
          'PopulationPath': {
            'hash': 7704646,
            'name': 'PopulationPath'
          }
        }
      }
    }
  },
  'Woodcutting_Vines_V1_Large': {
    'hash': 24682,
    'name': 'Woodcutting_Vines_V1_Large',
    'embedded': {}
  },
  'Woodcutting_Vines_V1_Small_V1': {
    'hash': 24686,
    'name': 'Woodcutting_Vines_V1_Small_V1',
    'embedded': {}
  },
  'Woodcutting_Vines_V1_Small_V2': {
    'hash': 24684,
    'name': 'Woodcutting_Vines_V1_Small_V2',
    'embedded': {}
  },
  'Woodcutting_Vines_V1_Small_V3': {
    'hash': 24688,
    'name': 'Woodcutting_Vines_V1_Small_V3',
    'embedded': {}
  },
  'Wooden_Bag': {
    'hash': 30060,
    'name': 'Wooden Bag',
    'embedded': {
      'Bag_Body_42972': {
        'hash': 42972,
        'name': 'Bag Body',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      },
      'Dock_ML_42984': {
        'hash': 42984,
        'name': 'Dock ML',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MM_42982': {
        'hash': 42982,
        'name': 'Dock MM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_MR_42980': {
        'hash': 42980,
        'name': 'Dock MR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TL_42990': {
        'hash': 42990,
        'name': 'Dock TL',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TM_42988': {
        'hash': 42988,
        'name': 'Dock TM',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Dock_TR_42986': {
        'hash': 42986,
        'name': 'Dock TR',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Wooden_Bag_43012': {
        'hash': 43012,
        'name': 'Wooden Bag',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'wooden_bag_back_straw_22280': {
        'hash': 22280,
        'name': 'wooden_bag_back_straw',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_01_22276': {
        'hash': 22276,
        'name': 'wooden_bag_beam_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_02_22320': {
        'hash': 22320,
        'name': 'wooden_bag_beam_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_03_22316': {
        'hash': 22316,
        'name': 'wooden_bag_beam_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_04_22308': {
        'hash': 22308,
        'name': 'wooden_bag_beam_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_05_22304': {
        'hash': 22304,
        'name': 'wooden_bag_beam_05',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_06_22300': {
        'hash': 22300,
        'name': 'wooden_bag_beam_06',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_07_22296': {
        'hash': 22296,
        'name': 'wooden_bag_beam_07',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_curved_01_22292': {
        'hash': 22292,
        'name': 'wooden_bag_beam_curved_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_beam_curved_02_22288': {
        'hash': 22288,
        'name': 'wooden_bag_beam_curved_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_front_straw_22284': {
        'hash': 22284,
        'name': 'wooden_bag_front_straw',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_handle_738': {
        'hash': 738,
        'name': 'wooden_bag_handle',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_handle_wraps_742': {
        'hash': 742,
        'name': 'wooden_bag_handle_wraps',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_lid_straw_22312': {
        'hash': 22312,
        'name': 'wooden_bag_lid_straw',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_side_01_straw_22272': {
        'hash': 22272,
        'name': 'wooden_bag_side_01_straw',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'wooden_bag_side_02_straw_22268': {
        'hash': 22268,
        'name': 'wooden_bag_side_02_straw',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Wooden_Barrel': {
    'hash': 5890,
    'name': 'Wooden Barrel',
    'embedded': {
      'Handle_Pickup_13422': {
        'hash': 13422,
        'name': 'Handle Pickup',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          }
        }
      },
      'Handle__58484': {
        'hash': 58484,
        'name': 'Handle ',
        'savables': {}
      },
      'Wooden_Barrel_11132': {
        'hash': 11132,
        'name': 'Wooden Barrel',
        'savables': {
          'AdditionalStaticContent': {
            'hash': 1908922854,
            'name': 'AdditionalStaticContent'
          },
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          }
        }
      }
    }
  },
  'Wooden_Bowl': {
    'hash': 25908,
    'name': 'Wooden Bowl',
    'embedded': {
      'Wooden_Bowl_23250': {
        'hash': 23250,
        'name': 'Wooden Bowl',
        'savables': {
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Wooden_Bucket': {
    'hash': 63904,
    'name': 'Wooden Bucket',
    'embedded': {
      'Bucket_Wooden_Metal_Bottom_20258': {
        'hash': 20258,
        'name': 'Bucket Wooden Metal Bottom',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Bucket_Wooden_Metal_Top_20246': {
        'hash': 20246,
        'name': 'Bucket Wooden Metal Top',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Bucket_Wooden_Wood_20270': {
        'hash': 20270,
        'name': 'Bucket Wooden Wood',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Bucket_Wooden_Wood_Bottom_20262': {
        'hash': 20262,
        'name': 'Bucket Wooden Wood Bottom',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Handle_L__20254': {
        'hash': 20254,
        'name': 'Handle L ',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Handle_R_20266': {
        'hash': 20266,
        'name': 'Handle R',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Handle_Top_20250': {
        'hash': 20250,
        'name': 'Handle Top',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'Heat_47560': {
        'hash': 47560,
        'name': 'Heat',
        'savables': {
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'Wooden_Bucket_65316': {
        'hash': 65316,
        'name': 'Wooden Bucket',
        'savables': {
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          },
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'cookingPot_plate_01_24': {
        'hash': 24,
        'name': 'cookingPot_plate_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_02_28': {
        'hash': 28,
        'name': 'cookingPot_plate_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_03_36': {
        'hash': 36,
        'name': 'cookingPot_plate_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_04_32': {
        'hash': 32,
        'name': 'cookingPot_plate_04',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_mid_01_48': {
        'hash': 48,
        'name': 'cookingPot_plate_mid_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'cookingPot_plate_mid_02_56': {
        'hash': 56,
        'name': 'cookingPot_plate_mid_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Wooden_Dice': {
    'hash': 45608,
    'name': 'Wooden Dice',
    'embedded': {
      'Wooden_Dice_45490': {
        'hash': 45490,
        'name': 'Wooden Dice',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Wooden_Ladle': {
    'hash': 15274,
    'name': 'Wooden Ladle',
    'embedded': {
      'Wooden_Ladle_16772': {
        'hash': 16772,
        'name': 'Wooden Ladle',
        'savables': {
          'LiquidContainer': {
            'hash': 4179293747,
            'name': 'LiquidContainer'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Wooden_Net': {
    'hash': 53540,
    'name': 'Wooden Net',
    'embedded': {
      'Dock_42390': {
        'hash': 42390,
        'name': 'Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'Insert_HammerType_End_Cap_7796': {
        'hash': 7796,
        'name': 'Insert HammerType End Cap',
        'savables': {}
      },
      'Wooden_Net_7480': {
        'hash': 7480,
        'name': 'Wooden Net',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      },
      'woodenNet_basket_17034': {
        'hash': 17034,
        'name': 'woodenNet_basket',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'woodenNet_curvedFrame_01_17018': {
        'hash': 17018,
        'name': 'woodenNet_curvedFrame_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'woodenNet_curvedFrame_brace_01_17022': {
        'hash': 17022,
        'name': 'woodenNet_curvedFrame_brace_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'woodenNet_handle_01_17026': {
        'hash': 17026,
        'name': 'woodenNet_handle_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'woodenNet_knot_01_17038': {
        'hash': 17038,
        'name': 'woodenNet_knot_01',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'woodenNet_knot_02_17030': {
        'hash': 17030,
        'name': 'woodenNet_knot_02',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      },
      'woodenNet_knot_03_17014': {
        'hash': 17014,
        'name': 'woodenNet_knot_03',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          }
        }
      }
    }
  },
  'Wooden_Passage_Dynamic': {
    'hash': 43806,
    'name': 'Wooden Passage Dynamic',
    'embedded': {
      'Enemy_Spawn_28160': {
        'hash': 28160,
        'name': 'Enemy Spawn',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'Spawn_43748': {
        'hash': 43748,
        'name': 'Spawn',
        'savables': {
          'DirectionalBoundsSurface': {
            'hash': 1962842866,
            'name': 'DirectionalBoundsSurface'
          },
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          }
        }
      },
      'Wooden_Passage_Dynamic_43790': {
        'hash': 43790,
        'name': 'Wooden Passage Dynamic',
        'savables': {}
      }
    }
  },
  'Wooden_Short_Sword': {
    'hash': 16448,
    'name': 'Wooden Short Sword',
    'embedded': {
      'Wooden_Short_Sword_18792': {
        'hash': 18792,
        'name': 'Wooden Short Sword',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Wooden_Stake': {
    'hash': 17262,
    'name': 'Wooden Stake',
    'embedded': {
      'Slot_Multi_11474': {
        'hash': 11474,
        'name': 'Slot Multi',
        'savables': {}
      },
      'Wooden_Stake_17052': {
        'hash': 17052,
        'name': 'Wooden Stake',
        'savables': {
          'DurabilityModule': {
            'hash': 1871432223,
            'name': 'DurabilityModule'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'Wooden_Stirring_Spoon': {
    'hash': 23950,
    'name': 'Wooden Stirring Spoon',
    'embedded': {
      'Wooden_Stirring_Spoon_26366': {
        'hash': 26366,
        'name': 'Wooden Stirring Spoon',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'Wyrm': {
    'hash': 21642,
    'name': 'Wyrm',
    'embedded': {
      'Animation_6144': {
        'hash': 6144,
        'name': 'Animation',
        'savables': {}
      },
      'Body_1052': {
        'hash': 1052,
        'name': 'Body',
        'savables': {}
      },
      'Gameplay_42330': {
        'hash': 42330,
        'name': 'Gameplay',
        'savables': {}
      },
      'Ground_58968': {
        'hash': 58968,
        'name': 'Ground',
        'savables': {}
      },
      'SlashDamage_L_57358': {
        'hash': 57358,
        'name': 'SlashDamage L',
        'savables': {}
      },
      'SlashDamage_R_59218': {
        'hash': 59218,
        'name': 'SlashDamage R',
        'savables': {}
      },
      'Spawner_240': {
        'hash': 240,
        'name': 'Spawner',
        'savables': {}
      },
      'Wyrm_37044': {
        'hash': 37044,
        'name': 'Wyrm',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Wyrm_AI_46146': {
        'hash': 46146,
        'name': 'Wyrm AI',
        'savables': {}
      },
      'scythe_l_jnt_544': {
        'hash': 544,
        'name': 'scythe_l_jnt',
        'savables': {}
      },
      'scythe_r_jnt_542': {
        'hash': 542,
        'name': 'scythe_r_jnt',
        'savables': {}
      }
    }
  },
  'Wyrm_(Trial)': {
    'hash': 6004,
    'name': 'Wyrm (Trial)',
    'embedded': {
      'Animation_6144': {
        'hash': 6144,
        'name': 'Animation',
        'savables': {}
      },
      'Body_1052': {
        'hash': 1052,
        'name': 'Body',
        'savables': {}
      },
      'Gameplay_42330': {
        'hash': 42330,
        'name': 'Gameplay',
        'savables': {}
      },
      'Ground_58968': {
        'hash': 58968,
        'name': 'Ground',
        'savables': {}
      },
      'SlashDamage_L_57358': {
        'hash': 57358,
        'name': 'SlashDamage L',
        'savables': {}
      },
      'SlashDamage_R_59218': {
        'hash': 59218,
        'name': 'SlashDamage R',
        'savables': {}
      },
      'Spawner_240': {
        'hash': 240,
        'name': 'Spawner',
        'savables': {}
      },
      'Wyrm_(Trial)_37044': {
        'hash': 37044,
        'name': 'Wyrm (Trial)',
        'savables': {
          'PhysicalMaterialPart': {
            'hash': 272188517,
            'name': 'PhysicalMaterialPart'
          },
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'Wyrm_AI_46146': {
        'hash': 46146,
        'name': 'Wyrm AI',
        'savables': {}
      },
      'scythe_l_jnt_544': {
        'hash': 544,
        'name': 'scythe_l_jnt',
        'savables': {}
      },
      'scythe_r_jnt_542': {
        'hash': 542,
        'name': 'scythe_r_jnt',
        'savables': {}
      }
    }
  },
  'Wyrm_Arm': {
    'hash': 46340,
    'name': 'Wyrm_Arm',
    'embedded': {}
  },
  'Wyrm_Boulder_01': {
    'hash': 37174,
    'name': 'Wyrm Boulder 01',
    'embedded': {
      'Wyrm_Boulder_01_62528': {
        'hash': 62528,
        'name': 'Wyrm Boulder 01',
        'savables': {}
      },
      'Wyrm_Spawner_63404': {
        'hash': 63404,
        'name': 'Wyrm Spawner',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      }
    }
  },
  'Wyrm_Crystal_Spit': {
    'hash': 37926,
    'name': 'Wyrm Crystal Spit',
    'embedded': {
      'CrystalBall_62940': {
        'hash': 62940,
        'name': 'CrystalBall',
        'savables': {}
      },
      'Wyrm_Crystal_Spit_62050': {
        'hash': 62050,
        'name': 'Wyrm Crystal Spit',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Wyrm_Spit': {
    'hash': 61454,
    'name': 'Wyrm Spit',
    'embedded': {
      'PoisonBall_34058': {
        'hash': 34058,
        'name': 'PoisonBall',
        'savables': {}
      },
      'Wyrm_Spit_62050': {
        'hash': 62050,
        'name': 'Wyrm Spit',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          }
        }
      }
    }
  },
  'Xnor': {
    'hash': 42418,
    'name': 'Xnor',
    'embedded': {}
  },
  'Xor': {
    'hash': 42428,
    'name': 'Xor',
    'embedded': {}
  },
  'archery_target_puzzle_test': {
    'hash': 54358,
    'name': 'archery_target_puzzle_test',
    'embedded': {}
  },
  'cam': {
    'hash': 8760,
    'name': 'cam',
    'embedded': {}
  },
  'combat_dummy': {
    'hash': 57126,
    'name': 'combat_dummy',
    'embedded': {
      'combat_dummy_57314': {
        'hash': 57314,
        'name': 'combat_dummy',
        'savables': {
          'StatManager': {
            'hash': 2563567105,
            'name': 'StatManager'
          }
        }
      },
      'dummy_arm_l_01_jnt_46272': {
        'hash': 46272,
        'name': 'dummy_arm_l_01_jnt',
        'savables': {}
      },
      'dummy_arm_l_02_jnt_46248': {
        'hash': 46248,
        'name': 'dummy_arm_l_02_jnt',
        'savables': {}
      },
      'dummy_arm_l_03_jnt_46250': {
        'hash': 46250,
        'name': 'dummy_arm_l_03_jnt',
        'savables': {}
      },
      'dummy_arm_r_01_jnt_46246': {
        'hash': 46246,
        'name': 'dummy_arm_r_01_jnt',
        'savables': {}
      },
      'dummy_arm_r_02_jnt_46254': {
        'hash': 46254,
        'name': 'dummy_arm_r_02_jnt',
        'savables': {}
      },
      'dummy_arm_r_03_jnt_46256': {
        'hash': 46256,
        'name': 'dummy_arm_r_03_jnt',
        'savables': {}
      },
      'dummy_head_01_jnt_46270': {
        'hash': 46270,
        'name': 'dummy_head_01_jnt',
        'savables': {}
      },
      'dummy_head_02_jnt_46264': {
        'hash': 46264,
        'name': 'dummy_head_02_jnt',
        'savables': {}
      },
      'dummy_head_03_jnt_46262': {
        'hash': 46262,
        'name': 'dummy_head_03_jnt',
        'savables': {}
      },
      'dummy_neck_jnt_46268': {
        'hash': 46268,
        'name': 'dummy_neck_jnt',
        'savables': {}
      },
      'dummy_spineMid_jnt_46274': {
        'hash': 46274,
        'name': 'dummy_spineMid_jnt',
        'savables': {}
      },
      'dummy_spine_01_jnt_46258': {
        'hash': 46258,
        'name': 'dummy_spine_01_jnt',
        'savables': {}
      },
      'dummy_spine_02_jnt_46260': {
        'hash': 46260,
        'name': 'dummy_spine_02_jnt',
        'savables': {}
      },
      'dummy_spine_03_jnt_46266': {
        'hash': 46266,
        'name': 'dummy_spine_03_jnt',
        'savables': {}
      },
      'dummy_sternum_jnt_46252': {
        'hash': 46252,
        'name': 'dummy_sternum_jnt',
        'savables': {}
      }
    }
  },
  'item_pedestal_puzzle_base': {
    'hash': 27250,
    'name': 'item_pedestal_puzzle_base',
    'embedded': {
      'Pedestal_Dock_27002': {
        'hash': 27002,
        'name': 'Pedestal Dock',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          },
          'PickupDockPedestalSpawn': {
            'hash': 2592242915,
            'name': 'PickupDockPedestalSpawn'
          }
        }
      },
      'item_pedestal_puzzle_base_27194': {
        'hash': 27194,
        'name': 'item_pedestal_puzzle_base',
        'savables': {
          'LogicBoolSender': {
            'hash': 1257282635,
            'name': 'LogicBoolSender'
          },
          'LogicIntSender': {
            'hash': 2880587164,
            'name': 'LogicIntSender'
          },
          'PlaceItemPuzzleLogic': {
            'hash': 1001395212,
            'name': 'PlaceItemPuzzleLogic'
          }
        }
      }
    }
  },
  'mrk_extensionBridge_01': {
    'hash': 34038,
    'name': 'mrk_extensionBridge_01',
    'embedded': {
      'mrk_extensionBridge_01_32324': {
        'hash': 32324,
        'name': 'mrk_extensionBridge_01',
        'savables': {
          'LogicFloatReceiver': {
            'hash': 3188272159,
            'name': 'LogicFloatReceiver'
          },
          'NetworkedFloatStream': {
            'hash': 2127962967,
            'name': 'NetworkedFloatStream'
          }
        }
      },
      'mrk_extensionBridge_bridge_01_21508': {
        'hash': 21508,
        'name': 'mrk_extensionBridge_bridge_01',
        'savables': {}
      }
    }
  },
  'mrk_large_lift_01': {
    'hash': 28708,
    'name': 'mrk_large_lift_01',
    'embedded': {
      'End_61234': {
        'hash': 61234,
        'name': 'End',
        'savables': {}
      },
      'Start_1586': {
        'hash': 1586,
        'name': 'Start',
        'savables': {}
      },
      'mrk_large_lift_01_49676': {
        'hash': 49676,
        'name': 'mrk_large_lift_01',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'mrk_lift_platform_41794': {
        'hash': 41794,
        'name': 'mrk_lift_platform',
        'savables': {
          'CurveOutput': {
            'hash': 2576456808,
            'name': 'CurveOutput'
          }
        }
      }
    }
  },
  'mrk_lift_01': {
    'hash': 45646,
    'name': 'mrk_lift_01',
    'embedded': {
      'Network_Event_1_10242': {
        'hash': 10242,
        'name': 'Network Event 1',
        'savables': {}
      },
      'Network_Event_2_10094': {
        'hash': 10094,
        'name': 'Network Event 2',
        'savables': {}
      },
      'Reset_Receiver_54952': {
        'hash': 54952,
        'name': 'Reset Receiver',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'mrk_lift_01_49676': {
        'hash': 49676,
        'name': 'mrk_lift_01',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      },
      'mrk_lift_platform_41794': {
        'hash': 41794,
        'name': 'mrk_lift_platform',
        'savables': {
          'CurveOutput': {
            'hash': 2576456808,
            'name': 'CurveOutput'
          }
        }
      }
    }
  },
  'mrk_puzzleCore_symbol_01': {
    'hash': 48100,
    'name': 'mrk_puzzleCore_symbol_01',
    'embedded': {
      'Glow_End_49116': {
        'hash': 49116,
        'name': 'Glow End',
        'savables': {}
      },
      'Glow_Start_40754': {
        'hash': 40754,
        'name': 'Glow Start',
        'savables': {}
      },
      'mrk_puzzleCore_symbol_01_4198': {
        'hash': 4198,
        'name': 'mrk_puzzleCore_symbol_01',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      }
    }
  },
  'mrk_puzzleCore_symbol_02': {
    'hash': 48102,
    'name': 'mrk_puzzleCore_symbol_02',
    'embedded': {
      'Glow_End_39528': {
        'hash': 39528,
        'name': 'Glow End',
        'savables': {}
      },
      'Glow_Start_39856': {
        'hash': 39856,
        'name': 'Glow Start',
        'savables': {}
      },
      'mrk_puzzleCore_symbol_02_4422': {
        'hash': 4422,
        'name': 'mrk_puzzleCore_symbol_02',
        'savables': {
          'LogicBoolReceiver': {
            'hash': 3751351177,
            'name': 'LogicBoolReceiver'
          }
        }
      }
    }
  },
  'ore_copper': {
    'hash': 22768,
    'name': 'ore_copper',
    'embedded': {}
  },
  'ore_gold': {
    'hash': 38596,
    'name': 'ore_gold',
    'embedded': {}
  },
  'ore_iron': {
    'hash': 60876,
    'name': 'ore_iron',
    'embedded': {}
  },
  'ore_mythril': {
    'hash': 18158,
    'name': 'ore_mythril',
    'embedded': {}
  },
  'ore_silver': {
    'hash': 26988,
    'name': 'ore_silver',
    'embedded': {}
  },
  'pot_01': {
    'hash': 44028,
    'name': 'pot_01',
    'embedded': {}
  },
  'pumpkin_flower': {
    'hash': 3116,
    'name': 'pumpkin_flower',
    'embedded': {
      'pumpkin_flower_3100': {
        'hash': 3100,
        'name': 'pumpkin_flower',
        'savables': {}
      }
    }
  },
  'pumpkin_full_burnt': {
    'hash': 5532,
    'name': 'pumpkin full burnt',
    'embedded': {
      'Cooking_29838': {
        'hash': 29838,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_full_burnt_5096': {
        'hash': 5096,
        'name': 'pumpkin full burnt',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_full_cooked': {
    'hash': 5010,
    'name': 'pumpkin full cooked',
    'embedded': {
      'Cooking_29126': {
        'hash': 29126,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_full_cooked_4574': {
        'hash': 4574,
        'name': 'pumpkin full cooked',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_full_ripe': {
    'hash': 4488,
    'name': 'pumpkin full ripe',
    'embedded': {
      'Chisel_Handler_32690': {
        'hash': 32690,
        'name': 'Chisel Handler',
        'savables': {}
      },
      'Cooking_28436': {
        'hash': 28436,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_full_ripe_4052': {
        'hash': 4052,
        'name': 'pumpkin full ripe',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_full_unripe': {
    'hash': 3966,
    'name': 'pumpkin full unripe',
    'embedded': {
      'pumpkin_full_unripe_3530': {
        'hash': 3530,
        'name': 'pumpkin full unripe',
        'savables': {
          'MultiHandPickup': {
            'hash': 1556697998,
            'name': 'MultiHandPickup'
          },
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_half_burnt': {
    'hash': 3444,
    'name': 'pumpkin half burnt',
    'embedded': {
      'Cooking_42504': {
        'hash': 42504,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_half_burnt_3136': {
        'hash': 3136,
        'name': 'pumpkin half burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_half_cooked': {
    'hash': 3082,
    'name': 'pumpkin half cooked',
    'embedded': {
      'Cooking_41658': {
        'hash': 41658,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_half_cooked_2774': {
        'hash': 2774,
        'name': 'pumpkin half cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_half_ripe': {
    'hash': 2720,
    'name': 'pumpkin half ripe',
    'embedded': {
      'Cooking_40786': {
        'hash': 40786,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_half_ripe_2412': {
        'hash': 2412,
        'name': 'pumpkin half ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_half_unripe': {
    'hash': 2358,
    'name': 'pumpkin half unripe',
    'embedded': {
      'pumpkin_half_unripe_2050': {
        'hash': 2050,
        'name': 'pumpkin half unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_piece_burnt': {
    'hash': 42218,
    'name': 'pumpkin piece burnt',
    'embedded': {
      'Cooking_63858': {
        'hash': 63858,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_piece_burnt_41976': {
        'hash': 41976,
        'name': 'pumpkin piece burnt',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_piece_cooked': {
    'hash': 41930,
    'name': 'pumpkin piece cooked',
    'embedded': {
      'Cooking_65232': {
        'hash': 65232,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_piece_cooked_41654': {
        'hash': 41654,
        'name': 'pumpkin piece cooked',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_piece_ripe': {
    'hash': 41608,
    'name': 'pumpkin piece ripe',
    'embedded': {
      'Cooking_26172': {
        'hash': 26172,
        'name': 'Cooking',
        'savables': {
          'Cookable': {
            'hash': 205333986,
            'name': 'Cookable'
          },
          'HeatPointCollection': {
            'hash': 1217391130,
            'name': 'HeatPointCollection'
          }
        }
      },
      'pumpkin_piece_ripe_41332': {
        'hash': 41332,
        'name': 'pumpkin piece ripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          }
        }
      }
    }
  },
  'pumpkin_piece_unripe': {
    'hash': 41286,
    'name': 'pumpkin piece unripe',
    'embedded': {
      'pumpkin_piece_unripe_41010': {
        'hash': 41010,
        'name': 'pumpkin piece unripe',
        'savables': {
          'NetworkRigidbody': {
            'hash': 2290978823,
            'name': 'NetworkRigidbody'
          },
          'Pickup': {
            'hash': 1454441398,
            'name': 'Pickup'
          },
          'PickupDecay': {
            'hash': 2807522140,
            'name': 'PickupDecay'
          },
          'RaycastCrafter': {
            'hash': 2815374842,
            'name': 'RaycastCrafter'
          }
        }
      }
    }
  },
  'ruins_orbBasin_01': {
    'hash': 27482,
    'name': 'ruins_orbBasin_01',
    'embedded': {
      'Hand_Touch_(1)_46540': {
        'hash': 46540,
        'name': 'Hand Touch (1)',
        'savables': {
          'PlayerUnlockStation': {
            'hash': 2912807649,
            'name': 'PlayerUnlockStation'
          }
        }
      },
      'ruins_orbBasin_01_24754': {
        'hash': 24754,
        'name': 'ruins_orbBasin_01',
        'savables': {}
      }
    }
  },
  'tallPot': {
    'hash': 23320,
    'name': 'tallPot',
    'embedded': {}
  },
  'timberBlock_1Long': {
    'hash': 34586,
    'name': 'timberBlock_1Long',
    'embedded': {
      'timberBlock_1Long_46178': {
        'hash': 46178,
        'name': 'timberBlock_1Long',
        'savables': {}
      }
    }
  },
  'timberBlock_2Long': {
    'hash': 1898,
    'name': 'timberBlock_2Long',
    'embedded': {
      'timberBlock_2Long_372': {
        'hash': 372,
        'name': 'timberBlock_2Long',
        'savables': {}
      }
    }
  },
  'timberBlock_3Long': {
    'hash': 1900,
    'name': 'timberBlock_3Long',
    'embedded': {
      'timberBlock_3Long_376': {
        'hash': 376,
        'name': 'timberBlock_3Long',
        'savables': {}
      }
    }
  },
  'woodenPlatform_1x1': {
    'hash': 50942,
    'name': 'woodenPlatform_1x1',
    'embedded': {
      'woodenPlatform_1x1_4914': {
        'hash': 4914,
        'name': 'woodenPlatform_1x1',
        'savables': {}
      }
    }
  },
  'woodenPlatform_1x1_Torch': {
    'hash': 64260,
    'name': 'woodenPlatform_1x1 Torch',
    'embedded': {
      'Torch_Dock_15254': {
        'hash': 15254,
        'name': 'Torch Dock',
        'savables': {
          'PickupDock': {
            'hash': 2592242915,
            'name': 'PickupDock'
          }
        }
      },
      'woodenPlatform_1x1_Torch_64256': {
        'hash': 64256,
        'name': 'woodenPlatform_1x1 Torch',
        'savables': {}
      }
    }
  },
  'woodenPlatform_1x2': {
    'hash': 50950,
    'name': 'woodenPlatform_1x2',
    'embedded': {
      'woodenPlatform_1x2_4598': {
        'hash': 4598,
        'name': 'woodenPlatform_1x2',
        'savables': {}
      }
    }
  },
  'woodenPlatform_Railings_1x1': {
    'hash': 50946,
    'name': 'woodenPlatform_Railings_1x1',
    'embedded': {
      'woodenPlatform_Railings_1x1_4200': {
        'hash': 4200,
        'name': 'woodenPlatform_Railings_1x1',
        'savables': {}
      }
    }
  },
  'woodenPlatform_Stairs_02': {
    'hash': 50940,
    'name': 'woodenPlatform_Stairs_02',
    'embedded': {
      'woodenPlatform_Stairs_02_3900': {
        'hash': 3900,
        'name': 'woodenPlatform_Stairs_02',
        'savables': {}
      }
    }
  },
  'woodenPlatform_T2x1': {
    'hash': 50944,
    'name': 'woodenPlatform_T2x1',
    'embedded': {
      'woodenPlatform_T2x1_3592': {
        'hash': 3592,
        'name': 'woodenPlatform_T2x1',
        'savables': {}
      }
    }
  },
  'woodenPlatform_T2x1_1': {
    'hash': 50930,
    'name': 'woodenPlatform_T2x1 1',
    'embedded': {
      'woodenPlatform_T2x1_1_3278': {
        'hash': 3278,
        'name': 'woodenPlatform_T2x1 1',
        'savables': {}
      }
    }
  },
  'woodenPlatform_W2x2': {
    'hash': 50932,
    'name': 'woodenPlatform_W2x2',
    'embedded': {
      'woodenPlatform_W2x2_2856': {
        'hash': 2856,
        'name': 'woodenPlatform_W2x2',
        'savables': {}
      }
    }
  },
  'woodenPlatform_W2x3': {
    'hash': 10176,
    'name': 'woodenPlatform_W2x3',
    'embedded': {
      'Breakable_Population_Area_32244': {
        'hash': 32244,
        'name': 'Breakable Population Area',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'woodenPlatform_W2x3_10188': {
        'hash': 10188,
        'name': 'woodenPlatform_W2x3',
        'savables': {}
      }
    }
  },
  'woodenPlatform_W2x4': {
    'hash': 33664,
    'name': 'woodenPlatform_W2x4',
    'embedded': {
      'Breakable_Population_Area_35954': {
        'hash': 35954,
        'name': 'Breakable Population Area',
        'savables': {
          'PopulationSpawnArea': {
            'hash': 3070493599,
            'name': 'PopulationSpawnArea'
          },
          'SpawnArea': {
            'hash': 2617495528,
            'name': 'SpawnArea'
          }
        }
      },
      'woodenPlatform_W2x4_33680': {
        'hash': 33680,
        'name': 'woodenPlatform_W2x4',
        'savables': {}
      }
    }
  }
};
