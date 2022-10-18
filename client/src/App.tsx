import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";

import Navbar from "./components/Navbar/Navbar";
import Articles from "./pages/Articles";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/articles" element={<ProtectedRoute />}>
                    <Route path="/articles" element={<Articles />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
