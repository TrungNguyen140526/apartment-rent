import Navbar from "./Navbar";
import Search from "./Search";
import SuggestionPage from "./SuggestionPage";

#

export default function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <Search />
      <SuggestionPage />
    </>
  );
}
