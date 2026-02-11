import { db } from "@/db";

export default async function TestPage() {
  try {
    const result = await db.query("SELECT * FROM posts");
    return (
      <div className="p-4">
        <h1>Database Test</h1>
        <pre>{JSON.stringify(result.rows, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4">
        <h1>Error</h1>
        <pre>{error.message}</pre>
      </div>
    );
  }
}