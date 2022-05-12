/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    lookupfield: ComponentFramework.PropertyTypes.LookupProperty;
    fetchxml: ComponentFramework.PropertyTypes.StringProperty;
    idValueLookup: ComponentFramework.PropertyTypes.StringProperty;
    textValueLookup: ComponentFramework.PropertyTypes.StringProperty;
    loadingMessage: ComponentFramework.PropertyTypes.StringProperty;
    noOptionsMessage: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    lookupfield?: ComponentFramework.LookupValue[];
}
