const {REACT_APP_CONTENTFUL_SPACE_ID, REACT_APP_CONTENTFUL_ACCESS_TOKEN} = process.env
const contentful_link = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE_ID}`

export async function getAllPosts(){
    const query = `
    {
      portfolioPostCollection {
        items{
          postSlug
          postFileCollection {
            items{
              title
              url
            }
          }
        }
      } 
    }
    `

    let data = await window.fetch(contentful_link, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
        },

        body: JSON.stringify({ query })
    })
    .then((response) => response.json())
    .then(({data, errors}) => {
        if(errors){
            console.log(errors)
        }
        return data
    });

    return data;
}

export async function getPostBySlug(slug){
    const query = `
    {
      portfolioPostCollection (where: {postSlug: "${String(slug)}"}){
        items{
          postSlug
          postTitle
          postContent
          postFileCollection {
            items{
              title
              url
            }
          }
        }
      } 
    }
    `

    let data = await window.fetch(contentful_link, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
        },

        body: JSON.stringify({ query })
    })
    .then((response) => response.json())
    .then(({data, errors}) => {
        if(errors){
            console.log(errors)
        }
        return data
    });

    return data;

}