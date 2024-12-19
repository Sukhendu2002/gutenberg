# WritingModeControl

WritingModeControl is a React component that renders a UI that allows users to select text orientation (writing mode).
The component provides a toggle group interface that allows users to switch between horizontal and vertical text orientations, with automatic RTL (Right-to-Left) support.

## Usage

```jsx
import { WritingModeControl } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

const MyWritingModeControl = () => {
    const [ writingMode, setWritingMode ] = useState();

    return (
        <WritingModeControl
            value={ writingMode }
            onChange={ ( newWritingMode ) => {
                setWritingMode( newWritingMode );
            } }
        />
    );
};
```

## Props

The component accepts the following props:

### onChange

A function that handles change in the writing mode selection.

- Type: `function`
- Required: Yes

### value

The current writing mode value. Can be one of:
- `'horizontal-tb'` - Horizontal top-to-bottom text
- `'vertical-rl'` - Vertical right-to-left text (for LTR languages)
- `'vertical-lr'` - Vertical left-to-right text (for RTL languages)

- Type: `string`
- Required: No
- Default: `undefined`

### className

Additional class name to add to the control.

- Type: `string`
- Required: No