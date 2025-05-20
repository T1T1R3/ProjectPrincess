import { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LoadingScreen from "./Loading";
import { CSSTransition } from "react-transition-group";
import "./loading.css";

export default function Layout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={isLoading}
        timeout={0}
        classNames="fade"
        unmountOnExit
      >
        <div ref={nodeRef}>
          <LoadingScreen />
        </div>
      </CSSTransition>
      <Outlet />
    </>
  );
}
