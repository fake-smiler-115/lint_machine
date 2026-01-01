import { assertEquals } from "jsr:@std/assert";
import { checkLetVariable } from "../src/reassigning_let_variables.js";

Deno.test("let variable is reassigned", () => {
  assertEquals(
    checkLetVariable(['let a = 10;','const b = 10;','a = 25;']),
   []
  );
});

Deno.test("let variable is not reassigned", () => {
  assertEquals(
    checkLetVariable(['let a = 10;','const b = 10;','return a + b;']),
   ["a  : is never reassigned"]
  );
});

Deno.test("let variable is not reassigned", () => {
  assertEquals(
    checkLetVariable(['let a = 10;','const b = 10;','a + b']),
   ["a  : is never reassigned"]
  );
});

Deno.test("let variable is not reassigned", () => {
  assertEquals(
    checkLetVariable(['let a = 10;','const b = 10;','a + b']),
   ["a  : is never reassigned"]
  );
});

Deno.test(" let array", () => {
  assertEquals(
    checkLetVariable(['let arr = [10,20,30,0];','const b = 10;','return arr']),
   ["arr  : is never reassigned"]
  );
});

Deno.test(" let object", () => {
  assertEquals(
    checkLetVariable(['let obj = {a : 5, b : 10};','const b = 10;','return arr']),
   ["obj  : is never reassigned"]
  );
});

Deno.test("no space between the ", () => {
  assertEquals(
    checkLetVariable(['let a = 20;','const b = 10;','a=10']),
   []
  );
});