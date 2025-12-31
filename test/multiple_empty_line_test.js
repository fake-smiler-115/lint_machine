import { assertEquals } from "jsr:@std/assert";
import { checkEmptyLines } from "../src/multiple_empty_line.js";

Deno.test("multiple empty lines ", () => {
  assertEquals(
    checkEmptyLines(['','']),
   ["1  : Multiple empty lines"]
  );
});

Deno.test("multiple empty lines with spaces", () => {
  assertEquals(
    checkEmptyLines(['','       ']),
   ["1  : Multiple empty lines"]
  );
});

Deno.test("no multiple empty lines", () => {
  assertEquals(
    checkEmptyLines(['','return 100;']),
   []
  );
});