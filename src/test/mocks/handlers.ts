import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://dummyjson.com/todos', () => {
        return HttpResponse.json({
            "todos": [
                {
                    "id": 1,
                    "todo": "Do something nice for someone I care about",
                    "completed": true,
                    "userId": 26
                },
                {
                    "id": 2,
                    "todo": "Do something else as well",
                    "completed": true,
                    "userId": 11
                },
                {
                  "id": 3,
                  "todo": "Do something unique",
                  "completed": false,
                  "userId": 29
                },
            ]
        }, { status: 200 })
    }),
]