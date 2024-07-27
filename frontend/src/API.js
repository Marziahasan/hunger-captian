import axios from "axios";
var baseURL="https://hunger-captain-backend-o5qw.onrender.com/"


const api=axios.create(
    {
        baseURL: baseURL,
        headers:{
            "Content-Type": "application/json"
        }
    }
)

export default class API{
   // Items ///
   getItems = async(category)=>{
    let url="/items"
    if (category){
        url += "?category="+category
    }
    const items= await api.get(url).then((response)=>{
        return response.data   
    })
    .catch((error)=>{
        throw new Error(error)
    })
    return items
   }

   // Review//
   getReviews = async(item_id)=>{
    let url="/reviews?item_id="+item_id
    const reviews= await api.get(url).then((reponse)=>{
        return reponse.data
    })
    .catch((error)=>{
        throw new Error(error)
    })
    return reviews
   }
   writeReview=async(item_id,name,body,like_count)=>{
    const formData=new FormData()
    formData.append('item',item_id)
    formData.append('name',name)
    formData.append('body',body)
    formData.append('like_count',like_count)
    const savedReview= await api.post('/reviews/add',formData).then((reponse)=>{
        return reponse.data
    })
    .catch((error)=>{
        throw new Error(error)
    })
    return savedReview
   }
}