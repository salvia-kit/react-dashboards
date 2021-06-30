import React from 'react';
import { useHistory } from 'react-router-dom';

// create new context
const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();
  const history = useHistory();

  const toggle = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  // set the html tag overflow to hidden
  // close side navigation when you click on a sidenav item. it's triggered when viewport is less than 1024px
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return history.listen(() => {
      if (open && window.innerWidth < 1024) {
        setOpen(false);
      }
    });
  }, [history, open]);

  // close side navigation on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!ref.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
  return React.useContext(Context);
}
