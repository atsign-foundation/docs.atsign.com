// import fetch from 'node-fetch'; // https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
// const fetch = require('node-fetch');

require('isomorphic-fetch');

// https://medium.com/@KonradDaWo/how-to-display-medium-posts-on-a-website-with-plain-vanilla-js-basic-api-usage-example-865507848c2

const main = async () =>  {
    const ATSIGN = '@atsigncompany';
    // const TYLER='@tyler.trott';

    const user = ATSIGN;
    const mediumUrl = `https://medium.com/feed/${user}`;

    const items = await getMediumItems(mediumUrl);
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log(item);
        /**
         * 
         *  `item` is a JavaScript object with fetched article data
         *  item == {
         *    title: 'Flutter Silicon Valley Meetup #2',
         *    pubDate: '2022-06-03 17:39:03',
         *    author: 'Atsign',
         *    thumbnailUrl: 'https://cdn-images-1.medium.com/max/808/1*Co1A04JT4fhx961EIWYBOA.png',
         *    description: 'Hey Everyone! The team at Atsign recently hosted Flutter Silicon Valley’s second meetup! Flutter Silicon
         *                   Valley is an event where the Flutter devel...'
         *  }
         * 
         */
        // const title = item.title;
        // const publishDate = item.pubDate;
        // const author = item.author;
        // const thumbnailUrl = item.thumbnail;
        // const description = item.description;
    }
}
main();

/// Usage:
/// const items = getItems('https://medium.com/feed/@atsigncompany')
///
/// `items` is a list of objects where each object has the following properties: 
/// {title, pubDate, author, thumbnailUrl, description} which represent what is in the article
/// 
async function getMediumItems(mediumUrl) {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`, {});
    const json = await response.json();
    const items = json.items;
    let toReturnItems = [];
    for(let i = 0; i < items.length; i++) {
        const {title, author, thumbnail, pubDate} = items[i];
        const description = getMediumDescription(items[i].description, 150);
        const objToAdd = {title, pubDate, author, thumbnailUrl: thumbnail, description};
        toReturnItems.push(objToAdd);
    }
    console.log(toReturnItems.length);
    return toReturnItems;
}
// write process medium items function

// sort by publish date

function getMediumDescription(longDescription, maxLength) {
    let toReturn = '';
    toReturn = removeTags(longDescription); // remove html tags
    toReturn = toReturn.replace(/(\r\n|\n|\r)/gm, " "); // replace \n with space (https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string)
    toReturn = toReturn.trim(); // remove trailing white space
    toReturn = toReturn.substring(0, maxLength-3) + "..."; // only take portion and replace end with `...`
    return toReturn;
}

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, ''); // (https://stackoverflow.com/a/822464/9854899)
}

module.exports = { getMediumItems };