require("isomorphic-fetch");

const MEDIUM_USERNAME = "@atsigncompany";

/// Usage:
/// const items = getMediumItems('https://medium.com/feed/@atsigncompany')
///
/// `items` is a list of objects where each object has the following properties:
/// - title
/// - pubDate
/// - author
/// - thumbnailUrl
/// - description
/// - link
///
async function getMediumItems() {
	const mediumArticlesJson = await loadMediumArticles(MEDIUM_USERNAME);
	return getItems(mediumArticlesJson);
}

async function getHashnodeItems() {
	const hashnodeJson = await loadHashnodeItems();
	return getItems(hashnodeJson);
}

async function getItems(rssXMLJson) {
	let toReturn = [];
	const items = rssXMLJson.items;
	for(let i = 0; i < items.length; i++) {
		const {title, author, thumbnail, pubDate, link} = items[i];
		const description = getDescription(items[i].description);
		const objToAdd = {title, author, thumbnailUrl: thumbnail, pubDate, description, link};
		toReturn.push(objToAdd);
	}
	return toReturn;
}

async function loadMediumArticles(username) {
	const mediumLink = `https://medium.com/feed/${username}`;
	const link = `https://api.rss2json.com/v1/api.json?rss_url=${mediumLink}`;
	const response = await fetch(link, {});
	const json = await response.json();
	return json;
}

async function loadHashnodeItems() {
	const hashnodeUrl = 'https://blog.atsign.dev/rss.xml';
	const link = `https://api.rss2json.com/v1/api.json?rss_url=${hashnodeUrl}`;
	const response = await fetch(link, {});
	const json = await response.json();
	return json;
}

function getDescription(longDescription) {
	let toReturn = "";
	toReturn = removeTags(longDescription); // remove html tags
	toReturn = toReturn.replace(/(\r\n|\n|\r)/gm, " "); // replace \n with space (https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string)
	toReturn = toReturn.trim(); // remove trailing white space
	toReturn = `${toReturn.substring(0, 200-3)}...`; // truncate to 200 characters (TEMPORARY)
	return toReturn;
}

function removeTags(str) {
	if (str === null || str === "") return false;
	else str = str.toString();

	// Regular expression to identify HTML tags in
	// the input string. Replacing the identified
	// HTML tag with a null string.
	return str.replace(/(<([^>]+)>)/gi, ""); // (https://stackoverflow.com/a/822464/9854899)
}

module.exports = { getMediumItems, getHashnodeItems };
