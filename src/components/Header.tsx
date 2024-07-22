import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { fetchAutorById, fetchAutors } from "../services/autors";
import { Select } from "./Select";
import AngleLeft from "./icons/AngleLeft";

export const Header: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["autors"],
    queryFn: () => fetchAutors(),
  });

  const { userId, postId } = useParams();

  const { data: selectedAutor } = useQuery({
    queryKey: ["autor", userId],
    queryFn: () => fetchAutorById(userId),
    enabled: !!userId,
  });

  return (
    <header className="flex flex-wrap sm:justify-start z-10 sm:flex-nowrap w-full border-b text-sm py-2.5 sm:py-4 sticky top-0 bg-white/30 backdrop-blur-md">
      <nav
        className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8 gap-4"
        aria-label="Global"
      >
        {postId && (
          <Link to="/">
            <AngleLeft />
          </Link>
        )}

        {data && !postId && (
          <Select
            list={data || []}
            isLoading={isLoading}
            error={error}
            selectedItem={selectedAutor}
          />
        )}
      </nav>
    </header>
  );
};
