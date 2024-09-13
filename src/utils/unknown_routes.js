const handleUnknownReq = (req,res)=>{

    console.log(`The requested url : ${req.originalUrl} is not found`);

}
module.exports = {
    handleUnknownReq
}