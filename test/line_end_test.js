import { assertEquals } from "jsr:@std/assert";
import { checkLinesEnd } from "../src/line_end.js";

Deno.test("checking of semi colon", () => {
  assertEquals(
    checkLinesEnd(['return 100;']),
   []
  );
});

Deno.test("no semi colon", () => {
  assertEquals(
    checkLinesEnd(['return 100']),
   ["0  : Missing of semicolon"]
  );
});

Deno.test("space after semi colon", () => {
  assertEquals(
    checkLinesEnd(['return 100;   ']),
   []
  );
});

Deno.test("flower bracket at end", () => {
  assertEquals(
    checkLinesEnd(['const add = function (a,b) {']),
   []
  );
});

Deno.test("end flower bracket", () => {
  assertEquals(
    checkLinesEnd(['};']),
   []
  );
});

Deno.test("empty line to check semi colon", () => {
  assertEquals(
    checkLinesEnd(['']),
   []
  );
});