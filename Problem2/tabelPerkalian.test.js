const cetakTablePerkalian = require("../Problem2/tabelPerkalian");

test("Test 1", () => {
  expect(cetakTablePerkalian(9)).toEqual(
    "\n1  2  3  4  5  6  7  8  9\n2  4  6  8  10 12 14 16 18\n3  6  9  12 15 18 21 24 27\n4  8  12 16 20 24 28 32 36\n5  10 15 20 25 30 35 40 45\n6  12 18 24 30 36 42 48 54\n7  14 21 28 35 42 49 56 63\n8  16 24 32 40 48 56 64 72\n9  18 27 36 45 54 63 72 81"
  );
});