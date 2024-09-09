import { SelectUser, usersTable } from "@/lib/db/schema";
import { db } from "@/lib/db/turso";
import { eq } from "drizzle-orm";

async function getUserById(id: SelectUser["id"]): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}
export default async function Home() {
  const [user] = await getUserById(1);

  return <h1>{user.name}</h1>;
}
