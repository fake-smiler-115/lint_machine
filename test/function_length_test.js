import { assertEquals } from "jsr:@std/assert";
import { checkFunctionLengths } from "../src/function_lenghts.js";

Deno.test(" function less than 8", () => {
  assertEquals(
    checkFunctionLengths(['const function(a,b) {', '}']),
   []
  );
});

Deno.test(" assigning function reference greater than 8", () => {
  assertEquals(
    checkFunctionLengths(['const a = function(a,b) {', '','','','','','','','','','','','}']),
   ['0  : Function length is greater than 8']
  );
});


Deno.test(" function greater than 8", () => {
  assertEquals(
    checkFunctionLengths(['const function(a,b) {', '','','','}']),
   []
  );
});

Deno.test("function greater than 8", () => {
  assertEquals(
    checkFunctionLengths(['function name(a,b) {', '','','','','','','','','','','','}']),
   ['0  : Function length is greater than 8']
  );
});

Deno.test("includes function keyword", () => {
  assertEquals(
    checkFunctionLengths(['let functionName = 1;']),
   []
  );
});
