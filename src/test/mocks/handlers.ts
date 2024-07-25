import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(
      [
        {
          userId: 1,
          id: 1,
          title: "Post 1 title",
          body: "Post 1 body",
        },
        {
          userId: 1,
          id: 2,
          title: "Post 2 title",
          body: "Post 2 body",
        },
      ],
      { status: 200 }
    );
  }),

  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(
      [
        {
          email: "email@example.com",
          id: 1,
          name: "Jack",
          phone: "333888222",
          username: "Jack-2",
          website: "example",
        },
        {
          email: "email@example.com",
          id: 2,
          name: "Marc",
          phone: "333888222",
          username: "Marc-2",
          website: "example",
        },
      ],
      { status: 200 }
    );
  }),
  http.get("https://jsonplaceholder.typicode.com/users/1", () => {
    return HttpResponse.json(
      {
        email: "email@example.com",
        id: 1,
        name: "Jack",
        phone: "333888222",
        username: "Jack-2",
        website: "example",
      },

      { status: 200 }
    );
  }),
];
