import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from "../components/RecipeHeader";
import useFetchRecipe from "../hooks/useFetchRecipe";
import Loading from "../components/Loading";
import NutritionInfo from "../components/RecipeNutritionInfo";
import Error from "../components/Error";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;
  if(data?.errors) return <Error message={data.errors} explanation="Nothing is found"/>

  return (
    <div>
      {data && (
        <>
          <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} /> 
          <NutritionInfo instruction={data.instructions} image={data.thumbnail_url}/>
        </> 
      )}
    </div>
  );
}
