import React from "react";
// provide data to other components
import { ApolloProvider } from "@apollo/react-hooks";
// get data when we're ready to use it
import ApolloClient from "apollo-boost";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// establish connection to the GraphQL server using Apollo.
const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    // Everything between the JSX tags will eventually have access to the server's API data through the client.
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
