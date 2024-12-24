/**
 * WordPress dependencies
 */
import { link as icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import initBlock from '../utils/init-block';
import metadata from './block.json';
import edit from './edit';

const { name } = metadata;
export { metadata, name };

export const settings = {
	icon,
	example: {
		attributes: {
			content: __( 'Read more' ),
		},
	},
	edit,
};

export const init = () => initBlock( { name, metadata, settings } );
