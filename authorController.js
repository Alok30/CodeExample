  function authorController(Author){

    function post(req,res){
      const author = new Author(req.body);
  
      author.save();
      return res.status(201).json(author);
    }

    function get(req,res) {
      const query = {};
      if(req.query.name){
        query.name = req.query.name;
      }
      Author.find(query,(err,authors)=>{
       if(err){
         return res.send(err);
        }
        return res.json(authors);  
      });   
    }
        return(post, get);
  }
  
  module.exports = authorController;