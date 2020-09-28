const { select } = wp.data;
const { RichText, BlockControls, AlignmentToolbar,
	InspectorControls, ColorPalette } = wp.blockEditor; 


wp.blocks.registerBlockType('title-block/title-box', { 
    title: 'Page Title',
    icon: 'universal-access-alt',
    category: 'common',
    attributes: {
      content: {
        type: 'text',
        source: 'children',
        selector: 'p'
      },
      alignment: {
        type: 'string',
        default: 'none',
      },
      color: {
        type: 'string',
        default: 'black',
      }

    },
    
edit: function(props) {

    const { attributes: { content, alignment, color } } = props;

    const val = select("core/editor").getEditedPostAttribute( 'title' );

    const onChangeContent = ( newContent ) => {
        props.setAttributes( { content: newContent } );
      };

    const onChangeAlignment = ( newAlignment ) => {
        props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
    };

    const onChangeColor = ( newColor ) => {
        props.setAttributes( { color: newColor === undefined ? 'none' : newColor } );
    };

    return (
          <div>
            {
            <BlockControls>
                <AlignmentToolbar
                    value={ alignment }
                    onChange={ onChangeAlignment }
                />
            </BlockControls>
			      }
            {
              <InspectorControls>
                Text Color
                <ColorPalette 
                  onChange={ onChangeColor }
                />
              </InspectorControls>
				    }
            <RichText
                    style={ { textAlign: alignment,color: color  } }
                    tagName="p"
                    onChange={ onChangeContent(val) }
                    value={ content }
                />
              
          </div>
          )
    },

save: function(props) {
      return (
        <RichText.Content 
        style={ { textAlign: props.attributes.alignment ,color: props.attributes.color} } 
        tagName="p"
        value={ props.attributes.content } />
      )
      
    }
})