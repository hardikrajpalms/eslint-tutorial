import {createRule} from './utils'
module.exports = {
    rules:{
        "async-func-name":createRule({
            create: function (context){
                return {
                    FunctionDeclaration(node){
                        if(node.async && !/Async$/.test(node.id.name)){
                            const errorFound = true;
                            if(errorFound){
                                context.report({
                                    node:node,//node causing error.
                                    message:"async functions must end in -Async"
                                })
                            }
                        }
                    }
                }
            }
        })
    }
}