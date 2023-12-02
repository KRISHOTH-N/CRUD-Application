import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Add from "./pages/Add.jsx";
import Update from "./pages/Update.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<Books/>}/>
         <Route path="/add" element={<Add/>}/>
         <Route path="/update" element={<Update/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
