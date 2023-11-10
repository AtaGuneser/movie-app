import React from 'react'
import Movies from '../../components/Movies';

const Page = async ({ params }) => {
    const keyword = params.keyword

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=659ade2f8a4814855b6fb5bc1074aa03&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();
    console.log(data?.results, "data");
    return (
        <div>
            {
                !data?.results ?
                    <div>Nothing Found!</div> :
                    <div className='flex items-center flex-wrap gap-3'>
                        {
                            data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Page