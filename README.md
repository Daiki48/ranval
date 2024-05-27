# Ranval

Generates random value.

## Usage

### generateRanInt

```ts
import { generateRanInt } from "@daiki48/ranval";

console.log(generateRanInt(3));
// Output : Generate a random 3-digit integer.
```

### generateRanString

```ts
import { generateRanString } from "@daiki48/ranval";

console.log("Default output : ", generateRanString(3));
// Output : Generate a random string.

console.log("Set upperCase : ", generateRanString(3, { upperCase: true }));
// Output : Generate a random string include upperCase.

console.log("Set numberCase : ", generateRanString(3, { numberCase: true }));
// Output : Generate a random string include numberCase.

console.log(
  "Set all options : ",
  generateRanString(3, { uppoerCase: true, numberCase: true })
);
// Output : Generate a random string include upperCase and numberCase.

console.log(
  "Set all options disabled : ",
  generateRanString(3, {
    lowerCase: false,
    uppoerCase: false,
    numberCase: false,
  })
);
// Output : Generate a random string include lowerCase and upperCase and numberCase.
```

## LICENSE

MIT
