/// <reference path="./global.d.ts" />
// @ts-check
/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
 export function cookingStatus(status) {
    if(status === 0){
      return 'Lasagna is done.';
    } 
    if(status === undefined)
    {return 'You forgot to set the timer.';}
      return 'Not done, please wait.';
  }
  export function preparationTime(layers,average = 2){
    return layers.length * average;
  }
  export function quantities (layers){
    let noodles = 0;
    let sauce = 0;
    for (let i = 0; i < layers.length; i++) {
      if(layers[i] === 'noodles'){
         noodles += 50;
      }
      if (layers[i] === 'sauce'){
         sauce += 0.2;
      }
    }
    return { noodles, sauce };
  }
  export function addSecretIngredient(friendsList, myList) {
    const lastindex = friendsList.length - 1;
    myList.push(friendsList[lastindex])
  }
  export function scaleRecipe (recipe,portion){
    const factor = portion / 2;
    const result = {};
    for (const keys in recipe) {
      result[keys] = recipe[keys]*factor;
    }
    return result
  }