# react-custom-hook
<br />

## In this library, there are a plenty of hooks which helps us to optimize our code and makes our lives easier.

> <font color=yellow> If you are react developers, you must know about `useState` hook</font>

```js
import { useState } from 'react';
const [value, setValue] = useState('');
```

> <font color=red>You might wonder, how to know both `previous` and `current` state value at the same time. Here, it comes </font>
```js
import { usePreviousCurrentState } from 'react-custom-hook';

const [previousValue, currentValue, setValue] = usePreviousCurrentState('');

```
## Explanation

 `previousValue` is a variable that holds previous value.
 <br />
  `currentValue` is a variable that holds current value.
  <br />
 `setValue` is a function that lets us to update current value.
