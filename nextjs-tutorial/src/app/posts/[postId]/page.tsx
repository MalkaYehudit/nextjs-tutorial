import '../../../components/postForm'

interface PostEdit{
    params:{
        postID:string
    }
}

export default function PostView(props:PostEdit){
    return(
        <>
        <h1>HERE YOU CAN WRITE A NEW POST✌️ {props.params.postID}</h1>
        
        </>
    )
}