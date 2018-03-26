/**
 * BLOCK: Gallery
 */

import './style.scss';
import './editor.scss';
import Classnames from 'classnames';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
    registerBlockType,
    RichText,
    Editable,
    MediaUpload,
    BlockControls,
    AlignmentToolbar,
} = wp.blocks;


registerBlockType( 'ccblocks/ccgallery', {
	title: 'CCGallery',
	icon: 'shield', 
	category: 'common', 
	attributes: {
		mages: []
	},
	
	edit: function( { attributes, className, isSelected, setAttributes } ) {
		const { mages } = attributes;
    		const onSelectImage = media => {
    		    setAttributes( {
			    mages: media
    		    } );
    		};
		return (
			<div className={ attributes.className }>
				<MediaUpload
                    		    onSelect={onSelectImage}
                    		    type="image"
				    multiple="true"
		        	    render={( { open } ) => (
					<div onClick={ open }>
						Open Media Library
					</div>
                        	    )}
                    		/>
			</div>
		);
	},
	
	save: function( props ) {
		const {
        	    className,
        	    attributes: {
			    mages
        	    }
        	} = props;
		let mageTags = mages.map(mage=>{
			<img src={mage} />
		});
		return (
			<div className={ props.className }>
			<h1>TEST</h1>
			</div>
		);
	},
} );

