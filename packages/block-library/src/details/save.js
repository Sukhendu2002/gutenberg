/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {
	const { showContent } = attributes;
	const summary = attributes.summary?.toString().trim()
		? attributes.summary
		: __( 'Details' );
	const blockProps = useBlockProps.save();

	return (
		<details { ...blockProps } open={ showContent }>
			<summary>
				<RichText.Content value={ summary } />
			</summary>
			<InnerBlocks.Content />
		</details>
	);
}
