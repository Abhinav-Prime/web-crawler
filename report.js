function printReport(pages)
{
    console.log("==============");
    console.log("REPORT");
    console.log("==============");
    const sortedPages=sortPages(pages)
    for(const sortPage of sortedPages)
    {
        const url=sortPage[0]
        const hits=sortPage[1]
        console.log(`Found ${hits} links to page: ${url}`);
    }
    console.log("==============");
    console.log("END REPORT");
    console.log("==============");
}

function sortPages(pages)
{
    const PagesArr=Object.entries(pages)
    PagesArr.sort((a,b)=>{
    aHits=a[1]
    bHits=b[1]
    return b[1]-a[1]
    }
    )
    return PagesArr
}


module.exports={sortPages,printReport}