//ingredients
{
    "name": "Ingredient",
    "plural": "ingredients",
    "base": "PersistedModel", //I'm not sure about it, since I don't see on db schema
    "idInjection": true,
    "options": {
      "validateUpsert": true
    },
    "properties": {
      "name": {
        "type": "string",
        "required": true
      },
      "desc": {
        "type": "string",
        "required": true
      },
      "custom": {
        "type": "binary",
        "required": true
      }
    },
    "validations": [], //I don't get what validations are from db schema
    "relations": {
      "ingredientsList": {
        "type": "referencesMany", //I'm not sure about this
        "model": "Department",
        "foreignKey": "departments",
        "options": {
          "validate": true,
          "forceId": false
        }
      }

    },
    "acls": [ //Who manages/administers the access control list?
      {
        "accessType": "*",
        "principalType": "ROLE",
        "principalId": "$everyone",
        "permission": "DENY"
      },
      {
        "accessType": "READ",
        "principalType": "ROLE",
        "principalId": "$everyone",
        "permission": "ALLOW"
      },
      {
        "accessType": "*",
        "principalType": "ROLE",
        "principalId": "admin",
        "permission": "ALLOW"
      }
    ],
    "methods": {}
  }