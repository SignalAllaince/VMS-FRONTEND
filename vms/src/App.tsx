import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import PrivateRoute from "./routes/privateRoute";
import Layout from "./layout/Layout";
import Visitors from "./pages/visitors";
import Report from "./pages/reports";
import AdminManagement from "./pages/adminManagement";

function App() {
  return (
    <main>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/Visitors"
              element={
                <PrivateRoute>
                  <Visitors />
                </PrivateRoute>
              }
            />
            <Route
              path="/Reports"
              element={
                <PrivateRoute>
                  <Report />
                </PrivateRoute>
              }
            />
            <Route
              path="/Admin_Management"
              element={
                <PrivateRoute>
                  <AdminManagement />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </main>
  );
}

export default App;
