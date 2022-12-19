import { base } from "./base";

export interface Tag {
  /** The value of the hashtag after the # sign. */
  name: string;
  /** A link to the hashtag on the instance. */
  url: string;

  /** Usage statistics for given days. */
  history?: History[] | null;
  /** Whether the current token’s authorized user is following this tag. */
  following?: boolean | null;
}

export const fetchTrendTags = async () => {
  return await base.fetch("GET", "trends/tags").json<Tag[]>();
};
