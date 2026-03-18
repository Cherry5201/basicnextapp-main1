import { query } from "@/lib/db";

export default async function CategoryPage() {
  const result = await query("SELECT * FROM testcategories ORDER BY id ASC");

  return (
    <div>
      <h1>Categories</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {result.rows.map((cat: any) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
