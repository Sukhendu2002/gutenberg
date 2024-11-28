/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import BorderRadiusControl from '../';

/**
 * BorderRadiusControl component allows setting border radius values.
 */
const meta = {
	title: 'BlockEditor/BorderRadiusControl',
	component: BorderRadiusControl,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component: 'Control to display border radius options.',
			},
		},
	},
	argTypes: {
		values: { control: 'object', description: 'Border radius values.' },
		onChange: {
			action: 'onChange',
			description: 'Callback to handle onChange.',
		},
	},
};
export default meta;

const Template = ( initialValues ) => {
	const [ values, setValues ] = useState( initialValues.values );

	return (
		<BorderRadiusControl
			values={ values }
			onChange={ ( newValues ) => {
				setValues( newValues );
				initialValues.onChange( newValues );
			} }
		/>
	);
};

export const Default = Template.bind( {} );
Default.args = {
	values: {
		topLeft: '10px',
		topRight: '10px',
		bottomLeft: '10px',
		bottomRight: '10px',
	},
};

/**
 * This story demonstrates the control with no initial values.
 */
export const NoInitialValues = Template.bind( {} );
NoInitialValues.args = {
	values: {},
};

/**
 * This story demonstrates the control with mixed values.
 */
export const MixedUnits = Template.bind( {} );
MixedUnits.args = {
	values: {
		topLeft: '10px',
		topRight: '1em',
		bottomLeft: '20%',
		bottomRight: '5rem',
	},
};
