/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import HeadingLevelDropdown from '../';

export default {
	title: 'BlockEditor/HeadingLevelDropdown',
	component: HeadingLevelDropdown,
	argTypes: {
		value: {
			control: { type: 'number', min: 0, max: 6, step: 1 },
			description: 'The currently selected heading level.',
		},
		options: {
			control: 'array',
			description:
				'An array of supported heading levels, e.g., [1, 2, 3, 4, 5, 6].',
		},
		onChange: {
			action: 'onChange',
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

const Template = ( args ) => {
	const [ value, setValue ] = useState( args.value );

	return (
		<HeadingLevelDropdown
			{ ...args }
			value={ value }
			onChange={ ( newLevel ) => {
				setValue( newLevel );
				args.onChange( newLevel );
			} }
		/>
	);
};

export const Default = Template.bind( {} );
Default.args = {
	value: 2,
	options: [ 1, 2, 3, 4, 5, 6 ],
};

export const WithParagraphOption = Template.bind( {} );
WithParagraphOption.args = {
	value: 0,
	options: [ 0, 1, 2, 3, 4 ],
};

export const LimitedOptions = Template.bind( {} );
LimitedOptions.args = {
	value: 3,
	options: [ 2, 3, 4 ],
};

export const StartingAsParagraph = Template.bind( {} );
StartingAsParagraph.args = {
	value: 0,
	options: [ 0, 1, 2, 3 ],
};

export const InteractiveDropdown = () => {
	const [ selectedLevel, setSelectedLevel ] = useState( 2 );

	return (
		<div>
			<p>
				Selected Level:{ ' ' }
				{ selectedLevel === 0 ? 'Paragraph' : `H${ selectedLevel }` }
			</p>
			<HeadingLevelDropdown
				value={ selectedLevel }
				options={ [ 0, 1, 2, 3, 4, 5, 6 ] }
				onChange={ ( newLevel ) => setSelectedLevel( newLevel ) }
			/>
		</div>
	);
};
