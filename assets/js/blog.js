require("isomorphic-fetch");

const MEDIUM_USERNAME = "@atsigncompany";

const HASHNODE_USERNAMES = [
	'wildgreen',
	'CynthiaPeter',
	'cpswan',
	'Bahati365',
]

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
	const items = mediumArticlesJson.items;
	let toReturnItems = [];
	for (let i = 0; i < items.length; i++) {
		const { title, author, thumbnail, pubDate, link } = items[i];
		const description = getDescription(items[i].description);
		const objToAdd = { title, pubDate, author, thumbnailUrl: thumbnail, description, link };
		toReturnItems.push(objToAdd);
	}
	return toReturnItems;
}

async function getHashnodeItems() {
	let toReturn = [];
	for(let i = 0; i < HASHNODE_USERNAMES.length; i++) {
		const username = HASHNODE_USERNAMES[i];
		const result = await loadHashnodeItems(username);
		toReturn.push(...result);
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

async function loadHashnodeItems(username) {
	const slugQuery = `
	query GetArticles {
		user(username: \"${username}\") {
			publication {
				posts {
					slug
				}
			}
		}
	}
	`;
	let toReturn = [];
	const slugResult = await runHashnodeQuery(slugQuery);
	if(slugResult.errors != null || slugResult.data.user.publication == null) {
		// console.log("Error: " + slugResult.errors);
		return toReturn;
	}
	const slugs = slugResult.data.user.publication.posts;
	for(let i = 0; i < slugs.length; i++) {
		const slug = slugs[i].slug;
		const postQuery = `
			query GetArticle {
				post(slug: \"${slug}\", hostname: \"${username}\") {
				  title
				  dateAdded
				  dateUpdated
				  author {
					username
				  }
				  coverImage
				  brief
				  content
				  publication {
					links {
						hashnode
					}
				  }
				}
			}
		`;
		const postResult = await runHashnodeQuery(postQuery);
		if(postResult.errors != null) {
			// console.log("Error: " + slugResult.errors);
			return toReturn;
		}
		const objToAdd = {
			title: postResult.data.post.title,
			pubDate: postResult.data.post.dateAdded,
			author: postResult.data.post.author.username,
			thumbnailUrl: postResult.data.post.coverImage,
			description: getDescription(postResult.data.post.content),
			link: `https://hashnode.com/@${username}`,
		}
		toReturn.push(objToAdd);
	}
	return toReturn;
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

async function runHashnodeQuery(query, variables = {}) {
	const data = await fetch("https://api.hashnode.com/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});
	return data.json();
};

// const main = async () => {
// 	const result1 = await getMediumItems();
// 	const result2 = await getHashnodeItems();
// 	const together = [...result1, ...result2];
// 	console.log(together);
// };

// main();

module.exports = { getMediumItems };
