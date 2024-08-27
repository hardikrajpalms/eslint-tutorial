
module.exports = {
    rules:{
        "async-func-name":{
            create: function (context){
                return {
                    FunctionDeclarationChecker(node){
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
        }
    }
}