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

export const findAll = (client: SupabaseClient) => async (): Promise<
  Shout[]
> => {
  try {
    const { data: shouts } = await client
      .from("shouts")
      .select("*")
      .order("createdAt", { ascending: false });

    return shouts;
  } catch (cause) {
    throw new VError(
      { cause, name: "FindAllShoutsError" },
      `failed to find all shouts`
    );
  }
};
