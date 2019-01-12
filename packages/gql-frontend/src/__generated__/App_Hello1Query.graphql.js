/**
 * @flow
 * @relayHash 59e3f88155e76e1327edd05b599415be
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type App_Hello1QueryVariables = {|
  id: string
|};
export type App_Hello1QueryResponse = {|
  +hello: ?{|
    +id: string,
    +text: ?string,
    +date: ?string,
  |}
|};
export type App_Hello1Query = {|
  variables: App_Hello1QueryVariables,
  response: App_Hello1QueryResponse,
|};
*/


/*
query App_Hello1Query(
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
  "name": "App_Hello1Query",
  "id": null,
  "text": "query App_Hello1Query(\n  $id: ID!\n) {\n  hello(id: $id) {\n    id\n    text\n    date\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "App_Hello1Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Hello1Query",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8d91fe8f3ac39c52af8194232f8f850f';
module.exports = node;
