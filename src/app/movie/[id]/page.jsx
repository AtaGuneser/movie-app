import React from 'react'
import Image from 'next/image'


const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=659ade2f8a4814855b6fb5bc1074aa03`)
    return await res.json()
}

const Page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id)
    return (
        <div className='relative p-7 min-h-screen '>
            <Image style={{objectFit: 'cover'}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />
            <div className='absolute'>
                <div className='text-4xl font-bold my-3'>
                    {movieDetail?.title}
                </div>
                <div className='w-1/2 text-justify'>
                    {movieDetail?.overview}
                </div>
                <div className='my-3'> {movieDetail?.release_date} - {movieDetail?.vote_average}</div>
                <div className='my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black duration-500'>Trail</div>
            </div>
        </div>
    )
}

export default Page