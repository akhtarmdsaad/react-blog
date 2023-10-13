import React from 'react'
import { useParams } from 'react-router-dom';
import './css/blog_detail.css'

const BlogDetail = () => {
    const { id } = useParams();
    // get data from backend
    // const [blog, setBlog] = useState(null);
    // useEffect(() => {
    //   fetch(`http://localhost:8000/api/blog/${id}`)
    //     .then(res => res.json())
    //     .then(data => setBlog(data))
    //     .catch(err => console.log(err))
    // }, [id])
    // if (blog === null) return 'Loading...';
    // const { title, content, author } = blog;
    // return (
    //   <div>
    //     <h2>{title}</h2>
    //     <p>{content}</p>
    //     <p>{author}</p>
    //   </div>
    // )
    
  return (
    <div className='blog_detail'>
        <div>BlogDetail for {id}</div>
        <div className="blog_title">Title Name of the Blog will be written here </div>
        <div className="blog_author">Md Saad Akhtar</div>
        <div className="blog_posting_date">20 Oct 1920</div>
        <p className="blog_data">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae vero quisquam aspernatur ipsum corrupti laborum sit natus officiis. Minima porro libero quia dicta quis perferendis aspernatur aliquid vitae repudiandae labore, corrupti omnis possimus, ut provident incidunt enim illo aliquam suscipit sed dignissimos nostrum tempore recusandae. Perferendis corrupti in aperiam perspiciatis nam sunt cum, hic est libero laudantium dolores similique laboriosam esse architecto reprehenderit tenetur, aspernatur possimus fugit quo! Sint quod totam quia doloremque fugiat commodi nostrum soluta, magni veniam, dolorem placeat nesciunt accusamus earum ipsam architecto cumque, ut iste! Corrupti reprehenderit quo sit ratione quam. Maxime, distinctio maiores! Accusantium possimus mollitia recusandae, distinctio quaerat, tempora maiores reprehenderit non magnam, facilis quidem consectetur! Quibusdam nemo reprehenderit sequi. Id temporibus sunt quisquam beatae maiores veniam enim corrupti pariatur quis distinctio sint veritatis, vel ipsum reprehenderit! Natus odit quo, commodi aperiam nisi et mollitia tempore accusantium non totam temporibus dicta beatae ipsa blanditiis inventore eius quae ad, officiis ea quisquam minima iure debitis. Fuga corrupti sed quos est? Ipsam quisquam eaque dolore repudiandae vel consequuntur ipsa hic cupiditate veniam enim maiores molestiae quibusdam totam aliquam debitis, facilis ut ad dolor obcaecati ex ducimus. Quo odit aliquid nesciunt dolor incidunt ratione inventore laudantium, totam vero quae molestias eius veniam repudiandae facere. Mollitia libero placeat ipsa, eum voluptas, laboriosam rerum quae tenetur nihil, dolores maxime praesentium adipisci sint? Dolores consequatur culpa cupiditate? Reprehenderit nobis, corporis, eos ea dolorum ad iusto facere obcaecati enim expedita maxime! In excepturi optio reiciendis architecto, delectus dolorum rem saepe! Aspernatur obcaecati suscipit iusto at culpa dolor, quas animi sunt nulla, nemo ea voluptatum totam eius sed aliquid expedita distinctio perferendis ad pariatur consequuntur optio repudiandae facilis. Modi dolores facere esse iusto illum vitae vero voluptatibus ad. Autem labore beatae et culpa praesentium alias inventore adipisci deserunt. Quisquam eos explicabo eaque accusantium dolorem perspiciatis velit magnam debitis? Aspernatur et sint, veritatis quos suscipit nobis minus esse ipsam odit, veniam autem perspiciatis ab nesciunt. Natus ipsa necessitatibus nobis quam iure corporis modi? In ea consequatur nesciunt dolores, est laborum adipisci aliquid! Quibusdam adipisci autem consectetur. Consectetur, soluta veniam, reprehenderit ducimus doloremque libero dolorem eos, esse dicta tempora ratione deleniti? Dolorum, enim veritatis. Iusto consectetur sit laboriosam sequi placeat nesciunt velit eveniet quaerat tenetur, repellendus ipsum ipsam maxime facere enim dolore. Facilis mollitia praesentium at sequi necessitatibus cum fuga. Laudantium adipisci doloremque magni optio minus eaque consequuntur? Facilis, reiciendis nulla maiores consequatur sed tenetur quisquam dolorum odio laborum tempore totam maxime provident eum vitae, quas animi corrupti sequi officiis quis? Nihil perferendis, incidunt optio repudiandae maiores nesciunt et minus repellat, magni dicta ea officiis obcaecati distinctio molestias quaerat dolorem vitae voluptates quis architecto beatae amet voluptatem nulla praesentium enim? Exercitationem corrupti vero totam natus aperiam sit omnis libero expedita cupiditate. Quasi veritatis eum assumenda officia explicabo temporibus, optio eos! Distinctio iusto obcaecati nulla architecto ab iste, odio doloremque atque! Nobis fuga incidunt, deserunt ut eius quod corporis id veritatis laudantium blanditiis. Eveniet atque officiis, magni a iusto placeat ducimus distinctio quaerat vel fugiat.</p>
        <div className="blog_author">Written By Md Saad Akhtar</div>
        <div className="blog_posting_date">On 20 Oct 1920</div>
    </div>
  )
}

export default BlogDetail;