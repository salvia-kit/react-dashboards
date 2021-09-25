import React from 'react';
import { useHistory } from 'react-router-dom';

// create new context
const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const history = useHistory();

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // set the html tag style overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // close side navigation when you click on a sidenav item.
  React.useEffect(() => {
    return history.listen(() => {
      if (open) {
        setOpen(false);
      }
    });
  }, [history, open]);

  // close side navigation on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!open) return;
        setOpen(false);
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
