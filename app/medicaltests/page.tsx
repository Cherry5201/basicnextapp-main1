import { query } from "@/lib/db";

export default async function MedicalTestsPage() {
  const result = await query(`
    SELECT 
      mt.id,
      mt.name,
      tc.name AS category,
      u.name AS unit,
      mt.normalmin,
      mt.normalmax
    FROM medicaltests mt
    JOIN testcategories tc ON mt.idcategory = tc.id
    JOIN uom u ON mt.iduom = u.id
    ORDER BY mt.id ASC
  `);

  return (
    <div>
      <h1>Medical Tests</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Test Name</th>
            <th>Category</th>
            <th>Unit</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
        </thead>
        <tbody>
          {result.rows.map((test: any) => (
            <tr key={test.id}>
              <td>{test.id}</td>
              <td>{test.name}</td>
              <td>{test.category}</td>
              <td>{test.unit}</td>
              <td>{test.normalmin}</td>
              <td>{test.normalmax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
