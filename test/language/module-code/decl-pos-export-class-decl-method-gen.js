// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Statement cannot contain an `export` declaration
id: sec-modules
negative: SyntaxError
flags: [module]
---*/

class C { *method() { export default null; } }
