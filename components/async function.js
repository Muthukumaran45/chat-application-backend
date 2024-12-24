async function (request, response){
    try{

    } catch (error) {
        console.log("",error)
    }
}



async function (request, response){
    try{

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
          })
    }
}