import React, { createContext, useContext } from 'react';

type ActionState = "idle" | "executing" | "hasSucceeded" | "hasErrored";
// Create a context for your state and dispatch
const ActionContext = createContext<ActionState>("idle");


type ActionProviderType ={children: React.ReactNode,value:ActionState}
// Create a provider component to wrap your app and provide the context value
export function ActionProvider({ children,value }: ActionProviderType) {

  return <ActionContext.Provider value={value}>{children}</ActionContext.Provider>;
}

// Custom hook to consume the context
export function useActionContext() {
  const context = useContext(ActionContext);
  if (!context) {
    throw new Error('useActionContext must be used within a MyProvider');
  }
  return context;
}
export type {ActionState}