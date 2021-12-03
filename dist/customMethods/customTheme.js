import Blockly from"blockly";/**
 * Tekie Theme
 */var TekieDefaultBlockStyles={colour_blocks:{colourPrimary:"20"},list_blocks:{colourPrimary:"260"},logic_blocks:{colourPrimary:"210"},loop_blocks:{colourPrimary:"120"},math_blocks:{colourPrimary:"230"},procedure_blocks:{colourPrimary:"290"},text_blocks:{colourPrimary:"160"},variable_blocks:{colourPrimary:"330"},variable_dynamic_blocks:{colourPrimary:"310"},hat_blocks:{colourPrimary:"330",hat:"cap"}},categoryStyles={colour_category:{colour:"20"},list_category:{colour:"160"},logic_category:{colour:"210"},loop_category:{colour:"120"},math_category:{colour:"230"},procedure_category:{colour:"290"},text_category:{colour:"160"},variable_category:{colour:"330"},variable_dynamic_category:{colour:"310"}},componentStyles={workspaceBackgroundColour:"#E6F7FD",toolboxBackgroundColour:"#DDDDDD",toolboxForegroundColour:"#222",flyoutBackgroundColour:"#d2effa",flyoutForegroundColour:"#FFF",flyoutOpacity:"1",scrollbarColour:"#00ADE6",scrollbarOpacity:"1",insertionMarkerColour:"",insertionMarkerOpacity:"",markerColour:"",cursorColour:""},fontStyles={family:"Nunito, sans-serif",weight:"normal",size:12},BlocklyThemes={TekiePrimary:{blockStyles:TekieDefaultBlockStyles,// 'categoryStyles': categoryStyles,
componentStyles:componentStyles,fontStyle:fontStyles}};BlocklyThemes&&Object.keys(BlocklyThemes).length&&Object.keys(BlocklyThemes).forEach(function(a){Blockly.Theme[a]||(Blockly.Theme[a]=Blockly.Theme.defineTheme(a,BlocklyThemes[a]))});