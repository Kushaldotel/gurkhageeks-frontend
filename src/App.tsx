import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Layout";
import PublicLayout from "./Routes/public-route";

function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <PublicLayout />
      </Layout>
    </>
  );
}

export default App;
