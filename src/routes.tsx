import { Analytcs } from 'pages/Analytcs';
import { Login } from 'pages/Login';
import { MyUrls } from 'pages/MyUrls';
import { Register } from 'pages/Register';
import { Shortener } from 'pages/Shortener';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { getAccessToken } from 'utils/dataStorage';

function ProtectedAuth({ children }: { children: JSX.Element }) {
  const token = getAccessToken();
  const location = useLocation();

  if (!token || token === '') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function AuthToHome({ children }: { children: JSX.Element }) {
  const token = getAccessToken();
  const location = useLocation();

  if (token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shortener />} />
        <Route
          path="/login"
          element={
            <AuthToHome>
              <Login />
            </AuthToHome>
          }
        />
        <Route
          path="/register"
          element={
            <AuthToHome>
              <Register />
            </AuthToHome>
          }
        />
        <Route path="/analytics" element={<Analytcs />} />
        <Route
          path="/myurls"
          element={
            <ProtectedAuth>
              <MyUrls />
            </ProtectedAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
