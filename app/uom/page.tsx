import { query } from "@/lib/db";

export default async function UOMPage() {
  const result = await query("SELECT * FROM uom ORDER BY id ASC");

  return (
    <div>
      <h1>UOM</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {result.rows.map((uom: any) => (
            <tr key={uom.id}>
              <td>{uom.id}</td>
              <td>{uom.name}</td>
              <td>{uom.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
