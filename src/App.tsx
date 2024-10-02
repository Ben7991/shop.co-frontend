import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./components/layouts/Root/Root";
import Home from "./pages/shop/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>} children={[
          <Route index={true} element={<Home/>} />
        ]} />
      </Routes>
    </BrowserRouter>
  )
}