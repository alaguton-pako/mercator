import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./pages/layout/AdminLayout";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/admin/Dashboard";
import ComplaintLog from "./pages/admin/ComplaintLog";
import ComplaintDetail from "./components/ComplaintDetail";

function App() {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/" element={<Login />} />

      {/* Admin layout with nested dashboard */}
      <Route element={<AdminLayout />}>
        <Route path="complaint-log" element={<ComplaintLog />} />
        <Route path="complaint-resolve" element={<ComplaintLog />} />
        <Route path="/complaint-log/:accountNumber" element={<ComplaintDetail />} />
      </Route>

      {/* Redirect unmatched routes to dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
