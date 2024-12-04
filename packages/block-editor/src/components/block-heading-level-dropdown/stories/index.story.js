/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import HeadingLevelDropdown from '../';

const meta = {
	title: 'BlockEditor/HeadingLevelDropdown',
	component: HeadingLevelDropdown,
	argTypes: {
		value: {
			control: { type: null },
			description: 'The currently selected heading level.',
		},
		options: {
			control: 'array',
			description:
				'An array of supported heading levels, e.g., [1, 2, 3, 4, 5, 6].',
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description:
				'Callback triggered when a new heading level is selected.',
		},
	},
	decorators: [
		( Story ) => (
			<div style={ { padding: '20px', maxWidth: '300px' } }>
				<Story />
			</div>
		),
	],
};

export default meta;

export const Default = {
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState( args.value );

		return (
			<HeadingLevelDropdown
				{ ...args }
				value={ value }
				onChange={ ( ...changeArgs ) => {
					setValue( ...changeArgs );
					onChange( ...changeArgs );
				} }
			/>
		);
	},
	args: {
		value: 2,
		options: [ 1, 2, 3, 4, 5, 6 ],
	},
};
