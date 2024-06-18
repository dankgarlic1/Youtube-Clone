import { SearchBar } from "./SearchBar";

export const Appbar = () => {
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <div>
        <SearchBar />
      </div>
      <div>Sign in</div>
    </div>
  );
};
