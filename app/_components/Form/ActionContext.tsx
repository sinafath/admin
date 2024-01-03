import { HookActionStatus } from 'next-safe-action/hook';
import React, { createContext, useContext } from 'react';


// Create a context for your state and dispatch
const ActionContext = createContext<HookActionStatus>("idle");


type ActionProviderType ={children: React.ReactNode,value:HookActionStatus}
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