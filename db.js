let db;
let dbOpenRequest=indexedDB.open("Gallery",1);
dbOpenRequest.onupgradeneeded=function(e){
    // alert ("inside on upgrade");
    db=e.target.result;
    db.createObjectStore("Media",{keyPath: "mid"});
};
dbOpenRequest.onsuccess=function(e)
{
    //alert("inside on success");
    db=e.target.result;
}
dbOpenRequest.onerror=function(e){
    alert("inside on error");
}