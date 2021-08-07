import React from 'react'
import Blockly from 'blockly'
import ConfigFiles from './lib/defaultConfig';
import { useBlockly } from './lib';

const demoBlock =  {
    name: 'demoBlock',
    category: 'Blocks',
    block: {
      init: function () {
        this.jsonInit({
          message0: 'Hello %1',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
              check: 'String',
            },
          ],
          output: 'String',
          colour: 160,
          tooltip: 'Says Hello',
        });
      },
    },
    generator: (block) => {
      const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
      const code = `console.log('Hello ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  };
  
const App = () => {
  const editorDiv = React.useRef(null);
  const workspaceConfiguration = {
    readOnly: false,
    // horizontalLayout: true,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#333',
      snap: true
    },
    move:{
      scrollbars: {
        horizontal: true,
        vertical: true
      },
      drag: true,
      wheel: true
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 2,
      minScale: 0.3,
      scaleSpeed: 1.2,
      pinch: true
    },
    trashcan: true,
    renderer: 'zelos'
  }

  const onWorkspaceChange = (e) => {
    console.log(e)

  }

  const [workpace, xml] = useBlockly({
    ref: editorDiv,
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>',
    toolboxConfiguration: ConfigFiles.INITIAL_TOOLBOX_JSON,
    // customTools: [demoBlock],
    workspaceConfiguration,
    onWorkspaceChange,
    onXmlChange: () => {},
    onImportXmlError: () => {},
    onInject: () => {},
    onDispose: () => {},
    customTheme: Blockly.Theme.TekiePrimary,
  });

  return (
    <div className="App">
      <div style={{ width: '100%', height: '100vh' }}>
       <div ref={editorDiv} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}

export default App;