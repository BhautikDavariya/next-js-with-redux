"use client"
import { persister, store } from "@/redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
export default function Providers({ children }) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            {children}
        </PersistGate>
    </Provider>

}