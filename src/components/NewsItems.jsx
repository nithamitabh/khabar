
export const NewsItems = ({title,description,src,url}) => {
  return (
    <div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src= {src?src:"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="} style={{height:"200px",width:"320px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title.slice(0,50)}</h5>
    <p class="card-text">{description?description.slice(0,90):"Description is not currently available for article.Press Read more to go to article."}</p>
    <a href={url} class="btn btn-primary">Read More..</a>
  </div>
</div>
  )
}
