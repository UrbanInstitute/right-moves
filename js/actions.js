var actions = {
	"first":[
		{
			"slide":0,
			"transitions":[]
		}
	],
	"introduction":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				}
			]
		},
		{
			"slide":1,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popup"					
				}
			]
		},
		{
			"slide":2,
			"transitions":[
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}
			]
		}
	],
	"scenario1":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-dimmer.intro",
					"addedClass":"dim"					
				},
				{
					"selectedItem":".div-scenario-background",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-right.building",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-left.car",
					"addedClass":"popup"					
				}
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[]
		},
		{
			"slide":3,
			"transitions":[
				{
					"selectedItem":".img-2up-right.building",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-left.car",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"decision1":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":".div-decision-button.choice-1",
					"addedClass":"appear"					
				},{
					"selectedItem":".div-decision-button.choice-2",
					"addedClass":"appear"					
				},{
					"selectedItem":".div-dimmer",
					"addedClass":"fadeout"					
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"outcome1a":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"highlight"					
				},
				{
					"selectedItem":".image-bullet-sprite.empty",
					"addedClass":"pulse"
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				}				
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				}
			]
		},
		{
			"slide":3,
			"transitions":[]
		},
		{
			"slide":4,
			"transitions":[]
		},
		{
			"slide":5,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"outcome1b":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"highlight"					
				},
				{
					"selectedItem":".image-bullet-sprite.empty",
					"addedClass":"pulse"
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				}				
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				}
			]
		},
		{
			"slide":3,
			"transitions":[]
		},
		{
			"slide":4,
			"transitions":[]
		},
		{
			"slide":5,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"scenario2":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-dimmer.intro",
					"addedClass":"dim"					
				},
				{
					"selectedItem":".div-scenario-background",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"					
				}
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[]
		},
		{
			"slide":3,
			"transitions":[
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"decision2":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":".div-decision-button.choice-1",
					"addedClass":"appear"					
				},{
					"selectedItem":".div-decision-button.choice-2",
					"addedClass":"appear"					
				},{
					"selectedItem":".div-decision-button.choice-3",
					"addedClass":"appear"					
				},{
					"selectedItem":".div-dimmer",
					"addedClass":"fadeout"					
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"outcome2a":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"highlight"					
				},
				{
					"selectedItem":".image-bullet-sprite.empty",
					"addedClass":"pulse"
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				}				
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[]
		},
		{
			"slide":3,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				}
			]
		},
		{
			"slide":4,
			"transitions":[]
		},
		{
			"slide":5,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"outcome2b":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"highlight"					
				},
				{
					"selectedItem":".image-bullet-sprite.empty",
					"addedClass":"pulse"
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				}				
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				}
			]
		},
		{
			"slide":3,
			"transitions":[]
		},
		{
			"slide":4,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"outcome2c":[
{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"highlight"					
				},
				{
					"selectedItem":".image-bullet-sprite.empty",
					"addedClass":"pulse"
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				}				
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				}
			]
		},
		{
			"slide":3,
			"transitions":[]
		},
		{
			"slide":4,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"scenario3":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-dimmer.intro",
					"addedClass":"dim"					
				},
				{
					"selectedItem":".div-scenario-background",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"					
				}
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[]
		},
		{
			"slide":3,
			"transitions":[
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"					
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"decision3":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":".div-decision-button.choice-1",
					"addedClass":"appear"					
				},{
					"selectedItem":".div-decision-button.choice-2",
					"addedClass":"appear"					
				},{
					"selectedItem":".div-dimmer",
					"addedClass":"fadeout"					
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"outcome3a":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"highlight"					
				},
				{
					"selectedItem":".image-bullet-sprite.empty",
					"addedClass":"pulse"
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				}				
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				}
			]
		},
		{
			"slide":3,
			"transitions":[]
		},
		{
			"slide":4,
			"transitions":[]
		},
		{
			"slide":5,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"outcome3b":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				},
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"highlight"					
				},
				{
					"selectedItem":".image-bullet-sprite.empty",
					"addedClass":"pulse"
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				}				
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".img-2up-left",
					"addedClass":"popup"
				},
				{
					"selectedItem":".img-2up-right",
					"addedClass":"popup"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				}
			]
		},
		{
			"slide":3,
			"transitions":[]
		},
		{
			"slide":4,
			"transitions":[]
		},
		{
			"slide":5,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"
				},
				{
					"selectedItem":".div-voucher-background",
					"addedClass":"fadein"
				},
				{				
					"selectedItem":".div-voucher-panel",
					"addedClass":"fadein"
				},
				{
					"selectedItem":".move-button",
					"addedClass":"active"					
				}				
			]
		}
	],
	"conclusion":[
		{
			"slide":0,
			"transitions":[
				{
					"selectedItem":"*[data-ix='next-btn-load']",
					"addedClass":"animate"					
				}
			]
		},
		{
			"slide":1,
			"transitions":[]
		},
		{
			"slide":2,
			"transitions":[]
		},{
			"slide":3,
			"transitions":[
				{
					"selectedItem":".div-score-bottom",
					"addedClass":"popdown"					
				},
				{
					"selectedItem":".slider-next-btn",
					"addedClass":"hide"					
				},
				{
					"selectedItem":".arrow-right-last",
					"addedClass":"hide"					
				}
				
			]
		}
	]
}