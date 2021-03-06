import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime';
  
  function fetchQuery(
    operation,
    variables,
  ) {
    return fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json();
    });
  }

  const source = new RecordSource();
  const store = new Store(source);

  const environment = new Environment({
    network: Network.create(fetchQuery),
    store
  });
  
  export default environment;