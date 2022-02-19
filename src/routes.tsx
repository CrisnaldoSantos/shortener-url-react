import { Analytcs } from 'pages/Analytcs';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Shortener } from 'pages/Shortener';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shortener />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/analytics" element={<Analytcs />} />
        <Route path="/myurls" element={<Analytcs />} />
      </Routes>
    </BrowserRouter>
  );
}
