# LEARN0001-ComponentLibrary
Component library for web apps for javascript group 

## Form component
The form component works with the input component to create a selection of inputs based on user requirements.
The component accepts a layout variable.
```
<Form layout={layout} />
```
The layout variable should be an array of objects describing the desired layout.
Each object in the array should be as follows:
```javascript
{                       
  title: "",
  type:  "",
  validate: () => {},
  validationErrorMessage: "",
  payload:  ""  
},
```
* **title**                     - title of input (e.g. 'Name', 'Date of Birth')
* **type**                      - type of input (e.g. 'text', 'date')
* **validate**                  - a function to check whether what has been inputted is valid
* **validationErrorMessage**    - a message that will appear if what has been inputted is invalid
* **payload**                   - an empty string that will store the data that has been inputted

## Inspector component
The Inspector is a stateless component that displays a object as a neat list.
```javascript
<Inspector
    content={object}
    />
```   

* content: An object with the information the inspector should displays
