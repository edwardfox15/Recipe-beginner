import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from "../components/RecipeHeader";
import useFetchRecipe from "../hooks/useFetchRecipe";
import Loading from "../components/Loading";
import NutritionInfo from "../components/RecipeNutritionInfo";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  console.log(data);
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
