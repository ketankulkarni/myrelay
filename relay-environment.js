const { Environment, Network, RecordSource, Store } = require("relay-runtime");

const store = new Store(new RecordSource());

export const fetchQuery = (operation, variables) => {
  return fetch("http://127.0.0.1:5000/graphql", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    },
    // mode: "no-cors",
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    console.log(response);
    return response.json();
  });
};

const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store
});

export default environment;
