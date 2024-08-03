function normalizeUrl(urlString)
{
    const urlObject=new URL(urlString)
    const hostPath=`${urlObject.hostname}${urlObject.pathname}` //returning only the hostname and pathname 
   if(hostPath.length>0 && hostPath.slice(-1)==='/'){
    return hostPath.slice(0,-1)        //slicing the '/' from the url 
   }
   return hostPath
}
module.exports={normalizeUrl}