import React from 'react'

export default function Question({message, currentClass, hint}) {
    function handleOnClickHint(){
        console.log(hint)
        let regexToFindLink = /<a>[\w\d\/\.]*<\/a>/;
        let foundLink = hint.match(regexToFindLink);
        if (foundLink === null){
            alert(hint);
        } else{
            alert(hint.replace(foundLink, ""));
            regexToFindLink = /[^<a>][\w\d\/\.]*[^<\/a>]/;
            window.open(foundLink.toString().match(regexToFindLink), "", "width=200,height=100");
        }
    }
    return (
    <>
        <div className={currentClass}>
            {message}
        </div>
        <button className="hint" onClick={handleOnClickHint}>
            רמז
        </button>
    </>
    );
}
