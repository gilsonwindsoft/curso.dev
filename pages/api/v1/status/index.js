function status(request, response){
  response.status(200).json({"result": "Olá São José do Rio Preto!"});
}

export default status;