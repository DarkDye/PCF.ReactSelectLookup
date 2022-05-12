# PCF.ReactSelectLookup

# React-Select Lookup PCF Component

The objective of the PCF is to filter by a specific field and with the contains condition without the need to use an asterisk (*)

To use the component follow these steps:
1. Import the managed solution into your environment
2. Configure the component for your lookup form control
   1. Set props
   2. Fetch XML filter lookup: Set the FetchXML with the word "(filter)" to replace the filter
      Example:
      ```
      <fetch>
        <entity name="account">
          <filter type="and">
            <condition attribute="name" operator="like" value="%(filter)%" />
          </filter>
        </entity>
      </fetch>
      ```
   4. Id Value attribute: Key schema name
   5. Text Value Attribute: Text to display on react-select control
4. Enjoy!
![PCF ReactSelectLookup Example](https://user-images.githubusercontent.com/18213577/168109408-3ab25cd8-2899-4a0e-8d66-fa8935e05c8b.gif)

