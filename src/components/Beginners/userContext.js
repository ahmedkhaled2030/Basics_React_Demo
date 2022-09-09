//1-create the context
//2-provide a context value => provider is responsible for providing a value for all the descendant components
//3-consume the context value

import React from 'react';

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export {UserProvider , UserConsumer }