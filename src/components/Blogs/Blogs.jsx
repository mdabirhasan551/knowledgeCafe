import React, { useEffect, useState } from 'react';
import Singlecard from '../Singlecard/Singlecard';

const Blogs = () => {

    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setBlogData(data));
      }, []);

    return (
        <div className='row'>
            {
                blogData.map((blog)=>(
                    <Singlecard blogs = {blog}></Singlecard>
                ))
            }
            
        </div>
    );
};

export default Blogs;