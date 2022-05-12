import * as React from 'react'
import { SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { IInputs } from '../generated/ManifestTypes';



export interface MyOptionType  {
  label: string;
  value: string;
};
export interface ReactSelectLookupComponentProps{
    _context: ComponentFramework.Context<IInputs>;
    onChange: (selectedOption?: ComponentFramework.LookupValue[] | undefined) => void;
    selectValue : MyOptionType;
    loadingMessage: string;
    noOptionMessage: string;
  }
  const ReactSelectLookupComponent = (props: ReactSelectLookupComponentProps):JSX.Element => {
    const _context = props._context
    const loadingMessage = props.loadingMessage
    const noOptionMessage = props.noOptionMessage
    const [valorSelect, setValorSelect] = React.useState<MyOptionType>()
    

  
    React.useEffect(()=> {
      setValorSelect( { label : props.selectValue.label, value:props.selectValue.value } )
    }, []);

    const labelFormatter = (i: ComponentFramework.WebApi.Entity): MyOptionType => {
      return {
        label: i[_context.parameters.textValueLookup.raw!] , value: i[_context.parameters.idValueLookup.raw!]
      }
    }
      const loadOptions = async (
        inputText: string
      ): Promise<MyOptionType[]> => {
          return _context.webAPI.retrieveMultipleRecords(_context.parameters.lookupfield.getTargetEntityType(), `?fetchXml=${   _context.parameters.fetchxml.raw?.replace('(filter)', inputText) }`)
            .then((response) => {
                let data: ComponentFramework.WebApi.Entity[] = response.entities
                console.log(data);
                return data.map(result => {
                    return labelFormatter(result)
                })
            })
          };
    const onChangeSelectedOption = (e: SingleValue<MyOptionType>) => {
      let lookupvalue
      if(e != null && e.value.length != 0 ){
        setValorSelect({label: e.label, value:e.value})
        lookupvalue = [{
          id: e.value,
          name: e.label,
          entityType: _context.parameters.lookupfield.getTargetEntityType()
        }]
      }
      else{
        setValorSelect({label: "", value:""})
        lookupvalue = undefined
      }
      props.onChange(lookupvalue);
  };
    if(valorSelect?.label == null){
      return (<></>)
    }
    return (
        <AsyncSelect
        cacheOptions
        styles={{     
          menu: provided => ({ ...provided, zIndex: 9999}),
          menuPortal: provided => ({ ...provided, zIndex: 9999 })
        }}
        menuPortalTarget={document.body}
        menuPosition={'fixed'}
        loadOptions={loadOptions}
        onChange={onChangeSelectedOption}
        value={ valorSelect  }
        loadingMessage = {()=> props.loadingMessage}
        noOptionsMessage = {()=> props.noOptionMessage}
      />
    );
  }
  
  export default ReactSelectLookupComponent
  