import { createContext, useContext, useState } from "react";

//create modal context
const ModalContext = createContext();

//define all state variables and functions relevant to modals
function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayEditSavedWord, setDisplayEditSavedWord] = useState(false);

  //will tell the page to open the modal
  function handleOpenModal() {
    setIsModalOpen(true);
  }

  //will tell the page ot close the modal
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  //will tell the page to either open or close SPECIFICALLY the edit word modal
  function handleDisplayEditSavedWord() {
    setDisplayEditSavedWord((currentState) => !currentState);
  }

  //returns to the Provider of ModalContext, which will be used to wrap around the parent component (likely the demo page component, so that all modal variables can be accessed by the parent's children)
  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        displayEditSavedWord,
        handleCloseModal,
        handleOpenModal,
        handleDisplayEditSavedWord,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

//custom hook to encapsulate
function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("ModalContext was used outside of ModalProvider");
  }
  return context;
}

export { ModalProvider, useModalContext };
