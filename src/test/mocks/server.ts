import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

server.events.on("unhandledException", ({ error }) => {
  console.log(error);
});
