import { z } from "zod";

const attackDataTypeSchema = z.object({
  sendtime_1: z.coerce.number(),
  sender_1: z.coerce.number(),
  messageID: z.coerce.number(),
  pos_x1: z.coerce.number(),
  pos_y1: z.coerce.number(),
  pos_z1: z.coerce.number(),
  spd_x1: z.coerce.number(),
  spd_y1: z.coerce.number(),
  spd_z1: z.coerce.number(),
  sendtime_2: z.coerce.number(),
  sender_2: z.coerce.number(),
  pos_x2: z.coerce.number(),
  pos_y2: z.coerce.number(),
  pos_z2: z.coerce.number(),
  spd_x2: z.coerce.number(),
  spd_y2: z.coerce.number(),
  spd_z2: z.coerce.number(),
});

type AttackDataType = z.infer<typeof attackDataTypeSchema>;

export { attackDataTypeSchema, type AttackDataType };
