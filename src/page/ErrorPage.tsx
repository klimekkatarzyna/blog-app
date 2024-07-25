import React, { FC } from "react";

export const ErrorPage: FC = () => (
  <div
    className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-transparent"
    data-testid="error-page"
  >
    <h1 className="text-gray-700 font-semibold text-xl">
      Something went wrong
    </h1>
  </div>
);
