import Navbar from "./Navbar"
import Search from "./Search"
import SuggestionPage from "./SuggestionPage"

export default function Dashboard() {

  return (
//<<<<<<< HEAD
    <div className="App">
      <Navbar></Navbar>
      <h1>DDaay laf trang home</h1>
    </div>
  );
//=======
    <>
      <Navbar />
      <Search />
      <SuggestionPage />
    </>
  )
//>>>>>>> c9fa7c24fb09a691ea2341151082e86617c9ea26
}
