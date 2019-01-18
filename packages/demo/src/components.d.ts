/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'stencil-form';
import '@stencil/router';
import '@stencil/state-tunnel';


export namespace Components {

  interface ExampleBasic {}
  interface ExampleBasicAttributes extends StencilHTMLAttributes {}

  interface ExampleDebug {
    'display': string[];
    'state': any;
  }
  interface ExampleDebugAttributes extends StencilHTMLAttributes {
    'display'?: string[];
    'state'?: any;
  }

  interface DemoGroups {}
  interface DemoGroupsAttributes extends StencilHTMLAttributes {}

  interface ExampleInputGroups {}
  interface ExampleInputGroupsAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface ExampleValidation {}
  interface ExampleValidationAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'ExampleBasic': Components.ExampleBasic;
    'ExampleDebug': Components.ExampleDebug;
    'DemoGroups': Components.DemoGroups;
    'ExampleInputGroups': Components.ExampleInputGroups;
    'AppRoot': Components.AppRoot;
    'ExampleValidation': Components.ExampleValidation;
  }

  interface StencilIntrinsicElements {
    'example-basic': Components.ExampleBasicAttributes;
    'example-debug': Components.ExampleDebugAttributes;
    'demo-groups': Components.DemoGroupsAttributes;
    'example-input-groups': Components.ExampleInputGroupsAttributes;
    'app-root': Components.AppRootAttributes;
    'example-validation': Components.ExampleValidationAttributes;
  }


  interface HTMLExampleBasicElement extends Components.ExampleBasic, HTMLStencilElement {}
  var HTMLExampleBasicElement: {
    prototype: HTMLExampleBasicElement;
    new (): HTMLExampleBasicElement;
  };

  interface HTMLExampleDebugElement extends Components.ExampleDebug, HTMLStencilElement {}
  var HTMLExampleDebugElement: {
    prototype: HTMLExampleDebugElement;
    new (): HTMLExampleDebugElement;
  };

  interface HTMLDemoGroupsElement extends Components.DemoGroups, HTMLStencilElement {}
  var HTMLDemoGroupsElement: {
    prototype: HTMLDemoGroupsElement;
    new (): HTMLDemoGroupsElement;
  };

  interface HTMLExampleInputGroupsElement extends Components.ExampleInputGroups, HTMLStencilElement {}
  var HTMLExampleInputGroupsElement: {
    prototype: HTMLExampleInputGroupsElement;
    new (): HTMLExampleInputGroupsElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLExampleValidationElement extends Components.ExampleValidation, HTMLStencilElement {}
  var HTMLExampleValidationElement: {
    prototype: HTMLExampleValidationElement;
    new (): HTMLExampleValidationElement;
  };

  interface HTMLElementTagNameMap {
    'example-basic': HTMLExampleBasicElement
    'example-debug': HTMLExampleDebugElement
    'demo-groups': HTMLDemoGroupsElement
    'example-input-groups': HTMLExampleInputGroupsElement
    'app-root': HTMLAppRootElement
    'example-validation': HTMLExampleValidationElement
  }

  interface ElementTagNameMap {
    'example-basic': HTMLExampleBasicElement;
    'example-debug': HTMLExampleDebugElement;
    'demo-groups': HTMLDemoGroupsElement;
    'example-input-groups': HTMLExampleInputGroupsElement;
    'app-root': HTMLAppRootElement;
    'example-validation': HTMLExampleValidationElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
