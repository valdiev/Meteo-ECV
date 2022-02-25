import {createSlice, current} from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        listOfFavorite: [{ville: "Oignies", temp: 10, daily: [
                {
                    "temp": {
                        "day": 12,
                    },
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": {
                        "day": 8.32,
                    },
                    "weather": [
                        {
                            "icon": "10d"
                        }
                    ],
                },
                {
                    "temp": {
                        "day": 25,
                    },
                    "weather": [
                        {
                            "icon": "50n"
                        }
                    ],
                },
                {
                    "temp": {
                        "day": 69,
                    },
                    "weather": [
                        {
                            "icon": "04d"
                        }
                    ],
                },
                {
                    "temp": {
                        "day": 2,
                    },
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": {
                        "day": 10,
                    },
                    "weather": [
                        {
                            "icon": "03d"
                        }
                    ],
                },
                {
                    "temp": {
                        "day": 6,
                    },
                    "weather": [
                        {
                            "icon": "09d"
                        }
                    ],
                },
                {
                    "temp": {
                        "day": 8.32,
                    },
                    "weather": [
                        {
                            "icon": "10d"
                        }
                    ],
                },
            ],
            hourly: [
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                },
                {
                    "temp": 2.1,
                    "weather": [
                        {
                            "icon": "01d"
                        }
                    ],
                }
            ], weather: "02n"},
            {ville: "Sydney", temp: 24, daily: [
                    {
                        "temp": {
                            "day": 12,
                        },
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 8.32,
                        },
                        "weather": [
                            {
                                "icon": "10d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 25,
                        },
                        "weather": [
                            {
                                "icon": "50n"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 69,
                        },
                        "weather": [
                            {
                                "icon": "04d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 2,
                        },
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 10,
                        },
                        "weather": [
                            {
                                "icon": "03d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 6,
                        },
                        "weather": [
                            {
                                "icon": "09d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 8.32,
                        },
                        "weather": [
                            {
                                "icon": "10d"
                            }
                        ],
                    },
                ],
                hourly: [
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    }
                ], weather: "09d"},
            {ville: "New York", temp: 12, daily: [
                    {
                        "temp": {
                            "day": 12,
                        },
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 8.32,
                        },
                        "weather": [
                            {
                                "icon": "10d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 25,
                        },
                        "weather": [
                            {
                                "icon": "50n"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 69,
                        },
                        "weather": [
                            {
                                "icon": "04d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 2,
                        },
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 10,
                        },
                        "weather": [
                            {
                                "icon": "03d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 6,
                        },
                        "weather": [
                            {
                                "icon": "09d"
                            }
                        ],
                    },
                    {
                        "temp": {
                            "day": 8.32,
                        },
                        "weather": [
                            {
                                "icon": "10d"
                            }
                        ],
                    },
                ],
                hourly: [
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    },
                    {
                        "temp": 2.1,
                        "weather": [
                            {
                                "icon": "01d"
                            }
                        ],
                    }
                ], weather: "50d"}]
    },
    reducers:{
        addFavorite: (state,action) => {
            state.listOfFavorite.push(action.payload);
            console.log(current(state.listOfFavorite));
        },
        deleteFavorite: (state,action) =>{
            state.listOfFavorite.splice(action.payload,1);
        },
    }
})

export const { addFavorite,deleteFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer