const { bindActionCreators } = require("redux")
//expect updatedValues is js object
export const updateObject = (oldObject, updatedValues) =>{
  return{
    ...oldObject,
    ...updatedValues
  }

}