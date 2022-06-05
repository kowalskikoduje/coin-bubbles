import React from "react";

export interface State {
  displayModal: boolean;
  cryptoSymbol: string | null;
}

const initialState = {
  displayModal: false,
  cryptoSymbol: null,
};

type Action =
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    };

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "SET_MODAL_DATA": {
      return {
        ...state,
        cryptoSymbol: action.data,
      };
    }
  }
}

export const UIProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
  const setCryptoSymbol = (data: string) =>
    dispatch({ type: "SET_MODAL_DATA", data });

  const value = React.useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setCryptoSymbol,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({ children }: any) => (
  <UIProvider>{children}</UIProvider>
);
