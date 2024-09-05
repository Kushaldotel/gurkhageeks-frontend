import { Provider } from "react-redux";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Layout";
import PublicLayout from "./Routes/public-route";
import { persistor, store } from "./Utils/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <ScrollToTop />
          <PublicLayout />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
