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
export default {
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

export const Default = {
	render: function Template( { onChange, ...args } ) {
		const [ values, setValues ] = useState( args.values );

		return (
			<BorderRadiusControl
				values={ values }
				onChange={ ( ...changeArgs ) => {
					setValues( ...changeArgs );
					onChange( ...changeArgs );
				} }
			/>
		);
	},
	args: {
		values: {
			topLeft: '10px',
			topRight: '10px',
			bottomLeft: '10px',
			bottomRight: '10px',
		},
	},
};
