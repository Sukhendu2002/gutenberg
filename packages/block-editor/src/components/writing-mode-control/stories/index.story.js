/**
 * WordPress dependencies
 */
import { isRTL } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import WritingModeControl from '../';

/**
 * WritingModeControl component allows selecting writing mode.
 */
const meta = {
	title: 'BlockEditor/WritingModeControl',
	component: WritingModeControl,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component: 'Control to facilitate writing mode selections.',
			},
		},
	},
	argTypes: {
		value: {
			control: { type: 'select' },
			options: ( () => {
				const modes = [
					'horizontal-tb',
					isRTL() ? 'vertical-lr' : 'vertical-rl',
				];
				return modes;
			} )(),
			description: 'Currently selected writing mode.',
		},
		className: {
			control: 'text',
			description: 'Class name to add to the control.',
		},
		onChange: {
			action: 'onChange',
			description: 'Handles change in the writing mode selection.',
		},
	},
};

export default meta;

export const Default = {
	args: {
		value: 'horizontal-tb',
	},
};

/**
 * This story demonstrates the WritingModeControl component with the vertical writing mode.
 */
export const Vertical = {
	args: {
		value: isRTL() ? 'vertical-lr' : 'vertical-rl',
	},
};
