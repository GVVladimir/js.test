import { expect } from "chai";
import Sinon from "sinon";
import { fetchUsers } from "../src/users.js";

describe("fetchUsers", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = Sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });
  it("должна получать и выводить имена пользователей", async () => {
    const testUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];
    global.fetch = sandbox.stub().resolves({
      ok: true,
      json: async () => testUsers,
    });

    const consoleLoSpy = sandbox.spy(console, "log");
    await fetchUsers();
    expect(global.fetch.calledOnce).to.be.true;
    expect(
      global.fetch.calledWith("https://jsonplaceholder.typicode.com/users")
    ).to.be.true;
    expect(consoleLoSpy.calledWith("John Doe")).to.be.true;
    expect(consoleLoSpy.calledWith("Jane Smith")).to.be.true;
  });
});
