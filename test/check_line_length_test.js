import { assertEquals } from "jsr:@std/assert";
import { checkLineLengths } from "../src/check_line_length.js";

Deno.test("line length greater than 80", () => {
  assertEquals(
    checkLineLengths(["    console.log(line length is greater than 80                                                     );"], 0, []),
   ["0  : Line length is greater than 80" ]
  );
});

Deno.test("line length less than 80", () => {
  assertEquals(
    checkLineLengths(["    console.log(line length is less than 80);"],[]),
   []
  );
});