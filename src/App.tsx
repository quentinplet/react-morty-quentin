import Layout from "./layout/Layout";
import Router from "./router/router";

export default function App() {
  return (
    <div className="relative">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}
