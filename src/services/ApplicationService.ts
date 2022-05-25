class ApplicationService {
    private _url = 'https://jsonplaceholder.typicode.com'
    private _maxPosts = 10
    private _basicPostOffset = 0

    private  _getResoureceByUrl = async (url: string) => {
        let resourse = await fetch(url)
        if (!resourse.ok){
            throw new Error(`Could not fetch the url ${url} error status ${resourse.status}`)
        }
        return resourse.json();
    }

    getUsers = async (limit=4, offset=0) => {
        return await this._getResoureceByUrl(`${ this._url }/users?_start=${ offset }&_limit=${ limit }`)
    }
    getUserById = async (id: number) => {
        return await this._getResoureceByUrl(`${ this._url }/users/${ id }`)
    }
    getUserPostsById = async (
        id: number,
        limit=this._maxPosts,
        offset=this._basicPostOffset
    ) => {
        return await this._getResoureceByUrl(`${ this._url }/posts?userId=${ id }&_start=${ offset }&_limit=${ limit }`)
    }
    getPostById = async (id: number) => {
        return await this._getResoureceByUrl(`${ this._url }/posts/${ id }`)
    }
    getCommentsToPostById = async (id: number) => {
        return await this._getResoureceByUrl(`${ this._url }/comments?postId=${ id }`)
    }
    getUserPostNumber = () => {
        return this._maxPosts
    }

    postComment = async (
        id: number, title: string, email: string, text: string
    ) => {
        let resourse = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId: id,
                name: title,
                email: email,
                body: text
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return resourse
    }
}

export default ApplicationService