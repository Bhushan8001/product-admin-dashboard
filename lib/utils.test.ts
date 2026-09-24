import { describe, expect, it } from "vitest";
import { clampPage, parsePageSize, parsePositiveInt } from "./utils";

describe("query parameter helpers", () => {
  it("keeps valid positive values", () => {
    expect(parsePositiveInt("7", 1)).toBe(7);
    expect(parsePageSize("20")).toBe(20);
  });

  it("falls back when values are invalid", () => {
    expect(parsePositiveInt("abc", 1)).toBe(1);
    expect(parsePositiveInt("0", 1)).toBe(1);
    expect(parsePageSize("999")).toBe(10);
  });

  it("clamps page values into a valid range", () => {
    expect(clampPage("999", 1, 4)).toBe(4);
    expect(clampPage("0", 1, 8)).toBe(1);
    expect(clampPage("3", 1, 8)).toBe(3);
  });
});
