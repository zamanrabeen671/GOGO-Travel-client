import React from 'react';
import debotakhum from '../../../image/debotakhum.jpg'
import amiakhum from '../../../image/amiakhum.jpg';
import balidoor from '../../../image/balidoor.jpeg';
import sikim from '../../../image/sikim.jpg';
import meghaloya from '../../../image/mag.webp'
import nepal from '../../../image/nepal.jpg';
import darj from '../../../image/darj.jpeg';
import maldives from '../../../image/download.jpg'
import './Blogs.css'
import '../BlogPost/ImageGallery'

const blogData = [
    {
        id : 1,
        img : debotakhum,
    },
    {
        id : 2,
        img : amiakhum,
    },{
        id : 3,
        img : balidoor,
    },{
        id : 4,
        img : sikim,
    },{
        id : 5,
        img : meghaloya,
    },{
        id : 6,
        img : nepal,
    },{
        id : 7,
        img : darj,
    },{
        id : 8,
        img : maldives,
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           {/* <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="row mt-5">
                    {
                        blogData.map(blog => <ImageGallery blog={blog} key={blog.title}/>)
                    }
               </div>
           </div> */}
       </section>
    );
};

export default Blogs;