/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import { SupabaseClient } from "@supabase/supabase-js";
import VError from "verror";

import { Shout } from "types";

export const createShout = (client: SupabaseClient) => async (
  shout: Pick<Shout, "contents">
): Promise<Shout> => {
  try {
    const { data } = await client
      .from<Shout>("shouts")
      .insert([{ contents: shout.contents }]);

    const [persistedShout] = data;

    return persistedShout;
  } catch (cause) {
    throw new VError(
      { cause, name: "CreateShoutError" },
      `failed to create a shout`
    );
  }
};
