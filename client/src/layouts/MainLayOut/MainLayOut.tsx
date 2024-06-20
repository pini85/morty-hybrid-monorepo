import React from "react";
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import { Outlet } from "react-router-dom";
import * as S from "./MainLayOut.styles";

/**
 * MainLayout component that serves as the primary layout for the application.
 *
 * This component includes a header, a footer, and a main content area where different
 * routes will be rendered. It uses React Router's `Outlet` to render the matched child route.
 *
 * @component
 * @example
 * // Usage in a router configuration
 * import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 * import MainLayout from './MainLayout';
 * import HomePage from './HomePage';
 * import AboutPage from './AboutPage';
 *
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/" element={<MainLayout />}>
 *           <Route index element={<HomePage />} />
 *           <Route path="about" element={<AboutPage />} />
 *         </Route>
 *       </Routes>
 *     </Router>
 *   );
 * }
 *
 * @returns {JSX.Element} The rendered MainLayout component.
 */
const MainLayout: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default MainLayout;
