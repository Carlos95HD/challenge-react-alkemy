import { fetchLogin } from "../../api/auth";

describe("Prueba en Api de autenticacion", () => {
  test("Debe autenticarse correctamente", async () => {
    const resp = await fetchLogin("challenge@alkemy.org", "react");
    expect(resp.status === 200).toBe(true);
  });

  test("No debe autenticarse", async () => {
    const resp = await fetchLogin("test@alkemy.org", "test");
    expect(resp.response.status).toBe(401);
  });
});
