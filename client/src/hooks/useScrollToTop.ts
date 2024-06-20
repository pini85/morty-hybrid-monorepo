import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component scrolls the window to the top when the location changes.
 * This is useful for single-page applications using React Router to ensure that
 * navigating to a new page starts at the top of the page.
 *
 * @component
 *
 * @example
 *  Place this component inside your Router to ensure it works for every route change.
 * import { BrowserRouter as Router } from 'react-router-dom';
 *
 * function App() {
 *   return (
 *     <Router>
 *       <ScrollToTop />
 *       <Routes>
 *         <Route path="/" element={<Home />} />
 *         <Route path="/about" element={<About />} />
 *       </Routes>
 *     </Router>
 *   );
 * }
 *
 * @returns {null} This component does not render anything.
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
