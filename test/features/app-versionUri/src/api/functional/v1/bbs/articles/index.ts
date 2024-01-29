/**
 * @packageDocumentation
 * @module api.functional.v1.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../../../structures/IBbsArticle";
import type { IPage } from "../../../../structures/IPage";

/**
 * @controller BbsArticlesController.index
 * @path GET /v1/bbs/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  section: string,
  query: index.Query,
): Promise<index.Output> {
  return PlainFetcher.fetch(connection, {
    ...index.METADATA,
    path: index.path(section, query),
  });
}
export namespace index {
  export type Query = Resolved<IPage.IRequest>;
  export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

  export const METADATA = {
    method: "GET",
    path: "/v1/bbs/:section/articles",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (section: string, query: index.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/v1/bbs/${encodeURIComponent(section ?? "null")}/articles`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
}

/**
 * @controller BbsArticlesController.at
 * @path GET /v1/bbs/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  section: string,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return PlainFetcher.fetch(connection, {
    ...at.METADATA,
    path: at.path(section, id),
  });
}
export namespace at {
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "GET",
    path: "/v1/bbs/:section/articles/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (section: string, id: string & Format<"uuid">) =>
    `/v1/bbs/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
}
