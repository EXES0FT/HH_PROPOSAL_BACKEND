/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Item
 *
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>;
/**
 * Model Client
 *
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>;
/**
 * Model Order
 *
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>;
/**
 * Model OrderItem
 *
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>;
/**
 * Model Recommendation
 *
 */
export type Recommendation =
  $Result.DefaultSelection<Prisma.$RecommendationPayload>;
/**
 * Model RecommendationUsage
 *
 */
export type RecommendationUsage =
  $Result.DefaultSelection<Prisma.$RecommendationUsagePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrderItems
   * const orderItems = await prisma.orderItem.findMany()
   * ```
   */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Recommendations
   * const recommendations = await prisma.recommendation.findMany()
   * ```
   */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendationUsage`: Exposes CRUD operations for the **RecommendationUsage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RecommendationUsages
   * const recommendationUsages = await prisma.recommendationUsage.findMany()
   * ```
   */
  get recommendationUsage(): Prisma.RecommendationUsageDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Item: 'Item';
    Client: 'Client';
    Order: 'Order';
    OrderItem: 'OrderItem';
    Recommendation: 'Recommendation';
    RecommendationUsage: 'RecommendationUsage';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'item'
        | 'client'
        | 'order'
        | 'orderItem'
        | 'recommendation'
        | 'recommendationUsage';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>;
        fields: Prisma.ItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
          };
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateItem>;
          };
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>;
            result: $Utils.Optional<ItemCountAggregateOutputType> | number;
          };
        };
      };
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>;
        fields: Prisma.ClientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[];
          };
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClient>;
          };
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClientGroupByOutputType>[];
          };
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>;
            result: $Utils.Optional<ClientCountAggregateOutputType> | number;
          };
        };
      };
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>;
        fields: Prisma.OrderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
          };
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder>;
          };
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderCountAggregateOutputType> | number;
          };
        };
      };
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>;
        fields: Prisma.OrderItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
          };
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrderItem>;
          };
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number;
          };
        };
      };
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>;
        fields: Prisma.RecommendationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>;
          };
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>;
          };
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[];
          };
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>;
          };
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>;
          };
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>;
          };
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>;
          };
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRecommendation>;
          };
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RecommendationGroupByOutputType>[];
          };
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RecommendationCountAggregateOutputType>
              | number;
          };
        };
      };
      RecommendationUsage: {
        payload: Prisma.$RecommendationUsagePayload<ExtArgs>;
        fields: Prisma.RecommendationUsageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RecommendationUsageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RecommendationUsageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload>;
          };
          findFirst: {
            args: Prisma.RecommendationUsageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RecommendationUsageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload>;
          };
          findMany: {
            args: Prisma.RecommendationUsageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload>[];
          };
          create: {
            args: Prisma.RecommendationUsageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload>;
          };
          createMany: {
            args: Prisma.RecommendationUsageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.RecommendationUsageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload>;
          };
          update: {
            args: Prisma.RecommendationUsageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload>;
          };
          deleteMany: {
            args: Prisma.RecommendationUsageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RecommendationUsageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.RecommendationUsageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecommendationUsagePayload>;
          };
          aggregate: {
            args: Prisma.RecommendationUsageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRecommendationUsage>;
          };
          groupBy: {
            args: Prisma.RecommendationUsageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RecommendationUsageGroupByOutputType>[];
          };
          count: {
            args: Prisma.RecommendationUsageCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RecommendationUsageCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    item?: ItemOmit;
    client?: ClientOmit;
    order?: OrderOmit;
    orderItem?: OrderItemOmit;
    recommendation?: RecommendationOmit;
    recommendationUsage?: RecommendationUsageOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recommendations: number;
    recommendationUsages: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendations?: boolean | UserCountOutputTypeCountRecommendationsArgs;
    recommendationUsages?:
      | boolean
      | UserCountOutputTypeCountRecommendationUsagesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendationUsagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationUsageWhereInput;
  };

  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    recommendations: number;
  };

  export type ItemCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendations?: boolean | ItemCountOutputTypeCountRecommendationsArgs;
  };

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountRecommendationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationWhereInput;
  };

  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    recommendations: number;
  };

  export type ClientCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendations?: boolean | ClientCountOutputTypeCountRecommendationsArgs;
  };

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountRecommendationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationWhereInput;
  };

  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number;
  };

  export type OrderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs;
  };

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemWhereInput;
  };

  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    recommendationUsages: number;
  };

  export type OrderItemCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendationUsages?:
      | boolean
      | OrderItemCountOutputTypeCountRecommendationUsagesArgs;
  };

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountRecommendationUsagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationUsageWhereInput;
  };

  /**
   * Count Type RecommendationCountOutputType
   */

  export type RecommendationCountOutputType = {
    recommendationUsages: number;
  };

  export type RecommendationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendationUsages?:
      | boolean
      | RecommendationCountOutputTypeCountRecommendationUsagesArgs;
  };

  // Custom InputTypes
  /**
   * RecommendationCountOutputType without action
   */
  export type RecommendationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationCountOutputType
     */
    select?: RecommendationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RecommendationCountOutputType without action
   */
  export type RecommendationCountOutputTypeCountRecommendationUsagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationUsageWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
    ID_devices: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
    ID_devices: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    password: string | null;
    beosztas: string | null;
    email: string | null;
    salesperson: boolean | null;
    ID_devices: number | null;
    image: string | null;
    username: string | null;
    name: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    password: string | null;
    beosztas: string | null;
    email: string | null;
    salesperson: boolean | null;
    ID_devices: number | null;
    image: string | null;
    username: string | null;
    name: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    password: number;
    beosztas: number;
    email: number;
    salesperson: number;
    ID_devices: number;
    image: number;
    username: number;
    name: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
    ID_devices?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
    ID_devices?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    password?: true;
    beosztas?: true;
    email?: true;
    salesperson?: true;
    ID_devices?: true;
    image?: true;
    username?: true;
    name?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    password?: true;
    beosztas?: true;
    email?: true;
    salesperson?: true;
    ID_devices?: true;
    image?: true;
    username?: true;
    name?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    password?: true;
    beosztas?: true;
    email?: true;
    salesperson?: true;
    ID_devices?: true;
    image?: true;
    username?: true;
    name?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    password: string | null;
    beosztas: string | null;
    email: string | null;
    salesperson: boolean | null;
    ID_devices: number | null;
    image: string | null;
    username: string | null;
    name: string | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      password?: boolean;
      beosztas?: boolean;
      email?: boolean;
      salesperson?: boolean;
      ID_devices?: boolean;
      image?: boolean;
      username?: boolean;
      name?: boolean;
      recommendations?: boolean | User$recommendationsArgs<ExtArgs>;
      recommendationUsages?: boolean | User$recommendationUsagesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    password?: boolean;
    beosztas?: boolean;
    email?: boolean;
    salesperson?: boolean;
    ID_devices?: boolean;
    image?: boolean;
    username?: boolean;
    name?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'password'
    | 'beosztas'
    | 'email'
    | 'salesperson'
    | 'ID_devices'
    | 'image'
    | 'username'
    | 'name',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>;
    recommendationUsages?: boolean | User$recommendationUsagesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[];
      recommendationUsages: Prisma.$RecommendationUsagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        password: string | null;
        beosztas: string | null;
        email: string | null;
        salesperson: boolean | null;
        ID_devices: number | null;
        image: string | null;
        username: string | null;
        name: string | null;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    username: any;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    recommendations<T extends User$recommendationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$recommendationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecommendationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    recommendationUsages<T extends User$recommendationUsagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$recommendationUsagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecommendationUsagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly beosztas: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly salesperson: FieldRef<'User', 'Boolean'>;
    readonly ID_devices: FieldRef<'User', 'Int'>;
    readonly image: FieldRef<'User', 'String'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.recommendations
   */
  export type User$recommendationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    where?: RecommendationWhereInput;
    orderBy?:
      | RecommendationOrderByWithRelationInput
      | RecommendationOrderByWithRelationInput[];
    cursor?: RecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[];
  };

  /**
   * User.recommendationUsages
   */
  export type User$recommendationUsagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    where?: RecommendationUsageWhereInput;
    orderBy?:
      | RecommendationUsageOrderByWithRelationInput
      | RecommendationUsageOrderByWithRelationInput[];
    cursor?: RecommendationUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | RecommendationUsageScalarFieldEnum
      | RecommendationUsageScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
  };

  export type ItemAvgAggregateOutputType = {
    arukod: number | null;
    ear: Decimal | null;
    ear4: Decimal | null;
    ear3: Decimal | null;
    ear1: Decimal | null;
    tipus: number | null;
    keszlet: number | null;
    batch: number | null;
    unit: number | null;
    custom_unit: number | null;
    vat: number | null;
  };

  export type ItemSumAggregateOutputType = {
    arukod: number | null;
    ear: Decimal | null;
    ear4: Decimal | null;
    ear3: Decimal | null;
    ear1: Decimal | null;
    tipus: number | null;
    keszlet: number | null;
    batch: number | null;
    unit: number | null;
    custom_unit: number | null;
    vat: number | null;
  };

  export type ItemMinAggregateOutputType = {
    arukod: number | null;
    megnev: string | null;
    csoport: string | null;
    cikkszam: string | null;
    has_ready_to_cook_variants: boolean | null;
    ear: Decimal | null;
    ear4: Decimal | null;
    ear3: Decimal | null;
    ear1: Decimal | null;
    tipus: number | null;
    new: boolean | null;
    keszlet: number | null;
    batch: number | null;
    unit: number | null;
    uom: string | null;
    passziv: boolean | null;
    fix: boolean | null;
    fix_name: string | null;
    sold_in_batches: boolean | null;
    hide_batch: boolean | null;
    rendelheto: boolean | null;
    search_blob: string | null;
    custom_unit: number | null;
    image: string | null;
    vat: number | null;
  };

  export type ItemMaxAggregateOutputType = {
    arukod: number | null;
    megnev: string | null;
    csoport: string | null;
    cikkszam: string | null;
    has_ready_to_cook_variants: boolean | null;
    ear: Decimal | null;
    ear4: Decimal | null;
    ear3: Decimal | null;
    ear1: Decimal | null;
    tipus: number | null;
    new: boolean | null;
    keszlet: number | null;
    batch: number | null;
    unit: number | null;
    uom: string | null;
    passziv: boolean | null;
    fix: boolean | null;
    fix_name: string | null;
    sold_in_batches: boolean | null;
    hide_batch: boolean | null;
    rendelheto: boolean | null;
    search_blob: string | null;
    custom_unit: number | null;
    image: string | null;
    vat: number | null;
  };

  export type ItemCountAggregateOutputType = {
    arukod: number;
    megnev: number;
    csoport: number;
    cikkszam: number;
    has_ready_to_cook_variants: number;
    ear: number;
    ear4: number;
    ear3: number;
    ear1: number;
    tipus: number;
    new: number;
    keszlet: number;
    batch: number;
    unit: number;
    uom: number;
    passziv: number;
    fix: number;
    fix_name: number;
    sold_in_batches: number;
    hide_batch: number;
    rendelheto: number;
    search_blob: number;
    custom_unit: number;
    image: number;
    vat: number;
    _all: number;
  };

  export type ItemAvgAggregateInputType = {
    arukod?: true;
    ear?: true;
    ear4?: true;
    ear3?: true;
    ear1?: true;
    tipus?: true;
    keszlet?: true;
    batch?: true;
    unit?: true;
    custom_unit?: true;
    vat?: true;
  };

  export type ItemSumAggregateInputType = {
    arukod?: true;
    ear?: true;
    ear4?: true;
    ear3?: true;
    ear1?: true;
    tipus?: true;
    keszlet?: true;
    batch?: true;
    unit?: true;
    custom_unit?: true;
    vat?: true;
  };

  export type ItemMinAggregateInputType = {
    arukod?: true;
    megnev?: true;
    csoport?: true;
    cikkszam?: true;
    has_ready_to_cook_variants?: true;
    ear?: true;
    ear4?: true;
    ear3?: true;
    ear1?: true;
    tipus?: true;
    new?: true;
    keszlet?: true;
    batch?: true;
    unit?: true;
    uom?: true;
    passziv?: true;
    fix?: true;
    fix_name?: true;
    sold_in_batches?: true;
    hide_batch?: true;
    rendelheto?: true;
    search_blob?: true;
    custom_unit?: true;
    image?: true;
    vat?: true;
  };

  export type ItemMaxAggregateInputType = {
    arukod?: true;
    megnev?: true;
    csoport?: true;
    cikkszam?: true;
    has_ready_to_cook_variants?: true;
    ear?: true;
    ear4?: true;
    ear3?: true;
    ear1?: true;
    tipus?: true;
    new?: true;
    keszlet?: true;
    batch?: true;
    unit?: true;
    uom?: true;
    passziv?: true;
    fix?: true;
    fix_name?: true;
    sold_in_batches?: true;
    hide_batch?: true;
    rendelheto?: true;
    search_blob?: true;
    custom_unit?: true;
    image?: true;
    vat?: true;
  };

  export type ItemCountAggregateInputType = {
    arukod?: true;
    megnev?: true;
    csoport?: true;
    cikkszam?: true;
    has_ready_to_cook_variants?: true;
    ear?: true;
    ear4?: true;
    ear3?: true;
    ear1?: true;
    tipus?: true;
    new?: true;
    keszlet?: true;
    batch?: true;
    unit?: true;
    uom?: true;
    passziv?: true;
    fix?: true;
    fix_name?: true;
    sold_in_batches?: true;
    hide_batch?: true;
    rendelheto?: true;
    search_blob?: true;
    custom_unit?: true;
    image?: true;
    vat?: true;
    _all?: true;
  };

  export type ItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Items
     **/
    _count?: true | ItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ItemMaxAggregateInputType;
  };

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>;
  };

  export type ItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ItemWhereInput;
    orderBy?:
      | ItemOrderByWithAggregationInput
      | ItemOrderByWithAggregationInput[];
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum;
    having?: ItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemCountAggregateInputType | true;
    _avg?: ItemAvgAggregateInputType;
    _sum?: ItemSumAggregateInputType;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
  };

  export type ItemGroupByOutputType = {
    arukod: number;
    megnev: string | null;
    csoport: string | null;
    cikkszam: string;
    has_ready_to_cook_variants: boolean | null;
    ear: Decimal | null;
    ear4: Decimal | null;
    ear3: Decimal | null;
    ear1: Decimal | null;
    tipus: number;
    new: boolean | null;
    keszlet: number | null;
    batch: number | null;
    unit: number | null;
    uom: string | null;
    passziv: boolean | null;
    fix: boolean;
    fix_name: string | null;
    sold_in_batches: boolean | null;
    hide_batch: boolean | null;
    rendelheto: boolean;
    search_blob: string | null;
    custom_unit: number | null;
    image: string | null;
    vat: number | null;
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
  };

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ItemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
          : GetScalarType<T[P], ItemGroupByOutputType[P]>;
      }
    >
  >;

  export type ItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      arukod?: boolean;
      megnev?: boolean;
      csoport?: boolean;
      cikkszam?: boolean;
      has_ready_to_cook_variants?: boolean;
      ear?: boolean;
      ear4?: boolean;
      ear3?: boolean;
      ear1?: boolean;
      tipus?: boolean;
      new?: boolean;
      keszlet?: boolean;
      batch?: boolean;
      unit?: boolean;
      uom?: boolean;
      passziv?: boolean;
      fix?: boolean;
      fix_name?: boolean;
      sold_in_batches?: boolean;
      hide_batch?: boolean;
      rendelheto?: boolean;
      search_blob?: boolean;
      custom_unit?: boolean;
      image?: boolean;
      vat?: boolean;
      recommendations?: boolean | Item$recommendationsArgs<ExtArgs>;
      _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['item']
  >;

  export type ItemSelectScalar = {
    arukod?: boolean;
    megnev?: boolean;
    csoport?: boolean;
    cikkszam?: boolean;
    has_ready_to_cook_variants?: boolean;
    ear?: boolean;
    ear4?: boolean;
    ear3?: boolean;
    ear1?: boolean;
    tipus?: boolean;
    new?: boolean;
    keszlet?: boolean;
    batch?: boolean;
    unit?: boolean;
    uom?: boolean;
    passziv?: boolean;
    fix?: boolean;
    fix_name?: boolean;
    sold_in_batches?: boolean;
    hide_batch?: boolean;
    rendelheto?: boolean;
    search_blob?: boolean;
    custom_unit?: boolean;
    image?: boolean;
    vat?: boolean;
  };

  export type ItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'arukod'
    | 'megnev'
    | 'csoport'
    | 'cikkszam'
    | 'has_ready_to_cook_variants'
    | 'ear'
    | 'ear4'
    | 'ear3'
    | 'ear1'
    | 'tipus'
    | 'new'
    | 'keszlet'
    | 'batch'
    | 'unit'
    | 'uom'
    | 'passziv'
    | 'fix'
    | 'fix_name'
    | 'sold_in_batches'
    | 'hide_batch'
    | 'rendelheto'
    | 'search_blob'
    | 'custom_unit'
    | 'image'
    | 'vat',
    ExtArgs['result']['item']
  >;
  export type ItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendations?: boolean | Item$recommendationsArgs<ExtArgs>;
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Item';
    objects: {
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        arukod: number;
        megnev: string | null;
        csoport: string | null;
        cikkszam: string;
        has_ready_to_cook_variants: boolean | null;
        ear: Prisma.Decimal | null;
        ear4: Prisma.Decimal | null;
        ear3: Prisma.Decimal | null;
        ear1: Prisma.Decimal | null;
        tipus: number;
        new: boolean | null;
        keszlet: number | null;
        batch: number | null;
        unit: number | null;
        uom: string | null;
        passziv: boolean | null;
        fix: boolean;
        fix_name: string | null;
        sold_in_batches: boolean | null;
        hide_batch: boolean | null;
        rendelheto: boolean;
        search_blob: string | null;
        custom_unit: number | null;
        image: string | null;
        vat: number | null;
      },
      ExtArgs['result']['item']
    >;
    composites: {};
  };

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> =
    $Result.GetResult<Prisma.$ItemPayload, S>;

  type ItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemCountAggregateInputType | true;
  };

  export interface ItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Item'];
      meta: { name: 'Item' };
    };
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     *
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     *
     * // Only select the `arukod`
     * const itemWithArukodOnly = await prisma.item.findMany({ select: { arukod: true } })
     *
     */
    findMany<T extends ItemFindManyArgs>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     *
     */
    create<T extends ItemCreateArgs>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ItemCreateManyArgs>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     *
     */
    delete<T extends ItemDeleteArgs>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ItemUpdateArgs>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ItemDeleteManyArgs>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ItemUpdateManyArgs>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
     **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ItemAggregateArgs>(
      args: Subset<T, ItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetItemAggregateType<T>>;

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Item model
     */
    readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    recommendations<T extends Item$recommendationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Item$recommendationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecommendationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly arukod: FieldRef<'Item', 'Int'>;
    readonly megnev: FieldRef<'Item', 'String'>;
    readonly csoport: FieldRef<'Item', 'String'>;
    readonly cikkszam: FieldRef<'Item', 'String'>;
    readonly has_ready_to_cook_variants: FieldRef<'Item', 'Boolean'>;
    readonly ear: FieldRef<'Item', 'Decimal'>;
    readonly ear4: FieldRef<'Item', 'Decimal'>;
    readonly ear3: FieldRef<'Item', 'Decimal'>;
    readonly ear1: FieldRef<'Item', 'Decimal'>;
    readonly tipus: FieldRef<'Item', 'Int'>;
    readonly new: FieldRef<'Item', 'Boolean'>;
    readonly keszlet: FieldRef<'Item', 'Float'>;
    readonly batch: FieldRef<'Item', 'Float'>;
    readonly unit: FieldRef<'Item', 'Float'>;
    readonly uom: FieldRef<'Item', 'String'>;
    readonly passziv: FieldRef<'Item', 'Boolean'>;
    readonly fix: FieldRef<'Item', 'Boolean'>;
    readonly fix_name: FieldRef<'Item', 'String'>;
    readonly sold_in_batches: FieldRef<'Item', 'Boolean'>;
    readonly hide_batch: FieldRef<'Item', 'Boolean'>;
    readonly rendelheto: FieldRef<'Item', 'Boolean'>;
    readonly search_blob: FieldRef<'Item', 'String'>;
    readonly custom_unit: FieldRef<'Item', 'Float'>;
    readonly image: FieldRef<'Item', 'String'>;
    readonly vat: FieldRef<'Item', 'Float'>;
  }

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item create
   */
  export type ItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
  };

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Item update
   */
  export type ItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>;
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to update.
     */
    limit?: number;
  };

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput;
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
  };

  /**
   * Item delete
   */
  export type ItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to delete.
     */
    limit?: number;
  };

  /**
   * Item.recommendations
   */
  export type Item$recommendationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    where?: RecommendationWhereInput;
    orderBy?:
      | RecommendationOrderByWithRelationInput
      | RecommendationOrderByWithRelationInput[];
    cursor?: RecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[];
  };

  /**
   * Item without action
   */
  export type ItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
  };

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  export type ClientAvgAggregateOutputType = {
    ID: number | null;
    ID_salesman: number | null;
    sms_group: number | null;
    UNAS_customer_group_ID: number | null;
    discount_group_id: number | null;
    discount_percentage: number | null;
    teruleti_id: number | null;
  };

  export type ClientSumAggregateOutputType = {
    ID: number | null;
    ID_salesman: number | null;
    sms_group: number | null;
    UNAS_customer_group_ID: number | null;
    discount_group_id: number | null;
    discount_percentage: number | null;
    teruleti_id: number | null;
  };

  export type ClientMinAggregateOutputType = {
    ID: number | null;
    vat: string | null;
    name: string | null;
    address_city: string | null;
    address_zip: string | null;
    address_combined: string | null;
    del: boolean | null;
    email: string | null;
    ID_salesman: number | null;
    ID_branch: string | null;
    seasonal: string | null;
    sms_group: number | null;
    business_name: string | null;
    UNAS_customer_group_ID: number | null;
    discount_group_id: number | null;
    discount_percentage: number | null;
    teruleti_id: number | null;
  };

  export type ClientMaxAggregateOutputType = {
    ID: number | null;
    vat: string | null;
    name: string | null;
    address_city: string | null;
    address_zip: string | null;
    address_combined: string | null;
    del: boolean | null;
    email: string | null;
    ID_salesman: number | null;
    ID_branch: string | null;
    seasonal: string | null;
    sms_group: number | null;
    business_name: string | null;
    UNAS_customer_group_ID: number | null;
    discount_group_id: number | null;
    discount_percentage: number | null;
    teruleti_id: number | null;
  };

  export type ClientCountAggregateOutputType = {
    ID: number;
    vat: number;
    name: number;
    address_city: number;
    address_zip: number;
    address_combined: number;
    del: number;
    email: number;
    ID_salesman: number;
    ID_branch: number;
    seasonal: number;
    sms_group: number;
    business_name: number;
    UNAS_customer_group_ID: number;
    discount_group_id: number;
    discount_percentage: number;
    teruleti_id: number;
    _all: number;
  };

  export type ClientAvgAggregateInputType = {
    ID?: true;
    ID_salesman?: true;
    sms_group?: true;
    UNAS_customer_group_ID?: true;
    discount_group_id?: true;
    discount_percentage?: true;
    teruleti_id?: true;
  };

  export type ClientSumAggregateInputType = {
    ID?: true;
    ID_salesman?: true;
    sms_group?: true;
    UNAS_customer_group_ID?: true;
    discount_group_id?: true;
    discount_percentage?: true;
    teruleti_id?: true;
  };

  export type ClientMinAggregateInputType = {
    ID?: true;
    vat?: true;
    name?: true;
    address_city?: true;
    address_zip?: true;
    address_combined?: true;
    del?: true;
    email?: true;
    ID_salesman?: true;
    ID_branch?: true;
    seasonal?: true;
    sms_group?: true;
    business_name?: true;
    UNAS_customer_group_ID?: true;
    discount_group_id?: true;
    discount_percentage?: true;
    teruleti_id?: true;
  };

  export type ClientMaxAggregateInputType = {
    ID?: true;
    vat?: true;
    name?: true;
    address_city?: true;
    address_zip?: true;
    address_combined?: true;
    del?: true;
    email?: true;
    ID_salesman?: true;
    ID_branch?: true;
    seasonal?: true;
    sms_group?: true;
    business_name?: true;
    UNAS_customer_group_ID?: true;
    discount_group_id?: true;
    discount_percentage?: true;
    teruleti_id?: true;
  };

  export type ClientCountAggregateInputType = {
    ID?: true;
    vat?: true;
    name?: true;
    address_city?: true;
    address_zip?: true;
    address_combined?: true;
    del?: true;
    email?: true;
    ID_salesman?: true;
    ID_branch?: true;
    seasonal?: true;
    sms_group?: true;
    business_name?: true;
    UNAS_customer_group_ID?: true;
    discount_group_id?: true;
    discount_percentage?: true;
    teruleti_id?: true;
    _all?: true;
  };

  export type ClientAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clients
     **/
    _count?: true | ClientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ClientAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ClientSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClientMaxAggregateInputType;
  };

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>;
  };

  export type ClientGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClientWhereInput;
    orderBy?:
      | ClientOrderByWithAggregationInput
      | ClientOrderByWithAggregationInput[];
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum;
    having?: ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _avg?: ClientAvgAggregateInputType;
    _sum?: ClientSumAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
  };

  export type ClientGroupByOutputType = {
    ID: number;
    vat: string | null;
    name: string | null;
    address_city: string | null;
    address_zip: string | null;
    address_combined: string | null;
    del: boolean | null;
    email: string | null;
    ID_salesman: number | null;
    ID_branch: string | null;
    seasonal: string | null;
    sms_group: number | null;
    business_name: string | null;
    UNAS_customer_group_ID: number | null;
    discount_group_id: number | null;
    discount_percentage: number | null;
    teruleti_id: number | null;
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  type GetClientGroupByPayload<T extends ClientGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ClientGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ClientGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>;
        }
      >
    >;

  export type ClientSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      ID?: boolean;
      vat?: boolean;
      name?: boolean;
      address_city?: boolean;
      address_zip?: boolean;
      address_combined?: boolean;
      del?: boolean;
      email?: boolean;
      ID_salesman?: boolean;
      ID_branch?: boolean;
      seasonal?: boolean;
      sms_group?: boolean;
      business_name?: boolean;
      UNAS_customer_group_ID?: boolean;
      discount_group_id?: boolean;
      discount_percentage?: boolean;
      teruleti_id?: boolean;
      recommendations?: boolean | Client$recommendationsArgs<ExtArgs>;
      _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['client']
  >;

  export type ClientSelectScalar = {
    ID?: boolean;
    vat?: boolean;
    name?: boolean;
    address_city?: boolean;
    address_zip?: boolean;
    address_combined?: boolean;
    del?: boolean;
    email?: boolean;
    ID_salesman?: boolean;
    ID_branch?: boolean;
    seasonal?: boolean;
    sms_group?: boolean;
    business_name?: boolean;
    UNAS_customer_group_ID?: boolean;
    discount_group_id?: boolean;
    discount_percentage?: boolean;
    teruleti_id?: boolean;
  };

  export type ClientOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'ID'
    | 'vat'
    | 'name'
    | 'address_city'
    | 'address_zip'
    | 'address_combined'
    | 'del'
    | 'email'
    | 'ID_salesman'
    | 'ID_branch'
    | 'seasonal'
    | 'sms_group'
    | 'business_name'
    | 'UNAS_customer_group_ID'
    | 'discount_group_id'
    | 'discount_percentage'
    | 'teruleti_id',
    ExtArgs['result']['client']
  >;
  export type ClientInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendations?: boolean | Client$recommendationsArgs<ExtArgs>;
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ClientPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Client';
    objects: {
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        ID: number;
        vat: string | null;
        name: string | null;
        address_city: string | null;
        address_zip: string | null;
        address_combined: string | null;
        del: boolean | null;
        email: string | null;
        ID_salesman: number | null;
        ID_branch: string | null;
        seasonal: string | null;
        sms_group: number | null;
        business_name: string | null;
        UNAS_customer_group_ID: number | null;
        discount_group_id: number | null;
        discount_percentage: number | null;
        teruleti_id: number | null;
      },
      ExtArgs['result']['client']
    >;
    composites: {};
  };

  type ClientGetPayload<
    S extends boolean | null | undefined | ClientDefaultArgs,
  > = $Result.GetResult<Prisma.$ClientPayload, S>;

  type ClientCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCountAggregateInputType | true;
  };

  export interface ClientDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Client'];
      meta: { name: 'Client' };
    };
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const clientWithIDOnly = await prisma.client.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     *
     */
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     *
     */
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
     **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ClientAggregateArgs>(
      args: Subset<T, ClientAggregateArgs>,
    ): Prisma.PrismaPromise<GetClientAggregateType<T>>;

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetClientGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Client model
     */
    readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    recommendations<T extends Client$recommendationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$recommendationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecommendationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly ID: FieldRef<'Client', 'Int'>;
    readonly vat: FieldRef<'Client', 'String'>;
    readonly name: FieldRef<'Client', 'String'>;
    readonly address_city: FieldRef<'Client', 'String'>;
    readonly address_zip: FieldRef<'Client', 'String'>;
    readonly address_combined: FieldRef<'Client', 'String'>;
    readonly del: FieldRef<'Client', 'Boolean'>;
    readonly email: FieldRef<'Client', 'String'>;
    readonly ID_salesman: FieldRef<'Client', 'Int'>;
    readonly ID_branch: FieldRef<'Client', 'String'>;
    readonly seasonal: FieldRef<'Client', 'String'>;
    readonly sms_group: FieldRef<'Client', 'Int'>;
    readonly business_name: FieldRef<'Client', 'String'>;
    readonly UNAS_customer_group_ID: FieldRef<'Client', 'Int'>;
    readonly discount_group_id: FieldRef<'Client', 'Int'>;
    readonly discount_percentage: FieldRef<'Client', 'Float'>;
    readonly teruleti_id: FieldRef<'Client', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client create
   */
  export type ClientCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>;
  };

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Client update
   */
  export type ClientUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>;
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>;
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput;
    /**
     * Limit how many Clients to update.
     */
    limit?: number;
  };

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput;
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>;
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>;
  };

  /**
   * Client delete
   */
  export type ClientDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput;
    /**
     * Limit how many Clients to delete.
     */
    limit?: number;
  };

  /**
   * Client.recommendations
   */
  export type Client$recommendationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    where?: RecommendationWhereInput;
    orderBy?:
      | RecommendationOrderByWithRelationInput
      | RecommendationOrderByWithRelationInput[];
    cursor?: RecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[];
  };

  /**
   * Client without action
   */
  export type ClientDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
  };

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  export type OrderAvgAggregateOutputType = {
    vevokod: number | null;
  };

  export type OrderSumAggregateOutputType = {
    vevokod: number | null;
  };

  export type OrderMinAggregateOutputType = {
    sorszam: string | null;
    telj: Date | null;
    kelt: Date | null;
    vevokod: number | null;
    vevo: string | null;
    city: string | null;
    address: string | null;
    zip: string | null;
    del: boolean | null;
    deleted_by: string | null;
    delete_comment: string | null;
  };

  export type OrderMaxAggregateOutputType = {
    sorszam: string | null;
    telj: Date | null;
    kelt: Date | null;
    vevokod: number | null;
    vevo: string | null;
    city: string | null;
    address: string | null;
    zip: string | null;
    del: boolean | null;
    deleted_by: string | null;
    delete_comment: string | null;
  };

  export type OrderCountAggregateOutputType = {
    sorszam: number;
    telj: number;
    kelt: number;
    vevokod: number;
    vevo: number;
    city: number;
    address: number;
    zip: number;
    del: number;
    deleted_by: number;
    delete_comment: number;
    _all: number;
  };

  export type OrderAvgAggregateInputType = {
    vevokod?: true;
  };

  export type OrderSumAggregateInputType = {
    vevokod?: true;
  };

  export type OrderMinAggregateInputType = {
    sorszam?: true;
    telj?: true;
    kelt?: true;
    vevokod?: true;
    vevo?: true;
    city?: true;
    address?: true;
    zip?: true;
    del?: true;
    deleted_by?: true;
    delete_comment?: true;
  };

  export type OrderMaxAggregateInputType = {
    sorszam?: true;
    telj?: true;
    kelt?: true;
    vevokod?: true;
    vevo?: true;
    city?: true;
    address?: true;
    zip?: true;
    del?: true;
    deleted_by?: true;
    delete_comment?: true;
  };

  export type OrderCountAggregateInputType = {
    sorszam?: true;
    telj?: true;
    kelt?: true;
    vevokod?: true;
    vevo?: true;
    city?: true;
    address?: true;
    zip?: true;
    del?: true;
    deleted_by?: true;
    delete_comment?: true;
    _all?: true;
  };

  export type OrderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Orders
     **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderMaxAggregateInputType;
  };

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>;
  };

  export type OrderGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
    orderBy?:
      | OrderOrderByWithAggregationInput
      | OrderOrderByWithAggregationInput[];
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum;
    having?: OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
  };

  export type OrderGroupByOutputType = {
    sorszam: string;
    telj: Date | null;
    kelt: Date | null;
    vevokod: number | null;
    vevo: string | null;
    city: string | null;
    address: string | null;
    zip: string | null;
    del: boolean;
    deleted_by: string | null;
    delete_comment: string | null;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrderGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OrderGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>;
        }
      >
    >;

  export type OrderSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      sorszam?: boolean;
      telj?: boolean;
      kelt?: boolean;
      vevokod?: boolean;
      vevo?: boolean;
      city?: boolean;
      address?: boolean;
      zip?: boolean;
      del?: boolean;
      deleted_by?: boolean;
      delete_comment?: boolean;
      orderItems?: boolean | Order$orderItemsArgs<ExtArgs>;
      _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['order']
  >;

  export type OrderSelectScalar = {
    sorszam?: boolean;
    telj?: boolean;
    kelt?: boolean;
    vevokod?: boolean;
    vevo?: boolean;
    city?: boolean;
    address?: boolean;
    zip?: boolean;
    del?: boolean;
    deleted_by?: boolean;
    delete_comment?: boolean;
  };

  export type OrderOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'sorszam'
    | 'telj'
    | 'kelt'
    | 'vevokod'
    | 'vevo'
    | 'city'
    | 'address'
    | 'zip'
    | 'del'
    | 'deleted_by'
    | 'delete_comment',
    ExtArgs['result']['order']
  >;
  export type OrderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>;
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $OrderPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Order';
    objects: {
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        sorszam: string;
        telj: Date | null;
        kelt: Date | null;
        vevokod: number | null;
        vevo: string | null;
        city: string | null;
        address: string | null;
        zip: string | null;
        del: boolean;
        deleted_by: string | null;
        delete_comment: string | null;
      },
      ExtArgs['result']['order']
    >;
    composites: {};
  };

  type OrderGetPayload<
    S extends boolean | null | undefined | OrderDefaultArgs,
  > = $Result.GetResult<Prisma.$OrderPayload, S>;

  type OrderCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
  };

  export interface OrderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Order'];
      meta: { name: 'Order' };
    };
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `sorszam`
     * const orderWithSorszamOnly = await prisma.order.findMany({ select: { sorszam: true } })
     *
     */
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     */
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     */
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrderAggregateArgs>(
      args: Subset<T, OrderAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderAggregateType<T>>;

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetOrderGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Order model
     */
    readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Order$orderItemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderItemPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly sorszam: FieldRef<'Order', 'String'>;
    readonly telj: FieldRef<'Order', 'DateTime'>;
    readonly kelt: FieldRef<'Order', 'DateTime'>;
    readonly vevokod: FieldRef<'Order', 'Int'>;
    readonly vevo: FieldRef<'Order', 'String'>;
    readonly city: FieldRef<'Order', 'String'>;
    readonly address: FieldRef<'Order', 'String'>;
    readonly zip: FieldRef<'Order', 'String'>;
    readonly del: FieldRef<'Order', 'Boolean'>;
    readonly deleted_by: FieldRef<'Order', 'String'>;
    readonly delete_comment: FieldRef<'Order', 'String'>;
  }

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order create
   */
  export type OrderCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
  };

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Order update
   */
  export type OrderUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
  };

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput;
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
  };

  /**
   * Order delete
   */
  export type OrderDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput;
    /**
     * Limit how many Orders to delete.
     */
    limit?: number;
  };

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    where?: OrderItemWhereInput;
    orderBy?:
      | OrderItemOrderByWithRelationInput
      | OrderItemOrderByWithRelationInput[];
    cursor?: OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * Order without action
   */
  export type OrderDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
  };

  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
  };

  export type OrderItemAvgAggregateOutputType = {
    mennyiseg: number | null;
    netto: number | null;
    brutto: number | null;
  };

  export type OrderItemSumAggregateOutputType = {
    mennyiseg: number | null;
    netto: number | null;
    brutto: number | null;
  };

  export type OrderItemMinAggregateOutputType = {
    unikazon: string | null;
    sorszam: string | null;
    mennyiseg: number | null;
    egyseg: string | null;
    netto: number | null;
    brutto: number | null;
    cikkszam: string | null;
  };

  export type OrderItemMaxAggregateOutputType = {
    unikazon: string | null;
    sorszam: string | null;
    mennyiseg: number | null;
    egyseg: string | null;
    netto: number | null;
    brutto: number | null;
    cikkszam: string | null;
  };

  export type OrderItemCountAggregateOutputType = {
    unikazon: number;
    sorszam: number;
    mennyiseg: number;
    egyseg: number;
    netto: number;
    brutto: number;
    cikkszam: number;
    _all: number;
  };

  export type OrderItemAvgAggregateInputType = {
    mennyiseg?: true;
    netto?: true;
    brutto?: true;
  };

  export type OrderItemSumAggregateInputType = {
    mennyiseg?: true;
    netto?: true;
    brutto?: true;
  };

  export type OrderItemMinAggregateInputType = {
    unikazon?: true;
    sorszam?: true;
    mennyiseg?: true;
    egyseg?: true;
    netto?: true;
    brutto?: true;
    cikkszam?: true;
  };

  export type OrderItemMaxAggregateInputType = {
    unikazon?: true;
    sorszam?: true;
    mennyiseg?: true;
    egyseg?: true;
    netto?: true;
    brutto?: true;
    cikkszam?: true;
  };

  export type OrderItemCountAggregateInputType = {
    unikazon?: true;
    sorszam?: true;
    mennyiseg?: true;
    egyseg?: true;
    netto?: true;
    brutto?: true;
    cikkszam?: true;
    _all?: true;
  };

  export type OrderItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemOrderByWithRelationInput
      | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderItems
     **/
    _count?: true | OrderItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderItemMaxAggregateInputType;
  };

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>;
  };

  export type OrderItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemWhereInput;
    orderBy?:
      | OrderItemOrderByWithAggregationInput
      | OrderItemOrderByWithAggregationInput[];
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum;
    having?: OrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderItemCountAggregateInputType | true;
    _avg?: OrderItemAvgAggregateInputType;
    _sum?: OrderItemSumAggregateInputType;
    _min?: OrderItemMinAggregateInputType;
    _max?: OrderItemMaxAggregateInputType;
  };

  export type OrderItemGroupByOutputType = {
    unikazon: string;
    sorszam: string;
    mennyiseg: number | null;
    egyseg: string | null;
    netto: number | null;
    brutto: number | null;
    cikkszam: string;
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
  };

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrderItemGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OrderItemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>;
        }
      >
    >;

  export type OrderItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      unikazon?: boolean;
      sorszam?: boolean;
      mennyiseg?: boolean;
      egyseg?: boolean;
      netto?: boolean;
      brutto?: boolean;
      cikkszam?: boolean;
      order?: boolean | OrderDefaultArgs<ExtArgs>;
      recommendationUsages?:
        | boolean
        | OrderItem$recommendationUsagesArgs<ExtArgs>;
      _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orderItem']
  >;

  export type OrderItemSelectScalar = {
    unikazon?: boolean;
    sorszam?: boolean;
    mennyiseg?: boolean;
    egyseg?: boolean;
    netto?: boolean;
    brutto?: boolean;
    cikkszam?: boolean;
  };

  export type OrderItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'unikazon'
    | 'sorszam'
    | 'mennyiseg'
    | 'egyseg'
    | 'netto'
    | 'brutto'
    | 'cikkszam',
    ExtArgs['result']['orderItem']
  >;
  export type OrderItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    order?: boolean | OrderDefaultArgs<ExtArgs>;
    recommendationUsages?:
      | boolean
      | OrderItem$recommendationUsagesArgs<ExtArgs>;
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $OrderItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OrderItem';
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>;
      recommendationUsages: Prisma.$RecommendationUsagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        unikazon: string;
        sorszam: string;
        mennyiseg: number | null;
        egyseg: string | null;
        netto: number | null;
        brutto: number | null;
        cikkszam: string;
      },
      ExtArgs['result']['orderItem']
    >;
    composites: {};
  };

  type OrderItemGetPayload<
    S extends boolean | null | undefined | OrderItemDefaultArgs,
  > = $Result.GetResult<Prisma.$OrderItemPayload, S>;

  type OrderItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrderItemFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OrderItemCountAggregateInputType | true;
  };

  export interface OrderItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'];
      meta: { name: 'OrderItem' };
    };
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(
      args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(
      args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     *
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     *
     * // Only select the `unikazon`
     * const orderItemWithUnikazonOnly = await prisma.orderItem.findMany({ select: { unikazon: true } })
     *
     */
    findMany<T extends OrderItemFindManyArgs>(
      args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     *
     */
    create<T extends OrderItemCreateArgs>(
      args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderItemCreateManyArgs>(
      args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     *
     */
    delete<T extends OrderItemDeleteArgs>(
      args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderItemUpdateArgs>(
      args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderItemUpdateManyArgs>(
      args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(
      args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
     **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrderItemAggregateArgs>(
      args: Subset<T, OrderItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>;

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrderItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderItem model
     */
    readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrderDefaultArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      | $Result.GetResult<
          Prisma.$OrderPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    recommendationUsages<
      T extends OrderItem$recommendationUsagesArgs<ExtArgs> = {},
    >(
      args?: Subset<T, OrderItem$recommendationUsagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecommendationUsagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly unikazon: FieldRef<'OrderItem', 'String'>;
    readonly sorszam: FieldRef<'OrderItem', 'String'>;
    readonly mennyiseg: FieldRef<'OrderItem', 'Float'>;
    readonly egyseg: FieldRef<'OrderItem', 'String'>;
    readonly netto: FieldRef<'OrderItem', 'Float'>;
    readonly brutto: FieldRef<'OrderItem', 'Float'>;
    readonly cikkszam: FieldRef<'OrderItem', 'String'>;
  }

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemOrderByWithRelationInput
      | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemOrderByWithRelationInput
      | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemOrderByWithRelationInput
      | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>;
  };

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>;
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<
      OrderItemUpdateManyMutationInput,
      OrderItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput;
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number;
  };

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput;
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>;
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>;
  };

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput;
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number;
  };

  /**
   * OrderItem.recommendationUsages
   */
  export type OrderItem$recommendationUsagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    where?: RecommendationUsageWhereInput;
    orderBy?:
      | RecommendationUsageOrderByWithRelationInput
      | RecommendationUsageOrderByWithRelationInput[];
    cursor?: RecommendationUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | RecommendationUsageScalarFieldEnum
      | RecommendationUsageScalarFieldEnum[];
  };

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
  };

  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null;
    _avg: RecommendationAvgAggregateOutputType | null;
    _sum: RecommendationSumAggregateOutputType | null;
    _min: RecommendationMinAggregateOutputType | null;
    _max: RecommendationMaxAggregateOutputType | null;
  };

  export type RecommendationAvgAggregateOutputType = {
    id: number | null;
    client_id: number | null;
    arukod: number | null;
    recommended_by: number | null;
    recommendation_price: Decimal | null;
  };

  export type RecommendationSumAggregateOutputType = {
    id: number | null;
    client_id: number | null;
    arukod: number | null;
    recommended_by: number | null;
    recommendation_price: Decimal | null;
  };

  export type RecommendationMinAggregateOutputType = {
    id: number | null;
    client_id: number | null;
    arukod: number | null;
    recommended_by: number | null;
    recommendation_price: Decimal | null;
    recommended_at: Date | null;
  };

  export type RecommendationMaxAggregateOutputType = {
    id: number | null;
    client_id: number | null;
    arukod: number | null;
    recommended_by: number | null;
    recommendation_price: Decimal | null;
    recommended_at: Date | null;
  };

  export type RecommendationCountAggregateOutputType = {
    id: number;
    client_id: number;
    arukod: number;
    recommended_by: number;
    recommendation_price: number;
    recommended_at: number;
    _all: number;
  };

  export type RecommendationAvgAggregateInputType = {
    id?: true;
    client_id?: true;
    arukod?: true;
    recommended_by?: true;
    recommendation_price?: true;
  };

  export type RecommendationSumAggregateInputType = {
    id?: true;
    client_id?: true;
    arukod?: true;
    recommended_by?: true;
    recommendation_price?: true;
  };

  export type RecommendationMinAggregateInputType = {
    id?: true;
    client_id?: true;
    arukod?: true;
    recommended_by?: true;
    recommendation_price?: true;
    recommended_at?: true;
  };

  export type RecommendationMaxAggregateInputType = {
    id?: true;
    client_id?: true;
    arukod?: true;
    recommended_by?: true;
    recommendation_price?: true;
    recommended_at?: true;
  };

  export type RecommendationCountAggregateInputType = {
    id?: true;
    client_id?: true;
    arukod?: true;
    recommended_by?: true;
    recommendation_price?: true;
    recommended_at?: true;
    _all?: true;
  };

  export type RecommendationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recommendations to fetch.
     */
    orderBy?:
      | RecommendationOrderByWithRelationInput
      | RecommendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recommendations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Recommendations
     **/
    _count?: true | RecommendationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RecommendationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RecommendationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RecommendationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RecommendationMaxAggregateInputType;
  };

  export type GetRecommendationAggregateType<
    T extends RecommendationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>;
  };

  export type RecommendationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationWhereInput;
    orderBy?:
      | RecommendationOrderByWithAggregationInput
      | RecommendationOrderByWithAggregationInput[];
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum;
    having?: RecommendationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecommendationCountAggregateInputType | true;
    _avg?: RecommendationAvgAggregateInputType;
    _sum?: RecommendationSumAggregateInputType;
    _min?: RecommendationMinAggregateInputType;
    _max?: RecommendationMaxAggregateInputType;
  };

  export type RecommendationGroupByOutputType = {
    id: number;
    client_id: number;
    arukod: number;
    recommended_by: number;
    recommendation_price: Decimal;
    recommended_at: Date;
    _count: RecommendationCountAggregateOutputType | null;
    _avg: RecommendationAvgAggregateOutputType | null;
    _sum: RecommendationSumAggregateOutputType | null;
    _min: RecommendationMinAggregateOutputType | null;
    _max: RecommendationMaxAggregateOutputType | null;
  };

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RecommendationGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof RecommendationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>;
        }
      >
    >;

  export type RecommendationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      client_id?: boolean;
      arukod?: boolean;
      recommended_by?: boolean;
      recommendation_price?: boolean;
      recommended_at?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
      item?: boolean | ItemDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      recommendationUsages?:
        | boolean
        | Recommendation$recommendationUsagesArgs<ExtArgs>;
      _count?: boolean | RecommendationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['recommendation']
  >;

  export type RecommendationSelectScalar = {
    id?: boolean;
    client_id?: boolean;
    arukod?: boolean;
    recommended_by?: boolean;
    recommendation_price?: boolean;
    recommended_at?: boolean;
  };

  export type RecommendationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'client_id'
    | 'arukod'
    | 'recommended_by'
    | 'recommendation_price'
    | 'recommended_at',
    ExtArgs['result']['recommendation']
  >;
  export type RecommendationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
    item?: boolean | ItemDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    recommendationUsages?:
      | boolean
      | Recommendation$recommendationUsagesArgs<ExtArgs>;
    _count?: boolean | RecommendationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $RecommendationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Recommendation';
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>;
      item: Prisma.$ItemPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
      recommendationUsages: Prisma.$RecommendationUsagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        client_id: number;
        arukod: number;
        recommended_by: number;
        recommendation_price: Prisma.Decimal;
        recommended_at: Date;
      },
      ExtArgs['result']['recommendation']
    >;
    composites: {};
  };

  type RecommendationGetPayload<
    S extends boolean | null | undefined | RecommendationDefaultArgs,
  > = $Result.GetResult<Prisma.$RecommendationPayload, S>;

  type RecommendationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RecommendationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RecommendationCountAggregateInputType | true;
  };

  export interface RecommendationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'];
      meta: { name: 'Recommendation' };
    };
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(
      args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(
      args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     *
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecommendationFindManyArgs>(
      args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     *
     */
    create<T extends RecommendationCreateArgs>(
      args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecommendationCreateManyArgs>(
      args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     *
     */
    delete<T extends RecommendationDeleteArgs>(
      args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecommendationUpdateArgs>(
      args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(
      args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecommendationUpdateManyArgs>(
      args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(
      args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      $Result.GetResult<
        Prisma.$RecommendationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
     **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RecommendationAggregateArgs>(
      args: Subset<T, RecommendationAggregateArgs>,
    ): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>;

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRecommendationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Recommendation model
     */
    readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ItemDefaultArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      | $Result.GetResult<
          Prisma.$ItemPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    recommendationUsages<
      T extends Recommendation$recommendationUsagesArgs<ExtArgs> = {},
    >(
      args?: Subset<T, Recommendation$recommendationUsagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecommendationUsagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Recommendation model
   */
  interface RecommendationFieldRefs {
    readonly id: FieldRef<'Recommendation', 'Int'>;
    readonly client_id: FieldRef<'Recommendation', 'Int'>;
    readonly arukod: FieldRef<'Recommendation', 'Int'>;
    readonly recommended_by: FieldRef<'Recommendation', 'Int'>;
    readonly recommendation_price: FieldRef<'Recommendation', 'Decimal'>;
    readonly recommended_at: FieldRef<'Recommendation', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput;
  };

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput;
  };

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recommendations to fetch.
     */
    orderBy?:
      | RecommendationOrderByWithRelationInput
      | RecommendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recommendations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[];
  };

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recommendations to fetch.
     */
    orderBy?:
      | RecommendationOrderByWithRelationInput
      | RecommendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recommendations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[];
  };

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recommendations to fetch.
     */
    orderBy?:
      | RecommendationOrderByWithRelationInput
      | RecommendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recommendations.
     */
    skip?: number;
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[];
  };

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>;
  };

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>;
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput;
  };

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<
      RecommendationUpdateManyMutationInput,
      RecommendationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput;
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number;
  };

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput;
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>;
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>;
  };

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput;
  };

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput;
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number;
  };

  /**
   * Recommendation.recommendationUsages
   */
  export type Recommendation$recommendationUsagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    where?: RecommendationUsageWhereInput;
    orderBy?:
      | RecommendationUsageOrderByWithRelationInput
      | RecommendationUsageOrderByWithRelationInput[];
    cursor?: RecommendationUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | RecommendationUsageScalarFieldEnum
      | RecommendationUsageScalarFieldEnum[];
  };

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null;
  };

  /**
   * Model RecommendationUsage
   */

  export type AggregateRecommendationUsage = {
    _count: RecommendationUsageCountAggregateOutputType | null;
    _avg: RecommendationUsageAvgAggregateOutputType | null;
    _sum: RecommendationUsageSumAggregateOutputType | null;
    _min: RecommendationUsageMinAggregateOutputType | null;
    _max: RecommendationUsageMaxAggregateOutputType | null;
  };

  export type RecommendationUsageAvgAggregateOutputType = {
    id: number | null;
    recommendation_id: number | null;
    confirmed_by: number | null;
  };

  export type RecommendationUsageSumAggregateOutputType = {
    id: number | null;
    recommendation_id: number | null;
    confirmed_by: number | null;
  };

  export type RecommendationUsageMinAggregateOutputType = {
    id: number | null;
    recommendation_id: number | null;
    order_item_id: string | null;
    confirmed_by: number | null;
    is_rec_by_sales: boolean | null;
    is_influenced: boolean | null;
    created_at: Date | null;
  };

  export type RecommendationUsageMaxAggregateOutputType = {
    id: number | null;
    recommendation_id: number | null;
    order_item_id: string | null;
    confirmed_by: number | null;
    is_rec_by_sales: boolean | null;
    is_influenced: boolean | null;
    created_at: Date | null;
  };

  export type RecommendationUsageCountAggregateOutputType = {
    id: number;
    recommendation_id: number;
    order_item_id: number;
    confirmed_by: number;
    is_rec_by_sales: number;
    is_influenced: number;
    created_at: number;
    _all: number;
  };

  export type RecommendationUsageAvgAggregateInputType = {
    id?: true;
    recommendation_id?: true;
    confirmed_by?: true;
  };

  export type RecommendationUsageSumAggregateInputType = {
    id?: true;
    recommendation_id?: true;
    confirmed_by?: true;
  };

  export type RecommendationUsageMinAggregateInputType = {
    id?: true;
    recommendation_id?: true;
    order_item_id?: true;
    confirmed_by?: true;
    is_rec_by_sales?: true;
    is_influenced?: true;
    created_at?: true;
  };

  export type RecommendationUsageMaxAggregateInputType = {
    id?: true;
    recommendation_id?: true;
    order_item_id?: true;
    confirmed_by?: true;
    is_rec_by_sales?: true;
    is_influenced?: true;
    created_at?: true;
  };

  export type RecommendationUsageCountAggregateInputType = {
    id?: true;
    recommendation_id?: true;
    order_item_id?: true;
    confirmed_by?: true;
    is_rec_by_sales?: true;
    is_influenced?: true;
    created_at?: true;
    _all?: true;
  };

  export type RecommendationUsageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RecommendationUsage to aggregate.
     */
    where?: RecommendationUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecommendationUsages to fetch.
     */
    orderBy?:
      | RecommendationUsageOrderByWithRelationInput
      | RecommendationUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RecommendationUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecommendationUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecommendationUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RecommendationUsages
     **/
    _count?: true | RecommendationUsageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RecommendationUsageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RecommendationUsageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RecommendationUsageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RecommendationUsageMaxAggregateInputType;
  };

  export type GetRecommendationUsageAggregateType<
    T extends RecommendationUsageAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRecommendationUsage]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendationUsage[P]>
      : GetScalarType<T[P], AggregateRecommendationUsage[P]>;
  };

  export type RecommendationUsageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecommendationUsageWhereInput;
    orderBy?:
      | RecommendationUsageOrderByWithAggregationInput
      | RecommendationUsageOrderByWithAggregationInput[];
    by:
      | RecommendationUsageScalarFieldEnum[]
      | RecommendationUsageScalarFieldEnum;
    having?: RecommendationUsageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecommendationUsageCountAggregateInputType | true;
    _avg?: RecommendationUsageAvgAggregateInputType;
    _sum?: RecommendationUsageSumAggregateInputType;
    _min?: RecommendationUsageMinAggregateInputType;
    _max?: RecommendationUsageMaxAggregateInputType;
  };

  export type RecommendationUsageGroupByOutputType = {
    id: number;
    recommendation_id: number;
    order_item_id: string;
    confirmed_by: number;
    is_rec_by_sales: boolean;
    is_influenced: boolean;
    created_at: Date;
    _count: RecommendationUsageCountAggregateOutputType | null;
    _avg: RecommendationUsageAvgAggregateOutputType | null;
    _sum: RecommendationUsageSumAggregateOutputType | null;
    _min: RecommendationUsageMinAggregateOutputType | null;
    _max: RecommendationUsageMaxAggregateOutputType | null;
  };

  type GetRecommendationUsageGroupByPayload<
    T extends RecommendationUsageGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationUsageGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof RecommendationUsageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RecommendationUsageGroupByOutputType[P]>
          : GetScalarType<T[P], RecommendationUsageGroupByOutputType[P]>;
      }
    >
  >;

  export type RecommendationUsageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      recommendation_id?: boolean;
      order_item_id?: boolean;
      confirmed_by?: boolean;
      is_rec_by_sales?: boolean;
      is_influenced?: boolean;
      created_at?: boolean;
      recommendation?: boolean | RecommendationDefaultArgs<ExtArgs>;
      orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['recommendationUsage']
  >;

  export type RecommendationUsageSelectScalar = {
    id?: boolean;
    recommendation_id?: boolean;
    order_item_id?: boolean;
    confirmed_by?: boolean;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: boolean;
  };

  export type RecommendationUsageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'recommendation_id'
    | 'order_item_id'
    | 'confirmed_by'
    | 'is_rec_by_sales'
    | 'is_influenced'
    | 'created_at',
    ExtArgs['result']['recommendationUsage']
  >;
  export type RecommendationUsageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recommendation?: boolean | RecommendationDefaultArgs<ExtArgs>;
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $RecommendationUsagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'RecommendationUsage';
    objects: {
      recommendation: Prisma.$RecommendationPayload<ExtArgs>;
      orderItem: Prisma.$OrderItemPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        recommendation_id: number;
        order_item_id: string;
        confirmed_by: number;
        is_rec_by_sales: boolean;
        is_influenced: boolean;
        created_at: Date;
      },
      ExtArgs['result']['recommendationUsage']
    >;
    composites: {};
  };

  type RecommendationUsageGetPayload<
    S extends boolean | null | undefined | RecommendationUsageDefaultArgs,
  > = $Result.GetResult<Prisma.$RecommendationUsagePayload, S>;

  type RecommendationUsageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RecommendationUsageFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RecommendationUsageCountAggregateInputType | true;
  };

  export interface RecommendationUsageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['RecommendationUsage'];
      meta: { name: 'RecommendationUsage' };
    };
    /**
     * Find zero or one RecommendationUsage that matches the filter.
     * @param {RecommendationUsageFindUniqueArgs} args - Arguments to find a RecommendationUsage
     * @example
     * // Get one RecommendationUsage
     * const recommendationUsage = await prisma.recommendationUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationUsageFindUniqueArgs>(
      args: SelectSubset<T, RecommendationUsageFindUniqueArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RecommendationUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationUsageFindUniqueOrThrowArgs} args - Arguments to find a RecommendationUsage
     * @example
     * // Get one RecommendationUsage
     * const recommendationUsage = await prisma.recommendationUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationUsageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RecommendationUsageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RecommendationUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUsageFindFirstArgs} args - Arguments to find a RecommendationUsage
     * @example
     * // Get one RecommendationUsage
     * const recommendationUsage = await prisma.recommendationUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationUsageFindFirstArgs>(
      args?: SelectSubset<T, RecommendationUsageFindFirstArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RecommendationUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUsageFindFirstOrThrowArgs} args - Arguments to find a RecommendationUsage
     * @example
     * // Get one RecommendationUsage
     * const recommendationUsage = await prisma.recommendationUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationUsageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecommendationUsageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RecommendationUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendationUsages
     * const recommendationUsages = await prisma.recommendationUsage.findMany()
     *
     * // Get first 10 RecommendationUsages
     * const recommendationUsages = await prisma.recommendationUsage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recommendationUsageWithIdOnly = await prisma.recommendationUsage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecommendationUsageFindManyArgs>(
      args?: SelectSubset<T, RecommendationUsageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RecommendationUsage.
     * @param {RecommendationUsageCreateArgs} args - Arguments to create a RecommendationUsage.
     * @example
     * // Create one RecommendationUsage
     * const RecommendationUsage = await prisma.recommendationUsage.create({
     *   data: {
     *     // ... data to create a RecommendationUsage
     *   }
     * })
     *
     */
    create<T extends RecommendationUsageCreateArgs>(
      args: SelectSubset<T, RecommendationUsageCreateArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RecommendationUsages.
     * @param {RecommendationUsageCreateManyArgs} args - Arguments to create many RecommendationUsages.
     * @example
     * // Create many RecommendationUsages
     * const recommendationUsage = await prisma.recommendationUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecommendationUsageCreateManyArgs>(
      args?: SelectSubset<T, RecommendationUsageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a RecommendationUsage.
     * @param {RecommendationUsageDeleteArgs} args - Arguments to delete one RecommendationUsage.
     * @example
     * // Delete one RecommendationUsage
     * const RecommendationUsage = await prisma.recommendationUsage.delete({
     *   where: {
     *     // ... filter to delete one RecommendationUsage
     *   }
     * })
     *
     */
    delete<T extends RecommendationUsageDeleteArgs>(
      args: SelectSubset<T, RecommendationUsageDeleteArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RecommendationUsage.
     * @param {RecommendationUsageUpdateArgs} args - Arguments to update one RecommendationUsage.
     * @example
     * // Update one RecommendationUsage
     * const recommendationUsage = await prisma.recommendationUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecommendationUsageUpdateArgs>(
      args: SelectSubset<T, RecommendationUsageUpdateArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RecommendationUsages.
     * @param {RecommendationUsageDeleteManyArgs} args - Arguments to filter RecommendationUsages to delete.
     * @example
     * // Delete a few RecommendationUsages
     * const { count } = await prisma.recommendationUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecommendationUsageDeleteManyArgs>(
      args?: SelectSubset<T, RecommendationUsageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RecommendationUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendationUsages
     * const recommendationUsage = await prisma.recommendationUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecommendationUsageUpdateManyArgs>(
      args: SelectSubset<T, RecommendationUsageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one RecommendationUsage.
     * @param {RecommendationUsageUpsertArgs} args - Arguments to update or create a RecommendationUsage.
     * @example
     * // Update or create a RecommendationUsage
     * const recommendationUsage = await prisma.recommendationUsage.upsert({
     *   create: {
     *     // ... data to create a RecommendationUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendationUsage we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUsageUpsertArgs>(
      args: SelectSubset<T, RecommendationUsageUpsertArgs<ExtArgs>>,
    ): Prisma__RecommendationUsageClient<
      $Result.GetResult<
        Prisma.$RecommendationUsagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RecommendationUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUsageCountArgs} args - Arguments to filter RecommendationUsages to count.
     * @example
     * // Count the number of RecommendationUsages
     * const count = await prisma.recommendationUsage.count({
     *   where: {
     *     // ... the filter for the RecommendationUsages we want to count
     *   }
     * })
     **/
    count<T extends RecommendationUsageCountArgs>(
      args?: Subset<T, RecommendationUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              RecommendationUsageCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RecommendationUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RecommendationUsageAggregateArgs>(
      args: Subset<T, RecommendationUsageAggregateArgs>,
    ): Prisma.PrismaPromise<GetRecommendationUsageAggregateType<T>>;

    /**
     * Group by RecommendationUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RecommendationUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationUsageGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RecommendationUsageGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRecommendationUsageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RecommendationUsage model
     */
    readonly fields: RecommendationUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendationUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationUsageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    recommendation<T extends RecommendationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RecommendationDefaultArgs<ExtArgs>>,
    ): Prisma__RecommendationClient<
      | $Result.GetResult<
          Prisma.$RecommendationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>,
    ): Prisma__OrderItemClient<
      | $Result.GetResult<
          Prisma.$OrderItemPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RecommendationUsage model
   */
  interface RecommendationUsageFieldRefs {
    readonly id: FieldRef<'RecommendationUsage', 'Int'>;
    readonly recommendation_id: FieldRef<'RecommendationUsage', 'Int'>;
    readonly order_item_id: FieldRef<'RecommendationUsage', 'String'>;
    readonly confirmed_by: FieldRef<'RecommendationUsage', 'Int'>;
    readonly is_rec_by_sales: FieldRef<'RecommendationUsage', 'Boolean'>;
    readonly is_influenced: FieldRef<'RecommendationUsage', 'Boolean'>;
    readonly created_at: FieldRef<'RecommendationUsage', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * RecommendationUsage findUnique
   */
  export type RecommendationUsageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * Filter, which RecommendationUsage to fetch.
     */
    where: RecommendationUsageWhereUniqueInput;
  };

  /**
   * RecommendationUsage findUniqueOrThrow
   */
  export type RecommendationUsageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * Filter, which RecommendationUsage to fetch.
     */
    where: RecommendationUsageWhereUniqueInput;
  };

  /**
   * RecommendationUsage findFirst
   */
  export type RecommendationUsageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * Filter, which RecommendationUsage to fetch.
     */
    where?: RecommendationUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecommendationUsages to fetch.
     */
    orderBy?:
      | RecommendationUsageOrderByWithRelationInput
      | RecommendationUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecommendationUsages.
     */
    cursor?: RecommendationUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecommendationUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecommendationUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecommendationUsages.
     */
    distinct?:
      | RecommendationUsageScalarFieldEnum
      | RecommendationUsageScalarFieldEnum[];
  };

  /**
   * RecommendationUsage findFirstOrThrow
   */
  export type RecommendationUsageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * Filter, which RecommendationUsage to fetch.
     */
    where?: RecommendationUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecommendationUsages to fetch.
     */
    orderBy?:
      | RecommendationUsageOrderByWithRelationInput
      | RecommendationUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecommendationUsages.
     */
    cursor?: RecommendationUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecommendationUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecommendationUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecommendationUsages.
     */
    distinct?:
      | RecommendationUsageScalarFieldEnum
      | RecommendationUsageScalarFieldEnum[];
  };

  /**
   * RecommendationUsage findMany
   */
  export type RecommendationUsageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * Filter, which RecommendationUsages to fetch.
     */
    where?: RecommendationUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecommendationUsages to fetch.
     */
    orderBy?:
      | RecommendationUsageOrderByWithRelationInput
      | RecommendationUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RecommendationUsages.
     */
    cursor?: RecommendationUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecommendationUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecommendationUsages.
     */
    skip?: number;
    distinct?:
      | RecommendationUsageScalarFieldEnum
      | RecommendationUsageScalarFieldEnum[];
  };

  /**
   * RecommendationUsage create
   */
  export type RecommendationUsageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * The data needed to create a RecommendationUsage.
     */
    data: XOR<
      RecommendationUsageCreateInput,
      RecommendationUsageUncheckedCreateInput
    >;
  };

  /**
   * RecommendationUsage createMany
   */
  export type RecommendationUsageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RecommendationUsages.
     */
    data:
      | RecommendationUsageCreateManyInput
      | RecommendationUsageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RecommendationUsage update
   */
  export type RecommendationUsageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * The data needed to update a RecommendationUsage.
     */
    data: XOR<
      RecommendationUsageUpdateInput,
      RecommendationUsageUncheckedUpdateInput
    >;
    /**
     * Choose, which RecommendationUsage to update.
     */
    where: RecommendationUsageWhereUniqueInput;
  };

  /**
   * RecommendationUsage updateMany
   */
  export type RecommendationUsageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RecommendationUsages.
     */
    data: XOR<
      RecommendationUsageUpdateManyMutationInput,
      RecommendationUsageUncheckedUpdateManyInput
    >;
    /**
     * Filter which RecommendationUsages to update
     */
    where?: RecommendationUsageWhereInput;
    /**
     * Limit how many RecommendationUsages to update.
     */
    limit?: number;
  };

  /**
   * RecommendationUsage upsert
   */
  export type RecommendationUsageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * The filter to search for the RecommendationUsage to update in case it exists.
     */
    where: RecommendationUsageWhereUniqueInput;
    /**
     * In case the RecommendationUsage found by the `where` argument doesn't exist, create a new RecommendationUsage with this data.
     */
    create: XOR<
      RecommendationUsageCreateInput,
      RecommendationUsageUncheckedCreateInput
    >;
    /**
     * In case the RecommendationUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      RecommendationUsageUpdateInput,
      RecommendationUsageUncheckedUpdateInput
    >;
  };

  /**
   * RecommendationUsage delete
   */
  export type RecommendationUsageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
    /**
     * Filter which RecommendationUsage to delete.
     */
    where: RecommendationUsageWhereUniqueInput;
  };

  /**
   * RecommendationUsage deleteMany
   */
  export type RecommendationUsageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RecommendationUsages to delete
     */
    where?: RecommendationUsageWhereInput;
    /**
     * Limit how many RecommendationUsages to delete.
     */
    limit?: number;
  };

  /**
   * RecommendationUsage without action
   */
  export type RecommendationUsageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecommendationUsage
     */
    select?: RecommendationUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecommendationUsage
     */
    omit?: RecommendationUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationUsageInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    password: 'password';
    beosztas: 'beosztas';
    email: 'email';
    salesperson: 'salesperson';
    ID_devices: 'ID_devices';
    image: 'image';
    username: 'username';
    name: 'name';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ItemScalarFieldEnum: {
    arukod: 'arukod';
    megnev: 'megnev';
    csoport: 'csoport';
    cikkszam: 'cikkszam';
    has_ready_to_cook_variants: 'has_ready_to_cook_variants';
    ear: 'ear';
    ear4: 'ear4';
    ear3: 'ear3';
    ear1: 'ear1';
    tipus: 'tipus';
    new: 'new';
    keszlet: 'keszlet';
    batch: 'batch';
    unit: 'unit';
    uom: 'uom';
    passziv: 'passziv';
    fix: 'fix';
    fix_name: 'fix_name';
    sold_in_batches: 'sold_in_batches';
    hide_batch: 'hide_batch';
    rendelheto: 'rendelheto';
    search_blob: 'search_blob';
    custom_unit: 'custom_unit';
    image: 'image';
    vat: 'vat';
  };

  export type ItemScalarFieldEnum =
    (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];

  export const ClientScalarFieldEnum: {
    ID: 'ID';
    vat: 'vat';
    name: 'name';
    address_city: 'address_city';
    address_zip: 'address_zip';
    address_combined: 'address_combined';
    del: 'del';
    email: 'email';
    ID_salesman: 'ID_salesman';
    ID_branch: 'ID_branch';
    seasonal: 'seasonal';
    sms_group: 'sms_group';
    business_name: 'business_name';
    UNAS_customer_group_ID: 'UNAS_customer_group_ID';
    discount_group_id: 'discount_group_id';
    discount_percentage: 'discount_percentage';
    teruleti_id: 'teruleti_id';
  };

  export type ClientScalarFieldEnum =
    (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];

  export const OrderScalarFieldEnum: {
    sorszam: 'sorszam';
    telj: 'telj';
    kelt: 'kelt';
    vevokod: 'vevokod';
    vevo: 'vevo';
    city: 'city';
    address: 'address';
    zip: 'zip';
    del: 'del';
    deleted_by: 'deleted_by';
    delete_comment: 'delete_comment';
  };

  export type OrderScalarFieldEnum =
    (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];

  export const OrderItemScalarFieldEnum: {
    unikazon: 'unikazon';
    sorszam: 'sorszam';
    mennyiseg: 'mennyiseg';
    egyseg: 'egyseg';
    netto: 'netto';
    brutto: 'brutto';
    cikkszam: 'cikkszam';
  };

  export type OrderItemScalarFieldEnum =
    (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];

  export const RecommendationScalarFieldEnum: {
    id: 'id';
    client_id: 'client_id';
    arukod: 'arukod';
    recommended_by: 'recommended_by';
    recommendation_price: 'recommendation_price';
    recommended_at: 'recommended_at';
  };

  export type RecommendationScalarFieldEnum =
    (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum];

  export const RecommendationUsageScalarFieldEnum: {
    id: 'id';
    recommendation_id: 'recommendation_id';
    order_item_id: 'order_item_id';
    confirmed_by: 'confirmed_by';
    is_rec_by_sales: 'is_rec_by_sales';
    is_influenced: 'is_influenced';
    created_at: 'created_at';
  };

  export type RecommendationUsageScalarFieldEnum =
    (typeof RecommendationUsageScalarFieldEnum)[keyof typeof RecommendationUsageScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const UserOrderByRelevanceFieldEnum: {
    password: 'password';
    beosztas: 'beosztas';
    email: 'email';
    image: 'image';
    username: 'username';
    name: 'name';
  };

  export type UserOrderByRelevanceFieldEnum =
    (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];

  export const ItemOrderByRelevanceFieldEnum: {
    megnev: 'megnev';
    csoport: 'csoport';
    cikkszam: 'cikkszam';
    uom: 'uom';
    fix_name: 'fix_name';
    search_blob: 'search_blob';
    image: 'image';
  };

  export type ItemOrderByRelevanceFieldEnum =
    (typeof ItemOrderByRelevanceFieldEnum)[keyof typeof ItemOrderByRelevanceFieldEnum];

  export const ClientOrderByRelevanceFieldEnum: {
    vat: 'vat';
    name: 'name';
    address_city: 'address_city';
    address_zip: 'address_zip';
    address_combined: 'address_combined';
    email: 'email';
    ID_branch: 'ID_branch';
    seasonal: 'seasonal';
    business_name: 'business_name';
  };

  export type ClientOrderByRelevanceFieldEnum =
    (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum];

  export const OrderOrderByRelevanceFieldEnum: {
    sorszam: 'sorszam';
    vevo: 'vevo';
    city: 'city';
    address: 'address';
    zip: 'zip';
    deleted_by: 'deleted_by';
    delete_comment: 'delete_comment';
  };

  export type OrderOrderByRelevanceFieldEnum =
    (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum];

  export const OrderItemOrderByRelevanceFieldEnum: {
    unikazon: 'unikazon';
    sorszam: 'sorszam';
    egyseg: 'egyseg';
    cikkszam: 'cikkszam';
  };

  export type OrderItemOrderByRelevanceFieldEnum =
    (typeof OrderItemOrderByRelevanceFieldEnum)[keyof typeof OrderItemOrderByRelevanceFieldEnum];

  export const RecommendationUsageOrderByRelevanceFieldEnum: {
    order_item_id: 'order_item_id';
  };

  export type RecommendationUsageOrderByRelevanceFieldEnum =
    (typeof RecommendationUsageOrderByRelevanceFieldEnum)[keyof typeof RecommendationUsageOrderByRelevanceFieldEnum];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    password?: StringNullableFilter<'User'> | string | null;
    beosztas?: StringNullableFilter<'User'> | string | null;
    email?: StringNullableFilter<'User'> | string | null;
    salesperson?: BoolNullableFilter<'User'> | boolean | null;
    ID_devices?: IntNullableFilter<'User'> | number | null;
    image?: StringNullableFilter<'User'> | string | null;
    username?: StringNullableFilter<'User'> | string | null;
    name?: StringNullableFilter<'User'> | string | null;
    recommendations?: RecommendationListRelationFilter;
    recommendationUsages?: RecommendationUsageListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    password?: SortOrderInput | SortOrder;
    beosztas?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    salesperson?: SortOrderInput | SortOrder;
    ID_devices?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    username?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    recommendations?: RecommendationOrderByRelationAggregateInput;
    recommendationUsages?: RecommendationUsageOrderByRelationAggregateInput;
    _relevance?: UserOrderByRelevanceInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringNullableFilter<'User'> | string | null;
      beosztas?: StringNullableFilter<'User'> | string | null;
      email?: StringNullableFilter<'User'> | string | null;
      salesperson?: BoolNullableFilter<'User'> | boolean | null;
      ID_devices?: IntNullableFilter<'User'> | number | null;
      image?: StringNullableFilter<'User'> | string | null;
      username?: StringNullableFilter<'User'> | string | null;
      name?: StringNullableFilter<'User'> | string | null;
      recommendations?: RecommendationListRelationFilter;
      recommendationUsages?: RecommendationUsageListRelationFilter;
    },
    'id'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    password?: SortOrderInput | SortOrder;
    beosztas?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    salesperson?: SortOrderInput | SortOrder;
    ID_devices?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    username?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    password?: StringNullableWithAggregatesFilter<'User'> | string | null;
    beosztas?: StringNullableWithAggregatesFilter<'User'> | string | null;
    email?: StringNullableWithAggregatesFilter<'User'> | string | null;
    salesperson?: BoolNullableWithAggregatesFilter<'User'> | boolean | null;
    ID_devices?: IntNullableWithAggregatesFilter<'User'> | number | null;
    image?: StringNullableWithAggregatesFilter<'User'> | string | null;
    username?: StringNullableWithAggregatesFilter<'User'> | string | null;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
  };

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[];
    OR?: ItemWhereInput[];
    NOT?: ItemWhereInput | ItemWhereInput[];
    arukod?: IntFilter<'Item'> | number;
    megnev?: StringNullableFilter<'Item'> | string | null;
    csoport?: StringNullableFilter<'Item'> | string | null;
    cikkszam?: StringFilter<'Item'> | string;
    has_ready_to_cook_variants?: BoolNullableFilter<'Item'> | boolean | null;
    ear?:
      | DecimalNullableFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | DecimalNullableFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | DecimalNullableFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | DecimalNullableFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntFilter<'Item'> | number;
    new?: BoolNullableFilter<'Item'> | boolean | null;
    keszlet?: FloatNullableFilter<'Item'> | number | null;
    batch?: FloatNullableFilter<'Item'> | number | null;
    unit?: FloatNullableFilter<'Item'> | number | null;
    uom?: StringNullableFilter<'Item'> | string | null;
    passziv?: BoolNullableFilter<'Item'> | boolean | null;
    fix?: BoolFilter<'Item'> | boolean;
    fix_name?: StringNullableFilter<'Item'> | string | null;
    sold_in_batches?: BoolNullableFilter<'Item'> | boolean | null;
    hide_batch?: BoolNullableFilter<'Item'> | boolean | null;
    rendelheto?: BoolFilter<'Item'> | boolean;
    search_blob?: StringNullableFilter<'Item'> | string | null;
    custom_unit?: FloatNullableFilter<'Item'> | number | null;
    image?: StringNullableFilter<'Item'> | string | null;
    vat?: FloatNullableFilter<'Item'> | number | null;
    recommendations?: RecommendationListRelationFilter;
  };

  export type ItemOrderByWithRelationInput = {
    arukod?: SortOrder;
    megnev?: SortOrderInput | SortOrder;
    csoport?: SortOrderInput | SortOrder;
    cikkszam?: SortOrder;
    has_ready_to_cook_variants?: SortOrderInput | SortOrder;
    ear?: SortOrderInput | SortOrder;
    ear4?: SortOrderInput | SortOrder;
    ear3?: SortOrderInput | SortOrder;
    ear1?: SortOrderInput | SortOrder;
    tipus?: SortOrder;
    new?: SortOrderInput | SortOrder;
    keszlet?: SortOrderInput | SortOrder;
    batch?: SortOrderInput | SortOrder;
    unit?: SortOrderInput | SortOrder;
    uom?: SortOrderInput | SortOrder;
    passziv?: SortOrderInput | SortOrder;
    fix?: SortOrder;
    fix_name?: SortOrderInput | SortOrder;
    sold_in_batches?: SortOrderInput | SortOrder;
    hide_batch?: SortOrderInput | SortOrder;
    rendelheto?: SortOrder;
    search_blob?: SortOrderInput | SortOrder;
    custom_unit?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    vat?: SortOrderInput | SortOrder;
    recommendations?: RecommendationOrderByRelationAggregateInput;
    _relevance?: ItemOrderByRelevanceInput;
  };

  export type ItemWhereUniqueInput = Prisma.AtLeast<
    {
      arukod?: number;
      AND?: ItemWhereInput | ItemWhereInput[];
      OR?: ItemWhereInput[];
      NOT?: ItemWhereInput | ItemWhereInput[];
      megnev?: StringNullableFilter<'Item'> | string | null;
      csoport?: StringNullableFilter<'Item'> | string | null;
      cikkszam?: StringFilter<'Item'> | string;
      has_ready_to_cook_variants?: BoolNullableFilter<'Item'> | boolean | null;
      ear?:
        | DecimalNullableFilter<'Item'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      ear4?:
        | DecimalNullableFilter<'Item'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      ear3?:
        | DecimalNullableFilter<'Item'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      ear1?:
        | DecimalNullableFilter<'Item'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      tipus?: IntFilter<'Item'> | number;
      new?: BoolNullableFilter<'Item'> | boolean | null;
      keszlet?: FloatNullableFilter<'Item'> | number | null;
      batch?: FloatNullableFilter<'Item'> | number | null;
      unit?: FloatNullableFilter<'Item'> | number | null;
      uom?: StringNullableFilter<'Item'> | string | null;
      passziv?: BoolNullableFilter<'Item'> | boolean | null;
      fix?: BoolFilter<'Item'> | boolean;
      fix_name?: StringNullableFilter<'Item'> | string | null;
      sold_in_batches?: BoolNullableFilter<'Item'> | boolean | null;
      hide_batch?: BoolNullableFilter<'Item'> | boolean | null;
      rendelheto?: BoolFilter<'Item'> | boolean;
      search_blob?: StringNullableFilter<'Item'> | string | null;
      custom_unit?: FloatNullableFilter<'Item'> | number | null;
      image?: StringNullableFilter<'Item'> | string | null;
      vat?: FloatNullableFilter<'Item'> | number | null;
      recommendations?: RecommendationListRelationFilter;
    },
    'arukod'
  >;

  export type ItemOrderByWithAggregationInput = {
    arukod?: SortOrder;
    megnev?: SortOrderInput | SortOrder;
    csoport?: SortOrderInput | SortOrder;
    cikkszam?: SortOrder;
    has_ready_to_cook_variants?: SortOrderInput | SortOrder;
    ear?: SortOrderInput | SortOrder;
    ear4?: SortOrderInput | SortOrder;
    ear3?: SortOrderInput | SortOrder;
    ear1?: SortOrderInput | SortOrder;
    tipus?: SortOrder;
    new?: SortOrderInput | SortOrder;
    keszlet?: SortOrderInput | SortOrder;
    batch?: SortOrderInput | SortOrder;
    unit?: SortOrderInput | SortOrder;
    uom?: SortOrderInput | SortOrder;
    passziv?: SortOrderInput | SortOrder;
    fix?: SortOrder;
    fix_name?: SortOrderInput | SortOrder;
    sold_in_batches?: SortOrderInput | SortOrder;
    hide_batch?: SortOrderInput | SortOrder;
    rendelheto?: SortOrder;
    search_blob?: SortOrderInput | SortOrder;
    custom_unit?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    vat?: SortOrderInput | SortOrder;
    _count?: ItemCountOrderByAggregateInput;
    _avg?: ItemAvgOrderByAggregateInput;
    _max?: ItemMaxOrderByAggregateInput;
    _min?: ItemMinOrderByAggregateInput;
    _sum?: ItemSumOrderByAggregateInput;
  };

  export type ItemScalarWhereWithAggregatesInput = {
    AND?:
      | ItemScalarWhereWithAggregatesInput
      | ItemScalarWhereWithAggregatesInput[];
    OR?: ItemScalarWhereWithAggregatesInput[];
    NOT?:
      | ItemScalarWhereWithAggregatesInput
      | ItemScalarWhereWithAggregatesInput[];
    arukod?: IntWithAggregatesFilter<'Item'> | number;
    megnev?: StringNullableWithAggregatesFilter<'Item'> | string | null;
    csoport?: StringNullableWithAggregatesFilter<'Item'> | string | null;
    cikkszam?: StringWithAggregatesFilter<'Item'> | string;
    has_ready_to_cook_variants?:
      | BoolNullableWithAggregatesFilter<'Item'>
      | boolean
      | null;
    ear?:
      | DecimalNullableWithAggregatesFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | DecimalNullableWithAggregatesFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | DecimalNullableWithAggregatesFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | DecimalNullableWithAggregatesFilter<'Item'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntWithAggregatesFilter<'Item'> | number;
    new?: BoolNullableWithAggregatesFilter<'Item'> | boolean | null;
    keszlet?: FloatNullableWithAggregatesFilter<'Item'> | number | null;
    batch?: FloatNullableWithAggregatesFilter<'Item'> | number | null;
    unit?: FloatNullableWithAggregatesFilter<'Item'> | number | null;
    uom?: StringNullableWithAggregatesFilter<'Item'> | string | null;
    passziv?: BoolNullableWithAggregatesFilter<'Item'> | boolean | null;
    fix?: BoolWithAggregatesFilter<'Item'> | boolean;
    fix_name?: StringNullableWithAggregatesFilter<'Item'> | string | null;
    sold_in_batches?: BoolNullableWithAggregatesFilter<'Item'> | boolean | null;
    hide_batch?: BoolNullableWithAggregatesFilter<'Item'> | boolean | null;
    rendelheto?: BoolWithAggregatesFilter<'Item'> | boolean;
    search_blob?: StringNullableWithAggregatesFilter<'Item'> | string | null;
    custom_unit?: FloatNullableWithAggregatesFilter<'Item'> | number | null;
    image?: StringNullableWithAggregatesFilter<'Item'> | string | null;
    vat?: FloatNullableWithAggregatesFilter<'Item'> | number | null;
  };

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[];
    OR?: ClientWhereInput[];
    NOT?: ClientWhereInput | ClientWhereInput[];
    ID?: IntFilter<'Client'> | number;
    vat?: StringNullableFilter<'Client'> | string | null;
    name?: StringNullableFilter<'Client'> | string | null;
    address_city?: StringNullableFilter<'Client'> | string | null;
    address_zip?: StringNullableFilter<'Client'> | string | null;
    address_combined?: StringNullableFilter<'Client'> | string | null;
    del?: BoolNullableFilter<'Client'> | boolean | null;
    email?: StringNullableFilter<'Client'> | string | null;
    ID_salesman?: IntNullableFilter<'Client'> | number | null;
    ID_branch?: StringNullableFilter<'Client'> | string | null;
    seasonal?: StringNullableFilter<'Client'> | string | null;
    sms_group?: IntNullableFilter<'Client'> | number | null;
    business_name?: StringNullableFilter<'Client'> | string | null;
    UNAS_customer_group_ID?: IntNullableFilter<'Client'> | number | null;
    discount_group_id?: IntNullableFilter<'Client'> | number | null;
    discount_percentage?: FloatNullableFilter<'Client'> | number | null;
    teruleti_id?: IntNullableFilter<'Client'> | number | null;
    recommendations?: RecommendationListRelationFilter;
  };

  export type ClientOrderByWithRelationInput = {
    ID?: SortOrder;
    vat?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    address_city?: SortOrderInput | SortOrder;
    address_zip?: SortOrderInput | SortOrder;
    address_combined?: SortOrderInput | SortOrder;
    del?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    ID_salesman?: SortOrderInput | SortOrder;
    ID_branch?: SortOrderInput | SortOrder;
    seasonal?: SortOrderInput | SortOrder;
    sms_group?: SortOrderInput | SortOrder;
    business_name?: SortOrderInput | SortOrder;
    UNAS_customer_group_ID?: SortOrderInput | SortOrder;
    discount_group_id?: SortOrderInput | SortOrder;
    discount_percentage?: SortOrderInput | SortOrder;
    teruleti_id?: SortOrderInput | SortOrder;
    recommendations?: RecommendationOrderByRelationAggregateInput;
    _relevance?: ClientOrderByRelevanceInput;
  };

  export type ClientWhereUniqueInput = Prisma.AtLeast<
    {
      ID?: number;
      AND?: ClientWhereInput | ClientWhereInput[];
      OR?: ClientWhereInput[];
      NOT?: ClientWhereInput | ClientWhereInput[];
      vat?: StringNullableFilter<'Client'> | string | null;
      name?: StringNullableFilter<'Client'> | string | null;
      address_city?: StringNullableFilter<'Client'> | string | null;
      address_zip?: StringNullableFilter<'Client'> | string | null;
      address_combined?: StringNullableFilter<'Client'> | string | null;
      del?: BoolNullableFilter<'Client'> | boolean | null;
      email?: StringNullableFilter<'Client'> | string | null;
      ID_salesman?: IntNullableFilter<'Client'> | number | null;
      ID_branch?: StringNullableFilter<'Client'> | string | null;
      seasonal?: StringNullableFilter<'Client'> | string | null;
      sms_group?: IntNullableFilter<'Client'> | number | null;
      business_name?: StringNullableFilter<'Client'> | string | null;
      UNAS_customer_group_ID?: IntNullableFilter<'Client'> | number | null;
      discount_group_id?: IntNullableFilter<'Client'> | number | null;
      discount_percentage?: FloatNullableFilter<'Client'> | number | null;
      teruleti_id?: IntNullableFilter<'Client'> | number | null;
      recommendations?: RecommendationListRelationFilter;
    },
    'ID'
  >;

  export type ClientOrderByWithAggregationInput = {
    ID?: SortOrder;
    vat?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    address_city?: SortOrderInput | SortOrder;
    address_zip?: SortOrderInput | SortOrder;
    address_combined?: SortOrderInput | SortOrder;
    del?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    ID_salesman?: SortOrderInput | SortOrder;
    ID_branch?: SortOrderInput | SortOrder;
    seasonal?: SortOrderInput | SortOrder;
    sms_group?: SortOrderInput | SortOrder;
    business_name?: SortOrderInput | SortOrder;
    UNAS_customer_group_ID?: SortOrderInput | SortOrder;
    discount_group_id?: SortOrderInput | SortOrder;
    discount_percentage?: SortOrderInput | SortOrder;
    teruleti_id?: SortOrderInput | SortOrder;
    _count?: ClientCountOrderByAggregateInput;
    _avg?: ClientAvgOrderByAggregateInput;
    _max?: ClientMaxOrderByAggregateInput;
    _min?: ClientMinOrderByAggregateInput;
    _sum?: ClientSumOrderByAggregateInput;
  };

  export type ClientScalarWhereWithAggregatesInput = {
    AND?:
      | ClientScalarWhereWithAggregatesInput
      | ClientScalarWhereWithAggregatesInput[];
    OR?: ClientScalarWhereWithAggregatesInput[];
    NOT?:
      | ClientScalarWhereWithAggregatesInput
      | ClientScalarWhereWithAggregatesInput[];
    ID?: IntWithAggregatesFilter<'Client'> | number;
    vat?: StringNullableWithAggregatesFilter<'Client'> | string | null;
    name?: StringNullableWithAggregatesFilter<'Client'> | string | null;
    address_city?: StringNullableWithAggregatesFilter<'Client'> | string | null;
    address_zip?: StringNullableWithAggregatesFilter<'Client'> | string | null;
    address_combined?:
      | StringNullableWithAggregatesFilter<'Client'>
      | string
      | null;
    del?: BoolNullableWithAggregatesFilter<'Client'> | boolean | null;
    email?: StringNullableWithAggregatesFilter<'Client'> | string | null;
    ID_salesman?: IntNullableWithAggregatesFilter<'Client'> | number | null;
    ID_branch?: StringNullableWithAggregatesFilter<'Client'> | string | null;
    seasonal?: StringNullableWithAggregatesFilter<'Client'> | string | null;
    sms_group?: IntNullableWithAggregatesFilter<'Client'> | number | null;
    business_name?:
      | StringNullableWithAggregatesFilter<'Client'>
      | string
      | null;
    UNAS_customer_group_ID?:
      | IntNullableWithAggregatesFilter<'Client'>
      | number
      | null;
    discount_group_id?:
      | IntNullableWithAggregatesFilter<'Client'>
      | number
      | null;
    discount_percentage?:
      | FloatNullableWithAggregatesFilter<'Client'>
      | number
      | null;
    teruleti_id?: IntNullableWithAggregatesFilter<'Client'> | number | null;
  };

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[];
    OR?: OrderWhereInput[];
    NOT?: OrderWhereInput | OrderWhereInput[];
    sorszam?: StringFilter<'Order'> | string;
    telj?: DateTimeNullableFilter<'Order'> | Date | string | null;
    kelt?: DateTimeNullableFilter<'Order'> | Date | string | null;
    vevokod?: IntNullableFilter<'Order'> | number | null;
    vevo?: StringNullableFilter<'Order'> | string | null;
    city?: StringNullableFilter<'Order'> | string | null;
    address?: StringNullableFilter<'Order'> | string | null;
    zip?: StringNullableFilter<'Order'> | string | null;
    del?: BoolFilter<'Order'> | boolean;
    deleted_by?: StringNullableFilter<'Order'> | string | null;
    delete_comment?: StringNullableFilter<'Order'> | string | null;
    orderItems?: OrderItemListRelationFilter;
  };

  export type OrderOrderByWithRelationInput = {
    sorszam?: SortOrder;
    telj?: SortOrderInput | SortOrder;
    kelt?: SortOrderInput | SortOrder;
    vevokod?: SortOrderInput | SortOrder;
    vevo?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    del?: SortOrder;
    deleted_by?: SortOrderInput | SortOrder;
    delete_comment?: SortOrderInput | SortOrder;
    orderItems?: OrderItemOrderByRelationAggregateInput;
    _relevance?: OrderOrderByRelevanceInput;
  };

  export type OrderWhereUniqueInput = Prisma.AtLeast<
    {
      sorszam?: string;
      AND?: OrderWhereInput | OrderWhereInput[];
      OR?: OrderWhereInput[];
      NOT?: OrderWhereInput | OrderWhereInput[];
      telj?: DateTimeNullableFilter<'Order'> | Date | string | null;
      kelt?: DateTimeNullableFilter<'Order'> | Date | string | null;
      vevokod?: IntNullableFilter<'Order'> | number | null;
      vevo?: StringNullableFilter<'Order'> | string | null;
      city?: StringNullableFilter<'Order'> | string | null;
      address?: StringNullableFilter<'Order'> | string | null;
      zip?: StringNullableFilter<'Order'> | string | null;
      del?: BoolFilter<'Order'> | boolean;
      deleted_by?: StringNullableFilter<'Order'> | string | null;
      delete_comment?: StringNullableFilter<'Order'> | string | null;
      orderItems?: OrderItemListRelationFilter;
    },
    'sorszam'
  >;

  export type OrderOrderByWithAggregationInput = {
    sorszam?: SortOrder;
    telj?: SortOrderInput | SortOrder;
    kelt?: SortOrderInput | SortOrder;
    vevokod?: SortOrderInput | SortOrder;
    vevo?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    del?: SortOrder;
    deleted_by?: SortOrderInput | SortOrder;
    delete_comment?: SortOrderInput | SortOrder;
    _count?: OrderCountOrderByAggregateInput;
    _avg?: OrderAvgOrderByAggregateInput;
    _max?: OrderMaxOrderByAggregateInput;
    _min?: OrderMinOrderByAggregateInput;
    _sum?: OrderSumOrderByAggregateInput;
  };

  export type OrderScalarWhereWithAggregatesInput = {
    AND?:
      | OrderScalarWhereWithAggregatesInput
      | OrderScalarWhereWithAggregatesInput[];
    OR?: OrderScalarWhereWithAggregatesInput[];
    NOT?:
      | OrderScalarWhereWithAggregatesInput
      | OrderScalarWhereWithAggregatesInput[];
    sorszam?: StringWithAggregatesFilter<'Order'> | string;
    telj?: DateTimeNullableWithAggregatesFilter<'Order'> | Date | string | null;
    kelt?: DateTimeNullableWithAggregatesFilter<'Order'> | Date | string | null;
    vevokod?: IntNullableWithAggregatesFilter<'Order'> | number | null;
    vevo?: StringNullableWithAggregatesFilter<'Order'> | string | null;
    city?: StringNullableWithAggregatesFilter<'Order'> | string | null;
    address?: StringNullableWithAggregatesFilter<'Order'> | string | null;
    zip?: StringNullableWithAggregatesFilter<'Order'> | string | null;
    del?: BoolWithAggregatesFilter<'Order'> | boolean;
    deleted_by?: StringNullableWithAggregatesFilter<'Order'> | string | null;
    delete_comment?:
      | StringNullableWithAggregatesFilter<'Order'>
      | string
      | null;
  };

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[];
    OR?: OrderItemWhereInput[];
    NOT?: OrderItemWhereInput | OrderItemWhereInput[];
    unikazon?: StringFilter<'OrderItem'> | string;
    sorszam?: StringFilter<'OrderItem'> | string;
    mennyiseg?: FloatNullableFilter<'OrderItem'> | number | null;
    egyseg?: StringNullableFilter<'OrderItem'> | string | null;
    netto?: FloatNullableFilter<'OrderItem'> | number | null;
    brutto?: FloatNullableFilter<'OrderItem'> | number | null;
    cikkszam?: StringFilter<'OrderItem'> | string;
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
    recommendationUsages?: RecommendationUsageListRelationFilter;
  };

  export type OrderItemOrderByWithRelationInput = {
    unikazon?: SortOrder;
    sorszam?: SortOrder;
    mennyiseg?: SortOrderInput | SortOrder;
    egyseg?: SortOrderInput | SortOrder;
    netto?: SortOrderInput | SortOrder;
    brutto?: SortOrderInput | SortOrder;
    cikkszam?: SortOrder;
    order?: OrderOrderByWithRelationInput;
    recommendationUsages?: RecommendationUsageOrderByRelationAggregateInput;
    _relevance?: OrderItemOrderByRelevanceInput;
  };

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<
    {
      unikazon?: string;
      AND?: OrderItemWhereInput | OrderItemWhereInput[];
      OR?: OrderItemWhereInput[];
      NOT?: OrderItemWhereInput | OrderItemWhereInput[];
      sorszam?: StringFilter<'OrderItem'> | string;
      mennyiseg?: FloatNullableFilter<'OrderItem'> | number | null;
      egyseg?: StringNullableFilter<'OrderItem'> | string | null;
      netto?: FloatNullableFilter<'OrderItem'> | number | null;
      brutto?: FloatNullableFilter<'OrderItem'> | number | null;
      cikkszam?: StringFilter<'OrderItem'> | string;
      order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
      recommendationUsages?: RecommendationUsageListRelationFilter;
    },
    'unikazon'
  >;

  export type OrderItemOrderByWithAggregationInput = {
    unikazon?: SortOrder;
    sorszam?: SortOrder;
    mennyiseg?: SortOrderInput | SortOrder;
    egyseg?: SortOrderInput | SortOrder;
    netto?: SortOrderInput | SortOrder;
    brutto?: SortOrderInput | SortOrder;
    cikkszam?: SortOrder;
    _count?: OrderItemCountOrderByAggregateInput;
    _avg?: OrderItemAvgOrderByAggregateInput;
    _max?: OrderItemMaxOrderByAggregateInput;
    _min?: OrderItemMinOrderByAggregateInput;
    _sum?: OrderItemSumOrderByAggregateInput;
  };

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?:
      | OrderItemScalarWhereWithAggregatesInput
      | OrderItemScalarWhereWithAggregatesInput[];
    OR?: OrderItemScalarWhereWithAggregatesInput[];
    NOT?:
      | OrderItemScalarWhereWithAggregatesInput
      | OrderItemScalarWhereWithAggregatesInput[];
    unikazon?: StringWithAggregatesFilter<'OrderItem'> | string;
    sorszam?: StringWithAggregatesFilter<'OrderItem'> | string;
    mennyiseg?: FloatNullableWithAggregatesFilter<'OrderItem'> | number | null;
    egyseg?: StringNullableWithAggregatesFilter<'OrderItem'> | string | null;
    netto?: FloatNullableWithAggregatesFilter<'OrderItem'> | number | null;
    brutto?: FloatNullableWithAggregatesFilter<'OrderItem'> | number | null;
    cikkszam?: StringWithAggregatesFilter<'OrderItem'> | string;
  };

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[];
    OR?: RecommendationWhereInput[];
    NOT?: RecommendationWhereInput | RecommendationWhereInput[];
    id?: IntFilter<'Recommendation'> | number;
    client_id?: IntFilter<'Recommendation'> | number;
    arukod?: IntFilter<'Recommendation'> | number;
    recommended_by?: IntFilter<'Recommendation'> | number;
    recommendation_price?:
      | DecimalFilter<'Recommendation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFilter<'Recommendation'> | Date | string;
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    recommendationUsages?: RecommendationUsageListRelationFilter;
  };

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    arukod?: SortOrder;
    recommended_by?: SortOrder;
    recommendation_price?: SortOrder;
    recommended_at?: SortOrder;
    client?: ClientOrderByWithRelationInput;
    item?: ItemOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
    recommendationUsages?: RecommendationUsageOrderByRelationAggregateInput;
  };

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: RecommendationWhereInput | RecommendationWhereInput[];
      OR?: RecommendationWhereInput[];
      NOT?: RecommendationWhereInput | RecommendationWhereInput[];
      client_id?: IntFilter<'Recommendation'> | number;
      arukod?: IntFilter<'Recommendation'> | number;
      recommended_by?: IntFilter<'Recommendation'> | number;
      recommendation_price?:
        | DecimalFilter<'Recommendation'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      recommended_at?: DateTimeFilter<'Recommendation'> | Date | string;
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
      item?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      recommendationUsages?: RecommendationUsageListRelationFilter;
    },
    'id'
  >;

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    arukod?: SortOrder;
    recommended_by?: SortOrder;
    recommendation_price?: SortOrder;
    recommended_at?: SortOrder;
    _count?: RecommendationCountOrderByAggregateInput;
    _avg?: RecommendationAvgOrderByAggregateInput;
    _max?: RecommendationMaxOrderByAggregateInput;
    _min?: RecommendationMinOrderByAggregateInput;
    _sum?: RecommendationSumOrderByAggregateInput;
  };

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?:
      | RecommendationScalarWhereWithAggregatesInput
      | RecommendationScalarWhereWithAggregatesInput[];
    OR?: RecommendationScalarWhereWithAggregatesInput[];
    NOT?:
      | RecommendationScalarWhereWithAggregatesInput
      | RecommendationScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Recommendation'> | number;
    client_id?: IntWithAggregatesFilter<'Recommendation'> | number;
    arukod?: IntWithAggregatesFilter<'Recommendation'> | number;
    recommended_by?: IntWithAggregatesFilter<'Recommendation'> | number;
    recommendation_price?:
      | DecimalWithAggregatesFilter<'Recommendation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?:
      | DateTimeWithAggregatesFilter<'Recommendation'>
      | Date
      | string;
  };

  export type RecommendationUsageWhereInput = {
    AND?: RecommendationUsageWhereInput | RecommendationUsageWhereInput[];
    OR?: RecommendationUsageWhereInput[];
    NOT?: RecommendationUsageWhereInput | RecommendationUsageWhereInput[];
    id?: IntFilter<'RecommendationUsage'> | number;
    recommendation_id?: IntFilter<'RecommendationUsage'> | number;
    order_item_id?: StringFilter<'RecommendationUsage'> | string;
    confirmed_by?: IntFilter<'RecommendationUsage'> | number;
    is_rec_by_sales?: BoolFilter<'RecommendationUsage'> | boolean;
    is_influenced?: BoolFilter<'RecommendationUsage'> | boolean;
    created_at?: DateTimeFilter<'RecommendationUsage'> | Date | string;
    recommendation?: XOR<
      RecommendationScalarRelationFilter,
      RecommendationWhereInput
    >;
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type RecommendationUsageOrderByWithRelationInput = {
    id?: SortOrder;
    recommendation_id?: SortOrder;
    order_item_id?: SortOrder;
    confirmed_by?: SortOrder;
    is_rec_by_sales?: SortOrder;
    is_influenced?: SortOrder;
    created_at?: SortOrder;
    recommendation?: RecommendationOrderByWithRelationInput;
    orderItem?: OrderItemOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
    _relevance?: RecommendationUsageOrderByRelevanceInput;
  };

  export type RecommendationUsageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: RecommendationUsageWhereInput | RecommendationUsageWhereInput[];
      OR?: RecommendationUsageWhereInput[];
      NOT?: RecommendationUsageWhereInput | RecommendationUsageWhereInput[];
      recommendation_id?: IntFilter<'RecommendationUsage'> | number;
      order_item_id?: StringFilter<'RecommendationUsage'> | string;
      confirmed_by?: IntFilter<'RecommendationUsage'> | number;
      is_rec_by_sales?: BoolFilter<'RecommendationUsage'> | boolean;
      is_influenced?: BoolFilter<'RecommendationUsage'> | boolean;
      created_at?: DateTimeFilter<'RecommendationUsage'> | Date | string;
      recommendation?: XOR<
        RecommendationScalarRelationFilter,
        RecommendationWhereInput
      >;
      orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type RecommendationUsageOrderByWithAggregationInput = {
    id?: SortOrder;
    recommendation_id?: SortOrder;
    order_item_id?: SortOrder;
    confirmed_by?: SortOrder;
    is_rec_by_sales?: SortOrder;
    is_influenced?: SortOrder;
    created_at?: SortOrder;
    _count?: RecommendationUsageCountOrderByAggregateInput;
    _avg?: RecommendationUsageAvgOrderByAggregateInput;
    _max?: RecommendationUsageMaxOrderByAggregateInput;
    _min?: RecommendationUsageMinOrderByAggregateInput;
    _sum?: RecommendationUsageSumOrderByAggregateInput;
  };

  export type RecommendationUsageScalarWhereWithAggregatesInput = {
    AND?:
      | RecommendationUsageScalarWhereWithAggregatesInput
      | RecommendationUsageScalarWhereWithAggregatesInput[];
    OR?: RecommendationUsageScalarWhereWithAggregatesInput[];
    NOT?:
      | RecommendationUsageScalarWhereWithAggregatesInput
      | RecommendationUsageScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'RecommendationUsage'> | number;
    recommendation_id?: IntWithAggregatesFilter<'RecommendationUsage'> | number;
    order_item_id?: StringWithAggregatesFilter<'RecommendationUsage'> | string;
    confirmed_by?: IntWithAggregatesFilter<'RecommendationUsage'> | number;
    is_rec_by_sales?: BoolWithAggregatesFilter<'RecommendationUsage'> | boolean;
    is_influenced?: BoolWithAggregatesFilter<'RecommendationUsage'> | boolean;
    created_at?:
      | DateTimeWithAggregatesFilter<'RecommendationUsage'>
      | Date
      | string;
  };

  export type UserCreateInput = {
    password?: string | null;
    beosztas?: string | null;
    email?: string | null;
    salesperson?: boolean | null;
    ID_devices?: number | null;
    image?: string | null;
    username?: string | null;
    name?: string | null;
    recommendations?: RecommendationCreateNestedManyWithoutUserInput;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    password?: string | null;
    beosztas?: string | null;
    email?: string | null;
    salesperson?: boolean | null;
    ID_devices?: number | null;
    image?: string | null;
    username?: string | null;
    name?: string | null;
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    password?: string | null;
    beosztas?: string | null;
    email?: string | null;
    salesperson?: boolean | null;
    ID_devices?: number | null;
    image?: string | null;
    username?: string | null;
    name?: string | null;
  };

  export type UserUpdateManyMutationInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ItemCreateInput = {
    arukod: number;
    megnev?: string | null;
    csoport?: string | null;
    cikkszam: string;
    has_ready_to_cook_variants?: boolean | null;
    ear?: Decimal | DecimalJsLike | number | string | null;
    ear4?: Decimal | DecimalJsLike | number | string | null;
    ear3?: Decimal | DecimalJsLike | number | string | null;
    ear1?: Decimal | DecimalJsLike | number | string | null;
    tipus?: number;
    new?: boolean | null;
    keszlet?: number | null;
    batch?: number | null;
    unit?: number | null;
    uom?: string | null;
    passziv?: boolean | null;
    fix?: boolean;
    fix_name?: string | null;
    sold_in_batches?: boolean | null;
    hide_batch?: boolean | null;
    rendelheto?: boolean;
    search_blob?: string | null;
    custom_unit?: number | null;
    image?: string | null;
    vat?: number | null;
    recommendations?: RecommendationCreateNestedManyWithoutItemInput;
  };

  export type ItemUncheckedCreateInput = {
    arukod: number;
    megnev?: string | null;
    csoport?: string | null;
    cikkszam: string;
    has_ready_to_cook_variants?: boolean | null;
    ear?: Decimal | DecimalJsLike | number | string | null;
    ear4?: Decimal | DecimalJsLike | number | string | null;
    ear3?: Decimal | DecimalJsLike | number | string | null;
    ear1?: Decimal | DecimalJsLike | number | string | null;
    tipus?: number;
    new?: boolean | null;
    keszlet?: number | null;
    batch?: number | null;
    unit?: number | null;
    uom?: string | null;
    passziv?: boolean | null;
    fix?: boolean;
    fix_name?: string | null;
    sold_in_batches?: boolean | null;
    hide_batch?: boolean | null;
    rendelheto?: boolean;
    search_blob?: string | null;
    custom_unit?: number | null;
    image?: string | null;
    vat?: number | null;
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutItemInput;
  };

  export type ItemUpdateInput = {
    arukod?: IntFieldUpdateOperationsInput | number;
    megnev?: NullableStringFieldUpdateOperationsInput | string | null;
    csoport?: NullableStringFieldUpdateOperationsInput | string | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    has_ready_to_cook_variants?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null;
    ear?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntFieldUpdateOperationsInput | number;
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    keszlet?: NullableFloatFieldUpdateOperationsInput | number | null;
    batch?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    uom?: NullableStringFieldUpdateOperationsInput | string | null;
    passziv?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    fix?: BoolFieldUpdateOperationsInput | boolean;
    fix_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sold_in_batches?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    hide_batch?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    rendelheto?: BoolFieldUpdateOperationsInput | boolean;
    search_blob?: NullableStringFieldUpdateOperationsInput | string | null;
    custom_unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    vat?: NullableFloatFieldUpdateOperationsInput | number | null;
    recommendations?: RecommendationUpdateManyWithoutItemNestedInput;
  };

  export type ItemUncheckedUpdateInput = {
    arukod?: IntFieldUpdateOperationsInput | number;
    megnev?: NullableStringFieldUpdateOperationsInput | string | null;
    csoport?: NullableStringFieldUpdateOperationsInput | string | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    has_ready_to_cook_variants?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null;
    ear?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntFieldUpdateOperationsInput | number;
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    keszlet?: NullableFloatFieldUpdateOperationsInput | number | null;
    batch?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    uom?: NullableStringFieldUpdateOperationsInput | string | null;
    passziv?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    fix?: BoolFieldUpdateOperationsInput | boolean;
    fix_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sold_in_batches?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    hide_batch?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    rendelheto?: BoolFieldUpdateOperationsInput | boolean;
    search_blob?: NullableStringFieldUpdateOperationsInput | string | null;
    custom_unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    vat?: NullableFloatFieldUpdateOperationsInput | number | null;
    recommendations?: RecommendationUncheckedUpdateManyWithoutItemNestedInput;
  };

  export type ItemCreateManyInput = {
    arukod: number;
    megnev?: string | null;
    csoport?: string | null;
    cikkszam: string;
    has_ready_to_cook_variants?: boolean | null;
    ear?: Decimal | DecimalJsLike | number | string | null;
    ear4?: Decimal | DecimalJsLike | number | string | null;
    ear3?: Decimal | DecimalJsLike | number | string | null;
    ear1?: Decimal | DecimalJsLike | number | string | null;
    tipus?: number;
    new?: boolean | null;
    keszlet?: number | null;
    batch?: number | null;
    unit?: number | null;
    uom?: string | null;
    passziv?: boolean | null;
    fix?: boolean;
    fix_name?: string | null;
    sold_in_batches?: boolean | null;
    hide_batch?: boolean | null;
    rendelheto?: boolean;
    search_blob?: string | null;
    custom_unit?: number | null;
    image?: string | null;
    vat?: number | null;
  };

  export type ItemUpdateManyMutationInput = {
    arukod?: IntFieldUpdateOperationsInput | number;
    megnev?: NullableStringFieldUpdateOperationsInput | string | null;
    csoport?: NullableStringFieldUpdateOperationsInput | string | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    has_ready_to_cook_variants?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null;
    ear?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntFieldUpdateOperationsInput | number;
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    keszlet?: NullableFloatFieldUpdateOperationsInput | number | null;
    batch?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    uom?: NullableStringFieldUpdateOperationsInput | string | null;
    passziv?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    fix?: BoolFieldUpdateOperationsInput | boolean;
    fix_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sold_in_batches?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    hide_batch?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    rendelheto?: BoolFieldUpdateOperationsInput | boolean;
    search_blob?: NullableStringFieldUpdateOperationsInput | string | null;
    custom_unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    vat?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type ItemUncheckedUpdateManyInput = {
    arukod?: IntFieldUpdateOperationsInput | number;
    megnev?: NullableStringFieldUpdateOperationsInput | string | null;
    csoport?: NullableStringFieldUpdateOperationsInput | string | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    has_ready_to_cook_variants?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null;
    ear?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntFieldUpdateOperationsInput | number;
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    keszlet?: NullableFloatFieldUpdateOperationsInput | number | null;
    batch?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    uom?: NullableStringFieldUpdateOperationsInput | string | null;
    passziv?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    fix?: BoolFieldUpdateOperationsInput | boolean;
    fix_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sold_in_batches?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    hide_batch?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    rendelheto?: BoolFieldUpdateOperationsInput | boolean;
    search_blob?: NullableStringFieldUpdateOperationsInput | string | null;
    custom_unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    vat?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type ClientCreateInput = {
    ID: number;
    vat?: string | null;
    name?: string | null;
    address_city?: string | null;
    address_zip?: string | null;
    address_combined?: string | null;
    del?: boolean | null;
    email?: string | null;
    ID_salesman?: number | null;
    ID_branch?: string | null;
    seasonal?: string | null;
    sms_group?: number | null;
    business_name?: string | null;
    UNAS_customer_group_ID?: number | null;
    discount_group_id?: number | null;
    discount_percentage?: number | null;
    teruleti_id?: number | null;
    recommendations?: RecommendationCreateNestedManyWithoutClientInput;
  };

  export type ClientUncheckedCreateInput = {
    ID: number;
    vat?: string | null;
    name?: string | null;
    address_city?: string | null;
    address_zip?: string | null;
    address_combined?: string | null;
    del?: boolean | null;
    email?: string | null;
    ID_salesman?: number | null;
    ID_branch?: string | null;
    seasonal?: string | null;
    sms_group?: number | null;
    business_name?: string | null;
    UNAS_customer_group_ID?: number | null;
    discount_group_id?: number | null;
    discount_percentage?: number | null;
    teruleti_id?: number | null;
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number;
    vat?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    address_city?: NullableStringFieldUpdateOperationsInput | string | null;
    address_zip?: NullableStringFieldUpdateOperationsInput | string | null;
    address_combined?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    ID_salesman?: NullableIntFieldUpdateOperationsInput | number | null;
    ID_branch?: NullableStringFieldUpdateOperationsInput | string | null;
    seasonal?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_group?: NullableIntFieldUpdateOperationsInput | number | null;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    UNAS_customer_group_ID?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    discount_group_id?: NullableIntFieldUpdateOperationsInput | number | null;
    discount_percentage?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    teruleti_id?: NullableIntFieldUpdateOperationsInput | number | null;
    recommendations?: RecommendationUpdateManyWithoutClientNestedInput;
  };

  export type ClientUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number;
    vat?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    address_city?: NullableStringFieldUpdateOperationsInput | string | null;
    address_zip?: NullableStringFieldUpdateOperationsInput | string | null;
    address_combined?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    ID_salesman?: NullableIntFieldUpdateOperationsInput | number | null;
    ID_branch?: NullableStringFieldUpdateOperationsInput | string | null;
    seasonal?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_group?: NullableIntFieldUpdateOperationsInput | number | null;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    UNAS_customer_group_ID?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    discount_group_id?: NullableIntFieldUpdateOperationsInput | number | null;
    discount_percentage?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    teruleti_id?: NullableIntFieldUpdateOperationsInput | number | null;
    recommendations?: RecommendationUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateManyInput = {
    ID: number;
    vat?: string | null;
    name?: string | null;
    address_city?: string | null;
    address_zip?: string | null;
    address_combined?: string | null;
    del?: boolean | null;
    email?: string | null;
    ID_salesman?: number | null;
    ID_branch?: string | null;
    seasonal?: string | null;
    sms_group?: number | null;
    business_name?: string | null;
    UNAS_customer_group_ID?: number | null;
    discount_group_id?: number | null;
    discount_percentage?: number | null;
    teruleti_id?: number | null;
  };

  export type ClientUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number;
    vat?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    address_city?: NullableStringFieldUpdateOperationsInput | string | null;
    address_zip?: NullableStringFieldUpdateOperationsInput | string | null;
    address_combined?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    ID_salesman?: NullableIntFieldUpdateOperationsInput | number | null;
    ID_branch?: NullableStringFieldUpdateOperationsInput | string | null;
    seasonal?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_group?: NullableIntFieldUpdateOperationsInput | number | null;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    UNAS_customer_group_ID?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    discount_group_id?: NullableIntFieldUpdateOperationsInput | number | null;
    discount_percentage?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    teruleti_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ClientUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number;
    vat?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    address_city?: NullableStringFieldUpdateOperationsInput | string | null;
    address_zip?: NullableStringFieldUpdateOperationsInput | string | null;
    address_combined?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    ID_salesman?: NullableIntFieldUpdateOperationsInput | number | null;
    ID_branch?: NullableStringFieldUpdateOperationsInput | string | null;
    seasonal?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_group?: NullableIntFieldUpdateOperationsInput | number | null;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    UNAS_customer_group_ID?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    discount_group_id?: NullableIntFieldUpdateOperationsInput | number | null;
    discount_percentage?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    teruleti_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type OrderCreateInput = {
    sorszam: string;
    telj?: Date | string | null;
    kelt?: Date | string | null;
    vevokod?: number | null;
    vevo?: string | null;
    city?: string | null;
    address?: string | null;
    zip?: string | null;
    del?: boolean;
    deleted_by?: string | null;
    delete_comment?: string | null;
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateInput = {
    sorszam: string;
    telj?: Date | string | null;
    kelt?: Date | string | null;
    vevokod?: number | null;
    vevo?: string | null;
    city?: string | null;
    address?: string | null;
    zip?: string | null;
    del?: boolean;
    deleted_by?: string | null;
    delete_comment?: string | null;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderUpdateInput = {
    sorszam?: StringFieldUpdateOperationsInput | string;
    telj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vevokod?: NullableIntFieldUpdateOperationsInput | number | null;
    vevo?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: BoolFieldUpdateOperationsInput | boolean;
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_comment?: NullableStringFieldUpdateOperationsInput | string | null;
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateInput = {
    sorszam?: StringFieldUpdateOperationsInput | string;
    telj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vevokod?: NullableIntFieldUpdateOperationsInput | number | null;
    vevo?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: BoolFieldUpdateOperationsInput | boolean;
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_comment?: NullableStringFieldUpdateOperationsInput | string | null;
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderCreateManyInput = {
    sorszam: string;
    telj?: Date | string | null;
    kelt?: Date | string | null;
    vevokod?: number | null;
    vevo?: string | null;
    city?: string | null;
    address?: string | null;
    zip?: string | null;
    del?: boolean;
    deleted_by?: string | null;
    delete_comment?: string | null;
  };

  export type OrderUpdateManyMutationInput = {
    sorszam?: StringFieldUpdateOperationsInput | string;
    telj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vevokod?: NullableIntFieldUpdateOperationsInput | number | null;
    vevo?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: BoolFieldUpdateOperationsInput | boolean;
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_comment?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OrderUncheckedUpdateManyInput = {
    sorszam?: StringFieldUpdateOperationsInput | string;
    telj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vevokod?: NullableIntFieldUpdateOperationsInput | number | null;
    vevo?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: BoolFieldUpdateOperationsInput | boolean;
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_comment?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OrderItemCreateInput = {
    unikazon: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
    order: OrderCreateNestedOneWithoutOrderItemsInput;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutOrderItemInput;
  };

  export type OrderItemUncheckedCreateInput = {
    unikazon: string;
    sorszam: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutOrderItemInput;
  };

  export type OrderItemUpdateInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutOrderItemNestedInput;
  };

  export type OrderItemUncheckedUpdateInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    sorszam?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutOrderItemNestedInput;
  };

  export type OrderItemCreateManyInput = {
    unikazon: string;
    sorszam: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
  };

  export type OrderItemUpdateManyMutationInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
  };

  export type OrderItemUncheckedUpdateManyInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    sorszam?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
  };

  export type RecommendationCreateInput = {
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    client: ClientCreateNestedOneWithoutRecommendationsInput;
    item: ItemCreateNestedOneWithoutRecommendationsInput;
    user: UserCreateNestedOneWithoutRecommendationsInput;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationUncheckedCreateInput = {
    id?: number;
    client_id: number;
    arukod: number;
    recommended_by: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationUpdateInput = {
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutRecommendationsNestedInput;
    item?: ItemUpdateOneRequiredWithoutRecommendationsNestedInput;
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    client_id?: IntFieldUpdateOperationsInput | number;
    arukod?: IntFieldUpdateOperationsInput | number;
    recommended_by?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationCreateManyInput = {
    id?: number;
    client_id: number;
    arukod: number;
    recommended_by: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
  };

  export type RecommendationUpdateManyMutationInput = {
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    client_id?: IntFieldUpdateOperationsInput | number;
    arukod?: IntFieldUpdateOperationsInput | number;
    recommended_by?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageCreateInput = {
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
    recommendation: RecommendationCreateNestedOneWithoutRecommendationUsagesInput;
    orderItem: OrderItemCreateNestedOneWithoutRecommendationUsagesInput;
    user: UserCreateNestedOneWithoutRecommendationUsagesInput;
  };

  export type RecommendationUsageUncheckedCreateInput = {
    id?: number;
    recommendation_id: number;
    order_item_id: string;
    confirmed_by: number;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUsageUpdateInput = {
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recommendation?: RecommendationUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
    orderItem?: OrderItemUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
    user?: UserUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
  };

  export type RecommendationUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    recommendation_id?: IntFieldUpdateOperationsInput | number;
    order_item_id?: StringFieldUpdateOperationsInput | string;
    confirmed_by?: IntFieldUpdateOperationsInput | number;
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageCreateManyInput = {
    id?: number;
    recommendation_id: number;
    order_item_id: string;
    confirmed_by: number;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUsageUpdateManyMutationInput = {
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    recommendation_id?: IntFieldUpdateOperationsInput | number;
    order_item_id?: StringFieldUpdateOperationsInput | string;
    confirmed_by?: IntFieldUpdateOperationsInput | number;
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput;
    some?: RecommendationWhereInput;
    none?: RecommendationWhereInput;
  };

  export type RecommendationUsageListRelationFilter = {
    every?: RecommendationUsageWhereInput;
    some?: RecommendationUsageWhereInput;
    none?: RecommendationUsageWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RecommendationUsageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    password?: SortOrder;
    beosztas?: SortOrder;
    email?: SortOrder;
    salesperson?: SortOrder;
    ID_devices?: SortOrder;
    image?: SortOrder;
    username?: SortOrder;
    name?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
    ID_devices?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    password?: SortOrder;
    beosztas?: SortOrder;
    email?: SortOrder;
    salesperson?: SortOrder;
    ID_devices?: SortOrder;
    image?: SortOrder;
    username?: SortOrder;
    name?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    password?: SortOrder;
    beosztas?: SortOrder;
    email?: SortOrder;
    salesperson?: SortOrder;
    ID_devices?: SortOrder;
    image?: SortOrder;
    username?: SortOrder;
    name?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
    ID_devices?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type ItemOrderByRelevanceInput = {
    fields: ItemOrderByRelevanceFieldEnum | ItemOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ItemCountOrderByAggregateInput = {
    arukod?: SortOrder;
    megnev?: SortOrder;
    csoport?: SortOrder;
    cikkszam?: SortOrder;
    has_ready_to_cook_variants?: SortOrder;
    ear?: SortOrder;
    ear4?: SortOrder;
    ear3?: SortOrder;
    ear1?: SortOrder;
    tipus?: SortOrder;
    new?: SortOrder;
    keszlet?: SortOrder;
    batch?: SortOrder;
    unit?: SortOrder;
    uom?: SortOrder;
    passziv?: SortOrder;
    fix?: SortOrder;
    fix_name?: SortOrder;
    sold_in_batches?: SortOrder;
    hide_batch?: SortOrder;
    rendelheto?: SortOrder;
    search_blob?: SortOrder;
    custom_unit?: SortOrder;
    image?: SortOrder;
    vat?: SortOrder;
  };

  export type ItemAvgOrderByAggregateInput = {
    arukod?: SortOrder;
    ear?: SortOrder;
    ear4?: SortOrder;
    ear3?: SortOrder;
    ear1?: SortOrder;
    tipus?: SortOrder;
    keszlet?: SortOrder;
    batch?: SortOrder;
    unit?: SortOrder;
    custom_unit?: SortOrder;
    vat?: SortOrder;
  };

  export type ItemMaxOrderByAggregateInput = {
    arukod?: SortOrder;
    megnev?: SortOrder;
    csoport?: SortOrder;
    cikkszam?: SortOrder;
    has_ready_to_cook_variants?: SortOrder;
    ear?: SortOrder;
    ear4?: SortOrder;
    ear3?: SortOrder;
    ear1?: SortOrder;
    tipus?: SortOrder;
    new?: SortOrder;
    keszlet?: SortOrder;
    batch?: SortOrder;
    unit?: SortOrder;
    uom?: SortOrder;
    passziv?: SortOrder;
    fix?: SortOrder;
    fix_name?: SortOrder;
    sold_in_batches?: SortOrder;
    hide_batch?: SortOrder;
    rendelheto?: SortOrder;
    search_blob?: SortOrder;
    custom_unit?: SortOrder;
    image?: SortOrder;
    vat?: SortOrder;
  };

  export type ItemMinOrderByAggregateInput = {
    arukod?: SortOrder;
    megnev?: SortOrder;
    csoport?: SortOrder;
    cikkszam?: SortOrder;
    has_ready_to_cook_variants?: SortOrder;
    ear?: SortOrder;
    ear4?: SortOrder;
    ear3?: SortOrder;
    ear1?: SortOrder;
    tipus?: SortOrder;
    new?: SortOrder;
    keszlet?: SortOrder;
    batch?: SortOrder;
    unit?: SortOrder;
    uom?: SortOrder;
    passziv?: SortOrder;
    fix?: SortOrder;
    fix_name?: SortOrder;
    sold_in_batches?: SortOrder;
    hide_batch?: SortOrder;
    rendelheto?: SortOrder;
    search_blob?: SortOrder;
    custom_unit?: SortOrder;
    image?: SortOrder;
    vat?: SortOrder;
  };

  export type ItemSumOrderByAggregateInput = {
    arukod?: SortOrder;
    ear?: SortOrder;
    ear4?: SortOrder;
    ear3?: SortOrder;
    ear1?: SortOrder;
    tipus?: SortOrder;
    keszlet?: SortOrder;
    batch?: SortOrder;
    unit?: SortOrder;
    custom_unit?: SortOrder;
    vat?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type ClientOrderByRelevanceInput = {
    fields: ClientOrderByRelevanceFieldEnum | ClientOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ClientCountOrderByAggregateInput = {
    ID?: SortOrder;
    vat?: SortOrder;
    name?: SortOrder;
    address_city?: SortOrder;
    address_zip?: SortOrder;
    address_combined?: SortOrder;
    del?: SortOrder;
    email?: SortOrder;
    ID_salesman?: SortOrder;
    ID_branch?: SortOrder;
    seasonal?: SortOrder;
    sms_group?: SortOrder;
    business_name?: SortOrder;
    UNAS_customer_group_ID?: SortOrder;
    discount_group_id?: SortOrder;
    discount_percentage?: SortOrder;
    teruleti_id?: SortOrder;
  };

  export type ClientAvgOrderByAggregateInput = {
    ID?: SortOrder;
    ID_salesman?: SortOrder;
    sms_group?: SortOrder;
    UNAS_customer_group_ID?: SortOrder;
    discount_group_id?: SortOrder;
    discount_percentage?: SortOrder;
    teruleti_id?: SortOrder;
  };

  export type ClientMaxOrderByAggregateInput = {
    ID?: SortOrder;
    vat?: SortOrder;
    name?: SortOrder;
    address_city?: SortOrder;
    address_zip?: SortOrder;
    address_combined?: SortOrder;
    del?: SortOrder;
    email?: SortOrder;
    ID_salesman?: SortOrder;
    ID_branch?: SortOrder;
    seasonal?: SortOrder;
    sms_group?: SortOrder;
    business_name?: SortOrder;
    UNAS_customer_group_ID?: SortOrder;
    discount_group_id?: SortOrder;
    discount_percentage?: SortOrder;
    teruleti_id?: SortOrder;
  };

  export type ClientMinOrderByAggregateInput = {
    ID?: SortOrder;
    vat?: SortOrder;
    name?: SortOrder;
    address_city?: SortOrder;
    address_zip?: SortOrder;
    address_combined?: SortOrder;
    del?: SortOrder;
    email?: SortOrder;
    ID_salesman?: SortOrder;
    ID_branch?: SortOrder;
    seasonal?: SortOrder;
    sms_group?: SortOrder;
    business_name?: SortOrder;
    UNAS_customer_group_ID?: SortOrder;
    discount_group_id?: SortOrder;
    discount_percentage?: SortOrder;
    teruleti_id?: SortOrder;
  };

  export type ClientSumOrderByAggregateInput = {
    ID?: SortOrder;
    ID_salesman?: SortOrder;
    sms_group?: SortOrder;
    UNAS_customer_group_ID?: SortOrder;
    discount_group_id?: SortOrder;
    discount_percentage?: SortOrder;
    teruleti_id?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput;
    some?: OrderItemWhereInput;
    none?: OrderItemWhereInput;
  };

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type OrderCountOrderByAggregateInput = {
    sorszam?: SortOrder;
    telj?: SortOrder;
    kelt?: SortOrder;
    vevokod?: SortOrder;
    vevo?: SortOrder;
    city?: SortOrder;
    address?: SortOrder;
    zip?: SortOrder;
    del?: SortOrder;
    deleted_by?: SortOrder;
    delete_comment?: SortOrder;
  };

  export type OrderAvgOrderByAggregateInput = {
    vevokod?: SortOrder;
  };

  export type OrderMaxOrderByAggregateInput = {
    sorszam?: SortOrder;
    telj?: SortOrder;
    kelt?: SortOrder;
    vevokod?: SortOrder;
    vevo?: SortOrder;
    city?: SortOrder;
    address?: SortOrder;
    zip?: SortOrder;
    del?: SortOrder;
    deleted_by?: SortOrder;
    delete_comment?: SortOrder;
  };

  export type OrderMinOrderByAggregateInput = {
    sorszam?: SortOrder;
    telj?: SortOrder;
    kelt?: SortOrder;
    vevokod?: SortOrder;
    vevo?: SortOrder;
    city?: SortOrder;
    address?: SortOrder;
    zip?: SortOrder;
    del?: SortOrder;
    deleted_by?: SortOrder;
    delete_comment?: SortOrder;
  };

  export type OrderSumOrderByAggregateInput = {
    vevokod?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput;
    isNot?: OrderWhereInput;
  };

  export type OrderItemOrderByRelevanceInput = {
    fields:
      | OrderItemOrderByRelevanceFieldEnum
      | OrderItemOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type OrderItemCountOrderByAggregateInput = {
    unikazon?: SortOrder;
    sorszam?: SortOrder;
    mennyiseg?: SortOrder;
    egyseg?: SortOrder;
    netto?: SortOrder;
    brutto?: SortOrder;
    cikkszam?: SortOrder;
  };

  export type OrderItemAvgOrderByAggregateInput = {
    mennyiseg?: SortOrder;
    netto?: SortOrder;
    brutto?: SortOrder;
  };

  export type OrderItemMaxOrderByAggregateInput = {
    unikazon?: SortOrder;
    sorszam?: SortOrder;
    mennyiseg?: SortOrder;
    egyseg?: SortOrder;
    netto?: SortOrder;
    brutto?: SortOrder;
    cikkszam?: SortOrder;
  };

  export type OrderItemMinOrderByAggregateInput = {
    unikazon?: SortOrder;
    sorszam?: SortOrder;
    mennyiseg?: SortOrder;
    egyseg?: SortOrder;
    netto?: SortOrder;
    brutto?: SortOrder;
    cikkszam?: SortOrder;
  };

  export type OrderItemSumOrderByAggregateInput = {
    mennyiseg?: SortOrder;
    netto?: SortOrder;
    brutto?: SortOrder;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput;
    isNot?: ClientWhereInput;
  };

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput;
    isNot?: ItemWhereInput;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    arukod?: SortOrder;
    recommended_by?: SortOrder;
    recommendation_price?: SortOrder;
    recommended_at?: SortOrder;
  };

  export type RecommendationAvgOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    arukod?: SortOrder;
    recommended_by?: SortOrder;
    recommendation_price?: SortOrder;
  };

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    arukod?: SortOrder;
    recommended_by?: SortOrder;
    recommendation_price?: SortOrder;
    recommended_at?: SortOrder;
  };

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    arukod?: SortOrder;
    recommended_by?: SortOrder;
    recommendation_price?: SortOrder;
    recommended_at?: SortOrder;
  };

  export type RecommendationSumOrderByAggregateInput = {
    id?: SortOrder;
    client_id?: SortOrder;
    arukod?: SortOrder;
    recommended_by?: SortOrder;
    recommendation_price?: SortOrder;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type RecommendationScalarRelationFilter = {
    is?: RecommendationWhereInput;
    isNot?: RecommendationWhereInput;
  };

  export type OrderItemScalarRelationFilter = {
    is?: OrderItemWhereInput;
    isNot?: OrderItemWhereInput;
  };

  export type RecommendationUsageOrderByRelevanceInput = {
    fields:
      | RecommendationUsageOrderByRelevanceFieldEnum
      | RecommendationUsageOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type RecommendationUsageCountOrderByAggregateInput = {
    id?: SortOrder;
    recommendation_id?: SortOrder;
    order_item_id?: SortOrder;
    confirmed_by?: SortOrder;
    is_rec_by_sales?: SortOrder;
    is_influenced?: SortOrder;
    created_at?: SortOrder;
  };

  export type RecommendationUsageAvgOrderByAggregateInput = {
    id?: SortOrder;
    recommendation_id?: SortOrder;
    confirmed_by?: SortOrder;
  };

  export type RecommendationUsageMaxOrderByAggregateInput = {
    id?: SortOrder;
    recommendation_id?: SortOrder;
    order_item_id?: SortOrder;
    confirmed_by?: SortOrder;
    is_rec_by_sales?: SortOrder;
    is_influenced?: SortOrder;
    created_at?: SortOrder;
  };

  export type RecommendationUsageMinOrderByAggregateInput = {
    id?: SortOrder;
    recommendation_id?: SortOrder;
    order_item_id?: SortOrder;
    confirmed_by?: SortOrder;
    is_rec_by_sales?: SortOrder;
    is_influenced?: SortOrder;
    created_at?: SortOrder;
  };

  export type RecommendationUsageSumOrderByAggregateInput = {
    id?: SortOrder;
    recommendation_id?: SortOrder;
    confirmed_by?: SortOrder;
  };

  export type RecommendationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutUserInput,
          RecommendationUncheckedCreateWithoutUserInput
        >
      | RecommendationCreateWithoutUserInput[]
      | RecommendationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutUserInput
      | RecommendationCreateOrConnectWithoutUserInput[];
    createMany?: RecommendationCreateManyUserInputEnvelope;
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
  };

  export type RecommendationUsageCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutUserInput,
          RecommendationUsageUncheckedCreateWithoutUserInput
        >
      | RecommendationUsageCreateWithoutUserInput[]
      | RecommendationUsageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutUserInput
      | RecommendationUsageCreateOrConnectWithoutUserInput[];
    createMany?: RecommendationUsageCreateManyUserInputEnvelope;
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
  };

  export type RecommendationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutUserInput,
          RecommendationUncheckedCreateWithoutUserInput
        >
      | RecommendationCreateWithoutUserInput[]
      | RecommendationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutUserInput
      | RecommendationCreateOrConnectWithoutUserInput[];
    createMany?: RecommendationCreateManyUserInputEnvelope;
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
  };

  export type RecommendationUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutUserInput,
          RecommendationUsageUncheckedCreateWithoutUserInput
        >
      | RecommendationUsageCreateWithoutUserInput[]
      | RecommendationUsageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutUserInput
      | RecommendationUsageCreateOrConnectWithoutUserInput[];
    createMany?: RecommendationUsageCreateManyUserInputEnvelope;
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type RecommendationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutUserInput,
          RecommendationUncheckedCreateWithoutUserInput
        >
      | RecommendationCreateWithoutUserInput[]
      | RecommendationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutUserInput
      | RecommendationCreateOrConnectWithoutUserInput[];
    upsert?:
      | RecommendationUpsertWithWhereUniqueWithoutUserInput
      | RecommendationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RecommendationCreateManyUserInputEnvelope;
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    disconnect?:
      | RecommendationWhereUniqueInput
      | RecommendationWhereUniqueInput[];
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    update?:
      | RecommendationUpdateWithWhereUniqueWithoutUserInput
      | RecommendationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RecommendationUpdateManyWithWhereWithoutUserInput
      | RecommendationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | RecommendationScalarWhereInput
      | RecommendationScalarWhereInput[];
  };

  export type RecommendationUsageUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutUserInput,
          RecommendationUsageUncheckedCreateWithoutUserInput
        >
      | RecommendationUsageCreateWithoutUserInput[]
      | RecommendationUsageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutUserInput
      | RecommendationUsageCreateOrConnectWithoutUserInput[];
    upsert?:
      | RecommendationUsageUpsertWithWhereUniqueWithoutUserInput
      | RecommendationUsageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RecommendationUsageCreateManyUserInputEnvelope;
    set?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    disconnect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    delete?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    update?:
      | RecommendationUsageUpdateWithWhereUniqueWithoutUserInput
      | RecommendationUsageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RecommendationUsageUpdateManyWithWhereWithoutUserInput
      | RecommendationUsageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | RecommendationUsageScalarWhereInput
      | RecommendationUsageScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type RecommendationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutUserInput,
          RecommendationUncheckedCreateWithoutUserInput
        >
      | RecommendationCreateWithoutUserInput[]
      | RecommendationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutUserInput
      | RecommendationCreateOrConnectWithoutUserInput[];
    upsert?:
      | RecommendationUpsertWithWhereUniqueWithoutUserInput
      | RecommendationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RecommendationCreateManyUserInputEnvelope;
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    disconnect?:
      | RecommendationWhereUniqueInput
      | RecommendationWhereUniqueInput[];
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    update?:
      | RecommendationUpdateWithWhereUniqueWithoutUserInput
      | RecommendationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RecommendationUpdateManyWithWhereWithoutUserInput
      | RecommendationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | RecommendationScalarWhereInput
      | RecommendationScalarWhereInput[];
  };

  export type RecommendationUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutUserInput,
          RecommendationUsageUncheckedCreateWithoutUserInput
        >
      | RecommendationUsageCreateWithoutUserInput[]
      | RecommendationUsageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutUserInput
      | RecommendationUsageCreateOrConnectWithoutUserInput[];
    upsert?:
      | RecommendationUsageUpsertWithWhereUniqueWithoutUserInput
      | RecommendationUsageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RecommendationUsageCreateManyUserInputEnvelope;
    set?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    disconnect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    delete?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    update?:
      | RecommendationUsageUpdateWithWhereUniqueWithoutUserInput
      | RecommendationUsageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RecommendationUsageUpdateManyWithWhereWithoutUserInput
      | RecommendationUsageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | RecommendationUsageScalarWhereInput
      | RecommendationUsageScalarWhereInput[];
  };

  export type RecommendationCreateNestedManyWithoutItemInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutItemInput,
          RecommendationUncheckedCreateWithoutItemInput
        >
      | RecommendationCreateWithoutItemInput[]
      | RecommendationUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutItemInput
      | RecommendationCreateOrConnectWithoutItemInput[];
    createMany?: RecommendationCreateManyItemInputEnvelope;
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
  };

  export type RecommendationUncheckedCreateNestedManyWithoutItemInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutItemInput,
          RecommendationUncheckedCreateWithoutItemInput
        >
      | RecommendationCreateWithoutItemInput[]
      | RecommendationUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutItemInput
      | RecommendationCreateOrConnectWithoutItemInput[];
    createMany?: RecommendationCreateManyItemInputEnvelope;
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type RecommendationUpdateManyWithoutItemNestedInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutItemInput,
          RecommendationUncheckedCreateWithoutItemInput
        >
      | RecommendationCreateWithoutItemInput[]
      | RecommendationUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutItemInput
      | RecommendationCreateOrConnectWithoutItemInput[];
    upsert?:
      | RecommendationUpsertWithWhereUniqueWithoutItemInput
      | RecommendationUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: RecommendationCreateManyItemInputEnvelope;
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    disconnect?:
      | RecommendationWhereUniqueInput
      | RecommendationWhereUniqueInput[];
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    update?:
      | RecommendationUpdateWithWhereUniqueWithoutItemInput
      | RecommendationUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?:
      | RecommendationUpdateManyWithWhereWithoutItemInput
      | RecommendationUpdateManyWithWhereWithoutItemInput[];
    deleteMany?:
      | RecommendationScalarWhereInput
      | RecommendationScalarWhereInput[];
  };

  export type RecommendationUncheckedUpdateManyWithoutItemNestedInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutItemInput,
          RecommendationUncheckedCreateWithoutItemInput
        >
      | RecommendationCreateWithoutItemInput[]
      | RecommendationUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutItemInput
      | RecommendationCreateOrConnectWithoutItemInput[];
    upsert?:
      | RecommendationUpsertWithWhereUniqueWithoutItemInput
      | RecommendationUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: RecommendationCreateManyItemInputEnvelope;
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    disconnect?:
      | RecommendationWhereUniqueInput
      | RecommendationWhereUniqueInput[];
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    update?:
      | RecommendationUpdateWithWhereUniqueWithoutItemInput
      | RecommendationUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?:
      | RecommendationUpdateManyWithWhereWithoutItemInput
      | RecommendationUpdateManyWithWhereWithoutItemInput[];
    deleteMany?:
      | RecommendationScalarWhereInput
      | RecommendationScalarWhereInput[];
  };

  export type RecommendationCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutClientInput,
          RecommendationUncheckedCreateWithoutClientInput
        >
      | RecommendationCreateWithoutClientInput[]
      | RecommendationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutClientInput
      | RecommendationCreateOrConnectWithoutClientInput[];
    createMany?: RecommendationCreateManyClientInputEnvelope;
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
  };

  export type RecommendationUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutClientInput,
          RecommendationUncheckedCreateWithoutClientInput
        >
      | RecommendationCreateWithoutClientInput[]
      | RecommendationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutClientInput
      | RecommendationCreateOrConnectWithoutClientInput[];
    createMany?: RecommendationCreateManyClientInputEnvelope;
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
  };

  export type RecommendationUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutClientInput,
          RecommendationUncheckedCreateWithoutClientInput
        >
      | RecommendationCreateWithoutClientInput[]
      | RecommendationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutClientInput
      | RecommendationCreateOrConnectWithoutClientInput[];
    upsert?:
      | RecommendationUpsertWithWhereUniqueWithoutClientInput
      | RecommendationUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: RecommendationCreateManyClientInputEnvelope;
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    disconnect?:
      | RecommendationWhereUniqueInput
      | RecommendationWhereUniqueInput[];
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    update?:
      | RecommendationUpdateWithWhereUniqueWithoutClientInput
      | RecommendationUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | RecommendationUpdateManyWithWhereWithoutClientInput
      | RecommendationUpdateManyWithWhereWithoutClientInput[];
    deleteMany?:
      | RecommendationScalarWhereInput
      | RecommendationScalarWhereInput[];
  };

  export type RecommendationUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          RecommendationCreateWithoutClientInput,
          RecommendationUncheckedCreateWithoutClientInput
        >
      | RecommendationCreateWithoutClientInput[]
      | RecommendationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | RecommendationCreateOrConnectWithoutClientInput
      | RecommendationCreateOrConnectWithoutClientInput[];
    upsert?:
      | RecommendationUpsertWithWhereUniqueWithoutClientInput
      | RecommendationUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: RecommendationCreateManyClientInputEnvelope;
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    disconnect?:
      | RecommendationWhereUniqueInput
      | RecommendationWhereUniqueInput[];
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[];
    update?:
      | RecommendationUpdateWithWhereUniqueWithoutClientInput
      | RecommendationUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | RecommendationUpdateManyWithWhereWithoutClientInput
      | RecommendationUpdateManyWithWhereWithoutClientInput[];
    deleteMany?:
      | RecommendationScalarWhereInput
      | RecommendationScalarWhereInput[];
  };

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderItemCreateWithoutOrderInput,
          OrderItemUncheckedCreateWithoutOrderInput
        >
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemCreateOrConnectWithoutOrderInput
      | OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
  };

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderItemCreateWithoutOrderInput,
          OrderItemUncheckedCreateWithoutOrderInput
        >
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemCreateOrConnectWithoutOrderInput
      | OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderItemCreateWithoutOrderInput,
          OrderItemUncheckedCreateWithoutOrderInput
        >
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemCreateOrConnectWithoutOrderInput
      | OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    update?:
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderItemUpdateManyWithWhereWithoutOrderInput
      | OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
  };

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderItemCreateWithoutOrderInput,
          OrderItemUncheckedCreateWithoutOrderInput
        >
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemCreateOrConnectWithoutOrderInput
      | OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    update?:
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderItemUpdateManyWithWhereWithoutOrderInput
      | OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
  };

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<
      OrderCreateWithoutOrderItemsInput,
      OrderUncheckedCreateWithoutOrderItemsInput
    >;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;
    connect?: OrderWhereUniqueInput;
  };

  export type RecommendationUsageCreateNestedManyWithoutOrderItemInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutOrderItemInput,
          RecommendationUsageUncheckedCreateWithoutOrderItemInput
        >
      | RecommendationUsageCreateWithoutOrderItemInput[]
      | RecommendationUsageUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutOrderItemInput
      | RecommendationUsageCreateOrConnectWithoutOrderItemInput[];
    createMany?: RecommendationUsageCreateManyOrderItemInputEnvelope;
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
  };

  export type RecommendationUsageUncheckedCreateNestedManyWithoutOrderItemInput =
    {
      create?:
        | XOR<
            RecommendationUsageCreateWithoutOrderItemInput,
            RecommendationUsageUncheckedCreateWithoutOrderItemInput
          >
        | RecommendationUsageCreateWithoutOrderItemInput[]
        | RecommendationUsageUncheckedCreateWithoutOrderItemInput[];
      connectOrCreate?:
        | RecommendationUsageCreateOrConnectWithoutOrderItemInput
        | RecommendationUsageCreateOrConnectWithoutOrderItemInput[];
      createMany?: RecommendationUsageCreateManyOrderItemInputEnvelope;
      connect?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
    };

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<
      OrderCreateWithoutOrderItemsInput,
      OrderUncheckedCreateWithoutOrderItemsInput
    >;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;
    upsert?: OrderUpsertWithoutOrderItemsInput;
    connect?: OrderWhereUniqueInput;
    update?: XOR<
      XOR<
        OrderUpdateToOneWithWhereWithoutOrderItemsInput,
        OrderUpdateWithoutOrderItemsInput
      >,
      OrderUncheckedUpdateWithoutOrderItemsInput
    >;
  };

  export type RecommendationUsageUpdateManyWithoutOrderItemNestedInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutOrderItemInput,
          RecommendationUsageUncheckedCreateWithoutOrderItemInput
        >
      | RecommendationUsageCreateWithoutOrderItemInput[]
      | RecommendationUsageUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutOrderItemInput
      | RecommendationUsageCreateOrConnectWithoutOrderItemInput[];
    upsert?:
      | RecommendationUsageUpsertWithWhereUniqueWithoutOrderItemInput
      | RecommendationUsageUpsertWithWhereUniqueWithoutOrderItemInput[];
    createMany?: RecommendationUsageCreateManyOrderItemInputEnvelope;
    set?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    disconnect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    delete?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    update?:
      | RecommendationUsageUpdateWithWhereUniqueWithoutOrderItemInput
      | RecommendationUsageUpdateWithWhereUniqueWithoutOrderItemInput[];
    updateMany?:
      | RecommendationUsageUpdateManyWithWhereWithoutOrderItemInput
      | RecommendationUsageUpdateManyWithWhereWithoutOrderItemInput[];
    deleteMany?:
      | RecommendationUsageScalarWhereInput
      | RecommendationUsageScalarWhereInput[];
  };

  export type RecommendationUsageUncheckedUpdateManyWithoutOrderItemNestedInput =
    {
      create?:
        | XOR<
            RecommendationUsageCreateWithoutOrderItemInput,
            RecommendationUsageUncheckedCreateWithoutOrderItemInput
          >
        | RecommendationUsageCreateWithoutOrderItemInput[]
        | RecommendationUsageUncheckedCreateWithoutOrderItemInput[];
      connectOrCreate?:
        | RecommendationUsageCreateOrConnectWithoutOrderItemInput
        | RecommendationUsageCreateOrConnectWithoutOrderItemInput[];
      upsert?:
        | RecommendationUsageUpsertWithWhereUniqueWithoutOrderItemInput
        | RecommendationUsageUpsertWithWhereUniqueWithoutOrderItemInput[];
      createMany?: RecommendationUsageCreateManyOrderItemInputEnvelope;
      set?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      disconnect?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      delete?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      connect?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      update?:
        | RecommendationUsageUpdateWithWhereUniqueWithoutOrderItemInput
        | RecommendationUsageUpdateWithWhereUniqueWithoutOrderItemInput[];
      updateMany?:
        | RecommendationUsageUpdateManyWithWhereWithoutOrderItemInput
        | RecommendationUsageUpdateManyWithWhereWithoutOrderItemInput[];
      deleteMany?:
        | RecommendationUsageScalarWhereInput
        | RecommendationUsageScalarWhereInput[];
    };

  export type ClientCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<
      ClientCreateWithoutRecommendationsInput,
      ClientUncheckedCreateWithoutRecommendationsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutRecommendationsInput;
    connect?: ClientWhereUniqueInput;
  };

  export type ItemCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<
      ItemCreateWithoutRecommendationsInput,
      ItemUncheckedCreateWithoutRecommendationsInput
    >;
    connectOrCreate?: ItemCreateOrConnectWithoutRecommendationsInput;
    connect?: ItemWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<
      UserCreateWithoutRecommendationsInput,
      UserUncheckedCreateWithoutRecommendationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type RecommendationUsageCreateNestedManyWithoutRecommendationInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutRecommendationInput,
          RecommendationUsageUncheckedCreateWithoutRecommendationInput
        >
      | RecommendationUsageCreateWithoutRecommendationInput[]
      | RecommendationUsageUncheckedCreateWithoutRecommendationInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutRecommendationInput
      | RecommendationUsageCreateOrConnectWithoutRecommendationInput[];
    createMany?: RecommendationUsageCreateManyRecommendationInputEnvelope;
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
  };

  export type RecommendationUsageUncheckedCreateNestedManyWithoutRecommendationInput =
    {
      create?:
        | XOR<
            RecommendationUsageCreateWithoutRecommendationInput,
            RecommendationUsageUncheckedCreateWithoutRecommendationInput
          >
        | RecommendationUsageCreateWithoutRecommendationInput[]
        | RecommendationUsageUncheckedCreateWithoutRecommendationInput[];
      connectOrCreate?:
        | RecommendationUsageCreateOrConnectWithoutRecommendationInput
        | RecommendationUsageCreateOrConnectWithoutRecommendationInput[];
      createMany?: RecommendationUsageCreateManyRecommendationInputEnvelope;
      connect?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
    };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ClientUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<
      ClientCreateWithoutRecommendationsInput,
      ClientUncheckedCreateWithoutRecommendationsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutRecommendationsInput;
    upsert?: ClientUpsertWithoutRecommendationsInput;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutRecommendationsInput,
        ClientUpdateWithoutRecommendationsInput
      >,
      ClientUncheckedUpdateWithoutRecommendationsInput
    >;
  };

  export type ItemUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<
      ItemCreateWithoutRecommendationsInput,
      ItemUncheckedCreateWithoutRecommendationsInput
    >;
    connectOrCreate?: ItemCreateOrConnectWithoutRecommendationsInput;
    upsert?: ItemUpsertWithoutRecommendationsInput;
    connect?: ItemWhereUniqueInput;
    update?: XOR<
      XOR<
        ItemUpdateToOneWithWhereWithoutRecommendationsInput,
        ItemUpdateWithoutRecommendationsInput
      >,
      ItemUncheckedUpdateWithoutRecommendationsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<
      UserCreateWithoutRecommendationsInput,
      UserUncheckedCreateWithoutRecommendationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput;
    upsert?: UserUpsertWithoutRecommendationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRecommendationsInput,
        UserUpdateWithoutRecommendationsInput
      >,
      UserUncheckedUpdateWithoutRecommendationsInput
    >;
  };

  export type RecommendationUsageUpdateManyWithoutRecommendationNestedInput = {
    create?:
      | XOR<
          RecommendationUsageCreateWithoutRecommendationInput,
          RecommendationUsageUncheckedCreateWithoutRecommendationInput
        >
      | RecommendationUsageCreateWithoutRecommendationInput[]
      | RecommendationUsageUncheckedCreateWithoutRecommendationInput[];
    connectOrCreate?:
      | RecommendationUsageCreateOrConnectWithoutRecommendationInput
      | RecommendationUsageCreateOrConnectWithoutRecommendationInput[];
    upsert?:
      | RecommendationUsageUpsertWithWhereUniqueWithoutRecommendationInput
      | RecommendationUsageUpsertWithWhereUniqueWithoutRecommendationInput[];
    createMany?: RecommendationUsageCreateManyRecommendationInputEnvelope;
    set?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    disconnect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    delete?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    connect?:
      | RecommendationUsageWhereUniqueInput
      | RecommendationUsageWhereUniqueInput[];
    update?:
      | RecommendationUsageUpdateWithWhereUniqueWithoutRecommendationInput
      | RecommendationUsageUpdateWithWhereUniqueWithoutRecommendationInput[];
    updateMany?:
      | RecommendationUsageUpdateManyWithWhereWithoutRecommendationInput
      | RecommendationUsageUpdateManyWithWhereWithoutRecommendationInput[];
    deleteMany?:
      | RecommendationUsageScalarWhereInput
      | RecommendationUsageScalarWhereInput[];
  };

  export type RecommendationUsageUncheckedUpdateManyWithoutRecommendationNestedInput =
    {
      create?:
        | XOR<
            RecommendationUsageCreateWithoutRecommendationInput,
            RecommendationUsageUncheckedCreateWithoutRecommendationInput
          >
        | RecommendationUsageCreateWithoutRecommendationInput[]
        | RecommendationUsageUncheckedCreateWithoutRecommendationInput[];
      connectOrCreate?:
        | RecommendationUsageCreateOrConnectWithoutRecommendationInput
        | RecommendationUsageCreateOrConnectWithoutRecommendationInput[];
      upsert?:
        | RecommendationUsageUpsertWithWhereUniqueWithoutRecommendationInput
        | RecommendationUsageUpsertWithWhereUniqueWithoutRecommendationInput[];
      createMany?: RecommendationUsageCreateManyRecommendationInputEnvelope;
      set?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      disconnect?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      delete?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      connect?:
        | RecommendationUsageWhereUniqueInput
        | RecommendationUsageWhereUniqueInput[];
      update?:
        | RecommendationUsageUpdateWithWhereUniqueWithoutRecommendationInput
        | RecommendationUsageUpdateWithWhereUniqueWithoutRecommendationInput[];
      updateMany?:
        | RecommendationUsageUpdateManyWithWhereWithoutRecommendationInput
        | RecommendationUsageUpdateManyWithWhereWithoutRecommendationInput[];
      deleteMany?:
        | RecommendationUsageScalarWhereInput
        | RecommendationUsageScalarWhereInput[];
    };

  export type RecommendationCreateNestedOneWithoutRecommendationUsagesInput = {
    create?: XOR<
      RecommendationCreateWithoutRecommendationUsagesInput,
      RecommendationUncheckedCreateWithoutRecommendationUsagesInput
    >;
    connectOrCreate?: RecommendationCreateOrConnectWithoutRecommendationUsagesInput;
    connect?: RecommendationWhereUniqueInput;
  };

  export type OrderItemCreateNestedOneWithoutRecommendationUsagesInput = {
    create?: XOR<
      OrderItemCreateWithoutRecommendationUsagesInput,
      OrderItemUncheckedCreateWithoutRecommendationUsagesInput
    >;
    connectOrCreate?: OrderItemCreateOrConnectWithoutRecommendationUsagesInput;
    connect?: OrderItemWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutRecommendationUsagesInput = {
    create?: XOR<
      UserCreateWithoutRecommendationUsagesInput,
      UserUncheckedCreateWithoutRecommendationUsagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationUsagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type RecommendationUpdateOneRequiredWithoutRecommendationUsagesNestedInput =
    {
      create?: XOR<
        RecommendationCreateWithoutRecommendationUsagesInput,
        RecommendationUncheckedCreateWithoutRecommendationUsagesInput
      >;
      connectOrCreate?: RecommendationCreateOrConnectWithoutRecommendationUsagesInput;
      upsert?: RecommendationUpsertWithoutRecommendationUsagesInput;
      connect?: RecommendationWhereUniqueInput;
      update?: XOR<
        XOR<
          RecommendationUpdateToOneWithWhereWithoutRecommendationUsagesInput,
          RecommendationUpdateWithoutRecommendationUsagesInput
        >,
        RecommendationUncheckedUpdateWithoutRecommendationUsagesInput
      >;
    };

  export type OrderItemUpdateOneRequiredWithoutRecommendationUsagesNestedInput =
    {
      create?: XOR<
        OrderItemCreateWithoutRecommendationUsagesInput,
        OrderItemUncheckedCreateWithoutRecommendationUsagesInput
      >;
      connectOrCreate?: OrderItemCreateOrConnectWithoutRecommendationUsagesInput;
      upsert?: OrderItemUpsertWithoutRecommendationUsagesInput;
      connect?: OrderItemWhereUniqueInput;
      update?: XOR<
        XOR<
          OrderItemUpdateToOneWithWhereWithoutRecommendationUsagesInput,
          OrderItemUpdateWithoutRecommendationUsagesInput
        >,
        OrderItemUncheckedUpdateWithoutRecommendationUsagesInput
      >;
    };

  export type UserUpdateOneRequiredWithoutRecommendationUsagesNestedInput = {
    create?: XOR<
      UserCreateWithoutRecommendationUsagesInput,
      UserUncheckedCreateWithoutRecommendationUsagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationUsagesInput;
    upsert?: UserUpsertWithoutRecommendationUsagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRecommendationUsagesInput,
        UserUpdateWithoutRecommendationUsagesInput
      >,
      UserUncheckedUpdateWithoutRecommendationUsagesInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
        | null;
      in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
      notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null;
      lt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      lte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      not?:
        | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _avg?: NestedDecimalNullableFilter<$PrismaModel>;
      _sum?: NestedDecimalNullableFilter<$PrismaModel>;
      _min?: NestedDecimalNullableFilter<$PrismaModel>;
      _max?: NestedDecimalNullableFilter<$PrismaModel>;
    };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type RecommendationCreateWithoutUserInput = {
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    client: ClientCreateNestedOneWithoutRecommendationsInput;
    item: ItemCreateNestedOneWithoutRecommendationsInput;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationUncheckedCreateWithoutUserInput = {
    id?: number;
    client_id: number;
    arukod: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationCreateOrConnectWithoutUserInput = {
    where: RecommendationWhereUniqueInput;
    create: XOR<
      RecommendationCreateWithoutUserInput,
      RecommendationUncheckedCreateWithoutUserInput
    >;
  };

  export type RecommendationCreateManyUserInputEnvelope = {
    data:
      | RecommendationCreateManyUserInput
      | RecommendationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RecommendationUsageCreateWithoutUserInput = {
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
    recommendation: RecommendationCreateNestedOneWithoutRecommendationUsagesInput;
    orderItem: OrderItemCreateNestedOneWithoutRecommendationUsagesInput;
  };

  export type RecommendationUsageUncheckedCreateWithoutUserInput = {
    id?: number;
    recommendation_id: number;
    order_item_id: string;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUsageCreateOrConnectWithoutUserInput = {
    where: RecommendationUsageWhereUniqueInput;
    create: XOR<
      RecommendationUsageCreateWithoutUserInput,
      RecommendationUsageUncheckedCreateWithoutUserInput
    >;
  };

  export type RecommendationUsageCreateManyUserInputEnvelope = {
    data:
      | RecommendationUsageCreateManyUserInput
      | RecommendationUsageCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RecommendationUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput;
    update: XOR<
      RecommendationUpdateWithoutUserInput,
      RecommendationUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RecommendationCreateWithoutUserInput,
      RecommendationUncheckedCreateWithoutUserInput
    >;
  };

  export type RecommendationUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput;
    data: XOR<
      RecommendationUpdateWithoutUserInput,
      RecommendationUncheckedUpdateWithoutUserInput
    >;
  };

  export type RecommendationUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationScalarWhereInput;
    data: XOR<
      RecommendationUpdateManyMutationInput,
      RecommendationUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[];
    OR?: RecommendationScalarWhereInput[];
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[];
    id?: IntFilter<'Recommendation'> | number;
    client_id?: IntFilter<'Recommendation'> | number;
    arukod?: IntFilter<'Recommendation'> | number;
    recommended_by?: IntFilter<'Recommendation'> | number;
    recommendation_price?:
      | DecimalFilter<'Recommendation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFilter<'Recommendation'> | Date | string;
  };

  export type RecommendationUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationUsageWhereUniqueInput;
    update: XOR<
      RecommendationUsageUpdateWithoutUserInput,
      RecommendationUsageUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RecommendationUsageCreateWithoutUserInput,
      RecommendationUsageUncheckedCreateWithoutUserInput
    >;
  };

  export type RecommendationUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationUsageWhereUniqueInput;
    data: XOR<
      RecommendationUsageUpdateWithoutUserInput,
      RecommendationUsageUncheckedUpdateWithoutUserInput
    >;
  };

  export type RecommendationUsageUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationUsageScalarWhereInput;
    data: XOR<
      RecommendationUsageUpdateManyMutationInput,
      RecommendationUsageUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type RecommendationUsageScalarWhereInput = {
    AND?:
      | RecommendationUsageScalarWhereInput
      | RecommendationUsageScalarWhereInput[];
    OR?: RecommendationUsageScalarWhereInput[];
    NOT?:
      | RecommendationUsageScalarWhereInput
      | RecommendationUsageScalarWhereInput[];
    id?: IntFilter<'RecommendationUsage'> | number;
    recommendation_id?: IntFilter<'RecommendationUsage'> | number;
    order_item_id?: StringFilter<'RecommendationUsage'> | string;
    confirmed_by?: IntFilter<'RecommendationUsage'> | number;
    is_rec_by_sales?: BoolFilter<'RecommendationUsage'> | boolean;
    is_influenced?: BoolFilter<'RecommendationUsage'> | boolean;
    created_at?: DateTimeFilter<'RecommendationUsage'> | Date | string;
  };

  export type RecommendationCreateWithoutItemInput = {
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    client: ClientCreateNestedOneWithoutRecommendationsInput;
    user: UserCreateNestedOneWithoutRecommendationsInput;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationUncheckedCreateWithoutItemInput = {
    id?: number;
    client_id: number;
    recommended_by: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationCreateOrConnectWithoutItemInput = {
    where: RecommendationWhereUniqueInput;
    create: XOR<
      RecommendationCreateWithoutItemInput,
      RecommendationUncheckedCreateWithoutItemInput
    >;
  };

  export type RecommendationCreateManyItemInputEnvelope = {
    data:
      | RecommendationCreateManyItemInput
      | RecommendationCreateManyItemInput[];
    skipDuplicates?: boolean;
  };

  export type RecommendationUpsertWithWhereUniqueWithoutItemInput = {
    where: RecommendationWhereUniqueInput;
    update: XOR<
      RecommendationUpdateWithoutItemInput,
      RecommendationUncheckedUpdateWithoutItemInput
    >;
    create: XOR<
      RecommendationCreateWithoutItemInput,
      RecommendationUncheckedCreateWithoutItemInput
    >;
  };

  export type RecommendationUpdateWithWhereUniqueWithoutItemInput = {
    where: RecommendationWhereUniqueInput;
    data: XOR<
      RecommendationUpdateWithoutItemInput,
      RecommendationUncheckedUpdateWithoutItemInput
    >;
  };

  export type RecommendationUpdateManyWithWhereWithoutItemInput = {
    where: RecommendationScalarWhereInput;
    data: XOR<
      RecommendationUpdateManyMutationInput,
      RecommendationUncheckedUpdateManyWithoutItemInput
    >;
  };

  export type RecommendationCreateWithoutClientInput = {
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    item: ItemCreateNestedOneWithoutRecommendationsInput;
    user: UserCreateNestedOneWithoutRecommendationsInput;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationUncheckedCreateWithoutClientInput = {
    id?: number;
    arukod: number;
    recommended_by: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutRecommendationInput;
  };

  export type RecommendationCreateOrConnectWithoutClientInput = {
    where: RecommendationWhereUniqueInput;
    create: XOR<
      RecommendationCreateWithoutClientInput,
      RecommendationUncheckedCreateWithoutClientInput
    >;
  };

  export type RecommendationCreateManyClientInputEnvelope = {
    data:
      | RecommendationCreateManyClientInput
      | RecommendationCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type RecommendationUpsertWithWhereUniqueWithoutClientInput = {
    where: RecommendationWhereUniqueInput;
    update: XOR<
      RecommendationUpdateWithoutClientInput,
      RecommendationUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      RecommendationCreateWithoutClientInput,
      RecommendationUncheckedCreateWithoutClientInput
    >;
  };

  export type RecommendationUpdateWithWhereUniqueWithoutClientInput = {
    where: RecommendationWhereUniqueInput;
    data: XOR<
      RecommendationUpdateWithoutClientInput,
      RecommendationUncheckedUpdateWithoutClientInput
    >;
  };

  export type RecommendationUpdateManyWithWhereWithoutClientInput = {
    where: RecommendationScalarWhereInput;
    data: XOR<
      RecommendationUpdateManyMutationInput,
      RecommendationUncheckedUpdateManyWithoutClientInput
    >;
  };

  export type OrderItemCreateWithoutOrderInput = {
    unikazon: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutOrderItemInput;
  };

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    unikazon: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutOrderItemInput;
  };

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput;
    create: XOR<
      OrderItemCreateWithoutOrderInput,
      OrderItemUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[];
    skipDuplicates?: boolean;
  };

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput;
    update: XOR<
      OrderItemUpdateWithoutOrderInput,
      OrderItemUncheckedUpdateWithoutOrderInput
    >;
    create: XOR<
      OrderItemCreateWithoutOrderInput,
      OrderItemUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput;
    data: XOR<
      OrderItemUpdateWithoutOrderInput,
      OrderItemUncheckedUpdateWithoutOrderInput
    >;
  };

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput;
    data: XOR<
      OrderItemUpdateManyMutationInput,
      OrderItemUncheckedUpdateManyWithoutOrderInput
    >;
  };

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    OR?: OrderItemScalarWhereInput[];
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    unikazon?: StringFilter<'OrderItem'> | string;
    sorszam?: StringFilter<'OrderItem'> | string;
    mennyiseg?: FloatNullableFilter<'OrderItem'> | number | null;
    egyseg?: StringNullableFilter<'OrderItem'> | string | null;
    netto?: FloatNullableFilter<'OrderItem'> | number | null;
    brutto?: FloatNullableFilter<'OrderItem'> | number | null;
    cikkszam?: StringFilter<'OrderItem'> | string;
  };

  export type OrderCreateWithoutOrderItemsInput = {
    sorszam: string;
    telj?: Date | string | null;
    kelt?: Date | string | null;
    vevokod?: number | null;
    vevo?: string | null;
    city?: string | null;
    address?: string | null;
    zip?: string | null;
    del?: boolean;
    deleted_by?: string | null;
    delete_comment?: string | null;
  };

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    sorszam: string;
    telj?: Date | string | null;
    kelt?: Date | string | null;
    vevokod?: number | null;
    vevo?: string | null;
    city?: string | null;
    address?: string | null;
    zip?: string | null;
    del?: boolean;
    deleted_by?: string | null;
    delete_comment?: string | null;
  };

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput;
    create: XOR<
      OrderCreateWithoutOrderItemsInput,
      OrderUncheckedCreateWithoutOrderItemsInput
    >;
  };

  export type RecommendationUsageCreateWithoutOrderItemInput = {
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
    recommendation: RecommendationCreateNestedOneWithoutRecommendationUsagesInput;
    user: UserCreateNestedOneWithoutRecommendationUsagesInput;
  };

  export type RecommendationUsageUncheckedCreateWithoutOrderItemInput = {
    id?: number;
    recommendation_id: number;
    confirmed_by: number;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUsageCreateOrConnectWithoutOrderItemInput = {
    where: RecommendationUsageWhereUniqueInput;
    create: XOR<
      RecommendationUsageCreateWithoutOrderItemInput,
      RecommendationUsageUncheckedCreateWithoutOrderItemInput
    >;
  };

  export type RecommendationUsageCreateManyOrderItemInputEnvelope = {
    data:
      | RecommendationUsageCreateManyOrderItemInput
      | RecommendationUsageCreateManyOrderItemInput[];
    skipDuplicates?: boolean;
  };

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<
      OrderUpdateWithoutOrderItemsInput,
      OrderUncheckedUpdateWithoutOrderItemsInput
    >;
    create: XOR<
      OrderCreateWithoutOrderItemsInput,
      OrderUncheckedCreateWithoutOrderItemsInput
    >;
    where?: OrderWhereInput;
  };

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput;
    data: XOR<
      OrderUpdateWithoutOrderItemsInput,
      OrderUncheckedUpdateWithoutOrderItemsInput
    >;
  };

  export type OrderUpdateWithoutOrderItemsInput = {
    sorszam?: StringFieldUpdateOperationsInput | string;
    telj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vevokod?: NullableIntFieldUpdateOperationsInput | number | null;
    vevo?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: BoolFieldUpdateOperationsInput | boolean;
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_comment?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    sorszam?: StringFieldUpdateOperationsInput | string;
    telj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vevokod?: NullableIntFieldUpdateOperationsInput | number | null;
    vevo?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: BoolFieldUpdateOperationsInput | boolean;
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_comment?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RecommendationUsageUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: RecommendationUsageWhereUniqueInput;
    update: XOR<
      RecommendationUsageUpdateWithoutOrderItemInput,
      RecommendationUsageUncheckedUpdateWithoutOrderItemInput
    >;
    create: XOR<
      RecommendationUsageCreateWithoutOrderItemInput,
      RecommendationUsageUncheckedCreateWithoutOrderItemInput
    >;
  };

  export type RecommendationUsageUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: RecommendationUsageWhereUniqueInput;
    data: XOR<
      RecommendationUsageUpdateWithoutOrderItemInput,
      RecommendationUsageUncheckedUpdateWithoutOrderItemInput
    >;
  };

  export type RecommendationUsageUpdateManyWithWhereWithoutOrderItemInput = {
    where: RecommendationUsageScalarWhereInput;
    data: XOR<
      RecommendationUsageUpdateManyMutationInput,
      RecommendationUsageUncheckedUpdateManyWithoutOrderItemInput
    >;
  };

  export type ClientCreateWithoutRecommendationsInput = {
    ID: number;
    vat?: string | null;
    name?: string | null;
    address_city?: string | null;
    address_zip?: string | null;
    address_combined?: string | null;
    del?: boolean | null;
    email?: string | null;
    ID_salesman?: number | null;
    ID_branch?: string | null;
    seasonal?: string | null;
    sms_group?: number | null;
    business_name?: string | null;
    UNAS_customer_group_ID?: number | null;
    discount_group_id?: number | null;
    discount_percentage?: number | null;
    teruleti_id?: number | null;
  };

  export type ClientUncheckedCreateWithoutRecommendationsInput = {
    ID: number;
    vat?: string | null;
    name?: string | null;
    address_city?: string | null;
    address_zip?: string | null;
    address_combined?: string | null;
    del?: boolean | null;
    email?: string | null;
    ID_salesman?: number | null;
    ID_branch?: string | null;
    seasonal?: string | null;
    sms_group?: number | null;
    business_name?: string | null;
    UNAS_customer_group_ID?: number | null;
    discount_group_id?: number | null;
    discount_percentage?: number | null;
    teruleti_id?: number | null;
  };

  export type ClientCreateOrConnectWithoutRecommendationsInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutRecommendationsInput,
      ClientUncheckedCreateWithoutRecommendationsInput
    >;
  };

  export type ItemCreateWithoutRecommendationsInput = {
    arukod: number;
    megnev?: string | null;
    csoport?: string | null;
    cikkszam: string;
    has_ready_to_cook_variants?: boolean | null;
    ear?: Decimal | DecimalJsLike | number | string | null;
    ear4?: Decimal | DecimalJsLike | number | string | null;
    ear3?: Decimal | DecimalJsLike | number | string | null;
    ear1?: Decimal | DecimalJsLike | number | string | null;
    tipus?: number;
    new?: boolean | null;
    keszlet?: number | null;
    batch?: number | null;
    unit?: number | null;
    uom?: string | null;
    passziv?: boolean | null;
    fix?: boolean;
    fix_name?: string | null;
    sold_in_batches?: boolean | null;
    hide_batch?: boolean | null;
    rendelheto?: boolean;
    search_blob?: string | null;
    custom_unit?: number | null;
    image?: string | null;
    vat?: number | null;
  };

  export type ItemUncheckedCreateWithoutRecommendationsInput = {
    arukod: number;
    megnev?: string | null;
    csoport?: string | null;
    cikkszam: string;
    has_ready_to_cook_variants?: boolean | null;
    ear?: Decimal | DecimalJsLike | number | string | null;
    ear4?: Decimal | DecimalJsLike | number | string | null;
    ear3?: Decimal | DecimalJsLike | number | string | null;
    ear1?: Decimal | DecimalJsLike | number | string | null;
    tipus?: number;
    new?: boolean | null;
    keszlet?: number | null;
    batch?: number | null;
    unit?: number | null;
    uom?: string | null;
    passziv?: boolean | null;
    fix?: boolean;
    fix_name?: string | null;
    sold_in_batches?: boolean | null;
    hide_batch?: boolean | null;
    rendelheto?: boolean;
    search_blob?: string | null;
    custom_unit?: number | null;
    image?: string | null;
    vat?: number | null;
  };

  export type ItemCreateOrConnectWithoutRecommendationsInput = {
    where: ItemWhereUniqueInput;
    create: XOR<
      ItemCreateWithoutRecommendationsInput,
      ItemUncheckedCreateWithoutRecommendationsInput
    >;
  };

  export type UserCreateWithoutRecommendationsInput = {
    password?: string | null;
    beosztas?: string | null;
    email?: string | null;
    salesperson?: boolean | null;
    ID_devices?: number | null;
    image?: string | null;
    username?: string | null;
    name?: string | null;
    recommendationUsages?: RecommendationUsageCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRecommendationsInput = {
    id?: number;
    password?: string | null;
    beosztas?: string | null;
    email?: string | null;
    salesperson?: boolean | null;
    ID_devices?: number | null;
    image?: string | null;
    username?: string | null;
    name?: string | null;
    recommendationUsages?: RecommendationUsageUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRecommendationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRecommendationsInput,
      UserUncheckedCreateWithoutRecommendationsInput
    >;
  };

  export type RecommendationUsageCreateWithoutRecommendationInput = {
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
    orderItem: OrderItemCreateNestedOneWithoutRecommendationUsagesInput;
    user: UserCreateNestedOneWithoutRecommendationUsagesInput;
  };

  export type RecommendationUsageUncheckedCreateWithoutRecommendationInput = {
    id?: number;
    order_item_id: string;
    confirmed_by: number;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUsageCreateOrConnectWithoutRecommendationInput = {
    where: RecommendationUsageWhereUniqueInput;
    create: XOR<
      RecommendationUsageCreateWithoutRecommendationInput,
      RecommendationUsageUncheckedCreateWithoutRecommendationInput
    >;
  };

  export type RecommendationUsageCreateManyRecommendationInputEnvelope = {
    data:
      | RecommendationUsageCreateManyRecommendationInput
      | RecommendationUsageCreateManyRecommendationInput[];
    skipDuplicates?: boolean;
  };

  export type ClientUpsertWithoutRecommendationsInput = {
    update: XOR<
      ClientUpdateWithoutRecommendationsInput,
      ClientUncheckedUpdateWithoutRecommendationsInput
    >;
    create: XOR<
      ClientCreateWithoutRecommendationsInput,
      ClientUncheckedCreateWithoutRecommendationsInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutRecommendationsInput,
      ClientUncheckedUpdateWithoutRecommendationsInput
    >;
  };

  export type ClientUpdateWithoutRecommendationsInput = {
    ID?: IntFieldUpdateOperationsInput | number;
    vat?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    address_city?: NullableStringFieldUpdateOperationsInput | string | null;
    address_zip?: NullableStringFieldUpdateOperationsInput | string | null;
    address_combined?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    ID_salesman?: NullableIntFieldUpdateOperationsInput | number | null;
    ID_branch?: NullableStringFieldUpdateOperationsInput | string | null;
    seasonal?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_group?: NullableIntFieldUpdateOperationsInput | number | null;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    UNAS_customer_group_ID?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    discount_group_id?: NullableIntFieldUpdateOperationsInput | number | null;
    discount_percentage?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    teruleti_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ClientUncheckedUpdateWithoutRecommendationsInput = {
    ID?: IntFieldUpdateOperationsInput | number;
    vat?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    address_city?: NullableStringFieldUpdateOperationsInput | string | null;
    address_zip?: NullableStringFieldUpdateOperationsInput | string | null;
    address_combined?: NullableStringFieldUpdateOperationsInput | string | null;
    del?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    ID_salesman?: NullableIntFieldUpdateOperationsInput | number | null;
    ID_branch?: NullableStringFieldUpdateOperationsInput | string | null;
    seasonal?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_group?: NullableIntFieldUpdateOperationsInput | number | null;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    UNAS_customer_group_ID?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    discount_group_id?: NullableIntFieldUpdateOperationsInput | number | null;
    discount_percentage?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    teruleti_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ItemUpsertWithoutRecommendationsInput = {
    update: XOR<
      ItemUpdateWithoutRecommendationsInput,
      ItemUncheckedUpdateWithoutRecommendationsInput
    >;
    create: XOR<
      ItemCreateWithoutRecommendationsInput,
      ItemUncheckedCreateWithoutRecommendationsInput
    >;
    where?: ItemWhereInput;
  };

  export type ItemUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: ItemWhereInput;
    data: XOR<
      ItemUpdateWithoutRecommendationsInput,
      ItemUncheckedUpdateWithoutRecommendationsInput
    >;
  };

  export type ItemUpdateWithoutRecommendationsInput = {
    arukod?: IntFieldUpdateOperationsInput | number;
    megnev?: NullableStringFieldUpdateOperationsInput | string | null;
    csoport?: NullableStringFieldUpdateOperationsInput | string | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    has_ready_to_cook_variants?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null;
    ear?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntFieldUpdateOperationsInput | number;
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    keszlet?: NullableFloatFieldUpdateOperationsInput | number | null;
    batch?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    uom?: NullableStringFieldUpdateOperationsInput | string | null;
    passziv?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    fix?: BoolFieldUpdateOperationsInput | boolean;
    fix_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sold_in_batches?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    hide_batch?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    rendelheto?: BoolFieldUpdateOperationsInput | boolean;
    search_blob?: NullableStringFieldUpdateOperationsInput | string | null;
    custom_unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    vat?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type ItemUncheckedUpdateWithoutRecommendationsInput = {
    arukod?: IntFieldUpdateOperationsInput | number;
    megnev?: NullableStringFieldUpdateOperationsInput | string | null;
    csoport?: NullableStringFieldUpdateOperationsInput | string | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    has_ready_to_cook_variants?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null;
    ear?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear4?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear3?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    ear1?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    tipus?: IntFieldUpdateOperationsInput | number;
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    keszlet?: NullableFloatFieldUpdateOperationsInput | number | null;
    batch?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    uom?: NullableStringFieldUpdateOperationsInput | string | null;
    passziv?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    fix?: BoolFieldUpdateOperationsInput | boolean;
    fix_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sold_in_batches?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    hide_batch?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    rendelheto?: BoolFieldUpdateOperationsInput | boolean;
    search_blob?: NullableStringFieldUpdateOperationsInput | string | null;
    custom_unit?: NullableFloatFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    vat?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type UserUpsertWithoutRecommendationsInput = {
    update: XOR<
      UserUpdateWithoutRecommendationsInput,
      UserUncheckedUpdateWithoutRecommendationsInput
    >;
    create: XOR<
      UserCreateWithoutRecommendationsInput,
      UserUncheckedCreateWithoutRecommendationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRecommendationsInput,
      UserUncheckedUpdateWithoutRecommendationsInput
    >;
  };

  export type UserUpdateWithoutRecommendationsInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type RecommendationUsageUpsertWithWhereUniqueWithoutRecommendationInput =
    {
      where: RecommendationUsageWhereUniqueInput;
      update: XOR<
        RecommendationUsageUpdateWithoutRecommendationInput,
        RecommendationUsageUncheckedUpdateWithoutRecommendationInput
      >;
      create: XOR<
        RecommendationUsageCreateWithoutRecommendationInput,
        RecommendationUsageUncheckedCreateWithoutRecommendationInput
      >;
    };

  export type RecommendationUsageUpdateWithWhereUniqueWithoutRecommendationInput =
    {
      where: RecommendationUsageWhereUniqueInput;
      data: XOR<
        RecommendationUsageUpdateWithoutRecommendationInput,
        RecommendationUsageUncheckedUpdateWithoutRecommendationInput
      >;
    };

  export type RecommendationUsageUpdateManyWithWhereWithoutRecommendationInput =
    {
      where: RecommendationUsageScalarWhereInput;
      data: XOR<
        RecommendationUsageUpdateManyMutationInput,
        RecommendationUsageUncheckedUpdateManyWithoutRecommendationInput
      >;
    };

  export type RecommendationCreateWithoutRecommendationUsagesInput = {
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
    client: ClientCreateNestedOneWithoutRecommendationsInput;
    item: ItemCreateNestedOneWithoutRecommendationsInput;
    user: UserCreateNestedOneWithoutRecommendationsInput;
  };

  export type RecommendationUncheckedCreateWithoutRecommendationUsagesInput = {
    id?: number;
    client_id: number;
    arukod: number;
    recommended_by: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
  };

  export type RecommendationCreateOrConnectWithoutRecommendationUsagesInput = {
    where: RecommendationWhereUniqueInput;
    create: XOR<
      RecommendationCreateWithoutRecommendationUsagesInput,
      RecommendationUncheckedCreateWithoutRecommendationUsagesInput
    >;
  };

  export type OrderItemCreateWithoutRecommendationUsagesInput = {
    unikazon: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
    order: OrderCreateNestedOneWithoutOrderItemsInput;
  };

  export type OrderItemUncheckedCreateWithoutRecommendationUsagesInput = {
    unikazon: string;
    sorszam: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
  };

  export type OrderItemCreateOrConnectWithoutRecommendationUsagesInput = {
    where: OrderItemWhereUniqueInput;
    create: XOR<
      OrderItemCreateWithoutRecommendationUsagesInput,
      OrderItemUncheckedCreateWithoutRecommendationUsagesInput
    >;
  };

  export type UserCreateWithoutRecommendationUsagesInput = {
    password?: string | null;
    beosztas?: string | null;
    email?: string | null;
    salesperson?: boolean | null;
    ID_devices?: number | null;
    image?: string | null;
    username?: string | null;
    name?: string | null;
    recommendations?: RecommendationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRecommendationUsagesInput = {
    id?: number;
    password?: string | null;
    beosztas?: string | null;
    email?: string | null;
    salesperson?: boolean | null;
    ID_devices?: number | null;
    image?: string | null;
    username?: string | null;
    name?: string | null;
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRecommendationUsagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRecommendationUsagesInput,
      UserUncheckedCreateWithoutRecommendationUsagesInput
    >;
  };

  export type RecommendationUpsertWithoutRecommendationUsagesInput = {
    update: XOR<
      RecommendationUpdateWithoutRecommendationUsagesInput,
      RecommendationUncheckedUpdateWithoutRecommendationUsagesInput
    >;
    create: XOR<
      RecommendationCreateWithoutRecommendationUsagesInput,
      RecommendationUncheckedCreateWithoutRecommendationUsagesInput
    >;
    where?: RecommendationWhereInput;
  };

  export type RecommendationUpdateToOneWithWhereWithoutRecommendationUsagesInput =
    {
      where?: RecommendationWhereInput;
      data: XOR<
        RecommendationUpdateWithoutRecommendationUsagesInput,
        RecommendationUncheckedUpdateWithoutRecommendationUsagesInput
      >;
    };

  export type RecommendationUpdateWithoutRecommendationUsagesInput = {
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutRecommendationsNestedInput;
    item?: ItemUpdateOneRequiredWithoutRecommendationsNestedInput;
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput;
  };

  export type RecommendationUncheckedUpdateWithoutRecommendationUsagesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    client_id?: IntFieldUpdateOperationsInput | number;
    arukod?: IntFieldUpdateOperationsInput | number;
    recommended_by?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemUpsertWithoutRecommendationUsagesInput = {
    update: XOR<
      OrderItemUpdateWithoutRecommendationUsagesInput,
      OrderItemUncheckedUpdateWithoutRecommendationUsagesInput
    >;
    create: XOR<
      OrderItemCreateWithoutRecommendationUsagesInput,
      OrderItemUncheckedCreateWithoutRecommendationUsagesInput
    >;
    where?: OrderItemWhereInput;
  };

  export type OrderItemUpdateToOneWithWhereWithoutRecommendationUsagesInput = {
    where?: OrderItemWhereInput;
    data: XOR<
      OrderItemUpdateWithoutRecommendationUsagesInput,
      OrderItemUncheckedUpdateWithoutRecommendationUsagesInput
    >;
  };

  export type OrderItemUpdateWithoutRecommendationUsagesInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;
  };

  export type OrderItemUncheckedUpdateWithoutRecommendationUsagesInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    sorszam?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUpsertWithoutRecommendationUsagesInput = {
    update: XOR<
      UserUpdateWithoutRecommendationUsagesInput,
      UserUncheckedUpdateWithoutRecommendationUsagesInput
    >;
    create: XOR<
      UserCreateWithoutRecommendationUsagesInput,
      UserUncheckedCreateWithoutRecommendationUsagesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRecommendationUsagesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRecommendationUsagesInput,
      UserUncheckedUpdateWithoutRecommendationUsagesInput
    >;
  };

  export type UserUpdateWithoutRecommendationUsagesInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRecommendationUsagesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    beosztas?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    salesperson?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ID_devices?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type RecommendationCreateManyUserInput = {
    id?: number;
    client_id: number;
    arukod: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
  };

  export type RecommendationUsageCreateManyUserInput = {
    id?: number;
    recommendation_id: number;
    order_item_id: string;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUpdateWithoutUserInput = {
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutRecommendationsNestedInput;
    item?: ItemUpdateOneRequiredWithoutRecommendationsNestedInput;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    client_id?: IntFieldUpdateOperationsInput | number;
    arukod?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    client_id?: IntFieldUpdateOperationsInput | number;
    arukod?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageUpdateWithoutUserInput = {
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recommendation?: RecommendationUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
    orderItem?: OrderItemUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
  };

  export type RecommendationUsageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    recommendation_id?: IntFieldUpdateOperationsInput | number;
    order_item_id?: StringFieldUpdateOperationsInput | string;
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    recommendation_id?: IntFieldUpdateOperationsInput | number;
    order_item_id?: StringFieldUpdateOperationsInput | string;
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationCreateManyItemInput = {
    id?: number;
    client_id: number;
    recommended_by: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
  };

  export type RecommendationUpdateWithoutItemInput = {
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutRecommendationsNestedInput;
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number;
    client_id?: IntFieldUpdateOperationsInput | number;
    recommended_by?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number;
    client_id?: IntFieldUpdateOperationsInput | number;
    recommended_by?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationCreateManyClientInput = {
    id?: number;
    arukod: number;
    recommended_by: number;
    recommendation_price: Decimal | DecimalJsLike | number | string;
    recommended_at?: Date | string;
  };

  export type RecommendationUpdateWithoutClientInput = {
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    item?: ItemUpdateOneRequiredWithoutRecommendationsNestedInput;
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number;
    arukod?: IntFieldUpdateOperationsInput | number;
    recommended_by?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutRecommendationNestedInput;
  };

  export type RecommendationUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number;
    arukod?: IntFieldUpdateOperationsInput | number;
    recommended_by?: IntFieldUpdateOperationsInput | number;
    recommendation_price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    recommended_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemCreateManyOrderInput = {
    unikazon: string;
    mennyiseg?: number | null;
    egyseg?: string | null;
    netto?: number | null;
    brutto?: number | null;
    cikkszam: string;
  };

  export type OrderItemUpdateWithoutOrderInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    recommendationUsages?: RecommendationUsageUpdateManyWithoutOrderItemNestedInput;
  };

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
    recommendationUsages?: RecommendationUsageUncheckedUpdateManyWithoutOrderItemNestedInput;
  };

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    unikazon?: StringFieldUpdateOperationsInput | string;
    mennyiseg?: NullableFloatFieldUpdateOperationsInput | number | null;
    egyseg?: NullableStringFieldUpdateOperationsInput | string | null;
    netto?: NullableFloatFieldUpdateOperationsInput | number | null;
    brutto?: NullableFloatFieldUpdateOperationsInput | number | null;
    cikkszam?: StringFieldUpdateOperationsInput | string;
  };

  export type RecommendationUsageCreateManyOrderItemInput = {
    id?: number;
    recommendation_id: number;
    confirmed_by: number;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUsageUpdateWithoutOrderItemInput = {
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recommendation?: RecommendationUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
    user?: UserUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
  };

  export type RecommendationUsageUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number;
    recommendation_id?: IntFieldUpdateOperationsInput | number;
    confirmed_by?: IntFieldUpdateOperationsInput | number;
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageUncheckedUpdateManyWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number;
    recommendation_id?: IntFieldUpdateOperationsInput | number;
    confirmed_by?: IntFieldUpdateOperationsInput | number;
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageCreateManyRecommendationInput = {
    id?: number;
    order_item_id: string;
    confirmed_by: number;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
    created_at?: Date | string;
  };

  export type RecommendationUsageUpdateWithoutRecommendationInput = {
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderItem?: OrderItemUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
    user?: UserUpdateOneRequiredWithoutRecommendationUsagesNestedInput;
  };

  export type RecommendationUsageUncheckedUpdateWithoutRecommendationInput = {
    id?: IntFieldUpdateOperationsInput | number;
    order_item_id?: StringFieldUpdateOperationsInput | string;
    confirmed_by?: IntFieldUpdateOperationsInput | number;
    is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
    is_influenced?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecommendationUsageUncheckedUpdateManyWithoutRecommendationInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      order_item_id?: StringFieldUpdateOperationsInput | string;
      confirmed_by?: IntFieldUpdateOperationsInput | number;
      is_rec_by_sales?: BoolFieldUpdateOperationsInput | boolean;
      is_influenced?: BoolFieldUpdateOperationsInput | boolean;
      created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
