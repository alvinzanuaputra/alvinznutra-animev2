
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  anime_mal_id: 'anime_mal_id',
  anime_image_url: 'anime_image_url',
  anime_title: 'anime_title',
  user_email: 'user_email'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  anime_mal_id: 'anime_mal_id',
  anime_title: 'anime_title',
  user_email: 'user_email',
  username: 'username',
  user_image: 'user_image',
  comment: 'comment',
  rating: 'rating',
  createdAt: 'createdAt'
};

exports.Prisma.MangaCollectionScalarFieldEnum = {
  id: 'id',
  mal_id: 'mal_id',
  image_url: 'image_url',
  title: 'title',
  user_email: 'user_email'
};

exports.Prisma.MangaCommentScalarFieldEnum = {
  id: 'id',
  mal_id: 'mal_id',
  title: 'title',
  user_email: 'user_email',
  username: 'username',
  user_image: 'user_image',
  comment: 'comment',
  rating: 'rating',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Collection: 'Collection',
  Comment: 'Comment',
  MangaCollection: 'MangaCollection',
  MangaComment: 'MangaComment'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Desktop\\alvin-animelist\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "binary"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCiAgLy8gVXNlICdsaWJyYXJ5JyBvciAnYmluYXJ5JwogIGVuZ2luZVR5cGUgPSAiYmluYXJ5Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIC8vIGRpcmVjdFVybCA9IGVudigiRElSRUNUX0RBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIENvbGxlY3Rpb24gewogIGlkICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYW5pbWVfbWFsX2lkICAgIFN0cmluZwogIGFuaW1lX2ltYWdlX3VybCBTdHJpbmc/CiAgYW5pbWVfdGl0bGUgICAgIFN0cmluZz8KICB1c2VyX2VtYWlsICAgICAgU3RyaW5nCgogIEBAdW5pcXVlKFthbmltZV9tYWxfaWQsIHVzZXJfZW1haWxdKQp9Cgptb2RlbCBDb21tZW50IHsKICBpZCAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBhbmltZV9tYWxfaWQgU3RyaW5nCiAgYW5pbWVfdGl0bGUgIFN0cmluZwogIHVzZXJfZW1haWwgICBTdHJpbmcKICB1c2VybmFtZSAgICAgU3RyaW5nCiAgdXNlcl9pbWFnZSAgIFN0cmluZz8KICBjb21tZW50ICAgICAgU3RyaW5nCiAgcmF0aW5nICAgICAgIEludAogIGNyZWF0ZWRBdCAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKfQoKbW9kZWwgTWFuZ2FDb2xsZWN0aW9uIHsKICBpZCAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBtYWxfaWQgICAgIFN0cmluZwogIGltYWdlX3VybCAgU3RyaW5nPwogIHRpdGxlICAgICAgU3RyaW5nPwogIHVzZXJfZW1haWwgU3RyaW5nCgogIEBAdW5pcXVlKFttYWxfaWQsIHVzZXJfZW1haWxdKQp9Cgptb2RlbCBNYW5nYUNvbW1lbnQgewogIGlkICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBtYWxfaWQgICAgIFN0cmluZwogIHRpdGxlICAgICAgU3RyaW5nCiAgdXNlcl9lbWFpbCBTdHJpbmcKICB1c2VybmFtZSAgIFN0cmluZwogIHVzZXJfaW1hZ2UgU3RyaW5nPwogIGNvbW1lbnQgICAgU3RyaW5nCiAgcmF0aW5nICAgICBJbnQKICBjcmVhdGVkQXQgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQp9CgoKCgoKCgoKCgoKCgoKCgoKCgovLyAvLyBUaGlzIGlzIHlvdXIgUHJpc21hIHNjaGVtYSBmaWxlLAovLyAvLyBsZWFybiBtb3JlIGFib3V0IGl0IGluIHRoZSBkb2NzOiBodHRwczovL3ByaXMubHkvZC9wcmlzbWEtc2NoZW1hCgovLyBnZW5lcmF0b3IgY2xpZW50IHsKLy8gICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgovLyB9CgovLyBkYXRhc291cmNlIGRiIHsKLy8gICAvLyBwcm92aWRlciA9ICJteXNxbCIKLy8gICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgovLyAgIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQovLyAgIC8vIGRpcmVjdFVybCA9IGVudigiRElSRUNUX0RBVEFCQVNFX1VSTCIpCi8vIH0KCi8vIG1vZGVsIENvbGxlY3Rpb24gewovLyAgIGlkICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCi8vICAgYW5pbWVfbWFsX2lkICAgIFN0cmluZwovLyAgIGFuaW1lX2ltYWdlX3VybCBTdHJpbmc/Ci8vICAgYW5pbWVfdGl0bGUgICAgIFN0cmluZz8KLy8gICB1c2VyX2VtYWlsICAgICAgU3RyaW5nCgovLyAgIEBAdW5pcXVlKFthbmltZV9tYWxfaWQsIHVzZXJfZW1haWxdKQovLyB9CgovLyBtb2RlbCBDb21tZW50IHsKLy8gICBpZCAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKLy8gICBhbmltZV9tYWxfaWQgU3RyaW5nCi8vICAgYW5pbWVfdGl0bGUgIFN0cmluZwovLyAgIHVzZXJfZW1haWwgICBTdHJpbmcKLy8gICB1c2VybmFtZSAgICAgU3RyaW5nCi8vICAgdXNlcl9pbWFnZSAgIFN0cmluZz8KLy8gICBjb21tZW50ICAgICAgU3RyaW5nCi8vICAgcmF0aW5nICAgICAgIEludAovLyAgIGNyZWF0ZWRBdCAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKLy8gfQoKLy8gbW9kZWwgTWFuZ2FDb2xsZWN0aW9uIHsKLy8gICBpZCAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKLy8gICBtYWxfaWQgICAgIFN0cmluZwovLyAgIGltYWdlX3VybCAgU3RyaW5nPwovLyAgIHRpdGxlICAgICAgU3RyaW5nPwovLyAgIHVzZXJfZW1haWwgU3RyaW5nCgovLyAgIEBAdW5pcXVlKFttYWxfaWQsIHVzZXJfZW1haWxdKQovLyB9CgovLyBtb2RlbCBNYW5nYUNvbW1lbnQgewovLyAgIGlkICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKLy8gICBtYWxfaWQgICAgIFN0cmluZwovLyAgIHRpdGxlICAgICAgU3RyaW5nCi8vICAgdXNlcl9lbWFpbCBTdHJpbmcKLy8gICB1c2VybmFtZSAgIFN0cmluZwovLyAgIHVzZXJfaW1hZ2UgU3RyaW5nPwovLyAgIGNvbW1lbnQgICAgU3RyaW5nCi8vICAgcmF0aW5nICAgICBJbnQKLy8gICBjcmVhdGVkQXQgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQovLyB9Cg==",
  "inlineSchemaHash": "378db0aadfb6da18c2e67c0f4e5acaa306deddad2bc1367ab31c8064bebaea0d"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Collection\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anime_mal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anime_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anime_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"anime_mal_id\",\"user_email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"anime_mal_id\",\"user_email\"]}],\"isGenerated\":false},\"Comment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anime_mal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anime_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MangaCollection\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"mal_id\",\"user_email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"mal_id\",\"user_email\"]}],\"isGenerated\":false},\"MangaComment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

