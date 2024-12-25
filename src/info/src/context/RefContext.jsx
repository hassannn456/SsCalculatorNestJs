

import React, { createContext, useState } from 'react';

const context = createContext();

const RefContext = ({ children }) => {
  const [videoLoader, setVideoLoader] = useState(false);
  return (
    <context.Provider value={{ videoLoader, setVideoLoader }}>
      <div>{children}</div>
    </context.Provider>
  )
}

export { RefContext, context }































// import React, { createContext, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// export const RefContext = createContext(undefined);

// export const RefProvider = ({ children }) => {
//   const servicesRef = useRef(null);
//   const aboutRef = useRef(null);
//   const footerRef = useRef(null);
//   const homeRef = useRef(null);
//   const insightsRef = useRef(null);
//   const navigate = useNavigate();

//   const [activeSection, setActiveSection] = useState("home");

//   const scrollToServices = () => {
//     servicesRef.current.scrollIntoView({ behavior: "smooth" });
//     setActiveSection("services");
//   };

//   const scrollToAbout = () => {
//     aboutRef.current.scrollIntoView({ behavior: "smooth" });
//     setActiveSection("about");
//   };

//   const scrollToBottom = () => {
//     footerRef.current.scrollIntoView({ behavior: "smooth" });
//     setActiveSection("footer");
//   };

//   const scrollToHome = () => {
//     if (homeRef?.current) {
//       homeRef?.current?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       navigate('/')
//     }
//     setActiveSection("home");
//   };

//   const scrollToInsights = () => {
//     insightsRef.current.scrollIntoView({ behavior: "smooth" });
//     setActiveSection("insights");
//   };

//   return (
//     <RefContext.Provider
//       value={{
//         activeSection,
//         aboutRef,
//         servicesRef,
//         footerRef,
//         homeRef,
//         insightsRef,
//         scrollToServices,
//         scrollToAbout,
//         scrollToBottom,
//         scrollToHome,
//         scrollToInsights,
//       }}
//     >
//       <div>{children}</div>
//     </RefContext.Provider>
//   );
// };
