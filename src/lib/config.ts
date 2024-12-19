import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_GOOGLE_MAPS_APIKEY: z.string(),
});

const _env = envSchema.safeParse(process.env);
console.log("NEXT_PUBLIC_API_URL: ", process.env.NEXT_PUBLIC_API_URL);

if (!_env.success) {
  console.error("❌ Invalid environment variables", _env.error.format());
  //   throw new Error("Invalid environment variables");
}

const config = _env.data;

export { config };
