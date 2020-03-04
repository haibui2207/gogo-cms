import React, { useState, useContext } from 'react';

const initialValues = {
  active: true,
  activatedIndex: 0,
  toggle: () => {},
  setActivity: () => {},
  setState: () => {},
};
const SidebarContext = React.createContext(initialValues);

const SidebarProvider = props => {
  const [state, setState] = useState({ active: true, activatedIndex: 0 });

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        setState,
        setActivity: active => setState({ ...state, active }),
        toggle: () => setState({ ...state, active: !state.active }),
      }}
      {...props}
    />
  );
};

const useSidebar = () => useContext(SidebarContext);

export { SidebarProvider, useSidebar };
