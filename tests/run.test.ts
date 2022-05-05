global.config = {};

import "../src/env";

import sumTests from "./examples/sum";
import arrayTests from "./examples/array";

describe("Sum function", sumTests);
describe("Array clone function", arrayTests);
