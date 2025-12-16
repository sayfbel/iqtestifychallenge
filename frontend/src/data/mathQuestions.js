export const mathQuestions = [
    // --- EASY (1-10) ---
    {
        id: 1,
        title: "Basic Addition",
        visuals: [
            { type: 'square', value: 5, label: 'a', operator: '+' },
            { type: 'triangle', value: 3, label: 'b' }
        ],
        code: [
            { type: 'var', text: 'square' }, { type: 'op', text: ' = ' }, { type: 'num', text: '5' }, { type: 'br', text: '' },
            { type: 'var', text: 'triangle' }, { type: 'op', text: ' = ' }, { type: 'num', text: '3' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'square' }, { type: 'op', text: ' + ' }, { type: 'var', text: 'triangle' }, { type: 'op', text: ')' }
        ],
        answer: 8,
        difficulty: 'easy'
    },
    {
        id: 2,
        title: "Simple Subtraction",
        visuals: [
            { type: 'square', value: 10, label: 'x', operator: '-' },
            { type: 'circle', value: 4, label: 'y' }
        ],
        code: [
            { type: 'var', text: 'x' }, { type: 'op', text: ' = ' }, { type: 'num', text: '10' }, { type: 'br', text: '' },
            { type: 'var', text: 'y' }, { type: 'op', text: ' = ' }, { type: 'num', text: '4' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'x' }, { type: 'op', text: ' - ' }, { type: 'var', text: 'y' }, { type: 'op', text: ')' }
        ],
        answer: 6,
        difficulty: 'easy'
    },
    {
        id: 3,
        title: "Cup Sum",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'triangle', value: 2 },
                    { type: 'triangle', value: 2 }
                ]
            }
        ],
        code: [
            { type: 'var', text: 'cup' }, { type: 'op', text: ' = [' }, { type: 'var', text: 'tri' }, { type: 'op', text: ', ' }, { type: 'var', text: 'tri' }, { type: 'op', text: ']' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'func', text: 'sum' }, { type: 'op', text: '(' }, { type: 'var', text: 'cup' }, { type: 'op', text: '))' }
        ],
        answer: 4,
        difficulty: 'easy'
    },
    {
        id: 4,
        title: "Multiplication",
        visuals: [
            { type: 'triangle', value: 3, label: 'a', operator: '×' },
            { type: 'triangle', value: 3, label: 'a' }
        ],
        code: [
            { type: 'var', text: 'a' }, { type: 'op', text: ' = ' }, { type: 'num', text: '3' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'a' }, { type: 'op', text: ' * ' }, { type: 'var', text: 'a' }, { type: 'op', text: ')' }
        ],
        answer: 9,
        difficulty: 'easy'
    },
    {
        id: 5,
        title: "Triple Add",
        visuals: [
            { type: 'circle', value: 2, operator: '+' },
            { type: 'circle', value: 2, operator: '+' },
            { type: 'circle', value: 2 }
        ],
        code: [
            { type: 'var', text: 'c' }, { type: 'op', text: ' = ' }, { type: 'num', text: '2' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'c' }, { type: 'op', text: '+' }, { type: 'var', text: 'c' }, { type: 'op', text: '+' }, { type: 'var', text: 'c' }, { type: 'op', text: ')' }
        ],
        answer: 6,
        difficulty: 'easy'
    },
    {
        id: 6,
        title: "Cup Length",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'square', value: 5 },
                    { type: 'circle', value: 0 },
                    { type: 'triangle', value: 3 }
                ]
            }
        ],
        code: [
            { type: 'var', text: 'cup' }, { type: 'op', text: ' = [' }, { type: 'var', text: 'sq' }, { type: 'op', text: ',' }, { type: 'var', text: 'ci' }, { type: 'op', text: ',' }, { type: 'var', text: 'tr' }, { type: 'op', text: ']' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'func', text: 'len' }, { type: 'op', text: '(' }, { type: 'var', text: 'cup' }, { type: 'op', text: '))' }
        ],
        answer: 3,
        difficulty: 'easy'
    },
    {
        id: 7,
        title: "Mixed Ops",
        visuals: [
            { type: 'square', value: 8, label: 'x', operator: '-' },
            { type: 'triangle', value: 3, label: 'y', operator: '+' },
            { type: 'circle', value: 1, label: 'z' }
        ],
        code: [
            { type: 'val', text: '8 - 3 + 1' }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'num', text: '8' }, { type: 'op', text: ' - ' }, { type: 'num', text: '3' }, { type: 'op', text: ' + ' }, { type: 'num', text: '1' }, { type: 'op', text: ')' }
        ],
        answer: 6,
        difficulty: 'easy'
    },
    {
        id: 8,
        title: "Double Cup",
        visuals: [
            {
                type: 'cup_container',
                contents: [{ type: 'circle', value: 5 }]
            },
            {
                type: 'cup_container',
                contents: [{ type: 'circle', value: 5 }]
            }
        ],
        code: [
            { type: 'var', text: 'c1' }, { type: 'op', text: ' = [' }, { type: 'var', text: 'ci' }, { type: 'op', text: ']' }, { type: 'br', text: '' },
            { type: 'var', text: 'c2' }, { type: 'op', text: ' = [' }, { type: 'var', text: 'ci' }, { type: 'op', text: ']' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'func', text: 'sum' }, { type: 'op', text: '(c1)' }, { type: 'op', text: ' + ' }, { type: 'func', text: 'sum' }, { type: 'op', text: '(c2))' }
        ],
        answer: 10,
        difficulty: 'easy'
    },
    {
        id: 9,
        title: "Circle Power",
        visuals: [
            { type: 'circle', value: 3, label: 'c', operator: '×' },
            { type: 'circle', value: 3, label: 'c' }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'c' }, { type: 'op', text: ' ** ' }, { type: 'num', text: '2' }, { type: 'op', text: ')' }
        ],
        answer: 9,
        difficulty: 'easy'
    },
    {
        id: 10,
        title: "Zero Property",
        visuals: [
            { type: 'square', value: 100, label: 'x', operator: '×' },
            { type: 'circle', value: 0, label: 'y' }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: '100' }, { type: 'op', text: ' * ' }, { type: 'var', text: '0' }, { type: 'op', text: ')' }
        ],
        answer: 0,
        difficulty: 'easy'
    },

    // --- NORMAL (11-20) ---
    {
        id: 11,
        title: "Loop Range 2",
        visuals: [
            {
                type: 'loop_visual',
                initial: { label: 'tot=0', contents: [] },
                loop: { label: 'range(2)', tooltip: 'i=0, 1' },
                final: { label: '+= triangle(3)', contents: [{ type: 'triangle', value: 3 }, { type: 'triangle', value: 3 }] }
            }
        ],
        code: [
            { type: 'keyword', text: 'for' }, { type: 'var', text: ' i' }, { type: 'keyword', text: ' in' }, { type: 'func', text: ' range' }, { type: 'op', text: '(2):' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'var', text: 'tot' }, { type: 'op', text: ' += ' }, { type: 'var', text: 'tri' }
        ],
        answer: 6,
        difficulty: 'normal'
    },
    {
        id: 12,
        title: "Loop Square",
        visuals: [
            {
                type: 'loop_visual',
                initial: { label: 'tot=0', contents: [] },
                loop: { label: 'range(3)', tooltip: 'i=0, 1, 2' },
                final: { label: '+= square(2)', contents: [{ type: 'square', value: 2 }, { type: 'square', value: 2 }, { type: 'square', value: 2 }] }
            }
        ],
        code: [
            { type: 'keyword', text: 'for' }, { type: 'var', text: ' i' }, { type: 'keyword', text: ' in' }, { type: 'func', text: ' range' }, { type: 'op', text: '(3):' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'var', text: 'tot' }, { type: 'op', text: ' += ' }, { type: 'var', text: 'sq' }
        ],
        answer: 6,
        difficulty: 'normal'
    },
    {
        id: 13,
        title: "Mixed Loop",
        visuals: [
            {
                type: 'loop_visual',
                initial: { label: 'res = sq', contents: [{ type: 'square', value: 10 }] },
                loop: { label: 'range(2)', tooltip: 'Runs 2 times:\ni = 0\ni = 1' },
                final: {
                    label: 'res += tri', contents: [
                        { type: 'square', value: 10 },
                        { type: 'triangle', value: 2 },
                        { type: 'triangle', value: 2 }
                    ]
                }
            }
        ],
        code: [
            { type: 'var', text: 'res' }, { type: 'op', text: ' = ' }, { type: 'var', text: 'sq' }, { type: 'br', text: '' },
            { type: 'keyword', text: 'for' }, { type: 'var', text: ' i' }, { type: 'keyword', text: ' in' }, { type: 'func', text: ' range' }, { type: 'op', text: '(2):' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'var', text: 'res' }, { type: 'op', text: ' += ' }, { type: 'var', text: 'tri' }
        ],
        answer: 14,
        difficulty: 'normal'
    },
    {
        id: 14,
        title: "Cup Multiplication",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'triangle', value: 3 },
                    { type: 'triangle', value: 3 }
                ],
                operator: '×'
            },
            { type: 'number', value: 2, label: '2' }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'func', text: 'sum' }, { type: 'op', text: '(cup)' }, { type: 'op', text: ' * ' }, { type: 'num', text: '2' }, { type: 'op', text: ')' }
        ],
        answer: 12,
        difficulty: 'normal'
    },
    {
        id: 15,
        title: "Order of Ops",
        visuals: [
            { type: 'square', value: 4, operator: '+' },
            { type: 'triangle', value: 3, operator: '×' },
            { type: 'circle', value: 2 }
        ],
        code: [
            { type: 'var', text: '4' }, { type: 'op', text: ' + ' }, { type: 'var', text: '3' }, { type: 'op', text: ' * ' }, { type: 'var', text: '2' }
        ],
        answer: 10,
        difficulty: 'normal'
    },
    {
        id: 16,
        title: "If Statement",
        visuals: [
            { type: 'square', value: 5, label: 'x' },
            { type: 'triangle', value: 3, label: 'y' }
        ],
        code: [
            { type: 'keyword', text: 'if' }, { type: 'var', text: ' x' }, { type: 'op', text: ' > ' }, { type: 'var', text: 'y' }, { type: 'op', text: ':' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'x' }, { type: 'op', text: ')' }
        ],
        answer: 5,
        difficulty: 'normal'
    },
    {
        id: 17,
        title: "Modulo Math",
        visuals: [
            { type: 'square', value: 10, operator: '%' },
            { type: 'triangle', value: 3 }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'num', text: '10' }, { type: 'op', text: ' % ' }, { type: 'num', text: '3' }, { type: 'op', text: ')' }
        ],
        answer: 1,
        difficulty: 'normal'
    },
    {
        id: 18,
        title: "Cup Index",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'square', value: 10, label: '0', operator: '-' },
                    { type: 'triangle', value: 5, label: '1' }
                ]
            }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'cup' }, { type: 'op', text: '[' }, { type: 'num', text: '0' }, { type: 'op', text: ']' }, { type: 'op', text: ' - ' }, { type: 'var', text: 'cup' }, { type: 'op', text: '[' }, { type: 'num', text: '1' }, { type: 'op', text: '])' }
        ],
        answer: 5,
        difficulty: 'normal'
    },
    {
        id: 19,
        title: "Double Loop",
        visuals: [
            {
                type: 'loop_visual',
                initial: { label: 'x=0', contents: [] },
                loop: { label: 'range(4)', tooltip: '4 times' },
                final: { label: '+= 1', contents: [{ type: 'circle', value: 1 }, { type: 'circle', value: 1 }, { type: 'circle', value: 1 }, { type: 'circle', value: 1 }] }
            }
        ],
        code: [
            { type: 'keyword', text: 'for' }, { type: 'var', text: ' i' }, { type: 'keyword', text: ' in' }, { type: 'func', text: ' range' }, { type: 'op', text: '(4):' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'var', text: 'x' }, { type: 'op', text: ' += ' }, { type: 'num', text: '1' }
        ],
        answer: 4,
        difficulty: 'normal'
    },
    {
        id: 20,
        title: "Complex Cup",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'square', value: 3 },
                    { type: 'triangle', value: 5 },
                    { type: 'circle', value: 4 }
                ]
            }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'func', text: 'sum' }, { type: 'op', text: '(cup)' }, { type: 'op', text: ' / ' }, { type: 'func', text: 'len' }, { type: 'op', text: '(cup))' }
        ],
        answer: 4,
        difficulty: 'normal'
    },

    // --- HARD (21-30) ---
    {
        id: 21,
        title: "Nested Logic",
        visuals: [
            {
                type: 'if_visual',
                condition: {
                    contents: [
                        { type: 'square', value: 8, operator: '%' },
                        { type: 'triangle', value: 4, operator: '==' },
                        { type: 'number', value: 0, label: '0' }
                    ]
                },
                result: {
                    contents: [
                        { type: 'square', value: 8, operator: '/' },
                        { type: 'triangle', value: 4 }
                    ]
                }
            }
        ],
        code: [
            { type: 'keyword', text: 'if' }, { type: 'var', text: ' a' }, { type: 'op', text: ' % ' }, { type: 'var', text: 'b' }, { type: 'op', text: ' == ' }, { type: 'num', text: '0' }, { type: 'op', text: ':' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'a' }, { type: 'op', text: ' / ' }, { type: 'var', text: 'b' }, { type: 'op', text: ')' }
        ],
        answer: 2,
        difficulty: 'hard'
    },
    {
        id: 22,
        title: "Accumulator",
        visuals: [
            { type: 'loop_visual', initial: { label: 'acc=1', contents: [] }, loop: { label: 'range(3)', tooltip: '0,1,2' }, final: { label: 'acc += i', contents: [{ type: 'circle', value: '+0' }, { type: 'circle', value: '+1' }, { type: 'circle', value: '+2' }] } }
        ],
        code: [
            { type: 'var', text: 'acc' }, { type: 'op', text: ' = ' }, { type: 'num', text: '1' }, { type: 'br', text: '' },
            { type: 'keyword', text: 'for' }, { type: 'var', text: ' i' }, { type: 'keyword', text: ' in' }, { type: 'func', text: ' range' }, { type: 'op', text: '(3):' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'var', text: 'acc' }, { type: 'op', text: ' += ' }, { type: 'var', text: 'i' }
        ],
        answer: 4,
        difficulty: 'hard'
    },
    {
        id: 23,
        title: "Cup Math",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'square', value: 5, operator: '-' },
                    { type: 'triangle', value: 3 }
                ],
                operator: '-'
            },
            { type: 'circle', value: 2 }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '((' }, { type: 'var', text: 'cup[0]' }, { type: 'op', text: ' - ' }, { type: 'var', text: 'cup[1]' }, { type: 'op', text: ')  - ' }, { type: 'var', text: 'circle' }, { type: 'op', text: ')' }
        ],
        answer: 0,
        difficulty: 'hard'
    },
    {
        id: 24,
        title: "Large Loop",
        visuals: [
            { type: 'loop_visual', initial: { label: 't=0', contents: [] }, loop: { label: 'range(10)', tooltip: 'Runs 10 times' }, final: { label: 't+=1', contents: [{ type: 'triangle', value: 1 }] } }
        ],
        code: [
            { type: 'var', text: 't' }, { type: 'op', text: ' = ' }, { type: 'num', text: '0' }, { type: 'br', text: '' },
            { type: 'keyword', text: 'for' }, { type: 'var', text: ' _' }, { type: 'keyword', text: ' in' }, { type: 'func', text: ' range' }, { type: 'op', text: '(10):' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'var', text: 't' }, { type: 'op', text: ' += ' }, { type: 'num', text: '1' }
        ],
        answer: 10,
        difficulty: 'hard'
    },
    {
        id: 25,
        title: "Logic Gate",
        visuals: [
            { type: 'square', value: 1, label: 'True(1)', operator: 'and' },
            { type: 'circle', value: 0, label: 'False(0)' }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'sq' }, { type: 'op', text: ' and ' }, { type: 'var', text: 'circ' }, { type: 'op', text: ')' }
        ],
        answer: 0,
        difficulty: 'hard'
    },
    {
        id: 26,
        title: "While Loop",
        visuals: [
            { type: 'square', value: 5, label: 'x' }
        ],
        code: [
            { type: 'var', text: 'x' }, { type: 'op', text: ' = ' }, { type: 'num', text: '5' }, { type: 'br', text: '' },
            { type: 'keyword', text: 'while' }, { type: 'var', text: ' x' }, { type: 'op', text: ' > ' }, { type: 'num', text: '0' }, { type: 'op', text: ':' }, { type: 'br', text: '' },
            { type: 'indent', text: '  ' }, { type: 'var', text: 'x' }, { type: 'op', text: ' -= ' }, { type: 'num', text: '2' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'x' }, { type: 'op', text: ')' }
        ],
        answer: -1,
        difficulty: 'hard'
    },
    {
        id: 27,
        title: "Multiple Vars",
        visuals: [
            { type: 'square', value: 4, operator: '*' },
            { type: 'square', value: 4, operator: '-' },
            { type: 'triangle', value: 10 }
        ],
        code: [
            { type: 'val', text: '4 * 4 - 10' }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'num', text: '4' }, { type: 'op', text: ' * ' }, { type: 'num', text: '4' }, { type: 'op', text: ' - ' }, { type: 'num', text: '10' }, { type: 'op', text: ')' }
        ],
        answer: 6,
        difficulty: 'hard'
    },
    {
        id: 28,
        title: "List Sum + Index",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'circle', value: 1 },
                    { type: 'circle', value: 2 },
                    { type: 'circle', value: 3 }
                ]
            }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'func', text: 'sum' }, { type: 'op', text: '(cup)' }, { type: 'op', text: ' + ' }, { type: 'var', text: 'cup' }, { type: 'op', text: '[' }, { type: 'num', text: '-1' }, { type: 'op', text: '])' }
        ],
        answer: 9,
        difficulty: 'hard'
    },
    {
        id: 29,
        title: "Geometry",
        visuals: [
            { type: 'square', value: 6, label: 'side' }
        ],
        code: [
            { type: 'var', text: 'area' }, { type: 'op', text: ' = ' }, { type: 'var', text: 'side' }, { type: 'op', text: ' * ' }, { type: 'var', text: 'side' }, { type: 'br', text: '' },
            { type: 'func', text: 'print' }, { type: 'op', text: '(' }, { type: 'var', text: 'area' }, { type: 'op', text: ' / ' }, { type: 'num', text: '4' }, { type: 'op', text: ')' }
        ],
        answer: 9,
        difficulty: 'hard'
    },
    {
        id: 30,
        title: "Master Calc",
        visuals: [
            {
                type: 'cup_container',
                contents: [
                    { type: 'square', value: 3 },
                    { type: 'triangle', value: 6 }
                ],
                operator: '×'
            },
            { type: 'square', value: 2, label: 'x', operator: '-' },
            { type: 'circle', value: 10, label: 'y' }
        ],
        code: [
            { type: 'func', text: 'print' }, { type: 'op', text: '((' }, { type: 'func', text: 'sum' }, { type: 'op', text: '(cup) * ' }, { type: 'var', text: 'x' }, { type: 'op', text: ') - ' }, { type: 'var', text: 'y' }, { type: 'op', text: ')' }
        ],
        answer: 8,
        difficulty: 'hard'
    }
];
