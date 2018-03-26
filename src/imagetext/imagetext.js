/**
 * BLOCK: Image/Text
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


registerBlockType( 'ccblocks/imagetext', {
	title: 'Image/Text',
	icon: 'shield', 
	category: 'common', 
	attributes: {
		body: {
			type: 'array',
			source: 'children',
			selector: '.ccBody'
		},
    		mediaID: {
    		    type: 'number',
    		},
    		mediaURL: {
    		    type: 'string',
    		    source: 'attribute',
    		    selector: 'img',
    		    attribute: 'src',
    		},
    		alignment: {
    		    type: 'string',
    		}
	},
	
	edit: function( { attributes, className, isSelected, setAttributes } ) {
		const { mediaID, mediaURL, body, alignment, title } = attributes;
		const setBody = value => {
			setAttributes({body: value});
		}
    		const onSelectImage = media => {
    		    setAttributes( {
    		        mediaURL: media.url,
    		        mediaID: media.id,
    		    } );
    		};
		let editClasses = Classnames(alignment, 'flexx');
		return [isSelected && (
	    		<BlockControls key="controls">
            		    <AlignmentToolbar
            		        value={alignment}
            		        onChange={( nextAlign ) => {
            		            setAttributes( { alignment: nextAlign } );
            		        }}
            		    />
            		</BlockControls>
			),
			<div className={ attributes.className }>
			<span className={editClasses}>
				<MediaUpload
                    		    onSelect={onSelectImage}
                    		    type="image"
                    		    value={mediaID}
		        	    render={( { open } ) => (
                        	        <div className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                        	            {!mediaID ? __( 'Upload Image' ) : <img src={mediaURL} />}
                        	        </div>
                        	    )}
                    		/>
				<RichText 
					tagName = "div"
					multiline="p"
					placeholder={'write'}
					className="ccBody"
					onChange={setBody}
					value={body}
				/> 
			</span>
			</div>
		];
	},
	
	save: function( props ) {
		const {
        	    className,
        	    attributes: {
        	        mediaURL,
        	        body,
			alignment
        	    }
        	} = props;
		let saveClasses = Classnames(alignment, 'flexx');
		return (
			<div className={ props.className }>
				<span className={saveClasses}>
                    			<img src={mediaURL} />
					<div className="ccBody">{body}</div>
				</span>
			</div>
		);
	},
} );

