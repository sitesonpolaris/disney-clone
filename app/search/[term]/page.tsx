import AISuggestion from "@/components/AISuggestion";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from 'react'

type Props = {
    params: {
        term: string;
    };
};

async function SearchPage({params: {term}}: Props) {
    if(!term) notFound();

    const termToUse = decodeURI(term);


    //API Call to get the Searched movies
const movies = await getSearchMovies(termToUse);

//API call to get the Popular movies
const popularMovies = await getPopularMovies();

    
  return (
<div className="max-w-7xl mx-auto">
<div className="flex flex-col space-y-4 mt-32 xl:mt-42">
  <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

{/* AI Suggestion */}
<AISuggestion term={termToUse}/>

<MoviesCarousel title="Movies" movies={movies} isVertical/>
<MoviesCarousel title="You may also like" movies={popularMovies} />
</div>
</div>
  )
}

export default SearchPage