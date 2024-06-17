/**
 * @packageDocumentation
 * @module api.functional.sellers.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { EncryptedFetcher } from "@nestia/fetcher/lib/EncryptedFetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ISeller } from "../../../structures/ISeller";

export * as password from "./password";

/**
 * Join as a seller.
 *
 * @param input Information of yours
 * @return Information of newly joined seller
 * @setHeader authorization.token Authorization
 *
 * @controller SellerAuthenticateController.join
 * @path POST /sellers/authenticate/join
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function join(
  connection: IConnection,
  input: join.Input,
): Promise<join.Output> {
  const output: join.Output = !!connection.simulate
    ? join.simulate(connection, input)
    : await EncryptedFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "text/plain",
          },
        },
        {
          ...join.METADATA,
          template: join.METADATA.path,
          path: join.path(),
        },
        input,
      );
  connection.headers ??= {};
  connection.headers.Authorization = output.authorization.token;
  return output;
}
export namespace join {
  export type Input = Primitive<ISeller.IJoin>;
  export type Output = Primitive<ISeller.IAuthorized>;

  export const METADATA = {
    method: "POST",
    path: "/sellers/authenticate/join",
    request: {
      type: "text/plain",
      encrypted: true,
    },
    response: {
      type: "text/plain",
      encrypted: true,
    },
    status: null,
  } as const;

  export const path = () => "/sellers/authenticate/join";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<ISeller.IAuthorized>> =>
    typia.random<Primitive<ISeller.IAuthorized>>(g);
  export const simulate = (
    connection: IConnection,
    input: join.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "text/plain",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Log-in as a seller.
 *
 * @param input Email and password
 * @return Information of the seller
 * @assignHeaders authorization
 *
 * @controller SellerAuthenticateController.login
 * @path POST /sellers/authenticate/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function login(
  connection: IConnection,
  input: login.Input,
): Promise<login.Output> {
  const output: login.Output = !!connection.simulate
    ? login.simulate(connection, input)
    : await EncryptedFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "text/plain",
          },
        },
        {
          ...login.METADATA,
          template: login.METADATA.path,
          path: login.path(),
        },
        input,
      );
  connection.headers ??= {};
  Object.assign(connection.headers, output.authorization);
  return output;
}
export namespace login {
  export type Input = Primitive<ISeller.ILogin>;
  export type Output = Primitive<ISeller.IAuthorized>;

  export const METADATA = {
    method: "POST",
    path: "/sellers/authenticate/login",
    request: {
      type: "text/plain",
      encrypted: true,
    },
    response: {
      type: "text/plain",
      encrypted: true,
    },
    status: null,
  } as const;

  export const path = () => "/sellers/authenticate/login";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<ISeller.IAuthorized>> =>
    typia.random<Primitive<ISeller.IAuthorized>>(g);
  export const simulate = (
    connection: IConnection,
    input: login.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "text/plain",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Erase the seller by itself.
 *
 * @controller SellerAuthenticateController.exit
 * @path DELETE /sellers/authenticate/exit
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function exit(connection: IConnection): Promise<void> {
  return !!connection.simulate
    ? exit.simulate(connection)
    : PlainFetcher.fetch(connection, {
        ...exit.METADATA,
        template: exit.METADATA.path,
        path: exit.path(),
      });
}
export namespace exit {
  export const METADATA = {
    method: "DELETE",
    path: "/sellers/authenticate/exit",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/sellers/authenticate/exit";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<void>> => typia.random<Primitive<void>>(g);
  export const simulate = (connection: IConnection): void => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
