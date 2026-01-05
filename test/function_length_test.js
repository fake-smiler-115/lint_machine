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

Deno.test("no function present", () => {
  assertEquals(
    checkFunctionLengths(['let a = 1;']),
    []
  );
});

Deno.test("function with exactly 8 lines", () => {
  assertEquals(
    checkFunctionLengths([
      'function test() {',
      'line1();',
      'line2();',
      'line3();',
      'line4();',
      'line5();',
      'line6();',
      'line7();',
      '}',
    ]),
    []
  );
});

Deno.test("function with more than 8 lines", () => {
  assertEquals(
    checkFunctionLengths([
      'function test() {',
      'line1();',
      'line2();',
      'line3();',
      'line4();',
      'line5();',
      'line6();',
      'line7();',
      'line8();',
      '}',
    ]),
    ['0  : Function length is greater than 8']
  );
});

Deno.test("arrow function within limit", () => {
  assertEquals(
    checkFunctionLengths([
      'const test = () => {',
      'a();',
      'b();',
      'c();',
      '}',
    ]),
    []
  );
});

  Deno.test("arrow function exceeding limit", () => {
  assertEquals(
    checkFunctionLengths([
      'const test = () => {',
      'a();',
      'b();',
      'c();',
      'd();',
      'e();',
      'f();',
      'g();',
      'h();',
      'i();',
      '}',
    ]),
    ['0  : Function length is greater than 8']
  );
});

Deno.test("function expression exceeding limit", () => {
  assertEquals(
    checkFunctionLengths([
      'const test = function() {',
      'a();',
      'b();',
      'c();',
      'd();',
      'e();',
      'f();',
      'g();',
      'h();',
      'i();',
      '}',
    ]),
    ['0  : Function length is greater than 8']
  );
});

Deno.test("multiple functions mixed validity", () => {
  assertEquals(
    checkFunctionLengths([
      'function ok() {',
      'a();',
      '}',
      '',
      'function tooLong() {',
      '1();',
      '2();',
      '3();',
      '4();',
      '5();',
      '6();',
      '7();',
      '8();',
      '9();',
      '}',
    ]),
    ['4  : Function length is greater than 8']
  );
});

Deno.test("nested function exceeding limit", () => {
  assertEquals(
    checkFunctionLengths([
      'function outer() {',
      'function inner() {',
      '1();',
      '2();',
      '3();',
      '4();',
      '5();',
      '6();',
      '7();',
      '8();',
      '9();',
      '}',
      '}',
    ]),
    ['0  : Function length is greater than 8','1  : Function length is greater than 8']
  );
});

Deno.test("empty function", () => {
  assertEquals(
    checkFunctionLengths([
      'function empty() {',
      '}',
    ]),
    []
  );
});

Deno.test("single line arrow function", () => {
  assertEquals(
    checkFunctionLengths([
      'const add = () => 1 + 2;',
    ]),
    []
  );
});
