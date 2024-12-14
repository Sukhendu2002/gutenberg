# BorderRadiusControl

`BorderRadiusControl` is a React component that provides a user interface for managing border radius values. It allows users to control the border radius of each corner independently or link them together for uniform values.

## Usage

```jsx
/**
 * WordPress dependencies
 */
import { BorderRadiusControl } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

const MyBorderRadiusControl = () => {
    const [values, setValues] = useState({
        topLeft: '10px',
        topRight: '10px',
        bottomLeft: '10px',
        bottomRight: '10px',
    });

    return (
        <BorderRadiusControl
            values={values}
            onChange={setValues}
        />
    );
};

// ...

<MyBorderRadiusControl />;
```

## Props

The component accepts the following props:

### values

An object containing the border radius values for each corner.

- Type: `Object`
- Required: No

The values object has the following schema:

| Property    | Description                          | Type   |
| ----------- | ------------------------------------ | ------ |
| topLeft     | Border radius for top left corner    | string |
| topRight    | Border radius for top right corner   | string |
| bottomLeft  | Border radius for bottom left corner | string |
| bottomRight | Border radius for bottom right corner| string |

Each value should be a valid CSS border radius value (e.g., '10px', '1em').

### onChange

Callback function that is called when any border radius value changes.

- Type: `Function`
- Required: Yes

The function receives the updated values object as its argument.

## Limitations

The component has the following built-in constraints:

- Minimum border radius value: 0
- Maximum values by unit:
  - px: 100
  - em: 20
  - rem: 20

Please refer to the component's stories for more examples of usage.
