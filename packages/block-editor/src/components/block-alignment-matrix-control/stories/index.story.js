/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import BlockAlignmentMatrixControl from '../';

export default {
	title: 'BlockEditor/BlockAlignmentMatrixControl',
	component: BlockAlignmentMatrixControl,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		label: {
			control: 'text',
			defaultValue: 'Change matrix alignment',
			description: 'Label for the control.',
		},
		onChange: {
			action: 'onChange',
			description: 'Function called when the value changes.',
		},
		isDisabled: {
			control: 'boolean',
			defaultValue: false,
			description: 'Whether the control is disabled.',
		},
		value: {
			description: 'The current alignment value.',
		},
	},
};

const Template = ( { onChange, ...args } ) => {
	const [ value, setValue ] = useState( 'center center' );

	return (
		<BlockAlignmentMatrixControl
			{ ...args }
			value={ value }
			onChange={ ( ...changeArgs ) => {
				onChange( ...changeArgs );
				setValue( ...changeArgs );
			} }
		/>
	);
};

export const Default = Template.bind( {} );
Default.args = {
	label: 'Change matrix alignment',
};

export const Disabled = Template.bind( {} );
Disabled.args = {
	label: 'Disabled Alignment Control',
	isDisabled: true,
};
