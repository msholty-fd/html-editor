import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';

require('froala-editor/js/froala_editor.pkgd.min.js');
require('froala-editor/css/froala_editor.pkgd.min.css');

// Require Editor JS files.
// require("froala-editor/js/froala_editor.pkgd.min.js");
// require("froala-editor/css/froala_editor.pkgd.min.css");

// Require Font Awesome.
// require('font-awesome/css/font-awesome.css');

// Include special components if required.
// var FroalaEditorView = require('react-froala-wysiwyg/FroalaEditorView');
// var FroalaEditorA = require('react-froala-wysiwyg/FroalaEditorA');
// var FroalaEditorButton= require('react-froala-wysiwyg/FroalaEditorButton');
// var FroalaEditorImg = require('react-froala-wysiwyg/FroalaEditorImg');
// var FroalaEditorInput = require('react-froala-wysiwyg/FroalaEditorInput');

export default () => <FroalaEditor tag="textarea" />;
