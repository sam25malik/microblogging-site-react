/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import { createClient } from "@supabase/supabase-js";

import { createShout } from "./createShout";
import { findAll } from "./findAll";

const supabaseUrl = "https://cpmhyhpjbqmsfblushud.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

export const createPersistence = () => {
  const client = createClient(supabaseUrl, supabaseKey);

  return {
    createShout: createShout(client),
    findAll: findAll(client),
  };
};
