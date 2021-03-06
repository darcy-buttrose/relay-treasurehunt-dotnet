﻿import fs from 'fs';
import path from 'path';
import { graphql }  from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import request from 'ajax-request';

var schemaQuery = "\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        args {\n          ...InputValue\n        }\n        onOperation\n        onFragment\n        onField\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n        }\n      }\n    }\n  }\n";

request.post({
    url: 'http://localhost:53739/api/graphql',
    data: {
        query: schemaQuery,
        veriables: null
    },
    json: true
},(err,res,body) => {

// Save JSON of full schema introspection for Babel Relay Plugin to use
    console.log(JSON.stringify(body));

    //if (response.status < 200 || response.status >= 300)  {
    //    console.error(
    //        'ERROR introspecting schema: ',
    //        JSON.stringify(response.statusText, null, 2)
    //    );
    //} else {
        fs.writeFileSync(
            path.join(__dirname, './schema.json'),
            JSON.stringify(body, null, 2)
        );
    //}
});
