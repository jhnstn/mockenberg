/**
 * WordPress dependencies
 */
import { symbol as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';

const { name } = metadata;

export { metadata, name };

export const settings = {
	edit,
	icon,
};
