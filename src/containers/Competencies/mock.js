export default [
    {
        id: 1,
        name: 'Competence group A',
        description: 'Description A',
        competencies: [
            {
                id: 100,
                name: 'Competence 1A',
                description: 'Description competence 1A',
                indicators: [
                    {
                        id: 100,
                        influence: 'positive'
                    },
                    {
                        id: 110,
                        influence: 'positive'
                    }
                ]
            },
            {
                id: 110,
                name: 'Competence 2A',
                description: 'Description competence 2A',
                indicators: []
            }
        ]
    },
    {
        id: 2,
        name: 'Competence group B',
        description: 'Description B',
        competencies: [
            {
                id: 101,
                name: 'Competence 1B',
                description: 'Description competence 1B',
                indicators: [
                    {
                        id: 110,
                        influence: 'negative'
                    },
                    {
                        id: 111,
                        influence: 'positive'
                    }
                ]
            },
            {
                id: 111,
                name: 'Competence 2B',
                description: 'Description competence 2B',
                indicators: [
                    {
                        id: 112,
                        influence: 'positive'
                    },
                    {
                        id: 120,
                        influence: 'positive'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Competence group C',
        description: 'Description C',
        competencies: [
            {
                id: 102,
                name: 'Competence 1C',
                description: 'Description competence 1C',
                indicators: []
            },
            {
                id: 112,
                name: 'Competence 2C',
                description: 'Description competence 2C',
                indicators: [
                    {
                        id: 120,
                        influence: 'positive'
                    },
                    {
                        id: 102,
                        influence: 'positive'
                    }
                ]
            }
        ]
    }
];