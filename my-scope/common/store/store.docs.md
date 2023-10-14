---
labels: ['vue']
description: A Store composable.
---

Basic counter with utility functions.

## Basic Usage

```ts
import { useCounter } from "my-org.my-scope/common/store";

const { count, inc, dec, set, reset } = useCounter();
```

## Usage with options

```ts
import { useCounter } from "my-org.my-scope/common/store";

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 });
```
