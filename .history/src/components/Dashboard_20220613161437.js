import Navbar from "./Navbar"
import Search from "./Search"
import SuggestionPage from "./SuggestionPage"

export default function Dashboard() {

  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      <h1>DDaay laf trang home</h1>
    </div>
    </>
  );
    <>
      <Navbar />
      <Search />
      <SuggestionPage />
    </>
  )
}
