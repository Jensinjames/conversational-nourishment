// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pioxjdawfuxqqzitbqas.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpb3hqZGF3ZnV4cXF6aXRicWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyMDQ1NDYsImV4cCI6MjA0OTc4MDU0Nn0.yHx6aN2wI0EQEBjKGaNGo_p88XrHL1EkSmdAwmLcHbk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);