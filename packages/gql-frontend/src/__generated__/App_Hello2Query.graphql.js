/**
 * @flow
 * @relayHash 053adf7a3eecabc8c8d54354d46780e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type App_Hello2QueryVariables = {|
  id: string
|};
export type App_Hello2QueryResponse = {|
  +hello: ?{|
    +id: string,
    +text: ?string,
    +date: ?string,
  |}
|};
export type App_Hello2Query = {|
  variables: App_Hello2QueryVariables,
  response: App_Hello2QueryResponse,
|};
*/


/*
query App_Hello2Query(
  $id: ID!
) {
  hello(id: $id) {
    id
    text
    date
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "hello",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "TestResponse",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "date",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "App_Hello2Query",
  "id": null,
  "text": "query App_Hello2Query(\n  $id: ID!\n) {\n  hello(id: $id) {\n    id\n    text\n    date\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "App_Hello2Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Hello2Query",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'adda4cfc105144090ac01468bf176bcf';
module.exports = node;
