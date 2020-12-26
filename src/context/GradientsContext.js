import React, { createContext } from "react";
import { gradients, uniqueTags } from "./../gradients";

// créer et exporter ("named") GradientContext object avec valeurs par default du createContext
export const GradientContext = createContext();

//le component-provider qui embracera toute l'application et passera l'array gradients et l'array uniqueTags
const GradientContextProvider = ({ children }) => {
  return (
    <GradientContext.Provider value={{ gradients, uniqueTags }}>
      {children}
    </GradientContext.Provider>
  );
};

/* // créer et exporter ("named") GradientContext object avec valeurs par default du createContext
export const GradientContext = createContext({ gradients, uniqueTags });

//le component-provider qui embracera toute l'application et passera l'array gradients et l'array uniqueTags
const GradientContextProvider = ({ children }) => {
  return <>{children}</>;
}; */

export default GradientContextProvider;
